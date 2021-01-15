import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalsAndContext'

// Top level item in menu
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 55px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

// Holds secondary level choices
const SidebarPanel = styled.div`
  overflow-y: auto;
  max-height: 50vh;
`;

// Secondary level options
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

// Text for secondary level choice options
const SidebarLabel = styled.span`
  margin-left: 16px;
  padding: 20px;
  font-size: 16: px;
`;

export default class Submenu extends Component {
  constructor(props) {
    super(props);               // Prop of item holds top level menu choice. Defined in SidebarData.js
    this.state = {
      list: [],                 // Subitems to be highlighted from item prop
      showSubNavigation: false  // Whether menu choice is expanded or not
    }
  }

  // By default, highlight first option in each menu item, except for tuning which has isEditable === true
  componentDidMount() {
    let list = new Array(this.props.item.subNav.length).fill(false);
    list[0] = !this.props.item.editable;
    this.setState({ list })
  }

  render() {
    const item = this.props.item;
    const forceCollapseSidebar = () => this.context.updateSidebar(false)
    const showSubNavigation = () => this.setState({ showSubNavigation: !this.state.showSubNavigation });

    return (
      <>
        <SidebarLink to={item.path} onClick={!item.path ? showSubNavigation : forceCollapseSidebar}>
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
                    item.action(subItem); // Each menu item has a custom action associated with, and updates
                    this.setState({       // how its choices are selected and colored differently. 
                      list:
                        item.updateList(this.state.list, index, subItem.title)
                    })
                  }}
                >
                  {subItem.icon}
                  <SidebarLabel contentEditable={item.editable} spellCheck={false}
                    onBlur={(e) => {
                      e.currentTarget.textContent =
                        item.updateTuning(e.currentTarget.textContent, index) || subItem.title;
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