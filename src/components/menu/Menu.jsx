import { Link } from 'react-router-dom';
import { PlanetInformation } from '../../constants/planetInformation';
import { StyledMenu } from './styles';

const Menu = ({ action }) => {
	return (
		<nav>
			<StyledMenu>
				{PlanetInformation.map((planet, index) => (
					<li key={planet.id}>
						<Link to={planet.planetRoute} onClick={() => action(index)}>
							{planet.planetName}
						</Link>
					</li>
				))}
			</StyledMenu>
		</nav>
	);
};
export default Menu;
