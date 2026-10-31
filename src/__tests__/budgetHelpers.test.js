import { calculateWishlistMetrics } from '../utils/budgetHelpers';

describe('Función calculateWishlistMetrics', () => {
  const mockGames = [
    { gameID: '1', title: 'Cyberpunk 2077', salePrice: '29.99', normalPrice: '59.99' },
    { gameID: '2', title: 'The Witcher 3', salePrice: '9.99', normalPrice: '39.99' },
  ];

  test('debe devolver ceros cuando la wishlist está vacía', () => {
    const result = calculateWishlistMetrics([], 50);

    expect(result).toEqual({
      totalSpent: 0,
      totalSavings: 0,
      remainingBudget: 50,
      isOverBudget: false,
    });
  });

  test('debe sumar correctamente el gasto total, el ahorro y el presupuesto restante', () => {
    const result = calculateWishlistMetrics(mockGames, 50);

    expect(result.totalSpent).toBe(39.98);
    expect(result.totalSavings).toBe(60);
    expect(result.remainingBudget).toBe(10.02);
    expect(result.isOverBudget).toBe(false);
  });

  test('debe detectar cuando el usuario excede el presupuesto (isOverBudget = true)', () => {
    const result = calculateWishlistMetrics(mockGames, 25);

    expect(result.totalSpent).toBe(39.98);
    expect(result.remainingBudget).toBe(-14.98);
    expect(result.isOverBudget).toBe(true);
  });
});