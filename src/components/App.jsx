import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Achievements from "./Achievements";
import Stats from "./Stats";
import Home from "../pages/Home";
import About from "../pages/About";
import MyTasks from "../pages/MyTasks";
// import { TaskMenu } from "./TaskMenu";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mytasks" element={<MyTasks />}>
          <Route path="stats" element={<Stats />} />
          <Route path="achievements" element={<Achievements />} />
        </Route>
      </Route>
      <Route />
    </Routes>
  );
};

export default App;
