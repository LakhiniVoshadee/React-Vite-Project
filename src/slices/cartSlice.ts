import type {CartItem} from "../model/CartItem.ts";
import {createSlice} from "@reduxjs/toolkit";
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
        addItemToCart(state: CartState, action: ReturnType<ProductData>) {

            const existingItem = state.items.find((item) => item.product.id === action.payload.id) // Find the item in the cart with the same ID
            if (!existingItem) { // If the item doesn't exist, add it to the cart
                state.items.push({product: action.payload, itemCount: 1}); // Add the item to the cart with a count of 1
            }
        }

    }
});

export const {addItemToCart} = cartSlice.actions;

export default cartSlice.reducer;