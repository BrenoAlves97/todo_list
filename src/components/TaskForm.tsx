import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
}

// destructuring on Props...
const TaskForm = ({ btnText }: Props) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <form>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa..." />
      </div>
      <div>
        <label htmlFor="dificulty">Dificuldade:</label>
        <input type="text" name="dificulty" placeholder="Dificuldade da tarefa..." />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
