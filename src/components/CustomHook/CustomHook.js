import React, {useEffect, useState} from 'react';

function useLogger(arr) {
	useEffect(() => {
		console.log('value changed', ...arr)
	}, [...arr]);
}

function useInput(initialValue) {
	const [value, setValue] = useState(initialValue)
	const onChange = (e) => {
	    setValue(e.target.value)
	}
	const clear = () => {
		setValue('');
	}
	return {
		bind: {value, onChange},
		value, clear
	};
}


const CustomHookComponent = () => {
	//* Вариант с трёмя стейтами и тремя функциями
	// const [name, setName] = useState('');
	// const [surname, setSurname] = useState('')
	// const [age, setAge] = useState(null);
	//
	// const changeNameHandler = (e) => {
	//     setName(e.target.value);
	// }
	//
	// const changeSurnameHandler = (e) => {
	// 	setSurname(e.target.value);
	// }
	//
	// const changeAgeHandler = (e) => {
	// 	setAge(e.target.value);
	// }
	//* Три стейта заменены на один трижды переиспользуемый Hook
	const inputName = useInput('');
	const inputSurname = useInput('');
	const inputAge = useInput('');
	useLogger([inputName.value, inputSurname.value, inputAge.value])

	return (
		<div className={'container pt-3'}>
			<input type="text" {...inputName.bind} placeholder={'name'}/>
			<button className="btn btn-danger" onClick={inputName.clear}>очистить</button>
			<input type="text" {...inputSurname.bind} placeholder={'surname'}/>
			<button className="btn btn-danger" onClick={inputSurname.clear}>очистить</button>
			<input type="number" {...inputAge.bind} placeholder={'age'}/>
			<button className="btn btn-danger" onClick={inputAge.clear}>очистить</button>
			<h1>{inputName.value} {inputSurname.value} </h1>
			<h2>{inputAge.value}</h2>
		</div>
	);
};

export default CustomHookComponent;
