"use client"
import React, {useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useDispatch} from "react-redux";
import {showCategoryItems} from "@/redux/reducer/cartSlice";
function CategoriesMenuItem({text, link}:{text: string; link: string;}) {
	const path = usePathname();
	const dispatch = useDispatch();
	function onClickHandler() {
		dispatch(showCategoryItems(link));
	}
	 const isPathContains = path.includes(link.toLowerCase());
	useEffect(() => {
		dispatch(showCategoryItems(link));
	}, []);
	 console.log(link,path,isPathContains)
	return (
		<Link href={'/menu/' +  link} onClick={onClickHandler} className={`select-none max-w-36 rounded-2xl w-full flex justify-center items-center  h-14 p-3 gap-2 ${isPathContains ? 'bg-amber-200' : 'bg-amber-100'}`}>
			{/*<Image src={null} alt={''} className={'rounded-3xl w-8 h-full bg-amber-100'} />*/}
			{text}
		</Link>
	);
}

export default CategoriesMenuItem;