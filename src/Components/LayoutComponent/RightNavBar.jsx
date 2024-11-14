import FindUs from "./RightNavComponents/FindUs";
import SocialLogin from "./RightNavComponents/SocialLogin";


export default function RightNavBar() {
  return (
    <div className="space-y-4">
       <SocialLogin></SocialLogin>
       <FindUs></FindUs>
    </div>
  )
}
