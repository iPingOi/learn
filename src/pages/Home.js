import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  const handleButton = () => {
    setTimeout(() => {
      history.replace("/sobre");
    }, 2000);
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleButton}>Ir para a página SOBRE</button>
    </>
  );
}

export default Home;
