import React from "react";
import { DataProps } from "../api/Data";

interface ItemProps {
  data: DataProps;
}

function Item({ data }: ItemProps) {
  return (
    <div style={{ width: "300px", height: "300px" }} className="bg-white">
      <img src={data.image} />
      <p>{data.name}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default Item;
