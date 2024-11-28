import React, { useState } from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is a modal!</p>
      </Modal>
    </>
  );
};
