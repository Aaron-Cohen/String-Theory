import React from 'react';
import styled from 'styled-components'

const About = () => {
  return (
    <Page>
      <div>
        <h2 >About String Theory</h2>
        <Welcome>
          <Body>
            <br />
            <Text>
              This is my first project using the React Javascript framework.
            </Text>
            <Text>
              I built this program to make alternative tunings on guitar more accessible without
              needing a strong music theory background.
            </Text>

            <p>
              {"You can find my source code "}
              <a href="https://github.com/Aaron-Cohen/StringTheory" target="_blank" rel="noreferrer" style={{ display: 'inline' }}>
                {"here,"}
              </a>{" and if you have any feedback, please reach out to me on github in the link above."}
            </p></Body>
        </Welcome>
      </div>
    </Page>
  );
};

const Body = styled.div`
  display: inline;
  margin-top: 2%;
  font-size: 1.5rem;
  line-height: 2rem;
`

const Text = styled.p`
  margin: 5px;
`

const Welcome = styled.div`
  margin-top: 2%;
  word-wrap: normal;
  font-size: 2.5rem;
`

const Page = styled.div`
  display: flex;
  margin: 5% 15% 5% 20%;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  overflow: hidden;
`

export default About;
