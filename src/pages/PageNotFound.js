import React from 'react';
import styled from 'styled-components';
import * as Fa from 'react-icons/fa/';
import {Body, Page} from '../components/SharedComponents';

const PageNotFound = () => {
  return (
    <Page>
      <div>
        <div style={{textAlign: 'center', marginBottom: '5%'}}>
          <h2 >Page Not Found</h2>
        </div>
        <Body>
          <Text>
            It looks like you are trying to access a page
            that does not exist. Click
            <Link to="#/" text="here" />
           to return to String Theory.
          </Text>
          <div style={{textAlign: 'center', fontSize: '33vh'}}>
            <Fa.FaRegFrown />
          </div>
        </Body>
      </div>
    </Page >
  );
};

const Link = (props) => (
  <a
    href={props.to}
    style={{display: 'inline', color: 'blue', margin: '.25em'}}>
    {props.text}
  </a>
);

const Text = styled.p`
  margin: 33px;
  line-height: 2.5rem;
  text-align: center;
`;
export default PageNotFound;
