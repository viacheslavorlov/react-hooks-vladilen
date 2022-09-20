import './App.css';
import React from "react";
import RefHook from "./components/RefHook";


function App() {

    console.log('App loaded');
    return (
        <div>
            <div className="container container-fluid">
                {/*<StateHook/>*/}
                {/*<Robot/>*/}
                {/*<EffectHook/>*/}
                <RefHook/>
            </div>
        </div>
    );
}

export default App;
