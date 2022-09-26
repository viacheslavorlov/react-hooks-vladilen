import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../App";



const ContextComponent = () => {
	const {stateContext, setStateContext} = useContext(Context);
	const style = {
		backgroundColor: stateContext ? 'lightblue' : 'yellow'
	}
	useEffect(() => {

	})
	return (
		<div>
			<h1 style={style}>Контекст простой вариант</h1>
			<p>{stateContext.toString()}</p>
			<button onClick={() => setStateContext(prevStat => !prevStat)}>change context state</button>
		</div>
	);
};

export default ContextComponent;
