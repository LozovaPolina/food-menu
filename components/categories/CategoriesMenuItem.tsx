"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useDispatch} from "react-redux";
import {showCategoryItems} from "@/redux/reducer/cartSlice";
import begetImg from '../../assets/baget.png'
function CategoriesMenuItem({text, link}:{text: string; link: string;}) {
	const path = usePathname();
	const dispatch = useDispatch();
	function onClickHandler() {
		dispatch(showCategoryItems(link));
	}
	 const isPathContains = path.includes(link.toLowerCase());

	 console.log(link,path,isPathContains)
	return (
		<Link href={'/menu/' +  link} onClick={onClickHandler} className={`select-none max-w-36 rounded-2xl w-full flex justify-center items-center text-nav-btn-text hover:opacity-90 hover:shadow h-14 p-3 gap-2 ${isPathContains ? 'bg-accent' : 'bg-nav-btn-bg'}`}>
			<Image src={begetImg} alt={'beget Img'} className={'rounded-3xl w-8 h-full bg-amber-100'} />
			{text}
		</Link>
	);
}

export default CategoriesMenuItem;