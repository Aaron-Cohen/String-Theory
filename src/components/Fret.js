import React, { Component } from 'react';
import styled from 'styled-components';

export default class Fret extends Component {
    render() {
        if (this.props.inlay) {
            // Case of double dots on octave
            if (this.props.fret === 12)
                return (<Button inlay={true} fret={this.props.fret}> {
                    <div style={{ fontSize: '0' }}>
                        <div style={{ margin: '4px' }}><Dot /></div>
                        <div style={{ margin: '4px' }}><Dot /></div>
                    </div>
                } </Button >)
            // Edge case where no dots on odd fret b/c 12th fret gets double dots
            else if (this.props.fret === 11 || this.props.fret === 13)
                return <Button inlay={true} fret={this.props.fret}></Button>
            // Case of single dots
            else if (this.props.fret % 2 && this.props.fret > 1)
                return (<Button inlay={true} fret={this.props.fret}> <Dot /> </Button >)
            // Case of no dots
            else
                return <Button inlay={true} fret={this.props.fret}></Button>
        }
        else
            return (<Button fret={this.props.fret}> { this.props.text}</Button >)
    }
}

const Dot = () => {
    var circleStyle = {
        padding: 4,
        display: "inline-block",
        backgroundColor: "black",
        borderRadius: "50%",
    };
    return (
        <div style={circleStyle}>
        </div>
    );
};

const Button = styled.button`
    box-shadow:inset 0px 1px 0px 0px #ffffff;
	background-color:transparent;
	border-radius:6px;
	border:3px solid #dcdcdc;
	display:inline-block;
	color:#666666;
	font-family:Arial;
	font-size:15px;
    font-weight:bold;
    height: ${props => props.inlay ? '5vh' : '10vh'};
    width: ${props => (101 - props.fret * 3 + 'vw')};
    minWidth: 2ch;
    margin: 1px;
    overflow:
	text-shadow:0px 1px 0px #ffffff;
`;