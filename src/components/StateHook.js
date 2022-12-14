import React, {useState} from 'react';
// функция для вычисления первоначального значения стейта
function computeInitialCounter() {
	console.log('Some calculations')
	return Math.trunc(Math.random() * 20);
}

const StateHook = () => {
	//! хуки вызываются только на вернем уровне функции или в кастомном хуке
	const [counter, setCounter] = useState(() => {
		//!callback для исключения повторного рендеринга данной функции
		return computeInitialCounter();
	});

	const [state, setState] = useState({
		title: 'Счетчик',
		date: Date.now() //? вычислится только первый раз (1)
	});

	const increment = () => {
		//! callback нужун для синхронности состояния  с реальностью
		setCounter(counter => counter + 1)
	}
	const decrement = () => {
		setCounter(counter => counter - 1)
	}
	
	const stateTitleChange = () => {
		setState(prev => {
			return {...prev, title: 'new title'}})
	}
	console.log('useState')
	return (
		<div>
			<h1>Counter {counter}</h1>
			<button onClick={increment} className="btn btn-success">Add</button>
			<button onClick={decrement} className="btn btn-danger">Subtract</button>
			<button onClick={stateTitleChange} className="btn btn-dark">Change title</button>
			<pre>{JSON.stringify(state)}</pre>
		</div>
	);
};

export default StateHook;
