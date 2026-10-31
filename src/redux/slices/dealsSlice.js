import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cheapSharkApi from '../../api/cheapSharkApi';

export const fetchDeals = createAsyncThunk(
  'deals/fetchDeals',
  async ({ title = '', upperPrice = 50 } = {}, { rejectWithValue }) => {
    try {
      const params = {
        pageSize: 24,
        upperPrice,
      };
      if (title.trim() !== '') {
        params.title = title.trim();
      }
      const response = await cheapSharkApi.get('/deals', { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Error al cargar las ofertas'
      );
    }
  }
);

export const fetchGameDetails = createAsyncThunk(
  'deals/fetchGameDetails',
  async (gameId, { rejectWithValue }) => {
    try {
      const response = await cheapSharkApi.get('/games', {
        params: { id: gameId },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Error al cargar los detalles del juego'
      );
    }
  }
);

const initialState = {
  items: [],
  selectedGame: null,
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  filters: {
    searchQuery: '',
    maxPrice: 50,
  },
};

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.filters.searchQuery = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filters.maxPrice = Number(action.payload);
    },
    clearSelectedGame: (state) => {
      state.selectedGame = null;
      state.detailStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })


      .addCase(fetchGameDetails.pending, (state) => {
        state.detailStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.selectedGame = action.payload;
      })
      .addCase(fetchGameDetails.rejected, (state, action) => {
        state.detailStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setSearchQuery, setMaxPrice, clearSelectedGame } = dealsSlice.actions;
export default dealsSlice.reducer;