import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputText = styled.input`
  border: 2px solid #000;
  border-radius: 5px;
  padding: 15px;
  font-size: 17px;
  width: 300px;
`;

function SearchBox({ padrao, onEnter }) {
  const [texto, setTexto] = useState("");

  function handleKeyUp(e) {
    if (e.keyCode == 13) {
      if (onEnter) {
        onEnter(texto);
      }
      setTexto("");
    }
  }

  return (
    <InputText
      type="text"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      onKeyUp={handleKeyUp}
      placeholder={padrao ?? "Digite aluma coisa"}
    />
  );
}

export default SearchBox;
