import React from "react";
import Item from "../component/Item";
import { Data } from "../api/Data";
function Shop() {
  const data = Data();
  return (
    <div className="h-screen bg-secondary ">
      <div className="grid grid-rows-2 grid-flow-col gap-12 justify-center">
        {data.map((a) => (
          <div>{a}</div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
