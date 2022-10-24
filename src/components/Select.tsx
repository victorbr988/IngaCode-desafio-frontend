import { SelectProps } from "./types";

export function Select({onchange, data, valueSelected}: SelectProps) {
  return (  
    <select value={valueSelected} className="p-2 rounded" onChange={(event)=> onchange(event.target.value)}>
      <option value='Não selectionado' selected>Não selecionado</option>
      {data.map(({ id, name }) => (
        <option value={name} key={id}>{name}</option>
      ))}
    </select>
  );
};
