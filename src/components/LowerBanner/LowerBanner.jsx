import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const LowerBanner = () => {
    return (
        <div className="border border-t-0 border-l-0 border-r-0">
            <Marquee className="pt-8 pb-7">
                <div className="">
                    <h2 className="font-bold text-xl uppercase">IT Solution</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">Business Analytics</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">Technology Solution</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">IT Service</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">Technology Service</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">Network Solution</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">Technology Company</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">IT Business</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
                <div className="">
                    <h2 className="font-bold text-xl uppercase">Software Service</h2>
                </div>
                <GoDotFill className="mx-14 text-[#2081F9] my-auto" />
            </Marquee>
        </div>
    );
};

export default LowerBanner;