import styled from 'styled-components';

export const DetailsContainer = styled.main`
  width: 90%;
  background: white;
  padding: 40px;
  margin: 20px auto;

  & svg:hover {
    filter: brightness(1.5);
    cursor: pointer;
  }
`;

export const Notice = styled.article`
  width: 80%;

  margin: auto;
  padding: 20px;

  & img {
    width: 90%;
    margin: 20px auto;
    border: 5px solid #ccc;
    display: block;
  }

  & h4 {
    font-size: 26px;
  }
`;

export const Title = styled.h1`
  color: #5f1007;
  font-size: 32px;
  text-decoration: underline;
  padding: 20px 20px 20px 20px;
`;

export const Content = styled.section`
  width: 90%;
  margin: 20px auto;
  padding-bottom: 20px;

  p {
    margin-top: 20px;
    font-size: 22px;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #5f1007;
  }

  a:hover {
    filter: brightness(1.5);
  }
`;
