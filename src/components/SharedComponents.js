import styled from 'styled-components';

export const GuitarRow = styled.div`
  display: flex;
  width: 75vw;
  max-height: 15vh;
`;

export const Nut = styled.div`
  background-color: ${(props) => (props.hideNut ? 'transparent;' : '#e0955c;')}
  border: 3px solid #dcdcdc;
  border-radius:6px;
  font-size: 15px;
  font-weight: bold;
  width: 25px;
  min-width: 10px;
`;

export const Body = styled.div`
  display: inline;
  margin-top: 15px;
  font-size: 2rem;
`;

export const Page = styled.div`
  display: inline-flex;
  margin: 4% 15% 5% 20%;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  overflow: hidden;
`;

export default GuitarRow;
