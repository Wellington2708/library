import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';
import NewBooks from './components/NewBooks';

const AppContainer = styled.div`
   width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100% );

`

function App() {
  return (
    <AppContainer >
      <Header /> 
      <Search />
      <NewBooks />
    </AppContainer>
  );
}

export default App;
