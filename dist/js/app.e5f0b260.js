(function (e) {
  function t(t) {
    for (
      var n, c, u = t[0], i = t[1], s = t[2], l = 0, d = [];
      l < u.length;
      l++
    )
      (c = u[l]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && d.push(a[c][0]),
        (a[c] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    b && b(t);
    while (d.length) d.shift()();
    return o.push.apply(o, s || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, c = 1; c < r.length; c++) {
        var u = r[c];
        0 !== a[u] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var n = {},
    c = { app: 0 },
    a = { app: 0 },
    o = [];
  function u(e) {
    return (
      i.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "c58223cb" }[e] +
      ".js"
    );
  }
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function (e) {
    var t = [],
      r = { about: 1 };
    c[e]
      ? t.push(c[e])
      : 0 !== c[e] &&
        r[e] &&
        t.push(
          (c[e] = new Promise(function (t, r) {
            for (
              var n =
                  "css/" +
                  ({ about: "about" }[e] || e) +
                  "." +
                  { about: "09b77d4f" }[e] +
                  ".css",
                a = i.p + n,
                o = document.getElementsByTagName("link"),
                u = 0;
              u < o.length;
              u++
            ) {
              var s = o[u],
                l = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === n || l === a)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (u = 0; u < d.length; u++) {
              (s = d[u]), (l = s.getAttribute("data-href"));
              if (l === n || l === a) return t();
            }
            var b = document.createElement("link");
            (b.rel = "stylesheet"),
              (b.type = "text/css"),
              (b.onload = t),
              (b.onerror = function (t) {
                var n = (t && t.target && t.target.src) || a,
                  o = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (o.code = "CSS_CHUNK_LOAD_FAILED"),
                  (o.request = n),
                  delete c[e],
                  b.parentNode.removeChild(b),
                  r(o);
              }),
              (b.href = a);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(b);
          }).then(function () {
            c[e] = 0;
          }))
        );
    var n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, r) {
          n = a[e] = [t, r];
        });
        t.push((n[2] = o));
        var s,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          i.nc && l.setAttribute("nonce", i.nc),
          (l.src = u(e));
        var d = new Error();
        s = function (t) {
          (l.onerror = l.onload = null), clearTimeout(b);
          var r = a[e];
          if (0 !== r) {
            if (r) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + c + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = n),
                (d.request = c),
                r[1](d);
            }
            a[e] = void 0;
          }
        };
        var b = setTimeout(function () {
          s({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = s), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function (e, t, r) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          i.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var d = 0; d < s.length; d++) t(s[d]);
  var b = l;
  o.push([0, "chunk-vendors"]), r();
})({
  0: function (e, t, r) {
    e.exports = r("cd49");
  },
  "0417": function (e, t, r) {
    "use strict";
    r("ca5e");
  },
  "5aae": function (e, t, r) {
    "use strict";
    r("5dbb");
  },
  "5dbb": function (e, t, r) {},
  a766: function (e, t, r) {},
  abe2: function (e, t, r) {},
  bdc6: function (e, t, r) {
    "use strict";
    r("c03f");
  },
  c03f: function (e, t, r) {},
  ca5e: function (e, t, r) {},
  cd49: function (e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var n = r("7a23"),
      c = r("5502"),
      a = r("1da1"),
      o = (r("96cf"), r("bc3a")),
      u = r.n(o),
      i =
        (r("94db"),
        function () {
          return u.a.get("".concat("http://18.182.25.254/api/", "items"), {
            withCredentials: !0,
            params: {
              page: 1,
              perPage: 10,
              orderBy: "created_at",
              orderDirection: "desc",
            },
          });
        }),
      s = {
        namespaced: !0,
        state: function () {
          return { items: [] };
        },
        getters: {
          items: function (e) {
            return e.items;
          },
        },
        mutations: {
          SET_ITEMS: function (e, t) {
            e.items = t;
          },
        },
        actions: {
          getAndSetItems: function (e) {
            return Object(a["a"])(
              regeneratorRuntime.mark(function t() {
                var r, n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (r = e.commit), (t.next = 3), i();
                      case 3:
                        if (((n = t.sent), 200 === n.status)) {
                          t.next = 6;
                          break;
                        }
                        throw new Error("エラーが発生しました。");
                      case 6:
                        r("SET_ITEMS", n.data.data.items),
                          console.log(n.data.data.items);
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
      l = Object(c["a"])({ modules: { produce: s } });
    function d(e, t) {
      var r = Object(n["z"])("router-view");
      return Object(n["r"])(), Object(n["d"])(r);
    }
    r("bdc6");
    const b = {};
    b.render = d;
    var p = b,
      m = (r("d3b7"), r("3ca3"), r("ddb0"), r("6c02")),
      f = (r("b0c0"), r("a4d3"), r("e01a"), Object(n["F"])("data-v-01dba530"));
    Object(n["u"])("data-v-01dba530");
    var O = { class: "home" },
      h = Object(n["h"])("div", { class: "bg-fruit h-80" }, null, -1),
      j = Object(n["h"])(
        "div",
        null,
        [
          Object(n["h"])(
            "h1",
            { class: "text-3xl text-gray-500 my-14" },
            "PRODUCE"
          ),
        ],
        -1
      ),
      v = { key: 0 },
      g = { key: 1, class: "w-9/12 mx-auto" };
    Object(n["s"])();
    var y = f(function (e, t, r, c, a, o) {
        var u = Object(n["z"])("app-header"),
          i = Object(n["z"])("app-card"),
          s = Object(n["z"])("app-footer");
        return (
          Object(n["r"])(),
          Object(n["d"])("div", O, [
            Object(n["h"])(u),
            h,
            j,
            0 === e.produceItems.length
              ? (Object(n["r"])(),
                Object(n["d"])("div", v, "商品を準備中です。"))
              : Object(n["e"])("", !0),
            e.produceItems.length > 0
              ? (Object(n["r"])(),
                Object(n["d"])("div", g, [
                  (Object(n["r"])(!0),
                  Object(n["d"])(
                    n["a"],
                    null,
                    Object(n["x"])(e.produceItems, function (e, t) {
                      return (
                        Object(n["r"])(),
                        Object(n["d"])(
                          "div",
                          { key: t, class: "md:flex md:my-16" },
                          [
                            Object(n["h"])(
                              i,
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
              : Object(n["e"])("", !0),
            Object(n["h"])(s),
          ])
        );
      }),
      x = { class: "flex px-8 py-6 text-gray-500" },
      w = { class: "mr-8" },
      C = Object(n["g"])("TOP"),
      k = Object(n["g"])("SHOP"),
      A = { class: "ml-auto" },
      _ = Object(n["g"])("CONTACT");
    function S(e, t, r, c, a, o) {
      var u = Object(n["z"])("router-link");
      return (
        Object(n["r"])(),
        Object(n["d"])("ul", x, [
          Object(n["h"])("li", w, [
            Object(n["h"])(
              u,
              { to: "/" },
              {
                default: Object(n["E"])(function () {
                  return [C];
                }),
                _: 1,
              }
            ),
          ]),
          Object(n["h"])("li", null, [
            Object(n["h"])(
              u,
              { to: "/about" },
              {
                default: Object(n["E"])(function () {
                  return [k];
                }),
                _: 1,
              }
            ),
          ]),
          Object(n["h"])("li", A, [
            Object(n["h"])(
              u,
              { to: "/contact" },
              {
                default: Object(n["E"])(function () {
                  return [_];
                }),
                _: 1,
              }
            ),
          ]),
        ])
      );
    }
    var E = Object(n["i"])({ name: "AppHeader", props: {} });
    E.render = S;
    var P = E,
      T = { class: "py-3 text-gray-500" };
    function N(e, t, r, c, a, o) {
      return Object(n["r"])(), Object(n["d"])("div", T, "フッター");
    }
    var I = Object(n["i"])({ name: "AppFooter", props: {} });
    I.render = N;
    var D = I,
      z = { class: "flex justify-center items-center" },
      B = { class: "text-xl font-medium text-black" },
      q = { class: "my-2" },
      H = { class: "text-gray-500" },
      F = { class: "text-sm text-gray-500" },
      M = Object(n["h"])(
        "div",
        null,
        [
          Object(n["g"])(" 個数 "),
          Object(n["h"])(
            "select",
            { name: "quantity", id: "", class: "px-2" },
            [
              Object(n["h"])("option", { value: "1" }, "1"),
              Object(n["h"])("option", { value: "2" }, "2"),
              Object(n["h"])("option", { value: "3" }, "3"),
            ]
          ),
        ],
        -1
      ),
      R = Object(n["g"])("購入する");
    function L(e, t, r, c, a, o) {
      var u = Object(n["z"])("app-button"),
        i = Object(n["z"])("router-link");
      return (
        Object(n["r"])(),
        Object(n["d"])(
          i,
          {
            to: "/",
            class:
              "md:w-1/4 w-full my-10 md:my-0 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4",
          },
          {
            default: Object(n["E"])(function () {
              return [
                Object(n["h"])("div", null, [
                  Object(n["h"])("div", z, [
                    Object(n["h"])(
                      "img",
                      { class: "h-12 w-12", src: e.src, alt: e.itemName },
                      null,
                      8,
                      ["src", "alt"]
                    ),
                  ]),
                  Object(n["h"])("div", null, [
                    Object(n["h"])("div", B, Object(n["B"])(e.itemName), 1),
                    Object(n["h"])("div", q, [
                      Object(n["h"])("p", H, Object(n["B"])(e.itemDetail), 1),
                      Object(n["h"])(
                        "p",
                        F,
                        Object(n["B"])(e.itemPrice) + "円",
                        1
                      ),
                    ]),
                    M,
                    Object(n["h"])(u, null, {
                      default: Object(n["E"])(function () {
                        return [R];
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
    var J = Object(n["F"])("data-v-c2dab0c8"),
      U = J(function (e, t, r, c, a, o) {
        return (
          Object(n["r"])(),
          Object(n["d"])(
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
            [Object(n["y"])(e.$slots, "default", {}, void 0, !0)],
            2
          )
        );
      }),
      K = Object(n["i"])({
        name: "AppButton",
        props: {
          color: { type: String, required: !1, default: "bg-green-700" },
        },
        setup: function (e, t) {
          var r = function () {
            t.emit("handleClick");
          };
          return { handleClick: r };
        },
      });
    r("5aae");
    (K.render = U), (K.__scopeId = "data-v-c2dab0c8");
    var $ = K,
      G = Object(n["i"])({
        name: "AppCard",
        components: { AppButton: $ },
        props: {
          src: { type: String, required: !1 },
          itemName: { type: String, required: !0 },
          itemPrice: { type: String, required: !0 },
          itemDetail: { type: String, required: !0 },
        },
      });
    G.render = L;
    var Q = G,
      V = Object(n["i"])({
        name: "Home",
        components: { AppCard: Q, AppHeader: P, AppFooter: D },
        setup: function () {
          var e = Object(c["b"])(),
            t = (function () {
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
            Object(n["p"])(t),
            {
              produceItems: Object(n["b"])(function () {
                return e.state.produce.items;
              }),
            }
          );
        },
      });
    r("0417");
    (V.render = y), (V.__scopeId = "data-v-01dba530");
    var W = V,
      X = { class: "home" },
      Y = Object(n["h"])(
        "div",
        null,
        [
          Object(n["h"])(
            "h1",
            { class: "text-3xl text-gray-500 my-14" },
            "CONTACT"
          ),
        ],
        -1
      ),
      Z = Object(n["h"])("div", { class: "w-9/12 mx-auto" }, null, -1);
    function ee(e, t, r, c, a, o) {
      var u = Object(n["z"])("app-header"),
        i = Object(n["z"])("app-footer");
      return (
        Object(n["r"])(),
        Object(n["d"])("div", X, [Object(n["h"])(u), Y, Z, Object(n["h"])(i)])
      );
    }
    var te = Object(n["i"])({
      name: "CONTACT",
      components: { AppHeader: P, AppFooter: D },
    });
    te.render = ee;
    var re = te,
      ne = [
        { path: "/", name: "Home", component: W },
        {
          path: "/about",
          name: "About",
          component: function () {
            return r.e("about").then(r.bind(null, "f820"));
          },
        },
        { path: "/contact", name: "Contact", component: re },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: function () {
            return r.e("about").then(r.bind(null, "7277"));
          },
        },
        {
          path: "/dashboard/item_details",
          name: "ItemDetails",
          component: function () {
            return r.e("about").then(r.bind(null, "32a2"));
          },
        },
        {
          path: "/dashboard/reviews",
          name: "Reviews",
          component: function () {
            return r.e("about").then(r.bind(null, "2e51"));
          },
        },
      ],
      ce = Object(m["a"])({ history: Object(m["b"])("/"), routes: ne }),
      ae = ce;
    r("a766");
    r("abe2"), Object(n["c"])(p).use(l).use(ae).mount("#app");
  },
});
//# sourceMappingURL=app.e5f0b260.js.map
