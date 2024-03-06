import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slice/CartSlice";

const Store = configureStore({
    reducer:{
        cart:cartSlice
    },
})

export default Store