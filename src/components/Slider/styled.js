import styled from 'styled-components';

export const Box = styled.article`
  width: 100%;
  display: flex;
  margin: auto;
  position: relative;
  overflow: hidden;

  button {
    position: absolute;
    height: 100%;
    cursor: pointer;
    width: 8%;
    opacity: 50%;
    border: none;
    z-index: 1;
  }

  button:hover {
    filter: brightness(70%);
  }
`;

export const BoxWrapper = styled.section`
  width: 80%;
  display: flex;
  margin: auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  transition: all 1s;
`;

export const ButtonPrev = styled.button`
  top: 0;
  left: 0;
`;

export const ButtonNext = styled.button`
  top: 0;
  right: 0;
`;
