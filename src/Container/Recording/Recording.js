import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import SpeechRecognition from "react-speech-recognition";
import { Col, Row } from "reactstrap";
import { compose } from "redux";
import audio from "../../Img/audio.png";
import styles from "./Style";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { createBillRequest } from "../../Action/Bill";

const propTypes = {
	transcript: PropTypes.string,
	resetTranscript: PropTypes.func,
	browserSupportsSpeechRecognition: PropTypes.bool,
	createBill: PropTypes.func,
	isRecording: PropTypes.bool,
};

function Recording({
	transcript,
	resetTranscript,
	browserSupportsSpeechRecognition,
	startListening,
	stopListening,
	classes,
	createBill,
	arr,
}) {
	const [isRecording, setIsRecording] = useState(false);

	useEffect(() => {
		if (isRecording === false && transcript !== "") {
			console.log("hi");
			createBill(transcript);
		}
	}, [isRecording, transcript]);

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
	console.log("arr:", arr);

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
						<span className={classes.btnRecording} onClick={toggleRecording}>
							<SettingsVoiceIcon fontSize='large' />
						</span>
						<div className={classes.circle} style={{ animationDelay: "0s" }} />
						<div className={classes.circle} style={{ animationDelay: "1s" }} />
						<div className={classes.circle} style={{ animationDelay: "2s" }} />
						<div className={classes.circle} style={{ animationDelay: "3s" }} />
						<textarea value={transcript} className={classes.textShow} />
						<div>
							<Button
								variant='contained'
								color='primary'
								onClick={resetTranscript}>
								Reset
							</Button>
						</div>
						<span>{`KQ TEST data gia: ${
							arr && arr[0] ? arr[0].name : ""
						}`}</span>
					</div>
					<div className='mt-5'>
						<Col md={8} xl={6}>
							<img className={classes.img} src={audio} alt='audio'></img>
						</Col>
					</div>
				</Col>
			</Row>
		</div>
	);
}

Recording.propTypes = propTypes;

const mapStateToProps = (state) => {
	return {
		arr: state.bill.respone,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createBill: (text) => dispatch(createBillRequest(text)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	SpeechRecognition({ autoStart: false }),
	withStyles(styles),
	withConnect
)(Recording);
