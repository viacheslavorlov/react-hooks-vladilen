import React, {useContext, useState} from 'react';
import {Context} from "../../App";



const ContextComponent = () => {
	const {stateContext, setStateContext} = useContext(Context);
	return (
		<div>
			<h1>Контекст простой вариант</h1>
			<p>{stateContext.toString()}</p>
			<button onClick={() => setStateContext(prevStat => !prevStat)}>change context state</button>
		</div>
	);
};

export default ContextComponent;
