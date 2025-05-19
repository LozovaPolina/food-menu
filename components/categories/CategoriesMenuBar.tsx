import React from 'react';
import Swiper from "@/components/swiper/Swiper";
import CategoriesMenuItem from "@/components/categories/CategoriesMenuItem";

const menu = [
	{
		"id": 0,
		"categoryLink": "all",
		"sectionName": "All menu"
	},
	{
		"id": 1,
		"categoryLink": "appetizers",
		"sectionName": "Appetizers"
	},
	{
		"id": 2,
		"categoryLink": "salads",
		"sectionName": "Fresh Salads"
	},

	{
		"id": 4,
		"categoryLink": "burgers",
		"sectionName": "Burgers"
	},
	{
		"id": 5,
		"categoryLink": "pasta",
		"sectionName": "Pasta"
	},
	{
		"id": 6,
		"categoryLink": "desserts",
		"sectionName": "Desserts"
	},
	{
		"id": 7,
		"categoryLink": "drinks",
		"sectionName": "Drinks"
	},
	{
		"id": 8,
		"categoryLink": "kids-menu",
		"sectionName": "Kids Menu"
	},
	{
		"id": 9,
		"categoryLink": "vegan",
		"sectionName": "Vegan Options"
	},
	{
		"id": 10,
		"categoryLink": "specials",
		"sectionName": "Chef's Specials"
	}
]

function CategoriesMenuBar() {

	return (
		<section className={"w-full bg-black"}>
			<Swiper items={menu.map(item=> <CategoriesMenuItem key={item.id} text={item.sectionName} link={item.categoryLink}/>)}/>
		</section>
	);
}

export default CategoriesMenuBar;