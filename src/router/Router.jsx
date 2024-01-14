import { Route, Routes } from 'react-router-dom';
import Planet from '../components/planet/Planet';
import { PlanetInformation } from '../constants/planetInformation';
import PlanetFooterContainer from '../components/planetFooterContainer/PlanetFooterContainer';
import TabsContainer from '../components/tabsContainer/TabsContainer';
import { useState } from 'react';

const Router = ({ sendIndex }) => {
	const [newIndex, setNewIndex] = useState(0);
	return (
		<>
			<Routes>
				<Route
					path={PlanetInformation[sendIndex].planetRoute}
					element={
						<>
							<Planet
								id={PlanetInformation[sendIndex].id}
								namePlanet={PlanetInformation[sendIndex].planetName}
								linkImg={PlanetInformation[sendIndex].planetImg}
								descriptionPlanet={
									PlanetInformation[sendIndex].planetDescription
								}
							/>
							<TabsContainer
								index={sendIndex}
								take={value => takeIndex(newIndex, setNewIndex, value)}
							/>
							<PlanetFooterContainer
								rotation={PlanetInformation[sendIndex].planetRotation}
								revolution={PlanetInformation[sendIndex].planetRevolution}
								radius={PlanetInformation[sendIndex].planetRadius}
								average={PlanetInformation[sendIndex].planetAverage}
							/>
						</>
					}
				/>
			</Routes>
		</>
	);
};
const takeIndex = (newIndex, setNewIndex, value) => {
	setNewIndex(value);
	console.log(newIndex);
};
export default Router;
