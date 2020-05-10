import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quotes from "./components/Quotes";
import Sound from "./components/Sound";
import Logo from "./logo.svg";

const Conteiner = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1em;
  flex-direction: column;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #f0d009;
  font-family: Arial3rem, Helvetica, sans-serif;
  margin-top: 1em;
  padding: 1em 3em;
  font-weight: bold;
  transition: background-size 0.8s ease;
  margin-bottom: 1em;

  :hover {
    cursor: pointer;
    background: #cbb008;
  }
`;

const LogoImg = styled.img`
  width: 25%;
`;

function App() {
  // State de Quotes
  const [quotes, saveQuotes] = useState({});

  // const consulAPI = () => {
  //     const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");

  //     const quotes = api.then((respuesta) => respuesta.json());
  //     quotes.then((resultado) => console.log(resultado));
  //   };

  const consulAPI = async () => {
    const api = await fetch("https://breakingbadapi.com/api/quote/random");

    const quotes = await api.json();
    saveQuotes(quotes[0]);
  };

  useEffect(() => {
    consulAPI();
  }, []);

  return (
    <Conteiner>
      <Sound />
      <LogoImg src={Logo} alt="Logo" className="Logo" />
      <Quotes quotes={quotes} />
      <Button className="normal" onClick={consulAPI}>
        Quotes
      </Button>
    </Conteiner>
  );
}

export default App;
