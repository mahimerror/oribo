import { Link } from "react-router-dom";
import { PiPhoneCall } from "react-icons/pi";
import { BsWechat } from "react-icons/bs";
import biglogo from "../../assets/biglogo.png"
import { MdOutlineHomeWork } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaWhatsapp, FaDribbble, FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=" bg-[#000812] text-white">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between py-7 gap-10">
                    <div className="left">
                        <h2 className="font-semibold text-5xl uppercase">Get a free consultation</h2>
                    </div>

                    <div className="right">
                        <div className="flex flex-row md:flex-col lg:flex-row text-center gap-5">
                            <Link to='/blog/innovation' className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded"><button className="uppercase flex items-center gap-2">
                                <PiPhoneCall className="text-2xl" />
                                <p>+880-1733-783956</p>
                            </button></Link>

                            <Link to='/' className="font-bold px-4 py-3 transition duration-500 ease-in-out border-2 text-[#000812] bg-white hover:bg-[#2081F9] hover:text-white hover:border-[#2081F9] rounded"><button className="uppercase flex items-center gap-2">
                                <BsWechat className="text-2xl" />
                                <p>Free consultation</p>
                            </button></Link>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
                    <div className="lg:col-span-2">
                        <img src={biglogo} alt="" className="w-48" />
                        <p className="mt-4">Oribo Agency is a creative digital agency specializing in innovative branding, design, and digital solutions for businesses.</p>

                        <hr className="my-5" />

                        <div className="flex gap-2 items-center mb-2">
                            <MdOutlineHomeWork className="text-[#F99820]" /> <p>Ajampur, Uttara, Dhaka-1230.</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <MdOutlineAttachEmail className="text-[#F99820]" /> <p>oribo.xyz@gmail.com</p>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="font-semibold uppercase text-2xl mb-4">Useful Link</h3>

                        <ul>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">About Us</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Contact Us</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Our Team</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Pricing</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Our Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="font-semibold uppercase text-2xl mb-4">Our Services</h3>

                        <ul>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Cyber Security</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Machine Learning</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">IT Management</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Software Solution</a>
                            </li>
                            <li className="transition duration-500 ease-in-out hover:text-[#F99820] mb-2">
                                <a href="">Cloud Services</a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold uppercase text-2xl mb-4">Our Services</h3>

                        <p className="mb-2">Enter your email and we contact you!</p>
                        <form className="relative">
                            <input type="text" name="email" className="bg-inherit border border-[#2081F9] rounded p-4 w-full" placeholder="Your Email Address"/>

                            <button className="absolute right-4 h-full"><IoIosSend className="text-[#2081F9] text-3xl"/></button>
                        </form>

                        <div className="text-2xl my-5">
                            <ul className="flex gap-3">
                                <li className="hover:text-[#2081F9] transition duration-500 ease-in-out"><Link><FaWhatsapp /></Link></li>
                                <li className="hover:text-[#2081F9] transition duration-500 ease-in-out"><Link><FaXTwitter /></Link></li>
                                <li className="hover:text-[#2081F9] transition duration-500 ease-in-out"><Link><FaDribbble /></Link></li>
                                <li className="hover:text-[#2081F9] transition duration-500 ease-in-out"><Link><FaInstagram /></Link></li>
                                <li className="hover:text-[#2081F9] transition duration-500 ease-in-out"><Link><TbBrandLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#161B20] text-center p-5">
                <p>Copyright © 2024 All Rights Reserved | Oribo</p>
            </div>
        </div>
    );
};

export default Footer;