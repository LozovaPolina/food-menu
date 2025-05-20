import React, {useEffect, useState} from 'react';
import {CategoryItem} from "@/data/Meals";
import Image from "next/image";
import  bradImg from '../../assets/bread(1).png'
import  plusImg from '../../assets/plus.svg'
import {currencyFormatter} from "@/helpers/fromatter";


function CategoriesMealItem({item}:{item: CategoryItem}) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setVisible(true), 10);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div
			className={` p-2 rounded-2xl bg-card-bg flex flex-col gap-4 flex-grow flex-shrink min-w-[140px] max-w-[45%] sm:max-w-[30%] md:max-w-[22%] transition-opacity transition-transform duration-300 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}

		>
			<Image src={bradImg} alt="bread" className="rounded-2xl object-fill"/>
			<div className="px-4 flex flex-col gap-2">
				<h3 className="text-main-text text-lg sm:text-xl">{item.name}</h3>
				<div className="px-2 flex justify-between items-center">
					<p className="text-price-tag text-[1rem] sm:text-lg">{currencyFormatter.format(item.price)}</p>
					<button className={'bg-accent rounded-full flex justify-center items-center hover:opacity-90 w-8 h-8'}><Image src={plusImg} alt="plus"/> </button>
				</div>
			</div>
		</div>
	);
}


export default CategoriesMealItem;