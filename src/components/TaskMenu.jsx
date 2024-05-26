import { useTask } from "./TaskContext";

export const TaskMenu = () => {
  const { isDone, taskNumber, markAsDone, markAsUnfinished } = useTask();

  return (
    <div>
      {isDone ? (
        <button onClick={markAsUnfinished}>[v]</button>
      ) : (
        <button onClick={markAsDone}>[ ]</button>
      )}
      <p>Task 1</p>
      <p>Number of tasks done: {taskNumber}</p>
    </div>
  );
};
