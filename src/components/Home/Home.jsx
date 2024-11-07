import About from "../About/About";
import Banner from "../Banner/Banner";
import LowerBanner from "../LowerBanner/LowerBanner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LowerBanner></LowerBanner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;