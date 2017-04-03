import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';
import Pet from './Pet';
const creature = "human"
function Hooman(creature) {
	if (creature === 'human'){
		return < Name />
	}else{
		return < Pet />
	}
}
const JSX = <p> {Hooman(creature)} </p>
ReactDOM.render(JSX, document.querySelector("#root"));
