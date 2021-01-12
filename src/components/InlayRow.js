import React, { Component } from 'react';
import styled from 'styled-components';
import Inlay from './Inlay.js'
import { fretCount } from '../GlobalsAndContext.js'

export default class InlayRow extends Component {
    render() {
        const frets = []
        for (let i = 0; i <= fretCount; i++)
            frets.push(<Inlay fret={i} text={this.props.text ? i : ''} />)

        return (
            <ButtonRow>
                {frets}
            </ButtonRow>
        )
    }
}

const ButtonRow = styled.div`
  display: flex; 
  margin: auto;
  width: 75vw;
  max-height: 15vh;
  overflow: hidden;
`;
