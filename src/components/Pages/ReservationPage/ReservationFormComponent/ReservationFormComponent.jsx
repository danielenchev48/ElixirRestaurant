import React from "react";
import "./ReservationFormComponent.scss";
import OptionElementData from "./OptionElementData";
const ReservationFormComponent = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="reservation-form-wrapper">
      <h2 className="form-header">Reservation</h2>
      <form className="reservation-form" onSubmit={formSubmitHandler}>
        <div>
          <div className="input-wrapper">
            <label htmlFor="date-input">Date:</label>
            <input type="date" id="date-input" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="select-zone">Select zone:</label>
            <select name="select-zone" id="select-zone">
              <option value="saloon">Saloon</option>
              <option value="terrace">Terrace</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="select-table">Select table/bar spot:</label>
            <select name="select-table-or-bar-spot" id="select-table">
              {OptionElementData.tables.map((table, index) => (
                <option key={index + 1} value={table}>
                  {table}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="input-wrapper">
            <label htmlFor="select-hour">Hour:</label>
            <select name="select-hour" id="select-hour">
              {OptionElementData.hours.map((hour, index) => (
                <option key={index + 1} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="isSmoke">Choose:</label>
            <select name="isSmoke" id="isSmoke">
              <option value="smokers">Smokers</option>
              <option value="non smokers">Non-smokers</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="number">People</label>
            <input type="number" id="number" />
          </div>
          <button className="reservation-submit-btn" type="submit">
            Reserve
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationFormComponent;
