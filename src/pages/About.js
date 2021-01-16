import React from 'react';
import styled from 'styled-components'

const About = () => {
  return (
    <Page>
      <div>
        <div style={{ textAlign: 'center', marginBottom: '5%' }}>
          <h2 >About String Theory</h2>
        </div>
        <Body>
          <Text>
            I built this program to make alternative tunings on guitar
            more accessible without needing a strong music theory background.
            For more information, check out the Wikipedia page for
              <Link to="https://en.wikipedia.org/wiki/Scordatura" text="Scordatura." />
          </Text>
          <Text>
            This is my first project using the React framework. You can find the source code
              <Link to="https://github.com/Aaron-Cohen/String-Theory" text="here." />
            If you have any improvements to the source code, or notice any bugs, please reach out to me on my
            <Link to="https://www.linkedin.com/in/-aaroncohen/" text="LinkedIn." />
          </Text>
          <Text>
            Thank you for using String Theory. Happy strumming!
          </Text>
        </Body>
      </div>
    </Page>
  );
};

const Link = (props) => (
  <a href={props.to} target="_blank" rel="noreferrer" style={{ display: 'inline', color: 'blue', margin: '.25em' }}>
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
`

const Page = styled.div`
  display: inline-flex;
  margin: 4% 15% 5% 20%;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  overflow: hidden;
`

export default About;
