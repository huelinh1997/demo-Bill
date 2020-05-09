import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import { withStyles } from '@material-ui/styles';
import PropTypes from "prop-types";
import React, { useState } from "react";
import SpeechRecognition from "react-speech-recognition";
import { Col, Row } from "reactstrap";
import { compose } from 'redux';
import audio from '../../Img/audio.png';
import styles from './Style';
const propTypes = {
	// Props injected by SpeechRecognition
	transcript: PropTypes.string,
	resetTranscript: PropTypes.func,
	browserSupportsSpeechRecognition: PropTypes.bool,
};

const Recording = ({
	transcript,
	resetTranscript,
	browserSupportsSpeechRecognition,
	startListening,
	stopListening,
	classes
}) => {
	const [isRecording, setIsRecording] = useState(false);
	if (!browserSupportsSpeechRecognition) {
		stopListening();
		return null;
	}

	const toggleRecording = () => {
		if (!isRecording) {
			startListening();
			setIsRecording(!isRecording);
		} else {
			stopListening();
			setIsRecording(!isRecording);
		}
	};
	//console.log('listening:', listening);

	return (
		<div className={`container-fluid text-center my-4 ${classes.recording}`}>
			<Row>
				<Col>
					<h2>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.{" "}
					</h2>
					<p className='text-muted'>
						Click on the microphone icon and begin speaking for as long as you
						like.
					</p>
					<div className={classes.wrap}>
						<span className={classes.btnRecording} onClick={toggleRecording}><SettingsVoiceIcon fontSize="large" /></span>
						{console.log('transcript:', transcript)
						}
						<textarea className={classes.textShow}>{transcript}</textarea>
						<div><button onClick={resetTranscript}>Reset</button>
						</div>
					</div>
					<div  className="mt-5">
					<Col xs={4}>
					<img className={classes.img} src={audio} alt="audio"></img>
					</Col>
					</div>
				</Col>
			</Row>
		</div>
	);
};

Recording.propTypes = propTypes;

export default compose(
	SpeechRecognition({ autoStart: false }),
  withStyles(styles)
)(Recording)

//export default SpeechRecognition({ autoStart: false })(Recording);
