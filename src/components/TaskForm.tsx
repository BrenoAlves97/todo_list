import { useState, useEffect, ChangeEvent, FormEvent } from "react";

import { ITask } from "../interfaces/Task";

import styles from "./TaskForm.module.css";
interface Props {
  btnText: string;
  tasks: ITask[];
  setTasks?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

// destructuring on Props...
const TaskForm = ({ btnText, tasks, setTasks, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 500);
      const newTask: ITask = { id, title, difficulty };

      if (title.length > 0 && difficulty > 0) {
        setTasks!([...tasks, newTask]);
      } else {
        console.log("Favor preencher todos os campos!");
        setTitle("");
        setDifficulty(0);
        return;
      }

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "title" ? setTitle(e.target.value) : setDifficulty(parseInt(e.target.value));
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Título da tarefa..."
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="dificulty">Dificuldade:</label>
        <input
          type="number"
          name="dificulty"
          value={difficulty}
          placeholder="Dificuldade da tarefa..."
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
