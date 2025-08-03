import {ClockLoader} from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <ClockLoader color="#000" />
    </div>
  );
}
