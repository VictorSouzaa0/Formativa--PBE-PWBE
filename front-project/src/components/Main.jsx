import { useState } from 'react'
import styles from '../modules/Main.module.css'

function Dropdown(){
  const [opstions,setOptions] = useState([])
  const [selected,setSelected] = useState('')
} 

export function MainPages({section}){
  return(
    
      <main className={styles.content}>
          {section === "Agendamento" &&(
            
            <form >
              <label>Bloco:</label>
                  <select name="dropdown">
                    <option value="">Selecione o Bloco</option>
                  </select>  
                <label>Curso:</label>
                  <select name="dropdown">
                    <option value="">Selecione o Curso </option>
                  </select>
                
                <label >Período:</label>
                <select name="dropdowm">
                  <option value="">Selcione o Peíodo</option>
                </select>
                <label >Turma:</label>
                <select name="dropdown">
                  <option value="">Selecione  a turma</option>
                </select>
                <label>Data:</label>
                <input type="date" name="date" />
                <button type="submit">Agendar</button>
            </form>
          )}
          {section === "Professor" &&(

            <form>
              <label><strong>NI</strong></label>
                  <input type="text" name="ni" placeholder="21468567" className={styles.inp} />
              <label>Nome:</label>
                  <input type="text" name="name" placeholder='Victor Renato De Souza' className={styles.inp}/>
              <label>Email:</label>
                    <input type="email" name="email" placeholder='victor.renato@professor.br' className={styles.inp} />
              <label>Telefone:</label>
                    <input type="text" name="phone" placeholder='(XX)XXXXX-XXXX' />
              <label>Disciplina Atribuidas:</label>
                    <select name="dropdown">
                      <option value="" >Disciplinas Atribuidas</option>
                    </select>
            </form>
          )
          }
      </main>
)    


}
