import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


const  BlogForm = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { blogId } = useParams();

  const showApi = async () => {
    if (blogId) {
      const res = await axios.get(`http://localhost:3001/blog/${blogId}`);
      reset(res.data);
    }
  };

  useEffect(() => {
    showApi();
  }, []);

  const saveBlog = async (data) => {

    if (!blogId) {
      await axios.post("http://localhost:3001/blog", data);
    } else {
      await axios.put(`http://localhost:3001/blog/${blogId}`, data);
    }

    reset();
    navigate("/list");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-body p-4">

              <h3 className="text-center mb-4 fw-bold">
                {blogId ? "✏️ Update Blog" : "➕ Add Blog"}
              </h3>

              <form onSubmit={handleSubmit(saveBlog)}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Author</label>
                  <input
                    {...register("author")}
                    placeholder="Enter author name"
                    className="form-control rounded-3"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    {...register("title")}
                    placeholder="Enter blog title"
                    className="form-control rounded-3"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    {...register("desc")}
                    rows="3"
                    placeholder="Write blog description..."
                    className="form-control rounded-3"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Date</label>
                  <input
                    type="date"
                    {...register("date")}
                    className="form-control rounded-3"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Image URL</label>
                  <input
                    {...register("img")}
                    placeholder="Paste image URL"
                    className="form-control rounded-3"
                  />
                </div>

                <button
                  className={`btn w-100 py-2 rounded-3 fw-semibold ${blogId ? "btn-warning" : "btn-success"
                    }`}
                >
                  {blogId ? "Update Blog" : "Add Blog"}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogForm;