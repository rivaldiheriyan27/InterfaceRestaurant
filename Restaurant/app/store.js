import { configureStore } from '@reduxjs/toolkit'
import foodScreenReducer from "../screens/FoodList/slice"

export const store = configureStore({
    reducer:{
        foodsPackage: foodScreenReducer
    }
})