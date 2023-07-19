import todologo from "../../assets/Logo.svg";
import { FormEvent, ChangeEvent, useState } from 'react'
import { PlusCircle, } from "@phosphor-icons/react"
import styles from "./Header.module.css";

interface HeaderProps {
  insertNewTask: (event:FormEvent, newTask?: string) => void;
}
export function Header({insertNewTask}: HeaderProps){

  const [newTask, setNewTask] = useState("");



  function handleOnChange (event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
   setNewTask(event.target.value);
  }

  return(
    <div>

    <header className={styles.header}>
      <img className={styles.img} src={todologo}></img>

      <form className={styles.newTask} onSubmit={event => insertNewTask(event, newTask)}> 
      <textarea
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleOnChange}
      />

      
        {/* <input 
        placeholder="Adicione uma nova tarefa"/> */}
        <button type="submit">
          Criar
          <PlusCircle size={20}/>
          </button>
      </form>
    </header>

    </div>
  )
}