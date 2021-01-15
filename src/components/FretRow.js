import React, { useContext } from 'react';
import styled from 'styled-components';
import { fretCount, GlobalContext } from '../GlobalsAndContext.js';
import Fret from './Fret.js'
import Nut from './Nut.js'
import { mapNumberToNote } from '../GlobalsAndContext.js'

export const FretRow = (props) => {
    const context = useContext(GlobalContext);
    const frets = [];
    for (let i = props.rootNote; i <= fretCount + props.rootNote; i++)
        frets.push(<Fret text={context.noteSet.includes(i % 12) ? mapNumberToNote(i, context.mode) : ''} fret={i - props.rootNote} />);

    frets.splice(1, 0, <Nut />)
    if (context.lefty)
        frets.reverse();

    return (
        <Row>
            {frets}
        </Row>
    )
}
export default FretRow;

const Row = styled.div`
  display: flex; 
  margin: auto;
  width: 75vw;
  max-height: 15vh;
  overflow: hidden;
`;
