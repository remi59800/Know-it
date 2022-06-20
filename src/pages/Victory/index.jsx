import { useContext } from "react";
import banner from "../../../public/images/banner.png";
import Replay from "../../components/Links/Replay";
import SVictory from "./style";
import pawn from "../../../public/images/pawn.svg";
import context from "../../context/Ctx";

export default function victory() {
  const { timer, setIsTimerActive } = useContext(context);
  const secondToTime = () => {
    const min = Math.floor(timer / 60);
    const timeForSec = timer % 60;
    const sec = Math.ceil(timeForSec);
    return `${min}:${sec}`;
  };
  setIsTimerActive(false);
  return (
    <div>
      <SVictory>
        <img src={banner} alt="Victory Banner" />
        <img src={pawn} alt="Pawn" />
        <p>Congratulations you won in {secondToTime(timer)}</p>
      </SVictory>
      <div className="replay-container">
        <Replay />
      </div>
    </div>
  );
}
