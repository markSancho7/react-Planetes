import { useState } from 'react';
import { PlanetInformation } from '../../constants/planetInformation';
import { StyledMenuLi, StyledMenuUl } from './styles';

const Menu = ({ action }) => {
	const [selectedPlantet, setSelectedPlanet] = useState(0);
	return (
		<nav className='link-style'>
			<StyledMenuUl>
				{PlanetInformation.map((planet, index) => (
					<li key={planet.id}>
						<StyledMenuLi
							to={planet.planetRoute}
							onClick={() => {
								action(index);
								getPlanet(setSelectedPlanet, planet.id);
							}}
							$active={planet.id === selectedPlantet}
							$colorBack={planet.colorBack}
						>
							{planet.planetName}
						</StyledMenuLi>
					</li>
				))}
			</StyledMenuUl>
		</nav>
	);
};
const getPlanet = (setSelectedPlanet, id) => {
	setSelectedPlanet(id);
	console.log(id);
};
export default Menu;
