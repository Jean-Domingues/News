import styled from 'styled-components';

export const AsideContainer = styled.aside`
  background: white;
  width: 32%;
  padding: 20px;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Card = styled.div`
  border: 1px solid gray;
  width: 100%;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    filter: brightness(0.9);
  }

  & .text {
    width: 60%;
    height: 100%;
  }

  & div {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1220px) {
    display: block;
    width: 80%;
    margin: 20px auto;
    & .text,
    & div {
      width: 100%;
      text-align: center;
    }
  }
`;

export const Title = styled.h2`
  color: #5f1007;
  padding: 10px;
  font-size: 18px;
`;

export const Themes = styled.article`
  padding-bottom: 10px;
  border-bottom: 1px dotted gray;
`;

export const SelectThemes = styled.select`
  padding: 10px;
  color: #5f1007;
  width: 100%;
  font-size: 20px;
  text-decoration: underline;
  font-weight: bold;
`;
