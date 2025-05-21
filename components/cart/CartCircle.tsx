import {ReactNode} from 'react';

function CartCircle({children, onClick}:{children: ReactNode, onClick?: ()=> void}) {
	return (
		<div onClick={onClick} className={'bg-accent rounded-full flex justify-center items-center w-7 h-7'}>
			{children}
		</div>
	);
}

export default CartCircle;