import { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import SpainFlag from "../../assets/spain.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";

export default function Togglelangs() {
  const { toggleLang } = useContext(Context);
  return (
    <div className="container-langs">
      <img
        onClick={() => {
          toggleLang("FR");
        }}
        src={FrenchFlag}
      />
      <img
        onClick={() => {
          toggleLang("EN");
        }}
        src={EnglishFlag}
      />
      <img
        onClick={() => {
          toggleLang("ES");
        }}
        src={SpainFlag}
      />
    </div>
  );
}
