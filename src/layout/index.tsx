import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <div>
      <header>
        <nav className="border-b-[1px] border-b-[rgba(87,87,87,0.1)] dark:border-b-[rgba(255,255,255,0.10)]">
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
