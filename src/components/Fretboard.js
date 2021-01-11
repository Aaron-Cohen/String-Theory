import React, { useContext } from 'react';
import FretRow from './FretRow.js'
import InlayRow from './InlayRow.js'
import { GlobalContext } from '../GlobalsAndContext.js';

const Fretboard = () => {
  const context = useContext(GlobalContext)
  return (
    <div style={layout}>
      <br />
      <FretRow rootNote={context.tuning[0]} />
      <FretRow rootNote={context.tuning[1]} />
      <FretRow rootNote={context.tuning[2]} />
      <InlayRow />
      <FretRow rootNote={context.tuning[3]} />
      <FretRow rootNote={context.tuning[4]} />
      <FretRow rootNote={context.tuning[5]} />
    </div>
  )
}
export default Fretboard;

const layout = {
  padding: '10px',
  maxwidth: '75vw'
}
