import './App.css';
import React, {useState} from "react";
import RefHook from "./components/RefHook";
import stateHook from "./components/StateHook";


function complexCompute(num) {
    let i = 0;
    while (i < 1000000000) i++
        return num * 2;
}

function App() {
    const [number, setNumber] = useState(42);


    const computed = complexCompute(number)

    console.log('App loaded');
    return (
        <div>
            <div className="container container-fluid">
                {/*<StateHook/>*/}
                {/*<Robot/>*/}
                {/*<EffectHook/>*/}
                {/*<RefHook/>*/}
                <h1>Вычисляемое свойство: {computed}</h1>

                <button className="btn btn-outline-success" onClick={() => setNumber(prevState => prevState + 1)}><b>Добавить</b></button>
                <button className="btn btn-outline-danger" onClick={() => setNumber(prevState => prevState - 1)}><b>Убрать</b></button>
            </div>
        </div>
    );
}

export default App;
