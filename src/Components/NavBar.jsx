import { Link, NavLink } from "react-router-dom";
import userImg from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function NavBar() {
  const {user} = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.name}</div>
      <div className="nav space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login">
      <div className='flex justify-center items-center gap-2'>
                <img className='object-cover' src={userImg} alt="" />
                <Link to="/auth" className='px-6 rounded-lg py-2 bg-gray-700 text-white text-base font-bold'>Login</Link>
            </div>
      </div>
    </div>
  );
}
