import React from 'react';
import Link from "next/link";
function Button({btnText,btnLink}:{btnText: string;btnLink: string}) {
	return <Link
		href={btnLink}
		className={' cursor-pointer bg-accent text-main-text text-lg py-3 px-6 rounded-3xl flex items-center justify-center gap-2 w-fit mt-11 transition-shadow duration-300 hover:opacity-80 hover:shadow-inset-custom'}


	>
			{btnText}

	</Link>

}

export default Button;