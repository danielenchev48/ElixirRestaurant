import React from "react";
import ChairComponent from "../../ChairComponent/ChairComponent";
import "./TwoPeopleTable.scss";
import chairsPositionArr from "./utils/chairsPositionArr";

const TwoPeopleTable = ({
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
      className="two-people-table-wrapper"
      style={{
        left: positionLeft,
        right: positionRight,
        bottom: positionBottom,
        top: positionTop,
      }}
      onClick={onClick}
      id={id}
    >
      <div className="two-people-table">
        <p className="two-people-table-number">{tableNumber}</p>
      </div>
      {chairsPositionArr.twoPeopleTable.map((chair, index) => (
        <ChairComponent
          key={index + 1}
          positionBottom={chair.positionBottom}
          positionRight={chair.positionRight}
          rotation={chair.rotation}
        />
      ))}
    </div>
  );
};

export default TwoPeopleTable;
