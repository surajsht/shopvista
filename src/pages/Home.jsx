import { useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import Hero from "../component/hero/Hero";
import Featured from "../component/featured/Featured";

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
      <Featured />
    </>
  );
};

export default Home;
