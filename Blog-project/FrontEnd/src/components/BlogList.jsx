import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BlogList = () => {

  const [blog, setBlog] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:3001/blog");
    setBlog(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:3001/blog/${id}`);
    fetchBlogs();
  };

  return (
    <div className="container mt-5 ">

      <h2 className="text-center text-white mb-4">📚 Blog List</h2>

      <div className="row ">
        {blog.map((b) => (
          <div className="col-md-4 mb-4" key={b.id}>
            <div className="blog-card">

              <img
                src={b.img || "https://via.placeholder.com/300"}
                className="blog-img"
                alt="blog"
              />

              <div className="card-body mx-3 my-3 ">

                <h5 className="blog-title">{b.title}</h5>

                <p className="blog-desc">
                  {b.desc.length > 70 ? b.desc.slice(0, 70) + "..." : b.desc}
                </p>

                <div className="blog-info">
                  <span>👤 {b.author}</span>
                  <span>📅 {b.date}</span>
                </div>

                <div className="btn-group-custom">
                  <button
                    className="btn-delete"
                    onClick={() => deleteBlog(b.id)}
                  >
                    🗑
                  </button>

                  <NavLink
                    to={`/edit/${b.id}`}
                    className="btn-edit"
                  >
                    ✏️
                  </NavLink>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogList;