// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};
type CartState = {
	items: CartItem[];
}

const initialState:CartState = {
	items: [],
}
const cartSlice= createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<{ id: string; title: string, price: number }>): void {

			const { id, title, price } = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === id);

			if (itemIndex >= 0) {
				state.items[itemIndex].quantity++;
			} else {
				state.items.push({ id, title, price, quantity: 1 });
			}

		},
		removeFromCart(state, action: PayloadAction<{ id: string; }>): void {
			const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

			const item = state.items[itemIndex];

			if (item.quantity === 1) {
				state.items.splice(itemIndex, 1);
			} else {
				item.quantity--;
			}
		},
	},
})
export const selectCartItems = ((state:CartState) => state.items);
export default cartSlice.reducer;