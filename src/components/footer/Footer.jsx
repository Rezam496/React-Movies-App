import { FaFacebookF,FaInstagram,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Footer() {

  const Company=["About","Meet the Team","History","Careers"]
  const Services=["1on1 Coaching","Company Review","Accounts Review","HR Consulting","SEO Optimisation"]
  const HelpfulLinks=["Contact","FAQs","Live Chat"]
  const Legal=["Privacy Policy","Terms &amp; Conditions","Returns Policy","Accessibility"]

  return (
    <footer className="bg-gradient-to-r via-[#1d283a]  bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <div>
            <Link to="/">
                <h1 className="text-2xl mr-8  cursor-pointer">React <span className="text-red-500">Movies</span> App</h1>
            </Link>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a  className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <FaFacebookF />
              </a>
              <a className="hover:opacity-75" href="https://www.instagram.com/reza.mohammadi0_o/" target="_blank" rel="noreferrer">
              <FaInstagram />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <FaXTwitter />
              </a>
              <a href="https://github.com/Rezam496" className="hover:opacity-75"  target="_blank" rel="noreferrer">
              <FaGithub />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {Company.map((i)=><a key={uuidv4()} className="hover:opacity-75" href="#"> {i} </a>)} 
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p> 
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {Services.map((i)=><a key={uuidv4()}className="hover:opacity-75" href="#"> {i} </a>)}
              </nav>
            </div>
            <div>
              <p className="font-medium"> Helpful Links</p> 
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {HelpfulLinks.map((i)=><a key={uuidv4()} className="hover:opacity-75" href="#"> {i} </a>)} 
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {Legal.map((i)=><a key={uuidv4()}className="hover:opacity-75" href="#"> {i} </a>)} 
              </nav>
            </div>
          </div>

        </div>
        
        <p className="mt-8 text-xs text-gray-800">
          © 2025 Comany Name
        </p>
      </div>
    </footer>
  )
}

export default Footer