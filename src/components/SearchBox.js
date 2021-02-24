import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputText = styled.input`
  border: 2px solid #000;
  border-radius: 5px;
  padding: 15px;
  font-size: 17px;
  width: 300px;
`;

function SearchBox({ onChangeText, text }) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (onChangeText) {
      onChangeText(texto);
    }
  }, [texto]);

  return (
    <InputText
      type="text"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder={text ?? "Faça uma busca"}
    />
  );
}

export default SearchBox;
