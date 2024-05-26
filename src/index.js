import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { TaskProvider } from "./components/TaskContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>
);
