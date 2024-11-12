import { Link } from "react-router-dom";
import "./wedo.css"
import { BsCheck2All } from "react-icons/bs";

const Wedo = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto my-24">
                <div className="flex flex-col-reverse md:flex-row gap-10 mb-12">
                    <div className="md:w-1/2">
                        <p className="uppercase bg-[#F4F9F6] inline-block text-sm font-semibold px-4 py-2 mb-2">What We Do</p>

                        <h2 className="font-semibold text-5xl mb-5 uppercase">Highly Tailored IT Design, Management & Services.</h2>

                        <div className="flex gap-5">
                            <div className="">
                                <p className="members">8+</p>
                                <p className="font-semibold">Team<br />Memebers</p>
                            </div>
                            <div className="">
                                <p className="text-[#666a74] mb-6">We are Oribo, with world-class tech teams We&apos;ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>

                                <div className="flex gap-2">
                                    <div className="w-1/2 space-y-3">
                                        <div className="flex gap-2">
                                            <BsCheck2All className="text-[#2081F9] text-2xl" />
                                            <p className="text-[#666a74] text-lg">Web Development</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <BsCheck2All className="text-[#2081F9] text-2xl" />
                                            <p className="text-[#666a74] text-lg">High Security</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <BsCheck2All className="text-[#2081F9] text-2xl" />
                                            <p className="text-[#666a74] text-lg">Experts around the world</p>
                                        </div>
                                    </div>

                                    <div className="w-1/2 space-y-3">
                                        <div className="flex gap-2">
                                            <BsCheck2All className="text-[#2081F9] text-2xl" />
                                            <p className="text-[#666a74] text-lg">Best Practice for industry</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <BsCheck2All className="text-[#2081F9] text-2xl" />
                                            <p className="text-[#666a74] text-lg">Quality Control System</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <BsCheck2All className="text-[#2081F9] text-2xl" />
                                            <p className="text-[#666a74] text-lg">24/7 Support</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <div className="space-x-5 flex">
                                        <Link to='/blog/innovation' className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded"><button>READ MORE</button></Link>

                                        <Link to='/' className="font-bold px-4 py-3 transition duration-500 ease-in-out border-2 hover:bg-[#2081F9] hover:border-[#2081F9] text-black hover:text-white rounded"><button>APPOINTMENT</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 right-banner min-h-[50vh] rounded">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wedo;