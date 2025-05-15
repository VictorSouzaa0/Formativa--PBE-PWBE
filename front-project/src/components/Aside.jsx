import styles from '../modules/Aside.module.css';
import teacher from '../assets/images/teacher.png';
import redLogo from '../assets/images/Red-logo.png'
import {BsGeoAltFill} from 'react-icons/bs';
import {BsCalendarFill} from 'react-icons/bs';
import {BsPersonFill} from 'react-icons/bs';
import { BsArrowLeftSquare} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export function Aside({onSelectSection}){
  const navigate = useNavigate();
    return (
      <aside className={styles.container}>
          <header>
            <img className={styles.userPicture} src={teacher} />
            <br /><br /><br />
            <p className={styles.titleT}><strong>Victor Renato De Souza</strong></p>
            <p>Professor(a)</p>
            <br />
          </header>
          <section className={styles.containerButtons}>
              <button 
              className={styles.button}
              onClick={() => onSelectSection("Reservas"/*Reservas */)}
              >
                <BsGeoAltFill className={styles.icons}/>
                Reservas
              </button>
              <br />
              <button
              className={styles.button}
              onClick={() => onSelectSection("Agendamento"/*Agendamento */)}
              >
                <BsCalendarFill className={styles.icons}/>
                  Agendamento
              </button>
              <br />
              <button
              className={styles.button}
              onClick={()=> onSelectSection("Professor")}
              >
                <BsPersonFill className={styles.icons}/>
                Professor
              </button>

          </section>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br />
          
          <footer>
          <button
              className={styles.button}
              onClick={() => navigate("/")}
              >
                <BsArrowLeftSquare className={styles.icons}/>
                sair
              </button>
              <br />
              <img className={styles.logo} src={redLogo} />
          </footer>
      </aside>
    )
}