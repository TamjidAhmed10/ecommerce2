import { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Products  />
   
    </div>
  );
};

export default Home;
