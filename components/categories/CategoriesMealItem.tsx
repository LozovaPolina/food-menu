import React, {useEffect, useState} from 'react';
import {CategoryItem} from "@/data/Meals";
import Image from "next/image";
import  bradImg from '../../assets/bread(1).png'
import  plusImg from '../../assets/plus.svg'
import  tickImg from '../../assets/Check.svg'
import {currencyFormatter} from "@/helpers/fromatter";
import {useCartDispatch} from "@/redux/hooks";
import {addToCart} from "@/redux/reducer/cartSlice";
import CartCircle from "@/components/cart/CartCircle";
import {useTranslations} from "next-intl";



function CategoriesMealItem({ item }: { item: CategoryItem }) {
	const [visible, setVisible] = useState(false);
	const dispatch = useCartDispatch();
	const { price, name, image } = item;
	const t = useTranslations('MenuPage');
	const [firstRender, setFirstRender] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const [isClicked, setIsClicked] = useState(false);

	function onClick() {
		dispatch(addToCart({ price, name, image }));
		setIsClicked(true);
	}

	useEffect(() => {
		const timeout = setTimeout(() => setIsClicked(false), 800);
		return () => clearTimeout(timeout);
	}, [isClicked]);

	useEffect(() => {
		setFirstRender(false);
	}, []);

	return (
		<div
			className={`p-2 rounded-2xl bg-card-bg flex flex-col gap-4 flex-grow flex-shrink min-w-[140px] max-w-[45%] sm:max-w-[30%] md:max-w-[22%]
        transition-opacity transition-transform duration-700 ease-in-out
        ${visible ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-2 invisible pointer-events-none'}
      `}
		>
			<Image src={bradImg} alt="bread" className="rounded-2xl object-fill"/>
			<div className="px-4 flex flex-col gap-2">
				<h3 className="text-main-text text-lg sm:text-xl">{t(`items.${item.name}`)}</h3>
				<div className="px-2 flex justify-between items-center">
					<p className="text-price-tag text-[1rem] sm:text-lg">{currencyFormatter.format(item.price)}</p>
					<button
						onClick={onClick}
						className="bg-accent rounded-full flex justify-center items-center hover:opacity-90 w-8 h-8"
					>
						{!isClicked && <Image src={plusImg} alt="plus"/>}
						{isClicked && <Image src={tickImg} alt="tick"/>}
					</button>
				</div>
			</div>
		</div>
	);
}

export default CategoriesMealItem;