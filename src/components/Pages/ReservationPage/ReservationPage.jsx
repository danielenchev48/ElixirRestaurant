import React from "react";
import "./ReservationPage.scss";
import ReservationMapComponent from "./ReservationMapComponent/ReservationMapComponent";
import ReservationFormComponent from "./ReservationFormComponent/ReservationFormComponent";

const ReservationPage = () => {
  return (
    <>
      <h1>Reservation Page</h1>
      <ReservationFormComponent />
      <ReservationMapComponent />
    </>
  );
};

export default ReservationPage;
