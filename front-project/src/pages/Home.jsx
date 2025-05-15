import styles from '../modules/Home.module.css'
import { useState } from 'react';
import {Header} from '../components/Header'
import {Aside} from  '../components/Aside';
import { MainPages } from '../components/Main';

export function HomePage(){
    const [ActiveSection, setActiveSection] = useState("Reservas")
    return (
        <div className={styles.GridContainer}>
          <Header/>
            <div className={styles.work}>
            <Aside onSelectSection={setActiveSection}/>
            <MainPages section={ActiveSection}/>
            </div>
          <title>Gerenciador de Ambientes</title>
          
        </div>
    )
}