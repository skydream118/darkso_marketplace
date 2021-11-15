import { useContext } from "react";
import { Context } from "../contexts/DarksoProvider";

const useDarkso = () => {
  const { darkso } = useContext(Context);
  return darkso;
};

export default useDarkso;
