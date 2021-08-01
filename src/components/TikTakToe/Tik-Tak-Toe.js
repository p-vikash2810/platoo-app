import React, { useState, useEffect } from "react";
import noLosBot3x3O from "./3x3-O-noLosbot";
import Board from "./board";

import chicken from "../../Images/Chicken.png";
import egg from "../../Images/Egg.png";

import chickenSound from "../../Audios/chicken_kk.mp3";
import eggSound from "../../Audios/egg_crack.mp3";

import { Container, Button } from "../../globalStyle";
import Confetti from "react-confetti";

import {
  GameSection,
  Wrapper,
  BoardContainer,
  BoardFooter,
  MoveLabel,
  BotInfo,
  StartButtons,
  StartButton,
  StartLabel,
  StartBoard,
  FooterCenter,
} from "./TikTakToe.Element";

const Game = ({
  //   chickenImage,
  //   eggImage,
  undoButtonLabel,
  startLabel,
  moveLabel,
}) => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [squareImg, setSquareImg] = useState(null);
  const [chooseHuman, setChooseHuman] = useState("");
  const [moves, setMoves] = useState(0);
  var ddd;
  var abd;
  if (chooseHuman === "X") {
    ddd = "X";
    abd = "O";
  } else if (chooseHuman === "O") {
    ddd = "O";
    abd = "X";
  }

  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice();
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    const winner = calculateWinner(squares);

    if (winner) {
      return;
    }
    if (squares[i] != null) {
      return;
    }
    squares[i] = xIsNext ? ddd : "O";

    setHistory(newHistory.concat([{ squares: squares }]));

    setxIsNext(!xIsNext);

    console.log(moves);

    setTimeout(() => {
      autoPlayBot(squares);
      console.log(squares);
      console.log(squares.values.length);
    }, 500);
  };

  function autoPlayBot(squares) {
    const winner = calculateWinner(squares);
    if (winner) {
      if (winner === "Draw") {
        return;
      }
      return;
    }

    const botSquares = noLosBot3x3O(squares, history, abd);

    const newHistory = history.slice();

    setHistory(newHistory.concat([{ squares: botSquares }]));

    setxIsNext(true);
  }

  const undoBtn = () => {
    const newHistory = history.slice(0, -1);
    console.log(history);
    setHistory(newHistory);
  };

  const newGameBtn = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setxIsNext(true);
    setChooseHuman("");
  };

  function calculateWinner(squares) {
    if (history.length === 1) {
      return null;
    }

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a]);
        return squares[a];
      }
    }

    var isEnded = true;
    console.log(squares);
    squares.forEach((square) => {
      if (square === null) {
        isEnded = false;
      }
    });

    if (isEnded) {
      return "Draw";
    }

    return null;
  }

  const playChickenSound = () => {
    var chickenAudio = new Audio();
    chickenAudio.src = chickenSound;
    chickenAudio.play();
  };

  const playEggSound = () => {
    var eggAudio = new Audio();
    eggAudio.src = eggSound;
    eggAudio.play();
  };

  console.log(history.length);
  useEffect(() => {
    setMoves(history.length - 1);
  }, [history]);
  console.log(history);

  return (
    <GameSection>
      {calculateWinner(history[history.length - 1].squares) === chooseHuman && (
        <Confetti />
      )}
      {chooseHuman ? (
        <Container>
          <Wrapper boardStart>
            <BoardContainer>
              <Board
                squares={history[history.length - 1].squares}
                xIsNext={xIsNext}
                winner={calculateWinner(history[history.length - 1].squares)}
                onClick={handleClick}
                history
                newGameBtn={newGameBtn}
                squareImg={squareImg}
                setSquareImg={setSquareImg}
                chooseHuman={chooseHuman}
              />
              <BoardFooter>
                <BotInfo>
                  Bot :
                  <img
                    src={abd === "X" ? chicken : egg}
                    alt="bot choose"
                  />{" "}
                </BotInfo>
                <FooterCenter>
                  <MoveLabel>
                    {moveLabel} {moves}
                  </MoveLabel>
                  {history.length === 1 ? null : (
                    <Button
                      onClick={undoBtn}
                      disabled={calculateWinner(
                        history[history.length - 1].squares
                      )}
                    >
                      {undoButtonLabel}
                    </Button>
                  )}
                </FooterCenter>
                <BotInfo>
                  You :
                  <img src={ddd === "X" ? chicken : egg} alt="human choose" />
                </BotInfo>
              </BoardFooter>
            </BoardContainer>
            {/* <InfoSection></InfoSection> */}
          </Wrapper>
        </Container>
      ) : (
        <StartBoard>
          <StartLabel>{startLabel}</StartLabel>
          <StartButtons>
            <StartButton
              src={chicken}
              onMouseDown={() => playChickenSound()}
              onClick={() => setChooseHuman("X")}
            ></StartButton>
            <StartButton
              src={egg}
              onMouseDown={() => playEggSound()}
              onClick={() => setChooseHuman("O")}
            ></StartButton>
          </StartButtons>
        </StartBoard>
      )}
    </GameSection>
  );
};

export default Game;
