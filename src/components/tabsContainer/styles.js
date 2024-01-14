import { styled } from 'styled-components';

const StyledContainerTabs = styled.div`
	position: absolute;
	left: 60%;
	top: 600px;
	color: white;
	width: 350px;
	height: 180px;
	flex-shrink: 0;
	text-align: center;
`;
const StyledTabs = styled.p`
	padding-top: 25px;
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

export { StyledContainerTabs, StyledTabs };
