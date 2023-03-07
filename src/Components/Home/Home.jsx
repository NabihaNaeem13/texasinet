import React from "react";
import Footer from "../Footer/Footer";
import Card from "../main/Card";
import TopBox from "../main/topBox";
import Menu from "../Navbar/menu1";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <div className="container-fluid">
        <div className="main">
          <TopBox />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
