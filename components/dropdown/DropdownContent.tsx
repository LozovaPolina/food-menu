import React from 'react';


function DropdownContent({content,open}: {content:React.ReactNode; open:boolean}) {


	return (
		<div className={`absolute  min-w-full flex flex-col items-center bg-body-bg-color border border-border mt-4  shadow-2xl rounded-2xl max-h-dvh overflow-y-scroll scrollbar-none p-4 justify-center  dropdown-animation  ${open ? 'transform opacity-100 translate-y-0 z-20' : 'transform translate-y-[-20%] opacity-0 -z-10 ' }`}>{content}</div>
	);
}

export default DropdownContent;