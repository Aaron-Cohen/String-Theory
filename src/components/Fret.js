import React from 'react';
import styled from 'styled-components';

export const Fret = (props) => (<Button fret={props.fret} text={props.text}> { props.text}</Button >)
export default Fret;

const Button = styled.button`
    box-shadow:inset 0px 1px 0px 0px #ffffff;
	background-color: ${props => props.text ? '#e0ebff;' : 'transparent;'}
	border-radius:6px;
	border:3px solid #dcdcdc;
	display:inline-block;
	color:#666666;
	font-family:Arial;
	font-size:15px;
    font-weight:bold;
    height: 10vh;
    width: ${props => (101 - props.fret * 3 + 'vw')};
    minWidth: 2ch;
    overflow:
	text-shadow:0px 1px 0px #ffffff;
`;