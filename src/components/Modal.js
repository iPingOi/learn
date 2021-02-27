import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalArea = styled.div`
  background: white;
  padding: 10px;
`;

function Modal({ children, open, close }) {
  return (
    <>
      {open === true && (
        <ModalBackground onClick={() => close(!open)}>
          <ModalArea>{children}</ModalArea>
        </ModalBackground>
      )}
    </>
  );
}

export default Modal;
