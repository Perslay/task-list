import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <p>header</p>
      </header>
      <Outlet />
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
