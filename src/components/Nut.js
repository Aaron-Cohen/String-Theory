import styled from 'styled-components';

export const Nut = styled.button`
	background-color: ${props => props.hideNut ? 'transparent;' : '#e0955c;'}
    border: 3px solid #dcdcdc;
    border-radius:6px;
	font-size: 15px;
    font-weight: bold;
    width: 25%;
`;
export default Nut;