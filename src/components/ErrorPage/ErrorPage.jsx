import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col">
                <Navbar></Navbar>
                <h2 className="text-center text-8xl my-40">Error 404!</h2>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ErrorPage;