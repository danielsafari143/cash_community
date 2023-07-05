import { configureStore } from "@reduxjs/toolkit";
import accountRaducer from '../reduxSlice/signupSlice' 

const store = configureStore({
    reducer:{accountRaducer}
});

export default store;