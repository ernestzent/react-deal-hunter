import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dealsReducer from './slices/dealsSlice';
import wishlistReducer from './slices/wishlistSlice';


const rootReducer = combineReducers({
    deals: dealsReducer,
    wishlist: wishlistReducer,
});

export const setupStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

export const store = setupStore();