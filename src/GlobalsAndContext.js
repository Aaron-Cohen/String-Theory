import React from 'react';
/*
    Notes can be represented as such
    0: G# / Ab
    1: A
    2: A# / Bb
    3: B
    4: C
    5: C# / Db
    6: D
    7: D# / Eb
    8: E
    9: F
   10: F# / Gb
   11: G
   12: G# / Ab <-- Octave

    So there are 12 unique notes, represented by the numbers [0,11].
    This allows for easy maths using the modulo operator to read a note's
    profile regardless of a note's octave

*/

/**
 * Maps a letter representation of a musical note (as a String)
 * to a integer value. Accepts natural notes, and notes followed
 * by a # or b accidental for sharp and flat
 * resepctively.
 *
 */
export function mapNoteToNumber(note) {
  note = note.trim();
  // Error trap invalid input
  if (typeof note !== 'string' || note.length === 0 || note.length > 2) {
    return -1;
  }

  // Get root note before flats/sharps are applied
  let root = null;
  switch (note.toUpperCase().charAt(0)) {
    case 'A':
      root = 1;
      break;
    case 'B':
      root = 3;
      break;
    case 'C':
      root = 4;
      break;
    case 'D':
      root = 6;
      break;
    case 'E':
      root = 8;
      break;
    case 'F':
      root = 9;
      break;
    case 'G':
      root = 11;
      break;
    default:
      return -2;
  }

  // If note contains accidental in second character, apply sharp/flat logic
  if (note.length === 2) {
    switch (note.toLowerCase().charAt(1)) {
      case '#':
      case 's':
        root += 1;
        break;
      case 'b':
        root -= 1;
        break;
      default:
        return -3;
    }
  }

  return root % 12;
}

/**
 * Maps a numerical representation of a musical note to a String representation
 * consisting of a root and an accidental of # or b if applicable for a sharp or
 * flat note
 *
 */
export function mapNumberToNote(note, accidental) {
  // Wrap notes around chromatic octave before continuing
  note = note % 12;

  // Trap errors
  if (typeof note !== 'number') {
    throw new Error('Invalid input: must be number');
  }
  switch (note) {
    case 0:
      return accidental === 'Flats' ? 'Ab' : 'G#';
    case 1:
      return 'A';
    case 2:
      return accidental === 'Flats' ? 'Bb' : 'A#';
    case 3:
      return 'B';
    case 4:
      return 'C';
    case 5:
      return accidental === 'Flats' ? 'Db' : 'C#';
    case 6:
      return 'D';
    case 7:
      return accidental === 'Flats' ? 'Eb' : 'D#';
    case 8:
      return 'E';
    case 9:
      return 'F';
    case 10:
      return accidental === 'Flats' ? 'Gb' : 'F#';
    case 11:
      return 'G';
    default:
      throw new Error('Unable to map note to numerical value');
  }
}

export const defaultRoot = 1; // Note = 1 = A
export const majorScale = (root) =>
  [0, 2, 4, 5, 7, 9, 11].map((offset) => (offset + root) % 12);
export const minorScale = (root) =>
  [0, 2, 3, 5, 7, 8, 10].map((offset) => (offset + root) % 12);

// Tuning should always be calculated numerically and never lexigraphically.
// This allows for dynamic switching between equivalent sharp/flats when
// global context changes.
export const defaultTuningArray = ['E', 'B', 'G', 'D', 'A', 'E'];
export const defaultTuning = defaultTuningArray.map((e) => mapNoteToNumber(e));

// Frets displayed, and scale factor by which they shrink in size
export const fretCount = 21;
export const shrinkFactor = 5;

// So as to hide sidebar when 404'ing
export const validPages = ['/', '/About/'];

export const GlobalContext = React.createContext();
export default GlobalContext;
