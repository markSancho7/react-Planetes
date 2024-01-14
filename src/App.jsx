import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Menu from './components/menu/Menu';
import { useState } from 'react';

const App = () => {
	const [planetNumber, setPlanetNumber] = useState(0);

	console.log(planetNumber);
	return (
		<BrowserRouter>
			<Menu action={index => getIndex(setPlanetNumber, index)}></Menu>
			<Router sendIndex={planetNumber}></Router>
		</BrowserRouter>
	);
};

const getIndex = (setPlanetNumber, index) => {
	setPlanetNumber(index);
	console.log(index);
};

export default App;
