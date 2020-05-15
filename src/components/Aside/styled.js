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
  }

  & img {
    width: 40%;
    max-height: 120px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1220px) {
    display: block;
    width: 100%;
    margin: 20px auto;
    & .text,
    & img {
      width: 100%;
      max-height: 150px;
      text-align: center;
    }
  }
`;

export const Title = styled.h2`
  color: #5f1007;
  padding: 10px;
  font-size: 18px;
`;

export const SelectThemes = styled.select`
  padding: 10px;
  color: white;
  background: #661209;
  width: 100%;
  font-size: 20px;

  & option:checked {
    background: #b42010;
  }
`;
