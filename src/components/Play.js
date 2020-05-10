import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
	border: none;
	border-radius: 5px;
	padding: 8px;
	font-weight: bold;
	color: black;

	&&:hover {
		cursor: pointer;
	}
`;

const Play = ({ toogle }) => (
	<Button className="boton" id="boton" onClick={toogle}>
		Music
		<svg className="play" viewBox="0 0 60 60">
			<polygon points="0,0 15,0 15,60 0,60" />
			<polygon points="25,0 40,0 40,60 25,60" />
		</svg>
	</Button>
);

export default Play;
