import todologo from "../../assets/Logo.svg";
import { FormEvent, ChangeEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Header.module.css";

//propriedades esperadas pelo componente Header
interface HeaderProps {
  insertNewTask: (event: FormEvent, newTask?: string) => void; // Função para adicionar uma nova tarefa
}

export function Header({ insertNewTask }: HeaderProps) {
  // Estado que armazena o valor do campo de texto da nova tarefa
  const [newTask, setNewTask] = useState("");

  // sempre que o valor do campo de texto muda
  function handleOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(""); // Reseta mensagens de validação personalizadas
    setNewTask(event.target.value); // Atualiza o estado com o novo valor do campo
  }

  return (
    <div>
      <header className={styles.header}>
        <img className={styles.img} src={todologo}></img>
        <form
          className={styles.newTask}
          onSubmit={(event) => insertNewTask(event, newTask)} // Chama a função insertNewTask ao enviar o formulário
        >
          <textarea
            placeholder="Adicione uma nova tarefa"
            value={newTask} // Valor do campo controlado pelo estado
            onChange={handleOnChange} // Atualiza o estado ao digitar no campo
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
    </div>
  );
}
