import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Booking.css";
import React, { useState } from "react";

function Booking() {
  const [data, setData] = useState({
    date: "",
    time: "",
    numberppl: "",
    email: "",
    phone: "",
    occasion: "No Occasion",
  });

  const [submitted, setSubmitted] = useState(false);
  console.log(submitted);

  const [isFormValid, setIsFormValid] = useState(false);

  const formIsValid =
    data.date.length &&
    data.time.length &&
    data.numberppl.length &&
    data.email.length &&
    data.phone.length;
  const validateForm = () => {
    setIsFormValid(formIsValid);

    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setSubmitted(true);
  };
  return (
    <div className="">
      <Navbar />
      <form className="bookingcontainer">
        <div className="bookingform">
          <label htmlFor="date">Choose Date:</label>
          <input
            onChange={(e) => {
              setData({ ...data, date: e.target.value });
              validateForm();
            }}
            id="date"
            type="date"
            required
          />

          <label htmlFor="time">Choose Time:</label>
          <input
            onChange={(e) => {
              setData({ ...data, time: e.target.value });
              validateForm();
            }}
            id="time"
            type="time"
            required
          />

          <label htmlFor="numberppl">Number of People:</label>
          <input
            id="numberppl"
            onChange={(e) => {
              setData({ ...data, numberppl: e.target.value });
              validateForm();
            }}
            type="number"
            min="1"
            max="10"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
              validateForm();
            }}
            pattern=".+@globex\.com"
            size="30"
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
              validateForm();
              console.log(data);
            }}
            type="tel"
            required
          />

          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            defaultValue={"No Occasion"}
            onChange={(e) => {
              setData({ ...data, occasion: e.target.value });
              validateForm();
            }}
          >
            <option value="No Occasion">No Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <button type="submit" onClick={handleSubmit} disabled={!isFormValid}>
            Submit
          </button>
        </div>
      </form>
      {submitted ? (
        <h1
          style={{
            color: "green",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Your reservation has been registered !
        </h1>
      ) : null}

      <Footer />
    </div>
  );
}

export default Booking;
