import React from "react";
import "./FourPeopleTerraceTable.scss";
import ChairComponent from "../../ChairComponent/ChairComponent";
import chairsPositionArr from "./utils/chairsPositionArr";

const FourPeopleTerraceTable = ({
  tableNumber,
  positionLeft,
  positionRight,
  positionTop,
  positionBottom,
  onClick,
  id,
}) => {
  return (
    <div
      className="four-people-table-terrace-wrapper"
      style={{
        left: positionLeft,
        right: positionRight,
        bottom: positionBottom,
        top: positionTop,
      }}
      onClick={onClick}
      id={id}
    >
      <div className="four-people-table-terrace">
        <p className="four-people-table-terrace-number">{tableNumber}</p>
      </div>
      {chairsPositionArr.fourPeopleTableTerrace.map((chair, index) => (
        <ChairComponent
          key={index + 1}
          positionBottom={chair.positionBottom}
          positionLeft={chair.positionLeft}
          rotation={chair.rotation}
        />
      ))}
    </div>
  );
};

export default FourPeopleTerraceTable;
