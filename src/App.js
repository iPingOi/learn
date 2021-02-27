import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir Modal</button>
      <Modal open={open} close={setOpen}>
        <h1>Modal</h1>
      </Modal>
    </>
  );
}

export default App;
