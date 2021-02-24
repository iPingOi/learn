import React, { useState } from "react";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchText, setSearchText] = useState("");

  function handleSearchInput(newText) {
    setSearchText(newText);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox onChangeText={handleSearchInput} />
      <SearchBox text={searchText} />
      <hr />
      Texto procurado: {searchText}
    </>
  );
}

export default App;
