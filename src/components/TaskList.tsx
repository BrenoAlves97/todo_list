import styles from "./TaskList.module.css";

import { ITask } from "../interfaces/Task";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

interface Props {
  tasks: ITask[];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.length > 0
        ? tasks.map((task, index) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <BsFillPencilFill className={styles.icon} />
                <BsFillTrashFill className={styles.icon} />
              </div>
            </div>
          ))
        : "Não possui tarefas cadastradas..."}
    </>
  );
};

export default TaskList;
