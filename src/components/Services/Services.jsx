import icon1 from "../../assets/icons/service1.png"
import icon2 from "../../assets/icons/service2.png"
import icon3 from "../../assets/icons/service3.png"
import icon4 from "../../assets/icons/service4.png"
import icon5 from "../../assets/icons/service5.png"
import icon6 from "../../assets/icons/service6.png"

const Services = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center mb-20">
                <p className="uppercase bg-[#F4F9F6] inline-block text-sm font-semibold px-4 py-2 mb-2">Our Services</p>

                <h2 className="uppercase font-semibold text-5xl mb-5">Services That Help You Grow.</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-x-20">

                <div className="">
                    <div className="card-1 flex items-center gap-10">
                        <div className="left">
                            <img src={icon1} alt="" className="max-w-12" />
                        </div>
                        <div className="right">
                            <h3 className="font-semibold uppercase text-[28px] transition duration-500 ease-in-out hover:text-[#2081F9]">IT Management</h3>

                            <p className="text-[#666a74] pr-5">We have spent 5+ year of servicing consulting & advising solutions and learned what makes.</p>
                        </div>
                    </div>

                    <hr className="my-6" />

                    <div className="card-2 flex items-center gap-10">
                        <div className="left">
                            <img src={icon2} alt="" className="max-w-12" />
                        </div>
                        <div className="right">
                            <h3 className="font-semibold uppercase text-[28px] transition duration-500 ease-in-out hover:text-[#2081F9]">Web Development</h3>

                            <p className="text-[#666a74] pr-5">We have spent 5+ year of servicing consulting & advising solutions and learned what makes.</p>
                        </div>
                    </div>

                    <hr className="my-6" />

                    <div className="card-3 flex items-center gap-10">
                        <div className="left">
                            <img src={icon3} alt="" className="max-w-12" />
                        </div>
                        <div className="right">
                            <h3 className="font-semibold uppercase text-[28px] transition duration-500 ease-in-out hover:text-[#2081F9]">Cyber Security</h3>

                            <p className="text-[#666a74] pr-5">We have spent 5+ year of servicing consulting & advising solutions and learned what makes.</p>
                        </div>
                    </div>

                    <hr className="my-6 md:hidden" />
                </div>

                <div className="">
                    <div className="card-4 flex items-center gap-10">
                        <div className="left">
                            <img src={icon4} alt="" className="max-w-12" />
                        </div>
                        <div className="right">
                            <h3 className="font-semibold uppercase text-[28px] transition duration-500 ease-in-out hover:text-[#2081F9]">Software Solution</h3>

                            <p className="text-[#666a74] pr-5">We have spent 5+ year of servicing consulting & advising solutions and learned what makes.</p>
                        </div>
                    </div>

                    <hr className="my-6" />

                    <div className="card-5 flex items-center gap-10">
                        <div className="left">
                            <img src={icon5} alt="" className="max-w-12" />
                        </div>
                        <div className="right">
                            <h3 className="font-semibold uppercase text-[28px] transition duration-500 ease-in-out hover:text-[#2081F9]">Machine Learning</h3>

                            <p className="text-[#666a74] pr-5">We have spent 5+ year of servicing consulting & advising solutions and learned what makes.</p>
                        </div>
                    </div>

                    <hr className="my-6" />

                    <div className="card-6 flex items-center gap-10">
                        <div className="left">
                            <img src={icon6} alt="" className="max-w-12" />
                        </div>
                        <div className="right">
                            <h3 className="font-semibold uppercase text-[28px] transition duration-500 ease-in-out hover:text-[#2081F9]">Cloud Services</h3>

                            <p className="text-[#666a74] pr-5">We have spent 5+ year of servicing consulting & advising solutions and learned what makes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <h3 className="font-semibold text-xl text-center uppercase">Let&apos;s make something great work together! <br className="md:hidden"/><span className="underline transition duration-500 ease-in-out hover:text-[#F99820] text-[#2081F9]">See More Services</span></h3>
            </div>
        </div>
    );
};

export default Services;