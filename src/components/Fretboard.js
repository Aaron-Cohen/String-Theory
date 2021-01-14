import React, { useContext } from 'react';
import FretRow from './FretRow';
import InlayRow from './InlayRow';
import styled from 'styled-components';
import { GlobalContext } from '../GlobalsAndContext.js';

const Fretboard = () => {
  const context = useContext(GlobalContext);
  return (
    <Board sidebar={context.sidebar}>
      <br />
      <FretRow rootNote={context.tuning[0]} />
      <FretRow rootNote={context.tuning[1]} />
      <FretRow rootNote={context.tuning[2]} />
      { context.inlays && <InlayRow />}
      <FretRow rootNote={context.tuning[3]} />
      <FretRow rootNote={context.tuning[4]} />
      <FretRow rootNote={context.tuning[5]} />
      { context.fretNumbers && <InlayRow text={true} hideNut={true} />}
    </Board>
  )
}
export default Fretboard;

const Board = styled.div`
  ${props => props.sidebar && `margin-left: 17vw`};
  transition: 350ms ease;
`;