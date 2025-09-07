function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { passives } from "../data/data";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ASSETS_ROOT = "../assets";
var rankColors = _defineProperty(_defineProperty(_defineProperty({
  4: "#0DFF9E",
  3: "#FFFF00",
  2: "#FFFF00",
  1: "#FFFFFF"
}, -1, "#FF0000"), -2, "#FF0000"), -3, "#FF0000");
var ranks = passives.reduce(function (acc, _ref) {
  var name = _ref.name,
    rank = _ref.rank;
  acc[name] = rank;
  return acc;
}, {});
function PassiveComponent(_ref2) {
  var name = _ref2.name,
    _ref2$rank = _ref2.rank,
    rank = _ref2$rank === void 0 ? null : _ref2$rank,
    _ref2$addBorder = _ref2.addBorder,
    addBorder = _ref2$addBorder === void 0 ? false : _ref2$addBorder;
  rank = rank !== null && rank !== void 0 ? rank : ranks[name];
  var style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0.2rem"
  };
  if (addBorder) style.border = "1px ".concat(rankColors[rank], " solid");
  return /*#__PURE__*/_jsxs("div", {
    style: style,
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        textAlign: "start",
        color: rankColors[rank]
      },
      children: name
    }), /*#__PURE__*/_jsx("div", {
      style: {
        width: "24px",
        height: "24px",
        backgroundColor: rankColors[rank],
        WebkitMask: "url(".concat(ASSETS_ROOT, "/passiveRanks/").concat(Math.abs(rank), ".png) no-repeat center / contain"),
        mask: "url(".concat(ASSETS_ROOT, "/passiveRanks/").concat(Math.abs(rank), ".png) no-repeat center / contain"),
        transform: "rotate(".concat(rank < 0 ? 180 : 0, "deg)")
      }
    })]
  });
}
export default PassiveComponent;