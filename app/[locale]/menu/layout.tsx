import React, {ReactNode} from 'react';
import CategoriesMenuBar from "@/components/categories/CategoriesMenuBar";
import Panel from "@/components/panel/Panel";
import Cart from "@/components/cart/Cart";

function Layout({categoryItem}: {categoryItem:ReactNode}) {
	return (
		<div>
			<CategoriesMenuBar/>
			{categoryItem}
			<Panel/>
			<Cart/>
		</div>
	);
}

export default Layout;