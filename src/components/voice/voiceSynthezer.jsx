import React, { useState, useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  const [speechSynthesis, setSpeechSynthesis] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    if (!synth) {
      console.error('Speech synthesis not supported by your browser');
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

  return null; 
};

export default TextToSpeech;
