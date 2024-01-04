/** @format */
/*
this is the layout we use for main section of my app.
*/
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<main className='main-layout w-auto h-screen bg-slate-50 m-5 p-5 border border-sky-200'>
			{children}
		</main>
	);
};

export default Layout;
