"use client"

import React from 'react';
import {useSelector} from "react-redux";
import {selectCartItems} from "@/redux/reducer/cartSlice";
import CategoriesMealItem from "@/components/categories/CategoriesMealItem";

function CategoriesMeal() {
	const items = useSelector(selectCartItems)
	return (
		<section className={'flex flex-wrap gap-4'}>{items.map(item=> <CategoriesMealItem item={item}/>)}</section>
	);
}

export default CategoriesMeal;