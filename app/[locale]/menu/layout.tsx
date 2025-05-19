import React, {ReactNode} from 'react';
import CategoriesMenuBar from "@/components/categories/CategoriesMenuBar";

function Layout({categoryItem}: {categoryItem:ReactNode}) {
	return (
		<div>
			<CategoriesMenuBar/>
			{categoryItem}

		</div>
	);
}

export default Layout;