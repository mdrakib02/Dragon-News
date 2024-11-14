import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function FindUs() {
  return (
    <div className="join flex  join-vertical ">
      <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
      <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
      <button className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
    </div>
  );
}
