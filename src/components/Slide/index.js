import React from 'react';
import { Card, TitleNotice } from './styled';

import history from '../../services/History';

// eslint-disable
export default function Slide({ noticia }) {
  function handleClickNotice(item) {
    localStorage.setItem('notice', JSON.stringify(item));

    history.push('/details');
  }

  return (
    <Card
      href={noticia.url}
      onClick={() => handleClickNotice(noticia)}
      imagem={noticia.urlToImage}
    >
      <TitleNotice>{noticia.title}</TitleNotice>
    </Card>
  );
}
