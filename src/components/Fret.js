import React from 'react';
import styled from 'styled-components';

export const Fret = (props) => (<Box fret={props.fret} text={props.text}> { props.text}</Box >)
export default Fret;

const Box = styled.div`
    box-shadow: inset 0px 1px 0px 0px #ffffff;
	background-color: ${props => props.text ? '#e0ebff;' : 'transparent;'}
	border-radius: 6px;
	border: 3px solid #dcdcdc;
	display: flex;
	color: #666666;
	font-family: Arial;
	font-size: 15px;
    font-weight: bold;
    height: 10vh;
    width: ${props => (101 - props.fret * 3 + 'vw')};
    minWidth: 2ch;
	text-shadow: 0px 1px 0px #ffffff;
	display: flex;
  	justify-content: center;
 	align-items: center;
`;