import { FaYoutube,FaInstagram,FaFacebookF,FaTelegram } from "react-icons/fa6";

function FollowUs() {
  return (
    <section className="container flex justify-end mt-8 text-slate-200 test-sm">
        <div className="flex items-center  ">
        <span>FOLLOW US:</span>
        <ul className="flex gap-4 ml-4">
            <li className="hover:text-red-500 duration-500" ><a href="#"><FaYoutube /></a></li>
            <li className="hover:text-red-500 duration-500"><a href="#"><FaInstagram /></a></li>
            <li className="hover:text-red-500 duration-500"><a href="#"><FaFacebookF /></a></li>
            <li className="hover:text-red-500 duration-500"><a href="#"><FaTelegram /></a></li>
        </ul>
        </div>
    </section>
  )
}

export default FollowUs