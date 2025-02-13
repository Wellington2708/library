import styled from 'styled-components';
import Search from '../components/Search';
import NewBooks from '../components/NewBooks';

const AppContainer = styled.div`
   width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100% );

`

function Home() {
  return (
    <AppContainer >
      <Search />
      <NewBooks />
    </AppContainer>
  );
}

export default Home;
