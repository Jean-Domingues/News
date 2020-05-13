import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  background: #ccc;
  font-family: 'Roboto', sans-serif;
}
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
