import { useState } from 'react';
import { PlanetInformation } from '../../constants/planetInformation';
import { StyledContainerTabs, StyledTabs } from './styles';

const TabsContainer = ({ index, take }) => {
	const [infoTab, setInfoTab] = useState(0);

	return (
		<StyledContainerTabs>
			{PlanetInformation[index].tabs.map((tab, index) => (
				<StyledTabs
					key={tab.id}
					onClick={() => {
						changeImgAndText(index, setInfoTab, infoTab);
						take(() => infoTab);
					}}
				>
					{tab}
				</StyledTabs>
			))}
		</StyledContainerTabs>
	);
};

const changeImgAndText = (index, setInfoTab, infoTab) => {
	setInfoTab(index);
	console.log(infoTab);
};

export default TabsContainer;
