(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a)
          return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b)
          for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
            J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g)
          c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++)
            f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps)
          for (d in g = a.defaultProps, g)
            void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k)
          a = null;
        var h = false;
        if (null === a)
          h = true;
        else
          switch (k) {
            case "string":
            case "number":
              h = true;
              break;
            case "object":
              switch (a.$$typeof) {
                case l:
                case n:
                  h = true;
              }
          }
        if (h)
          return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
            return a2;
          })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a))
          for (var g = 0; g < a.length; g++) {
            k = a[g];
            var f = d + Q(k, g);
            h += R(k, b, e, f, c);
          }
        else if (f = A(a), "function" === typeof f)
          for (a = f.call(a), g = 0; !(k = a.next()).done; )
            k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k)
          throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a)
          return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status)
              a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status)
              a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status)
          return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a))
          throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps)
            var g = a.type.defaultProps;
          for (f in b)
            J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f)
          d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++)
            g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
      };
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.2.0";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a:
          for (; 0 < c; ) {
            var d = c - 1 >>> 1, e = a[d];
            if (0 < g(e, b))
              a[d] = b, a[c] = e, c = d;
            else
              break a;
          }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length)
          return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
              var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
              if (0 > g(C, c))
                n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
              else if (n < e && 0 > g(x, c))
                a[d] = x, a[n] = c, d = n;
              else
                break a;
            }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback)
            k(t);
          else if (b.startTime <= a)
            k(t), b.sortIndex = b.expirationTime, f(r, b);
          else
            break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A)
          if (null !== h(r))
            A = true, I(J);
          else {
            var b = h(t);
            null !== b && K(H, b.startTime - a);
          }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else
              k(r);
            v = h(r);
          }
          if (null !== v)
            var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else
          N = false;
      }
      var S;
      if ("function" === typeof F)
        S = function() {
          F(R);
        };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else
        S = function() {
          D(R, 0);
        };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
          b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea[a] = b;
        for (a = 0; a < b.length; a++)
          da.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a))
          return true;
        if (ja.call(la, a))
          return false;
        if (ka.test(a))
          return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b, c, d) {
        if (null !== c && 0 === c.type)
          return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d)
              return false;
            if (null !== c)
              return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa(a, b, c, d))
          return true;
        if (d)
          return false;
        if (null !== c)
          switch (c.type) {
            case 3:
              return !b;
            case 4:
              return false === b;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
        return false;
      }
      function v(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra,
          sa
        );
        z[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
          qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a)
          return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a) {
        if (void 0 === La)
          try {
            throw Error();
          } catch (c) {
            var b = c.stack.trim().match(/\n( *(at )?)/);
            La = b && b[1] || "";
          }
        return "\n" + La + a;
      }
      var Na = false;
      function Oa(a, b) {
        if (!a || Na)
          return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b)
            if (b = function() {
              throw Error();
            }, Object.defineProperty(b.prototype, "props", { set: function() {
              throw Error();
            } }), "object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (l) {
                var d = l;
              }
              Reflect.construct(a, [], b);
            } else {
              try {
                b.call();
              } catch (l) {
                d = l;
              }
              a.call(b.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
              h--;
            for (; 1 <= g && 0 <= h; g--, h--)
              if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                  do
                    if (g--, h--, 0 > h || e[g] !== f[h]) {
                      var k = "\n" + e[g].replace(" at new ", " at ");
                      a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                      return k;
                    }
                  while (1 <= g && 0 <= h);
                }
                break;
              }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a)
          return null;
        if ("function" === typeof a)
          return a.displayName || a.name || null;
        if ("string" === typeof a)
          return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a)
          switch (a.$$typeof) {
            case Ca:
              return (a.displayName || "Context") + ".Consumer";
            case Ba:
              return (a._context.displayName || "Context") + ".Provider";
            case Da:
              var b = a.render;
              a = a.displayName;
              a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
              return a;
            case Ga:
              return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
            case Ha:
              b = a._payload;
              a = a._init;
              try {
                return Qa(a(b));
              } catch (c) {
              }
          }
        return null;
      }
      function Ra(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b)
              return b.displayName || b.name || null;
            if ("string" === typeof b)
              return b;
        }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a)
          return false;
        var b = a._valueTracker;
        if (!b)
          return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a)
          return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya(a, b) {
        var c = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa(b.value), d = b.type;
        if (null != c)
          if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c)
              a.value = "" + c;
          } else
            a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
            return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a)
          null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++)
            b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++)
            e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML)
          throw Error(p(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b)
              throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length)
                throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa(c) };
      }
      function ib(a, b) {
        var c = Sa(b.value), d = Sa(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      }(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
          a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; )
            a.removeChild(a.firstChild);
          for (; b.firstChild; )
            a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b)
          if (b.hasOwnProperty(c)) {
            var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
            "float" === c && (c = "cssFloat");
            d ? a.setProperty(c, e) : a[c] = e;
          }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
            throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children)
              throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
              throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style)
            throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-"))
          return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb)
            throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b)
            for (a = 0; a < b.length; a++)
              Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib)
          return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab)
            Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c)
          return null;
        var d = Db(c);
        if (null === d)
          return null;
        c = d[b];
        a:
          switch (b) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
              a = !d;
              break a;
            default:
              a = false;
          }
        if (a)
          return null;
        if (c && "function" !== typeof c)
          throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia)
        try {
          Mb = {};
          Object.defineProperty(Mb, "passive", { get: function() {
            Lb = true;
          } });
          window.addEventListener("test", Mb, Mb);
          window.removeEventListener("test", Mb, Mb);
        } catch (a) {
          Lb = false;
        }
      var Mb;
      function Nb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else
            throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate)
          for (; b.return; )
            b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b)
            return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a)
          throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b)
            throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e)
            break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c)
                return Xb(e), a;
              if (f === d)
                return Xb(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return)
            c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g)
                throw Error(p(189));
            }
          }
          if (c.alternate !== d)
            throw Error(p(190));
        }
        if (3 !== c.tag)
          throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag)
          return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b)
            return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot)
          try {
            lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
          } catch (b) {
          }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c)
          return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else
          g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d)
          return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240)))
          return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b)
          for (a = a.entanglements, b &= d; 0 < b; )
            c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d))
              e[g] = vc(h, b);
          } else
            k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++)
          b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - oc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f)
          return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn)
          return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else
            return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++)
          d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
          Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e = Yc(a, b, c, d);
          if (null === e)
            hd(a, b, d, id, c), Sc(a, d);
          else if (Uc(e, a, b, c, d))
            d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a, b, c, d);
              null === f && hd(a, b, d, id, c);
              if (f === e)
                break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else
            hd(a, b, d, null, c);
        }
      }
      var id = null;
      function Yc(a, b, c, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a)
          if (b = Vb(a), null === b)
            a = null;
          else if (c = b.tag, 13 === c) {
            a = Wb(b);
            if (null !== a)
              return a;
            a = null;
          } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated)
              return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
          } else
            b !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md)
          return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++)
          ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
          ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a)
            a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a)
          return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b)
            return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (32 !== b.which)
              return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie)
          return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length)
                return b.char;
              if (b.which)
                return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa(b))
          return a;
      }
      function ve(a, b) {
        if ("change" === a)
          return b;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else
          xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          Jb(re, b);
        }
      }
      function Ce(a, b, c) {
        "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
      }
      function De(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a)
          return te(qe);
      }
      function Ee(a, b) {
        if ("click" === a)
          return te(b);
      }
      function Fe(a, b) {
        if ("input" === a || "change" === a)
          return te(b);
      }
      function Ge(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a, b) {
        if (He(a, b))
          return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
          return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length)
          return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja.call(b, e) || !He(a[e], b[e]))
            return false;
        }
        return true;
      }
      function Je(a) {
        for (; a && a.firstChild; )
          a = a.firstChild;
        return a;
      }
      function Ke(a, b) {
        var c = Je(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b)
              return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je(c);
        }
      }
      function Le(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c)
            a = b.contentWindow;
          else
            break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b = Me(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
              c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(
                c,
                d
              );
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; )
            1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++)
            a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a) {
        if (Xe[a])
          return Xe[a];
        if (!We[a])
          return a;
        var b = We[a], c;
        for (c in b)
          if (b.hasOwnProperty(c) && c in Ye)
            return Xe[a] = b[c];
        return a;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b)
              for (var g = d.length - 1; 0 <= g; g--) {
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                nf(e, h, l);
                f = k;
              }
            else
              for (g = 0; g < d.length; g++) {
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                nf(e, h, l);
                f = k;
              }
          }
        }
        if (Qb)
          throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d)
          a:
            for (; ; ) {
              if (null === d)
                return;
              var g = d.tag;
              if (3 === g || 4 === g) {
                var h = d.stateNode.containerInfo;
                if (h === e || 8 === h.nodeType && h.parentNode === e)
                  break;
                if (4 === g)
                  for (g = d.return; null !== g; ) {
                    var k = g.tag;
                    if (3 === k || 4 === k) {
                      if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e)
                        return;
                    }
                    g = g.return;
                  }
                for (; null !== h; ) {
                  g = Wc(h);
                  if (null === g)
                    return;
                  k = g.tag;
                  if (5 === k || 6 === k) {
                    d = f = g;
                    continue a;
                  }
                  h = h.parentNode;
                }
              }
              d = d.return;
            }
        Jb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k2 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c))
                    break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c.button)
                    break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                if (J)
                  break;
                w = w.return;
              }
              0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf]))
                break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag))
                    n = null;
                } else
                  k2 = null, n = d2;
                if (k2 !== n) {
                  t = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a || "pointerover" === a)
                    t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n ? h2 : ue(n);
                  h2 = new t(F, w + "leave", k2, c, e2);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n)
                    b: {
                      t = k2;
                      x = n;
                      w = 0;
                      for (u = t; u; u = vf(u))
                        w++;
                      u = 0;
                      for (F = x; F; F = vf(F))
                        u++;
                      for (; 0 < w - u; )
                        t = vf(t), w--;
                      for (; 0 < u - w; )
                        x = vf(x), u--;
                      for (; w--; ) {
                        if (t === x || null !== x && t === x.alternate)
                          break b;
                        t = vf(t);
                        x = vf(x);
                      }
                      t = null;
                    }
                  else
                    t = null;
                  null !== k2 && wf(g2, h2, k2, t, false);
                  null !== n && null !== J && wf(g2, J, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type)
                var na = ve;
              else if (me(h2))
                if (we)
                  na = Fe;
                else {
                  na = De;
                  var xa = Ce;
                }
              else
                (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g2, na, c, e2);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable)
                  Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe)
                  break;
              case "keydown":
              case "keyup":
                Ue(g2, c, e2);
            }
            var $a;
            if (ae)
              b: {
                switch (a) {
                  case "compositionstart":
                    var ba = "onCompositionStart";
                    break b;
                  case "compositionend":
                    ba = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    ba = "onCompositionUpdate";
                    break b;
                }
                ba = void 0;
              }
            else
              ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c))
              d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e = a, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a)
          return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d)
            break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c)
          throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType)
            if (c = e.data, "/$" === c) {
              if (0 === d) {
                a.removeChild(e);
                bd(b);
                return;
              }
              d--;
            } else
              "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b)
            break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b)
              break;
            if ("/$" === b)
              return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b)
                return a;
              b--;
            } else
              "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b)
          return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child)
              for (a = Mf(a); null !== a; ) {
                if (c = a[Of])
                  return c;
                a = Mf(a);
              }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag)
          return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c)
          return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
          return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c)
          e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf)
          throw Error(p(168));
        G(H, b);
        G(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext)
          return c;
        d = d.getChildContext();
        for (var e in d)
          if (!(e in b))
            throw Error(p(108, Ra(a) || "Unknown", e));
        return A({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d)
          throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - oc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c << e | d;
          sg = f + a;
        } else
          rg = 1 << f | c << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; )
          mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; )
          qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a))
                throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a))
              throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
          a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg)
          return false;
        if (!I)
          return Fg(a), I = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a))
            throw Hg(), Error(p(418));
          for (; b; )
            Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a)
            throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else
                  "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else
          yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; )
          a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a)
            void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      var Mg = Uf(null);
      var Ng = null;
      var Og = null;
      var Pg = null;
      function Qg() {
        Pg = Og = Ng = null;
      }
      function Rg(a) {
        var b = Mg.current;
        E(Mg);
        a._currentValue = b;
      }
      function Sg(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c)
            break;
          a = a.return;
        }
      }
      function Tg(a, b) {
        Ng = a;
        Pg = Og = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
      }
      function Vg(a) {
        var b = a._currentValue;
        if (Pg !== a)
          if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
            if (null === Ng)
              throw Error(p(308));
            Og = a;
            Ng.dependencies = { lanes: 0, firstContext: a };
          } else
            Og = Og.next = a;
        return b;
      }
      var Wg = null;
      function Xg(a) {
        null === Wg ? Wg = [a] : Wg.push(a);
      }
      function Yg(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return Zg(a, d);
      }
      function Zg(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; )
          a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var $g = false;
      function ah(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function bh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function ch(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function dh(a, b, c) {
        var d = a.updateQueue;
        if (null === d)
          return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return Zg(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return Zg(a, c);
      }
      function eh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function fh(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else
            e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function gh(a, b, c, d) {
        var e = a.updateQueue;
        $g = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q = n.call(y, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q, r) : n;
                    if (null === r || void 0 === r)
                      break a;
                    q = A({}, q, r);
                    break a;
                  case 2:
                    $g = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else
              y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h)
              if (h = e.shared.pending, null === h)
                break;
              else
                r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else
            null === f && (e.shared.lanes = 0);
          hh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function ih(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a)
          for (b = 0; b < a.length; b++) {
            var d = a[b], e = d.callback;
            if (null !== e) {
              d.callback = null;
              d = c;
              if ("function" !== typeof e)
                throw Error(p(191, e));
              e.call(d);
            }
          }
      }
      var jh = new aa.Component().refs;
      function kh(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var nh = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = L(), d = lh(a), e = ch(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = dh(a, e, d);
        null !== b && (mh(b, a, d, c), eh(b, a, d));
      } };
      function oh(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
      }
      function ph(a, b, c) {
        var d = false, e = Vf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = nh;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function qh(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && nh.enqueueReplaceState(b, b.state, null);
      }
      function rh(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = jh;
        ah(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function sh(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag)
                throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d)
              throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f)
              return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              b2 === jh && (b2 = e.refs = {});
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a)
            throw Error(p(284));
          if (!c._owner)
            throw Error(p(290, a));
        }
        return a;
      }
      function th(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function uh(a) {
        var b = a._init;
        return b(a._payload);
      }
      function vh(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a)
            return null;
          for (; null !== d2; )
            b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
            null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = wh(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a)
            return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2)
            return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag)
            return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ya)
            return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && uh(f2) === b2.type))
            return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
          d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = sh(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
            return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag)
            return b2 = Ah(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
            return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
              case wa:
                return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha:
                var d2 = b2._init;
                return q(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2))
              return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
            th(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
            return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case wa:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ha:
                return e2 = c2._init, r(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2))
              return null !== e2 ? null : m(a2, b2, c2, d2, null);
            th(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
            return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case wa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ha:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2))
              return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            th(b2, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n2 = r(e2, u, h2[w], k2);
            if (null === n2) {
              null === u && (u = x);
              break;
            }
            a && u && null === n2.alternate && b(e2, u);
            g2 = f(n2, g2, w);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x;
          }
          if (w === h2.length)
            return c(e2, u), I && tg(e2, w), l2;
          if (null === u) {
            for (; w < h2.length; w++)
              u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I && tg(e2, w);
            return l2;
          }
          for (u = d(e2, u); w < h2.length; w++)
            x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function t(e2, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2)
            throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2)
            throw Error(p(151));
          for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e2, m2, n2.value, k2);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t2.alternate && b(e2, m2);
            g2 = f(t2, g2, w);
            null === u ? l2 = t2 : u.sibling = t2;
            u = t2;
            m2 = x;
          }
          if (n2.done)
            return c(
              e2,
              m2
            ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next())
              n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next())
            n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && uh(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = sh(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else
                      b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya ? (d2 = Ah(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = yh(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2)
                      if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                        c(a2, d2.sibling);
                        d2 = e(d2, f2.children || []);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      } else {
                        c(a2, d2);
                        break;
                      }
                    else
                      b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = zh(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
            }
            if (eb(f2))
              return n(a2, d2, f2, h2);
            if (Ka(f2))
              return t(a2, d2, f2, h2);
            th(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var Bh = vh(true);
      var Ch = vh(false);
      var Dh = {};
      var Eh = Uf(Dh);
      var Fh = Uf(Dh);
      var Gh = Uf(Dh);
      function Hh(a) {
        if (a === Dh)
          throw Error(p(174));
        return a;
      }
      function Ih(a, b) {
        G(Gh, b);
        G(Fh, a);
        G(Eh, Dh);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E(Eh);
        G(Eh, b);
      }
      function Jh() {
        E(Eh);
        E(Fh);
        E(Gh);
      }
      function Kh(a) {
        Hh(Gh.current);
        var b = Hh(Eh.current);
        var c = lb(b, a.type);
        b !== c && (G(Fh, a), G(Eh, c));
      }
      function Lh(a) {
        Fh.current === a && (E(Eh), E(Fh));
      }
      var M = Uf(0);
      function Mh(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
              return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128))
              return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Nh = [];
      function Oh() {
        for (var a = 0; a < Nh.length; a++)
          Nh[a]._workInProgressVersionPrimary = null;
        Nh.length = 0;
      }
      var Ph = ua.ReactCurrentDispatcher;
      var Qh = ua.ReactCurrentBatchConfig;
      var Rh = 0;
      var N = null;
      var O = null;
      var P = null;
      var Sh = false;
      var Th = false;
      var Uh = 0;
      var Vh = 0;
      function Q() {
        throw Error(p(321));
      }
      function Wh(a, b) {
        if (null === b)
          return false;
        for (var c = 0; c < b.length && c < a.length; c++)
          if (!He(a[c], b[c]))
            return false;
        return true;
      }
      function Xh(a, b, c, d, e, f) {
        Rh = f;
        N = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
        a = c(d, e);
        if (Th) {
          f = 0;
          do {
            Th = false;
            Uh = 0;
            if (25 <= f)
              throw Error(p(301));
            f += 1;
            P = O = null;
            b.updateQueue = null;
            Ph.current = $h;
            a = c(d, e);
          } while (Th);
        }
        Ph.current = ai;
        b = null !== O && null !== O.next;
        Rh = 0;
        P = O = N = null;
        Sh = false;
        if (b)
          throw Error(p(300));
        return a;
      }
      function bi() {
        var a = 0 !== Uh;
        Uh = 0;
        return a;
      }
      function ci() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === P ? N.memoizedState = P = a : P = P.next = a;
        return P;
      }
      function di() {
        if (null === O) {
          var a = N.alternate;
          a = null !== a ? a.memoizedState : null;
        } else
          a = O.next;
        var b = null === P ? N.memoizedState : P.next;
        if (null !== b)
          P = b, O = a;
        else {
          if (null === a)
            throw Error(p(310));
          O = a;
          a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
          null === P ? N.memoizedState = P = a : P = P.next = a;
        }
        return P;
      }
      function ei(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function fi(a) {
        var b = di(), c = b.queue;
        if (null === c)
          throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = O, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Rh & m) === m)
              null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q, g = d) : k = k.next = q;
              N.lanes |= m;
              hh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He(d, b.memoizedState) || (Ug = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, N.lanes |= f, hh |= f, e = e.next;
          while (e !== a);
        } else
          null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function gi(a) {
        var b = di(), c = b.queue;
        if (null === c)
          throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He(f, b.memoizedState) || (Ug = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function hi() {
      }
      function ii(a, b) {
        var c = N, d = di(), e = b(), f = !He(d.memoizedState, e);
        f && (d.memoizedState = e, Ug = true);
        d = d.queue;
        ji(ki.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
          c.flags |= 2048;
          li(9, mi.bind(null, c, d, e, b), void 0, null);
          if (null === R)
            throw Error(p(349));
          0 !== (Rh & 30) || ni(c, b, e);
        }
        return e;
      }
      function ni(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = N.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function mi(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        oi(b) && pi(a);
      }
      function ki(a, b, c) {
        return c(function() {
          oi(b) && pi(a);
        });
      }
      function oi(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He(a, c);
        } catch (d) {
          return true;
        }
      }
      function pi(a) {
        var b = Zg(a, 1);
        null !== b && mh(b, a, 1, -1);
      }
      function qi(a) {
        var b = ci();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ri.bind(null, N, a);
        return [b.memoizedState, a];
      }
      function li(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = N.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function si() {
        return di().memoizedState;
      }
      function ti(a, b, c, d) {
        var e = ci();
        N.flags |= a;
        e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function ui(a, b, c, d) {
        var e = di();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== O) {
          var g = O.memoizedState;
          f = g.destroy;
          if (null !== d && Wh(d, g.deps)) {
            e.memoizedState = li(b, c, f, d);
            return;
          }
        }
        N.flags |= a;
        e.memoizedState = li(1 | b, c, f, d);
      }
      function vi(a, b) {
        return ti(8390656, 8, a, b);
      }
      function ji(a, b) {
        return ui(2048, 8, a, b);
      }
      function wi(a, b) {
        return ui(4, 2, a, b);
      }
      function xi(a, b) {
        return ui(4, 4, a, b);
      }
      function yi(a, b) {
        if ("function" === typeof b)
          return a = a(), b(a), function() {
            b(null);
          };
        if (null !== b && void 0 !== b)
          return a = a(), b.current = a, function() {
            b.current = null;
          };
      }
      function zi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ui(4, 4, yi.bind(null, b, a), c);
      }
      function Ai() {
      }
      function Bi(a, b) {
        var c = di();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function Ci(a, b) {
        var c = di();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function Di(a, b, c) {
        if (0 === (Rh & 21))
          return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
        He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
        return b;
      }
      function Ei(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Qh.transition;
        Qh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Qh.transition = d;
        }
      }
      function Fi() {
        return di().memoizedState;
      }
      function Gi(a, b, c) {
        var d = lh(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a))
          Ii(b, c);
        else if (c = Yg(a, b, c, d), null !== c) {
          var e = L();
          mh(c, a, d, e);
          Ji(c, b, d);
        }
      }
      function ri(a, b, c) {
        var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a))
          Ii(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f))
            try {
              var g = b.lastRenderedState, h = f(g, c);
              e.hasEagerState = true;
              e.eagerState = h;
              if (He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
              }
            } catch (l) {
            } finally {
            }
          c = Yg(a, b, e, d);
          null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
        }
      }
      function Hi(a) {
        var b = a.alternate;
        return a === N || null !== b && b === N;
      }
      function Ii(a, b) {
        Th = Sh = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Ji(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false };
      var Yh = { readContext: Vg, useCallback: function(a, b) {
        ci().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ti(
          4194308,
          4,
          yi.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ti(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ti(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = ci();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = ci();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = Gi.bind(null, N, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = ci();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
        return ci().memoizedState = a;
      }, useTransition: function() {
        var a = qi(false), b = a[0];
        a = Ei.bind(null, a[1]);
        ci().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = N, e = ci();
        if (I) {
          if (void 0 === c)
            throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === R)
            throw Error(p(349));
          0 !== (Rh & 30) || ni(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        vi(ki.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        li(9, mi.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = ci(), b = R.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Uh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else
          c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Zh = {
        readContext: Vg,
        useCallback: Bi,
        useContext: Vg,
        useEffect: ji,
        useImperativeHandle: zi,
        useInsertionEffect: wi,
        useLayoutEffect: xi,
        useMemo: Ci,
        useReducer: fi,
        useRef: si,
        useState: function() {
          return fi(ei);
        },
        useDebugValue: Ai,
        useDeferredValue: function(a) {
          var b = di();
          return Di(b, O.memoizedState, a);
        },
        useTransition: function() {
          var a = fi(ei)[0], b = di().memoizedState;
          return [a, b];
        },
        useMutableSource: hi,
        useSyncExternalStore: ii,
        useId: Fi,
        unstable_isNewReconciler: false
      };
      var $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
        return gi(ei);
      }, useDebugValue: Ai, useDeferredValue: function(a) {
        var b = di();
        return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
      }, useTransition: function() {
        var a = gi(ei)[0], b = di().memoizedState;
        return [a, b];
      }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
      function Ki(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Li(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Mi(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Ni = "function" === typeof WeakMap ? WeakMap : Map;
      function Oi(a, b, c) {
        c = ch(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Pi || (Pi = true, Qi = d);
          Mi(a, b);
        };
        return c;
      }
      function Ri(a, b, c) {
        c = ch(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Mi(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Mi(a, b);
          "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Ti(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Ni();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else
          e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
      }
      function Vi(a) {
        do {
          var b;
          if (b = 13 === a.tag)
            b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b)
            return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Wi(a, b, c, d, e) {
        if (0 === (a.mode & 1))
          return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Xi = ua.ReactCurrentOwner;
      var Ug = false;
      function Yi(a, b, c, d) {
        b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
      }
      function Zi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        Tg(b, e);
        d = Xh(a, b, c, d, f, e);
        c = bi();
        if (null !== a && !Ug)
          return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
        I && c && vg(b);
        b.flags |= 1;
        Yi(a, b, d, e);
        return b.child;
      }
      function aj(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps)
            return b.tag = 15, b.type = f, cj(a, b, f, d, e);
          a = yh(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie;
          if (c(g, d) && a.ref === b.ref)
            return $i(a, b, e);
        }
        b.flags |= 1;
        a = wh(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function cj(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Ie(f, d) && a.ref === b.ref)
            if (Ug = false, b.pendingProps = d = f, 0 !== (a.lanes & e))
              0 !== (a.flags & 131072) && (Ug = true);
            else
              return b.lanes = a.lanes, $i(a, b, e);
        }
        return dj(a, b, c, d, e);
      }
      function ej(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode)
          if (0 === (b.mode & 1))
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
          else {
            if (0 === (c & 1073741824))
              return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
            d = null !== f ? f.baseLanes : c;
            G(fj, gj);
            gj |= d;
          }
        else
          null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
        Yi(a, b, e, c);
        return b.child;
      }
      function hj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c)
          b.flags |= 512, b.flags |= 2097152;
      }
      function dj(a, b, c, d, e) {
        var f = Zf(c) ? Xf : H.current;
        f = Yf(b, f);
        Tg(b, e);
        c = Xh(a, b, c, d, f, e);
        d = bi();
        if (null !== a && !Ug)
          return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
        I && d && vg(b);
        b.flags |= 1;
        Yi(a, b, c, e);
        return b.child;
      }
      function ij(a, b, c, d, e) {
        if (Zf(c)) {
          var f = true;
          cg(b);
        } else
          f = false;
        Tg(b, e);
        if (null === b.stateNode)
          jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
          $g = false;
          var r = b.memoizedState;
          g.state = r;
          gh(b, d, g, e);
          k = b.memoizedState;
          h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          bh(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Lg(b.type, h);
          g.props = l;
          q = b.pendingProps;
          r = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
          $g = false;
          r = b.memoizedState;
          g.state = r;
          gh(b, d, g, e);
          var n = b.memoizedState;
          h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return kj(a, b, c, d, f, e);
      }
      function kj(a, b, c, d, e, f) {
        hj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g)
          return e && dg(b, c, false), $i(a, b, f);
        d = b.stateNode;
        Xi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
        b.memoizedState = d.state;
        e && dg(b, c, true);
        return b.child;
      }
      function lj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        Ih(a, b.containerInfo);
      }
      function mj(a, b, c, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Yi(a, b, c, d);
        return b.child;
      }
      var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function oj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function pj(a, b, c) {
        var d = b.pendingProps, e = M.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h)
          f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState)
          e |= 1;
        G(M, e & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a))
            return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h))
          return sj(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = nj;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = wh(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function rj(a, b) {
        b = qj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function tj(a, b, c, d) {
        null !== d && Jg(d);
        Bh(b, a.child, null, c);
        a = rj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function sj(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256)
            return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
          if (null !== b.memoizedState)
            return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = qj({ mode: "visible", children: d.children }, e, 0, null);
          f = Ah(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Bh(b, a.child, null, g);
          b.child.memoizedState = oj(g);
          b.memoizedState = nj;
          return f;
        }
        if (0 === (b.mode & 1))
          return tj(a, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d)
            var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Li(f, d, void 0);
          return tj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (Ug || h) {
          d = R;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
          }
          uj();
          d = Li(Error(p(421)));
          return tj(a, b, g, d);
        }
        if ("$?" === e.data)
          return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
        a = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = rj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function wj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        Sg(a.return, b, c);
      }
      function xj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function yj(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        Yi(a, b, d.children, c);
        d = M.current;
        if (0 !== (d & 2))
          d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128))
            a:
              for (a = b.child; null !== a; ) {
                if (13 === a.tag)
                  null !== a.memoizedState && wj(a, c, b);
                else if (19 === a.tag)
                  wj(a, c, b);
                else if (null !== a.child) {
                  a.child.return = a;
                  a = a.child;
                  continue;
                }
                if (a === b)
                  break a;
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === b)
                    break a;
                  a = a.return;
                }
                a.sibling.return = a.return;
                a = a.sibling;
              }
          d &= 1;
        }
        G(M, d);
        if (0 === (b.mode & 1))
          b.memoizedState = null;
        else
          switch (e) {
            case "forwards":
              c = b.child;
              for (e = null; null !== c; )
                a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
              c = e;
              null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
              xj(b, false, e, c, f);
              break;
            case "backwards":
              c = null;
              e = b.child;
              for (b.child = null; null !== e; ) {
                a = e.alternate;
                if (null !== a && null === Mh(a)) {
                  b.child = e;
                  break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
              }
              xj(b, true, c, null, f);
              break;
            case "together":
              xj(b, false, null, null, void 0);
              break;
            default:
              b.memoizedState = null;
          }
        return b.child;
      }
      function jj(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function $i(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        hh |= b.lanes;
        if (0 === (c & b.childLanes))
          return null;
        if (null !== a && b.child !== a.child)
          throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = wh(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; )
            a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function zj(a, b, c) {
        switch (b.tag) {
          case 3:
            lj(b);
            Ig();
            break;
          case 5:
            Kh(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            Ih(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Mg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated)
                return G(M, M.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes))
                return pj(a, b, c);
              G(M, M.current & 1);
              a = $i(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G(M, M.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d)
                return yj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(M, M.current);
            if (d)
              break;
            else
              return null;
          case 22:
          case 23:
            return b.lanes = 0, ej(a, b, c);
        }
        return $i(a, b, c);
      }
      var Aj;
      var Bj;
      var Cj;
      var Dj;
      Aj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag)
            a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b)
            break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b)
              return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Bj = function() {
      };
      Cj = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          Hh(Eh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l in e)
            if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l])
              if ("style" === l) {
                var h = e[l];
                for (g in h)
                  h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
              } else
                "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h))
              if ("style" === l)
                if (h) {
                  for (g in h)
                    !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                  for (g in k)
                    k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                } else
                  c || (f || (f = []), f.push(
                    l,
                    c
                  )), c = k;
              else
                "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l)
            b.flags |= 4;
        }
      };
      Dj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Ej(a, b) {
        if (!I)
          switch (a.tailMode) {
            case "hidden":
              b = a.tail;
              for (var c = null; null !== b; )
                null !== b.alternate && (c = b), b = b.sibling;
              null === c ? a.tail = null : c.sibling = null;
              break;
            case "collapsed":
              c = a.tail;
              for (var d = null; null !== c; )
                null !== c.alternate && (d = c), c = c.sibling;
              null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
          }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b)
          for (var e = a.child; null !== e; )
            c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else
          for (e = a.child; null !== e; )
            c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Fj(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            Jh();
            E(Wf);
            E(H);
            Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child)
              Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
            Bj(a, b);
            S(b);
            return null;
          case 5:
            Lh(b);
            var e = Hh(Gh.current);
            c = b.type;
            if (null !== a && null != b.stateNode)
              Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode)
                  throw Error(p(166));
                S(b);
                return null;
              }
              a = Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++)
                      D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c, f);
                e = null;
                for (var g in f)
                  if (f.hasOwnProperty(g)) {
                    var h = f[g];
                    "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                      d.textContent,
                      h,
                      a
                    ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                  }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                Aj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++)
                        D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za(a, d);
                      e = Ya(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c, e);
                  h = e;
                  for (f in h)
                    if (h.hasOwnProperty(f)) {
                      var k = h[f];
                      "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                    }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode)
              Dj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode)
                throw Error(p(166));
              c = Hh(Gh.current);
              Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f = d.nodeValue !== c) {
                  if (a = xg, null !== a)
                    switch (a.tag) {
                      case 3:
                        Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        break;
                      case 5:
                        true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    }
                }
                f && (b.flags |= 4);
              } else
                d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E(M);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
                Hg(), Ig(), b.flags |= 98560, f = false;
              else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f)
                    throw Error(p(318));
                  f = b.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f)
                    throw Error(p(317));
                  f[Of] = b;
                } else
                  Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f = false;
              } else
                null !== zg && (Gj(zg), zg = null), f = true;
              if (!f)
                return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128))
              return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return Rg(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E(M);
            f = b.memoizedState;
            if (null === f)
              return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g)
              if (d)
                Ej(f, false);
              else {
                if (0 !== T || null !== a && 0 !== (a.flags & 128))
                  for (a = b.child; null !== a; ) {
                    g = Mh(a);
                    if (null !== g) {
                      b.flags |= 128;
                      Ej(f, false);
                      d = g.updateQueue;
                      null !== d && (b.updateQueue = d, b.flags |= 4);
                      b.subtreeFlags = 0;
                      d = c;
                      for (c = b.child; null !== c; )
                        f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                      G(M, M.current & 1 | 2);
                      return b.child;
                    }
                    a = a.sibling;
                  }
                null !== f.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
              }
            else {
              if (!d)
                if (a = Mh(g), null !== a) {
                  if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I)
                    return S(b), null;
                } else
                  2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail)
              return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Jj(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Lh(b), null;
          case 13:
            E(M);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate)
                throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(M), null;
          case 4:
            return Jh(), null;
          case 10:
            return Rg(b.type._context), null;
          case 22:
          case 23:
            return Ij(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Kj = false;
      var U = false;
      var Lj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Mj(a, b) {
        var c = a.ref;
        if (null !== c)
          if ("function" === typeof c)
            try {
              c(null);
            } catch (d) {
              W(a, b, d);
            }
          else
            c.current = null;
      }
      function Nj(a, b, c) {
        try {
          c();
        } catch (d) {
          W(a, b, d);
        }
      }
      var Oj = false;
      function Pj(a, b) {
        Cf = dd;
        a = Me();
        if (Ne(a)) {
          if ("selectionStart" in a)
            var c = { start: a.selectionStart, end: a.selectionEnd };
          else
            a: {
              c = (c = a.ownerDocument) && c.defaultView || window;
              var d = c.getSelection && c.getSelection();
              if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                  c.nodeType, f.nodeType;
                } catch (F) {
                  c = null;
                  break a;
                }
                var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                b:
                  for (; ; ) {
                    for (var y; ; ) {
                      q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                      q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                      3 === q.nodeType && (g += q.nodeValue.length);
                      if (null === (y = q.firstChild))
                        break;
                      r = q;
                      q = y;
                    }
                    for (; ; ) {
                      if (q === a)
                        break b;
                      r === c && ++l === e && (h = g);
                      r === f && ++m === d && (k = g);
                      if (null !== (y = q.nextSibling))
                        break;
                      q = r;
                      r = q.parentNode;
                    }
                    q = y;
                  }
                c = -1 === h || -1 === k ? null : { start: h, end: k };
              } else
                c = null;
            }
          c = c || { start: 0, end: 0 };
        } else
          c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b; null !== V; )
          if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
            a.return = b, V = a;
          else
            for (; null !== V; ) {
              b = V;
              try {
                var n = b.alternate;
                if (0 !== (b.flags & 1024))
                  switch (b.tag) {
                    case 0:
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
                        x.__reactInternalSnapshotBeforeUpdate = w;
                      }
                      break;
                    case 3:
                      var u = b.stateNode.containerInfo;
                      1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                      break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      throw Error(p(163));
                  }
              } catch (F) {
                W(b, b.return, F);
              }
              a = b.sibling;
              if (null !== a) {
                a.return = b.return;
                V = a;
                break;
              }
              V = b.return;
            }
        n = Oj;
        Oj = false;
        return n;
      }
      function Qj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Nj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Rj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Sj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Tj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Tj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Uj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Vj(a) {
        a:
          for (; ; ) {
            for (; null === a.sibling; ) {
              if (null === a.return || Uj(a.return))
                return null;
              a = a.return;
            }
            a.sibling.return = a.return;
            for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
              if (a.flags & 2)
                continue a;
              if (null === a.child || 4 === a.tag)
                continue a;
              else
                a.child.return = a, a = a.child;
            }
            if (!(a.flags & 2))
              return a.stateNode;
          }
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d)
          a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a))
          for (Wj(a, b, c), a = a.sibling; null !== a; )
            Wj(a, b, c), a = a.sibling;
      }
      function Xj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d)
          a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a))
          for (Xj(a, b, c), a = a.sibling; null !== a; )
            Xj(a, b, c), a = a.sibling;
      }
      var X = null;
      var Yj = false;
      function Zj(a, b, c) {
        for (c = c.child; null !== c; )
          ak(a, b, c), c = c.sibling;
      }
      function ak(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount)
          try {
            lc.onCommitFiberUnmount(kc, c);
          } catch (h) {
          }
        switch (c.tag) {
          case 5:
            U || Mj(c, b);
          case 6:
            var d = X, e = Yj;
            X = null;
            Zj(a, b, c);
            X = d;
            Yj = e;
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
          case 4:
            d = X;
            e = Yj;
            X = c.stateNode.containerInfo;
            Yj = true;
            Zj(a, b, c);
            X = d;
            Yj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Zj(a, b, c);
            break;
          case 1:
            if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
              try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
              } catch (h) {
                W(c, b, h);
              }
            Zj(a, b, c);
            break;
          case 21:
            Zj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
            break;
          default:
            Zj(a, b, c);
        }
      }
      function bk(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Lj());
          b.forEach(function(b2) {
            var d = ck.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function dk(a, b) {
        var c = b.deletions;
        if (null !== c)
          for (var d = 0; d < c.length; d++) {
            var e = c[d];
            try {
              var f = a, g = b, h = g;
              a:
                for (; null !== h; ) {
                  switch (h.tag) {
                    case 5:
                      X = h.stateNode;
                      Yj = false;
                      break a;
                    case 3:
                      X = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                    case 4:
                      X = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                  }
                  h = h.return;
                }
              if (null === X)
                throw Error(p(160));
              ak(f, g, e);
              X = null;
              Yj = false;
              var k = e.alternate;
              null !== k && (k.return = null);
              e.return = null;
            } catch (l) {
              W(e, b, l);
            }
          }
        if (b.subtreeFlags & 12854)
          for (b = b.child; null !== b; )
            ek(b, a), b = b.sibling;
      }
      function ek(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            dk(b, a);
            fk(a);
            if (d & 4) {
              try {
                Qj(3, a, a.return), Rj(3, a);
              } catch (t) {
                W(a, a.return, t);
              }
              try {
                Qj(5, a, a.return);
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 1:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            break;
          case 5:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a, a.return, t);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k)
                try {
                  "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                  vb(h, g);
                  var l = vb(h, f);
                  for (g = 0; g < k.length; g += 2) {
                    var m = k[g], q = k[g + 1];
                    "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                  }
                  switch (h) {
                    case "input":
                      bb(e, f);
                      break;
                    case "textarea":
                      ib(e, f);
                      break;
                    case "select":
                      var r = e._wrapperState.wasMultiple;
                      e._wrapperState.wasMultiple = !!f.multiple;
                      var y = f.value;
                      null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                        e,
                        !!f.multiple,
                        f.defaultValue,
                        true
                      ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                  }
                  e[Pf] = f;
                } catch (t) {
                  W(a, a.return, t);
                }
            }
            break;
          case 6:
            dk(b, a);
            fk(a);
            if (d & 4) {
              if (null === a.stateNode)
                throw Error(p(162));
              e = a.stateNode;
              f = a.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 3:
            dk(b, a);
            fk(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated)
              try {
                bd(b.containerInfo);
              } catch (t) {
                W(a, a.return, t);
              }
            break;
          case 4:
            dk(b, a);
            fk(a);
            break;
          case 13:
            dk(b, a);
            fk(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
            d & 4 && bk(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
            fk(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1))
                for (V = a, m = a.child; null !== m; ) {
                  for (q = V = m; null !== V; ) {
                    r = V;
                    y = r.child;
                    switch (r.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Qj(4, r, r.return);
                        break;
                      case 1:
                        Mj(r, r.return);
                        var n = r.stateNode;
                        if ("function" === typeof n.componentWillUnmount) {
                          d = r;
                          c = r.return;
                          try {
                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                          } catch (t) {
                            W(d, c, t);
                          }
                        }
                        break;
                      case 5:
                        Mj(r, r.return);
                        break;
                      case 22:
                        if (null !== r.memoizedState) {
                          hk(q);
                          continue;
                        }
                    }
                    null !== y ? (y.return = r, V = y) : hk(q);
                  }
                  m = m.sibling;
                }
              a:
                for (m = null, q = a; ; ) {
                  if (5 === q.tag) {
                    if (null === m) {
                      m = q;
                      try {
                        e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                      } catch (t) {
                        W(a, a.return, t);
                      }
                    }
                  } else if (6 === q.tag) {
                    if (null === m)
                      try {
                        q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                      } catch (t) {
                        W(a, a.return, t);
                      }
                  } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                    q.child.return = q;
                    q = q.child;
                    continue;
                  }
                  if (q === a)
                    break a;
                  for (; null === q.sibling; ) {
                    if (null === q.return || q.return === a)
                      break a;
                    m === q && (m = null);
                    q = q.return;
                  }
                  m === q && (m = null);
                  q.sibling.return = q.return;
                  q = q.sibling;
                }
            }
            break;
          case 19:
            dk(b, a);
            fk(a);
            d & 4 && bk(a);
            break;
          case 21:
            break;
          default:
            dk(
              b,
              a
            ), fk(a);
        }
      }
      function fk(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Uj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Vj(a);
                Xj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Vj(a);
                Wj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function ik(a, b, c) {
        V = a;
        jk(a, b, c);
      }
      function jk(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Kj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Kj;
              var l = U;
              Kj = g;
              if ((U = k) && !l)
                for (V = e; null !== V; )
                  g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
              for (; null !== f; )
                V = f, jk(f, b, c), f = f.sibling;
              V = e;
              Kj = h;
              U = l;
            }
            lk(a, b, c);
          } else
            0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a, b, c);
        }
      }
      function lk(a) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    U || Rj(5, b);
                    break;
                  case 1:
                    var d = b.stateNode;
                    if (b.flags & 4 && !U)
                      if (null === c)
                        d.componentDidMount();
                      else {
                        var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                        d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                      }
                    var f = b.updateQueue;
                    null !== f && ih(b, f, d);
                    break;
                  case 3:
                    var g = b.updateQueue;
                    if (null !== g) {
                      c = null;
                      if (null !== b.child)
                        switch (b.child.tag) {
                          case 5:
                            c = b.child.stateNode;
                            break;
                          case 1:
                            c = b.child.stateNode;
                        }
                      ih(b, g, c);
                    }
                    break;
                  case 5:
                    var h = b.stateNode;
                    if (null === c && b.flags & 4) {
                      c = h;
                      var k = b.memoizedProps;
                      switch (b.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          k.autoFocus && c.focus();
                          break;
                        case "img":
                          k.src && (c.src = k.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (null === b.memoizedState) {
                      var l = b.alternate;
                      if (null !== l) {
                        var m = l.memoizedState;
                        if (null !== m) {
                          var q = m.dehydrated;
                          null !== q && bd(q);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error(p(163));
                }
              U || b.flags & 512 && Sj(b);
            } catch (r) {
              W(b, b.return, r);
            }
          }
          if (b === a) {
            V = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function hk(a) {
        for (; null !== V; ) {
          var b = V;
          if (b === a) {
            V = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Rj(4, b);
                } catch (k) {
                  W(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Sj(b);
                } catch (k) {
                  W(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Sj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var mk = Math.ceil;
      var nk = ua.ReactCurrentDispatcher;
      var ok = ua.ReactCurrentOwner;
      var pk = ua.ReactCurrentBatchConfig;
      var K = 0;
      var R = null;
      var Y = null;
      var Z = 0;
      var gj = 0;
      var fj = Uf(0);
      var T = 0;
      var qk = null;
      var hh = 0;
      var rk = 0;
      var sk = 0;
      var tk = null;
      var uk = null;
      var gk = 0;
      var Hj = Infinity;
      var vk = null;
      var Pi = false;
      var Qi = null;
      var Si = null;
      var wk = false;
      var xk = null;
      var yk = 0;
      var zk = 0;
      var Ak = null;
      var Bk = -1;
      var Ck = 0;
      function L() {
        return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
      }
      function lh(a) {
        if (0 === (a.mode & 1))
          return 1;
        if (0 !== (K & 2) && 0 !== Z)
          return Z & -Z;
        if (null !== Kg.transition)
          return 0 === Ck && (Ck = yc()), Ck;
        a = C;
        if (0 !== a)
          return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function mh(a, b, c, d) {
        if (50 < zk)
          throw zk = 0, Ak = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== R)
          a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
      }
      function Ek(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === R ? Z : 0);
        if (0 === d)
          null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b)
            0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
              0 === (K & 6) && jg();
            }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Gk(c, Hk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Hk(a, b) {
        Bk = -1;
        Ck = 0;
        if (0 !== (K & 6))
          throw Error(p(327));
        var c = a.callbackNode;
        if (Ik() && a.callbackNode !== c)
          return null;
        var d = uc(a, a === R ? Z : 0);
        if (0 === d)
          return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
          b = Jk(a, d);
        else {
          b = d;
          var e = K;
          K |= 2;
          var f = Kk();
          if (R !== a || Z !== b)
            vk = null, Hj = B() + 500, Lk(a, b);
          do
            try {
              Mk();
              break;
            } catch (h) {
              Nk(a, h);
            }
          while (1);
          Qg();
          nk.current = f;
          K = e;
          null !== Y ? b = 0 : (R = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
          if (1 === b)
            throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
          if (6 === b)
            Dk(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b))
              throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Qk(a, uk, vk);
                break;
              case 3:
                Dk(a, d);
                if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a, 0))
                    break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    L();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
                  break;
                }
                Qk(a, uk, vk);
                break;
              case 4:
                Dk(a, d);
                if ((d & 4194240) === d)
                  break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
                  break;
                }
                Qk(a, uk, vk);
                break;
              case 5:
                Qk(a, uk, vk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Ek(a, B());
        return a.callbackNode === c ? Hk.bind(null, a) : null;
      }
      function Ok(a, b) {
        var c = tk;
        a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
        a = Jk(a, b);
        2 !== a && (b = uk, uk = c, null !== b && Gj(b));
        return a;
      }
      function Gj(a) {
        null === uk ? uk = a : uk.push.apply(uk, a);
      }
      function Pk(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c))
              for (var d = 0; d < c.length; d++) {
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                  if (!He(f(), e))
                    return false;
                } catch (g) {
                  return false;
                }
              }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c)
            c.return = b, b = c;
          else {
            if (b === a)
              break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a)
                return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Dk(a, b) {
        b &= ~sk;
        b &= ~rk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Fk(a) {
        if (0 !== (K & 6))
          throw Error(p(327));
        Ik();
        var b = uc(a, 0);
        if (0 === (b & 1))
          return Ek(a, B()), null;
        var c = Jk(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Ok(a, d));
        }
        if (1 === c)
          throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
        if (6 === c)
          throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Qk(a, uk, vk);
        Ek(a, B());
        return null;
      }
      function Rk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Hj = B() + 500, fg && jg());
        }
      }
      function Sk(a) {
        null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
        var b = K;
        K |= 1;
        var c = pk.transition, d = C;
        try {
          if (pk.transition = null, C = 1, a)
            return a();
        } finally {
          C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Ij() {
        gj = fj.current;
        E(fj);
      }
      function Lk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y)
          for (c = Y.return; null !== c; ) {
            var d = c;
            wg(d);
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f();
                break;
              case 3:
                Jh();
                E(Wf);
                E(H);
                Oh();
                break;
              case 5:
                Lh(d);
                break;
              case 4:
                Jh();
                break;
              case 13:
                E(M);
                break;
              case 19:
                E(M);
                break;
              case 10:
                Rg(d.type._context);
                break;
              case 22:
              case 23:
                Ij();
            }
            c = c.return;
          }
        R = a;
        Y = a = wh(a.current, null);
        Z = gj = b;
        T = 0;
        qk = null;
        sk = rk = hh = 0;
        uk = tk = null;
        if (null !== Wg) {
          for (b = 0; b < Wg.length; b++)
            if (c = Wg[b], d = c.interleaved, null !== d) {
              c.interleaved = null;
              var e = d.next, f = c.pending;
              if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
              }
              c.pending = d;
            }
          Wg = null;
        }
        return a;
      }
      function Nk(a, b) {
        do {
          var c = Y;
          try {
            Qg();
            Ph.current = ai;
            if (Sh) {
              for (var d = N.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Sh = false;
            }
            Rh = 0;
            P = O = N = null;
            Th = false;
            Uh = 0;
            ok.current = null;
            if (null === c || null === c.return) {
              T = 1;
              qk = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Vi(g);
                if (null !== y) {
                  y.flags &= -257;
                  Wi(y, g, h, f, b);
                  y.mode & 1 && Ti(f, l, b);
                  b = y;
                  k = l;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b.updateQueue = t;
                  } else
                    n.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Ti(f, l, b);
                    uj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Vi(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Wi(J, g, h, f, b);
                  Jg(Ki(k, h));
                  break a;
                }
              }
              f = k = Ki(k, h);
              4 !== T && (T = 2);
              null === tk ? tk = [f] : tk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var x = Oi(f, k, b);
                    fh(f, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var F = Ri(f, h, b);
                      fh(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Tk(c);
          } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Kk() {
        var a = nk.current;
        nk.current = ai;
        return null === a ? ai : a;
      }
      function uj() {
        if (0 === T || 3 === T || 2 === T)
          T = 4;
        null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
      }
      function Jk(a, b) {
        var c = K;
        K |= 2;
        var d = Kk();
        if (R !== a || Z !== b)
          vk = null, Lk(a, b);
        do
          try {
            Uk();
            break;
          } catch (e) {
            Nk(a, e);
          }
        while (1);
        Qg();
        K = c;
        nk.current = d;
        if (null !== Y)
          throw Error(p(261));
        R = null;
        Z = 0;
        return T;
      }
      function Uk() {
        for (; null !== Y; )
          Vk(Y);
      }
      function Mk() {
        for (; null !== Y && !cc(); )
          Vk(Y);
      }
      function Vk(a) {
        var b = Wk(a.alternate, a, gj);
        a.memoizedProps = a.pendingProps;
        null === b ? Tk(a) : Y = b;
        ok.current = null;
      }
      function Tk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Fj(c, b, gj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Jj(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a)
              a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Qk(a, b, c) {
        var d = C, e = pk.transition;
        try {
          pk.transition = null, C = 1, Xk(a, b, c, d);
        } finally {
          pk.transition = e, C = d;
        }
        return null;
      }
      function Xk(a, b, c, d) {
        do
          Ik();
        while (null !== xk);
        if (0 !== (K & 6))
          throw Error(p(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c)
          return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current)
          throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Bc(a, f);
        a === R && (Y = R = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
          Ik();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = pk.transition;
          pk.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          ok.current = null;
          Pj(a, c);
          ek(c, a);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          ik(c, a, e);
          dc();
          K = h;
          C = g;
          pk.transition = f;
        } else
          a.current = c;
        wk && (wk = false, xk = a, yk = e);
        f = a.pendingLanes;
        0 === f && (Si = null);
        mc(c.stateNode, d);
        Ek(a, B());
        if (null !== b)
          for (d = a.onRecoverableError, c = 0; c < b.length; c++)
            e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Pi)
          throw Pi = false, a = Qi, Qi = null, a;
        0 !== (yk & 1) && 0 !== a.tag && Ik();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
        jg();
        return null;
      }
      function Ik() {
        if (null !== xk) {
          var a = Dc(yk), b = pk.transition, c = C;
          try {
            pk.transition = null;
            C = 16 > a ? 16 : a;
            if (null === xk)
              var d = false;
            else {
              a = xk;
              xk = null;
              yk = 0;
              if (0 !== (K & 6))
                throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(8, m, f);
                        }
                        var q = m.child;
                        if (null !== q)
                          q.return = m, V = q;
                        else
                          for (; null !== V; ) {
                            m = V;
                            var r = m.sibling, y = m.return;
                            Tj(m);
                            if (m === l) {
                              V = null;
                              break;
                            }
                            if (null !== r) {
                              r.return = y;
                              V = r;
                              break;
                            }
                            V = y;
                          }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g)
                  g.return = f, V = g;
                else
                  b:
                    for (; null !== V; ) {
                      f = V;
                      if (0 !== (f.flags & 2048))
                        switch (f.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(9, f, f.return);
                        }
                      var x = f.sibling;
                      if (null !== x) {
                        x.return = f.return;
                        V = x;
                        break b;
                      }
                      V = f.return;
                    }
              }
              var w = a.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u)
                  u.return = g, V = u;
                else
                  b:
                    for (g = w; null !== V; ) {
                      h = V;
                      if (0 !== (h.flags & 2048))
                        try {
                          switch (h.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Rj(9, h);
                          }
                        } catch (na) {
                          W(h, h.return, na);
                        }
                      if (h === g) {
                        V = null;
                        break b;
                      }
                      var F = h.sibling;
                      if (null !== F) {
                        F.return = h.return;
                        V = F;
                        break b;
                      }
                      V = h.return;
                    }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot)
                try {
                  lc.onPostCommitFiberRoot(kc, a);
                } catch (na) {
                }
              d = true;
            }
            return d;
          } finally {
            C = c, pk.transition = b;
          }
        }
        return false;
      }
      function Yk(a, b, c) {
        b = Ki(c, b);
        b = Oi(a, b, 1);
        a = dh(a, b, 1);
        b = L();
        null !== a && (Ac(a, 1, b), Ek(a, b));
      }
      function W(a, b, c) {
        if (3 === a.tag)
          Yk(a, a, c);
        else
          for (; null !== b; ) {
            if (3 === b.tag) {
              Yk(b, a, c);
              break;
            } else if (1 === b.tag) {
              var d = b.stateNode;
              if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                a = Ki(c, a);
                a = Ri(b, a, 1);
                b = dh(b, a, 1);
                a = L();
                null !== b && (Ac(b, 1, a), Ek(b, a));
                break;
              }
            }
            b = b.return;
          }
      }
      function Ui(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = L();
        a.pingedLanes |= a.suspendedLanes & c;
        R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
        Ek(a, b);
      }
      function Zk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = L();
        a = Zg(a, b);
        null !== a && (Ac(a, b, c), Ek(a, c));
      }
      function vj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Zk(a, c);
      }
      function ck(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Zk(a, c);
      }
      var Wk;
      Wk = function(a, b, c) {
        if (null !== a)
          if (a.memoizedProps !== b.pendingProps || Wf.current)
            Ug = true;
          else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128))
              return Ug = false, zj(a, b, c);
            Ug = 0 !== (a.flags & 131072) ? true : false;
          }
        else
          Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            jj(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            Tg(b, c);
            e = Xh(null, b, d, a, e, c);
            var f = bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              jj(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = $k(d);
              a = Lg(d, a);
              switch (e) {
                case 0:
                  b = dj(null, b, d, a, c);
                  break a;
                case 1:
                  b = ij(null, b, d, a, c);
                  break a;
                case 11:
                  b = Zi(null, b, d, a, c);
                  break a;
                case 14:
                  b = aj(null, b, d, Lg(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
          case 3:
            a: {
              lj(b);
              if (null === a)
                throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              bh(a, b);
              gh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated)
                if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                  e = Ki(Error(p(423)), b);
                  b = mj(a, b, d, c, e);
                  break a;
                } else if (d !== e) {
                  e = Ki(Error(p(424)), b);
                  b = mj(a, b, d, c, e);
                  break a;
                } else
                  for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
                    c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e) {
                  b = $i(a, b, c);
                  break a;
                }
                Yi(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return pj(a, b, c);
          case 4:
            return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
          case 7:
            return Yi(a, b, b.pendingProps, c), b.child;
          case 8:
            return Yi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Yi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(Mg, d._currentValue);
              d._currentValue = g;
              if (null !== f)
                if (He(f.value, g)) {
                  if (f.children === e.children && !Wf.current) {
                    b = $i(a, b, c);
                    break a;
                  }
                } else
                  for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                    var h = f.dependencies;
                    if (null !== h) {
                      g = f.child;
                      for (var k = h.firstContext; null !== k; ) {
                        if (k.context === d) {
                          if (1 === f.tag) {
                            k = ch(-1, c & -c);
                            k.tag = 2;
                            var l = f.updateQueue;
                            if (null !== l) {
                              l = l.shared;
                              var m = l.pending;
                              null === m ? k.next = k : (k.next = m.next, m.next = k);
                              l.pending = k;
                            }
                          }
                          f.lanes |= c;
                          k = f.alternate;
                          null !== k && (k.lanes |= c);
                          Sg(
                            f.return,
                            c,
                            b
                          );
                          h.lanes |= c;
                          break;
                        }
                        k = k.next;
                      }
                    } else if (10 === f.tag)
                      g = f.type === b.type ? null : f.child;
                    else if (18 === f.tag) {
                      g = f.return;
                      if (null === g)
                        throw Error(p(341));
                      g.lanes |= c;
                      h = g.alternate;
                      null !== h && (h.lanes |= c);
                      Sg(g, c, b);
                      g = f.sibling;
                    } else
                      g = f.child;
                    if (null !== g)
                      g.return = f;
                    else
                      for (g = f; null !== g; ) {
                        if (g === b) {
                          g = null;
                          break;
                        }
                        f = g.sibling;
                        if (null !== f) {
                          f.return = g.return;
                          g = f;
                          break;
                        }
                        g = g.return;
                      }
                    f = g;
                  }
              Yi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
          case 15:
            return cj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
          case 19:
            return yj(a, b, c);
          case 22:
            return ej(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Gk(a, b) {
        return ac(a, b);
      }
      function al(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new al(a, b, c, d);
      }
      function bj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function $k(a) {
        if ("function" === typeof a)
          return bj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da)
            return 11;
          if (a === Ga)
            return 14;
        }
        return 2;
      }
      function wh(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function yh(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a)
          bj(a) && (g = 1);
        else if ("string" === typeof a)
          g = 5;
        else
          a:
            switch (a) {
              case ya:
                return Ah(c.children, e, f, b);
              case za:
                g = 8;
                e |= 8;
                break;
              case Aa:
                return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
              case Ea:
                return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
              case Fa:
                return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
              case Ia:
                return qj(c, e, f, b);
              default:
                if ("object" === typeof a && null !== a)
                  switch (a.$$typeof) {
                    case Ba:
                      g = 10;
                      break a;
                    case Ca:
                      g = 9;
                      break a;
                    case Da:
                      g = 11;
                      break a;
                    case Ga:
                      g = 14;
                      break a;
                    case Ha:
                      g = 16;
                      d = null;
                      break a;
                  }
                throw Error(p(130, null == a ? a : typeof a, ""));
            }
        b = Bg(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Ah(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function qj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function xh(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function zh(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function bl(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function cl(a, b, c, d, e, f, g, h, k) {
        a = new bl(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = Bg(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        ah(f);
        return a;
      }
      function dl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function el(a) {
        if (!a)
          return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag)
            throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c))
            return bg(a, c, b);
        }
        return b;
      }
      function fl(a, b, c, d, e, f, g, h, k) {
        a = cl(c, d, true, a, e, f, g, h, k);
        a.context = el(null);
        c = a.current;
        d = L();
        e = lh(c);
        f = ch(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        dh(c, f, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Ek(a, d);
        return a;
      }
      function gl(a, b, c, d) {
        var e = b.current, f = L(), g = lh(e);
        c = el(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = ch(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = dh(e, b, g);
        null !== a && (mh(a, e, g, f), eh(a, e, g));
        return g;
      }
      function hl(a) {
        a = a.current;
        if (!a.child)
          return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function il(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function jl(a, b) {
        il(a, b);
        (a = a.alternate) && il(a, b);
      }
      function kl() {
        return null;
      }
      var ll = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ml(a) {
        this._internalRoot = a;
      }
      nl.prototype.render = ml.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b)
          throw Error(p(409));
        gl(a, b, null, null);
      };
      nl.prototype.unmount = ml.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Sk(function() {
            gl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function nl(a) {
        this._internalRoot = a;
      }
      nl.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
            ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function pl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function ql() {
      }
      function rl(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a2 = hl(g);
              f.call(a2);
            };
          }
          var g = fl(b, d, a, 0, null, false, false, "", ql);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Sk();
          return g;
        }
        for (; e = a.lastChild; )
          a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = hl(k);
            h.call(a2);
          };
        }
        var k = cl(a, 0, false, null, null, false, false, "", ql);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Sk(function() {
          gl(b, k, c, d);
        });
        return k;
      }
      function sl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = hl(g);
              h.call(a2);
            };
          }
          gl(b, g, a, e);
        } else
          g = rl(c, b, a, e, d);
        return hl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
            }
            break;
          case 13:
            Sk(function() {
              var b2 = Zg(a, 1);
              if (null !== b2) {
                var c2 = L();
                mh(b2, a, 1, c2);
              }
            }), jl(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = Zg(a, 134217728);
          if (null !== b) {
            var c = L();
            mh(b, a, 134217728, c);
          }
          jl(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = lh(a), c = Zg(a, b);
          if (null !== c) {
            var d = L();
            mh(c, a, b, d);
          }
          jl(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; )
                c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e)
                    throw Error(p(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Rk;
      Hb = Sk;
      var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] };
      var ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
      var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!wl.isDisabled && wl.supportsFiber)
          try {
            kc = wl.inject(vl), lc = wl;
          } catch (a) {
          }
      }
      var wl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ol(b))
          throw Error(p(200));
        return dl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!ol(a))
          throw Error(p(299));
        var c = false, d = "", e = ll;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = cl(a, 1, false, null, null, c, false, d, e);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ml(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a)
          return null;
        if (1 === a.nodeType)
          return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render)
            throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Sk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!pl(b))
          throw Error(p(200));
        return sl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!ol(a))
          throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e = false, f = "", g = ll;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = fl(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[uf] = b.current;
        sf(a);
        if (d)
          for (a = 0; a < d.length; a++)
            c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
              c,
              e
            );
        return new nl(b);
      };
      exports.render = function(a, b, c) {
        if (!pl(b))
          throw Error(p(200));
        return sl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!pl(a))
          throw Error(p(40));
        return a._reactRootContainer ? (Sk(function() {
          sl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Rk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!pl(c))
          throw Error(p(200));
        if (null == a || void 0 === a._reactInternals)
          throw Error(p(38));
        return sl(a, b, c, false, d);
      };
      exports.version = "18.2.0-next-9e3b772b8-20220608";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/lunr/lunr.js
  var require_lunr = __commonJS({
    "node_modules/lunr/lunr.js"(exports, module) {
      (function() {
        var lunr2 = function(config) {
          var builder = new lunr2.Builder();
          builder.pipeline.add(
            lunr2.trimmer,
            lunr2.stopWordFilter,
            lunr2.stemmer
          );
          builder.searchPipeline.add(
            lunr2.stemmer
          );
          config.call(builder, builder);
          return builder.build();
        };
        lunr2.version = "2.3.9";
        lunr2.utils = {};
        lunr2.utils.warn = function(global2) {
          return function(message) {
            if (global2.console && console.warn) {
              console.warn(message);
            }
          };
        }(this);
        lunr2.utils.asString = function(obj) {
          if (obj === void 0 || obj === null) {
            return "";
          } else {
            return obj.toString();
          }
        };
        lunr2.utils.clone = function(obj) {
          if (obj === null || obj === void 0) {
            return obj;
          }
          var clone = /* @__PURE__ */ Object.create(null), keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i], val = obj[key];
            if (Array.isArray(val)) {
              clone[key] = val.slice();
              continue;
            }
            if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
              clone[key] = val;
              continue;
            }
            throw new TypeError("clone is not deep and does not support nested objects");
          }
          return clone;
        };
        lunr2.FieldRef = function(docRef, fieldName, stringValue) {
          this.docRef = docRef;
          this.fieldName = fieldName;
          this._stringValue = stringValue;
        };
        lunr2.FieldRef.joiner = "/";
        lunr2.FieldRef.fromString = function(s) {
          var n = s.indexOf(lunr2.FieldRef.joiner);
          if (n === -1) {
            throw "malformed field ref string";
          }
          var fieldRef = s.slice(0, n), docRef = s.slice(n + 1);
          return new lunr2.FieldRef(docRef, fieldRef, s);
        };
        lunr2.FieldRef.prototype.toString = function() {
          if (this._stringValue == void 0) {
            this._stringValue = this.fieldName + lunr2.FieldRef.joiner + this.docRef;
          }
          return this._stringValue;
        };
        lunr2.Set = function(elements) {
          this.elements = /* @__PURE__ */ Object.create(null);
          if (elements) {
            this.length = elements.length;
            for (var i = 0; i < this.length; i++) {
              this.elements[elements[i]] = true;
            }
          } else {
            this.length = 0;
          }
        };
        lunr2.Set.complete = {
          intersect: function(other) {
            return other;
          },
          union: function() {
            return this;
          },
          contains: function() {
            return true;
          }
        };
        lunr2.Set.empty = {
          intersect: function() {
            return this;
          },
          union: function(other) {
            return other;
          },
          contains: function() {
            return false;
          }
        };
        lunr2.Set.prototype.contains = function(object) {
          return !!this.elements[object];
        };
        lunr2.Set.prototype.intersect = function(other) {
          var a, b, elements, intersection = [];
          if (other === lunr2.Set.complete) {
            return this;
          }
          if (other === lunr2.Set.empty) {
            return other;
          }
          if (this.length < other.length) {
            a = this;
            b = other;
          } else {
            a = other;
            b = this;
          }
          elements = Object.keys(a.elements);
          for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element in b.elements) {
              intersection.push(element);
            }
          }
          return new lunr2.Set(intersection);
        };
        lunr2.Set.prototype.union = function(other) {
          if (other === lunr2.Set.complete) {
            return lunr2.Set.complete;
          }
          if (other === lunr2.Set.empty) {
            return this;
          }
          return new lunr2.Set(Object.keys(this.elements).concat(Object.keys(other.elements)));
        };
        lunr2.idf = function(posting, documentCount) {
          var documentsWithTerm = 0;
          for (var fieldName in posting) {
            if (fieldName == "_index")
              continue;
            documentsWithTerm += Object.keys(posting[fieldName]).length;
          }
          var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5);
          return Math.log(1 + Math.abs(x));
        };
        lunr2.Token = function(str, metadata) {
          this.str = str || "";
          this.metadata = metadata || {};
        };
        lunr2.Token.prototype.toString = function() {
          return this.str;
        };
        lunr2.Token.prototype.update = function(fn) {
          this.str = fn(this.str, this.metadata);
          return this;
        };
        lunr2.Token.prototype.clone = function(fn) {
          fn = fn || function(s) {
            return s;
          };
          return new lunr2.Token(fn(this.str, this.metadata), this.metadata);
        };
        lunr2.tokenizer = function(obj, metadata) {
          if (obj == null || obj == void 0) {
            return [];
          }
          if (Array.isArray(obj)) {
            return obj.map(function(t) {
              return new lunr2.Token(
                lunr2.utils.asString(t).toLowerCase(),
                lunr2.utils.clone(metadata)
              );
            });
          }
          var str = obj.toString().toLowerCase(), len = str.length, tokens = [];
          for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
            var char = str.charAt(sliceEnd), sliceLength = sliceEnd - sliceStart;
            if (char.match(lunr2.tokenizer.separator) || sliceEnd == len) {
              if (sliceLength > 0) {
                var tokenMetadata = lunr2.utils.clone(metadata) || {};
                tokenMetadata["position"] = [sliceStart, sliceLength];
                tokenMetadata["index"] = tokens.length;
                tokens.push(
                  new lunr2.Token(
                    str.slice(sliceStart, sliceEnd),
                    tokenMetadata
                  )
                );
              }
              sliceStart = sliceEnd + 1;
            }
          }
          return tokens;
        };
        lunr2.tokenizer.separator = /[\s\-]+/;
        lunr2.Pipeline = function() {
          this._stack = [];
        };
        lunr2.Pipeline.registeredFunctions = /* @__PURE__ */ Object.create(null);
        lunr2.Pipeline.registerFunction = function(fn, label) {
          if (label in this.registeredFunctions) {
            lunr2.utils.warn("Overwriting existing registered function: " + label);
          }
          fn.label = label;
          lunr2.Pipeline.registeredFunctions[fn.label] = fn;
        };
        lunr2.Pipeline.warnIfFunctionNotRegistered = function(fn) {
          var isRegistered = fn.label && fn.label in this.registeredFunctions;
          if (!isRegistered) {
            lunr2.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", fn);
          }
        };
        lunr2.Pipeline.load = function(serialised) {
          var pipeline = new lunr2.Pipeline();
          serialised.forEach(function(fnName) {
            var fn = lunr2.Pipeline.registeredFunctions[fnName];
            if (fn) {
              pipeline.add(fn);
            } else {
              throw new Error("Cannot load unregistered function: " + fnName);
            }
          });
          return pipeline;
        };
        lunr2.Pipeline.prototype.add = function() {
          var fns = Array.prototype.slice.call(arguments);
          fns.forEach(function(fn) {
            lunr2.Pipeline.warnIfFunctionNotRegistered(fn);
            this._stack.push(fn);
          }, this);
        };
        lunr2.Pipeline.prototype.after = function(existingFn, newFn) {
          lunr2.Pipeline.warnIfFunctionNotRegistered(newFn);
          var pos = this._stack.indexOf(existingFn);
          if (pos == -1) {
            throw new Error("Cannot find existingFn");
          }
          pos = pos + 1;
          this._stack.splice(pos, 0, newFn);
        };
        lunr2.Pipeline.prototype.before = function(existingFn, newFn) {
          lunr2.Pipeline.warnIfFunctionNotRegistered(newFn);
          var pos = this._stack.indexOf(existingFn);
          if (pos == -1) {
            throw new Error("Cannot find existingFn");
          }
          this._stack.splice(pos, 0, newFn);
        };
        lunr2.Pipeline.prototype.remove = function(fn) {
          var pos = this._stack.indexOf(fn);
          if (pos == -1) {
            return;
          }
          this._stack.splice(pos, 1);
        };
        lunr2.Pipeline.prototype.run = function(tokens) {
          var stackLength = this._stack.length;
          for (var i = 0; i < stackLength; i++) {
            var fn = this._stack[i];
            var memo = [];
            for (var j = 0; j < tokens.length; j++) {
              var result = fn(tokens[j], j, tokens);
              if (result === null || result === void 0 || result === "")
                continue;
              if (Array.isArray(result)) {
                for (var k = 0; k < result.length; k++) {
                  memo.push(result[k]);
                }
              } else {
                memo.push(result);
              }
            }
            tokens = memo;
          }
          return tokens;
        };
        lunr2.Pipeline.prototype.runString = function(str, metadata) {
          var token = new lunr2.Token(str, metadata);
          return this.run([token]).map(function(t) {
            return t.toString();
          });
        };
        lunr2.Pipeline.prototype.reset = function() {
          this._stack = [];
        };
        lunr2.Pipeline.prototype.toJSON = function() {
          return this._stack.map(function(fn) {
            lunr2.Pipeline.warnIfFunctionNotRegistered(fn);
            return fn.label;
          });
        };
        lunr2.Vector = function(elements) {
          this._magnitude = 0;
          this.elements = elements || [];
        };
        lunr2.Vector.prototype.positionForIndex = function(index) {
          if (this.elements.length == 0) {
            return 0;
          }
          var start = 0, end = this.elements.length / 2, sliceLength = end - start, pivotPoint = Math.floor(sliceLength / 2), pivotIndex = this.elements[pivotPoint * 2];
          while (sliceLength > 1) {
            if (pivotIndex < index) {
              start = pivotPoint;
            }
            if (pivotIndex > index) {
              end = pivotPoint;
            }
            if (pivotIndex == index) {
              break;
            }
            sliceLength = end - start;
            pivotPoint = start + Math.floor(sliceLength / 2);
            pivotIndex = this.elements[pivotPoint * 2];
          }
          if (pivotIndex == index) {
            return pivotPoint * 2;
          }
          if (pivotIndex > index) {
            return pivotPoint * 2;
          }
          if (pivotIndex < index) {
            return (pivotPoint + 1) * 2;
          }
        };
        lunr2.Vector.prototype.insert = function(insertIdx, val) {
          this.upsert(insertIdx, val, function() {
            throw "duplicate index";
          });
        };
        lunr2.Vector.prototype.upsert = function(insertIdx, val, fn) {
          this._magnitude = 0;
          var position = this.positionForIndex(insertIdx);
          if (this.elements[position] == insertIdx) {
            this.elements[position + 1] = fn(this.elements[position + 1], val);
          } else {
            this.elements.splice(position, 0, insertIdx, val);
          }
        };
        lunr2.Vector.prototype.magnitude = function() {
          if (this._magnitude)
            return this._magnitude;
          var sumOfSquares = 0, elementsLength = this.elements.length;
          for (var i = 1; i < elementsLength; i += 2) {
            var val = this.elements[i];
            sumOfSquares += val * val;
          }
          return this._magnitude = Math.sqrt(sumOfSquares);
        };
        lunr2.Vector.prototype.dot = function(otherVector) {
          var dotProduct = 0, a = this.elements, b = otherVector.elements, aLen = a.length, bLen = b.length, aVal = 0, bVal = 0, i = 0, j = 0;
          while (i < aLen && j < bLen) {
            aVal = a[i], bVal = b[j];
            if (aVal < bVal) {
              i += 2;
            } else if (aVal > bVal) {
              j += 2;
            } else if (aVal == bVal) {
              dotProduct += a[i + 1] * b[j + 1];
              i += 2;
              j += 2;
            }
          }
          return dotProduct;
        };
        lunr2.Vector.prototype.similarity = function(otherVector) {
          return this.dot(otherVector) / this.magnitude() || 0;
        };
        lunr2.Vector.prototype.toArray = function() {
          var output = new Array(this.elements.length / 2);
          for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
            output[j] = this.elements[i];
          }
          return output;
        };
        lunr2.Vector.prototype.toJSON = function() {
          return this.elements;
        };
        lunr2.stemmer = function() {
          var step2list = {
            "ational": "ate",
            "tional": "tion",
            "enci": "ence",
            "anci": "ance",
            "izer": "ize",
            "bli": "ble",
            "alli": "al",
            "entli": "ent",
            "eli": "e",
            "ousli": "ous",
            "ization": "ize",
            "ation": "ate",
            "ator": "ate",
            "alism": "al",
            "iveness": "ive",
            "fulness": "ful",
            "ousness": "ous",
            "aliti": "al",
            "iviti": "ive",
            "biliti": "ble",
            "logi": "log"
          }, step3list = {
            "icate": "ic",
            "ative": "",
            "alize": "al",
            "iciti": "ic",
            "ical": "ic",
            "ful": "",
            "ness": ""
          }, c = "[^aeiou]", v = "[aeiouy]", C = c + "[^aeiouy]*", V = v + "[aeiou]*", mgr0 = "^(" + C + ")?" + V + C, meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$", mgr1 = "^(" + C + ")?" + V + C + V + C, s_v = "^(" + C + ")?" + v;
          var re_mgr0 = new RegExp(mgr0);
          var re_mgr1 = new RegExp(mgr1);
          var re_meq1 = new RegExp(meq1);
          var re_s_v = new RegExp(s_v);
          var re_1a = /^(.+?)(ss|i)es$/;
          var re2_1a = /^(.+?)([^s])s$/;
          var re_1b = /^(.+?)eed$/;
          var re2_1b = /^(.+?)(ed|ing)$/;
          var re_1b_2 = /.$/;
          var re2_1b_2 = /(at|bl|iz)$/;
          var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
          var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");
          var re_1c = /^(.+?[^aeiou])y$/;
          var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
          var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
          var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
          var re2_4 = /^(.+?)(s|t)(ion)$/;
          var re_5 = /^(.+?)e$/;
          var re_5_1 = /ll$/;
          var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");
          var porterStemmer = function porterStemmer2(w) {
            var stem, suffix, firstch, re, re2, re3, re4;
            if (w.length < 3) {
              return w;
            }
            firstch = w.substr(0, 1);
            if (firstch == "y") {
              w = firstch.toUpperCase() + w.substr(1);
            }
            re = re_1a;
            re2 = re2_1a;
            if (re.test(w)) {
              w = w.replace(re, "$1$2");
            } else if (re2.test(w)) {
              w = w.replace(re2, "$1$2");
            }
            re = re_1b;
            re2 = re2_1b;
            if (re.test(w)) {
              var fp = re.exec(w);
              re = re_mgr0;
              if (re.test(fp[1])) {
                re = re_1b_2;
                w = w.replace(re, "");
              }
            } else if (re2.test(w)) {
              var fp = re2.exec(w);
              stem = fp[1];
              re2 = re_s_v;
              if (re2.test(stem)) {
                w = stem;
                re2 = re2_1b_2;
                re3 = re3_1b_2;
                re4 = re4_1b_2;
                if (re2.test(w)) {
                  w = w + "e";
                } else if (re3.test(w)) {
                  re = re_1b_2;
                  w = w.replace(re, "");
                } else if (re4.test(w)) {
                  w = w + "e";
                }
              }
            }
            re = re_1c;
            if (re.test(w)) {
              var fp = re.exec(w);
              stem = fp[1];
              w = stem + "i";
            }
            re = re_2;
            if (re.test(w)) {
              var fp = re.exec(w);
              stem = fp[1];
              suffix = fp[2];
              re = re_mgr0;
              if (re.test(stem)) {
                w = stem + step2list[suffix];
              }
            }
            re = re_3;
            if (re.test(w)) {
              var fp = re.exec(w);
              stem = fp[1];
              suffix = fp[2];
              re = re_mgr0;
              if (re.test(stem)) {
                w = stem + step3list[suffix];
              }
            }
            re = re_4;
            re2 = re2_4;
            if (re.test(w)) {
              var fp = re.exec(w);
              stem = fp[1];
              re = re_mgr1;
              if (re.test(stem)) {
                w = stem;
              }
            } else if (re2.test(w)) {
              var fp = re2.exec(w);
              stem = fp[1] + fp[2];
              re2 = re_mgr1;
              if (re2.test(stem)) {
                w = stem;
              }
            }
            re = re_5;
            if (re.test(w)) {
              var fp = re.exec(w);
              stem = fp[1];
              re = re_mgr1;
              re2 = re_meq1;
              re3 = re3_5;
              if (re.test(stem) || re2.test(stem) && !re3.test(stem)) {
                w = stem;
              }
            }
            re = re_5_1;
            re2 = re_mgr1;
            if (re.test(w) && re2.test(w)) {
              re = re_1b_2;
              w = w.replace(re, "");
            }
            if (firstch == "y") {
              w = firstch.toLowerCase() + w.substr(1);
            }
            return w;
          };
          return function(token) {
            return token.update(porterStemmer);
          };
        }();
        lunr2.Pipeline.registerFunction(lunr2.stemmer, "stemmer");
        lunr2.generateStopWordFilter = function(stopWords) {
          var words = stopWords.reduce(function(memo, stopWord) {
            memo[stopWord] = stopWord;
            return memo;
          }, {});
          return function(token) {
            if (token && words[token.toString()] !== token.toString())
              return token;
          };
        };
        lunr2.stopWordFilter = lunr2.generateStopWordFilter([
          "a",
          "able",
          "about",
          "across",
          "after",
          "all",
          "almost",
          "also",
          "am",
          "among",
          "an",
          "and",
          "any",
          "are",
          "as",
          "at",
          "be",
          "because",
          "been",
          "but",
          "by",
          "can",
          "cannot",
          "could",
          "dear",
          "did",
          "do",
          "does",
          "either",
          "else",
          "ever",
          "every",
          "for",
          "from",
          "get",
          "got",
          "had",
          "has",
          "have",
          "he",
          "her",
          "hers",
          "him",
          "his",
          "how",
          "however",
          "i",
          "if",
          "in",
          "into",
          "is",
          "it",
          "its",
          "just",
          "least",
          "let",
          "like",
          "likely",
          "may",
          "me",
          "might",
          "most",
          "must",
          "my",
          "neither",
          "no",
          "nor",
          "not",
          "of",
          "off",
          "often",
          "on",
          "only",
          "or",
          "other",
          "our",
          "own",
          "rather",
          "said",
          "say",
          "says",
          "she",
          "should",
          "since",
          "so",
          "some",
          "than",
          "that",
          "the",
          "their",
          "them",
          "then",
          "there",
          "these",
          "they",
          "this",
          "tis",
          "to",
          "too",
          "twas",
          "us",
          "wants",
          "was",
          "we",
          "were",
          "what",
          "when",
          "where",
          "which",
          "while",
          "who",
          "whom",
          "why",
          "will",
          "with",
          "would",
          "yet",
          "you",
          "your"
        ]);
        lunr2.Pipeline.registerFunction(lunr2.stopWordFilter, "stopWordFilter");
        lunr2.trimmer = function(token) {
          return token.update(function(s) {
            return s.replace(/^\W+/, "").replace(/\W+$/, "");
          });
        };
        lunr2.Pipeline.registerFunction(lunr2.trimmer, "trimmer");
        lunr2.TokenSet = function() {
          this.final = false;
          this.edges = {};
          this.id = lunr2.TokenSet._nextId;
          lunr2.TokenSet._nextId += 1;
        };
        lunr2.TokenSet._nextId = 1;
        lunr2.TokenSet.fromArray = function(arr) {
          var builder = new lunr2.TokenSet.Builder();
          for (var i = 0, len = arr.length; i < len; i++) {
            builder.insert(arr[i]);
          }
          builder.finish();
          return builder.root;
        };
        lunr2.TokenSet.fromClause = function(clause) {
          if ("editDistance" in clause) {
            return lunr2.TokenSet.fromFuzzyString(clause.term, clause.editDistance);
          } else {
            return lunr2.TokenSet.fromString(clause.term);
          }
        };
        lunr2.TokenSet.fromFuzzyString = function(str, editDistance) {
          var root2 = new lunr2.TokenSet();
          var stack = [{
            node: root2,
            editsRemaining: editDistance,
            str
          }];
          while (stack.length) {
            var frame = stack.pop();
            if (frame.str.length > 0) {
              var char = frame.str.charAt(0), noEditNode;
              if (char in frame.node.edges) {
                noEditNode = frame.node.edges[char];
              } else {
                noEditNode = new lunr2.TokenSet();
                frame.node.edges[char] = noEditNode;
              }
              if (frame.str.length == 1) {
                noEditNode.final = true;
              }
              stack.push({
                node: noEditNode,
                editsRemaining: frame.editsRemaining,
                str: frame.str.slice(1)
              });
            }
            if (frame.editsRemaining == 0) {
              continue;
            }
            if ("*" in frame.node.edges) {
              var insertionNode = frame.node.edges["*"];
            } else {
              var insertionNode = new lunr2.TokenSet();
              frame.node.edges["*"] = insertionNode;
            }
            if (frame.str.length == 0) {
              insertionNode.final = true;
            }
            stack.push({
              node: insertionNode,
              editsRemaining: frame.editsRemaining - 1,
              str: frame.str
            });
            if (frame.str.length > 1) {
              stack.push({
                node: frame.node,
                editsRemaining: frame.editsRemaining - 1,
                str: frame.str.slice(1)
              });
            }
            if (frame.str.length == 1) {
              frame.node.final = true;
            }
            if (frame.str.length >= 1) {
              if ("*" in frame.node.edges) {
                var substitutionNode = frame.node.edges["*"];
              } else {
                var substitutionNode = new lunr2.TokenSet();
                frame.node.edges["*"] = substitutionNode;
              }
              if (frame.str.length == 1) {
                substitutionNode.final = true;
              }
              stack.push({
                node: substitutionNode,
                editsRemaining: frame.editsRemaining - 1,
                str: frame.str.slice(1)
              });
            }
            if (frame.str.length > 1) {
              var charA = frame.str.charAt(0), charB = frame.str.charAt(1), transposeNode;
              if (charB in frame.node.edges) {
                transposeNode = frame.node.edges[charB];
              } else {
                transposeNode = new lunr2.TokenSet();
                frame.node.edges[charB] = transposeNode;
              }
              if (frame.str.length == 1) {
                transposeNode.final = true;
              }
              stack.push({
                node: transposeNode,
                editsRemaining: frame.editsRemaining - 1,
                str: charA + frame.str.slice(2)
              });
            }
          }
          return root2;
        };
        lunr2.TokenSet.fromString = function(str) {
          var node = new lunr2.TokenSet(), root2 = node;
          for (var i = 0, len = str.length; i < len; i++) {
            var char = str[i], final = i == len - 1;
            if (char == "*") {
              node.edges[char] = node;
              node.final = final;
            } else {
              var next = new lunr2.TokenSet();
              next.final = final;
              node.edges[char] = next;
              node = next;
            }
          }
          return root2;
        };
        lunr2.TokenSet.prototype.toArray = function() {
          var words = [];
          var stack = [{
            prefix: "",
            node: this
          }];
          while (stack.length) {
            var frame = stack.pop(), edges = Object.keys(frame.node.edges), len = edges.length;
            if (frame.node.final) {
              frame.prefix.charAt(0);
              words.push(frame.prefix);
            }
            for (var i = 0; i < len; i++) {
              var edge = edges[i];
              stack.push({
                prefix: frame.prefix.concat(edge),
                node: frame.node.edges[edge]
              });
            }
          }
          return words;
        };
        lunr2.TokenSet.prototype.toString = function() {
          if (this._str) {
            return this._str;
          }
          var str = this.final ? "1" : "0", labels = Object.keys(this.edges).sort(), len = labels.length;
          for (var i = 0; i < len; i++) {
            var label = labels[i], node = this.edges[label];
            str = str + label + node.id;
          }
          return str;
        };
        lunr2.TokenSet.prototype.intersect = function(b) {
          var output = new lunr2.TokenSet(), frame = void 0;
          var stack = [{
            qNode: b,
            output,
            node: this
          }];
          while (stack.length) {
            frame = stack.pop();
            var qEdges = Object.keys(frame.qNode.edges), qLen = qEdges.length, nEdges = Object.keys(frame.node.edges), nLen = nEdges.length;
            for (var q = 0; q < qLen; q++) {
              var qEdge = qEdges[q];
              for (var n = 0; n < nLen; n++) {
                var nEdge = nEdges[n];
                if (nEdge == qEdge || qEdge == "*") {
                  var node = frame.node.edges[nEdge], qNode = frame.qNode.edges[qEdge], final = node.final && qNode.final, next = void 0;
                  if (nEdge in frame.output.edges) {
                    next = frame.output.edges[nEdge];
                    next.final = next.final || final;
                  } else {
                    next = new lunr2.TokenSet();
                    next.final = final;
                    frame.output.edges[nEdge] = next;
                  }
                  stack.push({
                    qNode,
                    output: next,
                    node
                  });
                }
              }
            }
          }
          return output;
        };
        lunr2.TokenSet.Builder = function() {
          this.previousWord = "";
          this.root = new lunr2.TokenSet();
          this.uncheckedNodes = [];
          this.minimizedNodes = {};
        };
        lunr2.TokenSet.Builder.prototype.insert = function(word) {
          var node, commonPrefix = 0;
          if (word < this.previousWord) {
            throw new Error("Out of order word insertion");
          }
          for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
            if (word[i] != this.previousWord[i])
              break;
            commonPrefix++;
          }
          this.minimize(commonPrefix);
          if (this.uncheckedNodes.length == 0) {
            node = this.root;
          } else {
            node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
          }
          for (var i = commonPrefix; i < word.length; i++) {
            var nextNode = new lunr2.TokenSet(), char = word[i];
            node.edges[char] = nextNode;
            this.uncheckedNodes.push({
              parent: node,
              char,
              child: nextNode
            });
            node = nextNode;
          }
          node.final = true;
          this.previousWord = word;
        };
        lunr2.TokenSet.Builder.prototype.finish = function() {
          this.minimize(0);
        };
        lunr2.TokenSet.Builder.prototype.minimize = function(downTo) {
          for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
            var node = this.uncheckedNodes[i], childKey = node.child.toString();
            if (childKey in this.minimizedNodes) {
              node.parent.edges[node.char] = this.minimizedNodes[childKey];
            } else {
              node.child._str = childKey;
              this.minimizedNodes[childKey] = node.child;
            }
            this.uncheckedNodes.pop();
          }
        };
        lunr2.Index = function(attrs) {
          this.invertedIndex = attrs.invertedIndex;
          this.fieldVectors = attrs.fieldVectors;
          this.tokenSet = attrs.tokenSet;
          this.fields = attrs.fields;
          this.pipeline = attrs.pipeline;
        };
        lunr2.Index.prototype.search = function(queryString) {
          return this.query(function(query) {
            var parser = new lunr2.QueryParser(queryString, query);
            parser.parse();
          });
        };
        lunr2.Index.prototype.query = function(fn) {
          var query = new lunr2.Query(this.fields), matchingFields = /* @__PURE__ */ Object.create(null), queryVectors = /* @__PURE__ */ Object.create(null), termFieldCache = /* @__PURE__ */ Object.create(null), requiredMatches = /* @__PURE__ */ Object.create(null), prohibitedMatches = /* @__PURE__ */ Object.create(null);
          for (var i = 0; i < this.fields.length; i++) {
            queryVectors[this.fields[i]] = new lunr2.Vector();
          }
          fn.call(query, query);
          for (var i = 0; i < query.clauses.length; i++) {
            var clause = query.clauses[i], terms = null, clauseMatches = lunr2.Set.empty;
            if (clause.usePipeline) {
              terms = this.pipeline.runString(clause.term, {
                fields: clause.fields
              });
            } else {
              terms = [clause.term];
            }
            for (var m = 0; m < terms.length; m++) {
              var term = terms[m];
              clause.term = term;
              var termTokenSet = lunr2.TokenSet.fromClause(clause), expandedTerms = this.tokenSet.intersect(termTokenSet).toArray();
              if (expandedTerms.length === 0 && clause.presence === lunr2.Query.presence.REQUIRED) {
                for (var k = 0; k < clause.fields.length; k++) {
                  var field = clause.fields[k];
                  requiredMatches[field] = lunr2.Set.empty;
                }
                break;
              }
              for (var j = 0; j < expandedTerms.length; j++) {
                var expandedTerm = expandedTerms[j], posting = this.invertedIndex[expandedTerm], termIndex = posting._index;
                for (var k = 0; k < clause.fields.length; k++) {
                  var field = clause.fields[k], fieldPosting = posting[field], matchingDocumentRefs = Object.keys(fieldPosting), termField = expandedTerm + "/" + field, matchingDocumentsSet = new lunr2.Set(matchingDocumentRefs);
                  if (clause.presence == lunr2.Query.presence.REQUIRED) {
                    clauseMatches = clauseMatches.union(matchingDocumentsSet);
                    if (requiredMatches[field] === void 0) {
                      requiredMatches[field] = lunr2.Set.complete;
                    }
                  }
                  if (clause.presence == lunr2.Query.presence.PROHIBITED) {
                    if (prohibitedMatches[field] === void 0) {
                      prohibitedMatches[field] = lunr2.Set.empty;
                    }
                    prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet);
                    continue;
                  }
                  queryVectors[field].upsert(termIndex, clause.boost, function(a, b) {
                    return a + b;
                  });
                  if (termFieldCache[termField]) {
                    continue;
                  }
                  for (var l = 0; l < matchingDocumentRefs.length; l++) {
                    var matchingDocumentRef = matchingDocumentRefs[l], matchingFieldRef = new lunr2.FieldRef(matchingDocumentRef, field), metadata = fieldPosting[matchingDocumentRef], fieldMatch;
                    if ((fieldMatch = matchingFields[matchingFieldRef]) === void 0) {
                      matchingFields[matchingFieldRef] = new lunr2.MatchData(expandedTerm, field, metadata);
                    } else {
                      fieldMatch.add(expandedTerm, field, metadata);
                    }
                  }
                  termFieldCache[termField] = true;
                }
              }
            }
            if (clause.presence === lunr2.Query.presence.REQUIRED) {
              for (var k = 0; k < clause.fields.length; k++) {
                var field = clause.fields[k];
                requiredMatches[field] = requiredMatches[field].intersect(clauseMatches);
              }
            }
          }
          var allRequiredMatches = lunr2.Set.complete, allProhibitedMatches = lunr2.Set.empty;
          for (var i = 0; i < this.fields.length; i++) {
            var field = this.fields[i];
            if (requiredMatches[field]) {
              allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field]);
            }
            if (prohibitedMatches[field]) {
              allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field]);
            }
          }
          var matchingFieldRefs = Object.keys(matchingFields), results = [], matches = /* @__PURE__ */ Object.create(null);
          if (query.isNegated()) {
            matchingFieldRefs = Object.keys(this.fieldVectors);
            for (var i = 0; i < matchingFieldRefs.length; i++) {
              var matchingFieldRef = matchingFieldRefs[i];
              var fieldRef = lunr2.FieldRef.fromString(matchingFieldRef);
              matchingFields[matchingFieldRef] = new lunr2.MatchData();
            }
          }
          for (var i = 0; i < matchingFieldRefs.length; i++) {
            var fieldRef = lunr2.FieldRef.fromString(matchingFieldRefs[i]), docRef = fieldRef.docRef;
            if (!allRequiredMatches.contains(docRef)) {
              continue;
            }
            if (allProhibitedMatches.contains(docRef)) {
              continue;
            }
            var fieldVector = this.fieldVectors[fieldRef], score = queryVectors[fieldRef.fieldName].similarity(fieldVector), docMatch;
            if ((docMatch = matches[docRef]) !== void 0) {
              docMatch.score += score;
              docMatch.matchData.combine(matchingFields[fieldRef]);
            } else {
              var match = {
                ref: docRef,
                score,
                matchData: matchingFields[fieldRef]
              };
              matches[docRef] = match;
              results.push(match);
            }
          }
          return results.sort(function(a, b) {
            return b.score - a.score;
          });
        };
        lunr2.Index.prototype.toJSON = function() {
          var invertedIndex = Object.keys(this.invertedIndex).sort().map(function(term) {
            return [term, this.invertedIndex[term]];
          }, this);
          var fieldVectors = Object.keys(this.fieldVectors).map(function(ref) {
            return [ref, this.fieldVectors[ref].toJSON()];
          }, this);
          return {
            version: lunr2.version,
            fields: this.fields,
            fieldVectors,
            invertedIndex,
            pipeline: this.pipeline.toJSON()
          };
        };
        lunr2.Index.load = function(serializedIndex) {
          var attrs = {}, fieldVectors = {}, serializedVectors = serializedIndex.fieldVectors, invertedIndex = /* @__PURE__ */ Object.create(null), serializedInvertedIndex = serializedIndex.invertedIndex, tokenSetBuilder = new lunr2.TokenSet.Builder(), pipeline = lunr2.Pipeline.load(serializedIndex.pipeline);
          if (serializedIndex.version != lunr2.version) {
            lunr2.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr2.version + "' does not match serialized index '" + serializedIndex.version + "'");
          }
          for (var i = 0; i < serializedVectors.length; i++) {
            var tuple = serializedVectors[i], ref = tuple[0], elements = tuple[1];
            fieldVectors[ref] = new lunr2.Vector(elements);
          }
          for (var i = 0; i < serializedInvertedIndex.length; i++) {
            var tuple = serializedInvertedIndex[i], term = tuple[0], posting = tuple[1];
            tokenSetBuilder.insert(term);
            invertedIndex[term] = posting;
          }
          tokenSetBuilder.finish();
          attrs.fields = serializedIndex.fields;
          attrs.fieldVectors = fieldVectors;
          attrs.invertedIndex = invertedIndex;
          attrs.tokenSet = tokenSetBuilder.root;
          attrs.pipeline = pipeline;
          return new lunr2.Index(attrs);
        };
        lunr2.Builder = function() {
          this._ref = "id";
          this._fields = /* @__PURE__ */ Object.create(null);
          this._documents = /* @__PURE__ */ Object.create(null);
          this.invertedIndex = /* @__PURE__ */ Object.create(null);
          this.fieldTermFrequencies = {};
          this.fieldLengths = {};
          this.tokenizer = lunr2.tokenizer;
          this.pipeline = new lunr2.Pipeline();
          this.searchPipeline = new lunr2.Pipeline();
          this.documentCount = 0;
          this._b = 0.75;
          this._k1 = 1.2;
          this.termIndex = 0;
          this.metadataWhitelist = [];
        };
        lunr2.Builder.prototype.ref = function(ref) {
          this._ref = ref;
        };
        lunr2.Builder.prototype.field = function(fieldName, attributes) {
          if (/\//.test(fieldName)) {
            throw new RangeError("Field '" + fieldName + "' contains illegal character '/'");
          }
          this._fields[fieldName] = attributes || {};
        };
        lunr2.Builder.prototype.b = function(number) {
          if (number < 0) {
            this._b = 0;
          } else if (number > 1) {
            this._b = 1;
          } else {
            this._b = number;
          }
        };
        lunr2.Builder.prototype.k1 = function(number) {
          this._k1 = number;
        };
        lunr2.Builder.prototype.add = function(doc, attributes) {
          var docRef = doc[this._ref], fields = Object.keys(this._fields);
          this._documents[docRef] = attributes || {};
          this.documentCount += 1;
          for (var i = 0; i < fields.length; i++) {
            var fieldName = fields[i], extractor = this._fields[fieldName].extractor, field = extractor ? extractor(doc) : doc[fieldName], tokens = this.tokenizer(field, {
              fields: [fieldName]
            }), terms = this.pipeline.run(tokens), fieldRef = new lunr2.FieldRef(docRef, fieldName), fieldTerms = /* @__PURE__ */ Object.create(null);
            this.fieldTermFrequencies[fieldRef] = fieldTerms;
            this.fieldLengths[fieldRef] = 0;
            this.fieldLengths[fieldRef] += terms.length;
            for (var j = 0; j < terms.length; j++) {
              var term = terms[j];
              if (fieldTerms[term] == void 0) {
                fieldTerms[term] = 0;
              }
              fieldTerms[term] += 1;
              if (this.invertedIndex[term] == void 0) {
                var posting = /* @__PURE__ */ Object.create(null);
                posting["_index"] = this.termIndex;
                this.termIndex += 1;
                for (var k = 0; k < fields.length; k++) {
                  posting[fields[k]] = /* @__PURE__ */ Object.create(null);
                }
                this.invertedIndex[term] = posting;
              }
              if (this.invertedIndex[term][fieldName][docRef] == void 0) {
                this.invertedIndex[term][fieldName][docRef] = /* @__PURE__ */ Object.create(null);
              }
              for (var l = 0; l < this.metadataWhitelist.length; l++) {
                var metadataKey = this.metadataWhitelist[l], metadata = term.metadata[metadataKey];
                if (this.invertedIndex[term][fieldName][docRef][metadataKey] == void 0) {
                  this.invertedIndex[term][fieldName][docRef][metadataKey] = [];
                }
                this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata);
              }
            }
          }
        };
        lunr2.Builder.prototype.calculateAverageFieldLengths = function() {
          var fieldRefs = Object.keys(this.fieldLengths), numberOfFields = fieldRefs.length, accumulator = {}, documentsWithField = {};
          for (var i = 0; i < numberOfFields; i++) {
            var fieldRef = lunr2.FieldRef.fromString(fieldRefs[i]), field = fieldRef.fieldName;
            documentsWithField[field] || (documentsWithField[field] = 0);
            documentsWithField[field] += 1;
            accumulator[field] || (accumulator[field] = 0);
            accumulator[field] += this.fieldLengths[fieldRef];
          }
          var fields = Object.keys(this._fields);
          for (var i = 0; i < fields.length; i++) {
            var fieldName = fields[i];
            accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName];
          }
          this.averageFieldLength = accumulator;
        };
        lunr2.Builder.prototype.createFieldVectors = function() {
          var fieldVectors = {}, fieldRefs = Object.keys(this.fieldTermFrequencies), fieldRefsLength = fieldRefs.length, termIdfCache = /* @__PURE__ */ Object.create(null);
          for (var i = 0; i < fieldRefsLength; i++) {
            var fieldRef = lunr2.FieldRef.fromString(fieldRefs[i]), fieldName = fieldRef.fieldName, fieldLength = this.fieldLengths[fieldRef], fieldVector = new lunr2.Vector(), termFrequencies = this.fieldTermFrequencies[fieldRef], terms = Object.keys(termFrequencies), termsLength = terms.length;
            var fieldBoost = this._fields[fieldName].boost || 1, docBoost = this._documents[fieldRef.docRef].boost || 1;
            for (var j = 0; j < termsLength; j++) {
              var term = terms[j], tf = termFrequencies[term], termIndex = this.invertedIndex[term]._index, idf, score, scoreWithPrecision;
              if (termIdfCache[term] === void 0) {
                idf = lunr2.idf(this.invertedIndex[term], this.documentCount);
                termIdfCache[term] = idf;
              } else {
                idf = termIdfCache[term];
              }
              score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf);
              score *= fieldBoost;
              score *= docBoost;
              scoreWithPrecision = Math.round(score * 1e3) / 1e3;
              fieldVector.insert(termIndex, scoreWithPrecision);
            }
            fieldVectors[fieldRef] = fieldVector;
          }
          this.fieldVectors = fieldVectors;
        };
        lunr2.Builder.prototype.createTokenSet = function() {
          this.tokenSet = lunr2.TokenSet.fromArray(
            Object.keys(this.invertedIndex).sort()
          );
        };
        lunr2.Builder.prototype.build = function() {
          this.calculateAverageFieldLengths();
          this.createFieldVectors();
          this.createTokenSet();
          return new lunr2.Index({
            invertedIndex: this.invertedIndex,
            fieldVectors: this.fieldVectors,
            tokenSet: this.tokenSet,
            fields: Object.keys(this._fields),
            pipeline: this.searchPipeline
          });
        };
        lunr2.Builder.prototype.use = function(fn) {
          var args = Array.prototype.slice.call(arguments, 1);
          args.unshift(this);
          fn.apply(this, args);
        };
        lunr2.MatchData = function(term, field, metadata) {
          var clonedMetadata = /* @__PURE__ */ Object.create(null), metadataKeys = Object.keys(metadata || {});
          for (var i = 0; i < metadataKeys.length; i++) {
            var key = metadataKeys[i];
            clonedMetadata[key] = metadata[key].slice();
          }
          this.metadata = /* @__PURE__ */ Object.create(null);
          if (term !== void 0) {
            this.metadata[term] = /* @__PURE__ */ Object.create(null);
            this.metadata[term][field] = clonedMetadata;
          }
        };
        lunr2.MatchData.prototype.combine = function(otherMatchData) {
          var terms = Object.keys(otherMatchData.metadata);
          for (var i = 0; i < terms.length; i++) {
            var term = terms[i], fields = Object.keys(otherMatchData.metadata[term]);
            if (this.metadata[term] == void 0) {
              this.metadata[term] = /* @__PURE__ */ Object.create(null);
            }
            for (var j = 0; j < fields.length; j++) {
              var field = fields[j], keys = Object.keys(otherMatchData.metadata[term][field]);
              if (this.metadata[term][field] == void 0) {
                this.metadata[term][field] = /* @__PURE__ */ Object.create(null);
              }
              for (var k = 0; k < keys.length; k++) {
                var key = keys[k];
                if (this.metadata[term][field][key] == void 0) {
                  this.metadata[term][field][key] = otherMatchData.metadata[term][field][key];
                } else {
                  this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key]);
                }
              }
            }
          }
        };
        lunr2.MatchData.prototype.add = function(term, field, metadata) {
          if (!(term in this.metadata)) {
            this.metadata[term] = /* @__PURE__ */ Object.create(null);
            this.metadata[term][field] = metadata;
            return;
          }
          if (!(field in this.metadata[term])) {
            this.metadata[term][field] = metadata;
            return;
          }
          var metadataKeys = Object.keys(metadata);
          for (var i = 0; i < metadataKeys.length; i++) {
            var key = metadataKeys[i];
            if (key in this.metadata[term][field]) {
              this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key]);
            } else {
              this.metadata[term][field][key] = metadata[key];
            }
          }
        };
        lunr2.Query = function(allFields) {
          this.clauses = [];
          this.allFields = allFields;
        };
        lunr2.Query.wildcard = new String("*");
        lunr2.Query.wildcard.NONE = 0;
        lunr2.Query.wildcard.LEADING = 1;
        lunr2.Query.wildcard.TRAILING = 2;
        lunr2.Query.presence = {
          /**
           * Term's presence in a document is optional, this is the default value.
           */
          OPTIONAL: 1,
          /**
           * Term's presence in a document is required, documents that do not contain
           * this term will not be returned.
           */
          REQUIRED: 2,
          /**
           * Term's presence in a document is prohibited, documents that do contain
           * this term will not be returned.
           */
          PROHIBITED: 3
        };
        lunr2.Query.prototype.clause = function(clause) {
          if (!("fields" in clause)) {
            clause.fields = this.allFields;
          }
          if (!("boost" in clause)) {
            clause.boost = 1;
          }
          if (!("usePipeline" in clause)) {
            clause.usePipeline = true;
          }
          if (!("wildcard" in clause)) {
            clause.wildcard = lunr2.Query.wildcard.NONE;
          }
          if (clause.wildcard & lunr2.Query.wildcard.LEADING && clause.term.charAt(0) != lunr2.Query.wildcard) {
            clause.term = "*" + clause.term;
          }
          if (clause.wildcard & lunr2.Query.wildcard.TRAILING && clause.term.slice(-1) != lunr2.Query.wildcard) {
            clause.term = "" + clause.term + "*";
          }
          if (!("presence" in clause)) {
            clause.presence = lunr2.Query.presence.OPTIONAL;
          }
          this.clauses.push(clause);
          return this;
        };
        lunr2.Query.prototype.isNegated = function() {
          for (var i = 0; i < this.clauses.length; i++) {
            if (this.clauses[i].presence != lunr2.Query.presence.PROHIBITED) {
              return false;
            }
          }
          return true;
        };
        lunr2.Query.prototype.term = function(term, options) {
          if (Array.isArray(term)) {
            term.forEach(function(t) {
              this.term(t, lunr2.utils.clone(options));
            }, this);
            return this;
          }
          var clause = options || {};
          clause.term = term.toString();
          this.clause(clause);
          return this;
        };
        lunr2.QueryParseError = function(message, start, end) {
          this.name = "QueryParseError";
          this.message = message;
          this.start = start;
          this.end = end;
        };
        lunr2.QueryParseError.prototype = new Error();
        lunr2.QueryLexer = function(str) {
          this.lexemes = [];
          this.str = str;
          this.length = str.length;
          this.pos = 0;
          this.start = 0;
          this.escapeCharPositions = [];
        };
        lunr2.QueryLexer.prototype.run = function() {
          var state = lunr2.QueryLexer.lexText;
          while (state) {
            state = state(this);
          }
        };
        lunr2.QueryLexer.prototype.sliceString = function() {
          var subSlices = [], sliceStart = this.start, sliceEnd = this.pos;
          for (var i = 0; i < this.escapeCharPositions.length; i++) {
            sliceEnd = this.escapeCharPositions[i];
            subSlices.push(this.str.slice(sliceStart, sliceEnd));
            sliceStart = sliceEnd + 1;
          }
          subSlices.push(this.str.slice(sliceStart, this.pos));
          this.escapeCharPositions.length = 0;
          return subSlices.join("");
        };
        lunr2.QueryLexer.prototype.emit = function(type) {
          this.lexemes.push({
            type,
            str: this.sliceString(),
            start: this.start,
            end: this.pos
          });
          this.start = this.pos;
        };
        lunr2.QueryLexer.prototype.escapeCharacter = function() {
          this.escapeCharPositions.push(this.pos - 1);
          this.pos += 1;
        };
        lunr2.QueryLexer.prototype.next = function() {
          if (this.pos >= this.length) {
            return lunr2.QueryLexer.EOS;
          }
          var char = this.str.charAt(this.pos);
          this.pos += 1;
          return char;
        };
        lunr2.QueryLexer.prototype.width = function() {
          return this.pos - this.start;
        };
        lunr2.QueryLexer.prototype.ignore = function() {
          if (this.start == this.pos) {
            this.pos += 1;
          }
          this.start = this.pos;
        };
        lunr2.QueryLexer.prototype.backup = function() {
          this.pos -= 1;
        };
        lunr2.QueryLexer.prototype.acceptDigitRun = function() {
          var char, charCode;
          do {
            char = this.next();
            charCode = char.charCodeAt(0);
          } while (charCode > 47 && charCode < 58);
          if (char != lunr2.QueryLexer.EOS) {
            this.backup();
          }
        };
        lunr2.QueryLexer.prototype.more = function() {
          return this.pos < this.length;
        };
        lunr2.QueryLexer.EOS = "EOS";
        lunr2.QueryLexer.FIELD = "FIELD";
        lunr2.QueryLexer.TERM = "TERM";
        lunr2.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE";
        lunr2.QueryLexer.BOOST = "BOOST";
        lunr2.QueryLexer.PRESENCE = "PRESENCE";
        lunr2.QueryLexer.lexField = function(lexer) {
          lexer.backup();
          lexer.emit(lunr2.QueryLexer.FIELD);
          lexer.ignore();
          return lunr2.QueryLexer.lexText;
        };
        lunr2.QueryLexer.lexTerm = function(lexer) {
          if (lexer.width() > 1) {
            lexer.backup();
            lexer.emit(lunr2.QueryLexer.TERM);
          }
          lexer.ignore();
          if (lexer.more()) {
            return lunr2.QueryLexer.lexText;
          }
        };
        lunr2.QueryLexer.lexEditDistance = function(lexer) {
          lexer.ignore();
          lexer.acceptDigitRun();
          lexer.emit(lunr2.QueryLexer.EDIT_DISTANCE);
          return lunr2.QueryLexer.lexText;
        };
        lunr2.QueryLexer.lexBoost = function(lexer) {
          lexer.ignore();
          lexer.acceptDigitRun();
          lexer.emit(lunr2.QueryLexer.BOOST);
          return lunr2.QueryLexer.lexText;
        };
        lunr2.QueryLexer.lexEOS = function(lexer) {
          if (lexer.width() > 0) {
            lexer.emit(lunr2.QueryLexer.TERM);
          }
        };
        lunr2.QueryLexer.termSeparator = lunr2.tokenizer.separator;
        lunr2.QueryLexer.lexText = function(lexer) {
          while (true) {
            var char = lexer.next();
            if (char == lunr2.QueryLexer.EOS) {
              return lunr2.QueryLexer.lexEOS;
            }
            if (char.charCodeAt(0) == 92) {
              lexer.escapeCharacter();
              continue;
            }
            if (char == ":") {
              return lunr2.QueryLexer.lexField;
            }
            if (char == "~") {
              lexer.backup();
              if (lexer.width() > 0) {
                lexer.emit(lunr2.QueryLexer.TERM);
              }
              return lunr2.QueryLexer.lexEditDistance;
            }
            if (char == "^") {
              lexer.backup();
              if (lexer.width() > 0) {
                lexer.emit(lunr2.QueryLexer.TERM);
              }
              return lunr2.QueryLexer.lexBoost;
            }
            if (char == "+" && lexer.width() === 1) {
              lexer.emit(lunr2.QueryLexer.PRESENCE);
              return lunr2.QueryLexer.lexText;
            }
            if (char == "-" && lexer.width() === 1) {
              lexer.emit(lunr2.QueryLexer.PRESENCE);
              return lunr2.QueryLexer.lexText;
            }
            if (char.match(lunr2.QueryLexer.termSeparator)) {
              return lunr2.QueryLexer.lexTerm;
            }
          }
        };
        lunr2.QueryParser = function(str, query) {
          this.lexer = new lunr2.QueryLexer(str);
          this.query = query;
          this.currentClause = {};
          this.lexemeIdx = 0;
        };
        lunr2.QueryParser.prototype.parse = function() {
          this.lexer.run();
          this.lexemes = this.lexer.lexemes;
          var state = lunr2.QueryParser.parseClause;
          while (state) {
            state = state(this);
          }
          return this.query;
        };
        lunr2.QueryParser.prototype.peekLexeme = function() {
          return this.lexemes[this.lexemeIdx];
        };
        lunr2.QueryParser.prototype.consumeLexeme = function() {
          var lexeme = this.peekLexeme();
          this.lexemeIdx += 1;
          return lexeme;
        };
        lunr2.QueryParser.prototype.nextClause = function() {
          var completedClause = this.currentClause;
          this.query.clause(completedClause);
          this.currentClause = {};
        };
        lunr2.QueryParser.parseClause = function(parser) {
          var lexeme = parser.peekLexeme();
          if (lexeme == void 0) {
            return;
          }
          switch (lexeme.type) {
            case lunr2.QueryLexer.PRESENCE:
              return lunr2.QueryParser.parsePresence;
            case lunr2.QueryLexer.FIELD:
              return lunr2.QueryParser.parseField;
            case lunr2.QueryLexer.TERM:
              return lunr2.QueryParser.parseTerm;
            default:
              var errorMessage = "expected either a field or a term, found " + lexeme.type;
              if (lexeme.str.length >= 1) {
                errorMessage += " with value '" + lexeme.str + "'";
              }
              throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
          }
        };
        lunr2.QueryParser.parsePresence = function(parser) {
          var lexeme = parser.consumeLexeme();
          if (lexeme == void 0) {
            return;
          }
          switch (lexeme.str) {
            case "-":
              parser.currentClause.presence = lunr2.Query.presence.PROHIBITED;
              break;
            case "+":
              parser.currentClause.presence = lunr2.Query.presence.REQUIRED;
              break;
            default:
              var errorMessage = "unrecognised presence operator'" + lexeme.str + "'";
              throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
          }
          var nextLexeme = parser.peekLexeme();
          if (nextLexeme == void 0) {
            var errorMessage = "expecting term or field, found nothing";
            throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
          }
          switch (nextLexeme.type) {
            case lunr2.QueryLexer.FIELD:
              return lunr2.QueryParser.parseField;
            case lunr2.QueryLexer.TERM:
              return lunr2.QueryParser.parseTerm;
            default:
              var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'";
              throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
          }
        };
        lunr2.QueryParser.parseField = function(parser) {
          var lexeme = parser.consumeLexeme();
          if (lexeme == void 0) {
            return;
          }
          if (parser.query.allFields.indexOf(lexeme.str) == -1) {
            var possibleFields = parser.query.allFields.map(function(f) {
              return "'" + f + "'";
            }).join(", "), errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields;
            throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
          }
          parser.currentClause.fields = [lexeme.str];
          var nextLexeme = parser.peekLexeme();
          if (nextLexeme == void 0) {
            var errorMessage = "expecting term, found nothing";
            throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
          }
          switch (nextLexeme.type) {
            case lunr2.QueryLexer.TERM:
              return lunr2.QueryParser.parseTerm;
            default:
              var errorMessage = "expecting term, found '" + nextLexeme.type + "'";
              throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
          }
        };
        lunr2.QueryParser.parseTerm = function(parser) {
          var lexeme = parser.consumeLexeme();
          if (lexeme == void 0) {
            return;
          }
          parser.currentClause.term = lexeme.str.toLowerCase();
          if (lexeme.str.indexOf("*") != -1) {
            parser.currentClause.usePipeline = false;
          }
          var nextLexeme = parser.peekLexeme();
          if (nextLexeme == void 0) {
            parser.nextClause();
            return;
          }
          switch (nextLexeme.type) {
            case lunr2.QueryLexer.TERM:
              parser.nextClause();
              return lunr2.QueryParser.parseTerm;
            case lunr2.QueryLexer.FIELD:
              parser.nextClause();
              return lunr2.QueryParser.parseField;
            case lunr2.QueryLexer.EDIT_DISTANCE:
              return lunr2.QueryParser.parseEditDistance;
            case lunr2.QueryLexer.BOOST:
              return lunr2.QueryParser.parseBoost;
            case lunr2.QueryLexer.PRESENCE:
              parser.nextClause();
              return lunr2.QueryParser.parsePresence;
            default:
              var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
              throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
          }
        };
        lunr2.QueryParser.parseEditDistance = function(parser) {
          var lexeme = parser.consumeLexeme();
          if (lexeme == void 0) {
            return;
          }
          var editDistance = parseInt(lexeme.str, 10);
          if (isNaN(editDistance)) {
            var errorMessage = "edit distance must be numeric";
            throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
          }
          parser.currentClause.editDistance = editDistance;
          var nextLexeme = parser.peekLexeme();
          if (nextLexeme == void 0) {
            parser.nextClause();
            return;
          }
          switch (nextLexeme.type) {
            case lunr2.QueryLexer.TERM:
              parser.nextClause();
              return lunr2.QueryParser.parseTerm;
            case lunr2.QueryLexer.FIELD:
              parser.nextClause();
              return lunr2.QueryParser.parseField;
            case lunr2.QueryLexer.EDIT_DISTANCE:
              return lunr2.QueryParser.parseEditDistance;
            case lunr2.QueryLexer.BOOST:
              return lunr2.QueryParser.parseBoost;
            case lunr2.QueryLexer.PRESENCE:
              parser.nextClause();
              return lunr2.QueryParser.parsePresence;
            default:
              var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
              throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
          }
        };
        lunr2.QueryParser.parseBoost = function(parser) {
          var lexeme = parser.consumeLexeme();
          if (lexeme == void 0) {
            return;
          }
          var boost = parseInt(lexeme.str, 10);
          if (isNaN(boost)) {
            var errorMessage = "boost must be numeric";
            throw new lunr2.QueryParseError(errorMessage, lexeme.start, lexeme.end);
          }
          parser.currentClause.boost = boost;
          var nextLexeme = parser.peekLexeme();
          if (nextLexeme == void 0) {
            parser.nextClause();
            return;
          }
          switch (nextLexeme.type) {
            case lunr2.QueryLexer.TERM:
              parser.nextClause();
              return lunr2.QueryParser.parseTerm;
            case lunr2.QueryLexer.FIELD:
              parser.nextClause();
              return lunr2.QueryParser.parseField;
            case lunr2.QueryLexer.EDIT_DISTANCE:
              return lunr2.QueryParser.parseEditDistance;
            case lunr2.QueryLexer.BOOST:
              return lunr2.QueryParser.parseBoost;
            case lunr2.QueryLexer.PRESENCE:
              parser.nextClause();
              return lunr2.QueryParser.parsePresence;
            default:
              var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
              throw new lunr2.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
          }
        };
        (function(root2, factory) {
          if (typeof define === "function" && define.amd) {
            define(factory);
          } else if (typeof exports === "object") {
            module.exports = factory();
          } else {
            root2.lunr = factory();
          }
        })(this, function() {
          return lunr2;
        });
      })();
    }
  });

  // node_modules/lunr-languages/lunr.stemmer.support.js
  var require_lunr_stemmer_support = __commonJS({
    "node_modules/lunr-languages/lunr.stemmer.support.js"(exports, module) {
      (function(root2, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          factory()(root2.lunr);
        }
      })(exports, function() {
        return function(lunr2) {
          lunr2.stemmerSupport = {
            Among: function(s, substring_i, result, method) {
              this.toCharArray = function(s2) {
                var sLength = s2.length, charArr = new Array(sLength);
                for (var i = 0; i < sLength; i++)
                  charArr[i] = s2.charCodeAt(i);
                return charArr;
              };
              if (!s && s != "" || !substring_i && substring_i != 0 || !result)
                throw "Bad Among initialisation: s:" + s + ", substring_i: " + substring_i + ", result: " + result;
              this.s_size = s.length;
              this.s = this.toCharArray(s);
              this.substring_i = substring_i;
              this.result = result;
              this.method = method;
            },
            SnowballProgram: function() {
              var current;
              return {
                bra: 0,
                ket: 0,
                limit: 0,
                cursor: 0,
                limit_backward: 0,
                setCurrent: function(word) {
                  current = word;
                  this.cursor = 0;
                  this.limit = word.length;
                  this.limit_backward = 0;
                  this.bra = this.cursor;
                  this.ket = this.limit;
                },
                getCurrent: function() {
                  var result = current;
                  current = null;
                  return result;
                },
                in_grouping: function(s, min, max) {
                  if (this.cursor < this.limit) {
                    var ch = current.charCodeAt(this.cursor);
                    if (ch <= max && ch >= min) {
                      ch -= min;
                      if (s[ch >> 3] & 1 << (ch & 7)) {
                        this.cursor++;
                        return true;
                      }
                    }
                  }
                  return false;
                },
                in_grouping_b: function(s, min, max) {
                  if (this.cursor > this.limit_backward) {
                    var ch = current.charCodeAt(this.cursor - 1);
                    if (ch <= max && ch >= min) {
                      ch -= min;
                      if (s[ch >> 3] & 1 << (ch & 7)) {
                        this.cursor--;
                        return true;
                      }
                    }
                  }
                  return false;
                },
                out_grouping: function(s, min, max) {
                  if (this.cursor < this.limit) {
                    var ch = current.charCodeAt(this.cursor);
                    if (ch > max || ch < min) {
                      this.cursor++;
                      return true;
                    }
                    ch -= min;
                    if (!(s[ch >> 3] & 1 << (ch & 7))) {
                      this.cursor++;
                      return true;
                    }
                  }
                  return false;
                },
                out_grouping_b: function(s, min, max) {
                  if (this.cursor > this.limit_backward) {
                    var ch = current.charCodeAt(this.cursor - 1);
                    if (ch > max || ch < min) {
                      this.cursor--;
                      return true;
                    }
                    ch -= min;
                    if (!(s[ch >> 3] & 1 << (ch & 7))) {
                      this.cursor--;
                      return true;
                    }
                  }
                  return false;
                },
                eq_s: function(s_size, s) {
                  if (this.limit - this.cursor < s_size)
                    return false;
                  for (var i = 0; i < s_size; i++)
                    if (current.charCodeAt(this.cursor + i) != s.charCodeAt(i))
                      return false;
                  this.cursor += s_size;
                  return true;
                },
                eq_s_b: function(s_size, s) {
                  if (this.cursor - this.limit_backward < s_size)
                    return false;
                  for (var i = 0; i < s_size; i++)
                    if (current.charCodeAt(this.cursor - s_size + i) != s.charCodeAt(i))
                      return false;
                  this.cursor -= s_size;
                  return true;
                },
                find_among: function(v, v_size) {
                  var i = 0, j = v_size, c = this.cursor, l = this.limit, common_i = 0, common_j = 0, first_key_inspected = false;
                  while (true) {
                    var k = i + (j - i >> 1), diff = 0, common = common_i < common_j ? common_i : common_j, w = v[k];
                    for (var i2 = common; i2 < w.s_size; i2++) {
                      if (c + common == l) {
                        diff = -1;
                        break;
                      }
                      diff = current.charCodeAt(c + common) - w.s[i2];
                      if (diff)
                        break;
                      common++;
                    }
                    if (diff < 0) {
                      j = k;
                      common_j = common;
                    } else {
                      i = k;
                      common_i = common;
                    }
                    if (j - i <= 1) {
                      if (i > 0 || j == i || first_key_inspected)
                        break;
                      first_key_inspected = true;
                    }
                  }
                  while (true) {
                    var w = v[i];
                    if (common_i >= w.s_size) {
                      this.cursor = c + w.s_size;
                      if (!w.method)
                        return w.result;
                      var res = w.method();
                      this.cursor = c + w.s_size;
                      if (res)
                        return w.result;
                    }
                    i = w.substring_i;
                    if (i < 0)
                      return 0;
                  }
                },
                find_among_b: function(v, v_size) {
                  var i = 0, j = v_size, c = this.cursor, lb = this.limit_backward, common_i = 0, common_j = 0, first_key_inspected = false;
                  while (true) {
                    var k = i + (j - i >> 1), diff = 0, common = common_i < common_j ? common_i : common_j, w = v[k];
                    for (var i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
                      if (c - common == lb) {
                        diff = -1;
                        break;
                      }
                      diff = current.charCodeAt(c - 1 - common) - w.s[i2];
                      if (diff)
                        break;
                      common++;
                    }
                    if (diff < 0) {
                      j = k;
                      common_j = common;
                    } else {
                      i = k;
                      common_i = common;
                    }
                    if (j - i <= 1) {
                      if (i > 0 || j == i || first_key_inspected)
                        break;
                      first_key_inspected = true;
                    }
                  }
                  while (true) {
                    var w = v[i];
                    if (common_i >= w.s_size) {
                      this.cursor = c - w.s_size;
                      if (!w.method)
                        return w.result;
                      var res = w.method();
                      this.cursor = c - w.s_size;
                      if (res)
                        return w.result;
                    }
                    i = w.substring_i;
                    if (i < 0)
                      return 0;
                  }
                },
                replace_s: function(c_bra, c_ket, s) {
                  var adjustment = s.length - (c_ket - c_bra), left = current.substring(0, c_bra), right = current.substring(c_ket);
                  current = left + s + right;
                  this.limit += adjustment;
                  if (this.cursor >= c_ket)
                    this.cursor += adjustment;
                  else if (this.cursor > c_bra)
                    this.cursor = c_bra;
                  return adjustment;
                },
                slice_check: function() {
                  if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit || this.limit > current.length)
                    throw "faulty slice operation";
                },
                slice_from: function(s) {
                  this.slice_check();
                  this.replace_s(this.bra, this.ket, s);
                },
                slice_del: function() {
                  this.slice_from("");
                },
                insert: function(c_bra, c_ket, s) {
                  var adjustment = this.replace_s(c_bra, c_ket, s);
                  if (c_bra <= this.bra)
                    this.bra += adjustment;
                  if (c_bra <= this.ket)
                    this.ket += adjustment;
                },
                slice_to: function() {
                  this.slice_check();
                  return current.substring(this.bra, this.ket);
                },
                eq_v_b: function(s) {
                  return this.eq_s_b(s.length, s);
                }
              };
            }
          };
          lunr2.trimmerSupport = {
            generateTrimmer: function(wordCharacters) {
              var startRegex = new RegExp("^[^" + wordCharacters + "]+");
              var endRegex = new RegExp("[^" + wordCharacters + "]+$");
              return function(token) {
                if (typeof token.update === "function") {
                  return token.update(function(s) {
                    return s.replace(startRegex, "").replace(endRegex, "");
                  });
                } else {
                  return token.replace(startRegex, "").replace(endRegex, "");
                }
              };
            }
          };
        };
      });
    }
  });

  // node_modules/lunr-languages/tinyseg.js
  var require_tinyseg = __commonJS({
    "node_modules/lunr-languages/tinyseg.js"(exports, module) {
      (function(root2, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          factory()(root2.lunr);
        }
      })(exports, function() {
        return function(lunr2) {
          function TinySegmenter() {
            var patterns = {
              "[\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u5104\u5146]": "M",
              "[\u4E00-\u9FA0\u3005\u3006\u30F5\u30F6]": "H",
              "[\u3041-\u3093]": "I",
              "[\u30A1-\u30F4\u30FC\uFF71-\uFF9D\uFF9E\uFF70]": "K",
              "[a-zA-Z\uFF41-\uFF5A\uFF21-\uFF3A]": "A",
              "[0-9\uFF10-\uFF19]": "N"
            };
            this.chartype_ = [];
            for (var i in patterns) {
              var regexp = new RegExp(i);
              this.chartype_.push([regexp, patterns[i]]);
            }
            this.BIAS__ = -332;
            this.BC1__ = { "HH": 6, "II": 2461, "KH": 406, "OH": -1378 };
            this.BC2__ = { "AA": -3267, "AI": 2744, "AN": -878, "HH": -4070, "HM": -1711, "HN": 4012, "HO": 3761, "IA": 1327, "IH": -1184, "II": -1332, "IK": 1721, "IO": 5492, "KI": 3831, "KK": -8741, "MH": -3132, "MK": 3334, "OO": -2920 };
            this.BC3__ = { "HH": 996, "HI": 626, "HK": -721, "HN": -1307, "HO": -836, "IH": -301, "KK": 2762, "MK": 1079, "MM": 4034, "OA": -1652, "OH": 266 };
            this.BP1__ = { "BB": 295, "OB": 304, "OO": -125, "UB": 352 };
            this.BP2__ = { "BO": 60, "OO": -1762 };
            this.BQ1__ = { "BHH": 1150, "BHM": 1521, "BII": -1158, "BIM": 886, "BMH": 1208, "BNH": 449, "BOH": -91, "BOO": -2597, "OHI": 451, "OIH": -296, "OKA": 1851, "OKH": -1020, "OKK": 904, "OOO": 2965 };
            this.BQ2__ = { "BHH": 118, "BHI": -1159, "BHM": 466, "BIH": -919, "BKK": -1720, "BKO": 864, "OHH": -1139, "OHM": -181, "OIH": 153, "UHI": -1146 };
            this.BQ3__ = { "BHH": -792, "BHI": 2664, "BII": -299, "BKI": 419, "BMH": 937, "BMM": 8335, "BNN": 998, "BOH": 775, "OHH": 2174, "OHM": 439, "OII": 280, "OKH": 1798, "OKI": -793, "OKO": -2242, "OMH": -2402, "OOO": 11699 };
            this.BQ4__ = { "BHH": -3895, "BIH": 3761, "BII": -4654, "BIK": 1348, "BKK": -1806, "BMI": -3385, "BOO": -12396, "OAH": 926, "OHH": 266, "OHK": -2036, "ONN": -973 };
            this.BW1__ = { ",\u3068": 660, ",\u540C": 727, "B1\u3042": 1404, "B1\u540C": 542, "\u3001\u3068": 660, "\u3001\u540C": 727, "\u300D\u3068": 1682, "\u3042\u3063": 1505, "\u3044\u3046": 1743, "\u3044\u3063": -2055, "\u3044\u308B": 672, "\u3046\u3057": -4817, "\u3046\u3093": 665, "\u304B\u3089": 3472, "\u304C\u3089": 600, "\u3053\u3046": -790, "\u3053\u3068": 2083, "\u3053\u3093": -1262, "\u3055\u3089": -4143, "\u3055\u3093": 4573, "\u3057\u305F": 2641, "\u3057\u3066": 1104, "\u3059\u3067": -3399, "\u305D\u3053": 1977, "\u305D\u308C": -871, "\u305F\u3061": 1122, "\u305F\u3081": 601, "\u3063\u305F": 3463, "\u3064\u3044": -802, "\u3066\u3044": 805, "\u3066\u304D": 1249, "\u3067\u304D": 1127, "\u3067\u3059": 3445, "\u3067\u306F": 844, "\u3068\u3044": -4915, "\u3068\u307F": 1922, "\u3069\u3053": 3887, "\u306A\u3044": 5713, "\u306A\u3063": 3015, "\u306A\u3069": 7379, "\u306A\u3093": -1113, "\u306B\u3057": 2468, "\u306B\u306F": 1498, "\u306B\u3082": 1671, "\u306B\u5BFE": -912, "\u306E\u4E00": -501, "\u306E\u4E2D": 741, "\u307E\u305B": 2448, "\u307E\u3067": 1711, "\u307E\u307E": 2600, "\u307E\u308B": -2155, "\u3084\u3080": -1947, "\u3088\u3063": -2565, "\u308C\u305F": 2369, "\u308C\u3067": -913, "\u3092\u3057": 1860, "\u3092\u898B": 731, "\u4EA1\u304F": -1886, "\u4EAC\u90FD": 2558, "\u53D6\u308A": -2784, "\u5927\u304D": -2604, "\u5927\u962A": 1497, "\u5E73\u65B9": -2314, "\u5F15\u304D": -1336, "\u65E5\u672C": -195, "\u672C\u5F53": -2423, "\u6BCE\u65E5": -2113, "\u76EE\u6307": -724, "\uFF22\uFF11\u3042": 1404, "\uFF22\uFF11\u540C": 542, "\uFF63\u3068": 1682 };
            this.BW2__ = { "..": -11822, "11": -669, "\u2015\u2015": -5730, "\u2212\u2212": -13175, "\u3044\u3046": -1609, "\u3046\u304B": 2490, "\u304B\u3057": -1350, "\u304B\u3082": -602, "\u304B\u3089": -7194, "\u304B\u308C": 4612, "\u304C\u3044": 853, "\u304C\u3089": -3198, "\u304D\u305F": 1941, "\u304F\u306A": -1597, "\u3053\u3068": -8392, "\u3053\u306E": -4193, "\u3055\u305B": 4533, "\u3055\u308C": 13168, "\u3055\u3093": -3977, "\u3057\u3044": -1819, "\u3057\u304B": -545, "\u3057\u305F": 5078, "\u3057\u3066": 972, "\u3057\u306A": 939, "\u305D\u306E": -3744, "\u305F\u3044": -1253, "\u305F\u305F": -662, "\u305F\u3060": -3857, "\u305F\u3061": -786, "\u305F\u3068": 1224, "\u305F\u306F": -939, "\u3063\u305F": 4589, "\u3063\u3066": 1647, "\u3063\u3068": -2094, "\u3066\u3044": 6144, "\u3066\u304D": 3640, "\u3066\u304F": 2551, "\u3066\u306F": -3110, "\u3066\u3082": -3065, "\u3067\u3044": 2666, "\u3067\u304D": -1528, "\u3067\u3057": -3828, "\u3067\u3059": -4761, "\u3067\u3082": -4203, "\u3068\u3044": 1890, "\u3068\u3053": -1746, "\u3068\u3068": -2279, "\u3068\u306E": 720, "\u3068\u307F": 5168, "\u3068\u3082": -3941, "\u306A\u3044": -2488, "\u306A\u304C": -1313, "\u306A\u3069": -6509, "\u306A\u306E": 2614, "\u306A\u3093": 3099, "\u306B\u304A": -1615, "\u306B\u3057": 2748, "\u306B\u306A": 2454, "\u306B\u3088": -7236, "\u306B\u5BFE": -14943, "\u306B\u5F93": -4688, "\u306B\u95A2": -11388, "\u306E\u304B": 2093, "\u306E\u3067": -7059, "\u306E\u306B": -6041, "\u306E\u306E": -6125, "\u306F\u3044": 1073, "\u306F\u304C": -1033, "\u306F\u305A": -2532, "\u3070\u308C": 1813, "\u307E\u3057": -1316, "\u307E\u3067": -6621, "\u307E\u308C": 5409, "\u3081\u3066": -3153, "\u3082\u3044": 2230, "\u3082\u306E": -10713, "\u3089\u304B": -944, "\u3089\u3057": -1611, "\u3089\u306B": -1897, "\u308A\u3057": 651, "\u308A\u307E": 1620, "\u308C\u305F": 4270, "\u308C\u3066": 849, "\u308C\u3070": 4114, "\u308D\u3046": 6067, "\u308F\u308C": 7901, "\u3092\u901A": -11877, "\u3093\u3060": 728, "\u3093\u306A": -4115, "\u4E00\u4EBA": 602, "\u4E00\u65B9": -1375, "\u4E00\u65E5": 970, "\u4E00\u90E8": -1051, "\u4E0A\u304C": -4479, "\u4F1A\u793E": -1116, "\u51FA\u3066": 2163, "\u5206\u306E": -7758, "\u540C\u515A": 970, "\u540C\u65E5": -913, "\u5927\u962A": -2471, "\u59D4\u54E1": -1250, "\u5C11\u306A": -1050, "\u5E74\u5EA6": -8669, "\u5E74\u9593": -1626, "\u5E9C\u770C": -2363, "\u624B\u6A29": -1982, "\u65B0\u805E": -4066, "\u65E5\u65B0": -722, "\u65E5\u672C": -7068, "\u65E5\u7C73": 3372, "\u66DC\u65E5": -601, "\u671D\u9BAE": -2355, "\u672C\u4EBA": -2697, "\u6771\u4EAC": -1543, "\u7136\u3068": -1384, "\u793E\u4F1A": -1276, "\u7ACB\u3066": -990, "\u7B2C\u306B": -1612, "\u7C73\u56FD": -4268, "\uFF11\uFF11": -669 };
            this.BW3__ = { "\u3042\u305F": -2194, "\u3042\u308A": 719, "\u3042\u308B": 3846, "\u3044.": -1185, "\u3044\u3002": -1185, "\u3044\u3044": 5308, "\u3044\u3048": 2079, "\u3044\u304F": 3029, "\u3044\u305F": 2056, "\u3044\u3063": 1883, "\u3044\u308B": 5600, "\u3044\u308F": 1527, "\u3046\u3061": 1117, "\u3046\u3068": 4798, "\u3048\u3068": 1454, "\u304B.": 2857, "\u304B\u3002": 2857, "\u304B\u3051": -743, "\u304B\u3063": -4098, "\u304B\u306B": -669, "\u304B\u3089": 6520, "\u304B\u308A": -2670, "\u304C,": 1816, "\u304C\u3001": 1816, "\u304C\u304D": -4855, "\u304C\u3051": -1127, "\u304C\u3063": -913, "\u304C\u3089": -4977, "\u304C\u308A": -2064, "\u304D\u305F": 1645, "\u3051\u3069": 1374, "\u3053\u3068": 7397, "\u3053\u306E": 1542, "\u3053\u308D": -2757, "\u3055\u3044": -714, "\u3055\u3092": 976, "\u3057,": 1557, "\u3057\u3001": 1557, "\u3057\u3044": -3714, "\u3057\u305F": 3562, "\u3057\u3066": 1449, "\u3057\u306A": 2608, "\u3057\u307E": 1200, "\u3059.": -1310, "\u3059\u3002": -1310, "\u3059\u308B": 6521, "\u305A,": 3426, "\u305A\u3001": 3426, "\u305A\u306B": 841, "\u305D\u3046": 428, "\u305F.": 8875, "\u305F\u3002": 8875, "\u305F\u3044": -594, "\u305F\u306E": 812, "\u305F\u308A": -1183, "\u305F\u308B": -853, "\u3060.": 4098, "\u3060\u3002": 4098, "\u3060\u3063": 1004, "\u3063\u305F": -4748, "\u3063\u3066": 300, "\u3066\u3044": 6240, "\u3066\u304A": 855, "\u3066\u3082": 302, "\u3067\u3059": 1437, "\u3067\u306B": -1482, "\u3067\u306F": 2295, "\u3068\u3046": -1387, "\u3068\u3057": 2266, "\u3068\u306E": 541, "\u3068\u3082": -3543, "\u3069\u3046": 4664, "\u306A\u3044": 1796, "\u306A\u304F": -903, "\u306A\u3069": 2135, "\u306B,": -1021, "\u306B\u3001": -1021, "\u306B\u3057": 1771, "\u306B\u306A": 1906, "\u306B\u306F": 2644, "\u306E,": -724, "\u306E\u3001": -724, "\u306E\u5B50": -1e3, "\u306F,": 1337, "\u306F\u3001": 1337, "\u3079\u304D": 2181, "\u307E\u3057": 1113, "\u307E\u3059": 6943, "\u307E\u3063": -1549, "\u307E\u3067": 6154, "\u307E\u308C": -793, "\u3089\u3057": 1479, "\u3089\u308C": 6820, "\u308B\u308B": 3818, "\u308C,": 854, "\u308C\u3001": 854, "\u308C\u305F": 1850, "\u308C\u3066": 1375, "\u308C\u3070": -3246, "\u308C\u308B": 1091, "\u308F\u308C": -605, "\u3093\u3060": 606, "\u3093\u3067": 798, "\u30AB\u6708": 990, "\u4F1A\u8B70": 860, "\u5165\u308A": 1232, "\u5927\u4F1A": 2217, "\u59CB\u3081": 1681, "\u5E02": 965, "\u65B0\u805E": -5055, "\u65E5,": 974, "\u65E5\u3001": 974, "\u793E\u4F1A": 2024, "\uFF76\u6708": 990 };
            this.TC1__ = { "AAA": 1093, "HHH": 1029, "HHM": 580, "HII": 998, "HOH": -390, "HOM": -331, "IHI": 1169, "IOH": -142, "IOI": -1015, "IOM": 467, "MMH": 187, "OOI": -1832 };
            this.TC2__ = { "HHO": 2088, "HII": -1023, "HMM": -1154, "IHI": -1965, "KKH": 703, "OII": -2649 };
            this.TC3__ = { "AAA": -294, "HHH": 346, "HHI": -341, "HII": -1088, "HIK": 731, "HOH": -1486, "IHH": 128, "IHI": -3041, "IHO": -1935, "IIH": -825, "IIM": -1035, "IOI": -542, "KHH": -1216, "KKA": 491, "KKH": -1217, "KOK": -1009, "MHH": -2694, "MHM": -457, "MHO": 123, "MMH": -471, "NNH": -1689, "NNO": 662, "OHO": -3393 };
            this.TC4__ = { "HHH": -203, "HHI": 1344, "HHK": 365, "HHM": -122, "HHN": 182, "HHO": 669, "HIH": 804, "HII": 679, "HOH": 446, "IHH": 695, "IHO": -2324, "IIH": 321, "III": 1497, "IIO": 656, "IOO": 54, "KAK": 4845, "KKA": 3386, "KKK": 3065, "MHH": -405, "MHI": 201, "MMH": -241, "MMM": 661, "MOM": 841 };
            this.TQ1__ = { "BHHH": -227, "BHHI": 316, "BHIH": -132, "BIHH": 60, "BIII": 1595, "BNHH": -744, "BOHH": 225, "BOOO": -908, "OAKK": 482, "OHHH": 281, "OHIH": 249, "OIHI": 200, "OIIH": -68 };
            this.TQ2__ = { "BIHH": -1401, "BIII": -1033, "BKAK": -543, "BOOO": -5591 };
            this.TQ3__ = { "BHHH": 478, "BHHM": -1073, "BHIH": 222, "BHII": -504, "BIIH": -116, "BIII": -105, "BMHI": -863, "BMHM": -464, "BOMH": 620, "OHHH": 346, "OHHI": 1729, "OHII": 997, "OHMH": 481, "OIHH": 623, "OIIH": 1344, "OKAK": 2792, "OKHH": 587, "OKKA": 679, "OOHH": 110, "OOII": -685 };
            this.TQ4__ = { "BHHH": -721, "BHHM": -3604, "BHII": -966, "BIIH": -607, "BIII": -2181, "OAAA": -2763, "OAKK": 180, "OHHH": -294, "OHHI": 2446, "OHHO": 480, "OHIH": -1573, "OIHH": 1935, "OIHI": -493, "OIIH": 626, "OIII": -4007, "OKAK": -8156 };
            this.TW1__ = { "\u306B\u3064\u3044": -4681, "\u6771\u4EAC\u90FD": 2026 };
            this.TW2__ = { "\u3042\u308B\u7A0B": -2049, "\u3044\u3063\u305F": -1256, "\u3053\u308D\u304C": -2434, "\u3057\u3087\u3046": 3873, "\u305D\u306E\u5F8C": -4430, "\u3060\u3063\u3066": -1049, "\u3066\u3044\u305F": 1833, "\u3068\u3057\u3066": -4657, "\u3068\u3082\u306B": -4517, "\u3082\u306E\u3067": 1882, "\u4E00\u6C17\u306B": -792, "\u521D\u3081\u3066": -1512, "\u540C\u6642\u306B": -8097, "\u5927\u304D\u306A": -1255, "\u5BFE\u3057\u3066": -2721, "\u793E\u4F1A\u515A": -3216 };
            this.TW3__ = { "\u3044\u305F\u3060": -1734, "\u3057\u3066\u3044": 1314, "\u3068\u3057\u3066": -4314, "\u306B\u3064\u3044": -5483, "\u306B\u3068\u3063": -5989, "\u306B\u5F53\u305F": -6247, "\u306E\u3067,": -727, "\u306E\u3067\u3001": -727, "\u306E\u3082\u306E": -600, "\u308C\u304B\u3089": -3752, "\u5341\u4E8C\u6708": -2287 };
            this.TW4__ = { "\u3044\u3046.": 8576, "\u3044\u3046\u3002": 8576, "\u304B\u3089\u306A": -2348, "\u3057\u3066\u3044": 2958, "\u305F\u304C,": 1516, "\u305F\u304C\u3001": 1516, "\u3066\u3044\u308B": 1538, "\u3068\u3044\u3046": 1349, "\u307E\u3057\u305F": 5543, "\u307E\u305B\u3093": 1097, "\u3088\u3046\u3068": -4258, "\u3088\u308B\u3068": 5865 };
            this.UC1__ = { "A": 484, "K": 93, "M": 645, "O": -505 };
            this.UC2__ = { "A": 819, "H": 1059, "I": 409, "M": 3987, "N": 5775, "O": 646 };
            this.UC3__ = { "A": -1370, "I": 2311 };
            this.UC4__ = { "A": -2643, "H": 1809, "I": -1032, "K": -3450, "M": 3565, "N": 3876, "O": 6646 };
            this.UC5__ = { "H": 313, "I": -1238, "K": -799, "M": 539, "O": -831 };
            this.UC6__ = { "H": -506, "I": -253, "K": 87, "M": 247, "O": -387 };
            this.UP1__ = { "O": -214 };
            this.UP2__ = { "B": 69, "O": 935 };
            this.UP3__ = { "B": 189 };
            this.UQ1__ = { "BH": 21, "BI": -12, "BK": -99, "BN": 142, "BO": -56, "OH": -95, "OI": 477, "OK": 410, "OO": -2422 };
            this.UQ2__ = { "BH": 216, "BI": 113, "OK": 1759 };
            this.UQ3__ = { "BA": -479, "BH": 42, "BI": 1913, "BK": -7198, "BM": 3160, "BN": 6427, "BO": 14761, "OI": -827, "ON": -3212 };
            this.UW1__ = { ",": 156, "\u3001": 156, "\u300C": -463, "\u3042": -941, "\u3046": -127, "\u304C": -553, "\u304D": 121, "\u3053": 505, "\u3067": -201, "\u3068": -547, "\u3069": -123, "\u306B": -789, "\u306E": -185, "\u306F": -847, "\u3082": -466, "\u3084": -470, "\u3088": 182, "\u3089": -292, "\u308A": 208, "\u308C": 169, "\u3092": -446, "\u3093": -137, "\u30FB": -135, "\u4E3B": -402, "\u4EAC": -268, "\u533A": -912, "\u5348": 871, "\u56FD": -460, "\u5927": 561, "\u59D4": 729, "\u5E02": -411, "\u65E5": -141, "\u7406": 361, "\u751F": -408, "\u770C": -386, "\u90FD": -718, "\uFF62": -463, "\uFF65": -135 };
            this.UW2__ = { ",": -829, "\u3001": -829, "\u3007": 892, "\u300C": -645, "\u300D": 3145, "\u3042": -538, "\u3044": 505, "\u3046": 134, "\u304A": -502, "\u304B": 1454, "\u304C": -856, "\u304F": -412, "\u3053": 1141, "\u3055": 878, "\u3056": 540, "\u3057": 1529, "\u3059": -675, "\u305B": 300, "\u305D": -1011, "\u305F": 188, "\u3060": 1837, "\u3064": -949, "\u3066": -291, "\u3067": -268, "\u3068": -981, "\u3069": 1273, "\u306A": 1063, "\u306B": -1764, "\u306E": 130, "\u306F": -409, "\u3072": -1273, "\u3079": 1261, "\u307E": 600, "\u3082": -1263, "\u3084": -402, "\u3088": 1639, "\u308A": -579, "\u308B": -694, "\u308C": 571, "\u3092": -2516, "\u3093": 2095, "\u30A2": -587, "\u30AB": 306, "\u30AD": 568, "\u30C3": 831, "\u4E09": -758, "\u4E0D": -2150, "\u4E16": -302, "\u4E2D": -968, "\u4E3B": -861, "\u4E8B": 492, "\u4EBA": -123, "\u4F1A": 978, "\u4FDD": 362, "\u5165": 548, "\u521D": -3025, "\u526F": -1566, "\u5317": -3414, "\u533A": -422, "\u5927": -1769, "\u5929": -865, "\u592A": -483, "\u5B50": -1519, "\u5B66": 760, "\u5B9F": 1023, "\u5C0F": -2009, "\u5E02": -813, "\u5E74": -1060, "\u5F37": 1067, "\u624B": -1519, "\u63FA": -1033, "\u653F": 1522, "\u6587": -1355, "\u65B0": -1682, "\u65E5": -1815, "\u660E": -1462, "\u6700": -630, "\u671D": -1843, "\u672C": -1650, "\u6771": -931, "\u679C": -665, "\u6B21": -2378, "\u6C11": -180, "\u6C17": -1740, "\u7406": 752, "\u767A": 529, "\u76EE": -1584, "\u76F8": -242, "\u770C": -1165, "\u7ACB": -763, "\u7B2C": 810, "\u7C73": 509, "\u81EA": -1353, "\u884C": 838, "\u897F": -744, "\u898B": -3874, "\u8ABF": 1010, "\u8B70": 1198, "\u8FBC": 3041, "\u958B": 1758, "\u9593": -1257, "\uFF62": -645, "\uFF63": 3145, "\uFF6F": 831, "\uFF71": -587, "\uFF76": 306, "\uFF77": 568 };
            this.UW3__ = { ",": 4889, "1": -800, "\u2212": -1723, "\u3001": 4889, "\u3005": -2311, "\u3007": 5827, "\u300D": 2670, "\u3013": -3573, "\u3042": -2696, "\u3044": 1006, "\u3046": 2342, "\u3048": 1983, "\u304A": -4864, "\u304B": -1163, "\u304C": 3271, "\u304F": 1004, "\u3051": 388, "\u3052": 401, "\u3053": -3552, "\u3054": -3116, "\u3055": -1058, "\u3057": -395, "\u3059": 584, "\u305B": 3685, "\u305D": -5228, "\u305F": 842, "\u3061": -521, "\u3063": -1444, "\u3064": -1081, "\u3066": 6167, "\u3067": 2318, "\u3068": 1691, "\u3069": -899, "\u306A": -2788, "\u306B": 2745, "\u306E": 4056, "\u306F": 4555, "\u3072": -2171, "\u3075": -1798, "\u3078": 1199, "\u307B": -5516, "\u307E": -4384, "\u307F": -120, "\u3081": 1205, "\u3082": 2323, "\u3084": -788, "\u3088": -202, "\u3089": 727, "\u308A": 649, "\u308B": 5905, "\u308C": 2773, "\u308F": -1207, "\u3092": 6620, "\u3093": -518, "\u30A2": 551, "\u30B0": 1319, "\u30B9": 874, "\u30C3": -1350, "\u30C8": 521, "\u30E0": 1109, "\u30EB": 1591, "\u30ED": 2201, "\u30F3": 278, "\u30FB": -3794, "\u4E00": -1619, "\u4E0B": -1759, "\u4E16": -2087, "\u4E21": 3815, "\u4E2D": 653, "\u4E3B": -758, "\u4E88": -1193, "\u4E8C": 974, "\u4EBA": 2742, "\u4ECA": 792, "\u4ED6": 1889, "\u4EE5": -1368, "\u4F4E": 811, "\u4F55": 4265, "\u4F5C": -361, "\u4FDD": -2439, "\u5143": 4858, "\u515A": 3593, "\u5168": 1574, "\u516C": -3030, "\u516D": 755, "\u5171": -1880, "\u5186": 5807, "\u518D": 3095, "\u5206": 457, "\u521D": 2475, "\u5225": 1129, "\u524D": 2286, "\u526F": 4437, "\u529B": 365, "\u52D5": -949, "\u52D9": -1872, "\u5316": 1327, "\u5317": -1038, "\u533A": 4646, "\u5343": -2309, "\u5348": -783, "\u5354": -1006, "\u53E3": 483, "\u53F3": 1233, "\u5404": 3588, "\u5408": -241, "\u540C": 3906, "\u548C": -837, "\u54E1": 4513, "\u56FD": 642, "\u578B": 1389, "\u5834": 1219, "\u5916": -241, "\u59BB": 2016, "\u5B66": -1356, "\u5B89": -423, "\u5B9F": -1008, "\u5BB6": 1078, "\u5C0F": -513, "\u5C11": -3102, "\u5DDE": 1155, "\u5E02": 3197, "\u5E73": -1804, "\u5E74": 2416, "\u5E83": -1030, "\u5E9C": 1605, "\u5EA6": 1452, "\u5EFA": -2352, "\u5F53": -3885, "\u5F97": 1905, "\u601D": -1291, "\u6027": 1822, "\u6238": -488, "\u6307": -3973, "\u653F": -2013, "\u6559": -1479, "\u6570": 3222, "\u6587": -1489, "\u65B0": 1764, "\u65E5": 2099, "\u65E7": 5792, "\u6628": -661, "\u6642": -1248, "\u66DC": -951, "\u6700": -937, "\u6708": 4125, "\u671F": 360, "\u674E": 3094, "\u6751": 364, "\u6771": -805, "\u6838": 5156, "\u68EE": 2438, "\u696D": 484, "\u6C0F": 2613, "\u6C11": -1694, "\u6C7A": -1073, "\u6CD5": 1868, "\u6D77": -495, "\u7121": 979, "\u7269": 461, "\u7279": -3850, "\u751F": -273, "\u7528": 914, "\u753A": 1215, "\u7684": 7313, "\u76F4": -1835, "\u7701": 792, "\u770C": 6293, "\u77E5": -1528, "\u79C1": 4231, "\u7A0E": 401, "\u7ACB": -960, "\u7B2C": 1201, "\u7C73": 7767, "\u7CFB": 3066, "\u7D04": 3663, "\u7D1A": 1384, "\u7D71": -4229, "\u7DCF": 1163, "\u7DDA": 1255, "\u8005": 6457, "\u80FD": 725, "\u81EA": -2869, "\u82F1": 785, "\u898B": 1044, "\u8ABF": -562, "\u8CA1": -733, "\u8CBB": 1777, "\u8ECA": 1835, "\u8ECD": 1375, "\u8FBC": -1504, "\u901A": -1136, "\u9078": -681, "\u90CE": 1026, "\u90E1": 4404, "\u90E8": 1200, "\u91D1": 2163, "\u9577": 421, "\u958B": -1432, "\u9593": 1302, "\u95A2": -1282, "\u96E8": 2009, "\u96FB": -1045, "\u975E": 2066, "\u99C5": 1620, "\uFF11": -800, "\uFF63": 2670, "\uFF65": -3794, "\uFF6F": -1350, "\uFF71": 551, "\uFF78\uFF9E": 1319, "\uFF7D": 874, "\uFF84": 521, "\uFF91": 1109, "\uFF99": 1591, "\uFF9B": 2201, "\uFF9D": 278 };
            this.UW4__ = { ",": 3930, ".": 3508, "\u2015": -4841, "\u3001": 3930, "\u3002": 3508, "\u3007": 4999, "\u300C": 1895, "\u300D": 3798, "\u3013": -5156, "\u3042": 4752, "\u3044": -3435, "\u3046": -640, "\u3048": -2514, "\u304A": 2405, "\u304B": 530, "\u304C": 6006, "\u304D": -4482, "\u304E": -3821, "\u304F": -3788, "\u3051": -4376, "\u3052": -4734, "\u3053": 2255, "\u3054": 1979, "\u3055": 2864, "\u3057": -843, "\u3058": -2506, "\u3059": -731, "\u305A": 1251, "\u305B": 181, "\u305D": 4091, "\u305F": 5034, "\u3060": 5408, "\u3061": -3654, "\u3063": -5882, "\u3064": -1659, "\u3066": 3994, "\u3067": 7410, "\u3068": 4547, "\u306A": 5433, "\u306B": 6499, "\u306C": 1853, "\u306D": 1413, "\u306E": 7396, "\u306F": 8578, "\u3070": 1940, "\u3072": 4249, "\u3073": -4134, "\u3075": 1345, "\u3078": 6665, "\u3079": -744, "\u307B": 1464, "\u307E": 1051, "\u307F": -2082, "\u3080": -882, "\u3081": -5046, "\u3082": 4169, "\u3083": -2666, "\u3084": 2795, "\u3087": -1544, "\u3088": 3351, "\u3089": -2922, "\u308A": -9726, "\u308B": -14896, "\u308C": -2613, "\u308D": -4570, "\u308F": -1783, "\u3092": 13150, "\u3093": -2352, "\u30AB": 2145, "\u30B3": 1789, "\u30BB": 1287, "\u30C3": -724, "\u30C8": -403, "\u30E1": -1635, "\u30E9": -881, "\u30EA": -541, "\u30EB": -856, "\u30F3": -3637, "\u30FB": -4371, "\u30FC": -11870, "\u4E00": -2069, "\u4E2D": 2210, "\u4E88": 782, "\u4E8B": -190, "\u4E95": -1768, "\u4EBA": 1036, "\u4EE5": 544, "\u4F1A": 950, "\u4F53": -1286, "\u4F5C": 530, "\u5074": 4292, "\u5148": 601, "\u515A": -2006, "\u5171": -1212, "\u5185": 584, "\u5186": 788, "\u521D": 1347, "\u524D": 1623, "\u526F": 3879, "\u529B": -302, "\u52D5": -740, "\u52D9": -2715, "\u5316": 776, "\u533A": 4517, "\u5354": 1013, "\u53C2": 1555, "\u5408": -1834, "\u548C": -681, "\u54E1": -910, "\u5668": -851, "\u56DE": 1500, "\u56FD": -619, "\u5712": -1200, "\u5730": 866, "\u5834": -1410, "\u5841": -2094, "\u58EB": -1413, "\u591A": 1067, "\u5927": 571, "\u5B50": -4802, "\u5B66": -1397, "\u5B9A": -1057, "\u5BFA": -809, "\u5C0F": 1910, "\u5C4B": -1328, "\u5C71": -1500, "\u5CF6": -2056, "\u5DDD": -2667, "\u5E02": 2771, "\u5E74": 374, "\u5E81": -4556, "\u5F8C": 456, "\u6027": 553, "\u611F": 916, "\u6240": -1566, "\u652F": 856, "\u6539": 787, "\u653F": 2182, "\u6559": 704, "\u6587": 522, "\u65B9": -856, "\u65E5": 1798, "\u6642": 1829, "\u6700": 845, "\u6708": -9066, "\u6728": -485, "\u6765": -442, "\u6821": -360, "\u696D": -1043, "\u6C0F": 5388, "\u6C11": -2716, "\u6C17": -910, "\u6CA2": -939, "\u6E08": -543, "\u7269": -735, "\u7387": 672, "\u7403": -1267, "\u751F": -1286, "\u7523": -1101, "\u7530": -2900, "\u753A": 1826, "\u7684": 2586, "\u76EE": 922, "\u7701": -3485, "\u770C": 2997, "\u7A7A": -867, "\u7ACB": -2112, "\u7B2C": 788, "\u7C73": 2937, "\u7CFB": 786, "\u7D04": 2171, "\u7D4C": 1146, "\u7D71": -1169, "\u7DCF": 940, "\u7DDA": -994, "\u7F72": 749, "\u8005": 2145, "\u80FD": -730, "\u822C": -852, "\u884C": -792, "\u898F": 792, "\u8B66": -1184, "\u8B70": -244, "\u8C37": -1e3, "\u8CDE": 730, "\u8ECA": -1481, "\u8ECD": 1158, "\u8F2A": -1433, "\u8FBC": -3370, "\u8FD1": 929, "\u9053": -1291, "\u9078": 2596, "\u90CE": -4866, "\u90FD": 1192, "\u91CE": -1100, "\u9280": -2213, "\u9577": 357, "\u9593": -2344, "\u9662": -2297, "\u969B": -2604, "\u96FB": -878, "\u9818": -1659, "\u984C": -792, "\u9928": -1984, "\u9996": 1749, "\u9AD8": 2120, "\uFF62": 1895, "\uFF63": 3798, "\uFF65": -4371, "\uFF6F": -724, "\uFF70": -11870, "\uFF76": 2145, "\uFF7A": 1789, "\uFF7E": 1287, "\uFF84": -403, "\uFF92": -1635, "\uFF97": -881, "\uFF98": -541, "\uFF99": -856, "\uFF9D": -3637 };
            this.UW5__ = { ",": 465, ".": -299, "1": -514, "E2": -32768, "]": -2762, "\u3001": 465, "\u3002": -299, "\u300C": 363, "\u3042": 1655, "\u3044": 331, "\u3046": -503, "\u3048": 1199, "\u304A": 527, "\u304B": 647, "\u304C": -421, "\u304D": 1624, "\u304E": 1971, "\u304F": 312, "\u3052": -983, "\u3055": -1537, "\u3057": -1371, "\u3059": -852, "\u3060": -1186, "\u3061": 1093, "\u3063": 52, "\u3064": 921, "\u3066": -18, "\u3067": -850, "\u3068": -127, "\u3069": 1682, "\u306A": -787, "\u306B": -1224, "\u306E": -635, "\u306F": -578, "\u3079": 1001, "\u307F": 502, "\u3081": 865, "\u3083": 3350, "\u3087": 854, "\u308A": -208, "\u308B": 429, "\u308C": 504, "\u308F": 419, "\u3092": -1264, "\u3093": 327, "\u30A4": 241, "\u30EB": 451, "\u30F3": -343, "\u4E2D": -871, "\u4EAC": 722, "\u4F1A": -1153, "\u515A": -654, "\u52D9": 3519, "\u533A": -901, "\u544A": 848, "\u54E1": 2104, "\u5927": -1296, "\u5B66": -548, "\u5B9A": 1785, "\u5D50": -1304, "\u5E02": -2991, "\u5E2D": 921, "\u5E74": 1763, "\u601D": 872, "\u6240": -814, "\u6319": 1618, "\u65B0": -1682, "\u65E5": 218, "\u6708": -4353, "\u67FB": 932, "\u683C": 1356, "\u6A5F": -1508, "\u6C0F": -1347, "\u7530": 240, "\u753A": -3912, "\u7684": -3149, "\u76F8": 1319, "\u7701": -1052, "\u770C": -4003, "\u7814": -997, "\u793E": -278, "\u7A7A": -813, "\u7D71": 1955, "\u8005": -2233, "\u8868": 663, "\u8A9E": -1073, "\u8B70": 1219, "\u9078": -1018, "\u90CE": -368, "\u9577": 786, "\u9593": 1191, "\u984C": 2368, "\u9928": -689, "\uFF11": -514, "\uFF25\uFF12": -32768, "\uFF62": 363, "\uFF72": 241, "\uFF99": 451, "\uFF9D": -343 };
            this.UW6__ = { ",": 227, ".": 808, "1": -270, "E1": 306, "\u3001": 227, "\u3002": 808, "\u3042": -307, "\u3046": 189, "\u304B": 241, "\u304C": -73, "\u304F": -121, "\u3053": -200, "\u3058": 1782, "\u3059": 383, "\u305F": -428, "\u3063": 573, "\u3066": -1014, "\u3067": 101, "\u3068": -105, "\u306A": -253, "\u306B": -149, "\u306E": -417, "\u306F": -236, "\u3082": -206, "\u308A": 187, "\u308B": -135, "\u3092": 195, "\u30EB": -673, "\u30F3": -496, "\u4E00": -277, "\u4E2D": 201, "\u4EF6": -800, "\u4F1A": 624, "\u524D": 302, "\u533A": 1792, "\u54E1": -1212, "\u59D4": 798, "\u5B66": -960, "\u5E02": 887, "\u5E83": -695, "\u5F8C": 535, "\u696D": -697, "\u76F8": 753, "\u793E": -507, "\u798F": 974, "\u7A7A": -822, "\u8005": 1811, "\u9023": 463, "\u90CE": 1082, "\uFF11": -270, "\uFF25\uFF11": 306, "\uFF99": -673, "\uFF9D": -496 };
            return this;
          }
          TinySegmenter.prototype.ctype_ = function(str) {
            for (var i in this.chartype_) {
              if (str.match(this.chartype_[i][0])) {
                return this.chartype_[i][1];
              }
            }
            return "O";
          };
          TinySegmenter.prototype.ts_ = function(v) {
            if (v) {
              return v;
            }
            return 0;
          };
          TinySegmenter.prototype.segment = function(input) {
            if (input == null || input == void 0 || input == "") {
              return [];
            }
            var result = [];
            var seg = ["B3", "B2", "B1"];
            var ctype = ["O", "O", "O"];
            var o = input.split("");
            for (i = 0; i < o.length; ++i) {
              seg.push(o[i]);
              ctype.push(this.ctype_(o[i]));
            }
            seg.push("E1");
            seg.push("E2");
            seg.push("E3");
            ctype.push("O");
            ctype.push("O");
            ctype.push("O");
            var word = seg[3];
            var p1 = "U";
            var p2 = "U";
            var p3 = "U";
            for (var i = 4; i < seg.length - 3; ++i) {
              var score = this.BIAS__;
              var w1 = seg[i - 3];
              var w2 = seg[i - 2];
              var w3 = seg[i - 1];
              var w4 = seg[i];
              var w5 = seg[i + 1];
              var w6 = seg[i + 2];
              var c1 = ctype[i - 3];
              var c2 = ctype[i - 2];
              var c3 = ctype[i - 1];
              var c4 = ctype[i];
              var c5 = ctype[i + 1];
              var c6 = ctype[i + 2];
              score += this.ts_(this.UP1__[p1]);
              score += this.ts_(this.UP2__[p2]);
              score += this.ts_(this.UP3__[p3]);
              score += this.ts_(this.BP1__[p1 + p2]);
              score += this.ts_(this.BP2__[p2 + p3]);
              score += this.ts_(this.UW1__[w1]);
              score += this.ts_(this.UW2__[w2]);
              score += this.ts_(this.UW3__[w3]);
              score += this.ts_(this.UW4__[w4]);
              score += this.ts_(this.UW5__[w5]);
              score += this.ts_(this.UW6__[w6]);
              score += this.ts_(this.BW1__[w2 + w3]);
              score += this.ts_(this.BW2__[w3 + w4]);
              score += this.ts_(this.BW3__[w4 + w5]);
              score += this.ts_(this.TW1__[w1 + w2 + w3]);
              score += this.ts_(this.TW2__[w2 + w3 + w4]);
              score += this.ts_(this.TW3__[w3 + w4 + w5]);
              score += this.ts_(this.TW4__[w4 + w5 + w6]);
              score += this.ts_(this.UC1__[c1]);
              score += this.ts_(this.UC2__[c2]);
              score += this.ts_(this.UC3__[c3]);
              score += this.ts_(this.UC4__[c4]);
              score += this.ts_(this.UC5__[c5]);
              score += this.ts_(this.UC6__[c6]);
              score += this.ts_(this.BC1__[c2 + c3]);
              score += this.ts_(this.BC2__[c3 + c4]);
              score += this.ts_(this.BC3__[c4 + c5]);
              score += this.ts_(this.TC1__[c1 + c2 + c3]);
              score += this.ts_(this.TC2__[c2 + c3 + c4]);
              score += this.ts_(this.TC3__[c3 + c4 + c5]);
              score += this.ts_(this.TC4__[c4 + c5 + c6]);
              score += this.ts_(this.UQ1__[p1 + c1]);
              score += this.ts_(this.UQ2__[p2 + c2]);
              score += this.ts_(this.UQ3__[p3 + c3]);
              score += this.ts_(this.BQ1__[p2 + c2 + c3]);
              score += this.ts_(this.BQ2__[p2 + c3 + c4]);
              score += this.ts_(this.BQ3__[p3 + c2 + c3]);
              score += this.ts_(this.BQ4__[p3 + c3 + c4]);
              score += this.ts_(this.TQ1__[p2 + c1 + c2 + c3]);
              score += this.ts_(this.TQ2__[p2 + c2 + c3 + c4]);
              score += this.ts_(this.TQ3__[p3 + c1 + c2 + c3]);
              score += this.ts_(this.TQ4__[p3 + c2 + c3 + c4]);
              var p = "O";
              if (score > 0) {
                result.push(word);
                word = "";
                p = "B";
              }
              p1 = p2;
              p2 = p3;
              p3 = p;
              word += seg[i];
            }
            result.push(word);
            return result;
          };
          lunr2.TinySegmenter = TinySegmenter;
        };
      });
    }
  });

  // node_modules/lunr-languages/lunr.ja.js
  var require_lunr_ja = __commonJS({
    "node_modules/lunr-languages/lunr.ja.js"(exports, module) {
      (function(root2, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          factory()(root2.lunr);
        }
      })(exports, function() {
        return function(lunr2) {
          if ("undefined" === typeof lunr2) {
            throw new Error("Lunr is not present. Please include / require Lunr before this script.");
          }
          if ("undefined" === typeof lunr2.stemmerSupport) {
            throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
          }
          var isLunr2 = lunr2.version[0] == "2";
          lunr2.ja = function() {
            this.pipeline.reset();
            this.pipeline.add(
              lunr2.ja.trimmer,
              lunr2.ja.stopWordFilter,
              lunr2.ja.stemmer
            );
            if (isLunr2) {
              this.tokenizer = lunr2.ja.tokenizer;
            } else {
              if (lunr2.tokenizer) {
                lunr2.tokenizer = lunr2.ja.tokenizer;
              }
              if (this.tokenizerFn) {
                this.tokenizerFn = lunr2.ja.tokenizer;
              }
            }
          };
          var segmenter = new lunr2.TinySegmenter();
          lunr2.ja.tokenizer = function(obj) {
            var i;
            var str;
            var len;
            var segs;
            var tokens;
            var char;
            var sliceLength;
            var sliceStart;
            var sliceEnd;
            var segStart;
            if (!arguments.length || obj == null || obj == void 0)
              return [];
            if (Array.isArray(obj)) {
              return obj.map(
                function(t) {
                  return isLunr2 ? new lunr2.Token(t.toLowerCase()) : t.toLowerCase();
                }
              );
            }
            str = obj.toString().toLowerCase().replace(/^\s+/, "");
            for (i = str.length - 1; i >= 0; i--) {
              if (/\S/.test(str.charAt(i))) {
                str = str.substring(0, i + 1);
                break;
              }
            }
            tokens = [];
            len = str.length;
            for (sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
              char = str.charAt(sliceEnd);
              sliceLength = sliceEnd - sliceStart;
              if (char.match(/\s/) || sliceEnd == len) {
                if (sliceLength > 0) {
                  segs = segmenter.segment(str.slice(sliceStart, sliceEnd)).filter(
                    function(token) {
                      return !!token;
                    }
                  );
                  segStart = sliceStart;
                  for (i = 0; i < segs.length; i++) {
                    if (isLunr2) {
                      tokens.push(
                        new lunr2.Token(
                          segs[i],
                          {
                            position: [segStart, segs[i].length],
                            index: tokens.length
                          }
                        )
                      );
                    } else {
                      tokens.push(segs[i]);
                    }
                    segStart += segs[i].length;
                  }
                }
                sliceStart = sliceEnd + 1;
              }
            }
            return tokens;
          };
          lunr2.ja.stemmer = function() {
            return function(word) {
              return word;
            };
          }();
          lunr2.Pipeline.registerFunction(lunr2.ja.stemmer, "stemmer-ja");
          lunr2.ja.wordCharacters = "\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u5104\u5146\u4E00-\u9FA0\u3005\u3006\u30F5\u30F6\u3041-\u3093\u30A1-\u30F4\u30FC\uFF71-\uFF9D\uFF9Ea-zA-Z\uFF41-\uFF5A\uFF21-\uFF3A0-9\uFF10-\uFF19";
          lunr2.ja.trimmer = lunr2.trimmerSupport.generateTrimmer(lunr2.ja.wordCharacters);
          lunr2.Pipeline.registerFunction(lunr2.ja.trimmer, "trimmer-ja");
          lunr2.ja.stopWordFilter = lunr2.generateStopWordFilter(
            "\u3053\u308C \u305D\u308C \u3042\u308C \u3053\u306E \u305D\u306E \u3042\u306E \u3053\u3053 \u305D\u3053 \u3042\u305D\u3053 \u3053\u3061\u3089 \u3069\u3053 \u3060\u308C \u306A\u306B \u306A\u3093 \u4F55 \u79C1 \u8CB4\u65B9 \u8CB4\u65B9\u65B9 \u6211\u3005 \u79C1\u9054 \u3042\u306E\u4EBA \u3042\u306E\u304B\u305F \u5F7C\u5973 \u5F7C \u3067\u3059 \u3042\u308A\u307E\u3059 \u304A\u308A\u307E\u3059 \u3044\u307E\u3059 \u306F \u304C \u306E \u306B \u3092 \u3067 \u3048 \u304B\u3089 \u307E\u3067 \u3088\u308A \u3082 \u3069\u306E \u3068 \u3057 \u305D\u308C\u3067 \u3057\u304B\u3057".split(" ")
          );
          lunr2.Pipeline.registerFunction(lunr2.ja.stopWordFilter, "stopWordFilter-ja");
          lunr2.jp = lunr2.ja;
          lunr2.Pipeline.registerFunction(lunr2.jp.stemmer, "stemmer-jp");
          lunr2.Pipeline.registerFunction(lunr2.jp.trimmer, "trimmer-jp");
          lunr2.Pipeline.registerFunction(lunr2.jp.stopWordFilter, "stopWordFilter-jp");
        };
      });
    }
  });

  // <stdin>
  var import_react2 = __toESM(require_react());
  var import_client2 = __toESM(require_client());

  // ns-hugo:/Users/kanta/hacking/products/002_kantas_theme/assets/js/search-modal.jsx
  var import_react = __toESM(require_react());
  var import_client = __toESM(require_client());

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray(thing))
      return thing;
    let i = thing.length;
    if (!isNumber(i))
      return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      if (reducer(descriptor, name, obj) !== false) {
        reducedDescriptors[name] = descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define2 = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var ALPHA = "abcdefghijklmnopqrstuvwxyz";
  var DIGIT = "0123456789";
  var ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var isStandardBrowserEnv = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  var isStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (browser_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": void 0
  };
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: browser_default.classes.FormData,
      Blob: browser_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils_default.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.freezeMethods(AxiosHeaders.prototype);
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = browser_default.isStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          const cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils_default.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils_default.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils_default.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }()
  );

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv2() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv2() {
      return function isURLSameOrigin() {
        return true;
      };
    }()
  );

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils_default.isFormData(requestData)) {
        if (browser_default.isStandardBrowserEnv || browser_default.isStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else {
          requestHeaders.setContentType("multipart/form-data;", false);
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (browser_default.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length } = adapters;
      let nameOrAdapter;
      let adapter;
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        if (adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
          break;
        }
      }
      if (!adapter) {
        if (adapter === false) {
          throw new AxiosError_default(
            `Adapter ${nameOrAdapter} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        }
        throw new Error(
          utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
        );
      }
      if (!utils_default.isFunction(adapter)) {
        throw new TypeError("adapter is not a function");
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/env/data.js
  var VERSION = "1.4.0";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders;
      contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      contextHeaders && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    mergeConfig: mergeConfig2
  } = axios_default;

  // ns-hugo:/Users/kanta/hacking/products/002_kantas_theme/assets/js/search-modal.jsx
  var lunr = require_lunr();
  require_lunr_stemmer_support()(lunr);
  require_tinyseg()(lunr);
  require_lunr_ja()(lunr);
  function debounce(fn, delay) {
    let timer;
    const debouncd = (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(e);
      }, delay);
    };
    return debouncd;
  }
  function SearchModal({ show, close }) {
    const inputRef = (0, import_react.useRef)(null);
    const [searchResults, setSearchResults] = (0, import_react.useState)([]);
    const [mySearchInfo, setMySearchInfo] = (0, import_react.useState)({
      searchData: {},
      searchIndex: {}
    });
    const keywordUpdated = (keyword) => {
      console.log(`keyword updated: ${keyword}`);
      if (keyword.trim().length == 0) {
        setSearchResults([]);
      } else {
        const list = mySearchInfo.searchIndex.search(keyword).map((entry) => {
          const obj = mySearchInfo.searchData.results.filter((d) => entry.ref == d.href)[0];
          return { "href": obj.href, "title": obj.title };
        });
        setSearchResults(list);
      }
    };
    const handleInput = debounce((e) => {
      keywordUpdated(e.target.value);
    }, 900);
    const handleKeydown = (e) => {
      if (e.keyCode === 27) {
        close();
      }
    };
    (0, import_react.useEffect)(() => {
      axios_default.get("/portfolio/search/index.json").then((res) => {
        const searchInfo = {
          searchData: {},
          searchIndex: {}
        };
        searchInfo.searchData = res.data;
        searchInfo.searchIndex = lunr(function() {
          this.ref("href");
          this.use(lunr.ja);
          this.field("title");
          this.field("tags");
          searchInfo.searchData.results.forEach((e) => {
            this.add(e);
          });
        });
        setMySearchInfo(searchInfo);
      });
    }, []);
    (0, import_react.useEffect)(() => {
      if (show) {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }, [show]);
    if (show) {
      const list = searchResults.map((result, idx) => {
        return /* @__PURE__ */ import_react.default.createElement("div", { key: idx, className: "pt-4 pb-2 px-6 border-b border-primary-dark w-full hover:bg-primary/60 hover:text-on-primary text-left" }, /* @__PURE__ */ import_react.default.createElement("a", { className: "block", href: result.href }, result.title));
      });
      return /* @__PURE__ */ import_react.default.createElement("div", { id: "modal-overlay", onClick: close, className: "fixed top-0 left-0 w-full h-full bg-black/70 flex flex-col justify-start items-center z-50" }, /* @__PURE__ */ import_react.default.createElement("div", { onClick: (e) => e.stopPropagation(), className: "flex flex-col items-center border border-primary-dark mt-4 md:mt-12 w-72 md:w-[500px] rounded-lg bg-primary-light text-primary-dark mx-auto" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center w-full border-b border-primary-dark" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-none" }, /* @__PURE__ */ import_react.default.createElement("i", { className: "fa-solid fa-magnifying-glass text-3xl mx-2" })), /* @__PURE__ */ import_react.default.createElement("input", { type: "text", ref: inputRef, onInput: handleInput, onKeyDown: handleKeydown, className: "grow bg-primary-light text-on-primary-light\n                        text-sm rounded-lg focus:outline-none block p-2.5 w-full", placeholder: "Search this blog", required: true })), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col items-start mb-4 overflow-y-auto h-[580px] md:h-[800px] w-full" }, list)));
    } else {
      return null;
    }
  }

  // <stdin>
  function MyApp() {
    const [show, setShow] = (0, import_react2.useState)(false);
    const openModal = () => {
      setShow(true);
    };
    const closeModal = () => {
      setShow(false);
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-stone-200 rounded-md m-4 p-2 text-center" }, /* @__PURE__ */ import_react2.default.createElement("h1", null, "Click Search icon!!"), /* @__PURE__ */ import_react2.default.createElement("a", { className: "block text-center no-underline text-on-primary py-2 px-2 font-normal cursor-pointer hover:font-bold", onClick: openModal }, /* @__PURE__ */ import_react2.default.createElement("i", { className: "fa-solid fa-magnifying-glass" })), /* @__PURE__ */ import_react2.default.createElement(SearchModal, { show, close: closeModal }));
  }
  var container = document.getElementById("search_menu_wk");
  var root = (0, import_client2.createRoot)(container);
  root.render(/* @__PURE__ */ import_react2.default.createElement(MyApp, null));
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lunr/lunr.js:
  (**
   * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
   * Copyright (C) 2020 Oliver Nightingale
   * @license MIT
   *)
  (*!
   * lunr.utils
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Set
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.tokenizer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Pipeline
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Vector
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.stemmer
   * Copyright (C) 2020 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   *)
  (*!
   * lunr.stopWordFilter
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.trimmer
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.TokenSet
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Index
   * Copyright (C) 2020 Oliver Nightingale
   *)
  (*!
   * lunr.Builder
   * Copyright (C) 2020 Oliver Nightingale
   *)

lunr-languages/lunr.stemmer.support.js:
  (*!
   * Snowball JavaScript Library v0.3
   * http://code.google.com/p/urim/
   * http://snowball.tartarus.org/
   *
   * Copyright 2010, Oleg Mazko
   * http://www.mozilla.org/MPL/
   *)

lunr-languages/lunr.ja.js:
  (*!
   * Lunr languages, `Japanese` language
   * https://github.com/MihaiValentin/lunr-languages
   *
   * Copyright 2014, Chad Liu
   * http://www.mozilla.org/MPL/
   *)
  (*!
   * based on
   * Snowball JavaScript Library v0.3
   * http://code.google.com/p/urim/
   * http://snowball.tartarus.org/
   *
   * Copyright 2010, Oleg Mazko
   * http://www.mozilla.org/MPL/
   *)
*/
