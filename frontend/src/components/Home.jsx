import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AllEvents from "./AllEvents";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

const Home = ({ isloggedin, isuser }) => {
    return (
        <>
            <Navbar isloggedin={isloggedin} />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <AllEvents isloggedin={isloggedin} isuser={isuser} />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
};

export default Home;
