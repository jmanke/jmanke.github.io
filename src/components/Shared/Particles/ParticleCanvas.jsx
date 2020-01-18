import React, { useRef, useState } from "react";

const particle = {
    pos_x: 0,
    pos_y: 0,
    velocity: 0,
    size: 0,
    color: "white",
    direction: [1, 0]
}

export default () => {
	const canvasRef = useRef(null);
	const [test, setTest] = useState(0);

	function updateCanvas() {
		setTest(test + 1);
		const ctx = canvasRef.current.getContext('2d');
		const width = window.innerWidth;
		const height = window.innerHeight;

		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = "#1E1E1E";
		ctx.fillRect(0, 0, width, height);
		ctx.beginPath();
		ctx.moveTo(test, test);
		ctx.lineTo(300, 150);
		ctx.stroke();
	}

	setTimeout(() => {
		updateCanvas();
	}, 10);

	return (
		<canvas className="landing-page__canvas" width={window.innerWidth} height={window.innerHeight} ref={canvasRef} />
	);
}