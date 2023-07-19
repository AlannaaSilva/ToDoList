import { useState } from 'react';
import styles from "../Task/Task.module.css";

import { Trash, Circle, CheckCircle} from "@phosphor-icons/react"

interface TaskProps {
  titulo: string
  onDelete: (titulo:string) => void;
  onCheck: (numero:number)=> void;
}


export function Task({ titulo, onDelete, onCheck }: TaskProps) {
  const [checkmark, setCheckmark] = useState(false)

  function handleOnClick(){
    setCheckmark(!checkmark)

    if(checkmark === false){
      onCheck(1)
    }else{
      onCheck(-1)
    }

  }

  function handleOnDelete(){
    onDelete(titulo);
  }
  

  return(
    <div className={styles.list}>
      <button onClick={handleOnClick} className={styles.check} >
      {checkmark ? <CheckCircle size={20}/> : <Circle size={20}/> }
      </button>
      <p>{titulo}</p>
      <button className={styles.DeleteButton} onClick={handleOnDelete}>
       <Trash size={20}/>
      </button>
    </div>
  )
}