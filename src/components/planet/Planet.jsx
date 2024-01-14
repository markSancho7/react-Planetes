import { useState } from 'react';
import { PlanetInformation } from '../../constants/planetInformation';
import {
	StyledButton,
	StyledContainerButtons,
	StyledContainerDescription,
	StyledContainerImg,
	StyledContainerImg2,
	StyledDescription,
	StyledPlanet,
	StyledTitle
} from './styles';

const Planet = ({
	namePlanet,
	linkImg,
	descriptionPlanet,
	index,
	getIndex,
	linkImg2
}) => {
	const [sowImg, setSowImg] = useState(false);
	return (
		<StyledPlanet>
			<StyledContainerImg>
				<img src={linkImg} alt='' />
				<StyledContainerImg2 src={linkImg2} alt='' $active={sowImg} />
			</StyledContainerImg>
			<StyledContainerDescription>
				<StyledTitle>{namePlanet}</StyledTitle>
				<StyledDescription>{descriptionPlanet}</StyledDescription>
				<StyledContainerButtons>
					{PlanetInformation[index].tabs.map((tab, index) => (
						<StyledButton
							key={tab.id}
							onClick={() => {
								getIndex(index);
								sowIndex(index, sowImg, setSowImg);
							}}
						>
							{tab}
						</StyledButton>
					))}
				</StyledContainerButtons>
			</StyledContainerDescription>
		</StyledPlanet>
	);
};
const sowIndex = (index, sowImg, setSowImg) => {
	console.log(index);
	if (index === 2) {
		setSowImg(false);
	} else {
		setSowImg(true);
	}
};
export default Planet;
