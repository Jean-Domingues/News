import styled from 'styled-components';

export const Card = styled.section`
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  background-image: url('${(props) => props.imagem}');
  background-size: cover;
  background-clip: content-box;
  background-position: center;
  min-width: 100%;
  height: 450px;
  @media (max-width: 860px) {
    height: 250px;
    font-size: 12px;
  }
`;

export const TitleNotice = styled.h2`
  font-size: 1.4em;
  padding: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
`;
