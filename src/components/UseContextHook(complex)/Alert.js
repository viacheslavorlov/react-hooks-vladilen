import React from 'react';
import {useAlertContext} from "./AlertContext";


const Alert = React.memo(() => {

		const alert = useAlertContext();
		console.log(alert)
		if (!alert.visible) return null;
		return (
			<div className="pt-3 alert alert-danger" onClick={alert.hide}>
				{alert.text}
			</div>
		);
	}
)

export default Alert;
