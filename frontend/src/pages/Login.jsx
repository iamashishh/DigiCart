import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!loginData.email.trim() || !loginData.password.trim()) {
            alert("Please fill in all fields.");
            return;
        }
        console.log(loginData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 md:px-8">

            <div className="relative">

                {/* Left Section: Sign Up Form */}
                <div className="bg-white p-8 flex flex-col justify-center md:absolute md:w-[25vw] md:h-[70vh] md:top-9 md:-left-40 md:rounded-xl rounded-t-xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#190634] text-center">Sign In</h2>

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

                    <p className="text-gray-500 text-lg text-center mt-2">Or log in with your email:</p>

                    <form onSubmit={handleLogin} className="mt-6">
                        <div className="mb-4">
                            <label htmlFor="email" className="font-semibold text-lg text-[#190634] px-1">
                                Email
                            </label>
                            <input
                                onChange={handleOnChange}
                                value={loginData.email}
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:[#190634]"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="font-semibold text-lg text-[#190634] px-1"
                            >
                                Password
                            </label>
                            <input
                                onChange={handleOnChange}
                                value={loginData.password}
                                name="password"
                                type="password"
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-2 border border-gray-400 placeholder:text-gray-500 text-sm rounded-lg focus:outline-none focus:ring-1 focus:[#190634]"
                            />
                        </div>
                        <p className="text-right text-indigo-500 font-semibold hover:underline">Forget Password ?</p>

                        <button
                            type="submit"
                            className="w-full bg-[#190634] text-white font-semibold py-3 text-lg rounded-lg hover:opacity-90 mt-5"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Right Section: Welcome Back Message */}
                <div
                    className="flex flex-col items-center justify-center bg-cover bg-top text-white p-8 w-full md:w-[30vw] md:h-[80vh] md:ml-[40%] md:rounded-xl rounded-b-xl shadow-2xl"
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/8f/30/a2/8f30a29f719661001a01ac4cb9acf521.jpg')" }}
                >
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">Welcome Back!</h2>
                        <p className="md:mt-4 mt-2 mb-8 text-lg font-semibold md:px-6">Enter personal details to your employee account</p>

                        <Link
                            to={"/register"}
                            className="bg-black/50 hover:bg-black text-white font-semibold px-14 py-3  rounded-full shadow-md transition-all duration-300"
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
