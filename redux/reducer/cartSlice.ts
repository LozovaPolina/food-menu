// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {CategoryItem, itemsByCategoryArray, ItemsByCategoryArrayProps} from "@/data/Meals";
import {RootState} from "@/redux/store/store";


type CartState = {
	items: ItemsByCategoryArrayProps;
	category: string;
	categoryItems:CategoryItem[]
}

const initialState:CartState = {
	items: itemsByCategoryArray,
	category: 'all',
	categoryItems: itemsByCategoryArray.flatMap(categoryObj => categoryObj.items),
}
const menuSlice= createSlice({
	name: 'cart',
	initialState,
	reducers: {
		showCategoryItems(state, action: PayloadAction<string>) {
			const category = action.payload;
			if (category === "all") {
				state.categoryItems = state.items.flatMap(categoryObj => categoryObj.items);
			} else {

				const categoryObj = state.items.find(item => item.category === category);
				state.categoryItems = categoryObj ? categoryObj.items : [];
			}
		},


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
export const selectCartItems = ((state:RootState) => state.menu.categoryItems);
export const { showCategoryItems } = menuSlice.actions;
export default menuSlice.reducer;
