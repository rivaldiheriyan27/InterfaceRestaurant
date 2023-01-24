import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {foodProduct} from "../../api/foodPackage"

const sliceName = 'foodsMenu';

export const foodsMenu = createAsyncThunk(`${sliceName}/foodProduct`,
    async(arg, thunkAPI) => {
        try{
            const response = await foodProduct()
            console.log(response)
            return thunkAPI.fulfillWithValue(response.data)
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data) 
        }
    }
)

const initialState = {
    foodsPackage: [],
    isLoading: false,
    isError: '',
}

const foodSlice = createSlice({
    name : "foodMenu",
    initialState,
    reducers:{
        resetState: () => {
            return initialState
        },
    },
    extraReducers: {
        [foodsMenu.pending]: state => {
          state.isLoading = true
        },
        [foodsMenu.fulfilled]: (state, action) => {
          state.isLoading = false
          state.foodsPackage = action.payload
        },
        [foodsMenu.rejected]: (state, action) => {
          state.isLoading = false
          state.foodsPackage = []
          state.isError = action.error.message
        },
      },
})

export const { resetState } = foodSlice.actions
export default foodSlice.reducer