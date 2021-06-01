import { useEffect } from "react";
import { Provids, createStore } from "../lib/micro-context";

import { publish } from "../lib/micro-context/postal";
import { MICRO_MOUNT_DATA } from "../lib/micro-context/constant";

export default function Son3() {
  useEffect(() => {
    console.log(444);

    setTimeout(() => {
      publish(MICRO_MOUNT_DATA, {
        val: 'test',
        name: 'son3 page'
      });
      console.log('father effect')
    }, 3000);
  }, []);;

  return (
    <div>
      <micro-router url="/son2" path="/" prefix="http://localhost:1235/" />
    </div>
  );
}
