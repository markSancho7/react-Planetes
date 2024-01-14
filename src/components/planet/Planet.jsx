import {
	StyledContainerDescription,
	StyledContainerImg,
	StyledDescription,
	StyledPlanet,
	StyledTitle
} from './styles';

const Planet = ({ namePlanet, linkImg, descriptionPlanet }) => {
	return (
		<StyledPlanet>
			<StyledContainerImg>
				<img src={linkImg} alt='' />
			</StyledContainerImg>
			<StyledContainerDescription>
				<StyledTitle>{namePlanet}</StyledTitle>
				<StyledDescription>{descriptionPlanet}</StyledDescription>
			</StyledContainerDescription>
		</StyledPlanet>
	);
};
export default Planet;
