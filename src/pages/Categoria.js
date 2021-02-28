import { useParams } from "react-router-dom";

function Categoria() {
  let { cat } = useParams();

  return (
    <>
      <h1>Categoria</h1>
      Exibindo coisas de: {cat}
    </>
  );
}

export default Categoria;
