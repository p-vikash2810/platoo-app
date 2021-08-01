import React from "react";
import chicken from "../../Images/Chicken.png";
import egg from "../../Images/Egg.png";
import alertSound from "../../Audios/alert.mp3";
import clappingSound from "../../Audios/Clapping.mp3";
import ohNooSound from "../../Audios/Oh No.mp3";

// import Confetti from 'react-confetti'
import {
  GameBoard,
  OneRow,
  BoardCell,
  CellImage,
  NextPlayer,
  CrossIcon,
} from "./TikTakToe.Element";
import { Button } from "../../globalStyle";

import { FaTimes } from "react-icons/fa";

function Square(props) {
  const playAlert = () => {
    var alert = new Audio();
    alert.src = alertSound;
    alert.play();
  };

  return (
    <BoardCell onClick={props.onClick} onMouseDown={() => playAlert()}>
      {props.value && (
        <CellImage src={props.value === "X" ? chicken : egg} alt="img" />
      )}
    </BoardCell>
  );
}

function renderSquare(i, props, abd) {
  return (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
      squareImg={props.squareImg}
      setSquareImg={props.setSquareImg}
    />
  );
}

function statusUpdate(props) {
  console.log(props);
  const playClapping = () => {
    var alert = new Audio();
    alert.src = clappingSound;
    alert.play();
    !props.winner && alert.pause();
  };

  const playOhNo = () => {
    var alert = new Audio();
    alert.src = ohNooSound;
    alert.play();
  };
  // console.log("width", width1);
  console.log(props);
  let status = "";
  if (props.winner) {
    if (props.winner === "Draw") {
      status = "Draw! Well played";
    } else {
      if (props.chooseHuman === props.winner) {
        status = "You Won";
        playClapping();
      } else {
        status = "You Loose";
        playOhNo()
      }
    }
  }

  return status ? (
    <NextPlayer id="nextPlayer">
      {/* {status === "You Won" &&  <Confetti
      width="380vw"
      height="180vh"
    />} */}
      <CrossIcon>
        <FaTimes onClick={props.newGameBtn} />
      </CrossIcon>

      <span>{status}</span>

      <Button onClick={props.newGameBtn} big={false}>ok</Button>
    </NextPlayer>
  ) : null;
}

const board = (props) => {
  return (
    <GameBoard>
      <OneRow>
        {renderSquare(0, props)}
        {renderSquare(1, props)}
        {renderSquare(2, props)}
      </OneRow>
      <OneRow>
        {renderSquare(3, props)}
        {renderSquare(4, props)}
        {renderSquare(5, props)}
      </OneRow>
      <OneRow>
        {renderSquare(6, props)}
        {renderSquare(7, props)}
        {renderSquare(8, props)}
      </OneRow>

      {statusUpdate(props)}
    </GameBoard>
  );
};

export default board;
