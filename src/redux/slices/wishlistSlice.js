import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    budgetLimit: 30,
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const deal = action.payload;
            const exists = state.items.some((item) => item.gameID === deal.gameID);
            if (!exists) {
                state.items.push(deal);
            }
        },
        removeFromWishlist: (state, action) => {
            const gameId = action.payload;
            state.items = state.items.filter((item) => item.gameID !== gameId);
        },
        updateBudgetLimit: (state, action) => {
            const newLimit = Number(action.payload);
            if (newLimit >= 0) {
                state.budgetLimit = newLimit;
            }
        },
        clearWishlist: (state) => {
            state.items = [];
        },
    },
});

export const {
    addToWishlist,
    removeFromWishlist,
    updateBudgetLimit,
    clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;