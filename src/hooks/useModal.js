import { useState } from 'react';

export const useModal = () => {
  const [modais, setModais] = useState({
    excluir: false,
    alterar: false,
    adicionar: false,
  });
  const [idModal, setIdModal] = useState("");

  const toggleModal = (tipo, id = "") => {
    setModais((prev) => ({
      ...prev,
      [tipo]: !prev[tipo],
    }));
    setIdModal(id);
  };

  return { modais, idModal, toggleModal };
};