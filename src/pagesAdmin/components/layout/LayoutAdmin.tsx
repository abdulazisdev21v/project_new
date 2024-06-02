import { Outlet } from "react-router-dom";
import scss from "./LayoutAdmin.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const LayoutAdmin = () => {
  return (
    <div className={scss.LayoutAdmin}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
