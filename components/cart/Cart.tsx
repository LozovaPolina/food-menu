"use client"

import React from 'react';
import {useCartSelector} from "@/redux/hooks";
import {selectCartItems, selectIsCartOpen, showOrHideCart} from "@/redux/reducer/cartSlice";
import CartItem from "@/components/cart/CartItem";
import {useDispatch} from "react-redux";
import CartControlBlock from "@/components/cart/CartControlBlock";

function Cart() {
	const dispatch = useDispatch()
	const isCartOpen = useCartSelector(selectIsCartOpen)
	const cartItems = useCartSelector(selectCartItems);
	console.log(isCartOpen)
	return (
		<section
			className={`w-full rounded-t-2xl h-[70%] fixed bottom-0 pt-16  px-6  z-50  bg-card-bg  transition-all duration-300 
    ${isCartOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'}
  `}
		>
			<div className="h-[300px]  flex flex-col gap-2  overflow-y-auto custom-scroll">
				{cartItems.map((item, idx) => (
					<CartItem key={idx} item={item}/>
				))}
			</div>
			 	<div className="p-2 absolute right-2.5 top-2.5" onClick={() => dispatch(showOrHideCart(false))}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
					     stroke="currentColor" className="w-11 ">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
					</svg>
				</div>

		</section>


	);
}

export default Cart;