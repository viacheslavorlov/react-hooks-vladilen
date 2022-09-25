import React, {useEffect, useMemo, useState} from 'react';

function complexCompute(num) {
	let i = 0;
	while (i < 1000000000) i++
	return num * 2;
}

const useMemoHook = () => {

	const [number, setNumber] = useState(42);
	const [colored, setColored] = useState(false);


	// useMemo(() => {
//         return function with returned value || any value
//     }, [dependencies])
//    dependencies - те значения при изменении которых перерисовывается компонент
	const computed = useMemo(() => {
		return complexCompute(number)
	}, [number]);

	const styles = useMemo(() => {
		return {color: colored ? 'black' : 'red'};
	}, [colored]);
	useEffect(() => {
		console.log('styles changed')
	}, [styles]);


	return (
		<div>
			<h1 style={styles}>Вычисляемое свойство: {computed}</h1>

			<button className="btn btn-outline-success" onClick={() => setNumber(prevState => prevState + 1)}><b>Добавить</b></button>
			<button className="btn btn-outline-danger" onClick={() => setNumber(prevState => prevState - 1)}><b>Убрать</b></button>
			<button className="btn btn-outline-warning" onClick={() => setColored(prevState => !prevState)}>изменить цвет</button>
		</div>
	);
};

export default useMemoHook;
