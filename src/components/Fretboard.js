import React, { useContext } from 'react';
import FretRow from './FretRow'
import InlayRow from './InlayRow'
import { GlobalContext } from '../GlobalsAndContext.js';

const Fretboard = (props) => {
  const context = useContext(GlobalContext);
  return (
    <div style={{ padding: '10px', maxwidth: '75vw' }}>
      <br />
      <FretRow rootNote={context.tuning[0]} />
      <FretRow rootNote={context.tuning[1]} />
      <FretRow rootNote={context.tuning[2]} />
      { context.inlays && <InlayRow />}
      <FretRow rootNote={context.tuning[3]} />
      <FretRow rootNote={context.tuning[4]} />
      <FretRow rootNote={context.tuning[5]} />
      { context.fretNumbers && <InlayRow text={true} hideNut={true} />}
    </div>
  )
}
export default Fretboard;