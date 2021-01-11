import React, { useContext } from 'react';
import styled from 'styled-components';
import { fretCount, GlobalContext } from '../GlobalsAndContext.js';
import Fret from './Fret.js'
import { mapNumberToNote } from '../GlobalsAndContext.js'

export const FretRow = (props) => {
    const frets = [];
    const context = useContext(GlobalContext);
    for (let i = props.rootNote; i <= fretCount + props.rootNote; i++)
        frets.push(<Fret text={mapNumberToNote(i, context.mode)} dots={props.dots} fret={i - props.rootNote} />);

    return (
        <ButtonRow>
            {frets}
        </ButtonRow>
    )
}
export default FretRow;

const ButtonRow = styled.div`
  display: flex; 
  margin: auto;
  width: 75vw;
  max-height: 15vh;
  overflow: hidden;
`;
