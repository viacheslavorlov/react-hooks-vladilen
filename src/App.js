import './App.css';
import React, {useEffect, useMemo, useState} from "react";

import UseMemoHook from "./components/useMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import Robot from "./components/robot/Robot";
import Main from "./components/UseContextHook(complex)/Main";
import Alert from "./components/UseContextHook(complex)/Alert";
import AlertContext from "./components/UseContextHook(complex)/AlertContext";
import ContextComponent from "./components/UseContext(easy)/UseContextHook(easy)";
import CustomHookComponent from "./components/CustomHook/CustomHook";
// * для use context(easy)
export const Context = React.createContext();

function App() {
	const [stateContext, setStateContext] = useState(false);

	// console.log('App loaded');
	return (
		<div className="container container-fluid">
			{//* useState hook usage
			}
			{/*<StateHook/>*/}
			{/*<Robot/>*/}
			{//* useEffect hook usage
			}
			{/*<EffectHook/>*/}
			{//* useRef hook usage
			}
			{/*<RefHook/>*/}
			{//* useMemo hook usage
			}
			{/*<UseMemoHook/>*/}
			{//* useCallback hook usage
			}
			{/*<UseCallbackHook/>*/}
			{//* для use context(easy)
			}
			{/*<Context.Provider value={{
			 stateContext,
			 setStateContext
			 }}>
			 <ContextComponent/>
			 </Context.Provider>*/}

			{//* для use context(complex)
				//* для useReducer
			}
			{/*<AlertContext>*/}
			{/*	<Alert/>*/}
			{/*	<Main/>*/}
			{/*</AlertContext>*/}
			<CustomHookComponent/>
		</div>
	);
}

export default App;
