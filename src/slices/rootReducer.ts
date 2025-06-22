import {combineReducers} from "redux";
import productReducer from "./productSlice.ts";
import cartReducer from "./cartSlice.ts";

export const rootReducer = combineReducers(
    {
        products: productReducer,// Include the product reducer states here
        cart: cartReducer

    }
);

export type RootReducerState = ReturnType<typeof rootReducer>;