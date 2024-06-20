import { useState } from "react";
import CategoriasContainer from "./CategoriasContainer";
import CategoriasDropdown from "./CategoriasDropdown";

const Categorias = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <CategoriasContainer>
      <h5>Categorias</h5>
      <CategoriasDropdown value={selectedOption} onChange={handleChange}>
        <option value="" disabled>-- Selecione --</option>
        {options.map((option) => (
          <option key={option.id} value={option.nome}>
            {option.nome}
          </option>
        ))}
      </CategoriasDropdown>
    </CategoriasContainer>
  );
}

export default Categorias;