import { Header } from "../Header/Header";
import { useState, FormEvent } from "react";
import { Task } from "../Task/Task"
import styles from "./Tasks.module.css";


export function Tasks() {

  const [taskList, setTasklist] = useState(['estudar'])
  const [completedTask, setCompletedTask] = useState(0)

  function deleteMyTask(titulo:string){
    const tasksWithoutDeleted = taskList.filter(task => {
      return task !== titulo
    })

    setTasklist(tasksWithoutDeleted)
  }

  function updateCompletedTask(valor:number){
    setCompletedTask(completedTask + valor)
  }

  function insertNewTask (event:FormEvent, task?: string){
    event.preventDefault()
    if(task){
      setTasklist([...taskList, task])
    }
  }

  return (
    <>
    <Header insertNewTask={insertNewTask}  />
    <section className={styles.tasks}>
      <header className={styles.header}>

        <div>
          <p>Tarefas criadas</p>
          <span>{taskList.length}</span>
          </div>

          <div>
          <p className={styles.textPurple}>Tarefas concluídas</p>
          <span>{completedTask} de {taskList.length}</span>
        </div>
      </header>
      <div>
        {taskList.map(task => 
          <Task titulo={task} 
          onDelete={() => deleteMyTask(task)} 
          onCheck={updateCompletedTask}
          /> 
        )}
      </div>
    </section>
    </>
  )
}