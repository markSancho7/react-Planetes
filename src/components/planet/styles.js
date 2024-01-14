import { styled } from 'styled-components';

const StyledPlanet = styled.div`
	margin-top: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const StyledContainerImg = styled.div`
	width: 60%;
	height: 600px;
	text-align: center;
`;
const StyledContainerDescription = styled.div`
	width: 40%;
`;
const StyledTitle = styled.h1`
	color: #fff;
	font-family: Antonio;
	font-size: 80px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;
`;
const StyledDescription = styled.p`
	width: 350px;
	color: #fff;
	font-family: Antonio;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 25px;
`;

export {
	StyledPlanet,
	StyledDescription,
	StyledContainerImg,
	StyledContainerDescription,
	StyledTitle
};
