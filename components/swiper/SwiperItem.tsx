import React from 'react';
import Image from "next/image";

function SwiperItem({content}: {content: React.ReactNode;}) {

	return (
		<li className='flex-shrink-0 h-14 select-none' >
			{content && content}
		</li>
	);
}

export default SwiperItem;