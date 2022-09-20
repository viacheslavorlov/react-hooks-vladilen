import React, {useEffect, useRef, useState} from 'react';

const RefHook = () => {
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1); //* для хранения значений
    const inputRef = useRef(null); // * для получения ссылок на элемент
    const prevValue = useRef(''); //* для хранения предыдущего состояния

    const focus = () => {
        // * для получения ссылок на элемент
        inputRef.current.focus();
        inputRef.current.value = '';
    }

    useEffect(() => {
        //* для хранения предыдущего состояния? c целью использовать его после рендера
        prevValue.current = value;
    })

    useEffect(() => {
        //* для хранения значений
        renderCount.current++;
        console.log(inputRef.current.value)
    })

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h2>Прошлое состояние: {prevValue.current}</h2>
            <input type="text" ref={inputRef} onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-success" onClick={focus}>Focus</button>
        </div>
    );
};

export default RefHook;