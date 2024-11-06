import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto overflow-x-hidden">
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;