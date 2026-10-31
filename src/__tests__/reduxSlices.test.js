import { setupStore } from '../redux/store';
import {
  addToWishlist,
  removeFromWishlist,
  updateBudgetLimit,
  clearWishlist,
} from '../redux/slices/wishlistSlice';
import {
  fetchDeals,
  setSearchQuery,
  setMaxPrice,
} from '../redux/slices/dealsSlice';
import cheapSharkApi from '../api/cheapSharkApi';

jest.mock('../api/cheapSharkApi', () => ({
  get: jest.fn(),
}));

describe('Redux Toolkit: wishlistSlice y dealsSlice', () => {
  const sampleDeal = {
    dealID: 'deal_1',
    gameID: '101',
    title: 'Halo Infinite',
    salePrice: '19.99',
    normalPrice: '59.99',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('wishlistSlice: debe agregar, evitar duplicados, actualizar presupuesto y eliminar juegos', () => {
    const store = setupStore();

    store.dispatch(addToWishlist(sampleDeal));
    store.dispatch(addToWishlist(sampleDeal));
    expect(store.getState().wishlist.items).toHaveLength(1);

    store.dispatch(updateBudgetLimit(100));
    expect(store.getState().wishlist.budgetLimit).toBe(100);

    store.dispatch(removeFromWishlist('101'));
    expect(store.getState().wishlist.items).toHaveLength(0);

    store.dispatch(addToWishlist(sampleDeal));
    store.dispatch(clearWishlist());
    expect(store.getState().wishlist.items).toEqual([]);
  });

  test('dealsSlice: debe actualizar filtros síncronos y manejar fetchDeals exitoso con Axios', async () => {
    const mockApiResponse = [sampleDeal];
    cheapSharkApi.get.mockResolvedValueOnce({ data: mockApiResponse });

    const store = setupStore();

    store.dispatch(setSearchQuery('Halo'));
    store.dispatch(setMaxPrice(25));
    expect(store.getState().deals.filters).toEqual({
      searchQuery: 'Halo',
      maxPrice: 25,
    });

    await store.dispatch(fetchDeals({ title: 'Halo', upperPrice: 25 }));

    const dealsState = store.getState().deals;
    expect(cheapSharkApi.get).toHaveBeenCalledWith('/deals', {
      params: { pageSize: 24, upperPrice: 25, title: 'Halo' },
    });
    expect(dealsState.status).toBe('succeeded');
    expect(dealsState.items).toEqual(mockApiResponse);
  });
});