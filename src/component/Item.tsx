import React from "react";
import { DataProps } from "../api/Data";

interface ItemProps {
  data: DataProps;
}

function Item(props: ItemProps) {
  return (
    <div className="bg-white w-80 h-80">
      <img src={props.data.image} alt="" className="w-48 h-48" />
      <p>{props.data.name}</p>
      <p>{props.data.price}</p>
    </div>
  );
}

export default Item;
