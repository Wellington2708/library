import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderOptions = styled.ul`
    display: flex;

`

const Options = styled.li`
     display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    text-align: center;
    font-size: 16px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;

`

function OptionsHeader(){
    const optionsHeader = ['CAREGORY', 'FAVORITES', 'BOOKSHELF'];

    return(
        <HeaderOptions>
             {optionsHeader.map((text) => (
            <Link to={`/${text.toLowerCase()}`}>
            <Options><p>{text}</p></Options>
            </Link>
          ))}
        </HeaderOptions>
    )
}

export default OptionsHeader;