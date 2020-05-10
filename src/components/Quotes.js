import React from "react";
import styled from "@emotion/styled";

const ConteinerQuotes = styled.div`
	padding: 1em;
	border-radius: 0.5rem;
	background-color: #fff;
	margin: 3em 4em 2em 4em;

	h1 {
		text-align: center;
		position: relative;
		color: black;

		&::before {
			content: open-quote;
			color: black;
			position: absolute;
			left: 0rem;
			top: -1rem;
		}

		&::after {
			content: close-quote;
			color: black;
			position: absolute;
			right: 0rem;
			button: 0rem;
		}
	}

	p {
		text-align: right;
		color: #666;
		font-weight: bold;
		margin-top: 1em;

		&::before {
			content: "- ";
		}

		&::after {
			content: " -";
		}
	}
`;

const Quotes = ({ quotes }) => {
	if (Object.keys(quotes).length === 0) return null;
	return (
		<ConteinerQuotes>
			<h1 className="normal">{quotes.quote}</h1>
			<p className="s1">{quotes.author}</p>
		</ConteinerQuotes>
	);
};

export default Quotes;
