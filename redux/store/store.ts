import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@/redux/reducer/cartSlice";


export const store = configureStore({
	reducer: {menu:  menuReducer }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;