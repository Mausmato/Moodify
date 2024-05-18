import Webcam from "react-webcam";
import React from "react";

const VideoOnCanvas = ({ canvasRef, webcamRef, constraints }) => (
  <div>
    <canvas
      ref={canvasRef}
      width={1100}
      height={700}
      style={{ objectFit: "cover"}}
      className="canvas"
    />
    <Webcam
      audio={false}
      mirrored={true}
      ref={webcamRef}
      videoConstraints={constraints}
      style={{ display: "none" }}
    />
  </div>
);

export default VideoOnCanvas;
