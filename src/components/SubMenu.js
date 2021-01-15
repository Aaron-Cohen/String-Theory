import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalContext, mapNoteToNumber } from '../GlobalsAndContext'

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

const SidebarPanel = styled.div`
  overflow-y: auto;
  max-height: 40vh;
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
      // List stores what subitems are to be highlighted
      list: [],
      showSubNavigation: false
    }
  }

  // By default, highlight first option in each menu item, except for tuning which is editable
  componentDidMount() {
    let list = new Array(this.props.item.subNav.length).fill(false);
    list[0] = !this.props.item.editable;
    this.setState({ list })
  }

  // Returns false upon bad user input, otherwise updates tuning accordingly
  updateTuning = (input, index) => {
    input = input.trim().toLowerCase();
    if (input.length < 1)
      return false;
    if (input.length > 2)
      input = input.substring(0, 2);

    input = input.toUpperCase().charAt(0) + input.slice(1);
    const note = mapNoteToNumber(input)
    if (note < 0)
      return false;

    // Input is determined to be valid at this point.
    // Must update context's tuning so fretboard can update,
    // but the local state must be updated so sidebar reflects
    // accurate tuning information
    this.context.updateTuning(index, note);
    return input;
  }

  render() {
    const item = this.props.item;
    const showSubNavigation = () => this.setState({ showSubNavigation: !this.state.showSubNavigation });

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
        <SidebarPanel>
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
                      e.currentTarget.textContent = this.updateTuning(e.currentTarget.textContent, index) || subItem.title;
                    }}
                    onKeyDown={(e) => (e.code === 'Enter' || e.code === 'Tab') && (e.currentTarget.blur())}
                  >
                    {subItem.title}
                  </SidebarLabel>
                </DropdownLink>
              );
            })
          }
        </SidebarPanel>
      </ >
    )
  }
}
Submenu.contextType = GlobalContext