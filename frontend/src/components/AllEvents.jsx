// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import codeImg from "../assets/code.jpg";
// import e1 from "../assets/img/e1.avif";
// import e2 from "../assets/img/e2.avif";
// import e3 from "../assets/img/e3.jpg";

// const Card = ({ date, time, title, category, price, image }) => {
//   return (
//     <a href="/">
//       <div className="border rounded-lg overflow-hidden shadow-lg w-full h-80 md:h-96 max-w-xs md:max-w-sm">
//         <div className="w-full h-1/2">
//           <img src={image} alt="Event" className="w-full h-full object-cover" />
//         </div>
//         <div className="p-4 h-1/2 flex flex-col justify-between">
//           <div>
//             <div className="flex space-x-4 mb-4">
//               <span className="bg-green-100 text-green-500 py-1 px-3 rounded-full text-sm">{price}</span>
//               <span className="bg-gray-100 text-gray-500 py-1 px-3 rounded-full text-sm">{category}</span>
//             </div>
//             <div className="text-gray-600 mb-2">
//               <p><strong>Date:</strong> {date}</p>
//               <p><strong>Time:</strong> {time}</p>
//             </div>
//           </div>
//           <h3 className="text-xl font-bold mb-2">{title}</h3>
//         </div>
//       </div>
//     </a>
//   );
// };

// const AllEvents = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const events = [
//     { date: "September 15, 2024", time: "10:00 AM", title: "Github Universe 2024", category: "Tech", price: "Free", image: codeImg },
//     { date: "September 16, 2024", time: "11:00 AM", title: "Tech Innovators Conference 2024", category: "Tech", price: "$20", image: e1 },
//     { date: "September 17, 2024", time: "12:00 PM", title: "Green Future Expo", category: "Environment", price: "$15", image: e2 },
//     { date: "September 18, 2024", time: "02:00 PM", title: "AI Revolution 2024", category: "AI", price: "Free", image: e3 },
//   ];

//   const filteredEvents = events.filter((event) => {
//     const matchesTitle = event.title.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === "" || selectedCategory === "All" || event.category === selectedCategory;
//     return matchesTitle && matchesCategory;
//   });

//   const eventsToDisplay = filteredEvents.length > 0 || searchQuery === "" ? filteredEvents : events;

//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
//         Trusted by{" "}
//         <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
//           thousands of events.
//         </span>
//       </h2>
//       <div className="flex flex-wrap justify-center">
//         <div className="mt-20 px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//             {/* Search by Title */}
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search title..."
//                 className="border rounded-md p-2 pl-10 w-full h-12 focus:ring-2 focus:ring-purple-400"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="absolute left-3 top-2.5 text-gray-400" />
//             </div>

//             {/* Filter by Category */}
//             <select
//               className="border rounded-md p-2 w-full h-12 focus:ring-2 focus:ring-purple-400"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               <option value="" hidden>Category</option>
//               <option value="All">All</option>
//               <option value="AI">AI</option>
//               <option value="Tech">Tech</option>
//               <option value="Environment">Environment</option>
//             </select>
//           </div>

//           {/* Display filtered events */}
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//             {eventsToDisplay.length > 0 ? (
//               eventsToDisplay.map((event, index) => (
//                 <Card
//                   key={index}
//                   date={event.date}
//                   time={event.time}
//                   title={event.title}
//                   category={event.category}
//                   price={event.price}
//                   image={event.image}
//                 />
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No events found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllEvents;





// with just hover effect

import React,{useState} from "react";
import { Search } from "lucide-react";
import codeImg from "../assets/code.jpg";
import e1 from "../assets/img/e1.avif";
import e2 from "../assets/img/e2.avif";
import e3 from "../assets/img/e3.jpg";

const Card = ({ date, time, title, category, price, image }) => {
  return (
    <a href="/">
      <div className="border rounded-lg overflow-hidden shadow-lg w-full h-80 md:h-96 max-w-xs md:max-w-sm transition-transform transform hover:scale-105">
        <div className="w-full h-1/2">
          <img src={image} alt="Event" className="w-full h-full object-cover" />
        </div>
        <div className="p-4 h-1/2 flex flex-col justify-between">
          <div>
            <div className="flex space-x-4 mb-4">
              <span className="bg-green-100 text-green-500 py-1 px-3 rounded-full text-sm">{price}</span>
              <span className="bg-gray-100 text-gray-500 py-1 px-3 rounded-full text-sm">{category}</span>
            </div>
            <div className="text-gray-600 mb-2">
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Time:</strong> {time}</p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </div>
      </div>
    </a>
  );
};

const AllEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const events = [
    { date: "September 15, 2024", time: "10:00 AM", title: "Github Universe 2024", category: "Tech", price: "Free", image: codeImg },
    { date: "September 16, 2024", time: "11:00 AM", title: "Tech Innovators Conference 2024", category: "Tech", price: "$20", image: e1 },
    { date: "September 17, 2024", time: "12:00 PM", title: "Green Future Expo", category: "Environment", price: "$15", image: e2 },
    { date: "September 18, 2024", time: "02:00 PM", title: "AI Revolution 2024", category: "AI", price: "Free", image: e3 },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesTitle = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "" || selectedCategory === "All" || event.category === selectedCategory;
    return matchesTitle && matchesCategory;
  });

  const eventsToDisplay = filteredEvents.length > 0 || searchQuery === "" ? filteredEvents : events;

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Trusted by{" "}
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          thousands of events.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="mt-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Search by Title */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search title..."
                className="border rounded-md p-2 pl-10 w-full h-12 focus:ring-2 focus:ring-purple-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            {/* Filter by Category */}
            <select
              className="border rounded-md p-2 w-full h-12 focus:ring-2 focus:ring-purple-400"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" hidden>Category</option>
              <option value="All">All</option>
              <option value="AI">AI</option>
              <option value="Tech">Tech</option>
              <option value="Environment">Environment</option>
            </select>
          </div>

          {/* Display filtered events */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {eventsToDisplay.length > 0 ? (
              eventsToDisplay.map((event, index) => (
                <Card
                  key={index}
                  date={event.date}
                  time={event.time}
                  title={event.title}
                  category={event.category}
                  price={event.price}
                  image={event.image}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No events found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;




