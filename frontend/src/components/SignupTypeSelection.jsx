import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupTypeSelection = () => {
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();

    const handleSelection = (e) => {
        e.preventDefault();
        if (userType === "user") {
            navigate("/signup-user");
        } else if (userType === "organizer") {
            navigate("/signup-organizer");
        } else {
            alert("Please select a user type.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-200 py-10">
            <div className="bg-white p-10 rounded-lg shadow-2xl max-w-lg w-full border-2 border-gray-300">
                <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
                
                <form onSubmit={handleSelection}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-3" htmlFor="userType">
                            Sign up as
                        </label>
                        <select
                            id="userType"
                            className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Choose an option
                            </option>
                            <option value="user">User</option>
                            <option value="organizer">Organizer</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-200 shadow-lg"
                    >
                        Continue
                    </button>
                </form>
                
                <p className="text-center text-gray-600 mt-8">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignupTypeSelection;
