import React, {useContext, useState} from 'react';

const AlertContext = React.createContext();

export const useAlertContext = () => {
	return useContext(AlertContext);
}


const AlertProvider = ({children}) => {
	const [alert, setAlert] = useState(false);
	const toggle = () => {
	    setAlert(prevState => !prevState)
	}

	return (
		<AlertContext.Provider value={{
			alert,
			toggle
		}}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertProvider;
