import React from "react";
import useForm from "../hooks/useForm";
import "./BookingForm.css";

const BookingForm = ({ navigate }) => {
  const {
    form,
    timeSlots,
    isFormValid,
    changeNameHandler,
    changeEmailHandler,
    changeDateHandler,
    changeTimeHandler,
    changeGuestsHandler,
    changeTableHandler,
    changeOccasionHandler,
    changeMessageHandler,
    submitHandler,
  } = useForm();

  function handleSubmit() {
    const response = submitHandler();
    return response ? navigate("/booking-confirmation") : null;
  }

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="column">
        <label htmlFor="name">
          <p>Your Name</p>
          <input
            value={form.name}
            onChange={changeNameHandler}
            type="text"
            id="name"
          />
        </label>
        <label htmlFor="email">
          <p>Your Email</p>
          <input
            value={form.email}
            onChange={changeEmailHandler}
            type="email"
            id="email"
          />
        </label>
        <label htmlFor="res-date">
          <p>Choose date</p>
          <input
            value={form.date}
            onChange={changeDateHandler}
            type="date"
            id="res-date"
            placeholder="Date"
          />
        </label>
        <label htmlFor="res-time">
          <p>Choose time</p>
          <select onChange={changeTimeHandler} value={form.time} id="res-time">
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="column">
        <label htmlFor="guests">
          <p>Number of guests</p>
          <input
            value={form.numberOfGuests}
            onChange={changeGuestsHandler}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
          />
        </label>
        <label htmlFor="occasion">
          <p>Occasion</p>
          <select
            value={form.occasion}
            onChange={changeOccasionHandler}
            id="occasion"
          >
            <option value="">None</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </label>
        <label htmlFor="table">
          <p>Table preference</p>
          <select
            value={form.tablePreference}
            onChange={changeTableHandler}
            id="occasion"
          >
            <option value="">None</option>
            <option value="inside">Inside</option>
            <option value="outside">Outside</option>
          </select>
        </label>
      </div>
      <div className="column">
        <label htmlFor="message">
          <p>Additional requests</p>
          <textarea
            value={form.message}
            onChange={changeMessageHandler}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </label>
      </div>
      <div className="submit-container">
        <button disabled={!isFormValid}>Make Reservation</button>
      </div>
    </form>
  );
};

export default BookingForm;