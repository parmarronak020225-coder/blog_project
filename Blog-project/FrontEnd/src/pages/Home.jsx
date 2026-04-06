import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      

      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">
            Share Your Thoughts With The World 🌍
          </h1>
          <p className="lead text-muted mb-4">
            Create, manage, and explore amazing blogs. Express your ideas,
            stories, and creativity in one place.
          </p>

          <NavLink   to="/" className="btn btn-dark btn-lg me-3">
            ✍️ Create Blog
          </NavLink >
          <NavLink   to="/list" className="btn btn-outline-dark btn-lg">
            📖 Explore Blogs
          </NavLink >
        </div>
      </div>

      <div className="container py-5">
        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h4>📝 Easy Writing</h4>
                <p className="text-muted">
                  Create blogs quickly with a simple and user-friendly form.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h4>📚 Manage Blogs</h4>
                <p className="text-muted">
                  Edit, delete, and organize your blog posts easily.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h4>🌐 Explore Content</h4>
                <p className="text-muted">
                  Discover blogs written by others and get inspired.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

     
    </>
  );
};

export default Home;