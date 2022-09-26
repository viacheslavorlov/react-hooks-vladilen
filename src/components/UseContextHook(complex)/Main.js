import React, {useContext} from 'react';
import {useAlertContext} from "./AlertContext";

const Main = () => {
	const toggle = useAlertContext()
	console.log('toggle', toggle)
	return (
		<>
			<h1>useContext - пример</h1>
			<button className="btn btn-success" onClick={() => toggle.show('очень важный текст') }>Показать alert</button>
		</>
	);
};

export default Main;
