import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";


const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default AppLayout;