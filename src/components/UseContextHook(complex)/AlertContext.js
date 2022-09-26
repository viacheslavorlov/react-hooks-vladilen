import React, {useContext, useState, useReducer} from 'react';

const AlertContext = React.createContext();

//reducer

const reducer = (state, action) => {
    switch (action.type) {
	    case 'show': return {...state, visible: true, text: action.text}
	    case 'hide': return {...state, visible: false}
	    default: return state;
    }
}
//  useContext
export const useAlertContext = () => {
	return useContext(AlertContext);
}

const AlertProvider = ({children}) => {
	// const [alert, setAlert] = useState(false);
	// const toggle = () => {
	//     setAlert(prevState => !prevState)
	// }

	const [state, dispatch] = useReducer(reducer, {
		visible: false,
		text: ''
	});
	
	const show = text => dispatch({ type: 'show', text});
	const hide = () => dispatch({ type: 'hide' });

	return (
		<AlertContext.Provider value={{
			visible: state.visible,
			text: state.text,
			show, hide
		}}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertProvider;
