import { useEffect, useState } from 'react';
import styled from 'styled-components';
import bookImg from '../images/book.png';

import { deleteFavorite, getFavorites } from '../services/favorites';

const AppContainer = styled.div`
   width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100% );

`

const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => { 
    fetchFavorites()
    },[]);

  async function fetchFavorites() {
    const response = await getFavorites();
    setFavorites(response)
  }

  async function deleteFavorites(id) {
    await deleteFavorite(id);
    await fetchFavorites();
    alert('Favorite deleted!');
  }


  return (
    <AppContainer >
      <Title>Favorites Here: </Title>
      <ResultContainer>
      {
        favorites.length !== 0 ? favorites.map(favorite => (
          <Result onClick={() => deleteFavorites(favorite.id)}>
            <img src={bookImg} alt="book" />   
          </Result>
        )) : null
      }
      </ResultContainer>
    </AppContainer>
  );
}

export default Favorites;
