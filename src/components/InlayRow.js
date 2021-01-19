import Inlay from './Inlay';
import React, {useContext} from 'react';
import {GuitarRow, Nut} from './SharedComponents';
import {fretCount, GlobalContext} from '../GlobalsAndContext';

export const InlayRow = (props) => {
  const context = useContext(GlobalContext);
  const frets = [];
  for (let i = 0; i <= fretCount; i += 1) {
    frets.push(<Inlay fret={i} text={props.text ? i : ''} />);
  }

  frets.splice(1, 0, <Nut hideNut={props.text} />);
  if (context.lefty) {
    frets.reverse();
  }

  return (
    <GuitarRow>
      {frets}
    </GuitarRow>
  );
};
export default InlayRow;
