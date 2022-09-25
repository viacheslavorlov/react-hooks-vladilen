import React, {useState, useCallback} from 'react';

const UseCallbackHook = () => {
	const [count, setCount] = useState(1);
	const [colored, setColored] = useState(false);

	const styles =  {color: colored ? 'black' : 'red'};
	
	const generateItemsFromAPI = () => {
	    return new Array(count).fill('').map((_, i) => 'элемент ' + (i + 1));
	}

	return (
		<div>
			<h1 style={styles}>Вычисляемое свойство: {count}</h1>

			<button className="btn btn-outline-success" onClick={() => setCount(prevState => prevState + 1)}><b>Добавить</b></button>
			<button className="btn btn-outline-warning" onClick={() => setColored(prevState => !prevState)}>изменить цвет</button>
			<ListGenerated generateItemsFromAPI={generateItemsFromAPI}/>
		</div>
	);
};

export default UseCallbackHook;


export const ListGenerated = ({generateItemsFromAPI}) => {
	return (
		<div>
			<ul>
				{generateItemsFromAPI().map((item, i) => <li key={i}>{item}</li>)}
			</ul>
		</div>
	);
};


