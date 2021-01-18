import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useLocation } from 'react-router-dom'
import GlobalContext, { validPages } from '../GlobalsAndContext';

// Black bar at top of page
const Nav = styled.div`
  background: #15171c;
  height: max(10vh, 75px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// Icon to expand sidebar
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// Sidebar sliding pane
const SidebarNav = styled.nav`
  background: #15171c;
  width: 19rem;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${props => (props.visible ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

// Wrapper to hold items in sidebar
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const path = useLocation().pathname;
  const context = useContext(GlobalContext);
  const sidebar = context.sidebar;
  const showSidebar = (show) => context.updateSidebar(show);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          {validPages.includes(path) &&
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={() => showSidebar(!sidebar)} />
            </NavIcon>}
        </Nav>
        <SidebarNav visible={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={() => showSidebar(!sidebar)} />
            </NavIcon>
            {SidebarData().map((item, index) => {
              return (item.page === path) && <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
