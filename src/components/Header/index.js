import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import IconsHeader from '../IconsHeader';
import styles from './styles.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Logo />    
            <OptionsHeader />
            <IconsHeader />
        </header>
   
    )
}

export default Header;