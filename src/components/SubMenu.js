import React, { Component } from 'react';
import styled from 'styled-components';
import { defaultTuningArray, GlobalContext, mapNoteToNumber, mapNumberToNote } from '../GlobalsAndContext'

const SidebarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  padding: 20px;
`;

const DropdownLink = styled.div`
  background: ${props => (props.selected ? '#632ce4;' : '#414757;')} 
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

export default class Submenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // List stores the color selections for every option except for tuning. In tuning, it logs the
      list: new Array(this.props.item.subNav ? this.props.item.subNav.length : 0),
      showSubNavigation: false
    }
  }

  componentDidMount() {
    let list = null;
    if (this.props.item.disableOneHot) {
      list = defaultTuningArray
    }
    else {
      list = new Array(this.props.item.subNav ? this.props.item.subNav.length : 1);
      list.fill(false);
      list[0] = true;
    }
    this.setState({ list })
  }

  render() {
    const item = this.props.item;
    const showSubNavigation = () => this.setState({ showSubNavigation: !this.state.showSubNavigation });

    /**
     * One-hot colorer for submenu choices.
     * If index is positive or zero, colors specified index, resets other indicies.
     * If index is negative, no choices get colored.
     */
    const updateColor = (index) => {
      const list = new Array(this.state.list.length).fill(false)
      if (index >= 0)
        list[index] = true

      this.setState({ list })
      return true
    }

    const updateTuning = (newContent, originalContent, index) => {
      newContent = newContent.trim().toLowerCase();
      if (newContent.length < 1) {
        return originalContent;
      }
      else if (newContent.length > 2) {
        newContent = newContent.substring(0, 2);
      }

      newContent = newContent.toUpperCase().charAt(0) + newContent.slice(1)

      // Number must map to a note
      const note = mapNoteToNumber(newContent)
      if (note < 0)
        return originalContent;

      this.context.tuning[index] = note;
      const list = this.state.list.slice();
      list[index] = newContent;
      this.setState({ list });

      return newContent;
    }

    return (
      <div>
        <SidebarLink to={item.path} onClick={showSubNavigation}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {this.state.subnav ? item.iconOpened : item.iconClosed}
          </div>
        </SidebarLink>
        <div style={{ overflowY: 'auto', maxHeight: '45vh' }}>
          {this.state.showSubNavigation &&
            item.subNav.map((subItem, index) => {
              const originalContent = subItem.title;
              return (
                <DropdownLink key={index} selected={this.state.list[index] === true}
                  onClick={() => (!item.disableOneHot && updateColor(index)) && item.action(subItem.title)} >
                  {subItem.icon}
                  <SidebarLabel contentEditable={item.disableOneHot} spellCheck={false}
                    onBlur={(e) => {
                      if (item.disableOneHot)
                        e.currentTarget.textContent = updateTuning(e.currentTarget.textContent, originalContent, index);
                    }}>
                    {item.disableOneHot ? mapNumberToNote(this.context.tuning[index], this.context.mode) : originalContent}
                  </SidebarLabel>
                </DropdownLink>
              );
            })
          }
        </div >
      </div >
    )
  }
}
Submenu.contextType = GlobalContext

/*
Todo list:
1) If root note is G# or Ab, make it switch to the other when mode changes
2) Slide fretboard right when sidebar opens
3) Update fretboard while sidebar is open
4) Setting to toggle inlays
5) Nut for open fret
6) A and A# same note?
7) Scrollbars when not needed in sidebar
8) Page only updates when new scale selected
*/