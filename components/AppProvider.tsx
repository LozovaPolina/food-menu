'use client';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';
import {ReactNode} from "react";

function AppProvider({children,}: { children: ReactNode; }) {
	return (
		<Provider store={store}>
				{children}
		</Provider>
	);
}

export default AppProvider;