import React, { useState } from 'react';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const App = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening
}) => {
  const [isRecording, setIsRecording] = useState(false);
  if (!browserSupportsSpeechRecognition) {
    stopListening();
    return null;
  }
  
  const toggleRecording = () => {
    if(!isRecording) {
      startListening()
      setIsRecording(!isRecording)
    } else {
      stopListening()
      setIsRecording(!isRecording)
    }
  }
//console.log('listening:', listening);

  return (
    <div>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={toggleRecording}>start</button>
      <span>{transcript}</span>
    </div>
  );
};

App.propTypes = propTypes;

export default SpeechRecognition({autoStart: false})(App);
