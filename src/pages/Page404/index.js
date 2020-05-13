import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyle';

export default function Page404() {
  return (
    <Container>
      <h1>Página não encontrada, por favor retorne a Home</h1>
      <Link to="/">Voltar Para Home</Link>
    </Container>
  );
}
