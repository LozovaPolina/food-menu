import React from 'react';


function DropdownItem({children,active,onClick }: {children: React.ReactNode; active: boolean; onClick: () => void}) {


	return (
		<div onClick={onClick} className={`p-2 m-1 w-full text-text h-fit rounded-xl border  border-border cursor-pointer transition-colors delay-100 ease-in hover:bg-border hover:shadow ${active ? 'bg-border': "bg-card-bg" } `}>{children}</div>
	);
}

export default DropdownItem;