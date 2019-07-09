import React from "react";

// import { Container } from './styles';

export default function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Deletar
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};
