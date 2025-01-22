import style from './styles.module.css';
function OptionsHeader(){
    const optionsHeader = ['CAREGORY', 'FAVORITES', 'MY SHELF'];

    return(
        <ul className={style.optionsHeader}>
             {optionsHeader.map((option) => (
            <li className={style.option}><p>{option}</p></li>
          ))}
        </ul>
    )
}

export default OptionsHeader;