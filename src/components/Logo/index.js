import logo from '../../imagens/logo.svg';
import styles from './styles.module.css';

function Logo(){
    return (
        <div className={styles.logo}>
            <img src={logo} alt='Logo Library' />
            <p>Library</p>
        </div>
    )
}

export default Logo;