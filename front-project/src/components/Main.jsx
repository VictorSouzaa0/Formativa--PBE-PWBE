import styles from '../modules/Header.module.css'

export function Main(section){

  return(
      <main className={styles.container}>
          {section === "Reservas" &&(
            <label htmlFor="Option">Bloco
            <select name="option" options={[]}/></label>
            
          ) }
      </main>
  )
}