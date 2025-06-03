// 自定义日志控制对象
const dconsole = {
  _enabled: false, // 控制开关，改为false或注释此行就能禁用所有dconsole日志

  log(...args) {
    if (this._enabled) {
      console.log(...args);
    }
  },
};
// 修改后的watch函数，使用dconsole替代console.log
function watch(func, name) {
  return new Proxy(func, {
    get(target, p, receiver) {
      if (
        p === "Math" ||
        p === "isNaN" ||
        p === "encodeURI" ||
        p === "Uint8Array" ||
        p === "zzz" ||
        p === "innerHTML"
      ) {
        let val = Reflect.get(...arguments);
        return val;
      } else {
        let val = Reflect.get(...arguments);
        // if(name==='document.all'||p==='all')
        // if(p==='_proto_')
        // debugger

        // 修复：处理 Symbol 类型的属性名
        const propName = typeof p === "symbol" ? p.toString() : p;
        dconsole.log("取值:", `${name}.${propName}`, "=>", val);
        return val;
      }
    },
    set(target, p, value, receiver) {
      let val = Reflect.get(...arguments);
      // 修复：处理 Symbol 类型的属性名
      const propName = typeof p === "symbol" ? p.toString() : p;
      dconsole.log("设置值:", `${name}.${propName}`, val, "=>", value);
      return Reflect.set(...arguments);
    },
    has(target,key){
      const propName = typeof key === "symbol" ? key.toString() : key;
      dconsole.log("in检测:", `${propName} in ${target}`);
    }
  });
}

window = global;
delete global

window.test = [];
top = window;
self = window;
Image = function Image() {};
Image.prototype = watch(Image.prototype, "Image.prototype ==>");
Image.prototype[Symbol.toStringTag] = "HTMLImageElement";

// fyglobalopt = {
//   MaxMTLog: 300,
//   MTInterval: 4,
//   MinMTDwnLog: 30,
//   MaxKSLog: 14,
//   MaxFocusLog: 6,
//   MaxNGPLog: 200,
//   NGPInterval: 4,
//   Enable: 3,
//   location: "cn",
//   _umopt_npfp: 1,
//   timeout: 2000,
// };

__fyModule = watch(
  {
    ver: 231,
    // jsv: 104,
  },
  "__fyModule ==>"
);

addEventListener = function (val) {
  if (val === "message") {
    return watch({}, "message ==>");
  }
  console.log("window.addEventListener ==> ", val);
  
};

postMessage = function (val) {
  console.log("window.postMessage ==> ", val);
};

removeEventListener = function (val) {
  console.log("window.removeEventListener ==> ", val);
};

Bluetooth = function Bluetooth() {
  console.log("Bluetooth ==>", arguments);debugger
};
BluetoothDevice = function BluetoothDevice() {
  console.log("BluetoothDevice ==>", arguments);debugger
};
BluetoothUUID = function BluetoothUUID() {
  console.log("BluetoothUUID ==>", arguments);debugger
};

getComputedStyle = function getComputedStyle(val) {
  console.log("getComputedStyle ==>", val);
  return {
      "0": "accent-color",
      "1": "align-content",
      "2": "align-items",
      "3": "align-self",
      "4": "alignment-baseline",
      "5": "anchor-name",
      "6": "anchor-scope",
      "7": "animation-composition",
      "8": "animation-delay",
      "9": "animation-direction",
      "10": "animation-duration",
      "11": "animation-fill-mode",
      "12": "animation-iteration-count",
      "13": "animation-name",
      "14": "animation-play-state",
      "15": "animation-range-end",
      "16": "animation-range-start",
      "17": "animation-timeline",
      "18": "animation-timing-function",
      "19": "app-region",
      "20": "appearance",
      "21": "backdrop-filter",
      "22": "backface-visibility",
      "23": "background-attachment",
      "24": "background-blend-mode",
      "25": "background-clip",
      "26": "background-color",
      "27": "background-image",
      "28": "background-origin",
      "29": "background-position",
      "30": "background-repeat",
      "31": "background-size",
      "32": "baseline-shift",
      "33": "baseline-source",
      "34": "block-size",
      "35": "border-block-end-color",
      "36": "border-block-end-style",
      "37": "border-block-end-width",
      "38": "border-block-start-color",
      "39": "border-block-start-style",
      "40": "border-block-start-width",
      "41": "border-bottom-color",
      "42": "border-bottom-left-radius",
      "43": "border-bottom-right-radius",
      "44": "border-bottom-style",
      "45": "border-bottom-width",
      "46": "border-collapse",
      "47": "border-end-end-radius",
      "48": "border-end-start-radius",
      "49": "border-image-outset",
      "50": "border-image-repeat",
      "51": "border-image-slice",
      "52": "border-image-source",
      "53": "border-image-width",
      "54": "border-inline-end-color",
      "55": "border-inline-end-style",
      "56": "border-inline-end-width",
      "57": "border-inline-start-color",
      "58": "border-inline-start-style",
      "59": "border-inline-start-width",
      "60": "border-left-color",
      "61": "border-left-style",
      "62": "border-left-width",
      "63": "border-right-color",
      "64": "border-right-style",
      "65": "border-right-width",
      "66": "border-start-end-radius",
      "67": "border-start-start-radius",
      "68": "border-top-color",
      "69": "border-top-left-radius",
      "70": "border-top-right-radius",
      "71": "border-top-style",
      "72": "border-top-width",
      "73": "bottom",
      "74": "box-decoration-break",
      "75": "box-shadow",
      "76": "box-sizing",
      "77": "break-after",
      "78": "break-before",
      "79": "break-inside",
      "80": "buffered-rendering",
      "81": "caption-side",
      "82": "caret-color",
      "83": "clear",
      "84": "clip",
      "85": "clip-path",
      "86": "clip-rule",
      "87": "color",
      "88": "color-interpolation",
      "89": "color-interpolation-filters",
      "90": "color-rendering",
      "91": "column-count",
      "92": "column-gap",
      "93": "column-rule-color",
      "94": "column-rule-style",
      "95": "column-rule-width",
      "96": "column-span",
      "97": "column-width",
      "98": "contain-intrinsic-block-size",
      "99": "contain-intrinsic-height",
      "100": "contain-intrinsic-inline-size",
      "101": "contain-intrinsic-size",
      "102": "contain-intrinsic-width",
      "103": "container-name",
      "104": "container-type",
      "105": "content",
      "106": "cursor",
      "107": "cx",
      "108": "cy",
      "109": "d",
      "110": "direction",
      "111": "display",
      "112": "dominant-baseline",
      "113": "dynamic-range-limit",
      "114": "empty-cells",
      "115": "field-sizing",
      "116": "fill",
      "117": "fill-opacity",
      "118": "fill-rule",
      "119": "filter",
      "120": "flex-basis",
      "121": "flex-direction",
      "122": "flex-grow",
      "123": "flex-shrink",
      "124": "flex-wrap",
      "125": "float",
      "126": "flood-color",
      "127": "flood-opacity",
      "128": "font-family",
      "129": "font-kerning",
      "130": "font-optical-sizing",
      "131": "font-palette",
      "132": "font-size",
      "133": "font-size-adjust",
      "134": "font-stretch",
      "135": "font-style",
      "136": "font-synthesis-small-caps",
      "137": "font-synthesis-style",
      "138": "font-synthesis-weight",
      "139": "font-variant",
      "140": "font-variant-alternates",
      "141": "font-variant-caps",
      "142": "font-variant-east-asian",
      "143": "font-variant-emoji",
      "144": "font-variant-ligatures",
      "145": "font-variant-numeric",
      "146": "font-variant-position",
      "147": "font-weight",
      "148": "grid-auto-columns",
      "149": "grid-auto-flow",
      "150": "grid-auto-rows",
      "151": "grid-column-end",
      "152": "grid-column-start",
      "153": "grid-row-end",
      "154": "grid-row-start",
      "155": "grid-template-areas",
      "156": "grid-template-columns",
      "157": "grid-template-rows",
      "158": "height",
      "159": "hyphenate-character",
      "160": "hyphenate-limit-chars",
      "161": "hyphens",
      "162": "image-orientation",
      "163": "image-rendering",
      "164": "initial-letter",
      "165": "inline-size",
      "166": "inset-block-end",
      "167": "inset-block-start",
      "168": "inset-inline-end",
      "169": "inset-inline-start",
      "170": "interactivity",
      "171": "interpolate-size",
      "172": "isolation",
      "173": "justify-content",
      "174": "justify-items",
      "175": "justify-self",
      "176": "left",
      "177": "letter-spacing",
      "178": "lighting-color",
      "179": "line-break",
      "180": "line-height",
      "181": "list-style-image",
      "182": "list-style-position",
      "183": "list-style-type",
      "184": "margin-block-end",
      "185": "margin-block-start",
      "186": "margin-bottom",
      "187": "margin-inline-end",
      "188": "margin-inline-start",
      "189": "margin-left",
      "190": "margin-right",
      "191": "margin-top",
      "192": "marker-end",
      "193": "marker-mid",
      "194": "marker-start",
      "195": "mask-clip",
      "196": "mask-composite",
      "197": "mask-image",
      "198": "mask-mode",
      "199": "mask-origin",
      "200": "mask-position",
      "201": "mask-repeat",
      "202": "mask-size",
      "203": "mask-type",
      "204": "math-depth",
      "205": "math-shift",
      "206": "math-style",
      "207": "max-block-size",
      "208": "max-height",
      "209": "max-inline-size",
      "210": "max-width",
      "211": "min-block-size",
      "212": "min-height",
      "213": "min-inline-size",
      "214": "min-width",
      "215": "mix-blend-mode",
      "216": "object-fit",
      "217": "object-position",
      "218": "object-view-box",
      "219": "offset-anchor",
      "220": "offset-distance",
      "221": "offset-path",
      "222": "offset-position",
      "223": "offset-rotate",
      "224": "opacity",
      "225": "order",
      "226": "orphans",
      "227": "outline-color",
      "228": "outline-offset",
      "229": "outline-style",
      "230": "outline-width",
      "231": "overflow-anchor",
      "232": "overflow-block",
      "233": "overflow-clip-margin",
      "234": "overflow-inline",
      "235": "overflow-wrap",
      "236": "overflow-x",
      "237": "overflow-y",
      "238": "overlay",
      "239": "overscroll-behavior-block",
      "240": "overscroll-behavior-inline",
      "241": "padding-block-end",
      "242": "padding-block-start",
      "243": "padding-bottom",
      "244": "padding-inline-end",
      "245": "padding-inline-start",
      "246": "padding-left",
      "247": "padding-right",
      "248": "padding-top",
      "249": "paint-order",
      "250": "perspective",
      "251": "perspective-origin",
      "252": "pointer-events",
      "253": "position",
      "254": "position-anchor",
      "255": "position-area",
      "256": "position-try-fallbacks",
      "257": "position-try-order",
      "258": "position-visibility",
      "259": "print-color-adjust",
      "260": "r",
      "261": "reading-flow",
      "262": "reading-order",
      "263": "resize",
      "264": "right",
      "265": "rotate",
      "266": "row-gap",
      "267": "ruby-align",
      "268": "ruby-position",
      "269": "rx",
      "270": "ry",
      "271": "scale",
      "272": "scroll-behavior",
      "273": "scroll-initial-target",
      "274": "scroll-margin-block-end",
      "275": "scroll-margin-block-start",
      "276": "scroll-margin-inline-end",
      "277": "scroll-margin-inline-start",
      "278": "scroll-marker-group",
      "279": "scroll-padding-block-end",
      "280": "scroll-padding-block-start",
      "281": "scroll-padding-inline-end",
      "282": "scroll-padding-inline-start",
      "283": "scroll-timeline-axis",
      "284": "scroll-timeline-name",
      "285": "scrollbar-color",
      "286": "scrollbar-gutter",
      "287": "scrollbar-width",
      "288": "shape-image-threshold",
      "289": "shape-margin",
      "290": "shape-outside",
      "291": "shape-rendering",
      "292": "speak",
      "293": "stop-color",
      "294": "stop-opacity",
      "295": "stroke",
      "296": "stroke-dasharray",
      "297": "stroke-dashoffset",
      "298": "stroke-linecap",
      "299": "stroke-linejoin",
      "300": "stroke-miterlimit",
      "301": "stroke-opacity",
      "302": "stroke-width",
      "303": "tab-size",
      "304": "table-layout",
      "305": "text-align",
      "306": "text-align-last",
      "307": "text-anchor",
      "308": "text-box-edge",
      "309": "text-box-trim",
      "310": "text-decoration",
      "311": "text-decoration-color",
      "312": "text-decoration-line",
      "313": "text-decoration-skip-ink",
      "314": "text-decoration-style",
      "315": "text-emphasis-color",
      "316": "text-emphasis-position",
      "317": "text-emphasis-style",
      "318": "text-indent",
      "319": "text-overflow",
      "320": "text-rendering",
      "321": "text-shadow",
      "322": "text-size-adjust",
      "323": "text-spacing-trim",
      "324": "text-transform",
      "325": "text-underline-position",
      "326": "text-wrap-mode",
      "327": "text-wrap-style",
      "328": "timeline-scope",
      "329": "top",
      "330": "touch-action",
      "331": "transform",
      "332": "transform-origin",
      "333": "transform-style",
      "334": "transition-behavior",
      "335": "transition-delay",
      "336": "transition-duration",
      "337": "transition-property",
      "338": "transition-timing-function",
      "339": "translate",
      "340": "unicode-bidi",
      "341": "user-select",
      "342": "vector-effect",
      "343": "vertical-align",
      "344": "view-timeline-axis",
      "345": "view-timeline-inset",
      "346": "view-timeline-name",
      "347": "view-transition-class",
      "348": "view-transition-name",
      "349": "visibility",
      "350": "white-space-collapse",
      "351": "widows",
      "352": "width",
      "353": "will-change",
      "354": "word-break",
      "355": "word-spacing",
      "356": "writing-mode",
      "357": "x",
      "358": "y",
      "359": "z-index",
      "360": "zoom",
      "361": "-webkit-border-horizontal-spacing",
      "362": "-webkit-border-image",
      "363": "-webkit-border-vertical-spacing",
      "364": "-webkit-box-align",
      "365": "-webkit-box-decoration-break",
      "366": "-webkit-box-direction",
      "367": "-webkit-box-flex",
      "368": "-webkit-box-ordinal-group",
      "369": "-webkit-box-orient",
      "370": "-webkit-box-pack",
      "371": "-webkit-box-reflect",
      "372": "-webkit-font-smoothing",
      "373": "-webkit-line-break",
      "374": "-webkit-line-clamp",
      "375": "-webkit-locale",
      "376": "-webkit-mask-box-image",
      "377": "-webkit-mask-box-image-outset",
      "378": "-webkit-mask-box-image-repeat",
      "379": "-webkit-mask-box-image-slice",
      "380": "-webkit-mask-box-image-source",
      "381": "-webkit-mask-box-image-width",
      "382": "-webkit-rtl-ordering",
      "383": "-webkit-tap-highlight-color",
      "384": "-webkit-text-combine",
      "385": "-webkit-text-decorations-in-effect",
      "386": "-webkit-text-fill-color",
      "387": "-webkit-text-orientation",
      "388": "-webkit-text-security",
      "389": "-webkit-text-stroke-color",
      "390": "-webkit-text-stroke-width",
      "391": "-webkit-user-drag",
      "392": "-webkit-user-modify",
      "393": "-webkit-writing-mode",
      "accentColor": "auto",
      "additiveSymbols": "",
      "alignContent": "normal",
      "alignItems": "normal",
      "alignSelf": "auto",
      "alignmentBaseline": "auto",
      "all": "",
      "anchorName": "none",
      "anchorScope": "none",
      "animation": "none 0s ease 0s 1 normal none running",
      "animationComposition": "replace",
      "animationDelay": "0s",
      "animationDirection": "normal",
      "animationDuration": "0s",
      "animationFillMode": "none",
      "animationIterationCount": "1",
      "animationName": "none",
      "animationPlayState": "running",
      "animationRange": "normal",
      "animationRangeEnd": "normal",
      "animationRangeStart": "normal",
      "animationTimeline": "auto",
      "animationTimingFunction": "ease",
      "appRegion": "none",
      "appearance": "none",
      "ascentOverride": "",
      "aspectRatio": "auto",
      "backdropFilter": "none",
      "backfaceVisibility": "visible",
      "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
      "backgroundAttachment": "scroll",
      "backgroundBlendMode": "normal",
      "backgroundClip": "border-box",
      "backgroundColor": "rgba(0, 0, 0, 0)",
      "backgroundImage": "none",
      "backgroundOrigin": "padding-box",
      "backgroundPosition": "0% 0%",
      "backgroundPositionX": "0%",
      "backgroundPositionY": "0%",
      "backgroundRepeat": "repeat",
      "backgroundSize": "auto",
      "basePalette": "",
      "baselineShift": "0px",
      "baselineSource": "auto",
      "blockSize": "904px",
      "border": "0px none rgb(0, 0, 0)",
      "borderBlock": "0px none rgb(0, 0, 0)",
      "borderBlockColor": "rgb(0, 0, 0)",
      "borderBlockEnd": "0px none rgb(0, 0, 0)",
      "borderBlockEndColor": "rgb(0, 0, 0)",
      "borderBlockEndStyle": "none",
      "borderBlockEndWidth": "0px",
      "borderBlockStart": "0px none rgb(0, 0, 0)",
      "borderBlockStartColor": "rgb(0, 0, 0)",
      "borderBlockStartStyle": "none",
      "borderBlockStartWidth": "0px",
      "borderBlockStyle": "none",
      "borderBlockWidth": "0px",
      "borderBottom": "0px none rgb(0, 0, 0)",
      "borderBottomColor": "rgb(0, 0, 0)",
      "borderBottomLeftRadius": "0px",
      "borderBottomRightRadius": "0px",
      "borderBottomStyle": "none",
      "borderBottomWidth": "0px",
      "borderCollapse": "separate",
      "borderColor": "rgb(0, 0, 0)",
      "borderEndEndRadius": "0px",
      "borderEndStartRadius": "0px",
      "borderImage": "none",
      "borderImageOutset": "0",
      "borderImageRepeat": "stretch",
      "borderImageSlice": "100%",
      "borderImageSource": "none",
      "borderImageWidth": "1",
      "borderInline": "0px none rgb(0, 0, 0)",
      "borderInlineColor": "rgb(0, 0, 0)",
      "borderInlineEnd": "0px none rgb(0, 0, 0)",
      "borderInlineEndColor": "rgb(0, 0, 0)",
      "borderInlineEndStyle": "none",
      "borderInlineEndWidth": "0px",
      "borderInlineStart": "0px none rgb(0, 0, 0)",
      "borderInlineStartColor": "rgb(0, 0, 0)",
      "borderInlineStartStyle": "none",
      "borderInlineStartWidth": "0px",
      "borderInlineStyle": "none",
      "borderInlineWidth": "0px",
      "borderLeft": "0px none rgb(0, 0, 0)",
      "borderLeftColor": "rgb(0, 0, 0)",
      "borderLeftStyle": "none",
      "borderLeftWidth": "0px",
      "borderRadius": "0px",
      "borderRight": "0px none rgb(0, 0, 0)",
      "borderRightColor": "rgb(0, 0, 0)",
      "borderRightStyle": "none",
      "borderRightWidth": "0px",
      "borderSpacing": "0px 0px",
      "borderStartEndRadius": "0px",
      "borderStartStartRadius": "0px",
      "borderStyle": "none",
      "borderTop": "0px none rgb(0, 0, 0)",
      "borderTopColor": "rgb(0, 0, 0)",
      "borderTopLeftRadius": "0px",
      "borderTopRightRadius": "0px",
      "borderTopStyle": "none",
      "borderTopWidth": "0px",
      "borderWidth": "0px",
      "bottom": "auto",
      "boxDecorationBreak": "slice",
      "boxShadow": "none",
      "boxSizing": "content-box",
      "breakAfter": "auto",
      "breakBefore": "auto",
      "breakInside": "auto",
      "bufferedRendering": "auto",
      "captionSide": "top",
      "caretColor": "rgb(0, 0, 0)",
      "clear": "none",
      "clip": "auto",
      "clipPath": "none",
      "clipRule": "nonzero",
      "color": "rgb(0, 0, 0)",
      "colorInterpolation": "srgb",
      "colorInterpolationFilters": "linearrgb",
      "colorRendering": "auto",
      "colorScheme": "normal",
      "columnCount": "auto",
      "columnFill": "balance",
      "columnGap": "normal",
      "columnRule": "0px none rgb(0, 0, 0)",
      "columnRuleColor": "rgb(0, 0, 0)",
      "columnRuleStyle": "none",
      "columnRuleWidth": "0px",
      "columnSpan": "none",
      "columnWidth": "auto",
      "columns": "auto auto",
      "contain": "none",
      "containIntrinsicBlockSize": "none",
      "containIntrinsicHeight": "none",
      "containIntrinsicInlineSize": "none",
      "containIntrinsicSize": "none",
      "containIntrinsicWidth": "none",
      "container": "none",
      "containerName": "none",
      "containerType": "normal",
      "content": "normal",
      "contentVisibility": "visible",
      "counterIncrement": "none",
      "counterReset": "none",
      "counterSet": "none",
      "cursor": "auto",
      "cx": "0px",
      "cy": "0px",
      "d": "none",
      "descentOverride": "",
      "direction": "ltr",
      "display": "block",
      "dominantBaseline": "auto",
      "dynamicRangeLimit": "no-limit",
      "emptyCells": "show",
      "fallback": "",
      "fieldSizing": "fixed",
      "fill": "rgb(0, 0, 0)",
      "fillOpacity": "1",
      "fillRule": "nonzero",
      "filter": "none",
      "flex": "0 1 auto",
      "flexBasis": "auto",
      "flexDirection": "row",
      "flexFlow": "row nowrap",
      "flexGrow": "0",
      "flexShrink": "1",
      "flexWrap": "nowrap",
      "float": "none",
      "floodColor": "rgb(0, 0, 0)",
      "floodOpacity": "1",
      "font": "12px \"Noto Sans SC\"",
      "fontDisplay": "",
      "fontFamily": "\"Noto Sans SC\"",
      "fontFeatureSettings": "normal",
      "fontKerning": "auto",
      "fontOpticalSizing": "auto",
      "fontPalette": "normal",
      "fontSize": "12px",
      "fontSizeAdjust": "none",
      "fontStretch": "100%",
      "fontStyle": "normal",
      "fontSynthesis": "weight style small-caps",
      "fontSynthesisSmallCaps": "auto",
      "fontSynthesisStyle": "auto",
      "fontSynthesisWeight": "auto",
      "fontVariant": "normal",
      "fontVariantAlternates": "normal",
      "fontVariantCaps": "normal",
      "fontVariantEastAsian": "normal",
      "fontVariantEmoji": "normal",
      "fontVariantLigatures": "normal",
      "fontVariantNumeric": "normal",
      "fontVariantPosition": "normal",
      "fontVariationSettings": "normal",
      "fontWeight": "400",
      "forcedColorAdjust": "auto",
      "gap": "normal",
      "grid": "none / none / none / row / auto / auto",
      "gridArea": "auto",
      "gridAutoColumns": "auto",
      "gridAutoFlow": "row",
      "gridAutoRows": "auto",
      "gridColumn": "auto",
      "gridColumnEnd": "auto",
      "gridColumnGap": "normal",
      "gridColumnStart": "auto",
      "gridGap": "normal",
      "gridRow": "auto",
      "gridRowEnd": "auto",
      "gridRowGap": "normal",
      "gridRowStart": "auto",
      "gridTemplate": "none",
      "gridTemplateAreas": "none",
      "gridTemplateColumns": "none",
      "gridTemplateRows": "none",
      "height": "904px",
      "hyphenateCharacter": "auto",
      "hyphenateLimitChars": "auto",
      "hyphens": "manual",
      "imageOrientation": "from-image",
      "imageRendering": "auto",
      "inherits": "",
      "initialLetter": "normal",
      "initialValue": "",
      "inlineSize": "464px",
      "inset": "auto",
      "insetBlock": "auto",
      "insetBlockEnd": "auto",
      "insetBlockStart": "auto",
      "insetInline": "auto",
      "insetInlineEnd": "auto",
      "insetInlineStart": "auto",
      "interactivity": "auto",
      "interpolateSize": "numeric-only",
      "isolation": "auto",
      "justifyContent": "normal",
      "justifyItems": "normal",
      "justifySelf": "auto",
      "left": "auto",
      "letterSpacing": "normal",
      "lightingColor": "rgb(255, 255, 255)",
      "lineBreak": "auto",
      "lineGapOverride": "",
      "lineHeight": "normal",
      "listStyle": "outside none disc",
      "listStyleImage": "none",
      "listStylePosition": "outside",
      "listStyleType": "disc",
      "margin": "0px",
      "marginBlock": "0px",
      "marginBlockEnd": "0px",
      "marginBlockStart": "0px",
      "marginBottom": "0px",
      "marginInline": "0px",
      "marginInlineEnd": "0px",
      "marginInlineStart": "0px",
      "marginLeft": "0px",
      "marginRight": "0px",
      "marginTop": "0px",
      "marker": "none",
      "markerEnd": "none",
      "markerMid": "none",
      "markerStart": "none",
      "mask": "none",
      "maskClip": "border-box",
      "maskComposite": "add",
      "maskImage": "none",
      "maskMode": "match-source",
      "maskOrigin": "border-box",
      "maskPosition": "0% 0%",
      "maskRepeat": "repeat",
      "maskSize": "auto",
      "maskType": "luminance",
      "mathDepth": "0",
      "mathShift": "normal",
      "mathStyle": "normal",
      "maxBlockSize": "none",
      "maxHeight": "none",
      "maxInlineSize": "none",
      "maxWidth": "none",
      "minBlockSize": "0px",
      "minHeight": "0px",
      "minInlineSize": "0px",
      "minWidth": "0px",
      "mixBlendMode": "normal",
      "navigation": "",
      "negative": "",
      "objectFit": "fill",
      "objectPosition": "50% 50%",
      "objectViewBox": "none",
      "offset": "none 0px auto 0deg",
      "offsetAnchor": "auto",
      "offsetDistance": "0px",
      "offsetPath": "none",
      "offsetPosition": "normal",
      "offsetRotate": "auto 0deg",
      "opacity": "1",
      "order": "0",
      "orphans": "2",
      "outline": "rgb(0, 0, 0) none 0px",
      "outlineColor": "rgb(0, 0, 0)",
      "outlineOffset": "0px",
      "outlineStyle": "none",
      "outlineWidth": "0px",
      "overflow": "visible",
      "overflowAnchor": "auto",
      "overflowBlock": "visible",
      "overflowClipMargin": "0px",
      "overflowInline": "visible",
      "overflowWrap": "normal",
      "overflowX": "visible",
      "overflowY": "visible",
      "overlay": "none",
      "overrideColors": "",
      "overscrollBehavior": "auto",
      "overscrollBehaviorBlock": "auto",
      "overscrollBehaviorInline": "auto",
      "overscrollBehaviorX": "auto",
      "overscrollBehaviorY": "auto",
      "pad": "",
      "padding": "0px",
      "paddingBlock": "0px",
      "paddingBlockEnd": "0px",
      "paddingBlockStart": "0px",
      "paddingBottom": "0px",
      "paddingInline": "0px",
      "paddingInlineEnd": "0px",
      "paddingInlineStart": "0px",
      "paddingLeft": "0px",
      "paddingRight": "0px",
      "paddingTop": "0px",
      "page": "auto",
      "pageBreakAfter": "auto",
      "pageBreakBefore": "auto",
      "pageBreakInside": "auto",
      "pageOrientation": "",
      "paintOrder": "normal",
      "perspective": "none",
      "perspectiveOrigin": "232px 452px",
      "placeContent": "normal",
      "placeItems": "normal",
      "placeSelf": "auto",
      "pointerEvents": "auto",
      "position": "static",
      "positionAnchor": "auto",
      "positionArea": "none",
      "positionTry": "none",
      "positionTryFallbacks": "none",
      "positionTryOrder": "normal",
      "positionVisibility": "always",
      "prefix": "",
      "printColorAdjust": "economy",
      "quotes": "auto",
      "r": "0px",
      "range": "",
      "readingFlow": "normal",
      "readingOrder": "0",
      "resize": "none",
      "right": "auto",
      "rotate": "none",
      "rowGap": "normal",
      "rubyAlign": "space-around",
      "rubyPosition": "over",
      "rx": "auto",
      "ry": "auto",
      "scale": "none",
      "scrollBehavior": "auto",
      "scrollInitialTarget": "none",
      "scrollMargin": "0px",
      "scrollMarginBlock": "0px",
      "scrollMarginBlockEnd": "0px",
      "scrollMarginBlockStart": "0px",
      "scrollMarginBottom": "0px",
      "scrollMarginInline": "0px",
      "scrollMarginInlineEnd": "0px",
      "scrollMarginInlineStart": "0px",
      "scrollMarginLeft": "0px",
      "scrollMarginRight": "0px",
      "scrollMarginTop": "0px",
      "scrollMarkerGroup": "none",
      "scrollPadding": "auto",
      "scrollPaddingBlock": "auto",
      "scrollPaddingBlockEnd": "auto",
      "scrollPaddingBlockStart": "auto",
      "scrollPaddingBottom": "auto",
      "scrollPaddingInline": "auto",
      "scrollPaddingInlineEnd": "auto",
      "scrollPaddingInlineStart": "auto",
      "scrollPaddingLeft": "auto",
      "scrollPaddingRight": "auto",
      "scrollPaddingTop": "auto",
      "scrollSnapAlign": "none",
      "scrollSnapStop": "normal",
      "scrollSnapType": "none",
      "scrollTimeline": "none",
      "scrollTimelineAxis": "block",
      "scrollTimelineName": "none",
      "scrollbarColor": "auto",
      "scrollbarGutter": "auto",
      "scrollbarWidth": "auto",
      "shapeImageThreshold": "0",
      "shapeMargin": "0px",
      "shapeOutside": "none",
      "shapeRendering": "auto",
      "size": "",
      "sizeAdjust": "",
      "speak": "normal",
      "speakAs": "",
      "src": "",
      "stopColor": "rgb(0, 0, 0)",
      "stopOpacity": "1",
      "stroke": "none",
      "strokeDasharray": "none",
      "strokeDashoffset": "0px",
      "strokeLinecap": "butt",
      "strokeLinejoin": "miter",
      "strokeMiterlimit": "4",
      "strokeOpacity": "1",
      "strokeWidth": "1px",
      "suffix": "",
      "symbols": "",
      "syntax": "",
      "system": "",
      "tabSize": "8",
      "tableLayout": "auto",
      "textAlign": "start",
      "textAlignLast": "auto",
      "textAnchor": "start",
      "textBox": "normal",
      "textBoxEdge": "auto",
      "textBoxTrim": "none",
      "textCombineUpright": "none",
      "textDecoration": "none solid rgb(0, 0, 0)",
      "textDecorationColor": "rgb(0, 0, 0)",
      "textDecorationLine": "none",
      "textDecorationSkipInk": "auto",
      "textDecorationStyle": "solid",
      "textDecorationThickness": "auto",
      "textEmphasis": "none rgb(0, 0, 0)",
      "textEmphasisColor": "rgb(0, 0, 0)",
      "textEmphasisPosition": "over",
      "textEmphasisStyle": "none",
      "textIndent": "0px",
      "textOrientation": "mixed",
      "textOverflow": "clip",
      "textRendering": "auto",
      "textShadow": "none",
      "textSizeAdjust": "auto",
      "textSpacingTrim": "normal",
      "textTransform": "none",
      "textUnderlineOffset": "auto",
      "textUnderlinePosition": "auto",
      "textWrap": "wrap",
      "textWrapMode": "wrap",
      "textWrapStyle": "auto",
      "timelineScope": "none",
      "top": "auto",
      "touchAction": "auto",
      "transform": "none",
      "transformBox": "view-box",
      "transformOrigin": "232px 452px",
      "transformStyle": "flat",
      "transition": "all",
      "transitionBehavior": "normal",
      "transitionDelay": "0s",
      "transitionDuration": "0s",
      "transitionProperty": "all",
      "transitionTimingFunction": "ease",
      "translate": "none",
      "types": "",
      "unicodeBidi": "normal",
      "unicodeRange": "",
      "userSelect": "auto",
      "vectorEffect": "none",
      "verticalAlign": "baseline",
      "viewTimeline": "none",
      "viewTimelineAxis": "block",
      "viewTimelineInset": "auto",
      "viewTimelineName": "none",
      "viewTransitionClass": "none",
      "viewTransitionName": "none",
      "visibility": "visible",
      "webkitAlignContent": "normal",
      "webkitAlignItems": "normal",
      "webkitAlignSelf": "auto",
      "webkitAnimation": "none 0s ease 0s 1 normal none running",
      "webkitAnimationDelay": "0s",
      "webkitAnimationDirection": "normal",
      "webkitAnimationDuration": "0s",
      "webkitAnimationFillMode": "none",
      "webkitAnimationIterationCount": "1",
      "webkitAnimationName": "none",
      "webkitAnimationPlayState": "running",
      "webkitAnimationTimingFunction": "ease",
      "webkitAppRegion": "none",
      "webkitAppearance": "none",
      "webkitBackfaceVisibility": "visible",
      "webkitBackgroundClip": "border-box",
      "webkitBackgroundOrigin": "padding-box",
      "webkitBackgroundSize": "auto",
      "webkitBorderAfter": "0px none rgb(0, 0, 0)",
      "webkitBorderAfterColor": "rgb(0, 0, 0)",
      "webkitBorderAfterStyle": "none",
      "webkitBorderAfterWidth": "0px",
      "webkitBorderBefore": "0px none rgb(0, 0, 0)",
      "webkitBorderBeforeColor": "rgb(0, 0, 0)",
      "webkitBorderBeforeStyle": "none",
      "webkitBorderBeforeWidth": "0px",
      "webkitBorderBottomLeftRadius": "0px",
      "webkitBorderBottomRightRadius": "0px",
      "webkitBorderEnd": "0px none rgb(0, 0, 0)",
      "webkitBorderEndColor": "rgb(0, 0, 0)",
      "webkitBorderEndStyle": "none",
      "webkitBorderEndWidth": "0px",
      "webkitBorderHorizontalSpacing": "0px",
      "webkitBorderImage": "none",
      "webkitBorderRadius": "0px",
      "webkitBorderStart": "0px none rgb(0, 0, 0)",
      "webkitBorderStartColor": "rgb(0, 0, 0)",
      "webkitBorderStartStyle": "none",
      "webkitBorderStartWidth": "0px",
      "webkitBorderTopLeftRadius": "0px",
      "webkitBorderTopRightRadius": "0px",
      "webkitBorderVerticalSpacing": "0px",
      "webkitBoxAlign": "stretch",
      "webkitBoxDecorationBreak": "slice",
      "webkitBoxDirection": "normal",
      "webkitBoxFlex": "0",
      "webkitBoxOrdinalGroup": "1",
      "webkitBoxOrient": "horizontal",
      "webkitBoxPack": "start",
      "webkitBoxReflect": "none",
      "webkitBoxShadow": "none",
      "webkitBoxSizing": "content-box",
      "webkitClipPath": "none",
      "webkitColumnBreakAfter": "auto",
      "webkitColumnBreakBefore": "auto",
      "webkitColumnBreakInside": "auto",
      "webkitColumnCount": "auto",
      "webkitColumnGap": "normal",
      "webkitColumnRule": "0px none rgb(0, 0, 0)",
      "webkitColumnRuleColor": "rgb(0, 0, 0)",
      "webkitColumnRuleStyle": "none",
      "webkitColumnRuleWidth": "0px",
      "webkitColumnSpan": "none",
      "webkitColumnWidth": "auto",
      "webkitColumns": "auto auto",
      "webkitFilter": "none",
      "webkitFlex": "0 1 auto",
      "webkitFlexBasis": "auto",
      "webkitFlexDirection": "row",
      "webkitFlexFlow": "row nowrap",
      "webkitFlexGrow": "0",
      "webkitFlexShrink": "1",
      "webkitFlexWrap": "nowrap",
      "webkitFontFeatureSettings": "normal",
      "webkitFontSmoothing": "auto",
      "webkitHyphenateCharacter": "auto",
      "webkitJustifyContent": "normal",
      "webkitLineBreak": "auto",
      "webkitLineClamp": "none",
      "webkitLocale": "auto",
      "webkitLogicalHeight": "904px",
      "webkitLogicalWidth": "464px",
      "webkitMarginAfter": "0px",
      "webkitMarginBefore": "0px",
      "webkitMarginEnd": "0px",
      "webkitMarginStart": "0px",
      "webkitMask": "none",
      "webkitMaskBoxImage": "none",
      "webkitMaskBoxImageOutset": "0",
      "webkitMaskBoxImageRepeat": "stretch",
      "webkitMaskBoxImageSlice": "0 fill",
      "webkitMaskBoxImageSource": "none",
      "webkitMaskBoxImageWidth": "auto",
      "webkitMaskClip": "border-box",
      "webkitMaskComposite": "add",
      "webkitMaskImage": "none",
      "webkitMaskOrigin": "border-box",
      "webkitMaskPosition": "0% 0%",
      "webkitMaskPositionX": "0%",
      "webkitMaskPositionY": "0%",
      "webkitMaskRepeat": "repeat",
      "webkitMaskSize": "auto",
      "webkitMaxLogicalHeight": "none",
      "webkitMaxLogicalWidth": "none",
      "webkitMinLogicalHeight": "0px",
      "webkitMinLogicalWidth": "0px",
      "webkitOpacity": "1",
      "webkitOrder": "0",
      "webkitPaddingAfter": "0px",
      "webkitPaddingBefore": "0px",
      "webkitPaddingEnd": "0px",
      "webkitPaddingStart": "0px",
      "webkitPerspective": "none",
      "webkitPerspectiveOrigin": "232px 452px",
      "webkitPerspectiveOriginX": "",
      "webkitPerspectiveOriginY": "",
      "webkitPrintColorAdjust": "economy",
      "webkitRtlOrdering": "logical",
      "webkitRubyPosition": "before",
      "webkitShapeImageThreshold": "0",
      "webkitShapeMargin": "0px",
      "webkitShapeOutside": "none",
      "webkitTapHighlightColor": "rgba(0, 0, 0, 0.18)",
      "webkitTextCombine": "none",
      "webkitTextDecorationsInEffect": "none",
      "webkitTextEmphasis": "none rgb(0, 0, 0)",
      "webkitTextEmphasisColor": "rgb(0, 0, 0)",
      "webkitTextEmphasisPosition": "over",
      "webkitTextEmphasisStyle": "none",
      "webkitTextFillColor": "rgb(0, 0, 0)",
      "webkitTextOrientation": "vertical-right",
      "webkitTextSecurity": "none",
      "webkitTextSizeAdjust": "auto",
      "webkitTextStroke": "0px rgb(0, 0, 0)",
      "webkitTextStrokeColor": "rgb(0, 0, 0)",
      "webkitTextStrokeWidth": "0px",
      "webkitTransform": "none",
      "webkitTransformOrigin": "232px 452px",
      "webkitTransformOriginX": "",
      "webkitTransformOriginY": "",
      "webkitTransformOriginZ": "",
      "webkitTransformStyle": "flat",
      "webkitTransition": "all",
      "webkitTransitionDelay": "0s",
      "webkitTransitionDuration": "0s",
      "webkitTransitionProperty": "all",
      "webkitTransitionTimingFunction": "ease",
      "webkitUserDrag": "auto",
      "webkitUserModify": "read-only",
      "webkitUserSelect": "auto",
      "webkitWritingMode": "horizontal-tb",
      "whiteSpace": "normal",
      "whiteSpaceCollapse": "collapse",
      "widows": "2",
      "width": "464px",
      "willChange": "auto",
      "wordBreak": "normal",
      "wordSpacing": "0px",
      "wordWrap": "normal",
      "writingMode": "horizontal-tb",
      "x": "0px",
      "y": "0px",
      "zIndex": "auto",
      "zoom": "1"
  }
};
PointerEvent = function PointerEvent(val) {
  console.log("PointerEvent ==>", val);
};
BlobEvent = function BlobEvent(val) {
  console.log("BlobEvent ==>", val);
};

alert = function alert(val) {
  console.log("alert ==>", val);
};

MouseEvent = function MouseEvent(val) {
  console.log("MouseEvent ==>", val);
};
TouchEvent = function TouchEvent(val) {
  console.log("TouchEvent ==>", val);
};
PerformanceEntry = function PerformanceEntry(val) {
  console.log("PerformanceEntry ==>", val);
};
Element = function Element(val) {
  console.log("PerformanceEntry ==>", val);
};
webkitRTCPeerConnection = function webkitRTCPeerConnection(val) {
  console.log("webkitRTCPeerConnection ==>", val);
};
PerformanceTiming = function PerformanceTiming(val) {
  console.log("PerformanceTiming ==>", val);
};
HTMLDocument = function HTMLDocument(val) {
  console.log("HTMLDocument ==>", val);
};
HTMLMediaElement = function HTMLMediaElement(val) {
  console.log("HTMLMediaElement ==>", val);
};
OfflineAudioContext = function OfflineAudioContext(val) {
  console.log("OfflineAudioContext ==>", val);
};
WebGLRenderingContext = function WebGLRenderingContext(val) {
  console.log("WebGLRenderingContext ==>", val);
};
WebGLRenderingContext.prototype = watch({
  drawingBufferColorSpace:"srgb",
  drawingBufferFormat:32856,
  drawingBufferHeight:150,
  drawingBufferWidth:300,
  unpackColorSpace:"srgb",
},'WebGLRenderingContext.prototype ==>')

DeviceMotionEvent = function DeviceMotionEvent(val) {
  console.log("DeviceMotionEvent ==>", val);debugger
};
matchMedia = function matchMedia(val) {
  console.log("matchMedia ==>", val);
  if (val === "(display-mode: fullscreen)") {
    return watch(
      {
        matches: false,
      },
      "(display-mode: fullscreen) ==>"
    );
  }
  if (val === "(display-mode: minimal-ui)") {
    return watch(
      {
        matches: false,
      },
      "(display-mode: minimal-ui) ==>"
    );
  }
  if (val === "(display-mode: standalone)") {
    return watch(
      {
        matches: false,
      },
      "(display-mode: standalone) ==>"
    );
  }
  if (val === "(display-mode: browser)") {
    return watch(
      {
        matches: true,
      },
      "(display-mode: browser) ==>"
    );
  }
  debugger
};
DOMTokenList = function DOMTokenList(val) {
  console.log("DOMTokenList ==>", val);debugger
};
AWSCInner = watch(
  {
    register: function (val) {
      console.log("AWSCInner.register ==>", val);
    },
  },
  "window.AWSCInner ==>"
);
div_childNodes = [];
div_index = 0;
while (div_index < 300) {
  div_childNodes.push(
    watch(
      {
        offsetWidth: 0,
        offsetHeight: 0,
      },
      "div.childNode.index"
    )
  );
  div_index += 1;
}

devicePixelRatio = 1;
// origin = "https://ditu.amap.com";
origin = 'https://shoprenderview.aliexpress.com'
Document = function Document() {};

document = {
  referrer: "https://ditu.amap.com/detail/get/detail",
  wasDiscarded: false,
  visibilityState: "visible",
  head: watch(
    {
      appendChild: function (obj) {
        return obj;
      },
    },
    "document.head ==>"
  ),
  cookie:"arms_uid=c22d0971-6639-478d-88dd-2e36281d6efd; cna=IWC/IEUME28CAXFUqo2mYX7V; ali_apache_id=33.5.157.190.1751175776658.737542.8; xman_us_f=x_locale=en_US&x_l=1&x_c_chg=1&acs_rt=a2ca553f01704f0fa80923b7d2f33ce2; intl_locale=en_US; acs_usuc_t=x_csrf=w9jyycgsrrr9&acs_rt=a2ca553f01704f0fa80923b7d2f33ce2; aep_usuc_f=site=glo&c_tp=USD&region=CN&b_locale=en_US; tfstk=gNht4JVrUHxM-GhT-VJhmLaT2T8H-p0Z8cu5ioqGhDnKlcZgm-YZHrnoot0M71DLMDotIiV0nsEjlkcgjVVsvS3jW-cg1F7fMmgRiAV6_Dmndv50InRZxDVZtAf0jhPxl0Vvq3AkZVuaTStkqreSVjFblIqXKRiGXG5Xq3AktG1ybZ-omIrUgpU4APabfOTLOPrQl1ibfJsQyzPbGma1Ayagko1_lSTKRkzbGoibCeFQYrMLInEC5ofxEaP4RZX8Ps1j9PeBKVZCMycLWRES5fCfGazTBug_vh16wDeIu-hVusEs5Yo4Pcs6qRujpDUTMBX_N2Hj2yl6ZGUEI2guA4QVgVNtebFsBHWUschQOfMRlsgL6lyYWJS9vuGZRbPQKQT-RXoi7X3clIanqkgZ1SdWz5F_fWUEiH5_DvMjsRPVf32ZlvnLW7sPAbcJIASu2rX6JeBV3RaegDB45a0Uta4LqFdA3tye8yEkJeBV3RaUJuY9XtW4Le5..",
  getElementsByTagName: function (val) {
    console.log("document.getElementsByTagName ==> ", val);

    if (val === "body") {
      return watch(
        {
          0: watch(
            {
              appendChild: function (obj) {
                return obj;
              },
              removeChild: function (obj) {
                return obj;
              },
            },
            "body ==>"
          ),
        },
        "getElementsByTagName.body ==>"
      );
    }
    if (val === "HEAD") {
      return watch(
        {
          0: watch(
            {
              appendChild: function (obj) {
                return obj;
              },
            },
            "HEAD ==>"
          ),
        },
        "getElementsByTagName.HEAD ==>"
      );
    }
    if (val === "div") {
      return watch({ length: 13 }, "getElementsByTagName.div ==>");
    }
    debugger
  },
  createElement: function (val) {
    console.log("document.createElement ==> ", val);
    if (val === "div") {
      return watch(
        {
          childNodes: watch(div_childNodes, "div.childNodes ==>"),
        },
        "div ==>"
      );
    }

    if (val === "SCRIPT") {
      return watch({}, "SCRIPT ==>");
    }
    if (val === "span") {
      return watch(
        {
          style: watch({}, "span.style ==>"),
          offsetWidth: 0,
          offsetHeight: 0,
        },
        "span ==>"
      );
    }
    if (val === "style") {
      return watch({}, "style ==>");
    }
    if (val === "canvas") {
      return watch(
        {
          getContext: function (val) {
            console.log("canvas.getContext ==>", val);
            if (val === "2d") {
              return watch(
                {
                  fillRect: function (val) {
                    console.log("fillRect ==>", val);
                  },
                  fillText: function (val) {
                    console.log("fillText ==>", val);
                  },
                },
                "2d ==>"
              );
            }
            if (val === "webgl") {
              return watch(
                {
                  MAX_TEXTURE_SIZE: 3379,
                  MAX_TEXTURE_IMAGE_UNITS: 34930,
                  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
                  MAX_VERTEX_UNIFORM_VECTORS: 36347,
                  getExtension: function (val) {
                    console.log("webgl.getExtension ==> ", val);
                    if (val === "WEBGL_debug_renderer_info")
                      return watch(
                        {
                          UNMASKED_VENDOR_WEBGL:37445,
                          UNMASKED_RENDERER_WEBGL: 37446,
                        },
                        "WEBGL_debug_renderer_info ==>"
                      );
                  },
                  getParameter: function (val) {
                    console.log("webgl.getParameter ==> ", val);
                    if (val === 37446) {
                      return "ANGLE (Intel, Intel(R) UHD Graphics 770 (0x00004680) Direct3D11 vs_5_0 ps_5_0, D3D11)";
                    }
                    if (val === 3379) {
                      return 16384;
                    }
                    if (val === 34930) {
                      return 16;
                    }
                    if (val === 35660) {
                      return 16;
                    }
                    if (val === 36347) {
                      return 4096;
                    }
                    if (val === 3413) {
                      return 8;
                    }
                    if (val === 3412) {
                      return 8;
                    }
                    if (val === 3414) {
                      return 24;
                    }
                    if (val === 3411) {
                      return 8;
                    }
                    if (val === 35661) {
                      return 32;
                    }
                    if (val === 34076) {
                      return 16384;
                    }

                    if (val === 36349) {
                      return 1024;
                    }
                    if (val === 34024) {
                      return 16384;
                    }
                    if (val === 34930) {
                      return 16;
                    }
                    if (val === 3379) {
                      return 16384;
                    }
                    if (val === 36348) {
                      return 30;
                    }
                    if (val === 34921) {
                      return 16;
                    }
                    if (val === 35660) {
                      return 16;
                    }
                    if (val === 36347) {
                      return 4095;
                    }
                    if (val === 3410) {
                      return 8;
                    }
                    if (val === 7937) {
                      return 'WebKit WebGL';
                    }
                    if (val === 35724) {
                      return 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)';
                    }
                    if (val === 3415) {
                      return 0;
                    }
                    if (val === 7936) {
                      return 'WebKit';
                    }
                    if (val === 7938) {
                      return 'WebGL 1.0 (OpenGL ES 2.0 Chromium)';
                    }
                    if (val === 37445) {
                      return null;
                    }
                    if (val === 3386) {
                      const buffer = new ArrayBuffer(8);
                      const intArray = new Int32Array(buffer);
                      intArray[0] = 32767;
                      intArray[1] = 32767;
                      return buffer;
                    }
                    if (val === 33902) {
                      // 创建 8 字节的 ArrayBuffer（2个浮点数 * 4字节/个）
                      const buffer = new ArrayBuffer(8);
                      const floatArray = new Float32Array(buffer);
                      floatArray[0] = 1;
                      floatArray[1] = 1;
                      return buffer;
                    }
                    if (val === 33901) {
                      const buffer = new ArrayBuffer(8);
                      const floatArray = new Float32Array(buffer);
                      floatArray[0] = 1;
                      floatArray[1] = 1024;
                      return buffer;
                    }
                    debugger
                  },
                  getSupportedExtensions: function (val) {
                    return [
                      "ANGLE_instanced_arrays",
                      "EXT_blend_minmax",
                      "EXT_clip_control",
                      "EXT_color_buffer_half_float",
                      "EXT_depth_clamp",
                      "EXT_disjoint_timer_query",
                      "EXT_float_blend",
                      "EXT_frag_depth",
                      "EXT_polygon_offset_clamp",
                      "EXT_shader_texture_lod",
                      "EXT_texture_compression_bptc",
                      "EXT_texture_compression_rgtc",
                      "EXT_texture_filter_anisotropic",
                      "EXT_texture_mirror_clamp_to_edge",
                      "EXT_sRGB",
                      "KHR_parallel_shader_compile",
                      "OES_element_index_uint",
                      "OES_fbo_render_mipmap",
                      "OES_standard_derivatives",
                      "OES_texture_float",
                      "OES_texture_float_linear",
                      "OES_texture_half_float",
                      "OES_texture_half_float_linear",
                      "OES_vertex_array_object",
                      "WEBGL_blend_func_extended",
                      "WEBGL_color_buffer_float",
                      "WEBGL_compressed_texture_s3tc",
                      "WEBGL_compressed_texture_s3tc_srgb",
                      "WEBGL_debug_renderer_info",
                      "WEBGL_debug_shaders",
                      "WEBGL_depth_texture",
                      "WEBGL_draw_buffers",
                      "WEBGL_lose_context",
                      "WEBGL_multi_draw",
                      "WEBGL_polygon_mode",
                    ];
                  },
                  getContextAttributes:function(val){
                    return {
                        "alpha": true,
                        "antialias": true,
                        "depth": true,
                        "desynchronized": false,
                        "failIfMajorPerformanceCaveat": false,
                        "powerPreference": "default",
                        "premultipliedAlpha": true,
                        "preserveDrawingBuffer": false,
                        "stencil": false,
                        "xrCompatible": false
                    }
                  },
                  createBuffer:function(val){
                    console.log('webgl.createBuffer ==> ',val);
                    return watch({},'webgl1.createBuffer ==>')
                  },
                  bindBuffer:function(val1,val2){
                    console.log('webgl.bindBuffer ==> ',val1,val2);
                  },
                  bufferData:function(val1,val2,val3){
                    console.log('webgl.bufferData ==> ',val1,val2,val3);
                  },
                  getShaderPrecisionFormat:function(val1,val2){
                    console.log('webgl.getShaderPrecisionFormat ==> ',val1,val2);
                    if(val1===35633 && val2===36338){
                      return watch({
                        precision:23,
                        rangeMax:127,
                        rangeMin:127,
                      },'webgl.getShaderPrecisionFormat(35633, 36338)')
                    }
                    if(val1===35633 && val2===36337){
                      return watch({
                        precision:23,
                        rangeMax:127,
                        rangeMin:127,
                      },'webgl.getShaderPrecisionFormat(35633, 36337)')
                    }
                    if(val1===35633 && val2===36336){
                      return watch({
                        precision:23,
                        rangeMax:127,
                        rangeMin:127,
                      },'webgl.getShaderPrecisionFormat(35633, 36336)')
                    }
                    if(val1===35632 && val2===36338){
                      return watch({
                        precision:23,
                        rangeMax:127,
                        rangeMin:127,
                      },'webgl.getShaderPrecisionFormat(35632, 36338)')
                    }
                    if(val1===35632 && val2===36337){
                      return watch({
                        precision:23,
                        rangeMax:127,
                        rangeMin:127,
                      },'webgl.getShaderPrecisionFormat(35632, 36337)')
                    }
                    if(val1===35632 && val2===36336){
                      return watch({
                        precision:23,
                        rangeMax:127,
                        rangeMin:127,
                      },'webgl.getShaderPrecisionFormat(35632, 36336)')
                    }
                    if(val1===35633 && val2===36341){
                      return watch({
                        precision:0,
                        rangeMax:30,
                        rangeMin:31,
                      },'webgl.getShaderPrecisionFormat(35633, 36341)')
                    }
                    if(val1===35633 && val2===36340){
                      return watch({
                        precision:0,
                        rangeMax:30,
                        rangeMin:31,
                      },'webgl.getShaderPrecisionFormat(35633, 36340)')
                    }
                    if(val1===35633 && val2===36339){
                      return watch({
                        precision:0,
                        rangeMax:30,
                        rangeMin:31,
                      },'webgl.getShaderPrecisionFormat(35633, 36339)')
                    }
                    if(val1===35632 && val2===36341){
                      return watch({
                        precision:0,
                        rangeMax:30,
                        rangeMin:31,
                      },'webgl.getShaderPrecisionFormat(35632, 36341)')
                    }
                    if(val1===35632 && val2===36340){
                      return watch({
                        precision:0,
                        rangeMax:30,
                        rangeMin:31,
                      },'webgl.getShaderPrecisionFormat(35632, 36340)')
                    }
                    if(val1===35632 && val2===36339){
                      return watch({
                        precision:0,
                        rangeMax:30,
                        rangeMin:31,
                      },'webgl.getShaderPrecisionFormat(35632, 36339)')
                    }
                    debugger
                  },
                  createProgram:function(val){
                    console.log('webgl.createProgram ==> ',val);
                    if (val==='vertexPosAttrib'){
                      return watch({},'webgl.createProgram.vertexPosAttrib ==>')
                    }
                    if (val==='offsetUniform '){
                      return watch({},'webgl.createProgram.offsetUniform  ==>')
                    }
                    if (val==='vertexPosArray'){
                      return null
                    }
                    return watch({},'webgl.createProgram ==>')
                  },
                  createShader:function(val){
                    console.log('webgl.createShader ==> ',val);
                    if (val===35633){
                      return watch({},'webgl.createShader.35633 ==>')
                    }
                    if (val===35632){
                      return watch({},'webgl.createShader.35632 ==>')
                    }
                    debugger
                  },
                  shaderSource:function(val){
                    console.log('webgl.shaderSource ==> ',val);debugger
                  },
                  compileShader:function(val){
                    console.log('webgl.compileShader ==> ',val);debugger
                  },
                  attachShader:function(val){
                    console.log('webgl.attachShader ==> ',val);debugger
                  },
                  linkProgram:function(val){
                    console.log('webgl.linkProgram ==> ',val);debugger
                  },
                  useProgram:function(val){
                    console.log('webgl.useProgram ==> ',val);debugger
                  },
                  getAttribLocation:function(val){
                    console.log('webgl.getAttribLocation ==> ',val);debugger
                  },
                  getUniformLocation:function(val){
                    console.log('webgl.getUniformLocation ==> ',val);debugger
                  },
                  enableVertexAttribArray:function(val){
                    console.log('webgl.enableVertexAttribArray ==> ',val);debugger
                  },
                  vertexAttribPointer:function(val){
                    console.log('webgl.vertexAttribPointer ==> ',val);debugger
                  },
                  uniform2f:function(val){
                    console.log('webgl.uniform2f ==> ',val);
                  },
                  drawArrays:function(val){
                    console.log('webgl.drawArrays ==> ',val);
                  },
                  clearColor:function(val){
                    console.log('webgl.clearColor ==> ',val);
                  },
                  enable:function(val){
                    console.log('webgl.enable ==> ',val);
                  },
                  depthFunc:function(val){
                    console.log('webgl.depthFunc ==> ',val);
                  },
                  clear:function(val){
                    console.log('webgl.clear ==> ',val);
                    if (val===16640){
                      return undefined
                    }
                    debugger
                  },
                  DEPTH_TEST:2929,
                  LEQUAL:515,
                  COLOR_BUFFER_BIT:16384,
                  DEPTH_BUFFER_BIT:256
                },
                
                "webgl ==>"
              );
            }
            if (val === "webgl2") {
              return watch({
                MAX_TEXTURE_LOD_BIAS:34045,
                MAX_UNIFORM_BLOCK_SIZE:35376,
                MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:35377,
                MAX_COMBINED_UNIFORM_BLOCKS:35374,
                MAX_UNIFORM_BUFFER_BINDINGS:35375,
                getParameter: function (val) {
                    console.log("webgl2.getParameter ==> ", val);
                    if (val===34045){
                      return 2
                    }
                    if (val===35376){
                      return 65536
                    }
                    if (val===35377){
                      return 212992
                    }
                    if (val===35374){
                      return 24
                    }
                    if (val===35375){
                      return 24
                    }
                    debugger
                },
              }, "webgl2 ==>");
            }
            if (val === "experimental-webgl") {
              return null
            }
            debugger
          },
          getAttributeNames: function (val) {
            console.log("canvas.getAttributeNames ==>", val);debugger
          },
          style: watch({}, "canvas.style ==>"),
          toDataURL: function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==";
          },
          
        },
        "canvas ==>"
      );
    }
    if (val === "audio") {
      return watch(
        {
          canPlayType: function (val) {
            console.log("audio.canPlayType ==>", val);
            if (val==='audio/mpeg'){
              return 'probably'
            }
            if (val==='audio/ogg; codecs="vorbis"'){
              return 'probably'
            }
            if (val==='audio/wav; codecs="1"'){
              return 'probably'
            }
            if (val==='audio/webm; codecs="opus"'){
              return 'probably'
            }
            if (val==='audio/aac'){
              return 'probably'
            }
            if (val==='audio/flac'){
              return 'probably'
            }
            if (val==='video/mp4; codecs="avc1.42E01E"'){
              return 'probably'
            }
            if (val==='video/webm; codecs="vp8, vorbis"'){
              return 'probably'
            }
            if (val==='video/ogg; codecs="theora"'){
              return ''
            }
            if (val==='video/webm; codecs="vp9"'){
              return 'probably'
            }
            if (val==='video/H264'){
              return ''
            }
            if (val==='video/mp4; codecs="mp4a.40.2"'){
              return 'probably'
            }
            debugger

          },
        },
        "audio ==>"
      );
    }
    debugger
  },
  body: watch(
    {
      clientWidth: 288,
      clientHeight: 904,
    },
    "document.body ==> "
  ),
  documentElement: watch(
    {
      style: watch(
        {
          contentVisibility: "",
        },
        "document.documentElement.style ==>"
      ),
      clientWidth: 288,
      clientHeight: 904,
    },
    "document.documentElement ==> "
  ),
  addEventListener: function (val) {
    console.log("document.addEventListener ==>", val);
  },
  querySelector: function (val) {
    return null;
    console.log("document.querySelector ==>", val);debugger
  },
  createEvent: function createEvent(val) {
    console.log("document.createEvent ==>", val);debugger
  },
  hasFocus: function (val) {
    return false;
  },
  hidden: false,
  currentScript: watch({}, "document.currentScript ==>"),
  ontouchstart:function(){}
};
document.__proto__ = Document.prototype;

screenTop = 0;
screenLeft = 0;
innerWidth = 288;
outerWidth = 1920;
innerHeight = 919;
outerHeight = 1040;
screenY = 0;
screenX = 0;
WindVane = watch(
  {
    version: "3.0.6",
    isAvailable: false,
    isNewBridgeAvailable: false,
  },
  "WindVane ==>"
);
chrome = watch(
  {
    app: {
      isInstalled: false,
      InstallState: {
        DISABLED: "disabled",
        INSTALLED: "installed",
        NOT_INSTALLED: "not_installed",
      },
      RunningState: {
        CANNOT_RUN: "cannot_run",
        READY_TO_RUN: "ready_to_run",
        RUNNING: "running",
      },
    },
  },
  "window.chrome ==>"
);
setTimeoutEvent = [];
setTimeout = function setTimeout() {
  // console.log('setTimeout',arguments)
  setTimeoutEvent.push(arguments[0]);
  return 1;
};

PromiseEvent = [];
// navigator['getBattery'], catch, navigator['storage']['estimate'], catch, i
Promise.prototype.then = function () {
  // console.log('Promise.prototype.then',arguments)
  PromiseEvent.push(arguments[0]);
  return Promise.resolve();
};

Navigator = function Navigator() {};
navigator = {
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
  webdriver: false,
  platform: "Win32",
  hardwareConcurrency: 20,
  cookieEnabled: true,
  maxTouchPoints: 0,
  appCodeName: "Mozilla",
  language: "zh-CN",
  languages: ["zh-CN", "zh"],
  plugins: watch([], "navigator.plugins ==>"),
  storage:watch({},'navigator.storage'),
  appVersion:
    "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",

  // getBattery: Promise.resolve({
  //   charging: true, // 模拟充电状态
  //   level: 0.8, // 模拟电量（80%）
  //   chargingTime: 1800, // 模拟充满剩余时间（秒）
  //   dischargingTime: 7200, // 模拟可用时间（秒）
  //   // 事件监听器（空函数）
  //   addEventListener: () => {},
  // }),
  getBattery() {
    BatteryManager = {
      charging: true,
      chargingTime: 0,
      dischargingTime: Infinity,
      level: 1,
      onchargingchange: null,
      onchargingtimechange: null,
      ondischargingtimechange: null,
      onlevelchange: null,
    };
    return Promise.resolve(BatteryManager);
  },
  connection: watch(
    {
      rtt: 50,
      effectiveType: "4g",
    },
    "navigator.connection ==>"
  ),
};
navigator.__proto__ = Navigator.prototype;

location = {
  protocol: "https:",
  host: "ditu.amap.com",
  href: "https://ditu.amap.com/detail/get/detail",
};
localStorage = {
  getItem: function (val) {
    console.log("localStorage.getItem ==>", val);
    if (val === "lswucn") {
      // return watch({}, "lswucn ==>");
      return "T2gAmYc3QMuS3d7tqldZl6ZWFFaQpur_fLmY9sUFahizGXGhIujGvQaWy6kV9lRh60Q=@@1750376134 ";
    }
  },
};
Screen = function Screen() {};
screen = {
  width: 1920,
  availWidth: 1920,
  height: 1080,
  availHeight: 1040,
  colorDepth: 24,
  pixelDepth: 24,
};
screen.__proto__ = Screen.prototype;

history = {};
window = watch(window, "window");
document = watch(document, "document");
navigator = watch(navigator, "navigator");
location = watch(location, "location");
localStorage = watch(localStorage, "localStorage");
screen = watch(screen, "screen");
history = watch(history, "history");
