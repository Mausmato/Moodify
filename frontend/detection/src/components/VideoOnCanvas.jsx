import Webcam from "react-webcam";
import React from "react";

const VideoOnCanvas = ({ canvasRef, webcamRef, constraints }) => (
  <div>
    <canvas
      ref={canvasRef}
      width={1920}
      height={1080}
      style={{ objectFit: "cover" }}
      className="canvas"
    />
    <Webcam
      audio={false}
      width={1920}
      height={1080}
      mirrored={true}
      ref={webcamRef}
      videoConstraints={constraints}
      style={{ display: "none" }}
    />
  </div>
);

export default VideoOnCanvas;
