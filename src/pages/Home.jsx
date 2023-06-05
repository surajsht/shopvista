import { useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import Hero from "../component/hero/Hero";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home");

    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
