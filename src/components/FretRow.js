import React, { useContext } from 'react';
import { mapNumberToNote, fretCount, GlobalContext } from '../GlobalsAndContext.js'
import { GuitarRow, Nut } from './SharedComponents';
import Fret from './Fret'

export const FretRow = (props) => {
    const context = useContext(GlobalContext);
    const frets = [];
    for (let i = props.rootNote; i <= fretCount + props.rootNote; i++)
        frets.push(<Fret text={context.noteSet.includes(i % 12) ? mapNumberToNote(i, context.mode) : ''} fret={i - props.rootNote} />);

    frets.splice(1, 0, <Nut />);
    if (context.lefty)
        frets.reverse();

    return (
        <GuitarRow>
            {frets}
        </GuitarRow>
    );
}
export default FretRow;
