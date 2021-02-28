import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Categoria() {
  let query = useQuery();

  let cat = query.get("tipo");
  let subtipo = query.get("subtipo");

  return (
    <>
      <h1>Categoria</h1>
      Exibindo coisas de: {cat} - {subtipo}
    </>
  );
}

export default Categoria;
