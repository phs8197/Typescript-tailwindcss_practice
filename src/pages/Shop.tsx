import React, { useEffect, useState } from "react";
import Item from "../component/Item";
import { Data, DataProps } from "../api/Data";
function Shop() {
  const [data, setData] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    Data().then((result) => {
      setData(result);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>I'm Loading</div>;
  else
    return (
      <div className="h-screen bg-secondary ">
        <div className="grid grid-rows-2 grid-flow-col gap-12 justify-center">
          {data.map((a, i) => (
            <Item data={a} key={i}></Item>
          ))}
        </div>
      </div>
    );
}

export default Shop;
