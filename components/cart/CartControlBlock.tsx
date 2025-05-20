import React from 'react';
import CartCircle from "@/components/cart/CartCircle";
import {useCartDispatch} from "@/redux/hooks";
import {addToCart, CartItemType, removeFromCart} from "@/redux/reducer/cartSlice";

function CartControlBlock({item}:{item:CartItemType}) {
	const dispatch = useCartDispatch()
	function removeCartItemHandler() {
		dispatch(removeFromCart({name:item.name}))
	}
	function addCartItemHandler() {
		dispatch(addToCart({name:item.name,price:item.price,image: item.image}))
	}
	return (
			<>
				<CartCircle onClick={removeCartItemHandler}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" className="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
					</svg>

				</CartCircle> <span className={'text-main-text '}>{item.quantity}</span>
				<CartCircle onClick={addCartItemHandler}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
				</CartCircle>
			</>
	);
}

export default CartControlBlock;