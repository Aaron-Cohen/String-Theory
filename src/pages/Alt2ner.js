import React, { useContext } from 'react';
import Fretboard from '../components/Fretboard';
import GlobalContext from '../GlobalsAndContext'

export const Alt2ner = () => { const context = useContext(GlobalContext); return (<Fretboard update={context.root} />) }
export default Alt2ner;
