// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {CategoryItem, itemsByCategoryArray, ItemsByCategoryArrayProps} from "@/data/Meals";
import {RootState} from "@/redux/store/store";

export type CartItemType = { name:string , price: number, image:string, quantity: number }
type CartState = {
	items: ItemsByCategoryArrayProps;
	category: string;
	categoryItems:CategoryItem[];
	isCartOpen: boolean;
	cart: CartItemType[]
}

const initialState:CartState = {
	items: itemsByCategoryArray,
	category: 'all',
	categoryItems: itemsByCategoryArray.flatMap(categoryObj => categoryObj.items),
	isCartOpen:false,
	cart:[]
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
		showOrHideCart(state, action: PayloadAction<boolean>){
			state.isCartOpen = action.payload
		},
		addToCart(
			state,
			action: PayloadAction<{ name: string; price: number; image: string }>
		): void {
			const { name, price, image } = action.payload;
			const itemIndex = state.cart.findIndex(item => item.name === name);

			if (itemIndex >= 0) {
				state.cart[itemIndex].quantity++;
			} else {
				state.cart.push({ name, price, image, quantity: 1 });
			}
		},

		removeFromCart(
			state,
			action: PayloadAction<{ name: string }>
		): void {
			const itemIndex = state.cart.findIndex(item => item.name === action.payload.name);

			if (itemIndex >= 0) {
				const item = state.cart[itemIndex];
				if (item.quantity === 1) {
					state.cart.splice(itemIndex, 1);
				} else {
					item.quantity--;
				}
			}
		},
}})
export const selectCategoryItems = ((state:RootState) => state.menu.categoryItems);
export const selectIsCartOpen = ((state:RootState) => state.menu.isCartOpen);
export const selectCartItems = ((state:RootState) => state.menu.cart);
export const { showCategoryItems,addToCart, showOrHideCart,removeFromCart } = menuSlice.actions;
export default menuSlice.reducer;
