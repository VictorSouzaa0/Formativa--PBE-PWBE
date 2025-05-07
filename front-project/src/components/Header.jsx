import styles from '../modules/Header.module.css';

export function Header(){
    return(

      <header className={styles.container}>
          <h1 className={styles.title}>Gerenciador de ambientes</h1>
      </header>
    )
}