import { useEffect, useState } from 'react';

export function useTheme() {
	const [darkMode, setDarkMode] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') setDarkMode(true);
		else if (theme === 'light') setDarkMode(false);
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		if (darkMode) {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode, mounted]);

	return {
		darkMode,
		onToggle: () => setDarkMode(prev => !prev),
		mounted,
	};
}

