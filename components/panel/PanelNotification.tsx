import React from 'react';

function PanelNotification({number}:{number:number}) {
	return (<>
		{<div className={'absolute top-0 right-0 bg-accent rounded-full flex justify-center items-center w-6 h-6 text-white'}>{number}</div>}

	</>)

}

export default PanelNotification;