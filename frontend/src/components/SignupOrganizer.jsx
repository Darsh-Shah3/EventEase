import React, { useState } from "react";

const SignupOrganizer = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [address, setAddress] = useState("");
    const [eventCategories, setEventCategories] = useState("");

    const handleSignup = (e) => { 
        e.preventDefault();
        console.log("Signing up as Organizer with:", {
            username,
            name,
            password,
            number,
            organizationName,
            address,
            eventCategories,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-200 py-10">
            <div className="bg-white p-10 rounded-lg shadow-2xl max-w-3xl w-full border-2 border-gray-300">
                <h2 className="text-3xl font-bold text-center mb-8">Sign Up as Organizer</h2>

                <form onSubmit={handleSignup}>
                    {/* Username and Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password and Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="number">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="number"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your phone number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Organization Name */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="organizationName">
                            Organization Name
                        </label>
                        <input
                            type="text"
                            id="organizationName"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your organization name"
                            value={organizationName}
                            onChange={(e) => setOrganizationName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    {/* Event Categories */}
                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="eventCategories">
                            Event Categories
                        </label>
                        <input
                            type="text"
                            id="eventCategories"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter event categories (e.g., music, tech)"
                            value={eventCategories}
                            onChange={(e) => setEventCategories(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-200 shadow-lg"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignupOrganizer;
