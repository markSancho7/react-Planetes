import { styled } from 'styled-components';
import { PlanetInformation } from '../../constants/planetInformation';

const StyledPlanet = styled.div`
	position: relative;
	margin-top: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const StyledContainerImg = styled.div`
	width: 80%;
	height: 600px;
	text-align: center;
`;
const StyledContainerImg2 = styled.img`
	position: absolute;
	width: 200px;
	height: 240px;
	top: 265px;
	left: 640px;
	display: ${({ $active }) => ($active ? 'none' : 'flex')};
`;
const StyledContainerDescription = styled.div`
	width: 20%;
	margin-right: 260px;
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
const StyledContainerButtons = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
const StyledButton = styled.button`
	text-align: left;
	box-sizing: border-box;
	padding-top: 25px;
	padding-bottom: 45px;
	padding-left: 20px;
	background: ${({ $activeBackground, $takeIndex }) =>
		$activeBackground ? PlanetInformation[$takeIndex].colorBack : 'none'};
	width: 350px;
	height: 48px;
	flex-shrink: 0;
	color: #fff;
	font-family: 'League Spartan', sans-serif;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 25px; /* 208.333% */
	letter-spacing: 2.571px;
	text-transform: uppercase;
	border: 1px solid white;
`;
const StyledA = styled.a`
	font-size: 15px;
	color: white;
	text-decoration: none;
`;

export {
	StyledPlanet,
	StyledDescription,
	StyledContainerImg,
	StyledContainerImg2,
	StyledContainerDescription,
	StyledTitle,
	StyledContainerButtons,
	StyledButton,
	StyledA
};
