import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-200">
            < div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-black" >
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500"
                            />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>

                        <a href="/" className="text-sm text-indigo-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-indigo-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div >
        </div >
    );
};

export default Login;
