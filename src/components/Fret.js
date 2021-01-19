import React from 'react';
import styled from 'styled-components';
import {shrinkFactor} from '../GlobalsAndContext';

export const Fret = (props) => (
  <Box fret={props.fret} text={props.text}>
    { props.text}
  </Box >
);
export default Fret;

const Box = styled.div`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background-color: ${(props) => (props.text ? '#e0ebff;' : 'transparent;')}
  border-radius: 6px;
  border: 3px solid #dcdcdc;
  display: flex;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  height: 10vh;
  min-height: 32px;
  width: calc(150px - ${(props) => props.fret * shrinkFactor}px);
  min-width: 30px;
  text-shadow: 0px 1px 0px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
