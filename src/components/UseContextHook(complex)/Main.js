import React, {useContext} from 'react';
import {useAlertContext} from "./AlertContext";

const Main = () => {
	const show = useAlertContext();
	console.log('show', show);

	return (
		<>
			<h1>useContext - пример</h1>
			<button className="btn btn-success" onClick={() => show.show('очень важный текст') }>Показать alert</button>
			<button onClick={() => show.toggle('toogle text')}>toggle</button>
		</>
	);
};

export default Main;
