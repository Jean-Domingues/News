import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import axios from '../../services/axios';
import key from '../../services/config';
import history from '../../services/History';

import { Results, SearchContainer, Notice, Title, TopArea } from './styled';

export default function Search() {
  const [theme, setTheme] = useState(false);
  const [notices, setNotices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setTheme(location.state.theme);
    } else {
      history.push('/notFund');
    }
  }, [location]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/everything?q=${theme}&language=pt&pageSize=10&apiKey=${key}`
      );
      setNotices(response.data.articles);
    }
    if (theme) {
      getData();
    }
  }, [theme]);

  return (
    <SearchContainer>
      <TopArea>
        <Link to="/">
          <FaArrowLeft size={32} color="#5f1007" />
        </Link>
        <Results>Exibindo resultados para: {theme}</Results>
      </TopArea>
      {notices.map((item, id) => {
        return item.urlToImage ? (
          <Notice>
            <Title>
              <a href={item.url}>{item.title}</a>
            </Title>
            <img src={item.urlToImage} alt="imagem da noticia" />
            <p>{item.description}</p>
          </Notice>
        ) : (
            <></>
          );
      })}
    </SearchContainer>
  );
}
