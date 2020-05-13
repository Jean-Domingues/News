import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background: #661209;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;

    & li {
      padding: 0 15px;
      color: white;
      text-decoration: none;
      font-size: 18px;
      border-right: 1px solid white;

      label {
        display: flex;
        align-items: center;
      }
    }
  }

  .not-border {
    border: 0;
  }
`;

export const Pesquisa = styled.input`
  align-self: center;
  border-radius: 8px;
  margin-left: 8px;
  width: 90%;
  border: none;
  padding: 2px 6px;
  font-size: 18px;
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-right: 5px;
`;

export const Logo = styled(Link)`
  color: white;
  margin-left: 5%;
  font-size: 32px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
