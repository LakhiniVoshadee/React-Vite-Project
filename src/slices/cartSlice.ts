import type {CartItem} from "../model/CartItem.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state: CartState, action: PayloadAction<ProductData>) {

            const existingItem = state.items.find((item) => item.product.id === action.payload.id) // Find the item in the cart with the same ID
            if (!existingItem) { // If the item doesn't exist, add it to the cart
                state.items.push({product: action.payload, itemCount: 1}); // Add the item to the cart with a count of 1
            }
        },

        increaseQuantity(state: CartState, action: PayloadAction<number>) { // Increase the quantity of an item

            const item = state.items.find((existingItem) => existingItem.product.id === action.payload);
            if (item) {
                item.itemCount += 1; // Increase the item count
            }
        },
        decreaseQuantity(state: CartState, action: PayloadAction<number>) {  // Decrease the quantity of an item
            const item = state.items.find((existingItem) => existingItem.product.id === action.payload);
            if (item && item.itemCount > 1) { // Check if the item count is greater than 1
                item.itemCount -= 1;

            }
        }
    }
});


export const {addItemToCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;