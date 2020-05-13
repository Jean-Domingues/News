import styled from 'styled-components';

export const Title = styled.h1`
  color: #5f1007;
  font-size: 38px;
  margin: 10px 0 20px 0;
  border-bottom: 1px solid black;
`;

export const SubTitle = styled.h2`
  color: #5f1007;
  font-size: 28px;
  text-decoration: underline;
  margin: 20px;
  padding-top: 20px;
  border-top: 1px solid gray;
`;

export const Lateral = styled.aside`
  @media (max-width: 860px) {
    display: none;
  }

  width: 15%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background: #fff;
`;

export const Principal = styled.article`
  width: 65%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background: #fff;

  @media (max-width: 960px) {
    width: 90%;
  }
`;
