import { pals } from "../data/data";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ASSETS_ROOT = "https://eldritchtools.github.io/palworld-shared-library/public/assets";
function PalIcon(_ref) {
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id,
    _ref$pal = _ref.pal,
    pal = _ref$pal === void 0 ? null : _ref$pal,
    _ref$circle = _ref.circle,
    circle = _ref$circle === void 0 ? false : _ref$circle,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? null : _ref$size,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? null : _ref$scale,
    _ref$showName = _ref.showName,
    showName = _ref$showName === void 0 ? false : _ref$showName,
    _ref$showPalNumber = _ref.showPalNumber,
    showPalNumber = _ref$showPalNumber === void 0 ? false : _ref$showPalNumber,
    _ref$highlighted = _ref.highlighted,
    highlighted = _ref$highlighted === void 0 ? false : _ref$highlighted,
    _ref$wrapName = _ref.wrapName,
    wrapName = _ref$wrapName === void 0 ? false : _ref$wrapName;
  var computedSize = size ? "".concat(size, "px") : scale ? "".concat(512 * scale, "px") : "80px";
  var style = {
    width: computedSize,
    height: computedSize,
    borderRadius: circle ? "50%" : "0"
  };
  if (circle) style["border"] = "1px rgba(255, 255, 255, 0.3) solid";
  if (highlighted) style["boxShadow"] = "0 0 8px 2px rgba(255, 255, 0, 0.8)";
  if (!id && !pal) {
    return /*#__PURE__*/_jsx("div", {
      style: style
    });
  }
  var palData = pal ? pal : pals[id];
  var imgComponent = /*#__PURE__*/_jsx("div", {
    style: {
      display: "flex",
      height: computedSize,
      width: computedSize
    },
    children: /*#__PURE__*/_jsxs("div", {
      style: {
        position: "relative",
        height: computedSize,
        width: computedSize
      },
      children: [/*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/palIcons/").concat(palData.iconPath),
        alt: palData.name,
        title: palData.name,
        style: style
      }), showPalNumber && palData.no !== "-1" ? /*#__PURE__*/_jsx("span", {
        style: {
          fontSize: "1em",
          color: "#aaa",
          position: "absolute",
          top: "0%",
          left: "0%",
          fontWeight: "bold"
        },
        children: palData.no
      }) : null]
    })
  });
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: computedSize
    },
    children: [imgComponent, showName ? /*#__PURE__*/_jsx("div", {
      style: {
        display: "flex",
        whiteSpace: wrapName ? "wrap" : "nowrap",
        justifyContent: "center",
        overflow: "visible"
      },
      children: palData.name
    }) : null]
  });
}
export default PalIcon;