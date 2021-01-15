import React, { useContext } from 'react';
import styled from 'styled-components';
import Inlay from './Inlay.js'
import Nut from './Nut'
import { fretCount, GlobalContext } from '../GlobalsAndContext.js'

export const InlayRow = (props) => {
    const context = useContext(GlobalContext);
    const frets = [];
    for (let i = 0; i <= fretCount; i++)
        frets.push(<Inlay fret={i} text={props.text ? i : ''} />);

    frets.splice(1, 0, <Nut hideNut={props.hideNut} />);
    if (context.lefty)
        frets.reverse();

    return (
        <Row>
            {frets}
        </Row>
    );
}
export default InlayRow;

const Row = styled.div`
  display: flex; 
  margin: auto;
  width: 75vw;
  max-height: 15vh;
  overflow: hidden;
`;
