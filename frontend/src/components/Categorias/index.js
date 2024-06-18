import { useState } from "react";

const Categorias = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h4>Categorias</h4>
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled>-- Selecione --</option>
        {options.map((option) => (
          <option key={option.id} value={option.nome}>
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categorias;