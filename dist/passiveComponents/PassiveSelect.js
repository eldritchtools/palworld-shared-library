import Select from "react-select";
import { passives } from "../data/data";
import { selectStyle } from "../styles";
import PassiveComponent from "./PassiveComponent";
import { jsx as _jsx } from "react/jsx-runtime";
var options = passives.sort(function (a, b) {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
}).map(function (_ref) {
  var name = _ref.name,
    rank = _ref.rank;
  return {
    value: name,
    label: /*#__PURE__*/_jsx(PassiveComponent, {
      name: name,
      rank: rank
    }),
    name: name,
    rank: rank
  };
});
var valueToOption = options.reduce(function (acc, option) {
  acc[option.value] = option;
  return acc;
}, {});
function PassiveSelect(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange;
  var handleChange = function handleChange(selected) {
    if (selected) onChange(selected.value);else onChange(null);
  };
  return /*#__PURE__*/_jsx(Select, {
    components: {
      DropdownIndicator: null
    },
    styles: selectStyle,
    options: options,
    isClearable: true,
    placeholder: "Select Passive",
    value: value ? valueToOption[value] : null,
    onChange: handleChange
  });
}
export default PassiveSelect;