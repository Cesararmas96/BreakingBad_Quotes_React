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

const Pause = ({ toogle }) => (
	<Button className="boton" id="boton" onClick={toogle}>
		Music
		<svg className="stop" viewBox="0 0 60 60">
			<polygon points="0,0 50,30 0,60" />
		</svg>
	</Button>
);

export default Pause;
