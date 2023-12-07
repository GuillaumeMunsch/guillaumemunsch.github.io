var uc = Object.defineProperty;
var sc = (e, t, n) =>
  t in e
    ? uc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Fe = (e, t, n) => (sc(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ac(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ku = { exports: {} },
  rl = {},
  Yu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = Symbol.for("react.element"),
  cc = Symbol.for("react.portal"),
  fc = Symbol.for("react.fragment"),
  dc = Symbol.for("react.strict_mode"),
  pc = Symbol.for("react.profiler"),
  mc = Symbol.for("react.provider"),
  hc = Symbol.for("react.context"),
  vc = Symbol.for("react.forward_ref"),
  gc = Symbol.for("react.suspense"),
  yc = Symbol.for("react.memo"),
  wc = Symbol.for("react.lazy"),
  Uo = Symbol.iterator;
function Sc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uo && e[Uo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zu = Object.assign,
  Ju = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Xu);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {}
qu.prototype = sn.prototype;
function Bi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Xu);
}
var Hi = (Bi.prototype = new qu());
Hi.constructor = Bi;
Zu(Hi, sn.prototype);
Hi.isPureReactComponent = !0;
var Ao = Array.isArray,
  bu = Object.prototype.hasOwnProperty,
  Wi = { current: null },
  es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      bu.call(t, r) && !es.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Jn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Wi.current,
  };
}
function kc(e, t) {
  return {
    $$typeof: Jn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jn;
}
function Ec(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vo = /\/+/g;
function Cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ec("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jn:
          case cc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Cl(o, 0) : r),
      Ao(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vo, "$&/") + "/"),
          kr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (Qi(l) &&
            (l = kc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ao(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Cl(i, u);
      o += kr(i, t, n, s, l);
    }
  else if (((s = Sc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Cl(i, u++)), (o += kr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Cc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Er = { transition: null },
  xc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Wi,
  };
I.Children = {
  map: lr,
  forEach: function (e, t, n) {
    lr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = sn;
I.Fragment = fc;
I.Profiler = pc;
I.PureComponent = Bi;
I.StrictMode = dc;
I.Suspense = gc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Wi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      bu.call(t, s) &&
        !es.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Jn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: hc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: mc, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = ts;
I.createFactory = function (e) {
  var t = ts.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: vc, render: e };
};
I.isValidElement = Qi;
I.lazy = function (e) {
  return { $$typeof: wc, _payload: { _status: -1, _result: e }, _init: Cc };
};
I.memo = function (e, t) {
  return { $$typeof: yc, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
I.useContext = function (e) {
  return se.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
I.useId = function () {
  return se.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return se.current.useRef(e);
};
I.useState = function (e) {
  return se.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return se.current.useTransition();
};
I.version = "18.2.0";
Yu.exports = I;
var ll = Yu.exports;
const _c = ac(ll);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nc = ll,
  Pc = Symbol.for("react.element"),
  zc = Symbol.for("react.fragment"),
  Lc = Object.prototype.hasOwnProperty,
  Ic = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Lc.call(t, r) && !Mc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Pc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ic.current,
  };
}
rl.Fragment = zc;
rl.jsx = ns;
rl.jsxs = ns;
Ku.exports = rl;
var Q = Ku.exports,
  Xl = {},
  rs = { exports: {} },
  Se = {},
  ls = { exports: {} },
  is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, z) {
    var L = C.length;
    C.push(z);
    e: for (; 0 < L; ) {
      var W = (L - 1) >>> 1,
        Z = C[W];
      if (0 < l(Z, z)) (C[W] = z), (C[L] = Z), (L = W);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      L = C.pop();
    if (L !== z) {
      C[0] = L;
      e: for (var W = 0, Z = C.length, nr = Z >>> 1; W < nr; ) {
        var yt = 2 * (W + 1) - 1,
          El = C[yt],
          wt = yt + 1,
          rr = C[wt];
        if (0 > l(El, L))
          wt < Z && 0 > l(rr, El)
            ? ((C[W] = rr), (C[wt] = L), (W = wt))
            : ((C[W] = El), (C[yt] = L), (W = yt));
        else if (wt < Z && 0 > l(rr, L)) (C[W] = rr), (C[wt] = L), (W = wt);
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var L = C.sortIndex - z.sortIndex;
    return L !== 0 ? L : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    f = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    S = !1,
    v = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null) r(f);
      else if (z.startTime <= C)
        r(f), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(f);
    }
  }
  function g(C) {
    if (((v = !1), d(C), !S))
      if (n(s) !== null) (S = !0), Sl(E);
      else {
        var z = n(f);
        z !== null && kl(g, z.startTime - C);
      }
  }
  function E(C, z) {
    (S = !1), v && ((v = !1), c(N), (N = -1)), (w = !0);
    var L = p;
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (C && !ze()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var Z = W(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var nr = !0;
      else {
        var yt = n(f);
        yt !== null && kl(g, yt.startTime - z), (nr = !1);
      }
      return nr;
    } finally {
      (m = null), (p = L), (w = !1);
    }
  }
  var x = !1,
    _ = null,
    N = -1,
    H = 5,
    M = -1;
  function ze() {
    return !(e.unstable_now() - M < H);
  }
  function fn() {
    if (_ !== null) {
      var C = e.unstable_now();
      M = C;
      var z = !0;
      try {
        z = _(!0, C);
      } finally {
        z ? dn() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var dn;
  if (typeof a == "function")
    dn = function () {
      a(fn);
    };
  else if (typeof MessageChannel < "u") {
    var jo = new MessageChannel(),
      oc = jo.port2;
    (jo.port1.onmessage = fn),
      (dn = function () {
        oc.postMessage(null);
      });
  } else
    dn = function () {
      P(fn, 0);
    };
  function Sl(C) {
    (_ = C), x || ((x = !0), dn());
  }
  function kl(C, z) {
    N = P(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), Sl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var L = p;
      p = z;
      try {
        return C();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var L = p;
      p = C;
      try {
        return z();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, L) {
      var W = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? W + L : W))
          : (L = W),
        C)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (C = {
          id: h++,
          callback: z,
          priorityLevel: C,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > W
          ? ((C.sortIndex = L),
            t(f, C),
            n(s) === null &&
              C === n(f) &&
              (v ? (c(N), (N = -1)) : (v = !0), kl(g, L - W)))
          : ((C.sortIndex = Z), t(s, C), S || w || ((S = !0), Sl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (C) {
      var z = p;
      return function () {
        var L = p;
        p = z;
        try {
          return C.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(is);
ls.exports = is;
var Dc = ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var os = ll,
  we = Dc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var us = new Set(),
  Rn = {};
function Tt(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) us.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zl = Object.prototype.hasOwnProperty,
  Tc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $o = {},
  Bo = {};
function Rc(e) {
  return Zl.call(Bo, e)
    ? !0
    : Zl.call($o, e)
    ? !1
    : Tc.test(e)
    ? (Bo[e] = !0)
    : (($o[e] = !0), !1);
}
function Oc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fc(e, t, n, r) {
  if (t === null || typeof t > "u" || Oc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Ki);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gi, Ki);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gi, Ki);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fc(t, n, l, r) && (n = null),
    r || l === null
      ? Rc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = os.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  jt = Symbol.for("react.fragment"),
  Xi = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  ss = Symbol.for("react.provider"),
  as = Symbol.for("react.context"),
  Zi = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  Ji = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  cs = Symbol.for("react.offscreen"),
  Ho = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ho && e[Ho]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  xl;
function kn(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xl = (t && t[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var _l = !1;
function Nl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (_l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function jc(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jt:
      return "Fragment";
    case Ft:
      return "Portal";
    case Jl:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case as:
        return (e.displayName || "Context") + ".Consumer";
      case ss:
        return (e._context.displayName || "Context") + ".Provider";
      case Zi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ji:
        return (
          (t = e.displayName || null), t !== null ? t : ei(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return ei(e(t));
        } catch {}
    }
  return null;
}
function Uc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ei(t);
    case 8:
      return t === Xi ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ac(e) {
  var t = fs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Tr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ti(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ps(e, t) {
  (t = t.checked), t != null && Yi(e, "checked", t, !1);
}
function ni(e, t) {
  ps(e, t);
  var n = pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ri(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ri(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ri(e, t, n) {
  (t !== "number" || Tr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var En = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Go(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (En(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pt(n) };
}
function ms(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ko(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ur,
  vs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ur = ur || document.createElement("div"),
          ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Vc = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function (e) {
  Vc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]);
  });
});
function gs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_n.hasOwnProperty(e) && _n[e])
    ? ("" + t).trim()
    : t + "px";
}
function ys(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = gs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var $c = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oi(e, t) {
  if (t) {
    if ($c[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ui(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var si = null;
function qi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ai = null,
  Xt = null,
  Zt = null;
function Yo(e) {
  if ((e = er(e))) {
    if (typeof ai != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = al(t)), ai(e.stateNode, e.type, t));
  }
}
function ws(e) {
  Xt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Xt = e);
}
function Ss() {
  if (Xt) {
    var e = Xt,
      t = Zt;
    if (((Zt = Xt = null), Yo(e), t)) for (e = 0; e < t.length; e++) Yo(t[e]);
  }
}
function ks(e, t) {
  return e(t);
}
function Es() {}
var Pl = !1;
function Cs(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return ks(e, t, n);
  } finally {
    (Pl = !1), (Xt !== null || Zt !== null) && (Es(), Ss());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ci = !1;
if (Ke)
  try {
    var mn = {};
    Object.defineProperty(mn, "passive", {
      get: function () {
        ci = !0;
      },
    }),
      window.addEventListener("test", mn, mn),
      window.removeEventListener("test", mn, mn);
  } catch {
    ci = !1;
  }
function Bc(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var Nn = !1,
  Rr = null,
  Or = !1,
  fi = null,
  Hc = {
    onError: function (e) {
      (Nn = !0), (Rr = e);
    },
  };
function Wc(e, t, n, r, l, i, o, u, s) {
  (Nn = !1), (Rr = null), Bc.apply(Hc, arguments);
}
function Qc(e, t, n, r, l, i, o, u, s) {
  if ((Wc.apply(this, arguments), Nn)) {
    if (Nn) {
      var f = Rr;
      (Nn = !1), (Rr = null);
    } else throw Error(y(198));
    Or || ((Or = !0), (fi = f));
  }
}
function Rt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xo(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function Gc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Xo(l), e;
        if (i === r) return Xo(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function _s(e) {
  return (e = Gc(e)), e !== null ? Ns(e) : null;
}
function Ns(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ns(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ps = we.unstable_scheduleCallback,
  Zo = we.unstable_cancelCallback,
  Kc = we.unstable_shouldYield,
  Yc = we.unstable_requestPaint,
  G = we.unstable_now,
  Xc = we.unstable_getCurrentPriorityLevel,
  bi = we.unstable_ImmediatePriority,
  zs = we.unstable_UserBlockingPriority,
  Fr = we.unstable_NormalPriority,
  Zc = we.unstable_LowPriority,
  Ls = we.unstable_IdlePriority,
  il = null,
  Ve = null;
function Jc(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : ef,
  qc = Math.log,
  bc = Math.LN2;
function ef(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qc(e) / bc) | 0)) | 0;
}
var sr = 64,
  ar = 4194304;
function Cn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Cn(u)) : ((i &= o), i !== 0 && (r = Cn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Cn(o)) : i !== 0 && (r = Cn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Te(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function tf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function nf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = tf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Is() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Te(t)),
    (e[t] = n);
}
function rf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Te(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function eo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Te(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var T = 0;
function Ms(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ds,
  to,
  Ts,
  Rs,
  Os,
  pi = !1,
  cr = [],
  it = null,
  ot = null,
  ut = null,
  jn = new Map(),
  Un = new Map(),
  tt = [],
  lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
    " "
  );
function Jo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function hn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = er(t)), t !== null && to(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function of(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = hn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = hn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = hn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return jn.set(i, hn(jn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Un.set(i, hn(Un.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Fs(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xs(n)), t !== null)) {
          (e.blockedOn = t),
            Os(e.priority, function () {
              Ts(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (si = r), n.target.dispatchEvent(r), (si = null);
    } else return (t = er(n)), t !== null && to(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qo(e, t, n) {
  Cr(e) && n.delete(t);
}
function uf() {
  (pi = !1),
    it !== null && Cr(it) && (it = null),
    ot !== null && Cr(ot) && (ot = null),
    ut !== null && Cr(ut) && (ut = null),
    jn.forEach(qo),
    Un.forEach(qo);
}
function vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pi ||
      ((pi = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, uf)));
}
function An(e) {
  function t(l) {
    return vn(l, e);
  }
  if (0 < cr.length) {
    vn(cr[0], e);
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && vn(it, e),
      ot !== null && vn(ot, e),
      ut !== null && vn(ut, e),
      jn.forEach(t),
      Un.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    Fs(n), n.blockedOn === null && tt.shift();
}
var Jt = Je.ReactCurrentBatchConfig,
  Ur = !0;
function sf(e, t, n, r) {
  var l = T,
    i = Jt.transition;
  Jt.transition = null;
  try {
    (T = 1), no(e, t, n, r);
  } finally {
    (T = l), (Jt.transition = i);
  }
}
function af(e, t, n, r) {
  var l = T,
    i = Jt.transition;
  Jt.transition = null;
  try {
    (T = 4), no(e, t, n, r);
  } finally {
    (T = l), (Jt.transition = i);
  }
}
function no(e, t, n, r) {
  if (Ur) {
    var l = mi(e, t, n, r);
    if (l === null) Ul(e, t, r, Ar, n), Jo(e, r);
    else if (of(l, e, t, n, r)) r.stopPropagation();
    else if ((Jo(e, r), t & 4 && -1 < lf.indexOf(e))) {
      for (; l !== null; ) {
        var i = er(l);
        if (
          (i !== null && Ds(i),
          (i = mi(e, t, n, r)),
          i === null && Ul(e, t, r, Ar, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Ar = null;
function mi(e, t, n, r) {
  if (((Ar = null), (e = qi(r)), (e = Ct(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ar = e), null;
}
function js(e) {
  switch (e) {
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
      switch (Xc()) {
        case bi:
          return 1;
        case zs:
          return 4;
        case Fr:
        case Zc:
          return 16;
        case Ls:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  ro = null,
  xr = null;
function Us() {
  if (xr) return xr;
  var e,
    t = ro,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function bo() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fr
        : bo),
      (this.isPropagationStopped = bo),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  lo = ke(an),
  bn = $({}, an, { view: 0, detail: 0 }),
  cf = ke(bn),
  Ll,
  Il,
  gn,
  ol = $({}, bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: io,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== gn &&
            (gn && e.type === "mousemove"
              ? ((Ll = e.screenX - gn.screenX), (Il = e.screenY - gn.screenY))
              : (Il = Ll = 0),
            (gn = e)),
          Ll);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Il;
    },
  }),
  eu = ke(ol),
  ff = $({}, ol, { dataTransfer: 0 }),
  df = ke(ff),
  pf = $({}, bn, { relatedTarget: 0 }),
  Ml = ke(pf),
  mf = $({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hf = ke(mf),
  vf = $({}, an, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gf = ke(vf),
  yf = $({}, an, { data: 0 }),
  tu = ke(yf),
  wf = {
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
    MozPrintableKey: "Unidentified",
  },
  Sf = {
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
    224: "Meta",
  },
  kf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ef(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kf[e]) ? !!t[e] : !1;
}
function io() {
  return Ef;
}
var Cf = $({}, bn, {
    key: function (e) {
      if (e.key) {
        var t = wf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: io,
    charCode: function (e) {
      return e.type === "keypress" ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = ke(Cf),
  _f = $({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nu = ke(_f),
  Nf = $({}, bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: io,
  }),
  Pf = ke(Nf),
  zf = $({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = ke(zf),
  If = $({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Mf = ke(If),
  Df = [9, 13, 27, 32],
  oo = Ke && "CompositionEvent" in window,
  Pn = null;
Ke && "documentMode" in document && (Pn = document.documentMode);
var Tf = Ke && "TextEvent" in window && !Pn,
  As = Ke && (!oo || (Pn && 8 < Pn && 11 >= Pn)),
  ru = " ",
  lu = !1;
function Vs(e, t) {
  switch (e) {
    case "keyup":
      return Df.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $s(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function Rf(e, t) {
  switch (e) {
    case "compositionend":
      return $s(t);
    case "keypress":
      return t.which !== 32 ? null : ((lu = !0), ru);
    case "textInput":
      return (e = t.data), e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Of(e, t) {
  if (Ut)
    return e === "compositionend" || (!oo && Vs(e, t))
      ? ((e = Us()), (xr = ro = rt = null), (Ut = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return As && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ff = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ff[e.type] : t === "textarea";
}
function Bs(e, t, n, r) {
  ws(r),
    (t = Vr(t, "onChange")),
    0 < t.length &&
      ((n = new lo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  Vn = null;
function jf(e) {
  bs(e, 0);
}
function ul(e) {
  var t = $t(e);
  if (ds(t)) return e;
}
function Uf(e, t) {
  if (e === "change") return t;
}
var Hs = !1;
if (Ke) {
  var Dl;
  if (Ke) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var ou = document.createElement("div");
      ou.setAttribute("oninput", "return;"),
        (Tl = typeof ou.oninput == "function");
    }
    Dl = Tl;
  } else Dl = !1;
  Hs = Dl && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  zn && (zn.detachEvent("onpropertychange", Ws), (Vn = zn = null));
}
function Ws(e) {
  if (e.propertyName === "value" && ul(Vn)) {
    var t = [];
    Bs(t, Vn, e, qi(e)), Cs(jf, t);
  }
}
function Af(e, t, n) {
  e === "focusin"
    ? (uu(), (zn = t), (Vn = n), zn.attachEvent("onpropertychange", Ws))
    : e === "focusout" && uu();
}
function Vf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(Vn);
}
function $f(e, t) {
  if (e === "click") return ul(t);
}
function Bf(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function Hf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == "function" ? Object.is : Hf;
function $n(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function au(e, t) {
  var n = su(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = su(n);
  }
}
function Qs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gs() {
  for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tr(e.document);
  }
  return t;
}
function uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Wf(e) {
  var t = Gs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && uo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = au(n, i));
        var o = au(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Qf = Ke && "documentMode" in document && 11 >= document.documentMode,
  At = null,
  hi = null,
  Ln = null,
  vi = !1;
function cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vi ||
    At == null ||
    At !== Tr(r) ||
    ((r = At),
    "selectionStart" in r && uo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ln && $n(Ln, r)) ||
      ((Ln = r),
      (r = Vr(hi, "onSelect")),
      0 < r.length &&
        ((t = new lo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = At))));
}
function dr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vt = {
    animationend: dr("Animation", "AnimationEnd"),
    animationiteration: dr("Animation", "AnimationIteration"),
    animationstart: dr("Animation", "AnimationStart"),
    transitionend: dr("Transition", "TransitionEnd"),
  },
  Rl = {},
  Ks = {};
Ke &&
  ((Ks = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  "TransitionEvent" in window || delete Vt.transitionend.transition);
function sl(e) {
  if (Rl[e]) return Rl[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ks) return (Rl[e] = t[n]);
  return e;
}
var Ys = sl("animationend"),
  Xs = sl("animationiteration"),
  Zs = sl("animationstart"),
  Js = sl("transitionend"),
  qs = new Map(),
  fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
function ht(e, t) {
  qs.set(e, t), Tt(t, [e]);
}
for (var Ol = 0; Ol < fu.length; Ol++) {
  var Fl = fu[Ol],
    Gf = Fl.toLowerCase(),
    Kf = Fl[0].toUpperCase() + Fl.slice(1);
  ht(Gf, "on" + Kf);
}
ht(Ys, "onAnimationEnd");
ht(Xs, "onAnimationIteration");
ht(Zs, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(Js, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Tt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
  Yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qc(r, t, void 0, e), (e.currentTarget = null);
}
function bs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          du(l, u, f), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          du(l, u, f), (i = s);
        }
    }
  }
  if (Or) throw ((e = fi), (Or = !1), (fi = null), e);
}
function O(e, t) {
  var n = t[ki];
  n === void 0 && (n = t[ki] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ea(t, e, 2, !1), n.add(r));
}
function jl(e, t, n) {
  var r = 0;
  t && (r |= 4), ea(n, e, r, t);
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[pr]) {
    (e[pr] = !0),
      us.forEach(function (n) {
        n !== "selectionchange" && (Yf.has(n) || jl(n, !1, e), jl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pr] || ((t[pr] = !0), jl("selectionchange", !1, t));
  }
}
function ea(e, t, n, r) {
  switch (js(t)) {
    case 1:
      var l = sf;
      break;
    case 4:
      l = af;
      break;
    default:
      l = no;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ct(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Cs(function () {
    var f = i,
      h = qi(n),
      m = [];
    e: {
      var p = qs.get(e);
      if (p !== void 0) {
        var w = lo,
          S = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = xf;
            break;
          case "focusin":
            (S = "focus"), (w = Ml);
            break;
          case "focusout":
            (S = "blur"), (w = Ml);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ml;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = df;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Pf;
            break;
          case Ys:
          case Xs:
          case Zs:
            w = hf;
            break;
          case Js:
            w = Lf;
            break;
          case "scroll":
            w = cf;
            break;
          case "wheel":
            w = Mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = gf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = nu;
        }
        var v = (t & 4) !== 0,
          P = !v && e === "scroll",
          c = v ? (p !== null ? p + "Capture" : null) : p;
        v = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              c !== null && ((g = Fn(a, c)), g != null && v.push(Hn(a, g, d)))),
            P)
          )
            break;
          a = a.return;
        }
        0 < v.length &&
          ((p = new w(p, S, null, n, h)), m.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== si &&
            (S = n.relatedTarget || n.fromElement) &&
            (Ct(S) || S[Ye]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = f),
              (S = S ? Ct(S) : null),
              S !== null &&
                ((P = Rt(S)), S !== P || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = f)),
          w !== S)
        ) {
          if (
            ((v = eu),
            (g = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = nu),
              (g = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (P = w == null ? p : $t(w)),
            (d = S == null ? p : $t(S)),
            (p = new v(g, a + "leave", w, n, h)),
            (p.target = P),
            (p.relatedTarget = d),
            (g = null),
            Ct(h) === f &&
              ((v = new v(c, a + "enter", S, n, h)),
              (v.target = d),
              (v.relatedTarget = P),
              (g = v)),
            (P = g),
            w && S)
          )
            t: {
              for (v = w, c = S, a = 0, d = v; d; d = Ot(d)) a++;
              for (d = 0, g = c; g; g = Ot(g)) d++;
              for (; 0 < a - d; ) (v = Ot(v)), a--;
              for (; 0 < d - a; ) (c = Ot(c)), d--;
              for (; a--; ) {
                if (v === c || (c !== null && v === c.alternate)) break t;
                (v = Ot(v)), (c = Ot(c));
              }
              v = null;
            }
          else v = null;
          w !== null && pu(m, p, w, v, !1),
            S !== null && P !== null && pu(m, P, S, v, !0);
        }
      }
      e: {
        if (
          ((p = f ? $t(f) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var E = Uf;
        else if (iu(p))
          if (Hs) E = Bf;
          else {
            E = Vf;
            var x = Af;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = $f);
        if (E && (E = E(e, f))) {
          Bs(m, E, n, h);
          break e;
        }
        x && x(e, p, f),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            ri(p, "number", p.value);
      }
      switch (((x = f ? $t(f) : window), e)) {
        case "focusin":
          (iu(x) || x.contentEditable === "true") &&
            ((At = x), (hi = f), (Ln = null));
          break;
        case "focusout":
          Ln = hi = At = null;
          break;
        case "mousedown":
          vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vi = !1), cu(m, n, h);
          break;
        case "selectionchange":
          if (Qf) break;
        case "keydown":
        case "keyup":
          cu(m, n, h);
      }
      var _;
      if (oo)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Ut
          ? Vs(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (As &&
          n.locale !== "ko" &&
          (Ut || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Ut && (_ = Us())
            : ((rt = h),
              (ro = "value" in rt ? rt.value : rt.textContent),
              (Ut = !0))),
        (x = Vr(f, N)),
        0 < x.length &&
          ((N = new tu(N, e, null, n, h)),
          m.push({ event: N, listeners: x }),
          _ ? (N.data = _) : ((_ = $s(n)), _ !== null && (N.data = _)))),
        (_ = Tf ? Rf(e, n) : Of(e, n)) &&
          ((f = Vr(f, "onBeforeInput")),
          0 < f.length &&
            ((h = new tu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: f }),
            (h.data = _)));
    }
    bs(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Fn(e, n)),
      i != null && r.unshift(Hn(e, i, l)),
      (i = Fn(e, t)),
      i != null && r.push(Hn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = Fn(n, i)), s != null && o.unshift(Hn(n, s, u)))
        : l || ((s = Fn(n, i)), s != null && o.push(Hn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Xf = /\r\n?/g,
  Zf = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xf,
      `
`
    )
    .replace(Zf, "");
}
function mr(e, t, n) {
  if (((t = mu(t)), mu(e) !== t && n)) throw Error(y(425));
}
function $r() {}
var gi = null,
  yi = null;
function wi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Si = typeof setTimeout == "function" ? setTimeout : void 0,
  Jf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hu = typeof Promise == "function" ? Promise : void 0,
  qf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hu < "u"
      ? function (e) {
          return hu.resolve(null).then(e).catch(bf);
        }
      : Si;
function bf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), An(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  An(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + cn,
  Wn = "__reactProps$" + cn,
  Ye = "__reactContainer$" + cn,
  ki = "__reactEvents$" + cn,
  ed = "__reactListeners$" + cn,
  td = "__reactHandles$" + cn;
function Ct(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vu(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function er(e) {
  return (
    (e = e[Ae] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function al(e) {
  return e[Wn] || null;
}
var Ei = [],
  Bt = -1;
function vt(e) {
  return { current: e };
}
function j(e) {
  0 > Bt || ((e.current = Ei[Bt]), (Ei[Bt] = null), Bt--);
}
function R(e, t) {
  Bt++, (Ei[Bt] = e.current), (e.current = t);
}
var mt = {},
  ie = vt(mt),
  de = vt(!1),
  zt = mt;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Br() {
  j(de), j(ie);
}
function gu(e, t, n) {
  if (ie.current !== mt) throw Error(y(168));
  R(ie, t), R(de, n);
}
function ta(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Uc(e) || "Unknown", l));
  return $({}, n, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (zt = ie.current),
    R(ie, e),
    R(de, de.current),
    !0
  );
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ta(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(de),
      j(ie),
      R(ie, e))
    : j(de),
    R(de, n);
}
var He = null,
  cl = !1,
  Vl = !1;
function na(e) {
  He === null ? (He = [e]) : He.push(e);
}
function nd(e) {
  (cl = !0), na(e);
}
function gt() {
  if (!Vl && He !== null) {
    Vl = !0;
    var e = 0,
      t = T;
    try {
      var n = He;
      for (T = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (cl = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), Ps(bi, gt), l);
    } finally {
      (T = t), (Vl = !1);
    }
  }
  return null;
}
var Ht = [],
  Wt = 0,
  Wr = null,
  Qr = 0,
  Ee = [],
  Ce = 0,
  Lt = null,
  We = 1,
  Qe = "";
function St(e, t) {
  (Ht[Wt++] = Qr), (Ht[Wt++] = Wr), (Wr = e), (Qr = t);
}
function ra(e, t, n) {
  (Ee[Ce++] = We), (Ee[Ce++] = Qe), (Ee[Ce++] = Lt), (Lt = e);
  var r = We;
  e = Qe;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Te(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Te(t) + l)) | (n << l) | r),
      (Qe = i + e);
  } else (We = (1 << i) | (n << l) | r), (Qe = e);
}
function so(e) {
  e.return !== null && (St(e, 1), ra(e, 1, 0));
}
function ao(e) {
  for (; e === Wr; )
    (Wr = Ht[--Wt]), (Ht[Wt] = null), (Qr = Ht[--Wt]), (Ht[Wt] = null);
  for (; e === Lt; )
    (Lt = Ee[--Ce]),
      (Ee[Ce] = null),
      (Qe = Ee[--Ce]),
      (Ee[Ce] = null),
      (We = Ee[--Ce]),
      (Ee[Ce] = null);
}
var ye = null,
  ge = null,
  U = !1,
  De = null;
function la(e, t) {
  var n = xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (U) {
    var t = ge;
    if (t) {
      var n = t;
      if (!wu(e, t)) {
        if (Ci(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ye;
        t && wu(e, t)
          ? la(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (Ci(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function Su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function hr(e) {
  if (e !== ye) return !1;
  if (!U) return Su(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Ci(e)) throw (ia(), Error(y(418)));
    for (; t; ) la(e, t), (t = st(t.nextSibling));
  }
  if ((Su(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ia() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function nn() {
  (ge = ye = null), (U = !1);
}
function co(e) {
  De === null ? (De = [e]) : De.push(e);
}
var rd = Je.ReactCurrentBatchConfig;
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Gr = vt(null),
  Kr = null,
  Qt = null,
  fo = null;
function po() {
  fo = Qt = Kr = null;
}
function mo(e) {
  var t = Gr.current;
  j(Gr), (e._currentValue = t);
}
function _i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qt(e, t) {
  (Kr = e),
    (fo = Qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (fo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qt === null)) {
      if (Kr === null) throw Error(y(308));
      (Qt = e), (Kr.dependencies = { lanes: 0, firstContext: e });
    } else Qt = Qt.next = e;
  return t;
}
var xt = null;
function ho(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ho(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function vo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ho(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Nr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), eo(e, n);
  }
}
function ku(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), o === null ? (i = f) : (o.next = f), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = f) : (u.next = f),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = f = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next = {
            eventTime: w,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          });
        e: {
          var S = e,
            v = u;
          switch (((p = t), (w = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                m = S.call(w, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (p = typeof S == "function" ? S.call(w, m, p) : S),
                p == null)
              )
                break e;
              m = $({}, m, p);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((f = h = w), (s = m)) : (h = h.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Mt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Eu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var sa = new os.Component().refs;
function Ni(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ft(e),
      i = Ge(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Re(t, e, l, r), Nr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ft(e),
      i = Ge(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Re(t, e, l, r), Nr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ft(e),
      l = Ge(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Re(t, e, r, n), Nr(t, e, r));
  },
};
function Cu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, i)
      : !0
  );
}
function aa(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = pe(t) ? zt : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? tn(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = sa), vo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = pe(t) ? zt : ie.current), (l.context = tn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ni(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Yr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === sa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _u(e) {
  var t = e._init;
  return t(e._payload);
}
function ca(e) {
  function t(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = dt(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, a, d) {
    return (
      (c.index = d),
      e
        ? ((d = c.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, d, g) {
    return a === null || a.tag !== 6
      ? ((a = Kl(d, c.mode, g)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function s(c, a, d, g) {
    var E = d.type;
    return E === jt
      ? h(c, a, d.props.children, g, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === be &&
            _u(E) === a.type))
      ? ((g = l(a, d.props)), (g.ref = yn(c, a, d)), (g.return = c), g)
      : ((g = Dr(d.type, d.key, d.props, null, c.mode, g)),
        (g.ref = yn(c, a, d)),
        (g.return = c),
        g);
  }
  function f(c, a, d, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Yl(d, c.mode, g)), (a.return = c), a)
      : ((a = l(a, d.children || [])), (a.return = c), a);
  }
  function h(c, a, d, g, E) {
    return a === null || a.tag !== 7
      ? ((a = Pt(d, c.mode, g, E)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function m(c, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Kl("" + a, c.mode, d)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ir:
          return (
            (d = Dr(a.type, a.key, a.props, null, c.mode, d)),
            (d.ref = yn(c, null, a)),
            (d.return = c),
            d
          );
        case Ft:
          return (a = Yl(a, c.mode, d)), (a.return = c), a;
        case be:
          var g = a._init;
          return m(c, g(a._payload), d);
      }
      if (En(a) || pn(a))
        return (a = Pt(a, c.mode, d, null)), (a.return = c), a;
      vr(c, a);
    }
    return null;
  }
  function p(c, a, d, g) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(c, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === E ? s(c, a, d, g) : null;
        case Ft:
          return d.key === E ? f(c, a, d, g) : null;
        case be:
          return (E = d._init), p(c, a, E(d._payload), g);
      }
      if (En(d) || pn(d)) return E !== null ? null : h(c, a, d, g, null);
      vr(c, d);
    }
    return null;
  }
  function w(c, a, d, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (c = c.get(d) || null), u(a, c, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ir:
          return (c = c.get(g.key === null ? d : g.key) || null), s(a, c, g, E);
        case Ft:
          return (c = c.get(g.key === null ? d : g.key) || null), f(a, c, g, E);
        case be:
          var x = g._init;
          return w(c, a, d, x(g._payload), E);
      }
      if (En(g) || pn(g)) return (c = c.get(d) || null), h(a, c, g, E, null);
      vr(a, g);
    }
    return null;
  }
  function S(c, a, d, g) {
    for (
      var E = null, x = null, _ = a, N = (a = 0), H = null;
      _ !== null && N < d.length;
      N++
    ) {
      _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
      var M = p(c, _, d[N], g);
      if (M === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && M.alternate === null && t(c, _),
        (a = i(M, a, N)),
        x === null ? (E = M) : (x.sibling = M),
        (x = M),
        (_ = H);
    }
    if (N === d.length) return n(c, _), U && St(c, N), E;
    if (_ === null) {
      for (; N < d.length; N++)
        (_ = m(c, d[N], g)),
          _ !== null &&
            ((a = i(_, a, N)), x === null ? (E = _) : (x.sibling = _), (x = _));
      return U && St(c, N), E;
    }
    for (_ = r(c, _); N < d.length; N++)
      (H = w(_, c, N, d[N], g)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? N : H.key),
          (a = i(H, a, N)),
          x === null ? (E = H) : (x.sibling = H),
          (x = H));
    return (
      e &&
        _.forEach(function (ze) {
          return t(c, ze);
        }),
      U && St(c, N),
      E
    );
  }
  function v(c, a, d, g) {
    var E = pn(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var x = (E = null), _ = a, N = (a = 0), H = null, M = d.next();
      _ !== null && !M.done;
      N++, M = d.next()
    ) {
      _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
      var ze = p(c, _, M.value, g);
      if (ze === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && ze.alternate === null && t(c, _),
        (a = i(ze, a, N)),
        x === null ? (E = ze) : (x.sibling = ze),
        (x = ze),
        (_ = H);
    }
    if (M.done) return n(c, _), U && St(c, N), E;
    if (_ === null) {
      for (; !M.done; N++, M = d.next())
        (M = m(c, M.value, g)),
          M !== null &&
            ((a = i(M, a, N)), x === null ? (E = M) : (x.sibling = M), (x = M));
      return U && St(c, N), E;
    }
    for (_ = r(c, _); !M.done; N++, M = d.next())
      (M = w(_, c, N, M.value, g)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? N : M.key),
          (a = i(M, a, N)),
          x === null ? (E = M) : (x.sibling = M),
          (x = M));
    return (
      e &&
        _.forEach(function (fn) {
          return t(c, fn);
        }),
      U && St(c, N),
      E
    );
  }
  function P(c, a, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === jt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (((E = d.type), E === jt)) {
                  if (x.tag === 7) {
                    n(c, x.sibling),
                      (a = l(x, d.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  x.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === be &&
                    _u(E) === x.type)
                ) {
                  n(c, x.sibling),
                    (a = l(x, d.props)),
                    (a.ref = yn(c, x, d)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                n(c, x);
                break;
              } else t(c, x);
              x = x.sibling;
            }
            d.type === jt
              ? ((a = Pt(d.props.children, c.mode, g, d.key)),
                (a.return = c),
                (c = a))
              : ((g = Dr(d.type, d.key, d.props, null, c.mode, g)),
                (g.ref = yn(c, a, d)),
                (g.return = c),
                (c = g));
          }
          return o(c);
        case Ft:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(c, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  n(c, a);
                  break;
                }
              else t(c, a);
              a = a.sibling;
            }
            (a = Yl(d, c.mode, g)), (a.return = c), (c = a);
          }
          return o(c);
        case be:
          return (x = d._init), P(c, a, x(d._payload), g);
      }
      if (En(d)) return S(c, a, d, g);
      if (pn(d)) return v(c, a, d, g);
      vr(c, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
          : (n(c, a), (a = Kl(d, c.mode, g)), (a.return = c), (c = a)),
        o(c))
      : n(c, a);
  }
  return P;
}
var rn = ca(!0),
  fa = ca(!1),
  tr = {},
  $e = vt(tr),
  Qn = vt(tr),
  Gn = vt(tr);
function _t(e) {
  if (e === tr) throw Error(y(174));
  return e;
}
function go(e, t) {
  switch ((R(Gn, t), R(Qn, e), R($e, tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e));
  }
  j($e), R($e, t);
}
function ln() {
  j($e), j(Qn), j(Gn);
}
function da(e) {
  _t(Gn.current);
  var t = _t($e.current),
    n = ii(t, e.type);
  t !== n && (R(Qn, e), R($e, n));
}
function yo(e) {
  Qn.current === e && (j($e), j(Qn));
}
var A = vt(0);
function Xr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function wo() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Pr = Je.ReactCurrentDispatcher,
  Bl = Je.ReactCurrentBatchConfig,
  It = 0,
  V = null,
  Y = null,
  J = null,
  Zr = !1,
  In = !1,
  Kn = 0,
  ld = 0;
function ne() {
  throw Error(y(321));
}
function So(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function ko(e, t, n, r, l, i) {
  if (
    ((It = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? sd : ad),
    (e = n(r, l)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), (Kn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (J = Y = null),
        (t.updateQueue = null),
        (Pr.current = cd),
        (e = n(r, l));
    } while (In);
  }
  if (
    ((Pr.current = Jr),
    (t = Y !== null && Y.next !== null),
    (It = 0),
    (J = Y = V = null),
    (Zr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Eo() {
  var e = Kn !== 0;
  return (Kn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (V.memoizedState = J = e) : (J = J.next = e), J;
}
function Pe() {
  if (Y === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      J === null ? (V.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      f = i;
    do {
      var h = f.lane;
      if ((It & h) === h)
        s !== null &&
          (s = s.next = {
            lane: 0,
            action: f.action,
            hasEagerState: f.hasEagerState,
            eagerState: f.eagerState,
            next: null,
          }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var m = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= h),
          (Mt |= h);
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? (o = r) : (s.next = u),
      Oe(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Mt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Oe(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function pa() {}
function ma(e, t) {
  var n = V,
    r = Pe(),
    l = t(),
    i = !Oe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Co(ga.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xn(9, va.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    It & 30 || ha(n, t, l);
  }
  return l;
}
function ha(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function va(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ya(t) && wa(e);
}
function ga(e, t, n) {
  return n(function () {
    ya(t) && wa(e);
  });
}
function ya(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function wa(e) {
  var t = Xe(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Nu(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ud.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Xn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sa() {
  return Pe().memoizedState;
}
function zr(e, t, n, r) {
  var l = Ue();
  (V.flags |= e),
    (l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r));
}
function dl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && So(r, o.deps))) {
      l.memoizedState = Xn(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Xn(1 | t, n, i, r));
}
function Pu(e, t) {
  return zr(8390656, 8, e, t);
}
function Co(e, t) {
  return dl(2048, 8, e, t);
}
function ka(e, t) {
  return dl(4, 2, e, t);
}
function Ea(e, t) {
  return dl(4, 4, e, t);
}
function Ca(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), dl(4, 4, Ca.bind(null, t, e), n)
  );
}
function xo() {}
function _a(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && So(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Na(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && So(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pa(e, t, n) {
  return It & 21
    ? (Oe(n, t) || ((n = Is()), (V.lanes |= n), (Mt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function id(e, t) {
  var n = T;
  (T = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (T = n), (Bl.transition = r);
  }
}
function za() {
  return Pe().memoizedState;
}
function od(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    La(e))
  )
    Ia(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = ue();
    Re(n, e, r, l), Ma(n, t, r);
  }
}
function ud(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (La(e)) Ia(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), ho(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)),
      n !== null && ((l = ue()), Re(n, e, r, l), Ma(n, t, r));
  }
}
function La(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Ia(e, t) {
  In = Zr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ma(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), eo(e, n);
  }
}
var Jr = {
    readContext: Ne,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  sd = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Pu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zr(4194308, 4, Ca.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = od.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nu,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Nu(!1),
        t = e[0];
      return (e = id.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Ue();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        It & 30 || ha(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Pu(ga.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xn(9, va.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = q.identifierPrefix;
      if (U) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ld++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ad = {
    readContext: Ne,
    useCallback: _a,
    useContext: Ne,
    useEffect: Co,
    useImperativeHandle: xa,
    useInsertionEffect: ka,
    useLayoutEffect: Ea,
    useMemo: Na,
    useReducer: Hl,
    useRef: Sa,
    useState: function () {
      return Hl(Yn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Pe();
      return Pa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Yn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: za,
    unstable_isNewReconciler: !1,
  },
  cd = {
    readContext: Ne,
    useCallback: _a,
    useContext: Ne,
    useEffect: Co,
    useImperativeHandle: xa,
    useInsertionEffect: ka,
    useLayoutEffect: Ea,
    useMemo: Na,
    useReducer: Wl,
    useRef: Sa,
    useState: function () {
      return Wl(Yn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Pe();
      return Y === null ? (t.memoizedState = e) : Pa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Yn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: pa,
    useSyncExternalStore: ma,
    useId: za,
    unstable_isNewReconciler: !1,
  };
function on(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fd = typeof WeakMap == "function" ? WeakMap : Map;
function Da(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      br || ((br = !0), (Ui = r)), zi(e, t);
    }),
    n
  );
}
function Ta(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        zi(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = _d.bind(null, e, t, n)), t.then(e, e));
}
function Lu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Iu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ge(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dd = Je.ReactCurrentOwner,
  fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? fa(t, null, n, r) : rn(t, e.child, n, r);
}
function Mu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    qt(t, l),
    (r = ko(e, t, n, r, i, l)),
    (n = Eo()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (U && n && so(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Du(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Do(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ra(e, t, i, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ra(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($n(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Li(e, t, n, r, l);
}
function Oa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Kt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Kt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        R(Kt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Kt, ve),
      (ve |= r);
  return oe(e, t, l, n), t.child;
}
function Fa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Li(e, t, n, r, l) {
  var i = pe(n) ? zt : ie.current;
  return (
    (i = tn(t, i)),
    qt(t, l),
    (n = ko(e, t, n, r, i, l)),
    (r = Eo()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (U && r && so(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Tu(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Hr(t);
  } else i = !1;
  if ((qt(t, l), t.stateNode === null))
    Lr(e, t), aa(t, n, r), Pi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Ne(f))
      : ((f = pe(n) ? zt : ie.current), (f = tn(t, f)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && xu(t, o, r, f)),
      (et = !1);
    var p = t.memoizedState;
    (o.state = p),
      Yr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || et
        ? (typeof h == "function" && (Ni(t, n, h, r), (s = t.memoizedState)),
          (u = et || Cu(t, n, u, r, p, s, f))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = f),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ua(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ie(t.type, u)),
      (o.props = f),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = pe(n) ? zt : ie.current), (s = tn(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && xu(t, o, r, s)),
      (et = !1),
      (p = t.memoizedState),
      (o.state = p),
      Yr(t, r, o, l);
    var S = t.memoizedState;
    u !== m || p !== S || de.current || et
      ? (typeof w == "function" && (Ni(t, n, w, r), (S = t.memoizedState)),
        (f = et || Cu(t, n, f, r, p, S, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = f))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ii(e, t, n, r, i, l);
}
function Ii(e, t, n, r, l, i) {
  Fa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && yu(t, n, !1), Ze(e, t, i);
  (r = t.stateNode), (dd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = rn(t, e.child, null, i)), (t.child = rn(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && yu(t, n, !0),
    t.child
  );
}
function ja(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gu(e, t.context, !1),
    go(e, t.containerInfo);
}
function Ru(e, t, n, r, l) {
  return nn(), co(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Mi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(A, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = hl(o, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Di(n)),
              (t.memoizedState = Mi),
              e)
            : _o(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return pd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = Pt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Di(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Mi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _o(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && co(r),
    rn(t, e.child, null, n),
    (e = _o(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function pd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(y(422)))), gr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = hl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && rn(t, e.child, null, o),
        (t.child.memoizedState = Di(o)),
        (t.memoizedState = Mi),
        i);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Ql(i, r, void 0)), gr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Re(r, e, l, -1));
    }
    return Mo(), (r = Ql(Error(y(421)))), gr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Nd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = st(l.nextSibling)),
      (ye = t),
      (U = !0),
      (De = null),
      e !== null &&
        ((Ee[Ce++] = We),
        (Ee[Ce++] = Qe),
        (Ee[Ce++] = Lt),
        (We = e.id),
        (Qe = e.overflow),
        (Lt = t)),
      (t = _o(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ou(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _i(e.return, t, n);
}
function Gl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ou(e, n, t);
        else if (e.tag === 19) Ou(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((R(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Xr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Gl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Gl(t, !0, n, null, i);
        break;
      case "together":
        Gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function md(e, t, n) {
  switch (t.tag) {
    case 3:
      ja(t), nn();
      break;
    case 5:
      da(t);
      break;
    case 1:
      pe(t.type) && Hr(t);
      break;
    case 4:
      go(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      R(Gr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ua(e, t, n)
          : (R(A, A.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      R(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Aa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Oa(e, t, n);
  }
  return Ze(e, t, n);
}
var Va, Ti, $a, Ba;
Va = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ti = function () {};
$a = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t($e.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      case "select":
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = li(e, l)), (r = li(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $r);
    }
    oi(n, r);
    var o;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Rn.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(f, n)), (n = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Rn.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && O("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Ba = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function hd(e, t, n) {
  var r = t.pendingProps;
  switch ((ao(t), t.tag)) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && Br(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ln(),
        j(de),
        j(ie),
        wo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && ($i(De), (De = null)))),
        Ti(e, t),
        re(t),
        null
      );
    case 5:
      yo(t);
      var l = _t(Gn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $a(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = _t($e.current)), hr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ae] = t), (r[Wn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xn.length; l++) O(xn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Wo(r, i), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                O("invalid", r);
              break;
            case "textarea":
              Go(r, i), O("invalid", r);
          }
          oi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Rn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  O("scroll", r);
            }
          switch (n) {
            case "input":
              or(r), Qo(r, i, !0);
              break;
            case "textarea":
              or(r), Ko(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ae] = t),
            (e[Wn] = r),
            Va(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ui(n, r)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xn.length; l++) O(xn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (l = r);
                break;
              case "details":
                O("toggle", e), (l = r);
                break;
              case "input":
                Wo(e, r), (l = ti(e, r)), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = $({}, r, { value: void 0 })),
                  O("invalid", e);
                break;
              case "textarea":
                Go(e, r), (l = li(e, r)), O("invalid", e);
                break;
              default:
                l = r;
            }
            oi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ys(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && vs(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && On(e, s)
                    : typeof s == "number" && On(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Rn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && O("scroll", e)
                      : s != null && Yi(e, i, s, o));
              }
            switch (n) {
              case "input":
                or(e), Qo(e, r, !1);
                break;
              case "textarea":
                or(e), Ko(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ba(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = _t(Gn.current)), _t($e.current), hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (j(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ge !== null && t.mode & 1 && !(t.flags & 128))
          ia(), nn(), (t.flags |= 98560), (i = !1);
        else if (((i = hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ae] = t;
          } else
            nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else De !== null && ($i(De), (De = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? X === 0 && (X = 3) : Mo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        ln(), Ti(e, t), e === null && Bn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return mo(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Br(), re(t), null;
    case 19:
      if ((j(A), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) wn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Xr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    wn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return R(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > un &&
            ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return re(t), null;
          } else
            2 * G() - i.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = A.current),
          R(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Io(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function vd(e, t) {
  switch ((ao(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Br(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ln(),
        j(de),
        j(ie),
        wo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return yo(t), null;
    case 13:
      if ((j(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return j(A), null;
    case 4:
      return ln(), null;
    case 10:
      return mo(t.type._context), null;
    case 22:
    case 23:
      return Io(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  le = !1,
  gd = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Ri(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Fu = !1;
function yd(e, t) {
  if (((gi = Ur), (e = Gs()), uo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            f = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++f === l && (u = o),
                p === i && ++h === r && (s = o),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yi = { focusedElem: e, selectionRange: n }, Ur = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    P = S.memoizedState,
                    c = t.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ie(t.type, v),
                      P
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          B(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (S = Fu), (Fu = !1), S;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ri(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ha(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ha(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[Wn], delete t[ki], delete t[ed], delete t[td])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fi(e, t, n), e = e.sibling; e !== null; ) Fi(e, t, n), (e = e.sibling);
}
function ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ji(e, t, n), e = e.sibling; e !== null; ) ji(e, t, n), (e = e.sibling);
}
var b = null,
  Me = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Qa(e, t, n), (n = n.sibling);
}
function Qa(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Gt(n, t);
    case 6:
      var r = b,
        l = Me;
      (b = null),
        qe(e, t, n),
        (b = r),
        (Me = l),
        b !== null &&
          (Me
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Me
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            An(e))
          : Al(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Me),
        (b = n.stateNode.containerInfo),
        (Me = !0),
        qe(e, t, n),
        (b = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ri(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), qe(e, t, n), (le = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Uu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gd()),
      t.forEach(function (r) {
        var l = Pd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Me = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        Qa(i, o, l), (b = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        B(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ga(t, e), (t = t.sibling);
}
function Ga(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), je(e), r & 4)) {
        try {
          Mn(3, e, e.return), pl(3, e);
        } catch (v) {
          B(e, e.return, v);
        }
        try {
          Mn(5, e, e.return);
        } catch (v) {
          B(e, e.return, v);
        }
      }
      break;
    case 1:
      Le(t, e), je(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        je(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (v) {
          B(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ps(l, i),
              ui(u, o);
            var f = ui(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === "style"
                ? ys(l, m)
                : h === "dangerouslySetInnerHTML"
                ? vs(l, m)
                : h === "children"
                ? On(l, m)
                : Yi(l, h, m, f);
            }
            switch (u) {
              case "input":
                ni(l, i);
                break;
              case "textarea":
                ms(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Yt(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yt(l, !!i.multiple, i.defaultValue, !0)
                      : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Wn] = i;
          } catch (v) {
            B(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Le(t, e), je(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (v) {
          B(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          An(t.containerInfo);
        } catch (v) {
          B(e, e.return, v);
        }
      break;
    case 4:
      Le(t, e), je(e);
      break;
    case 13:
      Le(t, e),
        je(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zo = G())),
        r & 4 && Uu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (f = le) || h), Le(t, e), (le = f)) : Le(t, e),
        je(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (((p = k), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, p, p.return);
                  break;
                case 1:
                  Gt(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      B(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Gt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Vu(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (k = w)) : Vu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = gs("display", o)));
              } catch (v) {
                B(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = f ? "" : m.memoizedProps;
              } catch (v) {
                B(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), je(e), r & 4 && Uu(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), je(e);
  }
}
function je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (On(l, ""), (r.flags &= -33));
          var i = ju(e);
          ji(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = ju(e);
          Fi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wd(e, t, n) {
  (k = e), Ka(e);
}
function Ka(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || yr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = yr;
        var f = le;
        if (((yr = o), (le = s) && !f))
          for (k = l; k !== null; )
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $u(l)
                : s !== null
                ? ((s.return = o), (k = s))
                : $u(l);
        for (; i !== null; ) (k = i), Ka(i), (i = i.sibling);
        (k = l), (yr = u), (le = f);
      }
      Au(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : Au(e);
  }
}
function Au(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Eu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Eu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && An(m);
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
              throw Error(y(163));
          }
        le || (t.flags & 512 && Oi(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Vu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function $u(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Oi(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Oi(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var Sd = Math.ceil,
  qr = Je.ReactCurrentDispatcher,
  No = Je.ReactCurrentOwner,
  _e = Je.ReactCurrentBatchConfig,
  D = 0,
  q = null,
  K = null,
  ee = 0,
  ve = 0,
  Kt = vt(0),
  X = 0,
  Zn = null,
  Mt = 0,
  ml = 0,
  Po = 0,
  Dn = null,
  ce = null,
  zo = 0,
  un = 1 / 0,
  Be = null,
  br = !1,
  Ui = null,
  ct = null,
  wr = !1,
  lt = null,
  el = 0,
  Tn = 0,
  Ai = null,
  Ir = -1,
  Mr = 0;
function ue() {
  return D & 6 ? G() : Ir !== -1 ? Ir : (Ir = G());
}
function ft(e) {
  return e.mode & 1
    ? D & 2 && ee !== 0
      ? ee & -ee
      : rd.transition !== null
      ? (Mr === 0 && (Mr = Is()), Mr)
      : ((e = T),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : js(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Ai = null), Error(y(185)));
  qn(e, n, r),
    (!(D & 2) || e !== q) &&
      (e === q && (!(D & 2) && (ml |= n), X === 4 && nt(e, ee)),
      me(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((un = G() + 500), cl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  nf(e, t);
  var r = jr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && Zo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zo(n), t === 1))
      e.tag === 0 ? nd(Bu.bind(null, e)) : na(Bu.bind(null, e)),
        qf(function () {
          !(D & 6) && gt();
        }),
        (n = null);
    else {
      switch (Ms(r)) {
        case 1:
          n = bi;
          break;
        case 4:
          n = zs;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = Ls;
          break;
        default:
          n = Fr;
      }
      n = tc(n, Ya.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ya(e, t) {
  if (((Ir = -1), (Mr = 0), D & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (bt() && e.callbackNode !== n) return null;
  var r = jr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = Za();
    (q !== e || ee !== t) && ((Be = null), (un = G() + 500), Nt(e, t));
    do
      try {
        Cd();
        break;
      } catch (u) {
        Xa(e, u);
      }
    while (!0);
    po(),
      (qr.current = i),
      (D = l),
      K !== null ? (t = 0) : ((q = null), (ee = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = di(e)), l !== 0 && ((r = l), (t = Vi(e, l)))), t === 1)
    )
      throw ((n = Zn), Nt(e, 0), nt(e, r), me(e, G()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !kd(l) &&
          ((t = tl(e, r)),
          t === 2 && ((i = di(e)), i !== 0 && ((r = i), (t = Vi(e, i)))),
          t === 1))
      )
        throw ((n = Zn), Nt(e, 0), nt(e, r), me(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, ce, Be);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = zo + 500 - G()), 10 < t))
          ) {
            if (jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Si(kt.bind(null, e, ce, Be), t);
            break;
          }
          kt(e, ce, Be);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Si(kt.bind(null, e, ce, Be), r);
            break;
          }
          kt(e, ce, Be);
          break;
        case 5:
          kt(e, ce, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, G()), e.callbackNode === n ? Ya.bind(null, e) : null;
}
function Vi(e, t) {
  var n = Dn;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function kd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Po,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Te(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bu(e) {
  if (D & 6) throw Error(y(327));
  bt();
  var t = jr(e, 0);
  if (!(t & 1)) return me(e, G()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = di(e);
    r !== 0 && ((t = r), (n = Vi(e, r)));
  }
  if (n === 1) throw ((n = Zn), Nt(e, 0), nt(e, t), me(e, G()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, ce, Be),
    me(e, G()),
    null
  );
}
function Lo(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((un = G() + 500), cl && gt());
  }
}
function Dt(e) {
  lt !== null && lt.tag === 0 && !(D & 6) && bt();
  var t = D;
  D |= 1;
  var n = _e.transition,
    r = T;
  try {
    if (((_e.transition = null), (T = 1), e)) return e();
  } finally {
    (T = r), (_e.transition = n), (D = t), !(D & 6) && gt();
  }
}
function Io() {
  (ve = Kt.current), j(Kt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jf(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((ao(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Br();
          break;
        case 3:
          ln(), j(de), j(ie), wo();
          break;
        case 5:
          yo(r);
          break;
        case 4:
          ln();
          break;
        case 13:
          j(A);
          break;
        case 19:
          j(A);
          break;
        case 10:
          mo(r.type._context);
          break;
        case 22:
        case 23:
          Io();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = dt(e.current, null)),
    (ee = ve = t),
    (X = 0),
    (Zn = null),
    (Po = ml = Mt = 0),
    (ce = Dn = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function Xa(e, t) {
  do {
    var n = K;
    try {
      if ((po(), (Pr.current = Jr), Zr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zr = !1;
      }
      if (
        ((It = 0),
        (J = Y = V = null),
        (In = !1),
        (Kn = 0),
        (No.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Zn = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Lu(o);
          if (w !== null) {
            (w.flags &= -257),
              Iu(w, o, u, i, t),
              w.mode & 1 && zu(i, f, t),
              (t = w),
              (s = f);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              zu(i, f, t), Mo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var P = Lu(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Iu(P, o, u, i, t),
              co(on(s, u));
            break e;
          }
        }
        (i = s = on(s, u)),
          X !== 4 && (X = 2),
          Dn === null ? (Dn = [i]) : Dn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var c = Da(i, s, t);
              ku(i, c);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ct === null || !ct.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Ta(i, u, t);
                ku(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qa(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Za() {
  var e = qr.current;
  return (qr.current = Jr), e === null ? Jr : e;
}
function Mo() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Mt & 268435455) && !(ml & 268435455)) || nt(q, ee);
}
function tl(e, t) {
  var n = D;
  D |= 2;
  var r = Za();
  (q !== e || ee !== t) && ((Be = null), Nt(e, t));
  do
    try {
      Ed();
      break;
    } catch (l) {
      Xa(e, l);
    }
  while (!0);
  if ((po(), (D = n), (qr.current = r), K !== null)) throw Error(y(261));
  return (q = null), (ee = 0), X;
}
function Ed() {
  for (; K !== null; ) Ja(K);
}
function Cd() {
  for (; K !== null && !Kc(); ) Ja(K);
}
function Ja(e) {
  var t = ec(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? qa(e) : (K = t),
    (No.current = null);
}
function qa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vd(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = hd(n, t, ve)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function kt(e, t, n) {
  var r = T,
    l = _e.transition;
  try {
    (_e.transition = null), (T = 1), xd(e, t, n, r);
  } finally {
    (_e.transition = l), (T = r);
  }
  return null;
}
function xd(e, t, n, r) {
  do bt();
  while (lt !== null);
  if (D & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (rf(e, i),
    e === q && ((K = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wr ||
      ((wr = !0),
      tc(Fr, function () {
        return bt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = T;
    T = 1;
    var u = D;
    (D |= 4),
      (No.current = null),
      yd(e, n),
      Ga(n, e),
      Wf(yi),
      (Ur = !!gi),
      (yi = gi = null),
      (e.current = n),
      wd(n),
      Yc(),
      (D = u),
      (T = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (wr && ((wr = !1), (lt = e), (el = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    Jc(n.stateNode),
    me(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw ((br = !1), (e = Ui), (Ui = null), e);
  return (
    el & 1 && e.tag !== 0 && bt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ai ? Tn++ : ((Tn = 0), (Ai = e))) : (Tn = 0),
    gt(),
    null
  );
}
function bt() {
  if (lt !== null) {
    var e = Ms(el),
      t = _e.transition,
      n = T;
    try {
      if (((_e.transition = null), (T = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (el = 0), D & 6)) throw Error(y(331));
        var l = D;
        for (D |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (k = f; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (k = m);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling,
                        w = h.return;
                      if ((Ha(h), h === f)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (k = p);
                        break;
                      }
                      k = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var P = v.sibling;
                    (v.sibling = null), (v = P);
                  } while (v !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (k = c);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (k = d);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, u);
                  }
                } catch (E) {
                  B(u, u.return, E);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (k = g);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((D = l), gt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (T = n), (_e.transition = t);
    }
  }
  return !1;
}
function Hu(e, t, n) {
  (t = on(n, t)),
    (t = Da(e, t, 1)),
    (e = at(e, t, 1)),
    (t = ue()),
    e !== null && (qn(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Hu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = on(n, e)),
            (e = Ta(t, e, 1)),
            (t = at(t, e, 1)),
            (e = ue()),
            t !== null && (qn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _d(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > G() - zo)
        ? Nt(e, 0)
        : (Po |= n)),
    me(e, t);
}
function ba(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (t = 1));
  var n = ue();
  (e = Xe(e, t)), e !== null && (qn(e, t, n), me(e, n));
}
function Nd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ba(e, n);
}
function Pd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), ba(e, n);
}
var ec;
ec = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), md(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && t.flags & 1048576 && ra(t, Qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Lr(e, t), (e = t.pendingProps);
      var l = tn(t, ie.current);
      qt(t, n), (l = ko(null, t, r, e, l, n));
      var i = Eo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), Hr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            vo(t),
            (l.updater = fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = Ii(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && so(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Lr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ld(r)),
          (e = Ie(r, e)),
          l)
        ) {
          case 0:
            t = Li(null, t, r, e, n);
            break e;
          case 1:
            t = Tu(null, t, r, e, n);
            break e;
          case 11:
            t = Mu(null, t, r, e, n);
            break e;
          case 14:
            t = Du(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Li(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Tu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ja(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ua(e, t),
          Yr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = on(Error(y(423)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = on(Error(y(424)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else
            for (
              ge = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                De = null,
                n = fa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nn(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        da(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
        Fa(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Ua(e, t, n);
    case 4:
      return (
        go(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Mu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          R(Gr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Oe(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ge(-1, n & -n)), (s.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var h = f.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (f.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      _i(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  _i(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        qt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ie(r, t.pendingProps)),
        (l = Ie(r.type, l)),
        Du(e, t, r, l, n)
      );
    case 15:
      return Ra(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Lr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Hr(t)) : (e = !1),
        qt(t, n),
        aa(t, r, l),
        Pi(t, r, l, n),
        Ii(null, t, r, !0, e, n)
      );
    case 19:
      return Aa(e, t, n);
    case 22:
      return Oa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function tc(e, t) {
  return Ps(e, t);
}
function zd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xe(e, t, n, r) {
  return new zd(e, t, n, r);
}
function Do(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ld(e) {
  if (typeof e == "function") return Do(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zi)) return 11;
    if (e === Ji) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Do(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case jt:
        return Pt(n.children, l, i, t);
      case Xi:
        (o = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = xe(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = i), e
        );
      case ql:
        return (e = xe(13, n, t, l)), (e.elementType = ql), (e.lanes = i), e;
      case bl:
        return (e = xe(19, n, t, l)), (e.elementType = bl), (e.lanes = i), e;
      case cs:
        return hl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ss:
              o = 10;
              break e;
            case as:
              o = 9;
              break e;
            case Zi:
              o = 11;
              break e;
            case Ji:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Pt(e, t, n, r) {
  return (e = xe(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = xe(22, e, r, t)),
    (e.elementType = cs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, t, n) {
  return (e = xe(6, e, null, t)), (e.lanes = n), e;
}
function Yl(e, t, n) {
  return (
    (t = xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Id(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function To(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Id(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = xe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vo(i),
    e
  );
}
function Md(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return ta(e, n, t);
  }
  return t;
}
function rc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = To(n, r, !0, e, l, i, o, u, s)),
    (e.context = nc(null)),
    (n = e.current),
    (r = ue()),
    (l = ft(n)),
    (i = Ge(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    qn(e, l, r),
    me(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = ft(l);
  return (
    (n = nc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (Re(e, l, o, i), Nr(e, l, o)),
    o
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ro(e, t) {
  Wu(e, t), (e = e.alternate) && Wu(e, t);
}
function Dd() {
  return null;
}
var lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Oo(e) {
  this._internalRoot = e;
}
gl.prototype.render = Oo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  vl(e, t, null, null);
};
gl.prototype.unmount = Oo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dt(function () {
      vl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && Fs(e);
  }
};
function Fo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qu() {}
function Td(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = nl(o);
        i.call(f);
      };
    }
    var o = rc(t, r, e, 0, null, !1, !1, "", Qu);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = nl(s);
      u.call(f);
    };
  }
  var s = To(e, 0, !1, null, null, !1, !1, "", Qu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      vl(t, s, n, r);
    }),
    s
  );
}
function wl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = nl(o);
        u.call(s);
      };
    }
    vl(t, o, e, l);
  } else o = Td(n, t, e, l, r);
  return nl(o);
}
Ds = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (eo(t, n | 1), me(t, G()), !(D & 6) && ((un = G() + 500), gt()));
      }
      break;
    case 13:
      Dt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ue();
          Re(r, e, 1, l);
        }
      }),
        Ro(e, 1);
  }
};
to = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ue();
      Re(t, e, 134217728, n);
    }
    Ro(e, 134217728);
  }
};
Ts = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = ue();
      Re(n, e, t, r);
    }
    Ro(e, t);
  }
};
Rs = function () {
  return T;
};
Os = function (e, t) {
  var n = T;
  try {
    return (T = e), t();
  } finally {
    T = n;
  }
};
ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(y(90));
            ds(r), ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      ms(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
ks = Lo;
Es = Dt;
var Rd = { usingClientEntryPoint: !1, Events: [er, $t, al, ws, Ss, Lo] },
  Sn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Od = {
    bundleType: Sn.bundleType,
    version: Sn.version,
    rendererPackageName: Sn.rendererPackageName,
    rendererConfig: Sn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sn.findFiberByHostInstance || Dd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      (il = Sr.inject(Od)), (Ve = Sr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fo(t)) throw Error(y(200));
  return Md(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Fo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = lc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = To(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Oo(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = _s(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Dt(e);
};
Se.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return wl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Fo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = lc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = rc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new gl(t);
};
Se.render = function (e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return wl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Dt(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Lo;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return wl(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function ic() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic);
    } catch (e) {
      console.error(e);
    }
}
ic(), (rs.exports = Se);
var Fd = rs.exports,
  Gu = Fd;
(Xl.createRoot = Gu.createRoot), (Xl.hydrateRoot = Gu.hydrateRoot);
var F = ((e) => (
    (e[(e.UNDISCOVERED = 0)] = "UNDISCOVERED"),
    (e[(e.DISCOVERED = 1)] = "DISCOVERED"),
    (e[(e.FLAGGED = 2)] = "FLAGGED"),
    e
  ))(F || {}),
  Et = ((e) => (
    (e[(e.SMALL = 0)] = "SMALL"),
    (e[(e.MEDIUM = 1)] = "MEDIUM"),
    (e[(e.BIG = 2)] = "BIG"),
    e
  ))(Et || {}),
  he = ((e) => (
    (e[(e.INITIAL = 0)] = "INITIAL"),
    (e[(e.RUNNING = 1)] = "RUNNING"),
    (e[(e.FINISHED = 2)] = "FINISHED"),
    e
  ))(he || {});
const jd =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2060%2060'%20style='enable-background:new%200%200%2060%2060;'%20xml:space='preserve'%3e%3cpolygon%20style='fill:%23CC4B4C;'%20points='52,23.5%2010,40%2010,22%2010,4%20'/%3e%3cpath%20style='fill:%23424A60;'%20d='M9,0C8.448,0,8,0.447,8,1v3v55c0,0.553,0.448,1,1,1s1-0.447,1-1V4V1C10,0.447,9.552,0,9,0z'/%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e",
  Ud = "/assets/bomb-nZAOQ2Zf.svg",
  Ad =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3ccircle%20style='fill:%23FFD93B;'%20cx='256'%20cy='256'%20r='256'/%3e%3cpath%20style='fill:%233E4347;'%20d='M256,420.544c-74.864,0-140.096-50.704-158.624-123.28c-1.456-5.712,1.984-11.52,7.696-12.976%20c5.68-1.488,11.504,1.984,12.96,7.696c16.128,63.136,72.848,107.232,137.952,107.232s121.84-44.096,137.952-107.232%20c1.44-5.712,7.248-9.184,12.976-7.696c5.712,1.456,9.152,7.264,7.696,12.976C396.096,369.84,330.864,420.544,256,420.544z'/%3e%3cpath%20style='fill:%23F4C534;'%20d='M512,256c0,141.44-114.64,256-256,256c-80.48,0-152.32-37.12-199.28-95.28%20c43.92,35.52,99.84,56.72,160.72,56.72c141.36,0,256-114.56,256-256c0-60.88-21.2-116.8-56.72-160.72%20C474.8,103.68,512,175.52,512,256z'/%3e%3cellipse%20style='fill:%233E4347;'%20cx='173.328'%20cy='220.304'%20rx='39.232'%20ry='46.624'/%3e%3cpath%20style='fill:%235A5F63;'%20d='M191.024,210.272c-3.056,2.4-8.08,1.216-11.296-2.688s-3.376-9.136-0.32-11.536%20c3.04-2.512,8.08-1.328,11.28,2.576C193.92,202.64,193.952,207.776,191.024,210.272z'/%3e%3cellipse%20style='fill:%233E4347;'%20cx='338.72'%20cy='220.304'%20rx='39.232'%20ry='46.624'/%3e%3cpath%20style='fill:%235A5F63;'%20d='M356.384,210.272c-3.056,2.4-8.08,1.216-11.296-2.688s-3.376-9.136-0.32-11.536%20c3.04-2.512,8.064-1.328,11.28,2.576C359.28,202.64,359.312,207.776,356.384,210.272z'/%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e",
  Vd =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3ccircle%20style='fill:%23FFD93B;'%20cx='256'%20cy='256'%20r='256'/%3e%3cpath%20style='fill:%23F4C534;'%20d='M512,256c0,141.44-114.64,256-256,256c-80.48,0-152.32-37.12-199.28-95.28%20c43.92,35.52,99.84,56.72,160.72,56.72c141.36,0,256-114.56,256-256c0-60.88-21.2-116.8-56.72-160.72%20C474.8,103.68,512,175.52,512,256z'/%3e%3cg%3e%3cpath%20style='fill:%233E4347;'%20d='M332.432,384.8c0,7.472-5.968,13.328-13.328,13.328H192.912c-7.36,0-13.328-5.872-13.328-13.328%20c0-7.36,5.968-13.328,13.328-13.328h126.192C326.448,371.472,332.432,377.44,332.432,384.8z'/%3e%3cpath%20style='fill:%233E4347;'%20d='M111.808,261.68c6.256-3.68,24.768,16.16,53.84,17.248c30.096,1.12,47.584-20.928,53.84-17.248%20c7.792,2.672-2.832,53.552-53.84,53.744C114.656,315.232,104.016,264.352,111.808,261.68z'/%3e%3c/g%3e%3cpath%20style='fill:%23E9B02C;'%20d='M99.808,239.312c-5.808-0.928-9.776-6.4-8.832-12.224c0.944-5.808,6.32-9.792,12.224-8.832%20c59.968,9.632,78.192-33.2,78.368-33.632c2.208-5.456,8.416-8.08,13.904-5.856c5.456,2.224,8.08,8.448,5.856,13.904%20C189.296,222.144,151.504,247.616,99.808,239.312z'/%3e%3cpath%20style='fill:%233E4347;'%20d='M400.192,261.68c-6.256-3.68-24.768,16.16-53.84,17.248c-30.096,1.12-47.584-20.928-53.84-17.248%20c-7.792,2.672,2.832,53.552,53.84,53.744C397.344,315.232,407.984,264.352,400.192,261.68z'/%3e%3cpath%20style='fill:%23E9B02C;'%20d='M310.672,192.656c-2.224-5.456,0.4-11.68,5.856-13.904c5.44-2.224,11.648,0.384,13.888,5.808%20c0.8,1.92,19.12,43.216,78.384,33.696c5.872-0.96,11.296,3.024,12.224,8.832c0.928,5.824-3.024,11.296-8.832,12.224%20C360.864,247.568,322.8,222.4,310.672,192.656z'/%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e";
class $d extends ll.Component {
  constructor(n) {
    super(n);
    Fe(this, "createGame", () => {
      let n, r, l;
      switch (this.state.gameType) {
        case Et.SMALL:
          (n = r = 10), (l = 10);
          break;
        case Et.MEDIUM:
          (n = r = 16), (l = 40);
          break;
        default:
          (n = 16), (r = 30), (l = 99);
          break;
      }
      let i = [];
      for (let o = 0; o < n; o++)
        i = [
          ...i,
          [...Array(r)].map(() => ({
            mined: !1,
            neighbourMines: 0,
            state: F.UNDISCOVERED,
          })),
        ];
      this.setState({ gameMap: i, mines: l, remainingCells: n * r - l });
    });
    Fe(this, "startGame", (n, r) => {
      var u, s, f, h, m, p, w, S;
      let l = [...this.state.gameMap.map((v) => [...v])],
        i,
        o;
      for (let { mines: v } = this.state; v > 0; v--) {
        let P = !1;
        for (; !P; )
          (i = Math.floor(Math.random() * Math.floor(l.length))),
            (o = Math.floor(Math.random() * Math.floor(l[0].length))),
            !((i === n && o === r) || l[i][o].mined) &&
              ((l[i][o].mined = !0), (P = !0));
      }
      for (let v = 0; v < this.state.gameMap.length; v++)
        for (let P = 0; P < this.state.gameMap[v].length; P++) {
          let c = 0;
          v - 1 >= 0 &&
            P - 1 >= 0 &&
            (u = l[v - 1][P - 1]) != null &&
            u.mined &&
            c++,
            P - 1 >= 0 && (s = l[v][P - 1]) != null && s.mined && c++,
            v + 1 < l.length &&
              P - 1 >= 0 &&
              (f = l[v + 1][P - 1]) != null &&
              f.mined &&
              c++,
            v - 1 >= 0 && (h = l[v - 1][P]) != null && h.mined && c++,
            v + 1 < l.length && (m = l[v + 1][P]) != null && m.mined && c++,
            v - 1 >= 0 &&
              P + 1 <= l[v].length &&
              (p = l[v - 1][P + 1]) != null &&
              p.mined &&
              c++,
            P + 1 <= l[v].length && (w = l[v][P + 1]) != null && w.mined && c++,
            v + 1 < l.length &&
              P + 1 <= l[v].length &&
              (S = l[v + 1][P + 1]) != null &&
              S.mined &&
              c++,
            (l[v][P].neighbourMines = c);
        }
      (l = this.clearCell(l, n, r)),
        this.setState({ gameMap: l, gameState: he.RUNNING });
    });
    Fe(this, "loseGame", (n, r) => {
      const l = [...this.state.gameMap.map((i) => [...i])];
      for (let i = 0; i < this.state.gameMap.length; i++)
        for (let o = 0; o < this.state.gameMap[i].length; o++)
          l[i][o].mined &&
            l[i][o].state !== F.FLAGGED &&
            (l[i][o].state = F.DISCOVERED);
      (l[n][r].minePressed = !0),
        this.setState({ gameMap: l, gameState: he.FINISHED });
    });
    Fe(this, "flagCell", (n, r) => {
      const l = [...this.state.gameMap.map((i) => [...i])];
      (l[n][r].state =
        l[n][r].state === F.FLAGGED ? F.UNDISCOVERED : F.FLAGGED),
        this.setState({ gameMap: l });
    });
    Fe(this, "clearCell", (n, r, l) => {
      var o, u, s, f, h, m, p, w;
      let i = [...n.map((S) => [...S])];
      return (
        (i[r][l].state = F.DISCOVERED),
        i[r][l].neighbourMines === 0 &&
          (r - 1 >= 0 &&
            l - 1 >= 0 &&
            ((o = i[r - 1][l - 1]) == null ? void 0 : o.state) ===
              F.UNDISCOVERED &&
            (i = this.clearCell(i, r - 1, l - 1)),
          l - 1 >= 0 &&
            ((u = i[r][l - 1]) == null ? void 0 : u.state) === F.UNDISCOVERED &&
            (i = this.clearCell(i, r, l - 1)),
          r + 1 < i.length &&
            l - 1 >= 0 &&
            ((s = i[r + 1][l - 1]) == null ? void 0 : s.state) ===
              F.UNDISCOVERED &&
            (i = this.clearCell(i, r + 1, l - 1)),
          r - 1 >= 0 &&
            ((f = i[r - 1][l]) == null ? void 0 : f.state) === F.UNDISCOVERED &&
            (i = this.clearCell(i, r - 1, l)),
          r + 1 < i.length &&
            ((h = i[r + 1][l]) == null ? void 0 : h.state) === F.UNDISCOVERED &&
            (i = this.clearCell(i, r + 1, l)),
          r - 1 >= 0 &&
            l + 1 <= i[r].length &&
            ((m = i[r - 1][l + 1]) == null ? void 0 : m.state) ===
              F.UNDISCOVERED &&
            (i = this.clearCell(i, r - 1, l + 1)),
          l + 1 <= i[r].length &&
            ((p = i[r][l + 1]) == null ? void 0 : p.state) === F.UNDISCOVERED &&
            (i = this.clearCell(i, r, l + 1)),
          r + 1 < i.length &&
            l + 1 <= i[r].length &&
            ((w = i[r + 1][l + 1]) == null ? void 0 : w.state) ===
              F.UNDISCOVERED &&
            (i = this.clearCell(i, r + 1, l + 1))),
        i
      );
    });
    Fe(this, "onClickCell", (n, r, l) => {
      if (this.state.gameState !== he.FINISHED) {
        if (n.type === "click") {
          if (this.state.gameState === he.INITIAL) return this.startGame(r, l);
          if (
            this.state.gameMap[r][l].mined &&
            this.state.gameMap[r][l].state !== F.FLAGGED
          )
            return this.loseGame(r, l);
          if (this.state.gameMap[r][l].state !== F.FLAGGED) {
            const i = this.clearCell(this.state.gameMap, r, l),
              o = i.reduce(
                (u, s) =>
                  u +
                  s.reduce(
                    (f, h) =>
                      h.state === F.UNDISCOVERED && !h.mined ? f + 1 : f,
                    0
                  ),
                0
              );
            this.setState({
              gameMap: i,
              remainingCells: o,
              gameState: o === 0 ? he.FINISHED : this.state.gameState,
            });
          }
        } else if (
          n.type === "contextmenu" &&
          this.state.gameState === he.RUNNING &&
          this.state.gameMap[r][l].state !== F.DISCOVERED
        )
          return this.flagCell(r, l);
      }
    });
    Fe(this, "renderCell", (n, r, l) =>
      Q.jsx(
        "div",
        {
          className: `cell ${n.state === F.DISCOVERED && "cell-discovered"} ${
            n.state === F.FLAGGED && "cell-flagged"
          } ${n.minePressed && "cell-mine-pressed"}`,
          onContextMenu: (i) => this.onClickCell(i, r, l),
          onClick: (i) => this.onClickCell(i, r, l),
          children: Q.jsx("span", {
            className: "cell-text",
            children: this.renderCellContent(n),
          }),
        },
        `${r}-${l}`
      )
    );
    Fe(this, "renderCellContent", (n) => {
      switch (n.state) {
        case F.UNDISCOVERED:
          return Q.jsx("span", {});
        case F.DISCOVERED:
          return n.mined
            ? Q.jsx("img", { src: Ud, className: "App-icon", alt: "bomb" })
            : Q.jsx("span", {
                className: `cell-value cell-value-${n.neighbourMines}`,
                children: n.neighbourMines > 0 && n.neighbourMines,
              });
        case F.FLAGGED:
          return Q.jsx("img", { src: jd, className: "App-icon", alt: "flag" });
      }
    });
    Fe(this, "renderGame", () =>
      Q.jsx("div", {
        children: this.state.gameMap.map((n, r) =>
          Q.jsx(
            "div",
            {
              className: "row",
              children: n.map((l, i) => this.renderCell(l, r, i)),
            },
            r
          )
        ),
      })
    );
    this.state = {
      gameType: Et.SMALL,
      gameMap: [],
      mines: 10,
      gameState: he.INITIAL,
      remainingCells: -1,
    };
  }
  componentWillMount() {
    this.createGame();
  }
  render() {
    return Q.jsxs("div", {
      className: "App",
      children: [
        Q.jsxs("div", {
          className: "App-header",
          children: [
            Q.jsx("div", {
              className: "btn",
              onClick: () =>
                this.setState(
                  { gameType: Et.SMALL, gameState: he.INITIAL },
                  this.createGame
                ),
              children: "SMALL",
            }),
            Q.jsx("div", {
              className: "btn",
              onClick: () =>
                this.setState(
                  { gameType: Et.MEDIUM, gameState: he.INITIAL },
                  this.createGame
                ),
              children: "MEDIUM",
            }),
            Q.jsx("div", {
              className: "btn",
              onClick: () =>
                this.setState(
                  { gameType: Et.BIG, gameState: he.INITIAL },
                  this.createGame
                ),
              children: "BIG",
            }),
          ],
        }),
        Q.jsxs("header", {
          className: "App-game",
          children: [
            Q.jsx("div", { children: this.renderGame() }),
            this.state.gameState === he.FINISHED &&
              Q.jsxs("div", {
                className: `end ${
                  this.state.remainingCells === 0 ? "won" : "lost"
                }`,
                children: [
                  Q.jsx("img", {
                    src: this.state.remainingCells === 0 ? Ad : Vd,
                    className: "App-result-icon",
                    alt: "game-result",
                  }),
                  Q.jsx("div", {
                    className: "result-text",
                    children: this.state.remainingCells === 0 ? "Win" : "Lost",
                  }),
                  Q.jsx("div", {
                    className: "replay",
                    onClick: () =>
                      this.setState({ gameState: he.INITIAL }, this.createGame),
                    children: "Replay ?",
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  }
}
Xl.createRoot(document.getElementById("root")).render(
  Q.jsx(_c.StrictMode, { children: Q.jsx($d, {}) })
);
