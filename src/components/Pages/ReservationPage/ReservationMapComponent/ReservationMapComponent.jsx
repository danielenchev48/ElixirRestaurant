import React, { useEffect } from "react";
import "./ReservationMapComponent.scss";
import reservationMap from "../../../../assets/images/reservation-section-designENG.png";
import ChairComponent from "./utils/ChairComponent/ChairComponent";
import barChairsPosition from "./utils/BarChairsPosition/BarChairsPosition";
import EightPeopleTable from "./utils/TableComponent/TableTypes/eightPeopleTable";
import FourPeopleMainRoomTable from "./utils/TableComponent/TableTypes/FourPeopleMainRoomTable";
import TablePosition from "./utils/TableComponent/TableTypes/utils/TablesPosition";
import TwoPeopleTable from "./utils/TableComponent/TableTypes/TwoPeopleTable";
import SevenPeopleTable from "./utils/TableComponent/TableTypes/sevenPeopleTable";
import FourPeopleTerraceTable from "./utils/TableComponent/TableTypes/FourPeopleTerraceTable";
import { useDispatch } from "react-redux";
import {
  useGetAllBarSpots,
  useGetAllTables,
} from "../../../../store/features/tables-hooks";
import { tablesActions } from "../../../../store/features/tables-slice";

const ReservationMapComponent = () => {
  const tables = useGetAllTables();
  const barSpots = useGetAllBarSpots();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const table = tables.find((table) => table.id === e.target.id);
    if (table) {
      if (!table.isReserved) {
        dispatch(tablesActions.makeReservation(e.target.id));
        e.target.querySelector("p").innerText = "Reserved";
        alert("Reserved");
      } else {
        alert("Sorry this Table is Reserved");
      }
    }
    console.log(table.isReserved);
  };

  const clickHandlerBarSpots = (e) => {
    const barSpot = barSpots.find((barSpot) => barSpot.id === e.target.id);
    console.log(barSpot);
    if (barSpot) {
      if (!barSpot.isReserved) {
        dispatch(tablesActions.makeReservationBarSpot(e.target.id));
        e.target.querySelector("p").innerText = "R";
        alert("Reserved");
      } else {
        alert("Sorry This Table is Reserved");
      }
    }
  };

  return (
    <div className="reservation-map-wrapper">
      <img
        className="reservation-map"
        src={reservationMap}
        alt="Elixir reservation map"
      />
      {barChairsPosition.map((chair, index) => (
        <ChairComponent
          key={index + 1}
          positionTop={chair.positionTop}
          positionLeft={chair.positionLeft}
          chairNumber={index + 1}
          rotation={chair.rotation}
          numberRotation={chair.numberRotation}
          numberPaddingRight={chair.numberPaddingRight}
          id={chair.id}
          onClick={clickHandlerBarSpots}
        />
      ))}
      <EightPeopleTable onClick={clickHandler} />
      {TablePosition.fourPeopleTableMainRoom.map((table, index) => (
        <FourPeopleMainRoomTable
          key={index + 1}
          positionTop={table.positionTop}
          positionLeft={table.positionLeft}
          tableNumber={table.tableNumber}
          onClick={clickHandler}
          id={table.tableNumber}
        />
      ))}
      {TablePosition.twoPeopleTable.map((table, index) => (
        <TwoPeopleTable
          key={index + 1}
          positionRight={table.positionRight}
          positionBottom={table.positionBottom}
          tableNumber={table.tableNumber}
          onClick={clickHandler}
          id={table.tableNumber}
        />
      ))}
      {TablePosition.sevenPeopleTable.map((table, index) => (
        <SevenPeopleTable
          key={index + 1}
          positionTop={table.positionTop}
          positionRight={table.positionRight}
          tableNumber={table.tableNumber}
          rotation={table.rotation}
          onClick={clickHandler}
          id={table.tableNumber}
        />
      ))}
      {TablePosition.fourPeopleTableTerrace.map((table, index) => (
        <FourPeopleTerraceTable
          key={index + 1}
          tableNumber={table.tableNumber}
          positionTop={table.positionTop}
          positionRight={table.positionRight}
          onClick={clickHandler}
          id={table.tableNumber}
        />
      ))}
    </div>
  );
};

export default ReservationMapComponent;
