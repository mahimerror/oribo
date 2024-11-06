import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Banner = () => {
    var settings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings} >
            <div>
                <div className="card-1 flex items-center bg-cover bg-center bg-no-repeat py-40" style={{ backgroundImage: "url('https://i.ibb.co.com/71ZsXQQ/banner1.jpg')", }}>
                    <div className="flex w-11/12 mx-auto">
                        <div className="md:w-2/3 lg:1/2 text-white">
                            <div className="flex mb-4">
                                <div className="border flex gap-2 items-center py-1 pl-2 pr-5 rounded">
                                    <p className="bg-[#2081F9] px-[6px] rounded">Oribo</p>
                                    <p>INFORMATION TECHNOLOGY</p>
                                </div>
                            </div>
                            <div className="mb-10">
                                <h2 className="mb-2 font-semibold text-6xl">We transform<br />ideas into<br />technology</h2>
                                <p className="max-w-lg">The journey of transforming innovative ideas into technology, covering stages from ideation and agile development to advanced tech integration and continuous improvement.</p>
                            </div>
                            <div className="space-x-5">
                                <Link to='/blog/tech-vision' className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded"><button>READ MORE</button></Link>

                                <Link to='/' className="font-bold px-4 py-3 transition duration-500 ease-in-out border-2 hover:bg-[#2081F9] hover:border-[#2081F9] text-white rounded"><button>APPOINTMENT</button></Link>
                            </div>
                        </div>
                        <div className="w-0 md:w-1/3 lg:1/2">
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="card-1 flex items-center bg-cover bg-center bg-no-repeat py-40" style={{ backgroundImage: "url('https://i.ibb.co.com/2tjfsQs/banner2.jpg')", }}>
                    <div className="flex w-11/12 mx-auto">
                        <div className="md:w-2/3 lg:1/2 text-white">
                            <div className="flex mb-4">
                                <div className="border flex gap-2 items-center py-1 pl-2 pr-5 rounded">
                                    <p className="bg-[#2081F9] px-[6px] rounded">Oribo</p>
                                    <p>INFORMATION TECHNOLOGY</p>
                                </div>
                            </div>
                            <div className="mb-10">
                                <h2 className="mb-2 font-semibold text-6xl">Building<br/>Tomorrow&apos;s <br/>Technology Today</h2>
                                <p className="max-w-lg">It&apos;s highlights how we turn groundbreaking ideas into cutting-edge solutions, shaping the future of technology through creativity, agility, and precision.</p>
                            </div>
                            <div className="space-x-5">
                                <Link to='/blog/innovation' className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded"><button>READ MORE</button></Link>

                                <Link to='/' className="font-bold px-4 py-3 transition duration-500 ease-in-out border-2 hover:bg-[#2081F9] hover:border-[#2081F9] text-white rounded"><button>APPOINTMENT</button></Link>
                            </div>
                        </div>
                        <div className="w-0 md:w-1/3 lg:1/2">
                        </div>
                    </div>

                </div>
            </div>
        </Slider>
    );
}

export default Banner;