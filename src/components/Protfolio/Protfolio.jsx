import "./portfolio.css"; // Import the corresponding CSS file

const dataPortfolio = [
    {
        name: "Agency Web App",
        img: "https://i.ibb.co.com/k0X60rn/project1.png",
        description:
            "Built an agency web app for streamlined client management, project tracking, and team collaboration with a responsive, user-friendly design.",
        livelink: "https://oribo.netlify.app/",
        codelink: "https://github.com/mahimerror/oribo",
    },
    {
        name: "Cryptography Library",
        img: "https://i.ibb.co.com/P4h1ftk/project2.png",
        description:
            "Created a cryptography algorithm library with easy-to-integrate encryption and decryption tools for enhanced data security.",
        livelink: "https://crypto-graaphy.netlify.app/tc",
        codelink: "https://github.com/mahimerror/crypto-graphy",
    },
    {
        name: "Dynamic News Portal",
        img: "https://i.ibb.co.com/3BkcyDD/project3.png",
        description:
            "Developed a dynamic news portal web app with real-time updates, category filtering, and an intuitive, responsive design for seamless user engagement.",
        livelink: "https://dragon-newss.netlify.app/",
        codelink: "https://github.com/mahimerror/dragon-news",
    },
    {
        name: "E-commerce Frontend",
        img: "https://i.ibb.co.com/hHmMQwT/project4.png",
        description:
            "Designed a responsive e-commerce web frontend, focusing on user-friendly navigation, product displays, and a streamlined checkout process to enhance customer experience.",
        livelink: "https://mahimerror.github.io/penguin-fashion/",
        codelink: "https://github.com/mahimerror/penguin-fashion",
    },
    {
        name: "Book Review App",
        img: "https://i.ibb.co.com/dtnRbCc/project5.png",
        description:
            "Crafted a responsive frontend for a book-review web app, featuring intuitive navigation, interactive review sections, and personalized book recommendations to engage readers.",
        livelink: "https://book-reviiew.netlify.app/",
        codelink: "https://github.com/mahimerror/book-review",
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio w-11/12 mx-auto">
            <div className="text-center mb-20">
                <p className="uppercase bg-[#F4F9F6] inline-block text-sm font-semibold px-4 py-2 mb-2">Our portfolio</p>

                <h2 className="uppercase font-semibold text-5xl mb-5">Protfolio to showcase Our Productivity.</h2>
            </div>
            <div className="portfolio-grid">
                {dataPortfolio.map((project, index) => (
                    <div className="portfolio-item" key={index}>
                        <div className="portfolio-hover">
                            <img src={project.img} alt={project.name} className="portfolio-img" />
                            <div className="portfolio-details">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <div className="portfolio-buttons">
                                    <a href={project.livelink} target="_blank" rel="noopener noreferrer" className="btn">
                                        Live
                                    </a>
                                    <a href={project.codelink} target="_blank" rel="noopener noreferrer" className="btn">
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
