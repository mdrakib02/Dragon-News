import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-xl shrink-0 mx-auto bg-slate-100 p-10 rounded-none">
        <h1 className="text-2xl font-semibold text-center">
          Register your account
        </h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label"></label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already have a account{" "}
          <Link to="/auth" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
