import React from "react";
import { DataProps } from "../api/Data";

interface ItemProps {
  data: DataProps;
}

function Item(props: ItemProps) {
  return (
    <div className="w-80 h-80 text-center flex flex-col items-center">
      <img src={props.data.image} alt="" className="w-64 h-64 mb-5 " />
      <p className="mb-1">{props.data.name} </p>
      <p>{props.data.price}</p>
    </div>
  );
}

export default Item;
