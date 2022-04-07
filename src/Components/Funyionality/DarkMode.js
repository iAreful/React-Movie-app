/** @format */

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
	const LOCALSTORAGE_KEY = "passwordGenerator.darkMode";

	const darkModeStorage = localStorage.getItem(LOCALSTORAGE_KEY);
	const [darkMode, setDarkMode] = useState(
		darkModeStorage !== null ? JSON.parse(darkModeStorage) : false
	);

	const handleToggleDarkMode = () => {
		setDarkMode(!darkMode);
		localStorage.setItem(LOCALSTORAGE_KEY, (!darkMode).toString());
	};

	useEffect(() => {
		const root = window.document.documentElement;
		darkMode ? root.classList.add("dark") : root.classList.remove("dark");
	}, [darkMode]);

	return (
		<div className='mr-2 flex justify-center rounded-lg bg-[#1D4289] p-2 dark:bg-[#6B7787] sm:mr-0'>
			<span className='mr-2 text-sm'>☀️</span>
			<button
				aria-label='darkmode togglebutton'
				className='flex h-5 w-9 items-center rounded-full bg-slate-100 p-1'
				onClick={handleToggleDarkMode}>
				<div
					className='toggle-circle h-4 w-4 rounded-full  bg-yellow-400 dark:bg-slate-800'
					style={{ transform: darkMode && "translateX(0.75rem)" }}></div>
			</button>
			<span className='ml-2 text-sm'>🌙</span>
		</div>
	);
}
