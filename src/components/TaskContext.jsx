import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [isDone, setIsDone] = useState(false);
  const [taskNumber, setTaskNumber] = useState(0);

  const markAsDone = () => {
    setIsDone(true);
    setTaskNumber((prevNumber) => prevNumber + 1);
  };

  const markAsUnfinished = () => {
    setIsDone(false);
    setTaskNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <TaskContext.Provider
      value={{ isDone, taskNumber, markAsDone, markAsUnfinished }}
    >
      {children}
    </TaskContext.Provider>
  );
};
