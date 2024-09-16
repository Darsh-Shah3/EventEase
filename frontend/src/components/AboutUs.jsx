import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-10 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          About Us
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to EventEase</h2>
          <p className="text-lg text-gray-700 mb-4">
            At EventEase, we simplify event management with innovative solutions designed to streamline planning, organization, and execution. Whether you're hosting a small meeting or a large-scale conference, our platform offers tools and features that ensure your event runs smoothly and successfully.
          </p>
          <p className="text-lg text-gray-700">
            Our goal is to provide a seamless experience that helps you focus on what matters most—creating memorable experiences for your attendees. With EventEase, event planning is no longer a daunting task; it’s an opportunity to shine.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to revolutionize the way events are managed by offering a user-friendly, comprehensive platform that caters to all aspects of event planning. We strive to empower our users with the tools they need to create exceptional events that leave a lasting impact.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            We envision a world where event management is effortless and efficient. By continually innovating and adapting to the needs of our users, we aim to be the leading platform in the industry, setting new standards for excellence in event planning and execution.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li><strong>Innovation:</strong> We are committed to continuous improvement and staying ahead of industry trends to offer cutting-edge solutions.</li>
            <li><strong>Customer-Centricity:</strong> Our users are at the heart of everything we do. We listen to their needs and tailor our services to exceed their expectations.</li>
            <li><strong>Integrity:</strong> We uphold the highest standards of transparency and ethical practices in all our interactions.</li>
            <li><strong>Excellence:</strong> We strive for excellence in every aspect of our work, ensuring that our platform and support are of the highest quality.</li>
            <li><strong>Collaboration:</strong> We believe in the power of teamwork and collaboration, both within our company and with our users, to achieve shared goals.</li>
          </ul>
        </section>

        <section className="mb-12">
  <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
  <p className="text-lg text-gray-700 mb-4">
    Our dedicated team of professionals brings a wealth of experience and passion to the table. From developers and designers to customer support and event experts, each member of the EventEase team plays a crucial role in making our platform the best it can be.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center">Monisha</h3>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center">Mohit</h3>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center">Janvi</h3>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center">Mitali</h3>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center">Darsh</h3>
    </div>
  </div>
</section>
<Footer/>
      </div>
      
    </div>
  );
};

export default AboutUs;
