import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수</div>;
};

export default Even;
