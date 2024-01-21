import { useState } from 'react';
import { InputSelectProps } from '../../types/Form';
import { GenericInputEvent } from '../../types/InputEvents';
import handleInputChange from '../../helpers/InputController';

function InputSelect({ id, label, options, onChange }: InputSelectProps) {
  const [selectedOption, setSelectedOption] = useState<string | number>('Comum');

  const handleInput = (event: GenericInputEvent) => {
    handleInputChange(event, setSelectedOption, onChange);
  };

  return (
    <div className="mt-4">
      <label className="mb-2" htmlFor={ id }>{label}</label>

      <select
        aria-label="Raridade"
        className="form-select"
        id={ id }
        value={ selectedOption }
        onChange={ handleInput }
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;