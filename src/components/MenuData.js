import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {GiTunePitch} from 'react-icons/gi';
import {CgTrendingDown} from 'react-icons/cg/index';
import {IoNewspaper, IoHelpCircle} from 'react-icons/io5';
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';
import {
  mapNoteToNumber, mapNumberToNote, majorScale, minorScale,
} from '../GlobalsAndContext';

/**
  Returns a boolean array of same length as
  input list containing all falses, but with
  a true at index of second parameter
*/
function updateSingleItem(list, index) {
  list = new Array(list.length).fill(false);
  list[index] = true;
  return list;
}

export const menuData = (context) => [
  {
    title: 'Sharp/Flat Mode',
    icon: <FaIcons.FaSlidersH />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    page: '/',
    subNav: [
      {
        title: 'Sharps',
        icon: <FaIcons.FaHashtag />,
      },
      {
        title: 'Flats',
        icon: <CgTrendingDown />,
      },
    ],
    action: (choice) => context.updateMode(choice.title),
    updateList: (list, index) => updateSingleItem(list, index),
  },
  {
    title: 'Custom Tuning',
    icon: <FaIcons.FaGuitar />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    page: '/',
    subNav: [
      {
        title: mapNumberToNote(context.tuning[0], context.mode),
        icon: <GiTunePitch />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
          {
            title: 'inner level',
            icon: <FaIcons.FaGuitar />,
          },
          {
            title: 'inner level',
            icon: <FaIcons.FaGuitar />,
          },
        ],
      },
      {
        title: mapNumberToNote(context.tuning[1], context.mode),
        icon: <GiTunePitch />,
      },
      {
        title: mapNumberToNote(context.tuning[2], context.mode),
        icon: <GiTunePitch />,
      },
      {
        title: mapNumberToNote(context.tuning[3], context.mode),
        icon: <GiTunePitch />,
      },
      {
        title: mapNumberToNote(context.tuning[4], context.mode),
        icon: <GiTunePitch />,
      },
      {
        title: mapNumberToNote(context.tuning[5], context.mode),
        icon: <GiTunePitch />,
      },
    ],
    editable: true,
    action: () => { },
    updateList: (list) => list,
    updateTuning: (input, index) => {
      input = input.trim().toLowerCase();
      if (input.length < 1) return false;
      if (input.length > 2) input = input.substring(0, 2);

      input = input.toUpperCase().charAt(0) + input.slice(1);
      const note = mapNoteToNumber(input);
      if (note < 0) return false;

      // Input is determined to be valid at this point.
      // Must update context's tuning so fretboard can update.
      context.updateTuning(index, note);
      return input;
    },
  },
  {
    title: 'Tuning Presets',
    icon: <FaIcons.FaUserCog />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    page: '/',
    subNav: [
      {
        title: 'Standard',
        tuning: ['E', 'B', 'G', 'D', 'A', 'E'],
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'Open G',
        tuning: ['D', 'B', 'G', 'D', 'G', 'D'],
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'Open D',
        tuning: ['D', 'A', 'F#', 'D', 'A', 'D'],
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'Drop D',
        tuning: ['E', 'B', 'G', 'D', 'A', 'D'],
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'Drop C',
        tuning: ['E', 'B', 'G', 'D', 'A', 'C'],
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'E C G C A C\n(Mumford & Sons)',
        tuning: ['E', 'C', 'G', 'C', 'A', 'C'],
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'E C G C A F\n(American Football)',
        tuning: ['E', 'C', 'G', 'C', 'A', 'F'],
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'E A G C A F\n(Yvette Young)',
        tuning: ['E', 'A', 'G', 'C', 'A', 'F'],
        icon: <FaIcons.FaUserAlt />,
      },
    ],
    action: (info) => context.setTuning(
        info.tuning.map((e) => mapNoteToNumber(e)), // Lint required comma here
    ),
    updateList: (list, index) => updateSingleItem(list, index),
  },
  {
    title: 'Root Note / Key',
    icon: <FaIcons.FaSortAlphaDown />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    page: '/',
    subNav: [
      {
        title: 'A',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: context.mode === 'Sharps' ? 'A#' : 'Bb',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: 'B',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: 'C',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: context.mode === 'Sharps' ? 'C#' : 'Db',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: 'D',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: context.mode === 'Sharps' ? 'D#' : 'Eb',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: 'E',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: 'F',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: context.mode === 'Sharps' ? 'F#' : 'Gb',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: 'G',
        icon: <FaIcons.FaMapPin />,
      },
      {
        title: context.mode === 'Sharps' ? 'G#' : 'Ab',
        icon: <FaIcons.FaMapPin />,
      },
    ],
    action: (root) => {
      root = root.title;
      // Two-part approach: update root, but also recalculate
      // the selected set of notes with relation to new root
      const note = mapNoteToNumber(root);
      const difference = context.noteSet[0] - note;
      const newVals = context.noteSet.map((e) => (e - difference + 12) % 12);

      context.updateRoot(note);
      context.updateNoteSet(newVals);
    },
    updateList: (list, index) => updateSingleItem(list, index),
  },
  {
    title: 'Pattern Type',
    icon: <FaIcons.FaWrench />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    page: '/',
    subNav: [
      {
        title: 'Natural Major',
        icon: <IoNewspaper />,
      },
      {
        title: 'Natural Minor',
        icon: <IoNewspaper />,
      },
      {
        title: 'Major Pentatonic',
        icon: <IoNewspaper />,
      },
      {
        title: 'Minor Pentatonic',
        icon: <IoNewspaper />,
      },
      {
        title: 'Major',
        icon: <IoNewspaper />,
      },
      {
        title: 'Major 7',
        icon: <IoNewspaper />,
      },
      {
        title: 'Minor',
        icon: <IoNewspaper />,
      },
      {
        title: 'Minor 7',
        icon: <IoNewspaper />,
      },
      {
        title: 'Dominant 7',
        icon: <IoNewspaper />,
      },
      {
        title: 'Augmented',
        icon: <IoNewspaper />,
      },
      {
        title: 'Diminished',
        icon: <IoNewspaper />,
      },
    ],
    action: (selection) => {
      const {root} = context;
      // Note that only minor chords derived from minor scale.
      // Dim/Aug/Dom chords to be derived from major scale
      const scale = selection.title.includes('Minor') ?
          minorScale(root) : majorScale(root);

      // Assemble set of notes from scale degreees
      const noteSet = () => {
        switch (selection.title) {
          case 'Major Pentatonic':
          case 'Minor Pentatonic':
            // Pentatonic is scale with 4 & 7 degree's ommitted
            return [scale[0], scale[1], scale[2], scale[4], scale[5]];
          case 'Major':
          case 'Minor':
            // Major/minor chords are 1/3/5 of-0 indexed scale
            return [scale[0], scale[2], scale[4]];
          case 'Major 7':
          case 'Minor 7':
            return [scale[0], scale[2], scale[4], scale[6]];
          case 'Dominant 7':
            // Exploiting that dominant7 is Maj7b5 in jazz notation
            return [scale[0], scale[2], scale[4], scale[6] - 1];
          case 'Augmented':
            return [scale[0], scale[2], scale[4] + 1];
          case 'Diminished':
            return [scale[0], scale[2] - 1, scale[4] - 1];
          case 'Natural Major':
          case 'Natural Minor':
          default:
            return scale;
        }
      };
      return context.updateNoteSet(noteSet());
    },
    updateList: (list, index) => updateSingleItem(list, index),
  },
  {
    title: 'Settings',
    icon: <FaIcons.FaCog />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    page: '/',
    subNav: [
      {
        title: 'Dots / Fret Numbers',
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: 'Dot Inlays',
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: 'Fret Numbers',
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: 'Nothing',
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: 'Left Handed',
        icon: <FaIcons.FaClipboardList />,
      },
    ],
    action: (setting) => {
      const {title} = setting;
      if (title.includes('Handed')) context.updateLefty(!context.lefty);
      else {
        context.updateInlays(title.includes('Dot'));
        context.updateFretNumbers(title.includes('Numbers'));
      }
    },
    updateList: (list, index, title) => {
      const newList = list.slice();
      // Preserve other list options if changing handed-ness setting
      if (title.includes('Handed')) {
        newList[index] = !list[index];
      } else {
        newList.fill(false);
        newList[index] = true;
        // Must preserve handed-ness setting when changing other options
        newList[newList.length - 1] = list[list.length - 1];
      }
      return newList;
    },
  },
  {
    title: 'Project Info',
    icon: <IoHelpCircle />,
    path: '/About/',
    page: '/',
    subNav: [],
  },
  {
    title: 'String Theory',
    icon: <FaIcons.FaGuitar />,
    path: '',
    page: '/About/',
    subNav: [],
  },
];
export default menuData;
