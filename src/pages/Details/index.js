import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import { DetailsContainer, Title, Content, Notice } from './styled';

export default function Details() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    async function getData() {
      await setNotice(JSON.parse(localStorage.getItem('notice')));
    }
    getData();
  }, []);

  return (
    <DetailsContainer>
      <Link to="/">
        <FaArrowLeft size={32} color="#5f1007" />
      </Link>

      <Notice>
        <Title>{notice.title}</Title>
        <img src={notice.urlToImage} alt="Imagem da noticia" />

        <Content>
          <h4>{notice.description}</h4>
          <p>
            {`${notice.content}`.slice(0, `${notice.content}`.length - 13)}
            <a href={notice.url}>Leia mais</a>
          </p>
        </Content>
      </Notice>
    </DetailsContainer>
  );
}
