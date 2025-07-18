import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
  };

  return (
    <Slider
      {...settings}
    >
      <div className="h-[500px] md:h-[600px] lg:h-[694px]">
        <div
          className="card-1 min-h-full flex flex-col items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/71ZsXQQ/banner1.jpg')",
          }}
        >
          <div className="w-11/12 mx-auto flex items-center h-full">
            <div className="md:w-2/3 lg:w-1/2 text-white">
              <div className="flex mb-4">
                <div className="border flex gap-2 items-center py-1 pl-2 pr-5 rounded">
                  <p className="bg-[#2081F9] px-[6px] rounded">Oribo</p>
                  <p>INFORMATION TECHNOLOGY</p>
                </div>
              </div>
              <div className="mb-10">
                <h2 className="mb-2 font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight">
                  We transform
                  <br />
                  ideas into
                  <br />
                  technology
                </h2>
                <p className="max-w-lg text-sm sm:text-base md:text-lg">
                  The journey of transforming innovative ideas into technology,
                  covering stages from ideation and agile development to
                  advanced tech integration and continuous improvement.
                </p>
              </div>
              <div className="space-x-5">
                <Link
                  to="/blog/tech-vision"
                  className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded"
                >
                  <button>READ MORE</button>
                </Link>
                <Link
                  to="/contact"
                  className="font-bold px-4 py-3 transition duration-500 ease-in-out border-2 hover:bg-[#2081F9] hover:border-[#2081F9] text-white rounded"
                >
                  <button>APPOINTMENT</button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3 lg:w-1/2"></div>
          </div>
        </div>
      </div>

      <div className="h-[500px] md:h-[600px] lg:h-[694px]">
        <div
          className="card-1 min-h-full flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/2tjfsQs/banner2.jpg')",
          }}
        >
          <div className="w-11/12 mx-auto flex items-center h-full">
            <div className="md:w-2/3 lg:w-1/2 text-white">
              <div className="flex mb-4">
                <div className="border flex gap-2 items-center py-1 pl-2 pr-5 rounded">
                  <p className="bg-[#2081F9] px-[6px] rounded">Oribo</p>
                  <p>INFORMATION TECHNOLOGY</p>
                </div>
              </div>
              <div className="mb-10">
                <h2 className="mb-2 font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight">
                  Building
                  <br />
                  Tomorrow&apos;s
                  <br />
                  Technology Today
                </h2>
                <p className="max-w-lg text-sm sm:text-base md:text-lg">
                  It highlights how we turn groundbreaking ideas into
                  cutting-edge solutions, shaping the future of technology
                  through creativity, agility, and precision.
                </p>
              </div>
              <div className="space-x-5">
                <Link
                  to="/blog/innovation"
                  className="font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded"
                >
                  <button>READ MORE</button>
                </Link>
                <Link
                  to="/contact"
                  className="font-bold px-4 py-3 transition duration-500 ease-in-out border-2 hover:bg-[#2081F9] hover:border-[#2081F9] text-white rounded"
                >
                  <button>APPOINTMENT</button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3 lg:w-1/2"></div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
