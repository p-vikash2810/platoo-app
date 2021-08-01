import React, { useState, useEffect } from "react";
import {
  PhotoboothSec,
  Container,
  PhotoRow,
  PhotoColFrame,
  PhotoColVideo,
  Video,
  Canvas,
  FrameSelected,
  ButtonWrapper,
  CameraSection,
} from "./PhotoboothSection.elements";
import { Button } from "../../globalStyle";
import ImageSlider from "./ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoboothSection = ({
  img,
  captureButtonLabel,
  resetButtonLabel,
  downloadButtonLabel,
  primary,
  fontBig,
}) => {
  const [selectFrame, setSelectFrame] = useState(img);
  const [disabled, setDisabled] = useState(true);

  

  function videoStream() {
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    videoStream();
  }, []);

  const capture = React.useCallback(() => {
    var image = document.querySelector("#canvas1"),
      context = image.getContext("2d");
    var video = document.querySelector("#videoElement");

    context.drawImage(video, -195, 0);
    var img2 = new Image();
    img2.onload = function () {
      context.drawImage(img2, 0, 0);
    };
    img2.src = selectFrame;

    setDisabled(false);
  }, [selectFrame]);

  const renderSelect = (e) => {
    setSelectFrame(e.target.src);
    console.log(e.target.src);
    console.log("render called")
  };

  const downloadCanvas = () => {
    var link = document.createElement("a");
    link.download = "platoo-photobooth-" + Date.now() + ".png";

    link.href = document.getElementById("canvas1").toDataURL();
    link.click();
  };

  const handleReset = () => {
    const canvas = document.querySelector("#canvas1");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    setDisabled(true);
  };

  return (
    <>
      <PhotoboothSec>
        <Container>
          <PhotoRow frameStart>
            <PhotoColFrame>
              {/* <FrameWrapper> */}
                {/* <Img src={img} alt="frame" onClick={renderSelect} />
                <Img src={img} alt="frame" onClick={renderSelect} />
                <Img src={img} alt="frame" onClick={renderSelect} /> */}
                <ImageSlider renderSelect={renderSelect} />
              {/* </FrameWrapper> */}
            </PhotoColFrame>

            <PhotoColVideo>
              <CameraSection>
                <Video
                  id="videoElement"
                  autoPlay={true}
                  width="280px"
                  height="480px"
                ></Video>
                <FrameSelected
                  src={selectFrame}
                  alt="selected frame"
                ></FrameSelected>
                <Canvas id="canvas1" width="250" height="480"></Canvas>
              </CameraSection>
              <ButtonWrapper>
                {disabled ? (
                  <Button onClick={capture}>{captureButtonLabel}</Button>
                ) : (
                  <Button primary onClick={handleReset}>
                    {resetButtonLabel}
                  </Button>
                )}

                <Button onClick={downloadCanvas} disabled={disabled}>
                  {downloadButtonLabel}
                </Button>
              </ButtonWrapper>
            </PhotoColVideo>
          </PhotoRow>
        </Container>
      </PhotoboothSec>
    </>
  );
};

export default PhotoboothSection;
