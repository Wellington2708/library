import styles from './styles.module.css'
import profile from '../../imagens/profile.svg';
import bag from '../../imagens/bag.svg';


function IconsHeader(){
    const icons = [profile, bag];

    return (     
        
        <ul className={styles.icons}>
          {icons.map((icon) => (
             <li className={styles.icon}><img src={icon} alt=''></img></li>

          ))}
          
        </ul>
    )
}

export default IconsHeader;