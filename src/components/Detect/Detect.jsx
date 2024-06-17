import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Detect.css";
import { v4 as uuidv4 } from "uuid";
import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";
import {
  drawConnectors,
  drawLandmarks,
  // HAND_CONNECTIONS,
} from "@mediapipe/drawing_utils";

import { HAND_CONNECTIONS } from "@mediapipe/hands";

import Webcam from "react-webcam";
import { SignImageData } from "../../data/SignImageData";
import { useDispatch, useSelector } from "react-redux";

import TextToSpeech from "../voice/voiceSynthezer";

let startTime = "";

const Detect = ({ className, handleWords }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const mock_data = [
    "On this tuesday morning, in front of you faculty, we are presenting our prorotype.",
    "We plan a solution that meets",
  ];
  const [webcamRunning, setWebcamRunning] = useState(true);
  const [gestureOutput, setGestureOutput] = useState("");
  const [gestureRecognizer, setGestureRecognizer] = useState(null);
  const [runningMode, setRunningMode] = useState("IMAGE");
  const [progress, setProgress] = useState(0);

  const requestRef = useRef();

  const [detectedData, setDetectedData] = useState([]);

  const user = useSelector((state) => state.auth?.user);

  const { accessToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    let intervalId;
    if (webcamRunning) {
      intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * SignImageData.length);
        const randomImage = SignImageData[randomIndex];
        setCurrentImage(randomImage);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [webcamRunning]);

  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "production"
  ) {
    console.log = function () {};
  }

  const predictWebcam = useCallback(() => {
    if (runningMode === "IMAGE") {
      setRunningMode("VIDEO");
      gestureRecognizer.setOptions({ runningMode: "VIDEO" });
    }

    let nowInMs = Date.now();
    const results = gestureRecognizer.recognizeForVideo(
      webcamRef.current.video,
      nowInMs
    );

    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    // Set canvas height and width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    // Draw the results on the canvas, if any.
    if (results.landmarks) {
      for (const landmarks of results.landmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 5,
        });

        drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });
      }
    }
    if (results.gestures.length > 0) {
      setDetectedData((prevData) => [
        ...prevData,
        {
          SignDetected: results.gestures[0][0].categoryName,
        },
      ]);

      setGestureOutput(results.gestures[0][0].categoryName);
      handleWords(results.gestures[0][0].categoryName)
      setProgress(Math.round(parseFloat(results.gestures[0][0].score) * 100));
    } else {
      setGestureOutput("");
      handleWords('')
      setProgress("");
    }

    if (webcamRunning === true) {
      requestRef.current = requestAnimationFrame(predictWebcam);
    }
  }, [webcamRunning, runningMode, gestureRecognizer, setGestureOutput]);

  const animate = useCallback(() => {
    requestRef.current = requestAnimationFrame(animate);
    predictWebcam();
  }, [predictWebcam]);

  const enableCam = useCallback(() => {
    if (!gestureRecognizer) {
      alert("Please wait for gestureRecognizer to load");
      return;
    }

    if (webcamRunning === true) {
      setWebcamRunning(false);
      cancelAnimationFrame(requestRef.current);
      setCurrentImage(null);
    } else {
      setWebcamRunning(true);
      startTime = new Date();
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [
    webcamRunning,
    gestureRecognizer,
    animate,
    detectedData,
    user?.name,
    user?.userId,
    dispatch,
  ]);

  useEffect(() => {
    async function loadGestureRecognizer() {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      const recognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://firebasestorage.googleapis.com/v0/b/sign-language-ai.appspot.com/o/sign_language_recognizer_25-04-2023.task?alt=media&token=fce5727a-48a2-426a-be07-956964695cec",
        },
        numHands: 2,
        runningMode: runningMode,
      });
      setGestureRecognizer(recognizer);
    }
    loadGestureRecognizer();
  }, [runningMode]);

  return (
    <>
      <div className={`${className} bg-slate-400 rounded-3xl overflow-hidden`}>
        <div className=" w-full h-full  relative overflow-hidden rounded-3xl">
          <Webcam
            audio={false}
            ref={webcamRef}
            height={1200}
            className="webcam absolute top-0 left-0"
          />
          <canvas
            ref={canvasRef}
            className="w-full h-full absolute top-0 left-0"
          />
        </div>

        <button className=" absolute bottom-40 left-0" onClick={enableCam}>
          {webcamRunning ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
};

export default Detect;

// const x = ()=>{
//   return (
//       <div className="signlang_detection-container">
//         <div>
//           <div className="signlang_data-container">
//             <button onClick={enableCam}>
//               {webcamRunning ? "Stop" : "Start"}
//             </button>

//             <div className="signlang_data">
//               {/* <p className="gesture_output">{gestureOutput}</p> */}

//               {/* {progress ? <ProgressBar progress={progress} /> : null} */}
//             </div>
//           </div>

//           {/* <TextToSpeech text={gestureOutput} /> */}
//         </div>
//       </div>

//   )
// }
