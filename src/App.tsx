import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { useState } from "react";

import styles from "./App.module.css";

// interface
import { ITask } from "./interfaces/Task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa!" tasks={tasks} setTasks={setTasks} />
        </div>
        <div>
          <h2>Suas tarefas...</h2>
          <TaskList tasks={tasks} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
