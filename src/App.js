import './App.css';
import React, {useEffect, useMemo, useState} from "react";

import UseMemoHook from "./components/useMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import Robot from "./components/robot/Robot";
import Main from "./components/UseContextHook(complex)/Main";
import Alert from "./components/UseContextHook(complex)/Alert";
import AlertContext from "./components/UseContextHook(complex)/AlertContext";
import ContextComponent from "./components/UseContext(easy)/UseContextHook(easy)";
// * для use context(easy)
export const Context = React.createContext();

function App() {
	const [stateContext, setStateContext] = useState(false);

	// console.log('App loaded');
	return (
		<div className="container container-fluid">
			{/*<StateHook/>*/}
			{/*<Robot/>*/}
			{/*<EffectHook/>*/}
			{/*<RefHook/>*/}
			{/*<UseMemoHook/>*/}
			{/*<UseCallbackHook/>*/}
			{//* для use context(easy)
			}
			<Context.Provider value={{
				stateContext,
				setStateContext
			}}>
				<ContextComponent/>
			</Context.Provider>

			{//* для use context(complex)
			}
			<AlertContext>
				<Alert/>
				<Main/>
			</AlertContext>
		</div>
	);
}

export default App;
