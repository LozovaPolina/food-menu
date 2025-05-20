import React from 'react';
import {CartItemType} from "@/redux/reducer/cartSlice";
import foodImg from '../../assets/bread.png'
import Image from "next/image";
import {currencyFormatter} from "@/helpers/fromatter";
import CartCircle from "@/components/cart/CartCircle";
import CartControlBlock from "@/components/cart/CartControlBlock";
function CartItem({item}:{item:CartItemType}) {
	return (
		<div className={'flex gap-4 p-2 bg-border rounded-2xl  '}>
				<Image src={foodImg} alt={'meal'} className={'rounded-2xl w-16'}/>


			<div className="flex flex-col gap-4">

				<h3 className={'text-main-text text-xl'}>{item.name}</h3>
				<div className="flex items-center gap-4">

					<p className={'mr-5 text-lg text-price-tag'}> {currencyFormatter.format(item.price)}</p>
					<CartControlBlock item={item}/>
				</div>

			</div>
		</div>
	);
}

export default CartItem;