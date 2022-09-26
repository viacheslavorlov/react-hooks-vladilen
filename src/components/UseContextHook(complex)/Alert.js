import React from 'react';
import {useAlertContext} from "./AlertContext";


const Alert = React.memo(() => {

		const {alert} = useAlertContext();
		console.log(alert)
		if (!alert) return null;
		return (
			<div className="pt-3 alert alert-danger">
				Это очень важное сообщение
			</div>
		);
	}
)

export default Alert;
