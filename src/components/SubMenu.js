import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalContext, mapNoteToNumber, mapNumberToNote } from '../GlobalsAndContext'

const SidebarLink = styled(Link)`
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
  font-size: 16: px;
`;

const DropdownLink = styled.div`
  background: ${props => (props.selected ? '#632ce4;' : '#414757;')} 
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
    if (this.props.item.editable) {
      list = this.context.tuning
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

    const updateTuning = (input, index) => {
      input = input.trim().toLowerCase();
      if (input.length < 1)
        return false;
      if (input.length > 2)
        input = input.substring(0, 2);

      input = input.toUpperCase().charAt(0) + input.slice(1);
      const note = mapNoteToNumber(input)
      if (note < 0)
        return false;

      this.context.tuning[index] = note;
      const list = this.state.list.slice();
      list[index] = input;
      this.setState({ list });

      return input;
    }

    return (
      <>
        <SidebarLink to={item.path} onClick={showSubNavigation}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {this.state.showSubNavigation ? item.iconOpened : item.iconClosed}
          </div>
        </SidebarLink>
        <div style={{ overflowY: 'auto', maxHeight: '40vh' }}>
          {this.state.showSubNavigation &&
            item.subNav.map((subItem, index) => {
              return (
                <DropdownLink key={index} selected={this.state.list[index] === true}
                  onClick={() => {
                    item.action(subItem); // Each menu item has a custom action associated with, and updates how its choices
                    this.setState({       // are selected and colored differently. 
                      list:
                        item.updateList(this.state.list, index, subItem.title)
                    })
                  }}
                >
                  {subItem.icon}
                  <SidebarLabel contentEditable={item.editable} spellCheck={false}
                    onBlur={(e) => {
                      e.currentTarget.textContent = updateTuning(e.currentTarget.textContent, index) || subItem.title;
                      this.context.resetState(); // update fretboard dynamically
                    }}
                    onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Tab') && (e.currentTarget.blur())}
                  >
                    {subItem.title}
                  </SidebarLabel>
                </DropdownLink>
              );
            })
          }
        </div >
      </ >
    )
  }
}
Submenu.contextType = GlobalContext

/*
Todo list:
1) If root note is G# or Ab, make it switch to the other when mode changes
  Or, take away sharps/flat mode from user and manually do it depending on scale.
9) Clean up code
10) Custom ('select as many notes as you want')
11.5) Put all styled div's in one file and pull for reuse
12) re-add hidden ab/g# but have no default root, and make default scale chromatic- that is also default scale option
13) info page
15) something funky happens if you do a# major in # mode
*/