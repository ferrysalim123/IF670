import { IonButton, IonMenuButton } from '@ionic/react';
import React, { useEffect } from 'react';

export const NavButtons = () => {
	const [mQuery, setMQuery] = React.useState<any>({
		matches: window.innerWidth > 500 ? true : false,
	});

	useEffect(() => {
		let mediaQuery = window.matchMedia('(min-width: 768px)');
		mediaQuery.addListener(setMQuery);

		return () => mediaQuery.removeListener(setMQuery);
	}, []);

	console.log(mQuery.matches);

	return (
		<div>
			{mQuery && !mQuery.matches ? (
				<IonMenuButton color="medium"/>
			) : (
				<>
					<IonButton routerLink={'/home'} color="medium">Home </IonButton>
					<IonButton routerLink={'/page-1'} color="medium">Tips & Trick </IonButton>
					<IonButton routerLink={'/page-2'} color="medium">Help & Support</IonButton>
					<IonButton routerLink={'/page-2'} color="medium">Setting</IonButton>
				</>
			)}
		</div>
	);
};