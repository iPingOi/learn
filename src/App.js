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

  function addAction(newItem) {
    let newList = [...list, { title: newItem, done: false }];

    setList(newList);
  }

  function handleToggleDone(index) {
    let newList = [...list];

    newList[index].done = !newList[index].done;

    setList(newList);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox padrao="Adicione um item" onEnter={addAction} />

      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleToggleDone(index)}>
            {item.done && <del>{item.title}</del>}
            {!item.done && item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
