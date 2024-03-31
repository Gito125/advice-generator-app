import React from "react";
import './DiceIcon.css'
import IconDice from '../../images/icon-dice.svg'

const DiceIcon = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className="DiceIcon w-10 transition-all ease-out m-auto relative -bottom-10 bg-primary2 p-3 rounded-full"
      type="button"
    >
      <img src={IconDice} className=" w-10" alt="dice icon" />
    </button>
  );
};

export default DiceIcon;
