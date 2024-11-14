import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="text-base *:w-full space-y-3">
        <button className="btn space-x-4"> <FaGoogle className="text-blue-500"></FaGoogle> Login With Google</button>
        <button className="btn space-x-4"> <FaGithub></FaGithub> Login With Google</button>
    </div>
  )
}
