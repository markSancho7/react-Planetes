import { Route, Routes } from 'react-router-dom';
import Planet from '../components/planet/Planet';
import { PlanetInformation } from '../constants/planetInformation';
import PlanetFooterContainer from '../components/planetFooterContainer/PlanetFooterContainer';
// import TabsContainer from '../components/tabsContainer/TabsContainer';
import { useState } from 'react';

const Router = ({ sendIndex }) => {
	const [numberImg, setNumberImg] = useState(0);
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
								linkImg={PlanetInformation[sendIndex].planetImg[numberImg]}
								linkImg2={PlanetInformation[sendIndex].planetImg[3]}
								descriptionPlanet={
									PlanetInformation[sendIndex].planetDescription
								}
								index={sendIndex}
								getIndex={index => changeImg(setNumberImg, index)}
								takeIndex={sendIndex}
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
const changeImg = (setNmberImg, index) => {
	setNmberImg(index);
	console.log(index);
};
export default Router;
