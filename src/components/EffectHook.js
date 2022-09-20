import React, {useEffect, useState} from 'react';


const EffectHook = () => {
    const [type, setType] = useState('users');
    const [content, setContent] = useState([]);
    const [pos, setPos] = useState({x: 0, y: 0})

    const getData = () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setContent(json))
        return () => {
            console.log('clean type ')
        }
    }

    const changeTyge = (str) => {
        setType(prevState => str);
    }

    const mousMoveHandler = (e) => {
        setPos(prevState => ({x: e.clientX, y: e.clientY}));
        console.log('effect mousemove');
    }

    useEffect(() => {
        getData(); // вызов функции при изменении состояния type
    }, [type]);

    useEffect(() => {
        window.addEventListener('mousemove', mousMoveHandler);
        return () => {
            window.removeEventListener('mousemove', mousMoveHandler)
        }
    })
    console.log('useEffect')
    return (
        <>
            <div>X: {pos.x}, Y: {pos.y}</div>
            <h1>Ресурс {type}</h1>

            <button onClick={() => changeTyge('users')}>Пользователи</button>
            <button onClick={() => changeTyge('Todos')}>ToDos</button>
            <button onClick={() => changeTyge('posts')}>Posts</button>
            <pre className="container flex-column">{JSON.stringify(content, null, 2)}</pre>
        </>
    )
};

export default EffectHook;