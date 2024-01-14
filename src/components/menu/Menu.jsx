import { Link } from 'react-router-dom';
import { PlanetInformation } from '../../constants/planetInformation';
import { StyledMenuLi, StyledMenuUl } from './styles';

const Menu = ({ action }) => {
	return (
		<nav className='link-style'>
			<StyledMenuUl>
				{PlanetInformation.map((planet, index) => (
					<StyledMenuLi key={planet.id}>
						<Link to={planet.planetRoute} onClick={() => action(index)}>
							{planet.planetName}
						</Link>
					</StyledMenuLi>
				))}
			</StyledMenuUl>
		</nav>
	);
};
export default Menu;
