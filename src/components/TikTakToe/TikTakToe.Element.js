import styled from "styled-components";

export const GameSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 10px;
  background: whitesmoke;
  font-family: Arial, sans-serif;
  align-self: center;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  /* margin: 0 -15px -15px -15px; */
  flex-direction: ${({ boardStart }) => (boardStart ? "row" : "row-reverse")};
  /* width: 100vw;
  height: 100vh; */

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const BoardContainer = styled.div`
  margin-bottom: 15px;
  /* padding-right: 15px;
  padding-left: 15px; */
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* width: 100%;
  height: 100%; */
  /* align-items: flex-end; */

  /* width: 80vmin;
  height: 80vmin; */
  /* max-width: 50%; */
  /* flex-basis: 50%; */

  /* @media screen and (max-width: 768px) { */
  /* max-width: 100%; */
  /* flex-basis: 100%; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* } */
`;
export const BoardFooter = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
`;
export const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MoveLabel = styled.h2`
  margin-bottom: 10px;
`;
// export const InfoSection = styled.div`
//   margin-bottom: 15px;
//   padding-right: 15px;
//   padding-left: 15px;
//   /* flex: 1; */
//   /* max-width: 10%;
//   flex-basis: 10%; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 200px;

//   @media screen and (max-width: 768px) {
//     max-width: 100%;
//     flex-basis: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// `;
export const BotInfo = styled.span`
  font-size: 20px;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;

  & > img {
    width: 30px;
    height: 30px;
  }
`;
export const HumanInfo = styled.div``;

export const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
justify-content: center;
/* align-items: center; */
  width: 80vmin;
  height: 80vmin;
  align-self: center;
  position: relative;
  /* padding: auto; */
`;

export const OneRow = styled.div`
  display: flex;
  height: calc(100% / 3);
`;

export const BoardCell = styled.button`
  width: calc(100% / 3);
  border-left: none;

  margin: 2.5px;
  background-color: #269;
  border: none;
`;

export const CellImage = styled.img`
  width: 70px;
  height: 70px;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
`;

export const StartBoard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #269;
  align-items: center;
  justify-content: center;
`;
export const StartLabel = styled.span`
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 40px;
  /* text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue; */
`;

export const StartButtons = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const StartButton = styled.img`
  width: 100px;
  height: 100px;
  background: none;
  border: none;
  transition: 0.5s;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  /* box-shadow: 3px 3px 3px 3px #ccc; */
  /* -webkit-box-shadow: 3px 3px 3px 3px #ccc;
  -moz-box-shadow: 3px 3px 3px 3px #ccc; */
  &:hover {
    cursor: pointer;
    z-index: 1;
    transform: scale(1.25);
    /* box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5); */
  }
`;

export const NextPlayer = styled.div`
  position: absolute;
  /* top: 0%; */
  border-radius: 3px;
  width: 60vmin;
  height: 30vmin;
  background: rgba(255, 255, 255, 0.9);
  animation: modal 400ms forwards;
  /* display: none; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  box-shadow: 1px 1px 1px 1px lightgrey;
  text-align: center;
  font-size: 2.8vh;
  align-items: center;
  justify-content: space-evenly;
  /* line-height: 4.5vh; */
  /* padding-top: 1%; */
  margin: 0 14%;
  /* margin: 10% 6%; */
  /* padding: auto; */
  /* display: none; */

  & > span {
    font-size: 30px;
    font-weight: 900;
  }
`;

export const CrossIcon = styled.div`
  width: 95%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: -2vw;
`;
