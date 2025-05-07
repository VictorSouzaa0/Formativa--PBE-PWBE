import styles from '../modules/Aside.module.css';
import teacher from '../assets/images/teacher.png';
import {BsGeoAltFill} from 'react-icons/bs';
import {BsCalendarFill} from 'react-icons/bs';
import {BsPersonFill} from 'react-icons/bs';

export function Aside({onSelectSection}){
    return (
      <aside className={styles.container}>
          <header>
            <img className={styles.userPicture} src={teacher} />
            <br />
            <p className={styles.titleT}><strong>Victor Renato De Souza</strong></p>
            <p>Professor(a)</p>
            <br />
          </header>
          <section className={styles.containerButtons}>
              <div 
              className={styles.button}
              onclick={() => onSelectSection("Reservations"/*Reservas */)}
              >
                <BsGeoAltFill className={styles.icons}/>
                Reservas
              </div>
              <br />
              <div
              className={styles.button}
              onlcik={() => onSelectSection("Scheduling"/*Agendamento */)}
              >
                <BsCalendarFill className={styles.icons}/>
                  Agendamento
              </div>
              <br />
              <div
              className={styles.button}
              onlcik={()=> onSelectSection("Teacher")}
              >
                <BsPersonFill className={styles.icons}/>
                Professor
              </div>
              <div
              
              >

              </div>
          </section>
      </aside>
    )
}