import React, { Component } from 'react';
import FretRow from './FretRow.js'
import InlayRow from './InlayRow.js'

export default class Fretboard extends Component {
  render() {
    return (
      <div style={layout}>
        <br />
        <FretRow />
        <FretRow />
        <FretRow />
        <InlayRow />
        <FretRow />
        <FretRow />
        <FretRow />
      </div>
    )
  }
}

const layout = {
  padding: '10px',
  maxwidth: '75vw'
}
