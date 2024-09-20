import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    TicketIcon,
} from "@heroicons/react/24/outline";

const RegisterEvent = ({ login, user }) => {
    const [ticketType, setTicketType] = useState("");
    const [numTickets, setNumTickets] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registering for event with:", {
            ticketType,
            numTickets,
        });
    };

    return (
        <>
            <Navbar login={login} user={user} />
            <div className="max-w-7xl mx-auto pt-3 px-6">
                <div className="min-h-screen bg-gray-100 p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Register for Event</h2>

                    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
                        {/* Basic Info */}
                        <h3 className="text-xl font-semibold mb-4">Basic Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <UserIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <UserIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <EnvelopeIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <PhoneIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Attendee Details */}
                        <h3 className="text-xl font-semibold mb-4">Attendee Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <UserIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Attendee Name"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <EnvelopeIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Attendee Email"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative mb-6">
                            <PhoneIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Attendee Phone Number"
                                className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Ticket Selection */}
                        <h3 className="text-xl font-semibold mb-4">Ticket Selection</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <TicketIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <select
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    value={ticketType}
                                    onChange={(e) => setTicketType(e.target.value)}
                                    required
                                >
                                    <option value="" disabled selected hidden>
                                        Select Ticket Type
                                    </option>
                                    <option value="VIP">VIP</option>
                                    <option value="General Admission">General Admission</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                            <div className="relative">
                                <TicketIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="number"
                                    placeholder="Number of Tickets"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    value={numTickets}
                                    onChange={(e) => setNumTickets(e.target.value)}
                                    min="1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white border border-black py-3 px-6 rounded-lg hover:bg-purple-500 transition duration-200"
                        >
                            Register
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default RegisterEvent;
