import React, { useState, useEffect, useRef } from "react";
import { PiSpeakerSimpleNoneFill } from "react-icons/pi";

const TextToSpeech = ({ text, isSpeaking }) => {
  const [speechSynthesis, setSpeechSynthesis] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    if (!synth) {
      console.error("Speech synthesis not supported by your browser");
      return;
    }

    setSpeechSynthesis(synth);

    return () => {
      if (synth.speaking) {
        synth.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (speechSynthesis && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  }, [speechSynthesis, text]);

  let rows = [];
  for (let i = 1; i <= 12; i++) {
    rows.push(i);
  }

  return (
    <div className=" w-full h-full backdrop-blur-3xl backdrop-brightness-0 bg-[#ffffff36] flex justify-center items-center text-6xl relative rounded-2xl">
      <div
        className={`grid grid-cols-12 absolute top-0 left-0 w-full h-full justify-center items-center px-2 gap-3  `}
      >
        {rows.map((i) => (
          <div
            className={`${
              isSpeaking && "show"
            }  col-span-1 shadow-sm audio--visual rounded-full`}
          ></div>
        ))}
      </div>
      <PiSpeakerSimpleNoneFill
        className="relative rounded-2xl z-[10] text-primary-500  backdrop-blur-3xl bg-[#ffffffd3]"
        size={72}
      />
    </div>
  );
};

export default TextToSpeech;
