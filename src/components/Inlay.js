import React from 'react';
import styled from 'styled-components';

export const Inlay = (props) => {
    // Case where there is text displayed and not dots 
    if (props.text)
        return <Box fret={props.fret} style={{ fontSize: '15px' }}> {props.text} </Box>

    // Case of double dots on octave
    if (props.fret === 12)
        return (<Box fret={props.fret}>
            {
                <div>
                    <div ><Dot /></div>
                    <div ><Dot /></div>
                </div>
            }
        </Box >)

    // Edge case where no dots on odd fret b/c 12th fret gets double dots
    else if (props.fret === 11 || props.fret === 13)
        return <Box fret={props.fret}></Box>

    // Case of single dots
    else if (props.fret % 2 && props.fret > 1)
        return (<Box fret={props.fret}> <Dot /> </Box >)

    // Case of no dots
    else
        return <Box fret={props.fret}> </Box>
}
export default Inlay;

// This will not function as a styled component as it is empty, but will work as a stateless component
const Dot = () => (
    <div style={{
        padding: 4,
        display: "inline-block",
        backgroundColor: "black",
        borderRadius: "50%",
    }} />);

const Box = styled.div`
    box-shadow:inset 0px 1px 0px 0px #ffffff;
	background-color: transparent;
	border-radius:6px;
	border:3px solid #dcdcdc;
	display: flex;
    color:#666666;
	font-family:Arial;
	font-size: 12px;
    font-weight:bold;
    height: 5vh;
    min-height: 32px;
    width: calc(150px - ${props => props.fret * 4}px);
    min-width: 30px;
    text-shadow: 0px 1px 0px #ffffff;
    display: flex;
  	justify-content: center;
 	align-items: center;
`;