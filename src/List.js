import React from "react";
import Card from "./Card";

function List(props) {
  const list = props.wand.map(wand => {
    return <Card wand={wand} key={wand.core} />;
  });
  return (
    <div className="container">
      <div className="wands">
        <br></br>
        <h3 className="style">Ollivander's Wand Shop!</h3>
        <br></br>
        <div className="row">{list}</div>
      </div>
    </div>
  );
}

export default List;
