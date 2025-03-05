import { FaFacebookF,FaInstagram,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function Footer() {
  const Company=["About","Meet the Team","History","Careers"]
  const Services=["1on1 Coaching","Company Review","Accounts Review","HR Consulting","SEO Optimisation"]
  const HelpfulLinks=["Contact","FAQs","Live Chat"]
  const Legal=["Privacy Policy","Terms &amp; Conditions","Returns Policy","Accessibility"]
  return (
    <footer class="bg-gradient-to-r via-[#1d283a] mt-44">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <div>
            <Link to="/">
                <h1 className="text-2xl mr-8 text-white cursor-pointer">React <span className="text-red-500">Movies</span> App</h1>
            </Link>
            <p class="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
            </p>
            <div class="flex mt-8 space-x-6 text-gray-600">
              <a  class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <FaFacebookF />
              </a>
              <a class="hover:opacity-75" href="https://www.instagram.com/reza.mohammadi0_o/" target="_blank" rel="noreferrer">
              <FaInstagram />
              </a>
              <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <FaXTwitter />
              </a>
              <a href="https://github.com/Rezam496" class="hover:opacity-75"  target="_blank" rel="noreferrer">
              <FaGithub />
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p class="font-medium">Company</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {Company.map((i)=><a class="hover:opacity-75" href> {i} </a>)} 
              </nav>
            </div>
            <div>
              <p class="font-medium">Services</p> 
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {Services.map((i)=><a class="hover:opacity-75" href> {i} </a>)}
              </nav>
            </div>
            <div>
              <p class="font-medium"> Helpful Links</p> 
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {HelpfulLinks.map((i)=><a class="hover:opacity-75" href> {i} </a>)} 
              </nav>
            </div>
            <div>
              <p class="font-medium">Legal</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {Legal.map((i)=><a class="hover:opacity-75" href> {i} </a>)} 
              </nav>
            </div>
          </div>

        </div>
        
        <p class="mt-8 text-xs text-gray-800">
          © 2025 Comany Name
        </p>
      </div>
    </footer>
  )
}

export default Footer