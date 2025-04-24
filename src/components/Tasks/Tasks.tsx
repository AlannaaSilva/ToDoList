import { Header } from "../Header/Header";
import { useState, FormEvent } from "react";
import { Task } from "../Task/Task";
import styles from "./Tasks.module.css";

export function Tasks() {
  // Estado que armazena a lista de tarefas
  const [taskList, setTasklist] = useState(["estudar"]);

  // Estado que armazena o número de tarefas concluídas
  const [completedTask, setCompletedTask] = useState(0);

  // Função para deletar uma tarefa da lista
  function deleteMyTask(titulo: string) {
    // Filtra a lista de tarefas, removendo a tarefa com o título especificado
    const tasksWithoutDeleted = taskList.filter((task) => {
      return task !== titulo;
    });
    // Atualiza o estado com a nova lista de tarefas
    setTasklist(tasksWithoutDeleted);
  }

  // Função para atualizar o número de tarefas concluídas
  function updateCompletedTask(valor: number) {
    // Incrementa ou decrementa o número de tarefas concluídas
    setCompletedTask(completedTask + valor);
  }

  // Função para adicionar uma nova tarefa à lista
  function insertNewTask(event: FormEvent, task?: string) {
    event.preventDefault();
    if (task) {
      // Adiciona a nova tarefa ao estado da lista de tarefas
      setTasklist([...taskList, task]);
    }
  }

  return (
    <>
      <Header insertNewTask={insertNewTask} />
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{taskList.length}</span>
          </div>
          <div>
            <p className={styles.textPurple}>Tarefas concluídas</p>
            <span>
              {completedTask} de {taskList.length}
            </span>
          </div>
        </header>

        {/* Renderiza a lista de tarefas */}
        <div>
          {taskList.map((task) => (
            <Task
              titulo={task}
              onDelete={() => deleteMyTask(task)} // Passa a função de deletar como prop
              onCheck={updateCompletedTask} // Passa a função de atualizar tarefas concluídas como prop
            />
          ))}
        </div>
      </section>
    </>
  );
}
