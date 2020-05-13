import React from 'react';

import { FaSearch, FaNewspaper } from 'react-icons/fa';
import history from '../../services/History';

import { Header, Logo, A, Pesquisa, NavBar } from './styled';

export default function Head() {
  function handleSearch(e) {
    if (e.key === 'Enter') {
      history.push('/search', { theme: e.target.value });
      e.target.value = '';
    }
  }

  return (
    <Header>
      <Logo to="/">
        <p>News</p>
        <FaNewspaper />
      </Logo>

      <NavBar>
        <ul>
          <li>
            <A href="/">+Notícias</A>
          </li>
          <li className="not-border">
            {/* eslint-disable-next-line */}
            <label>
              <FaSearch size={20} />
              <Pesquisa
                onKeyPress={handleSearch}
                id="barra-pesquisa"
                type="text"
                placeholder="Pesquisar"
              />
            </label>
          </li>
        </ul>
      </NavBar>
    </Header>
  );
}
