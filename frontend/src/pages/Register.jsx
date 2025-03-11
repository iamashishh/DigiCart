import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")

    // const handleOnChange = (e) => {
    //     const { name, value } = e.target;
    //     setRegisterData({ ...registerData, [name]: value });
    // }

    const handleRegister = async (e) => {
        e.preventDefault();
        
      const response =  await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,{email,password,firstName,lastName})
        console.log(response.data);
        
    
        if(response.status === 201){
            navigate("/login")
        }

        

        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3f3f3] px-4 md:px-8 py-5">
            <div className="relative">

                {/* Left Section: Sign Up Form */}
                <div className="bg-white p-8 flex flex-col justify-center md:absolute md:w-[25vw] md:h-[70vh] md:top-9 md:-left-40 md:rounded-xl rounded-t-xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#190634] text-center">Sign Up</h2>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="px-3 py-2 rounded-full border border-gray-400 text-[#190634] hover:bg-[#190634] hover:text-white transition-all duration-300">
                            <i className="ri-facebook-fill text-2xl"></i>
                        </button>
                        <button className="px-3 py-2 rounded-full border border-gray-400 text-[#190634] hover:bg-[#190634] hover:text-white transition-all duration-300">
                            <i className="ri-google-fill text-2xl"></i>
                        </button>
                        <button className="px-3 py-2 rounded-full border border-gray-400 text-[#190634] hover:bg-[#190634] hover:text-white transition-all duration-300">
                            <i className="ri-linkedin-fill text-2xl"></i>
                        </button>
                    </div>

                    <p className="text-gray-500 text-lg text-center mt-2">Create your account:</p>

                    <form onSubmit={handleRegister} className="mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                            <div className="mb-4">
                                <label htmlFor="First Name" className="font-semibold text-lg text-[#190634] px-1">First Name</label>
                                <input
                                    onChange={(e)=>{
                                        setfirstName(e.target.value)
                                    }}
                                    value={firstName}
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#190634]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="Last Name" className="font-semibold text-lg text-[#190634] px-1">Last Name</label>
                                <input onChange={(e)=>{setlastName(e.target.value)}}                                    value={lastName}
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#190634]"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Email" className="font-semibold text-lg text-[#190634] px-1">Email</label>
                            <input
                                onChange={(e)=>{
                                    setemail(e.target.value)
                                }}
                                value={email}
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#190634]"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Password" className="font-semibold text-lg text-[#190634] px-1">Password</label>
                            <input
                                onChange={(e)=>{
                                    setpassword(e.target.value)
                                }}
                                value={password}
                                name="password"
                                type="password"
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#190634]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#190634] hover:opacity-90 font-semibold text-white py-3 rounded-lg mt-3"
                        >
                            SIGN UP
                        </button>
                    </form>
                </div>

                {/* Right Section: Welcome Back Message */}
                <div
                    className="flex flex-col items-center justify-center bg-cover bg-top text-white p-8 w-full md:w-[30vw] md:h-[80vh] md:ml-[40%] md:rounded-xl rounded-b-xl shadow-2xl"
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/8f/30/a2/8f30a29f719661001a01ac4cb9acf521.jpg')" }}
                >
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold ">Welcome Back!</h2>
                        <p className="md:mt-4 mt-2 mb-8 text-lg font-semibold md:px-6">To keep connected with us, please log in to your account</p>

                        <Link
                            to={"/login"}
                            className="bg-black/50 hover:bg-black text-white font-semibold px-14 py-3 rounded-full shadow-md transition-all duration-300"
                        >
                            SIGN IN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
