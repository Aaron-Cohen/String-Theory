import React from 'react';
import styled from 'styled-components';
import * as Fa from 'react-icons/fa/';

const PageNotFound = () => {
  return (
    <Page>
      <div>
        <div style={{ textAlign: 'center', marginBottom: '5%' }}>
          <h2 >Page Not Found</h2>
        </div>
        <Body>
          <Text>
            It looks like you are trying to access a page that does not exist. Click
            <Link to="#/" text="here" />
           to return to String Theory.
          </Text>
          <div style={{ textAlign: 'center', fontSize: '33vh' }}>
            <Fa.FaRegFrown />
          </div>
        </Body>
      </div>
    </Page >
  );
};

const Link = (props) => (
  <a href={props.to} style={{ display: 'inline', color: 'blue', margin: '.25em' }}>
    {props.text}
  </a>
)

const Body = styled.div`
  display: inline;
  margin-top: 15px;
  font-size: 2rem;
`

const Text = styled.p`
  margin: 33px;
  line-height: 2.5rem;
  text-align: center;
`

const Page = styled.div`
  display: inline-flex;
  margin: 4% 15% 5% 20%;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  overflow: hidden;
`

export default PageNotFound;
