import About from "../About/About";
import Banner from "../Banner/Banner";
import BlogSlider from "../BlogSlider/BlogSlider";
import Choose from "../Choose/Choose";
import Contact from "../Contact/Contact";
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
            <Contact></Contact>
            <Choose></Choose>
            <Wedo></Wedo>
            <BlogSlider></BlogSlider>
        </div>
    );
};

export default Home;