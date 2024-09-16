import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CalendarIcon, MapPinIcon, CurrencyDollarIcon, LinkIcon, PencilIcon, PhotoIcon, TagIcon } from "@heroicons/react/24/outline";

const CreateEvent = () => {
    const [isFree, setIsFree] = useState(false);

    const handleFreeCheckbox = () => {
        setIsFree(!isFree);
    };



    return (
        <>                <Navbar />

            <div className="max-w-7xl mx-auto pt-3 px-6">

                <div className="min-h-screen bg-gray-100 p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Create Event</h2>

                    <form className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <PencilIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Event Name"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="relative">
                                <TagIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <select className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option selected disabled hidden>Category</option>
                                    <option>Conference</option>
                                    <option>Workshop</option>
                                    <option>Webinar</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <PencilIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    placeholder="Description"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-36"
                                />
                            </div>
                            <div className="relative">
                                <PhotoIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="file"
                                    className="w-full h-36 pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        {/* Event Location or Online */}
                        <div className="relative mb-6">
                            <MapPinIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Event Location or Online"
                                className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Start Date and End Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <CalendarIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="date"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div className="relative">
                                <CalendarIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="date"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        {/* Price and URL */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <CurrencyDollarIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type={isFree ? "text" : "number"}
                                    placeholder={isFree ? "Free" : "Price"}
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    disabled={isFree}
                                />
                                <label className="flex ml-2 items-center mt-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox text-purple-500"
                                        checked={isFree}
                                        onChange={handleFreeCheckbox}
                                    />
                                    <span className="ml-2 text-gray-700">Free Ticket</span>
                                </label>
                            </div>

                            <div className="relative">
                                <LinkIcon className="w-6 h-6 absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="url"
                                    placeholder="Event URL"
                                    className="w-full pl-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        {/* Create Event Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-400 text-white border border-black py-3 px-6 rounded-lg hover:bg-purple-500">
                            Create Event
                        </button>
                    </form>
                </div>
                <Footer />

            </div>
        </>
    );
};

export default CreateEvent;
