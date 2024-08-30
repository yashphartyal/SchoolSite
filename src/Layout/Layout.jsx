import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Use react-router for routing information
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from '../components/Loader';


const Layout = ({ children, showHero }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer); 
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      {loading && location.pathname === '/' ? (
        <Loader /> // Show loader if loading and on HomePage
      ) : (
        <div className="container mx-auto flex-1 py-10">{children}</div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
