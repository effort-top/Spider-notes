var export_function;


var v_saf; !function () { var n = Function.toString, t = [], i = [], o = [].indexOf.bind(t), e = [].push.bind(t), r = [].push.bind(i); function u(n, t) { return -1 == o(n) && (e(n), r(`function ${t || n.name || ""}() { [native code] }`)), n } Object.defineProperty(Function.prototype, "toString", { enumerable: !1, configurable: !0, writable: !0, value: function () { return "function" == typeof this && i[o(this)] || n.call(this) } }), u(Function.prototype.toString, "toString"), v_saf = u }();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e)
}
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }, configurable: true,
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function () { if (!v_new_toggle) {  } }
var v_random = (function () { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280) } })()
var v_new = function (v) { var temp = v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r }


EventTarget = v_saf(function EventTarget() { ; })
HTMLCollection = v_saf(function HTMLCollection() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Navigator = v_saf(function Navigator() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; this._plugins = typeof PluginArray == 'undefined' ? [] : v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray == 'undefined' ? [] : v_new(MimeTypeArray) })
PluginArray = v_saf(function PluginArray() {
  if (!v_new_toggle) { throw TypeError("Illegal constructor") };
  this[0] = v_new(Plugin); this[0].description = "Portable Document Format"; this[0].filename = "internal-pdf-viewer"; this[0].length = 2; this[0].name = "PDF Viewer";
  this[1] = v_new(Plugin); this[1].description = "Portable Document Format"; this[1].filename = "internal-pdf-viewer"; this[1].length = 2; this[1].name = "Chrome PDF Viewer";
  this[2] = v_new(Plugin); this[2].description = "Portable Document Format"; this[2].filename = "internal-pdf-viewer"; this[2].length = 2; this[2].name = "Chromium PDF Viewer";
  this[3] = v_new(Plugin); this[3].description = "Portable Document Format"; this[3].filename = "internal-pdf-viewer"; this[3].length = 2; this[3].name = "Microsoft Edge PDF Viewer";
  this[4] = v_new(Plugin); this[4].description = "Portable Document Format"; this[4].filename = "internal-pdf-viewer"; this[4].length = 2; this[4].name = "WebKit built-in PDF";
})
Plugin = v_saf(function Plugin() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
MimeTypeArray = v_saf(function MimeTypeArray() {
  if (!v_new_toggle) { throw TypeError("Illegal constructor") };
  this[0] = v_new(Plugin); this[0].description = "Portable Document Format"; this[0].enabledPlugin = { "0": {}, "1": {} }; this[0].suffixes = "pdf"; this[0].type = "application/pdf";
  this[1] = v_new(Plugin); this[1].description = "Portable Document Format"; this[1].enabledPlugin = { "0": {}, "1": {} }; this[1].suffixes = "pdf"; this[1].type = "text/pdf";
})
MimeType = v_saf(function MimeType() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
NodeList = v_saf(function NodeList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Event = v_saf(function Event() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
NavigatorUAData = v_saf(function NavigatorUAData() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Image = v_saf(function Image() { ; return v_new(HTMLImageElement) })
PerformanceTiming = v_saf(function PerformanceTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
MutationRecord = v_saf(function MutationRecord() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Storage = v_saf(function Storage() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
IDBFactory = v_saf(function IDBFactory() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
DOMStringList = v_saf(function DOMStringList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
IDBObjectStore = v_saf(function IDBObjectStore() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Response = v_saf(function Response() { ; })
Headers = v_saf(function Headers() { ; })
DOMRectReadOnly = v_saf(function DOMRectReadOnly() { ; })
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Node = v_saf(function Node() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Node, EventTarget)
UIEvent = v_saf(function UIEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(UIEvent, Event)
Worker = v_saf(function Worker() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Worker, EventTarget)
MessageEvent = v_saf(function MessageEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(MessageEvent, Event)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(XMLHttpRequestEventTarget, EventTarget)
IDBRequest = v_saf(function IDBRequest() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(IDBRequest, EventTarget)
IDBDatabase = v_saf(function IDBDatabase() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(IDBDatabase, EventTarget)
IDBTransaction = v_saf(function IDBTransaction() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(IDBTransaction, EventTarget)
Performance = v_saf(function Performance() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Performance, EventTarget)
MessagePort = v_saf(function MessagePort() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(MessagePort, EventTarget)
DOMRect = v_saf(function DOMRect() { ; }); _inherits(DOMRect, DOMRectReadOnly)
Document = v_saf(function Document() { ; }); _inherits(Document, Node)
Element = v_saf(function Element() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Element, Node)
MouseEvent = v_saf(function MouseEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(MouseEvent, UIEvent)
XMLHttpRequest = v_saf(function XMLHttpRequest() { ; }); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
IDBOpenDBRequest = v_saf(function IDBOpenDBRequest() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(IDBOpenDBRequest, IDBRequest)
FocusEvent = v_saf(function FocusEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(FocusEvent, UIEvent)
KeyboardEvent = v_saf(function KeyboardEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(KeyboardEvent, UIEvent)
HTMLElement = v_saf(function HTMLElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLElement, Element)
HTMLInputElement = v_saf(function HTMLInputElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLInputElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLIFrameElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; v_hook_href(this, 'HTMLAnchorElement', location.href) }); _inherits(HTMLAnchorElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLImageElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLScriptElement, HTMLElement)
Window = v_saf(function Window() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Window, EventTarget)
Screen = v_saf(function Screen() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(Screen, EventTarget)
HTMLDocument = v_saf(function HTMLDocument() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; Object.defineProperty(this, 'location', { get() { return location } }) }); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLBodyElement, HTMLElement)
Location = v_saf(function Location() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
HTMLCanvasElement = v_saf(function HTMLCanvasElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLCanvasElement, HTMLElement)
WebGLRenderingContext = v_saf(function WebGLRenderingContext() {
  if (!v_new_toggle) { throw TypeError("Illegal constructor") };
  function WebGLBuffer() { }
  function WebGLProgram() { }
  function WebGLShader() { }
  this._toggle = {}
  this.createBuffer = function () { v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function () { v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function () { v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function () {
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function (key) {
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo {
      get UNMASKED_VENDOR_WEBGL() { self._toggle[37445] = 1; return 37445 }
      get UNMASKED_RENDERER_WEBGL() { self._toggle[37446] = 1; return 37446 }
    }
    class EXTTextureFilterAnisotropic { }
    class WebGLLoseContext {
      loseContext() { }
      restoreContext() { }
    }
    if (key == 'WEBGL_debug_renderer_info') { var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic') { var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context') { var r = new WebGLLoseContext }
    else { var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function (key) {
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]) {
      if (key == 37445) { return "Google Inc. (NVIDIA)" }
      if (key == 37446) { return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    } else {
      if (key == 33902) { return new Float32Array([1, 1]) }
      if (key == 33901) { return new Float32Array([1, 1024]) }
      if (key == 35661) { return 32 }
      if (key == 34047) { return 16 }
      if (key == 34076) { return 16384 }
      if (key == 36349) { return 1024 }
      if (key == 34024) { return 16384 }
      if (key == 34930) { return 16 }
      if (key == 3379) { return 16384 }
      if (key == 36348) { return 30 }
      if (key == 34921) { return 16 }
      if (key == 35660) { return 16 }
      if (key == 36347) { return 4095 }
      if (key == 3386) { return new Int32Array([32767, 32767]) }
      if (key == 3410) { return 8 }
      if (key == 7937) { return "WebKit WebGL" }
      if (key == 35724) { return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415) { return 0 }
      if (key == 7936) { return "WebKit" }
      if (key == 7938) { return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411) { return 8 }
      if (key == 3412) { return 8 }
      if (key == 3413) { return 8 }
      if (key == 3414) { return 24 }
      return null
    }
  }
  this.getContextAttributes = function () {
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function (a, b) {
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat() { }
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338) { return r1 } if (a == 35633 && b == 36337) { return r1 } if (a == 35633 && b == 36336) { return r1 }
    if (a == 35633 && b == 36341) { return r2 } if (a == 35633 && b == 36340) { return r2 } if (a == 35633 && b == 36339) { return r2 }
    if (a == 35632 && b == 36338) { return r1 } if (a == 35632 && b == 36337) { return r1 } if (a == 35632 && b == 36336) { return r1 }
    if (a == 35632 && b == 36341) { return r2 } if (a == 35632 && b == 36340) { return r2 } if (a == 35632 && b == 36339) { return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')
})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceEntry = v_saf(function PerformanceEntry() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceElementTiming = v_saf(function PerformanceElementTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceResourceTiming, PerformanceEntry)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
PerformanceObserver = v_saf(function PerformanceObserver() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
PerformancePaintTiming = v_saf(function PerformancePaintTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
HTMLMediaElement = v_saf(function HTMLMediaElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLUnknownElement, HTMLElement)
DOMTokenList = v_saf(function DOMTokenList() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
Touch = v_saf(function Touch() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; })
TouchEvent = v_saf(function TouchEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(TouchEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(PointerEvent, MouseEvent)
HTMLDivElement = v_saf(function HTMLDivElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLDivElement, HTMLElement)
HTMLMetaElement = v_saf(function HTMLMetaElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLMetaElement, HTMLElement)
HTMLLIElement = v_saf(function HTMLLIElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLLIElement, HTMLElement)
HTMLOptionElement = v_saf(function HTMLOptionElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLOptionElement, HTMLElement)
HTMLSelectElement = v_saf(function HTMLSelectElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLSelectElement, HTMLElement)
HTMLSpanElement = v_saf(function HTMLSpanElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLSpanElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLLinkElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLStyleElement, HTMLElement)
HTMLButtonElement = v_saf(function HTMLButtonElement() { if (!v_new_toggle) { throw TypeError("Illegal constructor") }; }); _inherits(HTMLButtonElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: { value: v_saf(function removeEventListener() { v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments)); }) },
  dispatchEvent: { value: v_saf(function dispatchEvent() { v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "EventTarget", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLCollection.prototype, {
  length: { get() { v_console_log("  [*] HTMLCollection -> length[get]", 44); return 44 } },
  [Symbol.toStringTag]: { value: "HTMLCollection", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Navigator.prototype, {
  plugins: { get() { v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []); return this._plugins || [] } },
  mimeTypes: { get() { v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []); return this._mimeTypes || [] } },
  userAgent: { get() { v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"); return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36" } },
  product: { get() { v_console_log("  [*] Navigator -> product[get]", "Gecko"); return "Gecko" } },
  sendBeacon: { value: v_saf(function sendBeacon() { v_console_log("  [*] Navigator -> sendBeacon[func]", [].slice.call(arguments)); }) },
  onLine: { get() { v_console_log("  [*] Navigator -> onLine[get]", true); return true } },
  [Symbol.toStringTag]: { value: "Navigator", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PluginArray.prototype, {
  length: { get() { v_console_log("  [*] PluginArray -> length[get]", 5); return 5 } },
  [Symbol.toStringTag]: { value: "PluginArray", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: { value: "Plugin", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MimeTypeArray.prototype, {
  length: { get() { v_console_log("  [*] MimeTypeArray -> length[get]", 2); return 2 } },
  [Symbol.toStringTag]: { value: "MimeTypeArray", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: { value: "MimeType", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(NodeList.prototype, {
  length: { get() { v_console_log("  [*] NodeList -> length[get]", 0); return 0 } },
  [Symbol.toStringTag]: { value: "NodeList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Event.prototype, {
  target: { get() { v_console_log("  [*] Event -> target[get]", {}); return {} } },
  type: { get() { v_console_log("  [*] Event -> type[get]", "click"); return "click" } },
  eventPhase: { get() { v_console_log("  [*] Event -> eventPhase[get]", 3); return 3 } },
  bubbles: { get() { v_console_log("  [*] Event -> bubbles[get]", true); return true } },
  cancelable: { get() { v_console_log("  [*] Event -> cancelable[get]", true); return true } },
  timeStamp: { get() { v_console_log("  [*] Event -> timeStamp[get]", 13482283.200000003); return 13482283.200000003 } },
  defaultPrevented: { get() { v_console_log("  [*] Event -> defaultPrevented[get]", false); return false } },
  srcElement: { get() { v_console_log("  [*] Event -> srcElement[get]", {}); return {} } },
  NONE: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  CAPTURING_PHASE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  AT_TARGET: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  BUBBLING_PHASE: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
  [Symbol.toStringTag]: { value: "Event", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(NavigatorUAData.prototype, {
  brands: { get() { v_console_log("  [*] NavigatorUAData -> brands[get]", {}); return {} } },
  [Symbol.toStringTag]: { value: "NavigatorUAData", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Image.prototype, {
  src: { get() { v_console_log("  [*] Image -> src[get]", "https://savatar.pddpic.com/a/FGlwlerH6c-348354c4/UaNNQgNjNBl1Tqy7Ratj54a0MYKovKpqS3HQnXVkRXpBD7W71wLit_9H5pAG53o5cdpQU_X0X8_0qFgqUertFKhaVREqPNiUlu8R62xjQyZmCrvNofDeFgDmDPT3009xkecaefjUBAnw_w1h8kNpNQ"); return "https://savatar.pddpic.com/a/FGlwlerH6c-348354c4/UaNNQgNjNBl1Tqy7Ratj54a0MYKovKpqS3HQnXVkRXpBD7W71wLit_9H5pAG53o5cdpQU_X0X8_0qFgqUertFKhaVREqPNiUlu8R62xjQyZmCrvNofDeFgDmDPT3009xkecaefjUBAnw_w1h8kNpNQ" } },
  complete: { get() { v_console_log("  [*] Image -> complete[get]", true); return true } },
  [Symbol.toStringTag]: { value: "Image", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceTiming.prototype, {
  toJSON: { value: v_saf(function toJSON() { v_console_log("  [*] PerformanceTiming -> toJSON[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "PerformanceTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MutationRecord.prototype, {
  type: { get() { v_console_log("  [*] MutationRecord -> type[get]", "childList"); return "childList" } },
  addedNodes: { get() { v_console_log("  [*] MutationRecord -> addedNodes[get]", {}); return {} } },
  [Symbol.toStringTag]: { value: "MutationRecord", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: { value: "Storage", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(IDBFactory.prototype, {
  open: { value: v_saf(function open() { v_console_log("  [*] IDBFactory -> open[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "IDBFactory", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMStringList.prototype, {
  contains: { value: v_saf(function contains() { v_console_log("  [*] DOMStringList -> contains[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "DOMStringList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(IDBObjectStore.prototype, {
  put: { value: v_saf(function put() { v_console_log("  [*] IDBObjectStore -> put[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "IDBObjectStore", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Response.prototype, {
  headers: { get() { v_console_log("  [*] Response -> headers[get]", {}); return {} } },
  clone: { value: v_saf(function clone() { v_console_log("  [*] Response -> clone[func]", [].slice.call(arguments)); }) },
  json: { value: v_saf(function json() { v_console_log("  [*] Response -> json[func]", [].slice.call(arguments)); }) },
  status: { get() { v_console_log("  [*] Response -> status[get]", 200); return 200 } },
  [Symbol.toStringTag]: { value: "Response", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Headers.prototype, {
  get: { value: v_saf(function get() { v_console_log("  [*] Headers -> get[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "Headers", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMRectReadOnly.prototype, {
  [Symbol.toStringTag]: { value: "DOMRectReadOnly", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  getPropertyValue: { value: v_saf(function getPropertyValue() { v_console_log("  [*] CSSStyleDeclaration -> getPropertyValue[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "CSSStyleDeclaration", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Node.prototype, {
  ownerDocument: { get() { v_console_log("  [*] Node -> ownerDocument[get]", {}); return {} } },
  nodeType: { get() { v_console_log("  [*] Node -> nodeType[get]", 1); return 1 } },
  textContent: { get() { v_console_log("  [*] Node -> textContent[get]", "查询"); return "查询" } },
  parentNode: { get() { v_console_log("  [*] Node -> parentNode[get]", {}); return {} } },
  nodeName: { get() { v_console_log("  [*] Node -> nodeName[get]", "IFRAME"); return "IFRAME" } },
  appendChild: { value: v_saf(function appendChild() { v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments)); }) },
  parentElement: { get() { v_console_log("  [*] Node -> parentElement[get]", {}); return {} } },
  contains: { value: v_saf(function contains() { v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments)); }) },
  ELEMENT_NODE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  ATTRIBUTE_NODE: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  TEXT_NODE: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
  CDATA_SECTION_NODE: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
  ENTITY_REFERENCE_NODE: { "value": 5, "writable": false, "enumerable": true, "configurable": false },
  ENTITY_NODE: { "value": 6, "writable": false, "enumerable": true, "configurable": false },
  PROCESSING_INSTRUCTION_NODE: { "value": 7, "writable": false, "enumerable": true, "configurable": false },
  COMMENT_NODE: { "value": 8, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_NODE: { "value": 9, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_TYPE_NODE: { "value": 10, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_FRAGMENT_NODE: { "value": 11, "writable": false, "enumerable": true, "configurable": false },
  NOTATION_NODE: { "value": 12, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_POSITION_DISCONNECTED: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_POSITION_PRECEDING: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_POSITION_FOLLOWING: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_POSITION_CONTAINS: { "value": 8, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_POSITION_CONTAINED_BY: { "value": 16, "writable": false, "enumerable": true, "configurable": false },
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { "value": 32, "writable": false, "enumerable": true, "configurable": false },
  [Symbol.toStringTag]: { value: "Node", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(UIEvent.prototype, {
  view: { get() { v_console_log("  [*] UIEvent -> view[get]", {}); return {} } },
  detail: { get() { v_console_log("  [*] UIEvent -> detail[get]", 1); return 1 } },
  [Symbol.toStringTag]: { value: "UIEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Worker.prototype, {
  postMessage: { value: v_saf(function postMessage() { v_console_log("  [*] Worker -> postMessage[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "Worker", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MessageEvent.prototype, {
  data: { get() { v_console_log("  [*] MessageEvent -> data[get]", {}); return {} } },
  [Symbol.toStringTag]: { value: "MessageEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onerror: { set() { v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments)); } },
  ontimeout: { set() { v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[set]", [].slice.call(arguments)); } },
  [Symbol.toStringTag]: { value: "XMLHttpRequestEventTarget", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(IDBRequest.prototype, {
  onerror: { set() { v_console_log("  [*] IDBRequest -> onerror[set]", [].slice.call(arguments)); } },
  onsuccess: { set() { v_console_log("  [*] IDBRequest -> onsuccess[set]", [].slice.call(arguments)); } },
  result: { get() { v_console_log("  [*] IDBRequest -> result[get]", {}); return {} } },
  [Symbol.toStringTag]: { value: "IDBRequest", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(IDBDatabase.prototype, {
  objectStoreNames: { get() { v_console_log("  [*] IDBDatabase -> objectStoreNames[get]", {}); return {} } },
  transaction: { value: v_saf(function transaction() { v_console_log("  [*] IDBDatabase -> transaction[func]", [].slice.call(arguments)); }) },
  close: { value: v_saf(function close() { v_console_log("  [*] IDBDatabase -> close[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "IDBDatabase", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(IDBTransaction.prototype, {
  objectStore: { value: v_saf(function objectStore() { v_console_log("  [*] IDBTransaction -> objectStore[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "IDBTransaction", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Performance.prototype, {
  now: { value: v_saf(function now() { v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "Performance", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MessagePort.prototype, {
  postMessage: { value: v_saf(function postMessage() { v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments)); }) },
  [Symbol.toStringTag]: { value: "MessagePort", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMRect.prototype, {
  width: { get() { v_console_log("  [*] DOMRect -> width[get]", 94); return 94 } },
  [Symbol.toStringTag]: { value: "DOMRect", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Document.prototype, {
  onreadystatechange: { get() { v_console_log("  [*] Document -> onreadystatechange[get]", {}); return {} } },
  onmouseenter: { get() { v_console_log("  [*] Document -> onmouseenter[get]", {}); return {} } },
  onmouseleave: { get() { v_console_log("  [*] Document -> onmouseleave[get]", {}); return {} } },
  defaultView: { get() { v_console_log("  [*] Document -> defaultView[get]", {}); return {} } },
  createElement: { value: v_saf(function createElement() { v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments)); return _createElement(arguments[0]) }) },
  visibilityState: { get() { v_console_log("  [*] Document -> visibilityState[get]", "visible"); return "visible" } },
  documentElement: { get() { v_console_log("  [*] Document -> documentElement[get]", document); return document } },
  activeElement: { get() { v_console_log("  [*] Document -> activeElement[get]", {}); return {} } },
  referrer: { get() { v_console_log("  [*] Document -> referrer[get]", "https://mms.pinduoduo.com/mms-chat/search?msfrom=mms_sidenav"); return "https://mms.pinduoduo.com/mms-chat/search?msfrom=mms_sidenav" } },
  onreadystatechange: { "enumerable": true, "configurable": true },
  onmouseenter: { "enumerable": true, "configurable": true },
  onmouseleave: { "enumerable": true, "configurable": true },
  [Symbol.toStringTag]: { value: "Document", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Element.prototype, {
  id: { get() { v_console_log("  [*] Element -> id[get]", ""); return "" } },
  getAttribute: { value: v_saf(function getAttribute() { v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments)); }) },
  remove: { value: v_saf(function remove() { v_console_log("  [*] Element -> remove[func]", [].slice.call(arguments)); }) },
  querySelectorAll: { value: v_saf(function querySelectorAll() { v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments)); }) },
  scrollTop: { get() { v_console_log("  [*] Element -> scrollTop[get]", 0); return 0 } },
  namespaceURI: { get() { v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml"); return "http://www.w3.org/1999/xhtml" } },
  tagName: { get() { v_console_log("  [*] Element -> tagName[get]", this.v_tagName); return this.v_tagName } },
  getBoundingClientRect: { value: v_saf(function getBoundingClientRect() { v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments)); }) },
  childElementCount: { get() { v_console_log("  [*] Element -> childElementCount[get]", 2); return 2 } },
  children: { get() { v_console_log("  [*] Element -> children[get]", {}); return {} } },
  className: { get() { v_console_log("  [*] Element -> className[get]", "BTN_outerWrapper_1198e34 BTN_primary_1198e34 BTN_medium_1198e34 BTN_outerWrapperBtn_1198e34  "); return "BTN_outerWrapper_1198e34 BTN_primary_1198e34 BTN_medium_1198e34 BTN_outerWrapperBtn_1198e34  " }, set() { v_console_log("  [*] Element -> className[set]", [].slice.call(arguments)); return "BTN_outerWrapper_1198e34 BTN_primary_1198e34 BTN_medium_1198e34 BTN_outerWrapperBtn_1198e34  " } },
  innerHTML: { set() { v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments)); return "BTN_outerWrapper_1198e34 BTN_primary_1198e34 BTN_medium_1198e34 BTN_outerWrapperBtn_1198e34  " } },
  [Symbol.toStringTag]: { value: "Element", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(MouseEvent.prototype, {
  buttons: { get() { v_console_log("  [*] MouseEvent -> buttons[get]", 0); return 0 } },
  fromElement: { get() { v_console_log("  [*] MouseEvent -> fromElement[get]", {}); return {} } },
  toElement: { get() { v_console_log("  [*] MouseEvent -> toElement[get]", {}); return {} } },
  [Symbol.toStringTag]: { value: "MouseEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  OPENED: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  HEADERS_RECEIVED: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  LOADING: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
  DONE: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
  [Symbol.toStringTag]: { value: "XMLHttpRequest", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(IDBOpenDBRequest.prototype, {
  onupgradeneeded: { set() { v_console_log("  [*] IDBOpenDBRequest -> onupgradeneeded[set]", [].slice.call(arguments)); } },
  [Symbol.toStringTag]: { value: "IDBOpenDBRequest", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(FocusEvent.prototype, {
  relatedTarget: { get() { v_console_log("  [*] FocusEvent -> relatedTarget[get]", {}); return {} } },
  [Symbol.toStringTag]: { value: "FocusEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(KeyboardEvent.prototype, {
  key: { get() { v_console_log("  [*] KeyboardEvent -> key[get]", "F12"); return "F12" } },
  location: { get() { v_console_log("  [*] KeyboardEvent -> location[get]", 0); return 0 } },
  ctrlKey: { get() { v_console_log("  [*] KeyboardEvent -> ctrlKey[get]", false); return false } },
  shiftKey: { get() { v_console_log("  [*] KeyboardEvent -> shiftKey[get]", false); return false } },
  altKey: { get() { v_console_log("  [*] KeyboardEvent -> altKey[get]", false); return false } },
  metaKey: { get() { v_console_log("  [*] KeyboardEvent -> metaKey[get]", false); return false } },
  repeat: { get() { v_console_log("  [*] KeyboardEvent -> repeat[get]", false); return false } },
  keyCode: { get() { v_console_log("  [*] KeyboardEvent -> keyCode[get]", 123); return 123 } },
  DOM_KEY_LOCATION_STANDARD: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  DOM_KEY_LOCATION_LEFT: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  DOM_KEY_LOCATION_RIGHT: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  DOM_KEY_LOCATION_NUMPAD: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
  [Symbol.toStringTag]: { value: "KeyboardEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLElement.prototype, {
  onmouseenter: { get() { v_console_log("  [*] HTMLElement -> onmouseenter[get]", {}); return {} } },
  onmouseleave: { get() { v_console_log("  [*] HTMLElement -> onmouseleave[get]", {}); return {} } },
  contentEditable: { get() { v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit"); return "inherit" } },
  style: { get() { v_console_log("  [*] HTMLElement -> style[get]", this.v_style); return this.v_style } },
  dataset: { get() { v_console_log("  [*] HTMLElement -> dataset[get]", {}); return {} } },
  offsetParent: { get() { v_console_log("  [*] HTMLElement -> offsetParent[get]", {}); return {} } },
  innerText: { get() { v_console_log("  [*] HTMLElement -> innerText[get]", "查询"); return "查询" } },
  onmouseenter: { "enumerable": true, "configurable": true },
  onmouseleave: { "enumerable": true, "configurable": true },
  [Symbol.toStringTag]: { value: "HTMLElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLInputElement.prototype, {
  type: { get() { v_console_log("  [*] HTMLInputElement -> type[get]", "text"); return "text" } },
  value: { get() { v_console_log("  [*] HTMLInputElement -> value[get]", "全部"); return "全部" } },
  defaultValue: { get() { v_console_log("  [*] HTMLInputElement -> defaultValue[get]", "全部"); return "全部" } },
  [Symbol.toStringTag]: { value: "HTMLInputElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLIFrameElement.prototype, {
  srcdoc: { set() { v_console_log("  [*] HTMLIFrameElement -> srcdoc[set]", [].slice.call(arguments)); } },
  contentWindow: { get() { v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {}); return {} } },
  [Symbol.toStringTag]: { value: "HTMLIFrameElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLAnchorElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: { get() { v_console_log("  [*] HTMLImageElement -> src[get]", "https://savatar.pddpic.com/a/FGlwlerH6c-348354c4/UaNNQgNjNBl1Tqy7Ratj54a0MYKovKpqS3HQnXVkRXpBD7W71wLit_9H5pAG53o5cdpQU_X0X8_0qFgqUertFKhaVREqPNiUlu8R62xjQyZmCrvNofDeFgDmDPT3009xkecaefjUBAnw_w1h8kNpNQ"); return "https://savatar.pddpic.com/a/FGlwlerH6c-348354c4/UaNNQgNjNBl1Tqy7Ratj54a0MYKovKpqS3HQnXVkRXpBD7W71wLit_9H5pAG53o5cdpQU_X0X8_0qFgqUertFKhaVREqPNiUlu8R62xjQyZmCrvNofDeFgDmDPT3009xkecaefjUBAnw_w1h8kNpNQ" } },
  complete: { get() { v_console_log("  [*] HTMLImageElement -> complete[get]", true); return true } },
  [Symbol.toStringTag]: { value: "HTMLImageElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLScriptElement.prototype, {
  src: { get() { v_console_log("  [*] HTMLScriptElement -> src[get]", "https://mms-static.pddpic.com/main/_next/static/7i7Rbr-kpjosmeHv6knQY/_ssgManifest.js"); return "https://mms-static.pddpic.com/main/_next/static/7i7Rbr-kpjosmeHv6knQY/_ssgManifest.js" } },
  text: { get() { v_console_log("  [*] HTMLScriptElement -> text[get]", "{\"props\":{\"pageProps\":{\"coreData\":{\"extra\":{\"mallId\":619231161,\"userId\":164916361,\"query\":{\"msfrom\":\"mms_sidenav\"}},\"data\":{\"manifest\":{\"static/css/0.dc254586d.chunk.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/0.dc254586d.chunk.css\",\"static/js/0.adcff17d.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/0.adcff17d.chunk.v20250421175052_52af6211.js\",\"static/css/1.eaf8440e0.chunk.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/1.eaf8440e0.chunk.css\",\"static/js/1.7b6adcfc.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/1.7b6adcfc.chunk.v20250421175052_52af6211.js\",\"home.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/home.c9c7f2697.chunk.css\",\"home.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/home.94e0e045.chunk.v20250421175052_52af6211.js\",\"main.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/main.76d110fdd.css\",\"main.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/main.5cb4faaf.v20250421175052_52af6211.js\",\"vendors~home.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/vendors~home.2c84f63a3.chunk.css\",\"vendors~home.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/vendors~home.bd1dec3c.chunk.v20250421175052_52af6211.js\",\"static/js/5.3a39fdc8.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/5.3a39fdc8.chunk.v20250421175052_52af6211.js\",\"static/js/6.29f55ef7.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/6.29f55ef7.chunk.v20250421175052_52af6211.js\",\"static/js/7.b63a8826.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/7.b63a8826.chunk.v20250421175052_52af6211.js\",\"static/css/8.c866079d3.chunk.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/8.c866079d3.chunk.css\",\"static/js/8.4da865e0.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/8.4da865e0.chunk.v20250421175052_52af6211.js\",\"static/js/9.bd8923ca.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/9.bd8923ca.chunk.v20250421175052_52af6211.js\",\"index.html\":\"https://mms-static.pddpic.com/mms-chat/index.html\",\"static/media/advanced-shunt-bg.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/advanced-shunt-bg.cec02a28.png\",\"static/media/style.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/urge-exmaple_2.ea87281f.png\",\"static/media/custom-order-example.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/custom-order-example.6deda24a.png\",\"static/media/index.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/urge-step-4.c27d59ed.png\",\"static/media/PerformanceRow.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/third.9f0ed8cb.png\",\"static/media/forbiddenWord.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/forbidden-word-expample.969b583c.gif\",\"static/media/UrgeOrderData.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/help-buy-arrow.55b6bf1f.png\",\"static/media/qrcode-avator.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/qrcode-avator.b7ed5db3.png\",\"static/media/qrcode-banner.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/qrcode-banner.c902d9ee.png\"}},\"status\":{\"manifest\":1},\"isABTestObj\":{}},\"page\":\"Content\",\"asPath\":\"/mms-chat/search\"},\"_location\":{\"pathname\":\"/mms-chat/search\"},\"abtest\":{\"success\":true,\"vids\":[620635],\"vids_str\":\"620635\",\"result_json\":\"{\\\"tool_ui_promotion_drop_precreate\\\":\\\"B\\\",\\\"url_pattern\\\":\\\"^/tool/promotion\\\"}\",\"result_map\":{\"tool_ui_promotion_drop_precreate\":\"B\",\"url_pattern\":\"^/tool/promotion\"},\"version_info\":[{\"id\":620635,\"params\":\"{\\\"tool_ui_promotion_drop_precreate\\\":\\\"B\\\",\\\"url_pattern\\\":\\\"^/tool/promotion\\\"}\",\"status\":1}]},\"user\":{\"id\":164916361,\"mallId\":619231161},\"layoutConfig\":{\"oldNoNav\":[\"^/act-bidding/sign-success\",\"^/act/act_bidding_new$\",\"^/act/act_bidding_new/$\",\"^/act/act_bidding_new/adjust\",\"^/act/act_bidding_new/quick_bidding\",\"^/act/act_bidding_new/quick_bidding_sign\",\"^/act/act_bidding_new/success_copy\",\"^/act/act_bidding_sign$\",\"^/act/act_call_bidding$\",\"^/act/act_call_bidding/adjust\",\"^/act/act_call_bidding/quick_bidding\",\"^/act/act_call_bidding/quick_bidding_sign\",\"^/act/act_call_bidding/success_copy\",\"^/act/batch/choose_goods\",\"^/act/choose_goods\",\"^/act/mall_sign\",\"^/act/message_set\",\"^/act/other/news\",\"^/act/other/news_detail\",\"^/act/promotion/anniversary/home\",\"^/act/promotion/anniversary/sign\",\"^/act/promotion/anniversary/success\",\"^/act/sign$\",\"^/aftersales/aftersale_detail$\",\"^/aftersales/aftersale_list/batch_export$\",\"^/chat-service/hotFaq$\",\"^/creative/coupon/create$\",\"^/exp/activity\",\"^/express/cloudPrintPromotion$\",\"^/express/newCloudPrintPromotion$\",\"^/finance/account/bind-card$\",\"^/finance/account/mms-bind-card$\",\"^/finance/alipay$\",\"^/finance/cashier$\",\"^/finance/recharge/act-deposit$\",\"^/finance/recharge/mall-deposit$\",\"^/finance/wechatpay$\",\"^/goods-edit/category$\",\"^/goods-edit/goods_add/brand/result$\",\"^/goods-edit/goods_add/brand_feedback$\",\"^/goods-edit/goods_add/index$\",\"^/goods-tool/batch-delivery/create\",\"^/goods-tool/presale/create\",\"^/goods-tool/question/batch_edit\",\"^/goods-tool/question/edit\",\"^/goods-tool/remote-delivery\",\"^/goods-tool/remote-delivery/allowance\",\"^/goods/batch_change_sku$\",\"^/goods/batch_set_size$\",\"^/goods/goods_add/brand_feedback$\",\"^/goods/goods_decoration$\",\"^/goods/goods_list/batch_change$\",\"^/goods/goods_list/batch_restock\",\"^/goods/goods_list/problems$\",\"^/goods/goods_list/problems_success$\",\"^/goods/goods_list/spring_festival_batch_change_price$\",\"^/goods/question/batch_edit$\",\"^/goods/question/edit$\",\"^/goods/sales_inherit/onsale$\",\"^/goods/size$\",\"^/goods/tools/remote_delivery\",\"^/goods/tools/water_marker/marked_goods$\",\"^/guide/best-selling$\",\"^/guide/conversion$\",\"^/guide/publish-product$\",\"^/guide/traffic-guidance$\",\"^/invoice/history$\",\"^/invoice/opening$\",\"^/invoice/renew$\",\"^/jinbao/activitypromotion\",\"^/jinbao/openMallSuccess\",\"^/jinbao/tenBillion\",\"^/jinbao/zsactivity/enroll\",\"^/kit/freebie/create$\",\"^/kit/freebie/create-freebie$\",\"^/kit/goods-tool/freebie/create$\",\"^/kit/goods-tool/freebie/create-freebie$\",\"^/light-app\",\"^/logistics/cloudPrintProtocol$\",\"^/mallcenter/bindWechat\",\"^/mallcenter/changeAccountInfo/accountSetting\",\"^/mallcenter/close/finance\",\"^/mallcenter/identification\",\"^/mallcenter/info/entry/(?!auditResult)(?!promise)\",\"^/mallcenter/info/shopTags/step\\\\d$\",\"^/mallcenter/info/topspeed_enter/(?!auditResult)\",\"^/mallcenter/promotion\",\"^/mallcenter/salesInherit\",\"^/mallcenter/uploadExcell\",\"^/mallcenter/vipBrand\",\"^/mallcenter/welfare\",\"^/mms-chat/DailyOrderLoss$\",\"^/orders/aftersale/aftersale_detail\",\"^/orders/detail\",\"^/orders/nationalSubsidy/detail$\",\"^/other/404\",\"^/other/informcenter\",\"^/other/latestNewsDetail\",\"^/other/latestNewsList\",\"^/other/report\",\"^/other/reportSuccess\",\"^/pg/delay_punish\",\"^/pg/inbox-reply\",\"^/pg/knock$\",\"^/pg/letter_of_commitment$\",\"^/service-market/activity-equity$\",\"^/service-market/invoice-pay$\",\"^/supplier/instead/create$\",\"^/supplier/instead/edit$\",\"^/supplier/preorder/create$\",\"^/supplier/preorder/detail\",\"^/supplier/wholesale/create$\",\"^/supplier/wholesale/edit$\",\"^/sycm/ocean\",\"^/tool/activity/subsidy/rule$\",\"^/tool/cashback/create$\",\"^/tool/cashback/create/new$\",\"^/tool/freebie/create$\",\"^/tool/freebie/create-freebie$\",\"^/tool/goods-tool/freebie/create$\",\"^/tool/goods-tool/freebie/create-freebie$\",\"^/tool/goods_coupon/create$\",\"^/tool/mall_coupon/create$\",\"^/tool/sms/settings/market$\",\"^/tool/sms/settings/multi$\",\"^/tool/sms/settings/remind$\",\"^/tool/sms/settings/seckill$\",\"^/tool/sms/taskCertain$\",\"^/tool/sms/winningRecord$\",\"^orders/protocol\"],\"noNavRoutes\":[\"^/act-bidding/batch-adjust$\",\"^/act-bidding/confirm-register\",\"^/act-bidding/market-bid-again\",\"^/act-bidding/market-sign$\",\"^/act-bidding/market-sign-adjust$\",\"^/act-bidding/multi-resource-bid-enroll$\",\"^/act-bidding/platform-purchase/sign$\",\"^/act-bidding/reference-message$\",\"^/act-bidding/requirement$\",\"^/act-bidding/sign$\",\"^/act-bidding/sign-success\",\"^/act-bidding/ten-billion-region-bid-enroll$\",\"^/act-bidding/time-limit-bid-enroll$\",\"^/act/act_bidding_new$\",\"^/act/act_bidding_new/$\",\"^/act/act_bidding_new/adjust\",\"^/act/act_bidding_new/market_sign\",\"^/act/act_bidding_new/price-adjust\",\"^/act/act_bidding_new/quick_bidding\",\"^/act/act_bidding_new/quick_bidding_sign\",\"^/act/act_bidding_new/sign$\",\"^/act/act_bidding_new/success_copy\",\"^/act/act_bidding_sign$\",\"^/act/act_call_bidding$\",\"^/act/act_call_bidding/adjust\",\"^/act/act_call_bidding/quick_bidding\",\"^/act/act_call_bidding/quick_bidding_sign\",\"^/act/act_call_bidding/success_copy\",\"^/act/act_material/create$\",\"^/act/act_material/detail$\",\"^/act/act_material/edit$\",\"^/act/act_material_list$\",\"^/act/act_platform_purchase/sign$\",\"^/act/auto_adjust_price$\",\"^/act/batch-enroll-all$\",\"^/act/batch/choose_goods\",\"^/act/batch_adjust$\",\"^/act/batch_adjust_excel$\",\"^/act/batch_handle$\",\"^/act/choose_goods\",\"^/act/coupon_sign_batch\",\"^/act/enroll/newPromotionEnroll$\",\"^/act/enroll/promotionEnroll$\",\"^/act/flow-protection$\",\"^/act/goods_manage/result$\",\"^/act/goods_price/confirm\",\"^/act/goods_price/confirm$\",\"^/act/limit_time_sign$\",\"^/act/mall_sign\",\"^/act/message_set\",\"^/act/multi-act-enroll$\",\"^/act/multi-quick-channel$\",\"^/act/other/all_enroll_detail$\",\"^/act/other/news\",\"^/act/other/news_detail\",\"^/act/other/reduction_detail$\",\"^/act/promotion/anniversary/home\",\"^/act/promotion/anniversary/sign\",\"^/act/promotion/anniversary/success\",\"^/act/quick_channel$\",\"^/act/quick_enroll/list\",\"^/act/sign$\",\"^/act/sign/success_batch\",\"^/act/sign_success\",\"^/act/tool_act/enroll$\",\"^/aftersales/aftersale_detail$\",\"^/aftersales/aftersale_list/batch_export$\",\"^/aftersales/customer_complain_appeal/close$\",\"^/aftersales/good_people$\",\"^/aftersales/order_appeal$\",\"^/aftersales/platform_inquiry_goods$\",\"^/aftersales/platform_inquiry_goods/detail$\",\"^/aftersales/smart_express/black/add$\",\"^/aftersales/work_order/detail$\",\"^/aftersales/work_order/tododetail$\",\"^/brand-decoration/\\\\d+/home-editor/\\\\d+$\",\"^/brand/bigDiscount/add$\",\"^/brand/bigDiscount/detail/\",\"^/brand/billion/query$\",\"^/brand/introduction$\",\"^/chat-service/catalog/add$\",\"^/chat-service/hotFaq$\",\"^/chat-service/robot/apply$\",\"^/chat-service/robot/newMallTask$\",\"^/chat-service/robot/setting\",\"^/creative/coupon/create$\",\"^/decoration/home-editor\",\"^/decoration/simple-editor\",\"^/decoration/simple-template/list$\",\"^/decoration/topic-editor\",\"^/exp/activity\",\"^/express/cloudPrintPromotion$\",\"^/express/hk/account-info$\",\"^/express/hk/branch_line/edit$\",\"^/express/hk/line/edit$\",\"^/express/hk/no-permission$\",\"^/express/newCloudPrintPromotion$\",\"^/express/win/package\",\"^/finance/account/bind-card$\",\"^/finance/account/mms-bind-card$\",\"^/finance/alipay$\",\"^/finance/cashier$\",\"^/finance/recharge/act-deposit$\",\"^/finance/recharge/mall-deposit$\",\"^/finance/wechatpay$\",\"^/goods-edit/category$\",\"^/goods-edit/goods_add/brand/result$\",\"^/goods-edit/goods_add/brand_feedback$\",\"^/goods-edit/goods_add/index$\",\"^/goods-tool/area-distribution$\",\"^/goods-tool/area-distribution-set$\",\"^/goods-tool/batch-delivery/create\",\"^/goods-tool/group-sale/decoration$\",\"^/goods-tool/optimize-landing\",\"^/goods-tool/pdd-select/publish-goods$\",\"^/goods-tool/platform-recruitment-products\",\"^/goods-tool/presale/create\",\"^/goods-tool/preview-mobile-page$\",\"^/goods-tool/quality-inspection-certification-3c$\",\"^/goods-tool/question/batch_edit\",\"^/goods-tool/question/edit\",\"^/goods-tool/remote-delivery\",\"^/goods-tool/remote-delivery/allowance\",\"^/goods-tool/temu-goods/category$\",\"^/goods-tool/temu-goods/product-edit$\",\"^/goods-tool/temu-goods/result$\",\"^/goods/batch_change_sku$\",\"^/goods/batch_decoration\",\"^/goods/batch_delivery/create\",\"^/goods/batch_set_brand$\",\"^/goods/batch_set_size$\",\"^/goods/business_invitation/style_shop$\",\"^/goods/category$\",\"^/goods/common_batch_edit$\",\"^/goods/evaluation/activity/create$\",\"^/goods/evaluation_cash/activity/create$\",\"^/goods/evaluation_cash/activity/create-for-ranking$\",\"^/goods/goods_add/brand/result$\",\"^/goods/goods_add/brand_feedback$\",\"^/goods/goods_add/index$\",\"^/goods/goods_add/special_brand$\",\"^/goods/goods_add/success$\",\"^/goods/goods_decoration\",\"^/goods/goods_decoration$\",\"^/goods/goods_draft_win$\",\"^/goods/goods_list/batch_change\",\"^/goods/goods_list/batch_change$\",\"^/goods/goods_list/batch_change_price\",\"^/goods/goods_list/batch_restock\",\"^/goods/goods_list/batch_set_property$\",\"^/goods/goods_list/chance\",\"^/goods/goods_list/chance/hot_keyword$\",\"^/goods/goods_list/goods_online/optimize_evaluation$\",\"^/goods/goods_list/goods_online/unmatched_rule_list$\",\"^/goods/goods_list/low_price_manage\",\"^/goods/goods_list/problems$\",\"^/goods/goods_list/problems_success$\",\"^/goods/goods_list/specification_sold_out\",\"^/goods/goods_list/spring_festival_batch_change_price$\",\"^/goods/goods_list/super_stars_goods$\",\"^/goods/goods_list_win$\",\"^/goods/goods_record_win$\",\"^/goods/goods_standard/apply\",\"^/goods/goods_standard/record\",\"^/goods/question/batch_edit$\",\"^/goods/question/edit$\",\"^/goods/sales_inherit/onsale$\",\"^/goods/size$\",\"^/goods/tools/remote_delivery\",\"^/goods/tools/water_marker/marked_goods$\",\"^/guide/best-selling$\",\"^/guide/conversion$\",\"^/guide/publish-product$\",\"^/guide/traffic-guidance$\",\"^/invoice/agreement$\",\"^/invoice/center/(batchInvoicing)$\",\"^/invoice/ddmc\",\"^/invoice/history$\",\"^/invoice/manual/batchInvoicing$\",\"^/invoice/opening$\",\"^/invoice/renew$\",\"^/jinbao/activitypromotion\",\"^/jinbao/distribution/notOpenLand$\",\"^/jinbao/openMallSuccess\",\"^/jinbao/tenBillion\",\"^/jinbao/zsactivity/enroll\",\"^/kit/baiyi-rates$\",\"^/kit/bonus-for-fans/create$\",\"^/kit/brand-price-change\",\"^/kit/bundle\",\"^/kit/combo-offer/result\",\"^/kit/evaluation/create$\",\"^/kit/evaluation/create-for-ranking$\",\"^/kit/freebie/create$\",\"^/kit/freebie/create-freebie$\",\"^/kit/get-one-free/add-goods$\",\"^/kit/get-one-free/result$\",\"^/kit/goods-follow-price\",\"^/kit/goods-tool/freebie/create$\",\"^/kit/goods-tool/freebie/create-freebie$\",\"^/kit/incubator/one-key-optimization$\",\"^/kit/inflation-coupon/create$\",\"^/kit/inflation-coupon/create/result\",\"^/kit/multiOrderDiscountArea/create$\",\"^/kit/new-offer/create$\",\"^/kit/new-offer/create/result$\",\"^/kit/new/create$\",\"^/kit/new/create/result$\",\"^/kit/pinxiaoquan/create$\",\"^/kit/pinxiaoquan/create/result$\",\"^/kit/retain-order/create$\",\"^/kit/retain-order/edit$\",\"^/kit/visit-task/create$\",\"^/kit/volume-discount/create$\",\"^/light-app\",\"^/live/data-center$\",\"^/live/data-detail$\",\"^/live/guide-cps$\",\"^/live/guide-obs$\",\"^/live/invite-manage$\",\"^/live/obs-introduce$\",\"^/live/pearls-protocol-sign$\",\"^/live/sell-goods-anchor-rank$\",\"^/logistics/cloudPrintDownload$\",\"^/logistics/cloudPrintProtocol$\",\"^/logistics/downloads$\",\"^/logistics/dragon-tiger-list$\",\"^/logistics/draw-sms$\",\"^/logistics/editor\",\"^/logistics/editor$\",\"^/logistics/editorlists\",\"^/logistics/editorlists$\",\"^/mallcenter/1111/promotion$\",\"^/mallcenter/\\\\d+/promotion$\",\"^/mallcenter/ability/exam\",\"^/mallcenter/bindWechat\",\"^/mallcenter/changeAccountInfo/accountSetting\",\"^/mallcenter/changeAccountInfo/findAccountName\",\"^/mallcenter/changeAccountInfo/findMallName$\",\"^/mallcenter/changeAccountInfo/forgetMobile\",\"^/mallcenter/changeAccountInfo/phoneUnbind\",\"^/mallcenter/changeAccountInfo/phoneValidate\",\"^/mallcenter/changeAccountInfo/weakPwdEdit\",\"^/mallcenter/close/finance\",\"^/mallcenter/group-chat$\",\"^/mallcenter/identification\",\"^/mallcenter/info/entry/(?!auditResult)\",\"^/mallcenter/info/entry/(?!auditResult)(?!promise)\",\"^/mallcenter/info/entry/enterprise\",\"^/mallcenter/info/entry/index\",\"^/mallcenter/info/entry/individ$\",\"^/mallcenter/info/entry/oversea\",\"^/mallcenter/info/mainChange$\",\"^/mallcenter/info/mainChange/apply$\",\"^/mallcenter/info/mainChange/check$\",\"^/mallcenter/info/mainChange/verify$\",\"^/mallcenter/info/shopTags/step\\\\d$\",\"^/mallcenter/info/topspeed_enter/(?!auditResult)\",\"^/mallcenter/merchant-poster$\",\"^/mallcenter/promotion\",\"^/mallcenter/protocol\",\"^/mallcenter/relativeMainChange\",\"^/mallcenter/resetPwd\",\"^/mallcenter/salesInherit\",\"^/mallcenter/salesPromotion\",\"^/mallcenter/simulate-district$\",\"^/mallcenter/stockTaking/plan\",\"^/mallcenter/storeManagement/createStore\",\"^/mallcenter/storeManagement/editStore\",\"^/mallcenter/survey$\",\"^/mallcenter/uploadExcell\",\"^/mallcenter/vipBrand\",\"^/mallcenter/welfare\",\"^/merchant-unify\",\"^/mms-chat/DailyOrderLoss$\",\"^/mms-marketing-mixin/batch-adjust-price$\",\"^/mms-marketing-mixin/quick-get-orders$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/add$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/edit$\",\"^/orders/activityVerify$\",\"^/orders/aftersale/aftersale_detail\",\"^/orders/appeal-false$\",\"^/orders/appeals/aftersale/refund-only$\",\"^/orders/detail\",\"^/orders/goods/qualityReport\",\"^/orders/goods/snapshot$\",\"^/orders/merchantCompensationRecovery$\",\"^/orders/nationalSubsidy/detail$\",\"^/orders/remoteAreasFreeShip$\",\"^/orders/remoteAreasFreeShip/fail\",\"^/orders/remoteAreasFreeShip/success$\",\"^/orders/remoteAreasLargeMailRule$\",\"^/orders/remoteAreasOrderSubsidy$\",\"^/orders/temu/act/similarGoodsApply$\",\"^/orders/temu/detail$\",\"^/orders/temu/springFestivalInBusiness/applyGoods$\",\"^/orders/thirdPartyDelivery$\",\"^/orders/win$\",\"^/orders/win/list$\",\"^/orders/win/merge$\",\"^/orders/win/temu/trusteeship$\",\"^/orders/xjLocalWarehouse$\",\"^/other/404\",\"^/other/bbs/offline$\",\"^/other/colleage/home\",\"^/other/colleage/list\",\"^/other/college/center\",\"^/other/college/favor\",\"^/other/college/learn\",\"^/other/college/live\",\"^/other/college/living\",\"^/other/download_app\",\"^/other/downloadapp\",\"^/other/help/detail\",\"^/other/helpcenter\",\"^/other/informcenter\",\"^/other/latestNewsDetail\",\"^/other/latestNewsList\",\"^/other/mail/\",\"^/other/oneredirect$\",\"^/other/overseas$\",\"^/other/questionnaire\",\"^/other/redirect\",\"^/other/reporExamine\",\"^/other/report\",\"^/other/reportCustomsService\",\"^/other/reportSuccess\",\"^/other/rule\",\"^/other/temu/rule$\",\"^/other/tradeIn/protocol$\",\"^/pg/delay_punish\",\"^/pg/examination$\",\"^/pg/inbox-reply\",\"^/pg/knock$\",\"^/pg/letter_of_commitment$\",\"^/service-market/activity-equity$\",\"^/service-market/activity-rookie$\",\"^/service-market/activity-rookie-cus$\",\"^/service-market/activity-rookie/ticket$\",\"^/service-market/auth$\",\"^/service-market/chat/order-list$\",\"^/service-market/invoice-pay$\",\"^/static\",\"^/supplier-shop/403\",\"^/supplier-shop/entry\",\"^/supplier-shop/entry/detail\",\"^/supplier-shop/introduction-page\",\"^/supplier-shop/settle-in\",\"^/supplier/batchUpload$\",\"^/supplier/batchUpload/result$\",\"^/supplier/instead/create$\",\"^/supplier/instead/edit$\",\"^/supplier/preorder/create$\",\"^/supplier/preorder/detail\",\"^/supplier/wholesale/create$\",\"^/supplier/wholesale/edit$\",\"^/supplier/wholesale/result$\",\"^/sycm/ocean\",\"^/tool/activity/fiveAnniversary\",\"^/tool/activity/subsidy/rule$\",\"^/tool/activity/valentine\",\"^/tool/bonus-for-fans/create$\",\"^/tool/bundle/create$\",\"^/tool/bundle/create/select-sku$\",\"^/tool/cashback/618\",\"^/tool/cashback/721\",\"^/tool/cashback/create$\",\"^/tool/cashback/create/new$\",\"^/tool/coupon/create$\",\"^/tool/coupon/create/result$\",\"^/tool/coupon/membership/create$\",\"^/tool/cross-mall-cashback/create$\",\"^/tool/cross-mall-cashback/enRoll$\",\"^/tool/cross-mall-cashback/primaryEnRoll$\",\"^/tool/disqualified\",\"^/tool/free\",\"^/tool/freebie/create$\",\"^/tool/freebie/create-freebie$\",\"^/tool/full-amount-reduce/create$\",\"^/tool/full-amount-reduce/result$\",\"^/tool/get-one-free/add-goods$\",\"^/tool/get-one-free/result$\",\"^/tool/goods-tool/freebie/create$\",\"^/tool/goods-tool/freebie/create-freebie$\",\"^/tool/goods_coupon/create$\",\"^/tool/incubator/one-key-optimization$\",\"^/tool/mall_coupon/create$\",\"^/tool/multi-piece-discount/create$\",\"^/tool/multi-piece-discount/result$\",\"^/tool/multiOrderDiscountArea/create$\",\"^/tool/new/create$\",\"^/tool/payAfterUse\",\"^/tool/preferential\",\"^/tool/promotion/create\",\"^/tool/promotion/create/lead-home-page\",\"^/tool/promotion/create/quickSetup\",\"^/tool/promotion/create/restart\",\"^/tool/promotion/modify$\",\"^/tool/sms/act/adLottery$\",\"^/tool/sms/act/newRemind/dataReport$\",\"^/tool/sms/act/newRemind/index$\",\"^/tool/sms/new-year-subsidies\",\"^/tool/sms/settings/market$\",\"^/tool/sms/settings/multi$\",\"^/tool/sms/settings/remind$\",\"^/tool/sms/settings/remind-union\",\"^/tool/sms/settings/seckill$\",\"^/tool/sms/taskCertain$\",\"^/tool/sms/winningRecord$\",\"^/tool/surprise-coupon/create$\",\"^/tool/surprise-coupon/result$\",\"^/tool/visit-task/create$\",\"^/wxmp-decoration/home-editor$\",\"^orders/protocol\"],\"noHeaderRoutes\":[\"^/brand-decoration/\\\\d+/home-editor/\\\\d+$\",\"^/brand/introduction$\",\"^/chat-service/robot/setting\",\"^/decoration/home-editor\",\"^/decoration/simple-editor\",\"^/decoration/simple-template/list$\",\"^/decoration/topic-editor\",\"^/express/hk/account-info$\",\"^/express/hk/no-permission$\",\"^/express/win/package\",\"^/goods-tool/group-sale/decoration$\",\"^/goods-tool/preview-mobile-page$\",\"^/goods-tool/quality-inspection-certification-3c$\",\"^/goods/batch_decoration\",\"^/goods/business_invitation/style_shop$\",\"^/goods/goods_decoration\",\"^/goods/goods_draft_win$\",\"^/goods/goods_list_win$\",\"^/goods/goods_record_win$\",\"^/invoice/ddmc\",\"^/live/obs-introduce$\",\"^/live/sell-goods-anchor-rank$\",\"^/logistics/editor\",\"^/logistics/editorlists\",\"^/mallcenter/ability/exam\",\"^/mallcenter/changeAccountInfo/findAccountName\",\"^/mallcenter/changeAccountInfo/forgetMobile\",\"^/mallcenter/changeAccountInfo/phoneUnbind\",\"^/mallcenter/changeAccountInfo/phoneValidate\",\"^/mallcenter/changeAccountInfo/weakPwdEdit\",\"^/mallcenter/info/entry/(?!auditResult)\",\"^/mallcenter/info/entry/enterprise\",\"^/mallcenter/info/entry/index\",\"^/mallcenter/info/entry/individ$\",\"^/mallcenter/info/entry/oversea\",\"^/mallcenter/info/mainChange$\",\"^/mallcenter/info/mainChange/apply$\",\"^/mallcenter/info/mainChange/check$\",\"^/mallcenter/info/mainChange/verify$\",\"^/mallcenter/protocol\",\"^/mallcenter/resetPwd\",\"^/merchant-unify\",\"^/orders/win$\",\"^/orders/win/list$\",\"^/orders/win/merge$\",\"^/orders/win/temu/trusteeship$\",\"^/other/colleage/home\",\"^/other/colleage/list\",\"^/other/college/center\",\"^/other/college/favor\",\"^/other/college/learn\",\"^/other/college/live\",\"^/other/college/living\",\"^/other/download_app\",\"^/other/help/detail\",\"^/other/oneredirect$\",\"^/other/overseas$\",\"^/other/questionnaire\",\"^/other/redirect\",\"^/other/reporExamine\",\"^/other/reportCustomsService\",\"^/other/temu/rule$\",\"^/service-market/activity-rookie$\",\"^/service-market/activity-rookie/ticket$\",\"^/service-market/auth$\",\"^/service-market/chat/order-list$\",\"^/static\",\"^/wxmp-decoration/home-editor$\"],\"fullWidthRoutes\":[\"^/act-bidding/batch-adjust$\",\"^/act-bidding/confirm-register\",\"^/act-bidding/market-bid-again\",\"^/act-bidding/market-sign$\",\"^/act-bidding/market-sign-adjust$\",\"^/act-bidding/multi-resource-bid-enroll$\",\"^/act-bidding/sign$\",\"^/act-bidding/ten-billion-region-bid-enroll$\",\"^/act-bidding/time-limit-bid-enroll$\",\"^/act/act_bidding_new/market_sign\",\"^/act/act_bidding_new/price-adjust\",\"^/act/act_bidding_new/sign$\",\"^/act/act_material/create$\",\"^/act/act_material/detail$\",\"^/act/act_material/edit$\",\"^/act/act_material_list$\",\"^/act/batch_adjust_excel$\",\"^/act/coupon_sign_batch\",\"^/act/enroll/newPromotionEnroll$\",\"^/act/enroll/promotionEnroll$\",\"^/act/goods_price/confirm$\",\"^/act/other/all_enroll_detail$\",\"^/act/other/reduction_detail$\",\"^/act/tool_act/enroll$\",\"^/brand-decoration/\\\\d+/home-editor/\\\\d+$\",\"^/brand/introduction$\",\"^/chat-service/catalog/add$\",\"^/chat-service/robot/apply$\",\"^/chat-service/robot/newMallTask$\",\"^/chat-service/robot/setting\",\"^/decoration/home-editor\",\"^/decoration/simple-editor\",\"^/decoration/simple-template/list$\",\"^/decoration/topic-editor\",\"^/express/hk/account-info$\",\"^/express/hk/no-permission$\",\"^/express/win/package\",\"^/goods-tool/group-sale/decoration$\",\"^/goods-tool/preview-mobile-page$\",\"^/goods-tool/quality-inspection-certification-3c$\",\"^/goods/batch_decoration\",\"^/goods/batch_delivery/create\",\"^/goods/business_invitation/style_shop$\",\"^/goods/goods_decoration\",\"^/goods/goods_draft_win$\",\"^/goods/goods_list/chance\",\"^/goods/goods_list_win$\",\"^/goods/goods_record_win$\",\"^/invoice/agreement$\",\"^/invoice/center/(batchInvoicing)$\",\"^/invoice/ddmc\",\"^/invoice/manual/batchInvoicing$\",\"^/jinbao/distribution/notOpenLand$\",\"^/live/data-center$\",\"^/live/guide-obs$\",\"^/live/invite-manage$\",\"^/live/obs-introduce$\",\"^/live/pearls-protocol-sign$\",\"^/live/sell-goods-anchor-rank$\",\"^/logistics/cloudPrintDownload$\",\"^/logistics/downloads$\",\"^/logistics/dragon-tiger-list$\",\"^/logistics/draw-sms$\",\"^/logistics/editor\",\"^/logistics/editor$\",\"^/logistics/editorlists\",\"^/logistics/editorlists$\",\"^/mallcenter/1111/promotion$\",\"^/mallcenter/\\\\d+/promotion$\",\"^/mallcenter/ability/exam\",\"^/mallcenter/changeAccountInfo/findAccountName\",\"^/mallcenter/changeAccountInfo/forgetMobile\",\"^/mallcenter/changeAccountInfo/phoneUnbind\",\"^/mallcenter/changeAccountInfo/phoneValidate\",\"^/mallcenter/changeAccountInfo/weakPwdEdit\",\"^/mallcenter/group-chat$\",\"^/mallcenter/info/entry/(?!auditResult)\",\"^/mallcenter/info/entry/enterprise\",\"^/mallcenter/info/entry/index\",\"^/mallcenter/info/entry/individ$\",\"^/mallcenter/info/entry/oversea\",\"^/mallcenter/info/mainChange$\",\"^/mallcenter/info/mainChange/apply$\",\"^/mallcenter/info/mainChange/check$\",\"^/mallcenter/info/mainChange/verify$\",\"^/mallcenter/merchant-poster$\",\"^/mallcenter/protocol\",\"^/mallcenter/resetPwd\",\"^/mallcenter/salesPromotion\",\"^/mallcenter/simulate-district$\",\"^/mallcenter/stockTaking/plan\",\"^/merchant-unify\",\"^/orders/goods/qualityReport\",\"^/orders/goods/snapshot$\",\"^/orders/temu/detail$\",\"^/orders/win$\",\"^/orders/win/list$\",\"^/orders/win/merge$\",\"^/orders/win/temu/trusteeship$\",\"^/other/colleage/home\",\"^/other/colleage/list\",\"^/other/college/center\",\"^/other/college/favor\",\"^/other/college/learn\",\"^/other/college/live\",\"^/other/college/living\",\"^/other/download_app\",\"^/other/downloadapp\",\"^/other/help/detail\",\"^/other/oneredirect$\",\"^/other/overseas$\",\"^/other/questionnaire\",\"^/other/redirect\",\"^/other/reporExamine\",\"^/other/reportCustomsService\",\"^/other/temu/rule$\",\"^/service-market/activity-rookie$\",\"^/service-market/activity-rookie-cus$\",\"^/service-market/activity-rookie/ticket$\",\"^/service-market/auth$\",\"^/service-market/chat/order-list$\",\"^/static\",\"^/supplier-shop/403\",\"^/supplier-shop/entry\",\"^/supplier-shop/entry/detail\",\"^/supplier-shop/introduction-page\",\"^/supplier-shop/settle-in\",\"^/tool/activity/fiveAnniversary\",\"^/tool/activity/valentine\",\"^/tool/cashback/618\",\"^/tool/cashback/721\",\"^/tool/disqualified\",\"^/tool/sms/act/adLottery$\",\"^/tool/sms/act/newRemind/dataReport$\",\"^/tool/sms/act/newRemind/index$\",\"^/tool/sms/new-year-subsidies\",\"^/wxmp-decoration/home-editor$\"],\"grayBodyBackgroundColor\":[\"^(/invoice/center)(?!(/batchInvoicing))\",\"^/act-bidding/act-archived-bid-detail$\",\"^/act-bidding/act-archived-bid-enroll-list$\",\"^/act-bidding/bidding-detail$\",\"^/act-bidding/goods-collect$\",\"^/act-bidding/home$\",\"^/act-bidding/market-bid-home$\",\"^/act-bidding/market-sign-detail\",\"^/act-bidding/market-sign-list$\",\"^/act-bidding/multi-resource-bid-detail$\",\"^/act-bidding/my-bidding-list$\",\"^/act-bidding/platform-purchase/detail$\",\"^/act-bidding/platform-purchase/home$\",\"^/act-bidding/platform-purchase/record$\",\"^/act-bidding/platform-purchase/sign$\",\"^/act-bidding/platform-purchase/sign-detail$\",\"^/act-bidding/reference-message$\",\"^/act-bidding/requirement$\",\"^/act-bidding/sign-detail$\",\"^/act-bidding/ten-billion-bid-detail$\",\"^/act-bidding/ten-billion-region-bid-detail$\",\"^/act/act_bidding_new/bidding_detail_copy\",\"^/act/act_bidding_new/goods_collect\",\"^/act/act_bidding_new/home\",\"^/act/act_bidding_new/my_bidding_list\",\"^/act/act_bidding_new/sign_detail$\",\"^/act/act_platform_purchase\",\"^/act/all-store-enroll$\",\"^/act/auto_adjust_price$\",\"^/act/batch-enroll-all$\",\"^/act/batch_adjust$\",\"^/act/batch_handle$\",\"^/act/detail$\",\"^/act/flow-protection$\",\"^/act/goods_manage$\",\"^/act/goods_manage/introduce$\",\"^/act/goods_manage/result$\",\"^/act/goods_price/confirm\",\"^/act/high_price_operation$\",\"^/act/history_detail$\",\"^/act/history_record$\",\"^/act/hot-goods$\",\"^/act/index$\",\"^/act/limit_time_sign$\",\"^/act/multi-act-enroll$\",\"^/act/multi-quick-channel$\",\"^/act/quick-enroll$\",\"^/act/quick_channel$\",\"^/act/quick_enroll/list\",\"^/act/register_record$\",\"^/act/resourceEnroll$\",\"^/act/scene-exclusive-coupon-enroll$\",\"^/act/sign/success_batch\",\"^/act/sign_detail$\",\"^/act/sign_success\",\"^/act/spring-all-store-enroll$\",\"^/act/ten-billion-agent-enroll$\",\"^/aftersales/aftersale_violation/detail$\",\"^/aftersales/customer_complain_appeal$\",\"^/aftersales/customer_complain_appeal/close$\",\"^/aftersales/customer_complain_appeal/detail$\",\"^/aftersales/platform_inquiry_goods$\",\"^/aftersales/platform_inquiry_goods/detail$\",\"^/aftersales/setup$\",\"^/aftersales/setup/detail$\",\"^/aftersales/smart_express$\",\"^/aftersales/smart_express/black/add$\",\"^/aftersales/smart_express/black/list$\",\"^/aftersales/work_order/detail$\",\"^/aftersales/work_order/tododetail$\",\"^/brand/bigDiscount/add$\",\"^/brand/bigDiscount/detail/\",\"^/brand/billion/query$\",\"^/brand/data/home$\",\"^/category-servicefee/overview$\",\"^/chat-service/catalog$\",\"^/chat-service/robot$\",\"^/chat-service/status$\",\"^/chat-service/warning$\",\"^/container/403$\",\"^/ddmc-supplier-product/mms-goods\",\"^/decoration/home$\",\"^/decoration/notification$\",\"^/express/autoDelivery$\",\"^/express/batch$\",\"^/express/batchShortage$\",\"^/express/consolidation\",\"^/express/ddmc_distribution/open$\",\"^/express/ddmc_distribution/warehouse$\",\"^/express/expressOnline$\",\"^/express/expressOnlineNew$\",\"^/express/hk-consol/abnormal-work-order$\",\"^/express/hk-consol/abnormal-work-order/detail$\",\"^/express/hk/abnormal-bag$\",\"^/express/hk/branch_line$\",\"^/express/hk/branch_line/edit$\",\"^/express/hk/data-board$\",\"^/express/hk/data-clearance$\",\"^/express/hk/data/package/board$\",\"^/express/hk/line$\",\"^/express/hk/line/edit$\",\"^/express/hk/operation$\",\"^/express/intelligent$\",\"^/express/intercept\",\"^/express/package$\",\"^/express/package/exchange$\",\"^/express/package/multi$\",\"^/express/package/return$\",\"^/express/single$\",\"^/express/store/book$\",\"^/express/store/mall$\",\"^/express/store/manage$\",\"^/express/store/manage/add$\",\"^/express/store/manage/detail$\",\"^/express/store/manage/rule$\",\"^/express/store/manage/shop$\",\"^/express/store/manage/shop/create$\",\"^/express/store/manage/shop/detail\",\"^/express/store/manage/shop/edit\",\"^/express/store/order$\",\"^/express/store/order/detail$\",\"^/express/store/order/refund$\",\"^/express/store/order/replenish$\",\"^/express/store/order/replenish/add$\",\"^/express/store/order/reverse$\",\"^/express/store/own$\",\"^/express/store/own/add$\",\"^/express/store/own/detail\",\"^/express/store/roll$\",\"^/express/store/search$\",\"^/express/store/search/finishTable$\",\"^/express/store/search/inventory$\",\"^/express/store/service$\",\"^/express/store/service/create$\",\"^/express/store/service/detail$\",\"^/express/store/service/list_type_1$\",\"^/express/store/stock$\",\"^/express/store/stock/allot$\",\"^/express/store/stock/allot/create$\",\"^/express/store/stock/allot/detail$\",\"^/express/store/stock/check$\",\"^/express/store/stock/check/detail$\",\"^/express/store/stock/in/create$\",\"^/express/store/stock/in/detail$\",\"^/express/store/stock/move$\",\"^/express/store/stock/move/create$\",\"^/express/store/stock/move/detail$\",\"^/express/store/stock/out$\",\"^/express/store/stock/out/create$\",\"^/express/store/stock/out/detail$\",\"^/express/store/ware$\",\"^/express/store/ware/add$\",\"^/express/store/ware/detail$\",\"^/express/virtual/batch$\",\"^/express/virtual/single$\",\"^/finance/expense/apply$\",\"^/finance/expense/history/detail\",\"^/goods-boost\",\"^/goods-tool/area-distribution$\",\"^/goods-tool/area-distribution-set$\",\"^/goods-tool/batch-delivery/list$\",\"^/goods-tool/expert-experience$\",\"^/goods-tool/goods-database$\",\"^/goods-tool/group-sale$\",\"^/goods-tool/home$\",\"^/goods-tool/optimize-landing\",\"^/goods-tool/pdd-select/publish-goods$\",\"^/goods-tool/platform-recruitment-products\",\"^/goods-tool/presale/list$\",\"^/goods-tool/quantity-rollback$\",\"^/goods-tool/question$\",\"^/goods-tool/question/guide$\",\"^/goods-tool/snatch-order-tool-upgrade$\",\"^/goods-tool/temu-goods-list$\",\"^/goods-tool/temu-goods/category$\",\"^/goods-tool/temu-goods/product-edit$\",\"^/goods-tool/temu-goods/result$\",\"^/goods-tool/trusteeship/goods-info$\",\"^/goods/batch_set_brand$\",\"^/goods/category$\",\"^/goods/common_batch_edit$\",\"^/goods/evaluation/activity$\",\"^/goods/evaluation/activity/create$\",\"^/goods/evaluation/activity/history$\",\"^/goods/evaluation/analyze$\",\"^/goods/evaluation/index$\",\"^/goods/evaluation_cash/activity$\",\"^/goods/evaluation_cash/activity/create$\",\"^/goods/evaluation_cash/activity/create-for-ranking$\",\"^/goods/evaluation_cash/activity/history$\",\"^/goods/evalution/dynamic$\",\"^/goods/goods_add/brand/result$\",\"^/goods/goods_add/index$\",\"^/goods/goods_add/special_brand$\",\"^/goods/goods_add/success$\",\"^/goods/goods_categories_goods_list\",\"^/goods/goods_categories_home$\",\"^/goods/goods_detail$\",\"^/goods/goods_draft$\",\"^/goods/goods_list$\",\"^/goods/goods_list/batch_change_price\",\"^/goods/goods_list/batch_edit_record$\",\"^/goods/goods_list/batch_set_property$\",\"^/goods/goods_list/chance/hot_keyword$\",\"^/goods/goods_list/goods_online/optimize_evaluation$\",\"^/goods/goods_list/goods_online/unmatched_rule_list$\",\"^/goods/goods_list/low_price_manage\",\"^/goods/goods_list/presale\",\"^/goods/goods_list/specification_sold_out\",\"^/goods/goods_list/super_stars_goods$\",\"^/goods/goods_materials$\",\"^/goods/goods_materials/materials-tools$\",\"^/goods/goods_record$\",\"^/goods/goods_recycle$\",\"^/goods/goods_return_detail$\",\"^/goods/goods_standard/apply\",\"^/goods/goods_standard/record\",\"^/goods/goods_success_record$\",\"^/goods/size/detail$\",\"^/goods/size/edit$\",\"^/goods/size/list$\",\"^/goods/up$\",\"^/goods/violation_list$\",\"^/home$\",\"^/home/$\",\"^/jinbao/effect$\",\"^/jinbao/gradeActivityDesc$\",\"^/jinbao/index$\",\"^/jinbao/massSelfSubsidy\",\"^/jinbao/newEffect$\",\"^/jinbao/open\",\"^/jinbao/promotion/index$\",\"^/jinbao/tenBillion$\",\"^/kit/baiyi-rates$\",\"^/kit/batch-on-sale$\",\"^/kit/bonus-for-fans$\",\"^/kit/bonus-for-fans/create$\",\"^/kit/bonus-for-fans/historyActivity$\",\"^/kit/brand-price-change\",\"^/kit/combo-offer$\",\"^/kit/combo-offer/result\",\"^/kit/evaluation$\",\"^/kit/evaluation/bill$\",\"^/kit/evaluation/create$\",\"^/kit/evaluation/create-for-ranking$\",\"^/kit/evaluation/history$\",\"^/kit/evaluation/sign_contract$\",\"^/kit/flagship-store-price-change\",\"^/kit/freebie$\",\"^/kit/freebie/manage$\",\"^/kit/get-one-free$\",\"^/kit/get-one-free/activity-detail$\",\"^/kit/get-one-free/add-goods$\",\"^/kit/get-one-free/result$\",\"^/kit/goods-follow-price\",\"^/kit/goods-price-change$\",\"^/kit/goods-price-management$\",\"^/kit/goods-price-management/price-modification$\",\"^/kit/goods-price-management/price-modification/create$\",\"^/kit/goods-price-management/price-modification/create/result$\",\"^/kit/goods-tool/freebie$\",\"^/kit/goods-tool/freebie/manage$\",\"^/kit/high-prices-limit-rate$\",\"^/kit/incubator$\",\"^/kit/incubator/one-key-optimization$\",\"^/kit/incubator/setting$\",\"^/kit/inflation-coupon$\",\"^/kit/inflation-coupon/create$\",\"^/kit/inflation-coupon/create/result\",\"^/kit/lowprice_warn$\",\"^/kit/main-image\",\"^/kit/mallDiscountArea$\",\"^/kit/multiOrderDiscountArea$\",\"^/kit/multiOrderDiscountArea/create$\",\"^/kit/new\",\"^/kit/new/create/result$\",\"^/kit/pinxiaoquan/create$\",\"^/kit/pinxiaoquan/create/result$\",\"^/kit/price-insurance$\",\"^/kit/retain-order$\",\"^/kit/retain-order/create$\",\"^/kit/retain-order/edit$\",\"^/kit/shop-service$\",\"^/kit/visit-task$\",\"^/kit/visit-task/create$\",\"^/kit/volume-discount$\",\"^/kit/volume-discount/create$\",\"^/kit/volume-discount/guide$\",\"^/kit/volume-discount/result$\",\"^/kol/promotion/activity$\",\"^/kol/promotion/activity/detail$\",\"^/live/courseList$\",\"^/live/data-detail$\",\"^/live/introduce\",\"^/main$\",\"^/main/$\",\"^/mallcenter/chat-account-list$\",\"^/mallcenter/dataCollection$\",\"^/mallcenter/drugstore-audit$\",\"^/mallcenter/goodsMoving/isOpen$\",\"^/mallcenter/goodsMoving/notOpen$\",\"^/mallcenter/info/CategoryQualification$\",\"^/mallcenter/info/basic$\",\"^/mallcenter/info/brand$\",\"^/mallcenter/info/brand/add$\",\"^/mallcenter/info/createNewMall/index\",\"^/mallcenter/info/entry/auditResult$\",\"^/mallcenter/info/entry/auditResultByMallName\",\"^/mallcenter/info/goodsQualification\",\"^/mallcenter/info/licence$\",\"^/mallcenter/info/licence/\\\\d+/add$\",\"^/mallcenter/info/licence/\\\\d+/view$\",\"^/mallcenter/info/licence/auditrecord$\",\"^/mallcenter/info/main/company/edit$\",\"^/mallcenter/info/main/index$\",\"^/mallcenter/info/main/person$\",\"^/mallcenter/info/selfApplyManage\",\"^/mallcenter/info/shopPresale/index\",\"^/mallcenter/info/shopTags/addTags\",\"^/mallcenter/info/shopTags/editTags\",\"^/mallcenter/info/shopTags/viewTags\",\"^/mallcenter/info/shopUpgrade/auditResult$\",\"^/mallcenter/info/shopUpgrade/shopInfo$\",\"^/mallcenter/info/shopUpgrade/upgradeType$\",\"^/mallcenter/member\",\"^/mallcenter/relativeMainChange\",\"^/mallcenter/stockTaking/center$\",\"^/mallcenter/storeManagement/createStore\",\"^/mallcenter/storeManagement/editGroup$\",\"^/mallcenter/storeManagement/editStore\",\"^/mallcenter/storeManagement/index$\",\"^/mallcenter/storeManagement/storeDetail\",\"^/mallcenter/storeManagement/storeGroup$\",\"^/mallcenter/storeManagement/subAccount\",\"^/mallcenter/sub/account\",\"^/mallcenter/sub/role\",\"^/mallcenter/survey$\",\"^/mallcenter/temu/semi\",\"^/mms-chat/advanceShuntDetail\",\"^/mms-chat/tools/shunt/categoriesOfGoods/.*\",\"^/mms-marketing-mixin/auto-follow-price-page$\",\"^/mms-marketing-mixin/batch-adjust-price$\",\"^/mms-marketing-mixin/copy-high-priced$\",\"^/mms-marketing-mixin/copy-high-priced/FreightInsuranceCopy$\",\"^/mms-marketing-mixin/copy-high-priced/UsefirstPaylaterCopy$\",\"^/mms-marketing-mixin/copy-high-priced/highPriceGoodsCopy$\",\"^/mms-marketing-mixin/high-price-operation$\",\"^/mms-marketing-mixin/high-price-operation/record$\",\"^/mms-marketing-mixin/hot-style-keep-rank$\",\"^/mms-marketing-mixin/major-limited-quantity-promotion$\",\"^/mms-marketing-mixin/new-goods-free-amount$\",\"^/mms-marketing-mixin/order-snatching-tool\",\"^/mms-marketing-mixin/price-violation$\",\"^/mms-marketing-mixin/price-violation/fixed$\",\"^/mms-marketing-mixin/price-violation/problem-orders$\",\"^/mms-marketing-mixin/promotion-rights$\",\"^/mms-marketing-mixin/quality-experience$\",\"^/mms-marketing-mixin/quick-get-orders$\",\"^/mms-marketing-mixin/restricted-flow-price-change$\",\"^/mms-marketing-mixin/restricted-flow-price-change/records$\",\"^/mms-marketing-mixin/same-price-bidding$\",\"^/mms-marketing-mixin/snatch-order-tool$\",\"^/mms-marketing-mixin/trade-branch-subsidy$\",\"^/mms-marketing-mixin/trade-branch-subsidy/record$\",\"^/mms-marketing-mixin/trade-branch-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy$\",\"^/mms-marketing-mixin/trade-in-subsidy/invoice$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/info/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/micro-express$\",\"^/mms-marketing-mixin/trade-in-subsidy/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/record/goods$\",\"^/mms-marketing-mixin/trade-in-subsidy/register\",\"^/mms-marketing-mixin/trade-in-subsidy/register/record\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/add$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/edit$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/list$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation/ka-center$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply/detail$\",\"^/orders/activityVerify$\",\"^/orders/appeal-false$\",\"^/orders/appeals\",\"^/orders/appeals/aftersale/refund-only$\",\"^/orders/dataRiskWarn$\",\"^/orders/exportExcel$\",\"^/orders/expressInterception/activate$\",\"^/orders/expressInterception/manage$\",\"^/orders/homeDeliverySettings$\",\"^/orders/homeDeliverySettings/template/create$\",\"^/orders/interceptExpress$\",\"^/orders/list\",\"^/orders/logistics/local\",\"^/orders/merchantCompensationRecovery$\",\"^/orders/merge$\",\"^/orders/nationalSubsidy/list$\",\"^/orders/order/carriage/act/add$\",\"^/orders/order/carriage/act/detail\",\"^/orders/order/carriage/act/useDetail\",\"^/orders/order/carriage/add$\",\"^/orders/order/carriage/category$\",\"^/orders/order/carriage/detail$\",\"^/orders/order/carriage/edit$\",\"^/orders/order/carriage/list$\",\"^/orders/order/carriage/rule$\",\"^/orders/order/carriage/special$\",\"^/orders/order/carriage/storeService/add$\",\"^/orders/order/carriage/storeService/detail$\",\"^/orders/order/carriage/useDetail$\",\"^/orders/order/logisticsSurvey$\",\"^/orders/order/sendInstall/add$\",\"^/orders/order/sendInstall/bindTemplate$\",\"^/orders/order/sendInstall/detail$\",\"^/orders/order/sendInstall/edit$\",\"^/orders/order/sendInstall/useDetail$\",\"^/orders/order/sfCarriage/add$\",\"^/orders/order/sfCarriage/detail\",\"^/orders/order/sfCarriage/edit\",\"^/orders/order/sfCarriage/useDetail$\",\"^/orders/order/winterWarm/add$\",\"^/orders/order/winterWarm/detail\",\"^/orders/order/winterWarm/edit\",\"^/orders/order/winterWarm/useDetail$\",\"^/orders/partialShipList$\",\"^/orders/remoteAreasFreeShip$\",\"^/orders/remoteAreasFreeShip/fail\",\"^/orders/remoteAreasFreeShip/success$\",\"^/orders/remoteAreasLargeMailRule$\",\"^/orders/remoteAreasOrderSubsidy$\",\"^/orders/reportManage\",\"^/orders/scheduledDeliverySettings$\",\"^/orders/scheduledDeliverySettings/template/create$\",\"^/orders/siteManage$\",\"^/orders/temu/act/similarGoodsApply$\",\"^/orders/temu/data/detail\",\"^/orders/temu/data/summary\",\"^/orders/temu/exportExcel$\",\"^/orders/temu/springFestivalInBusiness$\",\"^/orders/temu/springFestivalInBusiness/applyGoods$\",\"^/orders/temu/trusteeship$\",\"^/orders/thirdPartyDelivery$\",\"^/orders/twoStageExpressInvoice$\",\"^/orders/warnCenter$\",\"^/orders/wechat$\",\"^/orders/xjExpressSubsidy$\",\"^/orders/xjGoodsOpportunity$\",\"^/orders/xjLocalWarehouse$\",\"^/other/bbs/offline$\",\"^/other/helpcenter\",\"^/other/mail/\",\"^/other/rule\",\"^/other/tradeIn/protocol$\",\"^/other/tradeIn/recharge$\",\"^/overseas-goods/origin\",\"^/pg/deduciton_detail/fake$\",\"^/pg/deduciton_detail/record$\",\"^/pg/deduciton_detail/ship$\",\"^/pg/deduciton_detail/stock$\",\"^/pg/examination$\",\"^/pg/feedback$\",\"^/pg/mall_quality$\",\"^/pg/mall_quality_goods_detail$\",\"^/pg/new_violation_info$\",\"^/pg/restrict_detail$\",\"^/pg/restrict_detail/create_appeal$\",\"^/pg/restrict_list$\",\"^/pg/restrict_withdrawal\",\"^/pg/violation_content$\",\"^/pg/violation_list/hk_ship$\",\"^/pg/violation_list/mall_manage$\",\"^/profit-sharing/branch-mall-manage$\",\"^/profit-sharing/branch/detail\",\"^/profit-sharing/branch/relationship$\",\"^/profit-sharing/detail\",\"^/profit-sharing/relationship$\",\"^/profit-sharing/relationship/add$\",\"^/profit-sharing/relationship/branch/detail$\",\"^/profit-sharing/relationship/detail$\",\"^/profit-sharing/relationship/edit$\",\"^/search/good_inspect_v2\",\"^/supplier$\",\"^/supplier/batchUpload$\",\"^/supplier/batchUpload/result$\",\"^/supplier/ddmc$\",\"^/supplier/distribution\",\"^/supplier/instead$\",\"^/supplier/temu\",\"^/supplier/temu/main$\",\"^/supplier/trusteeship\",\"^/supplier/wholesale/result$\",\"^/sycm/combat$\",\"^/sycm/combat/sidebar$\",\"^/sycm/evaluation/overview$\",\"^/sycm/evaluation/recommand$\",\"^/sycm/fans$\",\"^/sycm/goods-boost$\",\"^/sycm/goods_effect\",\"^/sycm/goods_quality\",\"^/sycm/search_data\",\"^/sycm/search_data/video\",\"^/sycm/stores_data\",\"^/tool$\",\"^/tool/batch-on-sale$\",\"^/tool/bonus-for-fans$\",\"^/tool/bonus-for-fans/create$\",\"^/tool/bundle$\",\"^/tool/bundle/create$\",\"^/tool/bundle/create/select-sku$\",\"^/tool/coupon$\",\"^/tool/coupon/create$\",\"^/tool/coupon/create/result$\",\"^/tool/coupon/membership/create$\",\"^/tool/cross-mall-cashback\",\"^/tool/cross-mall-cashback$\",\"^/tool/cross-mall-cashback/create$\",\"^/tool/cross-mall-cashback/detail$\",\"^/tool/cross-mall-cashback/enRoll$\",\"^/tool/cross-mall-cashback/primaryEnRoll$\",\"^/tool/discount-reminder$\",\"^/tool/earnest$\",\"^/tool/earnest/create$\",\"^/tool/freebie$\",\"^/tool/freebie/manage$\",\"^/tool/full-amount-reduce$\",\"^/tool/full-amount-reduce/create$\",\"^/tool/full-amount-reduce/result$\",\"^/tool/get-one-free$\",\"^/tool/get-one-free/activity-detail$\",\"^/tool/get-one-free/add-goods$\",\"^/tool/get-one-free/result$\",\"^/tool/goods-tool/earnest\",\"^/tool/goods-tool/earnest$\",\"^/tool/goods-tool/freebie$\",\"^/tool/goods-tool/freebie/manage$\",\"^/tool/incubator$\",\"^/tool/incubator/one-key-optimization$\",\"^/tool/incubator/setting$\",\"^/tool/interest\",\"^/tool/mallDiscountArea$\",\"^/tool/mallDiscountArea/create$\",\"^/tool/mallDiscountArea/create/multiDiscount$\",\"^/tool/mallDiscountArea/create/repurchase\",\"^/tool/multi-piece-discount$\",\"^/tool/multi-piece-discount/create$\",\"^/tool/multi-piece-discount/result$\",\"^/tool/multiOrderDiscountArea$\",\"^/tool/multiOrderDiscountArea/create$\",\"^/tool/new\",\"^/tool/overpayment-refund$\",\"^/tool/pricebreak$\",\"^/tool/promotion$\",\"^/tool/promotion/create\",\"^/tool/promotion/create/lead-home-page\",\"^/tool/promotion/create/quickSetup\",\"^/tool/promotion/create/restart\",\"^/tool/promotion/modify$\",\"^/tool/sms/settings/remind-union\",\"^/tool/sms/settings/smartExpress$\",\"^/tool/surprise-coupon$\",\"^/tool/surprise-coupon/create$\",\"^/tool/surprise-coupon/result$\",\"^/tool/visit-task$\",\"^/tool/visit-task/create$\",\"^/vg/add_mapping$\",\"^/vg/query_mapping$\"],\"fluidList\":[\"^(/invoice/center)(?!(/batchInvoicing))\",\"^/act-bidding/act-archived-bid-detail$\",\"^/act-bidding/act-archived-bid-enroll-list$\",\"^/act-bidding/bidding-detail$\",\"^/act-bidding/goods-collect$\",\"^/act-bidding/home$\",\"^/act-bidding/market-bid-home$\",\"^/act-bidding/market-sign-detail\",\"^/act-bidding/market-sign-list$\",\"^/act-bidding/multi-resource-bid-detail$\",\"^/act-bidding/my-bidding-list$\",\"^/act-bidding/platform-purchase/detail$\",\"^/act-bidding/platform-purchase/home$\",\"^/act-bidding/platform-purchase/record$\",\"^/act-bidding/platform-purchase/sign-detail$\",\"^/act-bidding/sign-detail$\",\"^/act-bidding/ten-billion-bid-detail$\",\"^/act-bidding/ten-billion-region-bid-detail$\",\"^/act/act_bidding_new/bidding_detail_copy\",\"^/act/act_bidding_new/goods_collect\",\"^/act/act_bidding_new/home\",\"^/act/act_bidding_new/my_bidding_list\",\"^/act/act_bidding_new/sign_detail$\",\"^/act/act_platform_purchase\",\"^/act/all-store-enroll$\",\"^/act/batch-enroll-all$\",\"^/act/batch_adjust$\",\"^/act/batch_handle$\",\"^/act/detail$\",\"^/act/flow-protection$\",\"^/act/goods_manage$\",\"^/act/goods_manage/introduce$\",\"^/act/goods_manage/result$\",\"^/act/goods_price/confirm\",\"^/act/high_price_operation$\",\"^/act/history_detail$\",\"^/act/history_record$\",\"^/act/hot-goods$\",\"^/act/index$\",\"^/act/limit_time_sign$\",\"^/act/multi-act-enroll$\",\"^/act/multi-quick-channel$\",\"^/act/quick-enroll$\",\"^/act/quick_channel$\",\"^/act/quick_enroll/list\",\"^/act/register_record$\",\"^/act/resourceEnroll$\",\"^/act/scene-exclusive-coupon-enroll$\",\"^/act/sign/success_batch\",\"^/act/sign_detail$\",\"^/act/sign_success\",\"^/act/spring-all-store-enroll$\",\"^/act/ten-billion-agent-enroll$\",\"^/aftersales/aftersale_auto\",\"^/aftersales/aftersale_list$\",\"^/aftersales/aftersale_violation/detail$\",\"^/aftersales/aftersale_violation/list$\",\"^/aftersales/customer_complain_appeal$\",\"^/aftersales/customer_complain_appeal/detail$\",\"^/aftersales/good_people$\",\"^/aftersales/merchant_appeal$\",\"^/aftersales/micro_transfer\",\"^/aftersales/order_appeal$\",\"^/aftersales/platform_inquiry_goods$\",\"^/aftersales/platform_inquiry_goods/detail$\",\"^/aftersales/setup\",\"^/aftersales/setup/detail$\",\"^/aftersales/smart_express$\",\"^/aftersales/smart_express/black/add$\",\"^/aftersales/smart_express/black/list$\",\"^/aftersales/speed_refund$\",\"^/aftersales/work_order\",\"^/aftersales/work_order/detail$\",\"^/aftersales/work_order/tododetail$\",\"^/category-servicefee/overview$\",\"^/chat-service/catalog$\",\"^/chat-service/robot$\",\"^/chat-service/setting\",\"^/chat-service/status$\",\"^/chat-service/warning$\",\"^/container/403$\",\"^/ddmc-supplier-product/mms-goods\",\"^/decoration/home$\",\"^/decoration/notification$\",\"^/decoration/serviceMarket$\",\"^/decoration/serviceMarket/myTemplate$\",\"^/decoration/serviceMarket/recommendTemplate$\",\"^/decoration/topics$\",\"^/express-services/onsite-installation(?!/introduction)\",\"^/express-services/provider$\",\"^/express-services/tostore\",\"^/express-services/tostore/order$\",\"^/express-services/tostore/setting$\",\"^/express/autoDelivery$\",\"^/express/batch$\",\"^/express/batchShortage$\",\"^/express/consolidation\",\"^/express/customs/export-list-upload$\",\"^/express/customs/shut-out$\",\"^/express/ddmc_distribution/open$\",\"^/express/ddmc_distribution/warehouse$\",\"^/express/expressOnline$\",\"^/express/expressOnlineNew$\",\"^/express/hk-consol/abnormal-work-order$\",\"^/express/hk-consol/abnormal-work-order/detail$\",\"^/express/hk/abnormal-bag$\",\"^/express/hk/branch_line$\",\"^/express/hk/branch_line/edit$\",\"^/express/hk/data-board$\",\"^/express/hk/data-clearance$\",\"^/express/hk/data/package/board$\",\"^/express/hk/line$\",\"^/express/hk/line/edit$\",\"^/express/hk/operation$\",\"^/express/intelligent$\",\"^/express/intercept\",\"^/express/package$\",\"^/express/package/exchange$\",\"^/express/package/multi$\",\"^/express/package/return$\",\"^/express/single$\",\"^/express/store/book$\",\"^/express/store/mall$\",\"^/express/store/manage$\",\"^/express/store/manage/add$\",\"^/express/store/manage/detail$\",\"^/express/store/manage/rule$\",\"^/express/store/manage/shop$\",\"^/express/store/manage/shop/create$\",\"^/express/store/manage/shop/detail\",\"^/express/store/manage/shop/edit\",\"^/express/store/order$\",\"^/express/store/order/detail$\",\"^/express/store/order/refund$\",\"^/express/store/order/replenish$\",\"^/express/store/order/replenish/add$\",\"^/express/store/order/reverse$\",\"^/express/store/own$\",\"^/express/store/own/add$\",\"^/express/store/own/detail\",\"^/express/store/roll$\",\"^/express/store/search$\",\"^/express/store/search/finishTable$\",\"^/express/store/search/inventory$\",\"^/express/store/service$\",\"^/express/store/service/create$\",\"^/express/store/service/detail$\",\"^/express/store/service/list_type_1$\",\"^/express/store/stock$\",\"^/express/store/stock/allot$\",\"^/express/store/stock/allot/create$\",\"^/express/store/stock/allot/detail$\",\"^/express/store/stock/check$\",\"^/express/store/stock/check/detail$\",\"^/express/store/stock/in/create$\",\"^/express/store/stock/in/detail$\",\"^/express/store/stock/move$\",\"^/express/store/stock/move/create$\",\"^/express/store/stock/move/detail$\",\"^/express/store/stock/out$\",\"^/express/store/stock/out/create$\",\"^/express/store/stock/out/detail$\",\"^/express/store/ware$\",\"^/express/store/ware/add$\",\"^/express/store/ware/detail$\",\"^/express/virtual/batch$\",\"^/express/virtual/single$\",\"^/finance/expense/apply$\",\"^/finance/expense/history/detail\",\"^/freight/return_freight\",\"^/goods-boost\",\"^/goods-tool/batch-delivery/list$\",\"^/goods-tool/expert-experience$\",\"^/goods-tool/goods-database$\",\"^/goods-tool/group-sale$\",\"^/goods-tool/home$\",\"^/goods-tool/optimize-landing\",\"^/goods-tool/pdd-select/publish-goods$\",\"^/goods-tool/platform-recruitment-products\",\"^/goods-tool/presale/list$\",\"^/goods-tool/quantity-rollback$\",\"^/goods-tool/question$\",\"^/goods-tool/question/guide$\",\"^/goods-tool/snatch-order-tool-upgrade$\",\"^/goods-tool/temu-goods-list$\",\"^/goods-tool/trusteeship/goods-info$\",\"^/goods/batch_set_brand$\",\"^/goods/category$\",\"^/goods/common_batch_edit$\",\"^/goods/evaluation/activity$\",\"^/goods/evaluation/activity/create$\",\"^/goods/evaluation/activity/history$\",\"^/goods/evaluation/analyze$\",\"^/goods/evaluation/index$\",\"^/goods/evaluation_cash/activity$\",\"^/goods/evaluation_cash/activity/create$\",\"^/goods/evaluation_cash/activity/history$\",\"^/goods/evalution/dynamic$\",\"^/goods/gold_manager$\",\"^/goods/goods_add/brand/result$\",\"^/goods/goods_add/index$\",\"^/goods/goods_add/special_brand$\",\"^/goods/goods_add/success$\",\"^/goods/goods_categories_goods_list\",\"^/goods/goods_categories_home$\",\"^/goods/goods_detail$\",\"^/goods/goods_draft$\",\"^/goods/goods_list$\",\"^/goods/goods_list/batch_change_price\",\"^/goods/goods_list/batch_edit_record$\",\"^/goods/goods_list/batch_set_property$\",\"^/goods/goods_list/chance/hot_keyword$\",\"^/goods/goods_list/goods_online/optimize_evaluation$\",\"^/goods/goods_list/goods_online/unmatched_rule_list$\",\"^/goods/goods_list/low_price_manage\",\"^/goods/goods_list/presale\",\"^/goods/goods_list/specification_sold_out\",\"^/goods/goods_list/super_stars_goods$\",\"^/goods/goods_materials$\",\"^/goods/goods_materials/main_graph$\",\"^/goods/goods_materials/materials-tools$\",\"^/goods/goods_record$\",\"^/goods/goods_recycle$\",\"^/goods/goods_return_detail$\",\"^/goods/goods_standard/apply\",\"^/goods/goods_standard/record\",\"^/goods/goods_success_record$\",\"^/goods/size/detail$\",\"^/goods/size/edit$\",\"^/goods/size/list$\",\"^/goods/up$\",\"^/goods/violation_list$\",\"^/home$\",\"^/home/$\",\"^/identify/list$\",\"^/jinbao/attendActivity$\",\"^/jinbao/coupon$\",\"^/jinbao/effect$\",\"^/jinbao/goodsEffect$\",\"^/jinbao/hotActivity$\",\"^/jinbao/mallPromotion$\",\"^/jinbao/marketAccount$\",\"^/jinbao/massSelfSubsidy\",\"^/jinbao/open\",\"^/jinbao/operateRecord$\",\"^/jinbao/optimizePromotion$\",\"^/jinbao/orderDetail$\",\"^/jinbao/promotion/create$\",\"^/jinbao/promotion/index$\",\"^/jinbao/promotionDetail$\",\"^/jinbao/rateAccount\",\"^/jinbao/report\",\"^/jinbao/secondKillActivity$\",\"^/jinbao/specialRate\",\"^/jinbao/success/*\",\"^/jinbao/zsCaptainList$\",\"^/jinbao/zsactivity$\",\"^/kit/baiyi-rates$\",\"^/kit/batch-on-sale$\",\"^/kit/bonus-for-fans$\",\"^/kit/bonus-for-fans/create$\",\"^/kit/bonus-for-fans/historyActivity$\",\"^/kit/brand-price-change\",\"^/kit/bundle\",\"^/kit/combo-offer$\",\"^/kit/combo-offer/result\",\"^/kit/evaluation$\",\"^/kit/evaluation/bill$\",\"^/kit/evaluation/create$\",\"^/kit/evaluation/history$\",\"^/kit/evaluation/sign_contract$\",\"^/kit/flagship-store-price-change\",\"^/kit/freebie$\",\"^/kit/freebie/manage$\",\"^/kit/get-one-free$\",\"^/kit/get-one-free/activity-detail$\",\"^/kit/get-one-free/add-goods$\",\"^/kit/get-one-free/result$\",\"^/kit/goods-follow-price\",\"^/kit/goods-price-change$\",\"^/kit/goods-price-management$\",\"^/kit/goods-price-management/price-modification$\",\"^/kit/goods-price-management/price-modification/create$\",\"^/kit/goods-price-management/price-modification/create/result$\",\"^/kit/goods-tool/freebie$\",\"^/kit/goods-tool/freebie/manage$\",\"^/kit/high-prices-limit-rate$\",\"^/kit/incubator$\",\"^/kit/incubator/one-key-optimization$\",\"^/kit/incubator/setting$\",\"^/kit/inflation-coupon$\",\"^/kit/inflation-coupon/create$\",\"^/kit/inflation-coupon/create/result\",\"^/kit/lowprice_warn$\",\"^/kit/main-image\",\"^/kit/mallDiscountArea$\",\"^/kit/multiOrderDiscountArea$\",\"^/kit/multiOrderDiscountArea/create$\",\"^/kit/new$\",\"^/kit/new-offer$\",\"^/kit/new-offer/create$\",\"^/kit/new-offer/create/result$\",\"^/kit/new/create$\",\"^/kit/new/create/result$\",\"^/kit/pinxiaoquan/create$\",\"^/kit/pinxiaoquan/create/result$\",\"^/kit/price-insurance$\",\"^/kit/retain-order$\",\"^/kit/retain-order/create$\",\"^/kit/retain-order/edit$\",\"^/kit/shop-service$\",\"^/kit/visit-task$\",\"^/kit/visit-task/create$\",\"^/kit/volume-discount$\",\"^/kit/volume-discount/create$\",\"^/kit/volume-discount/guide$\",\"^/kit/volume-discount/result$\",\"^/kol/promotion/activity$\",\"^/kol/promotion/activity/detail$\",\"^/kol/promotion/record$\",\"^/live/courseList$\",\"^/live/introduce$\",\"^/logistics/account$\",\"^/logistics/book$\",\"^/logistics/cloudPrintService$\",\"^/logistics/detail$\",\"^/logistics/feedback$\",\"^/logistics/home$\",\"^/logistics/open$\",\"^/main$\",\"^/main/$\",\"^/mallcenter/changeAccountInfo/findMallName$\",\"^/mallcenter/chat-account-list$\",\"^/mallcenter/close/audit$\",\"^/mallcenter/close/bank$\",\"^/mallcenter/close/check$\",\"^/mallcenter/close/end$\",\"^/mallcenter/close/index$\",\"^/mallcenter/close/refund$\",\"^/mallcenter/dataCollection$\",\"^/mallcenter/drugstore-audit$\",\"^/mallcenter/goodsMoving/isOpen$\",\"^/mallcenter/goodsMoving/notOpen$\",\"^/mallcenter/info/CategoryQualification$\",\"^/mallcenter/info/basic$\",\"^/mallcenter/info/basic\\\\?from=ddmc$\",\"^/mallcenter/info/brand$\",\"^/mallcenter/info/brand/add$\",\"^/mallcenter/info/changeCategoryId/chooseNewId$\",\"^/mallcenter/info/changeCategoryId/mallCheck$\",\"^/mallcenter/info/createNewMall/index(\\\\d\\\\D)*$\",\"^/mallcenter/info/entry/auditResult$\",\"^/mallcenter/info/entry/auditResultByMallName\",\"^/mallcenter/info/goodsQualification\",\"^/mallcenter/info/licence$\",\"^/mallcenter/info/licence/\\\\d+/add$\",\"^/mallcenter/info/licence/\\\\d+/view$\",\"^/mallcenter/info/licence/auditrecord$\",\"^/mallcenter/info/main/company/edit$\",\"^/mallcenter/info/main/index$\",\"^/mallcenter/info/main/person$\",\"^/mallcenter/info/selfApplyManage\",\"^/mallcenter/info/shopPresale/index\",\"^/mallcenter/info/shopTags/addTags\",\"^/mallcenter/info/shopTags/editTags\",\"^/mallcenter/info/shopTags/index$\",\"^/mallcenter/info/shopTags/viewTags\",\"^/mallcenter/info/shopUpgrade/auditResult$\",\"^/mallcenter/info/shopUpgrade/index$\",\"^/mallcenter/info/shopUpgrade/normal/step\\\\d$\",\"^/mallcenter/info/shopUpgrade/shopInfo$\",\"^/mallcenter/info/shopUpgrade/upgradeType$\",\"^/mallcenter/info/verifyEnterprise$\",\"^/mallcenter/member\",\"^/mallcenter/relativeMainChange\",\"^/mallcenter/stockTaking/center$\",\"^/mallcenter/storeManagement/createStore\",\"^/mallcenter/storeManagement/editGroup$\",\"^/mallcenter/storeManagement/editStore\",\"^/mallcenter/storeManagement/index$\",\"^/mallcenter/storeManagement/storeDetail$\",\"^/mallcenter/storeManagement/storeGroup$\",\"^/mallcenter/storeManagement/subAccount$\",\"^/mallcenter/sub/account\",\"^/mallcenter/sub/role\",\"^/mallcenter/survey$\",\"^/mallcenter/temu/semi\",\"^/mms-chat/advanceShuntDetail\",\"^/mms-chat/overview\",\"^/mms-chat/search$\",\"^/mms-chat/service/promise$\",\"^/mms-chat/tools\",\"^/mms-marketing-mixin/auto-follow-price-page$\",\"^/mms-marketing-mixin/batch-adjust-price$\",\"^/mms-marketing-mixin/copy-high-priced$\",\"^/mms-marketing-mixin/copy-high-priced/FreightInsuranceCopy$\",\"^/mms-marketing-mixin/copy-high-priced/UsefirstPaylaterCopy$\",\"^/mms-marketing-mixin/copy-high-priced/highPriceGoodsCopy$\",\"^/mms-marketing-mixin/high-price-operation$\",\"^/mms-marketing-mixin/high-price-operation/record$\",\"^/mms-marketing-mixin/hot-style-keep-rank$\",\"^/mms-marketing-mixin/major-limited-quantity-promotion$\",\"^/mms-marketing-mixin/new-goods-free-amount$\",\"^/mms-marketing-mixin/order-snatching-tool\",\"^/mms-marketing-mixin/price-violation$\",\"^/mms-marketing-mixin/price-violation/fixed$\",\"^/mms-marketing-mixin/price-violation/problem-orders$\",\"^/mms-marketing-mixin/promotion-rights$\",\"^/mms-marketing-mixin/quality-experience$\",\"^/mms-marketing-mixin/quick-get-orders$\",\"^/mms-marketing-mixin/restricted-flow-price-change$\",\"^/mms-marketing-mixin/restricted-flow-price-change/records$\",\"^/mms-marketing-mixin/same-price-bidding$\",\"^/mms-marketing-mixin/snatch-order-tool$\",\"^/mms-marketing-mixin/trade-branch-subsidy$\",\"^/mms-marketing-mixin/trade-branch-subsidy/record$\",\"^/mms-marketing-mixin/trade-branch-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy$\",\"^/mms-marketing-mixin/trade-in-subsidy/invoice$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/info/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/micro-express$\",\"^/mms-marketing-mixin/trade-in-subsidy/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/record/goods$\",\"^/mms-marketing-mixin/trade-in-subsidy/register\",\"^/mms-marketing-mixin/trade-in-subsidy/register/record\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/add$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/edit$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/list$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation/ka-center$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply/detail$\",\"^/orders/activityVerify$\",\"^/orders/appeal-false$\",\"^/orders/appeals\",\"^/orders/appeals/aftersale/refund-only$\",\"^/orders/assignExpress$\",\"^/orders/dataRiskWarn$\",\"^/orders/exportExcel$\",\"^/orders/expressInterception/activate$\",\"^/orders/expressInterception/manage$\",\"^/orders/homeDeliverySettings$\",\"^/orders/homeDeliverySettings/template/create$\",\"^/orders/interceptExpress$\",\"^/orders/list\",\"^/orders/logistics/local\",\"^/orders/logistics/local$\",\"^/orders/logistics/local/add$\",\"^/orders/logistics/local/detail$\",\"^/orders/logistics/local/edit$\",\"^/orders/logistics/local/usage$\",\"^/orders/medicine$\",\"^/orders/medicine/export$\",\"^/orders/merchantCompensationRecovery$\",\"^/orders/merge$\",\"^/orders/nationalSubsidy/list$\",\"^/orders/order/carriage/act/add$\",\"^/orders/order/carriage/act/detail\",\"^/orders/order/carriage/act/list$\",\"^/orders/order/carriage/act/useDetail\",\"^/orders/order/carriage/addressManagement$\",\"^/orders/order/carriage/detail$\",\"^/orders/order/carriage/list$\",\"^/orders/order/carriage/rule$\",\"^/orders/order/carriage/special$\",\"^/orders/order/carriage/storeService$\",\"^/orders/order/carriage/storeService/add$\",\"^/orders/order/carriage/storeService/detail$\",\"^/orders/order/carriage/storeService/template$\",\"^/orders/order/carriage/useDetail$\",\"^/orders/order/logisticsSurvey$\",\"^/orders/order/sendInstall/bindTemplate$\",\"^/orders/order/sendInstall/goodsList$\",\"^/orders/order/sendInstall/list$\",\"^/orders/order/sendInstall/useDetail$\",\"^/orders/order/sfCarriage/goodList$\",\"^/orders/order/sfCarriage/list$\",\"^/orders/order/sfCarriage/useDetail$\",\"^/orders/order/verify$\",\"^/orders/order/winterWarm/goodList$\",\"^/orders/order/winterWarm/list$\",\"^/orders/overseaTracecode$\",\"^/orders/partialShipList$\",\"^/orders/remoteAreasLargeMailRule$\",\"^/orders/reportManage\",\"^/orders/scheduledDeliverySettings$\",\"^/orders/scheduledDeliverySettings/template/create$\",\"^/orders/siteManage$\",\"^/orders/temu/act/similarGoodsApply$\",\"^/orders/temu/data/detail\",\"^/orders/temu/data/summary\",\"^/orders/temu/exportExcel$\",\"^/orders/temu/springFestivalInBusiness$\",\"^/orders/temu/springFestivalInBusiness/applyGoods$\",\"^/orders/temu/trusteeship$\",\"^/orders/twoStageExpressInvoice$\",\"^/orders/warnCenter$\",\"^/orders/wechat$\",\"^/orders/xjExpressSubsidy$\",\"^/orders/xjGoodsOpportunity$\",\"^/other/helpcenter\",\"^/other/mail/\",\"^/other/rule\",\"^/other/tradeIn/recharge$\",\"^/overseas-goods\",\"^/pg/deduciton_detail/fake$\",\"^/pg/deduciton_detail/record$\",\"^/pg/deduciton_detail/ship$\",\"^/pg/deduciton_detail/stock$\",\"^/pg/examination$\",\"^/pg/feedback$\",\"^/pg/mall_quality$\",\"^/pg/mall_quality_goods_detail$\",\"^/pg/new_violation_info$\",\"^/pg/restrict_detail$\",\"^/pg/restrict_detail/create_appeal$\",\"^/pg/restrict_list$\",\"^/pg/restrict_withdrawal\",\"^/pg/violation_content$\",\"^/pg/violation_list/hk_ship$\",\"^/pg/violation_list/live$\",\"^/pg/violation_list/mall_manage$\",\"^/pg/violation_list/mallgoods$\",\"^/pg/violation_list/rectify$\",\"^/profit-sharing/branch-mall-manage$\",\"^/profit-sharing/branch/detail\",\"^/profit-sharing/branch/relationship$\",\"^/profit-sharing/detail\",\"^/profit-sharing/relationship$\",\"^/profit-sharing/relationship/add$\",\"^/profit-sharing/relationship/branch/detail$\",\"^/profit-sharing/relationship/detail$\",\"^/profit-sharing/relationship/edit$\",\"^/search/good_inspect_v2\",\"^/supplier$\",\"^/supplier/batchUpload$\",\"^/supplier/batchUpload/result$\",\"^/supplier/ddmc$\",\"^/supplier/distribution\",\"^/supplier/instead$\",\"^/supplier/temu\",\"^/supplier/temu/main$\",\"^/supplier/trusteeship\",\"^/supplier/wholesale/result$\",\"^/sycm/combat/sidebar$\",\"^/sycm/evaluation/overview$\",\"^/sycm/evaluation/recommand$\",\"^/sycm/fans$\",\"^/sycm/goods-boost$\",\"^/sycm/goods_effect\",\"^/sycm/goods_quality\",\"^/sycm/search_data\",\"^/sycm/stores_data\",\"^/tool$\",\"^/tool/batch-on-sale$\",\"^/tool/bonus-for-fans$\",\"^/tool/bonus-for-fans/create$\",\"^/tool/bundle$\",\"^/tool/bundle/create$\",\"^/tool/bundle/create/select-sku$\",\"^/tool/coupon$\",\"^/tool/coupon/create$\",\"^/tool/coupon/create/result$\",\"^/tool/coupon/membership/create$\",\"^/tool/cross-mall-cashback\",\"^/tool/cross-mall-cashback$\",\"^/tool/cross-mall-cashback/create$\",\"^/tool/cross-mall-cashback/detail$\",\"^/tool/cross-mall-cashback/enRoll$\",\"^/tool/cross-mall-cashback/primaryEnRoll$\",\"^/tool/discount-reminder$\",\"^/tool/earnest$\",\"^/tool/earnest/create$\",\"^/tool/free\",\"^/tool/freebie$\",\"^/tool/freebie/manage$\",\"^/tool/full-amount-reduce$\",\"^/tool/full-amount-reduce/create$\",\"^/tool/full-amount-reduce/result$\",\"^/tool/get-one-free$\",\"^/tool/get-one-free/activity-detail$\",\"^/tool/get-one-free/add-goods$\",\"^/tool/get-one-free/result$\",\"^/tool/goods-tool/earnest\",\"^/tool/goods-tool/earnest$\",\"^/tool/goods-tool/freebie$\",\"^/tool/goods-tool/freebie/manage$\",\"^/tool/incubator$\",\"^/tool/incubator/one-key-optimization$\",\"^/tool/incubator/setting$\",\"^/tool/interest\",\"^/tool/mallDiscountArea$\",\"^/tool/mallDiscountArea/create$\",\"^/tool/mallDiscountArea/create/multiDiscount$\",\"^/tool/mallDiscountArea/create/repurchase\",\"^/tool/multi-piece-discount$\",\"^/tool/multi-piece-discount/create$\",\"^/tool/multi-piece-discount/result$\",\"^/tool/multiOrderDiscountArea$\",\"^/tool/multiOrderDiscountArea/create$\",\"^/tool/new$\",\"^/tool/new/create$\",\"^/tool/overpayment-refund$\",\"^/tool/payAfterUse\",\"^/tool/preferential\",\"^/tool/pricebreak$\",\"^/tool/promotion$\",\"^/tool/promotion/create\",\"^/tool/promotion/create/lead-home-page\",\"^/tool/promotion/create/quickSetup\",\"^/tool/promotion/create/restart\",\"^/tool/promotion/modify$\",\"^/tool/sms/settings/smartExpress$\",\"^/tool/surprise-coupon$\",\"^/tool/surprise-coupon/create$\",\"^/tool/surprise-coupon/result$\",\"^/tool/visit-task$\",\"^/tool/visit-task/create$\",\"^/vg/add_mapping$\",\"^/vg/query_mapping$\"]},\"sideBarProps\":{\"favFromServer\":[301,101,211,703],\"fromServer\":{\"sidebarUserViewList\":[{\"id\":3595,\"name\":\"推荐\",\"icon\":\"https://promotion.pddpic.com/promo/icon/pic/c4aa715d-94d2-486f-92ca-86c36d1957ec.png.slim.png\",\"children\":[{\"id\":3596,\"url\":\"/mallcenter/temu/semi\",\"name\":\"TEMU入驻\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3646,\"url\":\"/ddmc-supplier-product/mms-goods\",\"name\":\"买菜售卖报名\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":3427,\"name\":\"多多买菜供应商\",\"icon\":\"https://promotion.pddpic.com/upload/2020-11-15/10ab9f6a-efeb-4d65-933f-e76a35ad436b.png.slim.png\",\"children\":[{\"id\":3428,\"url\":\"/other/oneredirect?target=https://mc.pinduoduo.com/ddmc-mms\",\"name\":\"多多买菜\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/janus/api/maicai/isMaicaiMaster)\"},{\"id\":3617,\"url\":\"/express/ddmc_distribution/open\",\"name\":\"本地仓商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/ddmc_distribution/open\"],\"defaultVisibility\":false,\"whitelist\":\"post(/carson/api/remote/mc/transfer/button/show)\"},{\"id\":3618,\"url\":\"/express/ddmc_distribution/warehouse\",\"name\":\"配送管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/ddmc_distribution/warehouse\"],\"defaultVisibility\":false,\"whitelist\":\"post(/carson/api/remote/mc/warehouse_manager/sidebar/show)\"}]},{\"id\":100,\"name\":\"发货管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/e28bf79a-91ca-4101-94d7-c598ffd0f523.png\",\"children\":[{\"id\":101,\"url\":\"/orders/list\",\"name\":\"订单查询\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/search/index\",\"/orders/wechat/push\",\"/orders/list\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":120,\"url\":\"/print/home\",\"name\":\"打单工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/print/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3616,\"url\":\"/erp/home\",\"name\":\"官方ERP\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/erp/*\"],\"defaultVisibility\":false,\"whitelist\":\"get(/escort/gray/mms_menu)\"},{\"id\":105,\"url\":\"/express/package\",\"name\":\"包裹中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/order/packageCenter\",\"/express/package\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":102,\"url\":\"/express/batch\",\"name\":\"发货中心\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/complain\",\"/express/reminder\",\"^/express/(?!(package|store|24h-delivery|merge|return_freight|intercept|ddmc_distributio|customs/*))\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":809,\"url\":\"/invoice/center\",\"name\":\"订单开票\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/invoice\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":103,\"url\":\"/orders/order/carriage/list\",\"name\":\"物流工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/order/carriage/list\",\"/orders/carriage/edit\",\"/orders/carriage/detail\",\"/orders/delivery_address_management\",\"/order/carriage\",\"/order/sendInstall\",\"/orders/order/sfCarriage/goodList\",\"/orders/scheduledDeliverySettings\",\"/orders/scheduledDeliverySettings/template/create\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":107,\"url\":\"/logistics/home\",\"name\":\"电子面单\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/logistics/(?!deliver-manage)\",\"^/logistics/?$\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":110,\"url\":\"/orders/medicine\",\"name\":\"处方单管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/orders/medicine/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/medicine/mms/queryIsMallWhite)\"},{\"id\":104,\"url\":\"/orders/order/logisticsSurvey\",\"name\":\"物流概况\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/order/logisticsSurvey\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":170,\"url\":\"/print/deliver-manage\",\"name\":\"代发管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/logistics/deliver-manage\"],\"defaultVisibility\":false,\"whitelist\":\"get(/pluto/whitelist/check)\"},{\"id\":3464,\"url\":\"/orders/reportManage\",\"name\":\"报备额度\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":108,\"url\":\"/orders/order/verify\",\"name\":\"核销工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/essexbusiness/common/query/mall/show/verificationEntrance)\"},{\"id\":150,\"url\":\"/express-services/onsite-installation/service-order-list\",\"name\":\"上门安装\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express-services/onsite-installation/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/osaka/home_install/rule/mms_menu/gray_control)\"},{\"id\":180,\"url\":\"/express-services/tostore/order\",\"name\":\"到店服务\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/express-services/tostore/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/osaka/store_install/rule/mms_menu/gray_control)\"},{\"id\":140,\"url\":\"/vg/home\",\"name\":\"虚拟工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/vg(?=/|$)\"],\"defaultVisibility\":false,\"whitelist\":\"post(/maryland/api/virtualMerchant/queryIsShowSideBar)\"},{\"id\":3442,\"url\":\"/orders/overseaTracecode\",\"name\":\"正品溯源\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/oversea/traceSource/show)\"},{\"id\":3561,\"url\":\"/orders/warnCenter?warnType=6\",\"name\":\"大额订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/warnCenter?warnType=6\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3583,\"url\":\"/express/consolidation/package\",\"name\":\"偏远集运\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/express/consolidation/*\"],\"defaultVisibility\":false,\"whitelist\":\"get(/mangosteen/mallMerge/abnormal/mallGray)\"},{\"id\":3627,\"url\":\"/orders/nationalSubsidy/list\",\"name\":\"政府补贴订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/nationalSubsidy/list\"],\"defaultVisibility\":true,\"whitelist\":\"post(/carson/api/trade_in/parent_sub_mall_act/inSubMallWhite)\"}]},{\"id\":1100,\"name\":\"仓配管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/44d3b26c-3e87-4c27-b98b-dd21841f8783.png\",\"children\":[{\"id\":3631,\"url\":\"/express/hk/line\",\"name\":\"網格站管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/mangosteen/clearance/user/grid_house/line/show)\"},{\"id\":3632,\"url\":\"/express/hk\",\"name\":\"二段幹線管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/mangosteen/clearance/dashboard/show)\"},{\"id\":3652,\"url\":\"/express/customs/export-list-upload\",\"name\":\"报关管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/customs/export-list-upload\"],\"defaultVisibility\":false,\"whitelist\":\"post(/mangosteen/crossBack/sidebar/declaration/tab)\"}]},{\"id\":200,\"name\":\"售后管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/f08bfc37-4ec9-4a94-8cee-4f12ce1e3041.png\",\"children\":[{\"id\":211,\"url\":\"/aftersales/aftersale_list\",\"name\":\"售后工作台\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/aftersales/aftersale_auto/*\",\"/aftersales/setup\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":204,\"url\":\"/aftersales/work_order/list\",\"name\":\"工单管理\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/aftersales/work_order\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":210,\"url\":\"/aftersales/merchant_appeal\",\"name\":\"商家举证\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3521,\"url\":\"/freight/return_freight?chanel=1033\",\"name\":\"消费者体验\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/freight/return_freight\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":208,\"url\":\"/aftersales/speed_refund\",\"name\":\"极速退款\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/aftersales/speed_refund\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":205,\"url\":\"/aftersales/micro_transfer\",\"name\":\"小额打款\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/aftersale/micro_transfer\",\"/aftersales/micro_transfer\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3523,\"url\":\"/orders/interceptExpress\",\"name\":\"拦截快递\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/expressInterception/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cambridge/api/express/intercept/expressInterceptWhitelist)\"},{\"id\":3660,\"url\":\"/kit/retain-order?tool_full_channel=10323_97807\",\"name\":\"挽单工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/cambridge/api/retain/order/showEntry)\"}]},{\"id\":300,\"name\":\"商品管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/24c8b43e-37b1-4967-bdec-d6aabfaf3935.png\",\"children\":[{\"id\":302,\"url\":\"/goods/goods_list\",\"name\":\"商品列表\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods/goods_list$\",\"/goods/goods_draft\",\"/goods/goods_recycle\",\"/goods/goods_record\",\"/goods/goods_list/change_goods_sku\",\"/goods/goods_list/virtual_detail\",\"/goods/goods_detail*\",\"/goods/goods_return_detail*\",\"/goods/violation_list\",\"/goods/violation_detail*\",\"/goods/goods_list/change_sku_record\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":304,\"url\":\"/goods/evaluation/index\",\"name\":\"评价管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/goods/evaluation/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":301,\"url\":\"/goods/category\",\"name\":\"发布新商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/goods/category\",\"/goods/goods_add/index\",\"/goods/goods_add/success\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3614,\"url\":\"/kit/goods-price-management?tool_full_channel=10323_97807\",\"name\":\"价格管理\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/madrid/gray/is_in_white_for_price_manage)\"},{\"id\":306,\"url\":\"/search/good_inspect_v2/inspect_start\",\"name\":\"商品体检\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/search/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":310,\"url\":\"/goods/gold_manager\",\"name\":\"金价管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/glide/v2/mms/query/mall/is_gold_mall)\"},{\"id\":308,\"url\":\"/goods/goods_materials\",\"name\":\"商品素材\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods/goods_materials/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":325,\"url\":\"/goods-tool/home\",\"name\":\"商品工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods-tool/recommend\",\"/goods-tool/question/guide\",\"/goods-tool/remote-delivery\",\"/goods-tool/presale/list\",\"/goods-tool/freebie\",\"/goods/tools/ai\",\"/goods-tool/batch-delivery/list\",\"/mallcenter/salesInherit/step1\",\"/goods-tool/group-sale\",\"/mallcenter/dataCollection\",\"/chat-service/catalog\",\"/goods-tool/expert-experience\",\"/mallcenter/stockTaking/center\",\"/pg/mall_quality\",\"/tool/goods-tool/earnest\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":321,\"url\":\"/sycm/combat/sidebar\",\"name\":\"橱窗新品\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/salesPromotion/checkTargetCate)\"},{\"id\":3534,\"url\":\"/goods/goods_list/chance\",\"name\":\"机会商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3447,\"url\":\"/category-servicefee/overview\",\"name\":\"类目服务费\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/mms-gateway/commission/isMallHasCommissionGoods)\"},{\"id\":3486,\"url\":\"/overseas-goods/origin\",\"name\":\"商品溯源\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/overseas-goods/origin/home\",\"/overseas-goods/origin/servers\",\"/overseas-goods/origin/goods\",\"/overseas-goods/origin/orders\"],\"defaultVisibility\":true,\"whitelist\":\"get(/ringtailmms/api/xerus/trace/entrance)\"},{\"id\":3389,\"url\":\"/supplier\",\"name\":\"供货管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3444,\"url\":\"/sycm/goods-boost\",\"name\":\"新品飞跃\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/rivendell/api/leapProject/hitSideBar)\"},{\"id\":3619,\"url\":\"/mms-marketing-mixin/trade-in-subsidy\",\"name\":\"以旧换新国补\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/trade-in-subsidy\"],\"defaultVisibility\":true,\"whitelist\":\"post(/carson/api/trade_in/mall/show_button)\"},{\"id\":3650,\"url\":\"/sycm/goods_quality/pilot_goods\",\"name\":\"商品领航员\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"}]},{\"id\":3585,\"name\":\"流量运营\",\"icon\":\"https://promotion.pddpic.com/promo/icon/pic/c8d22d8b-b0ac-4c31-83d2-e945b8a7574a.png.slim.png\",\"children\":[{\"id\":3613,\"url\":\"/mms-marketing-mixin/hot-style-keep-rank\",\"name\":\"爆款保权重\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/hotStyleKeepRank/showEntry)\"},{\"id\":3604,\"url\":\"/mms-marketing-mixin/snatch-order-tool\",\"name\":\"抢单神器\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/pricemariana/api/grab/order/sidebar/check)\"},{\"id\":3586,\"url\":\"/kit/flagship-store-price-change?tool_full_channel=10323_97807\",\"name\":\"旗舰店考核\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/link/api/flagship/compare/price/rights/sidebar/check)\"},{\"id\":3589,\"url\":\"/kit/goods-price-change?tool_full_channel=10323_97807\",\"name\":\"好价拿流量\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/goodsPrice/showEntry)\"},{\"id\":3590,\"url\":\"/mms-marketing-mixin/same-price-bidding?SourceType=MMSActicon\",\"name\":\"同款竞价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/api/price/mariana/sameStyle/bidding/showEntry)\"},{\"id\":3591,\"url\":\"/mms-marketing-mixin/price-violation\",\"name\":\"商品体验违规\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/price-violation\"],\"defaultVisibility\":true,\"whitelist\":\"get(/pricemariana/api/violation/sidebar/check)\"},{\"id\":3594,\"url\":\"/act/high_price_operation\",\"name\":\"高价商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/high-price-operation\"],\"defaultVisibility\":false,\"whitelist\":\"get(/link/api/follow/price/marketing_activity/high_price_goods/sidebar/check)\"},{\"id\":3599,\"url\":\"/kit/brand-price-change?tool_full_channel=10323_97807\",\"name\":\"品牌权益\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/link/api/follow/price/good/price/rights/sidebar/check)\"},{\"id\":3601,\"url\":\"/mms-marketing-mixin/restricted-flow-price-change?tool_full_channel=10323_97807\",\"name\":\"营销受限商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/cancel/marketing/atmosphere/showEntry)\"},{\"id\":3602,\"url\":\"/mms-marketing-mixin/promotion-rights?tool_full_channel=10323_97807\",\"name\":\"免费流量扶持\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/pricemariana/api/ltlq/rights/support/sidebar/check)\"},{\"id\":3603,\"url\":\"/mms-marketing-mixin/new-goods-free-amount?tool_full_channel=10323_97807\",\"name\":\"新品免费起量\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/newFreeStart/showEntry)\"},{\"id\":3608,\"url\":\"/mms-marketing-mixin/copy-high-priced?tool_full_channel=10323_97807\",\"name\":\"一键降成本\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"get(/link/api/follow/price/high_price_copy_goods/sidebar/check)\"},{\"id\":3658,\"url\":\"/mms-marketing-mixin/order-snatching-tool?tool_full_channel=10323_97807\",\"name\":\"抢单神器\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/order-snatching-tool\"],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/grab/order/new/show_sidebar)\"},{\"id\":3605,\"url\":\"/mms-marketing-mixin/major-limited-quantity-promotion?tool_full_channel=10323_97807\",\"name\":\"限量上大促\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/limit/quantity/snap/showEntry)\"},{\"id\":3612,\"url\":\"/mms-marketing-mixin/auto-follow-price-page\",\"name\":\"自动跟价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/autoPriceAdjust/showEntry)\"},{\"id\":3621,\"url\":\"/mms-marketing-mixin/quality-experience\",\"name\":\"质量体验\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/api/price/mariana/quality_experience/show_entry)\"},{\"id\":3622,\"url\":\"/act/all-store-enroll?SourceType=Sidebar\",\"name\":\"活动全店报名\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/full_store_enroll/show_entry)\"}]},{\"id\":700,\"name\":\"推广平台\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/a56c77f8-1952-44b6-9996-a3d31ea6b361.png\",\"children\":[{\"id\":702,\"url\":\"https://yingxiao.pinduoduo.com/mains/promotionOverview\",\"name\":\"推广概况\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[\"^/exp/pro/index\",\"^/exp/messageCenter/\",\"^/exp/discountReport\",\"^/adgroup/\",\"^/extension/recharge_record\",\"^/extension/operation_record\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3587,\"url\":\"https://yingxiao.pinduoduo.com/goods/promotion/list\",\"name\":\"商品推广\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3588,\"url\":\"https://yingxiao.pinduoduo.com/goods/promotion/list?scenesMode=3\\u0026isOpen=1\",\"name\":\"全店托管\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/mms-gateway/mms/home/tab/isMallCanShowSmartPromotionTab)\"},{\"id\":3511,\"url\":\"https://yingxiao.pinduoduo.com/live/list\",\"name\":\"直播推广\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3514,\"url\":\"https://yingxiao.pinduoduo.com/starmall/list\",\"name\":\"明星店铺\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":708,\"url\":\"https://yingxiao.pinduoduo.com/goods/report/promotion/overView\",\"name\":\"推广报表\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/exp/reportOverview/index/search\",\"^/exp/reportOverview/index/scene\",\"^/exp/reportOverview/unit/\",\"^/exp/reportOverview/plan/\",\"^/exp/reportOverview/detail/\",\"^/exp/reportOverview/dayDetail\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3515,\"url\":\"https://yingxiao.pinduoduo.com/tools/index\",\"name\":\"推广工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3516,\"url\":\"https://yingxiao.pinduoduo.com/mains/account/finance\",\"name\":\"推广账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3512,\"url\":\"https://shuyuan.pinduoduo.com/\",\"name\":\"营销书院\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":1000,\"name\":\"数据中心\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/e3b5368b-775c-43ee-8337-d537b7386318.png\",\"children\":[{\"id\":1001,\"url\":\"/sycm/goods_effect\",\"name\":\"商品数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/goods_effect*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":1002,\"url\":\"/sycm/stores_data\",\"name\":\"交易数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/stores_data*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":1003,\"url\":\"/sycm/goods_quality/jump\",\"name\":\"服务数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/goods_quality*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3343,\"url\":\"/sycm/evaluation\",\"name\":\"经营总览\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/evaluation*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":1004,\"url\":\"/sycm/search_data\",\"name\":\"流量数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/search_data*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3254,\"url\":\"/sycm/fans\",\"name\":\"粉丝数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/sydney/api/mallFans/checkIsInFansTradeWhiteList)\"}]},{\"id\":600,\"name\":\"店铺营销\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/7b42dd53-b101-4b7b-aba8-99544c19e2e4.png\",\"children\":[{\"id\":601,\"url\":\"/act/index?SourceType=MMSActicon\",\"name\":\"营销活动\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/activity/resource/promotion_activity\",\"/activity/resource/entry\",\"/activity/resource/activity_detail/\",\"/activity/resource/attended_list\",\"/activity/resource_niche/apply/index\",\"/act/index\",\"/act/detail\",\"/act/sign_detail\",\"/act/my_join_activity\",\"/act/register_record\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":604,\"url\":\"/tool\",\"name\":\"营销工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^\\\\/tool(?!\\\\/(sms|pricebreak|promotion\\\\/*))\",\"^\\\\/kit(?!\\\\/(main-image|brand-price-change|high-prices-limit-rate|shop-service|new|price-insurance|goods-price-management|goods-price-change\\\\/*))\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3615,\"url\":\"/goods-tool/snatch-order-tool-upgrade\",\"name\":\"抢量神器\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods-tool/snatch-order-tool-upgrade\"],\"defaultVisibility\":true,\"whitelist\":\"post(/api/price/mariana/smartPricing/showEntry)\"},{\"id\":602,\"url\":\"/act-bidding/home\",\"name\":\"爆款竞价\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/act-bidding/my-bidding-list\",\"/act-bidding/sign-detail\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3487,\"url\":\"https://live.pinduoduo.com/creator/index?from=mms\",\"name\":\"多多视频\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3530,\"url\":\"/kit/new?tool_full_channel=10323_97807\",\"name\":\"新客立减\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/kit/new\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3524,\"url\":\"/act-bidding/market-bid-home\",\"name\":\"营销竞价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/act-bidding/market-bid-home\",\"/act-bidding/market-sign\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":610,\"url\":\"https://live.pinduoduo.com/n-creator/live/home?from=mms\",\"name\":\"多多直播\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3532,\"url\":\"/tool/promotion?tool_full_channel=10323_97807\",\"name\":\"限时限量购\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/tool/promotion\"],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/marketingTools/limitTimeQuantity/sidebarWhitelist)\"},{\"id\":606,\"url\":\"/act-bidding/platform-purchase/home\",\"name\":\"平台招标\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/act/act_call_bidding/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3542,\"url\":\"/tool/sms\",\"name\":\"短信营销\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/tool/sms/*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3531,\"url\":\"/kit/inflation-coupon?tool_full_channel=10323_97807\",\"name\":\"膨胀券\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/kit/inflation-coupon\"],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/marketingTools/flatCoupon/sidebarWhitelist)\"},{\"id\":3470,\"url\":\"/mallcenter/member\",\"name\":\"店铺会员\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/member/*\"],\"defaultVisibility\":true,\"whitelist\":\"get(/earth/api/primeGiftPack/inWhiteList)\"},{\"id\":3519,\"url\":\"/kit/main-image\",\"name\":\"营销主图\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/kit/main-image\"],\"defaultVisibility\":true,\"whitelist\":\"post(/rivendell/api/marketingImage/whitelist)\"},{\"id\":3559,\"url\":\"/kit/price-insurance?tool_full_channel=10323_97807\",\"name\":\"价格保护\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/kit/price-insurance\"],\"defaultVisibility\":true,\"whitelist\":\"get(/maine/api/price/protect/mms/hit)\"}]},{\"id\":3635,\"name\":\"商家权益保护\",\"icon\":\"https://promotion.pddpic.com/promo/mms/f652aeb6-e60b-451f-b92f-46e44dae3cf9.png.slim.png\",\"children\":[{\"id\":3636,\"url\":\"/other/rule\",\"name\":\"规则更新\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3637,\"url\":\"/kit/goods-price-management?lowPriceFilter=true\",\"name\":\"低价预警\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3638,\"url\":\"/orders/appeals/badOrder\",\"name\":\"异常单申诉\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3639,\"url\":\"/orders/appeals/aftersale/order\",\"name\":\"售后申诉\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3640,\"url\":\"/goods/evaluation/index?sellerRightProtect=1\",\"name\":\"评价举报\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3641,\"url\":\"https://ipp.pinduoduo.com\",\"name\":\"知识产权保护\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3642,\"url\":\"/mallcenter/info/shopUpgrade/index\",\"name\":\"店铺升级\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/earth/api/merchant/white/inUpgradeWhiteList)\"},{\"id\":3643,\"url\":\"/pg/feedback\",\"name\":\"意见反馈\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":400,\"name\":\"账户资金\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/95b94fb8-77ec-4ac3-adef-8d3f29fdd1d0.png\",\"children\":[{\"id\":441,\"url\":\"/finance/balance?q=1\",\"name\":\"资金中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/FundManagement/withdraw/index\",\"/recharge/balance\",\"/FundManagement/SelectRechargeType/SelectRechargeType\",\"/FundManagement/AccountWithdraw2\",\"/FundManagement/AccountWithdraw2/edit_account\",\"/FundManagement/activity_deposit/select_deposit_way\",\"/FundManagement/activity_deposit/input_amount\",\"/finance/balance\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3474,\"url\":\"/cashier/finance/balance\",\"name\":\"资金中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":442,\"url\":\"/finance/payment-bills/index?q=1\",\"name\":\"对账中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/payment-bills/export-history\",\"/finance/payment-bills/index\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3475,\"url\":\"/cashier/finance/payment-bills\",\"name\":\"对账中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":403,\"url\":\"/finance/deposit\",\"name\":\"保证金\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/deposit\",\"/recharge/activity_bond\",\"/FundManagement/eReceipts\",\"/Fundmanagement/withdraw_deposit/index\",\"/recharge/enter_deposit\",\"FundManagement/activity_deposit/gear_deposit/offline_pay/index\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3477,\"url\":\"/cashier/finance/deposit\",\"name\":\"保证金\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":405,\"url\":\"/pg/deduciton_detail/record\",\"name\":\"消费者补偿明细\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/FundManagement/Chargebacks/withhold\",\"/FundManagement/Chargebacks/shipping\",\"/pg/deduciton_detail/stock\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":406,\"url\":\"/pg/restrict_list\",\"name\":\"资金限制\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mall/restrict_money\",\"/mall/restrict_detail\",\"/pg/restrict_list\",\"/pg/restrict_detail\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":404,\"url\":\"/finance/invoice/index\",\"name\":\"发票管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/invoice/index\",\"/finance/invoice/invoice-info-manage\",\"/finance/invoice/questions\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3479,\"url\":\"/cashier/finance/invoice\",\"name\":\"发票管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":410,\"url\":\"/finance/expense\",\"name\":\"营销结算\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/expense/invoice-norm\",\"/finance/expense/process\"],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/expense/checkGray)\"},{\"id\":3484,\"url\":\"/cashier/finance/fft-account\",\"name\":\"运营账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/summer-mms/cashier/verify/verifyFftPageAuth)\"}]},{\"id\":800,\"name\":\"店铺管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/a0b6afda-b18c-4bf9-b4c3-f48a3396ff36.png\",\"children\":[{\"id\":805,\"url\":\"/pg/violation_list\",\"name\":\"违规信息\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mall/violation_info/violation\",\"/mall/complain_result\",\"/mall/violation_complain\",\"/pg/violation_list\",\"/pg/violation_info\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":807,\"url\":\"/orders/appeals\",\"name\":\"订单申诉\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/appeals/*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":806,\"url\":\"/mallcenter/close/index\",\"name\":\"退店\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mallcenter/close\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":801,\"url\":\"/mallcenter/mallinfo\",\"name\":\"店铺信息\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/info/(?!(createNewMall/*))\",\"^/mallcenter/mallinfo\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":808,\"url\":\"/material/upload\",\"name\":\"图片空间\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/material\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":802,\"url\":\"/mallcenter/sub/account\",\"name\":\"子账号管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mallcenter/sub\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3573,\"url\":\"/decoration/home\",\"name\":\"店铺装修\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/decoration/home*\",\"/decoration/topic*\",\"/decoration/guide\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3577,\"url\":\"/goods/goods_categories_home\",\"name\":\"店铺页设置\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/decoration/notification\",\"/goods/up\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3540,\"url\":\"/orders/warnCenter\",\"name\":\"预警中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3549,\"url\":\"/orders/dataRiskWarn\",\"name\":\"安全风险\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/dataRiskWarn\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":810,\"url\":\"/mallcenter/storeManagement/index\",\"name\":\"门店管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/storeManagement\"],\"defaultVisibility\":false,\"whitelist\":\"post(/earth/api/mallStore/queryMallStoreWhiteList)\"},{\"id\":3497,\"url\":\"/mallcenter/info/createNewMall/index\",\"name\":\"新店管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/info/createNewMall\"],\"defaultVisibility\":true,\"whitelist\":\"get(/earth/api/whitelist/multiMall/inWhiteList)\"},{\"id\":820,\"url\":\"/profit-sharing\",\"name\":\"分账管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/profit-sharing\"],\"defaultVisibility\":false,\"whitelist\":\"post(/essexbusiness/manage/relation/common/is/split/mall)\"},{\"id\":3620,\"url\":\"/mallcenter/drugstore-audit\",\"name\":\"药房合同审核\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/medicineMerchant/mms/checkMallIsWhite)\"}]},{\"id\":500,\"name\":\"多多客服\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/fb5d7709-f9f3-4e9f-acfb-69d918868549.png\",\"children\":[{\"id\":503,\"url\":\"/mms-chat/overview\",\"name\":\"客服数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-chat/overview/store\",\"/mms-chat/overview/merchant\",\"/mms-chat/overview/robot\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":502,\"url\":\"/chat-service/status\",\"name\":\"实时管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/chat-service/status\",\"^/Pdd.html#/chats/status/index\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":505,\"url\":\"/mms-chat/tools\",\"name\":\"客服工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":501,\"url\":\"/mms-chat/search\",\"name\":\"聊天记录\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/chat-service/search\",\"^/Pdd.html#/chats/search/index\",\"^/mms-chat/search\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":504,\"url\":\"/chat-service/setting\",\"name\":\"消息设置\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/chat-service/setting\",\"^/Pdd.html#/chats/settings/index\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3384,\"url\":\"/chat-service/robot\",\"name\":\"客服机器人\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":508,\"url\":\"/mms-chat/service/promise\",\"name\":\"服务助手\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3482,\"url\":\"/mallcenter/chat-account-list\",\"name\":\"头像昵称\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/janus/api/customService/verificationDisplay)\"},{\"id\":3432,\"url\":\"/chat-service/callAccount\",\"name\":\"消费者隐私\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/fission/functions/mms-chat/call-entrance-gray)\"}]},{\"id\":1200,\"name\":\"多多进宝\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/feeb6de7-4647-4b85-abb8-3515c4d54465.png\",\"children\":[{\"id\":1202,\"url\":\"/jinbao/effect?click_from=MMS_SIDEBAR\",\"name\":\"进宝首页\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/index\",\"/jinbao/newEffect\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuIndex)\"},{\"id\":1203,\"url\":\"/jinbao/promotion/index?click_from=MMS_SIDEBAR\",\"name\":\"推广设置\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/promotion/index\",\"^/jinbao/mallPromotion\",\"^/jinbao/coupon\",\"^/jinbao/operateRecord\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuSupport)\"},{\"id\":1204,\"url\":\"/jinbao/promotionDetail?click_from=MMS_SIDEBAR\",\"name\":\"推广效果\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/promotionDetail\",\"^/jinbao/goodsEffect\",\"^/jinbao/orderDetail\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuSupport)\"},{\"id\":1205,\"url\":\"/jinbao/hotActivity?click_from=MMS_SIDEBAR\",\"name\":\"推广助力\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/zsactivity\",\"^/jinbao/secondKillActivity\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuSupport)\"},{\"id\":3417,\"url\":\"/jinbao/marketAccount?click_from=MMS_SIDEBAR\",\"name\":\"营销账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMarketAccount)\"},{\"id\":3413,\"url\":\"/jinbao/rateAccount?click_from=MMS_SIDEBAR\",\"name\":\"佣金账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuAccount)\"}]},{\"id\":3396,\"name\":\"采购管理\",\"icon\":\"https://commimg.pddpic.com/galerie-go/static/2020-07-22/95fe62f4-df95-438d-a787-bcc7b0afe5e1.png\",\"children\":[{\"id\":3397,\"url\":\"https://pifa.pinduoduo.com/?forceLogin=true\\u0026sn=84134\",\"name\":\"批发采购\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3420,\"url\":\"https://pifa.pinduoduo.com/order/?forceLogin=true\\u0026sn=84134\",\"name\":\"采购订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3419,\"url\":\"/supplier/distribution\",\"name\":\"分销代发\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/supplier/distribution/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/mille/mms/reseller/goods/sidebarShowable)\"}]},{\"id\":1300,\"name\":\"品牌管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/b61dd2ec-e9d8-41eb-971a-35957520e6ca.png\",\"children\":[{\"id\":1302,\"url\":\"/brand/applet/\",\"name\":\"拼内购\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/applet/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":1307,\"url\":\"/brand/marketing/home\",\"name\":\"营销玩法\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/marketing/*\",\"^/creative/marketing/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/marketing/navigation)\"},{\"id\":1305,\"url\":\"/brand/bigDiscount/\",\"name\":\"小程序大促\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/bigDiscount/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/philips/decoration/side/navigation)\"},{\"id\":1306,\"url\":\"/wxmp-decoration/\",\"name\":\"小程序装修\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/wxmp-decoration/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/philips/decoration/side/navigation)\"},{\"id\":1308,\"url\":\"/brand/applet/pin/data\",\"name\":\"小程序数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/report/*\",\"^/brand/report\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/philips/data/side/navigation)\"},{\"id\":1301,\"url\":\"/brand-decoration/\",\"name\":\"品牌站装修\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand-decoration/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/side/navigation)\"}]},{\"id\":3562,\"name\":\"成长中心\",\"icon\":\"https://funimg.pddpic.com/mms/1db572c3-182c-4063-a390-a2fb4c867edf.png.slim.png\",\"children\":[{\"id\":3563,\"url\":\"/other/rule\",\"name\":\"规则中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3564,\"url\":\"/daxue/home\",\"name\":\"拼多多课堂\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3565,\"url\":\"https://shuyuan.pinduoduo.com/\",\"name\":\"营销书院\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3567,\"url\":\"/other/helpcenter/\",\"name\":\"帮助中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3568,\"url\":\"/mallcenter/medal\",\"name\":\"勋章馆\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3569,\"url\":\"/mallcenter/ability/index\",\"name\":\"能力认证\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":900,\"name\":\"商家服务市场\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/e3967a00-fe52-4313-8939-9270aa8b2f44.png\",\"children\":[{\"id\":915,\"url\":\"https://fuwu.pinduoduo.com/service-market/my-service\",\"name\":\"我的服务\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":916,\"url\":\"https://fuwu.pinduoduo.com/service-market/my-auth\",\"name\":\"我的授权\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":901,\"url\":\"https://fuwu.pinduoduo.com/service-market/\",\"name\":\"服务市场\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":914,\"url\":\"https://fuwu.pinduoduo.com/service-market/evaluation-manage\",\"name\":\"服务评价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":913,\"url\":\"https://fuwu.pinduoduo.com/service-market/order-list\",\"name\":\"服务订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/service-market/order-detail\"],\"defaultVisibility\":true,\"whitelist\":\"\"}]}],\"extra\":{\"showHome\":true}},\"whitelistCookie\":\"3616,150,3523,3614,321,3613,3604,3594,3599,3602,3603,3608,3605,3621,3622,3588,3254,3532,3642,3474,3475,3477,3479,3482,1202,1203,1204,1205,3417\"},\"ua\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36\",\"headerProps\":{\"serverData\":{\"userInfo\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"mallOwner\":false,\"roleId\":1,\"isBindWeChat\":false,\"forceMobileVerify\":false,\"mallVerify\":true,\"mallInfoAuthority\":true,\"conjoinedUserId\":null,\"mall_id\":619231161,\"password_status\":1,\"server_time\":1746873063,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"mall\":{\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"company_phone\":\"\",\"merchant_type\":1,\"mall_type\":2,\"source_type\":3,\"oversea_type\":0,\"is_open\":1,\"staple_id\":\"4\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"status\":2,\"staple\":[\"家居生活\"],\"apply_close\":0},\"all\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"roles\":[{\"id\":1,\"name\":\"admin\",\"description\":\"管理员\",\"createdAt\":\"2015-12-10 23:35:30\",\"updatedAt\":\"2015-12-10 23:35:30\",\"display_name\":\"管理员\"}],\"mallOwner\":false,\"mall\":{\"id\":619231161,\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"staple_id\":\"4\",\"chat_enable\":0,\"company_address\":\"\",\"company_id\":\"\",\"company_name\":\"\",\"company_phone\":\"\",\"merchant_type\":1,\"status\":2,\"mall_type\":2,\"customs_record_no\":\"\",\"refund_address\":\"湖南省长沙市芙蓉区名士豪挺17栋1117\",\"refund_name\":\"陈嘉\",\"region_emergent\":0,\"offline_note\":\"\",\"wms_id\":0,\"score_avg\":0,\"created_at\":1741770733,\"updated_at\":1746174569,\"source_type\":3,\"has_merchant_coupon\":null,\"is_open\":1,\"username\":\"星空酒业avcn\",\"oversea_type\":0,\"entry_type\":5},\"staple\":[\"家居生活\"],\"applyClose\":0,\"isBindWeChat\":false,\"newHomePageWhiteList\":true,\"forceMobileVerify\":false,\"roleId\":1,\"isAppleIdBound\":false,\"appleIdName\":null,\"appleIdEmail\":null,\"mall_id\":619231161,\"password_status\":1,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"is_deleted\":0,\"is_mall_frozen\":0,\"is_mobile_verification\":1,\"platform_protocol\":null,\"is_white_list\":0,\"is_coupon_white_list\":true,\"is_marketing_white_list\":true,\"is_account_white\":false,\"is_ui_white\":true,\"is_alipay_white\":true,\"is_recommend\":true,\"server_time\":1746873063}},\"showKuajing\":null,\"headerMcAb\":{\"MMS_header_mcentry\":\"MMS_header_mcentry_30\"}}},\"umdSrc\":{\"Entry\":\"https://commimg.pddpic.com/mms_static/mms_umdkits/umd_kits_api_Entry.556a6ef7.v20250423142224_8f055100.js\"},\"modalSrc\":\"https://commimg.pddpic.com/mms_static/mms_umdkits/mms_modal_Modal.ad3381dc.v20250505155517_bab2af2a.js\",\"webp\":\"true\",\"backendAbtest\":null,\"userInfo\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"mallOwner\":false,\"roleId\":1,\"isBindWeChat\":false,\"forceMobileVerify\":false,\"mallVerify\":true,\"mallInfoAuthority\":true,\"conjoinedUserId\":null,\"mall_id\":619231161,\"password_status\":1,\"server_time\":1746873063,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"mall\":{\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"company_phone\":\"\",\"merchant_type\":1,\"mall_type\":2,\"source_type\":3,\"oversea_type\":0,\"is_open\":1,\"staple_id\":\"4\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"status\":2,\"staple\":[\"家居生活\"],\"apply_close\":0},\"all\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"roles\":[{\"id\":1,\"name\":\"admin\",\"description\":\"管理员\",\"createdAt\":\"2015-12-10 23:35:30\",\"updatedAt\":\"2015-12-10 23:35:30\",\"display_name\":\"管理员\"}],\"mallOwner\":false,\"mall\":{\"id\":619231161,\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"staple_id\":\"4\",\"chat_enable\":0,\"company_address\":\"\",\"company_id\":\"\",\"company_name\":\"\",\"company_phone\":\"\",\"merchant_type\":1,\"status\":2,\"mall_type\":2,\"customs_record_no\":\"\",\"refund_address\":\"湖南省长沙市芙蓉区名士豪挺17栋1117\",\"refund_name\":\"陈嘉\",\"region_emergent\":0,\"offline_note\":\"\",\"wms_id\":0,\"score_avg\":0,\"created_at\":1741770733,\"updated_at\":1746174569,\"source_type\":3,\"has_merchant_coupon\":null,\"is_open\":1,\"username\":\"星空酒业avcn\",\"oversea_type\":0,\"entry_type\":5},\"staple\":[\"家居生活\"],\"applyClose\":0,\"isBindWeChat\":false,\"newHomePageWhiteList\":true,\"forceMobileVerify\":false,\"roleId\":1,\"isAppleIdBound\":false,\"appleIdName\":null,\"appleIdEmail\":null,\"mall_id\":619231161,\"password_status\":1,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"is_deleted\":0,\"is_mall_frozen\":0,\"is_mobile_verification\":1,\"platform_protocol\":null,\"is_white_list\":0,\"is_coupon_white_list\":true,\"is_marketing_white_list\":true,\"is_account_white\":false,\"is_ui_white\":true,\"is_alipay_white\":true,\"is_recommend\":true,\"server_time\":1746873063}}},\"page\":\"/content\",\"query\":{\"msfrom\":\"mms_sidenav\"},\"buildId\":\"7i7Rbr-kpjosmeHv6knQY\",\"assetPrefix\":\"https://mms-static.pddpic.com/main\",\"isFallback\":false,\"customServer\":true,\"gip\":true,\"appGip\":true}"); return "{\"props\":{\"pageProps\":{\"coreData\":{\"extra\":{\"mallId\":619231161,\"userId\":164916361,\"query\":{\"msfrom\":\"mms_sidenav\"}},\"data\":{\"manifest\":{\"static/css/0.dc254586d.chunk.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/0.dc254586d.chunk.css\",\"static/js/0.adcff17d.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/0.adcff17d.chunk.v20250421175052_52af6211.js\",\"static/css/1.eaf8440e0.chunk.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/1.eaf8440e0.chunk.css\",\"static/js/1.7b6adcfc.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/1.7b6adcfc.chunk.v20250421175052_52af6211.js\",\"home.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/home.c9c7f2697.chunk.css\",\"home.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/home.94e0e045.chunk.v20250421175052_52af6211.js\",\"main.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/main.76d110fdd.css\",\"main.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/main.5cb4faaf.v20250421175052_52af6211.js\",\"vendors~home.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/vendors~home.2c84f63a3.chunk.css\",\"vendors~home.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/vendors~home.bd1dec3c.chunk.v20250421175052_52af6211.js\",\"static/js/5.3a39fdc8.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/5.3a39fdc8.chunk.v20250421175052_52af6211.js\",\"static/js/6.29f55ef7.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/6.29f55ef7.chunk.v20250421175052_52af6211.js\",\"static/js/7.b63a8826.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/7.b63a8826.chunk.v20250421175052_52af6211.js\",\"static/css/8.c866079d3.chunk.css\":\"https://mms-static.pddpic.com/mms-chat/static/css/8.c866079d3.chunk.css\",\"static/js/8.4da865e0.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/8.4da865e0.chunk.v20250421175052_52af6211.js\",\"static/js/9.bd8923ca.chunk.v20250421175052_52af6211.js\":\"https://mms-static.pddpic.com/mms-chat/static/js/9.bd8923ca.chunk.v20250421175052_52af6211.js\",\"index.html\":\"https://mms-static.pddpic.com/mms-chat/index.html\",\"static/media/advanced-shunt-bg.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/advanced-shunt-bg.cec02a28.png\",\"static/media/style.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/urge-exmaple_2.ea87281f.png\",\"static/media/custom-order-example.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/custom-order-example.6deda24a.png\",\"static/media/index.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/urge-step-4.c27d59ed.png\",\"static/media/PerformanceRow.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/third.9f0ed8cb.png\",\"static/media/forbiddenWord.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/forbidden-word-expample.969b583c.gif\",\"static/media/UrgeOrderData.scss\":\"https://mms-static.pddpic.com/mms-chat/static/media/help-buy-arrow.55b6bf1f.png\",\"static/media/qrcode-avator.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/qrcode-avator.b7ed5db3.png\",\"static/media/qrcode-banner.png\":\"https://mms-static.pddpic.com/mms-chat/static/media/qrcode-banner.c902d9ee.png\"}},\"status\":{\"manifest\":1},\"isABTestObj\":{}},\"page\":\"Content\",\"asPath\":\"/mms-chat/search\"},\"_location\":{\"pathname\":\"/mms-chat/search\"},\"abtest\":{\"success\":true,\"vids\":[620635],\"vids_str\":\"620635\",\"result_json\":\"{\\\"tool_ui_promotion_drop_precreate\\\":\\\"B\\\",\\\"url_pattern\\\":\\\"^/tool/promotion\\\"}\",\"result_map\":{\"tool_ui_promotion_drop_precreate\":\"B\",\"url_pattern\":\"^/tool/promotion\"},\"version_info\":[{\"id\":620635,\"params\":\"{\\\"tool_ui_promotion_drop_precreate\\\":\\\"B\\\",\\\"url_pattern\\\":\\\"^/tool/promotion\\\"}\",\"status\":1}]},\"user\":{\"id\":164916361,\"mallId\":619231161},\"layoutConfig\":{\"oldNoNav\":[\"^/act-bidding/sign-success\",\"^/act/act_bidding_new$\",\"^/act/act_bidding_new/$\",\"^/act/act_bidding_new/adjust\",\"^/act/act_bidding_new/quick_bidding\",\"^/act/act_bidding_new/quick_bidding_sign\",\"^/act/act_bidding_new/success_copy\",\"^/act/act_bidding_sign$\",\"^/act/act_call_bidding$\",\"^/act/act_call_bidding/adjust\",\"^/act/act_call_bidding/quick_bidding\",\"^/act/act_call_bidding/quick_bidding_sign\",\"^/act/act_call_bidding/success_copy\",\"^/act/batch/choose_goods\",\"^/act/choose_goods\",\"^/act/mall_sign\",\"^/act/message_set\",\"^/act/other/news\",\"^/act/other/news_detail\",\"^/act/promotion/anniversary/home\",\"^/act/promotion/anniversary/sign\",\"^/act/promotion/anniversary/success\",\"^/act/sign$\",\"^/aftersales/aftersale_detail$\",\"^/aftersales/aftersale_list/batch_export$\",\"^/chat-service/hotFaq$\",\"^/creative/coupon/create$\",\"^/exp/activity\",\"^/express/cloudPrintPromotion$\",\"^/express/newCloudPrintPromotion$\",\"^/finance/account/bind-card$\",\"^/finance/account/mms-bind-card$\",\"^/finance/alipay$\",\"^/finance/cashier$\",\"^/finance/recharge/act-deposit$\",\"^/finance/recharge/mall-deposit$\",\"^/finance/wechatpay$\",\"^/goods-edit/category$\",\"^/goods-edit/goods_add/brand/result$\",\"^/goods-edit/goods_add/brand_feedback$\",\"^/goods-edit/goods_add/index$\",\"^/goods-tool/batch-delivery/create\",\"^/goods-tool/presale/create\",\"^/goods-tool/question/batch_edit\",\"^/goods-tool/question/edit\",\"^/goods-tool/remote-delivery\",\"^/goods-tool/remote-delivery/allowance\",\"^/goods/batch_change_sku$\",\"^/goods/batch_set_size$\",\"^/goods/goods_add/brand_feedback$\",\"^/goods/goods_decoration$\",\"^/goods/goods_list/batch_change$\",\"^/goods/goods_list/batch_restock\",\"^/goods/goods_list/problems$\",\"^/goods/goods_list/problems_success$\",\"^/goods/goods_list/spring_festival_batch_change_price$\",\"^/goods/question/batch_edit$\",\"^/goods/question/edit$\",\"^/goods/sales_inherit/onsale$\",\"^/goods/size$\",\"^/goods/tools/remote_delivery\",\"^/goods/tools/water_marker/marked_goods$\",\"^/guide/best-selling$\",\"^/guide/conversion$\",\"^/guide/publish-product$\",\"^/guide/traffic-guidance$\",\"^/invoice/history$\",\"^/invoice/opening$\",\"^/invoice/renew$\",\"^/jinbao/activitypromotion\",\"^/jinbao/openMallSuccess\",\"^/jinbao/tenBillion\",\"^/jinbao/zsactivity/enroll\",\"^/kit/freebie/create$\",\"^/kit/freebie/create-freebie$\",\"^/kit/goods-tool/freebie/create$\",\"^/kit/goods-tool/freebie/create-freebie$\",\"^/light-app\",\"^/logistics/cloudPrintProtocol$\",\"^/mallcenter/bindWechat\",\"^/mallcenter/changeAccountInfo/accountSetting\",\"^/mallcenter/close/finance\",\"^/mallcenter/identification\",\"^/mallcenter/info/entry/(?!auditResult)(?!promise)\",\"^/mallcenter/info/shopTags/step\\\\d$\",\"^/mallcenter/info/topspeed_enter/(?!auditResult)\",\"^/mallcenter/promotion\",\"^/mallcenter/salesInherit\",\"^/mallcenter/uploadExcell\",\"^/mallcenter/vipBrand\",\"^/mallcenter/welfare\",\"^/mms-chat/DailyOrderLoss$\",\"^/orders/aftersale/aftersale_detail\",\"^/orders/detail\",\"^/orders/nationalSubsidy/detail$\",\"^/other/404\",\"^/other/informcenter\",\"^/other/latestNewsDetail\",\"^/other/latestNewsList\",\"^/other/report\",\"^/other/reportSuccess\",\"^/pg/delay_punish\",\"^/pg/inbox-reply\",\"^/pg/knock$\",\"^/pg/letter_of_commitment$\",\"^/service-market/activity-equity$\",\"^/service-market/invoice-pay$\",\"^/supplier/instead/create$\",\"^/supplier/instead/edit$\",\"^/supplier/preorder/create$\",\"^/supplier/preorder/detail\",\"^/supplier/wholesale/create$\",\"^/supplier/wholesale/edit$\",\"^/sycm/ocean\",\"^/tool/activity/subsidy/rule$\",\"^/tool/cashback/create$\",\"^/tool/cashback/create/new$\",\"^/tool/freebie/create$\",\"^/tool/freebie/create-freebie$\",\"^/tool/goods-tool/freebie/create$\",\"^/tool/goods-tool/freebie/create-freebie$\",\"^/tool/goods_coupon/create$\",\"^/tool/mall_coupon/create$\",\"^/tool/sms/settings/market$\",\"^/tool/sms/settings/multi$\",\"^/tool/sms/settings/remind$\",\"^/tool/sms/settings/seckill$\",\"^/tool/sms/taskCertain$\",\"^/tool/sms/winningRecord$\",\"^orders/protocol\"],\"noNavRoutes\":[\"^/act-bidding/batch-adjust$\",\"^/act-bidding/confirm-register\",\"^/act-bidding/market-bid-again\",\"^/act-bidding/market-sign$\",\"^/act-bidding/market-sign-adjust$\",\"^/act-bidding/multi-resource-bid-enroll$\",\"^/act-bidding/platform-purchase/sign$\",\"^/act-bidding/reference-message$\",\"^/act-bidding/requirement$\",\"^/act-bidding/sign$\",\"^/act-bidding/sign-success\",\"^/act-bidding/ten-billion-region-bid-enroll$\",\"^/act-bidding/time-limit-bid-enroll$\",\"^/act/act_bidding_new$\",\"^/act/act_bidding_new/$\",\"^/act/act_bidding_new/adjust\",\"^/act/act_bidding_new/market_sign\",\"^/act/act_bidding_new/price-adjust\",\"^/act/act_bidding_new/quick_bidding\",\"^/act/act_bidding_new/quick_bidding_sign\",\"^/act/act_bidding_new/sign$\",\"^/act/act_bidding_new/success_copy\",\"^/act/act_bidding_sign$\",\"^/act/act_call_bidding$\",\"^/act/act_call_bidding/adjust\",\"^/act/act_call_bidding/quick_bidding\",\"^/act/act_call_bidding/quick_bidding_sign\",\"^/act/act_call_bidding/success_copy\",\"^/act/act_material/create$\",\"^/act/act_material/detail$\",\"^/act/act_material/edit$\",\"^/act/act_material_list$\",\"^/act/act_platform_purchase/sign$\",\"^/act/auto_adjust_price$\",\"^/act/batch-enroll-all$\",\"^/act/batch/choose_goods\",\"^/act/batch_adjust$\",\"^/act/batch_adjust_excel$\",\"^/act/batch_handle$\",\"^/act/choose_goods\",\"^/act/coupon_sign_batch\",\"^/act/enroll/newPromotionEnroll$\",\"^/act/enroll/promotionEnroll$\",\"^/act/flow-protection$\",\"^/act/goods_manage/result$\",\"^/act/goods_price/confirm\",\"^/act/goods_price/confirm$\",\"^/act/limit_time_sign$\",\"^/act/mall_sign\",\"^/act/message_set\",\"^/act/multi-act-enroll$\",\"^/act/multi-quick-channel$\",\"^/act/other/all_enroll_detail$\",\"^/act/other/news\",\"^/act/other/news_detail\",\"^/act/other/reduction_detail$\",\"^/act/promotion/anniversary/home\",\"^/act/promotion/anniversary/sign\",\"^/act/promotion/anniversary/success\",\"^/act/quick_channel$\",\"^/act/quick_enroll/list\",\"^/act/sign$\",\"^/act/sign/success_batch\",\"^/act/sign_success\",\"^/act/tool_act/enroll$\",\"^/aftersales/aftersale_detail$\",\"^/aftersales/aftersale_list/batch_export$\",\"^/aftersales/customer_complain_appeal/close$\",\"^/aftersales/good_people$\",\"^/aftersales/order_appeal$\",\"^/aftersales/platform_inquiry_goods$\",\"^/aftersales/platform_inquiry_goods/detail$\",\"^/aftersales/smart_express/black/add$\",\"^/aftersales/work_order/detail$\",\"^/aftersales/work_order/tododetail$\",\"^/brand-decoration/\\\\d+/home-editor/\\\\d+$\",\"^/brand/bigDiscount/add$\",\"^/brand/bigDiscount/detail/\",\"^/brand/billion/query$\",\"^/brand/introduction$\",\"^/chat-service/catalog/add$\",\"^/chat-service/hotFaq$\",\"^/chat-service/robot/apply$\",\"^/chat-service/robot/newMallTask$\",\"^/chat-service/robot/setting\",\"^/creative/coupon/create$\",\"^/decoration/home-editor\",\"^/decoration/simple-editor\",\"^/decoration/simple-template/list$\",\"^/decoration/topic-editor\",\"^/exp/activity\",\"^/express/cloudPrintPromotion$\",\"^/express/hk/account-info$\",\"^/express/hk/branch_line/edit$\",\"^/express/hk/line/edit$\",\"^/express/hk/no-permission$\",\"^/express/newCloudPrintPromotion$\",\"^/express/win/package\",\"^/finance/account/bind-card$\",\"^/finance/account/mms-bind-card$\",\"^/finance/alipay$\",\"^/finance/cashier$\",\"^/finance/recharge/act-deposit$\",\"^/finance/recharge/mall-deposit$\",\"^/finance/wechatpay$\",\"^/goods-edit/category$\",\"^/goods-edit/goods_add/brand/result$\",\"^/goods-edit/goods_add/brand_feedback$\",\"^/goods-edit/goods_add/index$\",\"^/goods-tool/area-distribution$\",\"^/goods-tool/area-distribution-set$\",\"^/goods-tool/batch-delivery/create\",\"^/goods-tool/group-sale/decoration$\",\"^/goods-tool/optimize-landing\",\"^/goods-tool/pdd-select/publish-goods$\",\"^/goods-tool/platform-recruitment-products\",\"^/goods-tool/presale/create\",\"^/goods-tool/preview-mobile-page$\",\"^/goods-tool/quality-inspection-certification-3c$\",\"^/goods-tool/question/batch_edit\",\"^/goods-tool/question/edit\",\"^/goods-tool/remote-delivery\",\"^/goods-tool/remote-delivery/allowance\",\"^/goods-tool/temu-goods/category$\",\"^/goods-tool/temu-goods/product-edit$\",\"^/goods-tool/temu-goods/result$\",\"^/goods/batch_change_sku$\",\"^/goods/batch_decoration\",\"^/goods/batch_delivery/create\",\"^/goods/batch_set_brand$\",\"^/goods/batch_set_size$\",\"^/goods/business_invitation/style_shop$\",\"^/goods/category$\",\"^/goods/common_batch_edit$\",\"^/goods/evaluation/activity/create$\",\"^/goods/evaluation_cash/activity/create$\",\"^/goods/evaluation_cash/activity/create-for-ranking$\",\"^/goods/goods_add/brand/result$\",\"^/goods/goods_add/brand_feedback$\",\"^/goods/goods_add/index$\",\"^/goods/goods_add/special_brand$\",\"^/goods/goods_add/success$\",\"^/goods/goods_decoration\",\"^/goods/goods_decoration$\",\"^/goods/goods_draft_win$\",\"^/goods/goods_list/batch_change\",\"^/goods/goods_list/batch_change$\",\"^/goods/goods_list/batch_change_price\",\"^/goods/goods_list/batch_restock\",\"^/goods/goods_list/batch_set_property$\",\"^/goods/goods_list/chance\",\"^/goods/goods_list/chance/hot_keyword$\",\"^/goods/goods_list/goods_online/optimize_evaluation$\",\"^/goods/goods_list/goods_online/unmatched_rule_list$\",\"^/goods/goods_list/low_price_manage\",\"^/goods/goods_list/problems$\",\"^/goods/goods_list/problems_success$\",\"^/goods/goods_list/specification_sold_out\",\"^/goods/goods_list/spring_festival_batch_change_price$\",\"^/goods/goods_list/super_stars_goods$\",\"^/goods/goods_list_win$\",\"^/goods/goods_record_win$\",\"^/goods/goods_standard/apply\",\"^/goods/goods_standard/record\",\"^/goods/question/batch_edit$\",\"^/goods/question/edit$\",\"^/goods/sales_inherit/onsale$\",\"^/goods/size$\",\"^/goods/tools/remote_delivery\",\"^/goods/tools/water_marker/marked_goods$\",\"^/guide/best-selling$\",\"^/guide/conversion$\",\"^/guide/publish-product$\",\"^/guide/traffic-guidance$\",\"^/invoice/agreement$\",\"^/invoice/center/(batchInvoicing)$\",\"^/invoice/ddmc\",\"^/invoice/history$\",\"^/invoice/manual/batchInvoicing$\",\"^/invoice/opening$\",\"^/invoice/renew$\",\"^/jinbao/activitypromotion\",\"^/jinbao/distribution/notOpenLand$\",\"^/jinbao/openMallSuccess\",\"^/jinbao/tenBillion\",\"^/jinbao/zsactivity/enroll\",\"^/kit/baiyi-rates$\",\"^/kit/bonus-for-fans/create$\",\"^/kit/brand-price-change\",\"^/kit/bundle\",\"^/kit/combo-offer/result\",\"^/kit/evaluation/create$\",\"^/kit/evaluation/create-for-ranking$\",\"^/kit/freebie/create$\",\"^/kit/freebie/create-freebie$\",\"^/kit/get-one-free/add-goods$\",\"^/kit/get-one-free/result$\",\"^/kit/goods-follow-price\",\"^/kit/goods-tool/freebie/create$\",\"^/kit/goods-tool/freebie/create-freebie$\",\"^/kit/incubator/one-key-optimization$\",\"^/kit/inflation-coupon/create$\",\"^/kit/inflation-coupon/create/result\",\"^/kit/multiOrderDiscountArea/create$\",\"^/kit/new-offer/create$\",\"^/kit/new-offer/create/result$\",\"^/kit/new/create$\",\"^/kit/new/create/result$\",\"^/kit/pinxiaoquan/create$\",\"^/kit/pinxiaoquan/create/result$\",\"^/kit/retain-order/create$\",\"^/kit/retain-order/edit$\",\"^/kit/visit-task/create$\",\"^/kit/volume-discount/create$\",\"^/light-app\",\"^/live/data-center$\",\"^/live/data-detail$\",\"^/live/guide-cps$\",\"^/live/guide-obs$\",\"^/live/invite-manage$\",\"^/live/obs-introduce$\",\"^/live/pearls-protocol-sign$\",\"^/live/sell-goods-anchor-rank$\",\"^/logistics/cloudPrintDownload$\",\"^/logistics/cloudPrintProtocol$\",\"^/logistics/downloads$\",\"^/logistics/dragon-tiger-list$\",\"^/logistics/draw-sms$\",\"^/logistics/editor\",\"^/logistics/editor$\",\"^/logistics/editorlists\",\"^/logistics/editorlists$\",\"^/mallcenter/1111/promotion$\",\"^/mallcenter/\\\\d+/promotion$\",\"^/mallcenter/ability/exam\",\"^/mallcenter/bindWechat\",\"^/mallcenter/changeAccountInfo/accountSetting\",\"^/mallcenter/changeAccountInfo/findAccountName\",\"^/mallcenter/changeAccountInfo/findMallName$\",\"^/mallcenter/changeAccountInfo/forgetMobile\",\"^/mallcenter/changeAccountInfo/phoneUnbind\",\"^/mallcenter/changeAccountInfo/phoneValidate\",\"^/mallcenter/changeAccountInfo/weakPwdEdit\",\"^/mallcenter/close/finance\",\"^/mallcenter/group-chat$\",\"^/mallcenter/identification\",\"^/mallcenter/info/entry/(?!auditResult)\",\"^/mallcenter/info/entry/(?!auditResult)(?!promise)\",\"^/mallcenter/info/entry/enterprise\",\"^/mallcenter/info/entry/index\",\"^/mallcenter/info/entry/individ$\",\"^/mallcenter/info/entry/oversea\",\"^/mallcenter/info/mainChange$\",\"^/mallcenter/info/mainChange/apply$\",\"^/mallcenter/info/mainChange/check$\",\"^/mallcenter/info/mainChange/verify$\",\"^/mallcenter/info/shopTags/step\\\\d$\",\"^/mallcenter/info/topspeed_enter/(?!auditResult)\",\"^/mallcenter/merchant-poster$\",\"^/mallcenter/promotion\",\"^/mallcenter/protocol\",\"^/mallcenter/relativeMainChange\",\"^/mallcenter/resetPwd\",\"^/mallcenter/salesInherit\",\"^/mallcenter/salesPromotion\",\"^/mallcenter/simulate-district$\",\"^/mallcenter/stockTaking/plan\",\"^/mallcenter/storeManagement/createStore\",\"^/mallcenter/storeManagement/editStore\",\"^/mallcenter/survey$\",\"^/mallcenter/uploadExcell\",\"^/mallcenter/vipBrand\",\"^/mallcenter/welfare\",\"^/merchant-unify\",\"^/mms-chat/DailyOrderLoss$\",\"^/mms-marketing-mixin/batch-adjust-price$\",\"^/mms-marketing-mixin/quick-get-orders$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/add$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/edit$\",\"^/orders/activityVerify$\",\"^/orders/aftersale/aftersale_detail\",\"^/orders/appeal-false$\",\"^/orders/appeals/aftersale/refund-only$\",\"^/orders/detail\",\"^/orders/goods/qualityReport\",\"^/orders/goods/snapshot$\",\"^/orders/merchantCompensationRecovery$\",\"^/orders/nationalSubsidy/detail$\",\"^/orders/remoteAreasFreeShip$\",\"^/orders/remoteAreasFreeShip/fail\",\"^/orders/remoteAreasFreeShip/success$\",\"^/orders/remoteAreasLargeMailRule$\",\"^/orders/remoteAreasOrderSubsidy$\",\"^/orders/temu/act/similarGoodsApply$\",\"^/orders/temu/detail$\",\"^/orders/temu/springFestivalInBusiness/applyGoods$\",\"^/orders/thirdPartyDelivery$\",\"^/orders/win$\",\"^/orders/win/list$\",\"^/orders/win/merge$\",\"^/orders/win/temu/trusteeship$\",\"^/orders/xjLocalWarehouse$\",\"^/other/404\",\"^/other/bbs/offline$\",\"^/other/colleage/home\",\"^/other/colleage/list\",\"^/other/college/center\",\"^/other/college/favor\",\"^/other/college/learn\",\"^/other/college/live\",\"^/other/college/living\",\"^/other/download_app\",\"^/other/downloadapp\",\"^/other/help/detail\",\"^/other/helpcenter\",\"^/other/informcenter\",\"^/other/latestNewsDetail\",\"^/other/latestNewsList\",\"^/other/mail/\",\"^/other/oneredirect$\",\"^/other/overseas$\",\"^/other/questionnaire\",\"^/other/redirect\",\"^/other/reporExamine\",\"^/other/report\",\"^/other/reportCustomsService\",\"^/other/reportSuccess\",\"^/other/rule\",\"^/other/temu/rule$\",\"^/other/tradeIn/protocol$\",\"^/pg/delay_punish\",\"^/pg/examination$\",\"^/pg/inbox-reply\",\"^/pg/knock$\",\"^/pg/letter_of_commitment$\",\"^/service-market/activity-equity$\",\"^/service-market/activity-rookie$\",\"^/service-market/activity-rookie-cus$\",\"^/service-market/activity-rookie/ticket$\",\"^/service-market/auth$\",\"^/service-market/chat/order-list$\",\"^/service-market/invoice-pay$\",\"^/static\",\"^/supplier-shop/403\",\"^/supplier-shop/entry\",\"^/supplier-shop/entry/detail\",\"^/supplier-shop/introduction-page\",\"^/supplier-shop/settle-in\",\"^/supplier/batchUpload$\",\"^/supplier/batchUpload/result$\",\"^/supplier/instead/create$\",\"^/supplier/instead/edit$\",\"^/supplier/preorder/create$\",\"^/supplier/preorder/detail\",\"^/supplier/wholesale/create$\",\"^/supplier/wholesale/edit$\",\"^/supplier/wholesale/result$\",\"^/sycm/ocean\",\"^/tool/activity/fiveAnniversary\",\"^/tool/activity/subsidy/rule$\",\"^/tool/activity/valentine\",\"^/tool/bonus-for-fans/create$\",\"^/tool/bundle/create$\",\"^/tool/bundle/create/select-sku$\",\"^/tool/cashback/618\",\"^/tool/cashback/721\",\"^/tool/cashback/create$\",\"^/tool/cashback/create/new$\",\"^/tool/coupon/create$\",\"^/tool/coupon/create/result$\",\"^/tool/coupon/membership/create$\",\"^/tool/cross-mall-cashback/create$\",\"^/tool/cross-mall-cashback/enRoll$\",\"^/tool/cross-mall-cashback/primaryEnRoll$\",\"^/tool/disqualified\",\"^/tool/free\",\"^/tool/freebie/create$\",\"^/tool/freebie/create-freebie$\",\"^/tool/full-amount-reduce/create$\",\"^/tool/full-amount-reduce/result$\",\"^/tool/get-one-free/add-goods$\",\"^/tool/get-one-free/result$\",\"^/tool/goods-tool/freebie/create$\",\"^/tool/goods-tool/freebie/create-freebie$\",\"^/tool/goods_coupon/create$\",\"^/tool/incubator/one-key-optimization$\",\"^/tool/mall_coupon/create$\",\"^/tool/multi-piece-discount/create$\",\"^/tool/multi-piece-discount/result$\",\"^/tool/multiOrderDiscountArea/create$\",\"^/tool/new/create$\",\"^/tool/payAfterUse\",\"^/tool/preferential\",\"^/tool/promotion/create\",\"^/tool/promotion/create/lead-home-page\",\"^/tool/promotion/create/quickSetup\",\"^/tool/promotion/create/restart\",\"^/tool/promotion/modify$\",\"^/tool/sms/act/adLottery$\",\"^/tool/sms/act/newRemind/dataReport$\",\"^/tool/sms/act/newRemind/index$\",\"^/tool/sms/new-year-subsidies\",\"^/tool/sms/settings/market$\",\"^/tool/sms/settings/multi$\",\"^/tool/sms/settings/remind$\",\"^/tool/sms/settings/remind-union\",\"^/tool/sms/settings/seckill$\",\"^/tool/sms/taskCertain$\",\"^/tool/sms/winningRecord$\",\"^/tool/surprise-coupon/create$\",\"^/tool/surprise-coupon/result$\",\"^/tool/visit-task/create$\",\"^/wxmp-decoration/home-editor$\",\"^orders/protocol\"],\"noHeaderRoutes\":[\"^/brand-decoration/\\\\d+/home-editor/\\\\d+$\",\"^/brand/introduction$\",\"^/chat-service/robot/setting\",\"^/decoration/home-editor\",\"^/decoration/simple-editor\",\"^/decoration/simple-template/list$\",\"^/decoration/topic-editor\",\"^/express/hk/account-info$\",\"^/express/hk/no-permission$\",\"^/express/win/package\",\"^/goods-tool/group-sale/decoration$\",\"^/goods-tool/preview-mobile-page$\",\"^/goods-tool/quality-inspection-certification-3c$\",\"^/goods/batch_decoration\",\"^/goods/business_invitation/style_shop$\",\"^/goods/goods_decoration\",\"^/goods/goods_draft_win$\",\"^/goods/goods_list_win$\",\"^/goods/goods_record_win$\",\"^/invoice/ddmc\",\"^/live/obs-introduce$\",\"^/live/sell-goods-anchor-rank$\",\"^/logistics/editor\",\"^/logistics/editorlists\",\"^/mallcenter/ability/exam\",\"^/mallcenter/changeAccountInfo/findAccountName\",\"^/mallcenter/changeAccountInfo/forgetMobile\",\"^/mallcenter/changeAccountInfo/phoneUnbind\",\"^/mallcenter/changeAccountInfo/phoneValidate\",\"^/mallcenter/changeAccountInfo/weakPwdEdit\",\"^/mallcenter/info/entry/(?!auditResult)\",\"^/mallcenter/info/entry/enterprise\",\"^/mallcenter/info/entry/index\",\"^/mallcenter/info/entry/individ$\",\"^/mallcenter/info/entry/oversea\",\"^/mallcenter/info/mainChange$\",\"^/mallcenter/info/mainChange/apply$\",\"^/mallcenter/info/mainChange/check$\",\"^/mallcenter/info/mainChange/verify$\",\"^/mallcenter/protocol\",\"^/mallcenter/resetPwd\",\"^/merchant-unify\",\"^/orders/win$\",\"^/orders/win/list$\",\"^/orders/win/merge$\",\"^/orders/win/temu/trusteeship$\",\"^/other/colleage/home\",\"^/other/colleage/list\",\"^/other/college/center\",\"^/other/college/favor\",\"^/other/college/learn\",\"^/other/college/live\",\"^/other/college/living\",\"^/other/download_app\",\"^/other/help/detail\",\"^/other/oneredirect$\",\"^/other/overseas$\",\"^/other/questionnaire\",\"^/other/redirect\",\"^/other/reporExamine\",\"^/other/reportCustomsService\",\"^/other/temu/rule$\",\"^/service-market/activity-rookie$\",\"^/service-market/activity-rookie/ticket$\",\"^/service-market/auth$\",\"^/service-market/chat/order-list$\",\"^/static\",\"^/wxmp-decoration/home-editor$\"],\"fullWidthRoutes\":[\"^/act-bidding/batch-adjust$\",\"^/act-bidding/confirm-register\",\"^/act-bidding/market-bid-again\",\"^/act-bidding/market-sign$\",\"^/act-bidding/market-sign-adjust$\",\"^/act-bidding/multi-resource-bid-enroll$\",\"^/act-bidding/sign$\",\"^/act-bidding/ten-billion-region-bid-enroll$\",\"^/act-bidding/time-limit-bid-enroll$\",\"^/act/act_bidding_new/market_sign\",\"^/act/act_bidding_new/price-adjust\",\"^/act/act_bidding_new/sign$\",\"^/act/act_material/create$\",\"^/act/act_material/detail$\",\"^/act/act_material/edit$\",\"^/act/act_material_list$\",\"^/act/batch_adjust_excel$\",\"^/act/coupon_sign_batch\",\"^/act/enroll/newPromotionEnroll$\",\"^/act/enroll/promotionEnroll$\",\"^/act/goods_price/confirm$\",\"^/act/other/all_enroll_detail$\",\"^/act/other/reduction_detail$\",\"^/act/tool_act/enroll$\",\"^/brand-decoration/\\\\d+/home-editor/\\\\d+$\",\"^/brand/introduction$\",\"^/chat-service/catalog/add$\",\"^/chat-service/robot/apply$\",\"^/chat-service/robot/newMallTask$\",\"^/chat-service/robot/setting\",\"^/decoration/home-editor\",\"^/decoration/simple-editor\",\"^/decoration/simple-template/list$\",\"^/decoration/topic-editor\",\"^/express/hk/account-info$\",\"^/express/hk/no-permission$\",\"^/express/win/package\",\"^/goods-tool/group-sale/decoration$\",\"^/goods-tool/preview-mobile-page$\",\"^/goods-tool/quality-inspection-certification-3c$\",\"^/goods/batch_decoration\",\"^/goods/batch_delivery/create\",\"^/goods/business_invitation/style_shop$\",\"^/goods/goods_decoration\",\"^/goods/goods_draft_win$\",\"^/goods/goods_list/chance\",\"^/goods/goods_list_win$\",\"^/goods/goods_record_win$\",\"^/invoice/agreement$\",\"^/invoice/center/(batchInvoicing)$\",\"^/invoice/ddmc\",\"^/invoice/manual/batchInvoicing$\",\"^/jinbao/distribution/notOpenLand$\",\"^/live/data-center$\",\"^/live/guide-obs$\",\"^/live/invite-manage$\",\"^/live/obs-introduce$\",\"^/live/pearls-protocol-sign$\",\"^/live/sell-goods-anchor-rank$\",\"^/logistics/cloudPrintDownload$\",\"^/logistics/downloads$\",\"^/logistics/dragon-tiger-list$\",\"^/logistics/draw-sms$\",\"^/logistics/editor\",\"^/logistics/editor$\",\"^/logistics/editorlists\",\"^/logistics/editorlists$\",\"^/mallcenter/1111/promotion$\",\"^/mallcenter/\\\\d+/promotion$\",\"^/mallcenter/ability/exam\",\"^/mallcenter/changeAccountInfo/findAccountName\",\"^/mallcenter/changeAccountInfo/forgetMobile\",\"^/mallcenter/changeAccountInfo/phoneUnbind\",\"^/mallcenter/changeAccountInfo/phoneValidate\",\"^/mallcenter/changeAccountInfo/weakPwdEdit\",\"^/mallcenter/group-chat$\",\"^/mallcenter/info/entry/(?!auditResult)\",\"^/mallcenter/info/entry/enterprise\",\"^/mallcenter/info/entry/index\",\"^/mallcenter/info/entry/individ$\",\"^/mallcenter/info/entry/oversea\",\"^/mallcenter/info/mainChange$\",\"^/mallcenter/info/mainChange/apply$\",\"^/mallcenter/info/mainChange/check$\",\"^/mallcenter/info/mainChange/verify$\",\"^/mallcenter/merchant-poster$\",\"^/mallcenter/protocol\",\"^/mallcenter/resetPwd\",\"^/mallcenter/salesPromotion\",\"^/mallcenter/simulate-district$\",\"^/mallcenter/stockTaking/plan\",\"^/merchant-unify\",\"^/orders/goods/qualityReport\",\"^/orders/goods/snapshot$\",\"^/orders/temu/detail$\",\"^/orders/win$\",\"^/orders/win/list$\",\"^/orders/win/merge$\",\"^/orders/win/temu/trusteeship$\",\"^/other/colleage/home\",\"^/other/colleage/list\",\"^/other/college/center\",\"^/other/college/favor\",\"^/other/college/learn\",\"^/other/college/live\",\"^/other/college/living\",\"^/other/download_app\",\"^/other/downloadapp\",\"^/other/help/detail\",\"^/other/oneredirect$\",\"^/other/overseas$\",\"^/other/questionnaire\",\"^/other/redirect\",\"^/other/reporExamine\",\"^/other/reportCustomsService\",\"^/other/temu/rule$\",\"^/service-market/activity-rookie$\",\"^/service-market/activity-rookie-cus$\",\"^/service-market/activity-rookie/ticket$\",\"^/service-market/auth$\",\"^/service-market/chat/order-list$\",\"^/static\",\"^/supplier-shop/403\",\"^/supplier-shop/entry\",\"^/supplier-shop/entry/detail\",\"^/supplier-shop/introduction-page\",\"^/supplier-shop/settle-in\",\"^/tool/activity/fiveAnniversary\",\"^/tool/activity/valentine\",\"^/tool/cashback/618\",\"^/tool/cashback/721\",\"^/tool/disqualified\",\"^/tool/sms/act/adLottery$\",\"^/tool/sms/act/newRemind/dataReport$\",\"^/tool/sms/act/newRemind/index$\",\"^/tool/sms/new-year-subsidies\",\"^/wxmp-decoration/home-editor$\"],\"grayBodyBackgroundColor\":[\"^(/invoice/center)(?!(/batchInvoicing))\",\"^/act-bidding/act-archived-bid-detail$\",\"^/act-bidding/act-archived-bid-enroll-list$\",\"^/act-bidding/bidding-detail$\",\"^/act-bidding/goods-collect$\",\"^/act-bidding/home$\",\"^/act-bidding/market-bid-home$\",\"^/act-bidding/market-sign-detail\",\"^/act-bidding/market-sign-list$\",\"^/act-bidding/multi-resource-bid-detail$\",\"^/act-bidding/my-bidding-list$\",\"^/act-bidding/platform-purchase/detail$\",\"^/act-bidding/platform-purchase/home$\",\"^/act-bidding/platform-purchase/record$\",\"^/act-bidding/platform-purchase/sign$\",\"^/act-bidding/platform-purchase/sign-detail$\",\"^/act-bidding/reference-message$\",\"^/act-bidding/requirement$\",\"^/act-bidding/sign-detail$\",\"^/act-bidding/ten-billion-bid-detail$\",\"^/act-bidding/ten-billion-region-bid-detail$\",\"^/act/act_bidding_new/bidding_detail_copy\",\"^/act/act_bidding_new/goods_collect\",\"^/act/act_bidding_new/home\",\"^/act/act_bidding_new/my_bidding_list\",\"^/act/act_bidding_new/sign_detail$\",\"^/act/act_platform_purchase\",\"^/act/all-store-enroll$\",\"^/act/auto_adjust_price$\",\"^/act/batch-enroll-all$\",\"^/act/batch_adjust$\",\"^/act/batch_handle$\",\"^/act/detail$\",\"^/act/flow-protection$\",\"^/act/goods_manage$\",\"^/act/goods_manage/introduce$\",\"^/act/goods_manage/result$\",\"^/act/goods_price/confirm\",\"^/act/high_price_operation$\",\"^/act/history_detail$\",\"^/act/history_record$\",\"^/act/hot-goods$\",\"^/act/index$\",\"^/act/limit_time_sign$\",\"^/act/multi-act-enroll$\",\"^/act/multi-quick-channel$\",\"^/act/quick-enroll$\",\"^/act/quick_channel$\",\"^/act/quick_enroll/list\",\"^/act/register_record$\",\"^/act/resourceEnroll$\",\"^/act/scene-exclusive-coupon-enroll$\",\"^/act/sign/success_batch\",\"^/act/sign_detail$\",\"^/act/sign_success\",\"^/act/spring-all-store-enroll$\",\"^/act/ten-billion-agent-enroll$\",\"^/aftersales/aftersale_violation/detail$\",\"^/aftersales/customer_complain_appeal$\",\"^/aftersales/customer_complain_appeal/close$\",\"^/aftersales/customer_complain_appeal/detail$\",\"^/aftersales/platform_inquiry_goods$\",\"^/aftersales/platform_inquiry_goods/detail$\",\"^/aftersales/setup$\",\"^/aftersales/setup/detail$\",\"^/aftersales/smart_express$\",\"^/aftersales/smart_express/black/add$\",\"^/aftersales/smart_express/black/list$\",\"^/aftersales/work_order/detail$\",\"^/aftersales/work_order/tododetail$\",\"^/brand/bigDiscount/add$\",\"^/brand/bigDiscount/detail/\",\"^/brand/billion/query$\",\"^/brand/data/home$\",\"^/category-servicefee/overview$\",\"^/chat-service/catalog$\",\"^/chat-service/robot$\",\"^/chat-service/status$\",\"^/chat-service/warning$\",\"^/container/403$\",\"^/ddmc-supplier-product/mms-goods\",\"^/decoration/home$\",\"^/decoration/notification$\",\"^/express/autoDelivery$\",\"^/express/batch$\",\"^/express/batchShortage$\",\"^/express/consolidation\",\"^/express/ddmc_distribution/open$\",\"^/express/ddmc_distribution/warehouse$\",\"^/express/expressOnline$\",\"^/express/expressOnlineNew$\",\"^/express/hk-consol/abnormal-work-order$\",\"^/express/hk-consol/abnormal-work-order/detail$\",\"^/express/hk/abnormal-bag$\",\"^/express/hk/branch_line$\",\"^/express/hk/branch_line/edit$\",\"^/express/hk/data-board$\",\"^/express/hk/data-clearance$\",\"^/express/hk/data/package/board$\",\"^/express/hk/line$\",\"^/express/hk/line/edit$\",\"^/express/hk/operation$\",\"^/express/intelligent$\",\"^/express/intercept\",\"^/express/package$\",\"^/express/package/exchange$\",\"^/express/package/multi$\",\"^/express/package/return$\",\"^/express/single$\",\"^/express/store/book$\",\"^/express/store/mall$\",\"^/express/store/manage$\",\"^/express/store/manage/add$\",\"^/express/store/manage/detail$\",\"^/express/store/manage/rule$\",\"^/express/store/manage/shop$\",\"^/express/store/manage/shop/create$\",\"^/express/store/manage/shop/detail\",\"^/express/store/manage/shop/edit\",\"^/express/store/order$\",\"^/express/store/order/detail$\",\"^/express/store/order/refund$\",\"^/express/store/order/replenish$\",\"^/express/store/order/replenish/add$\",\"^/express/store/order/reverse$\",\"^/express/store/own$\",\"^/express/store/own/add$\",\"^/express/store/own/detail\",\"^/express/store/roll$\",\"^/express/store/search$\",\"^/express/store/search/finishTable$\",\"^/express/store/search/inventory$\",\"^/express/store/service$\",\"^/express/store/service/create$\",\"^/express/store/service/detail$\",\"^/express/store/service/list_type_1$\",\"^/express/store/stock$\",\"^/express/store/stock/allot$\",\"^/express/store/stock/allot/create$\",\"^/express/store/stock/allot/detail$\",\"^/express/store/stock/check$\",\"^/express/store/stock/check/detail$\",\"^/express/store/stock/in/create$\",\"^/express/store/stock/in/detail$\",\"^/express/store/stock/move$\",\"^/express/store/stock/move/create$\",\"^/express/store/stock/move/detail$\",\"^/express/store/stock/out$\",\"^/express/store/stock/out/create$\",\"^/express/store/stock/out/detail$\",\"^/express/store/ware$\",\"^/express/store/ware/add$\",\"^/express/store/ware/detail$\",\"^/express/virtual/batch$\",\"^/express/virtual/single$\",\"^/finance/expense/apply$\",\"^/finance/expense/history/detail\",\"^/goods-boost\",\"^/goods-tool/area-distribution$\",\"^/goods-tool/area-distribution-set$\",\"^/goods-tool/batch-delivery/list$\",\"^/goods-tool/expert-experience$\",\"^/goods-tool/goods-database$\",\"^/goods-tool/group-sale$\",\"^/goods-tool/home$\",\"^/goods-tool/optimize-landing\",\"^/goods-tool/pdd-select/publish-goods$\",\"^/goods-tool/platform-recruitment-products\",\"^/goods-tool/presale/list$\",\"^/goods-tool/quantity-rollback$\",\"^/goods-tool/question$\",\"^/goods-tool/question/guide$\",\"^/goods-tool/snatch-order-tool-upgrade$\",\"^/goods-tool/temu-goods-list$\",\"^/goods-tool/temu-goods/category$\",\"^/goods-tool/temu-goods/product-edit$\",\"^/goods-tool/temu-goods/result$\",\"^/goods-tool/trusteeship/goods-info$\",\"^/goods/batch_set_brand$\",\"^/goods/category$\",\"^/goods/common_batch_edit$\",\"^/goods/evaluation/activity$\",\"^/goods/evaluation/activity/create$\",\"^/goods/evaluation/activity/history$\",\"^/goods/evaluation/analyze$\",\"^/goods/evaluation/index$\",\"^/goods/evaluation_cash/activity$\",\"^/goods/evaluation_cash/activity/create$\",\"^/goods/evaluation_cash/activity/create-for-ranking$\",\"^/goods/evaluation_cash/activity/history$\",\"^/goods/evalution/dynamic$\",\"^/goods/goods_add/brand/result$\",\"^/goods/goods_add/index$\",\"^/goods/goods_add/special_brand$\",\"^/goods/goods_add/success$\",\"^/goods/goods_categories_goods_list\",\"^/goods/goods_categories_home$\",\"^/goods/goods_detail$\",\"^/goods/goods_draft$\",\"^/goods/goods_list$\",\"^/goods/goods_list/batch_change_price\",\"^/goods/goods_list/batch_edit_record$\",\"^/goods/goods_list/batch_set_property$\",\"^/goods/goods_list/chance/hot_keyword$\",\"^/goods/goods_list/goods_online/optimize_evaluation$\",\"^/goods/goods_list/goods_online/unmatched_rule_list$\",\"^/goods/goods_list/low_price_manage\",\"^/goods/goods_list/presale\",\"^/goods/goods_list/specification_sold_out\",\"^/goods/goods_list/super_stars_goods$\",\"^/goods/goods_materials$\",\"^/goods/goods_materials/materials-tools$\",\"^/goods/goods_record$\",\"^/goods/goods_recycle$\",\"^/goods/goods_return_detail$\",\"^/goods/goods_standard/apply\",\"^/goods/goods_standard/record\",\"^/goods/goods_success_record$\",\"^/goods/size/detail$\",\"^/goods/size/edit$\",\"^/goods/size/list$\",\"^/goods/up$\",\"^/goods/violation_list$\",\"^/home$\",\"^/home/$\",\"^/jinbao/effect$\",\"^/jinbao/gradeActivityDesc$\",\"^/jinbao/index$\",\"^/jinbao/massSelfSubsidy\",\"^/jinbao/newEffect$\",\"^/jinbao/open\",\"^/jinbao/promotion/index$\",\"^/jinbao/tenBillion$\",\"^/kit/baiyi-rates$\",\"^/kit/batch-on-sale$\",\"^/kit/bonus-for-fans$\",\"^/kit/bonus-for-fans/create$\",\"^/kit/bonus-for-fans/historyActivity$\",\"^/kit/brand-price-change\",\"^/kit/combo-offer$\",\"^/kit/combo-offer/result\",\"^/kit/evaluation$\",\"^/kit/evaluation/bill$\",\"^/kit/evaluation/create$\",\"^/kit/evaluation/create-for-ranking$\",\"^/kit/evaluation/history$\",\"^/kit/evaluation/sign_contract$\",\"^/kit/flagship-store-price-change\",\"^/kit/freebie$\",\"^/kit/freebie/manage$\",\"^/kit/get-one-free$\",\"^/kit/get-one-free/activity-detail$\",\"^/kit/get-one-free/add-goods$\",\"^/kit/get-one-free/result$\",\"^/kit/goods-follow-price\",\"^/kit/goods-price-change$\",\"^/kit/goods-price-management$\",\"^/kit/goods-price-management/price-modification$\",\"^/kit/goods-price-management/price-modification/create$\",\"^/kit/goods-price-management/price-modification/create/result$\",\"^/kit/goods-tool/freebie$\",\"^/kit/goods-tool/freebie/manage$\",\"^/kit/high-prices-limit-rate$\",\"^/kit/incubator$\",\"^/kit/incubator/one-key-optimization$\",\"^/kit/incubator/setting$\",\"^/kit/inflation-coupon$\",\"^/kit/inflation-coupon/create$\",\"^/kit/inflation-coupon/create/result\",\"^/kit/lowprice_warn$\",\"^/kit/main-image\",\"^/kit/mallDiscountArea$\",\"^/kit/multiOrderDiscountArea$\",\"^/kit/multiOrderDiscountArea/create$\",\"^/kit/new\",\"^/kit/new/create/result$\",\"^/kit/pinxiaoquan/create$\",\"^/kit/pinxiaoquan/create/result$\",\"^/kit/price-insurance$\",\"^/kit/retain-order$\",\"^/kit/retain-order/create$\",\"^/kit/retain-order/edit$\",\"^/kit/shop-service$\",\"^/kit/visit-task$\",\"^/kit/visit-task/create$\",\"^/kit/volume-discount$\",\"^/kit/volume-discount/create$\",\"^/kit/volume-discount/guide$\",\"^/kit/volume-discount/result$\",\"^/kol/promotion/activity$\",\"^/kol/promotion/activity/detail$\",\"^/live/courseList$\",\"^/live/data-detail$\",\"^/live/introduce\",\"^/main$\",\"^/main/$\",\"^/mallcenter/chat-account-list$\",\"^/mallcenter/dataCollection$\",\"^/mallcenter/drugstore-audit$\",\"^/mallcenter/goodsMoving/isOpen$\",\"^/mallcenter/goodsMoving/notOpen$\",\"^/mallcenter/info/CategoryQualification$\",\"^/mallcenter/info/basic$\",\"^/mallcenter/info/brand$\",\"^/mallcenter/info/brand/add$\",\"^/mallcenter/info/createNewMall/index\",\"^/mallcenter/info/entry/auditResult$\",\"^/mallcenter/info/entry/auditResultByMallName\",\"^/mallcenter/info/goodsQualification\",\"^/mallcenter/info/licence$\",\"^/mallcenter/info/licence/\\\\d+/add$\",\"^/mallcenter/info/licence/\\\\d+/view$\",\"^/mallcenter/info/licence/auditrecord$\",\"^/mallcenter/info/main/company/edit$\",\"^/mallcenter/info/main/index$\",\"^/mallcenter/info/main/person$\",\"^/mallcenter/info/selfApplyManage\",\"^/mallcenter/info/shopPresale/index\",\"^/mallcenter/info/shopTags/addTags\",\"^/mallcenter/info/shopTags/editTags\",\"^/mallcenter/info/shopTags/viewTags\",\"^/mallcenter/info/shopUpgrade/auditResult$\",\"^/mallcenter/info/shopUpgrade/shopInfo$\",\"^/mallcenter/info/shopUpgrade/upgradeType$\",\"^/mallcenter/member\",\"^/mallcenter/relativeMainChange\",\"^/mallcenter/stockTaking/center$\",\"^/mallcenter/storeManagement/createStore\",\"^/mallcenter/storeManagement/editGroup$\",\"^/mallcenter/storeManagement/editStore\",\"^/mallcenter/storeManagement/index$\",\"^/mallcenter/storeManagement/storeDetail\",\"^/mallcenter/storeManagement/storeGroup$\",\"^/mallcenter/storeManagement/subAccount\",\"^/mallcenter/sub/account\",\"^/mallcenter/sub/role\",\"^/mallcenter/survey$\",\"^/mallcenter/temu/semi\",\"^/mms-chat/advanceShuntDetail\",\"^/mms-chat/tools/shunt/categoriesOfGoods/.*\",\"^/mms-marketing-mixin/auto-follow-price-page$\",\"^/mms-marketing-mixin/batch-adjust-price$\",\"^/mms-marketing-mixin/copy-high-priced$\",\"^/mms-marketing-mixin/copy-high-priced/FreightInsuranceCopy$\",\"^/mms-marketing-mixin/copy-high-priced/UsefirstPaylaterCopy$\",\"^/mms-marketing-mixin/copy-high-priced/highPriceGoodsCopy$\",\"^/mms-marketing-mixin/high-price-operation$\",\"^/mms-marketing-mixin/high-price-operation/record$\",\"^/mms-marketing-mixin/hot-style-keep-rank$\",\"^/mms-marketing-mixin/major-limited-quantity-promotion$\",\"^/mms-marketing-mixin/new-goods-free-amount$\",\"^/mms-marketing-mixin/order-snatching-tool\",\"^/mms-marketing-mixin/price-violation$\",\"^/mms-marketing-mixin/price-violation/fixed$\",\"^/mms-marketing-mixin/price-violation/problem-orders$\",\"^/mms-marketing-mixin/promotion-rights$\",\"^/mms-marketing-mixin/quality-experience$\",\"^/mms-marketing-mixin/quick-get-orders$\",\"^/mms-marketing-mixin/restricted-flow-price-change$\",\"^/mms-marketing-mixin/restricted-flow-price-change/records$\",\"^/mms-marketing-mixin/same-price-bidding$\",\"^/mms-marketing-mixin/snatch-order-tool$\",\"^/mms-marketing-mixin/trade-branch-subsidy$\",\"^/mms-marketing-mixin/trade-branch-subsidy/record$\",\"^/mms-marketing-mixin/trade-branch-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy$\",\"^/mms-marketing-mixin/trade-in-subsidy/invoice$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/info/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/micro-express$\",\"^/mms-marketing-mixin/trade-in-subsidy/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/record/goods$\",\"^/mms-marketing-mixin/trade-in-subsidy/register\",\"^/mms-marketing-mixin/trade-in-subsidy/register/record\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/add$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/edit$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/list$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation/ka-center$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply/detail$\",\"^/orders/activityVerify$\",\"^/orders/appeal-false$\",\"^/orders/appeals\",\"^/orders/appeals/aftersale/refund-only$\",\"^/orders/dataRiskWarn$\",\"^/orders/exportExcel$\",\"^/orders/expressInterception/activate$\",\"^/orders/expressInterception/manage$\",\"^/orders/homeDeliverySettings$\",\"^/orders/homeDeliverySettings/template/create$\",\"^/orders/interceptExpress$\",\"^/orders/list\",\"^/orders/logistics/local\",\"^/orders/merchantCompensationRecovery$\",\"^/orders/merge$\",\"^/orders/nationalSubsidy/list$\",\"^/orders/order/carriage/act/add$\",\"^/orders/order/carriage/act/detail\",\"^/orders/order/carriage/act/useDetail\",\"^/orders/order/carriage/add$\",\"^/orders/order/carriage/category$\",\"^/orders/order/carriage/detail$\",\"^/orders/order/carriage/edit$\",\"^/orders/order/carriage/list$\",\"^/orders/order/carriage/rule$\",\"^/orders/order/carriage/special$\",\"^/orders/order/carriage/storeService/add$\",\"^/orders/order/carriage/storeService/detail$\",\"^/orders/order/carriage/useDetail$\",\"^/orders/order/logisticsSurvey$\",\"^/orders/order/sendInstall/add$\",\"^/orders/order/sendInstall/bindTemplate$\",\"^/orders/order/sendInstall/detail$\",\"^/orders/order/sendInstall/edit$\",\"^/orders/order/sendInstall/useDetail$\",\"^/orders/order/sfCarriage/add$\",\"^/orders/order/sfCarriage/detail\",\"^/orders/order/sfCarriage/edit\",\"^/orders/order/sfCarriage/useDetail$\",\"^/orders/order/winterWarm/add$\",\"^/orders/order/winterWarm/detail\",\"^/orders/order/winterWarm/edit\",\"^/orders/order/winterWarm/useDetail$\",\"^/orders/partialShipList$\",\"^/orders/remoteAreasFreeShip$\",\"^/orders/remoteAreasFreeShip/fail\",\"^/orders/remoteAreasFreeShip/success$\",\"^/orders/remoteAreasLargeMailRule$\",\"^/orders/remoteAreasOrderSubsidy$\",\"^/orders/reportManage\",\"^/orders/scheduledDeliverySettings$\",\"^/orders/scheduledDeliverySettings/template/create$\",\"^/orders/siteManage$\",\"^/orders/temu/act/similarGoodsApply$\",\"^/orders/temu/data/detail\",\"^/orders/temu/data/summary\",\"^/orders/temu/exportExcel$\",\"^/orders/temu/springFestivalInBusiness$\",\"^/orders/temu/springFestivalInBusiness/applyGoods$\",\"^/orders/temu/trusteeship$\",\"^/orders/thirdPartyDelivery$\",\"^/orders/twoStageExpressInvoice$\",\"^/orders/warnCenter$\",\"^/orders/wechat$\",\"^/orders/xjExpressSubsidy$\",\"^/orders/xjGoodsOpportunity$\",\"^/orders/xjLocalWarehouse$\",\"^/other/bbs/offline$\",\"^/other/helpcenter\",\"^/other/mail/\",\"^/other/rule\",\"^/other/tradeIn/protocol$\",\"^/other/tradeIn/recharge$\",\"^/overseas-goods/origin\",\"^/pg/deduciton_detail/fake$\",\"^/pg/deduciton_detail/record$\",\"^/pg/deduciton_detail/ship$\",\"^/pg/deduciton_detail/stock$\",\"^/pg/examination$\",\"^/pg/feedback$\",\"^/pg/mall_quality$\",\"^/pg/mall_quality_goods_detail$\",\"^/pg/new_violation_info$\",\"^/pg/restrict_detail$\",\"^/pg/restrict_detail/create_appeal$\",\"^/pg/restrict_list$\",\"^/pg/restrict_withdrawal\",\"^/pg/violation_content$\",\"^/pg/violation_list/hk_ship$\",\"^/pg/violation_list/mall_manage$\",\"^/profit-sharing/branch-mall-manage$\",\"^/profit-sharing/branch/detail\",\"^/profit-sharing/branch/relationship$\",\"^/profit-sharing/detail\",\"^/profit-sharing/relationship$\",\"^/profit-sharing/relationship/add$\",\"^/profit-sharing/relationship/branch/detail$\",\"^/profit-sharing/relationship/detail$\",\"^/profit-sharing/relationship/edit$\",\"^/search/good_inspect_v2\",\"^/supplier$\",\"^/supplier/batchUpload$\",\"^/supplier/batchUpload/result$\",\"^/supplier/ddmc$\",\"^/supplier/distribution\",\"^/supplier/instead$\",\"^/supplier/temu\",\"^/supplier/temu/main$\",\"^/supplier/trusteeship\",\"^/supplier/wholesale/result$\",\"^/sycm/combat$\",\"^/sycm/combat/sidebar$\",\"^/sycm/evaluation/overview$\",\"^/sycm/evaluation/recommand$\",\"^/sycm/fans$\",\"^/sycm/goods-boost$\",\"^/sycm/goods_effect\",\"^/sycm/goods_quality\",\"^/sycm/search_data\",\"^/sycm/search_data/video\",\"^/sycm/stores_data\",\"^/tool$\",\"^/tool/batch-on-sale$\",\"^/tool/bonus-for-fans$\",\"^/tool/bonus-for-fans/create$\",\"^/tool/bundle$\",\"^/tool/bundle/create$\",\"^/tool/bundle/create/select-sku$\",\"^/tool/coupon$\",\"^/tool/coupon/create$\",\"^/tool/coupon/create/result$\",\"^/tool/coupon/membership/create$\",\"^/tool/cross-mall-cashback\",\"^/tool/cross-mall-cashback$\",\"^/tool/cross-mall-cashback/create$\",\"^/tool/cross-mall-cashback/detail$\",\"^/tool/cross-mall-cashback/enRoll$\",\"^/tool/cross-mall-cashback/primaryEnRoll$\",\"^/tool/discount-reminder$\",\"^/tool/earnest$\",\"^/tool/earnest/create$\",\"^/tool/freebie$\",\"^/tool/freebie/manage$\",\"^/tool/full-amount-reduce$\",\"^/tool/full-amount-reduce/create$\",\"^/tool/full-amount-reduce/result$\",\"^/tool/get-one-free$\",\"^/tool/get-one-free/activity-detail$\",\"^/tool/get-one-free/add-goods$\",\"^/tool/get-one-free/result$\",\"^/tool/goods-tool/earnest\",\"^/tool/goods-tool/earnest$\",\"^/tool/goods-tool/freebie$\",\"^/tool/goods-tool/freebie/manage$\",\"^/tool/incubator$\",\"^/tool/incubator/one-key-optimization$\",\"^/tool/incubator/setting$\",\"^/tool/interest\",\"^/tool/mallDiscountArea$\",\"^/tool/mallDiscountArea/create$\",\"^/tool/mallDiscountArea/create/multiDiscount$\",\"^/tool/mallDiscountArea/create/repurchase\",\"^/tool/multi-piece-discount$\",\"^/tool/multi-piece-discount/create$\",\"^/tool/multi-piece-discount/result$\",\"^/tool/multiOrderDiscountArea$\",\"^/tool/multiOrderDiscountArea/create$\",\"^/tool/new\",\"^/tool/overpayment-refund$\",\"^/tool/pricebreak$\",\"^/tool/promotion$\",\"^/tool/promotion/create\",\"^/tool/promotion/create/lead-home-page\",\"^/tool/promotion/create/quickSetup\",\"^/tool/promotion/create/restart\",\"^/tool/promotion/modify$\",\"^/tool/sms/settings/remind-union\",\"^/tool/sms/settings/smartExpress$\",\"^/tool/surprise-coupon$\",\"^/tool/surprise-coupon/create$\",\"^/tool/surprise-coupon/result$\",\"^/tool/visit-task$\",\"^/tool/visit-task/create$\",\"^/vg/add_mapping$\",\"^/vg/query_mapping$\"],\"fluidList\":[\"^(/invoice/center)(?!(/batchInvoicing))\",\"^/act-bidding/act-archived-bid-detail$\",\"^/act-bidding/act-archived-bid-enroll-list$\",\"^/act-bidding/bidding-detail$\",\"^/act-bidding/goods-collect$\",\"^/act-bidding/home$\",\"^/act-bidding/market-bid-home$\",\"^/act-bidding/market-sign-detail\",\"^/act-bidding/market-sign-list$\",\"^/act-bidding/multi-resource-bid-detail$\",\"^/act-bidding/my-bidding-list$\",\"^/act-bidding/platform-purchase/detail$\",\"^/act-bidding/platform-purchase/home$\",\"^/act-bidding/platform-purchase/record$\",\"^/act-bidding/platform-purchase/sign-detail$\",\"^/act-bidding/sign-detail$\",\"^/act-bidding/ten-billion-bid-detail$\",\"^/act-bidding/ten-billion-region-bid-detail$\",\"^/act/act_bidding_new/bidding_detail_copy\",\"^/act/act_bidding_new/goods_collect\",\"^/act/act_bidding_new/home\",\"^/act/act_bidding_new/my_bidding_list\",\"^/act/act_bidding_new/sign_detail$\",\"^/act/act_platform_purchase\",\"^/act/all-store-enroll$\",\"^/act/batch-enroll-all$\",\"^/act/batch_adjust$\",\"^/act/batch_handle$\",\"^/act/detail$\",\"^/act/flow-protection$\",\"^/act/goods_manage$\",\"^/act/goods_manage/introduce$\",\"^/act/goods_manage/result$\",\"^/act/goods_price/confirm\",\"^/act/high_price_operation$\",\"^/act/history_detail$\",\"^/act/history_record$\",\"^/act/hot-goods$\",\"^/act/index$\",\"^/act/limit_time_sign$\",\"^/act/multi-act-enroll$\",\"^/act/multi-quick-channel$\",\"^/act/quick-enroll$\",\"^/act/quick_channel$\",\"^/act/quick_enroll/list\",\"^/act/register_record$\",\"^/act/resourceEnroll$\",\"^/act/scene-exclusive-coupon-enroll$\",\"^/act/sign/success_batch\",\"^/act/sign_detail$\",\"^/act/sign_success\",\"^/act/spring-all-store-enroll$\",\"^/act/ten-billion-agent-enroll$\",\"^/aftersales/aftersale_auto\",\"^/aftersales/aftersale_list$\",\"^/aftersales/aftersale_violation/detail$\",\"^/aftersales/aftersale_violation/list$\",\"^/aftersales/customer_complain_appeal$\",\"^/aftersales/customer_complain_appeal/detail$\",\"^/aftersales/good_people$\",\"^/aftersales/merchant_appeal$\",\"^/aftersales/micro_transfer\",\"^/aftersales/order_appeal$\",\"^/aftersales/platform_inquiry_goods$\",\"^/aftersales/platform_inquiry_goods/detail$\",\"^/aftersales/setup\",\"^/aftersales/setup/detail$\",\"^/aftersales/smart_express$\",\"^/aftersales/smart_express/black/add$\",\"^/aftersales/smart_express/black/list$\",\"^/aftersales/speed_refund$\",\"^/aftersales/work_order\",\"^/aftersales/work_order/detail$\",\"^/aftersales/work_order/tododetail$\",\"^/category-servicefee/overview$\",\"^/chat-service/catalog$\",\"^/chat-service/robot$\",\"^/chat-service/setting\",\"^/chat-service/status$\",\"^/chat-service/warning$\",\"^/container/403$\",\"^/ddmc-supplier-product/mms-goods\",\"^/decoration/home$\",\"^/decoration/notification$\",\"^/decoration/serviceMarket$\",\"^/decoration/serviceMarket/myTemplate$\",\"^/decoration/serviceMarket/recommendTemplate$\",\"^/decoration/topics$\",\"^/express-services/onsite-installation(?!/introduction)\",\"^/express-services/provider$\",\"^/express-services/tostore\",\"^/express-services/tostore/order$\",\"^/express-services/tostore/setting$\",\"^/express/autoDelivery$\",\"^/express/batch$\",\"^/express/batchShortage$\",\"^/express/consolidation\",\"^/express/customs/export-list-upload$\",\"^/express/customs/shut-out$\",\"^/express/ddmc_distribution/open$\",\"^/express/ddmc_distribution/warehouse$\",\"^/express/expressOnline$\",\"^/express/expressOnlineNew$\",\"^/express/hk-consol/abnormal-work-order$\",\"^/express/hk-consol/abnormal-work-order/detail$\",\"^/express/hk/abnormal-bag$\",\"^/express/hk/branch_line$\",\"^/express/hk/branch_line/edit$\",\"^/express/hk/data-board$\",\"^/express/hk/data-clearance$\",\"^/express/hk/data/package/board$\",\"^/express/hk/line$\",\"^/express/hk/line/edit$\",\"^/express/hk/operation$\",\"^/express/intelligent$\",\"^/express/intercept\",\"^/express/package$\",\"^/express/package/exchange$\",\"^/express/package/multi$\",\"^/express/package/return$\",\"^/express/single$\",\"^/express/store/book$\",\"^/express/store/mall$\",\"^/express/store/manage$\",\"^/express/store/manage/add$\",\"^/express/store/manage/detail$\",\"^/express/store/manage/rule$\",\"^/express/store/manage/shop$\",\"^/express/store/manage/shop/create$\",\"^/express/store/manage/shop/detail\",\"^/express/store/manage/shop/edit\",\"^/express/store/order$\",\"^/express/store/order/detail$\",\"^/express/store/order/refund$\",\"^/express/store/order/replenish$\",\"^/express/store/order/replenish/add$\",\"^/express/store/order/reverse$\",\"^/express/store/own$\",\"^/express/store/own/add$\",\"^/express/store/own/detail\",\"^/express/store/roll$\",\"^/express/store/search$\",\"^/express/store/search/finishTable$\",\"^/express/store/search/inventory$\",\"^/express/store/service$\",\"^/express/store/service/create$\",\"^/express/store/service/detail$\",\"^/express/store/service/list_type_1$\",\"^/express/store/stock$\",\"^/express/store/stock/allot$\",\"^/express/store/stock/allot/create$\",\"^/express/store/stock/allot/detail$\",\"^/express/store/stock/check$\",\"^/express/store/stock/check/detail$\",\"^/express/store/stock/in/create$\",\"^/express/store/stock/in/detail$\",\"^/express/store/stock/move$\",\"^/express/store/stock/move/create$\",\"^/express/store/stock/move/detail$\",\"^/express/store/stock/out$\",\"^/express/store/stock/out/create$\",\"^/express/store/stock/out/detail$\",\"^/express/store/ware$\",\"^/express/store/ware/add$\",\"^/express/store/ware/detail$\",\"^/express/virtual/batch$\",\"^/express/virtual/single$\",\"^/finance/expense/apply$\",\"^/finance/expense/history/detail\",\"^/freight/return_freight\",\"^/goods-boost\",\"^/goods-tool/batch-delivery/list$\",\"^/goods-tool/expert-experience$\",\"^/goods-tool/goods-database$\",\"^/goods-tool/group-sale$\",\"^/goods-tool/home$\",\"^/goods-tool/optimize-landing\",\"^/goods-tool/pdd-select/publish-goods$\",\"^/goods-tool/platform-recruitment-products\",\"^/goods-tool/presale/list$\",\"^/goods-tool/quantity-rollback$\",\"^/goods-tool/question$\",\"^/goods-tool/question/guide$\",\"^/goods-tool/snatch-order-tool-upgrade$\",\"^/goods-tool/temu-goods-list$\",\"^/goods-tool/trusteeship/goods-info$\",\"^/goods/batch_set_brand$\",\"^/goods/category$\",\"^/goods/common_batch_edit$\",\"^/goods/evaluation/activity$\",\"^/goods/evaluation/activity/create$\",\"^/goods/evaluation/activity/history$\",\"^/goods/evaluation/analyze$\",\"^/goods/evaluation/index$\",\"^/goods/evaluation_cash/activity$\",\"^/goods/evaluation_cash/activity/create$\",\"^/goods/evaluation_cash/activity/history$\",\"^/goods/evalution/dynamic$\",\"^/goods/gold_manager$\",\"^/goods/goods_add/brand/result$\",\"^/goods/goods_add/index$\",\"^/goods/goods_add/special_brand$\",\"^/goods/goods_add/success$\",\"^/goods/goods_categories_goods_list\",\"^/goods/goods_categories_home$\",\"^/goods/goods_detail$\",\"^/goods/goods_draft$\",\"^/goods/goods_list$\",\"^/goods/goods_list/batch_change_price\",\"^/goods/goods_list/batch_edit_record$\",\"^/goods/goods_list/batch_set_property$\",\"^/goods/goods_list/chance/hot_keyword$\",\"^/goods/goods_list/goods_online/optimize_evaluation$\",\"^/goods/goods_list/goods_online/unmatched_rule_list$\",\"^/goods/goods_list/low_price_manage\",\"^/goods/goods_list/presale\",\"^/goods/goods_list/specification_sold_out\",\"^/goods/goods_list/super_stars_goods$\",\"^/goods/goods_materials$\",\"^/goods/goods_materials/main_graph$\",\"^/goods/goods_materials/materials-tools$\",\"^/goods/goods_record$\",\"^/goods/goods_recycle$\",\"^/goods/goods_return_detail$\",\"^/goods/goods_standard/apply\",\"^/goods/goods_standard/record\",\"^/goods/goods_success_record$\",\"^/goods/size/detail$\",\"^/goods/size/edit$\",\"^/goods/size/list$\",\"^/goods/up$\",\"^/goods/violation_list$\",\"^/home$\",\"^/home/$\",\"^/identify/list$\",\"^/jinbao/attendActivity$\",\"^/jinbao/coupon$\",\"^/jinbao/effect$\",\"^/jinbao/goodsEffect$\",\"^/jinbao/hotActivity$\",\"^/jinbao/mallPromotion$\",\"^/jinbao/marketAccount$\",\"^/jinbao/massSelfSubsidy\",\"^/jinbao/open\",\"^/jinbao/operateRecord$\",\"^/jinbao/optimizePromotion$\",\"^/jinbao/orderDetail$\",\"^/jinbao/promotion/create$\",\"^/jinbao/promotion/index$\",\"^/jinbao/promotionDetail$\",\"^/jinbao/rateAccount\",\"^/jinbao/report\",\"^/jinbao/secondKillActivity$\",\"^/jinbao/specialRate\",\"^/jinbao/success/*\",\"^/jinbao/zsCaptainList$\",\"^/jinbao/zsactivity$\",\"^/kit/baiyi-rates$\",\"^/kit/batch-on-sale$\",\"^/kit/bonus-for-fans$\",\"^/kit/bonus-for-fans/create$\",\"^/kit/bonus-for-fans/historyActivity$\",\"^/kit/brand-price-change\",\"^/kit/bundle\",\"^/kit/combo-offer$\",\"^/kit/combo-offer/result\",\"^/kit/evaluation$\",\"^/kit/evaluation/bill$\",\"^/kit/evaluation/create$\",\"^/kit/evaluation/history$\",\"^/kit/evaluation/sign_contract$\",\"^/kit/flagship-store-price-change\",\"^/kit/freebie$\",\"^/kit/freebie/manage$\",\"^/kit/get-one-free$\",\"^/kit/get-one-free/activity-detail$\",\"^/kit/get-one-free/add-goods$\",\"^/kit/get-one-free/result$\",\"^/kit/goods-follow-price\",\"^/kit/goods-price-change$\",\"^/kit/goods-price-management$\",\"^/kit/goods-price-management/price-modification$\",\"^/kit/goods-price-management/price-modification/create$\",\"^/kit/goods-price-management/price-modification/create/result$\",\"^/kit/goods-tool/freebie$\",\"^/kit/goods-tool/freebie/manage$\",\"^/kit/high-prices-limit-rate$\",\"^/kit/incubator$\",\"^/kit/incubator/one-key-optimization$\",\"^/kit/incubator/setting$\",\"^/kit/inflation-coupon$\",\"^/kit/inflation-coupon/create$\",\"^/kit/inflation-coupon/create/result\",\"^/kit/lowprice_warn$\",\"^/kit/main-image\",\"^/kit/mallDiscountArea$\",\"^/kit/multiOrderDiscountArea$\",\"^/kit/multiOrderDiscountArea/create$\",\"^/kit/new$\",\"^/kit/new-offer$\",\"^/kit/new-offer/create$\",\"^/kit/new-offer/create/result$\",\"^/kit/new/create$\",\"^/kit/new/create/result$\",\"^/kit/pinxiaoquan/create$\",\"^/kit/pinxiaoquan/create/result$\",\"^/kit/price-insurance$\",\"^/kit/retain-order$\",\"^/kit/retain-order/create$\",\"^/kit/retain-order/edit$\",\"^/kit/shop-service$\",\"^/kit/visit-task$\",\"^/kit/visit-task/create$\",\"^/kit/volume-discount$\",\"^/kit/volume-discount/create$\",\"^/kit/volume-discount/guide$\",\"^/kit/volume-discount/result$\",\"^/kol/promotion/activity$\",\"^/kol/promotion/activity/detail$\",\"^/kol/promotion/record$\",\"^/live/courseList$\",\"^/live/introduce$\",\"^/logistics/account$\",\"^/logistics/book$\",\"^/logistics/cloudPrintService$\",\"^/logistics/detail$\",\"^/logistics/feedback$\",\"^/logistics/home$\",\"^/logistics/open$\",\"^/main$\",\"^/main/$\",\"^/mallcenter/changeAccountInfo/findMallName$\",\"^/mallcenter/chat-account-list$\",\"^/mallcenter/close/audit$\",\"^/mallcenter/close/bank$\",\"^/mallcenter/close/check$\",\"^/mallcenter/close/end$\",\"^/mallcenter/close/index$\",\"^/mallcenter/close/refund$\",\"^/mallcenter/dataCollection$\",\"^/mallcenter/drugstore-audit$\",\"^/mallcenter/goodsMoving/isOpen$\",\"^/mallcenter/goodsMoving/notOpen$\",\"^/mallcenter/info/CategoryQualification$\",\"^/mallcenter/info/basic$\",\"^/mallcenter/info/basic\\\\?from=ddmc$\",\"^/mallcenter/info/brand$\",\"^/mallcenter/info/brand/add$\",\"^/mallcenter/info/changeCategoryId/chooseNewId$\",\"^/mallcenter/info/changeCategoryId/mallCheck$\",\"^/mallcenter/info/createNewMall/index(\\\\d\\\\D)*$\",\"^/mallcenter/info/entry/auditResult$\",\"^/mallcenter/info/entry/auditResultByMallName\",\"^/mallcenter/info/goodsQualification\",\"^/mallcenter/info/licence$\",\"^/mallcenter/info/licence/\\\\d+/add$\",\"^/mallcenter/info/licence/\\\\d+/view$\",\"^/mallcenter/info/licence/auditrecord$\",\"^/mallcenter/info/main/company/edit$\",\"^/mallcenter/info/main/index$\",\"^/mallcenter/info/main/person$\",\"^/mallcenter/info/selfApplyManage\",\"^/mallcenter/info/shopPresale/index\",\"^/mallcenter/info/shopTags/addTags\",\"^/mallcenter/info/shopTags/editTags\",\"^/mallcenter/info/shopTags/index$\",\"^/mallcenter/info/shopTags/viewTags\",\"^/mallcenter/info/shopUpgrade/auditResult$\",\"^/mallcenter/info/shopUpgrade/index$\",\"^/mallcenter/info/shopUpgrade/normal/step\\\\d$\",\"^/mallcenter/info/shopUpgrade/shopInfo$\",\"^/mallcenter/info/shopUpgrade/upgradeType$\",\"^/mallcenter/info/verifyEnterprise$\",\"^/mallcenter/member\",\"^/mallcenter/relativeMainChange\",\"^/mallcenter/stockTaking/center$\",\"^/mallcenter/storeManagement/createStore\",\"^/mallcenter/storeManagement/editGroup$\",\"^/mallcenter/storeManagement/editStore\",\"^/mallcenter/storeManagement/index$\",\"^/mallcenter/storeManagement/storeDetail$\",\"^/mallcenter/storeManagement/storeGroup$\",\"^/mallcenter/storeManagement/subAccount$\",\"^/mallcenter/sub/account\",\"^/mallcenter/sub/role\",\"^/mallcenter/survey$\",\"^/mallcenter/temu/semi\",\"^/mms-chat/advanceShuntDetail\",\"^/mms-chat/overview\",\"^/mms-chat/search$\",\"^/mms-chat/service/promise$\",\"^/mms-chat/tools\",\"^/mms-marketing-mixin/auto-follow-price-page$\",\"^/mms-marketing-mixin/batch-adjust-price$\",\"^/mms-marketing-mixin/copy-high-priced$\",\"^/mms-marketing-mixin/copy-high-priced/FreightInsuranceCopy$\",\"^/mms-marketing-mixin/copy-high-priced/UsefirstPaylaterCopy$\",\"^/mms-marketing-mixin/copy-high-priced/highPriceGoodsCopy$\",\"^/mms-marketing-mixin/high-price-operation$\",\"^/mms-marketing-mixin/high-price-operation/record$\",\"^/mms-marketing-mixin/hot-style-keep-rank$\",\"^/mms-marketing-mixin/major-limited-quantity-promotion$\",\"^/mms-marketing-mixin/new-goods-free-amount$\",\"^/mms-marketing-mixin/order-snatching-tool\",\"^/mms-marketing-mixin/price-violation$\",\"^/mms-marketing-mixin/price-violation/fixed$\",\"^/mms-marketing-mixin/price-violation/problem-orders$\",\"^/mms-marketing-mixin/promotion-rights$\",\"^/mms-marketing-mixin/quality-experience$\",\"^/mms-marketing-mixin/quick-get-orders$\",\"^/mms-marketing-mixin/restricted-flow-price-change$\",\"^/mms-marketing-mixin/restricted-flow-price-change/records$\",\"^/mms-marketing-mixin/same-price-bidding$\",\"^/mms-marketing-mixin/snatch-order-tool$\",\"^/mms-marketing-mixin/trade-branch-subsidy$\",\"^/mms-marketing-mixin/trade-branch-subsidy/record$\",\"^/mms-marketing-mixin/trade-branch-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy$\",\"^/mms-marketing-mixin/trade-in-subsidy/invoice$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/info/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/ledger/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/micro-express$\",\"^/mms-marketing-mixin/trade-in-subsidy/record$\",\"^/mms-marketing-mixin/trade-in-subsidy/record/goods$\",\"^/mms-marketing-mixin/trade-in-subsidy/register\",\"^/mms-marketing-mixin/trade-in-subsidy/register/record\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/add$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/edit$\",\"^/mms-marketing-mixin/trade-in-subsidy/reimburse/list$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation$\",\"^/mms-marketing-mixin/trade-in-subsidy/relation/ka-center$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply$\",\"^/mms-marketing-mixin/trade-in-subsidy/supply/detail$\",\"^/orders/activityVerify$\",\"^/orders/appeal-false$\",\"^/orders/appeals\",\"^/orders/appeals/aftersale/refund-only$\",\"^/orders/assignExpress$\",\"^/orders/dataRiskWarn$\",\"^/orders/exportExcel$\",\"^/orders/expressInterception/activate$\",\"^/orders/expressInterception/manage$\",\"^/orders/homeDeliverySettings$\",\"^/orders/homeDeliverySettings/template/create$\",\"^/orders/interceptExpress$\",\"^/orders/list\",\"^/orders/logistics/local\",\"^/orders/logistics/local$\",\"^/orders/logistics/local/add$\",\"^/orders/logistics/local/detail$\",\"^/orders/logistics/local/edit$\",\"^/orders/logistics/local/usage$\",\"^/orders/medicine$\",\"^/orders/medicine/export$\",\"^/orders/merchantCompensationRecovery$\",\"^/orders/merge$\",\"^/orders/nationalSubsidy/list$\",\"^/orders/order/carriage/act/add$\",\"^/orders/order/carriage/act/detail\",\"^/orders/order/carriage/act/list$\",\"^/orders/order/carriage/act/useDetail\",\"^/orders/order/carriage/addressManagement$\",\"^/orders/order/carriage/detail$\",\"^/orders/order/carriage/list$\",\"^/orders/order/carriage/rule$\",\"^/orders/order/carriage/special$\",\"^/orders/order/carriage/storeService$\",\"^/orders/order/carriage/storeService/add$\",\"^/orders/order/carriage/storeService/detail$\",\"^/orders/order/carriage/storeService/template$\",\"^/orders/order/carriage/useDetail$\",\"^/orders/order/logisticsSurvey$\",\"^/orders/order/sendInstall/bindTemplate$\",\"^/orders/order/sendInstall/goodsList$\",\"^/orders/order/sendInstall/list$\",\"^/orders/order/sendInstall/useDetail$\",\"^/orders/order/sfCarriage/goodList$\",\"^/orders/order/sfCarriage/list$\",\"^/orders/order/sfCarriage/useDetail$\",\"^/orders/order/verify$\",\"^/orders/order/winterWarm/goodList$\",\"^/orders/order/winterWarm/list$\",\"^/orders/overseaTracecode$\",\"^/orders/partialShipList$\",\"^/orders/remoteAreasLargeMailRule$\",\"^/orders/reportManage\",\"^/orders/scheduledDeliverySettings$\",\"^/orders/scheduledDeliverySettings/template/create$\",\"^/orders/siteManage$\",\"^/orders/temu/act/similarGoodsApply$\",\"^/orders/temu/data/detail\",\"^/orders/temu/data/summary\",\"^/orders/temu/exportExcel$\",\"^/orders/temu/springFestivalInBusiness$\",\"^/orders/temu/springFestivalInBusiness/applyGoods$\",\"^/orders/temu/trusteeship$\",\"^/orders/twoStageExpressInvoice$\",\"^/orders/warnCenter$\",\"^/orders/wechat$\",\"^/orders/xjExpressSubsidy$\",\"^/orders/xjGoodsOpportunity$\",\"^/other/helpcenter\",\"^/other/mail/\",\"^/other/rule\",\"^/other/tradeIn/recharge$\",\"^/overseas-goods\",\"^/pg/deduciton_detail/fake$\",\"^/pg/deduciton_detail/record$\",\"^/pg/deduciton_detail/ship$\",\"^/pg/deduciton_detail/stock$\",\"^/pg/examination$\",\"^/pg/feedback$\",\"^/pg/mall_quality$\",\"^/pg/mall_quality_goods_detail$\",\"^/pg/new_violation_info$\",\"^/pg/restrict_detail$\",\"^/pg/restrict_detail/create_appeal$\",\"^/pg/restrict_list$\",\"^/pg/restrict_withdrawal\",\"^/pg/violation_content$\",\"^/pg/violation_list/hk_ship$\",\"^/pg/violation_list/live$\",\"^/pg/violation_list/mall_manage$\",\"^/pg/violation_list/mallgoods$\",\"^/pg/violation_list/rectify$\",\"^/profit-sharing/branch-mall-manage$\",\"^/profit-sharing/branch/detail\",\"^/profit-sharing/branch/relationship$\",\"^/profit-sharing/detail\",\"^/profit-sharing/relationship$\",\"^/profit-sharing/relationship/add$\",\"^/profit-sharing/relationship/branch/detail$\",\"^/profit-sharing/relationship/detail$\",\"^/profit-sharing/relationship/edit$\",\"^/search/good_inspect_v2\",\"^/supplier$\",\"^/supplier/batchUpload$\",\"^/supplier/batchUpload/result$\",\"^/supplier/ddmc$\",\"^/supplier/distribution\",\"^/supplier/instead$\",\"^/supplier/temu\",\"^/supplier/temu/main$\",\"^/supplier/trusteeship\",\"^/supplier/wholesale/result$\",\"^/sycm/combat/sidebar$\",\"^/sycm/evaluation/overview$\",\"^/sycm/evaluation/recommand$\",\"^/sycm/fans$\",\"^/sycm/goods-boost$\",\"^/sycm/goods_effect\",\"^/sycm/goods_quality\",\"^/sycm/search_data\",\"^/sycm/stores_data\",\"^/tool$\",\"^/tool/batch-on-sale$\",\"^/tool/bonus-for-fans$\",\"^/tool/bonus-for-fans/create$\",\"^/tool/bundle$\",\"^/tool/bundle/create$\",\"^/tool/bundle/create/select-sku$\",\"^/tool/coupon$\",\"^/tool/coupon/create$\",\"^/tool/coupon/create/result$\",\"^/tool/coupon/membership/create$\",\"^/tool/cross-mall-cashback\",\"^/tool/cross-mall-cashback$\",\"^/tool/cross-mall-cashback/create$\",\"^/tool/cross-mall-cashback/detail$\",\"^/tool/cross-mall-cashback/enRoll$\",\"^/tool/cross-mall-cashback/primaryEnRoll$\",\"^/tool/discount-reminder$\",\"^/tool/earnest$\",\"^/tool/earnest/create$\",\"^/tool/free\",\"^/tool/freebie$\",\"^/tool/freebie/manage$\",\"^/tool/full-amount-reduce$\",\"^/tool/full-amount-reduce/create$\",\"^/tool/full-amount-reduce/result$\",\"^/tool/get-one-free$\",\"^/tool/get-one-free/activity-detail$\",\"^/tool/get-one-free/add-goods$\",\"^/tool/get-one-free/result$\",\"^/tool/goods-tool/earnest\",\"^/tool/goods-tool/earnest$\",\"^/tool/goods-tool/freebie$\",\"^/tool/goods-tool/freebie/manage$\",\"^/tool/incubator$\",\"^/tool/incubator/one-key-optimization$\",\"^/tool/incubator/setting$\",\"^/tool/interest\",\"^/tool/mallDiscountArea$\",\"^/tool/mallDiscountArea/create$\",\"^/tool/mallDiscountArea/create/multiDiscount$\",\"^/tool/mallDiscountArea/create/repurchase\",\"^/tool/multi-piece-discount$\",\"^/tool/multi-piece-discount/create$\",\"^/tool/multi-piece-discount/result$\",\"^/tool/multiOrderDiscountArea$\",\"^/tool/multiOrderDiscountArea/create$\",\"^/tool/new$\",\"^/tool/new/create$\",\"^/tool/overpayment-refund$\",\"^/tool/payAfterUse\",\"^/tool/preferential\",\"^/tool/pricebreak$\",\"^/tool/promotion$\",\"^/tool/promotion/create\",\"^/tool/promotion/create/lead-home-page\",\"^/tool/promotion/create/quickSetup\",\"^/tool/promotion/create/restart\",\"^/tool/promotion/modify$\",\"^/tool/sms/settings/smartExpress$\",\"^/tool/surprise-coupon$\",\"^/tool/surprise-coupon/create$\",\"^/tool/surprise-coupon/result$\",\"^/tool/visit-task$\",\"^/tool/visit-task/create$\",\"^/vg/add_mapping$\",\"^/vg/query_mapping$\"]},\"sideBarProps\":{\"favFromServer\":[301,101,211,703],\"fromServer\":{\"sidebarUserViewList\":[{\"id\":3595,\"name\":\"推荐\",\"icon\":\"https://promotion.pddpic.com/promo/icon/pic/c4aa715d-94d2-486f-92ca-86c36d1957ec.png.slim.png\",\"children\":[{\"id\":3596,\"url\":\"/mallcenter/temu/semi\",\"name\":\"TEMU入驻\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3646,\"url\":\"/ddmc-supplier-product/mms-goods\",\"name\":\"买菜售卖报名\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":3427,\"name\":\"多多买菜供应商\",\"icon\":\"https://promotion.pddpic.com/upload/2020-11-15/10ab9f6a-efeb-4d65-933f-e76a35ad436b.png.slim.png\",\"children\":[{\"id\":3428,\"url\":\"/other/oneredirect?target=https://mc.pinduoduo.com/ddmc-mms\",\"name\":\"多多买菜\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/janus/api/maicai/isMaicaiMaster)\"},{\"id\":3617,\"url\":\"/express/ddmc_distribution/open\",\"name\":\"本地仓商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/ddmc_distribution/open\"],\"defaultVisibility\":false,\"whitelist\":\"post(/carson/api/remote/mc/transfer/button/show)\"},{\"id\":3618,\"url\":\"/express/ddmc_distribution/warehouse\",\"name\":\"配送管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/ddmc_distribution/warehouse\"],\"defaultVisibility\":false,\"whitelist\":\"post(/carson/api/remote/mc/warehouse_manager/sidebar/show)\"}]},{\"id\":100,\"name\":\"发货管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/e28bf79a-91ca-4101-94d7-c598ffd0f523.png\",\"children\":[{\"id\":101,\"url\":\"/orders/list\",\"name\":\"订单查询\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/search/index\",\"/orders/wechat/push\",\"/orders/list\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":120,\"url\":\"/print/home\",\"name\":\"打单工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/print/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3616,\"url\":\"/erp/home\",\"name\":\"官方ERP\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/erp/*\"],\"defaultVisibility\":false,\"whitelist\":\"get(/escort/gray/mms_menu)\"},{\"id\":105,\"url\":\"/express/package\",\"name\":\"包裹中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/order/packageCenter\",\"/express/package\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":102,\"url\":\"/express/batch\",\"name\":\"发货中心\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/complain\",\"/express/reminder\",\"^/express/(?!(package|store|24h-delivery|merge|return_freight|intercept|ddmc_distributio|customs/*))\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":809,\"url\":\"/invoice/center\",\"name\":\"订单开票\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/invoice\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":103,\"url\":\"/orders/order/carriage/list\",\"name\":\"物流工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/order/carriage/list\",\"/orders/carriage/edit\",\"/orders/carriage/detail\",\"/orders/delivery_address_management\",\"/order/carriage\",\"/order/sendInstall\",\"/orders/order/sfCarriage/goodList\",\"/orders/scheduledDeliverySettings\",\"/orders/scheduledDeliverySettings/template/create\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":107,\"url\":\"/logistics/home\",\"name\":\"电子面单\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/logistics/(?!deliver-manage)\",\"^/logistics/?$\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":110,\"url\":\"/orders/medicine\",\"name\":\"处方单管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/orders/medicine/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/medicine/mms/queryIsMallWhite)\"},{\"id\":104,\"url\":\"/orders/order/logisticsSurvey\",\"name\":\"物流概况\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/order/logisticsSurvey\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":170,\"url\":\"/print/deliver-manage\",\"name\":\"代发管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/logistics/deliver-manage\"],\"defaultVisibility\":false,\"whitelist\":\"get(/pluto/whitelist/check)\"},{\"id\":3464,\"url\":\"/orders/reportManage\",\"name\":\"报备额度\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":108,\"url\":\"/orders/order/verify\",\"name\":\"核销工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/essexbusiness/common/query/mall/show/verificationEntrance)\"},{\"id\":150,\"url\":\"/express-services/onsite-installation/service-order-list\",\"name\":\"上门安装\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express-services/onsite-installation/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/osaka/home_install/rule/mms_menu/gray_control)\"},{\"id\":180,\"url\":\"/express-services/tostore/order\",\"name\":\"到店服务\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/express-services/tostore/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/osaka/store_install/rule/mms_menu/gray_control)\"},{\"id\":140,\"url\":\"/vg/home\",\"name\":\"虚拟工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/vg(?=/|$)\"],\"defaultVisibility\":false,\"whitelist\":\"post(/maryland/api/virtualMerchant/queryIsShowSideBar)\"},{\"id\":3442,\"url\":\"/orders/overseaTracecode\",\"name\":\"正品溯源\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/oversea/traceSource/show)\"},{\"id\":3561,\"url\":\"/orders/warnCenter?warnType=6\",\"name\":\"大额订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/warnCenter?warnType=6\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3583,\"url\":\"/express/consolidation/package\",\"name\":\"偏远集运\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/express/consolidation/*\"],\"defaultVisibility\":false,\"whitelist\":\"get(/mangosteen/mallMerge/abnormal/mallGray)\"},{\"id\":3627,\"url\":\"/orders/nationalSubsidy/list\",\"name\":\"政府补贴订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/nationalSubsidy/list\"],\"defaultVisibility\":true,\"whitelist\":\"post(/carson/api/trade_in/parent_sub_mall_act/inSubMallWhite)\"}]},{\"id\":1100,\"name\":\"仓配管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/44d3b26c-3e87-4c27-b98b-dd21841f8783.png\",\"children\":[{\"id\":3631,\"url\":\"/express/hk/line\",\"name\":\"網格站管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/mangosteen/clearance/user/grid_house/line/show)\"},{\"id\":3632,\"url\":\"/express/hk\",\"name\":\"二段幹線管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/mangosteen/clearance/dashboard/show)\"},{\"id\":3652,\"url\":\"/express/customs/export-list-upload\",\"name\":\"报关管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/express/customs/export-list-upload\"],\"defaultVisibility\":false,\"whitelist\":\"post(/mangosteen/crossBack/sidebar/declaration/tab)\"}]},{\"id\":200,\"name\":\"售后管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/f08bfc37-4ec9-4a94-8cee-4f12ce1e3041.png\",\"children\":[{\"id\":211,\"url\":\"/aftersales/aftersale_list\",\"name\":\"售后工作台\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/aftersales/aftersale_auto/*\",\"/aftersales/setup\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":204,\"url\":\"/aftersales/work_order/list\",\"name\":\"工单管理\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/aftersales/work_order\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":210,\"url\":\"/aftersales/merchant_appeal\",\"name\":\"商家举证\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3521,\"url\":\"/freight/return_freight?chanel=1033\",\"name\":\"消费者体验\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/freight/return_freight\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":208,\"url\":\"/aftersales/speed_refund\",\"name\":\"极速退款\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/aftersales/speed_refund\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":205,\"url\":\"/aftersales/micro_transfer\",\"name\":\"小额打款\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/aftersale/micro_transfer\",\"/aftersales/micro_transfer\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3523,\"url\":\"/orders/interceptExpress\",\"name\":\"拦截快递\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/expressInterception/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cambridge/api/express/intercept/expressInterceptWhitelist)\"},{\"id\":3660,\"url\":\"/kit/retain-order?tool_full_channel=10323_97807\",\"name\":\"挽单工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/cambridge/api/retain/order/showEntry)\"}]},{\"id\":300,\"name\":\"商品管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/24c8b43e-37b1-4967-bdec-d6aabfaf3935.png\",\"children\":[{\"id\":302,\"url\":\"/goods/goods_list\",\"name\":\"商品列表\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods/goods_list$\",\"/goods/goods_draft\",\"/goods/goods_recycle\",\"/goods/goods_record\",\"/goods/goods_list/change_goods_sku\",\"/goods/goods_list/virtual_detail\",\"/goods/goods_detail*\",\"/goods/goods_return_detail*\",\"/goods/violation_list\",\"/goods/violation_detail*\",\"/goods/goods_list/change_sku_record\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":304,\"url\":\"/goods/evaluation/index\",\"name\":\"评价管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/goods/evaluation/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":301,\"url\":\"/goods/category\",\"name\":\"发布新商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/goods/category\",\"/goods/goods_add/index\",\"/goods/goods_add/success\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3614,\"url\":\"/kit/goods-price-management?tool_full_channel=10323_97807\",\"name\":\"价格管理\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/madrid/gray/is_in_white_for_price_manage)\"},{\"id\":306,\"url\":\"/search/good_inspect_v2/inspect_start\",\"name\":\"商品体检\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/search/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":310,\"url\":\"/goods/gold_manager\",\"name\":\"金价管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/glide/v2/mms/query/mall/is_gold_mall)\"},{\"id\":308,\"url\":\"/goods/goods_materials\",\"name\":\"商品素材\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods/goods_materials/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":325,\"url\":\"/goods-tool/home\",\"name\":\"商品工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods-tool/recommend\",\"/goods-tool/question/guide\",\"/goods-tool/remote-delivery\",\"/goods-tool/presale/list\",\"/goods-tool/freebie\",\"/goods/tools/ai\",\"/goods-tool/batch-delivery/list\",\"/mallcenter/salesInherit/step1\",\"/goods-tool/group-sale\",\"/mallcenter/dataCollection\",\"/chat-service/catalog\",\"/goods-tool/expert-experience\",\"/mallcenter/stockTaking/center\",\"/pg/mall_quality\",\"/tool/goods-tool/earnest\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":321,\"url\":\"/sycm/combat/sidebar\",\"name\":\"橱窗新品\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/salesPromotion/checkTargetCate)\"},{\"id\":3534,\"url\":\"/goods/goods_list/chance\",\"name\":\"机会商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3447,\"url\":\"/category-servicefee/overview\",\"name\":\"类目服务费\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/mms-gateway/commission/isMallHasCommissionGoods)\"},{\"id\":3486,\"url\":\"/overseas-goods/origin\",\"name\":\"商品溯源\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/overseas-goods/origin/home\",\"/overseas-goods/origin/servers\",\"/overseas-goods/origin/goods\",\"/overseas-goods/origin/orders\"],\"defaultVisibility\":true,\"whitelist\":\"get(/ringtailmms/api/xerus/trace/entrance)\"},{\"id\":3389,\"url\":\"/supplier\",\"name\":\"供货管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3444,\"url\":\"/sycm/goods-boost\",\"name\":\"新品飞跃\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/rivendell/api/leapProject/hitSideBar)\"},{\"id\":3619,\"url\":\"/mms-marketing-mixin/trade-in-subsidy\",\"name\":\"以旧换新国补\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/trade-in-subsidy\"],\"defaultVisibility\":true,\"whitelist\":\"post(/carson/api/trade_in/mall/show_button)\"},{\"id\":3650,\"url\":\"/sycm/goods_quality/pilot_goods\",\"name\":\"商品领航员\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"}]},{\"id\":3585,\"name\":\"流量运营\",\"icon\":\"https://promotion.pddpic.com/promo/icon/pic/c8d22d8b-b0ac-4c31-83d2-e945b8a7574a.png.slim.png\",\"children\":[{\"id\":3613,\"url\":\"/mms-marketing-mixin/hot-style-keep-rank\",\"name\":\"爆款保权重\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/hotStyleKeepRank/showEntry)\"},{\"id\":3604,\"url\":\"/mms-marketing-mixin/snatch-order-tool\",\"name\":\"抢单神器\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/pricemariana/api/grab/order/sidebar/check)\"},{\"id\":3586,\"url\":\"/kit/flagship-store-price-change?tool_full_channel=10323_97807\",\"name\":\"旗舰店考核\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/link/api/flagship/compare/price/rights/sidebar/check)\"},{\"id\":3589,\"url\":\"/kit/goods-price-change?tool_full_channel=10323_97807\",\"name\":\"好价拿流量\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/goodsPrice/showEntry)\"},{\"id\":3590,\"url\":\"/mms-marketing-mixin/same-price-bidding?SourceType=MMSActicon\",\"name\":\"同款竞价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/api/price/mariana/sameStyle/bidding/showEntry)\"},{\"id\":3591,\"url\":\"/mms-marketing-mixin/price-violation\",\"name\":\"商品体验违规\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/price-violation\"],\"defaultVisibility\":true,\"whitelist\":\"get(/pricemariana/api/violation/sidebar/check)\"},{\"id\":3594,\"url\":\"/act/high_price_operation\",\"name\":\"高价商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/high-price-operation\"],\"defaultVisibility\":false,\"whitelist\":\"get(/link/api/follow/price/marketing_activity/high_price_goods/sidebar/check)\"},{\"id\":3599,\"url\":\"/kit/brand-price-change?tool_full_channel=10323_97807\",\"name\":\"品牌权益\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/link/api/follow/price/good/price/rights/sidebar/check)\"},{\"id\":3601,\"url\":\"/mms-marketing-mixin/restricted-flow-price-change?tool_full_channel=10323_97807\",\"name\":\"营销受限商品\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/cancel/marketing/atmosphere/showEntry)\"},{\"id\":3602,\"url\":\"/mms-marketing-mixin/promotion-rights?tool_full_channel=10323_97807\",\"name\":\"免费流量扶持\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/pricemariana/api/ltlq/rights/support/sidebar/check)\"},{\"id\":3603,\"url\":\"/mms-marketing-mixin/new-goods-free-amount?tool_full_channel=10323_97807\",\"name\":\"新品免费起量\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/newFreeStart/showEntry)\"},{\"id\":3608,\"url\":\"/mms-marketing-mixin/copy-high-priced?tool_full_channel=10323_97807\",\"name\":\"一键降成本\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"get(/link/api/follow/price/high_price_copy_goods/sidebar/check)\"},{\"id\":3658,\"url\":\"/mms-marketing-mixin/order-snatching-tool?tool_full_channel=10323_97807\",\"name\":\"抢单神器\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-marketing-mixin/order-snatching-tool\"],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/grab/order/new/show_sidebar)\"},{\"id\":3605,\"url\":\"/mms-marketing-mixin/major-limited-quantity-promotion?tool_full_channel=10323_97807\",\"name\":\"限量上大促\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/limit/quantity/snap/showEntry)\"},{\"id\":3612,\"url\":\"/mms-marketing-mixin/auto-follow-price-page\",\"name\":\"自动跟价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/autoPriceAdjust/showEntry)\"},{\"id\":3621,\"url\":\"/mms-marketing-mixin/quality-experience\",\"name\":\"质量体验\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/api/price/mariana/quality_experience/show_entry)\"},{\"id\":3622,\"url\":\"/act/all-store-enroll?SourceType=Sidebar\",\"name\":\"活动全店报名\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/price/mariana/full_store_enroll/show_entry)\"}]},{\"id\":700,\"name\":\"推广平台\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/a56c77f8-1952-44b6-9996-a3d31ea6b361.png\",\"children\":[{\"id\":702,\"url\":\"https://yingxiao.pinduoduo.com/mains/promotionOverview\",\"name\":\"推广概况\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[\"^/exp/pro/index\",\"^/exp/messageCenter/\",\"^/exp/discountReport\",\"^/adgroup/\",\"^/extension/recharge_record\",\"^/extension/operation_record\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3587,\"url\":\"https://yingxiao.pinduoduo.com/goods/promotion/list\",\"name\":\"商品推广\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3588,\"url\":\"https://yingxiao.pinduoduo.com/goods/promotion/list?scenesMode=3\\u0026isOpen=1\",\"name\":\"全店托管\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/mms-gateway/mms/home/tab/isMallCanShowSmartPromotionTab)\"},{\"id\":3511,\"url\":\"https://yingxiao.pinduoduo.com/live/list\",\"name\":\"直播推广\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3514,\"url\":\"https://yingxiao.pinduoduo.com/starmall/list\",\"name\":\"明星店铺\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":708,\"url\":\"https://yingxiao.pinduoduo.com/goods/report/promotion/overView\",\"name\":\"推广报表\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"^/exp/reportOverview/index/search\",\"^/exp/reportOverview/index/scene\",\"^/exp/reportOverview/unit/\",\"^/exp/reportOverview/plan/\",\"^/exp/reportOverview/detail/\",\"^/exp/reportOverview/dayDetail\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3515,\"url\":\"https://yingxiao.pinduoduo.com/tools/index\",\"name\":\"推广工具\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3516,\"url\":\"https://yingxiao.pinduoduo.com/mains/account/finance\",\"name\":\"推广账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3512,\"url\":\"https://shuyuan.pinduoduo.com/\",\"name\":\"营销书院\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":1000,\"name\":\"数据中心\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/e3b5368b-775c-43ee-8337-d537b7386318.png\",\"children\":[{\"id\":1001,\"url\":\"/sycm/goods_effect\",\"name\":\"商品数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/goods_effect*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":1002,\"url\":\"/sycm/stores_data\",\"name\":\"交易数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/stores_data*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":1003,\"url\":\"/sycm/goods_quality/jump\",\"name\":\"服务数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/goods_quality*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3343,\"url\":\"/sycm/evaluation\",\"name\":\"经营总览\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/evaluation*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":1004,\"url\":\"/sycm/search_data\",\"name\":\"流量数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/sycm/search_data*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3254,\"url\":\"/sycm/fans\",\"name\":\"粉丝数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/sydney/api/mallFans/checkIsInFansTradeWhiteList)\"}]},{\"id\":600,\"name\":\"店铺营销\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/7b42dd53-b101-4b7b-aba8-99544c19e2e4.png\",\"children\":[{\"id\":601,\"url\":\"/act/index?SourceType=MMSActicon\",\"name\":\"营销活动\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/activity/resource/promotion_activity\",\"/activity/resource/entry\",\"/activity/resource/activity_detail/\",\"/activity/resource/attended_list\",\"/activity/resource_niche/apply/index\",\"/act/index\",\"/act/detail\",\"/act/sign_detail\",\"/act/my_join_activity\",\"/act/register_record\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":604,\"url\":\"/tool\",\"name\":\"营销工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^\\\\/tool(?!\\\\/(sms|pricebreak|promotion\\\\/*))\",\"^\\\\/kit(?!\\\\/(main-image|brand-price-change|high-prices-limit-rate|shop-service|new|price-insurance|goods-price-management|goods-price-change\\\\/*))\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3615,\"url\":\"/goods-tool/snatch-order-tool-upgrade\",\"name\":\"抢量神器\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/goods-tool/snatch-order-tool-upgrade\"],\"defaultVisibility\":true,\"whitelist\":\"post(/api/price/mariana/smartPricing/showEntry)\"},{\"id\":602,\"url\":\"/act-bidding/home\",\"name\":\"爆款竞价\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/act-bidding/my-bidding-list\",\"/act-bidding/sign-detail\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3487,\"url\":\"https://live.pinduoduo.com/creator/index?from=mms\",\"name\":\"多多视频\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3530,\"url\":\"/kit/new?tool_full_channel=10323_97807\",\"name\":\"新客立减\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/kit/new\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3524,\"url\":\"/act-bidding/market-bid-home\",\"name\":\"营销竞价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/act-bidding/market-bid-home\",\"/act-bidding/market-sign\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":610,\"url\":\"https://live.pinduoduo.com/n-creator/live/home?from=mms\",\"name\":\"多多直播\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3532,\"url\":\"/tool/promotion?tool_full_channel=10323_97807\",\"name\":\"限时限量购\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/tool/promotion\"],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/marketingTools/limitTimeQuantity/sidebarWhitelist)\"},{\"id\":606,\"url\":\"/act-bidding/platform-purchase/home\",\"name\":\"平台招标\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/act/act_call_bidding/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3542,\"url\":\"/tool/sms\",\"name\":\"短信营销\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/tool/sms/*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3531,\"url\":\"/kit/inflation-coupon?tool_full_channel=10323_97807\",\"name\":\"膨胀券\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/kit/inflation-coupon\"],\"defaultVisibility\":false,\"whitelist\":\"post(/rivendell/api/marketingTools/flatCoupon/sidebarWhitelist)\"},{\"id\":3470,\"url\":\"/mallcenter/member\",\"name\":\"店铺会员\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/member/*\"],\"defaultVisibility\":true,\"whitelist\":\"get(/earth/api/primeGiftPack/inWhiteList)\"},{\"id\":3519,\"url\":\"/kit/main-image\",\"name\":\"营销主图\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/kit/main-image\"],\"defaultVisibility\":true,\"whitelist\":\"post(/rivendell/api/marketingImage/whitelist)\"},{\"id\":3559,\"url\":\"/kit/price-insurance?tool_full_channel=10323_97807\",\"name\":\"价格保护\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/kit/price-insurance\"],\"defaultVisibility\":true,\"whitelist\":\"get(/maine/api/price/protect/mms/hit)\"}]},{\"id\":3635,\"name\":\"商家权益保护\",\"icon\":\"https://promotion.pddpic.com/promo/mms/f652aeb6-e60b-451f-b92f-46e44dae3cf9.png.slim.png\",\"children\":[{\"id\":3636,\"url\":\"/other/rule\",\"name\":\"规则更新\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3637,\"url\":\"/kit/goods-price-management?lowPriceFilter=true\",\"name\":\"低价预警\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3638,\"url\":\"/orders/appeals/badOrder\",\"name\":\"异常单申诉\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3639,\"url\":\"/orders/appeals/aftersale/order\",\"name\":\"售后申诉\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3640,\"url\":\"/goods/evaluation/index?sellerRightProtect=1\",\"name\":\"评价举报\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3641,\"url\":\"https://ipp.pinduoduo.com\",\"name\":\"知识产权保护\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3642,\"url\":\"/mallcenter/info/shopUpgrade/index\",\"name\":\"店铺升级\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"post(/earth/api/merchant/white/inUpgradeWhiteList)\"},{\"id\":3643,\"url\":\"/pg/feedback\",\"name\":\"意见反馈\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":400,\"name\":\"账户资金\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/95b94fb8-77ec-4ac3-adef-8d3f29fdd1d0.png\",\"children\":[{\"id\":441,\"url\":\"/finance/balance?q=1\",\"name\":\"资金中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/FundManagement/withdraw/index\",\"/recharge/balance\",\"/FundManagement/SelectRechargeType/SelectRechargeType\",\"/FundManagement/AccountWithdraw2\",\"/FundManagement/AccountWithdraw2/edit_account\",\"/FundManagement/activity_deposit/select_deposit_way\",\"/FundManagement/activity_deposit/input_amount\",\"/finance/balance\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3474,\"url\":\"/cashier/finance/balance\",\"name\":\"资金中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":442,\"url\":\"/finance/payment-bills/index?q=1\",\"name\":\"对账中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/payment-bills/export-history\",\"/finance/payment-bills/index\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3475,\"url\":\"/cashier/finance/payment-bills\",\"name\":\"对账中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":403,\"url\":\"/finance/deposit\",\"name\":\"保证金\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/deposit\",\"/recharge/activity_bond\",\"/FundManagement/eReceipts\",\"/Fundmanagement/withdraw_deposit/index\",\"/recharge/enter_deposit\",\"FundManagement/activity_deposit/gear_deposit/offline_pay/index\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3477,\"url\":\"/cashier/finance/deposit\",\"name\":\"保证金\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":405,\"url\":\"/pg/deduciton_detail/record\",\"name\":\"消费者补偿明细\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/FundManagement/Chargebacks/withhold\",\"/FundManagement/Chargebacks/shipping\",\"/pg/deduciton_detail/stock\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":406,\"url\":\"/pg/restrict_list\",\"name\":\"资金限制\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mall/restrict_money\",\"/mall/restrict_detail\",\"/pg/restrict_list\",\"/pg/restrict_detail\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":404,\"url\":\"/finance/invoice/index\",\"name\":\"发票管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/invoice/index\",\"/finance/invoice/invoice-info-manage\",\"/finance/invoice/questions\"],\"defaultVisibility\":true,\"whitelist\":\"!post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":3479,\"url\":\"/cashier/finance/invoice\",\"name\":\"发票管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/checkCenterJumpOptimizeGray)\"},{\"id\":410,\"url\":\"/finance/expense\",\"name\":\"营销结算\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[\"/finance/expense/invoice-norm\",\"/finance/expense/process\"],\"defaultVisibility\":false,\"whitelist\":\"post(/uranus/api/expense/checkGray)\"},{\"id\":3484,\"url\":\"/cashier/finance/fft-account\",\"name\":\"运营账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/summer-mms/cashier/verify/verifyFftPageAuth)\"}]},{\"id\":800,\"name\":\"店铺管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/a0b6afda-b18c-4bf9-b4c3-f48a3396ff36.png\",\"children\":[{\"id\":805,\"url\":\"/pg/violation_list\",\"name\":\"违规信息\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mall/violation_info/violation\",\"/mall/complain_result\",\"/mall/violation_complain\",\"/pg/violation_list\",\"/pg/violation_info\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":807,\"url\":\"/orders/appeals\",\"name\":\"订单申诉\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/appeals/*\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":806,\"url\":\"/mallcenter/close/index\",\"name\":\"退店\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mallcenter/close\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":801,\"url\":\"/mallcenter/mallinfo\",\"name\":\"店铺信息\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/info/(?!(createNewMall/*))\",\"^/mallcenter/mallinfo\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":808,\"url\":\"/material/upload\",\"name\":\"图片空间\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/material\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":802,\"url\":\"/mallcenter/sub/account\",\"name\":\"子账号管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mallcenter/sub\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3573,\"url\":\"/decoration/home\",\"name\":\"店铺装修\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/decoration/home*\",\"/decoration/topic*\",\"/decoration/guide\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3577,\"url\":\"/goods/goods_categories_home\",\"name\":\"店铺页设置\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"/decoration/notification\",\"/goods/up\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3540,\"url\":\"/orders/warnCenter\",\"name\":\"预警中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3549,\"url\":\"/orders/dataRiskWarn\",\"name\":\"安全风险\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/orders/dataRiskWarn\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":810,\"url\":\"/mallcenter/storeManagement/index\",\"name\":\"门店管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/storeManagement\"],\"defaultVisibility\":false,\"whitelist\":\"post(/earth/api/mallStore/queryMallStoreWhiteList)\"},{\"id\":3497,\"url\":\"/mallcenter/info/createNewMall/index\",\"name\":\"新店管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/mallcenter/info/createNewMall\"],\"defaultVisibility\":true,\"whitelist\":\"get(/earth/api/whitelist/multiMall/inWhiteList)\"},{\"id\":820,\"url\":\"/profit-sharing\",\"name\":\"分账管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/profit-sharing\"],\"defaultVisibility\":false,\"whitelist\":\"post(/essexbusiness/manage/relation/common/is/split/mall)\"},{\"id\":3620,\"url\":\"/mallcenter/drugstore-audit\",\"name\":\"药房合同审核\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/api/medicineMerchant/mms/checkMallIsWhite)\"}]},{\"id\":500,\"name\":\"多多客服\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/fb5d7709-f9f3-4e9f-acfb-69d918868549.png\",\"children\":[{\"id\":503,\"url\":\"/mms-chat/overview\",\"name\":\"客服数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"/mms-chat/overview/store\",\"/mms-chat/overview/merchant\",\"/mms-chat/overview/robot\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":502,\"url\":\"/chat-service/status\",\"name\":\"实时管理\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/chat-service/status\",\"^/Pdd.html#/chats/status/index\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":505,\"url\":\"/mms-chat/tools\",\"name\":\"客服工具\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":501,\"url\":\"/mms-chat/search\",\"name\":\"聊天记录\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/chat-service/search\",\"^/Pdd.html#/chats/search/index\",\"^/mms-chat/search\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":504,\"url\":\"/chat-service/setting\",\"name\":\"消息设置\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/chat-service/setting\",\"^/Pdd.html#/chats/settings/index\"],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3384,\"url\":\"/chat-service/robot\",\"name\":\"客服机器人\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":508,\"url\":\"/mms-chat/service/promise\",\"name\":\"服务助手\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":3482,\"url\":\"/mallcenter/chat-account-list\",\"name\":\"头像昵称\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/janus/api/customService/verificationDisplay)\"},{\"id\":3432,\"url\":\"/chat-service/callAccount\",\"name\":\"消费者隐私\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"get(/fission/functions/mms-chat/call-entrance-gray)\"}]},{\"id\":1200,\"name\":\"多多进宝\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/feeb6de7-4647-4b85-abb8-3515c4d54465.png\",\"children\":[{\"id\":1202,\"url\":\"/jinbao/effect?click_from=MMS_SIDEBAR\",\"name\":\"进宝首页\",\"isNotifyClicked\":true,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/index\",\"/jinbao/newEffect\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuIndex)\"},{\"id\":1203,\"url\":\"/jinbao/promotion/index?click_from=MMS_SIDEBAR\",\"name\":\"推广设置\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/promotion/index\",\"^/jinbao/mallPromotion\",\"^/jinbao/coupon\",\"^/jinbao/operateRecord\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuSupport)\"},{\"id\":1204,\"url\":\"/jinbao/promotionDetail?click_from=MMS_SIDEBAR\",\"name\":\"推广效果\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/promotionDetail\",\"^/jinbao/goodsEffect\",\"^/jinbao/orderDetail\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuSupport)\"},{\"id\":1205,\"url\":\"/jinbao/hotActivity?click_from=MMS_SIDEBAR\",\"name\":\"推广助力\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/jinbao/zsactivity\",\"^/jinbao/secondKillActivity\"],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuSupport)\"},{\"id\":3417,\"url\":\"/jinbao/marketAccount?click_from=MMS_SIDEBAR\",\"name\":\"营销账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMarketAccount)\"},{\"id\":3413,\"url\":\"/jinbao/rateAccount?click_from=MMS_SIDEBAR\",\"name\":\"佣金账户\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":false,\"whitelist\":\"post(/cps/api/common/checkMenuAccount)\"}]},{\"id\":3396,\"name\":\"采购管理\",\"icon\":\"https://commimg.pddpic.com/galerie-go/static/2020-07-22/95fe62f4-df95-438d-a787-bcc7b0afe5e1.png\",\"children\":[{\"id\":3397,\"url\":\"https://pifa.pinduoduo.com/?forceLogin=true\\u0026sn=84134\",\"name\":\"批发采购\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3420,\"url\":\"https://pifa.pinduoduo.com/order/?forceLogin=true\\u0026sn=84134\",\"name\":\"采购订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3419,\"url\":\"/supplier/distribution\",\"name\":\"分销代发\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/supplier/distribution/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/mille/mms/reseller/goods/sidebarShowable)\"}]},{\"id\":1300,\"name\":\"品牌管理\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/b61dd2ec-e9d8-41eb-971a-35957520e6ca.png\",\"children\":[{\"id\":1302,\"url\":\"/brand/applet/\",\"name\":\"拼内购\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/applet/*\"],\"defaultVisibility\":false,\"whitelist\":\"\"},{\"id\":1307,\"url\":\"/brand/marketing/home\",\"name\":\"营销玩法\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/marketing/*\",\"^/creative/marketing/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/marketing/navigation)\"},{\"id\":1305,\"url\":\"/brand/bigDiscount/\",\"name\":\"小程序大促\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/bigDiscount/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/philips/decoration/side/navigation)\"},{\"id\":1306,\"url\":\"/wxmp-decoration/\",\"name\":\"小程序装修\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/wxmp-decoration/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/philips/decoration/side/navigation)\"},{\"id\":1308,\"url\":\"/brand/applet/pin/data\",\"name\":\"小程序数据\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand/report/*\",\"^/brand/report\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/philips/data/side/navigation)\"},{\"id\":1301,\"url\":\"/brand-decoration/\",\"name\":\"品牌站装修\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[\"^/brand-decoration/*\"],\"defaultVisibility\":false,\"whitelist\":\"post(/brand-mms-binder/mms/show/side/navigation)\"}]},{\"id\":3562,\"name\":\"成长中心\",\"icon\":\"https://funimg.pddpic.com/mms/1db572c3-182c-4063-a390-a2fb4c867edf.png.slim.png\",\"children\":[{\"id\":3563,\"url\":\"/other/rule\",\"name\":\"规则中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3564,\"url\":\"/daxue/home\",\"name\":\"拼多多课堂\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3565,\"url\":\"https://shuyuan.pinduoduo.com/\",\"name\":\"营销书院\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3567,\"url\":\"/other/helpcenter/\",\"name\":\"帮助中心\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3568,\"url\":\"/mallcenter/medal\",\"name\":\"勋章馆\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":3569,\"url\":\"/mallcenter/ability/index\",\"name\":\"能力认证\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":false,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"}]},{\"id\":900,\"name\":\"商家服务市场\",\"icon\":\"https://commimg.pddpic.com/mms_static/2019-11-15/e3967a00-fe52-4313-8939-9270aa8b2f44.png\",\"children\":[{\"id\":915,\"url\":\"https://fuwu.pinduoduo.com/service-market/my-service\",\"name\":\"我的服务\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":916,\"url\":\"https://fuwu.pinduoduo.com/service-market/my-auth\",\"name\":\"我的授权\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":901,\"url\":\"https://fuwu.pinduoduo.com/service-market/\",\"name\":\"服务市场\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":914,\"url\":\"https://fuwu.pinduoduo.com/service-market/evaluation-manage\",\"name\":\"服务评价\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[],\"defaultVisibility\":true,\"whitelist\":\"\"},{\"id\":913,\"url\":\"https://fuwu.pinduoduo.com/service-market/order-list\",\"name\":\"服务订单\",\"isNotifyClicked\":false,\"isOpenInNewWindow\":true,\"activeList\":[\"/service-market/order-detail\"],\"defaultVisibility\":true,\"whitelist\":\"\"}]}],\"extra\":{\"showHome\":true}},\"whitelistCookie\":\"3616,150,3523,3614,321,3613,3604,3594,3599,3602,3603,3608,3605,3621,3622,3588,3254,3532,3642,3474,3475,3477,3479,3482,1202,1203,1204,1205,3417\"},\"ua\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36\",\"headerProps\":{\"serverData\":{\"userInfo\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"mallOwner\":false,\"roleId\":1,\"isBindWeChat\":false,\"forceMobileVerify\":false,\"mallVerify\":true,\"mallInfoAuthority\":true,\"conjoinedUserId\":null,\"mall_id\":619231161,\"password_status\":1,\"server_time\":1746873063,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"mall\":{\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"company_phone\":\"\",\"merchant_type\":1,\"mall_type\":2,\"source_type\":3,\"oversea_type\":0,\"is_open\":1,\"staple_id\":\"4\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"status\":2,\"staple\":[\"家居生活\"],\"apply_close\":0},\"all\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"roles\":[{\"id\":1,\"name\":\"admin\",\"description\":\"管理员\",\"createdAt\":\"2015-12-10 23:35:30\",\"updatedAt\":\"2015-12-10 23:35:30\",\"display_name\":\"管理员\"}],\"mallOwner\":false,\"mall\":{\"id\":619231161,\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"staple_id\":\"4\",\"chat_enable\":0,\"company_address\":\"\",\"company_id\":\"\",\"company_name\":\"\",\"company_phone\":\"\",\"merchant_type\":1,\"status\":2,\"mall_type\":2,\"customs_record_no\":\"\",\"refund_address\":\"湖南省长沙市芙蓉区名士豪挺17栋1117\",\"refund_name\":\"陈嘉\",\"region_emergent\":0,\"offline_note\":\"\",\"wms_id\":0,\"score_avg\":0,\"created_at\":1741770733,\"updated_at\":1746174569,\"source_type\":3,\"has_merchant_coupon\":null,\"is_open\":1,\"username\":\"星空酒业avcn\",\"oversea_type\":0,\"entry_type\":5},\"staple\":[\"家居生活\"],\"applyClose\":0,\"isBindWeChat\":false,\"newHomePageWhiteList\":true,\"forceMobileVerify\":false,\"roleId\":1,\"isAppleIdBound\":false,\"appleIdName\":null,\"appleIdEmail\":null,\"mall_id\":619231161,\"password_status\":1,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"is_deleted\":0,\"is_mall_frozen\":0,\"is_mobile_verification\":1,\"platform_protocol\":null,\"is_white_list\":0,\"is_coupon_white_list\":true,\"is_marketing_white_list\":true,\"is_account_white\":false,\"is_ui_white\":true,\"is_alipay_white\":true,\"is_recommend\":true,\"server_time\":1746873063}},\"showKuajing\":null,\"headerMcAb\":{\"MMS_header_mcentry\":\"MMS_header_mcentry_30\"}}},\"umdSrc\":{\"Entry\":\"https://commimg.pddpic.com/mms_static/mms_umdkits/umd_kits_api_Entry.556a6ef7.v20250423142224_8f055100.js\"},\"modalSrc\":\"https://commimg.pddpic.com/mms_static/mms_umdkits/mms_modal_Modal.ad3381dc.v20250505155517_bab2af2a.js\",\"webp\":\"true\",\"backendAbtest\":null,\"userInfo\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"mallOwner\":false,\"roleId\":1,\"isBindWeChat\":false,\"forceMobileVerify\":false,\"mallVerify\":true,\"mallInfoAuthority\":true,\"conjoinedUserId\":null,\"mall_id\":619231161,\"password_status\":1,\"server_time\":1746873063,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"mall\":{\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"company_phone\":\"\",\"merchant_type\":1,\"mall_type\":2,\"source_type\":3,\"oversea_type\":0,\"is_open\":1,\"staple_id\":\"4\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"status\":2,\"staple\":[\"家居生活\"],\"apply_close\":0},\"all\":{\"id\":164916361,\"username\":\"云客客服颜伟\",\"mobile\":\"139****4863\",\"nickname\":\"\",\"roles\":[{\"id\":1,\"name\":\"admin\",\"description\":\"管理员\",\"createdAt\":\"2015-12-10 23:35:30\",\"updatedAt\":\"2015-12-10 23:35:30\",\"display_name\":\"管理员\"}],\"mallOwner\":false,\"mall\":{\"id\":619231161,\"mall_id\":619231161,\"mall_name\":\"星空酒业avcn\",\"mall_desc\":\"您的小店已开启，为了更方便消费者了解您的店铺，快来补充店铺详情吧~\",\"logo\":\"http://t16img.yangkeduo.com/pdd_ims/img_check/v2/E9F6E9469B460020200112174512892/50b70406e674435499a1da0a3f72f396.png\",\"staple_id\":\"4\",\"chat_enable\":0,\"company_address\":\"\",\"company_id\":\"\",\"company_name\":\"\",\"company_phone\":\"\",\"merchant_type\":1,\"status\":2,\"mall_type\":2,\"customs_record_no\":\"\",\"refund_address\":\"湖南省长沙市芙蓉区名士豪挺17栋1117\",\"refund_name\":\"陈嘉\",\"region_emergent\":0,\"offline_note\":\"\",\"wms_id\":0,\"score_avg\":0,\"created_at\":1741770733,\"updated_at\":1746174569,\"source_type\":3,\"has_merchant_coupon\":null,\"is_open\":1,\"username\":\"星空酒业avcn\",\"oversea_type\":0,\"entry_type\":5},\"staple\":[\"家居生活\"],\"applyClose\":0,\"isBindWeChat\":false,\"newHomePageWhiteList\":true,\"forceMobileVerify\":false,\"roleId\":1,\"isAppleIdBound\":false,\"appleIdName\":null,\"appleIdEmail\":null,\"mall_id\":619231161,\"password_status\":1,\"created_at\":\"2025-04-28 18:47:43\",\"updated_at\":\"2025-04-28 18:56:50\",\"is_deleted\":0,\"is_mall_frozen\":0,\"is_mobile_verification\":1,\"platform_protocol\":null,\"is_white_list\":0,\"is_coupon_white_list\":true,\"is_marketing_white_list\":true,\"is_account_white\":false,\"is_ui_white\":true,\"is_alipay_white\":true,\"is_recommend\":true,\"server_time\":1746873063}}},\"page\":\"/content\",\"query\":{\"msfrom\":\"mms_sidenav\"},\"buildId\":\"7i7Rbr-kpjosmeHv6knQY\",\"assetPrefix\":\"https://mms-static.pddpic.com/main\",\"isFallback\":false,\"customServer\":true,\"gip\":true,\"appGip\":true}" } },
  [Symbol.toStringTag]: { value: "HTMLScriptElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  PERSISTENT: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  forceJURL: { "value": false, "writable": true, "enumerable": true, "configurable": true },
  [Symbol.toStringTag]: { value: "Window", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Screen.prototype, {
  [Symbol.toStringTag]: { value: "Screen", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: { value: "HTMLDocument", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLHeadElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLBodyElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: { value: "Location", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLCanvasElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: { "value": 256, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BUFFER_BIT: { "value": 1024, "writable": false, "enumerable": true, "configurable": false },
  COLOR_BUFFER_BIT: { "value": 16384, "writable": false, "enumerable": true, "configurable": false },
  POINTS: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  LINES: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  LINE_LOOP: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  LINE_STRIP: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
  TRIANGLES: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
  TRIANGLE_STRIP: { "value": 5, "writable": false, "enumerable": true, "configurable": false },
  TRIANGLE_FAN: { "value": 6, "writable": false, "enumerable": true, "configurable": false },
  ZERO: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  ONE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  SRC_COLOR: { "value": 768, "writable": false, "enumerable": true, "configurable": false },
  ONE_MINUS_SRC_COLOR: { "value": 769, "writable": false, "enumerable": true, "configurable": false },
  SRC_ALPHA: { "value": 770, "writable": false, "enumerable": true, "configurable": false },
  ONE_MINUS_SRC_ALPHA: { "value": 771, "writable": false, "enumerable": true, "configurable": false },
  DST_ALPHA: { "value": 772, "writable": false, "enumerable": true, "configurable": false },
  ONE_MINUS_DST_ALPHA: { "value": 773, "writable": false, "enumerable": true, "configurable": false },
  DST_COLOR: { "value": 774, "writable": false, "enumerable": true, "configurable": false },
  ONE_MINUS_DST_COLOR: { "value": 775, "writable": false, "enumerable": true, "configurable": false },
  SRC_ALPHA_SATURATE: { "value": 776, "writable": false, "enumerable": true, "configurable": false },
  FUNC_ADD: { "value": 32774, "writable": false, "enumerable": true, "configurable": false },
  BLEND_EQUATION: { "value": 32777, "writable": false, "enumerable": true, "configurable": false },
  BLEND_EQUATION_RGB: { "value": 32777, "writable": false, "enumerable": true, "configurable": false },
  BLEND_EQUATION_ALPHA: { "value": 34877, "writable": false, "enumerable": true, "configurable": false },
  FUNC_SUBTRACT: { "value": 32778, "writable": false, "enumerable": true, "configurable": false },
  FUNC_REVERSE_SUBTRACT: { "value": 32779, "writable": false, "enumerable": true, "configurable": false },
  BLEND_DST_RGB: { "value": 32968, "writable": false, "enumerable": true, "configurable": false },
  BLEND_SRC_RGB: { "value": 32969, "writable": false, "enumerable": true, "configurable": false },
  BLEND_DST_ALPHA: { "value": 32970, "writable": false, "enumerable": true, "configurable": false },
  BLEND_SRC_ALPHA: { "value": 32971, "writable": false, "enumerable": true, "configurable": false },
  CONSTANT_COLOR: { "value": 32769, "writable": false, "enumerable": true, "configurable": false },
  ONE_MINUS_CONSTANT_COLOR: { "value": 32770, "writable": false, "enumerable": true, "configurable": false },
  CONSTANT_ALPHA: { "value": 32771, "writable": false, "enumerable": true, "configurable": false },
  ONE_MINUS_CONSTANT_ALPHA: { "value": 32772, "writable": false, "enumerable": true, "configurable": false },
  BLEND_COLOR: { "value": 32773, "writable": false, "enumerable": true, "configurable": false },
  ARRAY_BUFFER: { "value": 34962, "writable": false, "enumerable": true, "configurable": false },
  ELEMENT_ARRAY_BUFFER: { "value": 34963, "writable": false, "enumerable": true, "configurable": false },
  ARRAY_BUFFER_BINDING: { "value": 34964, "writable": false, "enumerable": true, "configurable": false },
  ELEMENT_ARRAY_BUFFER_BINDING: { "value": 34965, "writable": false, "enumerable": true, "configurable": false },
  STREAM_DRAW: { "value": 35040, "writable": false, "enumerable": true, "configurable": false },
  STATIC_DRAW: { "value": 35044, "writable": false, "enumerable": true, "configurable": false },
  DYNAMIC_DRAW: { "value": 35048, "writable": false, "enumerable": true, "configurable": false },
  BUFFER_SIZE: { "value": 34660, "writable": false, "enumerable": true, "configurable": false },
  BUFFER_USAGE: { "value": 34661, "writable": false, "enumerable": true, "configurable": false },
  CURRENT_VERTEX_ATTRIB: { "value": 34342, "writable": false, "enumerable": true, "configurable": false },
  FRONT: { "value": 1028, "writable": false, "enumerable": true, "configurable": false },
  BACK: { "value": 1029, "writable": false, "enumerable": true, "configurable": false },
  FRONT_AND_BACK: { "value": 1032, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_2D: { "value": 3553, "writable": false, "enumerable": true, "configurable": false },
  CULL_FACE: { "value": 2884, "writable": false, "enumerable": true, "configurable": false },
  BLEND: { "value": 3042, "writable": false, "enumerable": true, "configurable": false },
  DITHER: { "value": 3024, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_TEST: { "value": 2960, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_TEST: { "value": 2929, "writable": false, "enumerable": true, "configurable": false },
  SCISSOR_TEST: { "value": 3089, "writable": false, "enumerable": true, "configurable": false },
  POLYGON_OFFSET_FILL: { "value": 32823, "writable": false, "enumerable": true, "configurable": false },
  SAMPLE_ALPHA_TO_COVERAGE: { "value": 32926, "writable": false, "enumerable": true, "configurable": false },
  SAMPLE_COVERAGE: { "value": 32928, "writable": false, "enumerable": true, "configurable": false },
  NO_ERROR: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  INVALID_ENUM: { "value": 1280, "writable": false, "enumerable": true, "configurable": false },
  INVALID_VALUE: { "value": 1281, "writable": false, "enumerable": true, "configurable": false },
  INVALID_OPERATION: { "value": 1282, "writable": false, "enumerable": true, "configurable": false },
  OUT_OF_MEMORY: { "value": 1285, "writable": false, "enumerable": true, "configurable": false },
  CW: { "value": 2304, "writable": false, "enumerable": true, "configurable": false },
  CCW: { "value": 2305, "writable": false, "enumerable": true, "configurable": false },
  LINE_WIDTH: { "value": 2849, "writable": false, "enumerable": true, "configurable": false },
  ALIASED_POINT_SIZE_RANGE: { "value": 33901, "writable": false, "enumerable": true, "configurable": false },
  ALIASED_LINE_WIDTH_RANGE: { "value": 33902, "writable": false, "enumerable": true, "configurable": false },
  CULL_FACE_MODE: { "value": 2885, "writable": false, "enumerable": true, "configurable": false },
  FRONT_FACE: { "value": 2886, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_RANGE: { "value": 2928, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_WRITEMASK: { "value": 2930, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_CLEAR_VALUE: { "value": 2931, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_FUNC: { "value": 2932, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_CLEAR_VALUE: { "value": 2961, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_FUNC: { "value": 2962, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_FAIL: { "value": 2964, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_PASS_DEPTH_FAIL: { "value": 2965, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_PASS_DEPTH_PASS: { "value": 2966, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_REF: { "value": 2967, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_VALUE_MASK: { "value": 2963, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_WRITEMASK: { "value": 2968, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BACK_FUNC: { "value": 34816, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BACK_FAIL: { "value": 34817, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BACK_PASS_DEPTH_FAIL: { "value": 34818, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BACK_PASS_DEPTH_PASS: { "value": 34819, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BACK_REF: { "value": 36003, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BACK_VALUE_MASK: { "value": 36004, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BACK_WRITEMASK: { "value": 36005, "writable": false, "enumerable": true, "configurable": false },
  VIEWPORT: { "value": 2978, "writable": false, "enumerable": true, "configurable": false },
  SCISSOR_BOX: { "value": 3088, "writable": false, "enumerable": true, "configurable": false },
  COLOR_CLEAR_VALUE: { "value": 3106, "writable": false, "enumerable": true, "configurable": false },
  COLOR_WRITEMASK: { "value": 3107, "writable": false, "enumerable": true, "configurable": false },
  UNPACK_ALIGNMENT: { "value": 3317, "writable": false, "enumerable": true, "configurable": false },
  PACK_ALIGNMENT: { "value": 3333, "writable": false, "enumerable": true, "configurable": false },
  MAX_TEXTURE_SIZE: { "value": 3379, "writable": false, "enumerable": true, "configurable": false },
  MAX_VIEWPORT_DIMS: { "value": 3386, "writable": false, "enumerable": true, "configurable": false },
  SUBPIXEL_BITS: { "value": 3408, "writable": false, "enumerable": true, "configurable": false },
  RED_BITS: { "value": 3410, "writable": false, "enumerable": true, "configurable": false },
  GREEN_BITS: { "value": 3411, "writable": false, "enumerable": true, "configurable": false },
  BLUE_BITS: { "value": 3412, "writable": false, "enumerable": true, "configurable": false },
  ALPHA_BITS: { "value": 3413, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_BITS: { "value": 3414, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_BITS: { "value": 3415, "writable": false, "enumerable": true, "configurable": false },
  POLYGON_OFFSET_UNITS: { "value": 10752, "writable": false, "enumerable": true, "configurable": false },
  POLYGON_OFFSET_FACTOR: { "value": 32824, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_BINDING_2D: { "value": 32873, "writable": false, "enumerable": true, "configurable": false },
  SAMPLE_BUFFERS: { "value": 32936, "writable": false, "enumerable": true, "configurable": false },
  SAMPLES: { "value": 32937, "writable": false, "enumerable": true, "configurable": false },
  SAMPLE_COVERAGE_VALUE: { "value": 32938, "writable": false, "enumerable": true, "configurable": false },
  SAMPLE_COVERAGE_INVERT: { "value": 32939, "writable": false, "enumerable": true, "configurable": false },
  COMPRESSED_TEXTURE_FORMATS: { "value": 34467, "writable": false, "enumerable": true, "configurable": false },
  DONT_CARE: { "value": 4352, "writable": false, "enumerable": true, "configurable": false },
  FASTEST: { "value": 4353, "writable": false, "enumerable": true, "configurable": false },
  NICEST: { "value": 4354, "writable": false, "enumerable": true, "configurable": false },
  GENERATE_MIPMAP_HINT: { "value": 33170, "writable": false, "enumerable": true, "configurable": false },
  BYTE: { "value": 5120, "writable": false, "enumerable": true, "configurable": false },
  UNSIGNED_BYTE: { "value": 5121, "writable": false, "enumerable": true, "configurable": false },
  SHORT: { "value": 5122, "writable": false, "enumerable": true, "configurable": false },
  UNSIGNED_SHORT: { "value": 5123, "writable": false, "enumerable": true, "configurable": false },
  INT: { "value": 5124, "writable": false, "enumerable": true, "configurable": false },
  UNSIGNED_INT: { "value": 5125, "writable": false, "enumerable": true, "configurable": false },
  FLOAT: { "value": 5126, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_COMPONENT: { "value": 6402, "writable": false, "enumerable": true, "configurable": false },
  ALPHA: { "value": 6406, "writable": false, "enumerable": true, "configurable": false },
  RGB: { "value": 6407, "writable": false, "enumerable": true, "configurable": false },
  RGBA: { "value": 6408, "writable": false, "enumerable": true, "configurable": false },
  LUMINANCE: { "value": 6409, "writable": false, "enumerable": true, "configurable": false },
  LUMINANCE_ALPHA: { "value": 6410, "writable": false, "enumerable": true, "configurable": false },
  UNSIGNED_SHORT_4_4_4_4: { "value": 32819, "writable": false, "enumerable": true, "configurable": false },
  UNSIGNED_SHORT_5_5_5_1: { "value": 32820, "writable": false, "enumerable": true, "configurable": false },
  UNSIGNED_SHORT_5_6_5: { "value": 33635, "writable": false, "enumerable": true, "configurable": false },
  FRAGMENT_SHADER: { "value": 35632, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_SHADER: { "value": 35633, "writable": false, "enumerable": true, "configurable": false },
  MAX_VERTEX_ATTRIBS: { "value": 34921, "writable": false, "enumerable": true, "configurable": false },
  MAX_VERTEX_UNIFORM_VECTORS: { "value": 36347, "writable": false, "enumerable": true, "configurable": false },
  MAX_VARYING_VECTORS: { "value": 36348, "writable": false, "enumerable": true, "configurable": false },
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: { "value": 35661, "writable": false, "enumerable": true, "configurable": false },
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: { "value": 35660, "writable": false, "enumerable": true, "configurable": false },
  MAX_TEXTURE_IMAGE_UNITS: { "value": 34930, "writable": false, "enumerable": true, "configurable": false },
  MAX_FRAGMENT_UNIFORM_VECTORS: { "value": 36349, "writable": false, "enumerable": true, "configurable": false },
  SHADER_TYPE: { "value": 35663, "writable": false, "enumerable": true, "configurable": false },
  DELETE_STATUS: { "value": 35712, "writable": false, "enumerable": true, "configurable": false },
  LINK_STATUS: { "value": 35714, "writable": false, "enumerable": true, "configurable": false },
  VALIDATE_STATUS: { "value": 35715, "writable": false, "enumerable": true, "configurable": false },
  ATTACHED_SHADERS: { "value": 35717, "writable": false, "enumerable": true, "configurable": false },
  ACTIVE_UNIFORMS: { "value": 35718, "writable": false, "enumerable": true, "configurable": false },
  ACTIVE_ATTRIBUTES: { "value": 35721, "writable": false, "enumerable": true, "configurable": false },
  SHADING_LANGUAGE_VERSION: { "value": 35724, "writable": false, "enumerable": true, "configurable": false },
  CURRENT_PROGRAM: { "value": 35725, "writable": false, "enumerable": true, "configurable": false },
  NEVER: { "value": 512, "writable": false, "enumerable": true, "configurable": false },
  LESS: { "value": 513, "writable": false, "enumerable": true, "configurable": false },
  EQUAL: { "value": 514, "writable": false, "enumerable": true, "configurable": false },
  LEQUAL: { "value": 515, "writable": false, "enumerable": true, "configurable": false },
  GREATER: { "value": 516, "writable": false, "enumerable": true, "configurable": false },
  NOTEQUAL: { "value": 517, "writable": false, "enumerable": true, "configurable": false },
  GEQUAL: { "value": 518, "writable": false, "enumerable": true, "configurable": false },
  ALWAYS: { "value": 519, "writable": false, "enumerable": true, "configurable": false },
  KEEP: { "value": 7680, "writable": false, "enumerable": true, "configurable": false },
  REPLACE: { "value": 7681, "writable": false, "enumerable": true, "configurable": false },
  INCR: { "value": 7682, "writable": false, "enumerable": true, "configurable": false },
  DECR: { "value": 7683, "writable": false, "enumerable": true, "configurable": false },
  INVERT: { "value": 5386, "writable": false, "enumerable": true, "configurable": false },
  INCR_WRAP: { "value": 34055, "writable": false, "enumerable": true, "configurable": false },
  DECR_WRAP: { "value": 34056, "writable": false, "enumerable": true, "configurable": false },
  VENDOR: { "value": 7936, "writable": false, "enumerable": true, "configurable": false },
  RENDERER: { "value": 7937, "writable": false, "enumerable": true, "configurable": false },
  VERSION: { "value": 7938, "writable": false, "enumerable": true, "configurable": false },
  NEAREST: { "value": 9728, "writable": false, "enumerable": true, "configurable": false },
  LINEAR: { "value": 9729, "writable": false, "enumerable": true, "configurable": false },
  NEAREST_MIPMAP_NEAREST: { "value": 9984, "writable": false, "enumerable": true, "configurable": false },
  LINEAR_MIPMAP_NEAREST: { "value": 9985, "writable": false, "enumerable": true, "configurable": false },
  NEAREST_MIPMAP_LINEAR: { "value": 9986, "writable": false, "enumerable": true, "configurable": false },
  LINEAR_MIPMAP_LINEAR: { "value": 9987, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_MAG_FILTER: { "value": 10240, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_MIN_FILTER: { "value": 10241, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_WRAP_S: { "value": 10242, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_WRAP_T: { "value": 10243, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE: { "value": 5890, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_CUBE_MAP: { "value": 34067, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_BINDING_CUBE_MAP: { "value": 34068, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_CUBE_MAP_POSITIVE_X: { "value": 34069, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_CUBE_MAP_NEGATIVE_X: { "value": 34070, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_CUBE_MAP_POSITIVE_Y: { "value": 34071, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_CUBE_MAP_NEGATIVE_Y: { "value": 34072, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_CUBE_MAP_POSITIVE_Z: { "value": 34073, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE_CUBE_MAP_NEGATIVE_Z: { "value": 34074, "writable": false, "enumerable": true, "configurable": false },
  MAX_CUBE_MAP_TEXTURE_SIZE: { "value": 34076, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE0: { "value": 33984, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE1: { "value": 33985, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE2: { "value": 33986, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE3: { "value": 33987, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE4: { "value": 33988, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE5: { "value": 33989, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE6: { "value": 33990, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE7: { "value": 33991, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE8: { "value": 33992, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE9: { "value": 33993, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE10: { "value": 33994, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE11: { "value": 33995, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE12: { "value": 33996, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE13: { "value": 33997, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE14: { "value": 33998, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE15: { "value": 33999, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE16: { "value": 34000, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE17: { "value": 34001, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE18: { "value": 34002, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE19: { "value": 34003, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE20: { "value": 34004, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE21: { "value": 34005, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE22: { "value": 34006, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE23: { "value": 34007, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE24: { "value": 34008, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE25: { "value": 34009, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE26: { "value": 34010, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE27: { "value": 34011, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE28: { "value": 34012, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE29: { "value": 34013, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE30: { "value": 34014, "writable": false, "enumerable": true, "configurable": false },
  TEXTURE31: { "value": 34015, "writable": false, "enumerable": true, "configurable": false },
  ACTIVE_TEXTURE: { "value": 34016, "writable": false, "enumerable": true, "configurable": false },
  REPEAT: { "value": 10497, "writable": false, "enumerable": true, "configurable": false },
  CLAMP_TO_EDGE: { "value": 33071, "writable": false, "enumerable": true, "configurable": false },
  MIRRORED_REPEAT: { "value": 33648, "writable": false, "enumerable": true, "configurable": false },
  FLOAT_VEC2: { "value": 35664, "writable": false, "enumerable": true, "configurable": false },
  FLOAT_VEC3: { "value": 35665, "writable": false, "enumerable": true, "configurable": false },
  FLOAT_VEC4: { "value": 35666, "writable": false, "enumerable": true, "configurable": false },
  INT_VEC2: { "value": 35667, "writable": false, "enumerable": true, "configurable": false },
  INT_VEC3: { "value": 35668, "writable": false, "enumerable": true, "configurable": false },
  INT_VEC4: { "value": 35669, "writable": false, "enumerable": true, "configurable": false },
  BOOL: { "value": 35670, "writable": false, "enumerable": true, "configurable": false },
  BOOL_VEC2: { "value": 35671, "writable": false, "enumerable": true, "configurable": false },
  BOOL_VEC3: { "value": 35672, "writable": false, "enumerable": true, "configurable": false },
  BOOL_VEC4: { "value": 35673, "writable": false, "enumerable": true, "configurable": false },
  FLOAT_MAT2: { "value": 35674, "writable": false, "enumerable": true, "configurable": false },
  FLOAT_MAT3: { "value": 35675, "writable": false, "enumerable": true, "configurable": false },
  FLOAT_MAT4: { "value": 35676, "writable": false, "enumerable": true, "configurable": false },
  SAMPLER_2D: { "value": 35678, "writable": false, "enumerable": true, "configurable": false },
  SAMPLER_CUBE: { "value": 35680, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_ATTRIB_ARRAY_ENABLED: { "value": 34338, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_ATTRIB_ARRAY_SIZE: { "value": 34339, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_ATTRIB_ARRAY_STRIDE: { "value": 34340, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_ATTRIB_ARRAY_TYPE: { "value": 34341, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_ATTRIB_ARRAY_NORMALIZED: { "value": 34922, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_ATTRIB_ARRAY_POINTER: { "value": 34373, "writable": false, "enumerable": true, "configurable": false },
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: { "value": 34975, "writable": false, "enumerable": true, "configurable": false },
  IMPLEMENTATION_COLOR_READ_TYPE: { "value": 35738, "writable": false, "enumerable": true, "configurable": false },
  IMPLEMENTATION_COLOR_READ_FORMAT: { "value": 35739, "writable": false, "enumerable": true, "configurable": false },
  COMPILE_STATUS: { "value": 35713, "writable": false, "enumerable": true, "configurable": false },
  LOW_FLOAT: { "value": 36336, "writable": false, "enumerable": true, "configurable": false },
  MEDIUM_FLOAT: { "value": 36337, "writable": false, "enumerable": true, "configurable": false },
  HIGH_FLOAT: { "value": 36338, "writable": false, "enumerable": true, "configurable": false },
  LOW_INT: { "value": 36339, "writable": false, "enumerable": true, "configurable": false },
  MEDIUM_INT: { "value": 36340, "writable": false, "enumerable": true, "configurable": false },
  HIGH_INT: { "value": 36341, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER: { "value": 36160, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER: { "value": 36161, "writable": false, "enumerable": true, "configurable": false },
  RGBA4: { "value": 32854, "writable": false, "enumerable": true, "configurable": false },
  RGB5_A1: { "value": 32855, "writable": false, "enumerable": true, "configurable": false },
  RGB565: { "value": 36194, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_COMPONENT16: { "value": 33189, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_INDEX8: { "value": 36168, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_STENCIL: { "value": 34041, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_WIDTH: { "value": 36162, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_HEIGHT: { "value": 36163, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_INTERNAL_FORMAT: { "value": 36164, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_RED_SIZE: { "value": 36176, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_GREEN_SIZE: { "value": 36177, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_BLUE_SIZE: { "value": 36178, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_ALPHA_SIZE: { "value": 36179, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_DEPTH_SIZE: { "value": 36180, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_STENCIL_SIZE: { "value": 36181, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: { "value": 36048, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: { "value": 36049, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: { "value": 36050, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: { "value": 36051, "writable": false, "enumerable": true, "configurable": false },
  COLOR_ATTACHMENT0: { "value": 36064, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_ATTACHMENT: { "value": 36096, "writable": false, "enumerable": true, "configurable": false },
  STENCIL_ATTACHMENT: { "value": 36128, "writable": false, "enumerable": true, "configurable": false },
  DEPTH_STENCIL_ATTACHMENT: { "value": 33306, "writable": false, "enumerable": true, "configurable": false },
  NONE: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_COMPLETE: { "value": 36053, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: { "value": 36054, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: { "value": 36055, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: { "value": 36057, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_UNSUPPORTED: { "value": 36061, "writable": false, "enumerable": true, "configurable": false },
  FRAMEBUFFER_BINDING: { "value": 36006, "writable": false, "enumerable": true, "configurable": false },
  RENDERBUFFER_BINDING: { "value": 36007, "writable": false, "enumerable": true, "configurable": false },
  MAX_RENDERBUFFER_SIZE: { "value": 34024, "writable": false, "enumerable": true, "configurable": false },
  INVALID_FRAMEBUFFER_OPERATION: { "value": 1286, "writable": false, "enumerable": true, "configurable": false },
  UNPACK_FLIP_Y_WEBGL: { "value": 37440, "writable": false, "enumerable": true, "configurable": false },
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: { "value": 37441, "writable": false, "enumerable": true, "configurable": false },
  CONTEXT_LOST_WEBGL: { "value": 37442, "writable": false, "enumerable": true, "configurable": false },
  UNPACK_COLORSPACE_CONVERSION_WEBGL: { "value": 37443, "writable": false, "enumerable": true, "configurable": false },
  BROWSER_DEFAULT_WEBGL: { "value": 37444, "writable": false, "enumerable": true, "configurable": false },
  RGB8: { "value": 32849, "writable": false, "enumerable": true, "configurable": false },
  RGBA8: { "value": 32856, "writable": false, "enumerable": true, "configurable": false },
  [Symbol.toStringTag]: { value: "WebGLRenderingContext", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  [Symbol.toStringTag]: { value: "CanvasRenderingContext2D", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceEntry.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceEntry", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceElementTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceEventTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceLongTaskTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceMark.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceMark", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceMeasure", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  TYPE_RELOAD: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  TYPE_BACK_FORWARD: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  TYPE_RESERVED: { "value": 255, "writable": false, "enumerable": true, "configurable": false },
  [Symbol.toStringTag]: { value: "PerformanceNavigation", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceResourceTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceNavigationTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceObserver.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceObserver", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceObserverEntryList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: { value: "PerformancePaintTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  [Symbol.toStringTag]: { value: "PerformanceServerTiming", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLMediaElement.prototype, {
  NETWORK_EMPTY: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  NETWORK_IDLE: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  NETWORK_LOADING: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  NETWORK_NO_SOURCE: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
  HAVE_NOTHING: { "value": 0, "writable": false, "enumerable": true, "configurable": false },
  HAVE_METADATA: { "value": 1, "writable": false, "enumerable": true, "configurable": false },
  HAVE_CURRENT_DATA: { "value": 2, "writable": false, "enumerable": true, "configurable": false },
  HAVE_FUTURE_DATA: { "value": 3, "writable": false, "enumerable": true, "configurable": false },
  HAVE_ENOUGH_DATA: { "value": 4, "writable": false, "enumerable": true, "configurable": false },
  [Symbol.toStringTag]: { value: "HTMLMediaElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLUnknownElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(DOMTokenList.prototype, {
  [Symbol.toStringTag]: { value: "DOMTokenList", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: { value: "Touch", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: { value: "TouchEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(PointerEvent.prototype, {
  [Symbol.toStringTag]: { value: "PointerEvent", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLDivElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLMetaElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLMetaElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLLIElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLLIElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLOptionElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLOptionElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLSelectElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLSelectElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLSpanElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLSpanElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLLinkElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLLinkElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLStyleElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLStyleElement", writable: false, enumerable: false, configurable: true },
})
Object.defineProperties(HTMLButtonElement.prototype, {
  [Symbol.toStringTag]: { value: "HTMLButtonElement", writable: false, enumerable: false, configurable: true },
})




if (typeof __dirname != 'undefined') { __dirname = undefined }
if (typeof __filename != 'undefined') { __filename = undefined }
if (typeof require != 'undefined') { require = undefined }
if (typeof exports != 'undefined') { exports = undefined }
if (typeof module != 'undefined') { module = undefined }
if (typeof Buffer != 'undefined') { Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a, b) { if (b == 'global') { return } return a[b] || __globalThis__[b] },
  set(a, b, c) {
    if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
    if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
    if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
    __globalThis__[b] = a[b] = c
    return true
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty() {
  if (this == window) { return v_hasOwnProperty.apply(__globalThis__, arguments) }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, { [Symbol.toStringTag]: { value: 'Window' } })
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.indexedDB = v_new(IDBFactory)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)

var win = {
  window: window,
  frames: window,
  parent: window,
  self: window,
  top: window,
}
function v_repair_this() {
  win = {
    window: __globalThis__,
    frames: __globalThis__,
    parent: __globalThis__,
    self: __globalThis__,
    top: __globalThis__,
  }
}
Object.defineProperties(window, {
  window: { get: function () { return win.window }, set: function (e) { return win.window = e } },
  frames: { get: function () { return win.frames }, set: function (e) { return win.frames = e } },
  parent: { get: function () { return win.parent }, set: function (e) { return win.parent = e } },
  self: { get: function () { return win.self }, set: function (e) { return win.self = e } },
  top: { get: function () { return win.top }, set: function (e) { return win.top = e } },
})

function _createElement(name) {
  var htmlmap = { "HTMLElement": ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"], "HTMLInputElement": ["input"], "HTMLIFrameElement": ["iframe"], "HTMLAnchorElement": ["a"], "HTMLImageElement": ["img"], "HTMLScriptElement": ["script"], "HTMLHeadElement": ["head"], "HTMLBodyElement": ["body"], "HTMLCanvasElement": ["canvas"], "HTMLMediaElement": [], "HTMLUnknownElement": [] }
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1) {
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret) { ret = v_new(HTMLUnknownElement) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie) {
  var cache = (cookie || "").trim();
  if (!cache) {
    cache = ''
  } else if (cache.charAt(cache.length - 1) != ';') {
    cache += '; '
  } else {
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function () {
      var r = cache.slice(0, cache.length - 2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function (c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie.slice(1).join('')) {
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key + '=' + val
      var flag = false;
      var temp = cache.split("; ").map(function (a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl) {
  var r = Object.defineProperty(obj, 'href', {
    get: function () {
      if (!(this.protocol) && !(this.hostname)) {
        r = ''
      } else {
        r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name || obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function (href) {
      href = href.trim()
      v_console_log(`  [*] ${name || obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")) {/*ok*/ }
      else if (href.startsWith("//")) { href = (this.protocol ? this.protocol : 'http:') + href }
      else { href = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + '/' + ((href[0] == '/') ? href.slice(1) : href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.hostname = a[2] ? a[2] : "";
      this.port = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search = a[5] ? a[5] : "";
      this.hash = a[6] ? a[6] : "";
      this.host = this.hostname + (this.port ? ":" + this.port : "");
      this.origin = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()) { var temp = v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage() {
  Storage.prototype.clear = v_saf(function () { v_console_log(`  [*] Storage -> clear[func]:`); var self = this; Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem = v_saf(function (key) { v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key) ? String(this[key]) : null); return r }, 'getItem')
  Storage.prototype.setItem = v_saf(function (key, val) { v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined) ? null : String(val) }, 'setItem')
  Storage.prototype.key = v_saf(function (key) { v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key || 0]; }, 'key')
  Storage.prototype.removeItem = v_saf(function (key) { v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key]; }, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {
    get: function () {
      if (this === Storage.prototype) { throw TypeError('Illegal invocation') } return Object.keys(this).length
    }
  })
  window.sessionStorage = new Proxy(sessionStorage, { set: function (a, b, c) { v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b] = String(c) }, get: function (a, b) { v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b] }, })
  window.localStorage = new Proxy(localStorage, { set: function (a, b, c) { v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b] = String(c) }, get: function (a, b) { v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b] }, })
}
function v_init_document() {
  Document.prototype.getElementById = v_saf(function getElementById(name) { var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name) { var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name) { var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name) { var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name) { var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name) { var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name) { var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: { get() { v_console_log("  [*] Document -> head[get]", v_head); return v_head } },
    body: { get() { v_console_log("  [*] Document -> body[get]", v_body); return v_body } },
  })
}
function v_init_canvas() {
  HTMLCanvasElement.prototype.getContext = function () { if (arguments[0] == '2d') { var r = v_new(CanvasRenderingContext2D); return r }; if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') { var r = v_new(WebGLRenderingContext); r._canvas = this; return r }; return null }
  HTMLCanvasElement.prototype.toDataURL = function () { return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC" }
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target() {
  v_events = {}
  function add_event(_this, x) {
    if (!v_events[x[0]]) {
      v_events[x[0]] = []
    }
    // v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
    if (type == 'click') {
      var m = new v_saf(function PointerEvent() { })
      m.pointerType = "mouse"
    } else {
      var m = new v_saf(function MouseEvent() { })
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX; m.movementX = screenX
    m.screenY = screenY; m.movementY = screenY
    m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
    m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y) {
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y) {
    for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp) {
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch() { }))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent() { }))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities() { this.firesTouchEvents = true })
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random() * 20) - v_start_stamp)
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2) {
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2) {
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3) {
      return []
    }
    function factorial(x) {
      for (var y = 1; x > 1; x--) {
        y *= x
      }
      return y;
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + (x2 - x1) / 12 * (4 - lp * 4)) ^ 0
    var yy1 = (y1 + (y2 - y1) / 12 * (8 + lp * 4)) ^ 0
    var xx2 = (x1 + (x2 - x1) / 12 * (8 + rp * 4)) ^ 0
    var yy2 = (y1 + (y2 - y1) / 12 * (4 - rp * 4)) ^ 0
    var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
    var N = points.length
    var n = N - 1
    var traces = []
    var step = slen
    for (var T = 0; T < step + 1; T++) {
      var t = T * (1 / step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = factorial(n) * t ** i * (1 - t) ** (n - i) / (factorial(i) * factorial(n - i))
        x += points[i][0] * B
        y += points[i][1] * B
      }
      traces.push([x ^ 0, y ^ 0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2) {
    if (x2 == undefined && y2 == undefined) {
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    // console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
  }
  function mouse_move(x1, y1, x2, y2) {
    if (x2 == undefined && y2 == undefined) {
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    // console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function () { v_console_log('  [*] EventTarget -> addEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null }
  EventTarget.prototype.dispatchEvent = function () { v_console_log('  [*] EventTarget -> dispatchEvent[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null }
  EventTarget.prototype.removeEventListener = function () { v_console_log('  [*] EventTarget -> removeEventListener[func]', this === window ? '[Window]' : this === document ? '[Document]' : this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null }
}
function v_init_Element_prototype() {
  Element.prototype.getAnimations = Element.prototype.getAnimations || v_saf(function getAnimations() { v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments)); })
  Element.prototype.getAttribute = Element.prototype.getAttribute || v_saf(function getAttribute() { v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments)); })
  Element.prototype.getAttributeNS = Element.prototype.getAttributeNS || v_saf(function getAttributeNS() { v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments)); })
  Element.prototype.getAttributeNames = Element.prototype.getAttributeNames || v_saf(function getAttributeNames() { v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments)); })
  Element.prototype.getAttributeNode = Element.prototype.getAttributeNode || v_saf(function getAttributeNode() { v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments)); })
  Element.prototype.getAttributeNodeNS = Element.prototype.getAttributeNodeNS || v_saf(function getAttributeNodeNS() { v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments)); })
  Element.prototype.getBoundingClientRect = Element.prototype.getBoundingClientRect || v_saf(function getBoundingClientRect() { v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments)); })
  Element.prototype.getClientRects = Element.prototype.getClientRects || v_saf(function getClientRects() { v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments)); })
  Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName() { v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments)); })
  Element.prototype.getElementsByTagName = Element.prototype.getElementsByTagName || v_saf(function getElementsByTagName() { v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments)); })
  Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS() { v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments)); })
  Element.prototype.getInnerHTML = Element.prototype.getInnerHTML || v_saf(function getInnerHTML() { v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments)); })
  Element.prototype.hasAttribute = Element.prototype.hasAttribute || v_saf(function hasAttribute() { v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments)); })
  Element.prototype.hasAttributeNS = Element.prototype.hasAttributeNS || v_saf(function hasAttributeNS() { v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments)); })
  Element.prototype.hasAttributes = Element.prototype.hasAttributes || v_saf(function hasAttributes() { v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments)); })
  Element.prototype.hasPointerCapture = Element.prototype.hasPointerCapture || v_saf(function hasPointerCapture() { v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments)); })
  Element.prototype.webkitMatchesSelector = Element.prototype.webkitMatchesSelector || v_saf(function webkitMatchesSelector() { v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments)); })
}
function v_init_DOMTokenList_prototype() {
  DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add() { v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains() { v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries() { v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach() { v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item() { v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys() { v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length() { v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove() { v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace() { v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports() { v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments)); })
  DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle() { v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments)); })
}
function v_init_CSSStyleDeclaration_prototype() {
  CSSStyleDeclaration.prototype["zoom"] = ''
  CSSStyleDeclaration.prototype["resize"] = ''
  CSSStyleDeclaration.prototype["text-rendering"] = ''
  CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype() {
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents() { v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments)); })
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents() { v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments)); })
}
function v_init_PerformanceTiming_prototype() {
  try {
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd() { v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments)); }) },
      connectStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart() { v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments)); }) },
      domComplete: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete() { v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments)); }) },
      domContentLoadedEventEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd() { v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments)); }) },
      domContentLoadedEventStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart() { v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments)); }) },
      domInteractive: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive() { v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments)); }) },
      domLoading: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading() { v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments)); }) },
      domainLookupEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd() { v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments)); }) },
      domainLookupStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart() { v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments)); }) },
      fetchStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart() { v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments)); }) },
      loadEventEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd() { v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments)); }) },
      loadEventStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart() { v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments)); }) },
      navigationStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart() { v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments)); }) },
      redirectEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd() { v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments)); }) },
      redirectStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart() { v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments)); }) },
      requestStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart() { v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments)); }) },
      responseEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd() { v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments)); }) },
      responseStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart() { v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments)); }) },
      secureConnectionStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart() { v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments)); }) },
      unloadEventEnd: { set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd() { v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments)); }) },
      unloadEventStart: { set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart() { v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments)); }) },
    })
  } catch (e) { }
}
function mk_atob_btoa(r) { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1); return { atob: function (r) { var a, e, o, h, c, i, n; for (i = r.length, c = 0, n = ""; c < i;) { do { a = t[255 & r.charCodeAt(c++)] } while (c < i && -1 == a); if (-1 == a) break; do { e = t[255 & r.charCodeAt(c++)] } while (c < i && -1 == e); if (-1 == e) break; n += String.fromCharCode(a << 2 | (48 & e) >> 4); do { if (61 == (o = 255 & r.charCodeAt(c++))) return n; o = t[o] } while (c < i && -1 == o); if (-1 == o) break; n += String.fromCharCode((15 & e) << 4 | (60 & o) >> 2); do { if (61 == (h = 255 & r.charCodeAt(c++))) return n; h = t[h] } while (c < i && -1 == h); if (-1 == h) break; n += String.fromCharCode((3 & o) << 6 | h) } return n }, btoa: function (r) { var t, e, o, h, c, i; for (o = r.length, e = 0, t = ""; e < o;) { if (h = 255 & r.charCodeAt(e++), e == o) { t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4), t += "=="; break } if (c = r.charCodeAt(e++), e == o) { t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2), t += "="; break } i = r.charCodeAt(e++), t += a.charAt(h >> 2), t += a.charAt((3 & h) << 4 | (240 & c) >> 4), t += a.charAt((15 & c) << 2 | (192 & i) >> 6), t += a.charAt(63 & i) } return t } } }
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("webp=true; api_uid=CiYE82gbffMxjwBV/EGgAg==; _nano_fp=XpmYn5EqX5gJX0TqnC_a~rPf3MFH1AULKBcwUxd_; mms_b84d1838=3616,150,3523,3614,321,3613,3604,3594,3599,3602,3603,3608,3605,3621,3622,3588,3254,3532,3642,3474,3475,3477,3479,3482,1202,1203,1204,1205,3417; x-visit-time=1746873281190")
v_hook_href(window.location, 'location', "https://mms.pinduoduo.com/mms-chat/search?msfrom=mms_sidenav")
Location.prototype.toString = v_saf(function toString() { return "https://mms.pinduoduo.com/mms-chat/search?msfrom=mms_sidenav" })
window.alert = v_saf(function alert() { })
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 278
window.innerHeight = 703
window.outerHeight = 824
window.outerWidth = 1536
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func) {
  if (name == "__NEXT_DATA__" && func == "getElementById") { return v_new(HTMLScriptElement) }
  if (name == "__next" && func == "getElementById") { return v_new(HTMLDivElement) }
  if (name == "script[data-next-page=\"/_app\"]" && func == "querySelector") { return v_new(HTMLScriptElement) }
  if (name == "script[data-next-page=\"/content\"]" && func == "querySelector") { return v_new(HTMLScriptElement) }
  if (name == "head" && func == "querySelector") { return v_new(HTMLHeadElement) }
  if (name == "meta[name=next-head-count]" && func == "querySelector") { return v_new(HTMLMetaElement) }
  if (name == "#mms-header__mask" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "__msfe__side-nav_item_501" && func == "getElementById") { return v_new(HTMLLIElement) }
  if (name == "__msfe__side-nav_scroll_wrap" && func == "getElementById") { return v_new(HTMLDivElement) }
  if (name == ".adsbox" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#umd_kits_message_box" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#umd_kits_letter" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#umd_kits_PDD_chick" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#umd_kits_service" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#umd_kits_officialchat" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#umd_kits_seller_extension" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#umd_kits_ten_billions_reduce" && func == "querySelector") { return v_new(HTMLDivElement) }
  if (name == "#pdd-app-skeleton-main-content" && func == "querySelector") { return v_new(HTMLElement) }
  return null
}
function v_geteles(name, func) {
  if (name == "body div" && func == "querySelectorAll") { return [v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement)] }
  if (name == "a" && func == "getElementsByTagName") { return [v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement), v_new(HTMLAnchorElement)] }
  if (name == "head" && func == "getElementsByTagName") { return [v_new(HTMLHeadElement)] }
  if (name == "body" && func == "getElementsByTagName") { return [v_new(HTMLBodyElement)] }
  if (name == "[selected]" && func == "querySelectorAll") { return [v_new(HTMLOptionElement)] }
  if (name == "[id~=sizzle1746876860580-]" && func == "querySelectorAll") { return [v_new(HTMLSelectElement)] }
  if (name == ":checked" && func == "querySelectorAll") { return [v_new(HTMLOptionElement)] }
  if (name == "a#sizzle1746876860580+*" && func == "querySelectorAll") { return [v_new(HTMLSelectElement)] }
  if (name == ":enabled" && func == "querySelectorAll") { return [v_new(HTMLOptionElement), v_new(HTMLInputElement)] }
  if (name == ":disabled" && func == "querySelectorAll") { return [v_new(HTMLSelectElement), v_new(HTMLInputElement)] }
  if (name == "Entry_wrapper__3A1MD" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "NewMsgBox_new-msgbox-wrapper__1Xs2u" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "red-dot" && func == "getElementsByClassName") { return [v_new(HTMLSpanElement)] }
  if (name == "div" && func == "getElementsByTagName") { return [v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement)] }
  if (name == "link" && func == "getElementsByTagName") { return [v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement), v_new(HTMLLinkElement)] }
  if (name == "style" && func == "getElementsByTagName") { return [v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement), v_new(HTMLStyleElement)] }
  if (name == "Letter_squareWrapper__1Y3xE" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "css_umd_kits_PDD_chick__3L826 css_umd_kits_PDD_chick_in_gray__3dlgr css_umd_kits_PDD_chick_in_abTest_ab1__1FpR6" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "Service_squareWrapper__3ub6U" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "Letter_leftPart__M7CFH" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "mms-header__list-event-center" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "img" && func == "getElementsByTagName") { return [v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement), v_new(HTMLImageElement)] }
  if (name == "script" && func == "getElementsByTagName") { return [v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement), v_new(HTMLScriptElement)] }
  if (name == "Feedback_feedback-modal__2jRX_" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "MsgBoxIcon_leftPart__3jPL3" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "search-content" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "BUTTON.BTN_outerWrapper_1198e34.BTN_primary_1198e34.BTN_medium_1198e34.BTN_outerWrapperBtn_1198e34" && func == "querySelectorAll") { return [v_new(HTMLButtonElement)] }
  if (name == "cs-message-table-body" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "user-item is-active" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "user-item" && func == "getElementsByClassName") { return [v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement)] }
  if (name == "table-section-right-footer" && func == "getElementsByClassName") { return [v_new(HTMLDivElement)] }
  if (name == "message-item-container " && func == "getElementsByClassName") { return [v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement), v_new(HTMLDivElement)] }
  if (name == "SPAN" && func == "querySelectorAll") { return [v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement), v_new(HTMLSpanElement)] }
  return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function () {
  function ftime() {
    return new v_Date() - v_base_time + v_to_time
  }
  Date = function (_Date) {
    var bind = Function.bind;
    var unbind = bind.bind(bind);
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
    }
    var names = Object.getOwnPropertyNames(_Date);
    for (var i = 0; i < names.length; i++) {
      if (names[i] in Date)
        continue;
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
      Object.defineProperty(Date, names[i], desc);
    }
    function Date() {
      var date = instantiate(_Date, [ftime()]);
      return date;
    }
    Date.prototype = _Date.prototype
    return v_saf(Date);
  }(Date);
  Date.now = v_saf(function now() { return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

v_repair_this() // 修复 window 指向global
v_new_toggle = undefined
// v_console_log = function(){} // 关闭日志输出;



!function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }
  r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
      return t[e];
    }.bind(null, o));
    return n;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "";
  export_function = r;
}({
  0: function (t, e, r) {
    "use strict";

    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
      o = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    function i(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    e.assign = function (t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
        var r = e.shift();
        if (r) {
          if ("object" !== (void 0 === r ? "undefined" : n(r))) throw new TypeError(r + "must be non-object");
          for (var o in r) i(r, o) && (t[o] = r[o]);
        }
      }
      return t;
    }, e.shrinkBuf = function (t, e) {
      return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
    };
    var a = {
      arraySet: function (t, e, r, n, o) {
        if (e.subarray && t.subarray) t.set(e.subarray(r, r + n), o); else for (var i = 0; i < n; i++) t[o + i] = e[r + i];
      },
      flattenChunks: function (t) {
        var e, r, n, o, i, a;
        for (n = 0, e = 0, r = t.length; e < r; e++) n += t[e].length;
        for (a = new Uint8Array(n), o = 0, e = 0, r = t.length; e < r; e++) i = t[e], a.set(i, o), o += i.length;
        return a;
      }
    },
      u = {
        arraySet: function (t, e, r, n, o) {
          for (var i = 0; i < n; i++) t[o + i] = e[r + i];
        },
        flattenChunks: function (t) {
          return [].concat.apply([], t);
        }
      };
    e.setTyped = function (t) {
      t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, a)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, u));
    }, e.setTyped(o);
  },
  1: function (t, e, r) {
    "use strict";

    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () { }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function () {
          return t.l;
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function () {
          return t.i;
        }
      }), t.webpackPolyfill = 1), t;
    };
  },
  2: function (t, e, r) {
    "use strict";

    t.exports = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
  },
  3: function (t, e, r) {
    "use strict";

    (function (t) {
      var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      };
      !function (t, e) {
        var r = s();
        function n(t, e) {
          return u(e - 359, t);
        }
        function o(t, e) {
          return u(e - 262, t);
        }
        for (; ;) try {
          if (parseInt(o("]eca", 933)) / 1 + parseInt(n("r*%r", 729)) / 2 * (-parseInt(o("DS#V", 677)) / 3) + -parseInt(o("ct(z", 846)) / 4 + -parseInt(o("y1Sw", 655)) / 5 + -parseInt(n("Pwmp", 738)) / 6 + -parseInt(n("DS#V", 1026)) / 7 + parseInt(o("fvaX", 656)) / 8 === 855468) break;
          r.push(r.shift());
        } catch (t) {
          r.push(r.shift());
        }
      }();
      var n = r(12),
        o = r(13)[h("I7rJ", -224)],
        i = (f(40, "]eca") + f(265, ")8YT") + h("ZhDP", -335) + h("%iDa", -229) + h("i*rr", -281) + f(147, "mkMw") + f(81, "ct(z"))[h("V^P8", -360)](""),
        a = {};
      function u(t, e) {
        var r = s();
        return (u = function (e, n) {
          var o = r[e -= 366];
          void 0 === u.BICwJs && (u.NJGaic = function (t, e) {
            var r = [],
              n = 0,
              o = void 0,
              i = "";
            t = function (t) {
              for (var e, r, n = "", o = "", i = 0, a = 0; r = t.charAt(a++); ~r && (e = i % 4 ? 64 * e + r : r, i++ % 4) ? n += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
              for (var u = 0, c = n.length; u < c; u++) o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
              return decodeURIComponent(o);
            }(t);
            var a = void 0;
            for (a = 0; a < 256; a++) r[a] = a;
            for (a = 0; a < 256; a++) n = (n + r[a] + e.charCodeAt(a % e.length)) % 256, o = r[a], r[a] = r[n], r[n] = o;
            a = 0, n = 0;
            for (var u = 0; u < t.length; u++) n = (n + r[a = (a + 1) % 256]) % 256, o = r[a], r[a] = r[n], r[n] = o, i += String.fromCharCode(t.charCodeAt(u) ^ r[(r[a] + r[n]) % 256]);
            return i;
          }, t = arguments, u.BICwJs = !0);
          var i = e + r[0],
            a = t[i];
          return a ? o = a : (void 0 === u.MSpTXo && (u.MSpTXo = !0), o = u.NJGaic(o, n), t[i] = o), o;
        })(t, e);
      }
      function c(t) {
        return t[h("%iDa", -122)](/[+\/=]/g, function (t) {
          return a[t];
        });
      }
      function s() {
        var t = ["gCkfWR5VDq", "sCksW6vQW7K", "gmkZumkzWQ8", "vmknrwvLWRC", "F0FdOG", "vX0dDZldNCkFWReDW77cV8oeW7S", "WPOsn8o/na", "W5BcHGCFhq", "qLyK", "BCkjW4BdV8oWW4dcMa", "W7G4W4GcnW", "W7NcIraddq", "wCkkwa", "hSkKWQhcISoC", "y0Gzu0dcMSkoWPfRwmkjlfa", "uh/cGmo9xG", "WR/dSN/cNSof", "DCkgFMbF", "W7fshSo8DG", "v1NcRColWPW", "D8krW6Dw", "DNmVWRO/xG", "W5ddJvL5W7S", "WR3dNCofoSkHWPK", "WRyWEWpdKa", "gchdPfdcKq", "kmk9FCkEWOW", "W5zHW5pdKSoeWQO", "W4FcSmkOW7hcMctcVmorWQCuWQzKW6S", "W6tcGJ7dSCoZWO1jx3/dQSoodebi", "CuNdTmkBksq", "W6/cKmolW5aP", "trqbChO", "W43cO8o6W5fvvSo3WPFdNCk5", "j8kHWQJcOCoj", "whnoWO/dUa", "WO7dPmo7lq", "F1CNWOOX", "tCoxW7fMnSkJ", "WOJdKeu", "WPNdVSo7", "W75EW4KqbW", "tSksEMDe", "WRZdTmoDgmkW", "wSklW7bGW7O", "BCkZW79oW4y", "BuhcKmod", "W7T/W7Staa", "nCoehCkpW5a", "W53cO8kKW6JdIG", "rmkYWRX+vmk6WOC", "xCkhW5zmW7G", "irb7fWldGSoqWOe", "W5yrW78bWOW", "W57cVSoOW4S", "zSkUutKW", "WRSPCSoMdmoTeSoXWPS1", "rxqN", "oHtdRwpcNW", "eej8ou4", "W4xdNKrDW6xdLmobW7/cTSo1", "cH1o", "gCkYWOJcGmoIWO4", "lWxcOSouW6O", "WRhdO1BcHCky", "W5nIW4/dN8kv", "ymkBDsqg", "aSkRWP9Dtq", "qCoCvCotwvq", "rSkMW5D6W7v1zSo0W67cMW", "WPhdPCoIm8kX", "W6efW6GvWR5NW77dPCox", "WOinkSob", "WPhdM8o8WQhdPa", "W5roaSoyDq", "xwhcTSo3WRy", "W7JcGsaPda", "W4JcKSoGW6K", "v8ktEG", "mCkyWPb8tW", "WPBdT8kjWQ3dTq", "EtaKFMzg", "WPBdKSk/WPNdJq", "W4nKW5q5hW", "cSoKjSk5jmopsmoXtmkz", "WPddRCo3WQhdJMq", "sSk6tNnC", "W5ldSx1bW4JdSq", "W6BdRKrIW6S", "E8k7W67dNCoi", "WRDjWP8", "WOhdP8oPWQ7dJNpdQq", "xSomwCohwu7cMCk+WPG", "W4BcSX86hW", "kdFcPSo8W4NdIq", "dSoClmk4W64", "W5nFjmoUtq", "W5ldTNjqW6JdSq", "F19rAa", "WQ3dSupcHCofpqRcGG", "cCoKgSkKW6NdI8kbrWa", "FWFdO8ox", "uuBcRCoUBa", "tCkNW61G", "WOeWk8oepa", "m8othCk7W4O", "cH3dPa", "xeb6WQ3dVG", "W4CoW7ybWPe", "WPxdK8obWOpdVa", "WQXsWQDF", "kSkqWQJcQmod", "ySojwCoErq", "DmoZW7rXnG", "W7tcNu1JlW", "W4/cH8knW4VdJa", "WP1fWRBcNGa", "u8kPucGX", "W7uaW7Gnb1ZdKCoBtYW", "cmk2WO/cIa", "WOe7o8o1fq", "lWFdG2VcSq", "qSkrWR7dKItdI8k0W4BcNCodq8kgW58", "D3ZcJmo2WP4", "WPWxxG", "WQToWRVcTZa", "WO7dP0tcL8kh", "FL3cQmobWOK", "WOtdMSoLlmoH", "W7RcPLPrgq", "WQtdU8oXaCkL", "WQKAFdq", "Av3cMaOJ", "txVcT8oQWPm", "CSoBxq", "xSk3W7DK", "W4j5W7eHic4TWOBdMq", "WOhdKgC", "WPz+WOpcGqy", "W5RdQGiitSoG", "AfRcKmodqCoBW54", "W4JcGSkqW4ddRq", "WPSxiCoCmmoqgmo3WPm", "xmk4DbScWRy", "WPBdRmo6WQ3dI3u", "AfPnWQxdOa", "FLldISk/da", "zCoPW5f0aq", "W4RcLSkTW7hdRW", "FgClWPaU", "y8k+W5zKW4K", "W64IW74Anq", "W7/cMKXSpmoH", "f8oel8kKW54", "W4lcTSkMW6BdISoT", "DedcImoBCG", "W5ddU28", "lWhdL8kFgSkeW7TOleXAW5K", "nSoUWOS", "lmkFs8kpWQ7cVa", "lstcKCoJW5e", "WOVdU8odpmoC", "WRrEWOtcGGK", "W4nTW6Op", "WQ8qEZ3dTSkD", "jYBcGSopW7O", "z1LrWP3dNmoJbW", "ncFcU8oZ", "tmoDW7L4aq", "CSkkW7bBW5zAt8ozW4m", "lX5+dJ4", "WRtdMM/cTSkiW5muca", "WRvyWP7cOdqaW7LbWOKf", "WPbMWP8", "W6WmW7WSWOq", "rfpcSIddGmoYW60htmkEtSo8W7y", "vmodc8kfhW/dHmoLW4Lz", "zr3dUCor", "W71cW4xdM8kL", "W6ddJGK5yW", "b8kMWRpcKSoA", "WPZdTSoacSk1", "t1dcOSogzq", "z33cUCoZtq", "W59JW4hdVmkr", "WPBdTvNcPNu", "ymooW65bcW", "hGZdJhlcKq", "WPddTSotWPBdQa", "dCkKWRxcLmoS", "nYlcPmoYW4K", "W5jJW70XnsG", "eSoKlCkMW7q", "WPJdO2tcMfS", "rw4J", "m8owWQunWOCheCojW4dcQhFcTKu", "msvEkrG", "WQRdSNNcKSos", "CSoBW7C", "as3dTxxcKq", "AmkSB2rj", "FJyRuNe", "WOFdRCokWRBdNxNdOSod", "q8oiW7Xylq", "WQldMexcVCkc", "z8kkW6C", "WOSnlComjCow", "oCoTW6ZcTgi", "fSkJWQC", "W7zFpCoWASoU", "CvvaWPldPq", "oSoeWOlcP8k3WOtdK1eNxhXCWRC", "WO8/DGRdPa", "W6TIFq", "ugBcPCoGqW", "W4RcO8oFW4DS", "W6FcOmo0W6ju", "W4pcNSomW5bv", "W7NdMGK3DW", "WQvCWR9jW6e/WQldSSoJWPXeW4BdHG", "m2LsfL4", "W7hcTNfsaq", "yXFdVSoyymoR", "WOqnjCoSnW", "xCkotgP4WRuiW7TdWRO", "pSovW6FcO0a", "oXpdV2L+W4D6W78", "A2lcTmotza", "D8kwW7TkW59hwmomW4i", "W43cOCkRWRlcJa", "ENHBvrW", "WPFdO8oTWQm", "wmkgwa", "zmkCEXCW", "WRVdRhNcN00", "hvLUow3dLCoTWRzGW7O", "zJKJENC", "WPhdI8okWPVdPG", "lCkVWODVxq", "W51njSo9Cq", "zIe4ChXj", "f8oWca", "WQPDWPZcUG", "vhVcT8oJWRO", "WOtdNIy", "z8o9v8ooya", "W73cLmokW7is", "W6JcKSoFW7TD", "b8otW63cKwdcImoTW5/cJq", "wCowAmoax1xcNSk3", "WQFdH33cRa", "W780yW", "C8okfCoDW6ldPCo6WRWjnvrhW4FdRa", "rCk3uqu/", "WR/dRCkTWOhdUW", "sCkYyMX4", "BcddNSo8qW", "W6FcHv8", "pConW63cL1i", "WQauEty", "WOK8WQDHywOYWR3dVCoie1i", "A8kzW5FdOSobW5VcJ1e", "qxKJWRCUvCoCwX10", "kmkJga", "xdaVDMm", "w0pdRCkbgW", "nYlcMCo1W44", "ubddMW", "W4SZW5yM", "W6dcNSkjW5FdIa", "W7a6W70ZWP8", "jCoZhG", "W6i9W5SiWPq", "WO3dO8othCki", "z8krW7r2W4i", "amkYWQ11Ba", "W7GoW6ixWQXM", "jmohjmkDeq", "WPtdUmozl8kr", "W4xdUG4CtSo6uSo7W4i", "W6JcOCo8W5K7", "gmonlSkGdW", "j8obbSkDeq", "W4FcPCkrW7NdKG", "WPOGxWNdJG", "W7ddJL9LW5pcSmoaW47dHmoi", "l8k9yCkXWOS", "W7K+W5SdWPS", "W53cU8o3W4PI", "gYddQ1lcIa", "W7yLW6qqga", "WQhdS0q", "pKBcTdqjWOnC", "WQpdUwRcQ3q", "WPxdVSoMf8kpWR0nW67dU8kx", "W5BdU3nBW64", "xNfUWRZdSG", "WOpdOmo6", "W7xcRmoWW5C9", "bmotW7ZcIG", "FKpdTmkFpdG", "WPddQetcVSo7", "rCo0W6aqnSoaWR8oBbJdL8o2", "mbXe", "d8kjWPdcRSoL", "WPVdTxBcLCo2", "p8ouWQanWOufv8oPW6tcPhRcIG", "y8kqW4jhW7K", "wSkTW5D4W6a0efG", "WPJdQ8oVaCkl", "swuLWROi", "d8oPimk9W44", "l8kcs8kJWPC", "W53cVSo5W5bIs8o6WPZdUW", "WRHDWOVcTsia", "W48AW5uTWQRcPeq", "mrldTLlcUG", "W5RcPmoiW5DKumo9WPu", "WRVdL2dcO8k/W5q", "cSoKc8k/", "WQngz8oRlmo6WQldTshcPW", "WQhdHmorWPhdMq", "W64HW6qVWO4", "WP/dS8o7", "W55QW4yqfG", "E8kDW5/dS8oN", "WQVdNCkyWOJdPSoCW6LQ", "W70FW6CaWOi", "b8o5kSkPaSos", "WOJdKK7cPL0", "W4RcTSkTW7FdPW", "sSknw25WWRWg", "supcQYuA", "WQ0id8oShq", "veJdMmkrpa", "WO/cVvHFxCo7ECkJW7xdJq", "WPxdS8otWO/dIG", "zmkiW7z6W4m", "tCoTtSkRWQ7dHCoqvvBdMq", "yxrwxqZcNW", "qYtdVmoSvq", "W4hcIGC/aW", "cu1zj3pcHq", "W57cQSoPW5bZCmo9WOy", "F1dcRai4WQnq", "BCkgW6fUW7W", "WOvkiW", "W47cNCocW6qE", "zsa5Cq", "W4xcRJuClG", "y8ksW64jW7vwsSo4W4RcPa", "W5qfW4axWQu", "g8kMWPxcJa"];
        return (s = function () {
          return t;
        })();
      }
      function f(t, e) {
        return u(t - -394, e);
      }
      a.null = "-", a.null = "_", a.null = "";
      var d = ("undefined" == typeof window ? "undefined" : e(window)) !== h("ct(z", -382) && window[f(314, "h$@O")] ? window[h("@wI2", -127)] : parseInt,
        l = {};
      function h(t, e) {
        return u(e - -818, t);
      }
      l[h("AYl(", -426)] = function (t) {
        var e = {
          cEtLv: function (t, e) {
            return t(e);
          },
          mEeIh: function (t, e) {
            return t / e;
          },
          BzsqT: function (t, e) {
            return t * e;
          },
          bFvAp: function (t, e) {
            return t < e;
          },
          XngWi: function (t, e) {
            return t + e;
          },
          ZnSKY: function (t, e) {
            return t + e;
          },
          rReqM: function (t, e) {
            return t >>> e;
          },
          IkoAB: function (t, e) {
            return t & e;
          },
          FnBit: function (t, e) {
            return t | e;
          },
          ujKyI: function (t, e) {
            return t << e;
          },
          nqfRf: function (t, e) {
            return t >>> e;
          },
          MBSzg: function (t, e) {
            return t & e;
          },
          OWIjq: function (t, e) {
            return t | e;
          },
          XAKih: function (t, e) {
            return t >>> e;
          },
          jbuPL: function (t, e) {
            return t & e;
          },
          Gwujo: function (t, e) {
            return t - e;
          },
          iRhkx: function (t, e) {
            return t === e;
          },
          ctJTG: function (t, e) {
            return t + e;
          },
          ZKkdt: function (t, e) {
            return t >>> e;
          },
          kWjOW: function (t, e) {
            return t & e;
          },
          uEnYR: function (t, e) {
            return t === e;
          },
          tMTos: function (t, e) {
            return t + e;
          },
          zaVmN: function (t, e) {
            return t + e;
          },
          YUJSL: function (t, e) {
            return t >>> e;
          },
          fqJMe: function (t, e) {
            return t & e;
          },
          cbbgP: function (t, e) {
            return t | e;
          },
          RFHSv: function (t, e) {
            return t(e);
          }
        },
          r = void 0,
          n = void 0,
          o = void 0;
        function a(t, e) {
          return h(t, e - -145);
        }
        var u = "",
          s = t[l("%iDa", 1345)];
        function l(t, e) {
          return f(e - 1371, t);
        }
        for (var p = 0, v = e[a("V^P8", -591)](d, e[a("uQ6i", -573)](s, 3)), m = e[l("ct(z", 1395)](v, 3); e[l(")8YT", 1385)](p, m);) r = t[p++], n = t[p++], o = t[p++], u += e[a("ZhDP", -588)](e[a(")D5J", -413)](e[a("DS#V", -360)](i[e[a("%iDa", -512)](r, 2)], i[e[a("h$@O", -382)](e[a("e@2P", -264)](e[a("jBjN", -345)](r, 4), e[a("^e(W", -247)](n, 4)), 63)]), i[e[a("V^P8", -522)](e[a(")8YT", -528)](e[l("fvaX", 1546)](n, 2), e[l("KdNo", 1374)](o, 6)), 63)]), i[e[a("]eca", -253)](o, 63)]);
        var W = e[l("1OEa", 1581)](s, m);
        return e[a("oWBQ", -494)](W, 1) ? (r = t[p], u += e[l("jBjN", 1459)](e[a("GdUW", -433)](i[e[a("LphC", -485)](r, 2)], i[e[l("GdUW", 1405)](e[a("XPpS", -437)](r, 4), 63)]), "==")) : e[a("Gj@i", -574)](W, 2) && (r = t[p++], n = t[p], u += e[l("y1Sw", 1530)](e[a("V6!d", -503)](e[a("Pwmp", -428)](i[e[l("fvaX", 1468)](r, 2)], i[e[l("cFzA", 1491)](e[a("ZZYF", -388)](e[l("r*%r", 1401)](r, 4), e[l("Gj@i", 1626)](n, 4)), 63)]), i[e[a("y1Sw", -262)](e[l("DS#V", 1409)](n, 2), 63)]), "=")), e[l("y1Sw", 1663)](c, u);
      }, l[h("fvaX", -282)] = function (t) {
        var e = {};
        function r(t, e) {
          return h(e, t - 1039);
        }
        function n(t, e) {
          return h(t, e - 185);
        }
        e[n("@wI2", -186)] = function (t, e) {
          return t < e;
        }, e[r(739, "V6!d")] = function (t, e) {
          return t >= e;
        }, e[n("b)^e", -25)] = function (t, e) {
          return t <= e;
        }, e[r(700, "yCG[")] = function (t, e) {
          return t <= e;
        }, e[n("MyDU", -221)] = function (t, e) {
          return t | e;
        }, e[n("ZhDP", -117)] = function (t, e) {
          return t & e;
        }, e[r(630, "@LNa")] = function (t, e) {
          return t >> e;
        }, e[r(601, "8IJB")] = function (t, e) {
          return t | e;
        }, e[n("@LNa", 39)] = function (t, e) {
          return t & e;
        }, e[n("Ue0q", 72)] = function (t, e) {
          return t <= e;
        }, e[n("I7rJ", 15)] = function (t, e) {
          return t >= e;
        }, e[n("ZZYF", -233)] = function (t, e) {
          return t <= e;
        }, e[r(597, "V^P8")] = function (t, e) {
          return t & e;
        }, e[n("*#AY", 36)] = function (t, e) {
          return t & e;
        }, e[r(707, "uQ6i")] = function (t, e) {
          return t >> e;
        }, e[n("8IJB", -166)] = function (t, e) {
          return t & e;
        }, e[n("I7rJ", -153)] = function (t, e) {
          return t < e;
        }, e[n("h$@O", -53)] = function (t, e) {
          return t <= e;
        }, e[r(765, "!OJl")] = function (t, e) {
          return t >> e;
        }, e[n("8IJB", -85)] = function (t, e) {
          return t & e;
        };
        for (var o = e, i = [], a = 0, u = 0; o[n("%iDa", -251)](u, t[n("cFzA", -247)]); u += 1) {
          var c = t[r(670, "WAcB")](u);
          if (o[n("h$@O", -51)](c, 0) && o[n("ZZYF", -161)](c, 127)) i[n("*#AY", 84)](c), a += 1; else if (o[n("Rlfq", 27)](128, 80) && o[n("AYl(", -203)](c, 2047)) a += 2, i[n("*#AY", 84)](o[n("tc7r", -43)](192, o[r(660, "1OEa")](31, o[n("V^P8", 73)](c, 6)))), i[r(828, "i*rr")](o[n("WAcB", 9)](128, o[r(800, "8IJB")](63, c))); else var s = o[n("ct(z", 19)](c, 2048) && o[n("i*rr", -130)](c, 55295) || o[n("GdUW", -108)](c, 57344) && o[n("mkMw", -23)](c, 65535);
          s && (a += 3, i[r(836, "fvaX")](o[r(793, "tc7r")](224, o[r(798, "Gj@i")](15, o[n("uQ6i", -69)](c, 12)))), i[r(905, "V6!d")](o[n("%)5$", 30)](128, o[n("Pwmp", -72)](63, o[n("]eca", -217)](c, 6)))), i[n("%)5$", -191)](o[n("@wI2", -188)](128, o[r(620, "*#AY")](63, c))));
        }
        for (var f = 0; o[r(608, "Rlfq")](f, i[r(925, "TLNq")]); f += 1) i[f] &= 255;
        return o[n("jC%K", -136)](a, 255) ? [0, a][n(")8YT", -245)](i) : [o[r(806, "r*%r")](a, 8), o[n(")8YT", -138)](a, 255)][n("Rlfq", -171)](i);
      }, l.es = function (t) {
        t || (t = "");
        var e = t[i("MyDU", 848)](0, 255),
          r = [];
        function n(t, e) {
          return f(t - 833, e);
        }
        var o = l[n(1030, "Nt0*")](e)[i("@2xQ", 1037)](2);
        function i(t, e) {
          return h(t, e - 1165);
        }
        return r[i("8IJB", 758)](o[n(1013, "1OEa")]), r[n(889, "y1Sw")](o);
      }, l.en = function (t) {
        function e(t, e) {
          return h(e, t - -160);
        }
        var r = {
          uxXjS: function (t, e) {
            return t(e);
          },
          SezqI: function (t, e) {
            return t > e;
          },
          Oplzf: function (t, e) {
            return t !== e;
          },
          EjLCY: function (t, e) {
            return t % e;
          },
          PDDfX: function (t, e) {
            return t / e;
          },
          ltPGD: function (t, e) {
            return t < e;
          },
          deevY: function (t, e) {
            return t * e;
          },
          nvkPN: function (t, e) {
            return t * e;
          },
          befmC: function (t, e) {
            return t + e;
          },
          SQxDH: function (t, e, r) {
            return t(e, r);
          }
        };
        function n(t, e) {
          return f(e - -513, t);
        }
        t || (t = 0);
        var o = r[e(-302, "V6!d")](d, t),
          i = [];
        r[n("ct(z", -434)](o, 0) ? i[n("Ue0q", -441)](0) : i[e(-577, "XPpS")](1);
        for (var a = Math[e(-601, "%iDa")](o)[n("Pwmp", -490)](2)[n("GdUW", -352)](""), u = 0; r[e(-555, "uQ6i")](r[e(-280, "oWBQ")](a[n("mkMw", -474)], 8), 0); u += 1) a[e(-473, "8IJB")]("0");
        a = a[e(-541, "oWBQ")]("");
        for (var c = Math[e(-510, "@LNa")](r[n("%iDa", -342)](a[n("KdNo", -461)], 8)), s = 0; r[n("e@2P", -396)](s, c); s += 1) {
          var l = a[e(-365, "tc7r")](r[e(-283, "I7rJ")](s, 8), r[n("i*rr", -380)](r[n("LphC", -374)](s, 1), 8));
          i[n("GdUW", -375)](r[n(")8YT", -269)](d, l, 2));
        }
        var p = i[n("KdNo", -461)];
        return i[e(-298, "^e(W")](p), i;
      }, l.sc = function (t) {
        var e = {};
        function r(t, e) {
          return h(t, e - 137);
        }
        e[r("jBjN", -250)] = function (t, e) {
          return t > e;
        }, t || (t = "");
        var n = e[r("%)5$", -36)](t[h("yCG[", -301)], 255) ? t[r("mkMw", -224)](0, 255) : t;
        return l[r("@2xQ", -55)](n)[r("z8LC", -119)](2);
      }, l.nc = function (t) {
        var e = {
          TAakF: function (t, e) {
            return t(e);
          },
          MUBpm: function (t, e) {
            return t / e;
          },
          EsYsY: function (t, e, r, n) {
            return t(e, r, n);
          },
          vVWxL: function (t, e) {
            return t * e;
          },
          pmFOE: function (t, e) {
            return t < e;
          },
          hGXvV: function (t, e) {
            return t * e;
          },
          rhGkK: function (t, e) {
            return t + e;
          },
          zmoPU: function (t, e, r) {
            return t(e, r);
          }
        };
        function r(t, e) {
          return f(e - 181, t);
        }
        t || (t = 0);
        var o = Math[u("XPpS", 1663)](e[u("jBjN", 1573)](d, t))[r("y1Sw", 354)](2),
          i = Math[u("@LNa", 1443)](e[u("b)^e", 1359)](o[r("Gj@i", 316)], 8));
        o = e[r("%)5$", 398)](n, o, e[r("ct(z", 424)](i, 8), "0");
        var a = [];
        function u(t, e) {
          return h(t, e - 1793);
        }
        for (var c = 0; e[r("V^P8", 501)](c, i); c += 1) {
          var s = o[r("!OJl", 431)](e[r("8IJB", 379)](c, 8), e[r("BAVm", 178)](e[u("MyDU", 1423)](c, 1), 8));
          a[u("Ue0q", 1441)](e[u("ZZYF", 1485)](d, s, 2));
        }
        return a;
      }, l.va = function (t) {
        function e(t, e) {
          return f(e - -431, t);
        }
        var r = {
          ofUBB: function (t, e) {
            return t(e);
          },
          wsyQh: function (t, e, r, n) {
            return t(e, r, n);
          },
          qfTew: function (t, e) {
            return t * e;
          },
          KQNaC: function (t, e) {
            return t / e;
          },
          TUBjM: function (t, e) {
            return t >= e;
          },
          qAikh: function (t, e) {
            return t - e;
          },
          mbTZh: function (t, e) {
            return t === e;
          },
          cRNCW: function (t, e) {
            return t & e;
          },
          NMAVv: function (t, e) {
            return t + e;
          },
          lofCs: function (t, e) {
            return t >>> e;
          }
        };
        function o(t, e) {
          return h(t, e - -59);
        }
        t || (t = 0);
        for (var i = Math[e("Rlfq", -304)](r[e("MyDU", -136)](d, t)), a = i[o("@LNa", -204)](2), u = [], c = (a = r[o("DS#V", -237)](n, a, r[o("i*rr", -387)](Math[e("*#AY", -341)](r[o("LphC", -365)](a[o("GdUW", -418)], 7)), 7), "0"))[e("ct(z", -184)]; r[e("^e(W", -138)](c, 0); c -= 7) {
          var s = a[e("oWBQ", -318)](r[o("WAcB", -231)](c, 7), c);
          if (r[e(")D5J", -167)](r[e("Ue0q", -204)](i, -128), 0)) {
            u[o("tc7r", -213)](r[e("WAcB", -178)]("0", s));
            break;
          }
          u[o("KdNo", -164)](r[e("I7rJ", -191)]("1", s)), i = r[e("oWBQ", -237)](i, 7);
        }
        return u[e("i*rr", -370)](function (t) {
          return d(t, 2);
        });
      }, l.ek = function (t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          o = {
            IvTOL: function (t, e) {
              return t !== e;
            },
            IewyS: function (t, e) {
              return t === e;
            },
            Opbjh: m("cFzA", 1057) + m("MyDU", 958),
            XIuqu: v("KdNo", -125),
            eAfWz: function (t, e) {
              return t === e;
            },
            ORZBS: m("WAcB", 1123),
            luUvW: function (t, e) {
              return t > e;
            },
            wicod: function (t, e) {
              return t <= e;
            },
            khMkh: function (t, e) {
              return t + e;
            },
            ACNLN: function (t, e, r, n) {
              return t(e, r, n);
            },
            oxnKM: m("ZhDP", 968),
            Ieeoq: m("h$@O", 849),
            dQqCG: function (t, e, r) {
              return t(e, r);
            },
            BDkSu: function (t, e) {
              return t - e;
            },
            BkfdA: function (t, e) {
              return t > e;
            }
          };
        if (!t) return [];
        var i = [],
          a = 0;
        o[v("z8LC", -64)](r, "") && (o[m("e@2P", 1060)](Object[m("]eca", 1023)][m("mkMw", 1044)][m("Gj@i", 1054)](r), o[m("mkMw", 907)]) && (a = r[m("r*%r", 1137)]), o[m("1OEa", 891)](void 0 === r ? "undefined" : e(r), o[v("BAVm", -363)]) && (a = (i = l.sc(r))[m("jBjN", 938)]), o[m("cFzA", 832)](void 0 === r ? "undefined" : e(r), o[v("MyDU", -324)]) && (a = (i = l.nc(r))[v("e@2P", -65)]));
        var u = Math[v("DS#V", -157)](t)[v("z8LC", -266)](2),
          c = "";
        c = o[m("*#AY", 975)](a, 0) && o[m("TLNq", 1025)](a, 7) ? o[v("1OEa", -347)](u, o[v("*#AY", -254)](n, a[v("h$@O", -48)](2), 3, "0")) : o[v("uQ6i", -178)](u, o[v("BAVm", -53)]);
        var s = [];
        s[o[m("KdNo", 1059)]](o[m("ct(z", 1065)](d, c[v("KdNo", -129)](Math[m("e@2P", 799)](o[m(")8YT", 976)](c[v("e@2P", -65)], 8), 0)), 2));
        var p = s;
        if (o[v("z8LC", -60)](a, 7)) return p[v("e@2P", -335)](l.va(a), i);
        function v(t, e) {
          return f(e - -336, t);
        }
        function m(t, e) {
          return h(t, e - 1248);
        }
        return p[v("oWBQ", -159)](i);
      }, l[f(274, "Pwmp")] = function (t) {
        function e(t, e) {
          return f(t - -530, e);
        }
        for (var r = {
          RdAmM: function (t, e) {
            return t < e;
          },
          mpcMo: function (t, e, r) {
            return t(e, r);
          }
        }, n = [], o = t[e(-357, "y1Sw")](2)[a("I7rJ", -567)](""), i = 0; r[e(-377, "8IJB")](o[e(-241, "fvaX")], 16); i += 1) o[a("ZZYF", -450)](0);
        function a(t, e) {
          return f(e - -587, t);
        }
        return o = o[e(-382, "Ue0q")](""), n[a("]eca", -596)](r[e(-356, "LphC")](d, o[a("V6!d", -516)](0, 8), 2), r[e(-436, "b)^e")](d, o[a("h$@O", -303)](8, 16), 2)), n;
      }, l[h("y1Sw", -156)] = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = {
            sJXMJ: function (t, e) {
              return t(e);
            },
            iYxZQ: function (t, e) {
              return t < e;
            },
            zKmit: function (t, e) {
              return t - e;
            }
          },
          r = [];
        function n(t, e) {
          return h(t, e - 58);
        }
        function i(t, e) {
          return f(t - 164, e);
        }
        var a = l.nc(e[n("@2xQ", -306)](o, t[n("jC%K", -51)](/\s/g, "")));
        if (e[i(264, "yCG[")](a[n("I7rJ", -241)], 4)) for (var u = 0; e[n("oWBQ", -275)](u, e[i(263, "XPpS")](4, a[i(294, "BAVm")])); u++) r[i(270, "@LNa")](0);
        return r[n("MyDU", -204)](a);
      }, l[h("XPpS", -413)] = function (t, e) {
        var r = {};
        function n(t, e) {
          return f(e - -32, t);
        }
        function o(t, e) {
          return f(t - 355, e);
        }
        r[o(527, "KdNo")] = function (t, e) {
          return t === e;
        }, r[o(442, "i*rr")] = n("y1Sw", 170), r[n("uQ6i", 228)] = function (t, e) {
          return t === e;
        };
        var i = r,
          a = Object[n("ZhDP", 207)](t)[n("V6!d", 180)](function (e) {
            function r(t, e) {
              return o(e - 69, t);
            }
            if (i[r("AYl(", 579)](e, i[r("b)^e", 470)]) || i[a("DS#V", 1254)](e, "c")) return "";
            function a(t, e) {
              return n(t, e - 962);
            }
            return e + ":" + t[e][a("z8LC", 1e3)]() + ",";
          })[n("Gj@i", 70)]("");
        return n("LphC", -23) + e + "={" + a + "}";
      }, l[f(285, "i*rr")] = function (t, e) {
        var r = {};
        function n(t, e) {
          return h(t, e - 182);
        }
        r[i(1292, "DS#V")] = function (t, e) {
          return t === e;
        }, r[n("%)5$", 76)] = function (t, e) {
          return t >= e;
        }, r[n("V6!d", -223)] = function (t, e) {
          return t + e;
        };
        var o = r;
        if (o[i(1460, "h$@O")](t, 64)) return 64;
        function i(t, e) {
          return h(e, t - 1666);
        }
        return o[n(")8YT", 38)](t, 63) ? e : o[n("%iDa", -229)](t, e) ? o[n("!OJl", -53)](t, 1) : t;
      }, l[h("y1Sw", -309)] = function (t, r) {
        var n = {
          VsKEF: function (t, e) {
            return t < e;
          },
          huUqi: p("8IJB", -555),
          dZBZy: p("Gj@i", -439),
          fwSpa: p("mkMw", -429),
          spQns: W(40, "DS#V"),
          LFLIG: p("AYl(", -350),
          FIpWA: p("!OJl", -228) + p("Rlfq", -503) + W(127, "]eca") + p("Rlfq", -278) + W(-167, "oWBQ") + p("r*%r", -328) + p("TLNq", -465),
          uwGnQ: function (t, e) {
            return t !== e;
          },
          NvqTI: p("]eca", -394),
          rptPp: function (t, e) {
            return t * e;
          },
          oGDYQ: function (t, e) {
            return t < e;
          },
          bYecK: p("1OEa", -243) + p("V6!d", -225) + "|5",
          bISYI: function (t, e) {
            return t >> e;
          },
          ISpzP: function (t, e) {
            return t - e;
          },
          qZIni: function (t, e) {
            return t | e;
          },
          VxZiG: function (t, e) {
            return t << e;
          },
          WwXQb: function (t, e) {
            return t & e;
          },
          SsdgC: function (t, e) {
            return t - e;
          },
          itkpZ: function (t, e) {
            return t - e;
          },
          JJrvQ: function (t, e) {
            return t(e);
          },
          IBelW: function (t, e) {
            return t + e;
          },
          fQXAS: function (t, e) {
            return t + e;
          },
          dEepQ: function (t, e) {
            return t | e;
          },
          IkbuF: function (t, e) {
            return t - e;
          },
          jWkpv: function (t, e) {
            return t >> e;
          },
          DvwKC: function (t, e, r) {
            return t(e, r);
          },
          dQGzx: function (t, e, r) {
            return t(e, r);
          }
        };
        t = t;
        var o = {};
        o[n[W(-31, "V6!d")]] = t, o[n[W(-73, "]eca")]] = 0, o[n[W(-34, "*#AY")]] = function () {
          function e(t, e) {
            return p(t, e - 1030);
          }
          return t[e("h$@O", 500)](o[e("Ue0q", 734)]++);
        };
        var i = {
          "_\xea": []
        };
        i[n[W(43, "GdUW")]] = -1, i["_\xe1"] = function (t) {
          function e(t, e) {
            return p(t, e - 1219);
          }
          i[e("WAcB", 814)]++, i["_\xea"][i[e(")8YT", 793)]] = t;
        }, i[n[p("ZZYF", -267)]] = function () {
          function t(t, e) {
            return p(e, t - 1422);
          }
          function e(t, e) {
            return W(t - 322, e);
          }
          return _bÝ[e(343, "@wI2")]--, n[t(914, "jBjN")](_bÝ[t(1091, "]eca")], 0) && (_bÝ[e(445, "i*rr")] = 0), _bÝ["_\xea"][_bÝ[t(1064, "%iDa")]];
        };
        var a,
          u,
          c,
          s,
          d = "",
          l = n[p(")D5J", -234)];
        function p(t, e) {
          return f(e - -534, t);
        }
        for (var v = 0; n[W(67, "ZhDP")](v, l[p("!OJl", -424)]); v++) i["_\xe1"](l[W(-136, "Rlfq")](v));
        i["_\xe1"]("=");
        var m = n[W(-210, "*#AY")](void 0 === r ? "undefined" : e(r), n[W(-37, "LphC")]) ? Math[W(-207, "z8LC")](n[W(-217, "oWBQ")](Math[p("*#AY", -501)](), 64)) : -1;
        function W(t, e) {
          return h(e, t - 230);
        }
        for (v = 0; n[W(63, "BAVm")](v, t[p("Ue0q", -341)]); v = o[W(-184, "fvaX")]) for (var y = n[p("y1Sw", -490)][p("h$@O", -275)]("|"), g = 0; ;) {
          switch (y[g++]) {
            case "0":
              a = n[p("y1Sw", -326)](i["_\xea"][n[W(51, "@LNa")](i[p("%iDa", -358)], 2)], 2);
              continue;
            case "1":
              u = n[p("%iDa", -308)](n[W(-30, ")D5J")](n[p("b)^e", -430)](i["_\xea"][n[p("cFzA", -253)](i[W(9, "]eca")], 2)], 3), 4), n[W(-2, "yCG[")](i["_\xea"][n[W(-68, "8IJB")](i[p("mkMw", -365)], 1)], 4));
              continue;
            case "2":
              i["_\xe1"](o[p("V6!d", -292)]());
              continue;
            case "3":
              n[W(55, ")8YT")](isNaN, i["_\xea"][n[p("ct(z", -236)](i[p("Pwmp", -457)], 1)]) ? c = s = 64 : n[p("@LNa", -226)](isNaN, i["_\xea"][i[W(-145, "@2xQ")]]) && (s = 64);
              continue;
            case "4":
              i["_\xe1"](o[W(-166, "cFzA")]());
              continue;
            case "5":
              d = n[W(-118, "V6!d")](n[W(-45, "AYl(")](n[p("fvaX", -499)](n[W(-82, "I7rJ")](d, i["_\xea"][a]), i["_\xea"][u]), i["_\xea"][c]), i["_\xea"][s]);
              continue;
            case "6":
              s = n[W(-192, "%)5$")](i["_\xea"][i[p("XPpS", -272)]], 63);
              continue;
            case "7":
              c = n[p("I7rJ", -415)](n[W(-49, "^e(W")](n[W(-135, "Rlfq")](i["_\xea"][n[p("tc7r", -305)](i[W(28, "ZhDP")], 1)], 15), 2), n[W(-178, "]eca")](i["_\xea"][i[W(-29, "b)^e")]], 6));
              continue;
            case "8":
              n[W(11, ")D5J")](void 0 === r ? "undefined" : e(r), n[p("]eca", -562)]) && (a = n[p("uQ6i", -247)](r, a, m), u = n[p("jC%K", -231)](r, u, m), c = n[W(-96, "b)^e")](r, c, m), s = n[p("@wI2", -309)](r, s, m));
              continue;
            case "9":
              i["_\xe1"](o[W(-162, "Pwmp")]());
              continue;
            case "10":
              i[p("%)5$", -306)] -= 3;
              continue;
          }
          break;
        }
        return n[W(-114, "y1Sw")](d[W(-132, "y1Sw")](/=/g, ""), l[m] || "");
      }, t[f(-20, "@2xQ")] = l;
    }).call(this, r(1)(t));
  },
  4: function (t, r, n) {
    "use strict";

    (function (t) {
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      };
      function o(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t;
      }
      !function (t, e) {
        function r(t, e) {
          return z(e - 525, t);
        }
        function n(t, e) {
          return z(e - 449, t);
        }
        for (var o = ot(); ;) try {
          if (parseInt(r("dDh^", 1166)) / 1 * (-parseInt(n("TiEZ", 1179)) / 2) + parseInt(r("(aSQ", 824)) / 3 * (parseInt(r("(aSQ", 1162)) / 4) + -parseInt(r(")k1S", 1227)) / 5 * (parseInt(r("(aSQ", 906)) / 6) + -parseInt(n("*3Yx", 944)) / 7 + parseInt(r("5uLZ", 1400)) / 8 * (parseInt(r("pT5O", 1437)) / 9) + -parseInt(n("nip#", 736)) / 10 * (parseInt(n("kOC&", 802)) / 11) + -parseInt(n("n]RX", 676)) / 12 * (-parseInt(r("W%Tx", 938)) / 13) === 239620) break;
          o.push(o.shift());
        } catch (t) {
          o.push(o.shift());
        }
      }();
      var i = n(5),
        a = n(3),
        u = n(14),
        c = 0,
        s = void 0,
        f = void 0,
        d = 0,
        l = [],
        h = function () { },
        p = void 0,
        v = void 0,
        m = void 0,
        W = void 0,
        y = void 0,
        g = void 0,
        w = ("undefined" == typeof e ? "undefined" : r(e)) === M("E]hH", 1145) ? null : e;
      if (("undefined" == typeof window ? "undefined" : r(window)) !== tt("kOC&", 840)) for (var b = (tt("E]hH", 1159) + "5")[tt(")USz", 985)]("|"), S = 0; ;) {
        switch (b[S++]) {
          case "0":
            v = p[tt("3@4s", 1209)];
            continue;
          case "1":
            y = p[M("q8OY", 939)];
            continue;
          case "2":
            p = window;
            continue;
          case "3":
            W = p[tt(")wmk", 836)];
            continue;
          case "4":
            m = p[M("n]RX", 1202)];
            continue;
          case "5":
            g = tt("kViH", 1245) + "rt" in p[tt(")4TU", 508)];
            continue;
        }
        break;
      }
      var k = function () {
        var t = {};
        t[U(-25, "$[Rk")] = function (t, e) {
          return t !== e;
        }, t[U(47, ")k1S")] = U(286, "CKk#"), t[V(638, "bLLK")] = function (t, e) {
          return t !== e;
        }, t[U(392, "HaC]")] = U(-118, "pT5O") + "5", t[V(916, "!o)N")] = function (t, e) {
          return t < e;
        }, t[V(930, "TiEZ")] = function (t, e) {
          return t || e;
        }, t[V(594, "5uLZ")] = function (t, e) {
          return t !== e;
        }, t[U(-207, "H]%0")] = V(725, "kViH"), t[U(321, ")1pw")] = function (t, e) {
          return t !== e;
        }, t[V(694, "pT5O")] = function (t, e) {
          return t === e;
        }, t[V(526, "1tmM")] = function (t, e) {
          return t === e;
        }, t[U(291, "H]%0")] = function (t, e) {
          return t && e;
        }, t[V(618, "dDh^")] = function (t, e) {
          return t === e;
        }, t[U(134, "o0(L")] = function (t, e) {
          return t !== e;
        }, t[U(497, "5uLZ")] = U(215, "nip#"), t[U(465, ")rfa")] = function (t, e) {
          return t === e;
        }, t[V(290, "YWh!")] = U(262, "re)3"), t[U(29, "XYd(")] = function (t, e) {
          return t === e;
        }, t[U(212, "1tmM")] = U(220, "nip#") + V(572, ")k1S"), t[U(-228, "CKk#")] = function (t, e) {
          return t && e;
        }, t[U(-87, ")4TU")] = function (t, e) {
          return t === e;
        }, t[U(-138, "nip#")] = function (t, e) {
          return t in e;
        }, t[V(302, "1aiA")] = V(963, "jYUT"), t[V(532, "q8OY")] = function (t, e) {
          return t > e;
        }, t[U(296, "kOC&")] = V(668, "*3Yx") + "r", t[V(485, "VLMI")] = U(302, "H&h#") + "e", t[U(536, "kOC&")] = function (t, e) {
          return t > e;
        };
        var e = t,
          o = [];
        if (e[V(604, "VLMI")](r(p[U(366, "HaC]") + "t"]), e[U(226, "*3Yx")]) || e[U(337, "HaC]")](r(p[U(549, "E]hH")]), e[V(840, "pT5O")])) o[0] = 1; else for (var i = e[V(522, "o0(L")][U(493, "s&qz")]("|"), a = 0; ;) {
          switch (i[a++]) {
            case "0":
              var u = p[U(403, "W%Tx")];
              continue;
            case "1":
              var c = e[V(859, "CCUN")](u, 1);
              continue;
            case "2":
              var s = e[V(235, "tuHE")](d, 1);
              continue;
            case "3":
              var f = e[V(926, "q8OY")](s, c);
              continue;
            case "4":
              var d = p[U(-130, "kOC&") + "t"];
              continue;
            case "5":
              o[0] = f ? 1 : 0;
              continue;
          }
          break;
        }
        var l = r(p[V(781, "]A4d") + "m"]),
          h = e[U(-197, "sA&C")](l, e[U(-207, "H]%0")]),
          m = r(p[U(102, "sA&C")]),
          W = e[V(234, "3B$z")](m, e[U(-216, "HaC]")]),
          g = e[V(291, "vlt#")](h, W);
        o[1] = g ? 1 : 0;
        var w = r(p[U(-190, ")rfa")]),
          b = e[U(176, ")USz")](w, e[V(321, "VLMI")]);
        o[2] = b ? 0 : 1;
        var S = r(p[U(-132, "H&h#")]),
          k = e[U(438, "VLMI")](S, e[U(130, "Ss$^")]);
        o[3] = k ? 0 : 1;
        var _ = r(p[U(41, "s&qz")]),
          C = e[V(599, "kViH")](_, e[V(843, ")wmk")]);
        o[4] = C ? 0 : 1;
        var O = v[U(-57, "H]%0")],
          P = e[U(203, "tuHE")](O, !0);
        o[5] = P ? 1 : 0;
        var x = r(p[V(236, "v6HE") + U(86, "Sgdo")]),
          R = e[V(508, "HqSY")](x, e[U(546, "sA&C")]),
          E = r(p[V(721, "!o)N") + U(-206, "HaC]") + V(545, "Ss$^")]),
          T = e[V(981, "3B$z")](E, e[V(1004, "1aiA")]),
          j = e[V(714, "Ss$^")](R, T);
        o[6] = j ? 0 : 1;
        try {
          e[V(270, "]A4d")](r(Function[U(151, "Sgdo")][U(-177, "HqSY")]), e[V(311, "1tmM")]) && (o[7] = 1), e[V(416, "u2O2")](Function[V(272, "kOC&")][U(192, "re)3")][V(643, ")4TU")]()[U(-48, ")1pw")](/bind/g, e[U(415, "(aSQ")]), Error[U(391, "VLMI")]()) && (o[7] = 1), e[V(685, ")wmk")](Function[V(801, "e)$x")][V(845, "VLMI")][V(941, "Z7^p")]()[U(-14, "3B$z")](/toString/g, e[V(822, "HqSY")]), Error[V(303, "!o)N")]()) && (o[7] = 1);
        } catch (t) {
          o[7] = 0;
        }
        o[8] = v[V(502, ")rfa")] && e[V(475, "v6HE")](v[U(228, "vlt#")][V(836, "!o)N")], 0) ? 1 : 0;
        var q = v[V(1002, "*3Yx")],
          L = e[V(450, "kViH")](q, "");
        o[9] = L ? 1 : 0;
        var I = p[U(-35, ")k1S")],
          N = e[V(850, "CKk#")](I, e[V(992, "CKk#")]),
          D = p[U(27, "Z7^p")],
          A = e[V(887, "HaC]")](D, e[V(632, "H&h#")]),
          G = e[V(935, "TiEZ")](N, A);
        o[10] = G ? 1 : 0, o[11] = p[U(247, "CCUN")] && !p[U(144, ")USz")][V(650, "1tmM")] ? 1 : 0;
        var H = p[U(-61, "VLMI")],
          Q = e[V(882, "nip#")](H, void 0);
        o[12] = Q ? 1 : 0;
        var B = e[V(519, "pT5O")](e[U(99, "Z7^p")], v);
        o[13] = B ? 1 : 0;
        var z = v[V(982, "YWh!") + U(488, "o0(L")](e[V(300, "H&h#")]);
        function V(t, e) {
          return tt(e, t - -278);
        }
        function U(t, e) {
          return M(e, t - -766);
        }
        // o[14] = z ? 1 : 0, o[15] = y[V(874, "q8OY")] && e[V(346, "nip#")](y[U(-189, "$[Rk")][U(-84, ")wmk")]()[U(157, "vlt#")](e[V(468, "v6HE")]), -1) ? 1 : 0;
        try {
          var J = n(!function () {
            var t = new Error("Cannot find module 'child_process'");
            throw t.code = "MODULE_NOT_FOUND", t;
          }());
          o[16] = J ? 1 : 0;
        } catch (t) {
          o[16] = 0;
        }
        try {
          var K = p[U(85, "nip#")][V(723, "HaC]") + U(-139, "re)3")][V(596, "tuHE")]()[U(135, ")USz")](e[U(-233, "Ss$^")]),
            F = e[V(964, "vlt#")](K, -1);
          o[17] = F ? 0 : 1;
        } catch (t) {
          o[17] = 0;
        }
        return o;
      };
      function _(t) {
        var e = {
          WfSrT: function (t, e) {
            return t(e);
          },
          RLzYc: function (t, e) {
            return t(e);
          },
          NJBmm: r(1037, "YWh!")
        };
        function r(t, e) {
          return tt(e, t - 177);
        }
        var n = function (t) {
          var e;
          return o(e = {}, r(1261, ")4TU") + t + (r(1292, "5uLZ") + r(830, "HqSY")), !0), o(e, a(579, ")rfa") + a(23, "H]%0") + t + (a(26, "H&h#") + r(997, ")1pw")), !0), o(e, a(267, "Sgdo") + r(1069, "s&qz") + a(143, ")k1S"), !0), o(e, r(764, "*3Yx") + t + (a(182, "(aSQ") + r(723, "pT5O") + a(436, "H]%0")), !0), o(e, r(1368, "re)3") + a(253, "TiEZ") + t + (r(1446, "kOC&") + r(806, "H]%0") + r(1413, "e)$x")), !0), o(e, a(196, ")1pw") + r(1233, "HqSY") + a(513, "XYd(") + r(669, ")wmk"), !0), e;
        },
          i = Function[a(760, "VLMI")][a(390, "s&qz")][a(240, "$[Rk")](t);
        function a(t, e) {
          return M(e, t - -531);
        }
        var u = Function[a(516, "TiEZ")][r(1098, ")4TU")][r(1388, "v6HE")](t[a(120, ")1pw")]),
          c = t[a(583, ")k1S")][a(136, "v6HE")](/get\s/, "");
        return e[a(406, "n]RX")](n, c)[i] && e[a(125, ")rfa")](n, e[a(278, "sA&C")])[u] || !1;
      }
      function C(t, e, n) {
        var o = {};
        function i(t, e) {
          return tt(t, e - -594);
        }
        o[i("H&h#", 204)] = function (t, e) {
          return t > e;
        }, o[u("q8OY", 101)] = function (t, e) {
          return t < e;
        }, o[u("Z7^p", 265)] = function (t, e) {
          return t - e;
        }, o[i("CKk#", -92)] = function (t, e) {
          return t || e;
        }, o[u(")wmk", 742)] = function (t, e) {
          return t - e;
        }, o[i("vlt#", 550)] = function (t, e) {
          return t !== e;
        }, o[i("H]%0", 624)] = i("kOC&", 246);
        var a = o;
        function u(t, e) {
          return M(t, e - -472);
        }
        var s = e || p[u("nip#", 504)];
        if (a[u("n]RX", 777)](s[u("jYUT", 139)], 0)) {
          if (t[i("e)$x", 234) + "mp"] && a[i("q8OY", -55)](a[i("bLLK", 593)](s[i("YWh!", 653)], t[i("TiEZ", 525) + "mp"]), 15)) return;
          t[i("kViH", -27) + "mp"] = s[i("5uLZ", 515)];
        }
        var f = {},
          d = s[i("TiEZ", 425)].id;
        f[u("bLLK", 230)] = a[i("1aiA", 547)](d, ""), f[i("Qr8u", 442)] = a[i("$[Rk", 36)](m[u("Ss$^", 772)](), c);
        var l = s[u(")USz", 531) + u("Z7^p", 763)];
        l && l[u(")1pw", 300)] ? (f[u("q8OY", 294)] = l[0][u("kViH", 543)], f[i("$[Rk", 173)] = l[0][i("u2O2", 535)]) : (f[i("CKk#", 88)] = s[u("(aSQ", 619)], f[u("CKk#", 443)] = s[i("pT5O", 583)]), a[u("vlt#", 706)](void 0 === n ? "undefined" : r(n), a[i("!o)N", -30)]) ? (t[u("3@4s", 328)][n][i("o0(L", -75)](f), a[u("1tmM", 567)](t[i("1tmM", 355)][n][u("1tmM", 350)], t[u("CKk#", 287)]) && t[i(")rfa", -11)][n][u(")1pw", 600)]()) : (t[u("1tmM", 511)][u(")USz", 688)](f), a[u("HaC]", 696)](t[i("]A4d", 428)][u(")k1S", 332)], t[i(")k1S", -73)]) && t[u("HqSY", 460)][u("3@4s", 800)]());
      }
      function O(t) {
        var e = {};
        function r(t, e) {
          return tt(e, t - 161);
        }
        e[i(-60, "*3Yx")] = function (t, e) {
          return t === e;
        };
        var n = e,
          o = {};
        function i(t, e) {
          return tt(e, t - -710);
        }
        return (p[r(1337, "CCUN")][i(226, "s&qz")] ? p[r(1169, "v6HE")][r(1437, "1tmM")][i(246, "dDh^")]("; ") : [])[i(-89, "o0(L")](function (e) {
          function a(t, e) {
            return r(t - -1231, e);
          }
          var u = e[a(-461, "W%Tx")]("="),
            c = u[a(179, "Qr8u")](1)[f("vlt#", 600)]("="),
            s = u[0][a(-168, "n]RX")](/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          function f(t, e) {
            return i(e - 159, t);
          }
          return c = c[f("XYd(", 178)](/(%[0-9A-Z]{2})+/g, decodeURIComponent), o[s] = c, n[a(63, "VLMI")](t, s);
        }), t ? o[t] || "" : o;
      }
      function P(t) {
        if (!t || !t[tt("kOC&", 1024)]) return [];
        function e(t, e) {
          return tt(e, t - -994);
        }
        var r = [];
        return t[e(-37, "CCUN")](function (t) {
          function n(t, r) {
            return e(r - -131, t);
          }
          var o = a.sc(t[i("kOC&", 660)]);
          function i(t, r) {
            return e(r - 447, t);
          }
          r = r[i("kViH", 236)](a.va(t[n("u2O2", -119)]), a.va(t[n("re)3", -336)]), a.va(t[i("(aSQ", 720)]), a.va(o[n("H]%0", -535)]), o);
        }), r;
      }
      var x = {};
      x[tt("tuHE", 647)] = [], x[M("(aSQ", 929)] = 1, x[tt("CKk#", 1283)] = function () {
        var t = {};
        function e(t, e) {
          return tt(e, t - -552);
        }
        t[o("pT5O", 1322)] = o("5uLZ", 686) + e(680, "s&qz"), t[e(660, "u2O2")] = e(136, "tuHE") + o("E]hH", 1001), t[o("3B$z", 891)] = e(219, "Ss$^") + e(263, "tuHE"), t[e(584, ")4TU")] = function (t, e) {
          return t + e;
        };
        var r = t,
          n = a[o("VLMI", 1088)](this, r[e(295, "sA&C")]);
        function o(t, e) {
          return M(t, e - 33);
        }
        var i = a[o("jYUT", 719)](R, g ? r[o("bLLK", 1006)] : r[e(542, ")4TU")]);
        this.c = a[e(120, "v6HE")](r[e(-54, ")k1S")](n, i));
      }, x[tt("n]RX", 572) + "t"] = function (t) {
        ({
          wbkwq: function (t, e, r) {
            return t(e, r);
          }
        })[tt("o0(L", 1140)](C, this, t);
      }, x[tt("YWh!", 1082)] = function () {
        var t = {
          znsOM: function (t, e) {
            return t === e;
          },
          QWavd: function (t, e) {
            return t(e);
          }
        };
        if (t[n(431, "u2O2")](this[r(1068, "q8OY")][r(1238, "q8OY")], 0)) return [];
        var e = [][r(1e3, "q8OY")](a.ek(4, this[n(347, "Z7^p")]), t[n(552, "Qr8u")](P, this[r(1071, "(aSQ")]));
        function r(t, e) {
          return tt(e, t - -15);
        }
        function n(t, e) {
          return M(e, t - -402);
        }
        return e[n(392, "HqSY")](this.c);
      };
      var R = {};
      R[M("(aSQ", 1120)] = [], R[M(")4TU", 1198)] = 1, R[M(")rfa", 743) + "t"] = function (t) {
        d++, {
          fBgab: function (t, e, r) {
            return t(e, r);
          }
        }[tt("*3Yx", 870)](C, this, t);
      }, R[M("E]hH", 699)] = function () {
        var t = {
          YWjdd: function (t, e) {
            return t === e;
          },
          rPXXq: function (t, e) {
            return t(e);
          }
        };
        if (t[r("1tmM", 238)](this[r("s&qz", 356)][r("HaC]", 187)], 0)) return [];
        function e(t, e) {
          return tt(t, e - -174);
        }
        function r(t, e) {
          return tt(t, e - -915);
        }
        return [][e("HqSY", 586)](a.ek(g ? 1 : 2, this[r(")rfa", -332)]), t[e("q8OY", 548)](P, this[r(")USz", -422)]));
      };
      var E = {};
      function M(t, e) {
        return z(e - 348, t);
      }
      E[tt("1aiA", 835)] = [], E[M("pT5O", 646)] = 30, E[tt(")USz", 1067) + "t"] = function (t) {
        var e = {
          FrtxJ: function (t, e, r, n) {
            return t(e, r, n);
          },
          BWDCA: function (t, e, r) {
            return t(e, r);
          }
        };
        function r(t, e) {
          return M(e, t - -922);
        }
        g ? (!this[r(-25, "VLMI")][d] && (this[r(396, "CKk#")][d] = []), e[r(21, "n]RX")](C, this, t, d)) : e[r(95, "CKk#")](C, this, t);
      }, E[tt("3B$z", 1228)] = function () {
        var t = {
          WWlsy: function (t, e) {
            return t(e);
          },
          nEzoZ: function (t, e) {
            return t - e;
          },
          hWGcs: function (t, e) {
            return t >= e;
          },
          LHeLG: function (t, e) {
            return t > e;
          },
          koCFH: function (t, e) {
            return t === e;
          },
          AbPAH: function (t, e) {
            return t(e);
          }
        };
        function e(t, e) {
          return M(t, e - -1005);
        }
        var r = [];
        if (g) {
          r = this[e("Ss$^", -146)][e("W%Tx", 266)](function (t) {
            return t && t[s(988, "1aiA")] > 0;
          });
          for (var n = 0, o = t[s(1039, "3B$z")](r[e("3@4s", -170)], 1); t[e("1tmM", -139)](o, 0); o--) {
            n += r[o][s(540, "vlt#")];
            var i = this[e("re)3", -158)],
              u = t[e("TiEZ", -92)](n, i);
            if (t[e("CKk#", -245)](u, 0) && (r[o] = r[o][e("pT5O", 222)](u)), t[e("*3Yx", -361)](u, 0)) {
              r = r[e("sA&C", -119)](o);
              break;
            }
          }
        } else r = this[s(389, ")USz")];
        if (t[e("1aiA", -284)](r[e(")1pw", -233)], 0)) return [];
        var c = [][e("5uLZ", -360)](a.ek(g ? 24 : 25, r));
        function s(t, e) {
          return tt(e, t - -104);
        }
        return g ? r[e(")k1S", -490)](function (r) {
          function n(t, e) {
            return s(t - -643, e);
          }
          function o(t, r) {
            return e(r, t - -166);
          }
          c = (c = c[n(541, "jYUT")](a.va(r[o(-100, "s&qz")])))[o(30, "CCUN")](t[n(92, "kViH")](P, r));
        }) : c = c[s(687, "1tmM")](t[e("]A4d", 195)](P, this[s(611, "Z7^p")])), c;
      };
      var T = {};
      T[M("VLMI", 897)] = [], T[tt("re)3", 813)] = 3, T[M("5uLZ", 935) + "t"] = function () {
        var t = {};
        function e(t, e) {
          return M(e, t - 416);
        }
        t[i(847, "jYUT")] = function (t, e) {
          return t > e;
        }, t[e(1292, "vlt#")] = function (t, e) {
          return t - e;
        };
        var r = t,
          n = {},
          o = p[i(782, "YWh!")][i(358, "3@4s") + e(1635, "pT5O")][e(1512, "CCUN")] || p[e(955, ")k1S")][i(184, "s&qz")][e(1512, "CCUN")];
        function i(t, e) {
          return M(e, t - -448);
        }
        r[i(419, "TiEZ")](o, 0) && (n[e(1244, "!o)N")] = o, n[i(687, "re)3")] = r[i(692, "3@4s")](m[i(579, "vlt#")](), c), this[e(1624, ")1pw")][e(1613, "n]RX")](n), r[i(503, "nip#")](this[i(222, "5uLZ")][e(1077, ")rfa")], this[e(1712, "H&h#")]) && this[i(202, "H&h#")][i(863, "]A4d")]());
      }, T[tt("kOC&", 638)] = function () {
        function t(t, e) {
          return M(t, e - 545);
        }
        var e = {};
        e[t("kOC&", 1683)] = function (t, e) {
          return t && e;
        };
        var r = e,
          n = g,
          o = this[u("3@4s", 1390) + "t"]();
        if (r[t(")1pw", 1752)](n, o), !this[u("!o)N", 1193)][t("Qr8u", 1467)]) return [];
        var i = [][u("Qr8u", 1200)](a.ek(3, this[u("v6HE", 910)]));
        function u(t, e) {
          return tt(t, e - 142);
        }
        return this[u("tuHE", 789)][t("(aSQ", 1107)](function (e) {
          function r(t, e) {
            return u(e, t - -303);
          }
          i = i[r(413, "u2O2")](a.va(e[r(752, "E]hH")]), a.va(e[t("3@4s", 1866)]));
        }), i;
      };
      var j = {};
      j[M("o0(L", 1075)] = function () {
        function t(t, e) {
          return tt(e, t - -1156);
        }
        var e = {};
        e[t(-307, "re)3")] = n("!o)N", 7) + "fo";
        var r = e;
        function n(t, e) {
          return M(t, e - -1306);
        }
        this[t(-388, "v6HE")] = {}, this[n("kOC&", -408)][n(")USz", -757)] = p[t(-57, "bLLK")][t(-256, "W%Tx")], this[t(-71, "TiEZ")][n("CCUN", -311)] = p[n(")wmk", -461)][t(-549, "$[Rk")], this.c = a[t(-559, ")rfa")](a[n("bLLK", -776)](this, r[n("!o)N", -697)]));
      }, j[tt("$[Rk", 1103)] = function () {
        var t = {};
        function e(t, e) {
          return M(t, e - -1002);
        }
        t[e("1aiA", 28)] = function (t, e) {
          return t && e;
        }, t[o("e)$x", 725)] = function (t, e) {
          return t > e;
        }, t[o("HqSY", 518)] = function (t, e) {
          return t === e;
        };
        var r = t,
          n = a.ek(7);
        function o(t, e) {
          return tt(t, e - -514);
        }
        var i = this[o("sA&C", 472)],
          u = i.href,
          c = void 0 === u ? "" : u,
          s = i.port,
          f = void 0 === s ? "" : s;
        if (r[e("vlt#", 144)](!c, !f)) return [][e("W%Tx", -262)](n, this.c);
        var d = r[e("H&h#", 109)](c[o("kViH", 197)], 128) ? c[e(")wmk", 256)](0, 128) : c,
          l = a.sc(d);
        return [][o(")USz", 593)](n, a.va(l[e("CKk#", -123)]), l, a.va(f[e("vlt#", -324)]), r[e("v6HE", -439)](f[e(")USz", -457)], 0) ? [] : a.sc(this[o(")4TU", 177)][o("Ss$^", 74)]), this.c);
      };
      var q = {};
      q[M("1aiA", 791)] = function () {
        function t(t, e) {
          return M(t, e - -381);
        }
        function e(t, e) {
          return tt(e, t - 488);
        }
        this[t("Qr8u", 834)] = {}, this[e(1539, "!o)N")][e(1151, "!o)N")] = p[t("Sgdo", 278)][t("re)3", 148)], this[t("]A4d", 675)][t("Z7^p", 626) + "t"] = p[t("tuHE", 876)][e(1761, "o0(L") + "t"];
      }, q[M("e)$x", 574)] = function () {
        function t(t, e) {
          return tt(t, e - 196);
        }
        return [][t(")wmk", 912)](a.ek(8), a.va(this[t("YWh!", 1440)][t("u2O2", 1080)]), a.va(this[t("HqSY", 1094)][t("u2O2", 1304) + "t"]));
      };
      var L = {};
      L[tt(")k1S", 518)] = function () {
        var t = {};
        function e(t, e) {
          return M(e, t - -1340);
        }
        function r(t, e) {
          return M(e, t - -89);
        }
        t[e(-700, "Ss$^")] = function (t, e) {
          return t + e;
        }, t[r(934, ")rfa")] = function (t, e) {
          return t * e;
        }, t[e(-601, "n]RX")] = function (t, e) {
          return t * e;
        }, t[r(1103, "nip#")] = function (t, e) {
          return t + e;
        };
        var n = t;
        this[e(-690, "H&h#")] = n[r(573, "Qr8u")](p[e(-131, "W%Tx")](n[r(1077, "v6HE")](W[r(435, "jYUT")](), n[r(927, "e)$x")](W[r(1150, "e)$x")](2, 52), 1)[r(562, ")1pw")]()), 10), p[e(-261, "CCUN")](n[e(-521, "1tmM")](W[e(-40, "v6HE")](), n[r(688, "Z7^p")](W[e(-101, "e)$x")](2, 30), 1)[e(-776, "o0(L")]()), 10)) + "-" + s;
      }, L[M("1tmM", 888)] = function () {
        function t(t, e) {
          return M(t, e - -1209);
        }
        return this[M("*3Yx", 1144)](), [][t("nip#", -163)](a.ek(9, this[t("HaC]", -642)]));
      };
      var I = {};
      I[M(")4TU", 725)] = [], I[tt("3B$z", 782)] = function () {
        this[tt("3@4s", 766)] = {
          IeVFq: function (t) {
            return t();
          }
        }[M(")k1S", 1018)](k);
      }, I[tt(")4TU", 522)] = function () {
        var t = {
          IWvAj: n(1332, "pT5O") + n(1547, "VLMI") + c("Sgdo", 1279) + "ay",
          gyJhu: n(1266, "sA&C") + n(1589, "dDh^") + c("nip#", 945) + c("E]hH", 1175),
          nPyup: n(1688, "VLMI") + n(1795, "H&h#") + n(1239, "Ss$^") + c("YWh!", 1119),
          IrRzz: function (t, e) {
            return t(e);
          },
          Ebdex: function (t, e) {
            return t < e;
          },
          oDRYy: function (t, e) {
            return t << e;
          }
        };
        try {
          var e = Object[c("e)$x", 1334)](p[n(1305, "jYUT")])[n(1438, "$[Rk")](function (t) {
            return p[c("CKk#", 571)][t] && p[n(1265, "H]%0")][t][c("s&qz", 629)];
          });
          this[c("o0(L", 825)][18] = e ? 1 : 0;
        } catch (t) {
          this[c("E]hH", 969)][18] = 0;
        }
        try {
          var r = [t[n(1182, "]A4d")], t[n(1670, "q8OY")], t[n(1216, "HqSY")]][n(1698, ")USz")](function (t) {
            return !!p[t];
          });
          this[c("Ss$^", 909)][19] = r ? 1 : 0;
        } catch (t) {
          this[n(1326, "3B$z")][19] = 0;
        }
        function n(t, e) {
          return M(e, t - 590);
        }
        if (Element[n(1483, "HaC]")][c("sA&C", 564) + "ow"]) try {
          var o = t[c("VLMI", 753)](_, Element[n(1461, "5uLZ")][n(1316, "kViH") + "ow"]);
          this[n(1522, "HqSY")][20] = o ? 0 : 1;
        } catch (t) {
          this[n(1868, "YWh!")][20] = 1;
        } else this[c("dDh^", 1101)][20] = 0;
        for (var i = 0, u = 0; t[n(1263, "Ss$^")](u, this[c("XYd(", 1082)][n(1151, "Z7^p")]); u++) i += t[c(")wmk", 1104)](this[n(1611, "pT5O")][u], u);
        function c(t, e) {
          return M(t, e - 50);
        }
        return [][n(1462, "v6HE")](a.ek(10), a.va(i));
      };
      var N = {};
      N[M("kViH", 1184)] = function () {
        function t(t, e) {
          return tt(t, e - -571);
        }
        function e(t, e) {
          return tt(t, e - -1037);
        }
        var r = p[e("Z7^p", 177)][t(")wmk", 221)],
          n = p[t("*3Yx", 395)][t("1tmM", 585)];
        this[t("nip#", 440)] = a[e("dDh^", -520)](r ? n : "");
      }, N[M("kViH", 1179)] = function () {
        function t(t, e) {
          return tt(t, e - 378);
        }
        if (!this[t("CKk#", 1662)][t("Z7^p", 1597)]()[e("XYd(", 1283)]) return [];
        function e(t, e) {
          return M(t, e - 275);
        }
        return [][e("(aSQ", 1405)](a.ek(11), this[t("YWh!", 1622)]);
      };
      var D = {};
      D[M("CCUN", 927)] = function () {
        function t(t, e) {
          return M(e, t - -1122);
        }
        var e = p[t(-262, "1tmM") + t(-169, "5uLZ") + "nt"];
        this[t(-347, "o0(L")] = e ? "y" : "n";
      }, D[tt("dDh^", 970)] = function () {
        return [][tt("jYUT", 1288)](a.ek(12, this[M("tuHE", 681)]));
      };
      var A = {};
      A[M("HqSY", 789)] = function () {
        function t(t, e) {
          return tt(t, e - -721);
        }
        var e = p[t("dDh^", 513) + M("Ss$^", 638)];
        this[t("kOC&", 143)] = e ? "y" : "n";
      }, A[M("v6HE", 1077)] = function () {
        function t(t, e) {
          return M(t, e - -1004);
        }
        return [][t("sA&C", -486)](a.ek(13, this[t("E]hH", -85)]));
      };
      var G = {};
      G[tt("W%Tx", 1179)] = function () {
        var t = {};
        function e(t, e) {
          return tt(t, e - -1282);
        }
        t[n(-712, "*3Yx")] = function (t, e) {
          return t - e;
        };
        var r = t;
        function n(t, e) {
          return tt(e, t - -1272);
        }
        this[e("]A4d", -260)] = r[n(-182, "$[Rk")](m[e("E]hH", 7)](), f);
      }, G[tt("3@4s", 740)] = function () {
        function t(t, e) {
          return tt(t, e - -757);
        }
        return this[t("HqSY", -2)](), [][t("jYUT", 531)](a.ek(14, this[t("kViH", -274)]));
      };
      var H = {};
      H[M("u2O2", 616)] = function () {
        function t(t, e) {
          return tt(t, e - -967);
        }
        this[t("!o)N", 84)] = v[t("H]%0", -56)];
      }, H[tt(")1pw", 1052)] = function () {
        if (!this[t("n]RX", 347)][t("kOC&", 661)]) return [];
        function t(t, e) {
          return M(t, e - -397);
        }
        return [][t(")USz", 744)](a.ek(15, this[t("bLLK", 895)]));
      };
      var Q = {};
      Q[tt("re)3", 659)] = function () {
        function t(t, e) {
          return tt(t, e - 214);
        }
        this[t("kOC&", 1078)] = {
          xYOim: function (t) {
            return t();
          }
        }[t("u2O2", 1435)](u);
      }, Q[tt("HqSY", 497)] = function () {
        var t = this,
          e = {};
        function r(t, e) {
          return tt(e, t - 531);
        }
        e[r(1193, "o0(L")] = i(-78, "s&qz") + i(-490, "(aSQ"), e[r(1078, ")rfa")] = r(1651, "vlt#") + i(-356, "(aSQ");
        var n = e,
          o = [];
        function i(t, e) {
          return tt(e, t - -1309);
        }
        var u = {};
        return u[n[i(-482, "nip#")]] = 16, u[n[i(-121, "HaC]")]] = 17, Object[r(1774, "nip#")](this[r(1815, "CKk#")])[i(-431, "1tmM")](function (e) {
          function n(t, e) {
            return i(e - 1073, t);
          }
          var c = [][n("$[Rk", 453)](t[r(1705, ")1pw")][e] ? a.ek(u[e], t[n("$[Rk", 323)][e]) : []);
          o[n("1aiA", 830)](c);
        }), o;
      };
      var B = {};
      function z(t, e) {
        var r = ot();
        return (z = function (e, n) {
          var o = r[e -= 161];
          void 0 === z.MfCtuc && (z.tVqQId = function (t, e) {
            var r,
              n,
              o = [],
              i = 0,
              a = "";
            for (t = function (t) {
              for (var e, r, n = "", o = "", i = 0, a = 0; r = t.charAt(a++); ~r && (e = i % 4 ? 64 * e + r : r, i++ % 4) ? n += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
              for (var u = 0, c = n.length; u < c; u++) o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
              return decodeURIComponent(o);
            }(t), n = 0; n < 256; n++) o[n] = n;
            for (n = 0; n < 256; n++) i = (i + o[n] + e.charCodeAt(n % e.length)) % 256, r = o[n], o[n] = o[i], o[i] = r;
            n = 0, i = 0;
            for (var u = 0; u < t.length; u++) i = (i + o[n = (n + 1) % 256]) % 256, r = o[n], o[n] = o[i], o[i] = r, a += String.fromCharCode(t.charCodeAt(u) ^ o[(o[n] + o[i]) % 256]);
            return a;
          }, t = arguments, z.MfCtuc = !0);
          var i = e + r[0],
            a = t[i];
          return a ? o = a : (void 0 === z.NdiAYZ && (z.NdiAYZ = !0), o = z.tVqQId(o, n), t[i] = o), o;
        })(t, e);
      }
      B[tt("n]RX", 1033)] = function () {
        function t(t, e) {
          return tt(t, e - 605);
        }
        var e = {};
        e[i("(aSQ", 619)] = function (t, e) {
          return t > e;
        };
        var r = e,
          n = p[t("Sgdo", 1340)][t("H]%0", 1398)] || "",
          o = n[t("YWh!", 1335)]("?");
        function i(t, e) {
          return M(t, e - -540);
        }
        var a = r[i(")k1S", -28)](o, -1),
          u = n[t("nip#", 1213)];
        this[i("v6HE", 262)] = n[t("u2O2", 1600)](0, a ? o : u);
      }, B[tt("Qr8u", 1061)] = function () {
        if (!this[t("sA&C", 464)][e("q8OY", 1671)]) return [];
        function t(t, e) {
          return M(t, e - -556);
        }
        function e(t, e) {
          return tt(t, e - 418);
        }
        return [][e("H]%0", 1187)](a.ek(18, this[t("VLMI", 341)]));
      };
      var V = {};
      V[M("u2O2", 616)] = function () {
        var t = {
          WvvWX: function (t, e) {
            return t(e);
          },
          vYDEx: e(1719, "HaC]") + "d"
        };
        function e(t, e) {
          return M(e, t - 645);
        }
        this[e(1564, "E]hH")] = t[e(1863, "jYUT")](O, t[tt("H&h#", 988)]);
      }, V[tt("XYd(", 930)] = function () {
        if (!this[t("VLMI", 1082)][t("Sgdo", 1505)]) return [];
        function t(t, e) {
          return tt(t, e - 219);
        }
        return [][t("v6HE", 1057)](a.ek(19, this[t("H&h#", 835)]));
      };
      var U = {};
      U[M(")4TU", 975)] = function () {
        function t(t, e) {
          return tt(t, e - 568);
        }
        var e = {
          bVBDT: function (t, e) {
            return t(e);
          },
          oOTvG: M("tuHE", 811)
        };
        this[t("o0(L", 1309)] = e[t("CCUN", 1102)](O, e[t(")1pw", 1152)]);
      }, U[tt("dDh^", 970)] = function () {
        if (!this[t("]A4d", 1611)][t("pT5O", 1845)]) return [];
        function t(t, e) {
          return tt(t, e - 589);
        }
        return [][t("H]%0", 1358)](a.ek(20, this[t("5uLZ", 1225)]));
      };
      var J = {};
      J[M("sA&C", 1020)] = 0, J[M("n]RX", 1002)] = function () {
        function t(t, e) {
          return M(e, t - -780);
        }
        return [][t(314, ")k1S")](a.ek(21, this[t(79, "Ss$^")]));
      };
      var K = {};
      K[tt("Z7^p", 635)] = function (t) {
        this[M("CKk#", 1318)] = t;
      }, K[tt("(aSQ", 734)] = function () {
        function t(t, e) {
          return tt(t, e - -260);
        }
        return [][t("XYd(", 770)](a.ek(22, this[t("1aiA", 575)]));
      };
      var F = {};
      F[tt("3@4s", 1265)] = function () {
        var t = {
          ktdmn: function (t, e) {
            return t(e);
          },
          tHNMu: e("Ss$^", -342)
        };
        function e(t, e) {
          return M(t, e - -1072);
        }
        this[e(")k1S", 195)] = t[e(")USz", -31)](O, t[e("tuHE", -79)]);
      }, F[M(")rfa", 1005)] = function () {
        function t(t, e) {
          return tt(t, e - 285);
        }
        if (!this[t("Qr8u", 1466)][e(")wmk", 876)]) return [];
        function e(t, e) {
          return M(t, e - 367);
        }
        return [][e("q8OY", 1416)](a.ek(23, this[t("]A4d", 1307)]));
      };
      var Y = {};
      Y[tt("!o)N", 747)] = function () {
        var t = {};
        function e(t, e) {
          return M(e, t - -592);
        }
        t[e(705, "!o)N")] = function (t, e) {
          return t || e;
        }, t[e(672, "kOC&")] = function (t, e) {
          return t > e;
        }, t[P(-216, "3@4s")] = P(22, "HqSY"), t[P(-239, "Qr8u")] = e(65, "nip#"), t[e(207, "q8OY")] = function (t, e) {
          return t !== e;
        }, t[e(385, "jYUT")] = e(-70, "TiEZ"), t[P(4, "H&h#")] = function (t, e) {
          return t || e;
        }, t[e(96, "o0(L")] = function (t, e) {
          return t === e;
        }, t[P(11, "bLLK")] = e(142, ")k1S") + e(547, "XYd(") + e(442, "Ss$^") + e(165, "sA&C"), t[e(396, "tuHE")] = function (t, e) {
          return t || e;
        }, t[e(97, "E]hH")] = function (t, e) {
          return t || e;
        }, t[P(-240, "dDh^")] = function (t, e) {
          return t < e;
        }, t[P(-76, "(aSQ")] = function (t, e) {
          return t << e;
        };
        var n = t,
          o = [],
          i = p[P(82, "W%Tx")],
          a = p[P(117, "q8OY")],
          u = n[e(539, "CKk#")](i, a),
          c = v[P(-145, "VLMI")] && n[P(299, "Sgdo")](v[P(463, "*3Yx")][e(-14, ")k1S")](n[P(315, "sA&C")]), -1),
          s = n[e(88, ")1pw")](u, c);
        o[n[e(614, "E]hH")]](s ? 1 : 0);
        var f = "undefined" == typeof InstallTrigger ? "undefined" : r(InstallTrigger),
          d = n[P(477, "sA&C")](f, n[P(50, "Ss$^")]);
        o[n[e(297, "!o)N")]](d ? 1 : 0);
        var l = p[P(314, "$[Rk")] && p[e(569, "E]hH")][P(103, "Z7^p") + P(309, "u2O2")],
          h = /constructor/i[P(-204, "re)3")](p[P(210, "Ss$^") + "t"]),
          m = n[P(240, "$[Rk")](l, "")[e(329, "s&qz")](),
          W = n[e(603, "HqSY")](m, n[e(-79, "jYUT")]),
          y = n[P(240, "$[Rk")](h, W);
        o[n[P(402, "sA&C")]](y ? 1 : 0);
        var g = p[P(-27, "H&h#")] && p[P(125, ")wmk")][P(460, "1aiA") + "de"],
          w = n[P(-191, "e)$x")](!1, g),
          b = p[e(272, "1tmM")],
          S = n[P(-122, "E]hH")](w, b),
          k = p[e(-49, "kViH")],
          _ = n[P(-85, "E]hH")](S, k);
        o[n[e(322, "1aiA")]](_ ? 1 : 0), o[n[e(223, "H]%0")]](p[e(200, "XYd(")] && (p[P(-74, "n]RX")][e(47, "tuHE")] || p[P(67, "dDh^")][e(590, "tuHE")]) ? 1 : 0);
        var C = o,
          O = 0;
        function P(t, e) {
          return M(e, t - -774);
        }
        for (var x = 0; n[e(390, "pT5O")](x, C[P(48, "1tmM")]); x++) O += n[e(328, "TiEZ")](C[x], x);
        this[P(-254, "re)3")] = O;
      }, Y[tt("3B$z", 1228)] = function () {
        function t(t, e) {
          return M(t, e - -517);
        }
        return [][t("s&qz", 200)](a.ek(26), a.va(this[t("dDh^", 534)]));
      };
      var $ = {};
      $[M("re)3", 905)] = function () {
        var t = {};
        t[i(545, "nip#")] = function (t, e) {
          return t === e;
        }, t[r(1724, "CKk#")] = i(1256, "dDh^");
        var e = t;
        function r(t, e) {
          return tt(e, t - 651);
        }
        var n = p[i(857, ")wmk")][r(1653, "re)3") + r(1457, ")rfa")],
          o = e[r(1520, "Sgdo")](n, e[i(748, "CCUN")]);
        function i(t, e) {
          return tt(e, t - -8);
        }
        return this[i(1075, "q8OY")] = o ? 1 : 0, [][i(555, "o0(L")](a.ek(27), a.va(this[i(978, "sA&C")]));
      };
      var Z = {};
      function X(t) {
        var e = {};
        e[i("5uLZ", 888)] = o(347, "YWh!");
        var r = e,
          n = [];
        function o(t, e) {
          return M(e, t - -768);
        }
        function i(t, e) {
          return tt(t, e - 167);
        }
        n[r[i("Qr8u", 879)]](q), n[r[i("Qr8u", 879)]](I), n[r[i(")1pw", 670)]](N), n[r[i(")rfa", 1011)]](D), n[r[o(-202, "3@4s")]](A), n[r[i("pT5O", 954)]](H), n[r[i("H&h#", 963)]](Q), n[r[i("q8OY", 656)]](B), n[r[o(-1, "HqSY")]](V), n[r[i("dDh^", 810)]](U), n[r[i("1aiA", 723)]](K), n[r[o(180, "W%Tx")]](F), n[r[i("kOC&", 1407)]](j), n[r[i("jYUT", 1079)]](Y), n[r[i("tuHE", 887)]](x), n[r[i("]A4d", 1280)]](Z), n[o(119, ")4TU")](function (e) {
          e[i(")USz", 737)](t);
        });
      }
      function tt(t, e) {
        return z(e - 314, t);
      }
      function et() {
        var t = {};
        function e(t, e) {
          return tt(e, t - -1299);
        }
        t[a(980, "v6HE")] = e(-204, ")1pw"), t[e(-768, "E]hH")] = a(1520, "!o)N"), t[e(-453, "q8OY")] = e(-168, "W%Tx"), t[e(-257, "TiEZ")] = e(-252, "vlt#"), t[a(1602, "e)$x")] = e(-805, "nip#"), t[e(-600, ")wmk")] = e(-24, "nip#"), t[e(-638, "CCUN")] = function (t, e) {
          return t && e;
        };
        var r = t,
          n = r[a(910, "W%Tx")],
          o = r[e(-742, ")USz")];
        g && (n = r[a(1255, "TiEZ")], o = r[e(-424, ")4TU")]), p[e(-72, "q8OY")][e(-116, "*3Yx") + a(1596, ")USz")](n, R, !0), p[e(-586, "H&h#")][a(1435, "H&h#") + e(-483, ")1pw")](o, E, !0), p[a(1117, "H&h#")][a(1310, "1aiA") + a(1678, "*3Yx")](r[a(989, "nip#")], x, !0);
        var i = !g;
        function a(t, e) {
          return tt(e, t - 404);
        }
        var u = p[a(1594, "]A4d")][e(-613, "VLMI") + a(881, "u2O2")](r[a(1105, "HaC]")], T, !0);
        r[a(1603, ")1pw")](i, u);
      }
      function rt() {
        function t(t, e) {
          return M(e, t - -961);
        }
        d = 0, [R, E, x, T][t(251, "Sgdo")](function (e) {
          e[t(-29, "HqSY")] = [];
        });
      }
      function nt() {
        function t(t, e) {
          return M(e, t - -537);
        }
        var e = {};
        function r(t, e) {
          return tt(t, e - -1177);
        }
        e[t(-12, "pT5O")] = function (t, e) {
          return t + e;
        };
        var n = e,
          o = a[t(100, "(aSQ")](n[r("q8OY", -201)](k[r(")1pw", -560)](), it[t(216, ")k1S")]()));
        l = o[t(4, ")k1S")](function (e) {
          return String[t(666, "Qr8u") + "de"](e);
        });
      }
      function ot() {
        var t = ["s8oiW7iQW6m3AW", "etBcLh5g", "W4dcNvbvDNekgq", "WOrmf1xcOa", "cHCwW6FdQCkHrCo7AJ0", "kZjvxq", "ldXpx8o2WOW", "W6hcQdTFFCkPW45Cta", "W5tcK0ftFL0kgq", "W7VdK0hdJCoRca", "WQfIW6fzomkaW5lcS3KaWQBdVq", "W5JcG8kqW5e", "ymkxcCofW4NcUW", "W6xcUYzmD8kP", "WPFdM8oHWPGt", "e8kCW4C", "W783bHi", "W5ZdJZiGEq", "h8ogWOVcJ8o1WRu", "W4RcRSkkW7LFWPVdLYPdWOVcHq4", "dqPAdb4", "cqKC", "nCoxWOtcOmoR", "B8kZwmoEW4e", "caWrW7ldRCo1", "wmkfb8kpWQKyWO7cUxVdVa", "ddajCu0", "aCkHC8kJ", "v8kaf8kJWQKyW4dcRLJdSq", "WRZdJvq", "W5yzWQpdSmkwWQDJW6WQ", "fmojW6VdGmk5hG", "Dmkgn3PB", "WRTfW5pdMWy", "W5FcOYiRmadcNmo8W6lcVq", "WQj6WRH9", "W4hcMZnHFW", "W5tcK1blvq", "WQddQM0EkSoTW7zVsbG0WPy", "nSoTWQ3cGaHUWQy7", "W7/dHwxdHSo/", "vSkBqmoZW4C/W645WR0", "W73cVZPmzSk1", "s8ofW68MW6iT", "lGvpxCoN", "n8ocdqe", "D8kppxDH", "BCk4bh1o", "dsmRWQXmWRe", "WPX9hvtcRG", "tuGxdaJcVH7cQCoqrq", "W5nlv8o7W5qyWRa", "W4eFWQddTSkeWQC", "W7G3hH8EfGmBWO7cQa", "W7a8WRycBmob", "W5irWQ3dVSkR", "nCoVWQ3cNaflWPWGW7W", "mSowhqLUW7T6WRaf", "f8kxW5FdMSoYACkpWPdcTCoS", "W63cLG1IW4XPWOGfsCorb8kMW5G", "W5tdI8oEtG", "eIpcNNDeW6JcR8oKAmoL", "vmkagSkOWRO", "W43cGHmZaW", "i8orfHrUWQbUWRbt", "srFdJcqkWQtcGJpdJ2m", "CmkIA8kueCoqfCo5ch8", "A8knn8oLW70", "cs3cNxy", "WO1bWQzpW70", "WRNdPvy8W7Pnb3pcHqG", "qCkIb8koWRC", "W5Xcumo5W44e", "gtqTWP9KW5JcTNbj", "W70YWRue", "WQ7dL0S6", "WQ7dG1S5WRy", "W7ZdNvVdJW", "WQSsWOfix8kLrCkVW60", "W7xcUYbk", "W5rgsSo/", "vmkrvW", "W4pcSGmmba", "BSkan2G", "ecOjWPHZ", "ltVcKL8", "W4JdM8odqt1u", "rCocWOlcSCo0z8kbWOpcTmo1", "WOunWQP8BW", "ASkbk29ks2/dGmoU", "W5niumo9W5Sy", "q8kvaSoXW60", "W4JcSJirnZVcNmoNW5RcVa", "BGmhdmkql8oVWP4", "daqJBva", "WQ1FW6/cLCkwW4nauvO", "W4VcOIGtmrS", "dImUWQzW", "pmoAWOlcKCo4", "dqinW7JdNSoKs8o7EJ0", "W4VcT8oLCmkC", "gs3cNNbjW7K", "sCosW7OMW6elvG3cUmo9", "DSoUWOmYW4tdNSogWPhcKW", "ASkPCmkw", "ntZcHv/cPspdIuyZ", "BSknEmodW5y", "W54Unriz", "p8ogfWD1WRW", "kSkUW44SWRFdSCojWP3cL8kI", "pSomdbnKWRL4WRzt", "CqKwg8kbnmouWPKCW54", "W7W6WOLVnW", "W6hcQdf/E8kWW5j/xry", "tmkvw8o/W7aHW7uGWQRcMG", "WR7dL8oeWQWA", "tWhcJMi", "amkCW6FdSCoHzmkoWQy", "W6VcJsGAlG", "W6rbsCo7W6K", "cJFcG3S", "mZpcH1VcSsm", "AmkhamoWW6a", "s8oiW7iQW6m3AG", "WQ4cWPdcJaCmBSopFCoX", "ugVdICoVhmkRn8kVWRtcMW", "W6/cSxPfBa", "p8k9W5pdS8oz", "W4xcGZiHfW", "s3hdImoPbSkpkSkQWRlcHW", "WQibWPTHCq", "bCouWPVcHse", "WOXsW67dHsC", "WQWmWPFcHG", "WRX2WRP+W50", "W57dU8okBYW", "WRDtafFcJa", "e8oeW5FcTCkL", "w8kauCosW7O", "WRycWP3cGYu", "W6aXlCkXW7q", "W5HlCCo1W4i", "W6qte8khW4/dV8km", "Df8QswOVFCoUE0qEnW", "WQ8nWPFcNa", "smkBxmo+", "W7RdNuZdHq", "rszmihm", "WOzHWPr5W7S", "ASkEBq", "DandiG", "W7q5WQRdVCkT", "fWnTzmoo", "CI7dKuBdTZBcLf9MWOq", "lrHPwCot", "kqOovv0", "WQXgW6BcKCkrW5jYwvJcPa", "gmk6ACk/", "WQagWPDNtSkItCk1WQu", "W6VcTY07pq", "W5O0iJig", "jCoJWRhcKaXt", "lmkUBSkY", "W4qcWQhdUmkMWRTJW7mzDq", "imkcW4pdGSoC", "wmksdCkSWR5kW5BcVvhdTG", "oJxcLvVcIW", "smkxowvw", "y8kpkN0", "vgxdJSo/eCkrlCk6", "iSoJWRZcHGbcWQy7", "W7WfWPzMh0jc", "WOTOW6RdRs8upW", "twRdLCo4", "WPhdHCoWWOCo", "W4yrWRRdTa", "WQhcHbVcLSoVm8o7FuTh", "ySkJFCkNaSohl8oKkxm", "eHLLkWO", "W7OeWPPTbq", "vqTffg8", "BcGig8kV", "W4lcRaiehW", "oSoaWR8HW4tdImoU", "W785eqyJgWWb", "WR9dW6ZcK8krW55ouGRcTq", "ctBcLx1nW78", "W6WfWPzGfa", "emo7przn", "WRDlW7xdIYGBcmkMW5Hi", "WRRdJvSNWPu0W5ub", "WRNdTvWiW4i", "hZaaWQXE", "ySkhehT1", "W4ddKCoouYrzWQZdNc5N", "xbZcMhK", "WQ7dOeGAW6C", "DSk0FmkqnCofjmo+eq", "W7xdMNRdJCoV", "gsK1", "W5vgrSogW58", "fSopWOdcHCoKWRmmsee", "W7ZcVafiDW", "W5xcU8o+smk3W4rcW4/dHq", "q8oWxa", "W4FcK19m", "z8olW78QW74", "W4BcKXPQva", "uXVcNMTkW7/cQg0", "cSklBSkcWRa", "W7VdUtuOzG", "WP1Ib0hcOW", "W5ZdNs8Mza", "sXVcRN5mW7/cQwq", "WQ5MWQvW", "umo9W5qMW6a", "kde9WQD8", "W6ufd8kwW4pdVa", "WOVdS8oAWQip", "c8oCW6NdJSk5", "WQXDW4OZrq4Ov8o/W7PunmkU", "W7ZdK0ZdM8oNgCoawG", "dCoGW47cSCkX", "ASoRWQe8W68", "jCoHWQ7cM8oj", "fSonW6VdImksfuhcUHTw", "pmonW7hdHG", "W7CYWQWa", "W7JcH8ksW5NdMSoUWOVdISoPiW", "nCo4W4VcQSkq", "dbTiWPy", "qM3dKmo4eCkQ", "W4JcSSoHr8kK", "equMWQ9J", "nSoBWQlcICow", "mGPXgcb2sSoiAa", "tCkaz8oYW4e", "jdzytW", "WRRdG0WZ", "WQKnWORcHX4kq8okBmo+", "BCkoaCogW57cILX9uIO", "WQRdI1u3WQSLW5OyuW", "W5pcU8oMrCk8W4bZW5BdKJy", "W5eCWQFdTSka", "aIm7WPG", "W4yJb8kbW6W", "W5RcRXfowq", "W7tdMuhdICo+fa", "W4hcGgDjDNe", "W4ytWOvmfa", "W7mmWPfKbv4", "bmkbW5VdSCo8ECkzWRhcOa", "zG0qda", "gmooW4RcGSkO", "WRBdG0SDWO8/W6ShtmoB", "cYXGoaC", "vmkag8kgWROtWOFcUv8", "hSouhZza", "W4RcI8kxW5NdM8oNWQm", "W5lcTmoHvq", "W5BcK11eDhK", "W4rou8o7W4KyWONdSSku", "hmoxWRFcISoV", "w8kkW4xcK8klW71yiqxcVG", "B8kbcmo2W44", "hmonW7hdHG", "bmkgW4FdRq", "WQPIWRbGW4aIWQRcGXVdPa", "CmkZFmkmeCoq", "pdbtu8o7WPq", "FX5jl34x", "W6G+gXu6", "WOT8a1VcTa", "p8omgGf1WR14WQ5/yW", "B8kMD8kfaCodjSo1fG", "lYFcLv/cSr3dJKCJWPa", "W6ldTSoAsZK", "z8kmdCot", "ASkdemog", "B8oOWPSKW7ldJSoiWOVcJq", "WOfIW7BdJZOF", "W4/cS8oLrmkJW5fxW43dHW", "jGb9hZnR", "lJ3cLG", "WPtdUSoDWQyEW4y", "WQ5MbcKSpbGd", "w8oqW74HW6GX", "W4C1WQ8exG", "lH5vdHO", "WQXaafFcP8kAWRddSSk4BG", "W7u8WQOKBmowW70", "xSonW78QW6i", "WQicWORcIq", "WQ5BgLxcPCkg", "W7NcUZPpFSk4W7jAtbK", "WR1xW7BcKq", "ASknb8osW4hcRfnQ", "W6tcTdboDmk0W5Ljtq", "W53dHgJdJ8oD", "nW59gd1Y", "W5mAWR1aia", "WQxcLCoo", "hIpcHhi", "ld9ix8o8", "WRHaW6pcMCkjW6biwf7cUG", "zqmx", "faKpBwy", "W7W1WQWRvW", "xSoMFmkWEG", "W7BcK8kvW5FdVa", "W5GxWRRdTmkT", "DmkNa8oUW4K", "qSkwgx14", "wCkRkSoMW6O", "W7C8WRSuymoqW7VcKa", "vvBdJmoOgq", "W74YWQG", "WQKiWOXErSkPrmk1", "WQGcWOJcGqWix8oC", "WPVdVSoDWPegW4/dQsLIWR0", "fIFcNNrCW6u", "f8oxW7FcU8kE", "W5u+oCkfW6O", "W4dcNv5HBMalamkGtW", "eJdcLxu", "W6hcJZeznq", "W4ZcGmkh", "W7O9WRev", "WRTHWQjH", "W6ZdGvO", "W74YWQaTAmoBW7lcKeK", "WR0gWOXazq", "eCoiq8kXW78MWO7cRepdVa", "W6RcK8oHq8k6", "W4/dVq0DxW", "W47cQcG3kH3cJCo8W5lcUa", "uXhcK21kW74", "W5zitmoBW5SpWOa", "W4ZcQLzxFG", "WR97WOj9W54dWQhcJq", "fHxcTvVcPa", "W77cOSopqmkh", "W4pcPJiv", "jmoAWP3cTZK", "WPreh3/cRq", "WQ1tW7hcHa", "W6BcOmkoW7FdMW", "fSoXkc57", "W57dJhRdH8oH", "gsCHWObf", "wCo+lmoJWOxcLb7dUmkiqa", "WP3dPv45W6Tw", "hcmUWQy", "W7O9WRWeDCo6W7m", "g8onW6BdJ8kOkq", "W7eiWOTQb1m7rmo6W6q", "WRRdU3WVW5q", "W4K6araA", "pJqBWOfY", "a8orWORcNmoUWQKbCua", "W7vZjudcL8kqWQO", "kIf1vCo6WP0", "iWfhE8og", "W4VdI2xdGCoB", "bGecyG", "W6hdHSoQrX4", "laxcPhjp", "W5ibbdiK", "gIm5WQW", "BCkVxCk3oq", "ksrabIa", "xCokW6GNW6qLrW", "WQH7WR9QW40E", "bSolldzk", "C8k1DSkafCoalCoP", "zmkMgvfc", "WRyrWPVcVaietSoQBmo+", "WR/dGvqdWPO", "t8ksymoZW4O", "eYZcMwC", "Cmk3DCklaa", "amkUDmkZWO7cMZRdJmkCwa", "W6RdMrmtra", "s8olW7uSW6W3", "gSoikYjJ", "W5xcOeneDG", "mqz+gqfRxCoaAG", "DCkIoCkfWRy", "p8oqlCojW6tcMeHW", "W6JdVCo3Asa", "j8omkHrZWR15WQC", "qCokW7i7", "WRVdSuW+", "AmkHcMPO", "osvJE8oc", "W6ldPGmEta", "zCkYD8kbamollSo+rq", "xCoWwCkW", "wJLrkwC", "W6xdKbqxwY4", "WPJdOgafW60", "cJGvC1G", "WPTpW4VcLa", "cHXnwmo+", "aCkaW5hdT8osASkfWQ/cSq", "WQC1WPdcIrS", "WQ/dSLS", "gSodW6hdNG", "mSk7W4pdQmoJ", "xmkmcSk+", "EMnxzSo1WROqWO8", "hmowWPhcJCoZWPuDAelcJq", "W4bfxq", "qSoXBSkYuCkKWPC", "W6edh8kaW5ldVCkBkW", "y8ooFSkGtq", "dI0/WRK", "iZzpw8oJWPa", "v3tdKmoLaa", "A8kqxSkbbW", "yCoOWOa0W7BdNG", "W7iiWODpffH8u8o9", "WOmFd8ovW7uAWRJdJSkP", "WQSvW41/quOQw8kMW7W", "D8otrSkNuSkMWRXahN0", "xCkaf8kR", "C8kbdwHDrM7dKa", "kXNcG1hcJW", "yCoRWOC0W7ZdR8orWPNcJCk/", "ssuTWO9UW4/cVd0oW7a", "WRH7WRXS", "WO3dNeigW60", "pYzsva", "gIvZASos", "WP5KW6RdJsSz", "oCkEBCk9WRu", "WRpdTvy4W7Pm", "W6WHWPVdSCkC", "W6FdLa4zwsnZW5XDW44", "fXGoWOTA", "g8k/DSk+WPy", "W6VdMv3dMmoVdSo6r2XU", "W5BcL0nmENCb", "AmkWfmkGWOG", "vHRcLh4", "zSoMWPO2", "zSoIWOG7W7BdNSoc", "a8ocWOBcG8op", "Amo9t8kHta", "W7zZWRSoACoqW4JdHfW", "W63dMHKfqIm9W4S", "WQ5qf2NcPCkwWOZdI8kPzq", "W7NcMSkJW5hdRG", "tSkrw8o3W5S6", "WQ8SWQDoBW", "sSkzoePU", "W7ihcCks", "WOZdSmoGWRuyW4FdVHO", "WOb3WQS", "smkjFSkupG", "tXKHhCkZ", "iGbG", "eG1mzuFdULVdLmkRvG", "WOz2WRnAW5K", "bHZcJ3xcLa", "W4K6WPjmkq", "v8kofa", "WQaMWRD7wG", "WRbyW6VcHa", "WQDXWR9UW5Gc", "i8oLWPhcLdC", "WQfeWQnBW6S", "mSovgaLTWOn+WQrczq", "W6HvxmoCW6S", "mdpcGLhcJq", "c8kNAmk4WO/cMW", "r8ktW5pdM8k2W646tvlcHJu0", "zWabamkbkmo0WRKv", "pCkbW6BdV8oP", "n8kplq", "f8kBW4BdQSo+Aa", "W5tcKfa", "w8o3k8kCWQ3cIc/dQ8k0", "hmkKW6ddKmo+", "W77dKbGuxs8LW5Pa", "tmolW7G6W6aMxra", "oInfxCoJWP05WPXzuG", "m8oEAc8yheldU8o3uCoudq", "WPGohSoLWRbmW4JcV8oeW7W", "yCkyymorW6i", "iqbWct96uSoz", "BCkodCocW4lcVwu", "g8odW6VdHmkSaG", "DCkllNbotgu", "EtBcIvjR", "fCkxW5ddGmoLAmkoWRxcICoQ", "W4/dKCoUyae", "W6ijcmkqW47dGCkDlYVdVG", "hs0JWQ5FWQW", "zqLHjMi", "WQKgWPTk", "WQCxWORcIqGbEmorECo7", "yCkBmh9BrM/dMCkGgG", "sSokW7ycW58", "WOevD8oWW7i9WP3dSq", "xCo7t8kBqSkUWPa", "W6u2WRyfySoh", "W7tcRZfCqa", "WQZdU8oNWO8H", "W4G8WROlAmowW6hdHhiN", "W7pcOXi6dG", "gCoGW5NcUW", "utdcKxX1", "dmkDv8k2W6CbW5y", "d8kxE8krWO4", "r2VdKSoVfCkS", "cca0WRTo", "W7WnWPXCefj0DSoLW68", "WRFdSvy7W6jblwVdGae", "dmkUBSk2", "WQOgWPdcJX8b", "W6CiWONdTmkY", "xCkoamk/WRiyWO7cUq", "WQPdW6dcG8krW4viuK0", "wXxcIwS", "WPVdSmoDWQilW5O", "WQ5RW43dQqm", "d8oKW53cTSkEW6BdKW", "W6C8WOSvF8oCW7VcGW", "W5mEoSksW7e", "r8o/WQK2W4a", "W6RdRhFdTSo7", "WQjAkq", "fc3cHW", "y8kdhmoRW4NcP1PQuG", "qSkQaCoRW6S", "edBcICk9jSkPbSk/WRdcHa", "WQagWPRcVYC", "gqypW73dRCoIqW", "WRFdJfW3WOaEW50", "W5ddKCoyrsfpWRBdIrf8", "W7VdKeBdI8oKcmo2", "iraRz38", "W4bgxCo1W7q", "WOLOW7VdNsmsoCkt", "cJOOWQPN", "hsmHWQe", "A8klmhTBrW", "gYWUWQjAWR0", "W4VcU8oRsSkE", "WQ91WQvO", "W73dKLK", "zYtcSvjN", "BSktoSkGWQy", "bcmXWPHQW4VcQLbnW7i", "W6lcHLjOCq", "oSonebq", "wmowW7q7W6i3sHtcUG", "mCk7kSkErCoECCoSugy", "W7tcRNq", "Ar0Ih8kS", "mCkHW6xdI8oP", "W7BcNKbdtW", "W6WCWP1WburYsCoY", "dqyfCG", "i8oJWOZcStW", "W43dKmoeuG", "caSnW77dOCoK", "trhcK25BW6tcONe", "bWCczuNdQG", "jXmuW57dTa", "rcC8vaC", "b8kkW6pdSCoD", "WOTYW7BdIZOEomkjWOOs", "W4JdQLZdMCoT", "W5/cU8o8qa", "hs4KWQHqWQWY", "W4dcK0Db", "W6RdMHqttJi", "W782WRygECoD", "ymoWxSk3uCkoWOXKcvu", "W5/cTCoRvmk9W4byW5tdSJq", "c8oCW6tdKmkJ", "W68EoSkrW5m", "WOn+nLVcQq", "rc4qnCkX", "W7CwfmkSW5pdU8kn", "WRnzW6VcNG", "W7aaWQ4nsW", "WQ/dVe04W6DkgW", "W7pdKG4rzW", "fmoVW4tcRG", "WQumWPdcIWOD", "WPKwWPLFBG", "EYLhaNS", "asClxN8", "W5OrWRHIjG", "Cbrii2mA", "WRPAW6VcLCklW4n4", "sSoYzSk1BG", "FX5ij3yg", "WPddRCowWQC", "W7VdKbWvxtq2W40", "imoacW9TWRHdWQ9g", "W6lcRtvhFSkYW4a", "FmkzjmkRWOG", "W5OMWPnNga", "w8kLf8kFWO0", "uSokW6GaW4a", "WODEWR9NW4C", "W5FcV8oMrSkKW40", "CH4lgCklmSo5WOau", "iSoTWQVcKG", "Et5bhea", "WQmnWOG", "WOZdPfKRW6S", "W5/cISkwW5/dLmoU", "cmoEW6RdK8kIaLFcPru", "nmoZkmowqSktlSosihHlFa", "W43dIN3dUmop", "WPtdSmoqWQaEW4FdVXm", "WPhdRmoNWRGAW4VdGWHRWR0", "WRrxW7RcVmkaW5Lgsei", "ds0GWQG", "W6ade8khW6ldS8kDlW", "DmkAo3jkxq", "kZXcsCo6WP0eWO0", "WOrOW7y", "W5v4wmoU", "CCklFN9as2xdQSkGtW", "E8owt8kSFa", "s3tdJG", "qCo6wq", "nCoRW6JcJCk7", "sCo+x8kL", "wbrqlxqxrSkkW7lcGG", "jqntBSoq", "gtqNWR9IW4hcQLnyW7a", "W53cQmoNtmktW41xW5ldTdC", "tWvFkhi/BmkCW7lcHG", "CZFcP0vx", "DczHj2q", "W5/cMsDVrW", "WPjehfFcQSkgWOZdTW", "W4ddN8ozrW", "WRxdVSohWQK", "CSo1WOeJW7JdNSoEWOZcHG", "W4FcNv1dEMa", "WPe0WPlcMXi", "bSonWOhcJCoNWRqwzee", "W7WBWPPIbvnEs8oWW60", "uSkzwmobW6m", "tWhcJMjWW7NcS2RcMe8", "WPRdQh8+W5K", "ySkhcSoaW5JcOq", "W4ZdMhJdL8oY", "WProdNNcOq", "W5JcJSkfW7xdGq", "WPbDW5dcSSkh", "W6e2WR0p", "W4xcVGnsAG", "WR5yhvxcOq", "WQSiWP1UsSkVqG", "Bbbfl1K", "kCoedqfj", "hmoJhmk4bSk2W5nVvgW", "W7FdJeRdNmoR", "AHHcixHDzmkiWQ/dNa", "W5FcTsKakGFcGmo+W5G", "WQRdJwSMWOO4W5us", "fr9mx8oXWPq1WQLzsW", "A8oxxmkPra", "emksW4ddPa", "f8ocWPhcIq", "WPZdSmoqWRqhW4VdVGK", "WQL6WRXeW74", "eYZcLhzqW4lcJa", "W7xdMvZdNCoRg8olFMbO", "WOfvW77dRX8", "zCkfFSkdfG", "WQLxW6hcM8kR", "w8o3WOuEW74", "W5mZoWmc", "W6ijlSkhW5tdU8khkq", "WP0MWOHHrG", "nY3cLhzAW6pcG8oOFW", "WPisWONcRYq", "EH5uaxyryq", "W7/cNY5esa", "W57dMCozrWe", "BCkodCocW4lcVwq", "aSkrW43dS8oJ", "WP11W7FdNcedlSkxW48", "sCosW7OMW6euwGdcQ8o9", "jdpcLvS", "W4NcQdzPqW", "dmodW5BdK8k/h0dcSG", "W44vWQddSSkrWRS", "s8kAuCo1W5CDW6C", "WRldV00SW6Tjb2VdGa", "W7uje8kqW4FdPG", "uCkmW77cH8kwge/cOrLj", "l8oIWRBcHW", "hSotW5e", "W51grSosW58cWO/dQ8km", "W67cJSkxW5pdRq", "hsKrWP95W4xcOwC", "aaKyzW", "W5jswSo5W58y", "thBdMCoQ", "ASoMWOaZW7VdJ8oIWORcHSkL", "gSkQASk7WOpcNrO", "p8kPsCkLWRy", "oCk0W5NdI8o9", "W7ddLvZdMSoLdSox", "W4xdMSojyZ9zWQZdNc9H", "W5GMWP0erG", "lJpcH1rN", "lSk9BSkVWQG", "smkRiSkeWPm", "W7ZdHH8cBIe2W5fg", "abDuhqu", "mZhcK1xcRYBdS0WN", "yxZdU8oTiW", "W7NcImohDSkdW6bK", "AcKXkSkI", "arbsEmoc", "W4bgtmoTW58LWOBdQW", "BmoZWO8JW77dHCojWRNcLCkU", "W7mNWQ/dO8kb", "WRKiWRXFwCkLrmkM", "WPtdH8oBWQSf", "fCkaW5RdO8oYoSowWRhcO8oG", "WRTFW6ZcLa", "zmkndCoj", "W63dKKVdI8oSfCoas2u", "iSo5WPRcIYW", "DbbpnNSBz8kD", "WQmBWO7cHXKDwa", "gWiCW7RdGG", "WP94W5FcGmkM", "W6RcKa1JWQOGW74evCoa", "W6ZdQhan", "bstcHftcTW7dHLC2", "W4ixcSk0W6K", "g8odW6RdJmkKeW", "WQmrWQRcGqym", "pcnnvCoJ", "tqmacmkx", "W4SEWQFdOq", "WQqjWOzF", "kIveuSoJ", "iGjEdqG", "BtTNcLS", "ESkneCoeW4tcPfjOxW", "ASk3ESkWeComjCo1f38", "cIftu8oL", "W5uyWO5Kna", "Ebbsjq", "zColzSkiCCkMWOz+aN4", "WOKFcSkMW58JWR3dJmkUW6S", "aJzsxCk3WRCmWP94rW", "W5DcyCo4W4O", "W70Th8kyW6O", "WO7cSSk3W5hdOCoFWR8", "W4/cKSkiW5NdJq", "imoJWQ3cTGXeWQa", "ymkuB8komG", "W6iUm8k+W5m", "uSkyqmo3W4y8W7i", "nSoJWQ3cHW", "xmkpfW", "WPRdSCoEWOW4", "W7FcPt4+dq", "W53cKCkkW5BdMmk8W7ddLCo7kq", "B8kOESkdamollSo+", "W6PdWPpcMf8ibCknkmkX", "gmkUECk8WQW", "gsRcKx1pW6JcJSogySo+", "W4ZcG8khW5VdTW", "WQ/dSvS0W4a", "W4SyWOHepG", "xGlcNgnsW57cOMRcMu4", "bWyrW7BdUmoP", "g8oKW4ldQSkG", "W5tdJ23dRCoB", "CLSIsgqUu8oVx0Kzcq", "WRfxW6ZcLmkjW5jKsK/cVa", "c8oJWRVcLH9jWQe1W74", "ktauWQDh", "WQupWPFcJquDCW", "jXCxWO9Y", "tmk1imoKW60", "W5O2WO4NFa", "ctlcNhPC", "WQLvafC", "W7SiWOTI", "t8k4j8kpWQC", "WPtdK3e6W7K", "oJDtBSop", "Bmk1BCkhea", "EmoLy8kuyG", "tmkBqG", "WPTeW6VcKCklWPDXxv/cVG", "w8oiW7iSW6G", "W6JdH8oGDta", "W7ZcM2rNEa", "dWilW7a", "n8omfcf0WQb4WQ1xEq", "y8oWx8kTuSkJWObYe3K", "W4dcOJiXkrBcLmoRW5pcOa", "WQ9FW7hcMCkhW55nvv7cQW", "WRmnWPRcJq0arCoCFa", "zmo7smktrW", "FJvseuu"];
        return (ot = function () {
          return t;
        })();
      }
      function it() {
        var t,
          e = {
            hWTUm: function (t) {
              return t();
            },
            euewR: o("$[Rk", 1085),
            TqvtE: function (t, e, r) {
              return t(e, r);
            },
            VSmOX: function (t, e) {
              return t < e;
            },
            Hyfpo: function (t, e) {
              return t === e;
            },
            MuEpW: function (t, e) {
              return t > e;
            },
            aUvmi: function (t, e) {
              return t <= e;
            },
            yxGbu: function (t, e) {
              return t - e;
            },
            FNUpC: function (t, e) {
              return t << e;
            },
            PbxJH: function (t, e) {
              return t << e;
            },
            SwJoQ: function (t, e) {
              return t + e;
            },
            mAXPq: o(")1pw", 652),
            qppEi: function (t, e) {
              return t + e;
            }
          };
        if (!p) return "";
        var r = e[o("TiEZ", 680)],
          n = (t = [])[o("tuHE", 873)].apply(t, [R[r](), E[r](), x[r](), T[r](), j[r](), q[r](), L[r](), I[r](), N[r](), D[r](), A[r](), G[r](), H[r]()].concat(function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
              return r;
            }
            return Array.from(t);
          }(Q[r]()), [B[r](), V[r](), U[r](), J[r](), K[r](), F[r](), Y[r](), $[r](), Z[r]()]));
        function o(t, e) {
          return tt(t, e - -18);
        }
        e[o(")4TU", 766)](setTimeout, function () {
          e[o("VLMI", 656)](rt);
        }, 0);
        for (var u = n[d("(aSQ", 713)][d("e)$x", 532)](2)[d("n]RX", 266)](""), c = 0; e[d("pT5O", 291)](u[d("1tmM", 423)], 16); c += 1) u[o("u2O2", 544)]("0");
        u = u[o("kViH", 1121)]("");
        var s = [];
        e[d("3B$z", 870)](n[o("TiEZ", 1030)], 0) ? s[o(")USz", 1108)](0, 0) : e[d("o0(L", 789)](n[d("o0(L", 295)], 0) && e[o("Sgdo", 1120)](n[d(")USz", 146)], e[o("tuHE", 756)](e[o("re)3", 913)](1, 8), 1)) ? s[d("VLMI", 907)](0, n[o("pT5O", 1238)]) : e[d("bLLK", 286)](n[d("Qr8u", 523)], e[d("1tmM", 325)](e[o("HaC]", 946)](1, 8), 1)) && s[o("Z7^p", 1104)](p[o("v6HE", 996)](u[d("re)3", 349)](0, 8), 2), p[d("(aSQ", 553)](u[o("pT5O", 736)](8, 16), 2)), n = [][d("$[Rk", 324)]([2], [1, 0, 0], s, n);
        var f = i[o("5uLZ", 619)](n);
        function d(t, e) {
          return M(t, e - -399);
        }
        var h = [][d("HqSY", 662)][o("$[Rk", 719)](f, function (t) {
          return String[o("3@4s", 811) + "de"](t);
        });
        return e[d("q8OY", 189)](e[o(")4TU", 640)], a[o("$[Rk", 721)](e[d(")rfa", 837)](h[o("CKk#", 907)](""), l[d("re)3", 413)]("")), a[o("(aSQ", 881)]));
      }
      function at() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        function e(t, e) {
          return tt(t, e - -1057);
        }
        function n(t, e) {
          return M(e, t - -1310);
        }
        var o = {
          Ixccd: function (t, e) {
            return t !== e;
          },
          FUwFQ: e("q8OY", -131),
          VspjB: e("Ss$^", -201) + e("H&h#", -353),
          HeIpL: function (t, e) {
            return t + e;
          },
          duExA: function (t, e) {
            return t * e;
          },
          vWPBR: function (t, e) {
            return t || e;
          },
          lKSzr: function (t, e, r) {
            return t(e, r);
          },
          FBtXU: function (t) {
            return t();
          }
        };
        if (o[e("sA&C", -48)](void 0 === p ? "undefined" : r(p), o[n(-201, "o0(L")])) for (var i = o[e("$[Rk", 165)][e("*3Yx", -486)]("|"), a = 0; ;) {
          switch (i[a++]) {
            case "0":
              var u = o[e("jYUT", -31)](d, f);
              continue;
            case "1":
              var s = t[n(-159, "bLLK")];
              continue;
            case "2":
              var f = o[e("CCUN", -130)](-3, -218760729941);
              continue;
            case "3":
              this[n(-114, "re)3") + e("nip#", -505)](o[n(-130, "tuHE")](s, u));
              continue;
            case "4":
              o[e("jYUT", -496)](X, c, p);
              continue;
            case "5":
              c = m[n(-552, ")USz")]();
              continue;
            case "6":
              o[e("Z7^p", -372)](nt);
              continue;
            case "7":
              var d = o[e("]A4d", -184)](695905265254, o[e("HaC]", 31)](472578152857, -1));
              continue;
            case "8":
              o[e("bLLK", -281)](et);
              continue;
          }
          break;
        }
      }
      Z[M(")1pw", 1123)] = function () {
        function t(t, e) {
          return M(e, t - -1050);
        }
        function e(t, e) {
          return M(t, e - -95);
        }
        var r = {
          dlaEx: function (t, e) {
            return t === e;
          },
          lXhjo: t(52, "H&h#"),
          PEzrJ: function (t, e) {
            return t === e;
          },
          XiWGc: e("*3Yx", 504),
          IdcWs: e("u2O2", 421),
          udrRX: function (t, e) {
            return t(e);
          },
          eaxXe: e("!o)N", 1002),
          txegY: function (t, e) {
            return t(e);
          },
          rLOXI: e("1tmM", 797) + e("e)$x", 559) + e("Z7^p", 1010) + t(-49, "kViH") + '2"'
        };
        try {
          var n = p[e("u2O2", 615)][e("pT5O", 780) + e("H&h#", 901)](r[e("Ss$^", 943)]),
            o = function (o) {
              function i(t, r) {
                return e(t, r - 113);
              }
              function a(e, r) {
                return t(e - 436, r);
              }
              try {
                var u = n[i(")wmk", 562) + "e"](o);
                return r[a(268, "dDh^")](u, r[a(342, ")wmk")]) ? 1 : r[a(671, "tuHE")](u, r[a(417, "v6HE")]) ? 2 : MediaSource[a(232, ")wmk") + i("*3Yx", 1043)](o) ? 3 : 0;
              } catch (t) {
                return 0;
              }
            };
          this[t(-400, "H&h#")] = {
            mp3: r[t(-26, "nip#")](o, r[e("(aSQ", 1145)]),
            mp4: r[t(-280, "$[Rk")](o, r[e("H]%0", 1155)])
          };
        } catch (t) {
          var i = {};
          i[e(")1pw", 1094)] = 0, i[e("kOC&", 833)] = 0, this[e("VLMI", 802)] = i;
        }
      }, Z[tt("E]hH", 665)] = function () {
        function t(t, e) {
          return tt(t, e - 325);
        }
        return [][t("v6HE", 1163)](a.ek(28), a.va(this[t("HqSY", 1223)][t("Sgdo", 974)]), a.va(this[t("CCUN", 1128)][tt("H&h#", 1087)]));
      }, at[tt("VLMI", 1257)][tt("re)3", 1162) + tt("v6HE", 1254)] = function (t) {
        f = m[tt("H&h#", 657)](), s = t;
      }, at[tt("u2O2", 748)][tt("Qr8u", 940)] = h, at[M("s&qz", 842)][tt("CKk#", 1246)] = h, at[M("!o)N", 1104)][tt("q8OY", 868) + "k"] = function () {
        return J[M("pT5O", 1021)]++, {
          GpXZc: function (t) {
            return t();
          }
        }[tt(")rfa", 591)](it);
      }, at[M("bLLK", 836)][tt("e)$x", 745) + M("H]%0", 620)] = function () {
        var t = {
          IzcPx: function (t, e) {
            return t(e);
          },
          ZBjGb: function (t) {
            return t();
          }
        };
        return new Promise(function (e) {
          function r(t, e) {
            return z(t - -10, e);
          }
          J[r(960, "CKk#")]++, t[z(872, "1tmM")](e, t[r(213, "dDh^")](it));
        });
      }, w && w[M("q8OY", 776)] && w[M("kViH", 839)][tt("3@4s", 915)] && (at[tt("VLMI", 1257)][M("TiEZ", 829)] = function (t) {
        var e = {};
        function r(t, e) {
          return tt(e, t - -1014);
        }
        e[o(-637, "kViH")] = o(-660, "H]%0"), e[o(-553, "vlt#")] = o(-502, "1aiA"), e[r(-193, "Ss$^")] = r(271, "5uLZ"), e[o(19, "TiEZ")] = r(-69, "CKk#"), e[o(-667, ")1pw")] = r(-124, ")rfa");
        var n = e;
        function o(t, e) {
          return tt(e, t - -1233);
        }
        switch (t.type) {
          case n[o(-183, "nip#")]:
            x[o(-748, "TiEZ") + "t"](t);
            break;
          case n[r(-297, "Sgdo")]:
          case n[r(143, "Qr8u")]:
            R[r(-36, "re)3") + "t"](t);
            break;
          case n[o(-326, ")k1S")]:
          case n[r(-39, "s&qz")]:
            E[o(-103, "kViH") + "t"](t);
        }
      });
      var ut = new at();
      window._at = ut;
      t[tt("kViH", 929)] = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = {};
        function r(t, e) {
          return M(e, t - -502);
        }
        e[r(284, "VLMI")] = r(281, "*3Yx") + "4", e[r(158, "n]RX")] = function (t, e) {
          return t && e;
        }, e[a("vlt#", 492)] = function (t, e) {
          return t && e;
        };
        var n = e,
          o = n[r(70, "!o)N")][r(470, "nip#")]("|"),
          i = 0;
        function a(t, e) {
          return tt(t, e - -537);
        }
        for (; ;) {
          switch (o[i++]) {
            case "0":
              var u = ut[r(209, "nip#") + r(469, "kViH")](t[r(164, "q8OY")]);
              continue;
            case "1":
              var c = n[a("H&h#", 97)](s, f);
              // console.log("case 1 c = ", c);
              continue;
            case "2":
              var s = t[r(604, "*3Yx")];
              // console.log("case 2 s = ", s);
              continue;
            case "3":
              var f = p;
              // console.log("case 3 f = ", f);
              continue;
            case "4":
              // console.log("case 4 return : ", ut);
              return ut;
            case "5":
              n[a("VLMI", 367)](c, u);
              continue;
          }
          break;
        }
      };
    }).call(this, n(1)(t));
  },
  5: function (t, e, r) {
    "use strict";

    var n = r(6),
      o = r(0),
      i = r(10),
      a = r(2),
      u = r(11),
      c = Object.prototype.toString,
      s = 0,
      f = -1,
      d = 0,
      l = 8;
    function h(t) {
      if (!(this instanceof h)) return new h(t);
      this.options = o.assign({
        level: f,
        method: l,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: d,
        to: ""
      }, t || {});
      var e = this.options;
      e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
      var r = n.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
      if (r !== s) throw new Error(a[r]);
      if (e.header && n.deflateSetHeader(this.strm, e.header), e.dictionary) {
        var p;
        if (p = "string" == typeof e.dictionary ? i.string2buf(e.dictionary) : "[object ArrayBuffer]" === c.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (r = n.deflateSetDictionary(this.strm, p)) !== s) throw new Error(a[r]);
        this._dict_set = !0;
      }
    }
    function p(t, e) {
      var r = new h(e);
      if (r.push(t, !0), r.err) throw r.msg || a[r.err];
      return r.result;
    }
    h.prototype.push = function (t, e) {
      var r,
        a,
        u = this.strm,
        f = this.options.chunkSize;
      if (this.ended) return !1;
      a = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? u.input = i.string2buf(t) : "[object ArrayBuffer]" === c.call(t) ? u.input = new Uint8Array(t) : u.input = t, u.next_in = 0, u.avail_in = u.input.length;
      do {
        if (0 === u.avail_out && (u.output = new o.Buf8(f), u.next_out = 0, u.avail_out = f), 1 !== (r = n.deflate(u, a)) && r !== s) return this.onEnd(r), this.ended = !0, !1;
        0 !== u.avail_out && (0 !== u.avail_in || 4 !== a && 2 !== a) || ("string" === this.options.to ? this.onData(i.buf2binstring(o.shrinkBuf(u.output, u.next_out))) : this.onData(o.shrinkBuf(u.output, u.next_out)));
      } while ((u.avail_in > 0 || 0 === u.avail_out) && 1 !== r);
      return 4 === a ? (r = n.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === s) : 2 !== a || (this.onEnd(s), u.avail_out = 0, !0);
    }, h.prototype.onData = function (t) {
      this.chunks.push(t);
    }, h.prototype.onEnd = function (t) {
      t === s && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
    }, e.Deflate = h, e.deflate = p, e.deflateRaw = function (t, e) {
      return (e = e || {}).raw = !0, p(t, e);
    }, e.gzip = function (t, e) {
      return (e = e || {}).gzip = !0, p(t, e);
    };
  },
  6: function (t, e, r) {
    "use strict";

    var n,
      o = r(0),
      i = r(7),
      a = r(8),
      u = r(9),
      c = r(2),
      s = 0,
      f = 4,
      d = 0,
      l = -2,
      h = -1,
      p = 1,
      v = 4,
      m = 2,
      W = 8,
      y = 9,
      g = 286,
      w = 30,
      b = 19,
      S = 2 * g + 1,
      k = 15,
      _ = 3,
      C = 258,
      O = C + _ + 1,
      P = 42,
      x = 103,
      R = 113,
      E = 666,
      M = 1,
      T = 2,
      j = 3,
      q = 4;
    function L(t, e) {
      return t.msg = c[e], e;
    }
    function I(t) {
      return (t << 1) - (t > 4 ? 9 : 0);
    }
    function N(t) {
      for (var e = t.length; --e >= 0;) t[e] = 0;
    }
    function D(t) {
      var e = t.state,
        r = e.pending;
      r > t.avail_out && (r = t.avail_out), 0 !== r && (o.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out), t.next_out += r, e.pending_out += r, t.total_out += r, t.avail_out -= r, e.pending -= r, 0 === e.pending && (e.pending_out = 0));
    }
    function A(t, e) {
      i._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, D(t.strm);
    }
    function G(t, e) {
      t.pending_buf[t.pending++] = e;
    }
    function H(t, e) {
      t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
    }
    function Q(t, e) {
      var r,
        n,
        o = t.max_chain_length,
        i = t.strstart,
        a = t.prev_length,
        u = t.nice_match,
        c = t.strstart > t.w_size - O ? t.strstart - (t.w_size - O) : 0,
        s = t.window,
        f = t.w_mask,
        d = t.prev,
        l = t.strstart + C,
        h = s[i + a - 1],
        p = s[i + a];
      t.prev_length >= t.good_match && (o >>= 2), u > t.lookahead && (u = t.lookahead);
      do {
        if (s[(r = e) + a] === p && s[r + a - 1] === h && s[r] === s[i] && s[++r] === s[i + 1]) {
          i += 2, r++;
          do { } while (s[++i] === s[++r] && s[++i] === s[++r] && s[++i] === s[++r] && s[++i] === s[++r] && s[++i] === s[++r] && s[++i] === s[++r] && s[++i] === s[++r] && s[++i] === s[++r] && i < l);
          if (n = C - (l - i), i = l - C, n > a) {
            if (t.match_start = e, a = n, n >= u) break;
            h = s[i + a - 1], p = s[i + a];
          }
        }
      } while ((e = d[e & f]) > c && 0 != --o);
      return a <= t.lookahead ? a : t.lookahead;
    }
    function B(t) {
      var e,
        r,
        n,
        i,
        c,
        s,
        f,
        d,
        l,
        h,
        p = t.w_size;
      do {
        if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= p + (p - O)) {
          o.arraySet(t.window, t.window, p, p, 0), t.match_start -= p, t.strstart -= p, t.block_start -= p, e = r = t.hash_size;
          do {
            n = t.head[--e], t.head[e] = n >= p ? n - p : 0;
          } while (--r);
          e = r = p;
          do {
            n = t.prev[--e], t.prev[e] = n >= p ? n - p : 0;
          } while (--r);
          i += p;
        }
        if (0 === t.strm.avail_in) break;
        if (s = t.strm, f = t.window, d = t.strstart + t.lookahead, l = i, h = void 0, (h = s.avail_in) > l && (h = l), r = 0 === h ? 0 : (s.avail_in -= h, o.arraySet(f, s.input, s.next_in, h, d), 1 === s.state.wrap ? s.adler = a(s.adler, f, h, d) : 2 === s.state.wrap && (s.adler = u(s.adler, f, h, d)), s.next_in += h, s.total_in += h, h), t.lookahead += r, t.lookahead + t.insert >= _) for (c = t.strstart - t.insert, t.ins_h = t.window[c], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[c + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[c + _ - 1]) & t.hash_mask, t.prev[c & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = c, c++, t.insert--, !(t.lookahead + t.insert < _)););
      } while (t.lookahead < O && 0 !== t.strm.avail_in);
    }
    function z(t, e) {
      for (var r, n; ;) {
        if (t.lookahead < O) {
          if (B(t), t.lookahead < O && e === s) return M;
          if (0 === t.lookahead) break;
        }
        if (r = 0, t.lookahead >= _ && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + _ - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== r && t.strstart - r <= t.w_size - O && (t.match_length = Q(t, r)), t.match_length >= _) {
          if (n = i._tr_tally(t, t.strstart - t.match_start, t.match_length - _), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= _) {
            t.match_length--;
            do {
              t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + _ - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
            } while (0 != --t.match_length);
            t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
        } else n = i._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
        if (n && (A(t, !1), 0 === t.strm.avail_out)) return M;
      }
      return t.insert = t.strstart < _ - 1 ? t.strstart : _ - 1, e === f ? (A(t, !0), 0 === t.strm.avail_out ? j : q) : t.last_lit && (A(t, !1), 0 === t.strm.avail_out) ? M : T;
    }
    function V(t, e) {
      for (var r, n, o; ;) {
        if (t.lookahead < O) {
          if (B(t), t.lookahead < O && e === s) return M;
          if (0 === t.lookahead) break;
        }
        if (r = 0, t.lookahead >= _ && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + _ - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = _ - 1, 0 !== r && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - O && (t.match_length = Q(t, r), t.match_length <= 5 && (t.strategy === p || t.match_length === _ && t.strstart - t.match_start > 4096) && (t.match_length = _ - 1)), t.prev_length >= _ && t.match_length <= t.prev_length) {
          o = t.strstart + t.lookahead - _, n = i._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - _), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
          do {
            ++t.strstart <= o && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + _ - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
          } while (0 != --t.prev_length);
          if (t.match_available = 0, t.match_length = _ - 1, t.strstart++, n && (A(t, !1), 0 === t.strm.avail_out)) return M;
        } else if (t.match_available) {
          if ((n = i._tr_tally(t, 0, t.window[t.strstart - 1])) && A(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return M;
        } else t.match_available = 1, t.strstart++, t.lookahead--;
      }
      return t.match_available && (n = i._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < _ - 1 ? t.strstart : _ - 1, e === f ? (A(t, !0), 0 === t.strm.avail_out ? j : q) : t.last_lit && (A(t, !1), 0 === t.strm.avail_out) ? M : T;
    }
    function U(t, e, r, n, o) {
      this.good_length = t, this.max_lazy = e, this.nice_length = r, this.max_chain = n, this.func = o;
    }
    function J(t) {
      var e;
      return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = m, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? P : R, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = s, i._tr_init(e), d) : L(t, l);
    }
    function K(t) {
      var e,
        r = J(t);
      return r === d && ((e = t.state).window_size = 2 * e.w_size, N(e.head), e.max_lazy_match = n[e.level].max_lazy, e.good_match = n[e.level].good_length, e.nice_match = n[e.level].nice_length, e.max_chain_length = n[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = _ - 1, e.match_available = 0, e.ins_h = 0), r;
    }
    function F(t, e, r, n, i, a) {
      if (!t) return l;
      var u = 1;
      if (e === h && (e = 6), n < 0 ? (u = 0, n = -n) : n > 15 && (u = 2, n -= 16), i < 1 || i > y || r !== W || n < 8 || n > 15 || e < 0 || e > 9 || a < 0 || a > v) return L(t, l);
      8 === n && (n = 9);
      var c = new function () {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = W, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * S), this.dyn_dtree = new o.Buf16(2 * (2 * w + 1)), this.bl_tree = new o.Buf16(2 * (2 * b + 1)), N(this.dyn_ltree), N(this.dyn_dtree), N(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(k + 1), this.heap = new o.Buf16(2 * g + 1), N(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * g + 1), N(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }();
      return t.state = c, c.strm = t, c.wrap = u, c.gzhead = null, c.w_bits = n, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = i + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + _ - 1) / _), c.window = new o.Buf8(2 * c.w_size), c.head = new o.Buf16(c.hash_size), c.prev = new o.Buf16(c.w_size), c.lit_bufsize = 1 << i + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new o.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = e, c.strategy = a, c.method = r, K(t);
    }
    n = [new U(0, 0, 0, 0, function (t, e) {
      var r = 65535;
      for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ;) {
        if (t.lookahead <= 1) {
          if (B(t), 0 === t.lookahead && e === s) return M;
          if (0 === t.lookahead) break;
        }
        t.strstart += t.lookahead, t.lookahead = 0;
        var n = t.block_start + r;
        if ((0 === t.strstart || t.strstart >= n) && (t.lookahead = t.strstart - n, t.strstart = n, A(t, !1), 0 === t.strm.avail_out)) return M;
        if (t.strstart - t.block_start >= t.w_size - O && (A(t, !1), 0 === t.strm.avail_out)) return M;
      }
      return t.insert = 0, e === f ? (A(t, !0), 0 === t.strm.avail_out ? j : q) : (t.strstart > t.block_start && (A(t, !1), t.strm.avail_out), M);
    }), new U(4, 4, 8, 4, z), new U(4, 5, 16, 8, z), new U(4, 6, 32, 32, z), new U(4, 4, 16, 16, V), new U(8, 16, 32, 32, V), new U(8, 16, 128, 128, V), new U(8, 32, 128, 256, V), new U(32, 128, 258, 1024, V), new U(32, 258, 258, 4096, V)], e.deflateInit = function (t, e) {
      return F(t, e, W, 15, 8, 0);
    }, e.deflateInit2 = F, e.deflateReset = K, e.deflateResetKeep = J, e.deflateSetHeader = function (t, e) {
      return t && t.state ? 2 !== t.state.wrap ? l : (t.state.gzhead = e, d) : l;
    }, e.deflate = function (t, e) {
      var r, o, a, c;
      if (!t || !t.state || e > 5 || e < 0) return t ? L(t, l) : l;
      if (o = t.state, !t.output || !t.input && 0 !== t.avail_in || o.status === E && e !== f) return L(t, 0 === t.avail_out ? -5 : l);
      if (o.strm = t, r = o.last_flush, o.last_flush = e, o.status === P) if (2 === o.wrap) t.adler = 0, G(o, 31), G(o, 139), G(o, 8), o.gzhead ? (G(o, (o.gzhead.text ? 1 : 0) + (o.gzhead.hcrc ? 2 : 0) + (o.gzhead.extra ? 4 : 0) + (o.gzhead.name ? 8 : 0) + (o.gzhead.comment ? 16 : 0)), G(o, 255 & o.gzhead.time), G(o, o.gzhead.time >> 8 & 255), G(o, o.gzhead.time >> 16 & 255), G(o, o.gzhead.time >> 24 & 255), G(o, 9 === o.level ? 2 : o.strategy >= 2 || o.level < 2 ? 4 : 0), G(o, 255 & o.gzhead.os), o.gzhead.extra && o.gzhead.extra.length && (G(o, 255 & o.gzhead.extra.length), G(o, o.gzhead.extra.length >> 8 & 255)), o.gzhead.hcrc && (t.adler = u(t.adler, o.pending_buf, o.pending, 0)), o.gzindex = 0, o.status = 69) : (G(o, 0), G(o, 0), G(o, 0), G(o, 0), G(o, 0), G(o, 9 === o.level ? 2 : o.strategy >= 2 || o.level < 2 ? 4 : 0), G(o, 3), o.status = R); else {
        var h = W + (o.w_bits - 8 << 4) << 8;
        h |= (o.strategy >= 2 || o.level < 2 ? 0 : o.level < 6 ? 1 : 6 === o.level ? 2 : 3) << 6, 0 !== o.strstart && (h |= 32), h += 31 - h % 31, o.status = R, H(o, h), 0 !== o.strstart && (H(o, t.adler >>> 16), H(o, 65535 & t.adler)), t.adler = 1;
      }
      if (69 === o.status) if (o.gzhead.extra) {
        for (a = o.pending; o.gzindex < (65535 & o.gzhead.extra.length) && (o.pending !== o.pending_buf_size || (o.gzhead.hcrc && o.pending > a && (t.adler = u(t.adler, o.pending_buf, o.pending - a, a)), D(t), a = o.pending, o.pending !== o.pending_buf_size));) G(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
        o.gzhead.hcrc && o.pending > a && (t.adler = u(t.adler, o.pending_buf, o.pending - a, a)), o.gzindex === o.gzhead.extra.length && (o.gzindex = 0, o.status = 73);
      } else o.status = 73;
      if (73 === o.status) if (o.gzhead.name) {
        a = o.pending;
        do {
          if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > a && (t.adler = u(t.adler, o.pending_buf, o.pending - a, a)), D(t), a = o.pending, o.pending === o.pending_buf_size)) {
            c = 1;
            break;
          }
          c = o.gzindex < o.gzhead.name.length ? 255 & o.gzhead.name.charCodeAt(o.gzindex++) : 0, G(o, c);
        } while (0 !== c);
        o.gzhead.hcrc && o.pending > a && (t.adler = u(t.adler, o.pending_buf, o.pending - a, a)), 0 === c && (o.gzindex = 0, o.status = 91);
      } else o.status = 91;
      if (91 === o.status) if (o.gzhead.comment) {
        a = o.pending;
        do {
          if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > a && (t.adler = u(t.adler, o.pending_buf, o.pending - a, a)), D(t), a = o.pending, o.pending === o.pending_buf_size)) {
            c = 1;
            break;
          }
          c = o.gzindex < o.gzhead.comment.length ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++) : 0, G(o, c);
        } while (0 !== c);
        o.gzhead.hcrc && o.pending > a && (t.adler = u(t.adler, o.pending_buf, o.pending - a, a)), 0 === c && (o.status = x);
      } else o.status = x;
      if (o.status === x && (o.gzhead.hcrc ? (o.pending + 2 > o.pending_buf_size && D(t), o.pending + 2 <= o.pending_buf_size && (G(o, 255 & t.adler), G(o, t.adler >> 8 & 255), t.adler = 0, o.status = R)) : o.status = R), 0 !== o.pending) {
        if (D(t), 0 === t.avail_out) return o.last_flush = -1, d;
      } else if (0 === t.avail_in && I(e) <= I(r) && e !== f) return L(t, -5);
      if (o.status === E && 0 !== t.avail_in) return L(t, -5);
      if (0 !== t.avail_in || 0 !== o.lookahead || e !== s && o.status !== E) {
        var p = 2 === o.strategy ? function (t, e) {
          for (var r; ;) {
            if (0 === t.lookahead && (B(t), 0 === t.lookahead)) {
              if (e === s) return M;
              break;
            }
            if (t.match_length = 0, r = i._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, r && (A(t, !1), 0 === t.strm.avail_out)) return M;
          }
          return t.insert = 0, e === f ? (A(t, !0), 0 === t.strm.avail_out ? j : q) : t.last_lit && (A(t, !1), 0 === t.strm.avail_out) ? M : T;
        }(o, e) : 3 === o.strategy ? function (t, e) {
          for (var r, n, o, a, u = t.window; ;) {
            if (t.lookahead <= C) {
              if (B(t), t.lookahead <= C && e === s) return M;
              if (0 === t.lookahead) break;
            }
            if (t.match_length = 0, t.lookahead >= _ && t.strstart > 0 && (n = u[o = t.strstart - 1]) === u[++o] && n === u[++o] && n === u[++o]) {
              a = t.strstart + C;
              do { } while (n === u[++o] && n === u[++o] && n === u[++o] && n === u[++o] && n === u[++o] && n === u[++o] && n === u[++o] && n === u[++o] && o < a);
              t.match_length = C - (a - o), t.match_length > t.lookahead && (t.match_length = t.lookahead);
            }
            if (t.match_length >= _ ? (r = i._tr_tally(t, 1, t.match_length - _), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (r = i._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), r && (A(t, !1), 0 === t.strm.avail_out)) return M;
          }
          return t.insert = 0, e === f ? (A(t, !0), 0 === t.strm.avail_out ? j : q) : t.last_lit && (A(t, !1), 0 === t.strm.avail_out) ? M : T;
        }(o, e) : n[o.level].func(o, e);
        if (p !== j && p !== q || (o.status = E), p === M || p === j) return 0 === t.avail_out && (o.last_flush = -1), d;
        if (p === T && (1 === e ? i._tr_align(o) : 5 !== e && (i._tr_stored_block(o, 0, 0, !1), 3 === e && (N(o.head), 0 === o.lookahead && (o.strstart = 0, o.block_start = 0, o.insert = 0))), D(t), 0 === t.avail_out)) return o.last_flush = -1, d;
      }
      return e !== f ? d : o.wrap <= 0 ? 1 : (2 === o.wrap ? (G(o, 255 & t.adler), G(o, t.adler >> 8 & 255), G(o, t.adler >> 16 & 255), G(o, t.adler >> 24 & 255), G(o, 255 & t.total_in), G(o, t.total_in >> 8 & 255), G(o, t.total_in >> 16 & 255), G(o, t.total_in >> 24 & 255)) : (H(o, t.adler >>> 16), H(o, 65535 & t.adler)), D(t), o.wrap > 0 && (o.wrap = -o.wrap), 0 !== o.pending ? d : 1);
    }, e.deflateEnd = function (t) {
      var e;
      return t && t.state ? (e = t.state.status) !== P && 69 !== e && 73 !== e && 91 !== e && e !== x && e !== R && e !== E ? L(t, l) : (t.state = null, e === R ? L(t, -3) : d) : l;
    }, e.deflateSetDictionary = function (t, e) {
      var r,
        n,
        i,
        u,
        c,
        s,
        f,
        h,
        p = e.length;
      if (!t || !t.state) return l;
      if (2 === (u = (r = t.state).wrap) || 1 === u && r.status !== P || r.lookahead) return l;
      for (1 === u && (t.adler = a(t.adler, e, p, 0)), r.wrap = 0, p >= r.w_size && (0 === u && (N(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), h = new o.Buf8(r.w_size), o.arraySet(h, e, p - r.w_size, r.w_size, 0), e = h, p = r.w_size), c = t.avail_in, s = t.next_in, f = t.input, t.avail_in = p, t.next_in = 0, t.input = e, B(r); r.lookahead >= _;) {
        n = r.strstart, i = r.lookahead - (_ - 1);
        do {
          r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + _ - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++;
        } while (--i);
        r.strstart = n, r.lookahead = _ - 1, B(r);
      }
      return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = _ - 1, r.match_available = 0, t.next_in = s, t.input = f, t.avail_in = c, r.wrap = u, d;
    }, e.deflateInfo = "pako deflate (from Nodeca project)";
  },
  7: function (t, e, r) {
    "use strict";

    var n = r(0);
    function o(t) {
      for (var e = t.length; --e >= 0;) t[e] = 0;
    }
    var i = 0,
      a = 256,
      u = a + 1 + 29,
      c = 30,
      s = 19,
      f = 2 * u + 1,
      d = 15,
      l = 16,
      h = 256,
      p = 16,
      v = 17,
      m = 18,
      W = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
      y = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
      w = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      b = new Array(2 * (u + 2));
    o(b);
    var S = new Array(2 * c);
    o(S);
    var k = new Array(512);
    o(k);
    var _ = new Array(256);
    o(_);
    var C = new Array(29);
    o(C);
    var O,
      P,
      x,
      R = new Array(c);
    function E(t, e, r, n, o) {
      this.static_tree = t, this.extra_bits = e, this.extra_base = r, this.elems = n, this.max_length = o, this.has_stree = t && t.length;
    }
    function M(t, e) {
      this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
    }
    function T(t) {
      return t < 256 ? k[t] : k[256 + (t >>> 7)];
    }
    function j(t, e) {
      t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
    }
    function q(t, e, r) {
      t.bi_valid > l - r ? (t.bi_buf |= e << t.bi_valid & 65535, j(t, t.bi_buf), t.bi_buf = e >> l - t.bi_valid, t.bi_valid += r - l) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += r);
    }
    function L(t, e, r) {
      q(t, r[2 * e], r[2 * e + 1]);
    }
    function I(t, e) {
      var r = 0;
      do {
        r |= 1 & t, t >>>= 1, r <<= 1;
      } while (--e > 0);
      return r >>> 1;
    }
    function N(t, e, r) {
      var n,
        o,
        i = new Array(d + 1),
        a = 0;
      for (n = 1; n <= d; n++) i[n] = a = a + r[n - 1] << 1;
      for (o = 0; o <= e; o++) {
        var u = t[2 * o + 1];
        0 !== u && (t[2 * o] = I(i[u]++, u));
      }
    }
    function D(t) {
      var e;
      for (e = 0; e < u; e++) t.dyn_ltree[2 * e] = 0;
      for (e = 0; e < c; e++) t.dyn_dtree[2 * e] = 0;
      for (e = 0; e < s; e++) t.bl_tree[2 * e] = 0;
      t.dyn_ltree[2 * h] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
    }
    function A(t) {
      t.bi_valid > 8 ? j(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
    }
    function G(t, e, r, n) {
      var o = 2 * e,
        i = 2 * r;
      return t[o] < t[i] || t[o] === t[i] && n[e] <= n[r];
    }
    function H(t, e, r) {
      for (var n = t.heap[r], o = r << 1; o <= t.heap_len && (o < t.heap_len && G(e, t.heap[o + 1], t.heap[o], t.depth) && o++, !G(e, n, t.heap[o], t.depth));) t.heap[r] = t.heap[o], r = o, o <<= 1;
      t.heap[r] = n;
    }
    function Q(t, e, r) {
      var n,
        o,
        i,
        u,
        c = 0;
      if (0 !== t.last_lit) do {
        n = t.pending_buf[t.d_buf + 2 * c] << 8 | t.pending_buf[t.d_buf + 2 * c + 1], o = t.pending_buf[t.l_buf + c], c++, 0 === n ? L(t, o, e) : (L(t, (i = _[o]) + a + 1, e), 0 !== (u = W[i]) && q(t, o -= C[i], u), L(t, i = T(--n), r), 0 !== (u = y[i]) && q(t, n -= R[i], u));
      } while (c < t.last_lit);
      L(t, h, e);
    }
    function B(t, e) {
      var r,
        n,
        o,
        i = e.dyn_tree,
        a = e.stat_desc.static_tree,
        u = e.stat_desc.has_stree,
        c = e.stat_desc.elems,
        s = -1;
      for (t.heap_len = 0, t.heap_max = f, r = 0; r < c; r++) 0 !== i[2 * r] ? (t.heap[++t.heap_len] = s = r, t.depth[r] = 0) : i[2 * r + 1] = 0;
      for (; t.heap_len < 2;) i[2 * (o = t.heap[++t.heap_len] = s < 2 ? ++s : 0)] = 1, t.depth[o] = 0, t.opt_len--, u && (t.static_len -= a[2 * o + 1]);
      for (e.max_code = s, r = t.heap_len >> 1; r >= 1; r--) H(t, i, r);
      o = c;
      do {
        r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], H(t, i, 1), n = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = n, i[2 * o] = i[2 * r] + i[2 * n], t.depth[o] = (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1, i[2 * r + 1] = i[2 * n + 1] = o, t.heap[1] = o++, H(t, i, 1);
      } while (t.heap_len >= 2);
      t.heap[--t.heap_max] = t.heap[1], function (t, e) {
        var r,
          n,
          o,
          i,
          a,
          u,
          c = e.dyn_tree,
          s = e.max_code,
          l = e.stat_desc.static_tree,
          h = e.stat_desc.has_stree,
          p = e.stat_desc.extra_bits,
          v = e.stat_desc.extra_base,
          m = e.stat_desc.max_length,
          W = 0;
        for (i = 0; i <= d; i++) t.bl_count[i] = 0;
        for (c[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < f; r++) (i = c[2 * c[2 * (n = t.heap[r]) + 1] + 1] + 1) > m && (i = m, W++), c[2 * n + 1] = i, n > s || (t.bl_count[i]++, a = 0, n >= v && (a = p[n - v]), u = c[2 * n], t.opt_len += u * (i + a), h && (t.static_len += u * (l[2 * n + 1] + a)));
        if (0 !== W) {
          do {
            for (i = m - 1; 0 === t.bl_count[i];) i--;
            t.bl_count[i]--, t.bl_count[i + 1] += 2, t.bl_count[m]--, W -= 2;
          } while (W > 0);
          for (i = m; 0 !== i; i--) for (n = t.bl_count[i]; 0 !== n;) (o = t.heap[--r]) > s || (c[2 * o + 1] !== i && (t.opt_len += (i - c[2 * o + 1]) * c[2 * o], c[2 * o + 1] = i), n--);
        }
      }(t, e), N(i, s, t.bl_count);
    }
    function z(t, e, r) {
      var n,
        o,
        i = -1,
        a = e[1],
        u = 0,
        c = 7,
        s = 4;
      for (0 === a && (c = 138, s = 3), e[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++) o = a, a = e[2 * (n + 1) + 1], ++u < c && o === a || (u < s ? t.bl_tree[2 * o] += u : 0 !== o ? (o !== i && t.bl_tree[2 * o]++, t.bl_tree[2 * p]++) : u <= 10 ? t.bl_tree[2 * v]++ : t.bl_tree[2 * m]++, u = 0, i = o, 0 === a ? (c = 138, s = 3) : o === a ? (c = 6, s = 3) : (c = 7, s = 4));
    }
    function V(t, e, r) {
      var n,
        o,
        i = -1,
        a = e[1],
        u = 0,
        c = 7,
        s = 4;
      for (0 === a && (c = 138, s = 3), n = 0; n <= r; n++) if (o = a, a = e[2 * (n + 1) + 1], !(++u < c && o === a)) {
        if (u < s) do {
          L(t, o, t.bl_tree);
        } while (0 != --u); else 0 !== o ? (o !== i && (L(t, o, t.bl_tree), u--), L(t, p, t.bl_tree), q(t, u - 3, 2)) : u <= 10 ? (L(t, v, t.bl_tree), q(t, u - 3, 3)) : (L(t, m, t.bl_tree), q(t, u - 11, 7));
        u = 0, i = o, 0 === a ? (c = 138, s = 3) : o === a ? (c = 6, s = 3) : (c = 7, s = 4);
      }
    }
    o(R);
    var U = !1;
    function J(t, e, r, o) {
      q(t, (i << 1) + (o ? 1 : 0), 3), function (t, e, r, o) {
        A(t), j(t, r), j(t, ~r), n.arraySet(t.pending_buf, t.window, e, r, t.pending), t.pending += r;
      }(t, e, r);
    }
    e._tr_init = function (t) {
      U || (function () {
        var t,
          e,
          r,
          n,
          o,
          i = new Array(d + 1);
        for (r = 0, n = 0; n < 28; n++) for (C[n] = r, t = 0; t < 1 << W[n]; t++) _[r++] = n;
        for (_[r - 1] = n, o = 0, n = 0; n < 16; n++) for (R[n] = o, t = 0; t < 1 << y[n]; t++) k[o++] = n;
        for (o >>= 7; n < c; n++) for (R[n] = o << 7, t = 0; t < 1 << y[n] - 7; t++) k[256 + o++] = n;
        for (e = 0; e <= d; e++) i[e] = 0;
        for (t = 0; t <= 143;) b[2 * t + 1] = 8, t++, i[8]++;
        for (; t <= 255;) b[2 * t + 1] = 9, t++, i[9]++;
        for (; t <= 279;) b[2 * t + 1] = 7, t++, i[7]++;
        for (; t <= 287;) b[2 * t + 1] = 8, t++, i[8]++;
        for (N(b, u + 1, i), t = 0; t < c; t++) S[2 * t + 1] = 5, S[2 * t] = I(t, 5);
        O = new E(b, W, a + 1, u, d), P = new E(S, y, 0, c, d), x = new E(new Array(0), g, 0, s, 7);
      }(), U = !0), t.l_desc = new M(t.dyn_ltree, O), t.d_desc = new M(t.dyn_dtree, P), t.bl_desc = new M(t.bl_tree, x), t.bi_buf = 0, t.bi_valid = 0, D(t);
    }, e._tr_stored_block = J, e._tr_flush_block = function (t, e, r, n) {
      var o,
        i,
        u = 0;
      t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function (t) {
        var e,
          r = 4093624447;
        for (e = 0; e <= 31; e++, r >>>= 1) if (1 & r && 0 !== t.dyn_ltree[2 * e]) return 0;
        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
        for (e = 32; e < a; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
        return 0;
      }(t)), B(t, t.l_desc), B(t, t.d_desc), u = function (t) {
        var e;
        for (z(t, t.dyn_ltree, t.l_desc.max_code), z(t, t.dyn_dtree, t.d_desc.max_code), B(t, t.bl_desc), e = s - 1; e >= 3 && 0 === t.bl_tree[2 * w[e] + 1]; e--);
        return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
      }(t), o = t.opt_len + 3 + 7 >>> 3, (i = t.static_len + 3 + 7 >>> 3) <= o && (o = i)) : o = i = r + 5, r + 4 <= o && -1 !== e ? J(t, e, r, n) : 4 === t.strategy || i === o ? (q(t, 2 + (n ? 1 : 0), 3), Q(t, b, S)) : (q(t, 4 + (n ? 1 : 0), 3), function (t, e, r, n) {
        var o;
        for (q(t, e - 257, 5), q(t, r - 1, 5), q(t, n - 4, 4), o = 0; o < n; o++) q(t, t.bl_tree[2 * w[o] + 1], 3);
        V(t, t.dyn_ltree, e - 1), V(t, t.dyn_dtree, r - 1);
      }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, u + 1), Q(t, t.dyn_ltree, t.dyn_dtree)), D(t), n && A(t);
    }, e._tr_tally = function (t, e, r) {
      return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & r, t.last_lit++, 0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[2 * (_[r] + a + 1)]++, t.dyn_dtree[2 * T(e)]++), t.last_lit === t.lit_bufsize - 1;
    }, e._tr_align = function (t) {
      q(t, 2, 3), L(t, h, b), function (t) {
        16 === t.bi_valid ? (j(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
      }(t);
    };
  },
  8: function (t, e, r) {
    "use strict";

    t.exports = function (t, e, r, n) {
      for (var o = 65535 & t | 0, i = t >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
        r -= a = r > 2e3 ? 2e3 : r;
        do {
          i = i + (o = o + e[n++] | 0) | 0;
        } while (--a);
        o %= 65521, i %= 65521;
      }
      return o | i << 16 | 0;
    };
  },
  9: function (t, e, r) {
    "use strict";

    var n = function () {
      for (var t, e = [], r = 0; r < 256; r++) {
        t = r;
        for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
        e[r] = t;
      }
      return e;
    }();
    t.exports = function (t, e, r, o) {
      var i = n,
        a = o + r;
      t ^= -1;
      for (var u = o; u < a; u++) t = t >>> 8 ^ i[255 & (t ^ e[u])];
      return -1 ^ t;
    };
  },
  10: function (t, e, r) {
    "use strict";

    var n = r(0),
      o = !0,
      i = !0;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (t) {
      o = !1;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
      i = !1;
    }
    for (var a = new n.Buf8(256), u = 0; u < 256; u++) a[u] = u >= 252 ? 6 : u >= 248 ? 5 : u >= 240 ? 4 : u >= 224 ? 3 : u >= 192 ? 2 : 1;
    function c(t, e) {
      if (e < 65534 && (t.subarray && i || !t.subarray && o)) return String.fromCharCode.apply(null, n.shrinkBuf(t, e));
      for (var r = "", a = 0; a < e; a++) r += String.fromCharCode(t[a]);
      return r;
    }
    a[254] = a[254] = 1, e.string2buf = function (t) {
      var e,
        r,
        o,
        i,
        a,
        u = t.length,
        c = 0;
      for (i = 0; i < u; i++) 55296 == (64512 & (r = t.charCodeAt(i))) && i + 1 < u && 56320 == (64512 & (o = t.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (o - 56320), i++), c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
      for (e = new n.Buf8(c), a = 0, i = 0; a < c; i++) 55296 == (64512 & (r = t.charCodeAt(i))) && i + 1 < u && 56320 == (64512 & (o = t.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (o - 56320), i++), r < 128 ? e[a++] = r : r < 2048 ? (e[a++] = 192 | r >>> 6, e[a++] = 128 | 63 & r) : r < 65536 ? (e[a++] = 224 | r >>> 12, e[a++] = 128 | r >>> 6 & 63, e[a++] = 128 | 63 & r) : (e[a++] = 240 | r >>> 18, e[a++] = 128 | r >>> 12 & 63, e[a++] = 128 | r >>> 6 & 63, e[a++] = 128 | 63 & r);
      return e;
    }, e.buf2binstring = function (t) {
      return c(t, t.length);
    }, e.binstring2buf = function (t) {
      for (var e = new n.Buf8(t.length), r = 0, o = e.length; r < o; r++) e[r] = t.charCodeAt(r);
      return e;
    }, e.buf2string = function (t, e) {
      var r,
        n,
        o,
        i,
        u = e || t.length,
        s = new Array(2 * u);
      for (n = 0, r = 0; r < u;) if ((o = t[r++]) < 128) s[n++] = o; else if ((i = a[o]) > 4) s[n++] = 65533, r += i - 1; else {
        for (o &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && r < u;) o = o << 6 | 63 & t[r++], i--;
        i > 1 ? s[n++] = 65533 : o < 65536 ? s[n++] = o : (o -= 65536, s[n++] = 55296 | o >> 10 & 1023, s[n++] = 56320 | 1023 & o);
      }
      return c(s, n);
    }, e.utf8border = function (t, e) {
      var r;
      for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; r >= 0 && 128 == (192 & t[r]);) r--;
      return r < 0 ? e : 0 === r ? e : r + a[t[r]] > e ? r : e;
    };
  },
  11: function (t, e, r) {
    "use strict";

    t.exports = function () {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    };
  },
  12: function (t, e, r) {
    "use strict";

    t.exports = function (t, e, r) {
      if ((e -= (t += "").length) <= 0) return t;
      if (r || 0 === r || (r = " "), " " == (r += "") && e < 10) return n[e] + t;
      for (var o = ""; 1 & e && (o += r), e >>= 1;) r += r;
      return o + t;
    };
    var n = ["", " ", "  ", "   ", "    ", "     ", "      ", "       ", "        ", "         "];
  },
  13: function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.crc32 = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      t = function (t) {
        for (var e = "", r = 0; r < t.length; r++) {
          var n = t.charCodeAt(r);
          n < 128 ? e += String.fromCharCode(n) : n < 2048 ? e += String.fromCharCode(192 | n >> 6) + String.fromCharCode(128 | 63 & n) : n < 55296 || n >= 57344 ? e += String.fromCharCode(224 | n >> 12) + String.fromCharCode(128 | n >> 6 & 63) + String.fromCharCode(128 | 63 & n) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++r)), e += String.fromCharCode(240 | n >> 18) + String.fromCharCode(128 | n >> 12 & 63) + String.fromCharCode(128 | n >> 6 & 63) + String.fromCharCode(128 | 63 & n));
        }
        return e;
      }(t), e ^= -1;
      for (var r = 0; r < t.length; r++) e = e >>> 8 ^ n[255 & (e ^ t.charCodeAt(r))];
      return (-1 ^ e) >>> 0;
    };
    var n = function () {
      for (var t = [], e = void 0, r = 0; r < 256; r++) {
        e = r;
        for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
        t[r] = e;
      }
      return t;
    }();
  },
  14: function (t, e, r) {
    "use strict";

    (function (t) {
      var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      };
      !function (t, e) {
        var r = h();
        function n(t, e) {
          return l(t - 264, e);
        }
        function o(t, e) {
          return l(t - 936, e);
        }
        for (; ;) try {
          if (-parseInt(n(832, "TuWk")) / 1 + parseInt(o(1512, "*1SU")) / 2 + -parseInt(n(780, "XatH")) / 3 * (parseInt(o(1491, "LH1&")) / 4) + -parseInt(o(1539, "rI(0")) / 5 + -parseInt(o(1542, "kth*")) / 6 + parseInt(n(781, "9Qi7")) / 7 + parseInt(o(1450, "gQ*H")) / 8 === 583035) break;
          r.push(r.shift());
        } catch (t) {
          r.push(r.shift());
        }
      }();
      var n = r(3),
        o = r(15),
        i = r(16),
        a = void 0;
      ("undefined" == typeof window ? "undefined" : e(window)) !== c(648, "Y&ba") && (a = window);
      var u = {};
      function c(t, e) {
        return l(t - 41, e);
      }
      function s(t, e) {
        return l(e - 850, t);
      }
      function f() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date[s("40Nw", 1413)](),
          e = {
            ZRcQO: function (t, e) {
              return t(e);
            },
            OQeAo: function (t) {
              return t();
            },
            Ulsci: function (t, e) {
              return t % e;
            },
            lsPmk: function (t, e, r, n) {
              return t(e, r, n);
            }
          },
          r = e[d("kQ3y", 615)](String, t)[d("(M2T", 551)](0, 10),
          a = e[h(1353, "Rukw")](o),
          u = (r + "_" + a)[d("Y1&q", 520)]("")[h(1313, "ArjS")](function (t, e) {
            return t + e[d("PZ^9", 587)](0);
          }, 0),
          f = e[d("VgoJ", 596)](u, 1e3);
        function d(t, e) {
          return c(e - -25, t);
        }
        var l = e[h(1294, "En*i")](i, e[d("kQ3y", 615)](String, f), 3, "0");
        function h(t, e) {
          return c(t - 742, e);
        }
        return n[d("*1SU", 550)]("" + r + l)[h(1281, "$Y]G")](/=/g, "") + "_" + a;
      }
      function d(t) {
        function e(t, e) {
          return s(e, t - -545);
        }
        var r = {};
        function n(t, e) {
          return s(t, e - -1281);
        }
        return r[e(871, "]r(f")] = function (t, e) {
          return t + e;
        }, r[e(801, "dl%f")](t[n("LuPq", 79)](0)[e(883, "voU0") + "e"](), t[n("voU0", 87)](1));
      }
      function l(t, e) {
        var r = h();
        return (l = function (e, n) {
          var o = r[e -= 496];
          void 0 === l.ScEiRI && (l.synTnC = function (t, e) {
            var r = [],
              n = 0,
              o = void 0,
              i = "";
            t = function (t) {
              for (var e, r, n = "", o = "", i = 0, a = 0; r = t.charAt(a++); ~r && (e = i % 4 ? 64 * e + r : r, i++ % 4) ? n += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
              for (var u = 0, c = n.length; u < c; u++) o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
              return decodeURIComponent(o);
            }(t);
            var a = void 0;
            for (a = 0; a < 256; a++) r[a] = a;
            for (a = 0; a < 256; a++) n = (n + r[a] + e.charCodeAt(a % e.length)) % 256, o = r[a], r[a] = r[n], r[n] = o;
            a = 0, n = 0;
            for (var u = 0; u < t.length; u++) n = (n + r[a = (a + 1) % 256]) % 256, o = r[a], r[a] = r[n], r[n] = o, i += String.fromCharCode(t.charCodeAt(u) ^ r[(r[a] + r[n]) % 256]);
            return i;
          }, t = arguments, l.ScEiRI = !0);
          var i = e + r[0],
            a = t[i];
          return a ? o = a : (void 0 === l.vdzopG && (l.vdzopG = !0), o = l.synTnC(o, n), t[i] = o), o;
        })(t, e);
      }
      function h() {
        var t = ["pCknnv8zW4aIWQZdOSkw", "WRHMlZzRfYqmDwa", "WPT7vb/dPG", "W74qfwtcKa", "W6SNgSkuW5yuiq", "WO/dV8kUbCor", "umosrIxcJ8oIsNCKW5K", "B3TlC3ZdG8k6fCoLc3DYyd4", "pCkhofKbW7S", "jSkfW5K6W4a", "WOxdPCowW6JdKq", "WPZcKSobWPVdGW", "WQfdhrn5", "WPymjSoKW5Gggu5H", "i3GcWOjg", "pCkLWOC5W6fWwq", "i8o1mmkIWOK", "z0yCW5Ho", "wve9W65m", "xCoazqLUWPJcQa1jWQ4", "dJNcLW", "WQOsWQa6W7O", "WP0/WOhdU3O", "WOJcP8o+WQhdPq", "WP9hnLRcKa", "pmkFW4z/BmorW5FdPqNdSSk/hq", "WQTXwCoWWOPoCqJcJmoRWOKtWO0", "WQaiWPBdQvOWW5qkW6K", "WQ9HgZrAbG", "B2FcMSkqemkrtSoctSkRWO7dOCkd", "xmobvdHlWQlcSHPe", "dmkoWRCFW54", "FbHnaXu", "WR/cVmomWPNdQW", "WQ5mn8odgGW7", "WRNdNmkVh8oOehRcGxi", "CSoLW5/dPce", "WPHdWOpcIWu", "lqtcVbWuiCk8zSodWQy", "W4JcJSoVruq", "WOG/fmkFWOW", "W7zCW5lcKWbMWOWsW5q5W7i8zG", "zmojWPKTiCkb", "W5VcIMnnWRW", "W7fSAXpcVG", "umodxqtcMSoQxq", "WPfLmh3cS8ob", "qSoOW6pdM8oD", "hCkOWOtcHSkdWOxcGun0fCoVex8", "qIvrmGu", "W6ddGCkEW7/cSmkaDrlcOmo+W7PEaSkJ", "W4ZdJbL5WQO", "W77cMSo8wCkLwKtcJx49W7mf", "WQ9rWOm8v2/cOJ90adnZbW", "WR9LeYv+", "tcXIoGa", "WPtdS8oMW4JdJG", "W6NdLSoBWQ3dVCoFFq8", "W7dcI8oWAJm9WQPo", "WRTfWRBcRHK", "WOariSoiW4uDaq", "ywTOW5hdMfu", "c8kWeeyt", "WOb6gbnH", "WPL2WQe", "WRFdRmkPfJRdJSkJCSoUemoqW4FcUa", "WRddMmogW4/dUWW", "rHLAesxdIW", "ucHMgdy", "qbr8j3nvWPFdGW", "BCocWPqLmCkm", "WQLZztJdTq", "iCkNW7bGwG", "W7G6shaVqbiyxKpcMxu", "CwfZW7pdHvxdGG", "W4WzeLtcJCkeoLzoDa", "W5yMbmkxW7u", "WRSuWOC1W5G", "t8o0WOmyha", "WRVcMmopWQNdSCo4jG", "W7/cV2zGWO0L", "WO4dWQJdV3m", "CmozyIre", "cgy2WO5I", "W6mSdu3cVa", "rCoauZXbWPJcQbbsWQe", "WQ9zk8ogdW", "W4BcUfigW7e", "dSkWW4SfW5W", "amkrWQyaW6q", "WOygpComW54m", "W40HWPtcTaaDpWS", "W4r0W4zUWQzgAh5lW7mfzaW", "oICDjIe", "WOGQda", "rmoCurdcNW", "gSksqmoC", "W7rFWQpdMweYW44z", "ev8+WQL5", "lmkRda", "FmoddCkxwq", "oYmmbstcL8oN", "b8kgl0SX", "CCondmktB8oP", "WO7cGCoHp3RdJSobymoRxmkpgaa", "WORcKmoCf8oDv8o/", "tvvIW7VdNG", "g8ktgbqTBGqjmmk9", "qX5Rg2PvWPq", "WRhdImoaW4NdRbS/W4uh", "gmoZhmkcWOi", "iSkZCSorFq", "pmkFW4v8yCoBW4tdKcJdJCk6fq"];
        return (h = function () {
          return t;
        })();
      }
      u[c(631, "vSDT")] = function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 9999,
          n = {};
        n[i("BeAT", -387)] = function (t, e) {
          return t + e;
        }, n[i("rI(0", -433)] = function (t, e) {
          return t + e;
        }, n[i("EboF", -375)] = function (t, e) {
          return t * e;
        }, n[i("LH1&", -450)] = function (t, e) {
          return t * e;
        }, n[i("kHS[", -426)] = function (t, e) {
          return t * e;
        }, n[i("LuPq", -372)] = function (t, e) {
          return t + e;
        }, n[u(650, "kQ3y")] = i("q0qj", -471), n[u(620, "cJKL")] = function (t, e) {
          return t + e;
        }, n[i("fQK4", -365)] = function (t, e) {
          return t + e;
        }, n[i("voU0", -446)] = function (t, e) {
          return t || e;
        }, n[i("LH1&", -472)] = u(626, "gQ*H");
        var o = n;
        function i(t, e) {
          return c(e - -1014, t);
        }
        function u(t, e) {
          return c(t - 64, e);
        }
        t = o[i("x(MH", -437)]("_", t);
        var s = "";
        if (r) {
          var f = new Date();
          f[i("rI(0", -392)](o[u(693, "gQ*H")](f[u(697, "fQK4")](), o[u(658, "fQK4")](o[i("gQ*H", -373)](o[i("XatH", -391)](o[i("RPGe", -380)](r, 24), 60), 60), 1e3))), s = o[i("gQ*H", -476)](o[u(679, "RPGe")], f[u(701, "Y&ba") + "g"]());
        }
        var d = e;
        a[i("Hz78", -440)][i("vSDT", -419)] = o[i("voU0", -384)](o[i("(M2T", -394)](o[i("ArjS", -453)](o[i("jurk", -379)](t, "="), o[i("voU0", -446)](d, "")), s), o[i("dl%f", -454)]);
      }, u[c(645, "kQ3y")] = function (t) {
        var e = {};
        function r(t, e) {
          return s(t, e - -592);
        }
        e[r("zJkl", 758)] = function (t, e) {
          return t + e;
        }, e[o("EboF", 1304)] = function (t, e) {
          return t < e;
        }, e[o("HJWl", 1271)] = function (t, e) {
          return t === e;
        };
        var n = e;
        function o(t, e) {
          return c(e - 722, t);
        }
        t = n[r("*1SU", 800)]("_", t);
        for (var i = n[o("ArjS", 1350)](t, "="), u = a[o("ntry", 1285)][o("Rukw", 1288)][o("$Y]G", 1313)](";"), f = 0; n[r("iNXu", 761)](f, u[o("dl%f", 1294)]); f++) {
          for (var d = u[f]; n[o("VgoJ", 1311)](d[r("voU0", 863)](0), " ");) d = d[o("XatH", 1262)](1, d[o("]r(f", 1348)]);
          if (n[o("AbnG", 1270)](d[r("gQ*H", 801)](i), 0)) return d[r("ArjS", 831)](i[o("AbnG", 1307)], d[r("*1SU", 764)]);
        }
        return null;
      }, u[s("ZzLt", 1433)] = function (t, e) {
        var r = {};
        function n(t, e) {
          return c(t - 235, e);
        }
        function o(t, e) {
          return c(t - -1002, e);
        }
        r[o(-366, "jurk")] = function (t, e) {
          return t + e;
        }, t = r[o(-448, "dl%f")]("_", t), a[n(853, "]r(f") + "ge"][n(814, "Rukw")](t, e);
      }, u[c(580, "VgoJ")] = function (t) {
        var e = {};
        function r(t, e) {
          return s(e, t - -1055);
        }
        return e[r(354, "ZzLt")] = function (t, e) {
          return t + e;
        }, t = e[r(352, "Bc[#")]("_", t), a[r(344, "Y&ba") + "ge"][s("Hz78", 1422)](t);
      }, t[s("vSDT", 1374)] = function () {
        var t = {
          HTAeM: function (t, e) {
            return t(e);
          },
          Uybgu: function (t, e) {
            return t(e);
          },
          zTRng: e("qh)^", 915),
          ZRFxf: function (t) {
            return t();
          },
          YvRyi: i(433, "My7w"),
          kQnRV: e("3KYM", 913),
          qXDVr: e("ZzLt", 855)
        };
        function e(t, e) {
          return s(t, e - -504);
        }
        var r = t[i(405, "dl%f")],
          n = {},
          o = t[i(399, "]r(f")](f);
        function i(t, e) {
          return s(e, t - -977);
        }
        var a = [];
        return a[t[e("Y&ba", 892)]](t[i(435, "kHS[")]), a[t[i(464, "kHS[")]](t[e("BeAT", 898)]), a[e("Bc[#", 911)](function (a) {
          function c(t, r) {
            return e(t, r - -140);
          }
          try {
            var s = c("3KYM", 770) + a + c("GT@!", 803);
            n[s] = u[c("LH1&", 734) + t[i(448, "My7w")](d, a)](r), !n[s] && (u[c("Y1&q", 764) + t[c("Wmi9", 757)](d, a)](r, o), n[s] = o);
          } catch (t) { }
        }), n;
      };
    }).call(this, r(1)(t));
  },
  15: function (t, e, r) {
    "use strict";

    t.exports = function (t) {
      t = t || 21;
      for (var e = ""; 0 < t--;) e += "_~varfunctio0125634789bdegjhklmpqswxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[64 * Math.random() | 0];
      return e;
    };
  },
  16: function (t, e, r) {
    "use strict";

    t.exports = function (t, e, r) {
      if ("string" != typeof t) throw new Error("The string parameter must be a string.");
      if (t.length < 1) throw new Error("The string parameter must be 1 character or longer.");
      if ("number" != typeof e) throw new Error("The length parameter must be a number.");
      if ("string" != typeof r && r) throw new Error("The character parameter must be a string.");
      var n = -1;
      for (e -= t.length, r || 0 === r || (r = " "); ++n < e;) t += r;
      return t;
    };
  }
});

function getAntiContent() {
  return export_function(4)({
    serverTime: Date.now()
  }).messagePack()
}

// console.log(getAntiContent());

