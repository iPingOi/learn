import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { title: "Comprar o bolo", done: false },
      { title: "pegar o cachorro no Petshop", done: true },
      { title: "Gravar aula", done: false },
    ]);
  }, []);

  function handleSearchInput(newText) {
    setSearchText(newText);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox onChangeText={handleSearchInput} />
      <SearchBox text={searchText} />

      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.done && <del>{item.title}</del>}
            {!item.done && item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
