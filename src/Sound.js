import React, { useState } from "react";
import styled from "@emotion/styled";
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

	return (
		<ContainerSound>
			{play === true ? <Play toogle={toogle} /> : <Pause toogle={toogle} />}
			<audio id="audio" className="audio">
				<source src="https://tonosmovil.net/wp-content/uploads/breaking_bad_intro.mp3" />
			</audio>
		</ContainerSound>
	);
}

export default Sound;
