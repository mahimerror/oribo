const Contact = () => {


    const handleForm = (e) =>{
        e.preventDefault();
    }

    return (
        <div className="bg-[#F4F9F6]">
            <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row gap-10 py-20">
                <div className="left flex-1">
                    <form className="grid gap-4" onSubmit={handleForm}>
                        <input type="text" name="name" id="" placeholder="Your Name" className="p-2"/>
                        <input type="email" name="email" id="" placeholder="Email Address"  className="p-2"/>
                        <input type="text" name="phone" id="" placeholder="Phone Number"  className="p-2"/>
                        <input type="text" name="service" id="" placeholder="Service"  className="p-2"/>
                        <textarea className="col-span-2 p-2 h-32" name="message" id="" placeholder="Type Your Message"></textarea>
                        <input type="submit" value="Submit Now" className="cursor-pointer font-bold px-4 py-3 transition duration-500 ease-in-out bg-[#F99820] hover:bg-[#2081F9] text-white rounded w-fit"/>
                    </form>
                    
                </div>
                
                <div className="right flex-1">
                    <p className="uppercase bg-white inline-block text-sm font-semibold px-4 py-2 mb-2">Fill The Form</p>

                    <h2 className="uppercase font-semibold text-5xl mb-5">Have a project in mind? Let&apos;s talk to us</h2>
                    <p>We&apos;re here to bring your ideas to life! Whether it&apos;s a website, app, or a unique digital solution, our team is ready to collaborate and create something extraordinary. Fill out the form, and let&apos;s get started on turning your vision into reality! 🚀</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;