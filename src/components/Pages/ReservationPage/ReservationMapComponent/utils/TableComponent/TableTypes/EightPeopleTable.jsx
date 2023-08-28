import React from "react";
import "./EightPeopleTable.scss";
import ChairComponent from "../../ChairComponent/ChairComponent";
import chairsPositionArr from "./utils/chairsPositionArr";

const EightPeopleTable = ({ onClick }) => {
  return (
    <div className="eight-people-table-wrapper" id="Table 9" onClick={onClick}>
      <div className="eight-people-table">
        <p className="eight-people-table-number">Table 9</p>
      </div>
      {chairsPositionArr.eightPeopleTable.map((chair, index) => (
        <ChairComponent
          positionBottom={chair.positionBottom}
          positionLeft={chair.positionLeft}
          rotation={chair.rotation}
          key={index + 1}
        />
      ))}
    </div>
  );
};

export default EightPeopleTable;
