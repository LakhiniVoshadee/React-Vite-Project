import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface ProductState {
    list: [],
    error: string | null | undefined
}

const initialState: ProductState = {
    list: [],
    error: null
}

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async () => {
        const response = await fetch('./product-data.json');
        return await response.json();
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, () => {
            alert("Products are still loading");
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.list = action.payload; // Set the product list with fetched data

        }).addCase(getAllProducts.rejected, (state, action) => {
            state.error = action.error.message;
            alert("Error loading" + state.error)

        })
    }


});

export default productSlice.reducer; // Export the reducer to be used in the store