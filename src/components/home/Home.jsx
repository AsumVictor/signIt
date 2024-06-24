import React, { useEffect, useRef, useState } from "react";
import Detect from "../Detect/Detect";
import { FaMicrophone, FaRegClosedCaptioning } from "react-icons/fa6";
import Navbar from "../navbar/Navbar";
import ToolBar from "../toolBar/ToolBar.jsx";
import TextSpeakerVisualizer from "../voice/voiceSynthezer.jsx";
import EdgeDraggable from "./Dragable.js";
import Draggable from "react-draggable";
import { IoIosVideocam } from "react-icons/io";
import { IoVolumeMute } from "react-icons/io5";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { FaClosedCaptioning } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";

const Home = () => {
  let [words, setWords] = useState("");
  let [isSpeaking, setIsSpeaking] = useState(false);
  let [start, setStart] = useState(false);
  let [showCaption, setShowCaption] = useState(true);
  let voiceRef = useRef(null);
  const restartWords = (text) => {
    setWords(text);
  };

  useEffect(() => {
    if (words.trim() == "") {
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
    }
  }, [words]);

  const demo = () => {
    console.log(" ");
  };

  const data = [
    {
      focus: false,
      icon: <IoSettings />,
      icon2: <IoSettings />,
      text: "settings",
      text2: "settings",
      action: demo,
      className: " ",
    },
    {
      focus: false,
      icon: <BsFillRecord2Fill />,
      text: "record",
      icon2: <BsFillRecord2Fill />,
      text2: "record",
      action: demo,
      className: " text-red-600",
    },

    {
      focus: false,
      icon: <IoIosVideocam />,
      text: "Video",
      icon2: <IoIosVideocam />,
      text2: "Video",
      action: demo,
      className: "",
    },
    {
      icon2: <FaPauseCircle />,
      icon: <VscDebugStart />,
      text2: "pause",
      text: "Start",
      value: start,
      action: () => setStart((prev) => !prev),
      className: "",
      focus: true,
    },
    {
      focus: false,
      icon: <IoVolumeMute />,
      text: "Speaker",
      icon2: <IoVolumeMute />,
      text2: "Speaker",
      action: demo,
      className: "",
    },
    {
      focus: false,
      icon: <AiOutlineAudioMuted />,
      text: "Mute",
      icon2: <AiOutlineAudioMuted />,
      text2: "Mute",
      action: demo,
      className: "",
    },
    {
      focus: false,
      icon: <FaRegClosedCaptioning />,
      text: "caption",
      icon2: <FaClosedCaptioning />,
      text2: "caption",
      action: () => setShowCaption((prev) => !prev),
      className: "",
      value: showCaption,
    },
  ];
  return (
    <div className=" h-full w-full relative px-3 py-3">
      <Navbar />
      {/* Render perfomance */}
      <div className=" px-5 py-4 render_space w-full h-full absolute top-0 left-0 overflow-hidden ">
        <div className=" w-full  h-full relative overflow-hidden">
          <Detect
            start={start}
            className="w-full h-full"
            handleWords={restartWords}
          />
          <div className=" absolute top-0 -right-0 flex flex-col h-full justify-between items-end pb-[2.5cm]">
            <div className=" h-[3.5cm] w-[3.5cm] rounded-2xl  backdrop-blur-xl p-2">
              <div className=" flex justify-center items-center h-full w-full rounded-2xl shadow-2xl text-6xl text-red-800 cursor-pointer backdrop-blur-3xl backdrop-brightness-0 bg-[#ffffff36]">
                <FaMicrophone />
              </div>
            </div>

            <div
              ref={voiceRef}
              className=" cursor-grab w-[7cm] h-[3cm]  py-2 z-[999] rounded-2xl  backdrop-blur-xl p-2 flex mr-2"
            >
              <Draggable>
                <TextSpeakerVisualizer text={words} isSpeaking={isSpeaking} />
              </Draggable>
            </div>
          </div>
        </div>
      </div>

      <ToolBar text={words} tools={data} iscaption={showCaption} />
    </div>
  );
};

export default Home;
