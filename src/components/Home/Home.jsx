import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import LowerBanner from "../LowerBanner/LowerBanner";
import Services from "../Services/Services";
import Wedo from "../Wedo/Wedo";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LowerBanner></LowerBanner>
            <About></About>
            <Services></Services>
            <Choose></Choose>
            <Wedo></Wedo>
        </div>
    );
};

export default Home;