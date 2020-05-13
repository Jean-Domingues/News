import styled from 'styled-components';

export const Notice = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 45%;
  min-width: 240px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const ThemeNotices = styled.section`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: space-around;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
`;

export const Title = styled.h2`
  color: #550000;
  margin-bottom: 10px;
  font-size: 20px;
`;
