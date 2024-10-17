import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledNav = styled.nav`
	text-decoration: none;
`;

const StyledMenuUl = styled.ul`
	font-family: 'League Spartan', sans-serif;
	list-style: none;
	display: flex;
	gap: 10px;
	text-decoration: none;
	justify-content: end;
	margin-right: 20px;
	text-decoration: none;
	font-size: 25px;
`;
const StyledMenuLi = styled(Link)`
	text-decoration: none;
	color: white;
	border: 3px solid white;
	padding: 10px;
	&&:hover {
		border: 3px solid ${({ $colorBack }) => $colorBack};
	}
`;

export { StyledMenuUl, StyledMenuLi, StyledNav };
