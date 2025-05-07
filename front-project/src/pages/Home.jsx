import styles from '../modules/Home.module.css'
import { useState } from 'react';
import {Aside} from  '../components/Aside';

export function HomePage(){
    const [ActiveSection, setActiveSection] = useState("Reservas")
    return (
        <div className={styles.GridContainer}>
          <title>Gerenciador de Ambientes</title>
            <Aside/>
          
        </div>
    )
}