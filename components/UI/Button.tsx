import React from 'react';
import Link from "next/link";
function Button({btnText,btnLink}:{btnText: string;btnLink: string}) {
	let content: React.ReactNode
	return <Link
		href={btnLink}
		className={' cursor-pointer bg-btn-color-orange text-main-text text-lg py-3 px-6 rounded-3xl flex items-center justify-center gap-2 w-fit mt-11 transition-shadow duration-300 hover:opacity-80 hover:shadow-inset-custom'}
		target="_blank"
		rel="noopener noreferrer"

	>
			{btnText}

	</Link>

}

export default Button;