import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

import { useState } from "react";

import styles from "./App.module.css";

// interface
import { ITask } from "./interfaces/Task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");

    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  return (
    <div className={styles.appContainer}>
      <Modal children={<TaskForm btnText="Editar tarefa..." tasks={tasks} task={taskToUpdate} />} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa!" tasks={tasks} setTasks={setTasks} />
        </div>
        <div>
          <h2>Suas tarefas...</h2>
          <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} editTask={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
