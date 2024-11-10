import { Link } from "react-router-dom";
import about from "../../assets/about.jpg"
import "./about.css"

const About = () => {
    return (
        <div className="w-11/12 mx-auto my-40">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="left md:w-1/2">
                    <img src={about} alt="" className="rounded-full" />
                </div>

                <div className="right md:w-1/2">
                    <div className="mb-8">
                        <p className="uppercase bg-[#F4F9F6] inline-block text-sm font-semibold px-4 py-2 mb-2">About Company</p>

                        <h2 className="font-semibold text-5xl mb-5 uppercase">We Execute Our ideas From The Start to Finish</h2>

                        <p className="text-[#666a74]"><span className="big-text">S</span>olve Business Problems And Automate Workflows With Artificial Work Intelligence-Based Solutions. Unlock The Hidden Power Of The Data You Already Have And Hand Hampers The Creativity.</p>
                    </div>

                    <div className="mb-10">
                        <h3 className="font-semibold text-[28px] uppercase">01.Expertise in modern technology</h3>
                        <hr className="my-4"/>
                        <h3 className="font-semibold uppercase text-[28px]">02. Nifty team is a diverse network of consultants</h3>
                    </div>

                    <div className="flex flex-col lsm:flex-row text-center gap-5">
                        <Link to='/blog/innovation' className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded"><button className="uppercase">More About Us</button></Link>

                        <Link to='/' className="font-bold px-4 py-3 transition duration-500 ease-in-out border-2 hover:bg-[#2081F9] hover:text-white hover:border-[#2081F9] rounded"><button className="uppercase">+880-1733-783956</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;