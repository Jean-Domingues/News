import styled from 'styled-components';

export const TopArea = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
`;

export const Results = styled.h2`
  color: #5f1007;
  margin-left: 20px;
  font-size: 22px;
  text-decoration: underline;
  font-style: italic;
`;

export const SearchContainer = styled.main`
  background: white;
  width: 80%;
  margin: auto;
  padding-bottom: 40px;
`;

export const Notice = styled.section`
  width: 80%;
  margin: auto;
  border: 1px solid gray;
  margin-bottom: 20px;
  text-decoration: none;

  & img {
    width: 90%;
    display: block;
    margin: auto;
  }

  & p {
    color: black;
    padding: 15px;
    font-size: 24px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  padding: 20px 10px;

  & a {
    color: #5f1007;
    text-decoration: underline;
  }

  & a:hover {
    color: #c01d2d;
  }
`;
