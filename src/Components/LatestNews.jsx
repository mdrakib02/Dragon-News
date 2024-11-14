import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className="bg-gray-200 p-2">
        <Link to="/news" className="flex items-center gap-2">
            <p className="bg-[#D72050] px-3 py-2 text-base text-white">Latest</p>
            <Marquee pauseOnHover={true}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus ut non dolor harum quod, expedita dolore cupiditate qui aliquam!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus ut non dolor harum quod, expedita dolore cupiditate qui aliquam!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus ut non dolor harum quod, expedita dolore cupiditate qui aliquam!</p>
            </Marquee>
        </Link>
    </div>
  )
}
