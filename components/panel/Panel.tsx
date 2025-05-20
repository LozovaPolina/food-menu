import React from 'react';
import cartImg from '../../assets/shopping-bag.svg'
import settingsImg from '../../assets/setting-2.svg'
import PanelBtn from "@/components/panel/PanelBtn";
function Panel() {
	function onClick() {

	}
	return (
		<article className="bg-card-bg opacity-90 shadow-inset-custom w-60 border border-border p-3 flex justify-center gap-8 fixed rounded-3xl top-[87%] right-1/2 translate-x-1/2">
			<PanelBtn src={settingsImg} alt={'settings'} />
			<PanelBtn src={cartImg} alt={'cart'} />
		</article>
	);
}

export default Panel;