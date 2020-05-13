import React, { useEffect, useState } from 'react';

import axios from '../../services/axios';
import key from '../../services/config';
import history from '../../services/History';

import { ThemeNotices, Notice, Title, Image } from './styled';

export default function Session({ theme }) {
  const [noticias, setNoticias] = useState([]);

  function handleClickNotice(item) {
    localStorage.setItem('notice', JSON.stringify(item));

    history.push('/details');
  }

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/everything?q=${theme}&language=pt&pageSize=6&apiKey=${key}`
      );
      setNoticias(response.data.articles);
    }
    getData();
  }, [theme]);

  return (
    <ThemeNotices>
      {noticias.map((item) => {
        return !item.urlToImage ? (
          <></>
        ) : (
            <Notice onClick={() => handleClickNotice(item)} key={item.url}>
              <Title>{item.title}</Title>
              <Image src={item.urlToImage} alt="imagem da noticia" />
            </Notice>
          );
      })}
    </ThemeNotices>
  );
}
