import React from 'react';
import {DropdownProps} from "@/components/dropdown/Dropdown";

function DropdownBtn({btnText, open, toggle}: {btnText:DropdownProps["btnText"]; open: boolean; toggle: ()=> void}) {
	return (
		<button onClick={toggle} className={`flex relative z-40 items-center w-full p-4 bg-btn-color rounded-2xl text-main-text shadow-dropdown-btn-shadow justify-center transition-shadow duration-300 ease-in-out cursor-pointer border  hover:shadow ${open ? '': null } `}>
			{btnText}
		</button>
	);
}

export default DropdownBtn;