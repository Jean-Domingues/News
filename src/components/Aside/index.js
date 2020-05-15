import React, { useEffect, useState } from 'react';
import { AsideContainer, Title, Card, SelectThemes } from './styled';

import axios from '../../services/axios';
import key from '../../services/config';
import history from '../../services/History';

export default function Aside() {
  const [theme, setTheme] = useState('Cinema');
  const [notices, setNotices] = useState([]);

  function handleChangeTheme(e) {
    setTheme(e.target.value);
  }

  function handleClickNotice(item) {
    localStorage.setItem('notice', JSON.stringify(item));

    history.push('/details');
  }

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/everything?q=${theme}&language=pt&pageSize=10&apiKey=${key}`
      );
      setNotices(response.data.articles);
    }
    getData();
  }, [theme]);

  return (
    <AsideContainer>
      <SelectThemes onChange={handleChangeTheme} id="themes">
        <option value="cinema">Cinema</option>
        <option value="celebridades">Celebridades</option>
        <option value="musica">Música</option>
        <option value="esporte">Esportes</option>
        <option value="filme">Filmes</option>
        <option value="game">Games</option>
        <option value="politica">Política</option>
      </SelectThemes>
      {notices.map((item) => {
        return (
          <Card onClick={() => handleClickNotice(item)} key={item.url}>
            <img src={item.urlToImage} alt="imagem da noticia" />

            <div className="text">
              <Title>{item.title}</Title>
            </div>
          </Card>
        );
      })}
    </AsideContainer>
  );
}
