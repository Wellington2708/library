import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import IconsHeader from '../IconsHeader';
// import styles from './styles.module.css'
import styled from 'styled-components';

const HeaderContainer = styled.header`
        display: flex;
        background-color: #FFF;
        justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </HeaderContainer>

    )
}

export default Header;