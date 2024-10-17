import { styled } from 'styled-components';
import { PlanetInformation } from '../../constants/planetInformation';

const StyledPlanet = styled.div`
	position: relative;
	margin-top: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 500px;
	@media (max-width: 1250px) {
		flex-direction: column;
	}
`;
const StyledContainerImg = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: 400px;
	width: 600px;
	height: 600px;
	text-align: center;
	@media (max-width: 1600px) {
		margin-right: 100px;
	}
	@media (max-width: 1250px) {
		position: absolute;
		background-color: green;
		margin-top: 100px;
		width: 100%;
	}
`;
const StyledImg = styled.img`
	height: 100%;
	@media (max-width: 1250px) {
		background-color: red;
		margin-left: auto;
		margin-right: auto;
		position: relative;
	}
`;
const StyledContainerImg2 = styled.img`
	position: absolute;
	width: 200px;
	height: 240px;
	margin-top: 300px;
	margin-left: 200px;
	display: ${({ $active }) => ($active ? 'none' : 'flex')};
	@media (max-width: 1250px) {
		position: absolute;
		background-color: red;
		height: 230px;
		left: 50%;
		z-index: 1;
	}
`;
const StyledContainerDescription = styled.div`
	width: 20%;
	margin-right: 260px;
`;
const StyledTitle = styled.h1`
	margin-top: 0;
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
	StyledA,
	StyledImg
};
