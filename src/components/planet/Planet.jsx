import { useState } from 'react';
import { PlanetInformation } from '../../constants/planetInformation';
import {
	StyledA,
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
	linkImg2,
	takeIndex
}) => {
	const [sowImg, setSowImg] = useState(true);
	const [printBack, setPrintBack] = useState(0);
	return (
		<StyledPlanet>
			<StyledContainerImg>
				<img src={linkImg} alt='' />
				<StyledContainerImg2 src={linkImg2} alt='' $active={sowImg} />
			</StyledContainerImg>
			<StyledContainerDescription>
				<StyledTitle>{namePlanet}</StyledTitle>
				<StyledDescription>{descriptionPlanet}</StyledDescription>
				<StyledDescription>
					<StyledA href='https://www.wikipedia.com'>Souerce: wikipedia</StyledA>
				</StyledDescription>
				<StyledContainerButtons>
					{PlanetInformation[index].tabs.map((tab, index) => (
						<StyledButton
							key={tab.id}
							onClick={() => {
								getIndex(index);
								sowIndex(index, setSowImg, setPrintBack);
							}}
							$activeBackground={printBack === index}
							$takeIndex={takeIndex}
						>
							{tab}
						</StyledButton>
					))}
				</StyledContainerButtons>
			</StyledContainerDescription>
		</StyledPlanet>
	);
};
const sowIndex = (index, setSowImg, setPrintBack) => {
	setPrintBack(index);
	if (index === 2) {
		setSowImg(false);
	} else {
		setSowImg(true);
	}
};
export default Planet;
