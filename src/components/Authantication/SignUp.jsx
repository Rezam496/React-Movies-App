import { FcGoogle } from "react-icons/fc";
import { FaLinkedin,FaFacebook } from "react-icons/fa";

function SignUp() {
  return (
    <div className=" w-full mt-20 flex  justify-center content-start" >
        
        <form action="" className="flex flex-col m-4 lg:w-1/3  bg-slate-500 lg:gap-2 p-6 rounded-xl">
            <div className="flex justify-center"><h3 className="lg:text-2xl">Create Account</h3></div>
            
            <label htmlFor="name" className="lg:text-xl text-slate-300">Name:</label>
            <input type="text" className="lg:h-12 rounded-lg outline-none bg-slate-600 text-slate-900 lg:text-xl lg:p-3 p-1 "/>
            <label htmlFor="email" className="lg:text-2xl text-slate-300">E-mail:</label>
            <input type="email"className="lg:h-12 rounded-lg outline-none bg-slate-600 text-slate-900 lg:text-xl lg:p-3 p-1 " />
            <label htmlFor="password" className="lg:text-xl text-slate-300">Password:</label>
            <input type="password"className="lg:h-12 rounded-lg outline-none bg-slate-600 text-slate-900 lg:text-xl lg:p-3 p-1 " />
            <label htmlFor="confirmPassword" className="lg:text-xl text-slate-300">Confirm Password:</label>
            <input type="password"className="lg:h-12 rounded-lg outline-none bg-slate-600 text-slate-900 lg:text-xl lg:p-3 p-1 " />

            <div className="flex items-center my-4">
                <input type="checkbox" className=" mr-4 w-6 h-6 "/>
                <label htmlFor="chackbox" className="lg:text-xl text-slate-300">I accept term of privacy policy</label>
            </div>
            <button type='sybmit' className=" lg:text-xl text-slate-900 bg-slate-300 h-8 lg:h-14 rounded-xl hover:bg-slate-400">Create Account</button>

            <div class="flex items-center justify-between">
                <div className="w-full h-[1px] bg-gray-300"></div>
                <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-sm">
                <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-300 hover:bg-gray-200 rounded">
                <FcGoogle />
                    <span>Sign up with Google</span>
                </a>
                <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-300 hover:bg-gray-200 rounded">
                <FaFacebook />
                    <span>Sign up with Facebook</span>
                </a>
                <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-300 hover:bg-gray-200 rounded">
                <FaLinkedin />                 
                    <span>Sign up with LinkedIn</span>
                </a>
            </div>
        </form>
    </div>
    
  )
}

export default SignUp