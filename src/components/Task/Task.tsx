import { useState } from "react";
import styles from "../Task/Task.module.css";

import { Trash, Circle, CheckCircle } from "@phosphor-icons/react";

// Interface que define as propriedades esperadas pelo componente Task
interface TaskProps {
  titulo: string;
  onDelete: (titulo: string) => void;
  onCheck: (numero: number) => void;
}

export function Task({ titulo, onDelete, onCheck }: TaskProps) {
  // Estado que controla se a tarefa está marcada como concluída
  const [checkmark, setCheckmark] = useState(false);

  // Função chamada ao clicar no botão de marcar/desmarcar tarefa
  function handleOnClick() {
    // Alterna o estado de "checkmark" entre verdadeiro e falso
    setCheckmark(!checkmark);

    // Atualiza o número de tarefas concluídas com base no estado atual
    if (checkmark === false) {
      onCheck(1); // Incrementa o contador de tarefas concluídas
    } else {
      onCheck(-1); // Decrementa o contador de tarefas concluídas
    }
  }

  // Função chamada ao clicar no botão de deletar tarefa
  function handleOnDelete() {
    onDelete(titulo); // Chama a função de deletar passando o título da tarefa
  }

  return (
    <div className={styles.list}>
      <button onClick={handleOnClick} className={styles.check}>
        {checkmark ? <CheckCircle size={20} /> : <Circle size={20} />}
      </button>
      <p>{titulo}</p>
      <button className={styles.DeleteButton} onClick={handleOnDelete}>
        <Trash size={20} />
      </button>
    </div>
  );
}
