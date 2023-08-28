import React from "react";
import "./FourPeopleMainRoomTable.scss";
import ChairComponent from "../../ChairComponent/ChairComponent";
import chairsPositionArr from "./utils/chairsPositionArr";

const FourPeopleMainRoomTable = ({
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
      className="four-people-table-main-wrapper"
      style={{
        left: positionLeft,
        right: positionRight,
        bottom: positionBottom,
        top: positionTop,
      }}
      onClick={onClick}
      id={id}
    >
      <div className="four-people-table-main">
        <p className="four-people-table-main-number">{tableNumber}</p>
      </div>
      {chairsPositionArr.fourPeopleTableMainRoom.map((chair, index) => (
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

export default FourPeopleMainRoomTable;
