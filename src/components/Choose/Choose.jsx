import "./choose.css"

const Choose = () => {
    return (
        <div className="w-11/12 mx-auto my-24">
            <div className="flex flex-col lg:flex-row gap-10 mb-12">
                <div className="lg:w-1/2">
                    <p className="uppercase bg-[#F4F9F6] inline-block text-sm font-semibold px-4 py-2 mb-2">Why Choose Us</p>

                    <h2 className="font-semibold text-5xl mb-5 uppercase">We provide truly IT solutions.</h2>
                </div>

                <div className="lg:w-1/2 flex flex-col md:flex-row gap-5 gap-y-10 items-center">
                    <div className="cutom-numbr flex-shrink-0">5</div>
                    <div className="">
                        <h3 className="font-semibold uppercase text-[28px]">5 Years of Experience</h3>

                        <p className="text-[#666a74]">Accelerate innovation with world-class tech teams We&apos;ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="">
                    <h3 className="font-semibold uppercase text-[28px]">Cyber data security</h3>

                    <hr className="border border-black my-3"/>

                    <p className="text-[#666a74]">Accelerate innovation with world-class tech teams We&apos;ll match you to an entire.</p>
                </div>
                <div className="">
                    <h3 className="font-semibold uppercase text-[28px]">Blockchain Technology</h3>

                    <hr className="border border-black my-3"/>

                    <p className="text-[#666a74]">Accelerate innovation with world-class tech teams We&apos;ll match you to an entire.</p>
                </div>
                <div className="">
                    <h3 className="font-semibold uppercase text-[28px]">Reporting & Analysis</h3>

                    <hr className="border border-black my-3"/>

                    <p className="text-[#666a74]">Accelerate innovation with world-class tech teams We&apos;ll match you to an entire.</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;