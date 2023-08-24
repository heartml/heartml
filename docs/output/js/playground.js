// ../node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d3, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b3) {
    d4.__proto__ = b3;
  } || function(d4, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d4[p2] = b3[p2];
  };
  return extendStatics(d3, b2);
};
function __extends(d3, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d3, b2);
  function __() {
    this.constructor = d3;
  }
  d3.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t6) {
    for (var s6, i8 = 1, n9 = arguments.length; i8 < n9; i8++) {
      s6 = arguments[i8];
      for (var p2 in s6)
        if (Object.prototype.hasOwnProperty.call(s6, p2))
          t6[p2] = s6[p2];
    }
    return t6;
  };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c3 = arguments.length, r5 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r5 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i8 = decorators.length - 1; i8 >= 0; i8--)
      if (d3 = decorators[i8])
        r5 = (c3 < 3 ? d3(r5) : c3 > 3 ? d3(target, key, r5) : d3(target, key)) || r5;
  return c3 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
}
function __values(o9) {
  var s6 = typeof Symbol === "function" && Symbol.iterator, m2 = s6 && o9[s6], i8 = 0;
  if (m2)
    return m2.call(o9);
  if (o9 && typeof o9.length === "number")
    return {
      next: function() {
        if (o9 && i8 >= o9.length)
          o9 = void 0;
        return { value: o9 && o9[i8++], done: !o9 };
      }
    };
  throw new TypeError(s6 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

// ../node_modules/@lit/reactive-element/css-tag.js
var t = window;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var n = /* @__PURE__ */ new WeakMap();
var o = class {
  constructor(t6, e12, n9) {
    if (this._$cssResult$ = true, n9 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t6, this.t = e12;
  }
  get styleSheet() {
    let t6 = this.o;
    const s6 = this.t;
    if (e && void 0 === t6) {
      const e12 = void 0 !== s6 && 1 === s6.length;
      e12 && (t6 = n.get(s6)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && n.set(s6, t6));
    }
    return t6;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t6) => new o("string" == typeof t6 ? t6 : t6 + "", void 0, s);
var i = (t6, ...e12) => {
  const n9 = 1 === t6.length ? t6[0] : e12.reduce((e13, s6, n10) => e13 + ((t7) => {
    if (true === t7._$cssResult$)
      return t7.cssText;
    if ("number" == typeof t7)
      return t7;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t7 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s6) + t6[n10 + 1], t6[0]);
  return new o(n9, t6, s);
};
var S = (s6, n9) => {
  e ? s6.adoptedStyleSheets = n9.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet) : n9.forEach((e12) => {
    const n10 = document.createElement("style"), o9 = t.litNonce;
    void 0 !== o9 && n10.setAttribute("nonce", o9), n10.textContent = e12.cssText, s6.appendChild(n10);
  });
};
var c = e ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
  let e12 = "";
  for (const s6 of t7.cssRules)
    e12 += s6.cssText;
  return r(e12);
})(t6) : t6;

// ../node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window;
var r2 = e2.trustedTypes;
var h = r2 ? r2.emptyScript : "";
var o2 = e2.reactiveElementPolyfillSupport;
var n2 = { toAttribute(t6, i8) {
  switch (i8) {
    case Boolean:
      t6 = t6 ? h : null;
      break;
    case Object:
    case Array:
      t6 = null == t6 ? t6 : JSON.stringify(t6);
  }
  return t6;
}, fromAttribute(t6, i8) {
  let s6 = t6;
  switch (i8) {
    case Boolean:
      s6 = null !== t6;
      break;
    case Number:
      s6 = null === t6 ? null : Number(t6);
      break;
    case Object:
    case Array:
      try {
        s6 = JSON.parse(t6);
      } catch (t7) {
        s6 = null;
      }
  }
  return s6;
} };
var a = (t6, i8) => i8 !== t6 && (i8 == i8 || t6 == t6);
var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
var d = "finalized";
var u = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t6) {
    var i8;
    this.finalize(), (null !== (i8 = this.h) && void 0 !== i8 ? i8 : this.h = []).push(t6);
  }
  static get observedAttributes() {
    this.finalize();
    const t6 = [];
    return this.elementProperties.forEach((i8, s6) => {
      const e12 = this._$Ep(s6, i8);
      void 0 !== e12 && (this._$Ev.set(e12, s6), t6.push(e12));
    }), t6;
  }
  static createProperty(t6, i8 = l) {
    if (i8.state && (i8.attribute = false), this.finalize(), this.elementProperties.set(t6, i8), !i8.noAccessor && !this.prototype.hasOwnProperty(t6)) {
      const s6 = "symbol" == typeof t6 ? Symbol() : "__" + t6, e12 = this.getPropertyDescriptor(t6, s6, i8);
      void 0 !== e12 && Object.defineProperty(this.prototype, t6, e12);
    }
  }
  static getPropertyDescriptor(t6, i8, s6) {
    return { get() {
      return this[i8];
    }, set(e12) {
      const r5 = this[t6];
      this[i8] = e12, this.requestUpdate(t6, r5, s6);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t6) {
    return this.elementProperties.get(t6) || l;
  }
  static finalize() {
    if (this.hasOwnProperty(d))
      return false;
    this[d] = true;
    const t6 = Object.getPrototypeOf(this);
    if (t6.finalize(), void 0 !== t6.h && (this.h = [...t6.h]), this.elementProperties = new Map(t6.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t7 = this.properties, i8 = [...Object.getOwnPropertyNames(t7), ...Object.getOwnPropertySymbols(t7)];
      for (const s6 of i8)
        this.createProperty(s6, t7[s6]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i8) {
    const s6 = [];
    if (Array.isArray(i8)) {
      const e12 = new Set(i8.flat(1 / 0).reverse());
      for (const i9 of e12)
        s6.unshift(c(i9));
    } else
      void 0 !== i8 && s6.push(c(i8));
    return s6;
  }
  static _$Ep(t6, i8) {
    const s6 = i8.attribute;
    return false === s6 ? void 0 : "string" == typeof s6 ? s6 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
  }
  _$Eu() {
    var t6;
    this._$E_ = new Promise((t7) => this.enableUpdating = t7), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t6 = this.constructor.h) || void 0 === t6 || t6.forEach((t7) => t7(this));
  }
  addController(t6) {
    var i8, s6;
    (null !== (i8 = this._$ES) && void 0 !== i8 ? i8 : this._$ES = []).push(t6), void 0 !== this.renderRoot && this.isConnected && (null === (s6 = t6.hostConnected) || void 0 === s6 || s6.call(t6));
  }
  removeController(t6) {
    var i8;
    null === (i8 = this._$ES) || void 0 === i8 || i8.splice(this._$ES.indexOf(t6) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t6, i8) => {
      this.hasOwnProperty(i8) && (this._$Ei.set(i8, this[i8]), delete this[i8]);
    });
  }
  createRenderRoot() {
    var t6;
    const s6 = null !== (t6 = this.shadowRoot) && void 0 !== t6 ? t6 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s6, this.constructor.elementStyles), s6;
  }
  connectedCallback() {
    var t6;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t6 = this._$ES) || void 0 === t6 || t6.forEach((t7) => {
      var i8;
      return null === (i8 = t7.hostConnected) || void 0 === i8 ? void 0 : i8.call(t7);
    });
  }
  enableUpdating(t6) {
  }
  disconnectedCallback() {
    var t6;
    null === (t6 = this._$ES) || void 0 === t6 || t6.forEach((t7) => {
      var i8;
      return null === (i8 = t7.hostDisconnected) || void 0 === i8 ? void 0 : i8.call(t7);
    });
  }
  attributeChangedCallback(t6, i8, s6) {
    this._$AK(t6, s6);
  }
  _$EO(t6, i8, s6 = l) {
    var e12;
    const r5 = this.constructor._$Ep(t6, s6);
    if (void 0 !== r5 && true === s6.reflect) {
      const h3 = (void 0 !== (null === (e12 = s6.converter) || void 0 === e12 ? void 0 : e12.toAttribute) ? s6.converter : n2).toAttribute(i8, s6.type);
      this._$El = t6, null == h3 ? this.removeAttribute(r5) : this.setAttribute(r5, h3), this._$El = null;
    }
  }
  _$AK(t6, i8) {
    var s6;
    const e12 = this.constructor, r5 = e12._$Ev.get(t6);
    if (void 0 !== r5 && this._$El !== r5) {
      const t7 = e12.getPropertyOptions(r5), h3 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== (null === (s6 = t7.converter) || void 0 === s6 ? void 0 : s6.fromAttribute) ? t7.converter : n2;
      this._$El = r5, this[r5] = h3.fromAttribute(i8, t7.type), this._$El = null;
    }
  }
  requestUpdate(t6, i8, s6) {
    let e12 = true;
    void 0 !== t6 && (((s6 = s6 || this.constructor.getPropertyOptions(t6)).hasChanged || a)(this[t6], i8) ? (this._$AL.has(t6) || this._$AL.set(t6, i8), true === s6.reflect && this._$El !== t6 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t6, s6))) : e12 = false), !this.isUpdatePending && e12 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t7) {
      Promise.reject(t7);
    }
    const t6 = this.scheduleUpdate();
    return null != t6 && await t6, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t6;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t7, i9) => this[i9] = t7), this._$Ei = void 0);
    let i8 = false;
    const s6 = this._$AL;
    try {
      i8 = this.shouldUpdate(s6), i8 ? (this.willUpdate(s6), null === (t6 = this._$ES) || void 0 === t6 || t6.forEach((t7) => {
        var i9;
        return null === (i9 = t7.hostUpdate) || void 0 === i9 ? void 0 : i9.call(t7);
      }), this.update(s6)) : this._$Ek();
    } catch (t7) {
      throw i8 = false, this._$Ek(), t7;
    }
    i8 && this._$AE(s6);
  }
  willUpdate(t6) {
  }
  _$AE(t6) {
    var i8;
    null === (i8 = this._$ES) || void 0 === i8 || i8.forEach((t7) => {
      var i9;
      return null === (i9 = t7.hostUpdated) || void 0 === i9 ? void 0 : i9.call(t7);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t6) {
    return true;
  }
  update(t6) {
    void 0 !== this._$EC && (this._$EC.forEach((t7, i8) => this._$EO(i8, this[i8], t7)), this._$EC = void 0), this._$Ek();
  }
  updated(t6) {
  }
  firstUpdated(t6) {
  }
};
u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

// ../node_modules/lit-html/lit-html.js
var t2;
var i2 = window;
var s3 = i2.trustedTypes;
var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t6) => t6 }) : void 0;
var o3 = "$lit$";
var n3 = `lit$${(Math.random() + "").slice(9)}$`;
var l2 = "?" + n3;
var h2 = `<${l2}>`;
var r3 = document;
var u2 = () => r3.createComment("");
var d2 = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
var c2 = Array.isArray;
var v = (t6) => c2(t6) || "function" == typeof (null == t6 ? void 0 : t6[Symbol.iterator]);
var a2 = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var w = (t6) => (i8, ...s6) => ({ _$litType$: t6, strings: i8, values: s6 });
var x = w(1);
var b = w(2);
var T = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129, null, false);
function P(t6, i8) {
  if (!Array.isArray(t6) || !t6.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i8) : i8;
}
var V = (t6, i8) => {
  const s6 = t6.length - 1, e12 = [];
  let l8, r5 = 2 === i8 ? "<svg>" : "", u3 = f;
  for (let i9 = 0; i9 < s6; i9++) {
    const s7 = t6[i9];
    let d3, c3, v2 = -1, a4 = 0;
    for (; a4 < s7.length && (u3.lastIndex = a4, c3 = u3.exec(s7), null !== c3); )
      a4 = u3.lastIndex, u3 === f ? "!--" === c3[1] ? u3 = _ : void 0 !== c3[1] ? u3 = m : void 0 !== c3[2] ? (y.test(c3[2]) && (l8 = RegExp("</" + c3[2], "g")), u3 = p) : void 0 !== c3[3] && (u3 = p) : u3 === p ? ">" === c3[0] ? (u3 = null != l8 ? l8 : f, v2 = -1) : void 0 === c3[1] ? v2 = -2 : (v2 = u3.lastIndex - c3[2].length, d3 = c3[1], u3 = void 0 === c3[3] ? p : '"' === c3[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, l8 = void 0);
    const w2 = u3 === p && t6[i9 + 1].startsWith("/>") ? " " : "";
    r5 += u3 === f ? s7 + h2 : v2 >= 0 ? (e12.push(d3), s7.slice(0, v2) + o3 + s7.slice(v2) + n3 + w2) : s7 + n3 + (-2 === v2 ? (e12.push(void 0), i9) : w2);
  }
  return [P(t6, r5 + (t6[s6] || "<?>") + (2 === i8 ? "</svg>" : "")), e12];
};
var N = class _N {
  constructor({ strings: t6, _$litType$: i8 }, e12) {
    let h3;
    this.parts = [];
    let r5 = 0, d3 = 0;
    const c3 = t6.length - 1, v2 = this.parts, [a4, f2] = V(t6, i8);
    if (this.el = _N.createElement(a4, e12), C.currentNode = this.el.content, 2 === i8) {
      const t7 = this.el.content, i9 = t7.firstChild;
      i9.remove(), t7.append(...i9.childNodes);
    }
    for (; null !== (h3 = C.nextNode()) && v2.length < c3; ) {
      if (1 === h3.nodeType) {
        if (h3.hasAttributes()) {
          const t7 = [];
          for (const i9 of h3.getAttributeNames())
            if (i9.endsWith(o3) || i9.startsWith(n3)) {
              const s6 = f2[d3++];
              if (t7.push(i9), void 0 !== s6) {
                const t8 = h3.getAttribute(s6.toLowerCase() + o3).split(n3), i10 = /([.?@])?(.*)/.exec(s6);
                v2.push({ type: 1, index: r5, name: i10[2], strings: t8, ctor: "." === i10[1] ? H : "?" === i10[1] ? L : "@" === i10[1] ? z : k });
              } else
                v2.push({ type: 6, index: r5 });
            }
          for (const i9 of t7)
            h3.removeAttribute(i9);
        }
        if (y.test(h3.tagName)) {
          const t7 = h3.textContent.split(n3), i9 = t7.length - 1;
          if (i9 > 0) {
            h3.textContent = s3 ? s3.emptyScript : "";
            for (let s6 = 0; s6 < i9; s6++)
              h3.append(t7[s6], u2()), C.nextNode(), v2.push({ type: 2, index: ++r5 });
            h3.append(t7[i9], u2());
          }
        }
      } else if (8 === h3.nodeType)
        if (h3.data === l2)
          v2.push({ type: 2, index: r5 });
        else {
          let t7 = -1;
          for (; -1 !== (t7 = h3.data.indexOf(n3, t7 + 1)); )
            v2.push({ type: 7, index: r5 }), t7 += n3.length - 1;
        }
      r5++;
    }
  }
  static createElement(t6, i8) {
    const s6 = r3.createElement("template");
    return s6.innerHTML = t6, s6;
  }
};
function S2(t6, i8, s6 = t6, e12) {
  var o9, n9, l8, h3;
  if (i8 === T)
    return i8;
  let r5 = void 0 !== e12 ? null === (o9 = s6._$Co) || void 0 === o9 ? void 0 : o9[e12] : s6._$Cl;
  const u3 = d2(i8) ? void 0 : i8._$litDirective$;
  return (null == r5 ? void 0 : r5.constructor) !== u3 && (null === (n9 = null == r5 ? void 0 : r5._$AO) || void 0 === n9 || n9.call(r5, false), void 0 === u3 ? r5 = void 0 : (r5 = new u3(t6), r5._$AT(t6, s6, e12)), void 0 !== e12 ? (null !== (l8 = (h3 = s6)._$Co) && void 0 !== l8 ? l8 : h3._$Co = [])[e12] = r5 : s6._$Cl = r5), void 0 !== r5 && (i8 = S2(t6, r5._$AS(t6, i8.values), r5, e12)), i8;
}
var M = class {
  constructor(t6, i8) {
    this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = i8;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t6) {
    var i8;
    const { el: { content: s6 }, parts: e12 } = this._$AD, o9 = (null !== (i8 = null == t6 ? void 0 : t6.creationScope) && void 0 !== i8 ? i8 : r3).importNode(s6, true);
    C.currentNode = o9;
    let n9 = C.nextNode(), l8 = 0, h3 = 0, u3 = e12[0];
    for (; void 0 !== u3; ) {
      if (l8 === u3.index) {
        let i9;
        2 === u3.type ? i9 = new R(n9, n9.nextSibling, this, t6) : 1 === u3.type ? i9 = new u3.ctor(n9, u3.name, u3.strings, this, t6) : 6 === u3.type && (i9 = new Z(n9, this, t6)), this._$AV.push(i9), u3 = e12[++h3];
      }
      l8 !== (null == u3 ? void 0 : u3.index) && (n9 = C.nextNode(), l8++);
    }
    return C.currentNode = r3, o9;
  }
  v(t6) {
    let i8 = 0;
    for (const s6 of this._$AV)
      void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t6, s6, i8), i8 += s6.strings.length - 2) : s6._$AI(t6[i8])), i8++;
  }
};
var R = class _R {
  constructor(t6, i8, s6, e12) {
    var o9;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t6, this._$AB = i8, this._$AM = s6, this.options = e12, this._$Cp = null === (o9 = null == e12 ? void 0 : e12.isConnected) || void 0 === o9 || o9;
  }
  get _$AU() {
    var t6, i8;
    return null !== (i8 = null === (t6 = this._$AM) || void 0 === t6 ? void 0 : t6._$AU) && void 0 !== i8 ? i8 : this._$Cp;
  }
  get parentNode() {
    let t6 = this._$AA.parentNode;
    const i8 = this._$AM;
    return void 0 !== i8 && 11 === (null == t6 ? void 0 : t6.nodeType) && (t6 = i8.parentNode), t6;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t6, i8 = this) {
    t6 = S2(this, t6, i8), d2(t6) ? t6 === A || null == t6 || "" === t6 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t6 !== this._$AH && t6 !== T && this._(t6) : void 0 !== t6._$litType$ ? this.g(t6) : void 0 !== t6.nodeType ? this.$(t6) : v(t6) ? this.T(t6) : this._(t6);
  }
  k(t6) {
    return this._$AA.parentNode.insertBefore(t6, this._$AB);
  }
  $(t6) {
    this._$AH !== t6 && (this._$AR(), this._$AH = this.k(t6));
  }
  _(t6) {
    this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t6 : this.$(r3.createTextNode(t6)), this._$AH = t6;
  }
  g(t6) {
    var i8;
    const { values: s6, _$litType$: e12 } = t6, o9 = "number" == typeof e12 ? this._$AC(t6) : (void 0 === e12.el && (e12.el = N.createElement(P(e12.h, e12.h[0]), this.options)), e12);
    if ((null === (i8 = this._$AH) || void 0 === i8 ? void 0 : i8._$AD) === o9)
      this._$AH.v(s6);
    else {
      const t7 = new M(o9, this), i9 = t7.u(this.options);
      t7.v(s6), this.$(i9), this._$AH = t7;
    }
  }
  _$AC(t6) {
    let i8 = E.get(t6.strings);
    return void 0 === i8 && E.set(t6.strings, i8 = new N(t6)), i8;
  }
  T(t6) {
    c2(this._$AH) || (this._$AH = [], this._$AR());
    const i8 = this._$AH;
    let s6, e12 = 0;
    for (const o9 of t6)
      e12 === i8.length ? i8.push(s6 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s6 = i8[e12], s6._$AI(o9), e12++;
    e12 < i8.length && (this._$AR(s6 && s6._$AB.nextSibling, e12), i8.length = e12);
  }
  _$AR(t6 = this._$AA.nextSibling, i8) {
    var s6;
    for (null === (s6 = this._$AP) || void 0 === s6 || s6.call(this, false, true, i8); t6 && t6 !== this._$AB; ) {
      const i9 = t6.nextSibling;
      t6.remove(), t6 = i9;
    }
  }
  setConnected(t6) {
    var i8;
    void 0 === this._$AM && (this._$Cp = t6, null === (i8 = this._$AP) || void 0 === i8 || i8.call(this, t6));
  }
};
var k = class {
  constructor(t6, i8, s6, e12, o9) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t6, this.name = i8, this._$AM = e12, this.options = o9, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t6, i8 = this, s6, e12) {
    const o9 = this.strings;
    let n9 = false;
    if (void 0 === o9)
      t6 = S2(this, t6, i8, 0), n9 = !d2(t6) || t6 !== this._$AH && t6 !== T, n9 && (this._$AH = t6);
    else {
      const e13 = t6;
      let l8, h3;
      for (t6 = o9[0], l8 = 0; l8 < o9.length - 1; l8++)
        h3 = S2(this, e13[s6 + l8], i8, l8), h3 === T && (h3 = this._$AH[l8]), n9 || (n9 = !d2(h3) || h3 !== this._$AH[l8]), h3 === A ? t6 = A : t6 !== A && (t6 += (null != h3 ? h3 : "") + o9[l8 + 1]), this._$AH[l8] = h3;
    }
    n9 && !e12 && this.j(t6);
  }
  j(t6) {
    t6 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t6 ? t6 : "");
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t6) {
    this.element[this.name] = t6 === A ? void 0 : t6;
  }
};
var I = s3 ? s3.emptyScript : "";
var L = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t6) {
    t6 && t6 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
};
var z = class extends k {
  constructor(t6, i8, s6, e12, o9) {
    super(t6, i8, s6, e12, o9), this.type = 5;
  }
  _$AI(t6, i8 = this) {
    var s6;
    if ((t6 = null !== (s6 = S2(this, t6, i8, 0)) && void 0 !== s6 ? s6 : A) === T)
      return;
    const e12 = this._$AH, o9 = t6 === A && e12 !== A || t6.capture !== e12.capture || t6.once !== e12.once || t6.passive !== e12.passive, n9 = t6 !== A && (e12 === A || o9);
    o9 && this.element.removeEventListener(this.name, this, e12), n9 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
  }
  handleEvent(t6) {
    var i8, s6;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s6 = null === (i8 = this.options) || void 0 === i8 ? void 0 : i8.host) && void 0 !== s6 ? s6 : this.element, t6) : this._$AH.handleEvent(t6);
  }
};
var Z = class {
  constructor(t6, i8, s6) {
    this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = i8, this.options = s6;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t6) {
    S2(this, t6);
  }
};
var j = { O: o3, P: n3, A: l2, C: 1, M: V, L: M, R: v, D: S2, I: R, V: k, H: L, N: z, U: H, F: Z };
var B = i2.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
var D = (t6, i8, s6) => {
  var e12, o9;
  const n9 = null !== (e12 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== e12 ? e12 : i8;
  let l8 = n9._$litPart$;
  if (void 0 === l8) {
    const t7 = null !== (o9 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== o9 ? o9 : null;
    n9._$litPart$ = l8 = new R(i8.insertBefore(u2(), t7), t7, void 0, null != s6 ? s6 : {});
  }
  return l8._$AI(t6), l8;
};

// ../node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends u {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t6, e12;
    const i8 = super.createRenderRoot();
    return null !== (t6 = (e12 = this.renderOptions).renderBefore) && void 0 !== t6 || (e12.renderBefore = i8.firstChild), i8;
  }
  update(t6) {
    const i8 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this._$Do = D(i8, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t6;
    super.connectedCallback(), null === (t6 = this._$Do) || void 0 === t6 || t6.setConnected(true);
  }
  disconnectedCallback() {
    var t6;
    super.disconnectedCallback(), null === (t6 = this._$Do) || void 0 === t6 || t6.setConnected(false);
  }
  render() {
    return T;
  }
};
s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
null == n4 || n4({ LitElement: s4 });
(null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

// ../node_modules/@lit/reactive-element/decorators/custom-element.js
var e4 = (e12) => (n9) => "function" == typeof n9 ? ((e13, n10) => (customElements.define(e13, n10), n10))(e12, n9) : ((e13, n10) => {
  const { kind: t6, elements: s6 } = n10;
  return { kind: t6, elements: s6, finisher(n11) {
    customElements.define(e13, n11);
  } };
})(e12, n9);

// ../node_modules/@lit/reactive-element/decorators/property.js
var i3 = (i8, e12) => "method" === e12.kind && e12.descriptor && !("value" in e12.descriptor) ? { ...e12, finisher(n9) {
  n9.createProperty(e12.key, i8);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e12.key, initializer() {
  "function" == typeof e12.initializer && (this[e12.key] = e12.initializer.call(this));
}, finisher(n9) {
  n9.createProperty(e12.key, i8);
} };
var e5 = (i8, e12, n9) => {
  e12.constructor.createProperty(n9, i8);
};
function n5(n9) {
  return (t6, o9) => void 0 !== o9 ? e5(n9, t6, o9) : i3(n9, t6);
}

// ../node_modules/@lit/reactive-element/decorators/state.js
function t3(t6) {
  return n5({ ...t6, state: true });
}

// ../node_modules/@lit/reactive-element/decorators/base.js
var o5 = ({ finisher: e12, descriptor: t6 }) => (o9, n9) => {
  var r5;
  if (void 0 === n9) {
    const n10 = null !== (r5 = o9.originalKey) && void 0 !== r5 ? r5 : o9.key, i8 = null != t6 ? { kind: "method", placement: "prototype", key: n10, descriptor: t6(o9.key) } : { ...o9, key: n10 };
    return null != e12 && (i8.finisher = function(t7) {
      e12(t7, n10);
    }), i8;
  }
  {
    const r6 = o9.constructor;
    void 0 !== t6 && Object.defineProperty(o9, n9, t6(n9)), null == e12 || e12(r6, n9);
  }
};

// ../node_modules/@lit/reactive-element/decorators/event-options.js
function e6(e12) {
  return o5({ finisher: (r5, t6) => {
    Object.assign(r5.prototype[t6], e12);
  } });
}

// ../node_modules/@lit/reactive-element/decorators/query.js
function i4(i8, n9) {
  return o5({ descriptor: (o9) => {
    const t6 = { get() {
      var o10, n10;
      return null !== (n10 = null === (o10 = this.renderRoot) || void 0 === o10 ? void 0 : o10.querySelector(i8)) && void 0 !== n10 ? n10 : null;
    }, enumerable: true, configurable: true };
    if (n9) {
      const n10 = "symbol" == typeof o9 ? Symbol() : "__" + o9;
      t6.get = function() {
        var o10, t7;
        return void 0 === this[n10] && (this[n10] = null !== (t7 = null === (o10 = this.renderRoot) || void 0 === o10 ? void 0 : o10.querySelector(i8)) && void 0 !== t7 ? t7 : null), this[n10];
      };
    }
    return t6;
  } });
}

// ../node_modules/@lit/reactive-element/decorators/query-async.js
function e7(e12) {
  return o5({ descriptor: (r5) => ({ async get() {
    var r6;
    return await this.updateComplete, null === (r6 = this.renderRoot) || void 0 === r6 ? void 0 : r6.querySelector(e12);
  }, enumerable: true, configurable: true }) });
}

// ../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var n6;
var e8 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o9, n9) => o9.assignedElements(n9) : (o9, n9) => o9.assignedNodes(n9).filter((o10) => o10.nodeType === Node.ELEMENT_NODE);
function l4(n9) {
  const { slot: l8, selector: t6 } = null != n9 ? n9 : {};
  return o5({ descriptor: (o9) => ({ get() {
    var o10;
    const r5 = "slot" + (l8 ? `[name=${l8}]` : ":not([name])"), i8 = null === (o10 = this.renderRoot) || void 0 === o10 ? void 0 : o10.querySelector(r5), s6 = null != i8 ? e8(i8, n9) : [];
    return t6 ? s6.filter((o11) => o11.matches(t6)) : s6;
  }, enumerable: true, configurable: true }) });
}

// ../node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
function o6(o9, n9, r5) {
  let l8, s6 = o9;
  return "object" == typeof o9 ? (s6 = o9.slot, l8 = o9) : l8 = { flatten: n9 }, r5 ? l4({ slot: s6, flatten: n9, selector: r5 }) : o5({ descriptor: (e12) => ({ get() {
    var e13, t6;
    const o10 = "slot" + (s6 ? `[name=${s6}]` : ":not([name])"), n10 = null === (e13 = this.renderRoot) || void 0 === e13 ? void 0 : e13.querySelector(o10);
    return null !== (t6 = null == n10 ? void 0 : n10.assignedNodes(l8)) && void 0 !== t6 ? t6 : [];
  }, enumerable: true, configurable: true }) });
}

// ../node_modules/comlink/dist/esm/comlink.mjs
var proxyMarker = Symbol("Comlink.proxy");
var createEndpoint = Symbol("Comlink.endpoint");
var releaseProxy = Symbol("Comlink.releaseProxy");
var throwMarker = Symbol("Comlink.thrown");
var isObject = (val) => typeof val === "object" && val !== null || typeof val === "function";
var proxyTransferHandler = {
  canHandle: (val) => isObject(val) && val[proxyMarker],
  serialize(obj) {
    const { port1, port2 } = new MessageChannel();
    expose(obj, port1);
    return [port2, [port2]];
  },
  deserialize(port) {
    port.start();
    return wrap(port);
  }
};
var throwTransferHandler = {
  canHandle: (value) => isObject(value) && throwMarker in value,
  serialize({ value }) {
    let serialized;
    if (value instanceof Error) {
      serialized = {
        isError: true,
        value: {
          message: value.message,
          name: value.name,
          stack: value.stack
        }
      };
    } else {
      serialized = { isError: false, value };
    }
    return [serialized, []];
  },
  deserialize(serialized) {
    if (serialized.isError) {
      throw Object.assign(new Error(serialized.value.message), serialized.value);
    }
    throw serialized.value;
  }
};
var transferHandlers = /* @__PURE__ */ new Map([
  ["proxy", proxyTransferHandler],
  ["throw", throwTransferHandler]
]);
function expose(obj, ep = self) {
  ep.addEventListener("message", function callback(ev) {
    if (!ev || !ev.data) {
      return;
    }
    const { id, type, path } = Object.assign({ path: [] }, ev.data);
    const argumentList = (ev.data.argumentList || []).map(fromWireValue);
    let returnValue;
    try {
      const parent = path.slice(0, -1).reduce((obj2, prop) => obj2[prop], obj);
      const rawValue = path.reduce((obj2, prop) => obj2[prop], obj);
      switch (type) {
        case "GET":
          {
            returnValue = rawValue;
          }
          break;
        case "SET":
          {
            parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
            returnValue = true;
          }
          break;
        case "APPLY":
          {
            returnValue = rawValue.apply(parent, argumentList);
          }
          break;
        case "CONSTRUCT":
          {
            const value = new rawValue(...argumentList);
            returnValue = proxy(value);
          }
          break;
        case "ENDPOINT":
          {
            const { port1, port2 } = new MessageChannel();
            expose(obj, port2);
            returnValue = transfer(port1, [port1]);
          }
          break;
        case "RELEASE":
          {
            returnValue = void 0;
          }
          break;
        default:
          return;
      }
    } catch (value) {
      returnValue = { value, [throwMarker]: 0 };
    }
    Promise.resolve(returnValue).catch((value) => {
      return { value, [throwMarker]: 0 };
    }).then((returnValue2) => {
      const [wireValue, transferables] = toWireValue(returnValue2);
      ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
      if (type === "RELEASE") {
        ep.removeEventListener("message", callback);
        closeEndPoint(ep);
      }
    });
  });
  if (ep.start) {
    ep.start();
  }
}
function isMessagePort(endpoint) {
  return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
  if (isMessagePort(endpoint))
    endpoint.close();
}
function wrap(ep, target) {
  return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
  if (isReleased) {
    throw new Error("Proxy has been released and is not useable");
  }
}
function createProxy(ep, path = [], target = function() {
}) {
  let isProxyReleased = false;
  const proxy2 = new Proxy(target, {
    get(_target, prop) {
      throwIfProxyReleased(isProxyReleased);
      if (prop === releaseProxy) {
        return () => {
          return requestResponseMessage(ep, {
            type: "RELEASE",
            path: path.map((p2) => p2.toString())
          }).then(() => {
            closeEndPoint(ep);
            isProxyReleased = true;
          });
        };
      }
      if (prop === "then") {
        if (path.length === 0) {
          return { then: () => proxy2 };
        }
        const r5 = requestResponseMessage(ep, {
          type: "GET",
          path: path.map((p2) => p2.toString())
        }).then(fromWireValue);
        return r5.then.bind(r5);
      }
      return createProxy(ep, [...path, prop]);
    },
    set(_target, prop, rawValue) {
      throwIfProxyReleased(isProxyReleased);
      const [value, transferables] = toWireValue(rawValue);
      return requestResponseMessage(ep, {
        type: "SET",
        path: [...path, prop].map((p2) => p2.toString()),
        value
      }, transferables).then(fromWireValue);
    },
    apply(_target, _thisArg, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const last = path[path.length - 1];
      if (last === createEndpoint) {
        return requestResponseMessage(ep, {
          type: "ENDPOINT"
        }).then(fromWireValue);
      }
      if (last === "bind") {
        return createProxy(ep, path.slice(0, -1));
      }
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, {
        type: "APPLY",
        path: path.map((p2) => p2.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    },
    construct(_target, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, {
        type: "CONSTRUCT",
        path: path.map((p2) => p2.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    }
  });
  return proxy2;
}
function myFlat(arr) {
  return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
  const processed = argumentList.map(toWireValue);
  return [processed.map((v2) => v2[0]), myFlat(processed.map((v2) => v2[1]))];
}
var transferCache = /* @__PURE__ */ new WeakMap();
function transfer(obj, transfers) {
  transferCache.set(obj, transfers);
  return obj;
}
function proxy(obj) {
  return Object.assign(obj, { [proxyMarker]: true });
}
function toWireValue(value) {
  for (const [name, handler] of transferHandlers) {
    if (handler.canHandle(value)) {
      const [serializedValue, transferables] = handler.serialize(value);
      return [
        {
          type: "HANDLER",
          name,
          value: serializedValue
        },
        transferables
      ];
    }
  }
  return [
    {
      type: "RAW",
      value
    },
    transferCache.get(value) || []
  ];
}
function fromWireValue(value) {
  switch (value.type) {
    case "HANDLER":
      return transferHandlers.get(value.name).deserialize(value.value);
    case "RAW":
      return value.value;
  }
}
function requestResponseMessage(ep, msg, transfers) {
  return new Promise((resolve) => {
    const id = generateUUID();
    ep.addEventListener("message", function l8(ev) {
      if (!ev.data || !ev.data.id || ev.data.id !== id) {
        return;
      }
      ep.removeEventListener("message", l8);
      resolve(ev.data);
    });
    if (ep.start) {
      ep.start();
    }
    ep.postMessage(Object.assign({ id }, msg), transfers);
  });
}
function generateUUID() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}

// ../node_modules/playground-elements/shared/worker-api.js
var CONFIGURE_PROXY = 1;
var CONNECT_PROJECT_TO_SW = 3;
var ACKNOWLEDGE_SW_CONNECTION = 4;
var UPDATE_SERVICE_WORKER = 6;

// ../node_modules/playground-elements/shared/util.js
var endWithSlash = (s6) => s6.endsWith("/") ? s6 : s6 + "/";
var getRandomString = () => crypto.getRandomValues(new Uint32Array(1))[0].toString(32);
var forceSkypackRawMode = (url) => {
  if (url.hostname === "cdn.skypack.dev") {
    url.pathname = url.pathname.replace(/mode=imports\/(un)?optimized/, "mode=raw");
  }
  return url;
};

// ../node_modules/fuse.js/dist/fuse.esm.js
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
var INFINITY = 1 / 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject2(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject2(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
var hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      totalWeight += obj.weight;
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i8 = 0, len = value.length; i8 < len; i8 += 1) {
          deepGet(value[i8], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
var MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
var BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a4, b2) => a4.score === b2.score ? a4.idx < b2.idx ? -1 : 1 : a4.score < b2.score ? -1 : 1
};
var FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
var AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};
var SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m2 = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n9 = parseFloat(Math.round(norm2 * m2) / m2);
      cache.set(numTokens, n9);
      return n9;
    },
    clear() {
      cache.clear();
    }
  };
}
var FuseIndex = class {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i8 = idx, len = this.size(); i8 < len; i8 += 1) {
      this.records[i8].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k2) => {
              stack.push({
                nestedArrIndex: k2,
                value: item
              });
            });
          } else
            ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
};
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i8 = 0;
  for (let len = matchmask.length; i8 < len; i8 += 1) {
    let match = matchmask[i8];
    if (match && start === -1) {
      start = i8;
    } else if (!match && start !== -1) {
      end = i8 - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i8 - 1] && i8 - start >= minMatchCharLength) {
    indices.push([start, i8 - 1]);
  }
  return indices;
}
var MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i8 = 0;
      while (i8 < patternLen) {
        matchMask[index + i8] = 1;
        i8 += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i8 = 0; i8 < patternLen; i8 += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i8,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i8) - 1;
    for (let j2 = finish; j2 >= start; j2 -= 1) {
      let currentLocation = j2 - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j2] = (bitArr[j2 + 1] << 1 | 1) & charMatch;
      if (i8) {
        bitArr[j2] |= (lastBitArr[j2 + 1] | lastBitArr[j2]) << 1 | 1 | lastBitArr[j2 + 1];
      }
      if (bitArr[j2] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i8,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i8 + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i8 = 0, len = pattern.length; i8 < len; i8 += 1) {
    const char = pattern.charAt(i8);
    mask[char] = (mask[char] || 0) | 1 << len - i8 - 1;
  }
  return mask;
}
var BitapSearch = class {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i8 = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i8 < end) {
        addChunk(this.pattern.substr(i8, MAX_BITS), i8);
        i8 += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;
    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
};
var BaseMatch = class {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
};
function getMatch(pattern, exp) {
  const matches2 = pattern.match(exp);
  return matches2 ? matches2[1] : null;
}
var ExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InverseExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var PrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InversePrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var SuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
};
var InverseSuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var FuzzyMatch = class extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
};
var IncludeMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
};
var searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
var searchersLen = searchers.length;
var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
var OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i8 = 0, len = query.length; i8 < len; i8 += 1) {
      const queryItem = query[i8];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
var ExtendedSearch = class {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_2, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i8 = 0, qLen = query.length; i8 < qLen; i8 += 1) {
      const searchers2 = query[i8];
      allIndices.length = 0;
      numMatches = 0;
      for (let j2 = 0, pLen = searchers2.length; j2 < pLen; j2 += 1) {
        const searcher = searchers2[j2];
        const { isMatch, indices, score } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
};
var registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i8 = 0, len = registeredSearchers.length; i8 < len; i8 += 1) {
    let searcherClass = registeredSearchers[i8];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
var LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
var KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
var isPath = (query) => !!query[KeyType.PATH];
var isLeaf = (query) => !isArray(query) && isObject2(query) && !isExpression(query);
var convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches2 = result.matches;
  data.matches = [];
  if (!isDefined(matches2)) {
    return;
  }
  matches2.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches)
    transformers.push(transformMatches);
  if (includeScore)
    transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
var Fuse = class {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };
    if (this.options.useExtendedSearch && false) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i8 = 0, len = this._docs.length; i8 < len; i8 += 1) {
      const doc = this._docs[i8];
      if (predicate(doc, i8)) {
        this.removeAt(i8);
        i8 -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text, i: idx, n: norm2 }) => {
      if (!isDefined(text)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches2 = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches2 && matches2.length) {
          return [
            {
              idx,
              item,
              matches: matches2
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i8 = 0, len = node.children.length; i8 < len; i8 += 1) {
        const child = node.children[i8];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches: matches2 }) => {
            resultMap[idx].matches.push(...matches2);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches2 = [];
      keys.forEach((key, keyIndex) => {
        matches2.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });
      if (matches2.length) {
        results.push({
          idx,
          item,
          matches: matches2
        });
      }
    });
    return results;
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches2 = [];
    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches2.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        matches2.push({ score, key, value: text, norm: norm2, indices });
      }
    }
    return matches2;
  }
};
Fuse.version = "6.6.2";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}

// ../node_modules/playground-elements/shared/completion-utils.js
function sortCompletionItems(completions, searchWord) {
  if (!completions)
    return [];
  const fuse = new Fuse(completions !== null && completions !== void 0 ? completions : [], {
    // Keep the threshold a bit lower than the default
    // so that the matching isn't too forgiving/confusing, but so
    // that a small typo doesn't delete all of the matches
    threshold: 0.3,
    shouldSort: true,
    isCaseSensitive: true,
    includeScore: true,
    includeMatches: true,
    keys: ["name"],
    // Match characters so that at least most of the word matches
    minMatchCharLength: Math.max(searchWord.length / 1.2, 1)
  });
  const relevantCompletions = fuse.search(searchWord);
  const editorCompletions = relevantCompletions.map((item) => {
    var _a3;
    return {
      text: item.item.name,
      displayText: item.item.name,
      score: (_a3 = item.score) !== null && _a3 !== void 0 ? _a3 : 0,
      matches: item.matches,
      get details() {
        return item.item.details;
      }
    };
  }).sort((a4, b2) => {
    if (a4.score === b2.score) {
      return a4.text.localeCompare(b2.text);
    }
    return a4.score - b2.score;
  });
  return editorCompletions;
}
function completionEntriesAsEditorCompletions(completions, prefix = "") {
  var _a3;
  return (_a3 = completions === null || completions === void 0 ? void 0 : completions.map((comp) => ({
    // Since the completion engine will only append the word
    // given as the text property here, auto-completing from a period
    // would replace the period with the word. This is why we need
    // to append the period into the text property. This is not visible to the
    // user however, so no harm is done.
    text: prefix + comp.name,
    displayText: comp.name,
    score: Number.parseInt(comp.sortText),
    get details() {
      return comp.details;
    }
  }))) !== null && _a3 !== void 0 ? _a3 : [];
}
function populateCompletionInfoWithDetailGetters(completionInfo, filename, cursorIndex, getCompletionDetailsFunction) {
  const completionInfoWithDetails = completionInfo;
  completionInfoWithDetails.entries = completionInfo === null || completionInfo === void 0 ? void 0 : completionInfo.entries.map((entry) => ({
    ...entry,
    // Details are fetched using a proxy pattern, in which the details
    // are not instantiated until requested for. When asking for details
    // from the completion item, the getter is called, launching the
    // query if needed.
    _details: void 0,
    get details() {
      if (!this._details) {
        this._details = getCompletionDetailsFunction(filename, cursorIndex, entry.name);
      }
      return this._details;
    }
  }));
  return completionInfoWithDetails;
}

// ../node_modules/playground-elements/shared/version.js
var npmVersion = "0.18.1";
var serviceWorkerHash = "1dae6563";

// ../node_modules/playground-elements/shared/deferred.js
var Deferred = class {
  constructor() {
    this.settled = false;
    this.promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  resolve(value) {
    this.settled = true;
    this._resolve(value);
  }
  reject(reason) {
    this.settled = true;
    this._reject(reason);
  }
};

// ../node_modules/playground-elements/internal/build.js
var unreachable = (n9) => n9;
var errorNotFound = {
  status: (
    /* Not Found */
    404
  ),
  body: "Playground file not found"
};
var errorCancelled = {
  status: (
    /* Service Unavailable */
    503
  ),
  body: "Playground build cancelled"
};
var PlaygroundBuild = class {
  /**
   * @param diagnosticsCallback Function that will be invoked when one or more
   * new diagnostics have been received. Fires at most once per animation frame.
   */
  constructor(diagnosticsCallback) {
    this.diagnostics = /* @__PURE__ */ new Map();
    this._state = "active";
    this._stateChange = new Deferred();
    this._files = /* @__PURE__ */ new Map();
    this._diagnosticsCallback = diagnosticsCallback;
  }
  /**
   * The current state of this build.
   */
  state() {
    return this._state;
  }
  /**
   * Promise of the next state change.
   */
  get stateChange() {
    return this._stateChange.promise;
  }
  /**
   * Set this build's state to cancelled, ignore any future build results, and
   * fail any pending file gets.
   */
  cancel() {
    this._errorPendingFileRequests(errorCancelled);
    this._changeState("cancelled");
  }
  /**
   * Return a promise of a build output with the given name. If the file is not
   * received before the build is completed or cancelled, this promise will be
   * rejected.
   */
  async getFile(name) {
    let deferred = this._files.get(name);
    if (deferred === void 0) {
      if (this._state === "done") {
        return errorNotFound;
      } else if (this._state === "cancelled") {
        return errorCancelled;
      }
      deferred = new Deferred();
      this._files.set(name, deferred);
    }
    return deferred.promise;
  }
  /**
   * Handle a worker build output.
   */
  onOutput(output) {
    if (this._state !== "active") {
      return;
    }
    if (output.kind === "file") {
      this._onFile(output);
    } else if (output.kind === "diagnostic") {
      this._onDiagnostic(output);
    } else if (output.kind === "done") {
      this._onDone();
    } else {
      throw new Error(`Unexpected BuildOutput kind: ${unreachable(output).kind}`);
    }
  }
  _changeState(state) {
    this._state = state;
    this._stateChange.resolve();
    this._stateChange = new Deferred();
  }
  _onFile(output) {
    let deferred = this._files.get(output.file.name);
    if (deferred === void 0) {
      deferred = new Deferred();
      this._files.set(output.file.name, deferred);
    }
    deferred.resolve(output.file);
  }
  _onDiagnostic(output) {
    let arr = this.diagnostics.get(output.filename);
    if (arr === void 0) {
      arr = [];
      this.diagnostics.set(output.filename, arr);
    }
    arr.push(output.diagnostic);
    if (this._diagnosticsDebounceId === void 0) {
      this._diagnosticsDebounceId = requestAnimationFrame(() => {
        if (this._state !== "cancelled") {
          this._diagnosticsDebounceId = void 0;
          this._diagnosticsCallback();
        }
      });
    }
  }
  _onDone() {
    this._errorPendingFileRequests(errorNotFound);
    this._changeState("done");
  }
  _errorPendingFileRequests(error) {
    for (const file of this._files.values()) {
      if (!file.settled) {
        file.resolve(error);
      }
    }
  }
};

// ../node_modules/playground-elements/playground-project.js
var sessions = /* @__PURE__ */ new Set();
var generateUniqueSessionId = () => {
  let sessionId;
  do {
    sessionId = getRandomString();
  } while (sessions.has(sessionId));
  sessions.add(sessionId);
  return sessionId;
};
var FilesChangedEvent = class extends Event {
  constructor(projectLoaded = false) {
    super("filesChanged");
    this.projectLoaded = projectLoaded;
  }
};
var PlaygroundProject = class PlaygroundProject2 extends s4 {
  constructor() {
    super(...arguments);
    this._source = { type: "none" };
    this.sandboxBaseUrl = `https://unpkg.com/playground-elements@${npmVersion}/`;
    this.sandboxScope = `__playground_swfs_${serviceWorkerHash}/`;
    this._modified = false;
    this._sessionId = generateUniqueSessionId();
    this._deferredTypeScriptWorkerApi = new Deferred();
    this._validImportMap = {};
    this.lastSave = Promise.resolve();
    this.savePending = false;
  }
  /**
   * A document-relative path to a project configuration file.
   *
   * When both `projectSrc` and `files` are set, the one set most recently wins.
   * Slotted children win only if both `projectSrc` and `files` are undefined
   */
  get projectSrc() {
    if (this._source.type === "url") {
      return this._source.url;
    }
    return void 0;
  }
  set projectSrc(url) {
    if (url) {
      if (this._source.type !== "url" || this._source.url !== url) {
        this._source = { type: "url", url };
      }
    } else if (this._source.type === "url") {
      this._source = { type: "none" };
    }
  }
  /**
   * Get or set the project config.
   *
   * When both `projectSrc` and `config` are set, the one set most recently
   * wins. Slotted children win only if both `projectSrc` and `config` are
   * undefined.
   */
  get config() {
    var _a3;
    return {
      files: Object.fromEntries(((_a3 = this._files) !== null && _a3 !== void 0 ? _a3 : []).map((file) => [
        file.name,
        {
          ...file,
          name: void 0
        }
      ])),
      importMap: this._validImportMap
    };
  }
  set config(config) {
    if (config) {
      this._source = { type: "direct", config };
    } else if (this._source.type === "direct") {
      this._source = { type: "none" };
    }
  }
  get files() {
    return this._files;
  }
  /**
   * Map from filename to array of Language Server Protocol diagnostics
   * resulting from the latest compilation.
   */
  get diagnostics() {
    var _a3;
    return (_a3 = this._build) === null || _a3 === void 0 ? void 0 : _a3.diagnostics;
  }
  /**
   * Indicates whether the user has modified, added, or removed any project
   * files. Resets whenever a new project is loaded.
   */
  get modified() {
    if (this._modified === void 0) {
      if (this._files === void 0 && this._pristineFiles === void 0) {
        this._modified = false;
      } else if (this._files === void 0 || this._pristineFiles === void 0) {
        this._modified = true;
      } else {
        this._modified = !playgroundFilesDeepEqual(this._files, this._pristineFiles);
      }
    }
    return this._modified;
  }
  set _importMap(importMap) {
    const errors = validateImportMap(importMap);
    if (errors.length > 0) {
      for (const error of errors) {
        console.error(error);
      }
      this._validImportMap = {};
    } else {
      this._validImportMap = importMap;
    }
  }
  get _importMap() {
    return this._validImportMap;
  }
  get _normalizedSandboxBaseUrl() {
    const url = new URL(this.sandboxBaseUrl, import.meta.url);
    url.pathname = endWithSlash(url.pathname);
    return url;
  }
  get baseUrl() {
    if (this._serviceWorkerAPI === void 0 || this._files === void 0) {
      return void 0;
    }
    const indexUrl = new URL(`${endWithSlash(this.sandboxScope)}${this._sessionId}/`, this._normalizedSandboxBaseUrl);
    return indexUrl.href;
  }
  get _serviceWorkerProxyIframeUrl() {
    return new URL(`playground-service-worker-proxy.html#playground-session-id=${this._sessionId}`, this._normalizedSandboxBaseUrl).href;
  }
  async update(changedProperties) {
    if (changedProperties.has("_source")) {
      this._loadProjectFromSource();
    }
    if (changedProperties.has("sandboxScope") || changedProperties.has("sandboxBaseUrl") || changedProperties.has("_serviceWorkerAPI")) {
      this.dispatchEvent(new CustomEvent("urlChanged"));
    }
    super.update(changedProperties);
  }
  async _loadProjectFromSource() {
    const source = this._source;
    switch (source.type) {
      case "none":
        this._files = void 0;
        this._importMap = {};
        break;
      case "direct":
        {
          const { files, importMap } = await expandProjectConfig(source.config, document.baseURI);
          if (source !== this._source) {
            return;
          }
          this._files = files;
          this._importMap = importMap;
        }
        break;
      case "slot":
        this._files = source.files;
        this._importMap = source.importMap;
        break;
      case "url":
        {
          const { files, importMap } = await fetchProjectConfig(new URL(source.url, document.baseURI).href);
          if (source !== this._source) {
            return;
          }
          this._files = files;
          this._importMap = importMap;
        }
        break;
      default:
        source;
        break;
    }
    this._pristineFiles = this._files && JSON.parse(JSON.stringify(this._files));
    this._modified = false;
    this.dispatchEvent(new FilesChangedEvent(true));
    this.save();
  }
  render() {
    return x`
      <slot @slotchange=${this._slotChange}></slot>
      <iframe
        src=${this._serviceWorkerProxyIframeUrl}
        @load=${this._onServiceWorkerProxyIframeLoad}
      ></iframe>
    `;
  }
  _slotChange() {
    var _a3;
    const { type } = this._source;
    if (type !== "none" && type !== "slot") {
      return;
    }
    const files = [];
    let importMap = void 0;
    for (const s6 of this._slot.assignedElements({ flatten: true })) {
      const typeAttr = s6.getAttribute("type");
      if (!(typeAttr === null || typeAttr === void 0 ? void 0 : typeAttr.startsWith("sample/"))) {
        continue;
      }
      const fileType = typeAttr.substring("sample/".length);
      let content = (_a3 = s6.textContent) !== null && _a3 !== void 0 ? _a3 : "";
      if (fileType === "html") {
        content = content.replace(/&lt;\//g, "</");
      }
      if (!s6.hasAttribute("preserve-whitespace")) {
        content = outdent(content);
      }
      if (fileType === "importmap") {
        try {
          importMap = JSON.parse(content);
        } catch {
          console.error("Invalid import map JSON", s6);
        }
      } else {
        const name = s6.getAttribute("filename");
        if (!name) {
          continue;
        }
        const label = s6.getAttribute("label") || void 0;
        const selected = s6.hasAttribute("selected");
        const contentType = typeEnumToMimeType(fileType);
        files.push({
          name,
          label,
          hidden: s6.hasAttribute("hidden"),
          content,
          contentType,
          selected
        });
      }
    }
    if (files.length > 0 || importMap !== void 0) {
      this._source = { type: "slot", files, importMap: importMap !== null && importMap !== void 0 ? importMap : {} };
    }
  }
  async firstUpdated() {
    const typescriptWorkerScriptUrl = forceSkypackRawMode(new URL("./playground-typescript-worker.js", import.meta.url));
    let worker;
    if (typescriptWorkerScriptUrl.origin === window.location.origin) {
      worker = new Worker(typescriptWorkerScriptUrl);
    } else {
      const resp = await fetch(typescriptWorkerScriptUrl.href);
      const text = await resp.text();
      const blobUrl = URL.createObjectURL(new Blob([text], { type: "application/javascript" }));
      worker = new Worker(blobUrl);
      URL.revokeObjectURL(blobUrl);
    }
    this._deferredTypeScriptWorkerApi.resolve(wrap(worker));
  }
  _onServiceWorkerProxyIframeLoad() {
    const { port1, port2 } = new MessageChannel();
    port1.addEventListener("message", (event) => {
      if (event.data.type === CONNECT_PROJECT_TO_SW) {
        this._onNewServiceWorkerPort(event.data.port);
      }
    });
    port1.start();
    this._postMessageToServiceWorkerProxyIframe({
      type: CONFIGURE_PROXY,
      scope: this.sandboxScope,
      port: port2
    }, [port2]);
  }
  _onNewServiceWorkerPort(port) {
    const onMessage = (e12) => {
      if (e12.data.type === ACKNOWLEDGE_SW_CONNECTION) {
        port.removeEventListener("message", onMessage);
        if (e12.data.version === serviceWorkerHash) {
          this._serviceWorkerAPI = wrap(port);
          this._serviceWorkerAPI.setFileAPI(proxy({
            getFile: (name) => this._getFile(name)
          }), this._sessionId);
        } else {
          console.info(`Playground service worker is outdated. Want ${serviceWorkerHash} but got ${e12.data.version}. Waiting for update.`);
          this._postMessageToServiceWorkerProxyIframe({
            type: UPDATE_SERVICE_WORKER
          });
        }
      }
    };
    port.addEventListener("message", onMessage);
    port.start();
  }
  _postMessageToServiceWorkerProxyIframe(message, transfer2) {
    const iframeWindow = this._serviceWorkerProxyIframe.contentWindow;
    if (!iframeWindow) {
      throw new Error("Unexpected internal error: <playground-project> service worker proxy iframe had no contentWindow");
    }
    iframeWindow.postMessage(message, "*", transfer2);
  }
  async _getFile(name) {
    if (this._build === void 0) {
      return {
        status: (
          /* Service Unavailable */
          503
        ),
        body: "Playground build not started"
      };
    }
    return this._build.getFile(name);
  }
  /**
   * Build this project immediately, cancelling any previous build.
   */
  async save() {
    var _a3, _b3;
    (_a3 = this._build) === null || _a3 === void 0 ? void 0 : _a3.cancel();
    const build = new PlaygroundBuild(() => {
      this.dispatchEvent(new CustomEvent("diagnosticsChanged"));
    });
    this._build = build;
    this.dispatchEvent(new CustomEvent("compileStart"));
    const workerApi = await this._deferredTypeScriptWorkerApi.promise;
    if (build.state() !== "active") {
      return;
    }
    workerApi.compileProject((_b3 = this._files) !== null && _b3 !== void 0 ? _b3 : [], { importMap: this._importMap }, proxy((result) => build.onOutput(result)));
    await build.stateChange;
    if (build.state() !== "done") {
      return;
    }
    this.dispatchEvent(new CustomEvent("compileDone"));
  }
  async getCompletions(changeData) {
    var _a3, _b3, _c;
    const tokenUnderCursorAsString = changeData.tokenUnderCursor.trim();
    if (!changeData.isRefinement) {
      const workerApi = await this._deferredTypeScriptWorkerApi.promise;
      const completionInfo = await workerApi.getCompletions(changeData.fileName, changeData.fileContent, tokenUnderCursorAsString, changeData.cursorIndex, { importMap: this._importMap });
      if (completionInfo) {
        const getCompletionDetailsFunction = this._getCompletionDetails.bind(this);
        this._completionInfo = populateCompletionInfoWithDetailGetters(completionInfo, changeData.fileName, changeData.cursorIndex, getCompletionDetailsFunction);
      }
    }
    const skipFuzzySearch = changeData.tokenUnderCursor === "." || changeData.tokenUnderCursor === "";
    let completions = [];
    if (skipFuzzySearch) {
      completions = completionEntriesAsEditorCompletions((_a3 = this._completionInfo) === null || _a3 === void 0 ? void 0 : _a3.entries, changeData.tokenUnderCursor);
    } else {
      completions = sortCompletionItems((_b3 = this._completionInfo) === null || _b3 === void 0 ? void 0 : _b3.entries, tokenUnderCursorAsString);
    }
    void ((_c = completions[0]) === null || _c === void 0 ? void 0 : _c.details);
    return completions;
  }
  async _getCompletionDetails(filename, cursorIndex, completionWord) {
    const workerApi = await this._deferredTypeScriptWorkerApi.promise;
    const completionItemDetails = await workerApi.getCompletionItemDetails(filename, cursorIndex, { importMap: this._importMap }, completionWord);
    return completionItemDetails;
  }
  /**
   * A simple debouncer that aims for maximal responsiveness when compiles are fast.
   *
   * There is no meaning to when the returned promise resolves.
   */
  async saveDebounced() {
    if (this.savePending) {
      return;
    }
    this.savePending = true;
    await this.lastSave;
    this.savePending = false;
    this.lastSave = this.save();
  }
  isValidNewFilename(name) {
    var _a3;
    if (!name) {
      return false;
    }
    const existing = (_a3 = this._files) === null || _a3 === void 0 ? void 0 : _a3.find((file) => file.name === name);
    if (existing !== void 0) {
      return existing.hidden === true;
    }
    return true;
  }
  editFile(file, newContent) {
    file.content = newContent;
    this._modified = void 0;
    this.saveDebounced();
  }
  addFile(name) {
    var _a3;
    if (!this._files || !this.isValidNewFilename(name)) {
      return;
    }
    const existing = (_a3 = this._files) === null || _a3 === void 0 ? void 0 : _a3.find((file) => file.name === name);
    if ((existing === null || existing === void 0 ? void 0 : existing.hidden) === true) {
      existing.hidden = false;
    } else {
      this._files.push({
        name,
        content: "",
        contentType: typeFromFilename(name)
      });
    }
    this._modified = void 0;
    this.requestUpdate();
    this.dispatchEvent(new FilesChangedEvent());
    this.save();
  }
  deleteFile(filename) {
    if (!this._files) {
      return;
    }
    const idx = this._files.findIndex((file) => file.name === filename);
    if (idx < 0) {
      return;
    }
    this._files = [...this._files.slice(0, idx), ...this._files.slice(idx + 1)];
    this._modified = void 0;
    this.dispatchEvent(new FilesChangedEvent());
    this.save();
  }
  renameFile(oldName, newName) {
    if (!oldName || !this._files) {
      return;
    }
    if (!this.isValidNewFilename(newName)) {
      return;
    }
    const file = this._files.find((file2) => file2.name === oldName);
    if (!file) {
      return;
    }
    file.name = newName;
    file.contentType = typeFromFilename(newName);
    this._files = [...this._files];
    this._modified = void 0;
    this.dispatchEvent(new FilesChangedEvent());
    this.save();
  }
};
PlaygroundProject.styles = i`
    iframe {
      display: none;
    }
  `;
__decorate([
  n5({ attribute: "project-src", hasChanged: () => false })
], PlaygroundProject.prototype, "projectSrc", null);
__decorate([
  n5({ attribute: false, hasChanged: () => false })
], PlaygroundProject.prototype, "config", null);
__decorate([
  t3()
], PlaygroundProject.prototype, "_source", void 0);
__decorate([
  n5({ attribute: "sandbox-base-url" })
], PlaygroundProject.prototype, "sandboxBaseUrl", void 0);
__decorate([
  n5({ attribute: "sandbox-scope" })
], PlaygroundProject.prototype, "sandboxScope", void 0);
__decorate([
  t3()
], PlaygroundProject.prototype, "_serviceWorkerAPI", void 0);
__decorate([
  i4("slot")
], PlaygroundProject.prototype, "_slot", void 0);
__decorate([
  i4("iframe")
], PlaygroundProject.prototype, "_serviceWorkerProxyIframe", void 0);
PlaygroundProject = __decorate([
  e4("playground-project")
], PlaygroundProject);
var fetchProjectConfig = async (url, alreadyFetchedFilenames = /* @__PURE__ */ new Set(), alreadyFetchedConfigUrls = /* @__PURE__ */ new Set()) => {
  if (alreadyFetchedConfigUrls.has(url)) {
    throw new Error(`Circular project config extends: ${[
      ...alreadyFetchedConfigUrls.values(),
      url
    ].join(" extends ")}`);
  }
  alreadyFetchedConfigUrls.add(url);
  const resp = await fetch(url);
  if (resp.status !== 200) {
    throw new Error(`Error ${resp.status} fetching project config from ${url}: ${await resp.text()}`);
  }
  let config;
  try {
    config = await resp.json();
  } catch (e12) {
    throw new Error(`Error parsing project config JSON from ${url}: ${e12.message}`);
  }
  return await expandProjectConfig(config, url, alreadyFetchedFilenames, alreadyFetchedConfigUrls);
};
var expandProjectConfig = async (config, baseUrl, alreadyFetchedFilenames = /* @__PURE__ */ new Set(), alreadyFetchedConfigUrls = /* @__PURE__ */ new Set()) => {
  var _a3, _b3, _c, _d, _e;
  const filePromises = [];
  for (const [filename, info] of Object.entries((_a3 = config.files) !== null && _a3 !== void 0 ? _a3 : {})) {
    if (alreadyFetchedFilenames.has(filename)) {
      continue;
    }
    alreadyFetchedFilenames.add(filename);
    if (info.content === void 0) {
      filePromises.push((async () => {
        var _a4, _b4;
        const resp = await fetch(new URL(filename, baseUrl).href);
        return {
          ...info,
          name: filename,
          content: await resp.text(),
          contentType: (_b4 = (_a4 = resp.headers.get("Content-Type")) === null || _a4 === void 0 ? void 0 : _a4.toLowerCase()) !== null && _b4 !== void 0 ? _b4 : "text/plain"
        };
      })());
    } else {
      filePromises.push(Promise.resolve({
        ...info,
        name: filename,
        content: (_b3 = info.content) !== null && _b3 !== void 0 ? _b3 : "",
        contentType: (_c = typeFromFilename(filename)) !== null && _c !== void 0 ? _c : "text/plain"
      }));
    }
  }
  const extendsConfigPromise = config.extends ? fetchProjectConfig(new URL(config.extends, baseUrl).href, alreadyFetchedFilenames, alreadyFetchedConfigUrls) : void 0;
  const files = await Promise.all(filePromises);
  const importMap = (_d = config.importMap) !== null && _d !== void 0 ? _d : {};
  if (extendsConfigPromise) {
    const extendsConfig = await extendsConfigPromise;
    files.push(...extendsConfig.files);
    importMap.imports = {
      ...(_e = extendsConfig.importMap) === null || _e === void 0 ? void 0 : _e.imports,
      // Our imports take precedence over our parents.
      ...importMap.imports
    };
  }
  return { files, importMap };
};
var typeFromFilename = (filename) => {
  const idx = filename.lastIndexOf(".");
  if (idx === -1 || idx === filename.length - 1) {
    return void 0;
  }
  const extension = filename.slice(idx + 1);
  return typeEnumToMimeType(extension);
};
var typeEnumToMimeType = (type) => {
  if (type === void 0) {
    return;
  }
  switch (type) {
    case "ts":
      return "video/mp2t";
    case "js":
      return "application/javascript; charset=utf-8";
    case "json":
      return "application/json; charset=utf-8";
    case "jsx":
      return "text/jsx; charset=utf-8";
    case "tsx":
      return "text/typescript-jsx; charset=utf-8";
    case "html":
      return "text/html; charset=utf-8";
    case "css":
      return "text/css; charset=utf-8";
    case "svg":
      return "image/svg+xml";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    case "jpeg":
    case "jpg":
      return "image/jpeg";
    case "ico":
      return "image/vnd.microsoft.icon";
    case "webp":
      return "image/webp";
    case "webm":
      return "video/webm";
    case "mid":
    case "midi":
      return "audio/midi";
    case "mp3":
      return "audio/mpeg";
    case "weba":
      return "audio/webm";
  }
  return void 0;
};
var validateImportMap = (importMap) => {
  const errors = [];
  if (typeof importMap !== "object" || importMap === null) {
    errors.push(`Import map is invalid because it must be an object, but it was ${importMap === null ? "null" : typeof importMap}.`);
    return errors;
  }
  const invalidKeys = Object.keys(importMap).filter((key) => key !== "imports");
  if (invalidKeys.length > 0) {
    errors.push(`Invalid import map properties: ${[...invalidKeys].join(", ")}. Only "imports" are currently supported.`);
  }
  const imports = importMap.imports;
  if (imports === void 0) {
    return errors;
  }
  if (typeof imports !== "object" || imports === null) {
    errors.push(`Import map "imports" property is invalid because it must be an object, but it was ${imports === null ? "null" : typeof imports}.`);
    return errors;
  }
  for (const [specifierKey, resolutionResult] of Object.entries(imports)) {
    if (typeof resolutionResult !== "string") {
      errors.push(`Import map key "${specifierKey}" is invalid because address must be a string, but was ${resolutionResult === null ? "null" : typeof resolutionResult}`);
      continue;
    }
    if (specifierKey.endsWith("/") && !resolutionResult.endsWith("/")) {
      errors.push(`Import map key "${specifierKey}" is invalid because address "${resolutionResult}" must end in a forward-slash.`);
    }
    try {
      new URL(resolutionResult);
    } catch {
      errors.push(`Import map key "${specifierKey}" is invalid because address "${resolutionResult}" is not a valid URL.`);
    }
  }
  return errors;
};
var outdent = (str) => {
  str = str.replace(/(^[\n\s]*\n)|(\n[\n\s]*$)/g, "");
  let shortestIndent;
  for (const line of str.split(/\n/g)) {
    const indent = line.match(/^\s*/)[0].length;
    if (shortestIndent === void 0 || indent < shortestIndent) {
      shortestIndent = indent;
    }
  }
  return str.replace(RegExp(`^\\s{${shortestIndent !== null && shortestIndent !== void 0 ? shortestIndent : 0}}`, "gm"), "");
};
var playgroundFilesDeepEqual = (filesA, filesB) => {
  if (filesA.length !== filesB.length) {
    return false;
  }
  for (let i8 = 0; i8 < filesA.length; i8++) {
    const fileA = filesA[i8];
    const fileB = filesB[i8];
    if (fileA.name !== fileB.name || fileA.contentType !== fileB.contentType || fileA.hidden !== fileB.hidden || fileA.label !== fileB.label) {
      return false;
    }
  }
  for (let i8 = 0; i8 < filesA.length; i8++) {
    const fileA = filesA[i8];
    const fileB = filesB[i8];
    if (fileA.content !== fileB.content) {
      return false;
    }
  }
  return true;
};

// ../node_modules/@material/dom/ponyfill.js
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

// ../node_modules/@material/mwc-base/utils.js
var isNodeElement = (node) => {
  return node.nodeType === Node.ELEMENT_NODE;
};
function addHasRemoveClass(element) {
  return {
    addClass: (className) => {
      element.classList.add(className);
    },
    removeClass: (className) => {
      element.classList.remove(className);
    },
    hasClass: (className) => element.classList.contains(className)
  };
}
var supportsPassive = false;
var fn = () => {
};
var optionsBlock = {
  get passive() {
    supportsPassive = true;
    return false;
  }
};
document.addEventListener("x", fn, optionsBlock);
document.removeEventListener("x", fn);
var deepActiveElementPath = (doc = window.document) => {
  let activeElement = doc.activeElement;
  const path = [];
  if (!activeElement) {
    return path;
  }
  while (activeElement) {
    path.push(activeElement);
    if (activeElement.shadowRoot) {
      activeElement = activeElement.shadowRoot.activeElement;
    } else {
      break;
    }
  }
  return path;
};
var doesElementContainFocus = (element) => {
  const activePath = deepActiveElementPath();
  if (!activePath.length) {
    return false;
  }
  const deepActiveElement = activePath[activePath.length - 1];
  const focusEv = new Event("check-if-focused", { bubbles: true, composed: true });
  let composedPath = [];
  const listener = (ev) => {
    composedPath = ev.composedPath();
  };
  document.body.addEventListener("check-if-focused", listener);
  deepActiveElement.dispatchEvent(focusEv);
  document.body.removeEventListener("check-if-focused", listener);
  return composedPath.indexOf(element) !== -1;
};

// ../node_modules/@material/mwc-base/base-element.js
var BaseElement = class extends s4 {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus();
      this.mdcRoot.click();
      return;
    }
    super.click();
  }
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    if (this.mdcFoundation !== void 0) {
      this.mdcFoundation.destroy();
    }
    if (this.mdcFoundationClass) {
      this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
      this.mdcFoundation.init();
    }
  }
  firstUpdated() {
    this.createFoundation();
  }
};

// ../node_modules/@material/base/foundation.js
var MDCFoundation = (
  /** @class */
  function() {
    function MDCFoundation2(adapter) {
      if (adapter === void 0) {
        adapter = {};
      }
      this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation2, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "strings", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "numbers", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    MDCFoundation2.prototype.init = function() {
    };
    MDCFoundation2.prototype.destroy = function() {
    };
    return MDCFoundation2;
  }()
);

// ../node_modules/@material/ripple/constants.js
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};

// ../node_modules/@material/ripple/util.js
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x2 = pageOffset.x, y2 = pageOffset.y;
  var documentX = x2 + clientRect.left;
  var documentY = y2 + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}

// ../node_modules/@material/ripple/foundation.js
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCRippleFoundation2, _super);
    function MDCRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.activationAnimationHasEnded = false;
      _this.activationTimer = 0;
      _this.fgDeactivationRemovalTimer = 0;
      _this.fgScale = "0";
      _this.frame = { width: 0, height: 0 };
      _this.initialSize = 0;
      _this.layoutFrame = 0;
      _this.maxRadius = 0;
      _this.unboundedCoords = { left: 0, top: 0 };
      _this.activationState = _this.defaultActivationState();
      _this.activationTimerCallback = function() {
        _this.activationAnimationHasEnded = true;
        _this.runDeactivationUXLogicIfReady();
      };
      _this.activateHandler = function(e12) {
        _this.activateImpl(e12);
      };
      _this.deactivateHandler = function() {
        _this.deactivateImpl();
      };
      _this.focusHandler = function() {
        _this.handleFocus();
      };
      _this.blurHandler = function() {
        _this.handleBlur();
      };
      _this.resizeHandler = function() {
        _this.layout();
      };
      return _this;
    }
    Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "strings", {
      get: function() {
        return strings;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "numbers", {
      get: function() {
        return numbers;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          browserSupportsCssVars: function() {
            return true;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return true;
          },
          deregisterDocumentInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          },
          deregisterResizeHandler: function() {
            return void 0;
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return true;
          },
          isSurfaceDisabled: function() {
            return true;
          },
          isUnbounded: function() {
            return true;
          },
          registerDocumentInteractionHandler: function() {
            return void 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          registerResizeHandler: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          updateCssVariable: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCRippleFoundation2.prototype.init = function() {
      var _this = this;
      var supportsPressRipple = this.supportsPressRipple();
      this.registerRootHandlers(supportsPressRipple);
      if (supportsPressRipple) {
        var _a3 = MDCRippleFoundation2.cssClasses, ROOT_1 = _a3.ROOT, UNBOUNDED_1 = _a3.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.addClass(ROOT_1);
          if (_this.adapter.isUnbounded()) {
            _this.adapter.addClass(UNBOUNDED_1);
            _this.layoutInternal();
          }
        });
      }
    };
    MDCRippleFoundation2.prototype.destroy = function() {
      var _this = this;
      if (this.supportsPressRipple()) {
        if (this.activationTimer) {
          clearTimeout(this.activationTimer);
          this.activationTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
        }
        if (this.fgDeactivationRemovalTimer) {
          clearTimeout(this.fgDeactivationRemovalTimer);
          this.fgDeactivationRemovalTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
        }
        var _a3 = MDCRippleFoundation2.cssClasses, ROOT_2 = _a3.ROOT, UNBOUNDED_2 = _a3.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.removeClass(ROOT_2);
          _this.adapter.removeClass(UNBOUNDED_2);
          _this.removeCssVars();
        });
      }
      this.deregisterRootHandlers();
      this.deregisterDeactivationHandlers();
    };
    MDCRippleFoundation2.prototype.activate = function(evt) {
      this.activateImpl(evt);
    };
    MDCRippleFoundation2.prototype.deactivate = function() {
      this.deactivateImpl();
    };
    MDCRippleFoundation2.prototype.layout = function() {
      var _this = this;
      if (this.layoutFrame) {
        cancelAnimationFrame(this.layoutFrame);
      }
      this.layoutFrame = requestAnimationFrame(function() {
        _this.layoutInternal();
        _this.layoutFrame = 0;
      });
    };
    MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
      var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
      if (unbounded) {
        this.adapter.addClass(UNBOUNDED);
      } else {
        this.adapter.removeClass(UNBOUNDED);
      }
    };
    MDCRippleFoundation2.prototype.handleFocus = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.handleBlur = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation2.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: false,
        isActivated: false,
        isProgrammatic: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false
      };
    };
    MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
      var e_1, _a3;
      if (supportsPressRipple) {
        try {
          for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerInteractionHandler(evtType, this.activateHandler);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a3 = ACTIVATION_EVENT_TYPES_1.return))
              _a3.call(ACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        if (this.adapter.isUnbounded()) {
          this.adapter.registerResizeHandler(this.resizeHandler);
        }
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler);
      this.adapter.registerInteractionHandler("blur", this.blurHandler);
    };
    MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
      var e_2, _a3;
      if (evt.type === "keydown") {
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      } else {
        try {
          for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a3 = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
              _a3.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
    };
    MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
      var e_3, _a3;
      try {
        for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a3 = ACTIVATION_EVENT_TYPES_2.return))
            _a3.call(ACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
      this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
      if (this.adapter.isUnbounded()) {
        this.adapter.deregisterResizeHandler(this.resizeHandler);
      }
    };
    MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
      var e_4, _a3;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a3 = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
            _a3.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
    };
    MDCRippleFoundation2.prototype.removeCssVars = function() {
      var _this = this;
      var rippleStrings = MDCRippleFoundation2.strings;
      var keys = Object.keys(rippleStrings);
      keys.forEach(function(key) {
        if (key.indexOf("VAR_") === 0) {
          _this.adapter.updateCssVariable(rippleStrings[key], null);
        }
      });
    };
    MDCRippleFoundation2.prototype.activateImpl = function(evt) {
      var _this = this;
      if (this.adapter.isSurfaceDisabled()) {
        return;
      }
      var activationState = this.activationState;
      if (activationState.isActivated) {
        return;
      }
      var previousActivationEvent = this.previousActivationEvent;
      var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
      if (isSameInteraction) {
        return;
      }
      activationState.isActivated = true;
      activationState.isProgrammatic = evt === void 0;
      activationState.activationEvent = evt;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
      var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
        return _this.adapter.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        this.resetActivationState();
        return;
      }
      if (evt !== void 0) {
        activatedTargets.push(evt.target);
        this.registerDeactivationHandlers(evt);
      }
      activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
      if (activationState.wasElementMadeActive) {
        this.animateActivation();
      }
      requestAnimationFrame(function() {
        activatedTargets = [];
        if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
          activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
          if (activationState.wasElementMadeActive) {
            _this.animateActivation();
          }
        }
        if (!activationState.wasElementMadeActive) {
          _this.activationState = _this.defaultActivationState();
        }
      });
    };
    MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
      return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation2.prototype.animateActivation = function() {
      var _this = this;
      var _a3 = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a3.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a3.VAR_FG_TRANSLATE_END;
      var _b3 = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b3.FG_DEACTIVATION, FG_ACTIVATION = _b3.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var translateStart = "";
      var translateEnd = "";
      if (!this.adapter.isUnbounded()) {
        var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
        translateStart = startPoint.x + "px, " + startPoint.y + "px";
        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
      }
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      clearTimeout(this.activationTimer);
      clearTimeout(this.fgDeactivationRemovalTimer);
      this.rmBoundedActivationClasses();
      this.adapter.removeClass(FG_DEACTIVATION);
      this.adapter.computeBoundingRect();
      this.adapter.addClass(FG_ACTIVATION);
      this.activationTimer = setTimeout(function() {
        _this.activationTimerCallback();
      }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
      var _a3 = this.activationState, activationEvent = _a3.activationEvent, wasActivatedByPointer = _a3.wasActivatedByPointer;
      var startPoint;
      if (wasActivatedByPointer) {
        startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame.width / 2,
          y: this.frame.height / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };
      var endPoint = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint, endPoint };
    };
    MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
      var _this = this;
      var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
      var _a3 = this.activationState, hasDeactivationUXRun = _a3.hasDeactivationUXRun, isActivated = _a3.isActivated;
      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded) {
        this.rmBoundedActivationClasses();
        this.adapter.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer = setTimeout(function() {
          _this.adapter.removeClass(FG_DEACTIVATION);
        }, numbers.FG_DEACTIVATION_MS);
      }
    };
    MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
      var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded = false;
      this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation2.prototype.resetActivationState = function() {
      var _this = this;
      this.previousActivationEvent = this.activationState.activationEvent;
      this.activationState = this.defaultActivationState();
      setTimeout(function() {
        return _this.previousActivationEvent = void 0;
      }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation2.prototype.deactivateImpl = function() {
      var _this = this;
      var activationState = this.activationState;
      if (!activationState.isActivated) {
        return;
      }
      var state = __assign({}, activationState);
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function() {
          _this.animateDeactivation(state);
        });
        this.resetActivationState();
      } else {
        this.deregisterDeactivationHandlers();
        requestAnimationFrame(function() {
          _this.activationState.hasDeactivationUXRun = true;
          _this.animateDeactivation(state);
          _this.resetActivationState();
        });
      }
    };
    MDCRippleFoundation2.prototype.animateDeactivation = function(_a3) {
      var wasActivatedByPointer = _a3.wasActivatedByPointer, wasElementMadeActive = _a3.wasElementMadeActive;
      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady();
      }
    };
    MDCRippleFoundation2.prototype.layoutInternal = function() {
      var _this = this;
      this.frame = this.adapter.computeBoundingRect();
      var maxDim = Math.max(this.frame.height, this.frame.width);
      var getBoundedRadius = function() {
        var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
        return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
      var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
      if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
        this.initialSize = initialSize - 1;
      } else {
        this.initialSize = initialSize;
      }
      this.fgScale = "" + this.maxRadius / this.initialSize;
      this.updateLayoutCssVars();
    };
    MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
      var _a3 = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a3.VAR_FG_SIZE, VAR_LEFT = _a3.VAR_LEFT, VAR_TOP = _a3.VAR_TOP, VAR_FG_SCALE = _a3.VAR_FG_SCALE;
      this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
      this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
      if (this.adapter.isUnbounded()) {
        this.unboundedCoords = {
          left: Math.round(this.frame.width / 2 - this.initialSize / 2),
          top: Math.round(this.frame.height / 2 - this.initialSize / 2)
        };
        this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
        this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
      }
    };
    return MDCRippleFoundation2;
  }(MDCFoundation)
);
var foundation_default = MDCRippleFoundation;

// ../node_modules/lit-html/directive.js
var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e9 = (t6) => (...e12) => ({ _$litDirective$: t6, values: e12 });
var i5 = class {
  constructor(t6) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t6, e12, i8) {
    this._$Ct = t6, this._$AM = e12, this._$Ci = i8;
  }
  _$AS(t6, e12) {
    return this.update(t6, e12);
  }
  update(t6, e12) {
    return this.render(...e12);
  }
};

// ../node_modules/lit-html/directives/class-map.js
var o7 = e9(class extends i5 {
  constructor(t6) {
    var i8;
    if (super(t6), t6.type !== t4.ATTRIBUTE || "class" !== t6.name || (null === (i8 = t6.strings) || void 0 === i8 ? void 0 : i8.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t6) {
    return " " + Object.keys(t6).filter((i8) => t6[i8]).join(" ") + " ";
  }
  update(i8, [s6]) {
    var r5, o9;
    if (void 0 === this.it) {
      this.it = /* @__PURE__ */ new Set(), void 0 !== i8.strings && (this.nt = new Set(i8.strings.join(" ").split(/\s/).filter((t6) => "" !== t6)));
      for (const t6 in s6)
        s6[t6] && !(null === (r5 = this.nt) || void 0 === r5 ? void 0 : r5.has(t6)) && this.it.add(t6);
      return this.render(s6);
    }
    const e12 = i8.element.classList;
    this.it.forEach((t6) => {
      t6 in s6 || (e12.remove(t6), this.it.delete(t6));
    });
    for (const t6 in s6) {
      const i9 = !!s6[t6];
      i9 === this.it.has(t6) || (null === (o9 = this.nt) || void 0 === o9 ? void 0 : o9.has(t6)) || (i9 ? (e12.add(t6), this.it.add(t6)) : (e12.remove(t6), this.it.delete(t6)));
    }
    return T;
  }
});

// ../node_modules/lit-html/directives/style-map.js
var i6 = "important";
var n7 = " !" + i6;
var o8 = e9(class extends i5 {
  constructor(t6) {
    var e12;
    if (super(t6), t6.type !== t4.ATTRIBUTE || "style" !== t6.name || (null === (e12 = t6.strings) || void 0 === e12 ? void 0 : e12.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t6) {
    return Object.keys(t6).reduce((e12, r5) => {
      const s6 = t6[r5];
      return null == s6 ? e12 : e12 + `${r5 = r5.includes("-") ? r5 : r5.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s6};`;
    }, "");
  }
  update(e12, [r5]) {
    const { style: s6 } = e12.element;
    if (void 0 === this.ht) {
      this.ht = /* @__PURE__ */ new Set();
      for (const t6 in r5)
        this.ht.add(t6);
      return this.render(r5);
    }
    this.ht.forEach((t6) => {
      null == r5[t6] && (this.ht.delete(t6), t6.includes("-") ? s6.removeProperty(t6) : s6[t6] = "");
    });
    for (const t6 in r5) {
      const e13 = r5[t6];
      if (null != e13) {
        this.ht.add(t6);
        const r6 = "string" == typeof e13 && e13.endsWith(n7);
        t6.includes("-") || r6 ? s6.setProperty(t6, r6 ? e13.slice(0, -11) : e13, r6 ? i6 : "") : s6[t6] = e13;
      }
    }
    return T;
  }
});

// ../node_modules/@material/mwc-ripple/mwc-ripple-base.js
var RippleBase = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.activated = false;
    this.selected = false;
    this.internalUseStateLayerCustomProperties = false;
    this.hovering = false;
    this.bgFocused = false;
    this.fgActivation = false;
    this.fgDeactivation = false;
    this.fgScale = "";
    this.fgSize = "";
    this.translateStart = "";
    this.translateEnd = "";
    this.leftPos = "";
    this.topPos = "";
    this.mdcFoundationClass = foundation_default;
  }
  get isActive() {
    return matches(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => true,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = true;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = true;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = true;
            break;
          default:
            break;
        }
      },
      removeClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = false;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = false;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = false;
            break;
          default:
            break;
        }
      },
      containsEventTarget: () => true,
      registerInteractionHandler: () => void 0,
      deregisterInteractionHandler: () => void 0,
      registerDocumentInteractionHandler: () => void 0,
      deregisterDocumentInteractionHandler: () => void 0,
      registerResizeHandler: () => void 0,
      deregisterResizeHandler: () => void 0,
      updateCssVariable: (varName, value) => {
        switch (varName) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = value;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = value;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = value;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = value;
            break;
          case "--mdc-ripple-left":
            this.leftPos = value;
            break;
          case "--mdc-ripple-top":
            this.topPos = value;
            break;
          default:
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(ev) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(ev);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = true;
  }
  endHover() {
    this.hovering = false;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(fn2) {
    if (this.mdcFoundation) {
      fn2();
    } else {
      this.updateComplete.then(fn2);
    }
  }
  update(changedProperties) {
    if (changedProperties.has("disabled")) {
      if (this.disabled) {
        this.endHover();
      }
    }
    super.update(changedProperties);
  }
  /** @soyTemplate */
  render() {
    const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
    const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
    const classes = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": shouldActivateInPrimary,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": shouldSelectInPrimary,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return x`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o7(classes)}"
          style="${o8({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
};
__decorate([
  i4(".mdc-ripple-surface")
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
  n5({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
  n5({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
  n5({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
  n5({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
  n5({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
  n5({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
  n5({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
  t3()
], RippleBase.prototype, "hovering", void 0);
__decorate([
  t3()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
  t3()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
  t3()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
  t3()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
  t3()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
  t3()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
  t3()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
  t3()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
  t3()
], RippleBase.prototype, "topPos", void 0);

// ../node_modules/@material/mwc-ripple/mwc-ripple.css.js
var styles = i`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

// ../node_modules/@material/mwc-ripple/mwc-ripple.js
var Ripple = class Ripple2 extends RippleBase {
};
Ripple.styles = [styles];
Ripple = __decorate([
  e4("mwc-ripple")
], Ripple);

// ../node_modules/@material/mwc-base/aria-property.js
function tsDecorator(prototype, name, descriptor) {
  const constructor = prototype.constructor;
  if (!descriptor) {
    const litInternalPropertyKey = `__${name}`;
    descriptor = constructor.getPropertyDescriptor(name, litInternalPropertyKey);
    if (!descriptor) {
      throw new Error("@ariaProperty must be used after a @property decorator");
    }
  }
  const propDescriptor = descriptor;
  let attribute = "";
  if (!propDescriptor.set) {
    throw new Error(`@ariaProperty requires a setter for ${name}`);
  }
  if (prototype.dispatchWizEvent) {
    return descriptor;
  }
  const wrappedDescriptor = {
    configurable: true,
    enumerable: true,
    set(value) {
      if (attribute === "") {
        const options = constructor.getPropertyOptions(name);
        attribute = typeof options.attribute === "string" ? options.attribute : name;
      }
      if (this.hasAttribute(attribute)) {
        this.removeAttribute(attribute);
      }
      propDescriptor.set.call(this, value);
    }
  };
  if (propDescriptor.get) {
    wrappedDescriptor.get = function() {
      return propDescriptor.get.call(this);
    };
  }
  return wrappedDescriptor;
}
function ariaProperty(protoOrDescriptor, name, descriptor) {
  if (name !== void 0) {
    return tsDecorator(protoOrDescriptor, name, descriptor);
  } else {
    throw new Error("@ariaProperty only supports TypeScript Decorators");
  }
}

// ../node_modules/@material/mwc-ripple/ripple-handlers.js
var RippleHandlers = class {
  constructor(rippleFn) {
    this.startPress = (ev) => {
      rippleFn().then((r5) => {
        r5 && r5.startPress(ev);
      });
    };
    this.endPress = () => {
      rippleFn().then((r5) => {
        r5 && r5.endPress();
      });
    };
    this.startFocus = () => {
      rippleFn().then((r5) => {
        r5 && r5.startFocus();
      });
    };
    this.endFocus = () => {
      rippleFn().then((r5) => {
        r5 && r5.endFocus();
      });
    };
    this.startHover = () => {
      rippleFn().then((r5) => {
        r5 && r5.startHover();
      });
    };
    this.endHover = () => {
      rippleFn().then((r5) => {
        r5 && r5.endHover();
      });
    };
  }
};

// ../node_modules/lit-html/directives/if-defined.js
var l5 = (l8) => null != l8 ? l8 : A;

// ../node_modules/@material/mwc-icon-button/mwc-icon-button-base.js
var IconButtonBase = class extends s4 {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.icon = "";
    this.shouldRenderRipple = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? x`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
  }
  focus() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.startFocus();
      buttonElement.focus();
    }
  }
  blur() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.endFocus();
      buttonElement.blur();
    }
  }
  /** @soyTemplate */
  render() {
    return x`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l5(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? x`<i class="material-icons">${this.icon}</i>` : ""}
    <span
      ><slot></slot
    ></span>
  </button>`;
  }
  handleRippleMouseDown(event) {
    const onUp = () => {
      window.removeEventListener("mouseup", onUp);
      this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", onUp);
    this.rippleHandlers.startPress(event);
  }
  handleRippleTouchStart(event) {
    this.rippleHandlers.startPress(event);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
};
__decorate([
  n5({ type: Boolean, reflect: true })
], IconButtonBase.prototype, "disabled", void 0);
__decorate([
  n5({ type: String })
], IconButtonBase.prototype, "icon", void 0);
__decorate([
  ariaProperty,
  n5({ type: String, attribute: "aria-label" })
], IconButtonBase.prototype, "ariaLabel", void 0);
__decorate([
  ariaProperty,
  n5({ type: String, attribute: "aria-haspopup" })
], IconButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
  i4("button")
], IconButtonBase.prototype, "buttonElement", void 0);
__decorate([
  e7("mwc-ripple")
], IconButtonBase.prototype, "ripple", void 0);
__decorate([
  t3()
], IconButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  e6({ passive: true })
], IconButtonBase.prototype, "handleRippleMouseDown", null);
__decorate([
  e6({ passive: true })
], IconButtonBase.prototype, "handleRippleTouchStart", null);

// ../node_modules/@material/mwc-icon-button/mwc-icon-button.css.js
var styles2 = i`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

// ../node_modules/@material/mwc-icon-button/mwc-icon-button.js
var IconButton = class IconButton2 extends IconButtonBase {
};
IconButton.styles = [styles2];
IconButton = __decorate([
  e4("mwc-icon-button")
], IconButton);

// ../node_modules/playground-elements/internal/tab-bar.js
var PlaygroundInternalTabBar = class PlaygroundInternalTabBar2 extends s4 {
  constructor() {
    super(...arguments);
    this._tabs = [];
    this._active = void 0;
  }
  /**
   * Get or set the active tab.
   */
  get active() {
    return this._active;
  }
  set active(tab) {
    const oldActive = this._active;
    if (tab === oldActive) {
      return;
    }
    this._active = tab;
    if (oldActive !== void 0) {
      oldActive.active = false;
    }
    if (tab !== void 0) {
      tab.active = true;
    } else {
      this.dispatchEvent(new CustomEvent("tabchange", {
        detail: { tab: void 0 },
        bubbles: true
      }));
    }
  }
  render() {
    return x`
      <div role="tablist" aria-label=${l5(this.label)}>
        <slot
          @slotchange=${this._onSlotchange}
          @click=${this._activateTab}
          @keydown=${this._onKeydown}
          @tabchange=${this._activateTab}
        ></slot>
      </div>
    `;
  }
  _onSlotchange(event) {
    this._tabs = event.target.assignedElements();
    let newActive;
    for (let i8 = 0; i8 < this._tabs.length; i8++) {
      const tab = this._tabs[i8];
      tab.index = i8;
      if (newActive !== void 0) {
        tab.active = false;
      } else if (tab.active || tab.hasAttribute("active")) {
        newActive = tab;
      }
    }
    this.active = newActive;
  }
  _activateTab(event) {
    const tab = this._findEventTab(event);
    if (tab === void 0) {
      return;
    }
    this.active = tab;
    this._scrollTabIntoViewIfNeeded(tab);
  }
  /**
   * If the given tab is not visible, or if not enough of its adjacent tabs are
   * visible, scroll so that the tab is centered.
   */
  _scrollTabIntoViewIfNeeded(tab) {
    const barRect = this.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const margin = 48;
    if (tabRect.left - margin < barRect.left || tabRect.right + margin > barRect.right) {
      const centered = tabRect.left - barRect.left + this.scrollLeft - barRect.width / 2 + tabRect.width / 2;
      this.scroll({ left: centered, behavior: "smooth" });
    }
  }
  async _onKeydown(event) {
    var _a3, _b3;
    const oldIdx = (_b3 = (_a3 = this.active) === null || _a3 === void 0 ? void 0 : _a3.index) !== null && _b3 !== void 0 ? _b3 : 0;
    const endIdx = this._tabs.length - 1;
    let newIdx = oldIdx;
    switch (event.key) {
      case "ArrowLeft": {
        if (oldIdx === 0) {
          newIdx = endIdx;
        } else {
          newIdx--;
        }
        break;
      }
      case "ArrowRight": {
        if (oldIdx === endIdx) {
          newIdx = 0;
        } else {
          newIdx++;
        }
        break;
      }
      case "Home": {
        newIdx = 0;
        break;
      }
      case "End": {
        newIdx = endIdx;
        break;
      }
    }
    if (newIdx !== oldIdx) {
      event.preventDefault();
      const tab = this._tabs[newIdx];
      this.active = tab;
      await tab.updateComplete;
      tab.focus();
    }
  }
  _findEventTab(event) {
    const target = event.target;
    if ((target === null || target === void 0 ? void 0 : target.localName) === "playground-internal-tab") {
      return event.target;
    }
    for (const el of event.composedPath()) {
      if ((el === null || el === void 0 ? void 0 : el.localName) === "playground-internal-tab") {
        return el;
      }
    }
    return void 0;
  }
};
PlaygroundInternalTabBar.styles = i`
    :host {
      display: flex;
      overflow-x: auto;
    }

    :host::-webkit-scrollbar {
      display: none;
    }

    div {
      display: flex;
    }
  `;
__decorate([
  n5()
], PlaygroundInternalTabBar.prototype, "label", void 0);
PlaygroundInternalTabBar = __decorate([
  e4("playground-internal-tab-bar")
], PlaygroundInternalTabBar);

// ../node_modules/playground-elements/internal/tab.js
var PlaygroundInternalTab = class PlaygroundInternalTab2 extends s4 {
  constructor() {
    super(...arguments);
    this.active = false;
    this.index = 0;
  }
  render() {
    return x`<button
      role="tab"
      part="button"
      aria-selected=${this.active ? "true" : "false"}
      tabindex=${this.active ? "0" : "-1"}
    >
      <slot></slot>
    </button>`;
  }
  updated(changes) {
    if (changes.has("active") && this.active) {
      this.dispatchEvent(new CustomEvent("tabchange", {
        detail: { tab: this },
        bubbles: true
      }));
    }
  }
  focus() {
    this._button.focus();
  }
};
PlaygroundInternalTab.styles = i`
    :host {
      display: flex;
    }

    button {
      flex: 1;
      border: none;
      font-size: inherit;
      font-family: inherit;
      color: inherit;
      background: transparent;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      outline: none;
    }

    button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: currentcolor;
      opacity: 0;
      transition: opacity 150ms;
    }

    button:focus::before,
    button:hover::before {
      opacity: 10%;
    }

    button:active::before {
      opacity: 20%;
    }

    :host([active]) > button::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(
        --playground-tab-bar-indicator-color,
        var(--playground-highlight-color, #6200ee)
      );
    }
  `;
__decorate([
  n5({ type: Boolean, reflect: true })
], PlaygroundInternalTab.prototype, "active", void 0);
__decorate([
  i4("button")
], PlaygroundInternalTab.prototype, "_button", void 0);
PlaygroundInternalTab = __decorate([
  e4("playground-internal-tab")
], PlaygroundInternalTab);

// ../node_modules/@material/mwc-base/observer.js
var observer = (observer2) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (proto, propName) => {
    if (!proto.constructor._observers) {
      proto.constructor._observers = /* @__PURE__ */ new Map();
      const userUpdated = proto.updated;
      proto.updated = function(changedProperties) {
        userUpdated.call(this, changedProperties);
        changedProperties.forEach((v2, k2) => {
          const observers = this.constructor._observers;
          const observer3 = observers.get(k2);
          if (observer3 !== void 0) {
            observer3.call(this, this[k2], v2);
          }
        });
      };
    } else if (!proto.constructor.hasOwnProperty("_observers")) {
      const observers = proto.constructor._observers;
      proto.constructor._observers = /* @__PURE__ */ new Map();
      observers.forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (v2, k2) => proto.constructor._observers.set(k2, v2)
      );
    }
    proto.constructor._observers.set(propName, observer2);
  }
);

// ../node_modules/@material/mwc-list/mwc-list-item-base.js
var ListItemBase = class extends s4 {
  constructor() {
    super(...arguments);
    this.value = "";
    this.group = null;
    this.tabindex = -1;
    this.disabled = false;
    this.twoline = false;
    this.activated = false;
    this.graphic = null;
    this.multipleGraphics = false;
    this.hasMeta = false;
    this.noninteractive = false;
    this.selected = false;
    this.shouldRenderRipple = false;
    this._managingList = null;
    this.boundOnClick = this.onClick.bind(this);
    this._firstChanged = true;
    this._skipPropRequest = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
    this.listeners = [
      {
        target: this,
        eventNames: ["click"],
        cb: () => {
          this.onClick();
        }
      },
      {
        target: this,
        eventNames: ["mouseenter"],
        cb: this.rippleHandlers.startHover
      },
      {
        target: this,
        eventNames: ["mouseleave"],
        cb: this.rippleHandlers.endHover
      },
      {
        target: this,
        eventNames: ["focus"],
        cb: this.rippleHandlers.startFocus
      },
      {
        target: this,
        eventNames: ["blur"],
        cb: this.rippleHandlers.endFocus
      },
      {
        target: this,
        eventNames: ["mousedown", "touchstart"],
        cb: (e12) => {
          const name = e12.type;
          this.onDown(name === "mousedown" ? "mouseup" : "touchend", e12);
        }
      }
    ];
  }
  get text() {
    const textContent = this.textContent;
    return textContent ? textContent.trim() : "";
  }
  render() {
    const text = this.renderText();
    const graphic = this.graphic ? this.renderGraphic() : x``;
    const meta = this.hasMeta ? this.renderMeta() : x``;
    return x`
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
  }
  renderRipple() {
    if (this.shouldRenderRipple) {
      return x`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
    } else if (this.activated) {
      return x`<div class="fake-activated-ripple"></div>`;
    } else {
      return "";
    }
  }
  renderGraphic() {
    const graphicClasses = {
      multi: this.multipleGraphics
    };
    return x`
      <span class="mdc-deprecated-list-item__graphic material-icons ${o7(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return x`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return x`
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
  }
  renderSingleLine() {
    return x`<slot></slot>`;
  }
  renderTwoline() {
    return x`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(upName, evt) {
    const onUp = () => {
      window.removeEventListener(upName, onUp);
      this.rippleHandlers.endPress();
    };
    window.addEventListener(upName, onUp);
    this.rippleHandlers.startPress(evt);
  }
  fireRequestSelected(selected, source) {
    if (this.noninteractive) {
      return;
    }
    const customEv = new CustomEvent("request-selected", { bubbles: true, composed: true, detail: { source, selected } });
    this.dispatchEvent(customEv);
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.noninteractive) {
      this.setAttribute("mwc-list-item", "");
    }
    for (const listener of this.listeners) {
      for (const eventName of listener.eventNames) {
        listener.target.addEventListener(eventName, listener.cb, { passive: true });
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const listener of this.listeners) {
      for (const eventName of listener.eventNames) {
        listener.target.removeEventListener(eventName, listener.cb);
      }
    }
    if (this._managingList) {
      this._managingList.debouncedLayout ? this._managingList.debouncedLayout(true) : this._managingList.layout(true);
    }
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const ev = new Event("list-item-rendered", { bubbles: true, composed: true });
    this.dispatchEvent(ev);
  }
};
__decorate([
  i4("slot")
], ListItemBase.prototype, "slotElement", void 0);
__decorate([
  e7("mwc-ripple")
], ListItemBase.prototype, "ripple", void 0);
__decorate([
  n5({ type: String })
], ListItemBase.prototype, "value", void 0);
__decorate([
  n5({ type: String, reflect: true })
], ListItemBase.prototype, "group", void 0);
__decorate([
  n5({ type: Number, reflect: true })
], ListItemBase.prototype, "tabindex", void 0);
__decorate([
  n5({ type: Boolean, reflect: true }),
  observer(function(value) {
    if (value) {
      this.setAttribute("aria-disabled", "true");
    } else {
      this.setAttribute("aria-disabled", "false");
    }
  })
], ListItemBase.prototype, "disabled", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], ListItemBase.prototype, "twoline", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], ListItemBase.prototype, "activated", void 0);
__decorate([
  n5({ type: String, reflect: true })
], ListItemBase.prototype, "graphic", void 0);
__decorate([
  n5({ type: Boolean })
], ListItemBase.prototype, "multipleGraphics", void 0);
__decorate([
  n5({ type: Boolean })
], ListItemBase.prototype, "hasMeta", void 0);
__decorate([
  n5({ type: Boolean, reflect: true }),
  observer(function(value) {
    if (value) {
      this.removeAttribute("aria-checked");
      this.removeAttribute("mwc-list-item");
      this.selected = false;
      this.activated = false;
      this.tabIndex = -1;
    } else {
      this.setAttribute("mwc-list-item", "");
    }
  })
], ListItemBase.prototype, "noninteractive", void 0);
__decorate([
  n5({ type: Boolean, reflect: true }),
  observer(function(value) {
    const role = this.getAttribute("role");
    const isAriaSelectable = role === "gridcell" || role === "option" || role === "row" || role === "tab";
    if (isAriaSelectable && value) {
      this.setAttribute("aria-selected", "true");
    } else if (isAriaSelectable) {
      this.setAttribute("aria-selected", "false");
    }
    if (this._firstChanged) {
      this._firstChanged = false;
      return;
    }
    if (this._skipPropRequest) {
      return;
    }
    this.fireRequestSelected(value, "property");
  })
], ListItemBase.prototype, "selected", void 0);
__decorate([
  t3()
], ListItemBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  t3()
], ListItemBase.prototype, "_managingList", void 0);

// ../node_modules/@material/mwc-list/mwc-list-item.css.js
var styles3 = i`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;

// ../node_modules/@material/mwc-list/mwc-list-item.js
var ListItem = class ListItem2 extends ListItemBase {
};
ListItem.styles = [styles3];
ListItem = __decorate([
  e4("mwc-list-item")
], ListItem);

// ../node_modules/@material/dom/keyboard.js
var KEY = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
};
var normalizedKeys = /* @__PURE__ */ new Set();
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
};
var mappedKeyCodes = /* @__PURE__ */ new Map();
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = /* @__PURE__ */ new Set();
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
function normalizeKey(evt) {
  var key = evt.key;
  if (normalizedKeys.has(key)) {
    return key;
  }
  var mappedKey = mappedKeyCodes.get(evt.keyCode);
  if (mappedKey) {
    return mappedKey;
  }
  return KEY.UNKNOWN;
}

// ../node_modules/@material/list/constants.js
var _a;
var _b;
var cssClasses2 = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
var evolutionClassNameMap = (_a = {}, _a["" + cssClasses2.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a["" + cssClasses2.LIST_ITEM_CLASS] = "mdc-list-item", _a["" + cssClasses2.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a["" + cssClasses2.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a["" + cssClasses2.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a["" + cssClasses2.ROOT] = "mdc-list", _a);
var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses2.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b["" + cssClasses2.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b["" + cssClasses2.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b["" + cssClasses2.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b["" + cssClasses2.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b["" + cssClasses2.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b["" + cssClasses2.ROOT] = "mdc-deprecated-list", _b);
var strings2 = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses2.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses2.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses2.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses2.LIST_ITEM_CLASS] + " a\n  ",
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses2.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses2.LIST_ITEM_CLASS + " a,\n    ." + cssClasses2.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses2.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses2.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses2.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses2.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses2.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers2 = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};

// ../node_modules/@material/mwc-list/mwc-list-foundation.js
var integerSort = (a4, b2) => {
  return a4 - b2;
};
var findIndexDiff = (oldSet, newSet) => {
  const oldArr = Array.from(oldSet);
  const newArr = Array.from(newSet);
  const diff = { added: [], removed: [] };
  const oldSorted = oldArr.sort(integerSort);
  const newSorted = newArr.sort(integerSort);
  let i8 = 0;
  let j2 = 0;
  while (i8 < oldSorted.length || j2 < newSorted.length) {
    const oldVal = oldSorted[i8];
    const newVal = newSorted[j2];
    if (oldVal === newVal) {
      i8++;
      j2++;
      continue;
    }
    if (oldVal !== void 0 && (newVal === void 0 || oldVal < newVal)) {
      diff.removed.push(oldVal);
      i8++;
      continue;
    }
    if (newVal !== void 0 && (oldVal === void 0 || newVal < oldVal)) {
      diff.added.push(newVal);
      j2++;
      continue;
    }
  }
  return diff;
};
var ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
function isIndexSet(selectedIndex) {
  return selectedIndex instanceof Set;
}
var createSetFromIndex = (index) => {
  const entry = index === numbers2.UNSET_INDEX ? /* @__PURE__ */ new Set() : index;
  return isIndexSet(entry) ? new Set(entry) : /* @__PURE__ */ new Set([entry]);
};
var MDCListFoundation = class _MDCListFoundation extends MDCFoundation {
  constructor(adapter) {
    super(Object.assign(Object.assign({}, _MDCListFoundation.defaultAdapter), adapter));
    this.isMulti_ = false;
    this.wrapFocus_ = false;
    this.isVertical_ = true;
    this.selectedIndex_ = numbers2.UNSET_INDEX;
    this.focusedItemIndex_ = numbers2.UNSET_INDEX;
    this.useActivatedClass_ = false;
    this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return strings2;
  }
  static get numbers() {
    return numbers2;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => void 0,
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => false,
      isRootFocused: () => false,
      notifyAction: () => void 0,
      notifySelected: () => void 0,
      getSelectedStateForElementIndex: () => false,
      setDisabledStateForElementIndex: () => void 0,
      getDisabledStateForElementIndex: () => false,
      setSelectedStateForElementIndex: () => void 0,
      setActivatedStateForElementIndex: () => void 0,
      setTabIndexForElementIndex: () => void 0,
      setAttributeForElementIndex: () => void 0,
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(value) {
    this.wrapFocus_ = value;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(value) {
    this.isMulti_ = value;
    const currentIndex = this.selectedIndex_;
    if (value) {
      if (!isIndexSet(currentIndex)) {
        const isUnset = currentIndex === numbers2.UNSET_INDEX;
        this.selectedIndex_ = isUnset ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([currentIndex]);
      }
    } else {
      if (isIndexSet(currentIndex)) {
        if (currentIndex.size) {
          const vals = Array.from(currentIndex).sort(integerSort);
          this.selectedIndex_ = vals[0];
        } else {
          this.selectedIndex_ = numbers2.UNSET_INDEX;
        }
      }
    }
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(value) {
    this.isVertical_ = value;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(useActivated) {
    this.useActivatedClass_ = useActivated;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(index) {
    if (!this.isIndexValid_(index)) {
      return;
    }
    if (this.isMulti_) {
      this.setMultiSelectionAtIndex_(createSetFromIndex(index));
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(_2, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
    }
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(_2, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
    }
    setTimeout(() => {
      if (!this.adapter.isFocusInsideList()) {
        this.setTabindexToFirstSelectedItem_();
      }
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(event, isRootListItem, listItemIndex) {
    const isArrowLeft = normalizeKey(event) === "ArrowLeft";
    const isArrowUp = normalizeKey(event) === "ArrowUp";
    const isArrowRight = normalizeKey(event) === "ArrowRight";
    const isArrowDown = normalizeKey(event) === "ArrowDown";
    const isHome = normalizeKey(event) === "Home";
    const isEnd = normalizeKey(event) === "End";
    const isEnter = normalizeKey(event) === "Enter";
    const isSpace = normalizeKey(event) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      if (isArrowUp || isEnd) {
        event.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        event.preventDefault();
        this.focusFirstElement();
      }
      return;
    }
    let currentIndex = this.adapter.getFocusedElementIndex();
    if (currentIndex === -1) {
      currentIndex = listItemIndex;
      if (currentIndex < 0) {
        return;
      }
    }
    let nextIndex;
    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        const target = event.target;
        if (target && target.tagName === "A" && isEnter) {
          return;
        }
        this.preventDefaultEvent(event);
        this.setSelectedIndexOnAction_(currentIndex, true);
      }
    }
    this.focusedItemIndex_ = currentIndex;
    if (nextIndex !== void 0) {
      this.setTabindexAtIndex_(nextIndex);
      this.focusedItemIndex_ = nextIndex;
    }
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(index, isInteraction, force) {
    if (index === numbers2.UNSET_INDEX) {
      return;
    }
    this.setSelectedIndexOnAction_(index, isInteraction, force);
    this.setTabindexAtIndex_(index);
    this.focusedItemIndex_ = index;
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(index) {
    const count = this.adapter.getListItemCount();
    let nextIndex = index + 1;
    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        return index;
      }
    }
    this.adapter.focusItemAtIndex(nextIndex);
    return nextIndex;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(index) {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter.getListItemCount() - 1;
      } else {
        return index;
      }
    }
    this.adapter.focusItemAtIndex(prevIndex);
    return prevIndex;
  }
  focusFirstElement() {
    this.adapter.focusItemAtIndex(0);
    return 0;
  }
  focusLastElement() {
    const lastIndex = this.adapter.getListItemCount() - 1;
    this.adapter.focusItemAtIndex(lastIndex);
    return lastIndex;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }
    this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(evt) {
    const target = evt.target;
    const tagName = `${target.tagName}`.toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  }
  setSingleSelectionAtIndex_(index, isInteraction = true) {
    if (this.selectedIndex_ === index) {
      return;
    }
    if (this.selectedIndex_ !== numbers2.UNSET_INDEX) {
      this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
      }
    }
    if (isInteraction) {
      this.adapter.setSelectedStateForElementIndex(index, true);
    }
    if (this.useActivatedClass_) {
      this.adapter.setActivatedStateForElementIndex(index, true);
    }
    this.setAriaForSingleSelectionAtIndex_(index);
    this.selectedIndex_ = index;
    this.adapter.notifySelected(index);
  }
  setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
    const oldIndex = createSetFromIndex(this.selectedIndex_);
    const diff = findIndexDiff(oldIndex, newIndex);
    if (!diff.removed.length && !diff.added.length) {
      return;
    }
    for (const removed of diff.removed) {
      if (isInteraction) {
        this.adapter.setSelectedStateForElementIndex(removed, false);
      }
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(removed, false);
      }
    }
    for (const added of diff.added) {
      if (isInteraction) {
        this.adapter.setSelectedStateForElementIndex(added, true);
      }
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(added, true);
      }
    }
    this.selectedIndex_ = newIndex;
    this.adapter.notifySelected(newIndex, diff);
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(index) {
    if (this.selectedIndex_ === numbers2.UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(index, strings2.ARIA_CURRENT);
    }
    const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    const ariaAttribute = isAriaCurrent ? strings2.ARIA_CURRENT : strings2.ARIA_SELECTED;
    if (this.selectedIndex_ !== numbers2.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, "false");
    }
    const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
  }
  setTabindexAtIndex_(index) {
    if (this.focusedItemIndex_ === numbers2.UNSET_INDEX && index !== 0) {
      this.adapter.setTabIndexForElementIndex(0, -1);
    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
      this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
    }
    this.adapter.setTabIndexForElementIndex(index, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let targetIndex = 0;
    if (typeof this.selectedIndex_ === "number" && this.selectedIndex_ !== numbers2.UNSET_INDEX) {
      targetIndex = this.selectedIndex_;
    } else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
      targetIndex = Math.min(...this.selectedIndex_);
    }
    this.setTabindexAtIndex_(targetIndex);
  }
  isIndexValid_(index) {
    if (index instanceof Set) {
      if (!this.isMulti_) {
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      }
      if (index.size === 0) {
        return true;
      } else {
        let isOneInRange = false;
        for (const entry of index) {
          isOneInRange = this.isIndexInRange_(entry);
          if (isOneInRange) {
            break;
          }
        }
        return isOneInRange;
      }
    } else if (typeof index === "number") {
      if (this.isMulti_) {
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
      }
      return index === numbers2.UNSET_INDEX || this.isIndexInRange_(index);
    } else {
      return false;
    }
  }
  isIndexInRange_(index) {
    const listSize = this.adapter.getListItemCount();
    return index >= 0 && index < listSize;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(index, isInteraction, force) {
    if (this.adapter.getDisabledStateForElementIndex(index)) {
      return;
    }
    let checkedIndex = index;
    if (this.isMulti_) {
      checkedIndex = /* @__PURE__ */ new Set([index]);
    }
    if (!this.isIndexValid_(checkedIndex)) {
      return;
    }
    if (this.isMulti_) {
      this.toggleMultiAtIndex(index, force, isInteraction);
    } else {
      if (isInteraction || force) {
        this.setSingleSelectionAtIndex_(index, isInteraction);
      } else {
        const isDeselection = this.selectedIndex_ === index;
        if (isDeselection) {
          this.setSingleSelectionAtIndex_(numbers2.UNSET_INDEX);
        }
      }
    }
    if (isInteraction) {
      this.adapter.notifyAction(index);
    }
  }
  toggleMultiAtIndex(index, force, isInteraction = true) {
    let newSelectionValue = false;
    if (force === void 0) {
      newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
    } else {
      newSelectionValue = force;
    }
    const newSet = createSetFromIndex(this.selectedIndex_);
    if (newSelectionValue) {
      newSet.add(index);
    } else {
      newSet.delete(index);
    }
    this.setMultiSelectionAtIndex_(newSet, isInteraction);
  }
};
var mwc_list_foundation_default = MDCListFoundation;

// ../node_modules/@material/mwc-list/mwc-list-base.js
function debounceLayout(callback, waitInMS = 50) {
  let timeoutId;
  return function(updateItems = true) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(updateItems);
    }, waitInMS);
  };
}
var isListItem = (element) => {
  return element.hasAttribute("mwc-list-item");
};
function clearAndCreateItemsReadyPromise() {
  const oldResolver = this.itemsReadyResolver;
  this.itemsReady = new Promise((res) => {
    return this.itemsReadyResolver = res;
  });
  oldResolver();
}
var ListBase = class extends BaseElement {
  constructor() {
    super();
    this.mdcAdapter = null;
    this.mdcFoundationClass = mwc_list_foundation_default;
    this.activatable = false;
    this.multi = false;
    this.wrapFocus = false;
    this.itemRoles = null;
    this.innerRole = null;
    this.innerAriaLabel = null;
    this.rootTabbable = false;
    this.previousTabindex = null;
    this.noninteractive = false;
    this.itemsReadyResolver = () => {
    };
    this.itemsReady = Promise.resolve([]);
    this.items_ = [];
    const debouncedFunction = debounceLayout(this.layout.bind(this));
    this.debouncedLayout = (updateItems = true) => {
      clearAndCreateItemsReadyPromise.call(this);
      debouncedFunction(updateItems);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const result = await super.getUpdateComplete();
    await this.itemsReady;
    return result;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var _a3;
    const nodes = (_a3 = this.assignedElements) !== null && _a3 !== void 0 ? _a3 : [];
    const listItems = [];
    for (const node of nodes) {
      if (isListItem(node)) {
        listItems.push(node);
        node._managingList = this;
      }
      if (node.hasAttribute("divider") && !node.hasAttribute("role")) {
        node.setAttribute("role", "separator");
      }
    }
    this.items_ = listItems;
    const selectedIndices = /* @__PURE__ */ new Set();
    this.items_.forEach((item, index) => {
      if (this.itemRoles) {
        item.setAttribute("role", this.itemRoles);
      } else {
        item.removeAttribute("role");
      }
      if (item.selected) {
        selectedIndices.add(index);
      }
    });
    if (this.multi) {
      this.select(selectedIndices);
    } else {
      const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
      this.select(index);
    }
    const itemsUpdatedEv = new Event("items-updated", { bubbles: true, composed: true });
    this.dispatchEvent(itemsUpdatedEv);
  }
  get selected() {
    const index = this.index;
    if (!isIndexSet(index)) {
      if (index === -1) {
        return null;
      }
      return this.items[index];
    }
    const selected = [];
    for (const entry of index) {
      selected.push(this.items[entry]);
    }
    return selected;
  }
  get index() {
    if (this.mdcFoundation) {
      return this.mdcFoundation.getSelectedIndex();
    }
    return -1;
  }
  render() {
    const role = this.innerRole === null ? void 0 : this.innerRole;
    const ariaLabel = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel;
    const tabindex = this.rootTabbable ? "0" : "-1";
    return x`
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l5(role)}"
          aria-label="${l5(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var _a3;
    const nodes = (_a3 = this.assignedElements) !== null && _a3 !== void 0 ? _a3 : [];
    if (this.emptyMessage !== void 0 && nodes.length === 0) {
      return x`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
    }
    return null;
  }
  firstUpdated() {
    super.firstUpdated();
    if (!this.items.length) {
      this.mdcFoundation.setMulti(this.multi);
      this.layout();
    }
  }
  onFocusIn(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      this.mdcFoundation.handleFocusIn(evt, index);
    }
  }
  onFocusOut(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      this.mdcFoundation.handleFocusOut(evt, index);
    }
  }
  onKeydown(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      const target = evt.target;
      const isRootListItem = isListItem(target);
      this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
    }
  }
  onRequestSelected(evt) {
    if (this.mdcFoundation) {
      let index = this.getIndexOfTarget(evt);
      if (index === -1) {
        this.layout();
        index = this.getIndexOfTarget(evt);
        if (index === -1) {
          return;
        }
      }
      const element = this.items[index];
      if (element.disabled) {
        return;
      }
      const selected = evt.detail.selected;
      const source = evt.detail.source;
      this.mdcFoundation.handleSingleSelection(index, source === "interaction", selected);
      evt.stopPropagation();
    }
  }
  getIndexOfTarget(evt) {
    const elements = this.items;
    const path = evt.composedPath();
    for (const pathItem of path) {
      let index = -1;
      if (isNodeElement(pathItem) && isListItem(pathItem)) {
        index = elements.indexOf(pathItem);
      }
      if (index !== -1) {
        return index;
      }
    }
    return -1;
  }
  createAdapter() {
    this.mdcAdapter = {
      getListItemCount: () => {
        if (this.mdcRoot) {
          return this.items.length;
        }
        return 0;
      },
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (index, attr) => {
        const listElement = this.mdcRoot;
        if (!listElement) {
          return "";
        }
        const element = this.items[index];
        return element ? element.getAttribute(attr) : "";
      },
      setAttributeForElementIndex: (index, attr, val) => {
        if (!this.mdcRoot) {
          return;
        }
        const element = this.items[index];
        if (element) {
          element.setAttribute(attr, val);
        }
      },
      focusItemAtIndex: (index) => {
        const element = this.items[index];
        if (element) {
          element.focus();
        }
      },
      setTabIndexForElementIndex: (index, value) => {
        const item = this.items[index];
        if (item) {
          item.tabindex = value;
        }
      },
      notifyAction: (index) => {
        const init = { bubbles: true, composed: true };
        init.detail = { index };
        const ev = new CustomEvent("action", init);
        this.dispatchEvent(ev);
      },
      notifySelected: (index, diff) => {
        const init = { bubbles: true, composed: true };
        init.detail = { index, diff };
        const ev = new CustomEvent("selected", init);
        this.dispatchEvent(ev);
      },
      isFocusInsideList: () => {
        return doesElementContainFocus(this);
      },
      isRootFocused: () => {
        const mdcRoot = this.mdcRoot;
        const root = mdcRoot.getRootNode();
        return root.activeElement === mdcRoot;
      },
      setDisabledStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.disabled = value;
      },
      getDisabledStateForElementIndex: (index) => {
        const item = this.items[index];
        if (!item) {
          return false;
        }
        return item.disabled;
      },
      setSelectedStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.selected = value;
      },
      getSelectedStateForElementIndex: (index) => {
        const item = this.items[index];
        if (!item) {
          return false;
        }
        return item.selected;
      },
      setActivatedStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.activated = value;
      }
    };
    return this.mdcAdapter;
  }
  selectUi(index, activate = false) {
    const item = this.items[index];
    if (item) {
      item.selected = true;
      item.activated = activate;
    }
  }
  deselectUi(index) {
    const item = this.items[index];
    if (item) {
      item.selected = false;
      item.activated = false;
    }
  }
  select(index) {
    if (!this.mdcFoundation) {
      return;
    }
    this.mdcFoundation.setSelectedIndex(index);
  }
  toggle(index, force) {
    if (this.multi) {
      this.mdcFoundation.toggleMultiAtIndex(index, force);
    }
  }
  onListItemConnected(e12) {
    const target = e12.target;
    this.layout(this.items.indexOf(target) === -1);
  }
  layout(updateItems = true) {
    if (updateItems) {
      this.updateItems();
    }
    const first = this.items[0];
    for (const item of this.items) {
      item.tabindex = -1;
    }
    if (first) {
      if (this.noninteractive) {
        if (!this.previousTabindex) {
          this.previousTabindex = first;
        }
      } else {
        first.tabindex = 0;
      }
    }
    this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot) {
      return -1;
    }
    if (!this.items.length) {
      return -1;
    }
    const activeElementPath = deepActiveElementPath();
    if (!activeElementPath.length) {
      return -1;
    }
    for (let i8 = activeElementPath.length - 1; i8 >= 0; i8--) {
      const activeItem = activeElementPath[i8];
      if (isListItem(activeItem)) {
        return this.items.indexOf(activeItem);
      }
    }
    return -1;
  }
  focusItemAtIndex(index) {
    for (const item of this.items) {
      if (item.tabindex === 0) {
        item.tabindex = -1;
        break;
      }
    }
    this.items[index].tabindex = 0;
    this.items[index].focus();
  }
  focus() {
    const root = this.mdcRoot;
    if (root) {
      root.focus();
    }
  }
  blur() {
    const root = this.mdcRoot;
    if (root) {
      root.blur();
    }
  }
};
__decorate([
  n5({ type: String })
], ListBase.prototype, "emptyMessage", void 0);
__decorate([
  i4(".mdc-deprecated-list")
], ListBase.prototype, "mdcRoot", void 0);
__decorate([
  o6("", true, "*")
], ListBase.prototype, "assignedElements", void 0);
__decorate([
  o6("", true, '[tabindex="0"]')
], ListBase.prototype, "tabbableElements", void 0);
__decorate([
  n5({ type: Boolean }),
  observer(function(value) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setUseActivatedClass(value);
    }
  })
], ListBase.prototype, "activatable", void 0);
__decorate([
  n5({ type: Boolean }),
  observer(function(newValue, oldValue) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setMulti(newValue);
    }
    if (oldValue !== void 0) {
      this.layout();
    }
  })
], ListBase.prototype, "multi", void 0);
__decorate([
  n5({ type: Boolean }),
  observer(function(value) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setWrapFocus(value);
    }
  })
], ListBase.prototype, "wrapFocus", void 0);
__decorate([
  n5({ type: String }),
  observer(function(_newValue, oldValue) {
    if (oldValue !== void 0) {
      this.updateItems();
    }
  })
], ListBase.prototype, "itemRoles", void 0);
__decorate([
  n5({ type: String })
], ListBase.prototype, "innerRole", void 0);
__decorate([
  n5({ type: String })
], ListBase.prototype, "innerAriaLabel", void 0);
__decorate([
  n5({ type: Boolean })
], ListBase.prototype, "rootTabbable", void 0);
__decorate([
  n5({ type: Boolean, reflect: true }),
  observer(function(value) {
    var _a3, _b3;
    if (value) {
      const tabbable = (_b3 = (_a3 = this.tabbableElements) === null || _a3 === void 0 ? void 0 : _a3[0]) !== null && _b3 !== void 0 ? _b3 : null;
      this.previousTabindex = tabbable;
      if (tabbable) {
        tabbable.setAttribute("tabindex", "-1");
      }
    } else if (!value && this.previousTabindex) {
      this.previousTabindex.setAttribute("tabindex", "0");
      this.previousTabindex = null;
    }
  })
], ListBase.prototype, "noninteractive", void 0);

// ../node_modules/@material/mwc-list/mwc-list.css.js
var styles4 = i`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;

// ../node_modules/@material/mwc-list/mwc-list.js
var List = class List2 extends ListBase {
};
List.styles = [styles4];
List = __decorate([
  e4("mwc-list")
], List);

// ../node_modules/@material/mwc-icon/mwc-icon-host.css.js
var styles5 = i`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

// ../node_modules/@material/mwc-icon/mwc-icon.js
var Icon = class Icon2 extends s4 {
  /** @soyTemplate */
  render() {
    return x`<span><slot></slot></span>`;
  }
};
Icon.styles = [styles5];
Icon = __decorate([
  e4("mwc-icon")
], Icon);

// ../node_modules/@material/mwc-button/mwc-button-base.js
var ButtonBase = class extends s4 {
  constructor() {
    super(...arguments);
    this.raised = false;
    this.unelevated = false;
    this.outlined = false;
    this.dense = false;
    this.disabled = false;
    this.trailingIcon = false;
    this.fullwidth = false;
    this.icon = "";
    this.label = "";
    this.expandContent = false;
    this.shouldRenderRipple = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
  }
  /** @soyTemplate */
  renderOverlay() {
    return x``;
  }
  /** @soyTemplate */
  renderRipple() {
    const filled = this.raised || this.unelevated;
    return this.shouldRenderRipple ? x`<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  focus() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.startFocus();
      buttonElement.focus();
    }
  }
  blur() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.endFocus();
      buttonElement.blur();
    }
  }
  /** @soyTemplate */
  getRenderClasses() {
    return {
      "mdc-button--raised": this.raised,
      "mdc-button--unelevated": this.unelevated,
      "mdc-button--outlined": this.outlined,
      "mdc-button--dense": this.dense
    };
  }
  /**
   * @soyTemplate
   * @soyAttributes buttonAttributes: #button
   * @soyClasses buttonClasses: #button
   */
  render() {
    return x`
      <button
          id="button"
          class="mdc-button ${o7(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l5(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o7({
      flex: this.expandContent
    })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
  }
  /** @soyTemplate */
  renderIcon() {
    return x`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(evt) {
    const onUp = () => {
      window.removeEventListener("mouseup", onUp);
      this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", onUp);
    this.rippleHandlers.startPress(evt);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
};
ButtonBase.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  ariaProperty,
  n5({ type: String, attribute: "aria-haspopup" })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
  n5({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
  n5({ type: Boolean, attribute: "trailingicon" })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
  n5({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
  n5({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
  n5({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
  i4("#button")
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
  e7("mwc-ripple")
], ButtonBase.prototype, "ripple", void 0);
__decorate([
  t3()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  e6({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);

// ../node_modules/@material/mwc-button/styles.css.js
var styles6 = i`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

// ../node_modules/@material/mwc-button/mwc-button.js
var Button = class Button2 extends ButtonBase {
};
Button.styles = [styles6];
Button = __decorate([
  e4("mwc-button")
], Button);

// ../node_modules/@material/notched-outline/constants.js
var strings3 = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
};
var numbers3 = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses3 = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};

// ../node_modules/@material/notched-outline/foundation.js
var MDCNotchedOutlineFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCNotchedOutlineFoundation2, _super);
    function MDCNotchedOutlineFoundation2(adapter) {
      return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation2.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation2, "strings", {
      get: function() {
        return strings3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "cssClasses", {
      get: function() {
        return cssClasses3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "numbers", {
      get: function() {
        return numbers3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          setNotchWidthProperty: function() {
            return void 0;
          },
          removeNotchWidthProperty: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCNotchedOutlineFoundation2.prototype.notch = function(notchWidth) {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
      if (notchWidth > 0) {
        notchWidth += numbers3.NOTCH_ELEMENT_PADDING;
      }
      this.adapter.setNotchWidthProperty(notchWidth);
      this.adapter.addClass(OUTLINE_NOTCHED);
    };
    MDCNotchedOutlineFoundation2.prototype.closeNotch = function() {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(OUTLINE_NOTCHED);
      this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation2;
  }(MDCFoundation)
);

// ../node_modules/@material/mwc-notched-outline/mwc-notched-outline-base.js
var NotchedOutlineBase = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCNotchedOutlineFoundation;
    this.width = 0;
    this.open = false;
    this.lastOpen = this.open;
  }
  createAdapter() {
    return {
      addClass: (className) => this.mdcRoot.classList.add(className),
      removeClass: (className) => this.mdcRoot.classList.remove(className),
      setNotchWidthProperty: (width) => this.notchElement.style.setProperty("width", `${width}px`),
      removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width")
    };
  }
  openOrClose(shouldOpen, width) {
    if (!this.mdcFoundation) {
      return;
    }
    if (shouldOpen && width !== void 0) {
      this.mdcFoundation.notch(width);
    } else {
      this.mdcFoundation.closeNotch();
    }
  }
  render() {
    this.openOrClose(this.open, this.width);
    const classes = o7({
      "mdc-notched-outline--notched": this.open
    });
    return x`
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
};
__decorate([
  i4(".mdc-notched-outline")
], NotchedOutlineBase.prototype, "mdcRoot", void 0);
__decorate([
  n5({ type: Number })
], NotchedOutlineBase.prototype, "width", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], NotchedOutlineBase.prototype, "open", void 0);
__decorate([
  i4(".mdc-notched-outline__notch")
], NotchedOutlineBase.prototype, "notchElement", void 0);

// ../node_modules/@material/mwc-notched-outline/mwc-notched-outline.css.js
var styles7 = i`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;

// ../node_modules/@material/mwc-notched-outline/mwc-notched-outline.js
var NotchedOutline = class NotchedOutline2 extends NotchedOutlineBase {
};
NotchedOutline.styles = [styles7];
NotchedOutline = __decorate([
  e4("mwc-notched-outline")
], NotchedOutline);

// ../node_modules/@material/mwc-base/form-element.js
var _a2;
var _b2;
var USING_SHADY_DOM = (_b2 = (_a2 = window.ShadyDOM) === null || _a2 === void 0 ? void 0 : _a2.inUse) !== null && _b2 !== void 0 ? _b2 : false;
var FormElement = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.containingForm = null;
    this.formDataListener = (ev) => {
      if (!this.disabled) {
        this.setFormData(ev.formData);
      }
    };
  }
  findFormElement() {
    if (!this.shadowRoot || USING_SHADY_DOM) {
      return null;
    }
    const root = this.getRootNode();
    const forms = root.querySelectorAll("form");
    for (const form of Array.from(forms)) {
      if (form.contains(this)) {
        return form;
      }
    }
    return null;
  }
  connectedCallback() {
    var _a3;
    super.connectedCallback();
    this.containingForm = this.findFormElement();
    (_a3 = this.containingForm) === null || _a3 === void 0 ? void 0 : _a3.addEventListener("formdata", this.formDataListener);
  }
  disconnectedCallback() {
    var _a3;
    super.disconnectedCallback();
    (_a3 = this.containingForm) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("formdata", this.formDataListener);
    this.containingForm = null;
  }
  click() {
    if (this.formElement && !this.disabled) {
      this.formElement.focus();
      this.formElement.click();
    }
  }
  firstUpdated() {
    super.firstUpdated();
    if (this.shadowRoot) {
      this.mdcRoot.addEventListener("change", (e12) => {
        this.dispatchEvent(new Event("change", e12));
      });
    }
  }
};
FormElement.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  n5({ type: Boolean })
], FormElement.prototype, "disabled", void 0);

// ../node_modules/@material/floating-label/constants.js
var cssClasses4 = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};

// ../node_modules/@material/floating-label/foundation.js
var MDCFloatingLabelFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCFloatingLabelFoundation2, _super);
    function MDCFloatingLabelFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation2.defaultAdapter), adapter)) || this;
      _this.shakeAnimationEndHandler = function() {
        _this.handleShakeAnimationEnd();
      };
      return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation2, "cssClasses", {
      get: function() {
        return cssClasses4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation2, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCFloatingLabelFoundation2.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation2.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation2.prototype.getWidth = function() {
      return this.adapter.getWidth();
    };
    MDCFloatingLabelFoundation2.prototype.shake = function(shouldShake) {
      var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
      if (shouldShake) {
        this.adapter.addClass(LABEL_SHAKE);
      } else {
        this.adapter.removeClass(LABEL_SHAKE);
      }
    };
    MDCFloatingLabelFoundation2.prototype.float = function(shouldFloat) {
      var _a3 = MDCFloatingLabelFoundation2.cssClasses, LABEL_FLOAT_ABOVE = _a3.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a3.LABEL_SHAKE;
      if (shouldFloat) {
        this.adapter.addClass(LABEL_FLOAT_ABOVE);
      } else {
        this.adapter.removeClass(LABEL_FLOAT_ABOVE);
        this.adapter.removeClass(LABEL_SHAKE);
      }
    };
    MDCFloatingLabelFoundation2.prototype.setRequired = function(isRequired) {
      var LABEL_REQUIRED = MDCFloatingLabelFoundation2.cssClasses.LABEL_REQUIRED;
      if (isRequired) {
        this.adapter.addClass(LABEL_REQUIRED);
      } else {
        this.adapter.removeClass(LABEL_REQUIRED);
      }
    };
    MDCFloatingLabelFoundation2.prototype.handleShakeAnimationEnd = function() {
      var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation2;
  }(MDCFoundation)
);

// ../node_modules/@material/mwc-floating-label/mwc-floating-label-directive.js
var createAdapter = (labelElement) => {
  return {
    addClass: (className) => labelElement.classList.add(className),
    removeClass: (className) => labelElement.classList.remove(className),
    getWidth: () => labelElement.scrollWidth,
    registerInteractionHandler: (evtType, handler) => {
      labelElement.addEventListener(evtType, handler);
    },
    deregisterInteractionHandler: (evtType, handler) => {
      labelElement.removeEventListener(evtType, handler);
    }
  };
};
var FloatingLabelDirective = class extends i5 {
  constructor(partInfo) {
    super(partInfo);
    this.foundation = null;
    this.previousPart = null;
    switch (partInfo.type) {
      case t4.ATTRIBUTE:
      case t4.PROPERTY:
        break;
      default:
        throw new Error("FloatingLabel directive only support attribute and property parts");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(part, [label]) {
    if (part !== this.previousPart) {
      if (this.foundation) {
        this.foundation.destroy();
      }
      this.previousPart = part;
      const labelElement = part.element;
      labelElement.classList.add("mdc-floating-label");
      const adapter = createAdapter(labelElement);
      this.foundation = new MDCFloatingLabelFoundation(adapter);
      this.foundation.init();
    }
    return this.render(label);
  }
  render(_label) {
    return this.foundation;
  }
};
var floatingLabel = e9(FloatingLabelDirective);

// ../node_modules/@material/line-ripple/constants.js
var cssClasses5 = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};

// ../node_modules/@material/line-ripple/foundation.js
var MDCLineRippleFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCLineRippleFoundation2, _super);
    function MDCLineRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.transitionEndHandler = function(evt) {
        _this.handleTransitionEnd(evt);
      };
      return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses5;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation2, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          setStyle: function() {
            return void 0;
          },
          registerEventHandler: function() {
            return void 0;
          },
          deregisterEventHandler: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCLineRippleFoundation2.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    };
    MDCLineRippleFoundation2.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    };
    MDCLineRippleFoundation2.prototype.activate = function() {
      this.adapter.removeClass(cssClasses5.LINE_RIPPLE_DEACTIVATING);
      this.adapter.addClass(cssClasses5.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation2.prototype.setRippleCenter = function(xCoordinate) {
      this.adapter.setStyle("transform-origin", xCoordinate + "px center");
    };
    MDCLineRippleFoundation2.prototype.deactivate = function() {
      this.adapter.addClass(cssClasses5.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation2.prototype.handleTransitionEnd = function(evt) {
      var isDeactivating = this.adapter.hasClass(cssClasses5.LINE_RIPPLE_DEACTIVATING);
      if (evt.propertyName === "opacity") {
        if (isDeactivating) {
          this.adapter.removeClass(cssClasses5.LINE_RIPPLE_ACTIVE);
          this.adapter.removeClass(cssClasses5.LINE_RIPPLE_DEACTIVATING);
        }
      }
    };
    return MDCLineRippleFoundation2;
  }(MDCFoundation)
);

// ../node_modules/@material/mwc-line-ripple/mwc-line-ripple-directive.js
var createAdapter2 = (lineElement) => {
  return {
    addClass: (className) => lineElement.classList.add(className),
    removeClass: (className) => lineElement.classList.remove(className),
    hasClass: (className) => lineElement.classList.contains(className),
    setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
    registerEventHandler: (evtType, handler) => {
      lineElement.addEventListener(evtType, handler);
    },
    deregisterEventHandler: (evtType, handler) => {
      lineElement.removeEventListener(evtType, handler);
    }
  };
};
var LineRippleDirective = class extends i5 {
  constructor(partInfo) {
    super(partInfo);
    this.previousPart = null;
    this.foundation = null;
    switch (partInfo.type) {
      case t4.ATTRIBUTE:
      case t4.PROPERTY:
        return;
      default:
        throw new Error("LineRipple only support attribute and property parts.");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(part, _params) {
    if (this.previousPart !== part) {
      if (this.foundation) {
        this.foundation.destroy();
      }
      this.previousPart = part;
      const lineElement = part.element;
      lineElement.classList.add("mdc-line-ripple");
      const adapter = createAdapter2(lineElement);
      this.foundation = new MDCLineRippleFoundation(adapter);
      this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
};
var lineRipple = e9(LineRippleDirective);

// ../node_modules/@material/textfield/constants.js
var strings4 = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
};
var cssClasses6 = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
};
var numbers4 = {
  LABEL_SCALE: 0.75
};
var VALIDATION_ATTR_WHITELIST = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
];
var ALWAYS_FLOAT_TYPES = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];

// ../node_modules/@material/textfield/foundation.js
var POINTERDOWN_EVENTS = ["mousedown", "touchstart"];
var INTERACTION_EVENTS = ["click", "keydown"];
var MDCTextFieldFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCTextFieldFoundation2, _super);
    function MDCTextFieldFoundation2(adapter, foundationMap) {
      if (foundationMap === void 0) {
        foundationMap = {};
      }
      var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation2.defaultAdapter), adapter)) || this;
      _this.isFocused = false;
      _this.receivedUserInput = false;
      _this.valid = true;
      _this.useNativeValidation = true;
      _this.validateOnValueChange = true;
      _this.helperText = foundationMap.helperText;
      _this.characterCounter = foundationMap.characterCounter;
      _this.leadingIcon = foundationMap.leadingIcon;
      _this.trailingIcon = foundationMap.trailingIcon;
      _this.inputFocusHandler = function() {
        _this.activateFocus();
      };
      _this.inputBlurHandler = function() {
        _this.deactivateFocus();
      };
      _this.inputInputHandler = function() {
        _this.handleInput();
      };
      _this.setPointerXOffset = function(evt) {
        _this.setTransformOrigin(evt);
      };
      _this.textFieldInteractionHandler = function() {
        _this.handleTextFieldInteraction();
      };
      _this.validationAttributeChangeHandler = function(attributesList) {
        _this.handleValidationAttributeChange(attributesList);
      };
      return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation2, "cssClasses", {
      get: function() {
        return cssClasses6;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation2, "strings", {
      get: function() {
        return strings4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation2, "numbers", {
      get: function() {
        return numbers4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldAlwaysFloat", {
      get: function() {
        var type = this.getNativeInput().type;
        return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation2, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return true;
          },
          setInputAttr: function() {
            return void 0;
          },
          removeInputAttr: function() {
            return void 0;
          },
          registerTextFieldInteractionHandler: function() {
            return void 0;
          },
          deregisterTextFieldInteractionHandler: function() {
            return void 0;
          },
          registerInputInteractionHandler: function() {
            return void 0;
          },
          deregisterInputInteractionHandler: function() {
            return void 0;
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
              return void 0;
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
            return void 0;
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return false;
          },
          activateLineRipple: function() {
            return void 0;
          },
          deactivateLineRipple: function() {
            return void 0;
          },
          setLineRippleTransformOrigin: function() {
            return void 0;
          },
          shakeLabel: function() {
            return void 0;
          },
          floatLabel: function() {
            return void 0;
          },
          setLabelRequired: function() {
            return void 0;
          },
          hasLabel: function() {
            return false;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return false;
          },
          notchOutline: function() {
            return void 0;
          },
          closeOutline: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCTextFieldFoundation2.prototype.init = function() {
      var e_1, _a3, e_2, _b3;
      if (this.adapter.hasLabel() && this.getNativeInput().required) {
        this.adapter.setLabelRequired(true);
      }
      if (this.adapter.isFocused()) {
        this.inputFocusHandler();
      } else if (this.adapter.hasLabel() && this.shouldFloat) {
        this.notchOutline(true);
        this.adapter.floatLabel(true);
        this.styleFloating(true);
      }
      this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler);
      this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler);
      this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var POINTERDOWN_EVENTS_1 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
          var evtType = POINTERDOWN_EVENTS_1_1.value;
          this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a3 = POINTERDOWN_EVENTS_1.return))
            _a3.call(POINTERDOWN_EVENTS_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      try {
        for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
          var evtType = INTERACTION_EVENTS_1_1.value;
          this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b3 = INTERACTION_EVENTS_1.return))
            _b3.call(INTERACTION_EVENTS_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
      this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation2.prototype.destroy = function() {
      var e_3, _a3, e_4, _b3;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler);
      this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler);
      this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var POINTERDOWN_EVENTS_2 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
          var evtType = POINTERDOWN_EVENTS_2_1.value;
          this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a3 = POINTERDOWN_EVENTS_2.return))
            _a3.call(POINTERDOWN_EVENTS_2);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      try {
        for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
          var evtType = INTERACTION_EVENTS_2_1.value;
          this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b3 = INTERACTION_EVENTS_2.return))
            _b3.call(INTERACTION_EVENTS_2);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    };
    MDCTextFieldFoundation2.prototype.handleTextFieldInteraction = function() {
      var nativeInput = this.adapter.getNativeInput();
      if (nativeInput && nativeInput.disabled) {
        return;
      }
      this.receivedUserInput = true;
    };
    MDCTextFieldFoundation2.prototype.handleValidationAttributeChange = function(attributesList) {
      var _this = this;
      attributesList.some(function(attributeName) {
        if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
          _this.styleValidity(true);
          _this.adapter.setLabelRequired(_this.getNativeInput().required);
          return true;
        }
        return false;
      });
      if (attributesList.indexOf("maxlength") > -1) {
        this.setcharacterCounter(this.getValue().length);
      }
    };
    MDCTextFieldFoundation2.prototype.notchOutline = function(openNotch) {
      if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
        return;
      }
      if (openNotch) {
        var labelWidth = this.adapter.getLabelWidth() * numbers4.LABEL_SCALE;
        this.adapter.notchOutline(labelWidth);
      } else {
        this.adapter.closeOutline();
      }
    };
    MDCTextFieldFoundation2.prototype.activateFocus = function() {
      this.isFocused = true;
      this.styleFocused(this.isFocused);
      this.adapter.activateLineRipple();
      if (this.adapter.hasLabel()) {
        this.notchOutline(this.shouldFloat);
        this.adapter.floatLabel(this.shouldFloat);
        this.styleFloating(this.shouldFloat);
        this.adapter.shakeLabel(this.shouldShake);
      }
      if (this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid)) {
        this.helperText.showToScreenReader();
      }
    };
    MDCTextFieldFoundation2.prototype.setTransformOrigin = function(evt) {
      if (this.isDisabled() || this.adapter.hasOutline()) {
        return;
      }
      var touches = evt.touches;
      var targetEvent = touches ? touches[0] : evt;
      var targetClientRect = targetEvent.target.getBoundingClientRect();
      var normalizedX = targetEvent.clientX - targetClientRect.left;
      this.adapter.setLineRippleTransformOrigin(normalizedX);
    };
    MDCTextFieldFoundation2.prototype.handleInput = function() {
      this.autoCompleteFocus();
      this.setcharacterCounter(this.getValue().length);
    };
    MDCTextFieldFoundation2.prototype.autoCompleteFocus = function() {
      if (!this.receivedUserInput) {
        this.activateFocus();
      }
    };
    MDCTextFieldFoundation2.prototype.deactivateFocus = function() {
      this.isFocused = false;
      this.adapter.deactivateLineRipple();
      var isValid = this.isValid();
      this.styleValidity(isValid);
      this.styleFocused(this.isFocused);
      if (this.adapter.hasLabel()) {
        this.notchOutline(this.shouldFloat);
        this.adapter.floatLabel(this.shouldFloat);
        this.styleFloating(this.shouldFloat);
        this.adapter.shakeLabel(this.shouldShake);
      }
      if (!this.shouldFloat) {
        this.receivedUserInput = false;
      }
    };
    MDCTextFieldFoundation2.prototype.getValue = function() {
      return this.getNativeInput().value;
    };
    MDCTextFieldFoundation2.prototype.setValue = function(value) {
      if (this.getValue() !== value) {
        this.getNativeInput().value = value;
      }
      this.setcharacterCounter(value.length);
      if (this.validateOnValueChange) {
        var isValid = this.isValid();
        this.styleValidity(isValid);
      }
      if (this.adapter.hasLabel()) {
        this.notchOutline(this.shouldFloat);
        this.adapter.floatLabel(this.shouldFloat);
        this.styleFloating(this.shouldFloat);
        if (this.validateOnValueChange) {
          this.adapter.shakeLabel(this.shouldShake);
        }
      }
    };
    MDCTextFieldFoundation2.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    };
    MDCTextFieldFoundation2.prototype.setValid = function(isValid) {
      this.valid = isValid;
      this.styleValidity(isValid);
      var shouldShake = !isValid && !this.isFocused && !!this.getValue();
      if (this.adapter.hasLabel()) {
        this.adapter.shakeLabel(shouldShake);
      }
    };
    MDCTextFieldFoundation2.prototype.setValidateOnValueChange = function(shouldValidate) {
      this.validateOnValueChange = shouldValidate;
    };
    MDCTextFieldFoundation2.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    };
    MDCTextFieldFoundation2.prototype.setUseNativeValidation = function(useNativeValidation) {
      this.useNativeValidation = useNativeValidation;
    };
    MDCTextFieldFoundation2.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    };
    MDCTextFieldFoundation2.prototype.setDisabled = function(disabled) {
      this.getNativeInput().disabled = disabled;
      this.styleDisabled(disabled);
    };
    MDCTextFieldFoundation2.prototype.setHelperTextContent = function(content) {
      if (this.helperText) {
        this.helperText.setContent(content);
      }
    };
    MDCTextFieldFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
      if (this.leadingIcon) {
        this.leadingIcon.setAriaLabel(label);
      }
    };
    MDCTextFieldFoundation2.prototype.setLeadingIconContent = function(content) {
      if (this.leadingIcon) {
        this.leadingIcon.setContent(content);
      }
    };
    MDCTextFieldFoundation2.prototype.setTrailingIconAriaLabel = function(label) {
      if (this.trailingIcon) {
        this.trailingIcon.setAriaLabel(label);
      }
    };
    MDCTextFieldFoundation2.prototype.setTrailingIconContent = function(content) {
      if (this.trailingIcon) {
        this.trailingIcon.setContent(content);
      }
    };
    MDCTextFieldFoundation2.prototype.setcharacterCounter = function(currentLength) {
      if (!this.characterCounter) {
        return;
      }
      var maxLength = this.getNativeInput().maxLength;
      if (maxLength === -1) {
        throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
      }
      this.characterCounter.setCounterValue(currentLength, maxLength);
    };
    MDCTextFieldFoundation2.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || false;
    };
    MDCTextFieldFoundation2.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    };
    MDCTextFieldFoundation2.prototype.styleValidity = function(isValid) {
      var INVALID = MDCTextFieldFoundation2.cssClasses.INVALID;
      if (isValid) {
        this.adapter.removeClass(INVALID);
      } else {
        this.adapter.addClass(INVALID);
      }
      if (this.helperText) {
        this.helperText.setValidity(isValid);
        var helperTextValidation = this.helperText.isValidation();
        if (!helperTextValidation) {
          return;
        }
        var helperTextVisible = this.helperText.isVisible();
        var helperTextId = this.helperText.getId();
        if (helperTextVisible && helperTextId) {
          this.adapter.setInputAttr(strings4.ARIA_DESCRIBEDBY, helperTextId);
        } else {
          this.adapter.removeInputAttr(strings4.ARIA_DESCRIBEDBY);
        }
      }
    };
    MDCTextFieldFoundation2.prototype.styleFocused = function(isFocused) {
      var FOCUSED = MDCTextFieldFoundation2.cssClasses.FOCUSED;
      if (isFocused) {
        this.adapter.addClass(FOCUSED);
      } else {
        this.adapter.removeClass(FOCUSED);
      }
    };
    MDCTextFieldFoundation2.prototype.styleDisabled = function(isDisabled) {
      var _a3 = MDCTextFieldFoundation2.cssClasses, DISABLED = _a3.DISABLED, INVALID = _a3.INVALID;
      if (isDisabled) {
        this.adapter.addClass(DISABLED);
        this.adapter.removeClass(INVALID);
      } else {
        this.adapter.removeClass(DISABLED);
      }
      if (this.leadingIcon) {
        this.leadingIcon.setDisabled(isDisabled);
      }
      if (this.trailingIcon) {
        this.trailingIcon.setDisabled(isDisabled);
      }
    };
    MDCTextFieldFoundation2.prototype.styleFloating = function(isFloating) {
      var LABEL_FLOATING = MDCTextFieldFoundation2.cssClasses.LABEL_FLOATING;
      if (isFloating) {
        this.adapter.addClass(LABEL_FLOATING);
      } else {
        this.adapter.removeClass(LABEL_FLOATING);
      }
    };
    MDCTextFieldFoundation2.prototype.getNativeInput = function() {
      var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
      return nativeInput || {
        disabled: false,
        maxLength: -1,
        required: false,
        type: "input",
        validity: {
          badInput: false,
          valid: true
        },
        value: ""
      };
    };
    return MDCTextFieldFoundation2;
  }(MDCFoundation)
);
var foundation_default2 = MDCTextFieldFoundation;

// ../node_modules/lit-html/directive-helpers.js
var { I: l6 } = j;
var e10 = (o9) => void 0 === o9.strings;
var s5 = {};
var a3 = (o9, l8 = s5) => o9._$AH = l8;

// ../node_modules/lit-html/directives/live.js
var l7 = e9(class extends i5 {
  constructor(r5) {
    if (super(r5), r5.type !== t4.PROPERTY && r5.type !== t4.ATTRIBUTE && r5.type !== t4.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!e10(r5))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(r5) {
    return r5;
  }
  update(i8, [t6]) {
    if (t6 === T || t6 === A)
      return t6;
    const o9 = i8.element, l8 = i8.name;
    if (i8.type === t4.PROPERTY) {
      if (t6 === o9[l8])
        return T;
    } else if (i8.type === t4.BOOLEAN_ATTRIBUTE) {
      if (!!t6 === o9.hasAttribute(l8))
        return T;
    } else if (i8.type === t4.ATTRIBUTE && o9.getAttribute(l8) === t6 + "")
      return T;
    return a3(i8), t6;
  }
});

// ../node_modules/@material/mwc-textfield/mwc-textfield-base.js
var passiveEvents = ["touchstart", "touchmove", "scroll", "mousewheel"];
var createValidityObj = (customValidity = {}) => {
  const objectifiedCustomValidity = {};
  for (const propName in customValidity) {
    objectifiedCustomValidity[propName] = customValidity[propName];
  }
  return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
};
var TextFieldBase = class extends FormElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = foundation_default2;
    this.value = "";
    this.type = "text";
    this.placeholder = "";
    this.label = "";
    this.icon = "";
    this.iconTrailing = "";
    this.disabled = false;
    this.required = false;
    this.minLength = -1;
    this.maxLength = -1;
    this.outlined = false;
    this.helper = "";
    this.validateOnInitialRender = false;
    this.validationMessage = "";
    this.autoValidate = false;
    this.pattern = "";
    this.min = "";
    this.max = "";
    this.step = null;
    this.size = null;
    this.helperPersistent = false;
    this.charCounter = false;
    this.endAligned = false;
    this.prefix = "";
    this.suffix = "";
    this.name = "";
    this.readOnly = false;
    this.autocapitalize = "";
    this.outlineOpen = false;
    this.outlineWidth = 0;
    this.isUiValid = true;
    this.focused = false;
    this._validity = createValidityObj();
    this.validityTransform = null;
  }
  get validity() {
    this._checkValidity(this.value);
    return this._validity;
  }
  get willValidate() {
    return this.formElement.willValidate;
  }
  get selectionStart() {
    return this.formElement.selectionStart;
  }
  get selectionEnd() {
    return this.formElement.selectionEnd;
  }
  focus() {
    const focusEvt = new CustomEvent("focus");
    this.formElement.dispatchEvent(focusEvt);
    this.formElement.focus();
  }
  blur() {
    const blurEvt = new CustomEvent("blur");
    this.formElement.dispatchEvent(blurEvt);
    this.formElement.blur();
  }
  select() {
    this.formElement.select();
  }
  setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
    this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  update(changedProperties) {
    if (changedProperties.has("autoValidate") && this.mdcFoundation) {
      this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
    }
    if (changedProperties.has("value") && typeof this.value !== "string") {
      this.value = `${this.value}`;
    }
    super.update(changedProperties);
  }
  setFormData(formData) {
    if (this.name) {
      formData.append(this.name, this.value);
    }
  }
  /** @soyTemplate */
  render() {
    const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
    const shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
    const classes = {
      "mdc-text-field--disabled": this.disabled,
      "mdc-text-field--no-label": !this.label,
      "mdc-text-field--filled": !this.outlined,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--with-leading-icon": this.icon,
      "mdc-text-field--with-trailing-icon": this.iconTrailing,
      "mdc-text-field--end-aligned": this.endAligned
    };
    return x`
      <label class="mdc-text-field ${o7(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
  }
  updated(changedProperties) {
    if (changedProperties.has("value") && changedProperties.get("value") !== void 0) {
      this.mdcFoundation.setValue(this.value);
      if (this.autoValidate) {
        this.reportValidity();
      }
    }
  }
  /** @soyTemplate */
  renderRipple() {
    return this.outlined ? "" : x`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  /** @soyTemplate */
  renderOutline() {
    return !this.outlined ? "" : x`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
  }
  /** @soyTemplate */
  renderLabel() {
    return !this.label ? "" : x`
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
  }
  /** @soyTemplate */
  renderLeadingIcon() {
    return this.icon ? this.renderIcon(this.icon) : "";
  }
  /** @soyTemplate */
  renderTrailingIcon() {
    return this.iconTrailing ? this.renderIcon(this.iconTrailing, true) : "";
  }
  /** @soyTemplate */
  renderIcon(icon, isTrailingIcon = false) {
    const classes = {
      "mdc-text-field__icon--leading": !isTrailingIcon,
      "mdc-text-field__icon--trailing": isTrailingIcon
    };
    return x`<i class="material-icons mdc-text-field__icon ${o7(classes)}">${icon}</i>`;
  }
  /** @soyTemplate */
  renderPrefix() {
    return this.prefix ? this.renderAffix(this.prefix) : "";
  }
  /** @soyTemplate */
  renderSuffix() {
    return this.suffix ? this.renderAffix(this.suffix, true) : "";
  }
  /** @soyTemplate */
  renderAffix(content, isSuffix = false) {
    const classes = {
      "mdc-text-field__affix--prefix": !isSuffix,
      "mdc-text-field__affix--suffix": isSuffix
    };
    return x`<span class="mdc-text-field__affix ${o7(classes)}">
        ${content}</span>`;
  }
  /** @soyTemplate */
  renderInput(shouldRenderHelperText) {
    const minOrUndef = this.minLength === -1 ? void 0 : this.minLength;
    const maxOrUndef = this.maxLength === -1 ? void 0 : this.maxLength;
    const autocapitalizeOrUndef = this.autocapitalize ? this.autocapitalize : void 0;
    const showValidationMessage = this.validationMessage && !this.isUiValid;
    const ariaLabelledbyOrUndef = !!this.label ? "label" : void 0;
    const ariaControlsOrUndef = shouldRenderHelperText ? "helper-text" : void 0;
    const ariaDescribedbyOrUndef = this.focused || this.helperPersistent || showValidationMessage ? "helper-text" : void 0;
    return x`
      <input
          aria-labelledby=${l5(ariaLabelledbyOrUndef)}
          aria-controls="${l5(ariaControlsOrUndef)}"
          aria-describedby="${l5(ariaDescribedbyOrUndef)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${l7(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l5(minOrUndef)}"
          maxlength="${l5(maxOrUndef)}"
          pattern="${l5(this.pattern ? this.pattern : void 0)}"
          min="${l5(this.min === "" ? void 0 : this.min)}"
          max="${l5(this.max === "" ? void 0 : this.max)}"
          step="${l5(this.step === null ? void 0 : this.step)}"
          size="${l5(this.size === null ? void 0 : this.size)}"
          name="${l5(this.name === "" ? void 0 : this.name)}"
          inputmode="${l5(this.inputMode)}"
          autocapitalize="${l5(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  /** @soyTemplate */
  renderLineRipple() {
    return this.outlined ? "" : x`
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) {
    const showValidationMessage = this.validationMessage && !this.isUiValid;
    const classes = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": showValidationMessage
    };
    const ariaHiddenOrUndef = this.focused || this.helperPersistent || showValidationMessage ? void 0 : "true";
    const helperText = showValidationMessage ? this.validationMessage : this.helper;
    return !shouldRenderHelperText ? "" : x`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${l5(ariaHiddenOrUndef)}"
             class="mdc-text-field-helper-text ${o7(classes)}"
             >${helperText}</div>
        ${this.renderCharCounter(shouldRenderCharCounter)}
      </div>`;
  }
  /** @soyTemplate */
  renderCharCounter(shouldRenderCharCounter) {
    const length = Math.min(this.value.length, this.maxLength);
    return !shouldRenderCharCounter ? "" : x`
      <span class="mdc-text-field-character-counter"
            >${length} / ${this.maxLength}</span>`;
  }
  onInputFocus() {
    this.focused = true;
  }
  onInputBlur() {
    this.focused = false;
    this.reportValidity();
  }
  checkValidity() {
    const isValid = this._checkValidity(this.value);
    if (!isValid) {
      const invalidEvent = new Event("invalid", { bubbles: false, cancelable: true });
      this.dispatchEvent(invalidEvent);
    }
    return isValid;
  }
  reportValidity() {
    const isValid = this.checkValidity();
    this.mdcFoundation.setValid(isValid);
    this.isUiValid = isValid;
    return isValid;
  }
  _checkValidity(value) {
    const nativeValidity = this.formElement.validity;
    let validity = createValidityObj(nativeValidity);
    if (this.validityTransform) {
      const customValidity = this.validityTransform(value, validity);
      validity = Object.assign(Object.assign({}, validity), customValidity);
      this.mdcFoundation.setUseNativeValidation(false);
    } else {
      this.mdcFoundation.setUseNativeValidation(true);
    }
    this._validity = validity;
    return this._validity.valid;
  }
  setCustomValidity(message) {
    this.validationMessage = message;
    this.formElement.setCustomValidity(message);
  }
  handleInputChange() {
    this.value = this.formElement.value;
  }
  createAdapter() {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
  }
  getRootAdapterMethods() {
    return Object.assign({ registerTextFieldInteractionHandler: (evtType, handler) => this.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: (handler) => {
      const getAttributesList = (mutationsList) => {
        return mutationsList.map((mutation) => mutation.attributeName).filter((attributeName) => attributeName);
      };
      const observer2 = new MutationObserver((mutationsList) => {
        handler(getAttributesList(mutationsList));
      });
      const config = { attributes: true };
      observer2.observe(this.formElement, config);
      return observer2;
    }, deregisterValidationAttributeChangeHandler: (observer2) => observer2.disconnect() }, addHasRemoveClass(this.mdcRoot));
  }
  getInputAdapterMethods() {
    return {
      getNativeInput: () => this.formElement,
      // since HelperTextFoundation is not used, aria-describedby a11y logic
      // is implemented in render method instead of these adapter methods
      setInputAttr: () => void 0,
      removeInputAttr: () => void 0,
      isFocused: () => this.shadowRoot ? this.shadowRoot.activeElement === this.formElement : false,
      registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler, { passive: evtType in passiveEvents }),
      deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler)
    };
  }
  getLabelAdapterMethods() {
    return {
      floatLabel: (shouldFloat) => this.labelElement && this.labelElement.floatingLabelFoundation.float(shouldFloat),
      getLabelWidth: () => {
        return this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0;
      },
      hasLabel: () => Boolean(this.labelElement),
      shakeLabel: (shouldShake) => this.labelElement && this.labelElement.floatingLabelFoundation.shake(shouldShake),
      setLabelRequired: (isRequired) => {
        if (this.labelElement) {
          this.labelElement.floatingLabelFoundation.setRequired(isRequired);
        }
      }
    };
  }
  getLineRippleAdapterMethods() {
    return {
      activateLineRipple: () => {
        if (this.lineRippleElement) {
          this.lineRippleElement.lineRippleFoundation.activate();
        }
      },
      deactivateLineRipple: () => {
        if (this.lineRippleElement) {
          this.lineRippleElement.lineRippleFoundation.deactivate();
        }
      },
      setLineRippleTransformOrigin: (normalizedX) => {
        if (this.lineRippleElement) {
          this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
        }
      }
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    var _a3;
    const result = await super.getUpdateComplete();
    await ((_a3 = this.outlineElement) === null || _a3 === void 0 ? void 0 : _a3.updateComplete);
    return result;
  }
  // tslint:enable:ban-ts-ignore
  firstUpdated() {
    var _a3;
    super.firstUpdated();
    this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
    if (this.validateOnInitialRender) {
      this.reportValidity();
    }
    (_a3 = this.outlineElement) === null || _a3 === void 0 ? void 0 : _a3.updateComplete.then(() => {
      var _a4;
      this.outlineWidth = ((_a4 = this.labelElement) === null || _a4 === void 0 ? void 0 : _a4.floatingLabelFoundation.getWidth()) || 0;
    });
  }
  getOutlineAdapterMethods() {
    return {
      closeOutline: () => this.outlineElement && (this.outlineOpen = false),
      hasOutline: () => Boolean(this.outlineElement),
      notchOutline: (labelWidth) => {
        const outlineElement = this.outlineElement;
        if (outlineElement && !this.outlineOpen) {
          this.outlineWidth = labelWidth;
          this.outlineOpen = true;
        }
      }
    };
  }
  async layout() {
    await this.updateComplete;
    const labelElement = this.labelElement;
    if (!labelElement) {
      this.outlineOpen = false;
      return;
    }
    const shouldFloat = !!this.label && !!this.value;
    labelElement.floatingLabelFoundation.float(shouldFloat);
    if (!this.outlined) {
      return;
    }
    this.outlineOpen = shouldFloat;
    await this.updateComplete;
    const labelWidth = labelElement.floatingLabelFoundation.getWidth();
    if (this.outlineOpen) {
      this.outlineWidth = labelWidth;
      await this.updateComplete;
    }
  }
};
__decorate([
  i4(".mdc-text-field")
], TextFieldBase.prototype, "mdcRoot", void 0);
__decorate([
  i4("input")
], TextFieldBase.prototype, "formElement", void 0);
__decorate([
  i4(".mdc-floating-label")
], TextFieldBase.prototype, "labelElement", void 0);
__decorate([
  i4(".mdc-line-ripple")
], TextFieldBase.prototype, "lineRippleElement", void 0);
__decorate([
  i4("mwc-notched-outline")
], TextFieldBase.prototype, "outlineElement", void 0);
__decorate([
  i4(".mdc-notched-outline__notch")
], TextFieldBase.prototype, "notchElement", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "value", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "type", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "placeholder", void 0);
__decorate([
  n5({ type: String }),
  observer(function(_newVal, oldVal) {
    if (oldVal !== void 0 && this.label !== oldVal) {
      this.layout();
    }
  })
], TextFieldBase.prototype, "label", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "icon", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "iconTrailing", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], TextFieldBase.prototype, "disabled", void 0);
__decorate([
  n5({ type: Boolean })
], TextFieldBase.prototype, "required", void 0);
__decorate([
  n5({ type: Number })
], TextFieldBase.prototype, "minLength", void 0);
__decorate([
  n5({ type: Number })
], TextFieldBase.prototype, "maxLength", void 0);
__decorate([
  n5({ type: Boolean, reflect: true }),
  observer(function(_newVal, oldVal) {
    if (oldVal !== void 0 && this.outlined !== oldVal) {
      this.layout();
    }
  })
], TextFieldBase.prototype, "outlined", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "helper", void 0);
__decorate([
  n5({ type: Boolean })
], TextFieldBase.prototype, "validateOnInitialRender", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "validationMessage", void 0);
__decorate([
  n5({ type: Boolean })
], TextFieldBase.prototype, "autoValidate", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "pattern", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "min", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "max", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "step", void 0);
__decorate([
  n5({ type: Number })
], TextFieldBase.prototype, "size", void 0);
__decorate([
  n5({ type: Boolean })
], TextFieldBase.prototype, "helperPersistent", void 0);
__decorate([
  n5({ type: Boolean })
], TextFieldBase.prototype, "charCounter", void 0);
__decorate([
  n5({ type: Boolean })
], TextFieldBase.prototype, "endAligned", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "prefix", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "suffix", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "name", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "inputMode", void 0);
__decorate([
  n5({ type: Boolean })
], TextFieldBase.prototype, "readOnly", void 0);
__decorate([
  n5({ type: String })
], TextFieldBase.prototype, "autocapitalize", void 0);
__decorate([
  t3()
], TextFieldBase.prototype, "outlineOpen", void 0);
__decorate([
  t3()
], TextFieldBase.prototype, "outlineWidth", void 0);
__decorate([
  t3()
], TextFieldBase.prototype, "isUiValid", void 0);
__decorate([
  t3()
], TextFieldBase.prototype, "focused", void 0);
__decorate([
  e6({ passive: true })
], TextFieldBase.prototype, "handleInputChange", null);

// ../node_modules/@material/mwc-textfield/mwc-textfield.css.js
var styles8 = i`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

// ../node_modules/@material/mwc-textfield/mwc-textfield.js
var TextField = class TextField2 extends TextFieldBase {
};
TextField.styles = [styles8];
TextField = __decorate([
  e4("mwc-textfield")
], TextField);

// ../node_modules/@material/menu-surface/constants.js
var cssClasses7 = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
};
var strings5 = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
};
var numbers5 = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
};
var CornerBit;
(function(CornerBit2) {
  CornerBit2[CornerBit2["BOTTOM"] = 1] = "BOTTOM";
  CornerBit2[CornerBit2["CENTER"] = 2] = "CENTER";
  CornerBit2[CornerBit2["RIGHT"] = 4] = "RIGHT";
  CornerBit2[CornerBit2["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
var Corner;
(function(Corner2) {
  Corner2[Corner2["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner2[Corner2["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner2[Corner2["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner2[Corner2["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner2[Corner2["TOP_START"] = 8] = "TOP_START";
  Corner2[Corner2["TOP_END"] = 12] = "TOP_END";
  Corner2[Corner2["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner2[Corner2["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

// ../node_modules/@material/menu-surface/foundation.js
var MDCMenuSurfaceFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCMenuSurfaceFoundation2, _super);
    function MDCMenuSurfaceFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation2.defaultAdapter), adapter)) || this;
      _this.isSurfaceOpen = false;
      _this.isQuickOpen = false;
      _this.isHoistedElement = false;
      _this.isFixedPosition = false;
      _this.isHorizontallyCenteredOnViewport = false;
      _this.maxHeight = 0;
      _this.openBottomBias = 0;
      _this.openAnimationEndTimerId = 0;
      _this.closeAnimationEndTimerId = 0;
      _this.animationRequestId = 0;
      _this.anchorCorner = Corner.TOP_START;
      _this.originCorner = Corner.TOP_START;
      _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
      _this.position = { x: 0, y: 0 };
      return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation2, "cssClasses", {
      get: function() {
        return cssClasses7;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "strings", {
      get: function() {
        return strings5;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "numbers", {
      get: function() {
        return numbers5;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "Corner", {
      get: function() {
        return Corner;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          hasAnchor: function() {
            return false;
          },
          isElementInContainer: function() {
            return false;
          },
          isFocused: function() {
            return false;
          },
          isRtl: function() {
            return false;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
            return void 0;
          },
          setMaxHeight: function() {
            return void 0;
          },
          setTransformOrigin: function() {
            return void 0;
          },
          saveFocus: function() {
            return void 0;
          },
          restoreFocus: function() {
            return void 0;
          },
          notifyClose: function() {
            return void 0;
          },
          notifyClosing: function() {
            return void 0;
          },
          notifyOpen: function() {
            return void 0;
          },
          notifyOpening: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCMenuSurfaceFoundation2.prototype.init = function() {
      var _a3 = MDCMenuSurfaceFoundation2.cssClasses, ROOT = _a3.ROOT, OPEN = _a3.OPEN;
      if (!this.adapter.hasClass(ROOT)) {
        throw new Error(ROOT + " class required in root element.");
      }
      if (this.adapter.hasClass(OPEN)) {
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId);
      clearTimeout(this.closeAnimationEndTimerId);
      cancelAnimationFrame(this.animationRequestId);
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorCorner = function(corner) {
      this.anchorCorner = corner;
    };
    MDCMenuSurfaceFoundation2.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorMargin = function(margin) {
      this.anchorMargin.top = margin.top || 0;
      this.anchorMargin.right = margin.right || 0;
      this.anchorMargin.bottom = margin.bottom || 0;
      this.anchorMargin.left = margin.left || 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setIsHoisted = function(isHoisted) {
      this.isHoistedElement = isHoisted;
    };
    MDCMenuSurfaceFoundation2.prototype.setFixedPosition = function(isFixedPosition) {
      this.isFixedPosition = isFixedPosition;
    };
    MDCMenuSurfaceFoundation2.prototype.isFixed = function() {
      return this.isFixedPosition;
    };
    MDCMenuSurfaceFoundation2.prototype.setAbsolutePosition = function(x2, y2) {
      this.position.x = this.isFinite(x2) ? x2 : 0;
      this.position.y = this.isFinite(y2) ? y2 : 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setIsHorizontallyCenteredOnViewport = function(isCentered) {
      this.isHorizontallyCenteredOnViewport = isCentered;
    };
    MDCMenuSurfaceFoundation2.prototype.setQuickOpen = function(quickOpen) {
      this.isQuickOpen = quickOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.setMaxHeight = function(maxHeight) {
      this.maxHeight = maxHeight;
    };
    MDCMenuSurfaceFoundation2.prototype.setOpenBottomBias = function(bias) {
      this.openBottomBias = bias;
    };
    MDCMenuSurfaceFoundation2.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.open = function() {
      var _this = this;
      if (this.isSurfaceOpen) {
        return;
      }
      this.adapter.notifyOpening();
      this.adapter.saveFocus();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = true;
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.dimensions = this.adapter.getInnerDimensions();
        this.autoposition();
        this.adapter.notifyOpen();
      } else {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
        this.animationRequestId = requestAnimationFrame(function() {
          _this.dimensions = _this.adapter.getInnerDimensions();
          _this.autoposition();
          _this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
          _this.openAnimationEndTimerId = setTimeout(function() {
            _this.openAnimationEndTimerId = 0;
            _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
            _this.adapter.notifyOpen();
          }, numbers5.TRANSITION_OPEN_DURATION);
        });
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.close = function(skipRestoreFocus) {
      var _this = this;
      if (skipRestoreFocus === void 0) {
        skipRestoreFocus = false;
      }
      if (!this.isSurfaceOpen) {
        return;
      }
      this.adapter.notifyClosing();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
          this.maybeRestoreFocus();
        }
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        this.adapter.notifyClose();
        return;
      }
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
      requestAnimationFrame(function() {
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        _this.closeAnimationEndTimerId = setTimeout(function() {
          _this.closeAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
          _this.adapter.notifyClose();
        }, numbers5.TRANSITION_CLOSE_DURATION);
      });
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.handleBodyClick = function(evt) {
      var el = evt.target;
      if (this.adapter.isElementInContainer(el)) {
        return;
      }
      this.close();
    };
    MDCMenuSurfaceFoundation2.prototype.handleKeydown = function(evt) {
      var keyCode = evt.keyCode, key = evt.key;
      var isEscape = key === "Escape" || keyCode === 27;
      if (isEscape) {
        this.close();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.autoposition = function() {
      var _a3;
      this.measurements = this.getAutoLayoutmeasurements();
      var corner = this.getoriginCorner();
      var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
      var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? "bottom" : "top";
      var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? "right" : "left";
      var horizontalOffset = this.getHorizontalOriginOffset(corner);
      var verticalOffset = this.getVerticalOriginOffset(corner);
      var _b3 = this.measurements, anchorSize = _b3.anchorSize, surfaceSize = _b3.surfaceSize;
      var position = (_a3 = {}, _a3[horizontalAlignment] = horizontalOffset, _a3[verticalAlignment] = verticalOffset, _a3);
      if (anchorSize.width / surfaceSize.width > numbers5.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
        horizontalAlignment = "center";
      }
      if (this.isHoistedElement || this.isFixedPosition) {
        this.adjustPositionForHoistedElement(position);
      }
      this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
      this.adapter.setPosition(position);
      this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
      if (!this.hasBit(corner, CornerBit.BOTTOM)) {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      }
    };
    MDCMenuSurfaceFoundation2.prototype.getAutoLayoutmeasurements = function() {
      var anchorRect = this.adapter.getAnchorDimensions();
      var bodySize = this.adapter.getBodyDimensions();
      var viewportSize = this.adapter.getWindowDimensions();
      var windowScroll = this.adapter.getWindowScroll();
      if (!anchorRect) {
        anchorRect = {
          top: this.position.y,
          right: this.position.x,
          bottom: this.position.y,
          left: this.position.x,
          width: 0,
          height: 0
        };
      }
      return {
        anchorSize: anchorRect,
        bodySize,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: anchorRect.top,
          right: viewportSize.width - anchorRect.right,
          bottom: viewportSize.height - anchorRect.bottom,
          left: anchorRect.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize,
        windowScroll
      };
    };
    MDCMenuSurfaceFoundation2.prototype.getoriginCorner = function() {
      var corner = this.originCorner;
      var _a3 = this.measurements, viewportDistance = _a3.viewportDistance, anchorSize = _a3.anchorSize, surfaceSize = _a3.surfaceSize;
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var availableTop;
      var availableBottom;
      if (isAnchoredToBottom) {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
      } else {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
      }
      var isAvailableBottom = availableBottom - surfaceSize.height > 0;
      if (!isAvailableBottom && availableTop > availableBottom + this.openBottomBias) {
        corner = this.setBit(corner, CornerBit.BOTTOM);
      }
      var isRtl = this.adapter.isRtl();
      var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
      var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
      var isAnchoredToRight = false;
      if (isRtl && isFlipRtl) {
        isAnchoredToRight = !hasRightBit;
      } else {
        isAnchoredToRight = hasRightBit;
      }
      var availableLeft;
      var availableRight;
      if (isAnchoredToRight) {
        availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
        availableRight = viewportDistance.right - this.anchorMargin.right;
      } else {
        availableLeft = viewportDistance.left + this.anchorMargin.left;
        availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
      }
      var isAvailableLeft = availableLeft - surfaceSize.width > 0;
      var isAvailableRight = availableRight - surfaceSize.width > 0;
      var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
      if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
        corner = this.unsetBit(corner, CornerBit.RIGHT);
      } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
        corner = this.setBit(corner, CornerBit.RIGHT);
      }
      return corner;
    };
    MDCMenuSurfaceFoundation2.prototype.getMenuSurfaceMaxHeight = function(corner) {
      if (this.maxHeight > 0) {
        return this.maxHeight;
      }
      var viewportDistance = this.measurements.viewportDistance;
      var maxHeight = 0;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
        if (!isBottomAnchored) {
          maxHeight += this.measurements.anchorSize.height;
        }
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
        if (isBottomAnchored) {
          maxHeight -= this.measurements.anchorSize.height;
        }
      }
      return maxHeight;
    };
    MDCMenuSurfaceFoundation2.prototype.getHorizontalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
      var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
        if (this.isHoistedElement || this.isFixedPosition) {
          return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
        }
        return rightOffset;
      }
      return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
    };
    MDCMenuSurfaceFoundation2.prototype.getVerticalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var y2 = 0;
      if (isBottomAligned) {
        y2 = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
      } else {
        y2 = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
      }
      return y2;
    };
    MDCMenuSurfaceFoundation2.prototype.adjustPositionForHoistedElement = function(position) {
      var e_1, _a3;
      var _b3 = this.measurements, windowScroll = _b3.windowScroll, viewportDistance = _b3.viewportDistance, surfaceSize = _b3.surfaceSize, viewportSize = _b3.viewportSize;
      var props = Object.keys(position);
      try {
        for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
          var prop = props_1_1.value;
          var value = position[prop] || 0;
          if (this.isHorizontallyCenteredOnViewport && (prop === "left" || prop === "right")) {
            position[prop] = (viewportSize.width - surfaceSize.width) / 2;
            continue;
          }
          value += viewportDistance[prop];
          if (!this.isFixedPosition) {
            if (prop === "top") {
              value += windowScroll.y;
            } else if (prop === "bottom") {
              value -= windowScroll.y;
            } else if (prop === "left") {
              value += windowScroll.x;
            } else {
              value -= windowScroll.x;
            }
          }
          position[prop] = value;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (props_1_1 && !props_1_1.done && (_a3 = props_1.return))
            _a3.call(props_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    MDCMenuSurfaceFoundation2.prototype.maybeRestoreFocus = function() {
      var _this = this;
      var isRootFocused = this.adapter.isFocused();
      var ownerDocument = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document;
      var childHasFocus = ownerDocument.activeElement && this.adapter.isElementInContainer(ownerDocument.activeElement);
      if (isRootFocused || childHasFocus) {
        setTimeout(function() {
          _this.adapter.restoreFocus();
        }, numbers5.TOUCH_EVENT_WAIT_MS);
      }
    };
    MDCMenuSurfaceFoundation2.prototype.hasBit = function(corner, bit) {
      return Boolean(corner & bit);
    };
    MDCMenuSurfaceFoundation2.prototype.setBit = function(corner, bit) {
      return corner | bit;
    };
    MDCMenuSurfaceFoundation2.prototype.unsetBit = function(corner, bit) {
      return corner ^ bit;
    };
    MDCMenuSurfaceFoundation2.prototype.isFinite = function(num) {
      return typeof num === "number" && isFinite(num);
    };
    return MDCMenuSurfaceFoundation2;
  }(MDCFoundation)
);
var foundation_default3 = MDCMenuSurfaceFoundation;

// ../node_modules/@material/mwc-menu/mwc-menu-surface-base.js
var stringToCorner = {
  "TOP_LEFT": Corner.TOP_LEFT,
  "TOP_RIGHT": Corner.TOP_RIGHT,
  "BOTTOM_LEFT": Corner.BOTTOM_LEFT,
  "BOTTOM_RIGHT": Corner.BOTTOM_RIGHT,
  "TOP_START": Corner.TOP_START,
  "TOP_END": Corner.TOP_END,
  "BOTTOM_START": Corner.BOTTOM_START,
  "BOTTOM_END": Corner.BOTTOM_END
};
var MenuSurfaceBase = class extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = foundation_default3;
    this.absolute = false;
    this.fullwidth = false;
    this.fixed = false;
    this.x = null;
    this.y = null;
    this.quick = false;
    this.open = false;
    this.stayOpenOnBodyClick = false;
    this.bitwiseCorner = Corner.TOP_START;
    this.previousMenuCorner = null;
    this.menuCorner = "START";
    this.corner = "TOP_START";
    this.styleTop = "";
    this.styleLeft = "";
    this.styleRight = "";
    this.styleBottom = "";
    this.styleMaxHeight = "";
    this.styleTransformOrigin = "";
    this.anchor = null;
    this.previouslyFocused = null;
    this.previousAnchor = null;
    this.onBodyClickBound = () => void 0;
  }
  render() {
    return this.renderSurface();
  }
  renderSurface() {
    const classes = this.getRootClasses();
    const styles12 = this.getRootStyles();
    return x`
      <div
          class=${o7(classes)}
          style="${o8(styles12)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        ${this.renderContent()}
      </div>`;
  }
  getRootClasses() {
    return {
      "mdc-menu-surface": true,
      "mdc-menu-surface--fixed": this.fixed,
      "mdc-menu-surface--fullwidth": this.fullwidth
    };
  }
  getRootStyles() {
    return {
      "top": this.styleTop,
      "left": this.styleLeft,
      "right": this.styleRight,
      "bottom": this.styleBottom,
      "max-height": this.styleMaxHeight,
      "transform-origin": this.styleTransformOrigin
    };
  }
  renderContent() {
    return x`<slot></slot>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { hasAnchor: () => {
      return !!this.anchor;
    }, notifyClose: () => {
      const init = { bubbles: true, composed: true };
      const ev = new CustomEvent("closed", init);
      this.open = false;
      this.mdcRoot.dispatchEvent(ev);
    }, notifyClosing: () => {
      const init = { bubbles: true, composed: true };
      const ev = new CustomEvent("closing", init);
      this.mdcRoot.dispatchEvent(ev);
    }, notifyOpen: () => {
      const init = { bubbles: true, composed: true };
      const ev = new CustomEvent("opened", init);
      this.open = true;
      this.mdcRoot.dispatchEvent(ev);
    }, notifyOpening: () => {
      const init = { bubbles: true, composed: true };
      const ev = new CustomEvent("opening", init);
      this.mdcRoot.dispatchEvent(ev);
    }, isElementInContainer: () => false, isRtl: () => {
      if (this.mdcRoot) {
        return getComputedStyle(this.mdcRoot).direction === "rtl";
      }
      return false;
    }, setTransformOrigin: (origin) => {
      const root = this.mdcRoot;
      if (!root) {
        return;
      }
      this.styleTransformOrigin = origin;
    }, isFocused: () => {
      return doesElementContainFocus(this);
    }, saveFocus: () => {
      const activeElementPath = deepActiveElementPath();
      const pathLength = activeElementPath.length;
      if (!pathLength) {
        this.previouslyFocused = null;
      }
      this.previouslyFocused = activeElementPath[pathLength - 1];
    }, restoreFocus: () => {
      if (!this.previouslyFocused) {
        return;
      }
      if ("focus" in this.previouslyFocused) {
        this.previouslyFocused.focus();
      }
    }, getInnerDimensions: () => {
      const mdcRoot = this.mdcRoot;
      if (!mdcRoot) {
        return { width: 0, height: 0 };
      }
      return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
    }, getAnchorDimensions: () => {
      const anchorElement = this.anchor;
      return anchorElement ? anchorElement.getBoundingClientRect() : null;
    }, getBodyDimensions: () => {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      };
    }, getWindowDimensions: () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }, getWindowScroll: () => {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
    }, setPosition: (position) => {
      const mdcRoot = this.mdcRoot;
      if (!mdcRoot) {
        return;
      }
      this.styleLeft = "left" in position ? `${position.left}px` : "";
      this.styleRight = "right" in position ? `${position.right}px` : "";
      this.styleTop = "top" in position ? `${position.top}px` : "";
      this.styleBottom = "bottom" in position ? `${position.bottom}px` : "";
    }, setMaxHeight: async (height) => {
      const mdcRoot = this.mdcRoot;
      if (!mdcRoot) {
        return;
      }
      this.styleMaxHeight = height;
      await this.updateComplete;
      this.styleMaxHeight = `var(--mdc-menu-max-height, ${height})`;
    } });
  }
  onKeydown(evt) {
    if (this.mdcFoundation) {
      this.mdcFoundation.handleKeydown(evt);
    }
  }
  onBodyClick(evt) {
    if (this.stayOpenOnBodyClick) {
      return;
    }
    const path = evt.composedPath();
    if (path.indexOf(this) === -1) {
      this.close();
    }
  }
  registerBodyClick() {
    this.onBodyClickBound = this.onBodyClick.bind(this);
    document.body.addEventListener("click", this.onBodyClickBound, { passive: true, capture: true });
  }
  deregisterBodyClick() {
    document.body.removeEventListener("click", this.onBodyClickBound, { capture: true });
  }
  onOpenChanged(isOpen, wasOpen) {
    if (this.mdcFoundation) {
      if (isOpen) {
        this.mdcFoundation.open();
      } else if (wasOpen !== void 0) {
        this.mdcFoundation.close();
      }
    }
  }
  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
};
__decorate([
  i4(".mdc-menu-surface")
], MenuSurfaceBase.prototype, "mdcRoot", void 0);
__decorate([
  i4("slot")
], MenuSurfaceBase.prototype, "slotElement", void 0);
__decorate([
  n5({ type: Boolean }),
  observer(function(isAbsolute) {
    if (this.mdcFoundation && !this.fixed) {
      this.mdcFoundation.setIsHoisted(isAbsolute);
    }
  })
], MenuSurfaceBase.prototype, "absolute", void 0);
__decorate([
  n5({ type: Boolean })
], MenuSurfaceBase.prototype, "fullwidth", void 0);
__decorate([
  n5({ type: Boolean }),
  observer(function(isFixed) {
    if (this.mdcFoundation && !this.absolute) {
      this.mdcFoundation.setFixedPosition(isFixed);
    }
  })
], MenuSurfaceBase.prototype, "fixed", void 0);
__decorate([
  n5({ type: Number }),
  observer(function(value) {
    if (this.mdcFoundation && this.y !== null && value !== null) {
      this.mdcFoundation.setAbsolutePosition(value, this.y);
      this.mdcFoundation.setAnchorMargin({ left: value, top: this.y, right: -value, bottom: this.y });
    }
  })
], MenuSurfaceBase.prototype, "x", void 0);
__decorate([
  n5({ type: Number }),
  observer(function(value) {
    if (this.mdcFoundation && this.x !== null && value !== null) {
      this.mdcFoundation.setAbsolutePosition(this.x, value);
      this.mdcFoundation.setAnchorMargin({ left: this.x, top: value, right: -this.x, bottom: value });
    }
  })
], MenuSurfaceBase.prototype, "y", void 0);
__decorate([
  n5({ type: Boolean }),
  observer(function(value) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setQuickOpen(value);
    }
  })
], MenuSurfaceBase.prototype, "quick", void 0);
__decorate([
  n5({ type: Boolean, reflect: true }),
  observer(function(isOpen, wasOpen) {
    this.onOpenChanged(isOpen, wasOpen);
  })
], MenuSurfaceBase.prototype, "open", void 0);
__decorate([
  n5({ type: Boolean })
], MenuSurfaceBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
  t3(),
  observer(function(value) {
    if (this.mdcFoundation) {
      if (value) {
        this.mdcFoundation.setAnchorCorner(value);
      } else {
        this.mdcFoundation.setAnchorCorner(value);
      }
    }
  })
], MenuSurfaceBase.prototype, "bitwiseCorner", void 0);
__decorate([
  n5({ type: String }),
  observer(function(value) {
    if (this.mdcFoundation) {
      const isValidValue = value === "START" || value === "END";
      const isFirstTimeSet = this.previousMenuCorner === null;
      const cornerChanged = !isFirstTimeSet && value !== this.previousMenuCorner;
      const initiallySetToEnd = isFirstTimeSet && value === "END";
      if (isValidValue && (cornerChanged || initiallySetToEnd)) {
        this.bitwiseCorner = this.bitwiseCorner ^ CornerBit.RIGHT;
        this.mdcFoundation.flipCornerHorizontally();
        this.previousMenuCorner = value;
      }
    }
  })
], MenuSurfaceBase.prototype, "menuCorner", void 0);
__decorate([
  n5({ type: String }),
  observer(function(value) {
    if (this.mdcFoundation) {
      if (value) {
        let newCorner = stringToCorner[value];
        if (this.menuCorner === "END") {
          newCorner = newCorner ^ CornerBit.RIGHT;
        }
        this.bitwiseCorner = newCorner;
      }
    }
  })
], MenuSurfaceBase.prototype, "corner", void 0);
__decorate([
  t3()
], MenuSurfaceBase.prototype, "styleTop", void 0);
__decorate([
  t3()
], MenuSurfaceBase.prototype, "styleLeft", void 0);
__decorate([
  t3()
], MenuSurfaceBase.prototype, "styleRight", void 0);
__decorate([
  t3()
], MenuSurfaceBase.prototype, "styleBottom", void 0);
__decorate([
  t3()
], MenuSurfaceBase.prototype, "styleMaxHeight", void 0);
__decorate([
  t3()
], MenuSurfaceBase.prototype, "styleTransformOrigin", void 0);

// ../node_modules/@material/mwc-menu/mwc-menu-surface.css.js
var styles9 = i`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;

// ../node_modules/@material/mwc-menu/mwc-menu-surface.js
var MenuSurface = class MenuSurface2 extends MenuSurfaceBase {
};
MenuSurface.styles = [styles9];
MenuSurface = __decorate([
  e4("mwc-menu-surface")
], MenuSurface);

// ../node_modules/playground-elements/playground-connected-element.js
var PlaygroundConnectedElement = class extends s4 {
  /**
   * The project that this element is associated with. Either the
   * `<playground-project>` node itself, or its `id` in the host scope.
   */
  set project(elementOrId) {
    if (typeof elementOrId === "string") {
      requestAnimationFrame(() => {
        var _a3;
        const root = this.getRootNode();
        this._project = (_a3 = root.getElementById(elementOrId)) !== null && _a3 !== void 0 ? _a3 : void 0;
      });
    } else {
      this._project = elementOrId;
    }
  }
};
__decorate([
  n5()
], PlaygroundConnectedElement.prototype, "project", null);
__decorate([
  t3()
], PlaygroundConnectedElement.prototype, "_project", void 0);

// ../node_modules/playground-elements/playground-file-system-controls.js
var PlaygroundFileSystemControls = class PlaygroundFileSystemControls2 extends PlaygroundConnectedElement {
  constructor() {
    super(...arguments);
    this.state = "closed";
    this._postStateChangeRenderDone = false;
  }
  update(changedProperties) {
    if (changedProperties.has("state")) {
      this._postStateChangeRenderDone = false;
    }
    super.update(changedProperties);
  }
  render() {
    var _a3;
    return x`<mwc-menu-surface
      fixed
      quick
      .open=${this.state !== "closed"}
      .anchor=${(_a3 = this.anchorElement) !== null && _a3 !== void 0 ? _a3 : null}
      corner="BOTTOM_START"
      class="${this.state}"
      @closed=${this._onSurfaceClosed}
      ><div class="wrapper">${this._surfaceContents}</div></mwc-menu-surface
    >`;
  }
  async updated() {
    if (this._postStateChangeRenderDone) {
      return;
    }
    if (this.state === "menu") {
      const menuList = this._menuList;
      if (menuList) {
        await menuList.updateComplete;
        menuList.focusItemAtIndex(0);
      }
    } else if (this.state === "rename" || this.state === "newfile") {
      const input = this._filenameInput;
      if (input) {
        await input.updateComplete;
        input.focus();
        if (this.state === "rename") {
          input.setSelectionRange(0, input.value.lastIndexOf("."));
        }
      }
    }
    this._postStateChangeRenderDone = true;
  }
  get _surfaceContents() {
    switch (this.state) {
      case "closed":
        return A;
      case "menu":
        return this._menu;
      case "rename":
        return this._rename;
      case "newfile":
        return this._newFile;
    }
  }
  get _menu() {
    return x`
      <mwc-list class="menu-list" @action=${this._onMenuAction}>
        <mwc-list-item graphic="icon" id="renameButton">
          Rename
          <svg
            slot="graphic"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="currentcolor"
          >
            <path
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            />
          </svg>
        </mwc-list-item>
        <mwc-list-item graphic="icon" id="deleteButton">
          Delete
          <svg
            slot="graphic"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
          >
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </mwc-list-item>
      </mwc-list>
    `;
  }
  get _rename() {
    return x`
      <mwc-textfield
        class="filename-input"
        label="Filename"
        .value=${this.filename || ""}
        @input=${this._onFilenameInputChange}
        @keydown=${this._onFilenameInputKeydown}
      ></mwc-textfield>
      <div class="actions">
        <mwc-button outlined @click=${this._onClickCancel}>Cancel</mwc-button>
        <mwc-button
          raised
          class="submit-button"
          .disabled=${!this._filenameInputValid}
          @click=${this._onSubmitRename}
          >Rename</mwc-button
        >
      </div>
    `;
  }
  get _newFile() {
    return x`
      <mwc-textfield
        class="filename-input"
        label="Filename"
        @input=${this._onFilenameInputChange}
        @keydown=${this._onFilenameInputKeydown}
      ></mwc-textfield>
      <div class="actions">
        <mwc-button outlined @click=${this._onClickCancel}>Cancel</mwc-button>
        <mwc-button
          raised
          class="submit-button"
          .disabled=${!this._filenameInputValid}
          @click=${this._onSubmitNewFile}
          >Create</mwc-button
        >
      </div>
    `;
  }
  _onSurfaceClosed() {
    this.state = "closed";
  }
  _onClickCancel() {
    this._surface.close();
  }
  _onMenuAction(event) {
    switch (event.detail.index) {
      case 0:
        return this._onMenuSelectRename();
      case 1:
        return this._onMenuSelectDelete();
    }
  }
  _onMenuSelectRename() {
    this.state = "rename";
  }
  _onMenuSelectDelete() {
    this._surface.close();
    if (this._project && this.filename) {
      this._project.deleteFile(this.filename);
    }
  }
  _onFilenameInputChange() {
    this.requestUpdate();
  }
  get _filenameInputValid() {
    return !!(this._project && this._filenameInput && this._project.isValidNewFilename(this._filenameInput.value));
  }
  _onFilenameInputKeydown(event) {
    var _a3;
    if (event.key === "Enter" && ((_a3 = this._submitButton) === null || _a3 === void 0 ? void 0 : _a3.disabled) === false) {
      event.preventDefault();
      this._submitButton.click();
    }
  }
  _onSubmitRename() {
    var _a3;
    this._surface.close();
    const oldFilename = this.filename;
    const newFilename = (_a3 = this._filenameInput) === null || _a3 === void 0 ? void 0 : _a3.value;
    if (this._project && oldFilename && newFilename) {
      this._project.renameFile(oldFilename, newFilename);
    }
  }
  _onSubmitNewFile() {
    var _a3;
    this._surface.close();
    const filename = (_a3 = this._filenameInput) === null || _a3 === void 0 ? void 0 : _a3.value;
    if (this._project && filename) {
      this._project.addFile(filename);
      this.dispatchEvent(new CustomEvent("newFile", {
        detail: { filename }
      }));
    }
  }
};
PlaygroundFileSystemControls.styles = i`
    mwc-menu-surface {
      --mdc-theme-primary: var(
        --playground-floating-controls-color,
        var(--playground-highlight-color, #6200ee)
      );
    }

    mwc-menu-surface.menu {
      --mdc-typography-subtitle1-font-size: 13px;
      --mdc-list-item-graphic-margin: 14px;
    }

    mwc-list-item {
      min-width: 100px;
      height: 40px;
    }

    mwc-menu-surface.rename > .wrapper,
    mwc-menu-surface.newfile > .wrapper {
      padding: 18px;
    }

    .actions {
      margin-top: 18px;
      display: flex;
      justify-content: flex-end;
    }

    .actions > * {
      margin-left: 12px;
    }
  `;
__decorate([
  n5({ attribute: false })
], PlaygroundFileSystemControls.prototype, "anchorElement", void 0);
__decorate([
  n5()
], PlaygroundFileSystemControls.prototype, "state", void 0);
__decorate([
  n5()
], PlaygroundFileSystemControls.prototype, "filename", void 0);
__decorate([
  i4("mwc-menu-surface")
], PlaygroundFileSystemControls.prototype, "_surface", void 0);
__decorate([
  i4(".menu-list")
], PlaygroundFileSystemControls.prototype, "_menuList", void 0);
__decorate([
  i4(".filename-input")
], PlaygroundFileSystemControls.prototype, "_filenameInput", void 0);
__decorate([
  i4(".submit-button")
], PlaygroundFileSystemControls.prototype, "_submitButton", void 0);
PlaygroundFileSystemControls = __decorate([
  e4("playground-file-system-controls")
], PlaygroundFileSystemControls);

// ../node_modules/playground-elements/playground-tab-bar.js
var PlaygroundTabBar = class PlaygroundTabBar2 extends PlaygroundConnectedElement {
  constructor() {
    super(...arguments);
    this.editableFileSystem = false;
    this._activeFileName = "";
    this._activeFileIndex = 0;
    this._onProjectFilesChanged = (event) => {
      this._handleFilesChanged(event.projectLoaded);
    };
  }
  /**
   * The editor that this tab bar controls. Either the
   * `<playground-file-editor>` node itself, or its `id` in the host scope.
   */
  set editor(elementOrId) {
    if (typeof elementOrId === "string") {
      requestAnimationFrame(() => {
        var _a3;
        const root = this.getRootNode();
        this._editor = (_a3 = root.getElementById(elementOrId)) !== null && _a3 !== void 0 ? _a3 : void 0;
      });
    } else {
      this._editor = elementOrId;
    }
  }
  get _visibleFiles() {
    var _a3, _b3;
    return ((_b3 = (_a3 = this._project) === null || _a3 === void 0 ? void 0 : _a3.files) !== null && _b3 !== void 0 ? _b3 : []).filter(({ hidden }) => !hidden);
  }
  update(changedProperties) {
    if (changedProperties.has("_project")) {
      const oldProject = changedProperties.get("_project");
      if (oldProject) {
        oldProject.removeEventListener("filesChanged", this._onProjectFilesChanged);
      }
      if (this._project) {
        this._handleFilesChanged(true);
        this._project.addEventListener("filesChanged", this._onProjectFilesChanged);
      }
    }
    if (changedProperties.has("_activeFileName") && this._editor) {
      this._editor.filename = this._activeFileName;
      this._setNewActiveFile();
    }
    super.update(changedProperties);
  }
  render() {
    return x`
      <playground-internal-tab-bar
        @tabchange=${this._onTabchange}
        label="File selector"
      >
        ${this._visibleFiles.map(({ name, label }) => x`<playground-internal-tab
              .active=${name === this._activeFileName}
              data-filename=${name}
            >
              ${label || name}
              ${this.editableFileSystem ? x`<mwc-icon-button
                    aria-label="File menu"
                    class="menu-button"
                    @click=${this._onOpenMenu}
                  >
                    <!-- Source: https://material.io/resources/icons/?icon=menu&style=baseline -->
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="currentcolor"
                    >
                      <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      />
                    </svg>
                  </mwc-icon-button>` : A}
            </playground-internal-tab>`)}
      </playground-internal-tab-bar>

      ${this.editableFileSystem ? x`
            <mwc-icon-button
              class="add-file-button"
              aria-label="New file"
              @click=${this._onClickAddFile}
            >
              <!-- Source: https://material.io/resources/icons/?icon=add&style=baseline -->
              <svg
                fill="currentcolor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                shape-rendering="crispEdges"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </mwc-icon-button>

            <playground-file-system-controls
              .project=${this._project}
              @newFile=${this._onNewFile}
            >
            </playground-file-system-controls>
          ` : A}
    `;
  }
  _handleFilesChanged(newProjectLoaded = false) {
    var _a3;
    if (newProjectLoaded) {
      const fileToSelect = (_a3 = this._visibleFiles.find((file) => file.selected)) === null || _a3 === void 0 ? void 0 : _a3.name;
      if (fileToSelect !== void 0) {
        this._activeFileName = fileToSelect;
      }
    }
    this._setNewActiveFile();
    this.requestUpdate();
  }
  _onTabchange(event) {
    const tab = event.detail.tab;
    if (!tab) {
      return;
    }
    const name = tab.dataset["filename"];
    const index = tab.index;
    if (name !== this._activeFileName) {
      this._activeFileName = name;
      this._activeFileIndex = index;
    }
  }
  _onOpenMenu(event) {
    const controls = this._fileSystemControls;
    if (!controls) {
      return;
    }
    controls.state = "menu";
    for (const el of event.composedPath()) {
      if (el instanceof HTMLElement && el.dataset["filename"]) {
        controls.filename = el.dataset["filename"];
        break;
      }
    }
    controls.anchorElement = event.target;
    event.stopPropagation();
  }
  _onClickAddFile(event) {
    const controls = this._fileSystemControls;
    if (!controls) {
      return;
    }
    controls.state = "newfile";
    controls.anchorElement = event.target;
  }
  _onNewFile(event) {
    this._activeFileName = event.detail.filename;
  }
  /**
   * Whenever a file is created, deleted, or renamed, figure out what the best
   * new active tab should be.
   */
  _setNewActiveFile() {
    if (this._activeFileName) {
      const index = this._visibleFiles.findIndex((file) => file.name === this._activeFileName);
      if (index >= 0) {
        this._activeFileIndex = index;
        return;
      }
    }
    for (let i8 = this._activeFileIndex; i8 >= 0; i8--) {
      const file = this._visibleFiles[i8];
      if (file && !file.hidden) {
        this._activeFileName = file.name;
        return;
      }
    }
    this._activeFileIndex = 0;
    this._activeFileName = "";
  }
};
PlaygroundTabBar.styles = i`
    :host {
      display: flex;
      font-size: var(--playground-tab-bar-font-size, 14px);
      height: var(--playground-bar-height, 40px);
      background: var(--playground-tab-bar-background, #eaeaea);
      align-items: center;
    }

    playground-internal-tab-bar {
      height: var(--playground-bar-height, 40px);
    }

    playground-internal-tab::part(button) {
      box-sizing: border-box;
      padding: 2px 24px 0 24px;
    }

    playground-internal-tab {
      color: var(--playground-tab-bar-foreground-color, #000);
    }

    playground-internal-tab[active] {
      color: var(
        --playground-tab-bar-active-color,
        var(--playground-highlight-color, #6200ee)
      );
      background: var(--playground-tab-bar-active-background, transparent);
    }

    :host([editable-file-system]) playground-internal-tab::part(button) {
      /* The 24px menu button with opacity 0 now serves as padding-right. */
      padding-right: 0;
    }

    .menu-button {
      visibility: hidden;
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 16px;
    }

    playground-internal-tab:hover > .menu-button,
    playground-internal-tab:focus-within > .menu-button {
      visibility: visible;
    }

    mwc-icon-button {
      color: var(--playground-tab-bar-foreground-color);
    }

    .add-file-button {
      margin: 0 4px;
      opacity: 70%;
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 24px;
    }

    .add-file-button:hover {
      opacity: 1;
    }
  `;
__decorate([
  n5({ type: Boolean, attribute: "editable-file-system", reflect: true })
], PlaygroundTabBar.prototype, "editableFileSystem", void 0);
__decorate([
  t3()
], PlaygroundTabBar.prototype, "_activeFileName", void 0);
__decorate([
  t3()
], PlaygroundTabBar.prototype, "_activeFileIndex", void 0);
__decorate([
  i4("playground-file-system-controls")
], PlaygroundTabBar.prototype, "_fileSystemControls", void 0);
__decorate([
  t3()
], PlaygroundTabBar.prototype, "_editor", void 0);
__decorate([
  n5()
], PlaygroundTabBar.prototype, "editor", null);
PlaygroundTabBar = __decorate([
  e4("playground-tab-bar")
], PlaygroundTabBar);

// ../node_modules/playground-elements/_codemirror/codemirror-bundle.js
var e11;
function t5(e12, t6, r5, n9, i8, o9) {
  this.name = e12, this.tokenType = t6, this.depth = r5, this.parent = n9, this.startLine = i8, this.startPos = o9;
}
function r4() {
  this.stream = null, this.line = this.startPos = 0, this.string = this.startLine = "", this.copyInstance = null;
}
e11 = function() {
  var e12 = navigator.userAgent, t6 = navigator.platform, r5 = /gecko\/\d/i.test(e12), n9 = /MSIE \d/.test(e12), i8 = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e12), o9 = /Edge\/(\d+)/.exec(e12), a4 = n9 || i8 || o9, l8 = a4 && (n9 ? document.documentMode || 6 : +(o9 || i8)[1]), s6 = !o9 && /WebKit\//.test(e12), c3 = s6 && /Qt\/\d+\.\d+/.test(e12), u3 = !o9 && /Chrome\/(\d+)/.exec(e12), d3 = u3 && +u3[1], f2 = /Opera\//.test(e12), h3 = /Apple Computer/.test(navigator.vendor), p2 = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e12), m2 = /PhantomJS/.test(e12), g2 = h3 && (/Mobile\/\w+/.test(e12) || navigator.maxTouchPoints > 2), v2 = /Android/.test(e12), y2 = g2 || v2 || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e12), b2 = g2 || /Mac/.test(t6), w2 = /\bCrOS\b/.test(e12), k2 = /win/i.test(t6), x2 = f2 && e12.match(/Version\/(\d*\.\d*)/);
  x2 && (x2 = Number(x2[1])), x2 && x2 >= 15 && (f2 = false, s6 = true);
  var C2 = b2 && (c3 || f2 && (null == x2 || x2 < 12.11)), S3 = r5 || a4 && l8 >= 9;
  function T2(e13) {
    return RegExp("(^|\\s)" + e13 + "(?:$|\\s)\\s*");
  }
  var L2, A2 = function(e13, t7) {
    var r6 = e13.className, n10 = T2(t7).exec(r6);
    if (n10) {
      var i9 = r6.slice(n10.index + n10[0].length);
      e13.className = r6.slice(0, n10.index) + (i9 ? n10[1] + i9 : "");
    }
  };
  function M2(e13) {
    for (var t7 = e13.childNodes.length; t7 > 0; --t7)
      e13.removeChild(e13.firstChild);
    return e13;
  }
  function z2(e13, t7) {
    return M2(e13).appendChild(t7);
  }
  function O(e13, t7, r6, n10) {
    var i9 = document.createElement(e13);
    if (r6 && (i9.className = r6), n10 && (i9.style.cssText = n10), "string" == typeof t7)
      i9.appendChild(document.createTextNode(t7));
    else if (t7)
      for (var o10 = 0; o10 < t7.length; ++o10)
        i9.appendChild(t7[o10]);
    return i9;
  }
  function _2(e13, t7, r6, n10) {
    var i9 = O(e13, t7, r6, n10);
    return i9.setAttribute("role", "presentation"), i9;
  }
  function N2(e13, t7) {
    if (3 == t7.nodeType && (t7 = t7.parentNode), e13.contains)
      return e13.contains(t7);
    do {
      if (11 == t7.nodeType && (t7 = t7.host), t7 == e13)
        return true;
    } while (t7 = t7.parentNode);
  }
  function P2(e13) {
    var t7;
    try {
      t7 = e13.activeElement;
    } catch (r6) {
      t7 = e13.body || null;
    }
    for (; t7 && t7.shadowRoot && t7.shadowRoot.activeElement; )
      t7 = t7.shadowRoot.activeElement;
    return t7;
  }
  function E2(e13, t7) {
    var r6 = e13.className;
    T2(t7).test(r6) || (e13.className += (r6 ? " " : "") + t7);
  }
  function D2(e13, t7) {
    for (var r6 = e13.split(" "), n10 = 0; n10 < r6.length; n10++)
      r6[n10] && !T2(r6[n10]).test(t7) && (t7 += " " + r6[n10]);
    return t7;
  }
  L2 = document.createRange ? function(e13, t7, r6, n10) {
    var i9 = document.createRange();
    return i9.setEnd(n10 || e13, r6), i9.setStart(e13, t7), i9;
  } : function(e13, t7, r6) {
    var n10 = document.body.createTextRange();
    try {
      n10.moveToElementText(e13.parentNode);
    } catch (e14) {
      return n10;
    }
    return n10.collapse(true), n10.moveEnd("character", r6), n10.moveStart("character", t7), n10;
  };
  var W = function(e13) {
    e13.select();
  };
  function F(e13) {
    return e13.display.wrapper.ownerDocument;
  }
  function I2(e13) {
    return F(e13).defaultView;
  }
  function H2(e13) {
    var t7 = Array.prototype.slice.call(arguments, 1);
    return function() {
      return e13.apply(null, t7);
    };
  }
  function B2(e13, t7, r6) {
    for (var n10 in t7 || (t7 = {}), e13)
      !e13.hasOwnProperty(n10) || false === r6 && t7.hasOwnProperty(n10) || (t7[n10] = e13[n10]);
    return t7;
  }
  function $2(e13, t7, r6, n10, i9) {
    null == t7 && -1 == (t7 = e13.search(/[^\s\u00a0]/)) && (t7 = e13.length);
    for (var o10 = n10 || 0, a5 = i9 || 0; ; ) {
      var l9 = e13.indexOf("	", o10);
      if (l9 < 0 || l9 >= t7)
        return a5 + (t7 - o10);
      a5 += l9 - o10, a5 += r6 - a5 % r6, o10 = l9 + 1;
    }
  }
  g2 ? W = function(e13) {
    e13.selectionStart = 0, e13.selectionEnd = e13.value.length;
  } : a4 && (W = function(e13) {
    try {
      e13.select();
    } catch (e14) {
    }
  });
  var R2 = function() {
    this.id = null, this.f = null, this.time = 0, this.handler = H2(this.onTimeout, this);
  };
  function Z2(e13, t7) {
    for (var r6 = 0; r6 < e13.length; ++r6)
      if (e13[r6] == t7)
        return r6;
    return -1;
  }
  R2.prototype.onTimeout = function(e13) {
    e13.id = 0, e13.time <= +/* @__PURE__ */ new Date() ? e13.f() : setTimeout(e13.handler, e13.time - +/* @__PURE__ */ new Date());
  }, R2.prototype.set = function(e13, t7) {
    this.f = t7;
    var r6 = +/* @__PURE__ */ new Date() + e13;
    (!this.id || r6 < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e13), this.time = r6);
  };
  var j2 = { toString: function() {
    return "CodeMirror.Pass";
  } }, U = { scroll: false }, V2 = { origin: "*mouse" }, K = { origin: "+move" };
  function G(e13, t7, r6) {
    for (var n10 = 0, i9 = 0; ; ) {
      var o10 = e13.indexOf("	", n10);
      -1 == o10 && (o10 = e13.length);
      var a5 = o10 - n10;
      if (o10 == e13.length || i9 + a5 >= t7)
        return n10 + Math.min(a5, t7 - i9);
      if (i9 += o10 - n10, n10 = o10 + 1, (i9 += r6 - i9 % r6) >= t7)
        return n10;
    }
  }
  var q = [""];
  function X(e13) {
    for (; q.length <= e13; )
      q.push(Y(q) + " ");
    return q[e13];
  }
  function Y(e13) {
    return e13[e13.length - 1];
  }
  function Q(e13, t7) {
    for (var r6 = [], n10 = 0; n10 < e13.length; n10++)
      r6[n10] = t7(e13[n10], n10);
    return r6;
  }
  function J() {
  }
  function ee(e13, t7) {
    var r6;
    return Object.create ? r6 = Object.create(e13) : (J.prototype = e13, r6 = new J()), t7 && B2(t7, r6), r6;
  }
  var te = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function re(e13) {
    return /\w/.test(e13) || e13 > "\x80" && (e13.toUpperCase() != e13.toLowerCase() || te.test(e13));
  }
  function ne(e13, t7) {
    return t7 ? !!(t7.source.indexOf("\\w") > -1 && re(e13)) || t7.test(e13) : re(e13);
  }
  function ie(e13) {
    for (var t7 in e13)
      if (e13.hasOwnProperty(t7) && e13[t7])
        return false;
    return true;
  }
  var oe = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function ae(e13) {
    return e13.charCodeAt(0) >= 768 && oe.test(e13);
  }
  function le(e13, t7, r6) {
    for (; (r6 < 0 ? t7 > 0 : t7 < e13.length) && ae(e13.charAt(t7)); )
      t7 += r6;
    return t7;
  }
  function se(e13, t7, r6) {
    for (var n10 = t7 > r6 ? -1 : 1; ; ) {
      if (t7 == r6)
        return t7;
      var i9 = (t7 + r6) / 2, o10 = n10 < 0 ? Math.ceil(i9) : Math.floor(i9);
      if (o10 == t7)
        return e13(o10) ? t7 : r6;
      e13(o10) ? r6 = o10 : t7 = o10 + n10;
    }
  }
  var ce = null;
  function ue(e13, t7, r6) {
    var n10;
    ce = null;
    for (var i9 = 0; i9 < e13.length; ++i9) {
      var o10 = e13[i9];
      if (o10.from < t7 && o10.to > t7)
        return i9;
      o10.to == t7 && (o10.from != o10.to && "before" == r6 ? n10 = i9 : ce = i9), o10.from == t7 && (o10.from != o10.to && "before" != r6 ? n10 = i9 : ce = i9);
    }
    return null != n10 ? n10 : ce;
  }
  var de = function() {
    var e13 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, t7 = /[stwN]/, r6 = /[LRr]/, n10 = /[Lb1n]/, i9 = /[1n]/;
    function o10(e14, t8, r7) {
      this.level = e14, this.from = t8, this.to = r7;
    }
    return function(a5, l9) {
      var s7 = "ltr" == l9 ? "L" : "R";
      if (0 == a5.length || "ltr" == l9 && !e13.test(a5))
        return false;
      for (var c4, u4 = a5.length, d4 = [], f3 = 0; f3 < u4; ++f3)
        d4.push((c4 = a5.charCodeAt(f3)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(c4) : 1424 <= c4 && c4 <= 1524 ? "R" : 1536 <= c4 && c4 <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(c4 - 1536) : 1774 <= c4 && c4 <= 2220 ? "r" : 8192 <= c4 && c4 <= 8203 ? "w" : 8204 == c4 ? "b" : "L");
      for (var h4 = 0, p3 = s7; h4 < u4; ++h4) {
        var m3 = d4[h4];
        "m" == m3 ? d4[h4] = p3 : p3 = m3;
      }
      for (var g3 = 0, v3 = s7; g3 < u4; ++g3) {
        var y3 = d4[g3];
        "1" == y3 && "r" == v3 ? d4[g3] = "n" : r6.test(y3) && (v3 = y3, "r" == y3 && (d4[g3] = "R"));
      }
      for (var b3 = 1, w3 = d4[0]; b3 < u4 - 1; ++b3) {
        var k3 = d4[b3];
        "+" == k3 && "1" == w3 && "1" == d4[b3 + 1] ? d4[b3] = "1" : "," != k3 || w3 != d4[b3 + 1] || "1" != w3 && "n" != w3 || (d4[b3] = w3), w3 = k3;
      }
      for (var x3 = 0; x3 < u4; ++x3) {
        var C3 = d4[x3];
        if ("," == C3)
          d4[x3] = "N";
        else if ("%" == C3) {
          var S4 = void 0;
          for (S4 = x3 + 1; S4 < u4 && "%" == d4[S4]; ++S4)
            ;
          for (var T3 = x3 && "!" == d4[x3 - 1] || S4 < u4 && "1" == d4[S4] ? "1" : "N", L3 = x3; L3 < S4; ++L3)
            d4[L3] = T3;
          x3 = S4 - 1;
        }
      }
      for (var A3 = 0, M3 = s7; A3 < u4; ++A3) {
        var z3 = d4[A3];
        "L" == M3 && "1" == z3 ? d4[A3] = "L" : r6.test(z3) && (M3 = z3);
      }
      for (var O2 = 0; O2 < u4; ++O2)
        if (t7.test(d4[O2])) {
          var _3 = void 0;
          for (_3 = O2 + 1; _3 < u4 && t7.test(d4[_3]); ++_3)
            ;
          for (var N3 = "L" == (O2 ? d4[O2 - 1] : s7), P3 = N3 == ("L" == (_3 < u4 ? d4[_3] : s7)) ? N3 ? "L" : "R" : s7, E3 = O2; E3 < _3; ++E3)
            d4[E3] = P3;
          O2 = _3 - 1;
        }
      for (var D3, W2 = [], F2 = 0; F2 < u4; )
        if (n10.test(d4[F2])) {
          var I3 = F2;
          for (++F2; F2 < u4 && n10.test(d4[F2]); ++F2)
            ;
          W2.push(new o10(0, I3, F2));
        } else {
          var H3 = F2, B3 = W2.length, $3 = "rtl" == l9 ? 1 : 0;
          for (++F2; F2 < u4 && "L" != d4[F2]; ++F2)
            ;
          for (var R3 = H3; R3 < F2; )
            if (i9.test(d4[R3])) {
              H3 < R3 && (W2.splice(B3, 0, new o10(1, H3, R3)), B3 += $3);
              var Z3 = R3;
              for (++R3; R3 < F2 && i9.test(d4[R3]); ++R3)
                ;
              W2.splice(B3, 0, new o10(2, Z3, R3)), B3 += $3, H3 = R3;
            } else
              ++R3;
          H3 < F2 && W2.splice(B3, 0, new o10(1, H3, F2));
        }
      return "ltr" == l9 && (1 == W2[0].level && (D3 = a5.match(/^\s+/)) && (W2[0].from = D3[0].length, W2.unshift(new o10(0, 0, D3[0].length))), 1 == Y(W2).level && (D3 = a5.match(/\s+$/)) && (Y(W2).to -= D3[0].length, W2.push(new o10(0, u4 - D3[0].length, u4)))), "rtl" == l9 ? W2.reverse() : W2;
    };
  }();
  function fe(e13, t7) {
    var r6 = e13.order;
    return null == r6 && (r6 = e13.order = de(e13.text, t7)), r6;
  }
  var he = [], pe = function(e13, t7, r6) {
    if (e13.addEventListener)
      e13.addEventListener(t7, r6, false);
    else if (e13.attachEvent)
      e13.attachEvent("on" + t7, r6);
    else {
      var n10 = e13._handlers || (e13._handlers = {});
      n10[t7] = (n10[t7] || he).concat(r6);
    }
  };
  function me(e13, t7) {
    return e13._handlers && e13._handlers[t7] || he;
  }
  function ge(e13, t7, r6) {
    if (e13.removeEventListener)
      e13.removeEventListener(t7, r6, false);
    else if (e13.detachEvent)
      e13.detachEvent("on" + t7, r6);
    else {
      var n10 = e13._handlers, i9 = n10 && n10[t7];
      if (i9) {
        var o10 = Z2(i9, r6);
        o10 > -1 && (n10[t7] = i9.slice(0, o10).concat(i9.slice(o10 + 1)));
      }
    }
  }
  function ve(e13, t7) {
    var r6 = me(e13, t7);
    if (r6.length)
      for (var n10 = Array.prototype.slice.call(arguments, 2), i9 = 0; i9 < r6.length; ++i9)
        r6[i9].apply(null, n10);
  }
  function ye(e13, t7, r6) {
    return "string" == typeof t7 && (t7 = { type: t7, preventDefault: function() {
      this.defaultPrevented = true;
    } }), ve(e13, r6 || t7.type, e13, t7), Se(t7) || t7.codemirrorIgnore;
  }
  function be(e13) {
    var t7 = e13._handlers && e13._handlers.cursorActivity;
    if (t7)
      for (var r6 = e13.curOp.cursorActivityHandlers || (e13.curOp.cursorActivityHandlers = []), n10 = 0; n10 < t7.length; ++n10)
        -1 == Z2(r6, t7[n10]) && r6.push(t7[n10]);
  }
  function we(e13, t7) {
    return me(e13, t7).length > 0;
  }
  function ke(e13) {
    e13.prototype.on = function(e14, t7) {
      pe(this, e14, t7);
    }, e13.prototype.off = function(e14, t7) {
      ge(this, e14, t7);
    };
  }
  function xe(e13) {
    e13.preventDefault ? e13.preventDefault() : e13.returnValue = false;
  }
  function Ce(e13) {
    e13.stopPropagation ? e13.stopPropagation() : e13.cancelBubble = true;
  }
  function Se(e13) {
    return null != e13.defaultPrevented ? e13.defaultPrevented : 0 == e13.returnValue;
  }
  function Te(e13) {
    xe(e13), Ce(e13);
  }
  function Le(e13) {
    return e13.target || e13.srcElement;
  }
  function Ae(e13) {
    var t7 = e13.which;
    return null == t7 && (1 & e13.button ? t7 = 1 : 2 & e13.button ? t7 = 3 : 4 & e13.button && (t7 = 2)), b2 && e13.ctrlKey && 1 == t7 && (t7 = 3), t7;
  }
  var Me, ze, Oe = function() {
    if (a4 && l8 < 9)
      return false;
    var e13 = O("div");
    return "draggable" in e13 || "dragDrop" in e13;
  }();
  function _e(e13) {
    if (null == Me) {
      var t7 = O("span", "\u200B");
      z2(e13, O("span", [t7, document.createTextNode("x")])), 0 != e13.firstChild.offsetHeight && (Me = t7.offsetWidth <= 1 && t7.offsetHeight > 2 && !(a4 && l8 < 8));
    }
    var r6 = Me ? O("span", "\u200B") : O("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
    return r6.setAttribute("cm-text", ""), r6;
  }
  function Ne(e13) {
    if (null != ze)
      return ze;
    var t7 = z2(e13, document.createTextNode("A\u062EA")), r6 = L2(t7, 0, 1).getBoundingClientRect(), n10 = L2(t7, 1, 2).getBoundingClientRect();
    return M2(e13), !(!r6 || r6.left == r6.right) && (ze = n10.right - r6.right < 3);
  }
  var Pe, Ee = function(e13) {
    return e13.split(/\r\n?|\n/);
  }, De = window.getSelection ? function(e13) {
    try {
      return e13.selectionStart != e13.selectionEnd;
    } catch (e14) {
      return false;
    }
  } : function(e13) {
    var t7;
    try {
      t7 = e13.ownerDocument.selection.createRange();
    } catch (e14) {
    }
    return !(!t7 || t7.parentElement() != e13) && 0 != t7.compareEndPoints("StartToEnd", t7);
  }, We = "oncopy" in (Pe = O("div")) || (Pe.setAttribute("oncopy", "return;"), "function" == typeof Pe.oncopy), Fe = null, Ie = {}, He = {};
  function Be(e13, t7) {
    arguments.length > 2 && (t7.dependencies = Array.prototype.slice.call(arguments, 2)), Ie[e13] = t7;
  }
  function $e(e13) {
    if ("string" == typeof e13 && He.hasOwnProperty(e13))
      e13 = He[e13];
    else if (e13 && "string" == typeof e13.name && He.hasOwnProperty(e13.name)) {
      var t7 = He[e13.name];
      "string" == typeof t7 && (t7 = { name: t7 }), (e13 = ee(t7, e13)).name = t7.name;
    } else {
      if ("string" == typeof e13 && /^[\w\-]+\/[\w\-]+\+xml$/.test(e13))
        return $e("application/xml");
      if ("string" == typeof e13 && /^[\w\-]+\/[\w\-]+\+json$/.test(e13))
        return $e("application/json");
    }
    return "string" == typeof e13 ? { name: e13 } : e13 || { name: "null" };
  }
  function Re(e13, t7) {
    t7 = $e(t7);
    var r6 = Ie[t7.name];
    if (!r6)
      return Re(e13, "text/plain");
    var n10 = r6(e13, t7);
    if (Ze.hasOwnProperty(t7.name)) {
      var i9 = Ze[t7.name];
      for (var o10 in i9)
        i9.hasOwnProperty(o10) && (n10.hasOwnProperty(o10) && (n10["_" + o10] = n10[o10]), n10[o10] = i9[o10]);
    }
    if (n10.name = t7.name, t7.helperType && (n10.helperType = t7.helperType), t7.modeProps)
      for (var a5 in t7.modeProps)
        n10[a5] = t7.modeProps[a5];
    return n10;
  }
  var Ze = {};
  function je(e13, t7) {
    B2(t7, Ze.hasOwnProperty(e13) ? Ze[e13] : Ze[e13] = {});
  }
  function Ue(e13, t7) {
    if (true === t7)
      return t7;
    if (e13.copyState)
      return e13.copyState(t7);
    var r6 = {};
    for (var n10 in t7) {
      var i9 = t7[n10];
      i9 instanceof Array && (i9 = i9.concat([])), r6[n10] = i9;
    }
    return r6;
  }
  function Ve(e13, t7) {
    for (var r6; e13.innerMode && (r6 = e13.innerMode(t7)) && r6.mode != e13; )
      t7 = r6.state, e13 = r6.mode;
    return r6 || { mode: e13, state: t7 };
  }
  function Ke(e13, t7, r6) {
    return !e13.startState || e13.startState(t7, r6);
  }
  var Ge = function(e13, t7, r6) {
    this.pos = this.start = 0, this.string = e13, this.tabSize = t7 || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r6;
  };
  function qe(e13, t7) {
    if ((t7 -= e13.first) < 0 || t7 >= e13.size)
      throw Error("There is no line " + (t7 + e13.first) + " in the document.");
    for (var r6 = e13; !r6.lines; )
      for (var n10 = 0; ; ++n10) {
        var i9 = r6.children[n10], o10 = i9.chunkSize();
        if (t7 < o10) {
          r6 = i9;
          break;
        }
        t7 -= o10;
      }
    return r6.lines[t7];
  }
  function Xe(e13, t7, r6) {
    var n10 = [], i9 = t7.line;
    return e13.iter(t7.line, r6.line + 1, function(e14) {
      var o10 = e14.text;
      i9 == r6.line && (o10 = o10.slice(0, r6.ch)), i9 == t7.line && (o10 = o10.slice(t7.ch)), n10.push(o10), ++i9;
    }), n10;
  }
  function Ye(e13, t7, r6) {
    var n10 = [];
    return e13.iter(t7, r6, function(e14) {
      n10.push(e14.text);
    }), n10;
  }
  function Qe(e13, t7) {
    var r6 = t7 - e13.height;
    if (r6)
      for (var n10 = e13; n10; n10 = n10.parent)
        n10.height += r6;
  }
  function Je(e13) {
    if (null == e13.parent)
      return null;
    for (var t7 = e13.parent, r6 = Z2(t7.lines, e13), n10 = t7.parent; n10; t7 = n10, n10 = n10.parent)
      for (var i9 = 0; n10.children[i9] != t7; ++i9)
        r6 += n10.children[i9].chunkSize();
    return r6 + t7.first;
  }
  function et(e13, t7) {
    var r6 = e13.first;
    e:
      do {
        for (var n10 = 0; n10 < e13.children.length; ++n10) {
          var i9 = e13.children[n10], o10 = i9.height;
          if (t7 < o10) {
            e13 = i9;
            continue e;
          }
          t7 -= o10, r6 += i9.chunkSize();
        }
        return r6;
      } while (!e13.lines);
    for (var a5 = 0; a5 < e13.lines.length; ++a5) {
      var l9 = e13.lines[a5].height;
      if (t7 < l9)
        break;
      t7 -= l9;
    }
    return r6 + a5;
  }
  function tt(e13, t7) {
    return t7 >= e13.first && t7 < e13.first + e13.size;
  }
  function rt(e13, t7) {
    return e13.lineNumberFormatter(t7 + e13.firstLineNumber) + "";
  }
  function nt(e13, t7, r6) {
    if (void 0 === r6 && (r6 = null), !(this instanceof nt))
      return new nt(e13, t7, r6);
    this.line = e13, this.ch = t7, this.sticky = r6;
  }
  function it(e13, t7) {
    return e13.line - t7.line || e13.ch - t7.ch;
  }
  function ot(e13, t7) {
    return e13.sticky == t7.sticky && 0 == it(e13, t7);
  }
  function at(e13) {
    return nt(e13.line, e13.ch);
  }
  function lt(e13, t7) {
    return it(e13, t7) < 0 ? t7 : e13;
  }
  function st(e13, t7) {
    return it(e13, t7) < 0 ? e13 : t7;
  }
  function ct(e13, t7) {
    return Math.max(e13.first, Math.min(t7, e13.first + e13.size - 1));
  }
  function ut(e13, t7) {
    if (t7.line < e13.first)
      return nt(e13.first, 0);
    var r6 = e13.first + e13.size - 1;
    return t7.line > r6 ? nt(r6, qe(e13, r6).text.length) : function(e14, t8) {
      var r7 = e14.ch;
      return null == r7 || r7 > t8 ? nt(e14.line, t8) : r7 < 0 ? nt(e14.line, 0) : e14;
    }(t7, qe(e13, t7.line).text.length);
  }
  function dt(e13, t7) {
    for (var r6 = [], n10 = 0; n10 < t7.length; n10++)
      r6[n10] = ut(e13, t7[n10]);
    return r6;
  }
  Ge.prototype.eol = function() {
    return this.pos >= this.string.length;
  }, Ge.prototype.sol = function() {
    return this.pos == this.lineStart;
  }, Ge.prototype.peek = function() {
    return this.string.charAt(this.pos) || void 0;
  }, Ge.prototype.next = function() {
    if (this.pos < this.string.length)
      return this.string.charAt(this.pos++);
  }, Ge.prototype.eat = function(e13) {
    var t7 = this.string.charAt(this.pos);
    if ("string" == typeof e13 ? t7 == e13 : t7 && (e13.test ? e13.test(t7) : e13(t7)))
      return ++this.pos, t7;
  }, Ge.prototype.eatWhile = function(e13) {
    for (var t7 = this.pos; this.eat(e13); )
      ;
    return this.pos > t7;
  }, Ge.prototype.eatSpace = function() {
    for (var e13 = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
      ++this.pos;
    return this.pos > e13;
  }, Ge.prototype.skipToEnd = function() {
    this.pos = this.string.length;
  }, Ge.prototype.skipTo = function(e13) {
    var t7 = this.string.indexOf(e13, this.pos);
    if (t7 > -1)
      return this.pos = t7, true;
  }, Ge.prototype.backUp = function(e13) {
    this.pos -= e13;
  }, Ge.prototype.column = function() {
    return this.lastColumnPos < this.start && (this.lastColumnValue = $2(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? $2(this.string, this.lineStart, this.tabSize) : 0);
  }, Ge.prototype.indentation = function() {
    return $2(this.string, null, this.tabSize) - (this.lineStart ? $2(this.string, this.lineStart, this.tabSize) : 0);
  }, Ge.prototype.match = function(e13, t7, r6) {
    if ("string" != typeof e13) {
      var n10 = this.string.slice(this.pos).match(e13);
      return n10 && n10.index > 0 ? null : (n10 && false !== t7 && (this.pos += n10[0].length), n10);
    }
    var i9 = function(e14) {
      return r6 ? e14.toLowerCase() : e14;
    };
    if (i9(this.string.substr(this.pos, e13.length)) == i9(e13))
      return false !== t7 && (this.pos += e13.length), true;
  }, Ge.prototype.current = function() {
    return this.string.slice(this.start, this.pos);
  }, Ge.prototype.hideFirstChars = function(e13, t7) {
    this.lineStart += e13;
    try {
      return t7();
    } finally {
      this.lineStart -= e13;
    }
  }, Ge.prototype.lookAhead = function(e13) {
    var t7 = this.lineOracle;
    return t7 && t7.lookAhead(e13);
  }, Ge.prototype.baseToken = function() {
    var e13 = this.lineOracle;
    return e13 && e13.baseToken(this.pos);
  };
  var ft = function(e13, t7) {
    this.state = e13, this.lookAhead = t7;
  }, ht = function(e13, t7, r6, n10) {
    this.state = t7, this.doc = e13, this.line = r6, this.maxLookAhead = n10 || 0, this.baseTokens = null, this.baseTokenPos = 1;
  };
  function pt(e13, t7, r6, n10) {
    var i9 = [e13.state.modeGen], o10 = {};
    Ct(e13, t7.text, e13.doc.mode, r6, function(e14, t8) {
      return i9.push(e14, t8);
    }, o10, n10);
    for (var a5 = r6.state, l9 = function(n11) {
      r6.baseTokens = i9;
      var l10 = e13.state.overlays[n11], s8 = 1, c4 = 0;
      r6.state = true, Ct(e13, t7.text, l10.mode, r6, function(e14, t8) {
        for (var r7 = s8; c4 < e14; ) {
          var n12 = i9[s8];
          n12 > e14 && i9.splice(s8, 1, e14, i9[s8 + 1], n12), s8 += 2, c4 = Math.min(e14, n12);
        }
        if (t8)
          if (l10.opaque)
            i9.splice(r7, s8 - r7, e14, "overlay " + t8), s8 = r7 + 2;
          else
            for (; r7 < s8; r7 += 2) {
              var o11 = i9[r7 + 1];
              i9[r7 + 1] = (o11 ? o11 + " " : "") + "overlay " + t8;
            }
      }, o10), r6.state = a5, r6.baseTokens = null, r6.baseTokenPos = 1;
    }, s7 = 0; s7 < e13.state.overlays.length; ++s7)
      l9(s7);
    return { styles: i9, classes: o10.bgClass || o10.textClass ? o10 : null };
  }
  function mt(e13, t7, r6) {
    if (!t7.styles || t7.styles[0] != e13.state.modeGen) {
      var n10 = gt(e13, Je(t7)), i9 = t7.text.length > e13.options.maxHighlightLength && Ue(e13.doc.mode, n10.state), o10 = pt(e13, t7, n10);
      i9 && (n10.state = i9), t7.stateAfter = n10.save(!i9), t7.styles = o10.styles, o10.classes ? t7.styleClasses = o10.classes : t7.styleClasses && (t7.styleClasses = null), r6 === e13.doc.highlightFrontier && (e13.doc.modeFrontier = Math.max(e13.doc.modeFrontier, ++e13.doc.highlightFrontier));
    }
    return t7.styles;
  }
  function gt(e13, t7, r6) {
    var n10 = e13.doc, i9 = e13.display;
    if (!n10.mode.startState)
      return new ht(n10, true, t7);
    var o10 = function(e14, t8, r7) {
      for (var n11, i10, o11 = e14.doc, a6 = r7 ? -1 : t8 - (e14.doc.mode.innerMode ? 1e3 : 100), l10 = t8; l10 > a6; --l10) {
        if (l10 <= o11.first)
          return o11.first;
        var s7 = qe(o11, l10 - 1), c4 = s7.stateAfter;
        if (c4 && (!r7 || l10 + (c4 instanceof ft ? c4.lookAhead : 0) <= o11.modeFrontier))
          return l10;
        var u4 = $2(s7.text, null, e14.options.tabSize);
        (null == i10 || n11 > u4) && (i10 = l10 - 1, n11 = u4);
      }
      return i10;
    }(e13, t7, r6), a5 = o10 > n10.first && qe(n10, o10 - 1).stateAfter, l9 = a5 ? ht.fromSaved(n10, a5, o10) : new ht(n10, Ke(n10.mode), o10);
    return n10.iter(o10, t7, function(r7) {
      vt(e13, r7.text, l9);
      var n11 = l9.line;
      r7.stateAfter = n11 == t7 - 1 || n11 % 5 == 0 || n11 >= i9.viewFrom && n11 < i9.viewTo ? l9.save() : null, l9.nextLine();
    }), r6 && (n10.modeFrontier = l9.line), l9;
  }
  function vt(e13, t7, r6, n10) {
    var i9 = e13.doc.mode, o10 = new Ge(t7, e13.options.tabSize, r6);
    for (o10.start = o10.pos = n10 || 0, "" == t7 && yt(i9, r6.state); !o10.eol(); )
      bt(i9, o10, r6.state), o10.start = o10.pos;
  }
  function yt(e13, t7) {
    if (e13.blankLine)
      return e13.blankLine(t7);
    if (e13.innerMode) {
      var r6 = Ve(e13, t7);
      return r6.mode.blankLine ? r6.mode.blankLine(r6.state) : void 0;
    }
  }
  function bt(e13, t7, r6, n10) {
    for (var i9 = 0; i9 < 10; i9++) {
      n10 && (n10[0] = Ve(e13, r6).mode);
      var o10 = e13.token(t7, r6);
      if (t7.pos > t7.start)
        return o10;
    }
    throw Error("Mode " + e13.name + " failed to advance stream.");
  }
  ht.prototype.lookAhead = function(e13) {
    var t7 = this.doc.getLine(this.line + e13);
    return null != t7 && e13 > this.maxLookAhead && (this.maxLookAhead = e13), t7;
  }, ht.prototype.baseToken = function(e13) {
    if (!this.baseTokens)
      return null;
    for (; this.baseTokens[this.baseTokenPos] <= e13; )
      this.baseTokenPos += 2;
    var t7 = this.baseTokens[this.baseTokenPos + 1];
    return { type: t7 && t7.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e13 };
  }, ht.prototype.nextLine = function() {
    this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
  }, ht.fromSaved = function(e13, t7, r6) {
    return t7 instanceof ft ? new ht(e13, Ue(e13.mode, t7.state), r6, t7.lookAhead) : new ht(e13, Ue(e13.mode, t7), r6);
  }, ht.prototype.save = function(e13) {
    var t7 = false !== e13 ? Ue(this.doc.mode, this.state) : this.state;
    return this.maxLookAhead > 0 ? new ft(t7, this.maxLookAhead) : t7;
  };
  var wt = function(e13, t7, r6) {
    this.start = e13.start, this.end = e13.pos, this.string = e13.current(), this.type = t7 || null, this.state = r6;
  };
  function kt(e13, t7, r6, n10) {
    var i9, o10, a5 = e13.doc, l9 = a5.mode, s7 = qe(a5, (t7 = ut(a5, t7)).line), c4 = gt(e13, t7.line, r6), u4 = new Ge(s7.text, e13.options.tabSize, c4);
    for (n10 && (o10 = []); (n10 || u4.pos < t7.ch) && !u4.eol(); )
      u4.start = u4.pos, i9 = bt(l9, u4, c4.state), n10 && o10.push(new wt(u4, i9, Ue(a5.mode, c4.state)));
    return n10 ? o10 : new wt(u4, i9, c4.state);
  }
  function xt(e13, t7) {
    if (e13)
      for (; ; ) {
        var r6 = e13.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!r6)
          break;
        e13 = e13.slice(0, r6.index) + e13.slice(r6.index + r6[0].length);
        var n10 = r6[1] ? "bgClass" : "textClass";
        null == t7[n10] ? t7[n10] = r6[2] : RegExp("(?:^|\\s)" + r6[2] + "(?:$|\\s)").test(t7[n10]) || (t7[n10] += " " + r6[2]);
      }
    return e13;
  }
  function Ct(e13, t7, r6, n10, i9, o10, a5) {
    var l9 = r6.flattenSpans;
    null == l9 && (l9 = e13.options.flattenSpans);
    var s7, c4 = 0, u4 = null, d4 = new Ge(t7, e13.options.tabSize, n10), f3 = e13.options.addModeClass && [null];
    for ("" == t7 && xt(yt(r6, n10.state), o10); !d4.eol(); ) {
      if (d4.pos > e13.options.maxHighlightLength ? (l9 = false, a5 && vt(e13, t7, n10, d4.pos), d4.pos = t7.length, s7 = null) : s7 = xt(bt(r6, d4, n10.state, f3), o10), f3) {
        var h4 = f3[0].name;
        h4 && (s7 = "m-" + (s7 ? h4 + " " + s7 : h4));
      }
      if (!l9 || u4 != s7) {
        for (; c4 < d4.start; )
          i9(c4 = Math.min(d4.start, c4 + 5e3), u4);
        u4 = s7;
      }
      d4.start = d4.pos;
    }
    for (; c4 < d4.pos; ) {
      var p3 = Math.min(d4.pos, c4 + 5e3);
      i9(p3, u4), c4 = p3;
    }
  }
  var St = false, Tt = false;
  function Lt(e13, t7, r6) {
    this.marker = e13, this.from = t7, this.to = r6;
  }
  function At(e13, t7) {
    if (e13)
      for (var r6 = 0; r6 < e13.length; ++r6) {
        var n10 = e13[r6];
        if (n10.marker == t7)
          return n10;
      }
  }
  function Mt(e13, t7) {
    for (var r6, n10 = 0; n10 < e13.length; ++n10)
      e13[n10] != t7 && (r6 || (r6 = [])).push(e13[n10]);
    return r6;
  }
  function zt(e13, t7) {
    if (t7.full)
      return null;
    var r6 = tt(e13, t7.from.line) && qe(e13, t7.from.line).markedSpans, n10 = tt(e13, t7.to.line) && qe(e13, t7.to.line).markedSpans;
    if (!r6 && !n10)
      return null;
    var i9 = t7.from.ch, o10 = t7.to.ch, a5 = 0 == it(t7.from, t7.to), l9 = function(e14, t8, r7) {
      var n11;
      if (e14)
        for (var i10 = 0; i10 < e14.length; ++i10) {
          var o11 = e14[i10], a6 = o11.marker;
          if (null == o11.from || (a6.inclusiveLeft ? o11.from <= t8 : o11.from < t8) || o11.from == t8 && "bookmark" == a6.type && (!r7 || !o11.marker.insertLeft)) {
            var l10 = null == o11.to || (a6.inclusiveRight ? o11.to >= t8 : o11.to > t8);
            (n11 || (n11 = [])).push(new Lt(a6, o11.from, l10 ? null : o11.to));
          }
        }
      return n11;
    }(r6, i9, a5), s7 = function(e14, t8, r7) {
      var n11;
      if (e14)
        for (var i10 = 0; i10 < e14.length; ++i10) {
          var o11 = e14[i10], a6 = o11.marker;
          if (null == o11.to || (a6.inclusiveRight ? o11.to >= t8 : o11.to > t8) || o11.from == t8 && "bookmark" == a6.type && (!r7 || o11.marker.insertLeft)) {
            var l10 = null == o11.from || (a6.inclusiveLeft ? o11.from <= t8 : o11.from < t8);
            (n11 || (n11 = [])).push(new Lt(a6, l10 ? null : o11.from - t8, null == o11.to ? null : o11.to - t8));
          }
        }
      return n11;
    }(n10, o10, a5), c4 = 1 == t7.text.length, u4 = Y(t7.text).length + (c4 ? i9 : 0);
    if (l9)
      for (var d4 = 0; d4 < l9.length; ++d4) {
        var f3 = l9[d4];
        if (null == f3.to) {
          var h4 = At(s7, f3.marker);
          h4 ? c4 && (f3.to = null == h4.to ? null : h4.to + u4) : f3.to = i9;
        }
      }
    if (s7)
      for (var p3 = 0; p3 < s7.length; ++p3) {
        var m3 = s7[p3];
        null != m3.to && (m3.to += u4), null == m3.from ? At(l9, m3.marker) || (m3.from = u4, c4 && (l9 || (l9 = [])).push(m3)) : (m3.from += u4, c4 && (l9 || (l9 = [])).push(m3));
      }
    l9 && (l9 = Ot(l9)), s7 && s7 != l9 && (s7 = Ot(s7));
    var g3 = [l9];
    if (!c4) {
      var v3, y3 = t7.text.length - 2;
      if (y3 > 0 && l9)
        for (var b3 = 0; b3 < l9.length; ++b3)
          null == l9[b3].to && (v3 || (v3 = [])).push(new Lt(l9[b3].marker, null, null));
      for (var w3 = 0; w3 < y3; ++w3)
        g3.push(v3);
      g3.push(s7);
    }
    return g3;
  }
  function Ot(e13) {
    for (var t7 = 0; t7 < e13.length; ++t7) {
      var r6 = e13[t7];
      null != r6.from && r6.from == r6.to && false !== r6.marker.clearWhenEmpty && e13.splice(t7--, 1);
    }
    return e13.length ? e13 : null;
  }
  function _t(e13) {
    var t7 = e13.markedSpans;
    if (t7) {
      for (var r6 = 0; r6 < t7.length; ++r6)
        t7[r6].marker.detachLine(e13);
      e13.markedSpans = null;
    }
  }
  function Nt(e13, t7) {
    if (t7) {
      for (var r6 = 0; r6 < t7.length; ++r6)
        t7[r6].marker.attachLine(e13);
      e13.markedSpans = t7;
    }
  }
  function Pt(e13) {
    return e13.inclusiveLeft ? -1 : 0;
  }
  function Et(e13) {
    return e13.inclusiveRight ? 1 : 0;
  }
  function Dt(e13, t7) {
    var r6 = e13.lines.length - t7.lines.length;
    if (0 != r6)
      return r6;
    var n10 = e13.find(), i9 = t7.find(), o10 = it(n10.from, i9.from) || Pt(e13) - Pt(t7);
    return o10 ? -o10 : it(n10.to, i9.to) || Et(e13) - Et(t7) || t7.id - e13.id;
  }
  function Wt(e13, t7) {
    var r6, n10 = Tt && e13.markedSpans;
    if (n10)
      for (var i9 = void 0, o10 = 0; o10 < n10.length; ++o10)
        (i9 = n10[o10]).marker.collapsed && null == (t7 ? i9.from : i9.to) && (!r6 || Dt(r6, i9.marker) < 0) && (r6 = i9.marker);
    return r6;
  }
  function Ft(e13) {
    return Wt(e13, true);
  }
  function It(e13) {
    return Wt(e13, false);
  }
  function Ht(e13, t7) {
    var r6, n10 = Tt && e13.markedSpans;
    if (n10)
      for (var i9 = 0; i9 < n10.length; ++i9) {
        var o10 = n10[i9];
        o10.marker.collapsed && (null == o10.from || o10.from < t7) && (null == o10.to || o10.to > t7) && (!r6 || Dt(r6, o10.marker) < 0) && (r6 = o10.marker);
      }
    return r6;
  }
  function Bt(e13, t7, r6, n10, i9) {
    var o10 = qe(e13, t7), a5 = Tt && o10.markedSpans;
    if (a5)
      for (var l9 = 0; l9 < a5.length; ++l9) {
        var s7 = a5[l9];
        if (s7.marker.collapsed) {
          var c4 = s7.marker.find(0), u4 = it(c4.from, r6) || Pt(s7.marker) - Pt(i9), d4 = it(c4.to, n10) || Et(s7.marker) - Et(i9);
          if (!(u4 >= 0 && d4 <= 0 || u4 <= 0 && d4 >= 0) && (u4 <= 0 && (s7.marker.inclusiveRight && i9.inclusiveLeft ? it(c4.to, r6) >= 0 : it(c4.to, r6) > 0) || u4 >= 0 && (s7.marker.inclusiveRight && i9.inclusiveLeft ? it(c4.from, n10) <= 0 : it(c4.from, n10) < 0)))
            return true;
        }
      }
  }
  function $t(e13) {
    for (var t7; t7 = Ft(e13); )
      e13 = t7.find(-1, true).line;
    return e13;
  }
  function Rt(e13, t7) {
    var r6 = qe(e13, t7), n10 = $t(r6);
    return r6 == n10 ? t7 : Je(n10);
  }
  function Zt(e13, t7) {
    if (t7 > e13.lastLine())
      return t7;
    var r6, n10 = qe(e13, t7);
    if (!jt(e13, n10))
      return t7;
    for (; r6 = It(n10); )
      n10 = r6.find(1, true).line;
    return Je(n10) + 1;
  }
  function jt(e13, t7) {
    var r6 = Tt && t7.markedSpans;
    if (r6) {
      for (var n10 = void 0, i9 = 0; i9 < r6.length; ++i9)
        if ((n10 = r6[i9]).marker.collapsed) {
          if (null == n10.from)
            return true;
          if (!n10.marker.widgetNode && 0 == n10.from && n10.marker.inclusiveLeft && Ut(e13, t7, n10))
            return true;
        }
    }
  }
  function Ut(e13, t7, r6) {
    if (null == r6.to) {
      var n10 = r6.marker.find(1, true);
      return Ut(e13, n10.line, At(n10.line.markedSpans, r6.marker));
    }
    if (r6.marker.inclusiveRight && r6.to == t7.text.length)
      return true;
    for (var i9 = void 0, o10 = 0; o10 < t7.markedSpans.length; ++o10)
      if ((i9 = t7.markedSpans[o10]).marker.collapsed && !i9.marker.widgetNode && i9.from == r6.to && (null == i9.to || i9.to != r6.from) && (i9.marker.inclusiveLeft || r6.marker.inclusiveRight) && Ut(e13, t7, i9))
        return true;
  }
  function Vt(e13) {
    for (var t7 = 0, r6 = (e13 = $t(e13)).parent, n10 = 0; n10 < r6.lines.length; ++n10) {
      var i9 = r6.lines[n10];
      if (i9 == e13)
        break;
      t7 += i9.height;
    }
    for (var o10 = r6.parent; o10; o10 = (r6 = o10).parent)
      for (var a5 = 0; a5 < o10.children.length; ++a5) {
        var l9 = o10.children[a5];
        if (l9 == r6)
          break;
        t7 += l9.height;
      }
    return t7;
  }
  function Kt(e13) {
    if (0 == e13.height)
      return 0;
    for (var t7, r6 = e13.text.length, n10 = e13; t7 = Ft(n10); ) {
      var i9 = t7.find(0, true);
      n10 = i9.from.line, r6 += i9.from.ch - i9.to.ch;
    }
    for (n10 = e13; t7 = It(n10); ) {
      var o10 = t7.find(0, true);
      r6 -= n10.text.length - o10.from.ch, r6 += (n10 = o10.to.line).text.length - o10.to.ch;
    }
    return r6;
  }
  function Gt(e13) {
    var t7 = e13.display, r6 = e13.doc;
    t7.maxLine = qe(r6, r6.first), t7.maxLineLength = Kt(t7.maxLine), t7.maxLineChanged = true, r6.iter(function(e14) {
      var r7 = Kt(e14);
      r7 > t7.maxLineLength && (t7.maxLineLength = r7, t7.maxLine = e14);
    });
  }
  var qt = function(e13, t7, r6) {
    this.text = e13, Nt(this, t7), this.height = r6 ? r6(this) : 1;
  };
  function Xt(e13) {
    e13.parent = null, _t(e13);
  }
  qt.prototype.lineNo = function() {
    return Je(this);
  }, ke(qt);
  var Yt = {}, Qt = {};
  function Jt(e13, t7) {
    if (!e13 || /^\s*$/.test(e13))
      return null;
    var r6 = t7.addModeClass ? Qt : Yt;
    return r6[e13] || (r6[e13] = e13.replace(/\S+/g, "cm-$&"));
  }
  function er(e13, t7) {
    var r6 = _2("span", null, null, s6 ? "padding-right: .1px" : null), n10 = { pre: _2("pre", [r6], "CodeMirror-line"), content: r6, col: 0, pos: 0, cm: e13, trailingSpace: false, splitSpaces: e13.getOption("lineWrapping") };
    t7.measure = {};
    for (var i9 = 0; i9 <= (t7.rest ? t7.rest.length : 0); i9++) {
      var o10 = i9 ? t7.rest[i9 - 1] : t7.line, a5 = void 0;
      n10.pos = 0, n10.addToken = rr, Ne(e13.display.measure) && (a5 = fe(o10, e13.doc.direction)) && (n10.addToken = nr(n10.addToken, a5)), n10.map = [], or(o10, n10, mt(e13, o10, t7 != e13.display.externalMeasured && Je(o10))), o10.styleClasses && (o10.styleClasses.bgClass && (n10.bgClass = D2(o10.styleClasses.bgClass, n10.bgClass || "")), o10.styleClasses.textClass && (n10.textClass = D2(o10.styleClasses.textClass, n10.textClass || ""))), 0 == n10.map.length && n10.map.push(0, 0, n10.content.appendChild(_e(e13.display.measure))), 0 == i9 ? (t7.measure.map = n10.map, t7.measure.cache = {}) : ((t7.measure.maps || (t7.measure.maps = [])).push(n10.map), (t7.measure.caches || (t7.measure.caches = [])).push({}));
    }
    if (s6) {
      var l9 = n10.content.lastChild;
      (/\bcm-tab\b/.test(l9.className) || l9.querySelector && l9.querySelector(".cm-tab")) && (n10.content.className = "cm-tab-wrap-hack");
    }
    return ve(e13, "renderLine", e13, t7.line, n10.pre), n10.pre.className && (n10.textClass = D2(n10.pre.className, n10.textClass || "")), n10;
  }
  function tr(e13) {
    var t7 = O("span", "\u2022", "cm-invalidchar");
    return t7.title = "\\u" + e13.charCodeAt(0).toString(16), t7.setAttribute("aria-label", t7.title), t7;
  }
  function rr(e13, t7, r6, n10, i9, o10, s7) {
    if (t7) {
      var c4, u4 = e13.splitSpaces ? function(e14, t8) {
        if (e14.length > 1 && !/  /.test(e14))
          return e14;
        for (var r7 = t8, n11 = "", i10 = 0; i10 < e14.length; i10++) {
          var o11 = e14.charAt(i10);
          " " != o11 || !r7 || i10 != e14.length - 1 && 32 != e14.charCodeAt(i10 + 1) || (o11 = "\xA0"), n11 += o11, r7 = " " == o11;
        }
        return n11;
      }(t7, e13.trailingSpace) : t7, d4 = e13.cm.state.specialChars, f3 = false;
      if (d4.test(t7)) {
        c4 = document.createDocumentFragment();
        for (var h4 = 0; ; ) {
          d4.lastIndex = h4;
          var p3 = d4.exec(t7), m3 = p3 ? p3.index - h4 : t7.length - h4;
          if (m3) {
            var g3 = document.createTextNode(u4.slice(h4, h4 + m3));
            a4 && l8 < 9 ? c4.appendChild(O("span", [g3])) : c4.appendChild(g3), e13.map.push(e13.pos, e13.pos + m3, g3), e13.col += m3, e13.pos += m3;
          }
          if (!p3)
            break;
          h4 += m3 + 1;
          var v3 = void 0;
          if ("	" == p3[0]) {
            var y3 = e13.cm.options.tabSize, b3 = y3 - e13.col % y3;
            (v3 = c4.appendChild(O("span", X(b3), "cm-tab"))).setAttribute("role", "presentation"), v3.setAttribute("cm-text", "	"), e13.col += b3;
          } else
            "\r" == p3[0] || "\n" == p3[0] ? ((v3 = c4.appendChild(O("span", "\r" == p3[0] ? "\u240D" : "\u2424", "cm-invalidchar"))).setAttribute("cm-text", p3[0]), e13.col += 1) : ((v3 = e13.cm.options.specialCharPlaceholder(p3[0])).setAttribute("cm-text", p3[0]), a4 && l8 < 9 ? c4.appendChild(O("span", [v3])) : c4.appendChild(v3), e13.col += 1);
          e13.map.push(e13.pos, e13.pos + 1, v3), e13.pos++;
        }
      } else
        e13.col += t7.length, c4 = document.createTextNode(u4), e13.map.push(e13.pos, e13.pos + t7.length, c4), a4 && l8 < 9 && (f3 = true), e13.pos += t7.length;
      if (e13.trailingSpace = 32 == u4.charCodeAt(t7.length - 1), r6 || n10 || i9 || f3 || o10 || s7) {
        var w3 = r6 || "";
        n10 && (w3 += n10), i9 && (w3 += i9);
        var k3 = O("span", [c4], w3, o10);
        if (s7)
          for (var x3 in s7)
            s7.hasOwnProperty(x3) && "style" != x3 && "class" != x3 && k3.setAttribute(x3, s7[x3]);
        return e13.content.appendChild(k3);
      }
      e13.content.appendChild(c4);
    }
  }
  function nr(e13, t7) {
    return function(r6, n10, i9, o10, a5, l9, s7) {
      i9 = i9 ? i9 + " cm-force-border" : "cm-force-border";
      for (var c4 = r6.pos, u4 = c4 + n10.length; ; ) {
        for (var d4 = void 0, f3 = 0; f3 < t7.length && !((d4 = t7[f3]).to > c4 && d4.from <= c4); f3++)
          ;
        if (d4.to >= u4)
          return e13(r6, n10, i9, o10, a5, l9, s7);
        e13(r6, n10.slice(0, d4.to - c4), i9, o10, null, l9, s7), o10 = null, n10 = n10.slice(d4.to - c4), c4 = d4.to;
      }
    };
  }
  function ir(e13, t7, r6, n10) {
    var i9 = !n10 && r6.widgetNode;
    i9 && e13.map.push(e13.pos, e13.pos + t7, i9), !n10 && e13.cm.display.input.needsContentAttribute && (i9 || (i9 = e13.content.appendChild(document.createElement("span"))), i9.setAttribute("cm-marker", r6.id)), i9 && (e13.cm.display.input.setUneditable(i9), e13.content.appendChild(i9)), e13.pos += t7, e13.trailingSpace = false;
  }
  function or(e13, t7, r6) {
    var n10 = e13.markedSpans, i9 = e13.text, o10 = 0;
    if (n10)
      for (var a5, l9, s7, c4, u4, d4, f3, h4 = i9.length, p3 = 0, m3 = 1, g3 = "", v3 = 0; ; ) {
        if (v3 == p3) {
          s7 = c4 = u4 = l9 = "", f3 = null, d4 = null, v3 = 1 / 0;
          for (var y3 = [], b3 = void 0, w3 = 0; w3 < n10.length; ++w3) {
            var k3 = n10[w3], x3 = k3.marker;
            if ("bookmark" == x3.type && k3.from == p3 && x3.widgetNode)
              y3.push(x3);
            else if (k3.from <= p3 && (null == k3.to || k3.to > p3 || x3.collapsed && k3.to == p3 && k3.from == p3)) {
              if (null != k3.to && k3.to != p3 && v3 > k3.to && (v3 = k3.to, c4 = ""), x3.className && (s7 += " " + x3.className), x3.css && (l9 = (l9 ? l9 + ";" : "") + x3.css), x3.startStyle && k3.from == p3 && (u4 += " " + x3.startStyle), x3.endStyle && k3.to == v3 && (b3 || (b3 = [])).push(x3.endStyle, k3.to), x3.title && ((f3 || (f3 = {})).title = x3.title), x3.attributes)
                for (var C3 in x3.attributes)
                  (f3 || (f3 = {}))[C3] = x3.attributes[C3];
              x3.collapsed && (!d4 || Dt(d4.marker, x3) < 0) && (d4 = k3);
            } else
              k3.from > p3 && v3 > k3.from && (v3 = k3.from);
          }
          if (b3)
            for (var S4 = 0; S4 < b3.length; S4 += 2)
              b3[S4 + 1] == v3 && (c4 += " " + b3[S4]);
          if (!d4 || d4.from == p3)
            for (var T3 = 0; T3 < y3.length; ++T3)
              ir(t7, 0, y3[T3]);
          if (d4 && (d4.from || 0) == p3) {
            if (ir(t7, (null == d4.to ? h4 + 1 : d4.to) - p3, d4.marker, null == d4.from), null == d4.to)
              return;
            d4.to == p3 && (d4 = false);
          }
        }
        if (p3 >= h4)
          break;
        for (var L3 = Math.min(h4, v3); ; ) {
          if (g3) {
            var A3 = p3 + g3.length;
            if (!d4) {
              var M3 = A3 > L3 ? g3.slice(0, L3 - p3) : g3;
              t7.addToken(t7, M3, a5 ? a5 + s7 : s7, u4, p3 + M3.length == v3 ? c4 : "", l9, f3);
            }
            if (A3 >= L3) {
              g3 = g3.slice(L3 - p3), p3 = L3;
              break;
            }
            p3 = A3, u4 = "";
          }
          g3 = i9.slice(o10, o10 = r6[m3++]), a5 = Jt(r6[m3++], t7.cm.options);
        }
      }
    else
      for (var z3 = 1; z3 < r6.length; z3 += 2)
        t7.addToken(t7, i9.slice(o10, o10 = r6[z3]), Jt(r6[z3 + 1], t7.cm.options));
  }
  function ar(e13, t7, r6) {
    this.line = t7, this.rest = function(e14) {
      for (var t8, r7; t8 = It(e14); )
        e14 = t8.find(1, true).line, (r7 || (r7 = [])).push(e14);
      return r7;
    }(t7), this.size = this.rest ? Je(Y(this.rest)) - r6 + 1 : 1, this.node = this.text = null, this.hidden = jt(e13, t7);
  }
  function lr(e13, t7, r6) {
    for (var n10, i9 = [], o10 = t7; o10 < r6; o10 = n10) {
      var a5 = new ar(e13.doc, qe(e13.doc, o10), o10);
      n10 = o10 + a5.size, i9.push(a5);
    }
    return i9;
  }
  var sr = null, cr = null;
  function ur(e13, t7) {
    var r6 = me(e13, t7);
    if (r6.length) {
      var n10, i9 = Array.prototype.slice.call(arguments, 2);
      sr ? n10 = sr.delayedCallbacks : cr ? n10 = cr : (n10 = cr = [], setTimeout(dr, 0));
      for (var o10 = function(e14) {
        n10.push(function() {
          return r6[e14].apply(null, i9);
        });
      }, a5 = 0; a5 < r6.length; ++a5)
        o10(a5);
    }
  }
  function dr() {
    var e13 = cr;
    cr = null;
    for (var t7 = 0; t7 < e13.length; ++t7)
      e13[t7]();
  }
  function fr(e13, t7, r6, n10) {
    for (var i9 = 0; i9 < t7.changes.length; i9++) {
      var o10 = t7.changes[i9];
      "text" == o10 ? mr(e13, t7) : "gutter" == o10 ? vr(e13, t7, r6, n10) : "class" == o10 ? gr(e13, t7) : "widget" == o10 && yr(e13, t7, n10);
    }
    t7.changes = null;
  }
  function hr(e13) {
    return e13.node == e13.text && (e13.node = O("div", null, null, "position: relative"), e13.text.parentNode && e13.text.parentNode.replaceChild(e13.node, e13.text), e13.node.appendChild(e13.text), a4 && l8 < 8 && (e13.node.style.zIndex = 2)), e13.node;
  }
  function pr(e13, t7) {
    var r6 = e13.display.externalMeasured;
    return r6 && r6.line == t7.line ? (e13.display.externalMeasured = null, t7.measure = r6.measure, r6.built) : er(e13, t7);
  }
  function mr(e13, t7) {
    var r6 = t7.text.className, n10 = pr(e13, t7);
    t7.text == t7.node && (t7.node = n10.pre), t7.text.parentNode.replaceChild(n10.pre, t7.text), t7.text = n10.pre, n10.bgClass != t7.bgClass || n10.textClass != t7.textClass ? (t7.bgClass = n10.bgClass, t7.textClass = n10.textClass, gr(e13, t7)) : r6 && (t7.text.className = r6);
  }
  function gr(e13, t7) {
    !function(e14, t8) {
      var r7 = t8.bgClass ? t8.bgClass + " " + (t8.line.bgClass || "") : t8.line.bgClass;
      if (r7 && (r7 += " CodeMirror-linebackground"), t8.background)
        r7 ? t8.background.className = r7 : (t8.background.parentNode.removeChild(t8.background), t8.background = null);
      else if (r7) {
        var n10 = hr(t8);
        t8.background = n10.insertBefore(O("div", null, r7), n10.firstChild), e14.display.input.setUneditable(t8.background);
      }
    }(e13, t7), t7.line.wrapClass ? hr(t7).className = t7.line.wrapClass : t7.node != t7.text && (t7.node.className = "");
    var r6 = t7.textClass ? t7.textClass + " " + (t7.line.textClass || "") : t7.line.textClass;
    t7.text.className = r6 || "";
  }
  function vr(e13, t7, r6, n10) {
    if (t7.gutter && (t7.node.removeChild(t7.gutter), t7.gutter = null), t7.gutterBackground && (t7.node.removeChild(t7.gutterBackground), t7.gutterBackground = null), t7.line.gutterClass) {
      var i9 = hr(t7);
      t7.gutterBackground = O("div", null, "CodeMirror-gutter-background " + t7.line.gutterClass, "left: " + (e13.options.fixedGutter ? n10.fixedPos : -n10.gutterTotalWidth) + "px; width: " + n10.gutterTotalWidth + "px"), e13.display.input.setUneditable(t7.gutterBackground), i9.insertBefore(t7.gutterBackground, t7.text);
    }
    var o10 = t7.line.gutterMarkers;
    if (e13.options.lineNumbers || o10) {
      var a5 = hr(t7), l9 = t7.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e13.options.fixedGutter ? n10.fixedPos : -n10.gutterTotalWidth) + "px");
      if (l9.setAttribute("aria-hidden", "true"), e13.display.input.setUneditable(l9), a5.insertBefore(l9, t7.text), t7.line.gutterClass && (l9.className += " " + t7.line.gutterClass), !e13.options.lineNumbers || o10 && o10["CodeMirror-linenumbers"] || (t7.lineNumber = l9.appendChild(O("div", rt(e13.options, r6), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n10.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e13.display.lineNumInnerWidth + "px"))), o10)
        for (var s7 = 0; s7 < e13.display.gutterSpecs.length; ++s7) {
          var c4 = e13.display.gutterSpecs[s7].className, u4 = o10.hasOwnProperty(c4) && o10[c4];
          u4 && l9.appendChild(O("div", [u4], "CodeMirror-gutter-elt", "left: " + n10.gutterLeft[c4] + "px; width: " + n10.gutterWidth[c4] + "px"));
        }
    }
  }
  function yr(e13, t7, r6) {
    t7.alignable && (t7.alignable = null);
    for (var n10 = T2("CodeMirror-linewidget"), i9 = t7.node.firstChild, o10 = void 0; i9; i9 = o10)
      o10 = i9.nextSibling, n10.test(i9.className) && t7.node.removeChild(i9);
    wr(e13, t7, r6);
  }
  function br(e13, t7, r6, n10) {
    var i9 = pr(e13, t7);
    return t7.text = t7.node = i9.pre, i9.bgClass && (t7.bgClass = i9.bgClass), i9.textClass && (t7.textClass = i9.textClass), gr(e13, t7), vr(e13, t7, r6, n10), wr(e13, t7, n10), t7.node;
  }
  function wr(e13, t7, r6) {
    if (kr(e13, t7.line, t7, r6, true), t7.rest)
      for (var n10 = 0; n10 < t7.rest.length; n10++)
        kr(e13, t7.rest[n10], t7, r6, false);
  }
  function kr(e13, t7, r6, n10, i9) {
    if (t7.widgets)
      for (var o10 = hr(r6), a5 = 0, l9 = t7.widgets; a5 < l9.length; ++a5) {
        var s7 = l9[a5], c4 = O("div", [s7.node], "CodeMirror-linewidget" + (s7.className ? " " + s7.className : ""));
        s7.handleMouseEvents || c4.setAttribute("cm-ignore-events", "true"), xr(s7, c4, r6, n10), e13.display.input.setUneditable(c4), i9 && s7.above ? o10.insertBefore(c4, r6.gutter || r6.text) : o10.appendChild(c4), ur(s7, "redraw");
      }
  }
  function xr(e13, t7, r6, n10) {
    if (e13.noHScroll) {
      (r6.alignable || (r6.alignable = [])).push(t7);
      var i9 = n10.wrapperWidth;
      t7.style.left = n10.fixedPos + "px", e13.coverGutter || (i9 -= n10.gutterTotalWidth, t7.style.paddingLeft = n10.gutterTotalWidth + "px"), t7.style.width = i9 + "px";
    }
    e13.coverGutter && (t7.style.zIndex = 5, t7.style.position = "relative", e13.noHScroll || (t7.style.marginLeft = -n10.gutterTotalWidth + "px"));
  }
  function Cr(e13) {
    if (null != e13.height)
      return e13.height;
    var t7 = e13.doc.cm;
    if (!t7)
      return 0;
    if (!N2(document.body, e13.node)) {
      var r6 = "position: relative;";
      e13.coverGutter && (r6 += "margin-left: -" + t7.display.gutters.offsetWidth + "px;"), e13.noHScroll && (r6 += "width: " + t7.display.wrapper.clientWidth + "px;"), z2(t7.display.measure, O("div", [e13.node], null, r6));
    }
    return e13.height = e13.node.parentNode.offsetHeight;
  }
  function Sr(e13, t7) {
    for (var r6 = Le(t7); r6 != e13.wrapper; r6 = r6.parentNode)
      if (!r6 || 1 == r6.nodeType && "true" == r6.getAttribute("cm-ignore-events") || r6.parentNode == e13.sizer && r6 != e13.mover)
        return true;
  }
  function Tr(e13) {
    return e13.lineSpace.offsetTop;
  }
  function Lr(e13) {
    return e13.mover.offsetHeight - e13.lineSpace.offsetHeight;
  }
  function Ar(e13) {
    if (e13.cachedPaddingH)
      return e13.cachedPaddingH;
    var t7 = z2(e13.measure, O("pre", "x", "CodeMirror-line-like")), r6 = window.getComputedStyle ? window.getComputedStyle(t7) : t7.currentStyle, n10 = { left: parseInt(r6.paddingLeft), right: parseInt(r6.paddingRight) };
    return isNaN(n10.left) || isNaN(n10.right) || (e13.cachedPaddingH = n10), n10;
  }
  function Mr(e13) {
    return 50 - e13.display.nativeBarWidth;
  }
  function zr(e13) {
    return e13.display.scroller.clientWidth - Mr(e13) - e13.display.barWidth;
  }
  function Or(e13) {
    return e13.display.scroller.clientHeight - Mr(e13) - e13.display.barHeight;
  }
  function _r(e13, t7, r6) {
    if (e13.line == t7)
      return { map: e13.measure.map, cache: e13.measure.cache };
    if (e13.rest) {
      for (var n10 = 0; n10 < e13.rest.length; n10++)
        if (e13.rest[n10] == t7)
          return { map: e13.measure.maps[n10], cache: e13.measure.caches[n10] };
      for (var i9 = 0; i9 < e13.rest.length; i9++)
        if (Je(e13.rest[i9]) > r6)
          return { map: e13.measure.maps[i9], cache: e13.measure.caches[i9], before: true };
    }
  }
  function Nr(e13, t7, r6, n10) {
    return Dr(e13, Er(e13, t7), r6, n10);
  }
  function Pr(e13, t7) {
    if (t7 >= e13.display.viewFrom && t7 < e13.display.viewTo)
      return e13.display.view[hn(e13, t7)];
    var r6 = e13.display.externalMeasured;
    return r6 && t7 >= r6.lineN && t7 < r6.lineN + r6.size ? r6 : void 0;
  }
  function Er(e13, t7) {
    var r6 = Je(t7), n10 = Pr(e13, r6);
    n10 && !n10.text ? n10 = null : n10 && n10.changes && (fr(e13, n10, r6, sn(e13)), e13.curOp.forceUpdate = true), n10 || (n10 = function(e14, t8) {
      var r7 = Je(t8 = $t(t8)), n11 = e14.display.externalMeasured = new ar(e14.doc, t8, r7);
      n11.lineN = r7;
      var i10 = n11.built = er(e14, n11);
      return n11.text = i10.pre, z2(e14.display.lineMeasure, i10.pre), n11;
    }(e13, t7));
    var i9 = _r(n10, t7, r6);
    return { line: t7, view: n10, rect: null, map: i9.map, cache: i9.cache, before: i9.before, hasHeights: false };
  }
  function Dr(e13, t7, r6, n10, i9) {
    t7.before && (r6 = -1);
    var o10, s7 = r6 + (n10 || "");
    return t7.cache.hasOwnProperty(s7) ? o10 = t7.cache[s7] : (t7.rect || (t7.rect = t7.view.text.getBoundingClientRect()), t7.hasHeights || (function(e14, t8, r7) {
      var n11 = e14.options.lineWrapping, i10 = n11 && zr(e14);
      if (!t8.measure.heights || n11 && t8.measure.width != i10) {
        var o11 = t8.measure.heights = [];
        if (n11) {
          t8.measure.width = i10;
          for (var a5 = t8.text.firstChild.getClientRects(), l9 = 0; l9 < a5.length - 1; l9++) {
            var s8 = a5[l9], c4 = a5[l9 + 1];
            Math.abs(s8.bottom - c4.bottom) > 2 && o11.push((s8.bottom + c4.top) / 2 - r7.top);
          }
        }
        o11.push(r7.bottom - r7.top);
      }
    }(e13, t7.view, t7.rect), t7.hasHeights = true), o10 = function(e14, t8, r7, n11) {
      var i10, o11 = Ir(t8.map, r7, n11), s8 = o11.node, c4 = o11.start, u4 = o11.end, d4 = o11.collapse;
      if (3 == s8.nodeType) {
        for (var f3 = 0; f3 < 4; f3++) {
          for (; c4 && ae(t8.line.text.charAt(o11.coverStart + c4)); )
            --c4;
          for (; o11.coverStart + u4 < o11.coverEnd && ae(t8.line.text.charAt(o11.coverStart + u4)); )
            ++u4;
          if ((i10 = a4 && l8 < 9 && 0 == c4 && u4 == o11.coverEnd - o11.coverStart ? s8.parentNode.getBoundingClientRect() : Hr(L2(s8, c4, u4).getClientRects(), n11)).left || i10.right || 0 == c4)
            break;
          u4 = c4, c4 -= 1, d4 = "right";
        }
        a4 && l8 < 11 && (i10 = function(e15, t9) {
          if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function(e16) {
            if (null != Fe)
              return Fe;
            var t10 = z2(e16, O("span", "x")), r9 = t10.getBoundingClientRect(), n13 = L2(t10, 0, 1).getBoundingClientRect();
            return Fe = Math.abs(r9.left - n13.left) > 1;
          }(e15))
            return t9;
          var r8 = screen.logicalXDPI / screen.deviceXDPI, n12 = screen.logicalYDPI / screen.deviceYDPI;
          return { left: t9.left * r8, right: t9.right * r8, top: t9.top * n12, bottom: t9.bottom * n12 };
        }(e14.display.measure, i10));
      } else {
        var h4;
        c4 > 0 && (d4 = n11 = "right"), i10 = e14.options.lineWrapping && (h4 = s8.getClientRects()).length > 1 ? h4["right" == n11 ? h4.length - 1 : 0] : s8.getBoundingClientRect();
      }
      if (a4 && l8 < 9 && !c4 && (!i10 || !i10.left && !i10.right)) {
        var p3 = s8.parentNode.getClientRects()[0];
        i10 = p3 ? { left: p3.left, right: p3.left + ln(e14.display), top: p3.top, bottom: p3.bottom } : Fr;
      }
      for (var m3 = i10.top - t8.rect.top, g3 = i10.bottom - t8.rect.top, v3 = (m3 + g3) / 2, y3 = t8.view.measure.heights, b3 = 0; b3 < y3.length - 1 && !(v3 < y3[b3]); b3++)
        ;
      var w3 = b3 ? y3[b3 - 1] : 0, k3 = y3[b3], x3 = { left: ("right" == d4 ? i10.right : i10.left) - t8.rect.left, right: ("left" == d4 ? i10.left : i10.right) - t8.rect.left, top: w3, bottom: k3 };
      return i10.left || i10.right || (x3.bogus = true), e14.options.singleCursorHeightPerLine || (x3.rtop = m3, x3.rbottom = g3), x3;
    }(e13, t7, r6, n10), o10.bogus || (t7.cache[s7] = o10)), { left: o10.left, right: o10.right, top: i9 ? o10.rtop : o10.top, bottom: i9 ? o10.rbottom : o10.bottom };
  }
  var Wr, Fr = { left: 0, right: 0, top: 0, bottom: 0 };
  function Ir(e13, t7, r6) {
    for (var n10, i9, o10, a5, l9, s7, c4 = 0; c4 < e13.length; c4 += 3)
      if (l9 = e13[c4], s7 = e13[c4 + 1], t7 < l9 ? (i9 = 0, o10 = 1, a5 = "left") : t7 < s7 ? o10 = 1 + (i9 = t7 - l9) : (c4 == e13.length - 3 || t7 == s7 && e13[c4 + 3] > t7) && (i9 = (o10 = s7 - l9) - 1, t7 >= s7 && (a5 = "right")), null != i9) {
        if (n10 = e13[c4 + 2], l9 == s7 && r6 == (n10.insertLeft ? "left" : "right") && (a5 = r6), "left" == r6 && 0 == i9)
          for (; c4 && e13[c4 - 2] == e13[c4 - 3] && e13[c4 - 1].insertLeft; )
            n10 = e13[2 + (c4 -= 3)], a5 = "left";
        if ("right" == r6 && i9 == s7 - l9)
          for (; c4 < e13.length - 3 && e13[c4 + 3] == e13[c4 + 4] && !e13[c4 + 5].insertLeft; )
            n10 = e13[(c4 += 3) + 2], a5 = "right";
        break;
      }
    return { node: n10, start: i9, end: o10, collapse: a5, coverStart: l9, coverEnd: s7 };
  }
  function Hr(e13, t7) {
    var r6 = Fr;
    if ("left" == t7)
      for (var n10 = 0; n10 < e13.length && (r6 = e13[n10]).left == r6.right; n10++)
        ;
    else
      for (var i9 = e13.length - 1; i9 >= 0 && (r6 = e13[i9]).left == r6.right; i9--)
        ;
    return r6;
  }
  function Br(e13) {
    if (e13.measure && (e13.measure.cache = {}, e13.measure.heights = null, e13.rest))
      for (var t7 = 0; t7 < e13.rest.length; t7++)
        e13.measure.caches[t7] = {};
  }
  function $r(e13) {
    e13.display.externalMeasure = null, M2(e13.display.lineMeasure);
    for (var t7 = 0; t7 < e13.display.view.length; t7++)
      Br(e13.display.view[t7]);
  }
  function Rr(e13) {
    $r(e13), e13.display.cachedCharWidth = e13.display.cachedTextHeight = e13.display.cachedPaddingH = null, e13.options.lineWrapping || (e13.display.maxLineChanged = true), e13.display.lineNumChars = null;
  }
  function Zr(e13) {
    return u3 && v2 ? -(e13.body.getBoundingClientRect().left - parseInt(getComputedStyle(e13.body).marginLeft)) : e13.defaultView.pageXOffset || (e13.documentElement || e13.body).scrollLeft;
  }
  function jr(e13) {
    return u3 && v2 ? -(e13.body.getBoundingClientRect().top - parseInt(getComputedStyle(e13.body).marginTop)) : e13.defaultView.pageYOffset || (e13.documentElement || e13.body).scrollTop;
  }
  function Ur(e13) {
    var t7 = $t(e13).widgets, r6 = 0;
    if (t7)
      for (var n10 = 0; n10 < t7.length; ++n10)
        t7[n10].above && (r6 += Cr(t7[n10]));
    return r6;
  }
  function Vr(e13, t7, r6, n10, i9) {
    if (!i9) {
      var o10 = Ur(t7);
      r6.top += o10, r6.bottom += o10;
    }
    if ("line" == n10)
      return r6;
    n10 || (n10 = "local");
    var a5 = Vt(t7);
    if ("local" == n10 ? a5 += Tr(e13.display) : a5 -= e13.display.viewOffset, "page" == n10 || "window" == n10) {
      var l9 = e13.display.lineSpace.getBoundingClientRect();
      a5 += l9.top + ("window" == n10 ? 0 : jr(F(e13)));
      var s7 = l9.left + ("window" == n10 ? 0 : Zr(F(e13)));
      r6.left += s7, r6.right += s7;
    }
    return r6.top += a5, r6.bottom += a5, r6;
  }
  function Kr(e13, t7, r6) {
    if ("div" == r6)
      return t7;
    var n10 = t7.left, i9 = t7.top;
    if ("page" == r6)
      n10 -= Zr(F(e13)), i9 -= jr(F(e13));
    else if ("local" == r6 || !r6) {
      var o10 = e13.display.sizer.getBoundingClientRect();
      n10 += o10.left, i9 += o10.top;
    }
    var a5 = e13.display.lineSpace.getBoundingClientRect();
    return { left: n10 - a5.left, top: i9 - a5.top };
  }
  function Gr(e13, t7, r6, n10, i9) {
    return n10 || (n10 = qe(e13.doc, t7.line)), Vr(e13, n10, Nr(e13, n10, t7.ch, i9), r6);
  }
  function qr(e13, t7, r6, n10, i9, o10) {
    function a5(t8, a6) {
      var l10 = Dr(e13, i9, t8, a6 ? "right" : "left", o10);
      return a6 ? l10.left = l10.right : l10.right = l10.left, Vr(e13, n10, l10, r6);
    }
    n10 = n10 || qe(e13.doc, t7.line), i9 || (i9 = Er(e13, n10));
    var l9 = fe(n10, e13.doc.direction), s7 = t7.ch, c4 = t7.sticky;
    if (s7 >= n10.text.length ? (s7 = n10.text.length, c4 = "before") : s7 <= 0 && (s7 = 0, c4 = "after"), !l9)
      return a5("before" == c4 ? s7 - 1 : s7, "before" == c4);
    function u4(e14, t8, r7) {
      return a5(r7 ? e14 - 1 : e14, 1 == l9[t8].level != r7);
    }
    var d4 = ue(l9, s7, c4), f3 = ce, h4 = u4(s7, d4, "before" == c4);
    return null != f3 && (h4.other = u4(s7, f3, "before" != c4)), h4;
  }
  function Xr(e13, t7) {
    var r6 = 0;
    t7 = ut(e13.doc, t7), e13.options.lineWrapping || (r6 = ln(e13.display) * t7.ch);
    var n10 = qe(e13.doc, t7.line), i9 = Vt(n10) + Tr(e13.display);
    return { left: r6, right: r6, top: i9, bottom: i9 + n10.height };
  }
  function Yr(e13, t7, r6, n10, i9) {
    var o10 = nt(e13, t7, r6);
    return o10.xRel = i9, n10 && (o10.outside = n10), o10;
  }
  function Qr(e13, t7, r6) {
    var n10 = e13.doc;
    if ((r6 += e13.display.viewOffset) < 0)
      return Yr(n10.first, 0, null, -1, -1);
    var i9 = et(n10, r6), o10 = n10.first + n10.size - 1;
    if (i9 > o10)
      return Yr(n10.first + n10.size - 1, qe(n10, o10).text.length, null, 1, 1);
    t7 < 0 && (t7 = 0);
    for (var a5 = qe(n10, i9); ; ) {
      var l9 = rn(e13, a5, i9, t7, r6), s7 = Ht(a5, l9.ch + (l9.xRel > 0 || l9.outside > 0 ? 1 : 0));
      if (!s7)
        return l9;
      var c4 = s7.find(1);
      if (c4.line == i9)
        return c4;
      a5 = qe(n10, i9 = c4.line);
    }
  }
  function Jr(e13, t7, r6, n10) {
    n10 -= Ur(t7);
    var i9 = t7.text.length, o10 = se(function(t8) {
      return Dr(e13, r6, t8 - 1).bottom <= n10;
    }, i9, 0);
    return { begin: o10, end: i9 = se(function(t8) {
      return Dr(e13, r6, t8).top > n10;
    }, o10, i9) };
  }
  function en(e13, t7, r6, n10) {
    return r6 || (r6 = Er(e13, t7)), Jr(e13, t7, r6, Vr(e13, t7, Dr(e13, r6, n10), "line").top);
  }
  function tn(e13, t7, r6, n10) {
    return !(e13.bottom <= r6) && (e13.top > r6 || (n10 ? e13.left : e13.right) > t7);
  }
  function rn(e13, t7, r6, n10, i9) {
    i9 -= Vt(t7);
    var o10 = Er(e13, t7), a5 = Ur(t7), l9 = 0, s7 = t7.text.length, c4 = true, u4 = fe(t7, e13.doc.direction);
    if (u4) {
      var d4 = (e13.options.lineWrapping ? on : nn)(e13, t7, r6, o10, u4, n10, i9);
      l9 = (c4 = 1 != d4.level) ? d4.from : d4.to - 1, s7 = c4 ? d4.to : d4.from - 1;
    }
    var f3, h4, p3 = null, m3 = null, g3 = se(function(t8) {
      var r7 = Dr(e13, o10, t8);
      return r7.top += a5, r7.bottom += a5, !!tn(r7, n10, i9, false) && (r7.top <= i9 && r7.left <= n10 && (p3 = t8, m3 = r7), true);
    }, l9, s7), v3 = false;
    if (m3) {
      var y3 = n10 - m3.left < m3.right - n10, b3 = y3 == c4;
      g3 = p3 + (b3 ? 0 : 1), h4 = b3 ? "after" : "before", f3 = y3 ? m3.left : m3.right;
    } else {
      c4 || g3 != s7 && g3 != l9 || g3++, h4 = 0 == g3 ? "after" : g3 == t7.text.length ? "before" : Dr(e13, o10, g3 - (c4 ? 1 : 0)).bottom + a5 <= i9 == c4 ? "after" : "before";
      var w3 = qr(e13, nt(r6, g3, h4), "line", t7, o10);
      f3 = w3.left, v3 = i9 < w3.top ? -1 : i9 >= w3.bottom ? 1 : 0;
    }
    return Yr(r6, g3 = le(t7.text, g3, 1), h4, v3, n10 - f3);
  }
  function nn(e13, t7, r6, n10, i9, o10, a5) {
    var l9 = se(function(l10) {
      var s8 = i9[l10], c5 = 1 != s8.level;
      return tn(qr(e13, nt(r6, c5 ? s8.to : s8.from, c5 ? "before" : "after"), "line", t7, n10), o10, a5, true);
    }, 0, i9.length - 1), s7 = i9[l9];
    if (l9 > 0) {
      var c4 = 1 != s7.level, u4 = qr(e13, nt(r6, c4 ? s7.from : s7.to, c4 ? "after" : "before"), "line", t7, n10);
      tn(u4, o10, a5, true) && u4.top > a5 && (s7 = i9[l9 - 1]);
    }
    return s7;
  }
  function on(e13, t7, r6, n10, i9, o10, a5) {
    var l9 = Jr(e13, t7, n10, a5), s7 = l9.begin, c4 = l9.end;
    /\s/.test(t7.text.charAt(c4 - 1)) && c4--;
    for (var u4 = null, d4 = null, f3 = 0; f3 < i9.length; f3++) {
      var h4 = i9[f3];
      if (!(h4.from >= c4 || h4.to <= s7)) {
        var p3 = Dr(e13, n10, 1 != h4.level ? Math.min(c4, h4.to) - 1 : Math.max(s7, h4.from)).right, m3 = p3 < o10 ? o10 - p3 + 1e9 : p3 - o10;
        (!u4 || d4 > m3) && (u4 = h4, d4 = m3);
      }
    }
    return u4 || (u4 = i9[i9.length - 1]), u4.from < s7 && (u4 = { from: s7, to: u4.to, level: u4.level }), u4.to > c4 && (u4 = { from: u4.from, to: c4, level: u4.level }), u4;
  }
  function an(e13) {
    if (null != e13.cachedTextHeight)
      return e13.cachedTextHeight;
    if (null == Wr) {
      Wr = O("pre", null, "CodeMirror-line-like");
      for (var t7 = 0; t7 < 49; ++t7)
        Wr.appendChild(document.createTextNode("x")), Wr.appendChild(O("br"));
      Wr.appendChild(document.createTextNode("x"));
    }
    z2(e13.measure, Wr);
    var r6 = Wr.offsetHeight / 50;
    return r6 > 3 && (e13.cachedTextHeight = r6), M2(e13.measure), r6 || 1;
  }
  function ln(e13) {
    if (null != e13.cachedCharWidth)
      return e13.cachedCharWidth;
    var t7 = O("span", "xxxxxxxxxx"), r6 = O("pre", [t7], "CodeMirror-line-like");
    z2(e13.measure, r6);
    var n10 = t7.getBoundingClientRect(), i9 = (n10.right - n10.left) / 10;
    return i9 > 2 && (e13.cachedCharWidth = i9), i9 || 10;
  }
  function sn(e13) {
    for (var t7 = e13.display, r6 = {}, n10 = {}, i9 = t7.gutters.clientLeft, o10 = t7.gutters.firstChild, a5 = 0; o10; o10 = o10.nextSibling, ++a5) {
      var l9 = e13.display.gutterSpecs[a5].className;
      r6[l9] = o10.offsetLeft + o10.clientLeft + i9, n10[l9] = o10.clientWidth;
    }
    return { fixedPos: cn(t7), gutterTotalWidth: t7.gutters.offsetWidth, gutterLeft: r6, gutterWidth: n10, wrapperWidth: t7.wrapper.clientWidth };
  }
  function cn(e13) {
    return e13.scroller.getBoundingClientRect().left - e13.sizer.getBoundingClientRect().left;
  }
  function un(e13) {
    var t7 = an(e13.display), r6 = e13.options.lineWrapping, n10 = r6 && Math.max(5, e13.display.scroller.clientWidth / ln(e13.display) - 3);
    return function(i9) {
      if (jt(e13.doc, i9))
        return 0;
      var o10 = 0;
      if (i9.widgets)
        for (var a5 = 0; a5 < i9.widgets.length; a5++)
          i9.widgets[a5].height && (o10 += i9.widgets[a5].height);
      return r6 ? o10 + (Math.ceil(i9.text.length / n10) || 1) * t7 : o10 + t7;
    };
  }
  function dn(e13) {
    var t7 = e13.doc, r6 = un(e13);
    t7.iter(function(e14) {
      var t8 = r6(e14);
      t8 != e14.height && Qe(e14, t8);
    });
  }
  function fn2(e13, t7, r6, n10) {
    var i9 = e13.display;
    if (!r6 && "true" == Le(t7).getAttribute("cm-not-content"))
      return null;
    var o10, a5, l9 = i9.lineSpace.getBoundingClientRect();
    try {
      o10 = t7.clientX - l9.left, a5 = t7.clientY - l9.top;
    } catch (e14) {
      return null;
    }
    var s7, c4 = Qr(e13, o10, a5);
    if (n10 && c4.xRel > 0 && (s7 = qe(e13.doc, c4.line).text).length == c4.ch) {
      var u4 = $2(s7, s7.length, e13.options.tabSize) - s7.length;
      c4 = nt(c4.line, Math.max(0, Math.round((o10 - Ar(e13.display).left) / ln(e13.display)) - u4));
    }
    return c4;
  }
  function hn(e13, t7) {
    if (t7 >= e13.display.viewTo)
      return null;
    if ((t7 -= e13.display.viewFrom) < 0)
      return null;
    for (var r6 = e13.display.view, n10 = 0; n10 < r6.length; n10++)
      if ((t7 -= r6[n10].size) < 0)
        return n10;
  }
  function pn(e13, t7, r6, n10) {
    null == t7 && (t7 = e13.doc.first), null == r6 && (r6 = e13.doc.first + e13.doc.size), n10 || (n10 = 0);
    var i9 = e13.display;
    if (n10 && r6 < i9.viewTo && (null == i9.updateLineNumbers || i9.updateLineNumbers > t7) && (i9.updateLineNumbers = t7), e13.curOp.viewChanged = true, t7 >= i9.viewTo)
      Tt && Rt(e13.doc, t7) < i9.viewTo && gn(e13);
    else if (r6 <= i9.viewFrom)
      Tt && Zt(e13.doc, r6 + n10) > i9.viewFrom ? gn(e13) : (i9.viewFrom += n10, i9.viewTo += n10);
    else if (t7 <= i9.viewFrom && r6 >= i9.viewTo)
      gn(e13);
    else if (t7 <= i9.viewFrom) {
      var o10 = vn(e13, r6, r6 + n10, 1);
      o10 ? (i9.view = i9.view.slice(o10.index), i9.viewFrom = o10.lineN, i9.viewTo += n10) : gn(e13);
    } else if (r6 >= i9.viewTo) {
      var a5 = vn(e13, t7, t7, -1);
      a5 ? (i9.view = i9.view.slice(0, a5.index), i9.viewTo = a5.lineN) : gn(e13);
    } else {
      var l9 = vn(e13, t7, t7, -1), s7 = vn(e13, r6, r6 + n10, 1);
      l9 && s7 ? (i9.view = i9.view.slice(0, l9.index).concat(lr(e13, l9.lineN, s7.lineN)).concat(i9.view.slice(s7.index)), i9.viewTo += n10) : gn(e13);
    }
    var c4 = i9.externalMeasured;
    c4 && (r6 < c4.lineN ? c4.lineN += n10 : t7 < c4.lineN + c4.size && (i9.externalMeasured = null));
  }
  function mn(e13, t7, r6) {
    e13.curOp.viewChanged = true;
    var n10 = e13.display, i9 = e13.display.externalMeasured;
    if (i9 && t7 >= i9.lineN && t7 < i9.lineN + i9.size && (n10.externalMeasured = null), !(t7 < n10.viewFrom || t7 >= n10.viewTo)) {
      var o10 = n10.view[hn(e13, t7)];
      if (null != o10.node) {
        var a5 = o10.changes || (o10.changes = []);
        -1 == Z2(a5, r6) && a5.push(r6);
      }
    }
  }
  function gn(e13) {
    e13.display.viewFrom = e13.display.viewTo = e13.doc.first, e13.display.view = [], e13.display.viewOffset = 0;
  }
  function vn(e13, t7, r6, n10) {
    var i9, o10 = hn(e13, t7), a5 = e13.display.view;
    if (!Tt || r6 == e13.doc.first + e13.doc.size)
      return { index: o10, lineN: r6 };
    for (var l9 = e13.display.viewFrom, s7 = 0; s7 < o10; s7++)
      l9 += a5[s7].size;
    if (l9 != t7) {
      if (n10 > 0) {
        if (o10 == a5.length - 1)
          return null;
        i9 = l9 + a5[o10].size - t7, o10++;
      } else
        i9 = l9 - t7;
      t7 += i9, r6 += i9;
    }
    for (; Rt(e13.doc, r6) != r6; ) {
      if (o10 == (n10 < 0 ? 0 : a5.length - 1))
        return null;
      r6 += n10 * a5[o10 - (n10 < 0 ? 1 : 0)].size, o10 += n10;
    }
    return { index: o10, lineN: r6 };
  }
  function yn(e13) {
    for (var t7 = e13.display.view, r6 = 0, n10 = 0; n10 < t7.length; n10++) {
      var i9 = t7[n10];
      i9.hidden || i9.node && !i9.changes || ++r6;
    }
    return r6;
  }
  function bn(e13) {
    e13.display.input.showSelection(e13.display.input.prepareSelection());
  }
  function wn(e13, t7) {
    void 0 === t7 && (t7 = true);
    var r6 = e13.doc, n10 = {}, i9 = n10.cursors = document.createDocumentFragment(), o10 = n10.selection = document.createDocumentFragment(), a5 = e13.options.$customCursor;
    a5 && (t7 = true);
    for (var l9 = 0; l9 < r6.sel.ranges.length; l9++)
      if (t7 || l9 != r6.sel.primIndex) {
        var s7 = r6.sel.ranges[l9];
        if (!(s7.from().line >= e13.display.viewTo || s7.to().line < e13.display.viewFrom)) {
          var c4 = s7.empty();
          if (a5) {
            var u4 = a5(e13, s7);
            u4 && kn(e13, u4, i9);
          } else
            (c4 || e13.options.showCursorWhenSelecting) && kn(e13, s7.head, i9);
          c4 || Cn(e13, s7, o10);
        }
      }
    return n10;
  }
  function kn(e13, t7, r6) {
    var n10 = qr(e13, t7, "div", null, null, !e13.options.singleCursorHeightPerLine), i9 = r6.appendChild(O("div", "\xA0", "CodeMirror-cursor"));
    if (i9.style.left = n10.left + "px", i9.style.top = n10.top + "px", i9.style.height = Math.max(0, n10.bottom - n10.top) * e13.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e13.getWrapperElement().className)) {
      var o10 = Gr(e13, t7, "div", null, null), a5 = o10.right - o10.left;
      i9.style.width = (a5 > 0 ? a5 : e13.defaultCharWidth()) + "px";
    }
    if (n10.other) {
      var l9 = r6.appendChild(O("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      l9.style.display = "", l9.style.left = n10.other.left + "px", l9.style.top = n10.other.top + "px", l9.style.height = 0.85 * (n10.other.bottom - n10.other.top) + "px";
    }
  }
  function xn(e13, t7) {
    return e13.top - t7.top || e13.left - t7.left;
  }
  function Cn(e13, t7, r6) {
    var n10 = e13.display, i9 = e13.doc, o10 = document.createDocumentFragment(), a5 = Ar(e13.display), l9 = a5.left, s7 = Math.max(n10.sizerWidth, zr(e13) - n10.sizer.offsetLeft) - a5.right, c4 = "ltr" == i9.direction;
    function u4(e14, t8, r7, n11) {
      t8 < 0 && (t8 = 0), t8 = Math.round(t8), n11 = Math.round(n11), o10.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + e14 + "px;\n                             top: " + t8 + "px; width: " + (null == r7 ? s7 - e14 : r7) + "px;\n                             height: " + (n11 - t8) + "px"));
    }
    function d4(t8, r7, n11) {
      var o11, a6, d5 = qe(i9, t8), f4 = d5.text.length;
      function h5(r8, n12) {
        return Gr(e13, nt(t8, r8), "div", d5, n12);
      }
      function p4(t9, r8, n12) {
        var i10 = en(e13, d5, null, t9), o12 = "ltr" == r8 == ("after" == n12) ? "left" : "right";
        return h5("after" == n12 ? i10.begin : i10.end - (/\s/.test(d5.text.charAt(i10.end - 1)) ? 2 : 1), o12)[o12];
      }
      var m4 = fe(d5, i9.direction);
      return function(e14, t9, r8, n12) {
        if (!e14)
          return n12(t9, r8, "ltr", 0);
        for (var i10 = false, o12 = 0; o12 < e14.length; ++o12) {
          var a7 = e14[o12];
          (a7.from < r8 && a7.to > t9 || t9 == r8 && a7.to == t9) && (n12(Math.max(a7.from, t9), Math.min(a7.to, r8), 1 == a7.level ? "rtl" : "ltr", o12), i10 = true);
        }
        i10 || n12(t9, r8, "ltr");
      }(m4, r7 || 0, null == n11 ? f4 : n11, function(e14, t9, i10, d6) {
        var g4 = "ltr" == i10, v4 = h5(e14, g4 ? "left" : "right"), y4 = h5(t9 - 1, g4 ? "right" : "left"), b3 = null == r7 && 0 == e14, w3 = null == n11 && t9 == f4, k3 = 0 == d6, x3 = !m4 || d6 == m4.length - 1;
        if (y4.top - v4.top <= 3) {
          var C3 = (c4 ? w3 : b3) && x3, S4 = (c4 ? b3 : w3) && k3 ? l9 : (g4 ? v4 : y4).left, T3 = C3 ? s7 : (g4 ? y4 : v4).right;
          u4(S4, v4.top, T3 - S4, v4.bottom);
        } else {
          var L3, A3, M3, z3;
          g4 ? (L3 = c4 && b3 && k3 ? l9 : v4.left, A3 = c4 ? s7 : p4(e14, i10, "before"), M3 = c4 ? l9 : p4(t9, i10, "after"), z3 = c4 && w3 && x3 ? s7 : y4.right) : (L3 = c4 ? p4(e14, i10, "before") : l9, A3 = !c4 && b3 && k3 ? s7 : v4.right, M3 = !c4 && w3 && x3 ? l9 : y4.left, z3 = c4 ? p4(t9, i10, "after") : s7), u4(L3, v4.top, A3 - L3, v4.bottom), v4.bottom < y4.top && u4(l9, v4.bottom, null, y4.top), u4(M3, y4.top, z3 - M3, y4.bottom);
        }
        (!o11 || xn(v4, o11) < 0) && (o11 = v4), xn(y4, o11) < 0 && (o11 = y4), (!a6 || xn(v4, a6) < 0) && (a6 = v4), xn(y4, a6) < 0 && (a6 = y4);
      }), { start: o11, end: a6 };
    }
    var f3 = t7.from(), h4 = t7.to();
    if (f3.line == h4.line)
      d4(f3.line, f3.ch, h4.ch);
    else {
      var p3 = qe(i9, f3.line), m3 = qe(i9, h4.line), g3 = $t(p3) == $t(m3), v3 = d4(f3.line, f3.ch, g3 ? p3.text.length + 1 : null).end, y3 = d4(h4.line, g3 ? 0 : null, h4.ch).start;
      g3 && (v3.top < y3.top - 2 ? (u4(v3.right, v3.top, null, v3.bottom), u4(l9, y3.top, y3.left, y3.bottom)) : u4(v3.right, v3.top, y3.left - v3.right, v3.bottom)), v3.bottom < y3.top && u4(l9, v3.bottom, null, y3.top);
    }
    r6.appendChild(o10);
  }
  function Sn(e13) {
    if (e13.state.focused) {
      var t7 = e13.display;
      clearInterval(t7.blinker);
      var r6 = true;
      t7.cursorDiv.style.visibility = "", e13.options.cursorBlinkRate > 0 ? t7.blinker = setInterval(function() {
        e13.hasFocus() || Mn(e13), t7.cursorDiv.style.visibility = (r6 = !r6) ? "" : "hidden";
      }, e13.options.cursorBlinkRate) : e13.options.cursorBlinkRate < 0 && (t7.cursorDiv.style.visibility = "hidden");
    }
  }
  function Tn(e13) {
    e13.hasFocus() || (e13.display.input.focus(), e13.state.focused || An(e13));
  }
  function Ln(e13) {
    e13.state.delayingBlurEvent = true, setTimeout(function() {
      e13.state.delayingBlurEvent && (e13.state.delayingBlurEvent = false, e13.state.focused && Mn(e13));
    }, 100);
  }
  function An(e13, t7) {
    e13.state.delayingBlurEvent && !e13.state.draggingText && (e13.state.delayingBlurEvent = false), "nocursor" != e13.options.readOnly && (e13.state.focused || (ve(e13, "focus", e13, t7), e13.state.focused = true, E2(e13.display.wrapper, "CodeMirror-focused"), e13.curOp || e13.display.selForContextMenu == e13.doc.sel || (e13.display.input.reset(), s6 && setTimeout(function() {
      return e13.display.input.reset(true);
    }, 20)), e13.display.input.receivedFocus()), Sn(e13));
  }
  function Mn(e13, t7) {
    e13.state.delayingBlurEvent || (e13.state.focused && (ve(e13, "blur", e13, t7), e13.state.focused = false, A2(e13.display.wrapper, "CodeMirror-focused")), clearInterval(e13.display.blinker), setTimeout(function() {
      e13.state.focused || (e13.display.shift = false);
    }, 150));
  }
  function zn(e13) {
    for (var t7 = e13.display, r6 = t7.lineDiv.offsetTop, n10 = Math.max(0, t7.scroller.getBoundingClientRect().top), i9 = t7.lineDiv.getBoundingClientRect().top, o10 = 0, s7 = 0; s7 < t7.view.length; s7++) {
      var c4 = t7.view[s7], u4 = e13.options.lineWrapping, d4 = void 0, f3 = 0;
      if (!c4.hidden) {
        if (i9 += c4.line.height, a4 && l8 < 8) {
          var h4 = c4.node.offsetTop + c4.node.offsetHeight;
          d4 = h4 - r6, r6 = h4;
        } else {
          var p3 = c4.node.getBoundingClientRect();
          d4 = p3.bottom - p3.top, !u4 && c4.text.firstChild && (f3 = c4.text.firstChild.getBoundingClientRect().right - p3.left - 1);
        }
        var m3 = c4.line.height - d4;
        if ((m3 > 5e-3 || m3 < -5e-3) && (i9 < n10 && (o10 -= m3), Qe(c4.line, d4), On(c4.line), c4.rest))
          for (var g3 = 0; g3 < c4.rest.length; g3++)
            On(c4.rest[g3]);
        if (f3 > e13.display.sizerWidth) {
          var v3 = Math.ceil(f3 / ln(e13.display));
          v3 > e13.display.maxLineLength && (e13.display.maxLineLength = v3, e13.display.maxLine = c4.line, e13.display.maxLineChanged = true);
        }
      }
    }
    Math.abs(o10) > 2 && (t7.scroller.scrollTop += o10);
  }
  function On(e13) {
    if (e13.widgets)
      for (var t7 = 0; t7 < e13.widgets.length; ++t7) {
        var r6 = e13.widgets[t7], n10 = r6.node.parentNode;
        n10 && (r6.height = n10.offsetHeight);
      }
  }
  function _n(e13, t7, r6) {
    var n10 = r6 && null != r6.top ? Math.max(0, r6.top) : e13.scroller.scrollTop;
    n10 = Math.floor(n10 - Tr(e13));
    var i9 = r6 && null != r6.bottom ? r6.bottom : n10 + e13.wrapper.clientHeight, o10 = et(t7, n10), a5 = et(t7, i9);
    if (r6 && r6.ensure) {
      var l9 = r6.ensure.from.line, s7 = r6.ensure.to.line;
      l9 < o10 ? (o10 = l9, a5 = et(t7, Vt(qe(t7, l9)) + e13.wrapper.clientHeight)) : Math.min(s7, t7.lastLine()) >= a5 && (o10 = et(t7, Vt(qe(t7, s7)) - e13.wrapper.clientHeight), a5 = s7);
    }
    return { from: o10, to: Math.max(a5, o10 + 1) };
  }
  function Nn(e13, t7) {
    var r6 = e13.display, n10 = an(e13.display);
    t7.top < 0 && (t7.top = 0);
    var i9 = e13.curOp && null != e13.curOp.scrollTop ? e13.curOp.scrollTop : r6.scroller.scrollTop, o10 = Or(e13), a5 = {};
    t7.bottom - t7.top > o10 && (t7.bottom = t7.top + o10);
    var l9 = e13.doc.height + Lr(r6), s7 = t7.top < n10, c4 = t7.bottom > l9 - n10;
    if (t7.top < i9)
      a5.scrollTop = s7 ? 0 : t7.top;
    else if (t7.bottom > i9 + o10) {
      var u4 = Math.min(t7.top, (c4 ? l9 : t7.bottom) - o10);
      u4 != i9 && (a5.scrollTop = u4);
    }
    var d4 = e13.options.fixedGutter ? 0 : r6.gutters.offsetWidth, f3 = e13.curOp && null != e13.curOp.scrollLeft ? e13.curOp.scrollLeft : r6.scroller.scrollLeft - d4, h4 = zr(e13) - r6.gutters.offsetWidth, p3 = t7.right - t7.left > h4;
    return p3 && (t7.right = t7.left + h4), t7.left < 10 ? a5.scrollLeft = 0 : t7.left < f3 ? a5.scrollLeft = Math.max(0, t7.left + d4 - (p3 ? 0 : 10)) : t7.right > h4 + f3 - 3 && (a5.scrollLeft = t7.right + (p3 ? 0 : 10) - h4), a5;
  }
  function Pn(e13, t7) {
    null != t7 && (Wn(e13), e13.curOp.scrollTop = (null == e13.curOp.scrollTop ? e13.doc.scrollTop : e13.curOp.scrollTop) + t7);
  }
  function En(e13) {
    Wn(e13);
    var t7 = e13.getCursor();
    e13.curOp.scrollToPos = { from: t7, to: t7, margin: e13.options.cursorScrollMargin };
  }
  function Dn(e13, t7, r6) {
    null == t7 && null == r6 || Wn(e13), null != t7 && (e13.curOp.scrollLeft = t7), null != r6 && (e13.curOp.scrollTop = r6);
  }
  function Wn(e13) {
    var t7 = e13.curOp.scrollToPos;
    t7 && (e13.curOp.scrollToPos = null, Fn(e13, Xr(e13, t7.from), Xr(e13, t7.to), t7.margin));
  }
  function Fn(e13, t7, r6, n10) {
    var i9 = Nn(e13, { left: Math.min(t7.left, r6.left), top: Math.min(t7.top, r6.top) - n10, right: Math.max(t7.right, r6.right), bottom: Math.max(t7.bottom, r6.bottom) + n10 });
    Dn(e13, i9.scrollLeft, i9.scrollTop);
  }
  function In(e13, t7) {
    Math.abs(e13.doc.scrollTop - t7) < 2 || (r5 || fi(e13, { top: t7 }), Hn(e13, t7, true), r5 && fi(e13), ai(e13, 100));
  }
  function Hn(e13, t7, r6) {
    t7 = Math.max(0, Math.min(e13.display.scroller.scrollHeight - e13.display.scroller.clientHeight, t7)), (e13.display.scroller.scrollTop != t7 || r6) && (e13.doc.scrollTop = t7, e13.display.scrollbars.setScrollTop(t7), e13.display.scroller.scrollTop != t7 && (e13.display.scroller.scrollTop = t7));
  }
  function Bn(e13, t7, r6, n10) {
    t7 = Math.max(0, Math.min(t7, e13.display.scroller.scrollWidth - e13.display.scroller.clientWidth)), (r6 ? t7 == e13.doc.scrollLeft : Math.abs(e13.doc.scrollLeft - t7) < 2) && !n10 || (e13.doc.scrollLeft = t7, mi(e13), e13.display.scroller.scrollLeft != t7 && (e13.display.scroller.scrollLeft = t7), e13.display.scrollbars.setScrollLeft(t7));
  }
  function $n(e13) {
    var t7 = e13.display, r6 = t7.gutters.offsetWidth, n10 = Math.round(e13.doc.height + Lr(e13.display));
    return { clientHeight: t7.scroller.clientHeight, viewHeight: t7.wrapper.clientHeight, scrollWidth: t7.scroller.scrollWidth, clientWidth: t7.scroller.clientWidth, viewWidth: t7.wrapper.clientWidth, barLeft: e13.options.fixedGutter ? r6 : 0, docHeight: n10, scrollHeight: n10 + Mr(e13) + t7.barHeight, nativeBarWidth: t7.nativeBarWidth, gutterWidth: r6 };
  }
  var Rn = function(e13, t7, r6) {
    this.cm = r6;
    var n10 = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), i9 = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    n10.tabIndex = i9.tabIndex = -1, e13(n10), e13(i9), pe(n10, "scroll", function() {
      n10.clientHeight && t7(n10.scrollTop, "vertical");
    }), pe(i9, "scroll", function() {
      i9.clientWidth && t7(i9.scrollLeft, "horizontal");
    }), this.checkedZeroWidth = false, a4 && l8 < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
  };
  Rn.prototype.update = function(e13) {
    var t7 = e13.scrollWidth > e13.clientWidth + 1, r6 = e13.scrollHeight > e13.clientHeight + 1, n10 = e13.nativeBarWidth;
    if (r6) {
      this.vert.style.display = "block", this.vert.style.bottom = t7 ? n10 + "px" : "0";
      var i9 = e13.viewHeight - (t7 ? n10 : 0);
      this.vert.firstChild.style.height = Math.max(0, e13.scrollHeight - e13.clientHeight + i9) + "px";
    } else
      this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
    if (t7) {
      this.horiz.style.display = "block", this.horiz.style.right = r6 ? n10 + "px" : "0", this.horiz.style.left = e13.barLeft + "px";
      var o10 = e13.viewWidth - e13.barLeft - (r6 ? n10 : 0);
      this.horiz.firstChild.style.width = Math.max(0, e13.scrollWidth - e13.clientWidth + o10) + "px";
    } else
      this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
    return !this.checkedZeroWidth && e13.clientHeight > 0 && (0 == n10 && this.zeroWidthHack(), this.checkedZeroWidth = true), { right: r6 ? n10 : 0, bottom: t7 ? n10 : 0 };
  }, Rn.prototype.setScrollLeft = function(e13) {
    this.horiz.scrollLeft != e13 && (this.horiz.scrollLeft = e13), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
  }, Rn.prototype.setScrollTop = function(e13) {
    this.vert.scrollTop != e13 && (this.vert.scrollTop = e13), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
  }, Rn.prototype.zeroWidthHack = function() {
    var e13 = b2 && !p2 ? "12px" : "18px";
    this.horiz.style.height = this.vert.style.width = e13, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new R2(), this.disableVert = new R2();
  }, Rn.prototype.enableZeroWidthBar = function(e13, t7, r6) {
    e13.style.visibility = "", t7.set(1e3, function n10() {
      var i9 = e13.getBoundingClientRect();
      ("vert" == r6 ? document.elementFromPoint(i9.right - 1, (i9.top + i9.bottom) / 2) : document.elementFromPoint((i9.right + i9.left) / 2, i9.bottom - 1)) != e13 ? e13.style.visibility = "hidden" : t7.set(1e3, n10);
    });
  }, Rn.prototype.clear = function() {
    var e13 = this.horiz.parentNode;
    e13.removeChild(this.horiz), e13.removeChild(this.vert);
  };
  var Zn = function() {
  };
  function jn(e13, t7) {
    t7 || (t7 = $n(e13));
    var r6 = e13.display.barWidth, n10 = e13.display.barHeight;
    Un(e13, t7);
    for (var i9 = 0; i9 < 4 && r6 != e13.display.barWidth || n10 != e13.display.barHeight; i9++)
      r6 != e13.display.barWidth && e13.options.lineWrapping && zn(e13), Un(e13, $n(e13)), r6 = e13.display.barWidth, n10 = e13.display.barHeight;
  }
  function Un(e13, t7) {
    var r6 = e13.display, n10 = r6.scrollbars.update(t7);
    r6.sizer.style.paddingRight = (r6.barWidth = n10.right) + "px", r6.sizer.style.paddingBottom = (r6.barHeight = n10.bottom) + "px", r6.heightForcer.style.borderBottom = n10.bottom + "px solid transparent", n10.right && n10.bottom ? (r6.scrollbarFiller.style.display = "block", r6.scrollbarFiller.style.height = n10.bottom + "px", r6.scrollbarFiller.style.width = n10.right + "px") : r6.scrollbarFiller.style.display = "", n10.bottom && e13.options.coverGutterNextToScrollbar && e13.options.fixedGutter ? (r6.gutterFiller.style.display = "block", r6.gutterFiller.style.height = n10.bottom + "px", r6.gutterFiller.style.width = t7.gutterWidth + "px") : r6.gutterFiller.style.display = "";
  }
  Zn.prototype.update = function() {
    return { bottom: 0, right: 0 };
  }, Zn.prototype.setScrollLeft = function() {
  }, Zn.prototype.setScrollTop = function() {
  }, Zn.prototype.clear = function() {
  };
  var Vn = { native: Rn, null: Zn };
  function Kn(e13) {
    e13.display.scrollbars && (e13.display.scrollbars.clear(), e13.display.scrollbars.addClass && A2(e13.display.wrapper, e13.display.scrollbars.addClass)), e13.display.scrollbars = new Vn[e13.options.scrollbarStyle](function(t7) {
      e13.display.wrapper.insertBefore(t7, e13.display.scrollbarFiller), pe(t7, "mousedown", function() {
        e13.state.focused && setTimeout(function() {
          return e13.display.input.focus();
        }, 0);
      }), t7.setAttribute("cm-not-content", "true");
    }, function(t7, r6) {
      "horizontal" == r6 ? Bn(e13, t7) : In(e13, t7);
    }, e13), e13.display.scrollbars.addClass && E2(e13.display.wrapper, e13.display.scrollbars.addClass);
  }
  var Gn = 0;
  function qn(e13) {
    var t7;
    e13.curOp = { cm: e13, viewChanged: false, startHeight: e13.doc.height, forceUpdate: false, updateInput: 0, typing: false, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: false, updateMaxLine: false, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: false, id: ++Gn, markArrays: null }, t7 = e13.curOp, sr ? sr.ops.push(t7) : t7.ownsGroup = sr = { ops: [t7], delayedCallbacks: [] };
  }
  function Xn(e13) {
    var t7 = e13.curOp;
    t7 && function(e14, t8) {
      var r6 = e14.ownsGroup;
      if (r6)
        try {
          !function(e15) {
            var t9 = e15.delayedCallbacks, r7 = 0;
            do {
              for (; r7 < t9.length; r7++)
                t9[r7].call(null);
              for (var n10 = 0; n10 < e15.ops.length; n10++) {
                var i9 = e15.ops[n10];
                if (i9.cursorActivityHandlers)
                  for (; i9.cursorActivityCalled < i9.cursorActivityHandlers.length; )
                    i9.cursorActivityHandlers[i9.cursorActivityCalled++].call(null, i9.cm);
              }
            } while (r7 < t9.length);
          }(r6);
        } finally {
          sr = null, function(e15) {
            for (var t9 = 0; t9 < e15.ops.length; t9++)
              e15.ops[t9].cm.curOp = null;
            !function(e16) {
              for (var t10 = e16.ops, r7 = 0; r7 < t10.length; r7++)
                Yn(t10[r7]);
              for (var n10 = 0; n10 < t10.length; n10++)
                Qn(t10[n10]);
              for (var i9 = 0; i9 < t10.length; i9++)
                Jn(t10[i9]);
              for (var o10 = 0; o10 < t10.length; o10++)
                ei(t10[o10]);
              for (var a5 = 0; a5 < t10.length; a5++)
                ti(t10[a5]);
            }(e15);
          }(r6);
        }
    }(t7);
  }
  function Yn(e13) {
    var t7 = e13.cm, r6 = t7.display;
    !function(e14) {
      var t8 = e14.display;
      !t8.scrollbarsClipped && t8.scroller.offsetWidth && (t8.nativeBarWidth = t8.scroller.offsetWidth - t8.scroller.clientWidth, t8.heightForcer.style.height = Mr(e14) + "px", t8.sizer.style.marginBottom = -t8.nativeBarWidth + "px", t8.sizer.style.borderRightWidth = Mr(e14) + "px", t8.scrollbarsClipped = true);
    }(t7), e13.updateMaxLine && Gt(t7), e13.mustUpdate = e13.viewChanged || e13.forceUpdate || null != e13.scrollTop || e13.scrollToPos && (e13.scrollToPos.from.line < r6.viewFrom || e13.scrollToPos.to.line >= r6.viewTo) || r6.maxLineChanged && t7.options.lineWrapping, e13.update = e13.mustUpdate && new si(t7, e13.mustUpdate && { top: e13.scrollTop, ensure: e13.scrollToPos }, e13.forceUpdate);
  }
  function Qn(e13) {
    e13.updatedDisplay = e13.mustUpdate && ui(e13.cm, e13.update);
  }
  function Jn(e13) {
    var t7 = e13.cm, r6 = t7.display;
    e13.updatedDisplay && zn(t7), e13.barMeasure = $n(t7), r6.maxLineChanged && !t7.options.lineWrapping && (e13.adjustWidthTo = Nr(t7, r6.maxLine, r6.maxLine.text.length).left + 3, t7.display.sizerWidth = e13.adjustWidthTo, e13.barMeasure.scrollWidth = Math.max(r6.scroller.clientWidth, r6.sizer.offsetLeft + e13.adjustWidthTo + Mr(t7) + t7.display.barWidth), e13.maxScrollLeft = Math.max(0, r6.sizer.offsetLeft + e13.adjustWidthTo - zr(t7))), (e13.updatedDisplay || e13.selectionChanged) && (e13.preparedSelection = r6.input.prepareSelection());
  }
  function ei(e13) {
    var t7 = e13.cm;
    null != e13.adjustWidthTo && (t7.display.sizer.style.minWidth = e13.adjustWidthTo + "px", e13.maxScrollLeft < t7.doc.scrollLeft && Bn(t7, Math.min(t7.display.scroller.scrollLeft, e13.maxScrollLeft), true), t7.display.maxLineChanged = false);
    var r6 = e13.focus && e13.focus == P2(F(t7));
    e13.preparedSelection && t7.display.input.showSelection(e13.preparedSelection, r6), (e13.updatedDisplay || e13.startHeight != t7.doc.height) && jn(t7, e13.barMeasure), e13.updatedDisplay && pi(t7, e13.barMeasure), e13.selectionChanged && Sn(t7), t7.state.focused && e13.updateInput && t7.display.input.reset(e13.typing), r6 && Tn(e13.cm);
  }
  function ti(e13) {
    var t7 = e13.cm, r6 = t7.display, n10 = t7.doc;
    if (e13.updatedDisplay && di(t7, e13.update), null == r6.wheelStartX || null == e13.scrollTop && null == e13.scrollLeft && !e13.scrollToPos || (r6.wheelStartX = r6.wheelStartY = null), null != e13.scrollTop && Hn(t7, e13.scrollTop, e13.forceScroll), null != e13.scrollLeft && Bn(t7, e13.scrollLeft, true, true), e13.scrollToPos) {
      var i9 = function(e14, t8, r7, n11) {
        var i10;
        null == n11 && (n11 = 0), e14.options.lineWrapping || t8 != r7 || (r7 = "before" == t8.sticky ? nt(t8.line, t8.ch + 1, "before") : t8, t8 = t8.ch ? nt(t8.line, "before" == t8.sticky ? t8.ch - 1 : t8.ch, "after") : t8);
        for (var o11 = 0; o11 < 5; o11++) {
          var a6 = false, l10 = qr(e14, t8), s8 = r7 && r7 != t8 ? qr(e14, r7) : l10, c4 = Nn(e14, i10 = { left: Math.min(l10.left, s8.left), top: Math.min(l10.top, s8.top) - n11, right: Math.max(l10.left, s8.left), bottom: Math.max(l10.bottom, s8.bottom) + n11 }), u4 = e14.doc.scrollTop, d4 = e14.doc.scrollLeft;
          if (null != c4.scrollTop && (In(e14, c4.scrollTop), Math.abs(e14.doc.scrollTop - u4) > 1 && (a6 = true)), null != c4.scrollLeft && (Bn(e14, c4.scrollLeft), Math.abs(e14.doc.scrollLeft - d4) > 1 && (a6 = true)), !a6)
            break;
        }
        return i10;
      }(t7, ut(n10, e13.scrollToPos.from), ut(n10, e13.scrollToPos.to), e13.scrollToPos.margin);
      !function(e14, t8) {
        if (!ye(e14, "scrollCursorIntoView")) {
          var r7 = e14.display, n11 = r7.sizer.getBoundingClientRect(), i10 = null, o11 = r7.wrapper.ownerDocument;
          if (t8.top + n11.top < 0 ? i10 = true : t8.bottom + n11.top > (o11.defaultView.innerHeight || o11.documentElement.clientHeight) && (i10 = false), null != i10 && !m2) {
            var a6 = O("div", "\u200B", null, "position: absolute;\n                         top: " + (t8.top - r7.viewOffset - Tr(e14.display)) + "px;\n                         height: " + (t8.bottom - t8.top + Mr(e14) + r7.barHeight) + "px;\n                         left: " + t8.left + "px; width: " + Math.max(2, t8.right - t8.left) + "px;");
            e14.display.lineSpace.appendChild(a6), a6.scrollIntoView(i10), e14.display.lineSpace.removeChild(a6);
          }
        }
      }(t7, i9);
    }
    var o10 = e13.maybeHiddenMarkers, a5 = e13.maybeUnhiddenMarkers;
    if (o10)
      for (var l9 = 0; l9 < o10.length; ++l9)
        o10[l9].lines.length || ve(o10[l9], "hide");
    if (a5)
      for (var s7 = 0; s7 < a5.length; ++s7)
        a5[s7].lines.length && ve(a5[s7], "unhide");
    r6.wrapper.offsetHeight && (n10.scrollTop = t7.display.scroller.scrollTop), e13.changeObjs && ve(t7, "changes", t7, e13.changeObjs), e13.update && e13.update.finish();
  }
  function ri(e13, t7) {
    if (e13.curOp)
      return t7();
    qn(e13);
    try {
      return t7();
    } finally {
      Xn(e13);
    }
  }
  function ni(e13, t7) {
    return function() {
      if (e13.curOp)
        return t7.apply(e13, arguments);
      qn(e13);
      try {
        return t7.apply(e13, arguments);
      } finally {
        Xn(e13);
      }
    };
  }
  function ii(e13) {
    return function() {
      if (this.curOp)
        return e13.apply(this, arguments);
      qn(this);
      try {
        return e13.apply(this, arguments);
      } finally {
        Xn(this);
      }
    };
  }
  function oi(e13) {
    return function() {
      var t7 = this.cm;
      if (!t7 || t7.curOp)
        return e13.apply(this, arguments);
      qn(t7);
      try {
        return e13.apply(this, arguments);
      } finally {
        Xn(t7);
      }
    };
  }
  function ai(e13, t7) {
    e13.doc.highlightFrontier < e13.display.viewTo && e13.state.highlight.set(t7, H2(li, e13));
  }
  function li(e13) {
    var t7 = e13.doc;
    if (!(t7.highlightFrontier >= e13.display.viewTo)) {
      var r6 = +/* @__PURE__ */ new Date() + e13.options.workTime, n10 = gt(e13, t7.highlightFrontier), i9 = [];
      t7.iter(n10.line, Math.min(t7.first + t7.size, e13.display.viewTo + 500), function(o10) {
        if (n10.line >= e13.display.viewFrom) {
          var a5 = o10.styles, l9 = o10.text.length > e13.options.maxHighlightLength ? Ue(t7.mode, n10.state) : null, s7 = pt(e13, o10, n10, true);
          l9 && (n10.state = l9), o10.styles = s7.styles;
          var c4 = o10.styleClasses, u4 = s7.classes;
          u4 ? o10.styleClasses = u4 : c4 && (o10.styleClasses = null);
          for (var d4 = !a5 || a5.length != o10.styles.length || c4 != u4 && (!c4 || !u4 || c4.bgClass != u4.bgClass || c4.textClass != u4.textClass), f3 = 0; !d4 && f3 < a5.length; ++f3)
            d4 = a5[f3] != o10.styles[f3];
          d4 && i9.push(n10.line), o10.stateAfter = n10.save(), n10.nextLine();
        } else
          o10.text.length <= e13.options.maxHighlightLength && vt(e13, o10.text, n10), o10.stateAfter = n10.line % 5 == 0 ? n10.save() : null, n10.nextLine();
        if (+/* @__PURE__ */ new Date() > r6)
          return ai(e13, e13.options.workDelay), true;
      }), t7.highlightFrontier = n10.line, t7.modeFrontier = Math.max(t7.modeFrontier, n10.line), i9.length && ri(e13, function() {
        for (var t8 = 0; t8 < i9.length; t8++)
          mn(e13, i9[t8], "text");
      });
    }
  }
  var si = function(e13, t7, r6) {
    var n10 = e13.display;
    this.viewport = t7, this.visible = _n(n10, e13.doc, t7), this.editorIsHidden = !n10.wrapper.offsetWidth, this.wrapperHeight = n10.wrapper.clientHeight, this.wrapperWidth = n10.wrapper.clientWidth, this.oldDisplayWidth = zr(e13), this.force = r6, this.dims = sn(e13), this.events = [];
  };
  function ci(e13) {
    if (e13.hasFocus())
      return null;
    var t7 = P2(F(e13));
    if (!t7 || !N2(e13.display.lineDiv, t7))
      return null;
    var r6 = { activeElt: t7 };
    if (window.getSelection) {
      var n10 = I2(e13).getSelection();
      n10.anchorNode && n10.extend && N2(e13.display.lineDiv, n10.anchorNode) && (r6.anchorNode = n10.anchorNode, r6.anchorOffset = n10.anchorOffset, r6.focusNode = n10.focusNode, r6.focusOffset = n10.focusOffset);
    }
    return r6;
  }
  function ui(e13, t7) {
    var r6 = e13.display, n10 = e13.doc;
    if (t7.editorIsHidden)
      return gn(e13), false;
    if (!t7.force && t7.visible.from >= r6.viewFrom && t7.visible.to <= r6.viewTo && (null == r6.updateLineNumbers || r6.updateLineNumbers >= r6.viewTo) && r6.renderedView == r6.view && 0 == yn(e13))
      return false;
    gi(e13) && (gn(e13), t7.dims = sn(e13));
    var i9 = n10.first + n10.size, o10 = Math.max(t7.visible.from - e13.options.viewportMargin, n10.first), a5 = Math.min(i9, t7.visible.to + e13.options.viewportMargin);
    r6.viewFrom < o10 && o10 - r6.viewFrom < 20 && (o10 = Math.max(n10.first, r6.viewFrom)), r6.viewTo > a5 && r6.viewTo - a5 < 20 && (a5 = Math.min(i9, r6.viewTo)), Tt && (o10 = Rt(e13.doc, o10), a5 = Zt(e13.doc, a5));
    var l9 = o10 != r6.viewFrom || a5 != r6.viewTo || r6.lastWrapHeight != t7.wrapperHeight || r6.lastWrapWidth != t7.wrapperWidth;
    !function(e14, t8, r7) {
      var n11 = e14.display;
      0 == n11.view.length || t8 >= n11.viewTo || r7 <= n11.viewFrom ? (n11.view = lr(e14, t8, r7), n11.viewFrom = t8) : (n11.viewFrom > t8 ? n11.view = lr(e14, t8, n11.viewFrom).concat(n11.view) : n11.viewFrom < t8 && (n11.view = n11.view.slice(hn(e14, t8))), n11.viewFrom = t8, n11.viewTo < r7 ? n11.view = n11.view.concat(lr(e14, n11.viewTo, r7)) : n11.viewTo > r7 && (n11.view = n11.view.slice(0, hn(e14, r7)))), n11.viewTo = r7;
    }(e13, o10, a5), r6.viewOffset = Vt(qe(e13.doc, r6.viewFrom)), e13.display.mover.style.top = r6.viewOffset + "px";
    var c4 = yn(e13);
    if (!l9 && 0 == c4 && !t7.force && r6.renderedView == r6.view && (null == r6.updateLineNumbers || r6.updateLineNumbers >= r6.viewTo))
      return false;
    var u4 = ci(e13);
    return c4 > 4 && (r6.lineDiv.style.display = "none"), function(e14, t8, r7) {
      var n11 = e14.display, i10 = e14.options.lineNumbers, o11 = n11.lineDiv, a6 = o11.firstChild;
      function l10(t9) {
        var r8 = t9.nextSibling;
        return s6 && b2 && e14.display.currentWheelTarget == t9 ? t9.style.display = "none" : t9.parentNode.removeChild(t9), r8;
      }
      for (var c5 = n11.view, u5 = n11.viewFrom, d4 = 0; d4 < c5.length; d4++) {
        var f3 = c5[d4];
        if (f3.hidden)
          ;
        else if (f3.node && f3.node.parentNode == o11) {
          for (; a6 != f3.node; )
            a6 = l10(a6);
          var h4 = i10 && null != t8 && t8 <= u5 && f3.lineNumber;
          f3.changes && (Z2(f3.changes, "gutter") > -1 && (h4 = false), fr(e14, f3, u5, r7)), h4 && (M2(f3.lineNumber), f3.lineNumber.appendChild(document.createTextNode(rt(e14.options, u5)))), a6 = f3.node.nextSibling;
        } else {
          var p3 = br(e14, f3, u5, r7);
          o11.insertBefore(p3, a6);
        }
        u5 += f3.size;
      }
      for (; a6; )
        a6 = l10(a6);
    }(e13, r6.updateLineNumbers, t7.dims), c4 > 4 && (r6.lineDiv.style.display = ""), r6.renderedView = r6.view, function(e14) {
      if (e14 && e14.activeElt && e14.activeElt != P2(e14.activeElt.ownerDocument) && (e14.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e14.activeElt.nodeName) && e14.anchorNode && N2(document.body, e14.anchorNode) && N2(document.body, e14.focusNode))) {
        var t8 = e14.activeElt.ownerDocument, r7 = t8.defaultView.getSelection(), n11 = t8.createRange();
        n11.setEnd(e14.anchorNode, e14.anchorOffset), n11.collapse(false), r7.removeAllRanges(), r7.addRange(n11), r7.extend(e14.focusNode, e14.focusOffset);
      }
    }(u4), M2(r6.cursorDiv), M2(r6.selectionDiv), r6.gutters.style.height = r6.sizer.style.minHeight = 0, l9 && (r6.lastWrapHeight = t7.wrapperHeight, r6.lastWrapWidth = t7.wrapperWidth, ai(e13, 400)), r6.updateLineNumbers = null, true;
  }
  function di(e13, t7) {
    for (var r6 = t7.viewport, n10 = true; ; n10 = false) {
      if (n10 && e13.options.lineWrapping && t7.oldDisplayWidth != zr(e13))
        n10 && (t7.visible = _n(e13.display, e13.doc, r6));
      else if (r6 && null != r6.top && (r6 = { top: Math.min(e13.doc.height + Lr(e13.display) - Or(e13), r6.top) }), t7.visible = _n(e13.display, e13.doc, r6), t7.visible.from >= e13.display.viewFrom && t7.visible.to <= e13.display.viewTo)
        break;
      if (!ui(e13, t7))
        break;
      zn(e13);
      var i9 = $n(e13);
      bn(e13), jn(e13, i9), pi(e13, i9), t7.force = false;
    }
    t7.signal(e13, "update", e13), e13.display.viewFrom == e13.display.reportedViewFrom && e13.display.viewTo == e13.display.reportedViewTo || (t7.signal(e13, "viewportChange", e13, e13.display.viewFrom, e13.display.viewTo), e13.display.reportedViewFrom = e13.display.viewFrom, e13.display.reportedViewTo = e13.display.viewTo);
  }
  function fi(e13, t7) {
    var r6 = new si(e13, t7);
    if (ui(e13, r6)) {
      zn(e13), di(e13, r6);
      var n10 = $n(e13);
      bn(e13), jn(e13, n10), pi(e13, n10), r6.finish();
    }
  }
  function hi(e13) {
    var t7 = e13.gutters.offsetWidth;
    e13.sizer.style.marginLeft = t7 + "px", ur(e13, "gutterChanged", e13);
  }
  function pi(e13, t7) {
    e13.display.sizer.style.minHeight = t7.docHeight + "px", e13.display.heightForcer.style.top = t7.docHeight + "px", e13.display.gutters.style.height = t7.docHeight + e13.display.barHeight + Mr(e13) + "px";
  }
  function mi(e13) {
    var t7 = e13.display, r6 = t7.view;
    if (t7.alignWidgets || t7.gutters.firstChild && e13.options.fixedGutter) {
      for (var n10 = cn(t7) - t7.scroller.scrollLeft + e13.doc.scrollLeft, i9 = t7.gutters.offsetWidth, o10 = n10 + "px", a5 = 0; a5 < r6.length; a5++)
        if (!r6[a5].hidden) {
          e13.options.fixedGutter && (r6[a5].gutter && (r6[a5].gutter.style.left = o10), r6[a5].gutterBackground && (r6[a5].gutterBackground.style.left = o10));
          var l9 = r6[a5].alignable;
          if (l9)
            for (var s7 = 0; s7 < l9.length; s7++)
              l9[s7].style.left = o10;
        }
      e13.options.fixedGutter && (t7.gutters.style.left = n10 + i9 + "px");
    }
  }
  function gi(e13) {
    if (!e13.options.lineNumbers)
      return false;
    var t7 = e13.doc, r6 = rt(e13.options, t7.first + t7.size - 1), n10 = e13.display;
    if (r6.length != n10.lineNumChars) {
      var i9 = n10.measure.appendChild(O("div", [O("div", r6)], "CodeMirror-linenumber CodeMirror-gutter-elt")), o10 = i9.firstChild.offsetWidth, a5 = i9.offsetWidth - o10;
      return n10.lineGutter.style.width = "", n10.lineNumInnerWidth = Math.max(o10, n10.lineGutter.offsetWidth - a5) + 1, n10.lineNumWidth = n10.lineNumInnerWidth + a5, n10.lineNumChars = n10.lineNumInnerWidth ? r6.length : -1, n10.lineGutter.style.width = n10.lineNumWidth + "px", hi(e13.display), true;
    }
    return false;
  }
  function vi(e13, t7) {
    for (var r6 = [], n10 = false, i9 = 0; i9 < e13.length; i9++) {
      var o10 = e13[i9], a5 = null;
      if ("string" != typeof o10 && (a5 = o10.style, o10 = o10.className), "CodeMirror-linenumbers" == o10) {
        if (!t7)
          continue;
        n10 = true;
      }
      r6.push({ className: o10, style: a5 });
    }
    return t7 && !n10 && r6.push({ className: "CodeMirror-linenumbers", style: null }), r6;
  }
  function yi(e13) {
    var t7 = e13.gutters, r6 = e13.gutterSpecs;
    M2(t7), e13.lineGutter = null;
    for (var n10 = 0; n10 < r6.length; ++n10) {
      var i9 = r6[n10], o10 = i9.className, a5 = i9.style, l9 = t7.appendChild(O("div", null, "CodeMirror-gutter " + o10));
      a5 && (l9.style.cssText = a5), "CodeMirror-linenumbers" == o10 && (e13.lineGutter = l9, l9.style.width = (e13.lineNumWidth || 1) + "px");
    }
    t7.style.display = r6.length ? "" : "none", hi(e13);
  }
  function bi(e13) {
    yi(e13.display), pn(e13), mi(e13);
  }
  function wi(e13, t7, n10, i9) {
    var o10 = this;
    this.input = n10, o10.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), o10.scrollbarFiller.setAttribute("cm-not-content", "true"), o10.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), o10.gutterFiller.setAttribute("cm-not-content", "true"), o10.lineDiv = _2("div", null, "CodeMirror-code"), o10.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), o10.cursorDiv = O("div", null, "CodeMirror-cursors"), o10.measure = O("div", null, "CodeMirror-measure"), o10.lineMeasure = O("div", null, "CodeMirror-measure"), o10.lineSpace = _2("div", [o10.measure, o10.lineMeasure, o10.selectionDiv, o10.cursorDiv, o10.lineDiv], null, "position: relative; outline: none");
    var c4 = _2("div", [o10.lineSpace], "CodeMirror-lines");
    o10.mover = O("div", [c4], null, "position: relative"), o10.sizer = O("div", [o10.mover], "CodeMirror-sizer"), o10.sizerWidth = null, o10.heightForcer = O("div", null, null, "position: absolute; height: 50px; width: 1px;"), o10.gutters = O("div", null, "CodeMirror-gutters"), o10.lineGutter = null, o10.scroller = O("div", [o10.sizer, o10.heightForcer, o10.gutters], "CodeMirror-scroll"), o10.scroller.setAttribute("tabIndex", "-1"), o10.wrapper = O("div", [o10.scrollbarFiller, o10.gutterFiller, o10.scroller], "CodeMirror"), u3 && d3 >= 105 && (o10.wrapper.style.clipPath = "inset(0px)"), o10.wrapper.setAttribute("translate", "no"), a4 && l8 < 8 && (o10.gutters.style.zIndex = -1, o10.scroller.style.paddingRight = 0), s6 || r5 && y2 || (o10.scroller.draggable = true), e13 && (e13.appendChild ? e13.appendChild(o10.wrapper) : e13(o10.wrapper)), o10.viewFrom = o10.viewTo = t7.first, o10.reportedViewFrom = o10.reportedViewTo = t7.first, o10.view = [], o10.renderedView = null, o10.externalMeasured = null, o10.viewOffset = 0, o10.lastWrapHeight = o10.lastWrapWidth = 0, o10.updateLineNumbers = null, o10.nativeBarWidth = o10.barHeight = o10.barWidth = 0, o10.scrollbarsClipped = false, o10.lineNumWidth = o10.lineNumInnerWidth = o10.lineNumChars = null, o10.alignWidgets = false, o10.cachedCharWidth = o10.cachedTextHeight = o10.cachedPaddingH = null, o10.maxLine = null, o10.maxLineLength = 0, o10.maxLineChanged = false, o10.wheelDX = o10.wheelDY = o10.wheelStartX = o10.wheelStartY = null, o10.shift = false, o10.selForContextMenu = null, o10.activeTouch = null, o10.gutterSpecs = vi(i9.gutters, i9.lineNumbers), yi(o10), n10.init(o10);
  }
  si.prototype.signal = function(e13, t7) {
    we(e13, t7) && this.events.push(arguments);
  }, si.prototype.finish = function() {
    for (var e13 = 0; e13 < this.events.length; e13++)
      ve.apply(null, this.events[e13]);
  };
  var ki = 0, xi = null;
  function Ci(e13) {
    var t7 = e13.wheelDeltaX, r6 = e13.wheelDeltaY;
    return null == t7 && e13.detail && e13.axis == e13.HORIZONTAL_AXIS && (t7 = e13.detail), null == r6 && e13.detail && e13.axis == e13.VERTICAL_AXIS ? r6 = e13.detail : null == r6 && (r6 = e13.wheelDelta), { x: t7, y: r6 };
  }
  function Si(e13) {
    var t7 = Ci(e13);
    return t7.x *= xi, t7.y *= xi, t7;
  }
  function Ti(e13, t7) {
    u3 && 102 == d3 && (null == e13.display.chromeScrollHack ? e13.display.sizer.style.pointerEvents = "none" : clearTimeout(e13.display.chromeScrollHack), e13.display.chromeScrollHack = setTimeout(function() {
      e13.display.chromeScrollHack = null, e13.display.sizer.style.pointerEvents = "";
    }, 100));
    var n10 = Ci(t7), i9 = n10.x, o10 = n10.y, a5 = xi;
    0 === t7.deltaMode && (i9 = t7.deltaX, o10 = t7.deltaY, a5 = 1);
    var l9 = e13.display, c4 = l9.scroller, h4 = c4.scrollWidth > c4.clientWidth, p3 = c4.scrollHeight > c4.clientHeight;
    if (i9 && h4 || o10 && p3) {
      if (o10 && b2 && s6) {
        e:
          for (var m3 = t7.target, g3 = l9.view; m3 != c4; m3 = m3.parentNode)
            for (var v3 = 0; v3 < g3.length; v3++)
              if (g3[v3].node == m3) {
                e13.display.currentWheelTarget = m3;
                break e;
              }
      }
      if (i9 && !r5 && !f2 && null != a5)
        return o10 && p3 && In(e13, Math.max(0, c4.scrollTop + o10 * a5)), Bn(e13, Math.max(0, c4.scrollLeft + i9 * a5)), (!o10 || o10 && p3) && xe(t7), void (l9.wheelStartX = null);
      if (o10 && null != a5) {
        var y3 = o10 * a5, w3 = e13.doc.scrollTop, k3 = w3 + l9.wrapper.clientHeight;
        y3 < 0 ? w3 = Math.max(0, w3 + y3 - 50) : k3 = Math.min(e13.doc.height, k3 + y3 + 50), fi(e13, { top: w3, bottom: k3 });
      }
      ki < 20 && 0 !== t7.deltaMode && (null == l9.wheelStartX ? (l9.wheelStartX = c4.scrollLeft, l9.wheelStartY = c4.scrollTop, l9.wheelDX = i9, l9.wheelDY = o10, setTimeout(function() {
        if (null != l9.wheelStartX) {
          var e14 = c4.scrollLeft - l9.wheelStartX, t8 = c4.scrollTop - l9.wheelStartY, r6 = t8 && l9.wheelDY && t8 / l9.wheelDY || e14 && l9.wheelDX && e14 / l9.wheelDX;
          l9.wheelStartX = l9.wheelStartY = null, r6 && (xi = (xi * ki + r6) / (ki + 1), ++ki);
        }
      }, 200)) : (l9.wheelDX += i9, l9.wheelDY += o10));
    }
  }
  a4 ? xi = -0.53 : r5 ? xi = 15 : u3 ? xi = -0.7 : h3 && (xi = -1 / 3);
  var Li = function(e13, t7) {
    this.ranges = e13, this.primIndex = t7;
  };
  Li.prototype.primary = function() {
    return this.ranges[this.primIndex];
  }, Li.prototype.equals = function(e13) {
    if (e13 == this)
      return true;
    if (e13.primIndex != this.primIndex || e13.ranges.length != this.ranges.length)
      return false;
    for (var t7 = 0; t7 < this.ranges.length; t7++) {
      var r6 = this.ranges[t7], n10 = e13.ranges[t7];
      if (!ot(r6.anchor, n10.anchor) || !ot(r6.head, n10.head))
        return false;
    }
    return true;
  }, Li.prototype.deepCopy = function() {
    for (var e13 = [], t7 = 0; t7 < this.ranges.length; t7++)
      e13[t7] = new Ai(at(this.ranges[t7].anchor), at(this.ranges[t7].head));
    return new Li(e13, this.primIndex);
  }, Li.prototype.somethingSelected = function() {
    for (var e13 = 0; e13 < this.ranges.length; e13++)
      if (!this.ranges[e13].empty())
        return true;
    return false;
  }, Li.prototype.contains = function(e13, t7) {
    t7 || (t7 = e13);
    for (var r6 = 0; r6 < this.ranges.length; r6++) {
      var n10 = this.ranges[r6];
      if (it(t7, n10.from()) >= 0 && it(e13, n10.to()) <= 0)
        return r6;
    }
    return -1;
  };
  var Ai = function(e13, t7) {
    this.anchor = e13, this.head = t7;
  };
  function Mi(e13, t7, r6) {
    var n10 = e13 && e13.options.selectionsMayTouch, i9 = t7[r6];
    t7.sort(function(e14, t8) {
      return it(e14.from(), t8.from());
    }), r6 = Z2(t7, i9);
    for (var o10 = 1; o10 < t7.length; o10++) {
      var a5 = t7[o10], l9 = t7[o10 - 1], s7 = it(l9.to(), a5.from());
      if (n10 && !a5.empty() ? s7 > 0 : s7 >= 0) {
        var c4 = st(l9.from(), a5.from()), u4 = lt(l9.to(), a5.to()), d4 = l9.empty() ? a5.from() == a5.head : l9.from() == l9.head;
        o10 <= r6 && --r6, t7.splice(--o10, 2, new Ai(d4 ? u4 : c4, d4 ? c4 : u4));
      }
    }
    return new Li(t7, r6);
  }
  function zi(e13, t7) {
    return new Li([new Ai(e13, t7 || e13)], 0);
  }
  function Oi(e13) {
    return e13.text ? nt(e13.from.line + e13.text.length - 1, Y(e13.text).length + (1 == e13.text.length ? e13.from.ch : 0)) : e13.to;
  }
  function _i(e13, t7) {
    if (it(e13, t7.from) < 0)
      return e13;
    if (it(e13, t7.to) <= 0)
      return Oi(t7);
    var r6 = e13.line + t7.text.length - (t7.to.line - t7.from.line) - 1, n10 = e13.ch;
    return e13.line == t7.to.line && (n10 += Oi(t7).ch - t7.to.ch), nt(r6, n10);
  }
  function Ni(e13, t7) {
    for (var r6 = [], n10 = 0; n10 < e13.sel.ranges.length; n10++) {
      var i9 = e13.sel.ranges[n10];
      r6.push(new Ai(_i(i9.anchor, t7), _i(i9.head, t7)));
    }
    return Mi(e13.cm, r6, e13.sel.primIndex);
  }
  function Pi(e13, t7, r6) {
    return e13.line == t7.line ? nt(r6.line, e13.ch - t7.ch + r6.ch) : nt(r6.line + (e13.line - t7.line), e13.ch);
  }
  function Ei(e13) {
    e13.doc.mode = Re(e13.options, e13.doc.modeOption), Di(e13);
  }
  function Di(e13) {
    e13.doc.iter(function(e14) {
      e14.stateAfter && (e14.stateAfter = null), e14.styles && (e14.styles = null);
    }), e13.doc.modeFrontier = e13.doc.highlightFrontier = e13.doc.first, ai(e13, 100), e13.state.modeGen++, e13.curOp && pn(e13);
  }
  function Wi(e13, t7) {
    return 0 == t7.from.ch && 0 == t7.to.ch && "" == Y(t7.text) && (!e13.cm || e13.cm.options.wholeLineUpdateBefore);
  }
  function Fi(e13, t7, r6, n10) {
    function i9(e14) {
      return r6 ? r6[e14] : null;
    }
    function o10(e14, r7, i10) {
      !function(e15, t8, r8, n11) {
        e15.text = t8, e15.stateAfter && (e15.stateAfter = null), e15.styles && (e15.styles = null), null != e15.order && (e15.order = null), _t(e15), Nt(e15, r8);
        var i11 = n11 ? n11(e15) : 1;
        i11 != e15.height && Qe(e15, i11);
      }(e14, r7, i10, n10), ur(e14, "change", e14, t7);
    }
    function a5(e14, t8) {
      for (var r7 = [], o11 = e14; o11 < t8; ++o11)
        r7.push(new qt(c4[o11], i9(o11), n10));
      return r7;
    }
    var l9 = t7.from, s7 = t7.to, c4 = t7.text, u4 = qe(e13, l9.line), d4 = qe(e13, s7.line), f3 = Y(c4), h4 = i9(c4.length - 1), p3 = s7.line - l9.line;
    if (t7.full)
      e13.insert(0, a5(0, c4.length)), e13.remove(c4.length, e13.size - c4.length);
    else if (Wi(e13, t7)) {
      var m3 = a5(0, c4.length - 1);
      o10(d4, d4.text, h4), p3 && e13.remove(l9.line, p3), m3.length && e13.insert(l9.line, m3);
    } else if (u4 == d4)
      if (1 == c4.length)
        o10(u4, u4.text.slice(0, l9.ch) + f3 + u4.text.slice(s7.ch), h4);
      else {
        var g3 = a5(1, c4.length - 1);
        g3.push(new qt(f3 + u4.text.slice(s7.ch), h4, n10)), o10(u4, u4.text.slice(0, l9.ch) + c4[0], i9(0)), e13.insert(l9.line + 1, g3);
      }
    else if (1 == c4.length)
      o10(u4, u4.text.slice(0, l9.ch) + c4[0] + d4.text.slice(s7.ch), i9(0)), e13.remove(l9.line + 1, p3);
    else {
      o10(u4, u4.text.slice(0, l9.ch) + c4[0], i9(0)), o10(d4, f3 + d4.text.slice(s7.ch), h4);
      var v3 = a5(1, c4.length - 1);
      p3 > 1 && e13.remove(l9.line + 1, p3 - 1), e13.insert(l9.line + 1, v3);
    }
    ur(e13, "change", e13, t7);
  }
  function Ii(e13, t7, r6) {
    !function e14(n10, i9, o10) {
      if (n10.linked)
        for (var a5 = 0; a5 < n10.linked.length; ++a5) {
          var l9 = n10.linked[a5];
          if (l9.doc != i9) {
            var s7 = o10 && l9.sharedHist;
            r6 && !s7 || (t7(l9.doc, s7), e14(l9.doc, n10, s7));
          }
        }
    }(e13, null, true);
  }
  function Hi(e13, t7) {
    if (t7.cm)
      throw Error("This document is already in use.");
    e13.doc = t7, t7.cm = e13, dn(e13), Ei(e13), Bi(e13), e13.options.direction = t7.direction, e13.options.lineWrapping || Gt(e13), e13.options.mode = t7.modeOption, pn(e13);
  }
  function Bi(e13) {
    ("rtl" == e13.doc.direction ? E2 : A2)(e13.display.lineDiv, "CodeMirror-rtl");
  }
  function $i(e13) {
    this.done = [], this.undone = [], this.undoDepth = e13 ? e13.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e13 ? e13.maxGeneration : 1;
  }
  function Ri(e13, t7) {
    var r6 = { from: at(t7.from), to: Oi(t7), text: Xe(e13, t7.from, t7.to) };
    return Vi(e13, r6, t7.from.line, t7.to.line + 1), Ii(e13, function(e14) {
      return Vi(e14, r6, t7.from.line, t7.to.line + 1);
    }, true), r6;
  }
  function Zi(e13) {
    for (; e13.length && Y(e13).ranges; )
      e13.pop();
  }
  function ji(e13, t7, r6, n10) {
    var i9 = e13.history;
    i9.undone.length = 0;
    var o10, a5, l9 = +/* @__PURE__ */ new Date();
    if ((i9.lastOp == n10 || i9.lastOrigin == t7.origin && t7.origin && ("+" == t7.origin.charAt(0) && i9.lastModTime > l9 - (e13.cm ? e13.cm.options.historyEventDelay : 500) || "*" == t7.origin.charAt(0))) && (o10 = function(e14, t8) {
      return t8 ? (Zi(e14.done), Y(e14.done)) : e14.done.length && !Y(e14.done).ranges ? Y(e14.done) : e14.done.length > 1 && !e14.done[e14.done.length - 2].ranges ? (e14.done.pop(), Y(e14.done)) : void 0;
    }(i9, i9.lastOp == n10)))
      a5 = Y(o10.changes), 0 == it(t7.from, t7.to) && 0 == it(t7.from, a5.to) ? a5.to = Oi(t7) : o10.changes.push(Ri(e13, t7));
    else {
      var s7 = Y(i9.done);
      for (s7 && s7.ranges || Ui(e13.sel, i9.done), o10 = { changes: [Ri(e13, t7)], generation: i9.generation }, i9.done.push(o10); i9.done.length > i9.undoDepth; )
        i9.done.shift(), i9.done[0].ranges || i9.done.shift();
    }
    i9.done.push(r6), i9.generation = ++i9.maxGeneration, i9.lastModTime = i9.lastSelTime = l9, i9.lastOp = i9.lastSelOp = n10, i9.lastOrigin = i9.lastSelOrigin = t7.origin, a5 || ve(e13, "historyAdded");
  }
  function Ui(e13, t7) {
    var r6 = Y(t7);
    r6 && r6.ranges && r6.equals(e13) || t7.push(e13);
  }
  function Vi(e13, t7, r6, n10) {
    var i9 = t7["spans_" + e13.id], o10 = 0;
    e13.iter(Math.max(e13.first, r6), Math.min(e13.first + e13.size, n10), function(r7) {
      r7.markedSpans && ((i9 || (i9 = t7["spans_" + e13.id] = {}))[o10] = r7.markedSpans), ++o10;
    });
  }
  function Ki(e13) {
    if (!e13)
      return null;
    for (var t7, r6 = 0; r6 < e13.length; ++r6)
      e13[r6].marker.explicitlyCleared ? t7 || (t7 = e13.slice(0, r6)) : t7 && t7.push(e13[r6]);
    return t7 ? t7.length ? t7 : null : e13;
  }
  function Gi(e13, t7) {
    var r6 = function(e14, t8) {
      var r7 = t8["spans_" + e14.id];
      if (!r7)
        return null;
      for (var n11 = [], i10 = 0; i10 < t8.text.length; ++i10)
        n11.push(Ki(r7[i10]));
      return n11;
    }(e13, t7), n10 = zt(e13, t7);
    if (!r6)
      return n10;
    if (!n10)
      return r6;
    for (var i9 = 0; i9 < r6.length; ++i9) {
      var o10 = r6[i9], a5 = n10[i9];
      if (o10 && a5)
        e:
          for (var l9 = 0; l9 < a5.length; ++l9) {
            for (var s7 = a5[l9], c4 = 0; c4 < o10.length; ++c4)
              if (o10[c4].marker == s7.marker)
                continue e;
            o10.push(s7);
          }
      else
        a5 && (r6[i9] = a5);
    }
    return r6;
  }
  function qi(e13, t7, r6) {
    for (var n10 = [], i9 = 0; i9 < e13.length; ++i9) {
      var o10 = e13[i9];
      if (o10.ranges)
        n10.push(r6 ? Li.prototype.deepCopy.call(o10) : o10);
      else {
        var a5 = o10.changes, l9 = [];
        n10.push({ changes: l9 });
        for (var s7 = 0; s7 < a5.length; ++s7) {
          var c4 = a5[s7], u4 = void 0;
          if (l9.push({ from: c4.from, to: c4.to, text: c4.text }), t7)
            for (var d4 in c4)
              (u4 = d4.match(/^spans_(\d+)$/)) && Z2(t7, Number(u4[1])) > -1 && (Y(l9)[d4] = c4[d4], delete c4[d4]);
        }
      }
    }
    return n10;
  }
  function Xi(e13, t7, r6, n10) {
    if (n10) {
      var i9 = e13.anchor;
      if (r6) {
        var o10 = it(t7, i9) < 0;
        o10 != it(r6, i9) < 0 ? (i9 = t7, t7 = r6) : o10 != it(t7, r6) < 0 && (t7 = r6);
      }
      return new Ai(i9, t7);
    }
    return new Ai(r6 || t7, t7);
  }
  function Yi(e13, t7, r6, n10, i9) {
    null == i9 && (i9 = e13.cm && (e13.cm.display.shift || e13.extend)), ro(e13, new Li([Xi(e13.sel.primary(), t7, r6, i9)], 0), n10);
  }
  function Qi(e13, t7, r6) {
    for (var n10 = [], i9 = e13.cm && (e13.cm.display.shift || e13.extend), o10 = 0; o10 < e13.sel.ranges.length; o10++)
      n10[o10] = Xi(e13.sel.ranges[o10], t7[o10], null, i9);
    ro(e13, Mi(e13.cm, n10, e13.sel.primIndex), r6);
  }
  function Ji(e13, t7, r6, n10) {
    var i9 = e13.sel.ranges.slice(0);
    i9[t7] = r6, ro(e13, Mi(e13.cm, i9, e13.sel.primIndex), n10);
  }
  function eo(e13, t7, r6, n10) {
    ro(e13, zi(t7, r6), n10);
  }
  function to(e13, t7, r6) {
    var n10 = e13.history.done, i9 = Y(n10);
    i9 && i9.ranges ? (n10[n10.length - 1] = t7, no(e13, t7, r6)) : ro(e13, t7, r6);
  }
  function ro(e13, t7, r6) {
    no(e13, t7, r6), function(e14, t8, r7, n10) {
      var i9 = e14.history, o10 = n10 && n10.origin;
      r7 == i9.lastSelOp || o10 && i9.lastSelOrigin == o10 && (i9.lastModTime == i9.lastSelTime && i9.lastOrigin == o10 || function(e15, t9, r8, n11) {
        var i10 = t9.charAt(0);
        return "*" == i10 || "+" == i10 && r8.ranges.length == n11.ranges.length && r8.somethingSelected() == n11.somethingSelected() && /* @__PURE__ */ new Date() - e15.history.lastSelTime <= (e15.cm ? e15.cm.options.historyEventDelay : 500);
      }(e14, o10, Y(i9.done), t8)) ? i9.done[i9.done.length - 1] = t8 : Ui(t8, i9.done), i9.lastSelTime = +/* @__PURE__ */ new Date(), i9.lastSelOrigin = o10, i9.lastSelOp = r7, n10 && false !== n10.clearRedo && Zi(i9.undone);
    }(e13, e13.sel, e13.cm ? e13.cm.curOp.id : NaN, r6);
  }
  function no(e13, t7, r6) {
    (we(e13, "beforeSelectionChange") || e13.cm && we(e13.cm, "beforeSelectionChange")) && (t7 = function(e14, t8, r7) {
      var n11 = { ranges: t8.ranges, update: function(t9) {
        this.ranges = [];
        for (var r8 = 0; r8 < t9.length; r8++)
          this.ranges[r8] = new Ai(ut(e14, t9[r8].anchor), ut(e14, t9[r8].head));
      }, origin: r7 && r7.origin };
      return ve(e14, "beforeSelectionChange", e14, n11), e14.cm && ve(e14.cm, "beforeSelectionChange", e14.cm, n11), n11.ranges != t8.ranges ? Mi(e14.cm, n11.ranges, n11.ranges.length - 1) : t8;
    }(e13, t7, r6));
    var n10 = r6 && r6.bias || (it(t7.primary().head, e13.sel.primary().head) < 0 ? -1 : 1);
    io(e13, ao(e13, t7, n10, true)), r6 && false === r6.scroll || !e13.cm || "nocursor" == e13.cm.getOption("readOnly") || En(e13.cm);
  }
  function io(e13, t7) {
    t7.equals(e13.sel) || (e13.sel = t7, e13.cm && (e13.cm.curOp.updateInput = 1, e13.cm.curOp.selectionChanged = true, be(e13.cm)), ur(e13, "cursorActivity", e13));
  }
  function oo(e13) {
    io(e13, ao(e13, e13.sel, null, false));
  }
  function ao(e13, t7, r6, n10) {
    for (var i9, o10 = 0; o10 < t7.ranges.length; o10++) {
      var a5 = t7.ranges[o10], l9 = t7.ranges.length == e13.sel.ranges.length && e13.sel.ranges[o10], s7 = so(e13, a5.anchor, l9 && l9.anchor, r6, n10), c4 = a5.head == a5.anchor ? s7 : so(e13, a5.head, l9 && l9.head, r6, n10);
      (i9 || s7 != a5.anchor || c4 != a5.head) && (i9 || (i9 = t7.ranges.slice(0, o10)), i9[o10] = new Ai(s7, c4));
    }
    return i9 ? Mi(e13.cm, i9, t7.primIndex) : t7;
  }
  function lo(e13, t7, r6, n10, i9) {
    var o10 = qe(e13, t7.line);
    if (o10.markedSpans)
      for (var a5 = 0; a5 < o10.markedSpans.length; ++a5) {
        var l9 = o10.markedSpans[a5], s7 = l9.marker, c4 = "selectLeft" in s7 ? !s7.selectLeft : s7.inclusiveLeft, u4 = "selectRight" in s7 ? !s7.selectRight : s7.inclusiveRight;
        if ((null == l9.from || (c4 ? l9.from <= t7.ch : l9.from < t7.ch)) && (null == l9.to || (u4 ? l9.to >= t7.ch : l9.to > t7.ch))) {
          if (i9 && (ve(s7, "beforeCursorEnter"), s7.explicitlyCleared)) {
            if (o10.markedSpans) {
              --a5;
              continue;
            }
            break;
          }
          if (!s7.atomic)
            continue;
          if (r6) {
            var d4 = s7.find(n10 < 0 ? 1 : -1), f3 = void 0;
            if ((n10 < 0 ? u4 : c4) && (d4 = co(e13, d4, -n10, d4 && d4.line == t7.line ? o10 : null)), d4 && d4.line == t7.line && (f3 = it(d4, r6)) && (n10 < 0 ? f3 < 0 : f3 > 0))
              return lo(e13, d4, t7, n10, i9);
          }
          var h4 = s7.find(n10 < 0 ? -1 : 1);
          return (n10 < 0 ? c4 : u4) && (h4 = co(e13, h4, n10, h4.line == t7.line ? o10 : null)), h4 ? lo(e13, h4, t7, n10, i9) : null;
        }
      }
    return t7;
  }
  function so(e13, t7, r6, n10, i9) {
    var o10 = n10 || 1;
    return lo(e13, t7, r6, o10, i9) || !i9 && lo(e13, t7, r6, o10, true) || lo(e13, t7, r6, -o10, i9) || !i9 && lo(e13, t7, r6, -o10, true) || (e13.cantEdit = true, nt(e13.first, 0));
  }
  function co(e13, t7, r6, n10) {
    return r6 < 0 && 0 == t7.ch ? t7.line > e13.first ? ut(e13, nt(t7.line - 1)) : null : r6 > 0 && t7.ch == (n10 || qe(e13, t7.line)).text.length ? t7.line < e13.first + e13.size - 1 ? nt(t7.line + 1, 0) : null : new nt(t7.line, t7.ch + r6);
  }
  function uo(e13) {
    e13.setSelection(nt(e13.firstLine(), 0), nt(e13.lastLine()), U);
  }
  function fo(e13, t7, r6) {
    var n10 = { canceled: false, from: t7.from, to: t7.to, text: t7.text, origin: t7.origin, cancel: function() {
      return n10.canceled = true;
    } };
    return r6 && (n10.update = function(t8, r7, i9, o10) {
      t8 && (n10.from = ut(e13, t8)), r7 && (n10.to = ut(e13, r7)), i9 && (n10.text = i9), void 0 !== o10 && (n10.origin = o10);
    }), ve(e13, "beforeChange", e13, n10), e13.cm && ve(e13.cm, "beforeChange", e13.cm, n10), n10.canceled ? (e13.cm && (e13.cm.curOp.updateInput = 2), null) : { from: n10.from, to: n10.to, text: n10.text, origin: n10.origin };
  }
  function ho(e13, t7, r6) {
    if (e13.cm) {
      if (!e13.cm.curOp)
        return ni(e13.cm, ho)(e13, t7, r6);
      if (e13.cm.state.suppressEdits)
        return;
    }
    if (!(we(e13, "beforeChange") || e13.cm && we(e13.cm, "beforeChange")) || (t7 = fo(e13, t7, true))) {
      var n10 = St && !r6 && function(e14, t8, r7) {
        var n11 = null;
        if (e14.iter(t8.line, r7.line + 1, function(e15) {
          if (e15.markedSpans)
            for (var t9 = 0; t9 < e15.markedSpans.length; ++t9) {
              var r8 = e15.markedSpans[t9].marker;
              !r8.readOnly || n11 && -1 != Z2(n11, r8) || (n11 || (n11 = [])).push(r8);
            }
        }), !n11)
          return null;
        for (var i10 = [{ from: t8, to: r7 }], o10 = 0; o10 < n11.length; ++o10)
          for (var a5 = n11[o10], l9 = a5.find(0), s7 = 0; s7 < i10.length; ++s7) {
            var c4 = i10[s7];
            if (!(it(c4.to, l9.from) < 0 || it(c4.from, l9.to) > 0)) {
              var u4 = [s7, 1], d4 = it(c4.from, l9.from), f3 = it(c4.to, l9.to);
              (d4 < 0 || !a5.inclusiveLeft && !d4) && u4.push({ from: c4.from, to: l9.from }), (f3 > 0 || !a5.inclusiveRight && !f3) && u4.push({ from: l9.to, to: c4.to }), i10.splice.apply(i10, u4), s7 += u4.length - 3;
            }
          }
        return i10;
      }(e13, t7.from, t7.to);
      if (n10)
        for (var i9 = n10.length - 1; i9 >= 0; --i9)
          po(e13, { from: n10[i9].from, to: n10[i9].to, text: i9 ? [""] : t7.text, origin: t7.origin });
      else
        po(e13, t7);
    }
  }
  function po(e13, t7) {
    if (1 != t7.text.length || "" != t7.text[0] || 0 != it(t7.from, t7.to)) {
      var r6 = Ni(e13, t7);
      ji(e13, t7, r6, e13.cm ? e13.cm.curOp.id : NaN), vo(e13, t7, r6, zt(e13, t7));
      var n10 = [];
      Ii(e13, function(e14, r7) {
        r7 || -1 != Z2(n10, e14.history) || (ko(e14.history, t7), n10.push(e14.history)), vo(e14, t7, null, zt(e14, t7));
      });
    }
  }
  function mo(e13, t7, r6) {
    var n10 = e13.cm && e13.cm.state.suppressEdits;
    if (!n10 || r6) {
      for (var i9, o10 = e13.history, a5 = e13.sel, l9 = "undo" == t7 ? o10.done : o10.undone, s7 = "undo" == t7 ? o10.undone : o10.done, c4 = 0; c4 < l9.length && (i9 = l9[c4], r6 ? !i9.ranges || i9.equals(e13.sel) : i9.ranges); c4++)
        ;
      if (c4 != l9.length) {
        for (o10.lastOrigin = o10.lastSelOrigin = null; ; ) {
          if (!(i9 = l9.pop()).ranges) {
            if (n10)
              return void l9.push(i9);
            break;
          }
          if (Ui(i9, s7), r6 && !i9.equals(e13.sel))
            return void ro(e13, i9, { clearRedo: false });
          a5 = i9;
        }
        var u4 = [];
        Ui(a5, s7), s7.push({ changes: u4, generation: o10.generation }), o10.generation = i9.generation || ++o10.maxGeneration;
        for (var d4 = we(e13, "beforeChange") || e13.cm && we(e13.cm, "beforeChange"), f3 = function(r7) {
          var n11 = i9.changes[r7];
          if (n11.origin = t7, d4 && !fo(e13, n11, false))
            return l9.length = 0, {};
          u4.push(Ri(e13, n11));
          var o11 = r7 ? Ni(e13, n11) : Y(l9);
          vo(e13, n11, o11, Gi(e13, n11)), !r7 && e13.cm && e13.cm.scrollIntoView({ from: n11.from, to: Oi(n11) });
          var a6 = [];
          Ii(e13, function(e14, t8) {
            t8 || -1 != Z2(a6, e14.history) || (ko(e14.history, n11), a6.push(e14.history)), vo(e14, n11, null, Gi(e14, n11));
          });
        }, h4 = i9.changes.length - 1; h4 >= 0; --h4) {
          var p3 = f3(h4);
          if (p3)
            return p3.v;
        }
      }
    }
  }
  function go(e13, t7) {
    if (0 != t7 && (e13.first += t7, e13.sel = new Li(Q(e13.sel.ranges, function(e14) {
      return new Ai(nt(e14.anchor.line + t7, e14.anchor.ch), nt(e14.head.line + t7, e14.head.ch));
    }), e13.sel.primIndex), e13.cm)) {
      pn(e13.cm, e13.first, e13.first - t7, t7);
      for (var r6 = e13.cm.display, n10 = r6.viewFrom; n10 < r6.viewTo; n10++)
        mn(e13.cm, n10, "gutter");
    }
  }
  function vo(e13, t7, r6, n10) {
    if (e13.cm && !e13.cm.curOp)
      return ni(e13.cm, vo)(e13, t7, r6, n10);
    if (t7.to.line < e13.first)
      go(e13, t7.text.length - 1 - (t7.to.line - t7.from.line));
    else if (!(t7.from.line > e13.lastLine())) {
      if (t7.from.line < e13.first) {
        var i9 = t7.text.length - 1 - (e13.first - t7.from.line);
        go(e13, i9), t7 = { from: nt(e13.first, 0), to: nt(t7.to.line + i9, t7.to.ch), text: [Y(t7.text)], origin: t7.origin };
      }
      var o10 = e13.lastLine();
      t7.to.line > o10 && (t7 = { from: t7.from, to: nt(o10, qe(e13, o10).text.length), text: [t7.text[0]], origin: t7.origin }), t7.removed = Xe(e13, t7.from, t7.to), r6 || (r6 = Ni(e13, t7)), e13.cm ? function(e14, t8, r7) {
        var n11 = e14.doc, i10 = e14.display, o11 = t8.from, a5 = t8.to, l9 = false, s7 = o11.line;
        e14.options.lineWrapping || (s7 = Je($t(qe(n11, o11.line))), n11.iter(s7, a5.line + 1, function(e15) {
          if (e15 == i10.maxLine)
            return l9 = true, true;
        })), n11.sel.contains(t8.from, t8.to) > -1 && be(e14), Fi(n11, t8, r7, un(e14)), e14.options.lineWrapping || (n11.iter(s7, o11.line + t8.text.length, function(e15) {
          var t9 = Kt(e15);
          t9 > i10.maxLineLength && (i10.maxLine = e15, i10.maxLineLength = t9, i10.maxLineChanged = true, l9 = false);
        }), l9 && (e14.curOp.updateMaxLine = true)), function(e15, t9) {
          if (e15.modeFrontier = Math.min(e15.modeFrontier, t9), !(e15.highlightFrontier < t9 - 10)) {
            for (var r8 = e15.first, n12 = t9 - 1; n12 > r8; n12--) {
              var i11 = qe(e15, n12).stateAfter;
              if (i11 && (!(i11 instanceof ft) || n12 + i11.lookAhead < t9)) {
                r8 = n12 + 1;
                break;
              }
            }
            e15.highlightFrontier = Math.min(e15.highlightFrontier, r8);
          }
        }(n11, o11.line), ai(e14, 400);
        var c4 = t8.text.length - (a5.line - o11.line) - 1;
        t8.full ? pn(e14) : o11.line != a5.line || 1 != t8.text.length || Wi(e14.doc, t8) ? pn(e14, o11.line, a5.line + 1, c4) : mn(e14, o11.line, "text");
        var u4 = we(e14, "changes"), d4 = we(e14, "change");
        if (d4 || u4) {
          var f3 = { from: o11, to: a5, text: t8.text, removed: t8.removed, origin: t8.origin };
          d4 && ur(e14, "change", e14, f3), u4 && (e14.curOp.changeObjs || (e14.curOp.changeObjs = [])).push(f3);
        }
        e14.display.selForContextMenu = null;
      }(e13.cm, t7, n10) : Fi(e13, t7, n10), no(e13, r6, U), e13.cantEdit && so(e13, nt(e13.firstLine(), 0)) && (e13.cantEdit = false);
    }
  }
  function yo(e13, t7, r6, n10, i9) {
    var o10;
    n10 || (n10 = r6), it(n10, r6) < 0 && (r6 = (o10 = [n10, r6])[0], n10 = o10[1]), "string" == typeof t7 && (t7 = e13.splitLines(t7)), ho(e13, { from: r6, to: n10, text: t7, origin: i9 });
  }
  function bo(e13, t7, r6, n10) {
    r6 < e13.line ? e13.line += n10 : t7 < e13.line && (e13.line = t7, e13.ch = 0);
  }
  function wo(e13, t7, r6, n10) {
    for (var i9 = 0; i9 < e13.length; ++i9) {
      var o10 = e13[i9], a5 = true;
      if (o10.ranges) {
        o10.copied || ((o10 = e13[i9] = o10.deepCopy()).copied = true);
        for (var l9 = 0; l9 < o10.ranges.length; l9++)
          bo(o10.ranges[l9].anchor, t7, r6, n10), bo(o10.ranges[l9].head, t7, r6, n10);
      } else {
        for (var s7 = 0; s7 < o10.changes.length; ++s7) {
          var c4 = o10.changes[s7];
          if (r6 < c4.from.line)
            c4.from = nt(c4.from.line + n10, c4.from.ch), c4.to = nt(c4.to.line + n10, c4.to.ch);
          else if (t7 <= c4.to.line) {
            a5 = false;
            break;
          }
        }
        a5 || (e13.splice(0, i9 + 1), i9 = 0);
      }
    }
  }
  function ko(e13, t7) {
    var r6 = t7.from.line, n10 = t7.to.line, i9 = t7.text.length - (n10 - r6) - 1;
    wo(e13.done, r6, n10, i9), wo(e13.undone, r6, n10, i9);
  }
  function xo(e13, t7, r6, n10) {
    var i9 = t7, o10 = t7;
    return "number" == typeof t7 ? o10 = qe(e13, ct(e13, t7)) : i9 = Je(t7), null == i9 ? null : (n10(o10, i9) && e13.cm && mn(e13.cm, i9, r6), o10);
  }
  function Co(e13) {
    this.lines = e13, this.parent = null;
    for (var t7 = 0, r6 = 0; r6 < e13.length; ++r6)
      e13[r6].parent = this, t7 += e13[r6].height;
    this.height = t7;
  }
  function So(e13) {
    this.children = e13;
    for (var t7 = 0, r6 = 0, n10 = 0; n10 < e13.length; ++n10) {
      var i9 = e13[n10];
      t7 += i9.chunkSize(), r6 += i9.height, i9.parent = this;
    }
    this.size = t7, this.height = r6, this.parent = null;
  }
  Ai.prototype.from = function() {
    return st(this.anchor, this.head);
  }, Ai.prototype.to = function() {
    return lt(this.anchor, this.head);
  }, Ai.prototype.empty = function() {
    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
  }, Co.prototype = { chunkSize: function() {
    return this.lines.length;
  }, removeInner: function(e13, t7) {
    for (var r6 = e13, n10 = e13 + t7; r6 < n10; ++r6) {
      var i9 = this.lines[r6];
      this.height -= i9.height, Xt(i9), ur(i9, "delete");
    }
    this.lines.splice(e13, t7);
  }, collapse: function(e13) {
    e13.push.apply(e13, this.lines);
  }, insertInner: function(e13, t7, r6) {
    this.height += r6, this.lines = this.lines.slice(0, e13).concat(t7).concat(this.lines.slice(e13));
    for (var n10 = 0; n10 < t7.length; ++n10)
      t7[n10].parent = this;
  }, iterN: function(e13, t7, r6) {
    for (var n10 = e13 + t7; e13 < n10; ++e13)
      if (r6(this.lines[e13]))
        return true;
  } }, So.prototype = { chunkSize: function() {
    return this.size;
  }, removeInner: function(e13, t7) {
    this.size -= t7;
    for (var r6 = 0; r6 < this.children.length; ++r6) {
      var n10 = this.children[r6], i9 = n10.chunkSize();
      if (e13 < i9) {
        var o10 = Math.min(t7, i9 - e13), a5 = n10.height;
        if (n10.removeInner(e13, o10), this.height -= a5 - n10.height, i9 == o10 && (this.children.splice(r6--, 1), n10.parent = null), 0 == (t7 -= o10))
          break;
        e13 = 0;
      } else
        e13 -= i9;
    }
    if (this.size - t7 < 25 && (this.children.length > 1 || !(this.children[0] instanceof Co))) {
      var l9 = [];
      this.collapse(l9), this.children = [new Co(l9)], this.children[0].parent = this;
    }
  }, collapse: function(e13) {
    for (var t7 = 0; t7 < this.children.length; ++t7)
      this.children[t7].collapse(e13);
  }, insertInner: function(e13, t7, r6) {
    this.size += t7.length, this.height += r6;
    for (var n10 = 0; n10 < this.children.length; ++n10) {
      var i9 = this.children[n10], o10 = i9.chunkSize();
      if (e13 <= o10) {
        if (i9.insertInner(e13, t7, r6), i9.lines && i9.lines.length > 50) {
          for (var a5 = i9.lines.length % 25 + 25, l9 = a5; l9 < i9.lines.length; ) {
            var s7 = new Co(i9.lines.slice(l9, l9 += 25));
            i9.height -= s7.height, this.children.splice(++n10, 0, s7), s7.parent = this;
          }
          i9.lines = i9.lines.slice(0, a5), this.maybeSpill();
        }
        break;
      }
      e13 -= o10;
    }
  }, maybeSpill: function() {
    if (!(this.children.length <= 10)) {
      var e13 = this;
      do {
        var t7 = new So(e13.children.splice(e13.children.length - 5, 5));
        if (e13.parent) {
          e13.size -= t7.size, e13.height -= t7.height;
          var r6 = Z2(e13.parent.children, e13);
          e13.parent.children.splice(r6 + 1, 0, t7);
        } else {
          var n10 = new So(e13.children);
          n10.parent = e13, e13.children = [n10, t7], e13 = n10;
        }
        t7.parent = e13.parent;
      } while (e13.children.length > 10);
      e13.parent.maybeSpill();
    }
  }, iterN: function(e13, t7, r6) {
    for (var n10 = 0; n10 < this.children.length; ++n10) {
      var i9 = this.children[n10], o10 = i9.chunkSize();
      if (e13 < o10) {
        var a5 = Math.min(t7, o10 - e13);
        if (i9.iterN(e13, a5, r6))
          return true;
        if (0 == (t7 -= a5))
          break;
        e13 = 0;
      } else
        e13 -= o10;
    }
  } };
  var To = function(e13, t7, r6) {
    if (r6)
      for (var n10 in r6)
        r6.hasOwnProperty(n10) && (this[n10] = r6[n10]);
    this.doc = e13, this.node = t7;
  };
  function Lo(e13, t7, r6) {
    Vt(t7) < (e13.curOp && e13.curOp.scrollTop || e13.doc.scrollTop) && Pn(e13, r6);
  }
  To.prototype.clear = function() {
    var e13 = this.doc.cm, t7 = this.line.widgets, r6 = this.line, n10 = Je(r6);
    if (null != n10 && t7) {
      for (var i9 = 0; i9 < t7.length; ++i9)
        t7[i9] == this && t7.splice(i9--, 1);
      t7.length || (r6.widgets = null);
      var o10 = Cr(this);
      Qe(r6, Math.max(0, r6.height - o10)), e13 && (ri(e13, function() {
        Lo(e13, r6, -o10), mn(e13, n10, "widget");
      }), ur(e13, "lineWidgetCleared", e13, this, n10));
    }
  }, To.prototype.changed = function() {
    var e13 = this, t7 = this.height, r6 = this.doc.cm, n10 = this.line;
    this.height = null;
    var i9 = Cr(this) - t7;
    i9 && (jt(this.doc, n10) || Qe(n10, n10.height + i9), r6 && ri(r6, function() {
      r6.curOp.forceUpdate = true, Lo(r6, n10, i9), ur(r6, "lineWidgetChanged", r6, e13, Je(n10));
    }));
  }, ke(To);
  var Ao = 0, Mo = function(e13, t7) {
    this.lines = [], this.type = t7, this.doc = e13, this.id = ++Ao;
  };
  function zo(e13, t7, r6, n10, i9) {
    if (n10 && n10.shared)
      return function(e14, t8, r7, n11, i10) {
        (n11 = B2(n11)).shared = false;
        var o11 = [zo(e14, t8, r7, n11, i10)], a6 = o11[0], l10 = n11.widgetNode;
        return Ii(e14, function(e15) {
          l10 && (n11.widgetNode = l10.cloneNode(true)), o11.push(zo(e15, ut(e15, t8), ut(e15, r7), n11, i10));
          for (var s8 = 0; s8 < e15.linked.length; ++s8)
            if (e15.linked[s8].isParent)
              return;
          a6 = Y(o11);
        }), new Oo(o11, a6);
      }(e13, t7, r6, n10, i9);
    if (e13.cm && !e13.cm.curOp)
      return ni(e13.cm, zo)(e13, t7, r6, n10, i9);
    var o10 = new Mo(e13, i9), a5 = it(t7, r6);
    if (n10 && B2(n10, o10, false), a5 > 0 || 0 == a5 && false !== o10.clearWhenEmpty)
      return o10;
    if (o10.replacedWith && (o10.collapsed = true, o10.widgetNode = _2("span", [o10.replacedWith], "CodeMirror-widget"), n10.handleMouseEvents || o10.widgetNode.setAttribute("cm-ignore-events", "true"), n10.insertLeft && (o10.widgetNode.insertLeft = true)), o10.collapsed) {
      if (Bt(e13, t7.line, t7, r6, o10) || t7.line != r6.line && Bt(e13, r6.line, t7, r6, o10))
        throw Error("Inserting collapsed marker partially overlapping an existing one");
      Tt = true;
    }
    o10.addToHistory && ji(e13, { from: t7, to: r6, origin: "markText" }, e13.sel, NaN);
    var l9, s7 = t7.line, c4 = e13.cm;
    if (e13.iter(s7, r6.line + 1, function(n11) {
      c4 && o10.collapsed && !c4.options.lineWrapping && $t(n11) == c4.display.maxLine && (l9 = true), o10.collapsed && s7 != t7.line && Qe(n11, 0), function(e14, t8, r7) {
        var n12 = r7 && window.WeakSet && (r7.markedSpans || (r7.markedSpans = /* @__PURE__ */ new WeakSet()));
        n12 && e14.markedSpans && n12.has(e14.markedSpans) ? e14.markedSpans.push(t8) : (e14.markedSpans = e14.markedSpans ? e14.markedSpans.concat([t8]) : [t8], n12 && n12.add(e14.markedSpans)), t8.marker.attachLine(e14);
      }(n11, new Lt(o10, s7 == t7.line ? t7.ch : null, s7 == r6.line ? r6.ch : null), e13.cm && e13.cm.curOp), ++s7;
    }), o10.collapsed && e13.iter(t7.line, r6.line + 1, function(t8) {
      jt(e13, t8) && Qe(t8, 0);
    }), o10.clearOnEnter && pe(o10, "beforeCursorEnter", function() {
      return o10.clear();
    }), o10.readOnly && (St = true, (e13.history.done.length || e13.history.undone.length) && e13.clearHistory()), o10.collapsed && (o10.id = ++Ao, o10.atomic = true), c4) {
      if (l9 && (c4.curOp.updateMaxLine = true), o10.collapsed)
        pn(c4, t7.line, r6.line + 1);
      else if (o10.className || o10.startStyle || o10.endStyle || o10.css || o10.attributes || o10.title)
        for (var u4 = t7.line; u4 <= r6.line; u4++)
          mn(c4, u4, "text");
      o10.atomic && oo(c4.doc), ur(c4, "markerAdded", c4, o10);
    }
    return o10;
  }
  Mo.prototype.clear = function() {
    if (!this.explicitlyCleared) {
      var e13 = this.doc.cm, t7 = e13 && !e13.curOp;
      if (t7 && qn(e13), we(this, "clear")) {
        var r6 = this.find();
        r6 && ur(this, "clear", r6.from, r6.to);
      }
      for (var n10 = null, i9 = null, o10 = 0; o10 < this.lines.length; ++o10) {
        var a5 = this.lines[o10], l9 = At(a5.markedSpans, this);
        e13 && !this.collapsed ? mn(e13, Je(a5), "text") : e13 && (null != l9.to && (i9 = Je(a5)), null != l9.from && (n10 = Je(a5))), a5.markedSpans = Mt(a5.markedSpans, l9), null == l9.from && this.collapsed && !jt(this.doc, a5) && e13 && Qe(a5, an(e13.display));
      }
      if (e13 && this.collapsed && !e13.options.lineWrapping)
        for (var s7 = 0; s7 < this.lines.length; ++s7) {
          var c4 = $t(this.lines[s7]), u4 = Kt(c4);
          u4 > e13.display.maxLineLength && (e13.display.maxLine = c4, e13.display.maxLineLength = u4, e13.display.maxLineChanged = true);
        }
      null != n10 && e13 && this.collapsed && pn(e13, n10, i9 + 1), this.lines.length = 0, this.explicitlyCleared = true, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = false, e13 && oo(e13.doc)), e13 && ur(e13, "markerCleared", e13, this, n10, i9), t7 && Xn(e13), this.parent && this.parent.clear();
    }
  }, Mo.prototype.find = function(e13, t7) {
    var r6, n10;
    null == e13 && "bookmark" == this.type && (e13 = 1);
    for (var i9 = 0; i9 < this.lines.length; ++i9) {
      var o10 = this.lines[i9], a5 = At(o10.markedSpans, this);
      if (null != a5.from && (r6 = nt(t7 ? o10 : Je(o10), a5.from), -1 == e13))
        return r6;
      if (null != a5.to && (n10 = nt(t7 ? o10 : Je(o10), a5.to), 1 == e13))
        return n10;
    }
    return r6 && { from: r6, to: n10 };
  }, Mo.prototype.changed = function() {
    var e13 = this, t7 = this.find(-1, true), r6 = this, n10 = this.doc.cm;
    t7 && n10 && ri(n10, function() {
      var i9 = t7.line, o10 = Je(t7.line), a5 = Pr(n10, o10);
      if (a5 && (Br(a5), n10.curOp.selectionChanged = n10.curOp.forceUpdate = true), n10.curOp.updateMaxLine = true, !jt(r6.doc, i9) && null != r6.height) {
        var l9 = r6.height;
        r6.height = null;
        var s7 = Cr(r6) - l9;
        s7 && Qe(i9, i9.height + s7);
      }
      ur(n10, "markerChanged", n10, e13);
    });
  }, Mo.prototype.attachLine = function(e13) {
    if (!this.lines.length && this.doc.cm) {
      var t7 = this.doc.cm.curOp;
      t7.maybeHiddenMarkers && -1 != Z2(t7.maybeHiddenMarkers, this) || (t7.maybeUnhiddenMarkers || (t7.maybeUnhiddenMarkers = [])).push(this);
    }
    this.lines.push(e13);
  }, Mo.prototype.detachLine = function(e13) {
    if (this.lines.splice(Z2(this.lines, e13), 1), !this.lines.length && this.doc.cm) {
      var t7 = this.doc.cm.curOp;
      (t7.maybeHiddenMarkers || (t7.maybeHiddenMarkers = [])).push(this);
    }
  }, ke(Mo);
  var Oo = function(e13, t7) {
    this.markers = e13, this.primary = t7;
    for (var r6 = 0; r6 < e13.length; ++r6)
      e13[r6].parent = this;
  };
  function _o(e13) {
    return e13.findMarks(nt(e13.first, 0), e13.clipPos(nt(e13.lastLine())), function(e14) {
      return e14.parent;
    });
  }
  function No(e13) {
    for (var t7 = function(t8) {
      var r7 = e13[t8], n10 = [r7.primary.doc];
      Ii(r7.primary.doc, function(e14) {
        return n10.push(e14);
      });
      for (var i9 = 0; i9 < r7.markers.length; i9++) {
        var o10 = r7.markers[i9];
        -1 == Z2(n10, o10.doc) && (o10.parent = null, r7.markers.splice(i9--, 1));
      }
    }, r6 = 0; r6 < e13.length; r6++)
      t7(r6);
  }
  Oo.prototype.clear = function() {
    if (!this.explicitlyCleared) {
      this.explicitlyCleared = true;
      for (var e13 = 0; e13 < this.markers.length; ++e13)
        this.markers[e13].clear();
      ur(this, "clear");
    }
  }, Oo.prototype.find = function(e13, t7) {
    return this.primary.find(e13, t7);
  }, ke(Oo);
  var Po = 0, Eo = function(e13, t7, r6, n10, i9) {
    if (!(this instanceof Eo))
      return new Eo(e13, t7, r6, n10, i9);
    null == r6 && (r6 = 0), So.call(this, [new Co([new qt("", null)])]), this.first = r6, this.scrollTop = this.scrollLeft = 0, this.cantEdit = false, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r6;
    var o10 = nt(r6, 0);
    this.sel = zi(o10), this.history = new $i(null), this.id = ++Po, this.modeOption = t7, this.lineSep = n10, this.direction = "rtl" == i9 ? "rtl" : "ltr", this.extend = false, "string" == typeof e13 && (e13 = this.splitLines(e13)), Fi(this, { from: o10, to: o10, text: e13 }), ro(this, zi(o10), U);
  };
  Eo.prototype = ee(So.prototype, { constructor: Eo, iter: function(e13, t7, r6) {
    r6 ? this.iterN(e13 - this.first, t7 - e13, r6) : this.iterN(this.first, this.first + this.size, e13);
  }, insert: function(e13, t7) {
    for (var r6 = 0, n10 = 0; n10 < t7.length; ++n10)
      r6 += t7[n10].height;
    this.insertInner(e13 - this.first, t7, r6);
  }, remove: function(e13, t7) {
    this.removeInner(e13 - this.first, t7);
  }, getValue: function(e13) {
    var t7 = Ye(this, this.first, this.first + this.size);
    return false === e13 ? t7 : t7.join(e13 || this.lineSeparator());
  }, setValue: oi(function(e13) {
    var t7 = nt(this.first, 0), r6 = this.first + this.size - 1;
    ho(this, { from: t7, to: nt(r6, qe(this, r6).text.length), text: this.splitLines(e13), origin: "setValue", full: true }, true), this.cm && Dn(this.cm, 0, 0), ro(this, zi(t7), U);
  }), replaceRange: function(e13, t7, r6, n10) {
    yo(this, e13, t7 = ut(this, t7), r6 = r6 ? ut(this, r6) : t7, n10);
  }, getRange: function(e13, t7, r6) {
    var n10 = Xe(this, ut(this, e13), ut(this, t7));
    return false === r6 ? n10 : "" === r6 ? n10.join("") : n10.join(r6 || this.lineSeparator());
  }, getLine: function(e13) {
    var t7 = this.getLineHandle(e13);
    return t7 && t7.text;
  }, getLineHandle: function(e13) {
    if (tt(this, e13))
      return qe(this, e13);
  }, getLineNumber: function(e13) {
    return Je(e13);
  }, getLineHandleVisualStart: function(e13) {
    return "number" == typeof e13 && (e13 = qe(this, e13)), $t(e13);
  }, lineCount: function() {
    return this.size;
  }, firstLine: function() {
    return this.first;
  }, lastLine: function() {
    return this.first + this.size - 1;
  }, clipPos: function(e13) {
    return ut(this, e13);
  }, getCursor: function(e13) {
    var t7 = this.sel.primary();
    return null == e13 || "head" == e13 ? t7.head : "anchor" == e13 ? t7.anchor : "end" == e13 || "to" == e13 || false === e13 ? t7.to() : t7.from();
  }, listSelections: function() {
    return this.sel.ranges;
  }, somethingSelected: function() {
    return this.sel.somethingSelected();
  }, setCursor: oi(function(e13, t7, r6) {
    eo(this, ut(this, "number" == typeof e13 ? nt(e13, t7 || 0) : e13), null, r6);
  }), setSelection: oi(function(e13, t7, r6) {
    eo(this, ut(this, e13), ut(this, t7 || e13), r6);
  }), extendSelection: oi(function(e13, t7, r6) {
    Yi(this, ut(this, e13), t7 && ut(this, t7), r6);
  }), extendSelections: oi(function(e13, t7) {
    Qi(this, dt(this, e13), t7);
  }), extendSelectionsBy: oi(function(e13, t7) {
    Qi(this, dt(this, Q(this.sel.ranges, e13)), t7);
  }), setSelections: oi(function(e13, t7, r6) {
    if (e13.length) {
      for (var n10 = [], i9 = 0; i9 < e13.length; i9++)
        n10[i9] = new Ai(ut(this, e13[i9].anchor), ut(this, e13[i9].head || e13[i9].anchor));
      null == t7 && (t7 = Math.min(e13.length - 1, this.sel.primIndex)), ro(this, Mi(this.cm, n10, t7), r6);
    }
  }), addSelection: oi(function(e13, t7, r6) {
    var n10 = this.sel.ranges.slice(0);
    n10.push(new Ai(ut(this, e13), ut(this, t7 || e13))), ro(this, Mi(this.cm, n10, n10.length - 1), r6);
  }), getSelection: function(e13) {
    for (var t7, r6 = this.sel.ranges, n10 = 0; n10 < r6.length; n10++) {
      var i9 = Xe(this, r6[n10].from(), r6[n10].to());
      t7 = t7 ? t7.concat(i9) : i9;
    }
    return false === e13 ? t7 : t7.join(e13 || this.lineSeparator());
  }, getSelections: function(e13) {
    for (var t7 = [], r6 = this.sel.ranges, n10 = 0; n10 < r6.length; n10++) {
      var i9 = Xe(this, r6[n10].from(), r6[n10].to());
      false !== e13 && (i9 = i9.join(e13 || this.lineSeparator())), t7[n10] = i9;
    }
    return t7;
  }, replaceSelection: function(e13, t7, r6) {
    for (var n10 = [], i9 = 0; i9 < this.sel.ranges.length; i9++)
      n10[i9] = e13;
    this.replaceSelections(n10, t7, r6 || "+input");
  }, replaceSelections: oi(function(e13, t7, r6) {
    for (var n10 = [], i9 = this.sel, o10 = 0; o10 < i9.ranges.length; o10++) {
      var a5 = i9.ranges[o10];
      n10[o10] = { from: a5.from(), to: a5.to(), text: this.splitLines(e13[o10]), origin: r6 };
    }
    for (var l9 = t7 && "end" != t7 && function(e14, t8, r7) {
      for (var n11 = [], i10 = nt(e14.first, 0), o11 = i10, a6 = 0; a6 < t8.length; a6++) {
        var l10 = t8[a6], s8 = Pi(l10.from, i10, o11), c4 = Pi(Oi(l10), i10, o11);
        if (i10 = l10.to, o11 = c4, "around" == r7) {
          var u4 = e14.sel.ranges[a6], d4 = it(u4.head, u4.anchor) < 0;
          n11[a6] = new Ai(d4 ? c4 : s8, d4 ? s8 : c4);
        } else
          n11[a6] = new Ai(s8, s8);
      }
      return new Li(n11, e14.sel.primIndex);
    }(this, n10, t7), s7 = n10.length - 1; s7 >= 0; s7--)
      ho(this, n10[s7]);
    l9 ? to(this, l9) : this.cm && En(this.cm);
  }), undo: oi(function() {
    mo(this, "undo");
  }), redo: oi(function() {
    mo(this, "redo");
  }), undoSelection: oi(function() {
    mo(this, "undo", true);
  }), redoSelection: oi(function() {
    mo(this, "redo", true);
  }), setExtending: function(e13) {
    this.extend = e13;
  }, getExtending: function() {
    return this.extend;
  }, historySize: function() {
    for (var e13 = this.history, t7 = 0, r6 = 0, n10 = 0; n10 < e13.done.length; n10++)
      e13.done[n10].ranges || ++t7;
    for (var i9 = 0; i9 < e13.undone.length; i9++)
      e13.undone[i9].ranges || ++r6;
    return { undo: t7, redo: r6 };
  }, clearHistory: function() {
    var e13 = this;
    this.history = new $i(this.history), Ii(this, function(t7) {
      return t7.history = e13.history;
    }, true);
  }, markClean: function() {
    this.cleanGeneration = this.changeGeneration(true);
  }, changeGeneration: function(e13) {
    return e13 && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
  }, isClean: function(e13) {
    return this.history.generation == (e13 || this.cleanGeneration);
  }, getHistory: function() {
    return { done: qi(this.history.done), undone: qi(this.history.undone) };
  }, setHistory: function(e13) {
    var t7 = this.history = new $i(this.history);
    t7.done = qi(e13.done.slice(0), null, true), t7.undone = qi(e13.undone.slice(0), null, true);
  }, setGutterMarker: oi(function(e13, t7, r6) {
    return xo(this, e13, "gutter", function(e14) {
      var n10 = e14.gutterMarkers || (e14.gutterMarkers = {});
      return n10[t7] = r6, !r6 && ie(n10) && (e14.gutterMarkers = null), true;
    });
  }), clearGutter: oi(function(e13) {
    var t7 = this;
    this.iter(function(r6) {
      r6.gutterMarkers && r6.gutterMarkers[e13] && xo(t7, r6, "gutter", function() {
        return r6.gutterMarkers[e13] = null, ie(r6.gutterMarkers) && (r6.gutterMarkers = null), true;
      });
    });
  }), lineInfo: function(e13) {
    var t7;
    if ("number" == typeof e13) {
      if (!tt(this, e13))
        return null;
      if (t7 = e13, !(e13 = qe(this, e13)))
        return null;
    } else if (null == (t7 = Je(e13)))
      return null;
    return { line: t7, handle: e13, text: e13.text, gutterMarkers: e13.gutterMarkers, textClass: e13.textClass, bgClass: e13.bgClass, wrapClass: e13.wrapClass, widgets: e13.widgets };
  }, addLineClass: oi(function(e13, t7, r6) {
    return xo(this, e13, "gutter" == t7 ? "gutter" : "class", function(e14) {
      var n10 = "text" == t7 ? "textClass" : "background" == t7 ? "bgClass" : "gutter" == t7 ? "gutterClass" : "wrapClass";
      if (e14[n10]) {
        if (T2(r6).test(e14[n10]))
          return false;
        e14[n10] += " " + r6;
      } else
        e14[n10] = r6;
      return true;
    });
  }), removeLineClass: oi(function(e13, t7, r6) {
    return xo(this, e13, "gutter" == t7 ? "gutter" : "class", function(e14) {
      var n10 = "text" == t7 ? "textClass" : "background" == t7 ? "bgClass" : "gutter" == t7 ? "gutterClass" : "wrapClass", i9 = e14[n10];
      if (!i9)
        return false;
      if (null == r6)
        e14[n10] = null;
      else {
        var o10 = i9.match(T2(r6));
        if (!o10)
          return false;
        var a5 = o10.index + o10[0].length;
        e14[n10] = i9.slice(0, o10.index) + (o10.index && a5 != i9.length ? " " : "") + i9.slice(a5) || null;
      }
      return true;
    });
  }), addLineWidget: oi(function(e13, t7, r6) {
    return function(e14, t8, r7, n10) {
      var i9 = new To(e14, r7, n10), o10 = e14.cm;
      return o10 && i9.noHScroll && (o10.display.alignWidgets = true), xo(e14, t8, "widget", function(t9) {
        var r8 = t9.widgets || (t9.widgets = []);
        if (null == i9.insertAt ? r8.push(i9) : r8.splice(Math.min(r8.length, Math.max(0, i9.insertAt)), 0, i9), i9.line = t9, o10 && !jt(e14, t9)) {
          var n11 = Vt(t9) < e14.scrollTop;
          Qe(t9, t9.height + Cr(i9)), n11 && Pn(o10, i9.height), o10.curOp.forceUpdate = true;
        }
        return true;
      }), o10 && ur(o10, "lineWidgetAdded", o10, i9, "number" == typeof t8 ? t8 : Je(t8)), i9;
    }(this, e13, t7, r6);
  }), removeLineWidget: function(e13) {
    e13.clear();
  }, markText: function(e13, t7, r6) {
    return zo(this, ut(this, e13), ut(this, t7), r6, r6 && r6.type || "range");
  }, setBookmark: function(e13, t7) {
    var r6 = { replacedWith: t7 && (null == t7.nodeType ? t7.widget : t7), insertLeft: t7 && t7.insertLeft, clearWhenEmpty: false, shared: t7 && t7.shared, handleMouseEvents: t7 && t7.handleMouseEvents };
    return zo(this, e13 = ut(this, e13), e13, r6, "bookmark");
  }, findMarksAt: function(e13) {
    var t7 = [], r6 = qe(this, (e13 = ut(this, e13)).line).markedSpans;
    if (r6)
      for (var n10 = 0; n10 < r6.length; ++n10) {
        var i9 = r6[n10];
        (null == i9.from || i9.from <= e13.ch) && (null == i9.to || i9.to >= e13.ch) && t7.push(i9.marker.parent || i9.marker);
      }
    return t7;
  }, findMarks: function(e13, t7, r6) {
    e13 = ut(this, e13), t7 = ut(this, t7);
    var n10 = [], i9 = e13.line;
    return this.iter(e13.line, t7.line + 1, function(o10) {
      var a5 = o10.markedSpans;
      if (a5)
        for (var l9 = 0; l9 < a5.length; l9++) {
          var s7 = a5[l9];
          null != s7.to && i9 == e13.line && e13.ch >= s7.to || null == s7.from && i9 != e13.line || null != s7.from && i9 == t7.line && s7.from >= t7.ch || r6 && !r6(s7.marker) || n10.push(s7.marker.parent || s7.marker);
        }
      ++i9;
    }), n10;
  }, getAllMarks: function() {
    var e13 = [];
    return this.iter(function(t7) {
      var r6 = t7.markedSpans;
      if (r6)
        for (var n10 = 0; n10 < r6.length; ++n10)
          null != r6[n10].from && e13.push(r6[n10].marker);
    }), e13;
  }, posFromIndex: function(e13) {
    var t7, r6 = this.first, n10 = this.lineSeparator().length;
    return this.iter(function(i9) {
      var o10 = i9.text.length + n10;
      if (o10 > e13)
        return t7 = e13, true;
      e13 -= o10, ++r6;
    }), ut(this, nt(r6, t7));
  }, indexFromPos: function(e13) {
    var t7 = (e13 = ut(this, e13)).ch;
    if (e13.line < this.first || e13.ch < 0)
      return 0;
    var r6 = this.lineSeparator().length;
    return this.iter(this.first, e13.line, function(e14) {
      t7 += e14.text.length + r6;
    }), t7;
  }, copy: function(e13) {
    var t7 = new Eo(Ye(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
    return t7.scrollTop = this.scrollTop, t7.scrollLeft = this.scrollLeft, t7.sel = this.sel, t7.extend = false, e13 && (t7.history.undoDepth = this.history.undoDepth, t7.setHistory(this.getHistory())), t7;
  }, linkedDoc: function(e13) {
    e13 || (e13 = {});
    var t7 = this.first, r6 = this.first + this.size;
    null != e13.from && e13.from > t7 && (t7 = e13.from), null != e13.to && e13.to < r6 && (r6 = e13.to);
    var n10 = new Eo(Ye(this, t7, r6), e13.mode || this.modeOption, t7, this.lineSep, this.direction);
    return e13.sharedHist && (n10.history = this.history), (this.linked || (this.linked = [])).push({ doc: n10, sharedHist: e13.sharedHist }), n10.linked = [{ doc: this, isParent: true, sharedHist: e13.sharedHist }], function(e14, t8) {
      for (var r7 = 0; r7 < t8.length; r7++) {
        var n11 = t8[r7], i9 = n11.find(), o10 = e14.clipPos(i9.from), a5 = e14.clipPos(i9.to);
        if (it(o10, a5)) {
          var l9 = zo(e14, o10, a5, n11.primary, n11.primary.type);
          n11.markers.push(l9), l9.parent = n11;
        }
      }
    }(n10, _o(this)), n10;
  }, unlinkDoc: function(e13) {
    if (e13 instanceof za && (e13 = e13.doc), this.linked) {
      for (var t7 = 0; t7 < this.linked.length; ++t7)
        if (this.linked[t7].doc == e13) {
          this.linked.splice(t7, 1), e13.unlinkDoc(this), No(_o(this));
          break;
        }
    }
    if (e13.history == this.history) {
      var r6 = [e13.id];
      Ii(e13, function(e14) {
        return r6.push(e14.id);
      }, true), e13.history = new $i(null), e13.history.done = qi(this.history.done, r6), e13.history.undone = qi(this.history.undone, r6);
    }
  }, iterLinkedDocs: function(e13) {
    Ii(this, e13);
  }, getMode: function() {
    return this.mode;
  }, getEditor: function() {
    return this.cm;
  }, splitLines: function(e13) {
    return this.lineSep ? e13.split(this.lineSep) : Ee(e13);
  }, lineSeparator: function() {
    return this.lineSep || "\n";
  }, setDirection: oi(function(e13) {
    var t7;
    "rtl" != e13 && (e13 = "ltr"), e13 != this.direction && (this.direction = e13, this.iter(function(e14) {
      return e14.order = null;
    }), this.cm && ri(t7 = this.cm, function() {
      Bi(t7), pn(t7);
    }));
  }) }), Eo.prototype.eachLine = Eo.prototype.iter;
  var Do = 0;
  function Wo(e13) {
    var t7 = this;
    if (Fo(t7), !ye(t7, e13) && !Sr(t7.display, e13)) {
      xe(e13), a4 && (Do = +/* @__PURE__ */ new Date());
      var r6 = fn2(t7, e13, true), n10 = e13.dataTransfer.files;
      if (r6 && !t7.isReadOnly())
        if (n10 && n10.length && window.FileReader && window.File)
          for (var i9 = n10.length, o10 = Array(i9), l9 = 0, s7 = function() {
            ++l9 == i9 && ni(t7, function() {
              var e14 = { from: r6 = ut(t7.doc, r6), to: r6, text: t7.doc.splitLines(o10.filter(function(e15) {
                return null != e15;
              }).join(t7.doc.lineSeparator())), origin: "paste" };
              ho(t7.doc, e14), to(t7.doc, zi(ut(t7.doc, r6), ut(t7.doc, Oi(e14))));
            })();
          }, c4 = function(e14, r7) {
            if (t7.options.allowDropFileTypes && -1 == Z2(t7.options.allowDropFileTypes, e14.type))
              s7();
            else {
              var n11 = new FileReader();
              n11.onerror = function() {
                return s7();
              }, n11.onload = function() {
                var e15 = n11.result;
                /[\x00-\x08\x0e-\x1f]{2}/.test(e15) || (o10[r7] = e15), s7();
              }, n11.readAsText(e14);
            }
          }, u4 = 0; u4 < n10.length; u4++)
            c4(n10[u4], u4);
        else {
          if (t7.state.draggingText && t7.doc.sel.contains(r6) > -1)
            return t7.state.draggingText(e13), void setTimeout(function() {
              return t7.display.input.focus();
            }, 20);
          try {
            var d4 = e13.dataTransfer.getData("Text");
            if (d4) {
              var f3;
              if (t7.state.draggingText && !t7.state.draggingText.copy && (f3 = t7.listSelections()), no(t7.doc, zi(r6, r6)), f3)
                for (var h4 = 0; h4 < f3.length; ++h4)
                  yo(t7.doc, "", f3[h4].anchor, f3[h4].head, "drag");
              t7.replaceSelection(d4, "around", "paste"), t7.display.input.focus();
            }
          } catch (e14) {
          }
        }
    }
  }
  function Fo(e13) {
    e13.display.dragCursor && (e13.display.lineSpace.removeChild(e13.display.dragCursor), e13.display.dragCursor = null);
  }
  function Io(e13) {
    if (document.getElementsByClassName) {
      for (var t7 = document.getElementsByClassName("CodeMirror"), r6 = [], n10 = 0; n10 < t7.length; n10++) {
        var i9 = t7[n10].CodeMirror;
        i9 && r6.push(i9);
      }
      r6.length && r6[0].operation(function() {
        for (var t8 = 0; t8 < r6.length; t8++)
          e13(r6[t8]);
      });
    }
  }
  var Ho = false;
  function Bo(e13) {
    var t7 = e13.display;
    t7.cachedCharWidth = t7.cachedTextHeight = t7.cachedPaddingH = null, t7.scrollbarsClipped = false, e13.setSize();
  }
  for (var $o = { 3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete", 63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert" }, Ro = 0; Ro < 10; Ro++)
    $o[Ro + 48] = $o[Ro + 96] = Ro + "";
  for (var Zo = 65; Zo <= 90; Zo++)
    $o[Zo] = String.fromCharCode(Zo);
  for (var jo = 1; jo <= 12; jo++)
    $o[jo + 111] = $o[jo + 63235] = "F" + jo;
  var Uo = {};
  function Vo(e13) {
    var t7, r6, n10, i9, o10 = e13.split(/-(?!$)/);
    e13 = o10[o10.length - 1];
    for (var a5 = 0; a5 < o10.length - 1; a5++) {
      var l9 = o10[a5];
      if (/^(cmd|meta|m)$/i.test(l9))
        i9 = true;
      else if (/^a(lt)?$/i.test(l9))
        t7 = true;
      else if (/^(c|ctrl|control)$/i.test(l9))
        r6 = true;
      else {
        if (!/^s(hift)?$/i.test(l9))
          throw Error("Unrecognized modifier name: " + l9);
        n10 = true;
      }
    }
    return t7 && (e13 = "Alt-" + e13), r6 && (e13 = "Ctrl-" + e13), i9 && (e13 = "Cmd-" + e13), n10 && (e13 = "Shift-" + e13), e13;
  }
  function Ko(e13) {
    var t7 = {};
    for (var r6 in e13)
      if (e13.hasOwnProperty(r6)) {
        var n10 = e13[r6];
        if (/^(name|fallthrough|(de|at)tach)$/.test(r6))
          continue;
        if ("..." == n10) {
          delete e13[r6];
          continue;
        }
        for (var i9 = Q(r6.split(" "), Vo), o10 = 0; o10 < i9.length; o10++) {
          var a5 = void 0, l9 = void 0;
          o10 == i9.length - 1 ? (l9 = i9.join(" "), a5 = n10) : (l9 = i9.slice(0, o10 + 1).join(" "), a5 = "...");
          var s7 = t7[l9];
          if (s7) {
            if (s7 != a5)
              throw Error("Inconsistent bindings for " + l9);
          } else
            t7[l9] = a5;
        }
        delete e13[r6];
      }
    for (var c4 in t7)
      e13[c4] = t7[c4];
    return e13;
  }
  function Go(e13, t7, r6, n10) {
    var i9 = (t7 = Qo(t7)).call ? t7.call(e13, n10) : t7[e13];
    if (false === i9)
      return "nothing";
    if ("..." === i9)
      return "multi";
    if (null != i9 && r6(i9))
      return "handled";
    if (t7.fallthrough) {
      if ("[object Array]" != Object.prototype.toString.call(t7.fallthrough))
        return Go(e13, t7.fallthrough, r6, n10);
      for (var o10 = 0; o10 < t7.fallthrough.length; o10++) {
        var a5 = Go(e13, t7.fallthrough[o10], r6, n10);
        if (a5)
          return a5;
      }
    }
  }
  function qo(e13) {
    var t7 = "string" == typeof e13 ? e13 : $o[e13.keyCode];
    return "Ctrl" == t7 || "Alt" == t7 || "Shift" == t7 || "Mod" == t7;
  }
  function Xo(e13, t7, r6) {
    var n10 = e13;
    return t7.altKey && "Alt" != n10 && (e13 = "Alt-" + e13), (C2 ? t7.metaKey : t7.ctrlKey) && "Ctrl" != n10 && (e13 = "Ctrl-" + e13), (C2 ? t7.ctrlKey : t7.metaKey) && "Mod" != n10 && (e13 = "Cmd-" + e13), !r6 && t7.shiftKey && "Shift" != n10 && (e13 = "Shift-" + e13), e13;
  }
  function Yo(e13, t7) {
    if (f2 && 34 == e13.keyCode && e13.char)
      return false;
    var r6 = $o[e13.keyCode];
    return null != r6 && !e13.altGraphKey && (3 == e13.keyCode && e13.code && (r6 = e13.code), Xo(r6, e13, t7));
  }
  function Qo(e13) {
    return "string" == typeof e13 ? Uo[e13] : e13;
  }
  function Jo(e13, t7) {
    for (var r6 = e13.doc.sel.ranges, n10 = [], i9 = 0; i9 < r6.length; i9++) {
      for (var o10 = t7(r6[i9]); n10.length && it(o10.from, Y(n10).to) <= 0; ) {
        var a5 = n10.pop();
        if (it(a5.from, o10.from) < 0) {
          o10.from = a5.from;
          break;
        }
      }
      n10.push(o10);
    }
    ri(e13, function() {
      for (var t8 = n10.length - 1; t8 >= 0; t8--)
        yo(e13.doc, "", n10[t8].from, n10[t8].to, "+delete");
      En(e13);
    });
  }
  function ea(e13, t7, r6) {
    var n10 = le(e13.text, t7 + r6, r6);
    return n10 < 0 || n10 > e13.text.length ? null : n10;
  }
  function ta(e13, t7, r6) {
    var n10 = ea(e13, t7.ch, r6);
    return null == n10 ? null : new nt(t7.line, n10, r6 < 0 ? "after" : "before");
  }
  function ra(e13, t7, r6, n10, i9) {
    if (e13) {
      "rtl" == t7.doc.direction && (i9 = -i9);
      var o10 = fe(r6, t7.doc.direction);
      if (o10) {
        var a5, l9 = i9 < 0 ? Y(o10) : o10[0], s7 = i9 < 0 == (1 == l9.level) ? "after" : "before";
        if (l9.level > 0 || "rtl" == t7.doc.direction) {
          var c4 = Er(t7, r6);
          a5 = i9 < 0 ? r6.text.length - 1 : 0;
          var u4 = Dr(t7, c4, a5).top;
          a5 = se(function(e14) {
            return Dr(t7, c4, e14).top == u4;
          }, i9 < 0 == (1 == l9.level) ? l9.from : l9.to - 1, a5), "before" == s7 && (a5 = ea(r6, a5, 1));
        } else
          a5 = i9 < 0 ? l9.to : l9.from;
        return new nt(n10, a5, s7);
      }
    }
    return new nt(n10, i9 < 0 ? r6.text.length : 0, i9 < 0 ? "before" : "after");
  }
  Uo.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }, Uo.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection", fallthrough: "basic" }, Uo.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }, Uo.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight", "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd", fallthrough: ["basic", "emacsy"] }, Uo.default = b2 ? Uo.macDefault : Uo.pcDefault;
  var na = { selectAll: uo, singleSelection: function(e13) {
    return e13.setSelection(e13.getCursor("anchor"), e13.getCursor("head"), U);
  }, killLine: function(e13) {
    return Jo(e13, function(t7) {
      if (t7.empty()) {
        var r6 = qe(e13.doc, t7.head.line).text.length;
        return t7.head.ch == r6 && t7.head.line < e13.lastLine() ? { from: t7.head, to: nt(t7.head.line + 1, 0) } : { from: t7.head, to: nt(t7.head.line, r6) };
      }
      return { from: t7.from(), to: t7.to() };
    });
  }, deleteLine: function(e13) {
    return Jo(e13, function(t7) {
      return { from: nt(t7.from().line, 0), to: ut(e13.doc, nt(t7.to().line + 1, 0)) };
    });
  }, delLineLeft: function(e13) {
    return Jo(e13, function(e14) {
      return { from: nt(e14.from().line, 0), to: e14.from() };
    });
  }, delWrappedLineLeft: function(e13) {
    return Jo(e13, function(t7) {
      var r6 = e13.charCoords(t7.head, "div").top + 5;
      return { from: e13.coordsChar({ left: 0, top: r6 }, "div"), to: t7.from() };
    });
  }, delWrappedLineRight: function(e13) {
    return Jo(e13, function(t7) {
      var r6 = e13.charCoords(t7.head, "div").top + 5, n10 = e13.coordsChar({ left: e13.display.lineDiv.offsetWidth + 100, top: r6 }, "div");
      return { from: t7.from(), to: n10 };
    });
  }, undo: function(e13) {
    return e13.undo();
  }, redo: function(e13) {
    return e13.redo();
  }, undoSelection: function(e13) {
    return e13.undoSelection();
  }, redoSelection: function(e13) {
    return e13.redoSelection();
  }, goDocStart: function(e13) {
    return e13.extendSelection(nt(e13.firstLine(), 0));
  }, goDocEnd: function(e13) {
    return e13.extendSelection(nt(e13.lastLine()));
  }, goLineStart: function(e13) {
    return e13.extendSelectionsBy(function(t7) {
      return ia(e13, t7.head.line);
    }, { origin: "+move", bias: 1 });
  }, goLineStartSmart: function(e13) {
    return e13.extendSelectionsBy(function(t7) {
      return oa(e13, t7.head);
    }, { origin: "+move", bias: 1 });
  }, goLineEnd: function(e13) {
    return e13.extendSelectionsBy(function(t7) {
      return function(e14, t8) {
        var r6 = qe(e14.doc, t8), n10 = function(e15) {
          for (var t9; t9 = It(e15); )
            e15 = t9.find(1, true).line;
          return e15;
        }(r6);
        return n10 != r6 && (t8 = Je(n10)), ra(true, e14, r6, t8, -1);
      }(e13, t7.head.line);
    }, { origin: "+move", bias: -1 });
  }, goLineRight: function(e13) {
    return e13.extendSelectionsBy(function(t7) {
      var r6 = e13.cursorCoords(t7.head, "div").top + 5;
      return e13.coordsChar({ left: e13.display.lineDiv.offsetWidth + 100, top: r6 }, "div");
    }, K);
  }, goLineLeft: function(e13) {
    return e13.extendSelectionsBy(function(t7) {
      var r6 = e13.cursorCoords(t7.head, "div").top + 5;
      return e13.coordsChar({ left: 0, top: r6 }, "div");
    }, K);
  }, goLineLeftSmart: function(e13) {
    return e13.extendSelectionsBy(function(t7) {
      var r6 = e13.cursorCoords(t7.head, "div").top + 5, n10 = e13.coordsChar({ left: 0, top: r6 }, "div");
      return n10.ch < e13.getLine(n10.line).search(/\S/) ? oa(e13, t7.head) : n10;
    }, K);
  }, goLineUp: function(e13) {
    return e13.moveV(-1, "line");
  }, goLineDown: function(e13) {
    return e13.moveV(1, "line");
  }, goPageUp: function(e13) {
    return e13.moveV(-1, "page");
  }, goPageDown: function(e13) {
    return e13.moveV(1, "page");
  }, goCharLeft: function(e13) {
    return e13.moveH(-1, "char");
  }, goCharRight: function(e13) {
    return e13.moveH(1, "char");
  }, goColumnLeft: function(e13) {
    return e13.moveH(-1, "column");
  }, goColumnRight: function(e13) {
    return e13.moveH(1, "column");
  }, goWordLeft: function(e13) {
    return e13.moveH(-1, "word");
  }, goGroupRight: function(e13) {
    return e13.moveH(1, "group");
  }, goGroupLeft: function(e13) {
    return e13.moveH(-1, "group");
  }, goWordRight: function(e13) {
    return e13.moveH(1, "word");
  }, delCharBefore: function(e13) {
    return e13.deleteH(-1, "codepoint");
  }, delCharAfter: function(e13) {
    return e13.deleteH(1, "char");
  }, delWordBefore: function(e13) {
    return e13.deleteH(-1, "word");
  }, delWordAfter: function(e13) {
    return e13.deleteH(1, "word");
  }, delGroupBefore: function(e13) {
    return e13.deleteH(-1, "group");
  }, delGroupAfter: function(e13) {
    return e13.deleteH(1, "group");
  }, indentAuto: function(e13) {
    return e13.indentSelection("smart");
  }, indentMore: function(e13) {
    return e13.indentSelection("add");
  }, indentLess: function(e13) {
    return e13.indentSelection("subtract");
  }, insertTab: function(e13) {
    return e13.replaceSelection("	");
  }, insertSoftTab: function(e13) {
    for (var t7 = [], r6 = e13.listSelections(), n10 = e13.options.tabSize, i9 = 0; i9 < r6.length; i9++) {
      var o10 = r6[i9].from(), a5 = $2(e13.getLine(o10.line), o10.ch, n10);
      t7.push(X(n10 - a5 % n10));
    }
    e13.replaceSelections(t7);
  }, defaultTab: function(e13) {
    e13.somethingSelected() ? e13.indentSelection("add") : e13.execCommand("insertTab");
  }, transposeChars: function(e13) {
    return ri(e13, function() {
      for (var t7 = e13.listSelections(), r6 = [], n10 = 0; n10 < t7.length; n10++)
        if (t7[n10].empty()) {
          var i9 = t7[n10].head, o10 = qe(e13.doc, i9.line).text;
          if (o10) {
            if (i9.ch == o10.length && (i9 = new nt(i9.line, i9.ch - 1)), i9.ch > 0)
              i9 = new nt(i9.line, i9.ch + 1), e13.replaceRange(o10.charAt(i9.ch - 1) + o10.charAt(i9.ch - 2), nt(i9.line, i9.ch - 2), i9, "+transpose");
            else if (i9.line > e13.doc.first) {
              var a5 = qe(e13.doc, i9.line - 1).text;
              a5 && (i9 = new nt(i9.line, 1), e13.replaceRange(o10.charAt(0) + e13.doc.lineSeparator() + a5.charAt(a5.length - 1), nt(i9.line - 1, a5.length - 1), i9, "+transpose"));
            }
          }
          r6.push(new Ai(i9, i9));
        }
      e13.setSelections(r6);
    });
  }, newlineAndIndent: function(e13) {
    return ri(e13, function() {
      for (var t7 = e13.listSelections(), r6 = t7.length - 1; r6 >= 0; r6--)
        e13.replaceRange(e13.doc.lineSeparator(), t7[r6].anchor, t7[r6].head, "+input");
      t7 = e13.listSelections();
      for (var n10 = 0; n10 < t7.length; n10++)
        e13.indentLine(t7[n10].from().line, null, true);
      En(e13);
    });
  }, openLine: function(e13) {
    return e13.replaceSelection("\n", "start");
  }, toggleOverwrite: function(e13) {
    return e13.toggleOverwrite();
  } };
  function ia(e13, t7) {
    var r6 = qe(e13.doc, t7), n10 = $t(r6);
    return n10 != r6 && (t7 = Je(n10)), ra(true, e13, n10, t7, 1);
  }
  function oa(e13, t7) {
    var r6 = ia(e13, t7.line), n10 = qe(e13.doc, r6.line), i9 = fe(n10, e13.doc.direction);
    if (!i9 || 0 == i9[0].level) {
      var o10 = Math.max(r6.ch, n10.text.search(/\S/)), a5 = t7.line == r6.line && t7.ch <= o10 && t7.ch;
      return nt(r6.line, a5 ? 0 : o10, r6.sticky);
    }
    return r6;
  }
  function aa(e13, t7, r6) {
    if ("string" == typeof t7 && !(t7 = na[t7]))
      return false;
    e13.display.input.ensurePolled();
    var n10 = e13.display.shift, i9 = false;
    try {
      e13.isReadOnly() && (e13.state.suppressEdits = true), r6 && (e13.display.shift = false), i9 = t7(e13) != j2;
    } finally {
      e13.display.shift = n10, e13.state.suppressEdits = false;
    }
    return i9;
  }
  var la = new R2();
  function sa(e13, t7, r6, n10) {
    var i9 = e13.state.keySeq;
    if (i9) {
      if (qo(t7))
        return "handled";
      if (/\'$/.test(t7) ? e13.state.keySeq = null : la.set(50, function() {
        e13.state.keySeq == i9 && (e13.state.keySeq = null, e13.display.input.reset());
      }), ca(e13, i9 + " " + t7, r6, n10))
        return true;
    }
    return ca(e13, t7, r6, n10);
  }
  function ca(e13, t7, r6, n10) {
    var i9 = function(e14, t8, r7) {
      for (var n11 = 0; n11 < e14.state.keyMaps.length; n11++) {
        var i10 = Go(t8, e14.state.keyMaps[n11], r7, e14);
        if (i10)
          return i10;
      }
      return e14.options.extraKeys && Go(t8, e14.options.extraKeys, r7, e14) || Go(t8, e14.options.keyMap, r7, e14);
    }(e13, t7, n10);
    return "multi" == i9 && (e13.state.keySeq = t7), "handled" == i9 && ur(e13, "keyHandled", e13, t7, r6), "handled" != i9 && "multi" != i9 || (xe(r6), Sn(e13)), !!i9;
  }
  function ua(e13, t7) {
    var r6 = Yo(t7, true);
    return !!r6 && (t7.shiftKey && !e13.state.keySeq ? sa(e13, "Shift-" + r6, t7, function(t8) {
      return aa(e13, t8, true);
    }) || sa(e13, r6, t7, function(t8) {
      if ("string" == typeof t8 ? /^go[A-Z]/.test(t8) : t8.motion)
        return aa(e13, t8);
    }) : sa(e13, r6, t7, function(t8) {
      return aa(e13, t8);
    }));
  }
  var da = null;
  function fa(e13) {
    var t7 = this;
    if (!(e13.target && e13.target != t7.display.input.getField() || (t7.curOp.focus = P2(F(t7)), ye(t7, e13)))) {
      a4 && l8 < 11 && 27 == e13.keyCode && (e13.returnValue = false);
      var n10 = e13.keyCode;
      t7.display.shift = 16 == n10 || e13.shiftKey;
      var i9 = ua(t7, e13);
      f2 && (da = i9 ? n10 : null, i9 || 88 != n10 || We || !(b2 ? e13.metaKey : e13.ctrlKey) || t7.replaceSelection("", null, "cut")), r5 && !b2 && !i9 && 46 == n10 && e13.shiftKey && !e13.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != n10 || /\bCodeMirror-crosshair\b/.test(t7.display.lineDiv.className) || function(e14) {
        var t8 = e14.display.lineDiv;
        function r6(e15) {
          18 != e15.keyCode && e15.altKey || (A2(t8, "CodeMirror-crosshair"), ge(document, "keyup", r6), ge(document, "mouseover", r6));
        }
        E2(t8, "CodeMirror-crosshair"), pe(document, "keyup", r6), pe(document, "mouseover", r6);
      }(t7);
    }
  }
  function ha(e13) {
    16 == e13.keyCode && (this.doc.sel.shift = false), ye(this, e13);
  }
  function pa(e13) {
    var t7 = this;
    if (!(e13.target && e13.target != t7.display.input.getField() || Sr(t7.display, e13) || ye(t7, e13) || e13.ctrlKey && !e13.altKey || b2 && e13.metaKey)) {
      var r6 = e13.keyCode, n10 = e13.charCode;
      if (f2 && r6 == da)
        return da = null, void xe(e13);
      if (!f2 || e13.which && !(e13.which < 10) || !ua(t7, e13)) {
        var i9 = String.fromCharCode(null == n10 ? r6 : n10);
        "\b" != i9 && (function(e14, t8, r7) {
          return sa(e14, "'" + r7 + "'", t8, function(t9) {
            return aa(e14, t9, true);
          });
        }(t7, e13, i9) || t7.display.input.onKeyPress(e13));
      }
    }
  }
  var ma, ga, va = function(e13, t7, r6) {
    this.time = e13, this.pos = t7, this.button = r6;
  };
  function ya(e13) {
    var t7 = this, r6 = t7.display;
    if (!(ye(t7, e13) || r6.activeTouch && r6.input.supportsTouch())) {
      if (r6.input.ensurePolled(), r6.shift = e13.shiftKey, Sr(r6, e13))
        s6 || (r6.scroller.draggable = false, setTimeout(function() {
          return r6.scroller.draggable = true;
        }, 100));
      else if (!ka(t7, e13)) {
        var n10 = fn2(t7, e13), i9 = Ae(e13), o10 = n10 ? function(e14, t8) {
          var r7 = +/* @__PURE__ */ new Date();
          return ga && ga.compare(r7, e14, t8) ? (ma = ga = null, "triple") : ma && ma.compare(r7, e14, t8) ? (ga = new va(r7, e14, t8), ma = null, "double") : (ma = new va(r7, e14, t8), ga = null, "single");
        }(n10, i9) : "single";
        I2(t7).focus(), 1 == i9 && t7.state.selectingText && t7.state.selectingText(e13), n10 && function(e14, t8, r7, n11, i10) {
          var o11 = "Click";
          return "double" == n11 ? o11 = "Double" + o11 : "triple" == n11 && (o11 = "Triple" + o11), sa(e14, Xo(o11 = (1 == t8 ? "Left" : 2 == t8 ? "Middle" : "Right") + o11, i10), i10, function(t9) {
            if ("string" == typeof t9 && (t9 = na[t9]), !t9)
              return false;
            var n12 = false;
            try {
              e14.isReadOnly() && (e14.state.suppressEdits = true), n12 = t9(e14, r7) != j2;
            } finally {
              e14.state.suppressEdits = false;
            }
            return n12;
          });
        }(t7, i9, n10, o10, e13) || (1 == i9 ? n10 ? function(e14, t8, r7, n11) {
          a4 ? setTimeout(H2(Tn, e14), 0) : e14.curOp.focus = P2(F(e14));
          var i10, o11 = function(e15, t9, r8) {
            var n12 = e15.getOption("configureMouse"), i11 = n12 ? n12(e15, t9, r8) : {};
            if (null == i11.unit) {
              var o12 = w2 ? r8.shiftKey && r8.metaKey : r8.altKey;
              i11.unit = o12 ? "rectangle" : "single" == t9 ? "char" : "double" == t9 ? "word" : "line";
            }
            return (null == i11.extend || e15.doc.extend) && (i11.extend = e15.doc.extend || r8.shiftKey), null == i11.addNew && (i11.addNew = b2 ? r8.metaKey : r8.ctrlKey), null == i11.moveOnDrag && (i11.moveOnDrag = !(b2 ? r8.altKey : r8.ctrlKey)), i11;
          }(e14, r7, n11), c4 = e14.doc.sel;
          e14.options.dragDrop && Oe && !e14.isReadOnly() && "single" == r7 && (i10 = c4.contains(t8)) > -1 && (it((i10 = c4.ranges[i10]).from(), t8) < 0 || t8.xRel > 0) && (it(i10.to(), t8) > 0 || t8.xRel < 0) ? function(e15, t9, r8, n12) {
            var i11 = e15.display, o12 = false, c5 = ni(e15, function(t10) {
              s6 && (i11.scroller.draggable = false), e15.state.draggingText = false, e15.state.delayingBlurEvent && (e15.hasFocus() ? e15.state.delayingBlurEvent = false : Ln(e15)), ge(i11.wrapper.ownerDocument, "mouseup", c5), ge(i11.wrapper.ownerDocument, "mousemove", u4), ge(i11.scroller, "dragstart", d4), ge(i11.scroller, "drop", c5), o12 || (xe(t10), n12.addNew || Yi(e15.doc, r8, null, null, n12.extend), s6 && !h3 || a4 && 9 == l8 ? setTimeout(function() {
                i11.wrapper.ownerDocument.body.focus({ preventScroll: true }), i11.input.focus();
              }, 20) : i11.input.focus());
            }), u4 = function(e16) {
              o12 = o12 || Math.abs(t9.clientX - e16.clientX) + Math.abs(t9.clientY - e16.clientY) >= 10;
            }, d4 = function() {
              return o12 = true;
            };
            s6 && (i11.scroller.draggable = true), e15.state.draggingText = c5, c5.copy = !n12.moveOnDrag, pe(i11.wrapper.ownerDocument, "mouseup", c5), pe(i11.wrapper.ownerDocument, "mousemove", u4), pe(i11.scroller, "dragstart", d4), pe(i11.scroller, "drop", c5), e15.state.delayingBlurEvent = true, setTimeout(function() {
              return i11.input.focus();
            }, 20), i11.scroller.dragDrop && i11.scroller.dragDrop();
          }(e14, n11, t8, o11) : function(e15, t9, r8, n12) {
            a4 && Ln(e15);
            var i11 = e15.display, o12 = e15.doc;
            xe(t9);
            var l9, s7, c5 = o12.sel, u4 = c5.ranges;
            if (n12.addNew && !n12.extend ? (s7 = o12.sel.contains(r8), l9 = s7 > -1 ? u4[s7] : new Ai(r8, r8)) : (l9 = o12.sel.primary(), s7 = o12.sel.primIndex), "rectangle" == n12.unit)
              n12.addNew || (l9 = new Ai(r8, r8)), r8 = fn2(e15, t9, true, true), s7 = -1;
            else {
              var d4 = ba(e15, r8, n12.unit);
              l9 = n12.extend ? Xi(l9, d4.anchor, d4.head, n12.extend) : d4;
            }
            n12.addNew ? -1 == s7 ? (s7 = u4.length, ro(o12, Mi(e15, u4.concat([l9]), s7), { scroll: false, origin: "*mouse" })) : u4.length > 1 && u4[s7].empty() && "char" == n12.unit && !n12.extend ? (ro(o12, Mi(e15, u4.slice(0, s7).concat(u4.slice(s7 + 1)), 0), { scroll: false, origin: "*mouse" }), c5 = o12.sel) : Ji(o12, s7, l9, V2) : (s7 = 0, ro(o12, new Li([l9], 0), V2), c5 = o12.sel);
            var f3 = r8;
            var h4 = i11.wrapper.getBoundingClientRect(), p3 = 0;
            function m3(t10) {
              var a5 = ++p3, u5 = fn2(e15, t10, true, "rectangle" == n12.unit);
              if (u5)
                if (0 != it(u5, f3)) {
                  e15.curOp.focus = P2(F(e15)), function(t11) {
                    if (0 != it(f3, t11))
                      if (f3 = t11, "rectangle" == n12.unit) {
                        for (var i12 = [], a6 = e15.options.tabSize, u6 = $2(qe(o12, r8.line).text, r8.ch, a6), d6 = $2(qe(o12, t11.line).text, t11.ch, a6), h5 = Math.min(u6, d6), p4 = Math.max(u6, d6), m4 = Math.min(r8.line, t11.line), g5 = Math.min(e15.lastLine(), Math.max(r8.line, t11.line)); m4 <= g5; m4++) {
                          var v4 = qe(o12, m4).text, y4 = G(v4, h5, a6);
                          h5 == p4 ? i12.push(new Ai(nt(m4, y4), nt(m4, y4))) : v4.length > y4 && i12.push(new Ai(nt(m4, y4), nt(m4, G(v4, p4, a6))));
                        }
                        i12.length || i12.push(new Ai(r8, r8)), ro(o12, Mi(e15, c5.ranges.slice(0, s7).concat(i12), s7), { origin: "*mouse", scroll: false }), e15.scrollIntoView(t11);
                      } else {
                        var b3, w3 = l9, k3 = ba(e15, t11, n12.unit), x3 = w3.anchor;
                        it(k3.anchor, x3) > 0 ? (b3 = k3.head, x3 = st(w3.from(), k3.anchor)) : (b3 = k3.anchor, x3 = lt(w3.to(), k3.head));
                        var C3 = c5.ranges.slice(0);
                        C3[s7] = function(e16, t12) {
                          var r9 = t12.anchor, n13 = t12.head, i13 = qe(e16.doc, r9.line);
                          if (0 == it(r9, n13) && r9.sticky == n13.sticky)
                            return t12;
                          var o13 = fe(i13);
                          if (!o13)
                            return t12;
                          var a7 = ue(o13, r9.ch, r9.sticky), l10 = o13[a7];
                          if (l10.from != r9.ch && l10.to != r9.ch)
                            return t12;
                          var s8, c6 = a7 + (l10.from == r9.ch == (1 != l10.level) ? 0 : 1);
                          if (0 == c6 || c6 == o13.length)
                            return t12;
                          if (n13.line != r9.line)
                            s8 = (n13.line - r9.line) * ("ltr" == e16.doc.direction ? 1 : -1) > 0;
                          else {
                            var u7 = ue(o13, n13.ch, n13.sticky), d7 = u7 - a7 || (n13.ch - r9.ch) * (1 == l10.level ? -1 : 1);
                            s8 = u7 == c6 - 1 || u7 == c6 ? d7 < 0 : d7 > 0;
                          }
                          var f4 = o13[c6 + (s8 ? -1 : 0)], h6 = s8 == (1 == f4.level), p5 = h6 ? f4.from : f4.to, m5 = h6 ? "after" : "before";
                          return r9.ch == p5 && r9.sticky == m5 ? t12 : new Ai(new nt(r9.line, p5, m5), n13);
                        }(e15, new Ai(ut(o12, x3), b3)), ro(o12, Mi(e15, C3, s7), V2);
                      }
                  }(u5);
                  var d5 = _n(i11, o12);
                  (u5.line >= d5.to || u5.line < d5.from) && setTimeout(ni(e15, function() {
                    p3 == a5 && m3(t10);
                  }), 150);
                } else {
                  var g4 = t10.clientY < h4.top ? -20 : t10.clientY > h4.bottom ? 20 : 0;
                  g4 && setTimeout(ni(e15, function() {
                    p3 == a5 && (i11.scroller.scrollTop += g4, m3(t10));
                  }), 50);
                }
            }
            function g3(t10) {
              e15.state.selectingText = false, p3 = 1 / 0, t10 && (xe(t10), i11.input.focus()), ge(i11.wrapper.ownerDocument, "mousemove", v3), ge(i11.wrapper.ownerDocument, "mouseup", y3), o12.history.lastSelOrigin = null;
            }
            var v3 = ni(e15, function(e16) {
              0 !== e16.buttons && Ae(e16) ? m3(e16) : g3(e16);
            }), y3 = ni(e15, g3);
            e15.state.selectingText = y3, pe(i11.wrapper.ownerDocument, "mousemove", v3), pe(i11.wrapper.ownerDocument, "mouseup", y3);
          }(e14, n11, t8, o11);
        }(t7, n10, o10, e13) : Le(e13) == r6.scroller && xe(e13) : 2 == i9 ? (n10 && Yi(t7.doc, n10), setTimeout(function() {
          return r6.input.focus();
        }, 20)) : 3 == i9 && (S3 ? t7.display.input.onContextMenu(e13) : Ln(t7)));
      }
    }
  }
  function ba(e13, t7, r6) {
    if ("char" == r6)
      return new Ai(t7, t7);
    if ("word" == r6)
      return e13.findWordAt(t7);
    if ("line" == r6)
      return new Ai(nt(t7.line, 0), ut(e13.doc, nt(t7.line + 1, 0)));
    var n10 = r6(e13, t7);
    return new Ai(n10.from, n10.to);
  }
  function wa(e13, t7, r6, n10) {
    var i9, o10;
    if (t7.touches)
      i9 = t7.touches[0].clientX, o10 = t7.touches[0].clientY;
    else
      try {
        i9 = t7.clientX, o10 = t7.clientY;
      } catch (e14) {
        return false;
      }
    if (i9 >= Math.floor(e13.display.gutters.getBoundingClientRect().right))
      return false;
    n10 && xe(t7);
    var a5 = e13.display, l9 = a5.lineDiv.getBoundingClientRect();
    if (o10 > l9.bottom || !we(e13, r6))
      return Se(t7);
    o10 -= l9.top - a5.viewOffset;
    for (var s7 = 0; s7 < e13.display.gutterSpecs.length; ++s7) {
      var c4 = a5.gutters.childNodes[s7];
      if (c4 && c4.getBoundingClientRect().right >= i9)
        return ve(e13, r6, e13, et(e13.doc, o10), e13.display.gutterSpecs[s7].className, t7), Se(t7);
    }
  }
  function ka(e13, t7) {
    return wa(e13, t7, "gutterClick", true);
  }
  function xa(e13, t7) {
    Sr(e13.display, t7) || function(e14, t8) {
      return !!we(e14, "gutterContextMenu") && wa(e14, t8, "gutterContextMenu", false);
    }(e13, t7) || ye(e13, t7, "contextmenu") || S3 || e13.display.input.onContextMenu(t7);
  }
  function Ca(e13) {
    e13.display.wrapper.className = e13.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e13.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Rr(e13);
  }
  va.prototype.compare = function(e13, t7, r6) {
    return this.time + 400 > e13 && 0 == it(t7, this.pos) && r6 == this.button;
  };
  var Sa = { toString: function() {
    return "CodeMirror.Init";
  } }, Ta = {}, La = {};
  function Aa(e13, t7, r6) {
    if (!t7 != !(r6 && r6 != Sa)) {
      var n10 = e13.display.dragFunctions, i9 = t7 ? pe : ge;
      i9(e13.display.scroller, "dragstart", n10.start), i9(e13.display.scroller, "dragenter", n10.enter), i9(e13.display.scroller, "dragover", n10.over), i9(e13.display.scroller, "dragleave", n10.leave), i9(e13.display.scroller, "drop", n10.drop);
    }
  }
  function Ma(e13) {
    e13.options.lineWrapping ? (E2(e13.display.wrapper, "CodeMirror-wrap"), e13.display.sizer.style.minWidth = "", e13.display.sizerWidth = null) : (A2(e13.display.wrapper, "CodeMirror-wrap"), Gt(e13)), dn(e13), pn(e13), Rr(e13), setTimeout(function() {
      return jn(e13);
    }, 100);
  }
  function za(e13, t7) {
    var r6 = this;
    if (!(this instanceof za))
      return new za(e13, t7);
    this.options = t7 = t7 ? B2(t7) : {}, B2(Ta, t7, false);
    var n10 = t7.value;
    "string" == typeof n10 ? n10 = new Eo(n10, t7.mode, null, t7.lineSeparator, t7.direction) : t7.mode && (n10.modeOption = t7.mode), this.doc = n10;
    var i9 = new za.inputStyles[t7.inputStyle](this), o10 = this.display = new wi(e13, n10, i9, t7);
    for (var c4 in o10.wrapper.CodeMirror = this, Ca(this), t7.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Kn(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: false, delayingBlurEvent: false, focused: false, suppressEdits: false, pasteIncoming: -1, cutIncoming: -1, selectingText: false, draggingText: false, highlight: new R2(), keySeq: null, specialChars: null }, t7.autofocus && !y2 && o10.input.focus(), a4 && l8 < 11 && setTimeout(function() {
      return r6.display.input.reset(true);
    }, 20), function(e14) {
      var t8 = e14.display;
      pe(t8.scroller, "mousedown", ni(e14, ya)), pe(t8.scroller, "dblclick", a4 && l8 < 11 ? ni(e14, function(t9) {
        if (!ye(e14, t9)) {
          var r8 = fn2(e14, t9);
          if (r8 && !ka(e14, t9) && !Sr(e14.display, t9)) {
            xe(t9);
            var n12 = e14.findWordAt(r8);
            Yi(e14.doc, n12.anchor, n12.head);
          }
        }
      }) : function(t9) {
        return ye(e14, t9) || xe(t9);
      }), pe(t8.scroller, "contextmenu", function(t9) {
        return xa(e14, t9);
      }), pe(t8.input.getField(), "contextmenu", function(r8) {
        t8.scroller.contains(r8.target) || xa(e14, r8);
      });
      var r7, n11 = { end: 0 };
      function i10() {
        t8.activeTouch && (r7 = setTimeout(function() {
          return t8.activeTouch = null;
        }, 1e3), (n11 = t8.activeTouch).end = +/* @__PURE__ */ new Date());
      }
      function o11(e15, t9) {
        if (null == t9.left)
          return true;
        var r8 = t9.left - e15.left, n12 = t9.top - e15.top;
        return r8 * r8 + n12 * n12 > 400;
      }
      pe(t8.scroller, "touchstart", function(i11) {
        if (!ye(e14, i11) && !function(e15) {
          if (1 != e15.touches.length)
            return false;
          var t9 = e15.touches[0];
          return t9.radiusX <= 1 && t9.radiusY <= 1;
        }(i11) && !ka(e14, i11)) {
          t8.input.ensurePolled(), clearTimeout(r7);
          var o12 = +/* @__PURE__ */ new Date();
          t8.activeTouch = { start: o12, moved: false, prev: o12 - n11.end <= 300 ? n11 : null }, 1 == i11.touches.length && (t8.activeTouch.left = i11.touches[0].pageX, t8.activeTouch.top = i11.touches[0].pageY);
        }
      }), pe(t8.scroller, "touchmove", function() {
        t8.activeTouch && (t8.activeTouch.moved = true);
      }), pe(t8.scroller, "touchend", function(r8) {
        var n12 = t8.activeTouch;
        if (n12 && !Sr(t8, r8) && null != n12.left && !n12.moved && /* @__PURE__ */ new Date() - n12.start < 300) {
          var a5, l9 = e14.coordsChar(t8.activeTouch, "page");
          a5 = !n12.prev || o11(n12, n12.prev) ? new Ai(l9, l9) : !n12.prev.prev || o11(n12, n12.prev.prev) ? e14.findWordAt(l9) : new Ai(nt(l9.line, 0), ut(e14.doc, nt(l9.line + 1, 0))), e14.setSelection(a5.anchor, a5.head), e14.focus(), xe(r8);
        }
        i10();
      }), pe(t8.scroller, "touchcancel", i10), pe(t8.scroller, "scroll", function() {
        t8.scroller.clientHeight && (In(e14, t8.scroller.scrollTop), Bn(e14, t8.scroller.scrollLeft, true), ve(e14, "scroll", e14));
      }), pe(t8.scroller, "mousewheel", function(t9) {
        return Ti(e14, t9);
      }), pe(t8.scroller, "DOMMouseScroll", function(t9) {
        return Ti(e14, t9);
      }), pe(t8.wrapper, "scroll", function() {
        return t8.wrapper.scrollTop = t8.wrapper.scrollLeft = 0;
      }), t8.dragFunctions = { enter: function(t9) {
        ye(e14, t9) || Te(t9);
      }, over: function(t9) {
        ye(e14, t9) || (function(e15, t10) {
          var r8 = fn2(e15, t10);
          if (r8) {
            var n12 = document.createDocumentFragment();
            kn(e15, r8, n12), e15.display.dragCursor || (e15.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e15.display.lineSpace.insertBefore(e15.display.dragCursor, e15.display.cursorDiv)), z2(e15.display.dragCursor, n12);
          }
        }(e14, t9), Te(t9));
      }, start: function(t9) {
        return function(e15, t10) {
          if (a4 && (!e15.state.draggingText || +/* @__PURE__ */ new Date() - Do < 100))
            Te(t10);
          else if (!ye(e15, t10) && !Sr(e15.display, t10) && (t10.dataTransfer.setData("Text", e15.getSelection()), t10.dataTransfer.effectAllowed = "copyMove", t10.dataTransfer.setDragImage && !h3)) {
            var r8 = O("img", null, null, "position: fixed; left: 0; top: 0;");
            r8.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", f2 && (r8.width = r8.height = 1, e15.display.wrapper.appendChild(r8), r8._top = r8.offsetTop), t10.dataTransfer.setDragImage(r8, 0, 0), f2 && r8.parentNode.removeChild(r8);
          }
        }(e14, t9);
      }, drop: ni(e14, Wo), leave: function(t9) {
        ye(e14, t9) || Fo(e14);
      } };
      var s7 = t8.input.getField();
      pe(s7, "keyup", function(t9) {
        return ha.call(e14, t9);
      }), pe(s7, "keydown", ni(e14, fa)), pe(s7, "keypress", ni(e14, pa)), pe(s7, "focus", function(t9) {
        return An(e14, t9);
      }), pe(s7, "blur", function(t9) {
        return Mn(e14, t9);
      });
    }(this), function() {
      var e14;
      Ho || (pe(window, "resize", function() {
        null == e14 && (e14 = setTimeout(function() {
          e14 = null, Io(Bo);
        }, 100));
      }), pe(window, "blur", function() {
        return Io(Mn);
      }), Ho = true);
    }(), qn(this), this.curOp.forceUpdate = true, Hi(this, n10), t7.autofocus && !y2 || this.hasFocus() ? setTimeout(function() {
      r6.hasFocus() && !r6.state.focused && An(r6);
    }, 20) : Mn(this), La)
      La.hasOwnProperty(c4) && La[c4](this, t7[c4], Sa);
    gi(this), t7.finishInit && t7.finishInit(this);
    for (var u4 = 0; u4 < Oa.length; ++u4)
      Oa[u4](this);
    Xn(this), s6 && t7.lineWrapping && "optimizelegibility" == getComputedStyle(o10.lineDiv).textRendering && (o10.lineDiv.style.textRendering = "auto");
  }
  za.defaults = Ta, za.optionHandlers = La;
  var Oa = [];
  function _a3(e13, t7, r6, n10) {
    var i9, o10 = e13.doc;
    null == r6 && (r6 = "add"), "smart" == r6 && (o10.mode.indent ? i9 = gt(e13, t7).state : r6 = "prev");
    var a5 = e13.options.tabSize, l9 = qe(o10, t7), s7 = $2(l9.text, null, a5);
    l9.stateAfter && (l9.stateAfter = null);
    var c4, u4 = l9.text.match(/^\s*/)[0];
    if (n10 || /\S/.test(l9.text)) {
      if ("smart" == r6 && ((c4 = o10.mode.indent(i9, l9.text.slice(u4.length), l9.text)) == j2 || c4 > 150)) {
        if (!n10)
          return;
        r6 = "prev";
      }
    } else
      c4 = 0, r6 = "not";
    "prev" == r6 ? c4 = t7 > o10.first ? $2(qe(o10, t7 - 1).text, null, a5) : 0 : "add" == r6 ? c4 = s7 + e13.options.indentUnit : "subtract" == r6 ? c4 = s7 - e13.options.indentUnit : "number" == typeof r6 && (c4 = s7 + r6), c4 = Math.max(0, c4);
    var d4 = "", f3 = 0;
    if (e13.options.indentWithTabs)
      for (var h4 = Math.floor(c4 / a5); h4; --h4)
        f3 += a5, d4 += "	";
    if (f3 < c4 && (d4 += X(c4 - f3)), d4 != u4)
      return yo(o10, d4, nt(t7, 0), nt(t7, u4.length), "+input"), l9.stateAfter = null, true;
    for (var p3 = 0; p3 < o10.sel.ranges.length; p3++) {
      var m3 = o10.sel.ranges[p3];
      if (m3.head.line == t7 && m3.head.ch < u4.length) {
        var g3 = nt(t7, u4.length);
        Ji(o10, p3, new Ai(g3, g3));
        break;
      }
    }
  }
  za.defineInitHook = function(e13) {
    return Oa.push(e13);
  };
  var Na = null;
  function Pa(e13) {
    Na = e13;
  }
  function Ea(e13, t7, r6, n10, i9) {
    var o10 = e13.doc;
    e13.display.shift = false, n10 || (n10 = o10.sel);
    var a5 = +/* @__PURE__ */ new Date() - 200, l9 = "paste" == i9 || e13.state.pasteIncoming > a5, s7 = Ee(t7), c4 = null;
    if (l9 && n10.ranges.length > 1)
      if (Na && Na.text.join("\n") == t7) {
        if (n10.ranges.length % Na.text.length == 0) {
          c4 = [];
          for (var u4 = 0; u4 < Na.text.length; u4++)
            c4.push(o10.splitLines(Na.text[u4]));
        }
      } else
        s7.length == n10.ranges.length && e13.options.pasteLinesPerSelection && (c4 = Q(s7, function(e14) {
          return [e14];
        }));
    for (var d4 = e13.curOp.updateInput, f3 = n10.ranges.length - 1; f3 >= 0; f3--) {
      var h4 = n10.ranges[f3], p3 = h4.from(), m3 = h4.to();
      h4.empty() && (r6 && r6 > 0 ? p3 = nt(p3.line, p3.ch - r6) : e13.state.overwrite && !l9 ? m3 = nt(m3.line, Math.min(qe(o10, m3.line).text.length, m3.ch + Y(s7).length)) : l9 && Na && Na.lineWise && Na.text.join("\n") == s7.join("\n") && (p3 = m3 = nt(p3.line, 0)));
      var g3 = { from: p3, to: m3, text: c4 ? c4[f3 % c4.length] : s7, origin: i9 || (l9 ? "paste" : e13.state.cutIncoming > a5 ? "cut" : "+input") };
      ho(e13.doc, g3), ur(e13, "inputRead", e13, g3);
    }
    t7 && !l9 && Wa(e13, t7), En(e13), e13.curOp.updateInput < 2 && (e13.curOp.updateInput = d4), e13.curOp.typing = true, e13.state.pasteIncoming = e13.state.cutIncoming = -1;
  }
  function Da(e13, t7) {
    var r6 = e13.clipboardData && e13.clipboardData.getData("Text");
    if (r6)
      return e13.preventDefault(), t7.isReadOnly() || t7.options.disableInput || !t7.hasFocus() || ri(t7, function() {
        return Ea(t7, r6, 0, null, "paste");
      }), true;
  }
  function Wa(e13, t7) {
    if (e13.options.electricChars && e13.options.smartIndent)
      for (var r6 = e13.doc.sel, n10 = r6.ranges.length - 1; n10 >= 0; n10--) {
        var i9 = r6.ranges[n10];
        if (!(i9.head.ch > 100 || n10 && r6.ranges[n10 - 1].head.line == i9.head.line)) {
          var o10 = e13.getModeAt(i9.head), a5 = false;
          if (o10.electricChars) {
            for (var l9 = 0; l9 < o10.electricChars.length; l9++)
              if (t7.indexOf(o10.electricChars.charAt(l9)) > -1) {
                a5 = _a3(e13, i9.head.line, "smart");
                break;
              }
          } else
            o10.electricInput && o10.electricInput.test(qe(e13.doc, i9.head.line).text.slice(0, i9.head.ch)) && (a5 = _a3(e13, i9.head.line, "smart"));
          a5 && ur(e13, "electricInput", e13, i9.head.line);
        }
      }
  }
  function Fa(e13) {
    for (var t7 = [], r6 = [], n10 = 0; n10 < e13.doc.sel.ranges.length; n10++) {
      var i9 = e13.doc.sel.ranges[n10].head.line, o10 = { anchor: nt(i9, 0), head: nt(i9 + 1, 0) };
      r6.push(o10), t7.push(e13.getRange(o10.anchor, o10.head));
    }
    return { text: t7, ranges: r6 };
  }
  function Ia(e13, t7, r6, n10) {
    e13.setAttribute("autocorrect", r6 ? "" : "off"), e13.setAttribute("autocapitalize", n10 ? "" : "off"), e13.setAttribute("spellcheck", !!t7);
  }
  function Ha() {
    var e13 = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), t7 = O("div", [e13], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    return s6 ? e13.style.width = "1000px" : e13.setAttribute("wrap", "off"), g2 && (e13.style.border = "1px solid black"), Ia(e13), t7;
  }
  function Ba(e13, t7, r6, n10, i9) {
    var o10 = t7, a5 = r6, l9 = qe(e13, t7.line), s7 = i9 && "rtl" == e13.direction ? -r6 : r6;
    function c4(o11) {
      var a6, c5;
      if ("codepoint" == n10) {
        var u5 = l9.text.charCodeAt(t7.ch + (r6 > 0 ? 0 : -1));
        if (isNaN(u5))
          a6 = null;
        else {
          var d5 = r6 > 0 ? u5 >= 55296 && u5 < 56320 : u5 >= 56320 && u5 < 57343;
          a6 = new nt(t7.line, Math.max(0, Math.min(l9.text.length, t7.ch + r6 * (d5 ? 2 : 1))), -r6);
        }
      } else
        a6 = i9 ? function(e14, t8, r7, n11) {
          var i10 = fe(t8, e14.doc.direction);
          if (!i10)
            return ta(t8, r7, n11);
          r7.ch >= t8.text.length ? (r7.ch = t8.text.length, r7.sticky = "before") : r7.ch <= 0 && (r7.ch = 0, r7.sticky = "after");
          var o12 = ue(i10, r7.ch, r7.sticky), a7 = i10[o12];
          if ("ltr" == e14.doc.direction && a7.level % 2 == 0 && (n11 > 0 ? a7.to > r7.ch : a7.from < r7.ch))
            return ta(t8, r7, n11);
          var l10, s8 = function(e15, r8) {
            return ea(t8, e15 instanceof nt ? e15.ch : e15, r8);
          }, c6 = function(r8) {
            return e14.options.lineWrapping ? (l10 = l10 || Er(e14, t8), en(e14, t8, l10, r8)) : { begin: 0, end: t8.text.length };
          }, u6 = c6("before" == r7.sticky ? s8(r7, -1) : r7.ch);
          if ("rtl" == e14.doc.direction || 1 == a7.level) {
            var d6 = 1 == a7.level == n11 < 0, f4 = s8(r7, d6 ? 1 : -1);
            if (null != f4 && (d6 ? f4 <= a7.to && f4 <= u6.end : f4 >= a7.from && f4 >= u6.begin)) {
              var h5 = d6 ? "before" : "after";
              return new nt(r7.line, f4, h5);
            }
          }
          var p4 = function(e15, t9, n12) {
            for (var o13 = function(e16, t10) {
              return t10 ? new nt(r7.line, s8(e16, 1), "before") : new nt(r7.line, e16, "after");
            }; e15 >= 0 && e15 < i10.length; e15 += t9) {
              var a8 = i10[e15], l11 = t9 > 0 == (1 != a8.level), c7 = l11 ? n12.begin : s8(n12.end, -1);
              if (a8.from <= c7 && c7 < a8.to)
                return o13(c7, l11);
              if (c7 = l11 ? a8.from : s8(a8.to, -1), n12.begin <= c7 && c7 < n12.end)
                return o13(c7, l11);
            }
          }, m4 = p4(o12 + n11, n11, u6);
          if (m4)
            return m4;
          var g4 = n11 > 0 ? u6.end : s8(u6.begin, -1);
          return null == g4 || n11 > 0 && g4 == t8.text.length || !(m4 = p4(n11 > 0 ? 0 : i10.length - 1, n11, c6(g4))) ? null : m4;
        }(e13.cm, l9, t7, r6) : ta(l9, t7, r6);
      if (null == a6) {
        if (o11 || (c5 = t7.line + s7) < e13.first || c5 >= e13.first + e13.size || (t7 = new nt(c5, t7.ch, t7.sticky), !(l9 = qe(e13, c5))))
          return false;
        t7 = ra(i9, e13.cm, l9, t7.line, s7);
      } else
        t7 = a6;
      return true;
    }
    if ("char" == n10 || "codepoint" == n10)
      c4();
    else if ("column" == n10)
      c4(true);
    else if ("word" == n10 || "group" == n10)
      for (var u4 = null, d4 = "group" == n10, f3 = e13.cm && e13.cm.getHelper(t7, "wordChars"), h4 = true; !(r6 < 0) || c4(!h4); h4 = false) {
        var p3 = l9.text.charAt(t7.ch) || "\n", m3 = ne(p3, f3) ? "w" : d4 && "\n" == p3 ? "n" : !d4 || /\s/.test(p3) ? null : "p";
        if (!d4 || h4 || m3 || (m3 = "s"), u4 && u4 != m3) {
          r6 < 0 && (r6 = 1, c4(), t7.sticky = "after");
          break;
        }
        if (m3 && (u4 = m3), r6 > 0 && !c4(!h4))
          break;
      }
    var g3 = so(e13, t7, o10, a5, true);
    return ot(o10, g3) && (g3.hitSide = true), g3;
  }
  function $a(e13, t7, r6, n10) {
    var i9, o10, a5 = e13.doc, l9 = t7.left;
    if ("page" == n10) {
      var s7 = Math.min(e13.display.wrapper.clientHeight, I2(e13).innerHeight || a5(e13).documentElement.clientHeight), c4 = Math.max(s7 - 0.5 * an(e13.display), 3);
      i9 = (r6 > 0 ? t7.bottom : t7.top) + r6 * c4;
    } else
      "line" == n10 && (i9 = r6 > 0 ? t7.bottom + 3 : t7.top - 3);
    for (; (o10 = Qr(e13, l9, i9)).outside; ) {
      if (r6 < 0 ? i9 <= 0 : i9 >= a5.height) {
        o10.hitSide = true;
        break;
      }
      i9 += 5 * r6;
    }
    return o10;
  }
  var Ra = function(e13) {
    this.cm = e13, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new R2(), this.composing = null, this.gracePeriod = false, this.readDOMTimeout = null;
  };
  function Za(e13, t7) {
    var r6 = Pr(e13, t7.line);
    if (!r6 || r6.hidden)
      return null;
    var n10 = qe(e13.doc, t7.line), i9 = _r(r6, n10, t7.line), o10 = fe(n10, e13.doc.direction), a5 = "left";
    o10 && (a5 = ue(o10, t7.ch) % 2 ? "right" : "left");
    var l9 = Ir(i9.map, t7.ch, a5);
    return l9.offset = "right" == l9.collapse ? l9.end : l9.start, l9;
  }
  function ja(e13, t7) {
    return t7 && (e13.bad = true), e13;
  }
  function Ua(e13, t7, r6) {
    var n10;
    if (t7 == e13.display.lineDiv) {
      if (!(n10 = e13.display.lineDiv.childNodes[r6]))
        return ja(e13.clipPos(nt(e13.display.viewTo - 1)), true);
      t7 = null, r6 = 0;
    } else
      for (n10 = t7; ; n10 = n10.parentNode) {
        if (!n10 || n10 == e13.display.lineDiv)
          return null;
        if (n10.parentNode && n10.parentNode == e13.display.lineDiv)
          break;
      }
    for (var i9 = 0; i9 < e13.display.view.length; i9++) {
      var o10 = e13.display.view[i9];
      if (o10.node == n10)
        return Va(o10, t7, r6);
    }
  }
  function Va(e13, t7, r6) {
    var n10 = e13.text.firstChild, i9 = false;
    if (!t7 || !N2(n10, t7))
      return ja(nt(Je(e13.line), 0), true);
    if (t7 == n10 && (i9 = true, t7 = n10.childNodes[r6], r6 = 0, !t7)) {
      var o10 = e13.rest ? Y(e13.rest) : e13.line;
      return ja(nt(Je(o10), o10.text.length), i9);
    }
    var a5 = 3 == t7.nodeType ? t7 : null, l9 = t7;
    for (a5 || 1 != t7.childNodes.length || 3 != t7.firstChild.nodeType || (a5 = t7.firstChild, r6 && (r6 = a5.nodeValue.length)); l9.parentNode != n10; )
      l9 = l9.parentNode;
    var s7 = e13.measure, c4 = s7.maps;
    function u4(t8, r7, n11) {
      for (var i10 = -1; i10 < (c4 ? c4.length : 0); i10++)
        for (var o11 = i10 < 0 ? s7.map : c4[i10], a6 = 0; a6 < o11.length; a6 += 3) {
          var l10 = o11[a6 + 2];
          if (l10 == t8 || l10 == r7) {
            var u5 = Je(i10 < 0 ? e13.line : e13.rest[i10]), d5 = o11[a6] + n11;
            return (n11 < 0 || l10 != t8) && (d5 = o11[a6 + (n11 ? 1 : 0)]), nt(u5, d5);
          }
        }
    }
    var d4 = u4(a5, l9, r6);
    if (d4)
      return ja(d4, i9);
    for (var f3 = l9.nextSibling, h4 = a5 ? a5.nodeValue.length - r6 : 0; f3; f3 = f3.nextSibling) {
      if (d4 = u4(f3, f3.firstChild, 0))
        return ja(nt(d4.line, d4.ch - h4), i9);
      h4 += f3.textContent.length;
    }
    for (var p3 = l9.previousSibling, m3 = r6; p3; p3 = p3.previousSibling) {
      if (d4 = u4(p3, p3.firstChild, -1))
        return ja(nt(d4.line, d4.ch + m3), i9);
      m3 += p3.textContent.length;
    }
  }
  Ra.prototype.init = function(e13) {
    var t7 = this, r6 = this, n10 = r6.cm, i9 = r6.div = e13.lineDiv;
    function o10(e14) {
      for (var t8 = e14.target; t8; t8 = t8.parentNode) {
        if (t8 == i9)
          return true;
        if (/\bCodeMirror-(?:line)?widget\b/.test(t8.className))
          break;
      }
      return false;
    }
    function a5(e14) {
      if (o10(e14) && !ye(n10, e14)) {
        if (n10.somethingSelected())
          Pa({ lineWise: false, text: n10.getSelections() }), "cut" == e14.type && n10.replaceSelection("", null, "cut");
        else {
          if (!n10.options.lineWiseCopyCut)
            return;
          var t8 = Fa(n10);
          Pa({ lineWise: true, text: t8.text }), "cut" == e14.type && n10.operation(function() {
            n10.setSelections(t8.ranges, 0, U), n10.replaceSelection("", null, "cut");
          });
        }
        if (e14.clipboardData) {
          e14.clipboardData.clearData();
          var a6 = Na.text.join("\n");
          if (e14.clipboardData.setData("Text", a6), e14.clipboardData.getData("Text") == a6)
            return void e14.preventDefault();
        }
        var l9 = Ha(), s7 = l9.firstChild;
        n10.display.lineSpace.insertBefore(l9, n10.display.lineSpace.firstChild), s7.value = Na.text.join("\n");
        var c4 = P2(i9.ownerDocument);
        W(s7), setTimeout(function() {
          n10.display.lineSpace.removeChild(l9), c4.focus(), c4 == i9 && r6.showPrimarySelection();
        }, 50);
      }
    }
    i9.contentEditable = true, Ia(i9, n10.options.spellcheck, n10.options.autocorrect, n10.options.autocapitalize), pe(i9, "paste", function(e14) {
      !o10(e14) || ye(n10, e14) || Da(e14, n10) || l8 <= 11 && setTimeout(ni(n10, function() {
        return t7.updateFromDOM();
      }), 20);
    }), pe(i9, "compositionstart", function(e14) {
      t7.composing = { data: e14.data, done: false };
    }), pe(i9, "compositionupdate", function(e14) {
      t7.composing || (t7.composing = { data: e14.data, done: false });
    }), pe(i9, "compositionend", function(e14) {
      t7.composing && (e14.data != t7.composing.data && t7.readFromDOMSoon(), t7.composing.done = true);
    }), pe(i9, "touchstart", function() {
      return r6.forceCompositionEnd();
    }), pe(i9, "input", function() {
      t7.composing || t7.readFromDOMSoon();
    }), pe(i9, "copy", a5), pe(i9, "cut", a5);
  }, Ra.prototype.screenReaderLabelChanged = function(e13) {
    e13 ? this.div.setAttribute("aria-label", e13) : this.div.removeAttribute("aria-label");
  }, Ra.prototype.prepareSelection = function() {
    var e13 = wn(this.cm, false);
    return e13.focus = P2(this.div.ownerDocument) == this.div, e13;
  }, Ra.prototype.showSelection = function(e13, t7) {
    e13 && this.cm.display.view.length && ((e13.focus || t7) && this.showPrimarySelection(), this.showMultipleSelections(e13));
  }, Ra.prototype.getSelection = function() {
    return this.cm.display.wrapper.ownerDocument.getSelection();
  }, Ra.prototype.showPrimarySelection = function() {
    var e13 = this.getSelection(), t7 = this.cm, n10 = t7.doc.sel.primary(), i9 = n10.from(), o10 = n10.to();
    if (t7.display.viewTo == t7.display.viewFrom || i9.line >= t7.display.viewTo || o10.line < t7.display.viewFrom)
      e13.removeAllRanges();
    else {
      var a5 = Ua(t7, e13.anchorNode, e13.anchorOffset), l9 = Ua(t7, e13.focusNode, e13.focusOffset);
      if (!a5 || a5.bad || !l9 || l9.bad || 0 != it(st(a5, l9), i9) || 0 != it(lt(a5, l9), o10)) {
        var s7 = t7.display.view, c4 = i9.line >= t7.display.viewFrom && Za(t7, i9) || { node: s7[0].measure.map[2], offset: 0 }, u4 = o10.line < t7.display.viewTo && Za(t7, o10);
        if (!u4) {
          var d4 = s7[s7.length - 1].measure, f3 = d4.maps ? d4.maps[d4.maps.length - 1] : d4.map;
          u4 = { node: f3[f3.length - 1], offset: f3[f3.length - 2] - f3[f3.length - 3] };
        }
        if (c4 && u4) {
          var h4, p3 = e13.rangeCount && e13.getRangeAt(0);
          try {
            h4 = L2(c4.node, c4.offset, u4.offset, u4.node);
          } catch (e14) {
          }
          h4 && (!r5 && t7.state.focused ? (e13.collapse(c4.node, c4.offset), h4.collapsed || (e13.removeAllRanges(), e13.addRange(h4))) : (e13.removeAllRanges(), e13.addRange(h4)), p3 && null == e13.anchorNode ? e13.addRange(p3) : r5 && this.startGracePeriod()), this.rememberSelection();
        } else
          e13.removeAllRanges();
      }
    }
  }, Ra.prototype.startGracePeriod = function() {
    var e13 = this;
    clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
      e13.gracePeriod = false, e13.selectionChanged() && e13.cm.operation(function() {
        return e13.cm.curOp.selectionChanged = true;
      });
    }, 20);
  }, Ra.prototype.showMultipleSelections = function(e13) {
    z2(this.cm.display.cursorDiv, e13.cursors), z2(this.cm.display.selectionDiv, e13.selection);
  }, Ra.prototype.rememberSelection = function() {
    var e13 = this.getSelection();
    this.lastAnchorNode = e13.anchorNode, this.lastAnchorOffset = e13.anchorOffset, this.lastFocusNode = e13.focusNode, this.lastFocusOffset = e13.focusOffset;
  }, Ra.prototype.selectionInEditor = function() {
    var e13 = this.getSelection();
    if (!e13.rangeCount)
      return false;
    var t7 = e13.getRangeAt(0).commonAncestorContainer;
    return N2(this.div, t7);
  }, Ra.prototype.focus = function() {
    "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && P2(this.div.ownerDocument) == this.div || this.showSelection(this.prepareSelection(), true), this.div.focus());
  }, Ra.prototype.blur = function() {
    this.div.blur();
  }, Ra.prototype.getField = function() {
    return this.div;
  }, Ra.prototype.supportsTouch = function() {
    return true;
  }, Ra.prototype.receivedFocus = function() {
    var e13 = this, t7 = this;
    this.selectionInEditor() ? setTimeout(function() {
      return e13.pollSelection();
    }, 20) : ri(this.cm, function() {
      return t7.cm.curOp.selectionChanged = true;
    }), this.polling.set(this.cm.options.pollInterval, function e14() {
      t7.cm.state.focused && (t7.pollSelection(), t7.polling.set(t7.cm.options.pollInterval, e14));
    });
  }, Ra.prototype.selectionChanged = function() {
    var e13 = this.getSelection();
    return e13.anchorNode != this.lastAnchorNode || e13.anchorOffset != this.lastAnchorOffset || e13.focusNode != this.lastFocusNode || e13.focusOffset != this.lastFocusOffset;
  }, Ra.prototype.pollSelection = function() {
    if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
      var e13 = this.getSelection(), t7 = this.cm;
      if (v2 && u3 && this.cm.display.gutterSpecs.length && function(e14) {
        for (var t8 = e14; t8; t8 = t8.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(t8.className))
            return true;
        return false;
      }(e13.anchorNode))
        return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus();
      if (!this.composing) {
        this.rememberSelection();
        var r6 = Ua(t7, e13.anchorNode, e13.anchorOffset), n10 = Ua(t7, e13.focusNode, e13.focusOffset);
        r6 && n10 && ri(t7, function() {
          ro(t7.doc, zi(r6, n10), U), (r6.bad || n10.bad) && (t7.curOp.selectionChanged = true);
        });
      }
    }
  }, Ra.prototype.pollContent = function() {
    null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
    var e13, t7, r6, n10 = this.cm, i9 = n10.display, o10 = n10.doc.sel.primary(), a5 = o10.from(), l9 = o10.to();
    if (0 == a5.ch && a5.line > n10.firstLine() && (a5 = nt(a5.line - 1, qe(n10.doc, a5.line - 1).length)), l9.ch == qe(n10.doc, l9.line).text.length && l9.line < n10.lastLine() && (l9 = nt(l9.line + 1, 0)), a5.line < i9.viewFrom || l9.line > i9.viewTo - 1)
      return false;
    a5.line == i9.viewFrom || 0 == (e13 = hn(n10, a5.line)) ? (t7 = Je(i9.view[0].line), r6 = i9.view[0].node) : (t7 = Je(i9.view[e13].line), r6 = i9.view[e13 - 1].node.nextSibling);
    var s7, c4, u4 = hn(n10, l9.line);
    if (u4 == i9.view.length - 1 ? (s7 = i9.viewTo - 1, c4 = i9.lineDiv.lastChild) : (s7 = Je(i9.view[u4 + 1].line) - 1, c4 = i9.view[u4 + 1].node.previousSibling), !r6)
      return false;
    for (var d4 = n10.doc.splitLines(function(e14, t8, r7, n11, i10) {
      var o11 = "", a6 = false, l10 = e14.doc.lineSeparator(), s8 = false;
      function c5() {
        a6 && (o11 += l10, s8 && (o11 += l10), a6 = s8 = false);
      }
      function u5(e15) {
        e15 && (c5(), o11 += e15);
      }
      function d5(t9) {
        if (1 == t9.nodeType) {
          var r8 = t9.getAttribute("cm-text");
          if (r8)
            return void u5(r8);
          var o12, f4 = t9.getAttribute("cm-marker");
          if (f4) {
            var h5 = e14.findMarks(nt(n11, 0), nt(i10 + 1, 0), (g4 = +f4, function(e15) {
              return e15.id == g4;
            }));
            return void (h5.length && (o12 = h5[0].find(0)) && u5(Xe(e14.doc, o12.from, o12.to).join(l10)));
          }
          if ("false" == t9.getAttribute("contenteditable"))
            return;
          var p4 = /^(pre|div|p|li|table|br)$/i.test(t9.nodeName);
          if (!/^br$/i.test(t9.nodeName) && 0 == t9.textContent.length)
            return;
          p4 && c5();
          for (var m4 = 0; m4 < t9.childNodes.length; m4++)
            d5(t9.childNodes[m4]);
          /^(pre|p)$/i.test(t9.nodeName) && (s8 = true), p4 && (a6 = true);
        } else
          3 == t9.nodeType && u5(t9.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        var g4;
      }
      for (; d5(t8), t8 != r7; )
        t8 = t8.nextSibling, s8 = false;
      return o11;
    }(n10, r6, c4, t7, s7)), f3 = Xe(n10.doc, nt(t7, 0), nt(s7, qe(n10.doc, s7).text.length)); d4.length > 1 && f3.length > 1; )
      if (Y(d4) == Y(f3))
        d4.pop(), f3.pop(), s7--;
      else {
        if (d4[0] != f3[0])
          break;
        d4.shift(), f3.shift(), t7++;
      }
    for (var h4 = 0, p3 = 0, m3 = d4[0], g3 = f3[0], v3 = Math.min(m3.length, g3.length); h4 < v3 && m3.charCodeAt(h4) == g3.charCodeAt(h4); )
      ++h4;
    for (var y3 = Y(d4), b3 = Y(f3), w3 = Math.min(y3.length - (1 == d4.length ? h4 : 0), b3.length - (1 == f3.length ? h4 : 0)); p3 < w3 && y3.charCodeAt(y3.length - p3 - 1) == b3.charCodeAt(b3.length - p3 - 1); )
      ++p3;
    if (1 == d4.length && 1 == f3.length && t7 == a5.line)
      for (; h4 && h4 > a5.ch && y3.charCodeAt(y3.length - p3 - 1) == b3.charCodeAt(b3.length - p3 - 1); )
        h4--, p3++;
    d4[d4.length - 1] = y3.slice(0, y3.length - p3).replace(/^\u200b+/, ""), d4[0] = d4[0].slice(h4).replace(/\u200b+$/, "");
    var k3 = nt(t7, h4), x3 = nt(s7, f3.length ? Y(f3).length - p3 : 0);
    return d4.length > 1 || d4[0] || it(k3, x3) ? (yo(n10.doc, d4, k3, x3, "+input"), true) : void 0;
  }, Ra.prototype.ensurePolled = function() {
    this.forceCompositionEnd();
  }, Ra.prototype.reset = function() {
    this.forceCompositionEnd();
  }, Ra.prototype.forceCompositionEnd = function() {
    this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
  }, Ra.prototype.readFromDOMSoon = function() {
    var e13 = this;
    null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
      if (e13.readDOMTimeout = null, e13.composing) {
        if (!e13.composing.done)
          return;
        e13.composing = null;
      }
      e13.updateFromDOM();
    }, 80));
  }, Ra.prototype.updateFromDOM = function() {
    var e13 = this;
    !this.cm.isReadOnly() && this.pollContent() || ri(this.cm, function() {
      return pn(e13.cm);
    });
  }, Ra.prototype.setUneditable = function(e13) {
    e13.contentEditable = "false";
  }, Ra.prototype.onKeyPress = function(e13) {
    0 == e13.charCode || this.composing || (e13.preventDefault(), this.cm.isReadOnly() || ni(this.cm, Ea)(this.cm, String.fromCharCode(null == e13.charCode ? e13.keyCode : e13.charCode), 0));
  }, Ra.prototype.readOnlyChanged = function(e13) {
    this.div.contentEditable = ("nocursor" != e13) + "";
  }, Ra.prototype.onContextMenu = function() {
  }, Ra.prototype.resetPosition = function() {
  }, Ra.prototype.needsContentAttribute = true;
  var Ka = function(e13) {
    this.cm = e13, this.prevInput = "", this.pollingFast = false, this.polling = new R2(), this.hasSelection = false, this.composing = null, this.resetting = false;
  };
  Ka.prototype.init = function(e13) {
    var t7 = this, r6 = this, n10 = this.cm;
    this.createField(e13);
    var i9 = this.textarea;
    function o10(e14) {
      if (!ye(n10, e14)) {
        if (n10.somethingSelected())
          Pa({ lineWise: false, text: n10.getSelections() });
        else {
          if (!n10.options.lineWiseCopyCut)
            return;
          var t8 = Fa(n10);
          Pa({ lineWise: true, text: t8.text }), "cut" == e14.type ? n10.setSelections(t8.ranges, null, U) : (r6.prevInput = "", i9.value = t8.text.join("\n"), W(i9));
        }
        "cut" == e14.type && (n10.state.cutIncoming = +/* @__PURE__ */ new Date());
      }
    }
    e13.wrapper.insertBefore(this.wrapper, e13.wrapper.firstChild), g2 && (i9.style.width = "0px"), pe(i9, "input", function() {
      a4 && l8 >= 9 && t7.hasSelection && (t7.hasSelection = null), r6.poll();
    }), pe(i9, "paste", function(e14) {
      ye(n10, e14) || Da(e14, n10) || (n10.state.pasteIncoming = +/* @__PURE__ */ new Date(), r6.fastPoll());
    }), pe(i9, "cut", o10), pe(i9, "copy", o10), pe(e13.scroller, "paste", function(t8) {
      if (!Sr(e13, t8) && !ye(n10, t8)) {
        if (!i9.dispatchEvent)
          return n10.state.pasteIncoming = +/* @__PURE__ */ new Date(), void r6.focus();
        var o11 = new Event("paste");
        o11.clipboardData = t8.clipboardData, i9.dispatchEvent(o11);
      }
    }), pe(e13.lineSpace, "selectstart", function(t8) {
      Sr(e13, t8) || xe(t8);
    }), pe(i9, "compositionstart", function() {
      var e14 = n10.getCursor("from");
      r6.composing && r6.composing.range.clear(), r6.composing = { start: e14, range: n10.markText(e14, n10.getCursor("to"), { className: "CodeMirror-composing" }) };
    }), pe(i9, "compositionend", function() {
      r6.composing && (r6.poll(), r6.composing.range.clear(), r6.composing = null);
    });
  }, Ka.prototype.createField = function(e13) {
    this.wrapper = Ha(), this.textarea = this.wrapper.firstChild;
  }, Ka.prototype.screenReaderLabelChanged = function(e13) {
    e13 ? this.textarea.setAttribute("aria-label", e13) : this.textarea.removeAttribute("aria-label");
  }, Ka.prototype.prepareSelection = function() {
    var e13 = this.cm, t7 = e13.display, r6 = e13.doc, n10 = wn(e13);
    if (e13.options.moveInputWithCursor) {
      var i9 = qr(e13, r6.sel.primary().head, "div"), o10 = t7.wrapper.getBoundingClientRect(), a5 = t7.lineDiv.getBoundingClientRect();
      n10.teTop = Math.max(0, Math.min(t7.wrapper.clientHeight - 10, i9.top + a5.top - o10.top)), n10.teLeft = Math.max(0, Math.min(t7.wrapper.clientWidth - 10, i9.left + a5.left - o10.left));
    }
    return n10;
  }, Ka.prototype.showSelection = function(e13) {
    var t7 = this.cm.display;
    z2(t7.cursorDiv, e13.cursors), z2(t7.selectionDiv, e13.selection), null != e13.teTop && (this.wrapper.style.top = e13.teTop + "px", this.wrapper.style.left = e13.teLeft + "px");
  }, Ka.prototype.reset = function(e13) {
    if (!(this.contextMenuPending || this.composing && e13)) {
      var t7 = this.cm;
      if (this.resetting = true, t7.somethingSelected()) {
        this.prevInput = "";
        var r6 = t7.getSelection();
        this.textarea.value = r6, t7.state.focused && W(this.textarea), a4 && l8 >= 9 && (this.hasSelection = r6);
      } else
        e13 || (this.prevInput = this.textarea.value = "", a4 && l8 >= 9 && (this.hasSelection = null));
      this.resetting = false;
    }
  }, Ka.prototype.getField = function() {
    return this.textarea;
  }, Ka.prototype.supportsTouch = function() {
    return false;
  }, Ka.prototype.focus = function() {
    if ("nocursor" != this.cm.options.readOnly && (!y2 || P2(this.textarea.ownerDocument) != this.textarea))
      try {
        this.textarea.focus();
      } catch (e13) {
      }
  }, Ka.prototype.blur = function() {
    this.textarea.blur();
  }, Ka.prototype.resetPosition = function() {
    this.wrapper.style.top = this.wrapper.style.left = 0;
  }, Ka.prototype.receivedFocus = function() {
    this.slowPoll();
  }, Ka.prototype.slowPoll = function() {
    var e13 = this;
    this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
      e13.poll(), e13.cm.state.focused && e13.slowPoll();
    });
  }, Ka.prototype.fastPoll = function() {
    var e13 = false, t7 = this;
    t7.pollingFast = true, t7.polling.set(20, function r6() {
      t7.poll() || e13 ? (t7.pollingFast = false, t7.slowPoll()) : (e13 = true, t7.polling.set(60, r6));
    });
  }, Ka.prototype.poll = function() {
    var e13 = this, t7 = this.cm, r6 = this.textarea, n10 = this.prevInput;
    if (this.contextMenuPending || this.resetting || !t7.state.focused || De(r6) && !n10 && !this.composing || t7.isReadOnly() || t7.options.disableInput || t7.state.keySeq)
      return false;
    var i9 = r6.value;
    if (i9 == n10 && !t7.somethingSelected())
      return false;
    if (a4 && l8 >= 9 && this.hasSelection === i9 || b2 && /[\uf700-\uf7ff]/.test(i9))
      return t7.display.input.reset(), false;
    if (t7.doc.sel == t7.display.selForContextMenu) {
      var o10 = i9.charCodeAt(0);
      if (8203 != o10 || n10 || (n10 = "\u200B"), 8666 == o10)
        return this.reset(), this.cm.execCommand("undo");
    }
    for (var s7 = 0, c4 = Math.min(n10.length, i9.length); s7 < c4 && n10.charCodeAt(s7) == i9.charCodeAt(s7); )
      ++s7;
    return ri(t7, function() {
      Ea(t7, i9.slice(s7), n10.length - s7, null, e13.composing ? "*compose" : null), i9.length > 1e3 || i9.indexOf("\n") > -1 ? r6.value = e13.prevInput = "" : e13.prevInput = i9, e13.composing && (e13.composing.range.clear(), e13.composing.range = t7.markText(e13.composing.start, t7.getCursor("to"), { className: "CodeMirror-composing" }));
    }), true;
  }, Ka.prototype.ensurePolled = function() {
    this.pollingFast && this.poll() && (this.pollingFast = false);
  }, Ka.prototype.onKeyPress = function() {
    a4 && l8 >= 9 && (this.hasSelection = null), this.fastPoll();
  }, Ka.prototype.onContextMenu = function(e13) {
    var t7 = this, r6 = t7.cm, n10 = r6.display, i9 = t7.textarea;
    t7.contextMenuPending && t7.contextMenuPending();
    var o10 = fn2(r6, e13), c4 = n10.scroller.scrollTop;
    if (o10 && !f2) {
      r6.options.resetSelectionOnContextMenu && -1 == r6.doc.sel.contains(o10) && ni(r6, ro)(r6.doc, zi(o10), U);
      var u4, d4 = i9.style.cssText, h4 = t7.wrapper.style.cssText, p3 = t7.wrapper.offsetParent.getBoundingClientRect();
      if (t7.wrapper.style.cssText = "position: static", i9.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e13.clientY - p3.top - 5) + "px; left: " + (e13.clientX - p3.left - 5) + "px;\n      z-index: 1000; background: " + (a4 ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", s6 && (u4 = i9.ownerDocument.defaultView.scrollY), n10.input.focus(), s6 && i9.ownerDocument.defaultView.scrollTo(null, u4), n10.input.reset(), r6.somethingSelected() || (i9.value = t7.prevInput = " "), t7.contextMenuPending = v3, n10.selForContextMenu = r6.doc.sel, clearTimeout(n10.detectingSelectAll), a4 && l8 >= 9 && g3(), S3) {
        Te(e13);
        var m3 = function() {
          ge(window, "mouseup", m3), setTimeout(v3, 20);
        };
        pe(window, "mouseup", m3);
      } else
        setTimeout(v3, 50);
    }
    function g3() {
      if (null != i9.selectionStart) {
        var e14 = r6.somethingSelected(), o11 = "\u200B" + (e14 ? i9.value : "");
        i9.value = "\u21DA", i9.value = o11, t7.prevInput = e14 ? "" : "\u200B", i9.selectionStart = 1, i9.selectionEnd = o11.length, n10.selForContextMenu = r6.doc.sel;
      }
    }
    function v3() {
      if (t7.contextMenuPending == v3 && (t7.contextMenuPending = false, t7.wrapper.style.cssText = h4, i9.style.cssText = d4, a4 && l8 < 9 && n10.scrollbars.setScrollTop(n10.scroller.scrollTop = c4), null != i9.selectionStart)) {
        (!a4 || a4 && l8 < 9) && g3();
        var e14 = 0, o11 = function() {
          n10.selForContextMenu == r6.doc.sel && 0 == i9.selectionStart && i9.selectionEnd > 0 && "\u200B" == t7.prevInput ? ni(r6, uo)(r6) : e14++ < 10 ? n10.detectingSelectAll = setTimeout(o11, 500) : (n10.selForContextMenu = null, n10.input.reset());
        };
        n10.detectingSelectAll = setTimeout(o11, 200);
      }
    }
  }, Ka.prototype.readOnlyChanged = function(e13) {
    e13 || this.reset(), this.textarea.disabled = "nocursor" == e13, this.textarea.readOnly = !!e13;
  }, Ka.prototype.setUneditable = function() {
  }, Ka.prototype.needsContentAttribute = false, function(e13) {
    var t7 = e13.optionHandlers;
    function r6(r7, n10, i9, o10) {
      e13.defaults[r7] = n10, i9 && (t7[r7] = o10 ? function(e14, t8, r8) {
        r8 != Sa && i9(e14, t8, r8);
      } : i9);
    }
    e13.defineOption = r6, e13.Init = Sa, r6("value", "", function(e14, t8) {
      return e14.setValue(t8);
    }, true), r6("mode", null, function(e14, t8) {
      e14.doc.modeOption = t8, Ei(e14);
    }, true), r6("indentUnit", 2, Ei, true), r6("indentWithTabs", false), r6("smartIndent", true), r6("tabSize", 4, function(e14) {
      Di(e14), Rr(e14), pn(e14);
    }, true), r6("lineSeparator", null, function(e14, t8) {
      if (e14.doc.lineSep = t8, t8) {
        var r7 = [], n10 = e14.doc.first;
        e14.doc.iter(function(e15) {
          for (var i10 = 0; ; ) {
            var o10 = e15.text.indexOf(t8, i10);
            if (-1 == o10)
              break;
            i10 = o10 + t8.length, r7.push(nt(n10, o10));
          }
          n10++;
        });
        for (var i9 = r7.length - 1; i9 >= 0; i9--)
          yo(e14.doc, t8, r7[i9], nt(r7[i9].line, r7[i9].ch + t8.length));
      }
    }), r6("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(e14, t8, r7) {
      e14.state.specialChars = RegExp(t8.source + (t8.test("	") ? "" : "|	"), "g"), r7 != Sa && e14.refresh();
    }), r6("specialCharPlaceholder", tr, function(e14) {
      return e14.refresh();
    }, true), r6("electricChars", true), r6("inputStyle", y2 ? "contenteditable" : "textarea", function() {
      throw Error("inputStyle can not (yet) be changed in a running editor");
    }, true), r6("spellcheck", false, function(e14, t8) {
      return e14.getInputField().spellcheck = t8;
    }, true), r6("autocorrect", false, function(e14, t8) {
      return e14.getInputField().autocorrect = t8;
    }, true), r6("autocapitalize", false, function(e14, t8) {
      return e14.getInputField().autocapitalize = t8;
    }, true), r6("rtlMoveVisually", !k2), r6("wholeLineUpdateBefore", true), r6("theme", "default", function(e14) {
      Ca(e14), bi(e14);
    }, true), r6("keyMap", "default", function(e14, t8, r7) {
      var n10 = Qo(t8), i9 = r7 != Sa && Qo(r7);
      i9 && i9.detach && i9.detach(e14, n10), n10.attach && n10.attach(e14, i9 || null);
    }), r6("extraKeys", null), r6("configureMouse", null), r6("lineWrapping", false, Ma, true), r6("gutters", [], function(e14, t8) {
      e14.display.gutterSpecs = vi(t8, e14.options.lineNumbers), bi(e14);
    }, true), r6("fixedGutter", true, function(e14, t8) {
      e14.display.gutters.style.left = t8 ? cn(e14.display) + "px" : "0", e14.refresh();
    }, true), r6("coverGutterNextToScrollbar", false, function(e14) {
      return jn(e14);
    }, true), r6("scrollbarStyle", "native", function(e14) {
      Kn(e14), jn(e14), e14.display.scrollbars.setScrollTop(e14.doc.scrollTop), e14.display.scrollbars.setScrollLeft(e14.doc.scrollLeft);
    }, true), r6("lineNumbers", false, function(e14, t8) {
      e14.display.gutterSpecs = vi(e14.options.gutters, t8), bi(e14);
    }, true), r6("firstLineNumber", 1, bi, true), r6("lineNumberFormatter", function(e14) {
      return e14;
    }, bi, true), r6("showCursorWhenSelecting", false, bn, true), r6("resetSelectionOnContextMenu", true), r6("lineWiseCopyCut", true), r6("pasteLinesPerSelection", true), r6("selectionsMayTouch", false), r6("readOnly", false, function(e14, t8) {
      "nocursor" == t8 && (Mn(e14), e14.display.input.blur()), e14.display.input.readOnlyChanged(t8);
    }), r6("screenReaderLabel", null, function(e14, t8) {
      t8 = "" === t8 ? null : t8, e14.display.input.screenReaderLabelChanged(t8);
    }), r6("disableInput", false, function(e14, t8) {
      t8 || e14.display.input.reset();
    }, true), r6("dragDrop", true, Aa), r6("allowDropFileTypes", null), r6("cursorBlinkRate", 530), r6("cursorScrollMargin", 0), r6("cursorHeight", 1, bn, true), r6("singleCursorHeightPerLine", true, bn, true), r6("workTime", 100), r6("workDelay", 100), r6("flattenSpans", true, Di, true), r6("addModeClass", false, Di, true), r6("pollInterval", 100), r6("undoDepth", 200, function(e14, t8) {
      return e14.doc.history.undoDepth = t8;
    }), r6("historyEventDelay", 1250), r6("viewportMargin", 10, function(e14) {
      return e14.refresh();
    }, true), r6("maxHighlightLength", 1e4, Di, true), r6("moveInputWithCursor", true, function(e14, t8) {
      t8 || e14.display.input.resetPosition();
    }), r6("tabindex", null, function(e14, t8) {
      return e14.display.input.getField().tabIndex = t8 || "";
    }), r6("autofocus", null), r6("direction", "ltr", function(e14, t8) {
      return e14.doc.setDirection(t8);
    }, true), r6("phrases", null);
  }(za), function(e13) {
    var t7 = e13.optionHandlers, r6 = e13.helpers = {};
    e13.prototype = { constructor: e13, focus: function() {
      I2(this).focus(), this.display.input.focus();
    }, setOption: function(e14, r7) {
      var n10 = this.options, i9 = n10[e14];
      n10[e14] == r7 && "mode" != e14 || (n10[e14] = r7, t7.hasOwnProperty(e14) && ni(this, t7[e14])(this, r7, i9), ve(this, "optionChange", this, e14));
    }, getOption: function(e14) {
      return this.options[e14];
    }, getDoc: function() {
      return this.doc;
    }, addKeyMap: function(e14, t8) {
      this.state.keyMaps[t8 ? "push" : "unshift"](Qo(e14));
    }, removeKeyMap: function(e14) {
      for (var t8 = this.state.keyMaps, r7 = 0; r7 < t8.length; ++r7)
        if (t8[r7] == e14 || t8[r7].name == e14)
          return t8.splice(r7, 1), true;
    }, addOverlay: ii(function(t8, r7) {
      var n10 = t8.token ? t8 : e13.getMode(this.options, t8);
      if (n10.startState)
        throw Error("Overlays may not be stateful.");
      !function(e14, t9, r8) {
        for (var n11 = 0, i9 = r8(t9); n11 < e14.length && r8(e14[n11]) <= i9; )
          n11++;
        e14.splice(n11, 0, t9);
      }(this.state.overlays, { mode: n10, modeSpec: t8, opaque: r7 && r7.opaque, priority: r7 && r7.priority || 0 }, function(e14) {
        return e14.priority;
      }), this.state.modeGen++, pn(this);
    }), removeOverlay: ii(function(e14) {
      for (var t8 = this.state.overlays, r7 = 0; r7 < t8.length; ++r7) {
        var n10 = t8[r7].modeSpec;
        if (n10 == e14 || "string" == typeof e14 && n10.name == e14)
          return t8.splice(r7, 1), this.state.modeGen++, void pn(this);
      }
    }), indentLine: ii(function(e14, t8, r7) {
      "string" != typeof t8 && "number" != typeof t8 && (t8 = null == t8 ? this.options.smartIndent ? "smart" : "prev" : t8 ? "add" : "subtract"), tt(this.doc, e14) && _a3(this, e14, t8, r7);
    }), indentSelection: ii(function(e14) {
      for (var t8 = this.doc.sel.ranges, r7 = -1, n10 = 0; n10 < t8.length; n10++) {
        var i9 = t8[n10];
        if (i9.empty())
          i9.head.line > r7 && (_a3(this, i9.head.line, e14, true), r7 = i9.head.line, n10 == this.doc.sel.primIndex && En(this));
        else {
          var o10 = i9.from(), a5 = i9.to(), l9 = Math.max(r7, o10.line);
          r7 = Math.min(this.lastLine(), a5.line - (a5.ch ? 0 : 1)) + 1;
          for (var s7 = l9; s7 < r7; ++s7)
            _a3(this, s7, e14);
          var c4 = this.doc.sel.ranges;
          0 == o10.ch && t8.length == c4.length && c4[n10].from().ch > 0 && Ji(this.doc, n10, new Ai(o10, c4[n10].to()), U);
        }
      }
    }), getTokenAt: function(e14, t8) {
      return kt(this, e14, t8);
    }, getLineTokens: function(e14, t8) {
      return kt(this, nt(e14), t8, true);
    }, getTokenTypeAt: function(e14) {
      e14 = ut(this.doc, e14);
      var t8, r7 = mt(this, qe(this.doc, e14.line)), n10 = 0, i9 = (r7.length - 1) / 2, o10 = e14.ch;
      if (0 == o10)
        t8 = r7[2];
      else
        for (; ; ) {
          var a5 = n10 + i9 >> 1;
          if ((a5 ? r7[2 * a5 - 1] : 0) >= o10)
            i9 = a5;
          else {
            if (!(r7[2 * a5 + 1] < o10)) {
              t8 = r7[2 * a5 + 2];
              break;
            }
            n10 = a5 + 1;
          }
        }
      var l9 = t8 ? t8.indexOf("overlay ") : -1;
      return l9 < 0 ? t8 : 0 == l9 ? null : t8.slice(0, l9 - 1);
    }, getModeAt: function(t8) {
      var r7 = this.doc.mode;
      return r7.innerMode ? e13.innerMode(r7, this.getTokenAt(t8).state).mode : r7;
    }, getHelper: function(e14, t8) {
      return this.getHelpers(e14, t8)[0];
    }, getHelpers: function(e14, t8) {
      var n10 = [];
      if (!r6.hasOwnProperty(t8))
        return n10;
      var i9 = r6[t8], o10 = this.getModeAt(e14);
      if ("string" == typeof o10[t8])
        i9[o10[t8]] && n10.push(i9[o10[t8]]);
      else if (o10[t8])
        for (var a5 = 0; a5 < o10[t8].length; a5++) {
          var l9 = i9[o10[t8][a5]];
          l9 && n10.push(l9);
        }
      else
        o10.helperType && i9[o10.helperType] ? n10.push(i9[o10.helperType]) : i9[o10.name] && n10.push(i9[o10.name]);
      for (var s7 = 0; s7 < i9._global.length; s7++) {
        var c4 = i9._global[s7];
        c4.pred(o10, this) && -1 == Z2(n10, c4.val) && n10.push(c4.val);
      }
      return n10;
    }, getStateAfter: function(e14, t8) {
      var r7 = this.doc;
      return gt(this, (e14 = ct(r7, null == e14 ? r7.first + r7.size - 1 : e14)) + 1, t8).state;
    }, cursorCoords: function(e14, t8) {
      var r7 = this.doc.sel.primary();
      return qr(this, null == e14 ? r7.head : "object" == typeof e14 ? ut(this.doc, e14) : e14 ? r7.from() : r7.to(), t8 || "page");
    }, charCoords: function(e14, t8) {
      return Gr(this, ut(this.doc, e14), t8 || "page");
    }, coordsChar: function(e14, t8) {
      return Qr(this, (e14 = Kr(this, e14, t8 || "page")).left, e14.top);
    }, lineAtHeight: function(e14, t8) {
      return e14 = Kr(this, { top: e14, left: 0 }, t8 || "page").top, et(this.doc, e14 + this.display.viewOffset);
    }, heightAtLine: function(e14, t8, r7) {
      var n10, i9 = false;
      if ("number" == typeof e14) {
        var o10 = this.doc.first + this.doc.size - 1;
        e14 < this.doc.first ? e14 = this.doc.first : e14 > o10 && (e14 = o10, i9 = true), n10 = qe(this.doc, e14);
      } else
        n10 = e14;
      return Vr(this, n10, { top: 0, left: 0 }, t8 || "page", r7 || i9).top + (i9 ? this.doc.height - Vt(n10) : 0);
    }, defaultTextHeight: function() {
      return an(this.display);
    }, defaultCharWidth: function() {
      return ln(this.display);
    }, getViewport: function() {
      return { from: this.display.viewFrom, to: this.display.viewTo };
    }, addWidget: function(e14, t8, r7, n10, i9) {
      var o10, a5, l9 = this.display, s7 = (e14 = qr(this, ut(this.doc, e14))).bottom, c4 = e14.left;
      if (t8.style.position = "absolute", t8.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t8), l9.sizer.appendChild(t8), "over" == n10)
        s7 = e14.top;
      else if ("above" == n10 || "near" == n10) {
        var u4 = Math.max(l9.wrapper.clientHeight, this.doc.height), d4 = Math.max(l9.sizer.clientWidth, l9.lineSpace.clientWidth);
        ("above" == n10 || e14.bottom + t8.offsetHeight > u4) && e14.top > t8.offsetHeight ? s7 = e14.top - t8.offsetHeight : e14.bottom + t8.offsetHeight <= u4 && (s7 = e14.bottom), c4 + t8.offsetWidth > d4 && (c4 = d4 - t8.offsetWidth);
      }
      t8.style.top = s7 + "px", t8.style.left = t8.style.right = "", "right" == i9 ? (c4 = l9.sizer.clientWidth - t8.offsetWidth, t8.style.right = "0px") : ("left" == i9 ? c4 = 0 : "middle" == i9 && (c4 = (l9.sizer.clientWidth - t8.offsetWidth) / 2), t8.style.left = c4 + "px"), r7 && (null != (a5 = Nn(o10 = this, { left: c4, top: s7, right: c4 + t8.offsetWidth, bottom: s7 + t8.offsetHeight })).scrollTop && In(o10, a5.scrollTop), null != a5.scrollLeft && Bn(o10, a5.scrollLeft));
    }, triggerOnKeyDown: ii(fa), triggerOnKeyPress: ii(pa), triggerOnKeyUp: ha, triggerOnMouseDown: ii(ya), execCommand: function(e14) {
      if (na.hasOwnProperty(e14))
        return na[e14].call(null, this);
    }, triggerElectric: ii(function(e14) {
      Wa(this, e14);
    }), findPosH: function(e14, t8, r7, n10) {
      var i9 = 1;
      t8 < 0 && (i9 = -1, t8 = -t8);
      for (var o10 = ut(this.doc, e14), a5 = 0; a5 < t8 && !(o10 = Ba(this.doc, o10, i9, r7, n10)).hitSide; ++a5)
        ;
      return o10;
    }, moveH: ii(function(e14, t8) {
      var r7 = this;
      this.extendSelectionsBy(function(n10) {
        return r7.display.shift || r7.doc.extend || n10.empty() ? Ba(r7.doc, n10.head, e14, t8, r7.options.rtlMoveVisually) : e14 < 0 ? n10.from() : n10.to();
      }, K);
    }), deleteH: ii(function(e14, t8) {
      var r7 = this.doc.sel, n10 = this.doc;
      r7.somethingSelected() ? n10.replaceSelection("", null, "+delete") : Jo(this, function(r8) {
        var i9 = Ba(n10, r8.head, e14, t8, false);
        return e14 < 0 ? { from: i9, to: r8.head } : { from: r8.head, to: i9 };
      });
    }), findPosV: function(e14, t8, r7, n10) {
      var i9 = 1, o10 = n10;
      t8 < 0 && (i9 = -1, t8 = -t8);
      for (var a5 = ut(this.doc, e14), l9 = 0; l9 < t8; ++l9) {
        var s7 = qr(this, a5, "div");
        if (null == o10 ? o10 = s7.left : s7.left = o10, (a5 = $a(this, s7, i9, r7)).hitSide)
          break;
      }
      return a5;
    }, moveV: ii(function(e14, t8) {
      var r7 = this, n10 = this.doc, i9 = [], o10 = !this.display.shift && !n10.extend && n10.sel.somethingSelected();
      if (n10.extendSelectionsBy(function(a6) {
        if (o10)
          return e14 < 0 ? a6.from() : a6.to();
        var l9 = qr(r7, a6.head, "div");
        null != a6.goalColumn && (l9.left = a6.goalColumn), i9.push(l9.left);
        var s7 = $a(r7, l9, e14, t8);
        return "page" == t8 && a6 == n10.sel.primary() && Pn(r7, Gr(r7, s7, "div").top - l9.top), s7;
      }, K), i9.length)
        for (var a5 = 0; a5 < n10.sel.ranges.length; a5++)
          n10.sel.ranges[a5].goalColumn = i9[a5];
    }), findWordAt: function(e14) {
      var t8 = qe(this.doc, e14.line).text, r7 = e14.ch, n10 = e14.ch;
      if (t8) {
        var i9 = this.getHelper(e14, "wordChars");
        "before" != e14.sticky && n10 != t8.length || !r7 ? ++n10 : --r7;
        for (var o10 = t8.charAt(r7), a5 = ne(o10, i9) ? function(e15) {
          return ne(e15, i9);
        } : /\s/.test(o10) ? function(e15) {
          return /\s/.test(e15);
        } : function(e15) {
          return !/\s/.test(e15) && !ne(e15);
        }; r7 > 0 && a5(t8.charAt(r7 - 1)); )
          --r7;
        for (; n10 < t8.length && a5(t8.charAt(n10)); )
          ++n10;
      }
      return new Ai(nt(e14.line, r7), nt(e14.line, n10));
    }, toggleOverwrite: function(e14) {
      null != e14 && e14 == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? E2(this.display.cursorDiv, "CodeMirror-overwrite") : A2(this.display.cursorDiv, "CodeMirror-overwrite"), ve(this, "overwriteToggle", this, this.state.overwrite));
    }, hasFocus: function() {
      return this.display.input.getField() == P2(F(this));
    }, isReadOnly: function() {
      return !(!this.options.readOnly && !this.doc.cantEdit);
    }, scrollTo: ii(function(e14, t8) {
      Dn(this, e14, t8);
    }), getScrollInfo: function() {
      var e14 = this.display.scroller;
      return { left: e14.scrollLeft, top: e14.scrollTop, height: e14.scrollHeight - Mr(this) - this.display.barHeight, width: e14.scrollWidth - Mr(this) - this.display.barWidth, clientHeight: Or(this), clientWidth: zr(this) };
    }, scrollIntoView: ii(function(e14, t8) {
      null == e14 ? (e14 = { from: this.doc.sel.primary().head, to: null }, null == t8 && (t8 = this.options.cursorScrollMargin)) : "number" == typeof e14 ? e14 = { from: nt(e14, 0), to: null } : null == e14.from && (e14 = { from: e14, to: null }), e14.to || (e14.to = e14.from), e14.margin = t8 || 0, null != e14.from.line ? function(e15, t9) {
        Wn(e15), e15.curOp.scrollToPos = t9;
      }(this, e14) : Fn(this, e14.from, e14.to, e14.margin);
    }), setSize: ii(function(e14, t8) {
      var r7 = this, n10 = function(e15) {
        return "number" == typeof e15 || /^\d+$/.test(e15 + "") ? e15 + "px" : e15;
      };
      null != e14 && (this.display.wrapper.style.width = n10(e14)), null != t8 && (this.display.wrapper.style.height = n10(t8)), this.options.lineWrapping && $r(this);
      var i9 = this.display.viewFrom;
      this.doc.iter(i9, this.display.viewTo, function(e15) {
        if (e15.widgets) {
          for (var t9 = 0; t9 < e15.widgets.length; t9++)
            if (e15.widgets[t9].noHScroll) {
              mn(r7, i9, "widget");
              break;
            }
        }
        ++i9;
      }), this.curOp.forceUpdate = true, ve(this, "refresh", this);
    }), operation: function(e14) {
      return ri(this, e14);
    }, startOperation: function() {
      return qn(this);
    }, endOperation: function() {
      return Xn(this);
    }, refresh: ii(function() {
      var e14 = this.display.cachedTextHeight;
      pn(this), this.curOp.forceUpdate = true, Rr(this), Dn(this, this.doc.scrollLeft, this.doc.scrollTop), hi(this.display), (null == e14 || Math.abs(e14 - an(this.display)) > 0.5 || this.options.lineWrapping) && dn(this), ve(this, "refresh", this);
    }), swapDoc: ii(function(e14) {
      var t8 = this.doc;
      return t8.cm = null, this.state.selectingText && this.state.selectingText(), Hi(this, e14), Rr(this), this.display.input.reset(), Dn(this, e14.scrollLeft, e14.scrollTop), this.curOp.forceScroll = true, ur(this, "swapDoc", this, t8), t8;
    }), phrase: function(e14) {
      var t8 = this.options.phrases;
      return t8 && Object.prototype.hasOwnProperty.call(t8, e14) ? t8[e14] : e14;
    }, getInputField: function() {
      return this.display.input.getField();
    }, getWrapperElement: function() {
      return this.display.wrapper;
    }, getScrollerElement: function() {
      return this.display.scroller;
    }, getGutterElement: function() {
      return this.display.gutters;
    } }, ke(e13), e13.registerHelper = function(t8, n10, i9) {
      r6.hasOwnProperty(t8) || (r6[t8] = e13[t8] = { _global: [] }), r6[t8][n10] = i9;
    }, e13.registerGlobalHelper = function(t8, n10, i9, o10) {
      e13.registerHelper(t8, n10, o10), r6[t8]._global.push({ pred: i9, val: o10 });
    };
  }(za);
  var Ga = "iter insert remove copy getEditor constructor".split(" ");
  for (var qa in Eo.prototype)
    Eo.prototype.hasOwnProperty(qa) && Z2(Ga, qa) < 0 && (za.prototype[qa] = function(e13) {
      return function() {
        return e13.apply(this.doc, arguments);
      };
    }(Eo.prototype[qa]));
  return ke(Eo), za.inputStyles = { textarea: Ka, contenteditable: Ra }, za.defineMode = function(e13) {
    za.defaults.mode || "null" == e13 || (za.defaults.mode = e13), Be.apply(this, arguments);
  }, za.defineMIME = function(e13, t7) {
    He[e13] = t7;
  }, za.defineMode("null", function() {
    return { token: function(e13) {
      return e13.skipToEnd();
    } };
  }), za.defineMIME("text/plain", "null"), za.defineExtension = function(e13, t7) {
    za.prototype[e13] = t7;
  }, za.defineDocExtension = function(e13, t7) {
    Eo.prototype[e13] = t7;
  }, za.fromTextArea = function(e13, t7) {
    if ((t7 = t7 ? B2(t7) : {}).value = e13.value, !t7.tabindex && e13.tabIndex && (t7.tabindex = e13.tabIndex), !t7.placeholder && e13.placeholder && (t7.placeholder = e13.placeholder), null == t7.autofocus) {
      var r6 = P2(e13.ownerDocument);
      t7.autofocus = r6 == e13 || null != e13.getAttribute("autofocus") && r6 == document.body;
    }
    function n10() {
      e13.value = l9.getValue();
    }
    var i9;
    if (e13.form && (pe(e13.form, "submit", n10), !t7.leaveSubmitMethodAlone)) {
      var o10 = e13.form;
      i9 = o10.submit;
      try {
        var a5 = o10.submit = function() {
          n10(), o10.submit = i9, o10.submit(), o10.submit = a5;
        };
      } catch (e14) {
      }
    }
    t7.finishInit = function(r7) {
      r7.save = n10, r7.getTextArea = function() {
        return e13;
      }, r7.toTextArea = function() {
        r7.toTextArea = isNaN, n10(), e13.parentNode.removeChild(r7.getWrapperElement()), e13.style.display = "", e13.form && (ge(e13.form, "submit", n10), t7.leaveSubmitMethodAlone || "function" != typeof e13.form.submit || (e13.form.submit = i9));
      };
    }, e13.style.display = "none";
    var l9 = za(function(t8) {
      return e13.parentNode.insertBefore(t8, e13.nextSibling);
    }, t7);
    return l9;
  }, function(e13) {
    e13.off = ge, e13.on = pe, e13.wheelEventPixels = Si, e13.Doc = Eo, e13.splitLines = Ee, e13.countColumn = $2, e13.findColumn = G, e13.isWordChar = re, e13.Pass = j2, e13.signal = ve, e13.Line = qt, e13.changeEnd = Oi, e13.scrollbarModel = Vn, e13.Pos = nt, e13.cmpPos = it, e13.modes = Ie, e13.mimeModes = He, e13.resolveMode = $e, e13.getMode = Re, e13.modeExtensions = Ze, e13.extendMode = je, e13.copyState = Ue, e13.startState = Ke, e13.innerMode = Ve, e13.commands = na, e13.keyMap = Uo, e13.keyName = Yo, e13.isModifierKey = qo, e13.lookupKey = Go, e13.normalizeKeyMap = Ko, e13.StringStream = Ge, e13.SharedTextMarker = Oo, e13.TextMarker = Mo, e13.LineWidget = To, e13.e_preventDefault = xe, e13.e_stopPropagation = Ce, e13.e_stop = Te, e13.addClass = E2, e13.contains = N2, e13.rmClass = A2, e13.keyNames = $o;
  }(za), za.version = "5.65.9", za;
}, (window || self).CodeMirror = e11(), function(e12) {
  function t6(e13, t7) {
    if (this.cm = e13, this.options = t7, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, this.options.updateOnCursorActivity) {
      var r6 = this;
      e13.on("cursorActivity", this.activityFunc = function() {
        r6.cursorActivity();
      });
    }
  }
  e12.showHint = function(e13, t7, r6) {
    if (!t7)
      return e13.showHint(r6);
    r6 && r6.async && (t7.async = true);
    var n10 = { hint: t7 };
    if (r6)
      for (var i9 in r6)
        n10[i9] = r6[i9];
    return e13.showHint(n10);
  }, e12.defineExtension("showHint", function(r6) {
    r6 = function(e13, t7, r7) {
      var n11 = e13.options.hintOptions, i10 = {};
      for (var o11 in s6)
        i10[o11] = s6[o11];
      if (n11)
        for (var o11 in n11)
          void 0 !== n11[o11] && (i10[o11] = n11[o11]);
      if (r7)
        for (var o11 in r7)
          void 0 !== r7[o11] && (i10[o11] = r7[o11]);
      return i10.hint.resolve && (i10.hint = i10.hint.resolve(e13, t7)), i10;
    }(this, this.getCursor("start"), r6);
    var n10 = this.listSelections();
    if (!(n10.length > 1)) {
      if (this.somethingSelected()) {
        if (!r6.hint.supportsSelection)
          return;
        for (var i9 = 0; i9 < n10.length; i9++)
          if (n10[i9].head.line != n10[i9].anchor.line)
            return;
      }
      this.state.completionActive && this.state.completionActive.close();
      var o10 = this.state.completionActive = new t6(this, r6);
      o10.options.hint && (e12.signal(this, "startCompletion", this), o10.update(true));
    }
  }), e12.defineExtension("closeHint", function() {
    this.state.completionActive && this.state.completionActive.close();
  });
  var r5 = window.requestAnimationFrame || function(e13) {
    return setTimeout(e13, 1e3 / 60);
  }, n9 = window.cancelAnimationFrame || clearTimeout;
  function i8(e13) {
    return "string" == typeof e13 ? e13 : e13.text;
  }
  function o9(e13, t7) {
    for (; t7 && t7 != e13; ) {
      if ("LI" === t7.nodeName.toUpperCase() && t7.parentNode == e13)
        return t7;
      t7 = t7.parentNode;
    }
  }
  function a4(t7, r6) {
    this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = t7, this.data = r6, this.picked = false;
    var n10 = this, a5 = t7.cm, l9 = a5.getInputField().ownerDocument, s7 = l9.defaultView || l9.parentWindow, c3 = this.hints = l9.createElement("ul");
    c3.setAttribute("role", "listbox"), c3.setAttribute("aria-expanded", "true"), c3.id = this.id;
    var u3 = t7.cm.options.theme;
    c3.className = "CodeMirror-hints " + u3, this.selectedHint = r6.selectedHint || 0;
    for (var d3 = r6.list, f2 = 0; f2 < d3.length; ++f2) {
      var h3 = c3.appendChild(l9.createElement("li")), p2 = d3[f2], m2 = "CodeMirror-hint" + (f2 != this.selectedHint ? "" : " CodeMirror-hint-active");
      null != p2.className && (m2 = p2.className + " " + m2), h3.className = m2, f2 == this.selectedHint && h3.setAttribute("aria-selected", "true"), h3.id = this.id + "-" + f2, h3.setAttribute("role", "option"), p2.render ? p2.render(h3, r6, p2) : h3.appendChild(l9.createTextNode(p2.displayText || i8(p2))), h3.hintId = f2;
    }
    var g2 = t7.options.container || l9.body, v2 = a5.cursorCoords(t7.options.alignWithWord ? r6.from : null), y2 = v2.left, b2 = v2.bottom, w2 = true, k2 = 0, x2 = 0;
    if (g2 !== l9.body) {
      var C2 = -1 !== ["absolute", "relative", "fixed"].indexOf(s7.getComputedStyle(g2).position) ? g2 : g2.offsetParent, S3 = C2.getBoundingClientRect(), T2 = l9.body.getBoundingClientRect();
      k2 = S3.left - T2.left - C2.scrollLeft, x2 = S3.top - T2.top - C2.scrollTop;
    }
    c3.style.left = y2 - k2 + "px", c3.style.top = b2 - x2 + "px";
    var L2 = s7.innerWidth || Math.max(l9.body.offsetWidth, l9.documentElement.offsetWidth), A2 = s7.innerHeight || Math.max(l9.body.offsetHeight, l9.documentElement.offsetHeight);
    g2.appendChild(c3), a5.getInputField().setAttribute("aria-autocomplete", "list"), a5.getInputField().setAttribute("aria-owns", this.id), a5.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
    var M2, z2 = t7.options.moveOnOverlap ? c3.getBoundingClientRect() : new DOMRect(), O = !!t7.options.paddingForScrollbar && c3.scrollHeight > c3.clientHeight + 1;
    if (setTimeout(function() {
      M2 = a5.getScrollInfo();
    }), z2.bottom - A2 > 0) {
      var _2 = z2.bottom - z2.top, N2 = z2.top - (v2.bottom - v2.top) - 2;
      A2 - z2.top < N2 ? (_2 > N2 && (c3.style.height = (_2 = N2) + "px"), c3.style.top = (b2 = v2.top - _2) + x2 + "px", w2 = false) : c3.style.height = A2 - z2.top - 2 + "px";
    }
    var P2, E2 = z2.right - L2;
    if (O && (E2 += a5.display.nativeBarWidth), E2 > 0 && (z2.right - z2.left > L2 && (c3.style.width = L2 - 5 + "px", E2 -= z2.right - z2.left - L2), c3.style.left = (y2 = Math.max(v2.left - E2 - k2, 0)) + "px"), O)
      for (var D2 = c3.firstChild; D2; D2 = D2.nextSibling)
        D2.style.paddingRight = a5.display.nativeBarWidth + "px";
    a5.addKeyMap(this.keyMap = function(e13, t8) {
      var r7 = { Up: function() {
        t8.moveFocus(-1);
      }, Down: function() {
        t8.moveFocus(1);
      }, PageUp: function() {
        t8.moveFocus(1 - t8.menuSize(), true);
      }, PageDown: function() {
        t8.moveFocus(t8.menuSize() - 1, true);
      }, Home: function() {
        t8.setFocus(0);
      }, End: function() {
        t8.setFocus(t8.length - 1);
      }, Enter: t8.pick, Tab: t8.pick, Esc: t8.close };
      /Mac/.test(navigator.platform) && (r7["Ctrl-P"] = function() {
        t8.moveFocus(-1);
      }, r7["Ctrl-N"] = function() {
        t8.moveFocus(1);
      });
      var n11 = e13.options.customKeys, i9 = n11 ? {} : r7;
      function o10(e14, n12) {
        var o11;
        o11 = "string" != typeof n12 ? function(e15) {
          return n12(e15, t8);
        } : r7.hasOwnProperty(n12) ? r7[n12] : n12, i9[e14] = o11;
      }
      if (n11)
        for (var a6 in n11)
          n11.hasOwnProperty(a6) && o10(a6, n11[a6]);
      var l10 = e13.options.extraKeys;
      if (l10)
        for (var a6 in l10)
          l10.hasOwnProperty(a6) && o10(a6, l10[a6]);
      return i9;
    }(t7, { moveFocus: function(e13, t8) {
      n10.changeActive(n10.selectedHint + e13, t8);
    }, setFocus: function(e13) {
      n10.changeActive(e13);
    }, menuSize: function() {
      return n10.screenAmount();
    }, length: d3.length, close: function() {
      t7.close();
    }, pick: function() {
      n10.pick();
    }, data: r6 })), t7.options.closeOnUnfocus && (a5.on("blur", this.onBlur = function() {
      P2 = setTimeout(function() {
        t7.close();
      }, 100);
    }), a5.on("focus", this.onFocus = function() {
      clearTimeout(P2);
    })), a5.on("scroll", this.onScroll = function() {
      var e13 = a5.getScrollInfo(), r7 = a5.getWrapperElement().getBoundingClientRect();
      M2 || (M2 = a5.getScrollInfo());
      var n11 = b2 + M2.top - e13.top, i9 = n11 - (s7.pageYOffset || (l9.documentElement || l9.body).scrollTop);
      if (w2 || (i9 += c3.offsetHeight), i9 <= r7.top || i9 >= r7.bottom)
        return t7.close();
      c3.style.top = n11 + "px", c3.style.left = y2 + M2.left - e13.left + "px";
    }), e12.on(c3, "dblclick", function(e13) {
      var t8 = o9(c3, e13.target || e13.srcElement);
      t8 && null != t8.hintId && (n10.changeActive(t8.hintId), n10.pick());
    }), e12.on(c3, "click", function(e13) {
      var r7 = o9(c3, e13.target || e13.srcElement);
      r7 && null != r7.hintId && (n10.changeActive(r7.hintId), t7.options.completeOnSingleClick && n10.pick());
    }), e12.on(c3, "mousedown", function() {
      setTimeout(function() {
        a5.focus();
      }, 20);
    });
    var W = this.getSelectedHintRange();
    return 0 === W.from && 0 === W.to || this.scrollToActive(), e12.signal(r6, "select", d3[this.selectedHint], c3.childNodes[this.selectedHint]), true;
  }
  function l8(e13, t7, r6, n10) {
    if (e13.async)
      e13(t7, n10, r6);
    else {
      var i9 = e13(t7, r6);
      i9 && i9.then ? i9.then(n10) : n10(i9);
    }
  }
  t6.prototype = { close: function() {
    this.active() && (this.cm.state.completionActive = null, this.tick = null, this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && e12.signal(this.data, "close"), this.widget && this.widget.close(), e12.signal(this.cm, "endCompletion", this.cm));
  }, active: function() {
    return this.cm.state.completionActive == this;
  }, pick: function(t7, r6) {
    var n10 = t7.list[r6], o10 = this;
    this.cm.operation(function() {
      n10.hint ? n10.hint(o10.cm, t7, n10) : o10.cm.replaceRange(i8(n10), n10.from || t7.from, n10.to || t7.to, "complete"), e12.signal(t7, "pick", n10), o10.cm.scrollIntoView();
    }), this.options.closeOnPick && this.close();
  }, cursorActivity: function() {
    this.debounce && (n9(this.debounce), this.debounce = 0);
    var e13 = this.startPos;
    this.data && (e13 = this.data.from);
    var t7 = this.cm.getCursor(), i9 = this.cm.getLine(t7.line);
    if (t7.line != this.startPos.line || i9.length - t7.ch != this.startLen - this.startPos.ch || t7.ch < e13.ch || this.cm.somethingSelected() || !t7.ch || this.options.closeCharacters.test(i9.charAt(t7.ch - 1)))
      this.close();
    else {
      var o10 = this;
      this.debounce = r5(function() {
        o10.update();
      }), this.widget && this.widget.disable();
    }
  }, update: function(e13) {
    if (null != this.tick) {
      var t7 = this, r6 = ++this.tick;
      l8(this.options.hint, this.cm, this.options, function(n10) {
        t7.tick == r6 && t7.finishUpdate(n10, e13);
      });
    }
  }, finishUpdate: function(t7, r6) {
    this.data && e12.signal(this.data, "update");
    var n10 = this.widget && this.widget.picked || r6 && this.options.completeSingle;
    this.widget && this.widget.close(), this.data = t7, t7 && t7.list.length && (n10 && 1 == t7.list.length ? this.pick(t7, 0) : (this.widget = new a4(this, t7), e12.signal(t7, "shown")));
  } }, a4.prototype = { close: function() {
    if (this.completion.widget == this) {
      this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
      var e13 = this.completion.cm.getInputField();
      e13.removeAttribute("aria-activedescendant"), e13.removeAttribute("aria-owns");
      var t7 = this.completion.cm;
      this.completion.options.closeOnUnfocus && (t7.off("blur", this.onBlur), t7.off("focus", this.onFocus)), t7.off("scroll", this.onScroll);
    }
  }, disable: function() {
    this.completion.cm.removeKeyMap(this.keyMap);
    var e13 = this;
    this.keyMap = { Enter: function() {
      e13.picked = true;
    } }, this.completion.cm.addKeyMap(this.keyMap);
  }, pick: function() {
    this.completion.pick(this.data, this.selectedHint);
  }, changeActive: function(t7, r6) {
    if (t7 >= this.data.list.length ? t7 = r6 ? this.data.list.length - 1 : 0 : t7 < 0 && (t7 = r6 ? 0 : this.data.list.length - 1), this.selectedHint != t7) {
      var n10 = this.hints.childNodes[this.selectedHint];
      n10 && (n10.className = n10.className.replace(" CodeMirror-hint-active", ""), n10.removeAttribute("aria-selected")), (n10 = this.hints.childNodes[this.selectedHint = t7]).className += " CodeMirror-hint-active", n10.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", n10.id), this.scrollToActive(), e12.signal(this.data, "select", this.data.list[this.selectedHint], n10);
    }
  }, scrollToActive: function() {
    var e13 = this.getSelectedHintRange(), t7 = this.hints.childNodes[e13.from], r6 = this.hints.childNodes[e13.to], n10 = this.hints.firstChild;
    t7.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = t7.offsetTop - n10.offsetTop : r6.offsetTop + r6.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = r6.offsetTop + r6.offsetHeight - this.hints.clientHeight + n10.offsetTop);
  }, screenAmount: function() {
    return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
  }, getSelectedHintRange: function() {
    var e13 = this.completion.options.scrollMargin || 0;
    return { from: Math.max(0, this.selectedHint - e13), to: Math.min(this.data.list.length - 1, this.selectedHint + e13) };
  } }, e12.registerHelper("hint", "auto", { resolve: function(t7, r6) {
    var n10, i9 = t7.getHelpers(r6, "hint");
    if (i9.length) {
      var o10 = function(e13, t8, r7) {
        var n11 = function(e14, t9) {
          if (!e14.somethingSelected())
            return t9;
          for (var r8 = [], n12 = 0; n12 < t9.length; n12++)
            t9[n12].supportsSelection && r8.push(t9[n12]);
          return r8;
        }(e13, i9);
        !function i10(o11) {
          if (o11 == n11.length)
            return t8(null);
          l8(n11[o11], e13, r7, function(e14) {
            e14 && e14.list.length > 0 ? t8(e14) : i10(o11 + 1);
          });
        }(0);
      };
      return o10.async = true, o10.supportsSelection = true, o10;
    }
    return (n10 = t7.getHelper(t7.getCursor(), "hintWords")) ? function(t8) {
      return e12.hint.fromList(t8, { words: n10 });
    } : e12.hint.anyword ? function(t8, r7) {
      return e12.hint.anyword(t8, r7);
    } : function() {
    };
  } }), e12.registerHelper("hint", "fromList", function(t7, r6) {
    var n10, i9 = t7.getCursor(), o10 = t7.getTokenAt(i9), a5 = e12.Pos(i9.line, o10.start), l9 = i9;
    o10.start < i9.ch && /\w/.test(o10.string.charAt(i9.ch - o10.start - 1)) ? n10 = o10.string.substr(0, i9.ch - o10.start) : (n10 = "", a5 = i9);
    for (var s7 = [], c3 = 0; c3 < r6.words.length; c3++) {
      var u3 = r6.words[c3];
      u3.slice(0, n10.length) == n10 && s7.push(u3);
    }
    if (s7.length)
      return { list: s7, from: a5, to: l9 };
  }), e12.commands.autocomplete = e12.showHint;
  var s6 = { hint: e12.hint.auto, completeSingle: true, alignWithWord: true, closeCharacters: /[\s()\[\]{};:>,]/, closeOnPick: true, closeOnUnfocus: true, updateOnCursorActivity: true, completeOnSingleClick: true, container: null, customKeys: null, extraKeys: null, paddingForScrollbar: true, moveOnOverlap: true };
  e12.defineOption("hintOptions", null);
}(CodeMirror), function(e12) {
  function t6(t7, r6, i8, o9) {
    if (i8 && i8.call) {
      var a4 = i8;
      i8 = null;
    } else
      a4 = n9(t7, i8, "rangeFinder");
    "number" == typeof r6 && (r6 = e12.Pos(r6, 0));
    var l8 = n9(t7, i8, "minFoldSize");
    function s6(e13) {
      var n10 = a4(t7, r6);
      if (!n10 || n10.to.line - n10.from.line < l8)
        return null;
      if ("fold" === o9)
        return n10;
      for (var i9 = t7.findMarksAt(n10.from), s7 = 0; s7 < i9.length; ++s7)
        if (i9[s7].__isFold) {
          if (!e13)
            return null;
          n10.cleared = true, i9[s7].clear();
        }
      return n10;
    }
    var c3 = s6(true);
    if (n9(t7, i8, "scanUp"))
      for (; !c3 && r6.line > t7.firstLine(); )
        r6 = e12.Pos(r6.line - 1, 0), c3 = s6(false);
    if (c3 && !c3.cleared && "unfold" !== o9) {
      var u3 = function(e13, t8, r7) {
        var i9 = n9(e13, t8, "widget");
        if ("function" == typeof i9 && (i9 = i9(r7.from, r7.to)), "string" == typeof i9) {
          var o10 = document.createTextNode(i9);
          (i9 = document.createElement("span")).appendChild(o10), i9.className = "CodeMirror-foldmarker";
        } else
          i9 && (i9 = i9.cloneNode(true));
        return i9;
      }(t7, i8, c3);
      e12.on(u3, "mousedown", function(t8) {
        d3.clear(), e12.e_preventDefault(t8);
      });
      var d3 = t7.markText(c3.from, c3.to, { replacedWith: u3, clearOnEnter: n9(t7, i8, "clearOnEnter"), __isFold: true });
      d3.on("clear", function(r7, n10) {
        e12.signal(t7, "unfold", t7, r7, n10);
      }), e12.signal(t7, "fold", t7, c3.from, c3.to);
    }
  }
  e12.newFoldFunction = function(e13, r6) {
    return function(n10, i8) {
      t6(n10, i8, { rangeFinder: e13, widget: r6 });
    };
  }, e12.defineExtension("foldCode", function(e13, r6, n10) {
    t6(this, e13, r6, n10);
  }), e12.defineExtension("isFolded", function(e13) {
    for (var t7 = this.findMarksAt(e13), r6 = 0; r6 < t7.length; ++r6)
      if (t7[r6].__isFold)
        return true;
  }), e12.commands.toggleFold = function(e13) {
    e13.foldCode(e13.getCursor());
  }, e12.commands.fold = function(e13) {
    e13.foldCode(e13.getCursor(), null, "fold");
  }, e12.commands.unfold = function(e13) {
    e13.foldCode(e13.getCursor(), { scanUp: false }, "unfold");
  }, e12.commands.foldAll = function(t7) {
    t7.operation(function() {
      for (var r6 = t7.firstLine(), n10 = t7.lastLine(); r6 <= n10; r6++)
        t7.foldCode(e12.Pos(r6, 0), { scanUp: false }, "fold");
    });
  }, e12.commands.unfoldAll = function(t7) {
    t7.operation(function() {
      for (var r6 = t7.firstLine(), n10 = t7.lastLine(); r6 <= n10; r6++)
        t7.foldCode(e12.Pos(r6, 0), { scanUp: false }, "unfold");
    });
  }, e12.registerHelper("fold", "combine", function() {
    var e13 = Array.prototype.slice.call(arguments, 0);
    return function(t7, r6) {
      for (var n10 = 0; n10 < e13.length; ++n10) {
        var i8 = e13[n10](t7, r6);
        if (i8)
          return i8;
      }
    };
  }), e12.registerHelper("fold", "auto", function(e13, t7) {
    for (var r6 = e13.getHelpers(t7, "fold"), n10 = 0; n10 < r6.length; n10++) {
      var i8 = r6[n10](e13, t7);
      if (i8)
        return i8;
    }
  });
  var r5 = { rangeFinder: e12.fold.auto, widget: "\u2194", minFoldSize: 0, scanUp: false, clearOnEnter: true };
  function n9(e13, t7, n10) {
    if (t7 && void 0 !== t7[n10])
      return t7[n10];
    var i8 = e13.options.foldOptions;
    return i8 && void 0 !== i8[n10] ? i8[n10] : r5[n10];
  }
  e12.defineOption("foldOptions", null), e12.defineExtension("foldOption", function(e13, t7) {
    return n9(this, e13, t7);
  });
}(CodeMirror), function(e12) {
  var t6 = {}, r5 = /[^\s\u00a0]/, n9 = e12.Pos, i8 = e12.cmpPos;
  function o9(e13) {
    var t7 = e13.search(r5);
    return -1 == t7 ? 0 : t7;
  }
  function a4(e13, t7) {
    var r6 = e13.getMode();
    return false !== r6.useInnerComments && r6.innerMode ? e13.getModeAt(t7) : r6;
  }
  e12.commands.toggleComment = function(e13) {
    e13.toggleComment();
  }, e12.defineExtension("toggleComment", function(e13) {
    e13 || (e13 = t6);
    for (var r6 = this, i9 = 1 / 0, o10 = this.listSelections(), a5 = null, l8 = o10.length - 1; l8 >= 0; l8--) {
      var s6 = o10[l8].from(), c3 = o10[l8].to();
      s6.line >= i9 || (c3.line >= i9 && (c3 = n9(i9, 0)), i9 = s6.line, null == a5 ? r6.uncomment(s6, c3, e13) ? a5 = "un" : (r6.lineComment(s6, c3, e13), a5 = "line") : "un" == a5 ? r6.uncomment(s6, c3, e13) : r6.lineComment(s6, c3, e13));
    }
  }), e12.defineExtension("lineComment", function(e13, i9, l8) {
    l8 || (l8 = t6);
    var s6 = this, c3 = a4(s6, e13), u3 = s6.getLine(e13.line);
    if (null != u3 && (d3 = e13, f2 = u3, !/\bstring\b/.test(s6.getTokenTypeAt(n9(d3.line, 0))) || /^[\'\"\`]/.test(f2))) {
      var d3, f2, h3 = l8.lineComment || c3.lineComment;
      if (h3) {
        var p2 = Math.min(0 != i9.ch || i9.line == e13.line ? i9.line + 1 : i9.line, s6.lastLine() + 1), m2 = null == l8.padding ? " " : l8.padding, g2 = l8.commentBlankLines || e13.line == i9.line;
        s6.operation(function() {
          if (l8.indent) {
            for (var t7 = null, i10 = e13.line; i10 < p2; ++i10) {
              var a5 = -1 === (c4 = s6.getLine(i10)).search(r5) ? c4 : c4.slice(0, o9(c4));
              (null == t7 || t7.length > a5.length) && (t7 = a5);
            }
            for (i10 = e13.line; i10 < p2; ++i10) {
              var c4 = s6.getLine(i10), u4 = t7.length;
              (g2 || r5.test(c4)) && (c4.slice(0, u4) != t7 && (u4 = o9(c4)), s6.replaceRange(t7 + h3 + m2, n9(i10, 0), n9(i10, u4)));
            }
          } else
            for (i10 = e13.line; i10 < p2; ++i10)
              (g2 || r5.test(s6.getLine(i10))) && s6.replaceRange(h3 + m2, n9(i10, 0));
        });
      } else
        (l8.blockCommentStart || c3.blockCommentStart) && (l8.fullLines = true, s6.blockComment(e13, i9, l8));
    }
  }), e12.defineExtension("blockComment", function(e13, o10, l8) {
    l8 || (l8 = t6);
    var s6 = this, c3 = a4(s6, e13), u3 = l8.blockCommentStart || c3.blockCommentStart, d3 = l8.blockCommentEnd || c3.blockCommentEnd;
    if (u3 && d3) {
      if (!/\bcomment\b/.test(s6.getTokenTypeAt(n9(e13.line, 0)))) {
        var f2 = Math.min(o10.line, s6.lastLine());
        f2 != e13.line && 0 == o10.ch && r5.test(s6.getLine(f2)) && --f2;
        var h3 = null == l8.padding ? " " : l8.padding;
        e13.line > f2 || s6.operation(function() {
          if (0 != l8.fullLines) {
            var t7 = r5.test(s6.getLine(f2));
            s6.replaceRange(h3 + d3, n9(f2)), s6.replaceRange(u3 + h3, n9(e13.line, 0));
            var a5 = l8.blockCommentLead || c3.blockCommentLead;
            if (null != a5)
              for (var p2 = e13.line + 1; p2 <= f2; ++p2)
                (p2 != f2 || t7) && s6.replaceRange(a5 + h3, n9(p2, 0));
          } else {
            var m2 = 0 == i8(s6.getCursor("to"), o10), g2 = !s6.somethingSelected();
            s6.replaceRange(d3, o10), m2 && s6.setSelection(g2 ? o10 : s6.getCursor("from"), o10), s6.replaceRange(u3, e13);
          }
        });
      }
    } else
      (l8.lineComment || c3.lineComment) && 0 != l8.fullLines && s6.lineComment(e13, o10, l8);
  }), e12.defineExtension("uncomment", function(e13, i9, o10) {
    o10 || (o10 = t6);
    var l8, s6 = this, c3 = a4(s6, e13), u3 = Math.min(0 != i9.ch || i9.line == e13.line ? i9.line : i9.line - 1, s6.lastLine()), d3 = Math.min(e13.line, u3), f2 = o10.lineComment || c3.lineComment, h3 = [], p2 = null == o10.padding ? " " : o10.padding;
    e:
      if (f2) {
        for (var m2 = d3; m2 <= u3; ++m2) {
          var g2 = s6.getLine(m2), v2 = g2.indexOf(f2);
          if (v2 > -1 && !/comment/.test(s6.getTokenTypeAt(n9(m2, v2 + 1))) && (v2 = -1), -1 == v2 && r5.test(g2))
            break e;
          if (v2 > -1 && r5.test(g2.slice(0, v2)))
            break e;
          h3.push(g2);
        }
        if (s6.operation(function() {
          for (var e14 = d3; e14 <= u3; ++e14) {
            var t7 = h3[e14 - d3], r6 = t7.indexOf(f2), i10 = r6 + f2.length;
            r6 < 0 || (t7.slice(i10, i10 + p2.length) == p2 && (i10 += p2.length), l8 = true, s6.replaceRange("", n9(e14, r6), n9(e14, i10)));
          }
        }), l8)
          return true;
      }
    var y2 = o10.blockCommentStart || c3.blockCommentStart, b2 = o10.blockCommentEnd || c3.blockCommentEnd;
    if (!y2 || !b2)
      return false;
    var w2 = o10.blockCommentLead || c3.blockCommentLead, k2 = s6.getLine(d3), x2 = k2.indexOf(y2);
    if (-1 == x2)
      return false;
    var C2 = u3 == d3 ? k2 : s6.getLine(u3), S3 = C2.indexOf(b2, u3 == d3 ? x2 + y2.length : 0), T2 = n9(d3, x2 + 1), L2 = n9(u3, S3 + 1);
    if (-1 == S3 || !/comment/.test(s6.getTokenTypeAt(T2)) || !/comment/.test(s6.getTokenTypeAt(L2)) || s6.getRange(T2, L2, "\n").indexOf(b2) > -1)
      return false;
    var A2 = k2.lastIndexOf(y2, e13.ch), M2 = -1 == A2 ? -1 : k2.slice(0, e13.ch).indexOf(b2, A2 + y2.length);
    if (-1 != A2 && -1 != M2 && M2 + b2.length != e13.ch)
      return false;
    M2 = C2.indexOf(b2, i9.ch);
    var z2 = C2.slice(i9.ch).lastIndexOf(y2, M2 - i9.ch);
    return A2 = -1 == M2 || -1 == z2 ? -1 : i9.ch + z2, (-1 == M2 || -1 == A2 || A2 == i9.ch) && (s6.operation(function() {
      s6.replaceRange("", n9(u3, S3 - (p2 && C2.slice(S3 - p2.length, S3) == p2 ? p2.length : 0)), n9(u3, S3 + b2.length));
      var e14 = x2 + y2.length;
      if (p2 && k2.slice(e14, e14 + p2.length) == p2 && (e14 += p2.length), s6.replaceRange("", n9(d3, x2), n9(d3, e14)), w2)
        for (var t7 = d3 + 1; t7 <= u3; ++t7) {
          var i10 = s6.getLine(t7), o11 = i10.indexOf(w2);
          if (-1 != o11 && !r5.test(i10.slice(0, o11))) {
            var a5 = o11 + w2.length;
            p2 && i10.slice(a5, a5 + p2.length) == p2 && (a5 += p2.length), s6.replaceRange("", n9(t7, o11), n9(t7, a5));
          }
        }
    }), true);
  });
}(CodeMirror), r4.prototype.start = function(e12) {
  return this.stream = e12, this.line = 0, this.string = e12.string.slice(e12.start), this.startLine = e12.string, this.startPos = e12.start, this;
}, r4.prototype.startLinebreak = function() {
  return this.stream = null, this.line = this.startPos = 0, this.string = "\n", this.startLine = "", this;
}, r4.prototype.copy = function() {
  var e12 = this.copyInstance || (this.copyInstance = new r4());
  return e12.stream = this.stream, e12.startPos = this.startPos, e12.line = this.line, e12.startLine = this.startLine, e12.string = this.string, e12;
}, r4.prototype.updateStart = function() {
  this.startLine = this.stream ? 0 == this.line ? this.stream.string : this.stream.lookAhead(this.line) : "", this.startPos = this.startLine.length - (this.string.length - 1);
}, r4.prototype.ahead = function(e12) {
  for (; ; ) {
    if (e12 <= this.string.length)
      return true;
    if (10 !== this.string.charCodeAt(this.string.length - 1))
      this.string += "\n";
    else {
      if (3 === this.line || !this.stream || !this.stream.lookAhead)
        return false;
      var t6 = this.stream.lookAhead(this.line + 1);
      if (null == t6)
        return false;
      this.string += t6 + "\n", this.line++;
    }
  }
};
var n8 = null;
function i7(e12, i8) {
  this.State = function(e13, i9) {
    function o9(e14, t6) {
      this.stack = e14, this.context = t6;
    }
    function a4() {
      return null;
    }
    return o9.prototype.matchNext = function(r5, i10, o10, a5) {
      for (var l8 = this.stack.length - 1, s6 = this.stack[l8], c3 = e13.nodes[s6], u3 = 0; u3 < c3.length; u3++) {
        var d3, f2, h3 = c3[u3];
        if (0 === h3)
          d3 = i10, f2 = c3[++u3];
        else {
          if (1 === h3 || 2 === h3) {
            var p2 = c3[++u3], m2 = c3[++u3];
            this.go(m2);
            var g2 = this.context;
            if (2 === h3) {
              var v2 = c3[++u3];
              this.context = new t5(v2.name, v2.token, this.stack.length, this.context, r5.startLine, r5.startPos);
            }
            this.stack.push(p2);
            var y2 = this.matchNext(r5, i10, 0, false);
            if (y2 === i10 && (y2 = this.matchNext(r5, i10, u3 == c3.length - 1 ? o10 : 0, a5)), y2 < 0) {
              this.stack.length = l8 + 1, this.stack[l8] = s6, this.context = g2;
              continue;
            }
            return y2;
          }
          if (3 === h3) {
            var b2 = c3[++u3];
            d3 = this.matchExpr(c3[++u3], r5, i10), f2 = c3[++u3], d3 > i10 && (n8 = b2);
          } else
            d3 = this.matchExpr(h3, r5, i10), f2 = c3[++u3];
        }
        if (d3 < 0) {
          if (!(o10 > 0 && u3 == c3.length - 1))
            continue;
          o10--, d3 = i10;
        }
        if (this.go(f2), !a5 && -1 === f2 || 0 === this.stack.length)
          return d3;
        if (d3 > i10)
          return d3;
        if ((d3 = this.matchNext(r5, i10, u3 == c3.length - 1 ? o10 : 0, a5)) >= 0)
          return d3;
        this.stack.length = l8 + 1, this.stack[l8] = s6;
      }
      return -1;
    }, o9.prototype.go = function(e14) {
      for (this.stack.pop(); this.context && this.context.depth > this.stack.length; )
        this.context = this.context.parent;
      -1 !== e14 && this.stack.push(e14);
    }, o9.prototype.runMaybe = function(e14, t6, r5) {
      return n8 = null, this.matchNext(e14, t6, r5, true);
    }, o9.prototype.forward = function(t6, r5) {
      var n9 = this.runMaybe(t6, r5, 2);
      return n9 < 0 && (this.stack.push(e13.token), n9 = this.runMaybe(t6, r5, 0)), n9;
    }, o9.prototype.lookahead = function(e14, t6, r5) {
      var i10 = n8, o10 = new this.constructor([r5], null);
      for (e14 = e14.copy(); ; ) {
        e14.updateStart();
        var a5 = o10.runMaybe(e14, t6, 0);
        if (a5 < 0)
          return n8 = i10, false;
        if (0 === o10.stack.length)
          return n8 = i10, true;
        t6 = a5;
      }
    }, o9.prototype.matchExpr = function(e14, t6, r5) {
      if ("string" == typeof e14) {
        var n9 = r5 + e14.length;
        return t6.ahead(n9) && t6.string.slice(r5, n9) === e14 ? n9 : -1;
      }
      if (e14.exec) {
        var o10 = t6.ahead(r5 + 1) && e14.exec(r5 > 0 ? t6.string.slice(r5) : t6.string);
        return o10 ? r5 + o10[0].length : -1;
      }
      var l8, s6 = e14[0];
      if (0 === s6) {
        for (var c3 = 1; c3 < e14.length; c3++)
          if ((r5 = this.matchExpr(e14[c3], t6, r5)) < 0)
            return -1;
        return r5;
      }
      if (1 === s6) {
        c3 = 1;
        for (var u3 = e14.length - 1; ; c3++) {
          var d3 = this.matchExpr(e14[c3], t6, r5);
          if (c3 === u3 || d3 > -1)
            return d3;
        }
        return -1;
      }
      if (2 !== s6 && 3 !== s6) {
        if (4 === s6)
          return Math.max(this.matchExpr(e14[1], t6, r5), r5);
        if (5 === s6)
          return this.lookahead(t6, r5, e14[1]) ? r5 : -1;
        if (6 === s6)
          return this.lookahead(t6, r5, e14[1]) ? -1 : r5;
        if (7 === s6) {
          var f2, h3, p2 = r5 ? t6.string.lastIndexOf("\n", r5 - 1) : -1;
          if (t6.stream && p2 < 0)
            f2 = t6.stream.string, h3 = r5 + t6.stream.start;
          else {
            var m2 = t6.string.indexOf("\n", r5);
            f2 = t6.string.slice(p2 + 1, m2 < 0 ? t6.string.length : m2), h3 = r5 - (p2 + 1);
          }
          return i9.predicates[e14[1]](f2, h3, this.context, t6.stream ? (l8 = t6.stream, function(e15) {
            return l8.lookAhead(e15);
          }) : a4) ? r5 : -1;
        }
        throw Error("Unknown match type " + e14);
      }
      if (3 === s6 && (r5 = this.matchExpr(e14[1], t6, r5)) < 0)
        return -1;
      for (; ; ) {
        var g2 = this.matchExpr(e14[1], t6, r5);
        if (-1 == g2)
          return r5;
        r5 = g2;
      }
    }, o9.prototype.contextAt = function(e14, t6) {
      var n9 = this.copy(), i10 = new r4(), o10 = 0, a5 = this.context;
      for (i10.string = e14 + "\n", i10.startLine = e14; ; ) {
        var l8 = n9.runMaybe(i10, o10, 0);
        if (-1 == l8)
          return n9.context;
        if (l8 > t6) {
          var s6 = n9.context;
          if (o10 == t6)
            e:
              for (; s6; ) {
                for (var c3 = a5; c3; c3 = c3.parent)
                  if (c3 === s6)
                    break e;
                s6 = s6.parent;
              }
          return s6;
        }
        o10 = l8, a5 = n9.context;
      }
    }, o9.prototype.copy = function() {
      return new this.constructor(this.stack.slice(), this.context);
    }, o9.start = function() {
      return new this([e13.start], null);
    }, o9;
  }(e12, i8 || {}), this.mcx = new r4();
}
CodeMirror.GrammarMode = i7, i7.prototype.startState = function() {
  return this.State.start();
}, i7.prototype.copyState = function(e12) {
  return e12.copy();
}, i7.prototype.token = function(e12, t6) {
  e12.pos += t6.forward(this.mcx.start(e12), 0);
  for (var r5 = n8, i8 = t6.context; i8; i8 = i8.parent)
    i8.tokenType && (r5 = i8.tokenType + (r5 ? " " + r5 : ""));
  return e12.eol() && t6.forward(this.mcx, e12.pos - e12.start), r5;
}, i7.prototype.blankLine = function(e12) {
  e12.forward(this.mcx.startLinebreak(), 0);
}, function(e12, t6) {
  !function(e13) {
    function t7(e14) {
      if (e14 && e14.__esModule)
        return e14;
      var t8 = /* @__PURE__ */ Object.create(null);
      return e14 && Object.keys(e14).forEach(function(r6) {
        if ("default" !== r6) {
          var n10 = Object.getOwnPropertyDescriptor(e14, r6);
          Object.defineProperty(t8, r6, n10.get ? n10 : { enumerable: true, get: function() {
            return e14[r6];
          } });
        }
      }), t8.default = e14, Object.freeze(t8);
    }
    var r5 = t7(e13), n9 = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 114]], [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, /^(?:\+\+|\-\-)/, /^(?:(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?|\?\?)/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\()/, /^(?:\.|\?\.)/, [1, "\n", "	", " "], /^new(?![a-zA-Z¡-￿_0-9_\$])/], i8 = Object.freeze({ __proto__: null, nodes: [[1, 6, 2], [/^[^]/, 0], [1, 6, 3], [2, 7, 4, { name: "Statement" }, 0, 1], [1, 6, 3], [3, "keyword", n9[0], -1, 3, "keyword", n9[1], -1, 3, "keyword", n9[2], -1, 3, "keyword", n9[23], -1, 3, "keyword", n9[3], -1, 3, "keyword", n9[14], -1, 3, "keyword", n9[25], -1, 3, "keyword", n9[10], -1, 3, "keyword", n9[11], -1, 3, "keyword", n9[12], -1, 3, "keyword", n9[4], -1, 3, "keyword", n9[9], -1, 3, "keyword", n9[8], -1, 3, "keyword", n9[6], -1, 3, "keyword", n9[5], -1, 3, "keyword", n9[24], -1, 3, "keyword", n9[7], -1, 3, "keyword", n9[13], -1, 3, "keyword", n9[15], -1, 3, "keyword", n9[16], -1, 3, "keyword", n9[17], -1, 3, "keyword", n9[21], -1, 3, "keyword", n9[18], -1, 3, "keyword", n9[39], -1, 3, "keyword", n9[35], -1, 3, "keyword", n9[29], -1, 3, "keyword", n9[28], -1, 3, "atom", n9[27], -1, 3, "variable", n9[20], -1, 3, "operator", n9[30], -1, 3, "operator", n9[34], -1, 3, "operator", n9[33], -1, 2, 116, -1, { name: "string", token: "string" }, 3, "number", n9[31], -1, 2, 121, -1, { name: "comment", token: "comment" }, 3, "string-2", n9[32], -1, 1, 125, -1, /^[^]/, -1], [n9[38], 6, 2, 121, 6, { name: "comment", token: "comment" }, 0, -1], [3, "keyword", n9[0], 8, 3, "keyword", n9[1], 23, 3, "keyword", n9[2], 23, 3, "keyword", n9[3], 27, 2, 129, -1, { name: "Block" }, ";", -1, 3, "keyword", n9[4], -1, 3, "keyword", n9[5], 35, 3, "keyword", n9[6], 40, 3, "keyword", n9[7], 46, 3, "keyword", n9[8], 48, /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 48, 3, "keyword", n9[9], 49, 3, "keyword", n9[10], 52, 3, "keyword", n9[11], 56, 3, "keyword", n9[12], 60, 3, "keyword", n9[13], 64, 3, "keyword", n9[14], 68, 3, "keyword", n9[15], 72, 3, "keyword", n9[16], 80, 3, "keyword", n9[17], 92, 3, "keyword", n9[18], 108, "@", 110, 1, 133, 112], [1, 6, 9], [1, 139, 10], [1, 6, 11], [3, "operator", "=", 12, 0, 13], [1, 6, 14], [1, 6, 15], [1, 142, 13], [",", 16, n9[19], -1], [1, 6, 17], [1, 139, 18], [1, 6, 19], [3, "operator", "=", 20, 0, 21], [1, 6, 22], [1, 6, 15], [1, 142, 21], [1, 6, 24], [2, 146, 25, { name: "CondExpr" }], [1, 6, 26], [2, 7, -1, { name: "Statement" }], [1, 6, 28], [2, 7, 29, { name: "Statement" }], [1, 6, 30], [3, "keyword", n9[1], 31, 0, -1], [1, 6, 32], [2, 146, 33, { name: "CondExpr" }], [1, 6, 34], [n9[19], -1], [1, 6, 36], [2, 146, 37, { name: "CondExpr" }], [1, 6, 38], [2, 7, 39, { name: "Statement" }], [2, 151, -1, { name: "Alternative" }], [1, 6, 41], [3, "keyword", "*", 42, 0, 42], [1, 6, 43], [3, "def", n9[20], 44], [1, 6, 45], [2, 155, -1, { name: "FunctionDef" }], [1, 6, 47], [2, 158, -1, { name: "ForStatement" }], [1, 6, 50], [1, 6, 51], [":", -1], [1, 133, 48], [1, 6, 53], [n9[19], -1, 1, 133, 54], [1, 6, 55], [n9[19], -1], [1, 6, 57], [1, 133, 58], [1, 6, 59], [n9[19], -1], [1, 6, 61], [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 62], [1, 6, 63], [n9[19], -1], [1, 6, 65], [2, 146, 66, { name: "CondExpr" }], [1, 6, 67], [2, 129, -1, { name: "Block" }], [1, 6, 69], [2, 129, 70, { name: "Block" }], [1, 6, 71], [2, 161, -1, { name: "CatchFinally" }], [1, 6, 73], [3, "type def", n9[20], 74], [1, 6, 75], [3, "keyword", n9[21], 76, 0, 77], [1, 6, 78], [1, 6, 79], [1, 133, 77], [2, 174, -1, { name: "ClassBody" }], [1, 6, 81], ["*", 82, 3, "keyword", n9[8], 82, "{", 83, 2, 7, -1, { name: "Statement" }], [1, 6, 84], [1, 6, 85], [3, "keyword", n9[22], 86, 0, 87], [1, 182, 88], [1, 6, 89], [1, 6, 90], [1, 6, 91], [2, 116, 87, { name: "string", token: "string" }], [n9[19], -1], ["}", 82], [1, 6, 93], [2, 116, 94, { name: "string", token: "string" }, 3, "keyword", "*", 95, 1, 188, 96, "{", 97], [1, 6, 98], [1, 6, 99], [1, 6, 100], [1, 6, 101], [n9[19], -1], [3, "keyword", n9[26], 102, 0, 96], [3, "keyword", n9[22], 103, 0, 94], [1, 182, 104], [1, 6, 105], [1, 6, 106], [1, 6, 107], [3, "def", n9[20], 96], [2, 116, 94, { name: "string", token: "string" }], ["}", 96], [1, 6, 109], [2, 7, -1, { name: "Statement" }], [1, 6, 111], [1, 133, -1], [1, 6, 113], [n9[19], -1], [1, 6, 115], [3, "keyword", n9[6], -1, /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1], ["'", 117, '"', 119], ["\\", 118, /^(?!\')./, 117, "'", -1], [/^[^]/, 117], ["\\", 120, /^(?!\")./, 119, '"', -1], [/^[^]/, 119], [/^\/\*\*(?!\/)/, 122, "/*", 124, /^\/\/.*/, -1], [1, 193, 122, 0, 123], [2, 196, 123, { name: "doccomment.tagGroup" }, "*/", -1], [[0, /^(?!\*\/)/, /^[^]/], 124, "*/", -1], [3, "string-2", "`", 126], [3, "string-2", "${", 127, 2, 198, 126, { name: "str2", token: "string-2" }, 3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 126, 3, "string-2", "`", -1], [1, 133, 128], [3, "string-2", "}", 126], ["{", 130], [1, 6, 131], [2, 7, 132, { name: "Statement" }, "}", -1], [1, 6, 131], [1, 200, 134], [1, 6, 135], [",", 136, 1, 218, 137, 0, -1], [1, 6, 138], [1, 6, 135], [1, 142, 137], [3, "operator", "...", 140, 0, 140], [1, 6, 141], [3, "def", n9[20], -1, 2, 233, -1, { name: "ArrayPattern" }, 2, 238, -1, { name: "ObjectPattern" }], [1, 200, 143], [1, 6, 144], [1, 243, 145, 0, -1], [1, 6, 144], ["(", 147], [1, 6, 148], [1, 133, 149], [1, 6, 150], [")", -1], [1, 6, 152], [3, "keyword", n9[23], 153, 0, -1], [1, 6, 154], [2, 7, -1, { name: "Statement" }], [2, 258, 156, { name: "ParamList" }], [1, 6, 157], [2, 129, -1, { name: "Block" }], [2, 263, 159, { name: "ForSpec" }], [1, 6, 160], [2, 7, -1, { name: "Statement" }], [3, "keyword", n9[24], 162, 0, 170], [1, 6, 163], ["(", 164, 0, 165], [1, 6, 166], [1, 6, 167], [1, 139, 168], [2, 129, 170, { name: "Block" }], [1, 6, 169], [")", 165], [1, 6, 171], [3, "keyword", n9[25], 172, 0, -1], [1, 6, 173], [2, 129, -1, { name: "Block" }], ["{", 175], [1, 6, 176], [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9_\$])/, 177, 0, 177, "@", 178, "}", -1], [1, 6, 179], [1, 6, 180], [2, 274, 181, { name: "ObjectMember" }], [1, 133, 181], [1, 6, 176], [1, 188, 183, 0, -1], [1, 6, 184], [",", 185, 0, -1], [1, 6, 186], [1, 188, 187, 0, 187], [1, 6, 184], [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 189, 3, "def", n9[20], -1], [1, 6, 190], [3, "keyword", n9[26], 191], [1, 6, 192], [3, "def", n9[20], -1], [0, 194, 2, 289, -1, { name: "doccomment.braced" }], [[0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], 195], [0, 194, 0, -1], [1, 293, 197], [1, 193, 197, 0, -1], ["\\", 199, "\n", -1], [/^[^]/, -1], [3, "atom", n9[27], -1, 3, "keyword", n9[28], -1, 3, "keyword", n9[29], 201, 3, "operator", n9[30], 201, 3, "keyword", n9[18], 201, 2, 299, -1, { name: "NewExpression" }, 3, "keyword", n9[6], 203, 3, "keyword", n9[15], 209, 2, 309, -1, { name: "ArrowFunc" }, 3, "variable callee", n9[36], -1, 3, "variable", n9[20], -1, 3, "number", n9[31], -1, 2, 116, -1, { name: "string", token: "string" }, 3, "string-2", n9[32], -1, 1, 125, -1, 2, 313, -1, { name: "ArrayLiteral" }, 2, 318, -1, { name: "ObjectLiteral" }, 2, 323, -1, { name: "ParenExpr" }], [1, 6, 202], [1, 200, -1], [1, 6, 204], [3, "keyword", "*", 205, 0, 205], [1, 6, 206], [3, "def", n9[20], 207, 0, 207], [1, 6, 208], [2, 155, -1, { name: "FunctionDef" }], [1, 6, 210], [[6, 328], 211, 0, 212], [3, "type def", n9[20], 212], [1, 6, 213], [3, "keyword", n9[21], 214, 0, 215], [1, 6, 216], [1, 6, 217], [1, 133, 215], [2, 174, -1, { name: "ClassBody" }], [3, "operator", n9[33], -1, 3, "operator", n9[34], 219, 3, "keyword", n9[35], 219, 2, 329, -1, { name: "ArgList" }, 1, 125, -1, n9[37], 221, "[", 223, 3, "operator", "?", 227], [1, 6, 220], [1, 133, -1], [1, 6, 222], [3, "property callee", n9[36], -1, 3, "property", n9[20], -1], [1, 6, 224], [1, 133, 225], [1, 6, 226], ["]", -1], [1, 6, 228], [1, 133, 229], [1, 6, 230], [3, "operator", ":", 231], [1, 6, 232], [1, 133, -1], ["[", 234], [1, 6, 235], [1, 334, 236], [1, 6, 237], ["]", -1], ["{", 239], [1, 6, 240], [1, 340, 241], [1, 6, 242], ["}", -1], [3, "operator", n9[33], -1, 3, "operator", n9[34], 244, 3, "keyword", n9[35], 244, 2, 329, -1, { name: "ArgList" }, 1, 125, -1, n9[37], 246, "[", 248, 3, "operator", "?", 252], [1, 6, 245], [1, 142, -1], [1, 6, 247], [3, "property callee", n9[36], -1, 3, "property", n9[20], -1], [1, 6, 249], [1, 133, 250], [1, 6, 251], ["]", -1], [1, 6, 253], [1, 133, 254], [1, 6, 255], [3, "operator", ":", 256], [1, 6, 257], [1, 142, -1], ["(", 259], [1, 6, 260], [1, 346, 261], [1, 6, 262], [")", -1], ["(", 264], [1, 6, 265], [2, 352, 266, { name: "StatementMaybeOf" }], [1, 6, 267], [1, 133, 268, 0, 268, 0, 272], [1, 6, 269], [";", 270], [1, 6, 271], [1, 133, 272, 0, 272], [1, 6, 273], [")", -1], [3, "keyword", /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/, 275, 0, 275], [1, 6, 276], [3, "keyword", "*", 277, 0, 277], [1, 6, 278], [3, "def property", n9[20], 279, "[", 280, 3, "number", n9[31], 279, 2, 116, 279, { name: "string", token: "string" }, 3, "operator", "...", 281], [1, 6, 282], [1, 6, 283], [1, 6, 284], [2, 155, -1, { name: "FunctionDef" }, ":", 285, 0, -1], [1, 133, 286], [1, 142, -1], [1, 6, 287], [1, 6, 288], [1, 142, -1], ["]", 279], ["{", 290], [1, 293, 291, 1, 193, 292], [[0, /^(?!\}|\*\/)/, /^[^]/], 291, 0, 292], [/^(?:\}|(?=\*\/))/, -1], [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 294, 3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1], [n9[38], 294, "{", 295, 0, 296, 0, -1], [2, 357, 297, { name: "doccomment.type" }], [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1, 0, -1], ["}", 298], [[1, "\n", "	", " ", /^\*(?!\/)/], 298, 0, 296], [3, "keyword", n9[39], 300], [1, 6, 301], [".", 302, 1, 200, 303], [1, 6, 304], [1, 6, 305], [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1], [2, 329, 306, { name: "ArgList" }, ".", 307, 0, -1], [1, 6, 305], [1, 6, 308], [3, "property callee", n9[36], 306, 3, "property", n9[20], 306], [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 361]], 311, [5, 363], 310], [2, 258, 311, { name: "ParamList" }], [1, 6, 312], [2, 366, -1, { name: "ArrowRest" }], ["[", 314], [1, 6, 315], [1, 369, 316], [1, 6, 317], ["]", -1], ["{", 319], [1, 6, 320], [1, 375, 321], [1, 6, 322], ["}", -1], ["(", 324], [1, 6, 325], [1, 133, 326], [1, 6, 327], [")", -1], [3, "keyword", n9[21], -1], ["(", 330], [1, 6, 331], [1, 369, 332], [1, 6, 333], [")", -1], [1, 381, 335, 0, 335, 0, -1], [1, 6, 336], [",", 337, 0, -1], [1, 6, 338], [1, 381, 339, 0, 339, 0, 339], [1, 6, 336], [1, 386, 341, 0, -1], [1, 6, 342], [",", 343, 0, -1], [1, 6, 344], [1, 386, 345, 0, 345], [1, 6, 342], [1, 381, 347, 0, -1], [1, 6, 348], [",", 349, 0, -1], [1, 6, 350], [1, 381, 351, 0, 351], [1, 6, 348], [2, 7, 353, { name: "Statement" }], [1, 6, 354], [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 355, 0, -1], [1, 6, 356], [1, 133, -1], [3, "type", "{", 358, 3, "type", /^(?:(?!\{|\}|\*\/).)+/, 357, "\n", 359, 0, -1], [2, 357, 360, { name: "doccomment.type" }], [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 357], [/^(?=\*\/)/, 357, 3, "type", "}", 357], [1, 6, 362], ["=>", -1], [2, 258, 364, { name: "ParamList" }], [1, 6, 365], ["=>", -1], [3, "operator", "=>", 367], [1, 6, 368], [2, 129, -1, { name: "Block" }, 1, 142, -1], [1, 142, 370, 0, -1], [1, 6, 371], [",", 372, 0, -1], [1, 6, 373], [1, 142, 374, 0, 374], [1, 6, 371], [2, 274, 376, { name: "ObjectMember" }, 0, -1], [1, 6, 377], [",", 378, 0, -1], [1, 6, 379], [2, 274, 380, { name: "ObjectMember" }, 0, 380], [1, 6, 377], [1, 139, 382], [1, 6, 383], [3, "operator", "=", 384, 0, -1], [1, 6, 385], [1, 142, -1], [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 387, 3, "property", n9[20], 391, 3, "number", n9[31], 391, 2, 116, 391, { name: "string", token: "string" }, 3, "operator", "...", 395], [1, 6, 388], [3, "operator", "=", 389, 0, -1], [1, 6, 390], [1, 142, -1], [1, 6, 392], [":", 393], [1, 6, 394], [1, 381, -1], [1, 6, 396], [1, 381, -1]], start: 0, token: 5 }), o9 = /(^|\s)variable($|\s)/;
    function a4(e14) {
      var t8 = /^(if|for|do|while|try)\b/.exec(e14.startLine.slice(e14.startPos));
      return t8 && t8[1];
    }
    var l8 = { Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}", LambdaBlock: "}", WhenBody: "}", ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}", ArrayLiteral: "]", BracketTokens: "]", TupleType: "]", ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")", ParenthesizedExpression: ")", ConstructorParamList: ")", TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">" }, s6 = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"], c3 = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];
    function u3(e14, t8) {
      for (var n10 = e14.startLine; ; e14 = e14.parent) {
        if ("CondExpr" == e14.name)
          return r5.countColumn(e14.startLine, e14.startPos + 1, t8.tabSize);
        if (c3.indexOf(e14.name) > -1 && /(^\s*|[\(\{\[])$/.test(e14.startLine.slice(0, e14.startPos)))
          return r5.countColumn(e14.startLine, e14.startPos, t8.tabSize);
        if (!e14.parent || e14.parent.startLine != n10)
          return r5.countColumn(e14.startLine, null, t8.tabSize);
      }
    }
    function d3(e14, t8, n10) {
      if (!e14)
        return 0;
      if ("string" == e14.name || "comment" == e14.name)
        return r5.Pass;
      var i9, o10, h4 = l8[e14.name], p3 = t8 && t8.charAt(0) == h4;
      if (h4 && false !== n10.align && (!n10.dontAlign || n10.dontAlign.indexOf(e14.name) < 0) && function(e15) {
        return !/^\s*((\/\/.*)?$|.*=>)/.test(e15.startLine.slice(e15.startPos + 1));
      }(e14))
        return r5.countColumn(e14.startLine, e14.startPos, n10.tabSize) + (p3 ? 0 : 1);
      if (h4 && s6.indexOf(e14.name) > -1) {
        var m3 = e14.parent;
        m3 && "Statement" == m3.name && m3.parent && "Statement" == m3.parent.name && a4(m3.parent) && !a4(m3) && (m3 = m3.parent);
        var g3 = f2(m3, n10);
        return p3 || "NamespaceBlock" == e14.name ? g3 : /^(public|private|protected)\s*:/.test(t8) ? g3 + 1 : !(o10 = e14.parent) || "Statement" != o10.name || !/^switch\b/.test(o10.startLine.slice(o10.startPos)) || (i9 = t8) && /^\s*(case|default)\b/.test(i9) ? g3 + n10.indentUnit : g3 + 2 * n10.indentUnit;
      }
      var v3 = u3(e14, n10);
      return h4 ? p3 && (n10.dontCloseBrackets || "").indexOf(h4) < 0 ? v3 : v3 + n10.indentUnit * ((n10.doubleIndentBrackets || "").indexOf(h4) < 0 ? 1 : 2) : c3.indexOf(e14.name) > -1 ? a4(e14) ? v3 + n10.indentUnit : v3 + 2 * n10.indentUnit : "Alternative" == e14.name || "CatchFinally" == e14.name ? (v3 = u3(e14.parent, n10), !t8 || /^((else|catch|finally)\b|\/[\/\*])/.test(t8) ? v3 : v3 + n10.indentUnit) : "ArrowRest" == e14.name ? v3 + n10.indentUnit : "NewExpression" == e14.name && e14.startLine.length > e14.startPos + 5 ? r5.countColumn(e14.startLine, e14.startPos, n10.tabSize) + 2 * n10.indentUnit : "InitializerList" == e14.name ? v3 + 2 : "ThrowsClause" != e14.name || /throws\s*$/.test(e14.startLine.slice(e14.startPos)) ? d3(e14.parent, t8, n10) : v3 + 2 * n10.indentUnit;
    }
    function f2(e14, t8) {
      for (; ; e14 = e14.parent) {
        if (!e14)
          return 0;
        if (c3.indexOf(e14.name) > -1 || e14.parent && l8[e14.parent.name])
          return r5.countColumn(e14.startLine, null, t8.tabSize);
      }
    }
    function h3(e14, t8, n10, i9) {
      var o10 = e14.context && e14.context.name;
      if ("DeclType" == o10 || "BeforeStatement" == o10 || "AnnotationHead" == o10 || "Template" == o10 || "str" == o10)
        return f2(e14.context, i9);
      if (("doccomment.braced" == o10 || "doccomment.tagGroup" == o10) && !/^[@*]/.test(t8))
        return r5.countColumn(e14.context.startLine, null, i9.tabSize) + 2 * i9.indentUnit;
      var a5 = i9.forceContent && /^\s*(\/\/.*)?$/.test(n10) ? "x" : n10;
      return d3(e14.contextAt(a5, n10.length - t8.length), t8, i9);
    }
    function p2(e14, t8) {
      for (var r6 = t8 - 1; r6 >= 0; r6--) {
        var n10 = e14.charCodeAt(r6);
        if (10 === n10)
          break;
        if (32 !== n10 && 9 !== n10)
          return false;
      }
      return true;
    }
    var m2 = function(e14) {
      this.config = e14;
    };
    m2.prototype.startState = function() {
      return new g2();
    }, m2.prototype.copyState = function(e14) {
      return e14.copy();
    }, m2.prototype.shouldInterceptTokenizing = function(e14) {
      var t8 = e14.currentTemplateState;
      return void 0 !== t8 && null !== t8.mode;
    }, m2.prototype.interceptTokenizing = function(e14, t8) {
      if (e14.match("${") && (e14.backUp(2), !this.isEscaped(e14, e14.pos - 2)))
        return { handled: false };
      if ("`" === e14.peek() && !this.isEscaped(e14, e14.pos))
        return { handled: false };
      var r6 = t8.currentTemplateState, n10 = r6.mode, i9 = r6.state, o10 = n10.token(e14, i9);
      return this.backupIfEmbeddedTokenizerOvershot(e14), { handled: true, style: o10 };
    }, m2.prototype.trackState = function(e14, t8, r6) {
      if (e14) {
        var n10 = r6.currentTemplateState;
        n10 && "inline-expression" !== n10.kind ? this.trackStateInTemplate(e14, t8, r6, n10) : this.trackStateNotInTemplate(e14, t8, r6, n10), r6.previousVariable = "variable" === e14 ? t8.current() : null;
      }
    }, m2.prototype.trackStateNotInTemplate = function(e14, t8, r6, n10) {
      if (n10 && "string-2" === e14 && t8.current().startsWith("}"))
        return r6.templateStack.pop(), void t8.backUp(t8.current().length - 1);
      if ("string-2" === e14 && t8.current().startsWith("`")) {
        var i9 = this.getModeForTemplateTag(r6.previousVariable), o10 = "template";
        i9 ? (t8.backUp(t8.current().length - 1), r6.templateStack.push(new y2(o10, i9, CodeMirror.startState(i9)))) : r6.templateStack.push(new y2(o10, null, null));
      }
    }, m2.prototype.trackStateInTemplate = function(e14, t8, r6, n10) {
      "string-2" !== e14 || !t8.current().endsWith("`") || this.isEscaped(t8.pos - 1) ? "string-2" !== e14 || !t8.current().endsWith("${") || this.isEscaped(t8.pos - 2) || r6.templateStack.push(new y2("inline-expression", null, null)) : r6.templateStack.pop();
    }, m2.prototype.backupIfEmbeddedTokenizerOvershot = function(e14) {
      for (var t8 = e14.current(), r6 = 0; ; ) {
        var n10 = t8.slice(r6).search(/`|\$\{/);
        if (-1 === n10)
          return;
        n10 += r6;
        var i9 = t8.length - n10, o10 = e14.pos - i9;
        if (!this.isEscaped(e14, o10))
          return void e14.backUp(t8.length - n10);
        r6 = n10 + 1;
      }
    }, m2.prototype.isEscaped = function(e14, t8) {
      for (var r6 = false, n10 = t8; n10 > 0 && "\\" === e14.string[n10 - 1]; )
        r6 = !r6, n10--;
      return r6;
    }, m2.prototype.getModeForTemplateTag = function(e14) {
      if (!e14)
        return null;
      "htm" === e14 && (e14 = "html");
      for (var t8 = ["google-" + e14, "" + e14], r6 = 0; r6 < t8.length; r6++) {
        var n10 = CodeMirror.getMode(this.config, t8[r6]);
        if (n10 && "null" !== n10.name)
          return n10;
      }
      return null;
    };
    var g2 = function(e14, t8) {
      void 0 === e14 && (e14 = []), void 0 === t8 && (t8 = null), this.templateStack = e14, this.previousVariable = t8;
    }, v2 = { currentTemplateState: { configurable: true } };
    g2.prototype.copy = function() {
      return new g2(this.templateStack.map(function(e14) {
        return e14.copy();
      }), this.previousVariable);
    }, v2.currentTemplateState.get = function() {
      return this.templateStack[this.templateStack.length - 1];
    }, Object.defineProperties(g2.prototype, v2);
    var y2 = function(e14, t8, r6) {
      this.kind = e14, this.mode = t8, this.state = r6;
    };
    y2.prototype.copy = function() {
      return this.mode ? new y2(this.kind, this.mode, CodeMirror.copyState(this.mode, this.state)) : new y2(this.kind, null, null);
    };
    var b2 = ["Block", "FunctionDef", "ArrowFunc", "ForStatement"], w2 = function(e14) {
      function t8(t9, r6) {
        e14.call(this, i8, { predicates: { canInsertSemi: false === r6.requireSemicolons ? p2 : function() {
          return false;
        } } }), this.embeddedParser = new m2(t9), this.indentConf = { doubleIndentBrackets: ">)", dontCloseBrackets: ")", tabSize: t9.tabSize, indentUnit: t9.indentUnit, forceContent: true };
      }
      return e14 && (t8.__proto__ = e14), t8.prototype = Object.create(e14 && e14.prototype), t8.prototype.constructor = t8, t8.prototype.startState = function() {
        var t9 = e14.prototype.startState.call(this);
        return t9.embeddedParserState = this.embeddedParser.startState(), t9;
      }, t8.prototype.copyState = function(t9) {
        var r6 = e14.prototype.copyState.call(this, t9);
        return r6.embeddedParserState = this.embeddedParser.copyState(t9.embeddedParserState), r6;
      }, t8.prototype.token = function(t9, r6) {
        var n10 = r6.embeddedParserState;
        if (this.embeddedParser.shouldInterceptTokenizing(n10)) {
          var i9 = this.embeddedParser.interceptTokenizing(t9, n10), a5 = i9.handled, l9 = i9.style;
          if (a5)
            return l9;
        }
        var s7 = e14.prototype.token.call(this, t9, r6);
        return this.embeddedParser.trackState(s7, t9, n10), function(e15, t10, r7, n11) {
          if ("def" == e15) {
            var i10 = function(e16, t11) {
              for (var r8 = e16; r8; r8 = r8.parent)
                if (t11.indexOf(r8.name) > -1)
                  return r8;
            }(n11.context, t10), a6 = r7.current();
            if (i10 && (i10.locals || (i10.locals = []), -1 == i10.locals.indexOf(a6) && i10.locals.push(a6), "funcName" != n11.context.name))
              return "def local";
          } else
            o9.test(e15) && !/qualified/.test(e15) && function(e16, t11) {
              for (var r8 = e16; r8; r8 = r8.parent)
                if (r8.locals && r8.locals.indexOf(t11) > -1)
                  return true;
              return false;
            }(n11.context, r7.current()) && (e15 = e15.replace(o9, "$1variable-2$2"));
          return e15;
        }(s7, b2, t9, r6);
      }, t8.prototype.indent = function(e15, t9, r6) {
        return t9 || (t9 = r6 = "x"), h3(e15, t9, r6, this.indentConf);
      }, t8;
    }(r5.GrammarMode), k2 = { electricInput: /^\s*(?:case .*?:|default:|\{|\})$/, blockCommentStart: "/*", blockCommentEnd: "*/", blockCommentContinue: " * ", lineComment: "//", fold: "brace", closeBrackets: "()[]{}''\"\"``" };
    for (var x2 in k2)
      w2.prototype[x2] = k2[x2];
    r5.registerHelper("wordChars", "google-javascript", /[\w$]/), r5.defineMode("google-javascript", function(e14, t8) {
      return new w2(e14, t8);
    });
  }((e12 = "undefined" != typeof globalThis ? globalThis : e12 || self).CodeMirror);
}(window), function(e12, t6) {
  !function(e13) {
    function t7(e14) {
      if (e14 && e14.__esModule)
        return e14;
      var t8 = /* @__PURE__ */ Object.create(null);
      return e14 && Object.keys(e14).forEach(function(r6) {
        if ("default" !== r6) {
          var n10 = Object.getOwnPropertyDescriptor(e14, r6);
          Object.defineProperty(t8, r6, n10.get ? n10 : { enumerable: true, get: function() {
            return e14[r6];
          } });
        }
      }), t8.default = e14, Object.freeze(t8);
    }
    var r5 = t7(e13), n9 = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^while(?![a-zA-Z¡-￿_0-9_\$])/, /^with(?![a-zA-Z¡-￿_0-9_\$])/, /^do(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 139]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "	", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F_]+|0o[0-7_]+|0b[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await|void)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 508]], /^(?:\+\+|\-\-)/, /^(?:(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?|\?\?)/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.|\?\.)/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 533]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, /^is(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.)?/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/], i8 = Object.freeze({ __proto__: null, nodes: [[1, 6, 2], [/^[^]/, 0], [1, 6, 3], [2, 7, 4, { name: "Statement" }, 0, 1], [1, 6, 3], [3, "keyword", n9[0], -1, 3, "keyword", n9[1], -1, 3, "keyword", n9[2], -1, 3, "keyword", n9[30], -1, 3, "keyword", n9[3], -1, 3, "keyword", n9[14], -1, 3, "keyword", n9[32], -1, 3, "keyword", n9[10], -1, 3, "keyword", n9[11], -1, 3, "keyword", n9[12], -1, 3, "keyword", n9[4], -1, 3, "keyword", n9[9], -1, 3, "keyword", n9[8], -1, 3, "keyword", n9[6], -1, 3, "keyword", n9[5], -1, 3, "keyword", n9[31], -1, 3, "keyword", n9[7], -1, 3, "keyword", n9[13], -1, 3, "keyword", n9[15], -1, 3, "keyword", n9[16], -1, 3, "keyword", n9[17], -1, 3, "keyword", n9[20], -1, 3, "keyword", n9[18], -1, 3, "keyword", n9[28], -1, 3, "keyword", n9[41], -1, 3, "keyword", n9[35], -1, 3, "keyword", n9[34], -1, 3, "atom", n9[27], -1, 3, "variable", n9[19], -1, 3, "operator", n9[36], -1, 3, "operator", n9[40], -1, 3, "operator", n9[39], -1, 2, 141, -1, { name: "string", token: "string" }, 3, "number", n9[29], -1, 2, 146, -1, { name: "comment", token: "comment" }, 3, "string-2", n9[37], -1, 1, 150, -1, /^[^]/, -1], [n9[24], 6, 2, 146, 6, { name: "comment", token: "comment" }, 0, -1], [3, "keyword", [0, "type", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 154]], 8, 3, "keyword", [0, "namespace", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 155]], 18, 3, "keyword", [0, "interface", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 156]], 26, [5, 157], 36, 3, "keyword", n9[21], 37, 3, "keyword", [0, "declare", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 160]], 43, 3, "keyword", /^abstract(?![a-zA-Z¡-￿_0-9_\$])/, 43, 3, "keyword", n9[0], 45, 3, "keyword", n9[1], 52, 3, "keyword", n9[2], 52, 3, "keyword", n9[3], 56, 2, 161, -1, { name: "Block" }, ";", -1, 3, "keyword", n9[4], -1, 3, "keyword", n9[5], 64, 3, "keyword", n9[6], 69, 3, "keyword", n9[7], 75, 3, "keyword", n9[8], 77, n9[45], 77, 3, "keyword", n9[9], 78, 3, "keyword", n9[10], 81, 3, "keyword", n9[11], 85, 3, "keyword", n9[12], 89, 3, "keyword", n9[13], 93, 3, "keyword", n9[14], 97, 3, "keyword", n9[15], 101, 3, "keyword", n9[16], 105, 3, "keyword", n9[17], 117, 3, "keyword", n9[18], 133, "@", 135, 1, 165, 137], [1, 6, 9], [3, "def type", n9[19], 10], [1, 6, 11], [2, 171, 12, { name: "TypeParams" }, 0, 12], [1, 6, 13], [3, "operator", "=", 14], [1, 6, 15], [1, 176, 16], [1, 6, 17], [n9[22], -1], [1, 6, 19], [[5, 224], 20, 3, "def", n9[19], 21], [3, "variable", n9[19], 22], [1, 6, 23], [1, 6, 24], [2, 161, -1, { name: "Block" }], [".", 25], [1, 6, 19], [1, 6, 27], [3, "def type", n9[19], 28], [1, 6, 29], [2, 171, 30, { name: "TypeParams" }, 0, 30], [1, 6, 31], [3, "keyword", n9[20], 32, 0, 33], [1, 6, 34], [1, 6, 35], [1, 227, 33], [2, 233, -1, { name: "ObjType" }], [3, "keyword", n9[26], 38], [1, 6, 39], [1, 6, 40], [3, "def type", n9[19], 41], [3, "keyword", n9[21], 37], [1, 6, 42], [2, 241, -1, { name: "EnumBody" }], [1, 6, 44], [2, 7, -1, { name: "Statement" }], [1, 6, 46], [1, 246, 47], [1, 6, 48], [",", 49, n9[22], -1], [1, 6, 50], [1, 246, 51], [1, 6, 48], [1, 6, 53], [2, 257, 54, { name: "CondExpr" }], [1, 6, 55], [2, 7, -1, { name: "Statement" }], [1, 6, 57], [2, 7, 58, { name: "Statement" }], [1, 6, 59], [3, "keyword", n9[1], 60, 0, -1], [1, 6, 61], [2, 257, 62, { name: "CondExpr" }], [1, 6, 63], [n9[22], -1], [1, 6, 65], [2, 257, 66, { name: "CondExpr" }], [1, 6, 67], [2, 7, 68, { name: "Statement" }], [2, 262, -1, { name: "Alternative" }], [1, 6, 70], [3, "keyword", "*", 71, 0, 71], [1, 6, 72], [3, "def", n9[19], 73], [1, 6, 74], [2, 266, -1, { name: "FunctionDef" }], [1, 6, 76], [2, 275, -1, { name: "ForStatement" }], [1, 6, 79], [1, 6, 80], [":", -1], [1, 165, 77], [1, 6, 82], [n9[22], -1, 1, 165, 83], [1, 6, 84], [n9[22], -1], [1, 6, 86], [1, 165, 87], [1, 6, 88], [n9[22], -1], [1, 6, 90], [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 91], [1, 6, 92], [n9[22], -1], [1, 6, 94], [2, 257, 95, { name: "CondExpr" }], [1, 6, 96], [2, 161, -1, { name: "Block" }], [1, 6, 98], [2, 161, 99, { name: "Block" }], [1, 6, 100], [2, 278, -1, { name: "CatchFinally" }], [1, 6, 102], [3, "def type", n9[19], 103], [1, 6, 104], [1, 291, -1], [1, 6, 106], ["*", 107, 3, "keyword", n9[8], 107, "{", 108, 2, 7, -1, { name: "Statement" }], [1, 6, 109], [1, 6, 110], [3, "keyword", n9[23], 111, 0, 112], [1, 302, 113], [1, 6, 114], [1, 6, 115], [1, 6, 116], [2, 141, 112, { name: "string", token: "string" }], [n9[22], -1], ["}", 107], [1, 6, 118], [2, 141, 119, { name: "string", token: "string" }, 3, "keyword", "*", 120, 1, 308, 121, "{", 122], [1, 6, 123], [1, 6, 124], [1, 6, 125], [1, 6, 126], [n9[22], -1], [3, "keyword", n9[33], 127, 0, 121], [3, "keyword", n9[23], 128, 0, 119], [1, 302, 129], [1, 6, 130], [1, 6, 131], [1, 6, 132], [3, "def", n9[19], 121], [2, 141, 119, { name: "string", token: "string" }], ["}", 121], [1, 6, 134], [2, 7, -1, { name: "Statement" }], [1, 6, 136], [1, 165, -1], [1, 6, 138], [n9[22], -1], [1, 6, 140], [3, "keyword", n9[6], -1, /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1], ["'", 142, '"', 144], ["\\", 143, /^(?!\')./, 142, "'", -1], [/^[^]/, 142], ["\\", 145, /^(?!\")./, 144, '"', -1], [/^[^]/, 144], [/^\/\*\*(?!\/)/, 147, "/*", 149, /^\/\/.*/, -1], [1, 313, 147, 0, 148], [2, 316, 148, { name: "doccomment.tagGroup" }, "*/", -1], [[0, /^(?!\*\/)/, /^[^]/], 149, "*/", -1], [3, "string-2", "`", 151], [3, "string-2", "${", 152, 2, 318, 151, { name: "str2", token: "string-2" }, 3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 151, 3, "string-2", "`", -1], [1, 165, 153], [3, "string-2", "}", 151], [n9[24], 154, n9[25], -1], [n9[24], 155, n9[25], -1], [n9[24], 156, n9[25], -1], [3, "keyword", n9[26], 158], [1, 6, 159], [3, "keyword", n9[21], -1], [n9[24], 160, n9[25], -1], ["{", 162], [1, 6, 163], [2, 7, 164, { name: "Statement" }, "}", -1], [1, 6, 163], [1, 320, 166], [1, 6, 167], [",", 168, 1, 348, 169, 0, -1], [1, 6, 170], [1, 6, 167], [1, 367, 169], ["<", 172], [1, 6, 173], [1, 371, 174], [1, 6, 175], [">", -1], [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 209, 3, "atom", n9[27], 209, 3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 177, 3, "keyword", /^(?:keyof|readonly|unique)(?![a-zA-Z¡-￿_0-9_\$])/, 178, [0, [5, 393], "("], 179, 3, "keyword", n9[28], 180, 0, 180, 0, 181, 2, 396, 209, { name: "TupleType" }, 2, 233, 209, { name: "ObjType" }, 2, 141, 209, { name: "string", token: "string" }, 3, "number", n9[29], 209], [1, 6, 182], [1, 6, 183], [1, 6, 184], [1, 6, 185], [[5, 401], 186, 3, "type", n9[19], 187], [3, "variable", n9[19], 188], [1, 176, 209], [1, 176, 189], [2, 171, 190, { name: "TypeParams" }, 0, 190], [3, "variable", n9[19], 191], [1, 6, 192], [1, 6, 193], [1, 6, 194], [1, 6, 195], [1, 6, 196], [2, 404, 209, { name: "TypeArgs" }, 0, 209], [".", 197, "[", 198, 0, 209], [")", 209], [2, 409, 199, { name: "ParamListSpec" }], [".", 200], [1, 6, 201], [1, 6, 202], [1, 6, 203], [1, 6, 181], [3, "property", n9[19], 204], [1, 165, 205], [3, "operator", "=>", 206], [1, 6, 193], [1, 6, 207], [1, 6, 208], ["]", 204], [1, 410, 209], [1, 6, 210], [3, "operator", /^[\&\|]/, 211, 3, "keyword", n9[20], 211, "[", 212, 3, "operator", "?", 213, 0, -1], [1, 6, 214], [1, 6, 215], [1, 6, 216], [1, 176, 217], [1, 176, 218, 0, 218], [1, 176, 219], [1, 6, 210], [1, 6, 220], [1, 6, 221], ["]", 217], [3, "operator", ":", 222], [1, 6, 223], [1, 176, 217], [n9[19], 225], [1, 6, 226], [".", -1], [1, 176, 228, 0, -1], [1, 6, 229], [",", 230, 0, -1], [1, 6, 231], [1, 176, 232, 0, 232], [1, 6, 229], ["{", 234], [1, 6, 235], [1, 416, 236, 0, 236], [1, 6, 237], [/^[\,\;]/, 238, "}", -1], [1, 6, 239], [1, 416, 240, 0, 240], [1, 6, 237], ["{", 242], [1, 6, 243], [1, 449, 244], [1, 6, 245], ["}", -1], [1, 463, 247], [1, 6, 248], [3, "operator", "!", 249, 0, 249], [1, 6, 250], [":", 251, 0, 253], [1, 6, 252], [1, 176, 253], [1, 6, 254], [3, "operator", "=", 255, 0, -1], [1, 6, 256], [1, 367, -1], ["(", 258], [1, 6, 259], [1, 165, 260], [1, 6, 261], [")", -1], [1, 6, 263], [3, "keyword", n9[30], 264, 0, -1], [1, 6, 265], [2, 7, -1, { name: "Statement" }], [2, 171, 267, { name: "TypeParams" }, 0, 267], [1, 6, 268], [2, 466, 269, { name: "ParamList" }], [1, 6, 270], [":", 271, 0, 273], [1, 6, 272], [1, 410, 273], [1, 6, 274], [2, 161, -1, { name: "Block" }, n9[22], -1], [2, 471, 276, { name: "ForSpec" }], [1, 6, 277], [2, 7, -1, { name: "Statement" }], [3, "keyword", n9[31], 279, 0, 287], [1, 6, 280], ["(", 281, 0, 282], [1, 6, 283], [1, 6, 284], [1, 463, 285], [2, 161, 287, { name: "Block" }], [1, 6, 286], [")", 282], [1, 6, 288], [3, "keyword", n9[32], 289, 0, -1], [1, 6, 290], [2, 161, -1, { name: "Block" }], [2, 171, 292, { name: "TypeParams" }, 0, 292], [1, 6, 293], [3, "keyword", n9[20], 294, 0, 296], [1, 6, 295], [1, 176, 296], [1, 6, 297], [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 298, 0, 300], [1, 6, 299], [1, 227, 300], [1, 6, 301], [2, 482, -1, { name: "ClassBody" }], [1, 308, 303, 0, -1], [1, 6, 304], [",", 305, 0, -1], [1, 6, 306], [1, 308, 307, 0, 307], [1, 6, 304], [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 309, 3, "def", n9[19], -1], [1, 6, 310], [3, "keyword", n9[33], 311], [1, 6, 312], [3, "def", n9[19], -1], [0, 314, 2, 490, -1, { name: "doccomment.braced" }], [[0, /^(?!\*\/|\@[a-zA-Z¡-￿_0-9]|\{)/, /^[^]/], 315], [0, 314, 0, -1], [1, 494, 317], [1, 313, 317, 0, -1], ["\\", 319, "\n", -1], [/^[^]/, -1], ["<", 321, 3, "atom", n9[27], -1, 3, "keyword", n9[34], -1, 3, "keyword", n9[35], 327, 3, "operator", n9[36], 327, 3, "keyword", n9[18], 327, 3, "keyword", n9[28], 329, 3, "keyword", n9[6], 335, 3, "keyword", n9[15], 341, 2, 500, -1, { name: "ArrowFunc" }, 3, "variable callee", n9[38], 346, 3, "variable", n9[19], -1, 3, "number", n9[29], -1, 2, 141, -1, { name: "string", token: "string" }, 3, "string-2", n9[37], -1, 1, 150, -1, 2, 512, -1, { name: "ArrayLiteral" }, 2, 517, -1, { name: "ObjectLiteral" }, 2, 522, -1, { name: "ParenExpr" }], [1, 6, 322], [1, 176, 323], [1, 6, 324], [">", 325], [1, 6, 326], [1, 320, -1], [1, 6, 328], [1, 320, -1], [1, 6, 330], [".", 331, 3, "variable callee", n9[38], 332, 1, 320, -1], [1, 6, 333], [1, 6, 334], [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1], [2, 404, -1, { name: "TypeArgs" }, 0, -1], [1, 6, 336], [3, "keyword", "*", 337, 0, 337], [1, 6, 338], [3, "def", n9[19], 339, 0, 339], [1, 6, 340], [2, 266, -1, { name: "FunctionDef" }], [1, 6, 342], [[6, 527], 343, 0, 344], [3, "def type", n9[19], 344], [1, 6, 345], [1, 291, -1], [1, 6, 347], [2, 404, -1, { name: "TypeArgs" }, 0, -1], [3, "keyword", n9[33], 349, 3, "operator", "!", -1, 3, "operator", n9[39], -1, 3, "operator", n9[40], 351, 3, "keyword", n9[41], 351, 2, 528, -1, { name: "ArgList" }, 1, 150, -1, n9[43], 353, "[", 357, 3, "operator", "?", 361], [1, 6, 350], [1, 176, -1], [1, 6, 352], [1, 165, -1], [1, 6, 354], [3, "property callee", n9[44], 355, 3, "property", n9[19], -1], [1, 6, 356], [2, 404, -1, { name: "TypeArgs" }, 0, -1], [1, 6, 358], [1, 165, 359], [1, 6, 360], ["]", -1], [1, 6, 362], [1, 165, 363], [1, 6, 364], [3, "operator", ":", 365], [1, 6, 366], [1, 165, -1], [1, 320, 368], [1, 6, 369], [1, 537, 370, 0, -1], [1, 6, 369], [3, "def type", n9[19], 372, 0, -1], [1, 6, 373], [3, "keyword", n9[20], 374, 0, 375], [1, 6, 376], [1, 6, 377], [1, 176, 375], [3, "operator", "=", 378, 0, 379], [1, 6, 380], [1, 6, 381], [1, 176, 379], [",", 382, 0, -1], [1, 6, 383], [3, "def type", n9[19], 384, 0, 385], [1, 6, 386], [1, 6, 381], [3, "keyword", n9[20], 387, 0, 388], [1, 6, 389], [1, 6, 390], [1, 176, 388], [3, "operator", "=", 391, 0, 385], [1, 6, 392], [1, 176, 385], ["(", 394], [1, 6, 395], [[6, 556], -1], ["[", 397], [1, 6, 398], [1, 559, 399], [1, 6, 400], ["]", -1], [n9[19], 402], [1, 6, 403], [".", -1], ["<", 405], [1, 6, 406], [1, 227, 407], [1, 6, 408], [">", -1], [2, 466, -1, { name: "ParamList" }], [[5, 573], 411, 0, 414], [3, "variable", n9[19], 412], [1, 6, 413], [3, "keyword", n9[46], 414], [1, 6, 415], [1, 176, -1], [3, "keyword", n9[28], 417, 0, 417, 0, 425], [1, 6, 418], [2, 171, 419, { name: "TypeParams" }, 0, 419], [1, 6, 420], [2, 466, 421, { name: "ParamList" }], [1, 6, 422], [":", 423, 0, -1], [1, 6, 424], [1, 410, -1], [3, "keyword", n9[42], 426, "[", 427, 3, "def property", n9[19], 428, 2, 141, 428, { name: "string", token: "string" }, 3, "number", n9[29], 428], [1, 6, 425], [1, 6, 429], [1, 6, 430], [[0, [5, 576], /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/], 431, 1, 165, 432], [/^\??/, 433], [1, 6, 434], [1, 6, 435], [1, 6, 436], [":", 437, 3, "keyword", /^in(?![a-zA-Z¡-￿_0-9_\$])/, 437], ["]", 438], [2, 171, 439, { name: "TypeParams" }, 0, 439, 0, 440], [1, 6, 441], [1, 6, 442], [1, 6, 443], [1, 6, 444], [1, 176, 432], [":", 445], [2, 466, 440, { name: "ParamList" }], [":", 446, 0, -1], [1, 6, 447], [1, 6, 448], [1, 176, -1], [1, 410, -1], [3, "def property", n9[19], 450, 0, -1], [1, 6, 451], [3, "operator", "=", 452, 0, 453], [1, 6, 454], [1, 6, 455], [1, 367, 453], [",", 456, 0, -1], [1, 6, 457], [3, "def property", n9[19], 458, 0, 459], [1, 6, 460], [1, 6, 455], [3, "operator", "=", 461, 0, 459], [1, 6, 462], [1, 367, 459], [3, "operator", "...", 464, 0, 464], [1, 6, 465], [3, "def", n9[19], -1, 2, 579, -1, { name: "ArrayPattern" }, 2, 584, -1, { name: "ObjectPattern" }], ["(", 467], [1, 6, 468], [1, 589, 469], [1, 6, 470], [")", -1], ["(", 472], [1, 6, 473], [2, 629, 474, { name: "StatementMaybeOf" }], [1, 6, 475], [1, 165, 476, 0, 476, 0, 480], [1, 6, 477], [";", 478], [1, 6, 479], [1, 165, 480, 0, 480], [1, 6, 481], [")", -1], ["{", 483], [1, 6, 484], [0, 485, "@", 486, "}", -1], [3, "keyword", n9[42], 487, 3, "keyword", [0, "override", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 634]], 487, 2, 635, 488, { name: "ClassItem" }], [1, 6, 489], [1, 6, 485], [1, 6, 484], [1, 165, 488], ["{", 491], [1, 494, 492, 1, 313, 493], [[0, /^(?!\}|\*\/)/, /^[^]/], 492, 0, 493], [/^(?:\}|(?=\*\/))/, -1], [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_0-9])/, 495, 3, "tag", /^\@[a-zA-Z¡-￿_0-9]+/, -1], [n9[24], 495, "{", 496, 0, 497, 0, -1], [2, 656, 498, { name: "doccomment.type" }], [3, "def", /^[a-zA-Z¡-￿_0-9]+/, -1, 0, -1], ["}", 499], [[1, "\n", "	", " ", /^\*(?!\/)/], 499, 0, 497], [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 660]], 506, [5, 666], 501], [2, 466, 502, { name: "ParamList" }], [1, 6, 503], [":", 504, 0, 506], [1, 6, 505], [1, 410, 506], [1, 6, 507], [2, 673, -1, { name: "ArrowRest" }], [/^\<(?! )/, -1, /^ */, 509], [1, 678, 510, 0, 511], [/^ */, 511], ["(", -1], ["[", 513], [1, 6, 514], [1, 680, 515], [1, 6, 516], ["]", -1], ["{", 518], [1, 6, 519], [1, 686, 520], [1, 6, 521], ["}", -1], ["(", 523], [1, 6, 524], [1, 165, 525], [1, 6, 526], [")", -1], [3, "keyword", n9[20], -1], ["(", 529], [1, 6, 530], [1, 680, 531], [1, 6, 532], [")", -1], [/^ */, 534], [1, 678, 535, 0, 536], [/^ */, 536], ["(", -1], [3, "keyword", n9[33], 538, 3, "operator", "!", -1, 3, "operator", n9[39], -1, 3, "operator", n9[40], 540, 3, "keyword", n9[41], 540, 2, 528, -1, { name: "ArgList" }, 1, 150, -1, n9[43], 542, "[", 546, 3, "operator", "?", 550], [1, 6, 539], [1, 176, -1], [1, 6, 541], [1, 367, -1], [1, 6, 543], [3, "property callee", n9[44], 544, 3, "property", n9[19], -1], [1, 6, 545], [2, 404, -1, { name: "TypeArgs" }, 0, -1], [1, 6, 547], [1, 165, 548], [1, 6, 549], ["]", -1], [1, 6, 551], [1, 165, 552], [1, 6, 553], [3, "operator", ":", 554], [1, 6, 555], [1, 367, -1], [/^(?:\)|\.\.\.)/, -1, n9[19], 557], [1, 6, 558], [/^[\?\:]/, -1], [n9[45], 560, 0, 561, 0, -1], [1, 6, 562], [1, 6, 563], [":", 561], [1, 176, 564], [1, 6, 565], [",", 566, 0, -1], [1, 6, 567], [n9[45], 568, 0, 569, 0, 570], [1, 6, 571], [1, 6, 572], [1, 6, 565], [":", 569], [1, 176, 570], [n9[19], 574], [1, 6, 575], [3, "keyword", n9[46], -1], [n9[19], 577], [1, 6, 578], [/^(?:\:|in)/, -1], ["[", 580], [1, 6, 581], [1, 692, 582], [1, 6, 583], ["]", -1], ["{", 585], [1, 6, 586], [1, 698, 587], [1, 6, 588], ["}", -1], ["@", 590, 0, 591, 0, -1], [1, 6, 592], [3, "keyword", n9[42], 593, n9[47], 594], [1, 165, 595], [1, 6, 591], [1, 6, 596], [1, 6, 589], [1, 463, 597], [1, 6, 598], [/^\??/, 599], [1, 6, 600], [":", 601, 0, 602], [1, 6, 603], [1, 6, 604], [1, 176, 602], [3, "operator", "=", 605, 0, 606], [1, 6, 607], [1, 6, 608], [1, 367, 606], [",", 609, 0, -1], [1, 6, 610], ["@", 611, 0, 612, 0, 613], [1, 6, 614], [3, "keyword", n9[42], 615, n9[47], 616], [1, 6, 608], [1, 165, 617], [1, 6, 612], [1, 6, 618], [1, 6, 610], [1, 463, 619], [1, 6, 620], [/^\??/, 621], [1, 6, 622], [":", 623, 0, 624], [1, 6, 625], [1, 6, 626], [1, 176, 624], [3, "operator", "=", 627, 0, 613], [1, 6, 628], [1, 367, 613], [2, 7, 630, { name: "Statement" }], [1, 6, 631], [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 632, 0, -1], [1, 6, 633], [1, 165, -1], [n9[24], 634, n9[25], -1], [3, "keyword", n9[48], 636, 0, 636], [1, 6, 637], [3, "def property", n9[19], 642, "[", 638, 3, "number", n9[29], 642, 2, 141, 642, { name: "string", token: "string" }], [1, 6, 639], [1, 165, 640], [1, 6, 641], ["]", 642], [1, 6, 643], [3, "keyword", "*", 644, 0, 644, /^[\!\?]?/, 645], [1, 6, 646], [1, 6, 647], [2, 266, -1, { name: "FunctionDef" }], [":", 648, 0, 649], [1, 6, 650], [1, 6, 651], [1, 176, 649], [3, "operator", "=", 652, 0, 653], [1, 6, 654], [1, 6, 655], [1, 165, 653], [n9[22], -1], [3, "type", "{", 657, 3, "type", /^(?:(?!\{|\}|\*\/).)+/, 656, "\n", 658, 0, -1], [2, 656, 659, { name: "doccomment.type" }], [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 656], [/^(?=\*\/)/, 656, 3, "type", "}", 656], [1, 6, 661], [":", 662, 0, 665], [1, 6, 663], [1, 176, 664], [1, 6, 665], ["=>", -1], [2, 466, 667, { name: "ParamList" }], [1, 6, 668], [":", 669, 0, 671], [1, 6, 670], [1, 410, 671], [1, 6, 672], ["=>", -1], [3, "operator", "=>", 674], [1, 6, 675], [2, 171, 676, { name: "TypeParams" }, 0, 676], [1, 6, 677], [2, 161, -1, { name: "Block" }, 1, 367, -1], ["<", 679], [1, 678, 679, [1, "=>", [0, /^(?!\>)/, /^[^]/]], 679, ">", -1], [1, 367, 681, 0, -1], [1, 6, 682], [",", 683, 0, -1], [1, 6, 684], [1, 367, 685, 0, 685], [1, 6, 682], [2, 704, 687, { name: "ObjectMember" }, 0, -1], [1, 6, 688], [",", 689, 0, -1], [1, 6, 690], [2, 704, 691, { name: "ObjectMember" }, 0, 691], [1, 6, 688], [1, 719, 693, 0, 693, 0, -1], [1, 6, 694], [",", 695, 0, -1], [1, 6, 696], [1, 719, 697, 0, 697, 0, 697], [1, 6, 694], [1, 724, 699, 0, -1], [1, 6, 700], [",", 701, 0, -1], [1, 6, 702], [1, 724, 703, 0, 703], [1, 6, 700], [3, "keyword", n9[48], 705, 0, 705], [1, 6, 706], [3, "keyword", "*", 707, 0, 707], [1, 6, 708], [3, "def property", n9[19], 709, "[", 710, 3, "number", n9[29], 709, 2, 141, 709, { name: "string", token: "string" }, 3, "operator", "...", 711], [1, 6, 712], [1, 6, 713], [1, 6, 714], [2, 266, -1, { name: "FunctionDef" }, ":", 715, 0, -1], [1, 165, 716], [1, 367, -1], [1, 6, 717], [1, 6, 718], [1, 367, -1], ["]", 709], [1, 463, 720], [1, 6, 721], [3, "operator", "=", 722, 0, -1], [1, 6, 723], [1, 367, -1], [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 725, 3, "property", n9[19], 729, 3, "number", n9[29], 729, 2, 141, 729, { name: "string", token: "string" }, 3, "operator", "...", 733], [1, 6, 726], [3, "operator", "=", 727, 0, -1], [1, 6, 728], [1, 367, -1], [1, 6, 730], [":", 731], [1, 6, 732], [1, 719, -1], [1, 6, 734], [1, 719, -1]], start: 0, token: 5 }), o9 = /(^|\s)variable($|\s)/;
    function a4(e14) {
      var t8 = /^(if|for|do|while|try)\b/.exec(e14.startLine.slice(e14.startPos));
      return t8 && t8[1];
    }
    var l8 = { Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}", LambdaBlock: "}", WhenBody: "}", ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}", ArrayLiteral: "]", BracketTokens: "]", TupleType: "]", ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")", ParenthesizedExpression: ")", ConstructorParamList: ")", TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">" }, s6 = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"], c3 = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];
    function u3(e14, t8) {
      for (var n10 = e14.startLine; ; e14 = e14.parent) {
        if ("CondExpr" == e14.name)
          return r5.countColumn(e14.startLine, e14.startPos + 1, t8.tabSize);
        if (c3.indexOf(e14.name) > -1 && /(^\s*|[\(\{\[])$/.test(e14.startLine.slice(0, e14.startPos)))
          return r5.countColumn(e14.startLine, e14.startPos, t8.tabSize);
        if (!e14.parent || e14.parent.startLine != n10)
          return r5.countColumn(e14.startLine, null, t8.tabSize);
      }
    }
    function d3(e14, t8, n10) {
      if (!e14)
        return 0;
      if ("string" == e14.name || "comment" == e14.name)
        return r5.Pass;
      var i9, o10, h4 = l8[e14.name], p3 = t8 && t8.charAt(0) == h4;
      if (h4 && false !== n10.align && (!n10.dontAlign || n10.dontAlign.indexOf(e14.name) < 0) && function(e15) {
        return !/^\s*((\/\/.*)?$|.*=>)/.test(e15.startLine.slice(e15.startPos + 1));
      }(e14))
        return r5.countColumn(e14.startLine, e14.startPos, n10.tabSize) + (p3 ? 0 : 1);
      if (h4 && s6.indexOf(e14.name) > -1) {
        var m3 = e14.parent;
        m3 && "Statement" == m3.name && m3.parent && "Statement" == m3.parent.name && a4(m3.parent) && !a4(m3) && (m3 = m3.parent);
        var g3 = f2(m3, n10);
        return p3 || "NamespaceBlock" == e14.name ? g3 : /^(public|private|protected)\s*:/.test(t8) ? g3 + 1 : !(o10 = e14.parent) || "Statement" != o10.name || !/^switch\b/.test(o10.startLine.slice(o10.startPos)) || (i9 = t8) && /^\s*(case|default)\b/.test(i9) ? g3 + n10.indentUnit : g3 + 2 * n10.indentUnit;
      }
      var v3 = u3(e14, n10);
      return h4 ? p3 && (n10.dontCloseBrackets || "").indexOf(h4) < 0 ? v3 : v3 + n10.indentUnit * ((n10.doubleIndentBrackets || "").indexOf(h4) < 0 ? 1 : 2) : c3.indexOf(e14.name) > -1 ? a4(e14) ? v3 + n10.indentUnit : v3 + 2 * n10.indentUnit : "Alternative" == e14.name || "CatchFinally" == e14.name ? (v3 = u3(e14.parent, n10), !t8 || /^((else|catch|finally)\b|\/[\/\*])/.test(t8) ? v3 : v3 + n10.indentUnit) : "ArrowRest" == e14.name ? v3 + n10.indentUnit : "NewExpression" == e14.name && e14.startLine.length > e14.startPos + 5 ? r5.countColumn(e14.startLine, e14.startPos, n10.tabSize) + 2 * n10.indentUnit : "InitializerList" == e14.name ? v3 + 2 : "ThrowsClause" != e14.name || /throws\s*$/.test(e14.startLine.slice(e14.startPos)) ? d3(e14.parent, t8, n10) : v3 + 2 * n10.indentUnit;
    }
    function f2(e14, t8) {
      for (; ; e14 = e14.parent) {
        if (!e14)
          return 0;
        if (c3.indexOf(e14.name) > -1 || e14.parent && l8[e14.parent.name])
          return r5.countColumn(e14.startLine, null, t8.tabSize);
      }
    }
    function h3(e14, t8, n10, i9) {
      var o10 = e14.context && e14.context.name;
      if ("DeclType" == o10 || "BeforeStatement" == o10 || "AnnotationHead" == o10 || "Template" == o10 || "str" == o10)
        return f2(e14.context, i9);
      if (("doccomment.braced" == o10 || "doccomment.tagGroup" == o10) && !/^[@*]/.test(t8))
        return r5.countColumn(e14.context.startLine, null, i9.tabSize) + 2 * i9.indentUnit;
      var a5 = i9.forceContent && /^\s*(\/\/.*)?$/.test(n10) ? "x" : n10;
      return d3(e14.contextAt(a5, n10.length - t8.length), t8, i9);
    }
    function p2(e14, t8) {
      for (var r6 = t8 - 1; r6 >= 0; r6--) {
        var n10 = e14.charCodeAt(r6);
        if (10 === n10)
          break;
        if (32 !== n10 && 9 !== n10)
          return false;
      }
      return true;
    }
    var m2 = function(e14) {
      this.config = e14;
    };
    m2.prototype.startState = function() {
      return new g2();
    }, m2.prototype.copyState = function(e14) {
      return e14.copy();
    }, m2.prototype.shouldInterceptTokenizing = function(e14) {
      var t8 = e14.currentTemplateState;
      return void 0 !== t8 && null !== t8.mode;
    }, m2.prototype.interceptTokenizing = function(e14, t8) {
      if (e14.match("${") && (e14.backUp(2), !this.isEscaped(e14, e14.pos - 2)))
        return { handled: false };
      if ("`" === e14.peek() && !this.isEscaped(e14, e14.pos))
        return { handled: false };
      var r6 = t8.currentTemplateState, n10 = r6.mode, i9 = r6.state, o10 = n10.token(e14, i9);
      return this.backupIfEmbeddedTokenizerOvershot(e14), { handled: true, style: o10 };
    }, m2.prototype.trackState = function(e14, t8, r6) {
      if (e14) {
        var n10 = r6.currentTemplateState;
        n10 && "inline-expression" !== n10.kind ? this.trackStateInTemplate(e14, t8, r6, n10) : this.trackStateNotInTemplate(e14, t8, r6, n10), r6.previousVariable = "variable" === e14 ? t8.current() : null;
      }
    }, m2.prototype.trackStateNotInTemplate = function(e14, t8, r6, n10) {
      if (n10 && "string-2" === e14 && t8.current().startsWith("}"))
        return r6.templateStack.pop(), void t8.backUp(t8.current().length - 1);
      if ("string-2" === e14 && t8.current().startsWith("`")) {
        var i9 = this.getModeForTemplateTag(r6.previousVariable), o10 = "template";
        i9 ? (t8.backUp(t8.current().length - 1), r6.templateStack.push(new y2(o10, i9, CodeMirror.startState(i9)))) : r6.templateStack.push(new y2(o10, null, null));
      }
    }, m2.prototype.trackStateInTemplate = function(e14, t8, r6, n10) {
      "string-2" !== e14 || !t8.current().endsWith("`") || this.isEscaped(t8.pos - 1) ? "string-2" !== e14 || !t8.current().endsWith("${") || this.isEscaped(t8.pos - 2) || r6.templateStack.push(new y2("inline-expression", null, null)) : r6.templateStack.pop();
    }, m2.prototype.backupIfEmbeddedTokenizerOvershot = function(e14) {
      for (var t8 = e14.current(), r6 = 0; ; ) {
        var n10 = t8.slice(r6).search(/`|\$\{/);
        if (-1 === n10)
          return;
        n10 += r6;
        var i9 = t8.length - n10, o10 = e14.pos - i9;
        if (!this.isEscaped(e14, o10))
          return void e14.backUp(t8.length - n10);
        r6 = n10 + 1;
      }
    }, m2.prototype.isEscaped = function(e14, t8) {
      for (var r6 = false, n10 = t8; n10 > 0 && "\\" === e14.string[n10 - 1]; )
        r6 = !r6, n10--;
      return r6;
    }, m2.prototype.getModeForTemplateTag = function(e14) {
      if (!e14)
        return null;
      "htm" === e14 && (e14 = "html");
      for (var t8 = ["google-" + e14, "" + e14], r6 = 0; r6 < t8.length; r6++) {
        var n10 = CodeMirror.getMode(this.config, t8[r6]);
        if (n10 && "null" !== n10.name)
          return n10;
      }
      return null;
    };
    var g2 = function(e14, t8) {
      void 0 === e14 && (e14 = []), void 0 === t8 && (t8 = null), this.templateStack = e14, this.previousVariable = t8;
    }, v2 = { currentTemplateState: { configurable: true } };
    g2.prototype.copy = function() {
      return new g2(this.templateStack.map(function(e14) {
        return e14.copy();
      }), this.previousVariable);
    }, v2.currentTemplateState.get = function() {
      return this.templateStack[this.templateStack.length - 1];
    }, Object.defineProperties(g2.prototype, v2);
    var y2 = function(e14, t8, r6) {
      this.kind = e14, this.mode = t8, this.state = r6;
    };
    y2.prototype.copy = function() {
      return this.mode ? new y2(this.kind, this.mode, CodeMirror.copyState(this.mode, this.state)) : new y2(this.kind, null, null);
    };
    var b2 = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"], w2 = function(e14) {
      function t8(t9, r6) {
        e14.call(this, i8, { predicates: { canInsertSemi: false === r6.requireSemicolons ? p2 : function() {
          return false;
        } } }), this.templateTokenizer = new m2(t9), this.indentConf = { doubleIndentBrackets: ">)", dontCloseBrackets: ")", tabSize: t9.tabSize, indentUnit: t9.indentUnit, forceContent: true };
      }
      return e14 && (t8.__proto__ = e14), t8.prototype = Object.create(e14 && e14.prototype), t8.prototype.constructor = t8, t8.prototype.startState = function() {
        var t9 = e14.prototype.startState.call(this);
        return t9.embeddedParserState = this.templateTokenizer.startState(), t9;
      }, t8.prototype.copyState = function(t9) {
        var r6 = e14.prototype.copyState.call(this, t9);
        return r6.embeddedParserState = this.templateTokenizer.copyState(t9.embeddedParserState), r6;
      }, t8.prototype.token = function(t9, r6) {
        var n10 = r6.embeddedParserState;
        if (this.templateTokenizer.shouldInterceptTokenizing(n10)) {
          var i9 = this.templateTokenizer.interceptTokenizing(t9, n10), a5 = i9.handled, l9 = i9.style;
          if (a5)
            return l9;
        }
        var s7 = e14.prototype.token.call(this, t9, r6);
        return this.templateTokenizer.trackState(s7, t9, n10), function(e15, t10, r7, n11) {
          if ("def" == e15) {
            var i10 = function(e16, t11) {
              for (var r8 = e16; r8; r8 = r8.parent)
                if (t11.indexOf(r8.name) > -1)
                  return r8;
            }(n11.context, t10), a6 = r7.current();
            if (i10 && (i10.locals || (i10.locals = []), -1 == i10.locals.indexOf(a6) && i10.locals.push(a6), "funcName" != n11.context.name))
              return "def local";
          } else
            o9.test(e15) && !/qualified/.test(e15) && function(e16, t11) {
              for (var r8 = e16; r8; r8 = r8.parent)
                if (r8.locals && r8.locals.indexOf(t11) > -1)
                  return true;
              return false;
            }(n11.context, r7.current()) && (e15 = e15.replace(o9, "$1variable-2$2"));
          return e15;
        }(s7, b2, t9, r6);
      }, t8.prototype.indent = function(e15, t9, r6) {
        return t9 || (t9 = r6 = "x"), h3(e15, t9, r6, this.indentConf);
      }, t8;
    }(r5.GrammarMode), k2 = { electricInput: /^\s*(?:case .*?:|default:|\{|\})$/, blockCommentStart: "/*", blockCommentEnd: "*/", blockCommentContinue: " * ", lineComment: "//", fold: "brace", closeBrackets: "()[]{}''\"\"``" };
    for (var x2 in k2)
      w2.prototype[x2] = k2[x2];
    r5.registerHelper("wordChars", "google-typescript", /[\w$]/), r5.defineMode("google-typescript", function(e14, t8) {
      return new w2(e14, t8);
    });
  }((e12 = "undefined" != typeof globalThis ? globalThis : e12 || self).CodeMirror);
}(window), function(e12, t6) {
  !function(e13) {
    function t7(e14) {
      if (e14 && e14.__esModule)
        return e14;
      var t8 = /* @__PURE__ */ Object.create(null);
      return e14 && Object.keys(e14).forEach(function(r6) {
        if ("default" !== r6) {
          var n10 = Object.getOwnPropertyDescriptor(e14, r6);
          Object.defineProperty(t8, r6, n10.get ? n10 : { enumerable: true, get: function() {
            return e14[r6];
          } });
        }
      }), t8.default = e14, Object.freeze(t8);
    }
    var r5 = t7(e13), n9 = [[1, "\n", "	", " "], /^[a-zA-Z\-\.0-9_]+/], i8 = Object.freeze({ __proto__: null, nodes: [[1, 3, 0, 0, 1], [/^[^]/, 0], [/^[^]/, -1], [2, 4, -1, { name: "comment", token: "comment" }, 2, 6, -1, { name: "doctype", token: "meta" }, 2, 8, -1, { name: "tag" }, 3, "atom", /^\&(?:(?![\;\n\t ]).)*\;/, -1, [1, "\n", /^(?:(?![\&\<]).)+/], -1], ["<!--", 5], [[0, /^(?!\-\-\>)/, /^[^]/], 5, "-->", -1], [/^(?:\<\!doctype|\<\!DOCTYPE)(?![a-zA-Z\-\.0-9_])/, 7], [[0, /^(?!\>)/, /^[^]/], 7, ">", -1], [2, 14, 9, { name: "openTag" }], [3, "tag", "/>", -1, [7, "selfClosing"], 10, 3, "tag", ">", 11], [3, "tag", ">", -1], [1, 3, 11, /^(?=\<\/)/, 12], [[7, "matchingTag"], 13, 0, -1], [2, 21, -1, { name: "closeTag" }], [3, "tag", [0, "<", [6, 24]], 15], [n9[0], 15, 3, "tag", n9[1], 16], [n9[0], 16, 0, 17], [3, "attribute", n9[1], 18, 0, -1], [n9[0], 18, "=", 19, 0, 20], [n9[0], 19, 2, 25, 20, { name: "attributeValue", token: "string" }], [n9[0], 20, 0, 17], [3, "tag", "</", 22], [n9[0], 22, 3, "tag", n9[1], 23], [3, "tag", ">", -1], [n9[0], 24, "/", -1], ['"', 26, "'", 27, /^(?:(?![\n\t \>]).)*/, -1], [[0, /^(?!\")/, /^[^]/], 26, '"', -1], [[0, /^(?!\')/, /^[^]/], 27, "'", -1]], start: 0, token: 2 });
    function o9(e14) {
      var t8 = /^\s*([\w_\.-]+)/.exec(e14);
      return t8 ? t8[1].toLowerCase() : "x";
    }
    function a4(e14) {
      return o9(e14.startLine.slice(e14.startPos + 1));
    }
    var l8 = "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" "), s6 = { selfClosing: function(e14, t8, r6) {
      return l8.indexOf(a4(r6)) > -1;
    }, matchingTag: function(e14, t8, r6) {
      return o9(e14.slice(t8 + 2)) == a4(r6);
    } }, c3 = function(e14) {
      function t8(t9, r6) {
        e14.call(this, i8, { predicates: s6 }), this.conf = t9;
      }
      return e14 && (t8.__proto__ = e14), t8.prototype = Object.create(e14 && e14.prototype), t8.prototype.constructor = t8, t8.prototype.indent = function(e15, t9, r6) {
        return function(e16, t10, r7, n10) {
          for (var i9 = e16.contextAt(r7, r7.length - t10.length), o10 = /^\s*<\/\s*([\w_\.-]+)/.exec(t10); i9; ) {
            if ("tag" == i9.name) {
              var l9 = CodeMirror.countColumn(i9.startLine, null, n10.tabSize);
              return o10 && o10[1].toLowerCase() == a4(i9) ? l9 : l9 + n10.indentUnit;
            }
            if ("openTag" == i9.name)
              return CodeMirror.countColumn(i9.startLine, null, n10.tabSize) + 2 * n10.indentUnit;
            i9 = i9.parent;
          }
          return 0;
        }(e15, t9, r6, this.conf);
      }, t8;
    }(r5.GrammarMode), u3 = c3.prototype;
    u3.electricInput = /^\s*<\/.*?>/, u3.blockCommentStart = "<!--", u3.blockCommentEnd = "-->", u3.fold = "xml", function(e14) {
      e14.xmlCurrentTag = function(e15) {
        var t8 = e15.context;
        if (!t8 || "openTag" != t8.name && "closeTag" != t8.name)
          return null;
        var r6 = /^<\/?\s*([\w\-\.]+)/.exec(t8.startLine.slice(t8.startPos));
        return r6 ? { name: r6[1], close: "closeTag" == t8.name } : null;
      }, e14.xmlCurrentContext = function(e15) {
        for (var t8 = [], r6 = e15.context; r6; r6 = r6.parent)
          if ("tag" == r6.name) {
            var n10 = /^<\s*([\w\-\.]+)/.exec(r6.startLine.slice(r6.startPos));
            n10 && t8.push(n10[1]);
          }
        return t8.reverse();
      };
    }(u3), r5.defineMode("google-html", function(e14, t8) {
      return new c3(e14, t8);
    });
  }((e12 = "undefined" != typeof globalThis ? globalThis : e12 || self).CodeMirror);
}(window), function(e12) {
  function t6(e13) {
    for (var t7 = {}, r6 = 0; r6 < e13.length; ++r6)
      t7[e13[r6].toLowerCase()] = true;
    return t7;
  }
  e12.defineMode("css", function(t7, r6) {
    var n10 = r6.inline;
    r6.propertyKeywords || (r6 = e12.resolveMode("text/css"));
    var i9, o10, a5 = t7.indentUnit, l9 = r6.tokenHooks, s7 = r6.documentTypes || {}, c4 = r6.mediaTypes || {}, u4 = r6.mediaFeatures || {}, d4 = r6.mediaValueKeywords || {}, f3 = r6.propertyKeywords || {}, h4 = r6.nonStandardPropertyKeywords || {}, p3 = r6.fontProperties || {}, m3 = r6.counterDescriptors || {}, g3 = r6.colorKeywords || {}, v3 = r6.valueKeywords || {}, y3 = r6.allowNested, b3 = r6.lineComment, w3 = true === r6.supportsAtComponent, k3 = false !== t7.highlightNonStandardPropertyKeywords;
    function x2(e13, t8) {
      return i9 = t8, e13;
    }
    function C2(e13, t8) {
      var r7 = e13.next();
      if (l9[r7]) {
        var n11 = l9[r7](e13, t8);
        if (false !== n11)
          return n11;
      }
      return "@" == r7 ? (e13.eatWhile(/[\w\\\-]/), x2("def", e13.current())) : "=" == r7 || ("~" == r7 || "|" == r7) && e13.eat("=") ? x2(null, "compare") : '"' == r7 || "'" == r7 ? (t8.tokenize = S3(r7), t8.tokenize(e13, t8)) : "#" == r7 ? (e13.eatWhile(/[\w\\\-]/), x2("atom", "hash")) : "!" == r7 ? (e13.match(/^\s*\w*/), x2("keyword", "important")) : /\d/.test(r7) || "." == r7 && e13.eat(/\d/) ? (e13.eatWhile(/[\w.%]/), x2("number", "unit")) : "-" !== r7 ? /[,+>*\/]/.test(r7) ? x2(null, "select-op") : "." == r7 && e13.match(/^-?[_a-z][_a-z0-9-]*/i) ? x2("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(r7) ? x2(null, r7) : e13.match(/^[\w-.]+(?=\()/) ? (/^(url(-prefix)?|domain|regexp)$/i.test(e13.current()) && (t8.tokenize = T2), x2("variable callee", "variable")) : /[\w\\\-]/.test(r7) ? (e13.eatWhile(/[\w\\\-]/), x2("property", "word")) : x2(null, null) : /[\d.]/.test(e13.peek()) ? (e13.eatWhile(/[\w.%]/), x2("number", "unit")) : e13.match(/^-[\w\\\-]*/) ? (e13.eatWhile(/[\w\\\-]/), e13.match(/^\s*:/, false) ? x2("variable-2", "variable-definition") : x2("variable-2", "variable")) : e13.match(/^\w+-/) ? x2("meta", "meta") : void 0;
    }
    function S3(e13) {
      return function(t8, r7) {
        for (var n11, i10 = false; null != (n11 = t8.next()); ) {
          if (n11 == e13 && !i10) {
            ")" == e13 && t8.backUp(1);
            break;
          }
          i10 = !i10 && "\\" == n11;
        }
        return (n11 == e13 || !i10 && ")" != e13) && (r7.tokenize = null), x2("string", "string");
      };
    }
    function T2(e13, t8) {
      return e13.next(), e13.match(/^\s*[\"\')]/, false) ? t8.tokenize = null : t8.tokenize = S3(")"), x2(null, "(");
    }
    function L2(e13, t8, r7) {
      this.type = e13, this.indent = t8, this.prev = r7;
    }
    function A2(e13, t8, r7, n11) {
      return e13.context = new L2(r7, t8.indentation() + (false === n11 ? 0 : a5), e13.context), r7;
    }
    function M2(e13) {
      return e13.context.prev && (e13.context = e13.context.prev), e13.context.type;
    }
    function z2(e13, t8, r7) {
      return N2[r7.context.type](e13, t8, r7);
    }
    function O(e13, t8, r7, n11) {
      for (var i10 = n11 || 1; i10 > 0; i10--)
        r7.context = r7.context.prev;
      return z2(e13, t8, r7);
    }
    function _2(e13) {
      var t8 = e13.current().toLowerCase();
      o10 = v3.hasOwnProperty(t8) ? "atom" : g3.hasOwnProperty(t8) ? "keyword" : "variable";
    }
    var N2 = { top: function(e13, t8, r7) {
      if ("{" == e13)
        return A2(r7, t8, "block");
      if ("}" == e13 && r7.context.prev)
        return M2(r7);
      if (w3 && /@component/i.test(e13))
        return A2(r7, t8, "atComponentBlock");
      if (/^@(-moz-)?document$/i.test(e13))
        return A2(r7, t8, "documentTypes");
      if (/^@(media|supports|(-moz-)?document|import)$/i.test(e13))
        return A2(r7, t8, "atBlock");
      if (/^@(font-face|counter-style)/i.test(e13))
        return r7.stateArg = e13, "restricted_atBlock_before";
      if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e13))
        return "keyframes";
      if (e13 && "@" == e13.charAt(0))
        return A2(r7, t8, "at");
      if ("hash" == e13)
        o10 = "builtin";
      else if ("word" == e13)
        o10 = "tag";
      else {
        if ("variable-definition" == e13)
          return "maybeprop";
        if ("interpolation" == e13)
          return A2(r7, t8, "interpolation");
        if (":" == e13)
          return "pseudo";
        if (y3 && "(" == e13)
          return A2(r7, t8, "parens");
      }
      return r7.context.type;
    }, block: function(e13, t8, r7) {
      if ("word" == e13) {
        var n11 = t8.current().toLowerCase();
        return f3.hasOwnProperty(n11) ? (o10 = "property", "maybeprop") : h4.hasOwnProperty(n11) ? (o10 = k3 ? "string-2" : "property", "maybeprop") : y3 ? (o10 = t8.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag", "block") : (o10 += " error", "maybeprop");
      }
      return "meta" == e13 ? "block" : y3 || "hash" != e13 && "qualifier" != e13 ? N2.top(e13, t8, r7) : (o10 = "error", "block");
    }, maybeprop: function(e13, t8, r7) {
      return ":" == e13 ? A2(r7, t8, "prop") : z2(e13, t8, r7);
    }, prop: function(e13, t8, r7) {
      if (";" == e13)
        return M2(r7);
      if ("{" == e13 && y3)
        return A2(r7, t8, "propBlock");
      if ("}" == e13 || "{" == e13)
        return O(e13, t8, r7);
      if ("(" == e13)
        return A2(r7, t8, "parens");
      if ("hash" != e13 || /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(t8.current())) {
        if ("word" == e13)
          _2(t8);
        else if ("interpolation" == e13)
          return A2(r7, t8, "interpolation");
      } else
        o10 += " error";
      return "prop";
    }, propBlock: function(e13, t8, r7) {
      return "}" == e13 ? M2(r7) : "word" == e13 ? (o10 = "property", "maybeprop") : r7.context.type;
    }, parens: function(e13, t8, r7) {
      return "{" == e13 || "}" == e13 ? O(e13, t8, r7) : ")" == e13 ? M2(r7) : "(" == e13 ? A2(r7, t8, "parens") : "interpolation" == e13 ? A2(r7, t8, "interpolation") : ("word" == e13 && _2(t8), "parens");
    }, pseudo: function(e13, t8, r7) {
      return "meta" == e13 ? "pseudo" : "word" == e13 ? (o10 = "variable-3", r7.context.type) : z2(e13, t8, r7);
    }, documentTypes: function(e13, t8, r7) {
      return "word" == e13 && s7.hasOwnProperty(t8.current()) ? (o10 = "tag", r7.context.type) : N2.atBlock(e13, t8, r7);
    }, atBlock: function(e13, t8, r7) {
      if ("(" == e13)
        return A2(r7, t8, "atBlock_parens");
      if ("}" == e13 || ";" == e13)
        return O(e13, t8, r7);
      if ("{" == e13)
        return M2(r7) && A2(r7, t8, y3 ? "block" : "top");
      if ("interpolation" == e13)
        return A2(r7, t8, "interpolation");
      if ("word" == e13) {
        var n11 = t8.current().toLowerCase();
        o10 = "only" == n11 || "not" == n11 || "and" == n11 || "or" == n11 ? "keyword" : c4.hasOwnProperty(n11) ? "attribute" : u4.hasOwnProperty(n11) ? "property" : d4.hasOwnProperty(n11) ? "keyword" : f3.hasOwnProperty(n11) ? "property" : h4.hasOwnProperty(n11) ? k3 ? "string-2" : "property" : v3.hasOwnProperty(n11) ? "atom" : g3.hasOwnProperty(n11) ? "keyword" : "error";
      }
      return r7.context.type;
    }, atComponentBlock: function(e13, t8, r7) {
      return "}" == e13 ? O(e13, t8, r7) : "{" == e13 ? M2(r7) && A2(r7, t8, y3 ? "block" : "top", false) : ("word" == e13 && (o10 = "error"), r7.context.type);
    }, atBlock_parens: function(e13, t8, r7) {
      return ")" == e13 ? M2(r7) : "{" == e13 || "}" == e13 ? O(e13, t8, r7, 2) : N2.atBlock(e13, t8, r7);
    }, restricted_atBlock_before: function(e13, t8, r7) {
      return "{" == e13 ? A2(r7, t8, "restricted_atBlock") : "word" == e13 && "@counter-style" == r7.stateArg ? (o10 = "variable", "restricted_atBlock_before") : z2(e13, t8, r7);
    }, restricted_atBlock: function(e13, t8, r7) {
      return "}" == e13 ? (r7.stateArg = null, M2(r7)) : "word" == e13 ? (o10 = "@font-face" == r7.stateArg && !p3.hasOwnProperty(t8.current().toLowerCase()) || "@counter-style" == r7.stateArg && !m3.hasOwnProperty(t8.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock";
    }, keyframes: function(e13, t8, r7) {
      return "word" == e13 ? (o10 = "variable", "keyframes") : "{" == e13 ? A2(r7, t8, "top") : z2(e13, t8, r7);
    }, at: function(e13, t8, r7) {
      return ";" == e13 ? M2(r7) : "{" == e13 || "}" == e13 ? O(e13, t8, r7) : ("word" == e13 ? o10 = "tag" : "hash" == e13 && (o10 = "builtin"), "at");
    }, interpolation: function(e13, t8, r7) {
      return "}" == e13 ? M2(r7) : "{" == e13 || ";" == e13 ? O(e13, t8, r7) : ("word" == e13 ? o10 = "variable" : "variable" != e13 && "(" != e13 && ")" != e13 && (o10 = "error"), "interpolation");
    } };
    return { startState: function(e13) {
      return { tokenize: null, state: n10 ? "block" : "top", stateArg: null, context: new L2(n10 ? "block" : "top", e13 || 0, null) };
    }, token: function(e13, t8) {
      if (!t8.tokenize && e13.eatSpace())
        return null;
      var r7 = (t8.tokenize || C2)(e13, t8);
      return r7 && "object" == typeof r7 && (i9 = r7[1], r7 = r7[0]), o10 = r7, "comment" != i9 && (t8.state = N2[t8.state](i9, e13, t8)), o10;
    }, indent: function(e13, t8) {
      var r7 = e13.context, n11 = t8 && t8.charAt(0), i10 = r7.indent;
      return "prop" != r7.type || "}" != n11 && ")" != n11 || (r7 = r7.prev), r7.prev && ("}" != n11 || "block" != r7.type && "top" != r7.type && "interpolation" != r7.type && "restricted_atBlock" != r7.type ? (")" != n11 || "parens" != r7.type && "atBlock_parens" != r7.type) && ("{" != n11 || "at" != r7.type && "atBlock" != r7.type) || (i10 = Math.max(0, r7.indent - a5)) : i10 = (r7 = r7.prev).indent), i10;
    }, electricChars: "}", blockCommentStart: "/*", blockCommentEnd: "*/", blockCommentContinue: " * ", lineComment: b3, fold: "brace" };
  });
  var r5 = ["domain", "regexp", "url", "url-prefix"], n9 = t6(r5), i8 = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"], o9 = t6(i8), a4 = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover", "prefers-color-scheme", "dynamic-range", "video-dynamic-range"], l8 = t6(a4), s6 = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive", "dark", "light", "standard", "high"], c3 = t6(s6), u3 = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "all", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backdrop-filter", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "block-size", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-content", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-optical-sizing", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "isolation", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-height-step", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotate", "rotation", "rotation-point", "row-gap", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-type", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-skip-ink", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-orientation", "text-outline", "text-overflow", "text-rendering", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "translate", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"], d3 = t6(u3), f2 = ["accent-color", "aspect-ratio", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "content-visibility", "margin-block", "margin-block-end", "margin-block-start", "margin-inline", "margin-inline-end", "margin-inline-start", "overflow-anchor", "overscroll-behavior", "padding-block", "padding-block-end", "padding-block-start", "padding-inline", "padding-inline-end", "padding-inline-start", "scroll-snap-stop", "scrollbar-3d-light-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "shape-inside", "zoom"], h3 = t6(f2), p2 = t6(["font-display", "font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"]), m2 = t6(["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"]), g2 = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], v2 = t6(g2), y2 = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "blur", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "brightness", "bullets", "button", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "conic-gradient", "contain", "content", "contents", "content-box", "context-menu", "continuous", "contrast", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "cubic-bezier", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "drop-shadow", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "grayscale", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "hue-rotate", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "manipulation", "match", "matrix", "matrix3d", "media-play-button", "media-slider", "media-sliderthumb", "media-volume-slider", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "pinch-zoom", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeating-conic-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturate", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "sepia", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub", "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"], b2 = t6(y2), w2 = r5.concat(i8).concat(a4).concat(s6).concat(u3).concat(f2).concat(g2).concat(y2);
  function k2(e13, t7) {
    for (var r6, n10 = false; null != (r6 = e13.next()); ) {
      if (n10 && "/" == r6) {
        t7.tokenize = null;
        break;
      }
      n10 = "*" == r6;
    }
    return ["comment", "comment"];
  }
  e12.registerHelper("hintWords", "css", w2), e12.defineMIME("text/css", { documentTypes: n9, mediaTypes: o9, mediaFeatures: l8, mediaValueKeywords: c3, propertyKeywords: d3, nonStandardPropertyKeywords: h3, fontProperties: p2, counterDescriptors: m2, colorKeywords: v2, valueKeywords: b2, tokenHooks: { "/": function(e13, t7) {
    return !!e13.eat("*") && (t7.tokenize = k2, k2(e13, t7));
  } }, name: "css" }), e12.defineMIME("text/x-scss", { mediaTypes: o9, mediaFeatures: l8, mediaValueKeywords: c3, propertyKeywords: d3, nonStandardPropertyKeywords: h3, colorKeywords: v2, valueKeywords: b2, fontProperties: p2, allowNested: true, lineComment: "//", tokenHooks: { "/": function(e13, t7) {
    return e13.eat("/") ? (e13.skipToEnd(), ["comment", "comment"]) : e13.eat("*") ? (t7.tokenize = k2, k2(e13, t7)) : ["operator", "operator"];
  }, ":": function(e13) {
    return !!e13.match(/^\s*\{/, false) && [null, null];
  }, $: function(e13) {
    return e13.match(/^[\w-]+/), e13.match(/^\s*:/, false) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"];
  }, "#": function(e13) {
    return !!e13.eat("{") && [null, "interpolation"];
  } }, name: "css", helperType: "scss" }), e12.defineMIME("text/x-less", { mediaTypes: o9, mediaFeatures: l8, mediaValueKeywords: c3, propertyKeywords: d3, nonStandardPropertyKeywords: h3, colorKeywords: v2, valueKeywords: b2, fontProperties: p2, allowNested: true, lineComment: "//", tokenHooks: { "/": function(e13, t7) {
    return e13.eat("/") ? (e13.skipToEnd(), ["comment", "comment"]) : e13.eat("*") ? (t7.tokenize = k2, k2(e13, t7)) : ["operator", "operator"];
  }, "@": function(e13) {
    return e13.eat("{") ? [null, "interpolation"] : !e13.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false) && (e13.eatWhile(/[\w\\\-]/), e13.match(/^\s*:/, false) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]);
  }, "&": function() {
    return ["atom", "atom"];
  } }, name: "css", helperType: "less" }), e12.defineMIME("text/x-gss", { documentTypes: n9, mediaTypes: o9, mediaFeatures: l8, propertyKeywords: d3, nonStandardPropertyKeywords: h3, fontProperties: p2, counterDescriptors: m2, colorKeywords: v2, valueKeywords: b2, supportsAtComponent: true, tokenHooks: { "/": function(e13, t7) {
    return !!e13.eat("*") && (t7.tokenize = k2, k2(e13, t7));
  } }, name: "css", helperType: "gss" });
}(CodeMirror), function(e12) {
  e12.defineMode("javascript", function(t6, r5) {
    var n9, i8, o9 = t6.indentUnit, a4 = r5.statementIndent, l8 = r5.jsonld, s6 = r5.json || l8, c3 = false !== r5.trackScope, u3 = r5.typescript, d3 = r5.wordCharacters || /[\w$\xa1-\uffff]/, f2 = function() {
      function e13(e14) {
        return { type: e14, style: "keyword" };
      }
      var t7 = e13("keyword a"), r6 = e13("keyword b"), n10 = e13("keyword c"), i9 = e13("keyword d"), o10 = e13("operator"), a5 = { type: "atom", style: "atom" };
      return { if: e13("if"), while: t7, with: t7, else: r6, do: r6, try: r6, finally: r6, return: i9, break: i9, continue: i9, new: e13("new"), delete: n10, void: n10, throw: n10, debugger: e13("debugger"), var: e13("var"), const: e13("var"), let: e13("var"), function: e13("function"), catch: e13("catch"), for: e13("for"), switch: e13("switch"), case: e13("case"), default: e13("default"), in: o10, typeof: o10, instanceof: o10, true: a5, false: a5, null: a5, undefined: a5, NaN: a5, Infinity: a5, this: e13("this"), class: e13("class"), super: e13("atom"), yield: n10, export: e13("export"), import: e13("import"), extends: n10, await: n10 };
    }(), h3 = /[+\-*&%=<>!?|~^@]/, p2 = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
    function m2(e13, t7, r6) {
      return n9 = e13, i8 = r6, t7;
    }
    function g2(e13, t7) {
      var r6, n10 = e13.next();
      if ('"' == n10 || "'" == n10)
        return t7.tokenize = (r6 = n10, function(e14, t8) {
          var n11, i10 = false;
          if (l8 && "@" == e14.peek() && e14.match(p2))
            return t8.tokenize = g2, m2("jsonld-keyword", "meta");
          for (; null != (n11 = e14.next()) && (n11 != r6 || i10); )
            i10 = !i10 && "\\" == n11;
          return i10 || (t8.tokenize = g2), m2("string", "string");
        }), t7.tokenize(e13, t7);
      if ("." == n10 && e13.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
        return m2("number", "number");
      if ("." == n10 && e13.match(".."))
        return m2("spread", "meta");
      if (/[\[\]{}\(\),;\:\.]/.test(n10))
        return m2(n10);
      if ("=" == n10 && e13.eat(">"))
        return m2("=>", "operator");
      if ("0" == n10 && e13.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
        return m2("number", "number");
      if (/\d/.test(n10))
        return e13.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), m2("number", "number");
      if ("/" == n10)
        return e13.eat("*") ? (t7.tokenize = v2, v2(e13, t7)) : e13.eat("/") ? (e13.skipToEnd(), m2("comment", "comment")) : Je(e13, t7, 1) ? (function(e14) {
          for (var t8, r7 = false, n11 = false; null != (t8 = e14.next()); ) {
            if (!r7) {
              if ("/" == t8 && !n11)
                return;
              "[" == t8 ? n11 = true : n11 && "]" == t8 && (n11 = false);
            }
            r7 = !r7 && "\\" == t8;
          }
        }(e13), e13.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), m2("regexp", "string-2")) : (e13.eat("="), m2("operator", "operator", e13.current()));
      if ("`" == n10)
        return t7.tokenize = y2, y2(e13, t7);
      if ("#" == n10 && "!" == e13.peek())
        return e13.skipToEnd(), m2("meta", "meta");
      if ("#" == n10 && e13.eatWhile(d3))
        return m2("variable", "property");
      if ("<" == n10 && e13.match("!--") || "-" == n10 && e13.match("->") && !/\S/.test(e13.string.slice(0, e13.start)))
        return e13.skipToEnd(), m2("comment", "comment");
      if (h3.test(n10))
        return ">" == n10 && t7.lexical && ">" == t7.lexical.type || (e13.eat("=") ? "!" != n10 && "=" != n10 || e13.eat("=") : /[<>*+\-|&?]/.test(n10) && (e13.eat(n10), ">" == n10 && e13.eat(n10))), "?" == n10 && e13.eat(".") ? m2(".") : m2("operator", "operator", e13.current());
      if (d3.test(n10)) {
        e13.eatWhile(d3);
        var i9 = e13.current();
        if ("." != t7.lastType) {
          if (f2.propertyIsEnumerable(i9)) {
            var o10 = f2[i9];
            return m2(o10.type, o10.style, i9);
          }
          if ("async" == i9 && e13.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
            return m2("async", "keyword", i9);
        }
        return m2("variable", "variable", i9);
      }
    }
    function v2(e13, t7) {
      for (var r6, n10 = false; r6 = e13.next(); ) {
        if ("/" == r6 && n10) {
          t7.tokenize = g2;
          break;
        }
        n10 = "*" == r6;
      }
      return m2("comment", "comment");
    }
    function y2(e13, t7) {
      for (var r6, n10 = false; null != (r6 = e13.next()); ) {
        if (!n10 && ("`" == r6 || "$" == r6 && e13.eat("{"))) {
          t7.tokenize = g2;
          break;
        }
        n10 = !n10 && "\\" == r6;
      }
      return m2("quasi", "string-2", e13.current());
    }
    function b2(e13, t7) {
      t7.fatArrowAt && (t7.fatArrowAt = null);
      var r6 = e13.string.indexOf("=>", e13.start);
      if (!(r6 < 0)) {
        if (u3) {
          var n10 = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e13.string.slice(e13.start, r6));
          n10 && (r6 = n10.index);
        }
        for (var i9 = 0, o10 = false, a5 = r6 - 1; a5 >= 0; --a5) {
          var l9 = e13.string.charAt(a5), s7 = "([{}])".indexOf(l9);
          if (s7 >= 0 && s7 < 3) {
            if (!i9) {
              ++a5;
              break;
            }
            if (0 == --i9) {
              "(" == l9 && (o10 = true);
              break;
            }
          } else if (s7 >= 3 && s7 < 6)
            ++i9;
          else if (d3.test(l9))
            o10 = true;
          else if (/["'\/`]/.test(l9))
            for (; ; --a5) {
              if (0 == a5)
                return;
              if (e13.string.charAt(a5 - 1) == l9 && "\\" != e13.string.charAt(a5 - 2)) {
                a5--;
                break;
              }
            }
          else if (o10 && !i9) {
            ++a5;
            break;
          }
        }
        o10 && !i9 && (t7.fatArrowAt = a5);
      }
    }
    var w2 = { atom: true, number: true, variable: true, string: true, regexp: true, this: true, import: true, "jsonld-keyword": true };
    function k2(e13, t7, r6, n10, i9, o10) {
      this.indented = e13, this.column = t7, this.type = r6, this.prev = i9, this.info = o10, null != n10 && (this.align = n10);
    }
    function x2(e13, t7) {
      if (!c3)
        return false;
      for (var r6 = e13.localVars; r6; r6 = r6.next)
        if (r6.name == t7)
          return true;
      for (var n10 = e13.context; n10; n10 = n10.prev)
        for (r6 = n10.vars; r6; r6 = r6.next)
          if (r6.name == t7)
            return true;
    }
    function C2(e13, t7, r6, n10, i9) {
      var o10 = e13.cc;
      for (S3.state = e13, S3.stream = i9, S3.marked = null, S3.cc = o10, S3.style = t7, e13.lexical.hasOwnProperty("align") || (e13.lexical.align = true); ; )
        if ((o10.length ? o10.pop() : s6 ? R2 : B2)(r6, n10)) {
          for (; o10.length && o10[o10.length - 1].lex; )
            o10.pop()();
          return S3.marked ? S3.marked : "variable" == r6 && x2(e13, n10) ? "variable-2" : t7;
        }
    }
    var S3 = { state: null, column: null, marked: null, cc: null };
    function T2() {
      for (var e13 = arguments.length - 1; e13 >= 0; e13--)
        S3.cc.push(arguments[e13]);
    }
    function L2() {
      return T2.apply(null, arguments), true;
    }
    function A2(e13, t7) {
      for (var r6 = t7; r6; r6 = r6.next)
        if (r6.name == e13)
          return true;
      return false;
    }
    function M2(e13) {
      var t7 = S3.state;
      if (S3.marked = "def", c3) {
        if (t7.context) {
          if ("var" == t7.lexical.info && t7.context && t7.context.block) {
            var n10 = z2(e13, t7.context);
            if (null != n10)
              return void (t7.context = n10);
          } else if (!A2(e13, t7.localVars))
            return void (t7.localVars = new N2(e13, t7.localVars));
        }
        r5.globalVars && !A2(e13, t7.globalVars) && (t7.globalVars = new N2(e13, t7.globalVars));
      }
    }
    function z2(e13, t7) {
      if (t7) {
        if (t7.block) {
          var r6 = z2(e13, t7.prev);
          return r6 ? r6 == t7.prev ? t7 : new _2(r6, t7.vars, true) : null;
        }
        return A2(e13, t7.vars) ? t7 : new _2(t7.prev, new N2(e13, t7.vars), false);
      }
      return null;
    }
    function O(e13) {
      return "public" == e13 || "private" == e13 || "protected" == e13 || "abstract" == e13 || "readonly" == e13;
    }
    function _2(e13, t7, r6) {
      this.prev = e13, this.vars = t7, this.block = r6;
    }
    function N2(e13, t7) {
      this.name = e13, this.next = t7;
    }
    var P2 = new N2("this", new N2("arguments", null));
    function E2() {
      S3.state.context = new _2(S3.state.context, S3.state.localVars, false), S3.state.localVars = P2;
    }
    function D2() {
      S3.state.context = new _2(S3.state.context, S3.state.localVars, true), S3.state.localVars = null;
    }
    function W() {
      S3.state.localVars = S3.state.context.vars, S3.state.context = S3.state.context.prev;
    }
    function F(e13, t7) {
      var r6 = function() {
        var r7 = S3.state, n10 = r7.indented;
        if ("stat" == r7.lexical.type)
          n10 = r7.lexical.indented;
        else
          for (var i9 = r7.lexical; i9 && ")" == i9.type && i9.align; i9 = i9.prev)
            n10 = i9.indented;
        r7.lexical = new k2(n10, S3.stream.column(), e13, null, r7.lexical, t7);
      };
      return r6.lex = true, r6;
    }
    function I2() {
      var e13 = S3.state;
      e13.lexical.prev && (")" == e13.lexical.type && (e13.indented = e13.lexical.indented), e13.lexical = e13.lexical.prev);
    }
    function H2(e13) {
      return function t7(r6) {
        return r6 == e13 ? L2() : ";" == e13 || "}" == r6 || ")" == r6 || "]" == r6 ? T2() : L2(t7);
      };
    }
    function B2(e13, t7) {
      return "var" == e13 ? L2(F("vardef", t7), Se, H2(";"), I2) : "keyword a" == e13 ? L2(F("form"), j2, B2, I2) : "keyword b" == e13 ? L2(F("form"), B2, I2) : "keyword d" == e13 ? S3.stream.match(/^\s*$/, false) ? L2() : L2(F("stat"), V2, H2(";"), I2) : "debugger" == e13 ? L2(H2(";")) : "{" == e13 ? L2(F("}"), D2, se, I2, W) : ";" == e13 ? L2() : "if" == e13 ? ("else" == S3.state.lexical.info && S3.state.cc[S3.state.cc.length - 1] == I2 && S3.state.cc.pop()(), L2(F("form"), j2, B2, I2, Oe)) : "function" == e13 ? L2(Ee) : "for" == e13 ? L2(F("form"), D2, _e, B2, W, I2) : "class" == e13 || u3 && "interface" == t7 ? (S3.marked = "keyword", L2(F("form", "class" == e13 ? e13 : t7), He, I2)) : "variable" == e13 ? u3 && "declare" == t7 ? (S3.marked = "keyword", L2(B2)) : u3 && ("module" == t7 || "enum" == t7 || "type" == t7) && S3.stream.match(/^\s*\w/, false) ? (S3.marked = "keyword", "enum" == t7 ? L2(Ye) : "type" == t7 ? L2(We, H2("operator"), he, H2(";")) : L2(F("form"), Te, H2("{"), F("}"), se, I2, I2)) : u3 && "namespace" == t7 ? (S3.marked = "keyword", L2(F("form"), R2, B2, I2)) : u3 && "abstract" == t7 ? (S3.marked = "keyword", L2(B2)) : L2(F("stat"), te) : "switch" == e13 ? L2(F("form"), j2, H2("{"), F("}", "switch"), D2, se, I2, I2, W) : "case" == e13 ? L2(R2, H2(":")) : "default" == e13 ? L2(H2(":")) : "catch" == e13 ? L2(F("form"), E2, $2, B2, I2, W) : "export" == e13 ? L2(F("stat"), Ze, I2) : "import" == e13 ? L2(F("stat"), Ue, I2) : "async" == e13 ? L2(B2) : "@" == t7 ? L2(R2, B2) : T2(F("stat"), R2, H2(";"), I2);
    }
    function $2(e13) {
      if ("(" == e13)
        return L2(Fe, H2(")"));
    }
    function R2(e13, t7) {
      return U(e13, t7, false);
    }
    function Z2(e13, t7) {
      return U(e13, t7, true);
    }
    function j2(e13) {
      return "(" != e13 ? T2() : L2(F(")"), V2, H2(")"), I2);
    }
    function U(e13, t7, r6) {
      if (S3.state.fatArrowAt == S3.stream.start) {
        var n10 = r6 ? Q : Y;
        if ("(" == e13)
          return L2(E2, F(")"), ae(Fe, ")"), I2, H2("=>"), n10, W);
        if ("variable" == e13)
          return T2(E2, Te, H2("=>"), n10, W);
      }
      var i9 = r6 ? G : K;
      return w2.hasOwnProperty(e13) ? L2(i9) : "function" == e13 ? L2(Ee, i9) : "class" == e13 || u3 && "interface" == t7 ? (S3.marked = "keyword", L2(F("form"), Ie, I2)) : "keyword c" == e13 || "async" == e13 ? L2(r6 ? Z2 : R2) : "(" == e13 ? L2(F(")"), V2, H2(")"), I2, i9) : "operator" == e13 || "spread" == e13 ? L2(r6 ? Z2 : R2) : "[" == e13 ? L2(F("]"), Xe, I2, i9) : "{" == e13 ? le(ne, "}", null, i9) : "quasi" == e13 ? T2(q, i9) : "new" == e13 ? L2(function(e14) {
        return function(t8) {
          return "." == t8 ? L2(e14 ? ee : J) : "variable" == t8 && u3 ? L2(ke, e14 ? G : K) : T2(e14 ? Z2 : R2);
        };
      }(r6)) : L2();
    }
    function V2(e13) {
      return e13.match(/[;\}\)\],]/) ? T2() : T2(R2);
    }
    function K(e13, t7) {
      return "," == e13 ? L2(V2) : G(e13, t7, false);
    }
    function G(e13, t7, r6) {
      var n10 = 0 == r6 ? K : G, i9 = 0 == r6 ? R2 : Z2;
      return "=>" == e13 ? L2(E2, r6 ? Q : Y, W) : "operator" == e13 ? /\+\+|--/.test(t7) || u3 && "!" == t7 ? L2(n10) : u3 && "<" == t7 && S3.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false) ? L2(F(">"), ae(he, ">"), I2, n10) : "?" == t7 ? L2(R2, H2(":"), i9) : L2(i9) : "quasi" == e13 ? T2(q, n10) : ";" != e13 ? "(" == e13 ? le(Z2, ")", "call", n10) : "." == e13 ? L2(re, n10) : "[" == e13 ? L2(F("]"), V2, H2("]"), I2, n10) : u3 && "as" == t7 ? (S3.marked = "keyword", L2(he, n10)) : "regexp" == e13 ? (S3.state.lastType = S3.marked = "operator", S3.stream.backUp(S3.stream.pos - S3.stream.start - 1), L2(i9)) : void 0 : void 0;
    }
    function q(e13, t7) {
      return "quasi" != e13 ? T2() : "${" != t7.slice(t7.length - 2) ? L2(q) : L2(V2, X);
    }
    function X(e13) {
      if ("}" == e13)
        return S3.marked = "string-2", S3.state.tokenize = y2, L2(q);
    }
    function Y(e13) {
      return b2(S3.stream, S3.state), T2("{" == e13 ? B2 : R2);
    }
    function Q(e13) {
      return b2(S3.stream, S3.state), T2("{" == e13 ? B2 : Z2);
    }
    function J(e13, t7) {
      if ("target" == t7)
        return S3.marked = "keyword", L2(K);
    }
    function ee(e13, t7) {
      if ("target" == t7)
        return S3.marked = "keyword", L2(G);
    }
    function te(e13) {
      return ":" == e13 ? L2(I2, B2) : T2(K, H2(";"), I2);
    }
    function re(e13) {
      if ("variable" == e13)
        return S3.marked = "property", L2();
    }
    function ne(e13, t7) {
      return "async" == e13 ? (S3.marked = "property", L2(ne)) : "variable" == e13 || "keyword" == S3.style ? (S3.marked = "property", "get" == t7 || "set" == t7 ? L2(ie) : (u3 && S3.state.fatArrowAt == S3.stream.start && (r6 = S3.stream.match(/^\s*:\s*/, false)) && (S3.state.fatArrowAt = S3.stream.pos + r6[0].length), L2(oe))) : "number" == e13 || "string" == e13 ? (S3.marked = l8 ? "property" : S3.style + " property", L2(oe)) : "jsonld-keyword" == e13 ? L2(oe) : u3 && O(t7) ? (S3.marked = "keyword", L2(ne)) : "[" == e13 ? L2(R2, ce, H2("]"), oe) : "spread" == e13 ? L2(Z2, oe) : "*" == t7 ? (S3.marked = "keyword", L2(ne)) : ":" == e13 ? T2(oe) : void 0;
      var r6;
    }
    function ie(e13) {
      return "variable" != e13 ? T2(oe) : (S3.marked = "property", L2(Ee));
    }
    function oe(e13) {
      return ":" == e13 ? L2(Z2) : "(" == e13 ? T2(Ee) : void 0;
    }
    function ae(e13, t7, r6) {
      function n10(i9, o10) {
        if (r6 ? r6.indexOf(i9) > -1 : "," == i9) {
          var a5 = S3.state.lexical;
          return "call" == a5.info && (a5.pos = (a5.pos || 0) + 1), L2(function(r7, n11) {
            return r7 == t7 || n11 == t7 ? T2() : T2(e13);
          }, n10);
        }
        return i9 == t7 || o10 == t7 ? L2() : r6 && r6.indexOf(";") > -1 ? T2(e13) : L2(H2(t7));
      }
      return function(r7, i9) {
        return r7 == t7 || i9 == t7 ? L2() : T2(e13, n10);
      };
    }
    function le(e13, t7, r6) {
      for (var n10 = 3; n10 < arguments.length; n10++)
        S3.cc.push(arguments[n10]);
      return L2(F(t7, r6), ae(e13, t7), I2);
    }
    function se(e13) {
      return "}" == e13 ? L2() : T2(B2, se);
    }
    function ce(e13, t7) {
      if (u3) {
        if (":" == e13)
          return L2(he);
        if ("?" == t7)
          return L2(ce);
      }
    }
    function ue(e13, t7) {
      if (u3 && (":" == e13 || "in" == t7))
        return L2(he);
    }
    function de(e13) {
      if (u3 && ":" == e13)
        return S3.stream.match(/^\s*\w+\s+is\b/, false) ? L2(R2, fe, he) : L2(he);
    }
    function fe(e13, t7) {
      if ("is" == t7)
        return S3.marked = "keyword", L2();
    }
    function he(e13, t7) {
      return "keyof" == t7 || "typeof" == t7 || "infer" == t7 || "readonly" == t7 ? (S3.marked = "keyword", L2("typeof" == t7 ? Z2 : he)) : "variable" == e13 || "void" == t7 ? (S3.marked = "type", L2(we)) : "|" == t7 || "&" == t7 ? L2(he) : "string" == e13 || "number" == e13 || "atom" == e13 ? L2(we) : "[" == e13 ? L2(F("]"), ae(he, "]", ","), I2, we) : "{" == e13 ? L2(F("}"), me, I2, we) : "(" == e13 ? L2(ae(be, ")"), pe, we) : "<" == e13 ? L2(ae(he, ">"), he) : "quasi" == e13 ? T2(ve, we) : void 0;
    }
    function pe(e13) {
      if ("=>" == e13)
        return L2(he);
    }
    function me(e13) {
      return e13.match(/[\}\)\]]/) ? L2() : "," == e13 || ";" == e13 ? L2(me) : T2(ge, me);
    }
    function ge(e13, t7) {
      return "variable" == e13 || "keyword" == S3.style ? (S3.marked = "property", L2(ge)) : "?" == t7 || "number" == e13 || "string" == e13 ? L2(ge) : ":" == e13 ? L2(he) : "[" == e13 ? L2(H2("variable"), ue, H2("]"), ge) : "(" == e13 ? T2(De, ge) : e13.match(/[;\}\)\],]/) ? void 0 : L2();
    }
    function ve(e13, t7) {
      return "quasi" != e13 ? T2() : "${" != t7.slice(t7.length - 2) ? L2(ve) : L2(he, ye);
    }
    function ye(e13) {
      if ("}" == e13)
        return S3.marked = "string-2", S3.state.tokenize = y2, L2(ve);
    }
    function be(e13, t7) {
      return "variable" == e13 && S3.stream.match(/^\s*[?:]/, false) || "?" == t7 ? L2(be) : ":" == e13 ? L2(he) : "spread" == e13 ? L2(be) : T2(he);
    }
    function we(e13, t7) {
      return "<" == t7 ? L2(F(">"), ae(he, ">"), I2, we) : "|" == t7 || "." == e13 || "&" == t7 ? L2(he) : "[" == e13 ? L2(he, H2("]"), we) : "extends" == t7 || "implements" == t7 ? (S3.marked = "keyword", L2(he)) : "?" == t7 ? L2(he, H2(":"), he) : void 0;
    }
    function ke(e13, t7) {
      if ("<" == t7)
        return L2(F(">"), ae(he, ">"), I2, we);
    }
    function xe() {
      return T2(he, Ce);
    }
    function Ce(e13, t7) {
      if ("=" == t7)
        return L2(he);
    }
    function Se(e13, t7) {
      return "enum" == t7 ? (S3.marked = "keyword", L2(Ye)) : T2(Te, ce, Me, ze);
    }
    function Te(e13, t7) {
      return u3 && O(t7) ? (S3.marked = "keyword", L2(Te)) : "variable" == e13 ? (M2(t7), L2()) : "spread" == e13 ? L2(Te) : "[" == e13 ? le(Ae, "]") : "{" == e13 ? le(Le, "}") : void 0;
    }
    function Le(e13, t7) {
      return "variable" != e13 || S3.stream.match(/^\s*:/, false) ? ("variable" == e13 && (S3.marked = "property"), "spread" == e13 ? L2(Te) : "}" == e13 ? T2() : "[" == e13 ? L2(R2, H2("]"), H2(":"), Le) : L2(H2(":"), Te, Me)) : (M2(t7), L2(Me));
    }
    function Ae() {
      return T2(Te, Me);
    }
    function Me(e13, t7) {
      if ("=" == t7)
        return L2(Z2);
    }
    function ze(e13) {
      if ("," == e13)
        return L2(Se);
    }
    function Oe(e13, t7) {
      if ("keyword b" == e13 && "else" == t7)
        return L2(F("form", "else"), B2, I2);
    }
    function _e(e13, t7) {
      return "await" == t7 ? L2(_e) : "(" == e13 ? L2(F(")"), Ne, I2) : void 0;
    }
    function Ne(e13) {
      return "var" == e13 ? L2(Se, Pe) : "variable" == e13 ? L2(Pe) : T2(Pe);
    }
    function Pe(e13, t7) {
      return ")" == e13 ? L2() : ";" == e13 ? L2(Pe) : "in" == t7 || "of" == t7 ? (S3.marked = "keyword", L2(R2, Pe)) : T2(R2, Pe);
    }
    function Ee(e13, t7) {
      return "*" == t7 ? (S3.marked = "keyword", L2(Ee)) : "variable" == e13 ? (M2(t7), L2(Ee)) : "(" == e13 ? L2(E2, F(")"), ae(Fe, ")"), I2, de, B2, W) : u3 && "<" == t7 ? L2(F(">"), ae(xe, ">"), I2, Ee) : void 0;
    }
    function De(e13, t7) {
      return "*" == t7 ? (S3.marked = "keyword", L2(De)) : "variable" == e13 ? (M2(t7), L2(De)) : "(" == e13 ? L2(E2, F(")"), ae(Fe, ")"), I2, de, W) : u3 && "<" == t7 ? L2(F(">"), ae(xe, ">"), I2, De) : void 0;
    }
    function We(e13, t7) {
      return "keyword" == e13 || "variable" == e13 ? (S3.marked = "type", L2(We)) : "<" == t7 ? L2(F(">"), ae(xe, ">"), I2) : void 0;
    }
    function Fe(e13, t7) {
      return "@" == t7 && L2(R2, Fe), "spread" == e13 ? L2(Fe) : u3 && O(t7) ? (S3.marked = "keyword", L2(Fe)) : u3 && "this" == e13 ? L2(ce, Me) : T2(Te, ce, Me);
    }
    function Ie(e13, t7) {
      return "variable" == e13 ? He(e13, t7) : Be(e13, t7);
    }
    function He(e13, t7) {
      if ("variable" == e13)
        return M2(t7), L2(Be);
    }
    function Be(e13, t7) {
      return "<" == t7 ? L2(F(">"), ae(xe, ">"), I2, Be) : "extends" == t7 || "implements" == t7 || u3 && "," == e13 ? ("implements" == t7 && (S3.marked = "keyword"), L2(u3 ? he : R2, Be)) : "{" == e13 ? L2(F("}"), $e, I2) : void 0;
    }
    function $e(e13, t7) {
      return "async" == e13 || "variable" == e13 && ("static" == t7 || "get" == t7 || "set" == t7 || u3 && O(t7)) && S3.stream.match(/^\s+[\w$\xa1-\uffff]/, false) ? (S3.marked = "keyword", L2($e)) : "variable" == e13 || "keyword" == S3.style ? (S3.marked = "property", L2(Re, $e)) : "number" == e13 || "string" == e13 ? L2(Re, $e) : "[" == e13 ? L2(R2, ce, H2("]"), Re, $e) : "*" == t7 ? (S3.marked = "keyword", L2($e)) : u3 && "(" == e13 ? T2(De, $e) : ";" == e13 || "," == e13 ? L2($e) : "}" == e13 ? L2() : "@" == t7 ? L2(R2, $e) : void 0;
    }
    function Re(e13, t7) {
      if ("!" == t7)
        return L2(Re);
      if ("?" == t7)
        return L2(Re);
      if (":" == e13)
        return L2(he, Me);
      if ("=" == t7)
        return L2(Z2);
      var r6 = S3.state.lexical.prev;
      return T2(r6 && "interface" == r6.info ? De : Ee);
    }
    function Ze(e13, t7) {
      return "*" == t7 ? (S3.marked = "keyword", L2(qe, H2(";"))) : "default" == t7 ? (S3.marked = "keyword", L2(R2, H2(";"))) : "{" == e13 ? L2(ae(je, "}"), qe, H2(";")) : T2(B2);
    }
    function je(e13, t7) {
      return "as" == t7 ? (S3.marked = "keyword", L2(H2("variable"))) : "variable" == e13 ? T2(Z2, je) : void 0;
    }
    function Ue(e13) {
      return "string" == e13 ? L2() : "(" == e13 ? T2(R2) : "." == e13 ? T2(K) : T2(Ve, Ke, qe);
    }
    function Ve(e13, t7) {
      return "{" == e13 ? le(Ve, "}") : ("variable" == e13 && M2(t7), "*" == t7 && (S3.marked = "keyword"), L2(Ge));
    }
    function Ke(e13) {
      if ("," == e13)
        return L2(Ve, Ke);
    }
    function Ge(e13, t7) {
      if ("as" == t7)
        return S3.marked = "keyword", L2(Ve);
    }
    function qe(e13, t7) {
      if ("from" == t7)
        return S3.marked = "keyword", L2(R2);
    }
    function Xe(e13) {
      return "]" == e13 ? L2() : T2(ae(Z2, "]"));
    }
    function Ye() {
      return T2(F("form"), Te, H2("{"), F("}"), ae(Qe, "}"), I2, I2);
    }
    function Qe() {
      return T2(Te, Me);
    }
    function Je(e13, t7, r6) {
      return t7.tokenize == g2 && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t7.lastType) || "quasi" == t7.lastType && /\{\s*$/.test(e13.string.slice(0, e13.pos - (r6 || 0)));
    }
    return E2.lex = D2.lex = true, W.lex = true, I2.lex = true, { startState: function(e13) {
      var t7 = { tokenize: g2, lastType: "sof", cc: [], lexical: new k2((e13 || 0) - o9, 0, "block", false), localVars: r5.localVars, context: r5.localVars && new _2(null, null, false), indented: e13 || 0 };
      return r5.globalVars && "object" == typeof r5.globalVars && (t7.globalVars = r5.globalVars), t7;
    }, token: function(e13, t7) {
      if (e13.sol() && (t7.lexical.hasOwnProperty("align") || (t7.lexical.align = false), t7.indented = e13.indentation(), b2(e13, t7)), t7.tokenize != v2 && e13.eatSpace())
        return null;
      var r6 = t7.tokenize(e13, t7);
      return "comment" == n9 ? r6 : (t7.lastType = "operator" != n9 || "++" != i8 && "--" != i8 ? n9 : "incdec", C2(t7, r6, n9, i8, e13));
    }, indent: function(t7, n10) {
      if (t7.tokenize == v2 || t7.tokenize == y2)
        return e12.Pass;
      if (t7.tokenize != g2)
        return 0;
      var i9, l9 = n10 && n10.charAt(0), s7 = t7.lexical;
      if (!/^\s*else\b/.test(n10))
        for (var c4 = t7.cc.length - 1; c4 >= 0; --c4) {
          var u4 = t7.cc[c4];
          if (u4 == I2)
            s7 = s7.prev;
          else if (u4 != Oe && u4 != W)
            break;
        }
      for (; ("stat" == s7.type || "form" == s7.type) && ("}" == l9 || (i9 = t7.cc[t7.cc.length - 1]) && (i9 == K || i9 == G) && !/^[,\.=+\-*:?[\(]/.test(n10)); )
        s7 = s7.prev;
      a4 && ")" == s7.type && "stat" == s7.prev.type && (s7 = s7.prev);
      var d4 = s7.type, f3 = l9 == d4;
      return "vardef" == d4 ? s7.indented + ("operator" == t7.lastType || "," == t7.lastType ? s7.info.length + 1 : 0) : "form" == d4 && "{" == l9 ? s7.indented : "form" == d4 ? s7.indented + o9 : "stat" == d4 ? s7.indented + (function(e13, t8) {
        return "operator" == e13.lastType || "," == e13.lastType || h3.test(t8.charAt(0)) || /[,.]/.test(t8.charAt(0));
      }(t7, n10) ? a4 || o9 : 0) : "switch" != s7.info || f3 || 0 == r5.doubleIndentSwitch ? s7.align ? s7.column + (f3 ? 0 : 1) : s7.indented + (f3 ? 0 : o9) : s7.indented + (/^(?:case|default)\b/.test(n10) ? o9 : 2 * o9);
    }, electricInput: /^\s*(?:case .*?:|default:|\{|\})$/, blockCommentStart: s6 ? null : "/*", blockCommentEnd: s6 ? null : "*/", blockCommentContinue: s6 ? null : " * ", lineComment: s6 ? null : "//", fold: "brace", closeBrackets: "()[]{}''\"\"``", helperType: s6 ? "json" : "javascript", jsonldMode: l8, jsonMode: s6, expressionAllowed: Je, skipExpression: function(t7) {
      C2(t7, "atom", "atom", "true", new e12.StringStream("", 2, null));
    } };
  }), e12.registerHelper("wordChars", "javascript", /[\w$]/), e12.defineMIME("text/javascript", "javascript"), e12.defineMIME("text/ecmascript", "javascript"), e12.defineMIME("application/javascript", "javascript"), e12.defineMIME("application/x-javascript", "javascript"), e12.defineMIME("application/ecmascript", "javascript"), e12.defineMIME("application/json", { name: "javascript", json: true }), e12.defineMIME("application/x-json", { name: "javascript", json: true }), e12.defineMIME("application/manifest+json", { name: "javascript", json: true }), e12.defineMIME("application/ld+json", { name: "javascript", jsonld: true }), e12.defineMIME("text/typescript", { name: "javascript", typescript: true }), e12.defineMIME("application/typescript", { name: "javascript", typescript: true });
}(CodeMirror), function(e12) {
  var t6 = { autoSelfClosers: { area: true, base: true, br: true, col: true, command: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true, menuitem: true }, implicitlyClosed: { dd: true, li: true, optgroup: true, option: true, p: true, rp: true, rt: true, tbody: true, td: true, tfoot: true, th: true, tr: true }, contextGrabbers: { dd: { dd: true, dt: true }, dt: { dd: true, dt: true }, li: { li: true }, option: { option: true, optgroup: true }, optgroup: { optgroup: true }, p: { address: true, article: true, aside: true, blockquote: true, dir: true, div: true, dl: true, fieldset: true, footer: true, form: true, h1: true, h2: true, h3: true, h4: true, h5: true, h6: true, header: true, hgroup: true, hr: true, menu: true, nav: true, ol: true, p: true, pre: true, section: true, table: true, ul: true }, rp: { rp: true, rt: true }, rt: { rp: true, rt: true }, tbody: { tbody: true, tfoot: true }, td: { td: true, th: true }, tfoot: { tbody: true }, th: { td: true, th: true }, thead: { tbody: true, tfoot: true }, tr: { tr: true } }, doNotIndent: { pre: true }, allowUnquoted: true, allowMissing: true, caseFold: true }, r5 = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: false, allowMissing: false, allowMissingTagName: false, caseFold: false };
  e12.defineMode("xml", function(n9, i8) {
    var o9, a4, l8 = n9.indentUnit, s6 = {}, c3 = i8.htmlMode ? t6 : r5;
    for (var u3 in c3)
      s6[u3] = c3[u3];
    for (var u3 in i8)
      s6[u3] = i8[u3];
    function d3(e13, t7) {
      function r6(r7) {
        return t7.tokenize = r7, r7(e13, t7);
      }
      var n10 = e13.next();
      return "<" == n10 ? e13.eat("!") ? e13.eat("[") ? e13.match("CDATA[") ? r6(h3("atom", "]]>")) : null : e13.match("--") ? r6(h3("comment", "-->")) : e13.match("DOCTYPE", true, true) ? (e13.eatWhile(/[\w\._\-]/), r6(p2(1))) : null : e13.eat("?") ? (e13.eatWhile(/[\w\._\-]/), t7.tokenize = h3("meta", "?>"), "meta") : (o9 = e13.eat("/") ? "closeTag" : "openTag", t7.tokenize = f2, "tag bracket") : "&" == n10 ? (e13.eat("#") ? e13.eat("x") ? e13.eatWhile(/[a-fA-F\d]/) && e13.eat(";") : e13.eatWhile(/[\d]/) && e13.eat(";") : e13.eatWhile(/[\w\.\-:]/) && e13.eat(";")) ? "atom" : "error" : (e13.eatWhile(/[^&<]/), null);
    }
    function f2(e13, t7) {
      var r6, n10, i9 = e13.next();
      if (">" == i9 || "/" == i9 && e13.eat(">"))
        return t7.tokenize = d3, o9 = ">" == i9 ? "endTag" : "selfcloseTag", "tag bracket";
      if ("=" == i9)
        return o9 = "equals", null;
      if ("<" == i9) {
        t7.tokenize = d3, t7.state = b2, t7.tagName = t7.tagStart = null;
        var a5 = t7.tokenize(e13, t7);
        return a5 ? a5 + " tag error" : "tag error";
      }
      return /[\'\"]/.test(i9) ? (t7.tokenize = (r6 = i9, n10 = function(e14, t8) {
        for (; !e14.eol(); )
          if (e14.next() == r6) {
            t8.tokenize = f2;
            break;
          }
        return "string";
      }, n10.isInAttribute = true, n10), t7.stringStartCol = e13.column(), t7.tokenize(e13, t7)) : (e13.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
    }
    function h3(e13, t7) {
      return function(r6, n10) {
        for (; !r6.eol(); ) {
          if (r6.match(t7)) {
            n10.tokenize = d3;
            break;
          }
          r6.next();
        }
        return e13;
      };
    }
    function p2(e13) {
      return function(t7, r6) {
        for (var n10; null != (n10 = t7.next()); ) {
          if ("<" == n10)
            return r6.tokenize = p2(e13 + 1), r6.tokenize(t7, r6);
          if (">" == n10) {
            if (1 == e13) {
              r6.tokenize = d3;
              break;
            }
            return r6.tokenize = p2(e13 - 1), r6.tokenize(t7, r6);
          }
        }
        return "meta";
      };
    }
    function m2(e13) {
      return e13 && e13.toLowerCase();
    }
    function g2(e13, t7, r6) {
      this.prev = e13.context, this.tagName = t7 || "", this.indent = e13.indented, this.startOfLine = r6, (s6.doNotIndent.hasOwnProperty(t7) || e13.context && e13.context.noIndent) && (this.noIndent = true);
    }
    function v2(e13) {
      e13.context && (e13.context = e13.context.prev);
    }
    function y2(e13, t7) {
      for (var r6; ; ) {
        if (!e13.context)
          return;
        if (r6 = e13.context.tagName, !s6.contextGrabbers.hasOwnProperty(m2(r6)) || !s6.contextGrabbers[m2(r6)].hasOwnProperty(m2(t7)))
          return;
        v2(e13);
      }
    }
    function b2(e13, t7, r6) {
      return "openTag" == e13 ? (r6.tagStart = t7.column(), w2) : "closeTag" == e13 ? k2 : b2;
    }
    function w2(e13, t7, r6) {
      return "word" == e13 ? (r6.tagName = t7.current(), a4 = "tag", S3) : s6.allowMissingTagName && "endTag" == e13 ? (a4 = "tag bracket", S3(e13, t7, r6)) : (a4 = "error", w2);
    }
    function k2(e13, t7, r6) {
      if ("word" == e13) {
        var n10 = t7.current();
        return r6.context && r6.context.tagName != n10 && s6.implicitlyClosed.hasOwnProperty(m2(r6.context.tagName)) && v2(r6), r6.context && r6.context.tagName == n10 || false === s6.matchClosing ? (a4 = "tag", x2) : (a4 = "tag error", C2);
      }
      return s6.allowMissingTagName && "endTag" == e13 ? (a4 = "tag bracket", x2(e13, t7, r6)) : (a4 = "error", C2);
    }
    function x2(e13, t7, r6) {
      return "endTag" != e13 ? (a4 = "error", x2) : (v2(r6), b2);
    }
    function C2(e13, t7, r6) {
      return a4 = "error", x2(e13, 0, r6);
    }
    function S3(e13, t7, r6) {
      if ("word" == e13)
        return a4 = "attribute", T2;
      if ("endTag" == e13 || "selfcloseTag" == e13) {
        var n10 = r6.tagName, i9 = r6.tagStart;
        return r6.tagName = r6.tagStart = null, "selfcloseTag" == e13 || s6.autoSelfClosers.hasOwnProperty(m2(n10)) ? y2(r6, n10) : (y2(r6, n10), r6.context = new g2(r6, n10, i9 == r6.indented)), b2;
      }
      return a4 = "error", S3;
    }
    function T2(e13, t7, r6) {
      return "equals" == e13 ? L2 : (s6.allowMissing || (a4 = "error"), S3(e13, 0, r6));
    }
    function L2(e13, t7, r6) {
      return "string" == e13 ? A2 : "word" == e13 && s6.allowUnquoted ? (a4 = "string", S3) : (a4 = "error", S3(e13, 0, r6));
    }
    function A2(e13, t7, r6) {
      return "string" == e13 ? A2 : S3(e13, 0, r6);
    }
    return d3.isInText = true, { startState: function(e13) {
      var t7 = { tokenize: d3, state: b2, indented: e13 || 0, tagName: null, tagStart: null, context: null };
      return null != e13 && (t7.baseIndent = e13), t7;
    }, token: function(e13, t7) {
      if (!t7.tagName && e13.sol() && (t7.indented = e13.indentation()), e13.eatSpace())
        return null;
      o9 = null;
      var r6 = t7.tokenize(e13, t7);
      return (r6 || o9) && "comment" != r6 && (a4 = null, t7.state = t7.state(o9 || r6, e13, t7), a4 && (r6 = "error" == a4 ? r6 + " error" : a4)), r6;
    }, indent: function(t7, r6, n10) {
      var i9 = t7.context;
      if (t7.tokenize.isInAttribute)
        return t7.tagStart == t7.indented ? t7.stringStartCol + 1 : t7.indented + l8;
      if (i9 && i9.noIndent)
        return e12.Pass;
      if (t7.tokenize != f2 && t7.tokenize != d3)
        return n10 ? n10.match(/^(\s*)/)[0].length : 0;
      if (t7.tagName)
        return false !== s6.multilineTagIndentPastTag ? t7.tagStart + t7.tagName.length + 2 : t7.tagStart + l8 * (s6.multilineTagIndentFactor || 1);
      if (s6.alignCDATA && /<!\[CDATA\[/.test(r6))
        return 0;
      var o10 = r6 && /^<(\/)?([\w_:\.-]*)/.exec(r6);
      if (o10 && o10[1])
        for (; i9; ) {
          if (i9.tagName == o10[2]) {
            i9 = i9.prev;
            break;
          }
          if (!s6.implicitlyClosed.hasOwnProperty(m2(i9.tagName)))
            break;
          i9 = i9.prev;
        }
      else if (o10)
        for (; i9; ) {
          var a5 = s6.contextGrabbers[m2(i9.tagName)];
          if (!a5 || !a5.hasOwnProperty(m2(o10[2])))
            break;
          i9 = i9.prev;
        }
      for (; i9 && i9.prev && !i9.startOfLine; )
        i9 = i9.prev;
      return i9 ? i9.indent + l8 : t7.baseIndent || 0;
    }, electricInput: /<\/[\s\w:]+>$/, blockCommentStart: "<!--", blockCommentEnd: "-->", configuration: s6.htmlMode ? "html" : "xml", helperType: s6.htmlMode ? "html" : "xml", skipAttribute: function(e13) {
      e13.state == L2 && (e13.state = S3);
    }, xmlCurrentTag: function(e13) {
      return e13.tagName ? { name: e13.tagName, close: "closeTag" == e13.type } : null;
    }, xmlCurrentContext: function(e13) {
      for (var t7 = [], r6 = e13.context; r6; r6 = r6.prev)
        t7.push(r6.tagName);
      return t7.reverse();
    } };
  }), e12.defineMIME("text/xml", "xml"), e12.defineMIME("application/xml", "xml"), e12.mimeModes.hasOwnProperty("text/html") || e12.defineMIME("text/html", { name: "xml", htmlMode: true });
}(CodeMirror), function(e12) {
  function t6(e13, t7, r6, n9) {
    this.state = e13, this.mode = t7, this.depth = r6, this.prev = n9;
  }
  function r5(n9) {
    return new t6(e12.copyState(n9.mode, n9.state), n9.mode, n9.depth, n9.prev && r5(n9.prev));
  }
  e12.defineMode("jsx", function(n9, i8) {
    var o9 = e12.getMode(n9, { name: "xml", allowMissing: true, multilineTagIndentPastTag: false, allowMissingTagName: true }), a4 = e12.getMode(n9, i8 && i8.base || "javascript");
    function l8(e13) {
      var t7 = e13.tagName;
      e13.tagName = null;
      var r6 = o9.indent(e13, "", "");
      return e13.tagName = t7, r6;
    }
    function s6(r6, i9) {
      return i9.context.mode == o9 ? function(r7, i10, c3) {
        if (2 == c3.depth)
          return r7.match(/^.*?\*\//) ? c3.depth = 1 : r7.skipToEnd(), "comment";
        if ("{" == r7.peek()) {
          o9.skipAttribute(c3.state);
          var u3 = l8(c3.state), d3 = c3.state.context;
          if (d3 && r7.match(/^[^>]*>\s*$/, false)) {
            for (; d3.prev && !d3.startOfLine; )
              d3 = d3.prev;
            d3.startOfLine ? u3 -= n9.indentUnit : c3.prev.state.lexical && (u3 = c3.prev.state.lexical.indented);
          } else
            1 == c3.depth && (u3 += n9.indentUnit);
          return i10.context = new t6(e12.startState(a4, u3), a4, 0, i10.context), null;
        }
        if (1 == c3.depth) {
          if ("<" == r7.peek())
            return o9.skipAttribute(c3.state), i10.context = new t6(e12.startState(o9, l8(c3.state)), o9, 0, i10.context), null;
          if (r7.match("//"))
            return r7.skipToEnd(), "comment";
          if (r7.match("/*"))
            return c3.depth = 2, s6(r7, i10);
        }
        var f2, h3 = o9.token(r7, c3.state), p2 = r7.current();
        return /\btag\b/.test(h3) ? />$/.test(p2) ? c3.state.context ? c3.depth = 0 : i10.context = i10.context.prev : /^</.test(p2) && (c3.depth = 1) : !h3 && (f2 = p2.indexOf("{")) > -1 && r7.backUp(p2.length - f2), h3;
      }(r6, i9, i9.context) : function(r7, n10, i10) {
        if ("<" == r7.peek() && a4.expressionAllowed(r7, i10.state))
          return n10.context = new t6(e12.startState(o9, a4.indent(i10.state, "", "")), o9, 0, n10.context), a4.skipExpression(i10.state), null;
        var l9 = a4.token(r7, i10.state);
        if (!l9 && null != i10.depth) {
          var s7 = r7.current();
          "{" == s7 ? i10.depth++ : "}" == s7 && 0 == --i10.depth && (n10.context = n10.context.prev);
        }
        return l9;
      }(r6, i9, i9.context);
    }
    return { startState: function() {
      return { context: new t6(e12.startState(a4), a4) };
    }, copyState: function(e13) {
      return { context: r5(e13.context) };
    }, token: s6, indent: function(e13, t7, r6) {
      return e13.context.mode.indent(e13.context.state, t7, r6);
    }, innerMode: function(e13) {
      return e13.context;
    } };
  }, "xml", "javascript"), e12.defineMIME("text/jsx", "jsx"), e12.defineMIME("text/typescript-jsx", { name: "jsx", base: { name: "javascript", typescript: true } });
}(CodeMirror);

// ../node_modules/playground-elements/internal/codemirror.js
var CodeMirror2 = window.CodeMirror;

// ../node_modules/playground-elements/playground-styles.js
var styles10 = i`/**
 * This file is derived from \`code-mirror/lib/codemirror.css\`, modified in the
 * following ways:
 *
 * - CSS custom properties added.
 * - Rules for unused features and addons removed.
 * - Unnecessary vendor prefixes removed.
 * - \`.cm-s-default\` class selectors removed.
 * - Empty rules removed.
 */

/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: var(--playground-code-font-family, monospace);
  font-size: var(--playground-code-font-size, 14px);
  padding: var(--playground-code-padding, 0);
  height: 350px;
  color: var(--playground-code-default-color, #000);
  background: var(--playground-code-background, #fff);
  direction: ltr;
  /* CodeMirror uses z-indexes up to 6 to e.g. place scrollbars above the code
     area. However, this can create undesirable stacking effects with the rest
     of the page. Force a new stacking context. */
  isolation: isolate;
  line-height: var(--playground-code-line-height, 1.4em);
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: var(
    --playground-code-line-padding,
    0 4px
  ); /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler,
.CodeMirror-gutter-filler {
  background: var(
    --playground-code-background,
    #fff
  ); /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: var(--playground-code-gutter-border-right, none);
  background: var(
    --playground-code-gutter-background,
    var(--playground-code-background, #fff)
  );
  box-shadow: var(--playground-code-gutter-box-shadow, none);
  white-space: nowrap;
}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: var(--playground-code-linenumber-color, #767676);
  white-space: nowrap;
  margin-right: 1em;
}
.CodeMirror-code > div > .CodeMirror-line {
  /* Some extra room between the line number gutter and the line */
  padding-left: 0.7em;
}

/* CURSOR */

.CodeMirror-cursor {
  border-left: 2px solid
    var(
      --playground-code-cursor-color,
      var(--playground-code-default-color, #000)
    );
  border-right: none;
  width: 0;
}

@keyframes blink {
  0% {
  }
  50% {
    background: transparent;
  }
  100% {
  }
}

/* DEFAULT THEME */

.cm-header,
.cm-strong {
  font-weight: bold;
}
.cm-em {
  font-style: italic;
}
.cm-link {
  text-decoration: underline;
}
.cm-strikethrough {
  text-decoration: line-through;
}

.cm-keyword {
  color: var(--playground-code-keyword-color, #708);
}
.cm-atom {
  color: var(--playground-code-atom-color, #219);
}
.cm-number {
  color: var(--playground-code-number-color, #164);
}
.cm-def {
  color: var(--playground-code-def-color, #00f);
}
.cm-variable {
  color: var(--playground-code-variable-color, #000);
}
.cm-property {
  color: var(--playground-code-property-color, #000);
}
.cm-operator {
  color: var(--playground-code-operator-color, #000);
}
.cm-variable-2 {
  color: var(--playground-code-variable-2-color, #05a);
}
.cm-variable-3 {
  color: var(--playground-code-variable-3-color, #085);
}
.cm-type {
  color: var(--playground-code-type-color, #085);
}
.cm-comment {
  color: var(--playground-code-comment-color, #a50);
}
.cm-string {
  color: var(--playground-code-string-color, #a11);
}
.cm-string-2 {
  color: var(--playground-code-string-2-color, #f50);
}
.cm-meta {
  color: var(--playground-code-meta-color, #555);
}
.cm-qualifier {
  color: var(--playground-code-qualifier-color, #555);
}
.cm-builtin {
  color: var(--playground-code-builtin-color, #30a);
}
.cm-tag {
  color: var(--playground-code-tag-color, #170);
}
.cm-attribute {
  color: var(--playground-code-attribute-color, #00c);
}
.cm-callee {
  color: var(--playground-code-callee-color, #000);
}

.CodeMirror-composing {
  border-bottom: 2px solid;
}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 50px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -50px;
  margin-right: -50px;
  padding-bottom: 50px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 50px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar,
.CodeMirror-hscrollbar,
.CodeMirror-scrollbar-filler,
.CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
  outline: none;
}
.CodeMirror-vscrollbar {
  right: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0;
  left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0;
  bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0;
  bottom: 0;
}

.CodeMirror-gutters {
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -50px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection {
  background: transparent;
}

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-rtl pre {
  direction: rtl;
}

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre {
  position: static;
}

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected {
  background: var(--playground-code-selection-background, #d7d4f0);
}
.CodeMirror-focused .CodeMirror-selected {
  background: var(--playground-code-selection-background, #d7d4f0);
}
.CodeMirror-crosshair {
  cursor: crosshair;
}
.CodeMirror-line::selection,
.CodeMirror-line > span::selection,
.CodeMirror-line > span > span::selection {
  background: var(--playground-code-selection-background, #d7d4f0);
}

/* Completions */

.CodeMirror-hints {
  position: absolute;
  z-index: 10;
  overflow: hidden;
  list-style: none;

  margin: 0;
  padding: 0;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
  border: 1px solid var(--playground-code-selection-background, silver);

  background: var(--playground-code-background, white);
  font-size: var(--playground-code-font-size, 14px);
  font-family: var(--playground-code-font-family, monospace);

  max-height: 20em;
  width: 600px;
  max-width: min(600px, 80vw);
  overflow-y: auto;
}

.CodeMirror-hint {
  margin: 0;
  padding: 0 6px;
  white-space: pre;
  color: var(--playground-code-cursor-color, black);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

@media (pointer: coarse) {
  .CodeMirror-hint {
    padding: 1em 6px;
  }
}

.CodeMirror-hint-active {
  background: var(--playground-code-background, rgba(0, 0, 0, 0.2));
  filter: brightness(1.2);
}

.CodeMirror-hint mark {
  background: inherit;
  color: var(--playground-code-qualifier-color, #555);
}

.CodeMirror-hint .hint-object-name {
  padding-right: 2em;
  white-space: nowrap;
}

.CodeMirror-hint .hint-object-details {
  flex-basis: 80%;
  font-size: calc(var(--playground-code-font-size, 14px) * 0.9);
  color: var(--playground-code-string-2-color, white);
  opacity: 0.8;
  text-align: right;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Used to force a border model for a node */
.cm-force-border {
  padding-right: 0.1px;
}

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after {
  content: '';
}

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext {
  background: none;
}
`;

// ../node_modules/playground-elements/internal/overlay.js
var PlaygroundInternalOverlay = class PlaygroundInternalOverlay2 extends s4 {
  render() {
    return x`<div id="message"><slot></slot></div>`;
  }
};
PlaygroundInternalOverlay.styles = i`
    :host {
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      z-index: 9;
      background: rgba(0, 0, 0, 0.32);
      overflow-y: auto;
    }

    #message {
      background: #fff;
      color: #000;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.3) 0 2px 10px;
    }
  `;
PlaygroundInternalOverlay = __decorate([
  e4("playground-internal-overlay")
], PlaygroundInternalOverlay);

// ../node_modules/playground-elements/playground-code-editor.js
var unreachable2 = (n9) => n9;
var PlaygroundCodeEditor = class PlaygroundCodeEditor2 extends s4 {
  constructor() {
    super(...arguments);
    this._docCache = /* @__PURE__ */ new WeakMap();
    this.lineNumbers = false;
    this.lineWrapping = false;
    this.readonly = false;
    this.noCompletions = false;
    this._completionsOpen = false;
    this._currentCompletionSelectionLabel = "";
    this._currentCompletionRequestId = 0;
    this.pragmas = "on";
    this._showKeyboardHelp = false;
    this._resizing = false;
    this._valueChangingFromOutside = false;
    this._diagnosticMarkers = [];
    this._diagnosticsMouseoverListenerActive = false;
    this._onMouseOverWithDiagnostics = (event) => {
      var _a3, _b3, _c;
      if (!((_a3 = this.diagnostics) === null || _a3 === void 0 ? void 0 : _a3.length)) {
        return;
      }
      const idxMatch = (_b3 = event.target.className) === null || _b3 === void 0 ? void 0 : _b3.match(/diagnostic-(\d+)/);
      if (idxMatch === null) {
        this._tooltipDiagnostic = void 0;
        return;
      }
      const idx = Number(idxMatch[1]);
      const diagnostic = this.diagnostics[idx];
      if (diagnostic === ((_c = this._tooltipDiagnostic) === null || _c === void 0 ? void 0 : _c.diagnostic)) {
        return;
      }
      let position = "";
      const hostRect = this.getBoundingClientRect();
      const spanRect = event.target.getBoundingClientRect();
      const hostCenterY = hostRect.y + hostRect.height / 2;
      if (spanRect.y < hostCenterY) {
        position += `top:${spanRect.y + spanRect.height - hostRect.y}px;`;
      } else {
        position += `bottom:${hostRect.bottom - spanRect.y}px;`;
      }
      const hostCenterX = hostRect.x + hostRect.width / 2;
      if (spanRect.left < hostCenterX) {
        position += `left:${Math.max(0, spanRect.x - hostRect.x)}px`;
      } else {
        position += `right:${Math.max(0, hostRect.right - spanRect.right)}px`;
      }
      this._tooltipDiagnostic = { diagnostic, position };
    };
  }
  get cursorPosition() {
    var _a3;
    const cursor = (_a3 = this._codemirror) === null || _a3 === void 0 ? void 0 : _a3.getCursor("start");
    if (!cursor)
      return { ch: 0, line: 0 };
    return {
      ch: cursor.ch,
      line: cursor.line
    };
  }
  get cursorIndex() {
    const cm = this._codemirror;
    if (!cm)
      return 0;
    const cursorPosition = cm.getCursor("start");
    return cm.indexFromPos(cursorPosition);
  }
  get tokenUnderCursor() {
    const cm = this._codemirror;
    if (!cm)
      return { start: 0, end: 0, string: "" };
    const cursorPosition = cm.getCursor("start");
    const token = cm.getTokenAt(cursorPosition);
    return {
      start: token.start,
      end: token.end,
      string: token.string
    };
  }
  get value() {
    return this._value;
  }
  set value(v2) {
    const oldValue = this._value;
    this._value = v2;
    this.requestUpdate("value", oldValue);
  }
  update(changedProperties) {
    var _a3, _b3, _c, _d, _e, _f;
    const cm = this._codemirror;
    if (cm === void 0) {
      this._createView();
    } else {
      const changedTyped = changedProperties;
      for (const prop of changedTyped.keys()) {
        switch (prop) {
          case "documentKey": {
            const docKey = (_a3 = this.documentKey) !== null && _a3 !== void 0 ? _a3 : {};
            let docInstance = this._docCache.get(docKey);
            let createdNewDoc = false;
            if (!docInstance) {
              docInstance = new CodeMirror2.Doc((_b3 = this.value) !== null && _b3 !== void 0 ? _b3 : "", this._getLanguageMode());
              this._docCache.set(docKey, docInstance);
              createdNewDoc = true;
            } else if (docInstance.getValue() !== this.value) {
              docInstance.setValue((_c = this.value) !== null && _c !== void 0 ? _c : "");
            }
            this._valueChangingFromOutside = true;
            cm.swapDoc(docInstance);
            if (createdNewDoc) {
              this._applyHideAndFoldRegions();
            }
            this._valueChangingFromOutside = false;
            break;
          }
          case "value":
            if (changedTyped.has("documentKey")) {
              break;
            }
            this._valueChangingFromOutside = true;
            cm.setValue((_d = this.value) !== null && _d !== void 0 ? _d : "");
            this._valueChangingFromOutside = false;
            break;
          case "lineNumbers":
            cm.setOption("lineNumbers", this.lineNumbers);
            break;
          case "lineWrapping":
            if (this.lineWrapping) {
              cm.on("renderLine", this._onRenderLine);
            } else {
              cm.off("renderLine", this._onRenderLine);
            }
            cm.setOption("lineWrapping", this.lineWrapping);
            break;
          case "type":
            cm.setOption("mode", this._getLanguageMode());
            break;
          case "readonly":
            cm.setOption("readOnly", this.readonly);
            break;
          case "pragmas":
            this._applyHideAndFoldRegions();
            break;
          case "diagnostics":
            this._showDiagnostics();
            break;
          case "cursorIndex":
            cm.setCursor((_e = this.cursorIndex) !== null && _e !== void 0 ? _e : 0);
            break;
          case "cursorPosition":
            cm.setCursor((_f = this.cursorPosition) !== null && _f !== void 0 ? _f : { ch: 0, line: 0 });
            break;
          case "_completions":
            this._showCompletions();
            break;
          case "tokenUnderCursor":
          case "noCompletions":
          case "_completionsOpen":
            break;
          default:
            unreachable2(prop);
        }
      }
    }
    super.update(changedProperties);
  }
  render() {
    var _a3, _b3;
    if (this.readonly) {
      return this._cmDom;
    }
    return x`
      <div
        id="focusContainer"
        tabindex="0"
        @mousedown=${this._onMousedown}
        @focus=${this._onFocus}
        @blur=${this._onBlur}
        @keydown=${this._onKeyDown}
      >
        ${this._showKeyboardHelp ? x`<playground-internal-overlay>
              <p id="keyboardHelp" part="dialog">
                Press <strong>Enter</strong> to start editing<br />
                Press <strong>Escape</strong> to exit editor
              </p>
            </playground-internal-overlay>` : A}
        ${this._cmDom}
        <div
          id="tooltip"
          ?hidden=${!this._tooltipDiagnostic}
          style=${l5((_a3 = this._tooltipDiagnostic) === null || _a3 === void 0 ? void 0 : _a3.position)}
        >
          <div part="diagnostic-tooltip">
            ${(_b3 = this._tooltipDiagnostic) === null || _b3 === void 0 ? void 0 : _b3.diagnostic.message}
          </div>
        </div>
      </div>
    `;
  }
  connectedCallback() {
    if (typeof ResizeObserver === "function") {
      this._resizeObserver = new ResizeObserver(() => {
        var _a3;
        if (this._resizing) {
          return;
        }
        this._resizing = true;
        (_a3 = this._codemirror) === null || _a3 === void 0 ? void 0 : _a3.refresh();
        this._resizing = false;
      });
      this._resizeObserver.observe(this);
    }
    super.connectedCallback();
  }
  disconnectedCallback() {
    var _a3;
    (_a3 = this._resizeObserver) === null || _a3 === void 0 ? void 0 : _a3.disconnect();
    this._resizeObserver = void 0;
    super.disconnectedCallback();
  }
  _createView() {
    var _a3;
    const cm = CodeMirror2((dom) => {
      this._cmDom = dom;
      this._resizing = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var _a4;
          (_a4 = this._codemirror) === null || _a4 === void 0 ? void 0 : _a4.refresh();
          this._resizing = false;
        });
      });
    }, {
      value: (_a3 = this.value) !== null && _a3 !== void 0 ? _a3 : "",
      lineNumbers: this.lineNumbers,
      lineWrapping: this.lineWrapping,
      mode: this._getLanguageMode(),
      readOnly: this.readonly,
      inputStyle: "contenteditable",
      // Don't allow naturally tabbing into the editor, because it's a
      // tab-trap. Instead, the container is focusable, and Enter/Escape are
      // used to explicitly enter the editable area.
      tabindex: -1,
      // Tab key inserts spaces instead of tab character
      extraKeys: {
        Tab: () => {
          var _a4;
          cm.replaceSelection(Array(((_a4 = cm.getOption("indentUnit")) !== null && _a4 !== void 0 ? _a4 : 2) + 1).join(" "));
        },
        // Ctrl + Space requests code completions.
        ["Ctrl-Space"]: () => {
          const tokenUnderCursor = this.tokenUnderCursor.string.trim();
          this._requestCompletions({
            isRefinement: false,
            tokenUnderCursor
          });
        },
        ["Ctrl-/"]: () => cm.toggleComment(),
        ["Cmd-/"]: () => cm.toggleComment()
      }
    });
    cm.on("change", (_editorInstance, changeObject) => {
      this._value = cm.getValue();
      if (this._valueChangingFromOutside) {
        this._applyHideAndFoldRegions();
        this._showDiagnostics();
      } else {
        this.dispatchEvent(new Event("change"));
        this._requestCompletionsIfNeeded(changeObject);
      }
    });
    if (this.lineWrapping) {
      cm.on("renderLine", this._onRenderLine);
    }
    this._codemirror = cm;
  }
  _onRenderLine(editorInstance, line, elt) {
    const basePadding = 4;
    const gutter = editorInstance.getOption("lineNumbers") ? "0.7em" : `${basePadding}px`;
    const tabSize = editorInstance.getOption("tabSize") || basePadding;
    const off = CodeMirror2.countColumn(line.text, null, tabSize);
    if (off > 0) {
      elt.style.textIndent = `-${off}ch`;
      elt.style.paddingLeft = `calc(${gutter} + ${off}ch)`;
    }
  }
  _requestCompletionsIfNeeded(changeObject) {
    if (this.noCompletions || !this._currentFiletypeSupportsCompletion() || !this._codemirror)
      return;
    const previousToken = this._codemirror.getTokenAt(changeObject.from);
    const tokenUnderCursor = this.tokenUnderCursor.string.trim();
    const tokenUnderCursorAsString = tokenUnderCursor.trim();
    const isInputEvent = changeObject.origin === "+input";
    const isRefinement = (tokenUnderCursor.length > 1 || previousToken.string === ".") && isInputEvent;
    const changeWasCodeCompletion = changeObject.origin === "complete";
    if (tokenUnderCursorAsString.length <= 0)
      return;
    if (changeWasCodeCompletion) {
      this._completions = [];
      return;
    }
    this._requestCompletions({
      isRefinement,
      tokenUnderCursor
    });
  }
  _requestCompletions({ isRefinement, tokenUnderCursor }) {
    if (this.noCompletions || !this._currentFiletypeSupportsCompletion() || !this._codemirror)
      return;
    const id = ++this._currentCompletionRequestId;
    const cursorIndexOnRequest = this.cursorIndex;
    this.dispatchEvent(new CustomEvent("request-completions", {
      detail: {
        isRefinement,
        fileContent: this.value,
        tokenUnderCursor,
        cursorIndex: this.cursorIndex,
        provideCompletions: (completions) => this._onCompletionsProvided(id, completions, cursorIndexOnRequest)
      }
    }));
  }
  _onCompletionsProvided(id, completions, cursorIndex) {
    if (id !== this._currentCompletionRequestId || cursorIndex !== this.cursorIndex) {
      return;
    }
    this._completions = completions;
  }
  _currentFiletypeSupportsCompletion() {
    return this.type === "ts";
  }
  focus() {
    var _a3;
    (_a3 = this._codemirrorEditable) === null || _a3 === void 0 ? void 0 : _a3.focus();
  }
  _completionsAsHints() {
    var _a3, _b3;
    const cm = this._codemirror;
    const cursorPosition = cm.getCursor("start");
    const token = cm.getTokenAt(cursorPosition);
    const lineNumber = cursorPosition.line;
    const hintList = (_b3 = (_a3 = this._completions) === null || _a3 === void 0 ? void 0 : _a3.map((comp, i8) => ({
      text: comp.text,
      displayText: comp.displayText,
      render: (element, _data, hint) => {
        const codeEditorHint = hint;
        this._renderHint(
          element,
          _data,
          codeEditorHint,
          i8 === 0 ? comp.details : void 0
          // Only render the detail on the first item
        );
      },
      get details() {
        return comp.details;
      }
    }))) !== null && _b3 !== void 0 ? _b3 : [];
    const hints = {
      from: { line: lineNumber, ch: token.start },
      to: { line: lineNumber, ch: token.end },
      list: hintList
    };
    CodeMirror2.on(hints, "select", async (hint, element) => {
      var _a4;
      if (!this._isCodeEditorHint(hint))
        return;
      if (this._currentCompletionSelectionLabel === hint.text)
        return;
      (_a4 = this._onCompletionSelectedChange) === null || _a4 === void 0 ? void 0 : _a4.call(this);
      this._renderHint(element, hints, hint, hint.details);
    });
    CodeMirror2.on(hints, "shown", () => {
      window.requestAnimationFrame(() => {
        this._completionsOpen = true;
      });
    });
    CodeMirror2.on(hints, "close", () => {
      window.requestAnimationFrame(() => {
        this._completionsOpen = false;
      });
    });
    return hints;
  }
  _isCodeEditorHint(hint) {
    return typeof hint !== "string" && Object.prototype.hasOwnProperty.call(hint, "details");
  }
  _renderHint(element, _data, hint, detail) {
    var _a3;
    if (!element)
      return;
    const itemIndex = _data.list.indexOf(hint);
    const completionData = (_a3 = this._completions) === null || _a3 === void 0 ? void 0 : _a3[itemIndex];
    const objectName = this._buildHintObjectName(hint.displayText, completionData);
    this._renderCompletionItem(objectName, element);
    if (detail !== void 0) {
      detail.then((detailResult) => {
        this._renderCompletionItemWithDetails(objectName, detailResult, element);
        this._onCompletionSelectedChange = () => this._renderHint(element, _data, hint);
        this._currentCompletionSelectionLabel = hint.text;
      });
    }
  }
  _renderCompletionItem(objectName, target) {
    D(x`<span class="hint-object-name">${objectName}</span>`, target);
  }
  _renderCompletionItemWithDetails(objectName, details, target) {
    D(x`<span class="hint-object-name">${objectName}</span>
        <span class="hint-object-details">${details.text}</span> `, target);
  }
  /**
   * Builds the name of the completable item for use in the completion UI.
   * Using marks, we can highlight the matching characters in the typed input
   * matching with the completion suggestion.
   */
  _buildHintObjectName(objectName, completionData) {
    var _a3;
    const markedObjectName = objectName !== null && objectName !== void 0 ? objectName : "";
    const matches2 = (_a3 = completionData === null || completionData === void 0 ? void 0 : completionData.matches) !== null && _a3 !== void 0 ? _a3 : [];
    if (matches2.length <= 0) {
      return markedObjectName;
    }
    const firstMatch = matches2[0];
    const firstMatchingIndex = firstMatch.indices[0];
    const start = firstMatchingIndex[0];
    const end = firstMatchingIndex[1];
    const preMarkContent = markedObjectName === null || markedObjectName === void 0 ? void 0 : markedObjectName.substring(0, start);
    const markedContent = markedObjectName === null || markedObjectName === void 0 ? void 0 : markedObjectName.substring(start, end + 1);
    const postMarkedContent = markedObjectName === null || markedObjectName === void 0 ? void 0 : markedObjectName.substring(end + 1);
    return x`
      ${preMarkContent}<mark>${markedContent}</mark>${postMarkedContent}
    `;
  }
  _showCompletions() {
    const cm = this._codemirror;
    if (!cm || !this._completions || this._completions.length <= 0)
      return;
    const options = {
      hint: this._completionsAsHints.bind(this),
      completeSingle: false,
      closeOnPick: true,
      closeOnUnfocus: true,
      container: this._focusContainer,
      alignWithWord: true
    };
    cm.showHint(options);
  }
  _onMousedown() {
    var _a3;
    (_a3 = this._codemirrorEditable) === null || _a3 === void 0 ? void 0 : _a3.focus();
  }
  _onFocus() {
    this._showKeyboardHelp = true;
  }
  _onBlur() {
    this._showKeyboardHelp = false;
  }
  _onKeyDown(event) {
    var _a3, _b3;
    if (event.key === "Enter" && event.target === this._focusContainer) {
      (_a3 = this._codemirrorEditable) === null || _a3 === void 0 ? void 0 : _a3.focus();
      event.preventDefault();
    } else if (event.key === "Escape") {
      if (!this._completionsOpen) {
        (_b3 = this._focusContainer) === null || _b3 === void 0 ? void 0 : _b3.focus();
      }
    }
  }
  /**
   * Create hidden and folded regions for playground-hide and playground-fold
   * comments.
   */
  async _applyHideAndFoldRegions() {
    const cm = this._codemirror;
    if (!cm) {
      return;
    }
    for (const mark of cm.getAllMarks()) {
      mark.clear();
    }
    if (this.pragmas === "off-visible") {
      return;
    }
    const pattern = this._maskPatternForLang();
    if (pattern === void 0) {
      return;
    }
    const doc = cm.getDoc();
    const fold = (fromIdx, toIdx) => {
      cm.foldCode(
        /* ignored by our rangeFinder */
        0,
        {
          widget: "\u2026",
          rangeFinder: () => ({
            from: doc.posFromIndex(fromIdx),
            to: doc.posFromIndex(toIdx)
          })
        }
      );
    };
    const hide = (fromIdx, toIdx, readOnly) => {
      doc.markText(doc.posFromIndex(fromIdx), doc.posFromIndex(toIdx), {
        collapsed: true,
        readOnly
      });
    };
    const value = cm.getValue();
    for (const match of value.matchAll(pattern)) {
      const [, opener, kind, content, closer] = match;
      const openerStart = match.index;
      if (openerStart === void 0) {
        continue;
      }
      const openerEnd = openerStart + opener.length;
      hide(openerStart, openerEnd, false);
      const contentStart = openerEnd;
      let contentEnd;
      if (content && closer) {
        contentEnd = contentStart + content.length;
        const closerStart = contentEnd;
        const closerEnd = contentEnd + closer.length;
        hide(closerStart, closerEnd, false);
      } else {
        contentEnd = value.length;
      }
      if (this.pragmas === "on") {
        if (kind === "fold") {
          fold(contentStart, contentEnd);
        } else if (kind === "hide") {
          hide(contentStart, contentEnd, true);
        }
      }
    }
  }
  _maskPatternForLang() {
    switch (this.type) {
      case "js":
      case "ts":
      case "css":
      case "jsx":
      case "tsx":
        return /( *\/\* *playground-(?<kind>hide|fold) *\*\/\n?)(?:(.*?)( *\/\* *playground-\k<kind>-end *\*\/\n?))?/gs;
      case "html":
        return /( *<!-- *playground-(?<kind>hide|fold) *-->\n?)(?:(.*?)( *<!-- *playground-\k<kind>-end *-->\n?))?/gs;
      default:
        return void 0;
    }
  }
  _getLanguageMode() {
    switch (this.type) {
      case "ts":
        return "google-typescript";
      case "js":
      case "json":
        return "google-javascript";
      case "html":
        return "google-html";
      case "css":
        return "css";
      case "jsx":
      case "tsx":
        return "jsx";
    }
    return void 0;
  }
  _showDiagnostics() {
    const cm = this._codemirror;
    if (cm === void 0) {
      return;
    }
    cm.operation(() => {
      var _a3, _b3, _c;
      this._tooltipDiagnostic = void 0;
      while (this._diagnosticMarkers.length > 0) {
        this._diagnosticMarkers.pop().clear();
      }
      if (!((_a3 = this.diagnostics) === null || _a3 === void 0 ? void 0 : _a3.length)) {
        if (this._diagnosticsMouseoverListenerActive) {
          (_b3 = this._cmDom) === null || _b3 === void 0 ? void 0 : _b3.removeEventListener("mouseover", this._onMouseOverWithDiagnostics);
          this._diagnosticsMouseoverListenerActive = false;
        }
        return;
      }
      if (!this._diagnosticsMouseoverListenerActive) {
        (_c = this._cmDom) === null || _c === void 0 ? void 0 : _c.addEventListener("mouseover", this._onMouseOverWithDiagnostics);
        this._diagnosticsMouseoverListenerActive = true;
      }
      for (let i8 = 0; i8 < this.diagnostics.length; i8++) {
        const diagnostic = this.diagnostics[i8];
        this._diagnosticMarkers.push(cm.markText({
          line: diagnostic.range.start.line,
          ch: diagnostic.range.start.character
        }, {
          line: diagnostic.range.end.line,
          ch: diagnostic.range.end.character
        }, {
          className: `diagnostic diagnostic-${i8}`
        }));
      }
    });
  }
};
PlaygroundCodeEditor.styles = [
  i`
      :host {
        display: block;
      }

      #focusContainer {
        height: 100%;
        position: relative;
      }
      #focusContainer:focus {
        outline: none;
      }

      .CodeMirror {
        height: 100% !important;
        border-radius: inherit;
      }

      .CodeMirror-foldmarker {
        font-family: sans-serif;
      }
      .CodeMirror-foldmarker:hover {
        cursor: pointer;
        /* Pretty much any color from the theme is good enough. */
        color: var(--playground-code-keyword-color, #770088);
      }

      #keyboardHelp {
        font-size: 18px;
        font-family: sans-serif;
        padding: 10px 20px;
      }

      .diagnostic {
        position: relative;
      }

      .diagnostic::before {
        /* It would be nice to use "text-decoration: red wavy underline" here,
           but unfortunately it renders nothing at all for single characters.
           See https://bugs.chromium.org/p/chromium/issues/detail?id=668042. */
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==');
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }

      #tooltip {
        position: absolute;
        padding: 7px;
        z-index: 4;
        font-family: var(--playground-code-font-family, monospace);
      }

      #tooltip > div {
        background: var(--playground-code-background, #fff);
        color: var(--playground-code-default-color, #000);
        /* Kind of hacky... line number color tends to work out as a good
           default border, because it's usually visible on top of the
           background, but slightly muted. */
        border: 1px solid var(--playground-code-linenumber-color, #ccc);
        padding: 5px;
      }
    `,
  styles10
];
__decorate([
  n5()
], PlaygroundCodeEditor.prototype, "value", null);
__decorate([
  n5({ attribute: false })
  // eslint-disable-next-line @typescript-eslint/ban-types
], PlaygroundCodeEditor.prototype, "documentKey", void 0);
__decorate([
  n5()
], PlaygroundCodeEditor.prototype, "type", void 0);
__decorate([
  n5({ type: Boolean, attribute: "line-numbers", reflect: true })
], PlaygroundCodeEditor.prototype, "lineNumbers", void 0);
__decorate([
  n5({ type: Boolean, attribute: "line-wrapping", reflect: true })
], PlaygroundCodeEditor.prototype, "lineWrapping", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], PlaygroundCodeEditor.prototype, "readonly", void 0);
__decorate([
  n5({ type: Boolean, attribute: "no-completions" })
], PlaygroundCodeEditor.prototype, "noCompletions", void 0);
__decorate([
  n5({ attribute: false })
], PlaygroundCodeEditor.prototype, "diagnostics", void 0);
__decorate([
  t3()
], PlaygroundCodeEditor.prototype, "_completions", void 0);
__decorate([
  t3()
], PlaygroundCodeEditor.prototype, "_completionsOpen", void 0);
__decorate([
  n5()
], PlaygroundCodeEditor.prototype, "pragmas", void 0);
__decorate([
  t3()
], PlaygroundCodeEditor.prototype, "_tooltipDiagnostic", void 0);
__decorate([
  t3()
], PlaygroundCodeEditor.prototype, "_showKeyboardHelp", void 0);
__decorate([
  i4("#focusContainer")
], PlaygroundCodeEditor.prototype, "_focusContainer", void 0);
__decorate([
  i4(".CodeMirror-code")
], PlaygroundCodeEditor.prototype, "_codemirrorEditable", void 0);
PlaygroundCodeEditor = __decorate([
  e4("playground-code-editor")
], PlaygroundCodeEditor);

// ../node_modules/playground-elements/playground-file-editor.js
var PlaygroundFileEditor = class PlaygroundFileEditor2 extends PlaygroundConnectedElement {
  constructor() {
    super(...arguments);
    this.lineNumbers = false;
    this.lineWrapping = false;
    this.pragmas = "on";
    this.readonly = false;
    this.noCompletions = false;
    this._onProjectFilesChanged = () => {
      var _a3, _b3;
      (_a3 = this.filename) !== null && _a3 !== void 0 ? _a3 : this.filename = (_b3 = this._files[0]) === null || _b3 === void 0 ? void 0 : _b3.name;
      this.requestUpdate();
    };
    this._onCompileDone = () => {
      this.requestUpdate();
    };
    this._onDiagnosticsChanged = () => {
      this.requestUpdate();
    };
  }
  get _files() {
    var _a3, _b3;
    return (_b3 = (_a3 = this._project) === null || _a3 === void 0 ? void 0 : _a3.files) !== null && _b3 !== void 0 ? _b3 : [];
  }
  get _currentFile() {
    return this.filename ? this._files.find((file) => file.name === this.filename) : void 0;
  }
  async update(changedProperties) {
    if (changedProperties.has("_project")) {
      const oldProject = changedProperties.get("_project");
      if (oldProject) {
        oldProject.removeEventListener("filesChanged", this._onProjectFilesChanged);
        oldProject.removeEventListener("compileDone", this._onCompileDone);
        oldProject.removeEventListener("diagnosticsChanged", this._onDiagnosticsChanged);
      }
      if (this._project) {
        this._project.addEventListener("filesChanged", this._onProjectFilesChanged);
        this._project.addEventListener("compileDone", this._onCompileDone);
        this._project.addEventListener("diagnosticsChanged", this._onDiagnosticsChanged);
      }
      this._onProjectFilesChanged();
    }
    super.update(changedProperties);
  }
  render() {
    var _a3, _b3, _c, _d, _e, _f;
    return x`
      ${this._files ? x`
            <playground-code-editor
              exportparts="diagnostic-tooltip, dialog"
              .value=${// We need live() because the lit's dirty-checking value for
    // content is not updated by user edits.
    l7((_b3 = (_a3 = this._currentFile) === null || _a3 === void 0 ? void 0 : _a3.content) !== null && _b3 !== void 0 ? _b3 : "")}
              .documentKey=${this._currentFile}
              .type=${this._currentFile ? mimeTypeToTypeEnum(this._currentFile.contentType) : void 0}
              .lineNumbers=${this.lineNumbers}
              .lineWrapping=${this.lineWrapping}
              .readonly=${this.readonly || !this._currentFile}
              .pragmas=${this.pragmas}
              .diagnostics=${(_d = (_c = this._project) === null || _c === void 0 ? void 0 : _c.diagnostics) === null || _d === void 0 ? void 0 : _d.get((_f = (_e = this._currentFile) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : "")}
              .noCompletions=${this.noCompletions}
              @change=${this._onEdit}
              @request-completions=${this._onRequestCompletions}
            >
            </playground-code-editor>
          ` : x`<slot></slot>`}
    `;
  }
  _onEdit() {
    if (this._project === void 0 || this._currentFile === void 0 || this._editor.value === void 0) {
      return;
    }
    this._project.editFile(this._currentFile, this._editor.value);
  }
  async _onRequestCompletions(e12) {
    var _a3, _b3;
    const codeEditorChangeData = e12.detail;
    codeEditorChangeData.fileName = (_a3 = this.filename) !== null && _a3 !== void 0 ? _a3 : "";
    const completions = await ((_b3 = this._project) === null || _b3 === void 0 ? void 0 : _b3.getCompletions(codeEditorChangeData));
    if (completions) {
      codeEditorChangeData.provideCompletions(completions);
    }
  }
};
PlaygroundFileEditor.styles = i`
    :host {
      display: block;
      /* Prevents scrollbars from changing container size and shifting layout
      slightly. */
      box-sizing: border-box;
      height: 350px;
    }

    slot {
      height: 100%;
      display: block;
      background: var(--playground-code-background, unset);
    }

    playground-code-editor {
      height: 100%;
      border-radius: inherit;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `;
__decorate([
  i4("playground-code-editor")
], PlaygroundFileEditor.prototype, "_editor", void 0);
__decorate([
  n5()
], PlaygroundFileEditor.prototype, "filename", void 0);
__decorate([
  n5({ type: Boolean, attribute: "line-numbers" })
], PlaygroundFileEditor.prototype, "lineNumbers", void 0);
__decorate([
  n5({ type: Boolean, attribute: "line-wrapping" })
], PlaygroundFileEditor.prototype, "lineWrapping", void 0);
__decorate([
  n5()
], PlaygroundFileEditor.prototype, "pragmas", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], PlaygroundFileEditor.prototype, "readonly", void 0);
__decorate([
  n5({ type: Boolean, attribute: "no-completions" })
], PlaygroundFileEditor.prototype, "noCompletions", void 0);
PlaygroundFileEditor = __decorate([
  e4("playground-file-editor")
], PlaygroundFileEditor);
var mimeTypeToTypeEnum = (mimeType) => {
  if (mimeType === void 0) {
    return;
  }
  const encodingSepIndex = mimeType.indexOf(";");
  if (encodingSepIndex !== -1) {
    mimeType = mimeType.substring(0, encodingSepIndex);
  }
  switch (mimeType) {
    case "video/mp2t":
      return "ts";
    case "text/javascript":
    case "application/javascript":
      return "js";
    case "text/jsx":
      return "jsx";
    case "text/typescript-jsx":
      return "tsx";
    case "application/json":
      return "json";
    case "text/html":
      return "html";
    case "text/css":
      return "css";
  }
  return void 0;
};

// ../node_modules/@material/mwc-linear-progress/mwc-linear-progress-base.js
var LinearProgressBase = class extends s4 {
  constructor() {
    super(...arguments);
    this.indeterminate = false;
    this.progress = 0;
    this.buffer = 1;
    this.reverse = false;
    this.closed = false;
    this.stylePrimaryHalf = "";
    this.stylePrimaryFull = "";
    this.styleSecondaryQuarter = "";
    this.styleSecondaryHalf = "";
    this.styleSecondaryFull = "";
    this.animationReady = true;
    this.closedAnimationOff = false;
    this.resizeObserver = null;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.rootEl) {
      this.attachResizeObserver();
    }
  }
  /**
   * @soyTemplate
   */
  render() {
    const classes = {
      "mdc-linear-progress--closed": this.closed,
      "mdc-linear-progress--closed-animation-off": this.closedAnimationOff,
      "mdc-linear-progress--indeterminate": this.indeterminate,
      // needed for controller-less render
      "mdc-linear-progress--animation-ready": this.animationReady
    };
    const rootStyles = {
      "--mdc-linear-progress-primary-half": this.stylePrimaryHalf,
      "--mdc-linear-progress-primary-half-neg": this.stylePrimaryHalf !== "" ? `-${this.stylePrimaryHalf}` : "",
      "--mdc-linear-progress-primary-full": this.stylePrimaryFull,
      "--mdc-linear-progress-primary-full-neg": this.stylePrimaryFull !== "" ? `-${this.stylePrimaryFull}` : "",
      "--mdc-linear-progress-secondary-quarter": this.styleSecondaryQuarter,
      "--mdc-linear-progress-secondary-quarter-neg": this.styleSecondaryQuarter !== "" ? `-${this.styleSecondaryQuarter}` : "",
      "--mdc-linear-progress-secondary-half": this.styleSecondaryHalf,
      "--mdc-linear-progress-secondary-half-neg": this.styleSecondaryHalf !== "" ? `-${this.styleSecondaryHalf}` : "",
      "--mdc-linear-progress-secondary-full": this.styleSecondaryFull,
      "--mdc-linear-progress-secondary-full-neg": this.styleSecondaryFull !== "" ? `-${this.styleSecondaryFull}` : ""
    };
    const bufferBarStyles = {
      "flex-basis": this.indeterminate ? "100%" : `${this.buffer * 100}%`
    };
    const primaryBarStyles = {
      transform: this.indeterminate ? "scaleX(1)" : `scaleX(${this.progress})`
    };
    return x`
      <div
          role="progressbar"
          class="mdc-linear-progress ${o7(classes)}"
          style="${o8(rootStyles)}"
          dir="${l5(this.reverse ? "rtl" : void 0)}"
          aria-label="${l5(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${l5(this.indeterminate ? void 0 : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${o8(bufferBarStyles)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${o8(primaryBarStyles)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
  }
  update(changedProperties) {
    if (changedProperties.has("closed") && (!this.closed || changedProperties.get("closed") === void 0)) {
      this.syncClosedState();
    }
    super.update(changedProperties);
  }
  async firstUpdated(changed) {
    super.firstUpdated(changed);
    this.attachResizeObserver();
  }
  syncClosedState() {
    this.closedAnimationOff = this.closed;
  }
  updated(changed) {
    if (!changed.has("indeterminate") && changed.has("reverse") && this.indeterminate) {
      this.restartAnimation();
    }
    if (changed.has("indeterminate") && changed.get("indeterminate") !== void 0 && this.indeterminate && window.ResizeObserver) {
      this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth);
    }
    super.updated(changed);
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    super.disconnectedCallback();
  }
  attachResizeObserver() {
    if (window.ResizeObserver) {
      this.resizeObserver = new window.ResizeObserver((entries) => {
        if (!this.indeterminate) {
          return;
        }
        for (const entry of entries) {
          if (entry.contentRect) {
            const width = entry.contentRect.width;
            this.calculateAndSetAnimationDimensions(width);
          }
        }
      });
      this.resizeObserver.observe(this.rootEl);
      return;
    }
    this.resizeObserver = null;
  }
  calculateAndSetAnimationDimensions(width) {
    const primaryHalf = width * 0.8367142;
    const primaryFull = width * 2.00611057;
    const secondaryQuarter = width * 0.37651913;
    const secondaryHalf = width * 0.84386165;
    const secondaryFull = width * 1.60277782;
    this.stylePrimaryHalf = `${primaryHalf}px`;
    this.stylePrimaryFull = `${primaryFull}px`;
    this.styleSecondaryQuarter = `${secondaryQuarter}px`;
    this.styleSecondaryHalf = `${secondaryHalf}px`;
    this.styleSecondaryFull = `${secondaryFull}px`;
    this.restartAnimation();
  }
  async restartAnimation() {
    this.animationReady = false;
    await this.updateComplete;
    await new Promise(requestAnimationFrame);
    this.animationReady = true;
    await this.updateComplete;
  }
  open() {
    this.closed = false;
  }
  close() {
    this.closed = true;
  }
};
__decorate([
  i4(".mdc-linear-progress")
], LinearProgressBase.prototype, "rootEl", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "indeterminate", void 0);
__decorate([
  n5({ type: Number })
], LinearProgressBase.prototype, "progress", void 0);
__decorate([
  n5({ type: Number })
], LinearProgressBase.prototype, "buffer", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "reverse", void 0);
__decorate([
  n5({ type: Boolean, reflect: true })
], LinearProgressBase.prototype, "closed", void 0);
__decorate([
  ariaProperty,
  n5({ attribute: "aria-label" })
], LinearProgressBase.prototype, "ariaLabel", void 0);
__decorate([
  t3()
], LinearProgressBase.prototype, "stylePrimaryHalf", void 0);
__decorate([
  t3()
], LinearProgressBase.prototype, "stylePrimaryFull", void 0);
__decorate([
  t3()
], LinearProgressBase.prototype, "styleSecondaryQuarter", void 0);
__decorate([
  t3()
], LinearProgressBase.prototype, "styleSecondaryHalf", void 0);
__decorate([
  t3()
], LinearProgressBase.prototype, "styleSecondaryFull", void 0);
__decorate([
  t3()
], LinearProgressBase.prototype, "animationReady", void 0);
__decorate([
  t3()
], LinearProgressBase.prototype, "closedAnimationOff", void 0);

// ../node_modules/@material/mwc-linear-progress/mwc-linear-progress.css.js
var styles11 = i`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:4px}.mdc-linear-progress__bar-inner{border-top-width:4px}.mdc-linear-progress__buffer-dots{background-size:10px 4px}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;

// ../node_modules/@material/mwc-linear-progress/mwc-linear-progress.js
var LinearProgress = class LinearProgress2 extends LinearProgressBase {
};
LinearProgress.styles = [styles11];
LinearProgress = __decorate([
  e4("mwc-linear-progress")
], LinearProgress);

// ../node_modules/playground-elements/playground-preview.js
var PlaygroundPreview = class PlaygroundPreview2 extends PlaygroundConnectedElement {
  constructor() {
    super();
    this.htmlFile = "index.html";
    this.location = "Result";
    this._loading = true;
    this._showLoadingBar = false;
    this._loadedAtLeastOnce = false;
    this.reload = () => {
      const iframe = this.iframe;
      if (!iframe) {
        return;
      }
      const { parentNode, nextSibling } = iframe;
      if (parentNode) {
        iframe.remove();
      }
      iframe.src = "";
      iframe.src = this._indexUrl;
      if (parentNode) {
        parentNode.insertBefore(iframe, nextSibling);
      }
      this._loading = true;
      this._showLoadingBar = true;
    };
    if (navigator.serviceWorker === void 0) {
      this._error = x`<p>
          <b>Sorry!</b> Preview unavailable because this browser doesn't
          <a
            href="https://caniuse.com/serviceworkers"
            target="_blank"
            rel="noopener"
            >support</a
          >
          service workers.
        </p>
        <p>
          <i
            >Note: Firefox
            <a
              href="https://bugzilla.mozilla.org/show_bug.cgi?id=1320796"
              target="_blank"
              rel="noopener"
              >doesn't</a
            >
            support service workers in private browsing mode.</i
          >
        </p> `;
    }
  }
  update(changedProperties) {
    if (changedProperties.has("_project")) {
      const oldProject = changedProperties.get("_project");
      if (oldProject) {
        oldProject.removeEventListener("urlChanged", this.reload);
        oldProject.removeEventListener("compileStart", this.reload);
      }
      if (this._project) {
        this._project.addEventListener("urlChanged", this.reload);
        this._project.addEventListener("compileStart", this.reload);
      }
    }
    super.update(changedProperties);
  }
  get _indexUrl() {
    var _a3;
    const base = (_a3 = this._project) === null || _a3 === void 0 ? void 0 : _a3.baseUrl;
    if (!base || !this.htmlFile) {
      return "";
    }
    const url = new URL(this.htmlFile, base);
    return url.toString();
  }
  render() {
    return x`
      <div id="toolbar" part="preview-toolbar">
        <span id="location" part="preview-location"> ${this.location}</span>
        <mwc-icon-button
          id="reload-button"
          aria-label="Reload preview"
          part="preview-reload-button"
          ?disabled=${!this._indexUrl}
          @click=${this.reload}
        >
          <!-- Source: https://material.io/resources/icons/?icon=refresh&style=baseline -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentcolor"
            width="18px"
            height="18px"
          >
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
        </mwc-icon-button>
      </div>

      <div id="content" class=${o7({ error: !!this._error })}>
        <mwc-linear-progress
          aria-hidden=${this._loading ? "false" : "true"}
          part="preview-loading-indicator"
          indeterminate
          ?closed=${!this._showLoadingBar}
        ></mwc-linear-progress>

        ${this._loadedAtLeastOnce ? A : x`<slot></slot>`}

        <iframe
          title="Project preview"
          @load=${this._onIframeLoad}
          ?hidden=${!this._loadedAtLeastOnce}
        ></iframe>
      </div>

      ${this._error ? x`
            <playground-internal-overlay id="error">
              ${this._error}</playground-internal-overlay
            >
          ` : A}
    `;
  }
  updated() {
    if (this.iframe && this.iframe.src !== this._indexUrl) {
      this.iframe.src = this._indexUrl;
    }
  }
  async firstUpdated() {
    var _a3, _b3;
    if (this._loading && !this._slotHasAnyVisibleChildren()) {
      this._showLoadingBar = true;
    }
    const progress = this.shadowRoot.querySelector("mwc-linear-progress");
    await progress.updateComplete;
    (_b3 = (_a3 = progress.shadowRoot) === null || _a3 === void 0 ? void 0 : _a3.querySelector("[role=progressbar]")) === null || _b3 === void 0 ? void 0 : _b3.setAttribute("aria-label", "Preview is loading");
  }
  _slotHasAnyVisibleChildren() {
    var _a3;
    const assigned = (_a3 = this._slot) === null || _a3 === void 0 ? void 0 : _a3.assignedNodes({ flatten: true });
    if (!assigned) {
      return false;
    }
    for (const node of assigned) {
      if (node.nodeType === Node.COMMENT_NODE) {
        continue;
      }
      if (node.nodeType === Node.TEXT_NODE && (node.textContent || "").trim() === "") {
        continue;
      }
      return true;
    }
    return false;
  }
  _onIframeLoad() {
    if (this._indexUrl) {
      this._loading = false;
      this._loadedAtLeastOnce = true;
      this._showLoadingBar = false;
    }
  }
};
PlaygroundPreview.styles = i`
    :host {
      display: flex;
      flex-direction: column;
      background: white;
      font-family: sans-serif;
      height: 350px;
      position: relative; /* for the error message overlay */
    }

    #toolbar {
      flex: 0 0 var(--playground-bar-height, 40px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: var(--playground-border, solid 1px #ddd);
      font-size: 15px;
      color: var(--playground-preview-toolbar-foreground-color, #444);
      border-radius: inherit;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background: var(--playground-preview-toolbar-background, white);
    }

    #location {
      margin: 0 10px;
    }

    #reload-button {
      --mdc-icon-button-size: 30px;
      --mdc-icon-size: 18px;
    }

    #content {
      max-height: 100%;
      position: relative;
      flex: 1;
    }

    #content.error {
      display: none;
    }

    #error {
      padding: 0 20px;
    }

    mwc-linear-progress {
      /* There is no way to directly specify the height of a linear progress
      bar, but zooming works well enough. It's 4px by default, and we want it to
      be 2px to match the tab bar indicator.*/
      zoom: 0.5;
      --mdc-linear-progress-buffer-color: transparent;
      position: absolute;
      top: -6px;
      width: 100%;
      --mdc-theme-primary: var(--playground-highlight-color, #6200ee);
    }

    iframe,
    slot {
      width: 100%;
      height: 100%;
    }

    iframe {
      border: none;
    }

    [hidden] {
      display: none;
    }
  `;
__decorate([
  n5({ attribute: "html-file" })
], PlaygroundPreview.prototype, "htmlFile", void 0);
__decorate([
  n5()
], PlaygroundPreview.prototype, "location", void 0);
__decorate([
  i4("iframe", true)
], PlaygroundPreview.prototype, "iframe", void 0);
__decorate([
  i4("slot")
], PlaygroundPreview.prototype, "_slot", void 0);
__decorate([
  t3()
], PlaygroundPreview.prototype, "_loading", void 0);
__decorate([
  t3()
], PlaygroundPreview.prototype, "_showLoadingBar", void 0);
__decorate([
  t3()
], PlaygroundPreview.prototype, "_loadedAtLeastOnce", void 0);
__decorate([
  t3()
], PlaygroundPreview.prototype, "_error", void 0);
PlaygroundPreview = __decorate([
  e4("playground-preview")
], PlaygroundPreview);

// ../node_modules/playground-elements/playground-ide.js
var PlaygroundIde = class PlaygroundIde2 extends s4 {
  constructor() {
    super(...arguments);
    this.sandboxBaseUrl = `https://unpkg.com/playground-elements@${npmVersion}/`;
    this.sandboxScope = `__playground_swfs_${serviceWorkerHash}/`;
    this.editableFileSystem = false;
    this.lineNumbers = false;
    this.lineWrapping = false;
    this.resizable = false;
    this.pragmas = "on";
    this.htmlFile = "index.html";
    this.noCompletions = false;
  }
  /**
   * A document-relative path to a project configuration file.
   *
   * When both `projectSrc` and `files` are set, the one set most recently wins.
   * Slotted children win only if both `projectSrc` and `files` are undefined.
   */
  get projectSrc() {
    var _a3, _b3;
    return (_b3 = (_a3 = this._project) === null || _a3 === void 0 ? void 0 : _a3.projectSrc) !== null && _b3 !== void 0 ? _b3 : this._projectSrcSetBeforeRender;
  }
  set projectSrc(src) {
    const project = this._project;
    if (project) {
      project.projectSrc = src;
    } else {
      this._projectSrcSetBeforeRender = src;
    }
  }
  /**
   * Get or set the project config.
   *
   * When both `projectSrc` and `config` are set, the one set most recently
   * wins. Slotted children win only if both `projectSrc` and `config` are
   * undefined.
   */
  get config() {
    var _a3, _b3;
    return (_b3 = (_a3 = this._project) === null || _a3 === void 0 ? void 0 : _a3.config) !== null && _b3 !== void 0 ? _b3 : this._configSetBeforeRender;
  }
  set config(config) {
    const project = this._project;
    if (project) {
      project.config = config;
    } else {
      this._configSetBeforeRender = config;
    }
  }
  /**
   * Indicates whether the user has modified, added, or removed any project
   * files. Resets whenever a new project is loaded.
   */
  get modified() {
    var _a3, _b3;
    return (_b3 = (_a3 = this._project) === null || _a3 === void 0 ? void 0 : _a3.modified) !== null && _b3 !== void 0 ? _b3 : false;
  }
  render() {
    const projectId = "project";
    const editorId = "editor";
    return x`
      <playground-project
        id=${projectId}
        .sandboxBaseUrl=${this.sandboxBaseUrl}
        .sandboxScope=${this.sandboxScope}
      >
        <slot></slot>
      </playground-project>

      <div id="lhs">
        <playground-tab-bar
          part="tab-bar"
          .project=${projectId}
          .editor=${editorId}
          .editableFileSystem=${this.editableFileSystem}
        >
        </playground-tab-bar>

        <playground-file-editor
          id=${editorId}
          part="editor"
          .lineNumbers=${this.lineNumbers}
          .lineWrapping=${this.lineWrapping}
          .project=${projectId}
          .pragmas=${this.pragmas}
          .noCompletions=${this.noCompletions}
        >
        </playground-file-editor>
      </div>

      <div id="rhs">
        ${this.resizable ? x`<div
              id="resizeBar"
              @pointerdown=${this._onResizeBarPointerdown}
            ></div>` : A}

        <playground-preview
          part="preview"
          exportparts="preview-toolbar,
                       preview-location,
                       preview-reload-button,
                       preview-loading-indicator,
                       diagnostic-tooltip,
                       dialog"
          .htmlFile=${this.htmlFile}
          .project=${projectId}
        ></playground-preview>
      </div>
    `;
  }
  firstUpdated() {
    if (this._configSetBeforeRender) {
      this._project.config = this._configSetBeforeRender;
      this._configSetBeforeRender = void 0;
    }
    if (this._projectSrcSetBeforeRender) {
      this._project.projectSrc = this._projectSrcSetBeforeRender;
      this._projectSrcSetBeforeRender = void 0;
    }
  }
  async update(changedProperties) {
    var _a3;
    if (changedProperties.has("resizable") && this.resizable === false) {
      (_a3 = this._rhs) === null || _a3 === void 0 ? void 0 : _a3.style.removeProperty("--playground-preview-width");
    }
    super.update(changedProperties);
  }
  _onResizeBarPointerdown({ pointerId }) {
    const bar = this._resizeBar;
    bar.setPointerCapture(pointerId);
    const rhsStyle = this._rhs.style;
    const { left: hostLeft, right: hostRight } = this.getBoundingClientRect();
    const hostWidth = hostRight - hostLeft;
    const rhsMinWidth = 100;
    const rhsMaxWidth = hostWidth - 100;
    const onPointermove = (event) => {
      const rhsWidth = Math.min(rhsMaxWidth, Math.max(rhsMinWidth, hostRight - event.clientX));
      const percent = rhsWidth / hostWidth * 100;
      rhsStyle.setProperty("--playground-preview-width", `${percent}%`);
    };
    bar.addEventListener("pointermove", onPointermove);
    const onPointerup = () => {
      bar.releasePointerCapture(pointerId);
      bar.removeEventListener("pointermove", onPointermove);
      bar.removeEventListener("pointerup", onPointerup);
    };
    bar.addEventListener("pointerup", onPointerup);
  }
};
PlaygroundIde.styles = i`
    :host {
      display: flex;
      height: 350px;
      min-width: 200px;
      border: var(--playground-border, solid 1px #ddd);
      /* The invisible resize bar has a high z-index so that it's above
      CodeMirror. But we don't want it also above other elements on the page.
      Force a new stacking context. */
      isolation: isolate;
    }

    #lhs {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex: 1;
      min-width: 100px;
      border-radius: inherit;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: var(--playground-border, solid 1px #ddd);
    }

    playground-tab-bar {
      flex-shrink: 0;
    }

    playground-file-editor {
      flex: 1;
      height: calc(100% - var(--playground-bar-height, 40px));
    }

    #rhs {
      height: 100%;
      width: max(100px, var(--playground-preview-width, 30%));
      position: relative;
      border-radius: inherit;
    }

    playground-preview {
      height: 100%;
      width: 100%;
      border-radius: inherit;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    slot {
      display: none;
    }

    #resizeBar {
      position: absolute;
      top: 0;
      left: -5px;
      width: 10px;
      height: 100%;
      z-index: 9;
      cursor: col-resize;
    }

    #resizeOverlay {
      display: none;
    }
    #resizeOverlay.resizing {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999;
      cursor: col-resize;
    }
  `;
__decorate([
  n5({ attribute: "project-src", hasChanged: () => false })
], PlaygroundIde.prototype, "projectSrc", null);
__decorate([
  n5({ attribute: false, hasChanged: () => false })
], PlaygroundIde.prototype, "config", null);
__decorate([
  n5({ attribute: "sandbox-base-url" })
], PlaygroundIde.prototype, "sandboxBaseUrl", void 0);
__decorate([
  n5({ attribute: "sandbox-scope" })
], PlaygroundIde.prototype, "sandboxScope", void 0);
__decorate([
  n5({ type: Boolean, attribute: "editable-file-system" })
], PlaygroundIde.prototype, "editableFileSystem", void 0);
__decorate([
  n5({ type: Boolean, attribute: "line-numbers" })
], PlaygroundIde.prototype, "lineNumbers", void 0);
__decorate([
  n5({ type: Boolean, attribute: "line-wrapping" })
], PlaygroundIde.prototype, "lineWrapping", void 0);
__decorate([
  n5({ type: Boolean })
], PlaygroundIde.prototype, "resizable", void 0);
__decorate([
  n5()
], PlaygroundIde.prototype, "pragmas", void 0);
__decorate([
  n5({ attribute: "html-file" })
], PlaygroundIde.prototype, "htmlFile", void 0);
__decorate([
  n5({ type: Boolean, attribute: "no-completions" })
], PlaygroundIde.prototype, "noCompletions", void 0);
__decorate([
  i4("playground-project")
], PlaygroundIde.prototype, "_project", void 0);
__decorate([
  i4("#resizeBar")
], PlaygroundIde.prototype, "_resizeBar", void 0);
__decorate([
  i4("#rhs")
], PlaygroundIde.prototype, "_rhs", void 0);
PlaygroundIde = __decorate([
  e4("playground-ide")
], PlaygroundIde);
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/shared/worker-api.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/shared/util.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/shared/completion-utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/shared/version.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/shared/deferred.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/internal/build.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/playground-project.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/dom/ponyfill.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-base/utils.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-base/base-element.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/base/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/ripple/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/ripple/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-ripple/mwc-ripple-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-ripple/mwc-ripple.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-ripple/mwc-ripple.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-base/aria-property.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-ripple/ripple-handlers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon-button/mwc-icon-button-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-icon-button/mwc-icon-button.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon-button/mwc-icon-button.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

playground-elements/internal/tab-bar.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/internal/tab.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-base/observer.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-item-base.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-item.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-item.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/dom/keyboard.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/list/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-list/mwc-list-foundation.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-base.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-button/mwc-button-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-button/styles.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-button/mwc-button.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/notched-outline/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/notched-outline/foundation.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-notched-outline/mwc-notched-outline-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-notched-outline/mwc-notched-outline.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-notched-outline/mwc-notched-outline.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-base/form-element.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/floating-label/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/floating-label/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-floating-label/mwc-floating-label-directive.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/line-ripple/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/line-ripple/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-line-ripple/mwc-line-ripple-directive.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/textfield/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/textfield/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-textfield/mwc-textfield-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-textfield/mwc-textfield.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-textfield/mwc-textfield.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/menu-surface/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/menu-surface/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-menu/mwc-menu-surface-base.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-menu/mwc-menu-surface.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-menu/mwc-menu-surface.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

playground-elements/playground-connected-element.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/playground-file-system-controls.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/playground-tab-bar.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/_codemirror/codemirror-bundle.js:
  (* @license CodeMirror, copyright (c) by Marijn Haverbeke and others
  Distributed under an MIT license: https://codemirror.net/LICENSE *)

playground-elements/internal/codemirror.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/internal/overlay.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/playground-code-editor.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/playground-file-editor.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-linear-progress/mwc-linear-progress-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-linear-progress/mwc-linear-progress.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-linear-progress/mwc-linear-progress.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

playground-elements/playground-preview.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

playground-elements/playground-ide.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
