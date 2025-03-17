import { FaYoutube,FaInstagram,FaFacebookF,FaTelegram } from "react-icons/fa6";

function FollowUs() {
  return (
    <section className="flex justify-start mt-4 pb-4  text-xs xl:text-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4">
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