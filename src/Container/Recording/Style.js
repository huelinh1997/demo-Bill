const styles = (theme) => ({
	recording: {
		height: "90vh",
	},
	textShow: {
		width: "50vw",
		height: "35vh",
	},
	wrap: {
		color: "light-gray",
		display: "inline-block",
		position: "relative",
		marginTop: 50,
	},
	btnRecording: {
		color: "gray",
		position: "absolute",
		top: 0,
		right: 0,
	},
	img: {
		width: "35vw",
		height: "auto",
	},
	circle: {
		zIndex: -1,
		borderRadius: "50%",
		backgroundColor: "deepskyblue",
		width: "50px",
		height: "50px",
		position: "absolute",
		top: 0,
		right: 0,
		opacity: 0,
		animation: "scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32)",
	},
	"@keyframes scaleIn": {
		from: {
			transform: "scale(0.5, 0.5)",
			opacity: 0.5,
		},
		to: {
			transform: "scale(2.5, 2.5)",
			opacity: 0,
		},
	},
});

export default styles;
