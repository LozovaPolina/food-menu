"use client"

import React, {useState} from 'react';
import DropdownBtn from "@/components/dropdown/DropdownBtn";
import DropdownContent from "@/components/dropdown/DropdownContent";
import DropdownItem from "@/components/dropdown/DropdownItem";
import {Locale, useLocale} from "use-intl";
import {routing} from "@/i18n/routing";
import {usePathname, useRouter} from "@/i18n/navigation";
import {useParams} from "next/navigation";

export  type DropdownProps = {btnText: string}

function Dropdown({ btnText }: DropdownProps) {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const locale = useLocale() as Locale;
	const [open, setOpen] = useState(false);

	const onSelectChange = async (nextLocale: Locale) => {
		const { revalidatePages } = await import('@/helpers/revalidate');
		await revalidatePages();
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		router.replace( { pathname, params   },
			{ locale: nextLocale, });
		setOpen(false);
	};

	const toggleDropdown = () => setOpen((prev) => !prev);

	return (
		<div className="relative">
			<DropdownBtn btnText={btnText} open={open} toggle={toggleDropdown} />
			<DropdownContent
				content={routing.locales.map((cur) => (
					<DropdownItem
						key={cur}
						onClick={() => onSelectChange(cur as Locale)}
						active={cur === locale}
					>
						{cur.toUpperCase()}
					</DropdownItem>
				))}
				open={open}
			/>
		</div>
	);
}

export default Dropdown;