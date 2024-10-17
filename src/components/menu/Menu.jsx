import { PlanetInformation } from '../../constants/planetInformation';
import { StyledMenuLi, StyledMenuUl } from './styles';

const Menu = ({ action }) => {
	return (
		<nav className='link-style'>
			<StyledMenuUl>
				{PlanetInformation.map((planet, index) => (
					<li key={planet.id}>
						<StyledMenuLi
							to={planet.planetRoute}
							onClick={() => action(index)}
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
export default Menu;
