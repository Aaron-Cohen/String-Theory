import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../GlobalsAndContext'

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
    let list = [];
    if (this.props.item.disableOneHot) {
      list = ['E', 'B', 'G', 'D', 'A', 'E']
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

    const updateText = (e, index) => {
      const list = this.state.list.slice();
      list[index] = e;
      this.setState({ list })
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
        <div style={{ overflowY: 'auto', maxHeight: '50vh' }}>
          {this.state.showSubNavigation &&
            item.subNav.map((subItem, index) => {
              const originalContent = subItem.title;
              return (
                !subItem.hide &&
                <DropdownLink to={subItem.path} key={index} selected={this.state.list[index] === true}
                  onClick={() => (!item.disableOneHot && updateColor(index)) && item.action(subItem.title)} >
                  {subItem.icon}
                  < SidebarLabel contentEditable={item.disableOneHot} onBlur={(e) => updateText(e, index)}> {subItem.title}</SidebarLabel>
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