import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-x-hidden">
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
