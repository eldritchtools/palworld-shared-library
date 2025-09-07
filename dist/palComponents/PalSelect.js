function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import Select from "react-select";
import { PalIcon } from "./PalIcon";
import { pals } from "../data/data";
import { checkPalSearchMatch } from "../palLogic/searchLogic";
import { selectStyle } from "../styles";
import { useMemo } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var palToOption = function palToOption(pal) {
  return {
    value: pal.id,
    label: /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        alignItems: "center"
      },
      children: [/*#__PURE__*/_jsx(PalIcon, {
        pal: pal,
        size: 32
      }), /*#__PURE__*/_jsxs("span", {
        children: [pal.name, pal.no !== "-1" ? " (".concat(pal.no, ")") : null]
      })]
    }),
    name: pal.name,
    index: pal.sortIndex,
    id: pal.id,
    no: pal.no
  };
};
var options = Object.entries(pals).map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    _id = _ref2[0],
    pal = _ref2[1];
  return palToOption(pal);
}).sort(function (a, b) {
  return a.index - b.index;
});
var valueToOption = options.reduce(function (acc, option) {
  acc[option.value] = option;
  return acc;
}, {});
function PalSelect(_ref3) {
  var value = _ref3.value,
    onChange = _ref3.onChange,
    _ref3$optionsOverride = _ref3.optionsOverride,
    optionsOverride = _ref3$optionsOverride === void 0 ? null : _ref3$optionsOverride;
  var handleChange = function handleChange(selected) {
    if (selected) onChange(selected.value);else onChange(null);
  };
  var finalOptions = useMemo(function () {
    return optionsOverride ? optionsOverride.map(palToOption).sort(function (a, b) {
      return a.index - b.index;
    }) : options;
  }, [optionsOverride]);
  return /*#__PURE__*/_jsx(Select, {
    styles: selectStyle,
    options: finalOptions,
    isClearable: true,
    placeholder: "Select Pal",
    filterOption: function filterOption(candidate, input) {
      return checkPalSearchMatch(input, candidate.data);
    },
    value: value ? valueToOption[value] : null,
    onChange: handleChange
  });
}
export default PalSelect;