"use client"

import React from 'react';
import Image from "next/image";


function PanelBtn({src , alt, }:{src:string; alt:string; }) {
	return (
		<button ><Image src={src} alt={alt}/></button>
	);
}

export default PanelBtn;