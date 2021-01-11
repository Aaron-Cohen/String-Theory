import React, { useContext } from 'react';
import { GlobalContext, mapNumberToNote } from '../GlobalsAndContext'
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as CgIcons from 'react-icons/cg';


// const listOfNotes = [
//   {
//     title: 'A',
//     icon: <FaIcons.FaMapPin />
//   },
//   {
//     title: 'A#',
//     icon: <FaIcons.FaMapPin />
//   },
//   {
//     title: 'Bb',
//     icon: <FaIcons.FaMapPin />
//   },
// ]

export const SidebarData = () => {
  const context = useContext(GlobalContext)
  return [
    {
      title: 'Sharp/Flat Mode',
      icon: <FaIcons.FaSlidersH />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
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
      action: (choice) => context.updateMode(choice)
    },
    {
      title: 'Tuning',
      icon: <FaIcons.FaGuitar />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
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
      disableOneHot: true,
      action: () => { }
    },
    {
      title: 'Root Note / Key',
      path: '/overview',
      icon: <FaIcons.FaSortAlphaDown />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: 'Ab',
          hide: context.mode !== 'Flats',
          icon: <FaIcons.FaMapPin />
        },
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
          title: 'G#',
          hide: context.mode !== 'Sharps',
          icon: <FaIcons.FaMapPin />
        }
      ]
    },
    {
      title: 'Pattern Type',
      path: '/reports',
      icon: <IoIcons.IoIosPaper />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: 'Reports',
          path: '/reports/reports1',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Reports 2',
          path: '/reports/reports2',
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        },
        {
          title: 'Reports 3',
          path: '/reports/reports3',
          icon: <IoIcons.IoIosPaper />
        }
      ]
    },
    {
      title: 'Flavor',
      path: '/products',
      icon: <FaIcons.FaCartPlus />
    },
    {
      title: 'Embellishment',
      path: '/team',
      icon: <IoIcons.IoMdPeople />
    },
    {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />
    }
  ]
};
