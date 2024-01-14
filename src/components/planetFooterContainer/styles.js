import { styled } from 'styled-components';

const StyledFooter = styled.div`
	margin-top: 250px;
	gap: 100px;
	display: flex;
	justify-content: center;
	margin-left: 20px;
	margin-right: 20px;
`;

const StyledBoxInfo = styled.div`
	box-sizing: border-box;
	width: 255px;
	height: 128px;
	border: 1px solid grey;
	padding: 10px;
`;
const StyledTitle = styled.p`
	color: #fff;
	font-family: 'League Spartan', sans-serif;
	font-size: 11px;
	font-style: normal;
	font-weight: 700;
	line-height: 25px; /* 227.273% */
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

const StyledDescription = styled.p`
	color: #fff;
	font-family: 'Antonio';
	font-size: 40px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -1.5px;
	text-transform: uppercase;
	margin: 0px;
`;
export { StyledFooter, StyledBoxInfo, StyledTitle, StyledDescription };
