import Select from "react-select";

import { passives } from "../data/data";
import { selectStyle } from "../styles";
import PassiveComponent from "./PassiveComponent";

const options = passives.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).map(({name, rank}) => {
    return {
        value: name,
        label: <PassiveComponent name={name} rank={rank} />,
        name: name,
        rank: rank,
    }
});

const valueToOption = options.reduce((acc, option) => {
    acc[option.value] = option;
    return acc
}, {});

function PassiveSelect({ value, onChange }) {
    const handleChange = (selected) => {
        if (selected) onChange(selected.value);
        else onChange(null);
    }

    return <Select 
        components={{DropdownIndicator: null}} 
        styles={selectStyle} 
        options={options} 
        isClearable={true}
        placeholder={"Select Passive"}
        value={value ? valueToOption[value] : null} 
        onChange={handleChange} />
}

export default PassiveSelect;