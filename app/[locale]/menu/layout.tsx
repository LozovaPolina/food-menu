import React, {ReactNode} from 'react';
import CategoriesMenuBar from "@/components/categories/CategoriesMenuBar";
import Panel from "@/components/panel/Panel";

function Layout({categoryItem}: {categoryItem:ReactNode}) {
	return (
		<div>
			<CategoriesMenuBar/>
			{categoryItem}
			<Panel/>
		</div>
	);
}

export default Layout;