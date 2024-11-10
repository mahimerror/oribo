import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import LowerBanner from "../LowerBanner/LowerBanner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LowerBanner></LowerBanner>
            <About></About>
            <Services></Services>
            <Choose></Choose>
        </div>
    );
};

export default Home;