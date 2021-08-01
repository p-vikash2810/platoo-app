import styled from "styled-components";

export const PhotoboothSec = styled.div`
  background-image: url("https://images.platoo.in/pageconfigbg/main_backdrop.png");
  padding: 4rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 50px 20px;
`;
export const Container = styled.div`
  display: flex;
  padding: 0 20px;
  /* border: 2px solid black; */
  /* overflow: hidden; */
`;
export const PhotoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ frameStart }) => (frameStart ? "row" : "row-reverse")};

  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const PhotoColFrame = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 65%;
  flex-basis: 65%;

  @media screen and (max-width: 790px) {
    max-width: 70%;
    flex-basis: 70%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export const PhotoColVideo = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 35%;
  flex-basis: 35%;
  /* width: 280px;
  height: 480px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 790px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CameraSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FrameWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
  /* overflow: hidden; */
`;

export const Img = styled.img`
  max-width: 65%;
  border-radius: 10px;
`;

export const Video = styled.video`
  width: 280px;
  height: 480px;
  z-index: 10;
  border-radius: 10px;
  object-fit: cover;
`;

export const FrameSelected = styled.img`
  width: 280px;
  height: 480px;
  position: absolute;
  z-index: 100;
  border-radius: 10px;
`;

export const Canvas = styled.canvas`
  width: 280px;
  height: 480px;
  position: absolute;
  z-index: 100;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-evenly;
  margin-top: 20px;
  position: relative;

  @media screen and (max-width: 790px) {
      margin-top: 10px;
  }
`;
