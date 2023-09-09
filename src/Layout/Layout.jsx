import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
 const Layout = () => {
  return (
      <div className="min-h-screen flex flex-col  max-w-6xl mx-auto">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
  );
};

export default Layout;
