import Services from "../Services/Services";

const Service_page = () => {
    return (
        <div className="">
            <div className="mt-10">
                <Services></Services>
            </div>

            <section className="welcome-section text-center py-10 bg-[#F4F9F6] mb-10">
                <div className="w-11/12 mx-auto px-6">
                    <h2 className="text-4xl font-bold text-black mb-4">Welcome to Oribo Agency</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        <strong>Empowering Innovation, Driving Growth</strong>
                    </p>
                    <p className="text-gray-600 mb-6">
                        At Oribo, we are committed to delivering cutting-edge solutions to transform
                        your ideas into impactful realities. Whether you&apos;re seeking to enhance your digital
                        presence, secure your data, or harness the power of machine learning, our team is here to
                        guide you every step of the way.
                    </p>
                    <ul className="list-disc list-inside text-left  text-gray-600">
                        <li>🚀 Over 5+ years of experience in delivering excellence.</li>
                        <li>🛠 Customized strategies tailored to your unique needs.</li>
                        <li>🌐 A team of experts passionate about innovation and results.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Service_page;