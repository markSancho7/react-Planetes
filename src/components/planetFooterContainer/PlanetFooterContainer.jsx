import {
	StyledBoxInfo,
	StyledDescription,
	StyledFooter,
	StyledTitle
} from './styles';

const PlanetFooterContainer = ({ rotation, revolution, radius, average }) => {
	return (
		<StyledFooter>
			<StyledBoxInfo>
				<StyledTitle>ROTATION TIME</StyledTitle>
				<StyledDescription>{rotation}</StyledDescription>
			</StyledBoxInfo>
			<StyledBoxInfo>
				<StyledTitle>REVOLUTION TIME</StyledTitle>
				<StyledDescription>{revolution}</StyledDescription>
			</StyledBoxInfo>
			<StyledBoxInfo>
				<StyledTitle>RADIUS</StyledTitle>
				<StyledDescription>{radius}</StyledDescription>
			</StyledBoxInfo>
			<StyledBoxInfo>
				<StyledTitle>AVERAGE TEMP.</StyledTitle>
				<StyledDescription>{average}</StyledDescription>
			</StyledBoxInfo>
		</StyledFooter>
	);
};
export default PlanetFooterContainer;
