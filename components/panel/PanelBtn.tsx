
import React from 'react';
import Image from "next/image";


function PanelBtn({src , alt,onClick }:{src:string; alt:string;onClick?: ()=>void }) {
	return (
		<button ><Image src={src} alt={alt} onClick={onClick}/></button>
	);
}

export default PanelBtn;