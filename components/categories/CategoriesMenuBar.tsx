

import React from 'react';
import Swiper from "@/components/swiper/Swiper";
import CategoriesMenuItem from "@/components/categories/CategoriesMenuItem";
import {useTranslations} from "next-intl";

const menu = [
	{ id: 0, categoryLink: "all", sectionName: "All menu" },
	{ id: 1, categoryLink: "appetizers", sectionName: "Appetizers" },
	{ id: 2, categoryLink: "salads", sectionName: "Fresh Salads" },
	{ id: 4, categoryLink: "burgers", sectionName: "Burgers" },
	{ id: 5, categoryLink: "pasta", sectionName: "Pasta" },
	{ id: 6, categoryLink: "desserts", sectionName: "Desserts" },
	{ id: 7, categoryLink: "drinks", sectionName: "Drinks" },
	{ id: 8, categoryLink: "kids-menu", sectionName: "Kids Menu" },
	{ id: 9, categoryLink: "vegan", sectionName: "Vegan Options" },
	{ id: 10, categoryLink: "specials", sectionName: "Chef's Specials" }
];

function CategoriesMenuBar() {
	const t = useTranslations('MenuPage');

	return (
		<section className="relative w-full bg-card-bg p-3 mb-8 rounded-xl overflow-hidden">
			<Swiper
				items={menu.map(item => (
					<CategoriesMenuItem
						key={item.id}
						text={t(`categories.${item.categoryLink}`)}
						link={item.categoryLink}
					/>
				))}
			/>
		</section>
	);
}
export default CategoriesMenuBar;