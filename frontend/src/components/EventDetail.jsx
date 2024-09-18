import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component
import codeImg from "../assets/code.jpg"; // Example image for the event
import e1 from "../assets/img/e1.avif"; // Example images for events
import e2 from "../assets/img/e2.avif";
import e3 from "../assets/img/e3.jpg";

// Sample event data for demonstration
const eventData = {
  1: { date: "September 15, 2024", time: "10:00 AM", title: "Github Universe 2024", category: "Tech", price: "Free", image: codeImg, description: "Join us for GitHub Universe 2024!" },
  2: { date: "September 16, 2024", time: "11:00 AM", title: "Tech Innovators Conference 2024", category: "Tech", price: "$20", image: e1, description: "Explore the latest innovations in technology." },
  3: { date: "September 17, 2024", time: "12:00 PM", title: "Green Future Expo", category: "Environment", price: "$15", image: e2, description: "A showcase of sustainable solutions for a greener future." },
  4: { date: "September 18, 2024", time: "02:00 PM", title: "AI Revolution 2024", category: "AI", price: "Free", image: e3, description: "Dive into the future of AI with industry leaders." },
};

// Mock related events data
const relatedEvents = [
  { id: 2, title: "Tech Innovators Conference 2024", image: e1, category: "Tech" },
  { id: 3, title: "Green Future Expo", image: e2, category: "Environment" },
  { id: 4, title: "AI Revolution 2024", image: e3, category: "AI" }
];

const EventDetail = () => {
  const { id } = useParams(); // Get event ID from URL
  const navigate = useNavigate(); // Hook for programmatic navigation

  const event = eventData[id]; // Get event details based on ID
 
  const handleRegisterClick = () => {
    navigate("/registerEvent"); // Redirect to register event page
  };

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`); // Redirect to the clicked event detail page
  };

  if (!event) {
    return <p className="text-center text-gray-500">Event not found</p>; // Handle case where event is not found
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white-100 p-8">
        <div className="max-w-7xl mx-auto mt-20 mb-8 flex flex-col md:flex-row justify-evenly"> {/* Added mt-8 mb-8 for top and bottom spacing */}
          {/* Event Image */}
          <div className="flex-none w-full md:w-1/2 mb-6 md:mb-0">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Event Information */}
          <div className="flex-1 md:pl-8 flex flex-col gap-6">
            <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
            <p className="text-lg mb-2"><strong>Date:</strong> {event.date}</p>
            <p className="text-lg mb-2"><strong>Time:</strong> {event.time}</p>
            <p className="text-lg mb-2"><strong>Category:</strong> {event.category}</p>
            <p className="text-lg mb-4"><strong>Price:</strong> {event.price}</p>
            <p className="text-lg font-medium mb-6">{event.description}</p> {/* Changed font weight here */}
            <button
              onClick={handleRegisterClick}
              className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-200"
            >
              Register for Event
            </button>
          </div>
        </div>
      </div>

      {/* Similar Related Events */}
      <div className="bg-white-100 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Similar Related Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedEvents.map((relatedEvent) => (
              <div
                key={relatedEvent.id}
                className="border rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleEventClick(relatedEvent.id)}
              >
                <img
                  src={relatedEvent.image}
                  alt={relatedEvent.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{relatedEvent.title}</h3>
                  <p className="text-sm text-gray-600">{relatedEvent.category}</p>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
        
      </div>

      
    </>
  );
};

export default EventDetail;
