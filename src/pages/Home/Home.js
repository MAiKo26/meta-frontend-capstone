import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

function Home() {
  const data = {};
  return (
    <div>
      <Navbar />
      <Header />
      <div id="menu">
        <Card data={data} />
      </div>
      <div id="about">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
