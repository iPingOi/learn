import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
  let history = useHistory();

  const handleButton = () => {
    setTimeout(() => {
      history.replace("/sobre");
    }, 2000);
  };

  const handleGabriel = () => {
    props.setName("Gabriel");
  };

  const handleIncrement = () => {
    props.increment();
  };

  return (
    <>
      <h1>Home</h1>
      NOME: {props.name} <br />
      Contagem: {props.contador} <br />
      <br />
      <button onClick={handleGabriel}>Setar nome para Gabriel</button>
      <br />
      <br />
      <button onClick={handleIncrement}>+1</button>
      <br />
      <br />
      <button onClick={handleButton}>Ir para a página SOBRE</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.usuario.name,
    contador: state.usuario.contador,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) =>
      dispatch({
        type: "SET_NAME",
        payload: { name: newName },
      }),
    increment: () =>
      dispatch({
        type: "INCREMENT_CONTADOR",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
