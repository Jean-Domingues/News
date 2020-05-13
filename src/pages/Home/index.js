import React, { useState, useEffect } from 'react';

import axios from '../../services/axios';
import key from '../../services/config';

import { Title, SubTitle, Principal } from './styled';
import { Container } from '../../styles/GlobalStyle';

import Slider from '../../components/Slider';
import Session from '../../components/Session';
import Aside from '../../components/Aside';

export default function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `top-headlines?country=br&apiKey=${key}`
      );
      // console.log(response.data.articles);
      setNoticias(response.data.articles);
    }
    getData();
  }, []);

  return (
    <Container>
      <Principal>
        <Title>Últimas Notícias</Title>
        <Slider items={noticias} />

        <SubTitle>Tecnologia</SubTitle>
        <Session theme="tecnologia" />
      </Principal>

      <Aside />
    </Container>
  );
}
