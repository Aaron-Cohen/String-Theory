import React, { useContext } from 'react';
import { GlobalContext, mapNoteToNumber, mapNumberToNote, majorScale, minorScale } from '../GlobalsAndContext'
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = () => {
  const context = useContext(GlobalContext)
  return [
    {
      title: 'Sharp/Flat Mode',
      icon: <FaIcons.FaSlidersH />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      page: '/StringTheory',
      subNav: [
        {
          title: 'Sharps',
          icon: <FaIcons.FaHashtag />,
        },
        {
          title: 'Flats',
          icon: <CgIcons.CgTrendingDown />,
        }
      ],
      action: (choice) => context.updateMode(choice.title),
      updateList: (list, index) => updateSingleItem(list, index)
    },
    {
      title: 'Custom Tuning',
      icon: <FaIcons.FaGuitar />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      page: '/StringTheory',
      subNav: [
        {
          title: mapNumberToNote(context.tuning[0], context.mode),
          icon: <GiIcons.GiTunePitch />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              title: 'inner level',
              icon: <FaIcons.FaGuitar />
            },
            {
              title: 'inner level',
              icon: <FaIcons.FaGuitar />
            }
          ]
        },
        {
          title: mapNumberToNote(context.tuning[1], context.mode),
          icon: <GiIcons.GiTunePitch />
        },
        {
          title: mapNumberToNote(context.tuning[2], context.mode),
          icon: <GiIcons.GiTunePitch />
        },
        {
          title: mapNumberToNote(context.tuning[3], context.mode),
          icon: <GiIcons.GiTunePitch />
        },
        {
          title: mapNumberToNote(context.tuning[4], context.mode),
          icon: <GiIcons.GiTunePitch />
        },
        {
          title: mapNumberToNote(context.tuning[5], context.mode),
          icon: <GiIcons.GiTunePitch />
        }
      ],
      editable: true,
      action: () => { },
      updateList: (list) => list
    },
    {
      title: 'Tuning Presets',
      icon: <FaIcons.FaUserCog />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      page: '/StringTheory',
      subNav: [
        {
          title: 'Standard',
          tuning: ['E', 'B', 'G', 'D', 'A', 'E'],
          icon: <FaIcons.FaUserAlt />
        },
        {
          title: 'Open G',
          tuning: ['D', 'B', 'G', 'D', 'G', 'D'],
          icon: <FaIcons.FaUserAlt />
        },
        {
          title: 'Open D',
          tuning: ['D', 'A', 'F#', 'D', 'A', 'D'],
          icon: <FaIcons.FaUserAlt />
        },
        {
          title: 'Drop D',
          tuning: ['E', 'B', 'G', 'D', 'A', 'D'],
          icon: <FaIcons.FaUserAlt />
        },
        {
          title: 'Drop C',
          tuning: ['E', 'B', 'G', 'D', 'A', 'C'],
          icon: <FaIcons.FaUserAlt />
        },
        {
          title: 'E C G C A C\n(Mumford & Sons)',
          tuning: ['E', 'C', 'G', 'C', 'A', 'C'],
          icon: <FaIcons.FaUserAlt />
        },
        {
          title: 'E C G C A F\n(American Football)',
          tuning: ['E', 'C', 'G', 'C', 'A', 'F'],
          icon: <FaIcons.FaUserAlt />
        },
        {
          title: 'E A G C A F\n(Yvette Young)',
          tuning: ['E', 'A', 'G', 'C', 'A', 'F'],
          icon: <FaIcons.FaUserAlt />
        },
      ],
      action: (info) => context.setTuning(info.tuning.map(e => mapNoteToNumber(e))),
      updateList: (list, index) => updateSingleItem(list, index)
    },
    {
      title: 'Root Note / Key',
      icon: <FaIcons.FaSortAlphaDown />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      page: '/StringTheory',
      subNav: [
        {
          title: 'A',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: context.mode === 'Sharps' ? 'A#' : 'Bb',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: 'B',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: 'C',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: context.mode === 'Sharps' ? 'C#' : 'Db',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: 'D',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: context.mode === 'Sharps' ? 'D#' : 'Eb',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: 'E',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: 'F',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: context.mode === 'Sharps' ? 'F#' : 'Gb',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: 'G',
          icon: <FaIcons.FaMapPin />
        },
        {
          title: context.mode === 'Sharps' ? 'G#' : 'Ab',
          icon: <FaIcons.FaMapPin />
        }
      ],
      action: (root) => {
        root = root.title;
        // Two-part approach: update root, but also recalculate whatever set of notes is present
        // with relation to new root
        const note = mapNoteToNumber(root);
        context.updateRoot(note);
        let difference = context.noteSet[0] - note;
        const newVals = context.noteSet.map(e => (e - difference + 12) % 12);
        context.updateNoteSet(newVals)
      },
      updateList: (list, index) => updateSingleItem(list, index)
    },
    {
      title: 'Pattern Type',
      icon: <FaIcons.FaWrench />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      page: '/StringTheory',
      subNav: [
        {
          title: 'Natural Major',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Natural Minor',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Major Pentatonic',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Minor Pentatonic',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Major',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Major 7',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Minor',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Minor 7',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Dominant 7',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Augmented',
          icon: <IoIcons.IoNewspaper />,
        },
        {
          title: 'Diminished',
          icon: <IoIcons.IoNewspaper />,
        }
      ],
      action: (selection) => {
        const { root } = context;
        // Note that only minor chords derived from minor scale. All other flavors to be derived from major scale
        const scale = selection.title.includes('Minor') ? minorScale(root) : majorScale(root);

        // Handle scales explicitly before chord logic
        switch (selection.title) {
          case 'Natural Major':
          case 'Natural Minor':
            return context.updateNoteSet(scale);
          case 'Major Pentatonic':
          case 'Minor Pentatonic':
            return context.updateNoteSet([scale[0], scale[1], scale[2], scale[4], scale[5]]); // Pentatonic is scale with 4 & 7 degree's ommitted
          case 'Major':
          case 'Minor':
            return context.updateNoteSet([scale[0], scale[2], scale[4]]); // Major/minor chords are 1/3/5 of-0 indexed scale
          case 'Major 7':
          case 'Minor 7':
            return context.updateNoteSet([scale[0], scale[2], scale[4], scale[6]]); // Major/minor 7 chords are 1/3/5/7 of-0 indexed scale
          case 'Dominant 7':
            return context.updateNoteSet([scale[0], scale[2], scale[4], scale[6] - 1]); // Exploiting that dominant7 is Maj7b5 in jazz notation
          case 'Augmented':
            return context.updateNoteSet([scale[0], scale[2], scale[4] + 1]) // Augmented implies sharp fifth
          case 'Diminished':
            return context.updateNoteSet([scale[0], scale[2] - 1, scale[4] - 1]) // Augmented implies flat third, fifth
          default:
            throw context.updateNoteSet(scale);
        }
      },
      updateList: (list, index) => updateSingleItem(list, index)
    },
    {
      title: 'Settings',
      icon: <FaIcons.FaCog />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      page: '/StringTheory',
      subNav: [
        {
          title: 'Dots / Fret Numbers',
          icon: <FaIcons.FaClipboardList />
        },
        {
          title: 'Dot Inlays',
          icon: <FaIcons.FaClipboardList />
        },
        {
          title: 'Fret Numbers',
          icon: <FaIcons.FaClipboardList />
        },
        {
          title: 'Nothing',
          icon: <FaIcons.FaClipboardList />
        },
        {
          title: 'Left Handed',
          icon: <FaIcons.FaClipboardList />,
        }
      ],
      action: (setting) => {
        const { title } = setting;
        if (title.includes('Handed'))
          context.updateLefty(!context.lefty);
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
        }
        else {
          newList.fill(false);
          newList[index] = true;
          // Must preserve handed-ness setting when changing other options
          newList[newList.length - 1] = list[list.length - 1]
        }
        return newList;
      }
    },
    {
      title: 'Project Info',
      icon: <IoIcons.IoHelpCircle />,
      path: '/About',
      page: '/StringTheory',
      subNav: []
    },
    {
      title: 'String Theory',
      icon: <FaIcons.FaGuitar />,
      path: '/StringTheory',
      page: '/About',
      subNav: []
    }
  ]
};

/**
  Returns a boolean array of same length as
  input list containing all falses, but with
  a true at index of second parameter
*/
const updateSingleItem = (list, index) => {
  list = new Array(list.length).fill(false);
  list[index] = true;
  return list;
}