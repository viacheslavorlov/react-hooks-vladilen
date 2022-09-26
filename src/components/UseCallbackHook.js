import React, {useState, useCallback, useEffect, useMemo} from 'react';

const UseCallbackHook = () => {
	const [count, setCount] = useState(1);
	const [colored, setColored] = useState(false);

	// const styles = useMemo(() => ({color: colored ? 'black' : 'red'}), [colored]);
	const styles = {color: colored ? 'black' : 'red'};

	// * Возвращает фгткцию а не значение как useMemo
	const generateItemsFromAPI = useCallback(() => {
			return new Array(count).fill('').map((_, i) => 'элемент ' + (i + 1));
		},
		[count],
	);


	return (
		<div>
			<h1 style={styles}>Вычисляемое свойство: {count}</h1>

			<button className="btn btn-outline-success" onClick={() => setCount(prevState => prevState + 1)}>
				<b>Добавить</b></button>
			<button className="btn btn-outline-warning" onClick={() => setColored(prevState => !prevState)}>изменить
				цвет
			</button>
			<ListGenerated generateItemsFromAPI={generateItemsFromAPI}/>
		</div>
	);
};

export default UseCallbackHook;


export const ListGenerated = ({generateItemsFromAPI}) => {
	const [items, setItems] = useState([])
	useEffect(() => {
		const newItems = generateItemsFromAPI();

		setItems(newItems);
		console.log('render');
	}, [generateItemsFromAPI]);

	return (
		<ul>
			{items.map((item, i) => <li key={i}>{item}</li>)}
		</ul>
	);
};


