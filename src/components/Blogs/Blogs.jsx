import { Link } from "react-router-dom";
import "./Blogs.css";

const blogData = [
  {
    id: 1,
    title: "Top 10 Web Development Trends to Watch in 2024",
    image: "https://i.ibb.co/hCZ07nv/blog1.jpg",
    date: "November 15, 2024",
    content:
      "This is the full blog content for Top 10 Web Development Trends to Watch in 2024. It includes insights on AI, frameworks, and other key trends shaping the industry...",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Mobile App in 2024",
    image: "https://i.ibb.co/kVLWXs4/blog2.jpg",
    date: "November 20, 2024",
    content:
      "This is the full blog content for Why Your Business Needs a Mobile App in 2024. It discusses market trends, advantages, and tips on building a successful mobile app...",
  },
  {
    id: 3,
    title: "How to Choose the Right Tech Stack for Your Project",
    image: "https://i.ibb.co/w052m0z/blog3.jpg",
    date: "October 30, 2024",
    content:
      "This is the full blog content for How to Choose the Right Tech Stack for Your Project. It covers factors to consider, popular stacks, and decision-making strategies...",
  },
  {
    id: 4,
    title: "5 UX Mistakes That Can Ruin Your Website",
    image: "https://i.ibb.co/ZYZPcTR/blog4.jpg",
    date: "October 10, 2024",
    content:
      "This is the full blog content for 5 UX Mistakes That Can Ruin Your Website. It highlights common design errors and provides actionable advice for better user experience...",
  },
  {
    id: 5,
    title: "The Power of Progressive Web Apps: Why They're the Future",
    image: "https://i.ibb.co/YfGbZmK/blog5.jpg",
    date: "September 25, 2024",
    content:
      "This is the full blog content for The Power of Progressive Web Apps. It explains the advantages of PWAs, such as offline capabilities, improved performance, and user engagement...",
  },
  {
    id: 6,
    title: "How AI is Revolutionizing Web and App Development",
    image: "https://i.ibb.co/wCS699L/blog6.jpg",
    date: "September 10, 2024",
    content:
      "This is the full blog content for How AI is Revolutionizing Web and App Development. It discusses AI tools, automation, and personalized user experiences in development...",
  },
];


const Blogs = () => {
  return (
    <div className="py-10 w-11/12 mx-auto">
      <div className="text-center mb-20">
        <p className="uppercase bg-[#F4F9F6] inline-block text-sm font-semibold px-4 py-2 mb-2">Our portfolio</p>

        <h2 className="uppercase font-semibold text-5xl mb-5">Protfolio to showcase Our Productivity.</h2>
      </div>
      <div className="blogs-grid">
        {
          blogData.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-content">{blog.content}</p>
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                </div>
                {/* Link to BlogDetails with blog ID */}
                <Link to={`/blog/${blog.id}`} className="blog-link">
                  Read More
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Blogs;
