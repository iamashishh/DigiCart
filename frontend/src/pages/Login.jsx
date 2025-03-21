import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Axios from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../store/Reducers/AuthReducer";
import toast from "react-hot-toast";



const Login = () => {

   const auth =  useSelector((state) => state.auth);

    console.log(auth);
    
  const [emailData, setemailData] = useState('');
  const [passwordData, setpasswordData] = useState('');

    const dispatch = useDispatch();


  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await Axios.post('/auth/login', { email: emailData, password: passwordData });
    dispatch(setUserToken({user: response.data.user, token: response.data.token}));
    console.log(response.data);
    toast.success('Login Success');

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 md:px-8">
      <div className="relative">
        {/* Left Section: Sign Up Form */}
        <div className="bg-white p-8 flex flex-col justify-center md:absolute md:w-[25vw] md:h-[70vh] md:top-9 md:-left-40 md:rounded-xl rounded-t-xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#046664] text-center">
            Sign In
          </h2>

          <div className="flex justify-center space-x-4 mt-4">
            <button className="px-3 py-2 rounded-full border border-gray-400 text-[#046664] hover:bg-[#046664] hover:text-white transition-all duration-300">
              <i className="ri-facebook-fill text-2xl"></i>
            </button>
            <button className="px-3 py-2 rounded-full border border-gray-400 text-[#046664] hover:bg-[#046664] hover:text-white transition-all duration-300">
              <i className="ri-google-fill text-2xl"></i>
            </button>
            <button className="px-3 py-2 rounded-full border border-gray-400 text-[#046664] hover:bg-[#046664] hover:text-white transition-all duration-300">
              <i className="ri-linkedin-fill text-2xl"></i>
            </button>
          </div>

          <p className="text-gray-500 text-lg text-center mt-2">
            Or log in with your email:
          </p>

          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="font-semibold text-lg text-[#046664] px-1"
              >
                Email
              </label>
              <input
                onChange={(e)=> setemailData(e.target.value)}
                value={emailData}
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:[#046664]"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="font-semibold text-lg text-[#046664] px-1"
              >
                Password
              </label>
              <input
                onChange={(e)=> setpasswordData(e.target.value)}
                value={passwordData}
                name="password"
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:[#046664]"
              />
            </div>
            <p className="text-right text-indigo-500 font-semibold hover:underline">
              Forget Password ?
            </p>

            <button
             
              type="submit"
              className="w-full bg-[#046664] text-white font-semibold py-3 text-lg rounded-lg hover:opacity-90 mt-5"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Right Section: Welcome Back Message */}
        <div className="bg-[url('./bg.jpeg')] bg-cover bg-center flex flex-col items-center justify-center text-white p-8 w-full md:w-[30vw] md:h-[80vh] md:ml-[40%] md:rounded-xl rounded-b-xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Welcome Back!</h2>
            <p className="md:mt-4 mt-2 mb-8 text-lg font-semibold md:px-6">
              Enter personal details to your employee account
            </p>

            <Link
              to={"/register"}
              className="bg-[#046664]/50 hover:bg-[#046664] text-white font-semibold px-14 py-3  rounded-full shadow-md transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
