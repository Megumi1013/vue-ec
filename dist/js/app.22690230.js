(function (e) {
  function t(t) {
    for (
      var r, c, i = t[0], u = t[1], s = t[2], l = 0, d = [];
      l < i.length;
      l++
    )
      (c = i[l]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && d.push(a[c][0]),
        (a[c] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    p && p(t);
    while (d.length) d.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== a[i] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var r = {},
    c = { app: 0 },
    a = { app: 0 },
    o = [];
  function i(e) {
    return (
      u.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "b638181c" }[e] +
      ".js"
    );
  }
  function u(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function (e) {
    var t = [],
      n = { about: 1 };
    c[e]
      ? t.push(c[e])
      : 0 !== c[e] &&
        n[e] &&
        t.push(
          (c[e] = new Promise(function (t, n) {
            for (
              var r =
                  "css/" +
                  ({ about: "about" }[e] || e) +
                  "." +
                  { about: "a43420ac" }[e] +
                  ".css",
                a = u.p + r,
                o = document.getElementsByTagName("link"),
                i = 0;
              i < o.length;
              i++
            ) {
              var s = o[i],
                l = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === r || l === a)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
              (s = d[i]), (l = s.getAttribute("data-href"));
              if (l === r || l === a) return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var r = (t && t.target && t.target.src) || a,
                  o = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (o.code = "CSS_CHUNK_LOAD_FAILED"),
                  (o.request = r),
                  delete c[e],
                  p.parentNode.removeChild(p),
                  n(o);
              }),
              (p.href = a);
            var b = document.getElementsByTagName("head")[0];
            b.appendChild(p);
          }).then(function () {
            c[e] = 0;
          }))
        );
    var r = a[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var o = new Promise(function (t, n) {
          r = a[e] = [t, n];
        });
        t.push((r[2] = o));
        var s,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          u.nc && l.setAttribute("nonce", u.nc),
          (l.src = i(e));
        var d = new Error();
        s = function (t) {
          (l.onerror = l.onload = null), clearTimeout(p);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = r),
                (d.request = c),
                n[1](d);
            }
            a[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          s({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = s), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = r),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          u.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "/"),
    (u.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var d = 0; d < s.length; d++) t(s[d]);
  var p = l;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("cd49");
  },
  "224c": function (e, t, n) {},
  7599: function (e, t, n) {},
  a766: function (e, t, n) {},
  abe2: function (e, t, n) {},
  b637: function (e, t, n) {
    "use strict";
    n("224c");
  },
  bf61: function (e, t, n) {
    "use strict";
    n("7599");
  },
  cd49: function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23"),
      c = n("5502"),
      a = n("1da1"),
      o = (n("96cf"), n("bc3a")),
      i = n.n(o);
    n("94db");
    function u() {
      return i.a.get("".concat("http://18.182.25.254/api/", "items"), {
        withCredentials: !0,
        params: {
          page: 1,
          perPage: 10,
          orderBy: "created_at",
          orderDirection: "desc",
        },
      });
    }
    function s() {
      return i.a.get("".concat("http://18.182.25.254/api/", "item/reviews"), {
        withCredentials: !0,
        params: {
          page: 1,
          perPage: 10,
          orderBy: "created_at",
          orderDirection: "desc",
        },
      });
    }
    var l = {
        namespaced: !0,
        state: function () {
          return { items: [], reviews: [], loading: !1, itemIndexOfReview: 0 };
        },
        getters: {
          items: function (e) {
            return e.items;
          },
          reviews: function (e) {
            return e.reviews;
          },
          loading: function (e) {
            return e.loading;
          },
          itemIndexOfReview: function (e) {
            return e.itemIndexOfReview;
          },
        },
        mutations: {
          SET_ITEMS: function (e, t) {
            e.items = t;
          },
          SET_REVIEWS: function (e, t) {
            e.reviews = t;
          },
          LOADING: function (e, t) {
            e.loading = t;
          },
        },
        actions: {
          getAndSetItems: function (e) {
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = e.commit), (t.next = 3), u();
                      case 3:
                        if (((r = t.sent), 200 === r.status)) {
                          t.next = 6;
                          break;
                        }
                        throw new Error("エラーが発生しました。");
                      case 6:
                        n("SET_ITEMS", r.data.items), n("LOADING", !0);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getAndSetReviews: function (e) {
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = e.commit), (t.next = 3), s();
                      case 3:
                        if (((r = t.sent), 200 === r.status)) {
                          t.next = 6;
                          break;
                        }
                        throw new Error("エラーが発生しました。");
                      case 6:
                        n("SET_REVIEWS", r.data.items), n("LOADING", !0);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
      },
      d = Object(c["a"])({ modules: { produce: l } });
    function p(e, t) {
      var n = Object(r["y"])("router-view");
      return Object(r["q"])(), Object(r["d"])(n);
    }
    n("b637");
    const b = {};
    b.render = p;
    var m = b,
      f = (n("d3b7"), n("3ca3"), n("ddb0"), n("6c02")),
      O = (n("b0c0"), n("a4d3"), n("e01a"), { class: "home" }),
      j = Object(r["g"])("div", { class: "bg-fruit h-80" }, null, -1),
      g = Object(r["g"])(
        "div",
        null,
        [
          Object(r["g"])(
            "h1",
            { class: "text-3xl text-gray-500 my-14" },
            "PRODUCE"
          ),
        ],
        -1
      ),
      v = { key: 0, class: "w-9/12 mx-auto" },
      h = { key: 1 };
    function y(e, t, n, c, a, o) {
      var i = Object(r["y"])("app-header"),
        u = Object(r["y"])("app-card"),
        s = Object(r["y"])("app-footer");
      return (
        Object(r["q"])(),
        Object(r["d"])("div", O, [
          Object(r["g"])(i),
          j,
          g,
          e.produceItems.length > 0
            ? (Object(r["q"])(),
              Object(r["d"])("div", v, [
                (Object(r["q"])(!0),
                Object(r["d"])(
                  r["a"],
                  null,
                  Object(r["w"])(e.produceItems, function (e, t) {
                    return (
                      Object(r["q"])(),
                      Object(r["d"])(
                        "div",
                        { key: t, class: "md:flex md:my-16" },
                        [
                          Object(r["g"])(
                            u,
                            {
                              itemName: e.name,
                              itemDetail: e.description,
                              itemPrice: e.price,
                            },
                            null,
                            8,
                            ["itemName", "itemDetail", "itemPrice"]
                          ),
                        ]
                      )
                    );
                  }),
                  128
                )),
              ]))
            : 0 === e.produceItems.length
            ? (Object(r["q"])(), Object(r["d"])("div", h, "商品を準備中です。"))
            : Object(r["e"])("", !0),
          Object(r["g"])(s),
        ])
      );
    }
    var w = { class: "flex px-8 py-6 text-gray-500" },
      x = { class: "mr-8" },
      A = Object(r["f"])("TOP"),
      S = Object(r["f"])("SHOP"),
      k = { class: "ml-auto" },
      C = Object(r["f"])("CONTACT");
    function E(e, t, n, c, a, o) {
      var i = Object(r["y"])("router-link");
      return (
        Object(r["q"])(),
        Object(r["d"])("ul", w, [
          Object(r["g"])("li", x, [
            Object(r["g"])(
              i,
              { to: "/top" },
              {
                default: Object(r["D"])(function () {
                  return [A];
                }),
                _: 1,
              }
            ),
          ]),
          Object(r["g"])("li", null, [
            Object(r["g"])(
              i,
              { to: "/about" },
              {
                default: Object(r["D"])(function () {
                  return [S];
                }),
                _: 1,
              }
            ),
          ]),
          Object(r["g"])("li", k, [
            Object(r["g"])(
              i,
              { to: "/contact" },
              {
                default: Object(r["D"])(function () {
                  return [C];
                }),
                _: 1,
              }
            ),
          ]),
        ])
      );
    }
    var _ = Object(r["h"])({ name: "AppHeader", props: {} });
    _.render = E;
    var D = _,
      I = { class: "py-3 text-gray-500" };
    function T(e, t, n, c, a, o) {
      return Object(r["q"])(), Object(r["d"])("div", I, "フッター");
    }
    var q = Object(r["h"])({ name: "AppFooter", props: {} });
    q.render = T;
    var P = q,
      N = { class: "flex justify-center items-center" },
      R = { class: "text-xl font-medium text-black" },
      L = { class: "my-2" },
      B = { class: "text-gray-500" },
      H = { class: "text-sm text-gray-500" },
      M = Object(r["g"])(
        "div",
        null,
        [
          Object(r["f"])(" 個数 "),
          Object(r["g"])(
            "select",
            { name: "quantity", id: "", class: "px-2" },
            [
              Object(r["g"])("option", { value: "1" }, "1"),
              Object(r["g"])("option", { value: "2" }, "2"),
              Object(r["g"])("option", { value: "3" }, "3"),
            ]
          ),
        ],
        -1
      ),
      F = Object(r["f"])("購入する");
    function G(e, t, n, c, a, o) {
      var i = Object(r["y"])("app-button"),
        u = Object(r["y"])("router-link");
      return (
        Object(r["q"])(),
        Object(r["d"])(
          u,
          {
            to: "/top",
            class:
              "md:w-1/4 w-full my-10 md:my-0 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4",
          },
          {
            default: Object(r["D"])(function () {
              return [
                Object(r["g"])("div", null, [
                  Object(r["g"])("div", N, [
                    Object(r["g"])(
                      "img",
                      { class: "h-12 w-12", src: e.src, alt: e.itemName },
                      null,
                      8,
                      ["src", "alt"]
                    ),
                  ]),
                  Object(r["g"])("div", null, [
                    Object(r["g"])("div", R, Object(r["A"])(e.itemName), 1),
                    Object(r["g"])("div", L, [
                      Object(r["g"])("p", B, Object(r["A"])(e.itemDetail), 1),
                      Object(r["g"])(
                        "p",
                        H,
                        Object(r["A"])(e.itemPrice) + "円",
                        1
                      ),
                    ]),
                    M,
                    Object(r["g"])(i, null, {
                      default: Object(r["D"])(function () {
                        return [F];
                      }),
                      _: 1,
                    }),
                  ]),
                ]),
              ];
            }),
            _: 1,
          }
        )
      );
    }
    var J = Object(r["E"])("data-v-685073da"),
      U = J(function (e, t, n, c, a, o) {
        return (
          Object(r["q"])(),
          Object(r["d"])(
            "button",
            {
              type: "submit",
              class: ["btn mt-3", e.color],
              onClick:
                t[1] ||
                (t[1] = function () {
                  return e.handleClick && e.handleClick.apply(e, arguments);
                }),
            },
            [Object(r["x"])(e.$slots, "default", {}, void 0, !0)],
            2
          )
        );
      }),
      V = Object(r["h"])({
        name: "AppButton",
        props: {
          color: { type: String, required: !1, default: "bg-green-700" },
        },
        setup: function (e, t) {
          var n = function () {
            t.emit("handleClick");
          };
          return { handleClick: n };
        },
      });
    n("bf61");
    (V.render = U), (V.__scopeId = "data-v-685073da");
    var W = V,
      K = Object(r["h"])({
        name: "AppCard",
        components: { AppButton: W },
        props: {
          src: { type: String, required: !1 },
          itemName: { type: String, required: !0 },
          itemPrice: { type: String, required: !0 },
          itemDetail: { type: String, required: !0 },
        },
      });
    K.render = G;
    var $ = K,
      z = Object(r["h"])({
        name: "Home",
        components: { AppCard: $, AppHeader: D, AppFooter: P },
        setup: function () {
          var e = Object(c["b"])(),
            t = Object(r["u"])({ produceItems: e.state.produce.items }),
            n = (function () {
              var t = Object(a["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), e.dispatch("produce/getAndSetItems")
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return (
            Object(r["o"])(function () {
              n();
            }),
            {
              produceItems: Object(r["b"])(function () {
                return e.state.produce.items;
              }),
              state: t,
            }
          );
        },
      });
    z.render = y;
    var Q = z,
      X = { class: "home" },
      Y = Object(r["g"])(
        "div",
        null,
        [
          Object(r["g"])(
            "h1",
            { class: "text-3xl text-gray-500 my-14" },
            "CONTACT"
          ),
        ],
        -1
      ),
      Z = Object(r["g"])("div", { class: "w-9/12 mx-auto" }, null, -1);
    function ee(e, t, n, c, a, o) {
      var i = Object(r["y"])("app-header"),
        u = Object(r["y"])("app-footer");
      return (
        Object(r["q"])(),
        Object(r["d"])("div", X, [Object(r["g"])(i), Y, Z, Object(r["g"])(u)])
      );
    }
    var te = Object(r["h"])({
      name: "CONTACT",
      components: { AppHeader: D, AppFooter: P },
    });
    te.render = ee;
    var ne = te,
      re = [
        { path: "/top", name: "Home", component: Q },
        {
          path: "/about",
          name: "About",
          component: function () {
            return n.e("about").then(n.bind(null, "f820"));
          },
        },
        { path: "/contact", name: "Contact", component: ne },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: function () {
            return n.e("about").then(n.bind(null, "7277"));
          },
        },
        {
          path: "/dashboard/item_details",
          name: "DashboardItemDetails",
          component: function () {
            return n.e("about").then(n.bind(null, "1654"));
          },
        },
      ],
      ce = Object(f["a"])({ history: Object(f["b"])("/"), routes: re }),
      ae = ce;
    n("a766");
    n("abe2"), Object(r["c"])(m).use(d).use(ae).mount("#app");
  },
});
//# sourceMappingURL=app.22690230.js.map
