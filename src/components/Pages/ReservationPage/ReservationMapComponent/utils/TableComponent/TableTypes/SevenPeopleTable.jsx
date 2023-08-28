import React from "react";
import ChairComponent from "../../ChairComponent/ChairComponent";
import "./SevenPeopleTable.scss";
import chairsPositionArr from "./utils/chairsPositionArr";

const SevenPeopleTable = ({
  tableNumber,
  positionLeft,
  positionRight,
  positionTop,
  positionBottom,
  onClick,
  rotation,
  id,
}) => {
  return (
    <div
      className="seven-people-table-wrapper"
      style={{
        left: positionLeft,
        right: positionRight,
        bottom: positionBottom,
        top: positionTop,
        transform: `rotate(${rotation})`,
      }}
      onClick={onClick}
      id={id}
    >
      <div className="seven-people-table">
        <p className="seven-people-table-number">{tableNumber}</p>
      </div>
      {chairsPositionArr.sevenPeopleTable.map((chair, index) => (
        <ChairComponent
          key={index + 1}
          positionBottom={chair.positionBottom}
          positionLeft={chair.positionLeft}
          rotation={chair.rotation}
          positionTop={chair.positionTop}
        />
      ))}
    </div>
  );
};

export default SevenPeopleTable;
