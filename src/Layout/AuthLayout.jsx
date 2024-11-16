import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";



export default function AuthLayout() {
  return (
    <div className="w-10/12 mx-auto py-4">
        <NavBar></NavBar>
       <Outlet/>
       
    </div>
  )
}
