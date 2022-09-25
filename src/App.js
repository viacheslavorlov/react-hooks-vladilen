import './App.css';
import React, {useEffect, useMemo, useState} from "react";

import UseMemoHook from "./components/useMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import Robot from "./components/robot/Robot";


function App() {


    // console.log('App loaded');
    return (
        <div>
            <div className="container container-fluid">
                {/*<StateHook/>*/}
                {/*<Robot/>*/}
                {/*<EffectHook/>*/}
                {/*<RefHook/>*/}
                {/*<UseMemoHook/>*/}
                <UseCallbackHook/>
            </div>
        </div>
    );
}

export default App;
