import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AllEvents from "./AllEvents";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <AllEvents />
                <Testimonials />
                <Footer /> 
            </div>
        </>
    );
};

export default Home;
 