import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Audio from "./audio.mp3";
import Play from "./Play";
import Pause from "./Pause";

const ContainerSound = styled.div`
	left: 10px;
	top: 10px;
	position: absolute;
`;

function Sound() {
	const [play, setPlay] = useState();
	const toogle = () => {
		const audioEl = document.getElementById("audio");
		if (audioEl.paused) {
			audioEl.play();
			setPlay(true);
		} else {
			audioEl.pause();
			setPlay(false);
		}
	};

	const playAudio = () => {
		const audioEl = document.getElementById("audio");
		audioEl.play();
		setPlay(true);
		return;
	};

	useEffect(() => {
		playAudio();
	}, []);
	return (
		<ContainerSound>
			{play === true ? <Play toogle={toogle} /> : <Pause toogle={toogle} />}
			<audio id="audio" className="audio">
				<source src={Audio} />
			</audio>
		</ContainerSound>
	);
}

export default Sound;
