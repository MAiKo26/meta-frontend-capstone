import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function OrderOnline() {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "green", textAlign: "center" }}>
        To Order Online you can contact us in the following manners
      </h1>
      <ul>
        <li>Email : littlelemon@gmail.com</li>
        <li>Phone : 555-555-5555</li>
      </ul>

      <img src="/assets/Asset 20@4x.png" style={{ width: "100%" }} alt="logo" />
      <Footer />
    </div>
  );
}

export default OrderOnline;
