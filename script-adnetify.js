/*! For license information please see adnetify.js.LICENSE.txt */
(() => {
  var t = {
      633: (t, e, n) => {
        var r = n(738).default;
        function o() {
          'use strict';
          (t.exports = o =
            function () {
              return n;
            }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var e,
            n = {},
            i = Object.prototype,
            a = i.hasOwnProperty,
            u =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            c = 'function' == typeof Symbol ? Symbol : {},
            l = c.iterator || '@@iterator',
            s = c.asyncIterator || '@@asyncIterator',
            f = c.toStringTag || '@@toStringTag';
          function d(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            d({}, '');
          } catch (e) {
            d = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function p(t, e, n, r) {
            var o = e && e.prototype instanceof w ? e : w,
              i = Object.create(o.prototype),
              a = new T(r || []);
            return u(i, '_invoke', { value: L(t, n, a) }), i;
          }
          function y(t, e, n) {
            try {
              return { type: 'normal', arg: t.call(e, n) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          n.wrap = p;
          var v = 'suspendedStart',
            g = 'suspendedYield',
            m = 'executing',
            h = 'completed',
            b = {};
          function w() {}
          function O() {}
          function x() {}
          var j = {};
          d(j, l, function () {
            return this;
          });
          var _ = Object.getPrototypeOf,
            A = _ && _(_(M([])));
          A && A !== i && a.call(A, l) && (j = A);
          var E = (x.prototype = w.prototype = Object.create(j));
          function P(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              d(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function S(t, e) {
            function n(o, i, u, c) {
              var l = y(t[o], t, i);
              if ('throw' !== l.type) {
                var s = l.arg,
                  f = s.value;
                return f && 'object' == r(f) && a.call(f, '__await')
                  ? e.resolve(f.__await).then(
                      function (t) {
                        n('next', t, u, c);
                      },
                      function (t) {
                        n('throw', t, u, c);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (s.value = t), u(s);
                      },
                      function (t) {
                        return n('throw', t, u, c);
                      }
                    );
              }
              c(l.arg);
            }
            var o;
            u(this, '_invoke', {
              value: function (t, r) {
                function i() {
                  return new e(function (e, o) {
                    n(t, r, e, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
            });
          }
          function L(t, n, r) {
            var o = v;
            return function (i, a) {
              if (o === m) throw Error('Generator is already running');
              if (o === h) {
                if ('throw' === i) throw a;
                return { value: e, done: !0 };
              }
              for (r.method = i, r.arg = a; ; ) {
                var u = r.delegate;
                if (u) {
                  var c = k(u, r);
                  if (c) {
                    if (c === b) continue;
                    return c;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (o === v) throw ((o = h), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = m;
                var l = y(t, n, r);
                if ('normal' === l.type) {
                  if (((o = r.done ? h : g), l.arg === b)) continue;
                  return { value: l.arg, done: r.done };
                }
                'throw' === l.type &&
                  ((o = h), (r.method = 'throw'), (r.arg = l.arg));
              }
            };
          }
          function k(t, n) {
            var r = n.method,
              o = t.iterator[r];
            if (o === e)
              return (
                (n.delegate = null),
                ('throw' === r &&
                  t.iterator.return &&
                  ((n.method = 'return'),
                  (n.arg = e),
                  k(t, n),
                  'throw' === n.method)) ||
                  ('return' !== r &&
                    ((n.method = 'throw'),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                b
              );
            var i = y(o, t.iterator, n.arg);
            if ('throw' === i.type)
              return (
                (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), b
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                  (n.delegate = null),
                  b)
                : a
              : ((n.method = 'throw'),
                (n.arg = new TypeError('iterator result is not an object')),
                (n.delegate = null),
                b);
          }
          function I(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function C(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function T(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              t.forEach(I, this),
              this.reset(!0);
          }
          function M(t) {
            if (t || '' === t) {
              var n = t[l];
              if (n) return n.call(t);
              if ('function' == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  i = function n() {
                    for (; ++o < t.length; )
                      if (a.call(t, o))
                        return (n.value = t[o]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(r(t) + ' is not iterable');
          }
          return (
            (O.prototype = x),
            u(E, 'constructor', { value: x, configurable: !0 }),
            u(x, 'constructor', { value: O, configurable: !0 }),
            (O.displayName = d(x, f, 'GeneratorFunction')),
            (n.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return (
                !!e &&
                (e === O || 'GeneratorFunction' === (e.displayName || e.name))
              );
            }),
            (n.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, x)
                  : ((t.__proto__ = x), d(t, f, 'GeneratorFunction')),
                (t.prototype = Object.create(E)),
                t
              );
            }),
            (n.awrap = function (t) {
              return { __await: t };
            }),
            P(S.prototype),
            d(S.prototype, s, function () {
              return this;
            }),
            (n.AsyncIterator = S),
            (n.async = function (t, e, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new S(p(t, e, r, o), i);
              return n.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            P(E),
            d(E, f, 'Generator'),
            d(E, l, function () {
              return this;
            }),
            d(E, 'toString', function () {
              return '[object Generator]';
            }),
            (n.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (n.values = M),
            (T.prototype = {
              constructor: T,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = e),
                  this.tryEntries.forEach(C),
                  !t)
                )
                  for (var n in this)
                    't' === n.charAt(0) &&
                      a.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function r(r, o) {
                  return (
                    (u.type = 'throw'),
                    (u.arg = t),
                    (n.next = r),
                    o && ((n.method = 'next'), (n.arg = e)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    u = i.completion;
                  if ('root' === i.tryLoc) return r('end');
                  if (i.tryLoc <= this.prev) {
                    var c = a.call(i, 'catchLoc'),
                      l = a.call(i, 'finallyLoc');
                    if (c && l) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw Error('try statement without catch or finally');
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    a.call(r, 'finallyLoc') &&
                    this.prev < r.finallyLoc
                  ) {
                    var o = r;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = t),
                  (i.arg = e),
                  o
                    ? ((this.method = 'next'), (this.next = o.finallyLoc), b)
                    : this.complete(i)
                );
              },
              complete: function (t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                  b
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), C(n), b;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ('throw' === r.type) {
                      var o = r.arg;
                      C(n);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: M(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  'next' === this.method && (this.arg = e),
                  b
                );
              },
            }),
            n
          );
        }
        (t.exports = o),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      738: (t) => {
        function e(n) {
          return (
            (t.exports = e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(n)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      756: (t, e, n) => {
        var r = n(633)();
        t.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (t) {
          'object' == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function('r', 'regeneratorRuntime = r')(r);
        }
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      'use strict';
      const t = function () {
          var t = window.navigator,
            e = t.userAgent,
            n =
              t.maxTouchPoints &&
              t.maxTouchPoints > 2 &&
              /MacIntel/.test(t.platform);
          return e.match(/iPad|PlayBook|Silk/i) || n
            ? 'tablet'
            : e.match(
                /Android|webOS|iPhone|iPod|Blackberry|IEMobile|Opera Mini/i
              )
            ? 'mobile'
            : 'desktop';
        },
        e = function (t) {
          var e = t.targetSelector,
            n = t.options,
            r = void 0 === n ? {} : n,
            o = t.onInterception,
            i = document.querySelector(e);
          if (i) {
            var a = r.rootMargin,
              u = void 0 === a ? '0px' : a,
              c = r.threshold,
              l = void 0 === c ? 0 : c,
              s = new IntersectionObserver(
                function (t) {
                  t.forEach(function (t) {
                    t.isIntersecting &&
                      t.intersectionRatio > l &&
                      (o(), s.unobserve(i));
                  });
                },
                { rootMargin: u, threshold: l }
              );
            s.observe(i);
          }
        };
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function o(t, e) {
        if (t) {
          if ('string' == typeof t) return r(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }
      function i(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          o(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      var a = 'data-container-id';
      function u(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          o(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      const c = function (t) {
        return 'string' == typeof t && t.length
          ? (t.split('?').length > 1 ? t.split('?')[1] : t)
              .split('&')
              .reduce(function (t, e) {
                var n = u(e.split('='), 2),
                  r = n[0],
                  o = n[1];
                return r && o && (t[r.trim()] = o.trim()), t;
              }, {})
          : null;
      };
      function l(t) {
        return (
          (l =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          l(t)
        );
      }
      function s(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ('object' != l(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, 'string');
                if ('object' != l(n)) return n;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return String(t);
            })(t);
            return 'symbol' == l(e) ? e : e + '';
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      const d = function (t, e) {
          var n = e.caseSensitive,
            r = void 0 === n || n;
          return new Proxy(
            (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? f(Object(n), !0).forEach(function (e) {
                      s(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : f(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, t),
            {
              get: function (t, e) {
                return (
                  Object.keys(t).find(function (n) {
                    return t[n].find(function (t) {
                      return r ? t === e : t.toLowerCase() === e.toLowerCase();
                    });
                  }) || null
                );
              },
            }
          );
        },
        p = d(
          {
            CASH: ['cash', 'c'],
            MILES: ['miles', 'm'],
            POINTS: ['points', 'p'],
          },
          { caseSensitive: !1 }
        );
      var y = function (t) {
          return (
            Array.isArray(t) &&
            t.every(function (t) {
              return 'string' == typeof t;
            })
          );
        },
        v = function (t, e) {
          return 'string' == typeof t && t.length === e;
        },
        g = function (t, e, n) {
          return Number.isInteger(t) && t >= e && t <= n;
        },
        m = function (t, e, n) {
          return 'string' == typeof t && t.length >= e && t.length <= n;
        },
        h =
          /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i,
        b = function (t) {
          return 'string' == typeof t && h.test(t);
        },
        w = /(0?[1-9]|1[0-2]):([0-5]\d)\s?((?:A|P)\.?M\.?)/,
        O = function (t) {
          return 'string' == typeof t && w.test(t);
        };
      function x(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var _ = {
        languageIsoCode: function (t) {
          return m(t, 2, 3) ? t.toLowerCase() : null;
        },
        countryIsoCode: function (t) {
          return m(t, 2, 3) ? t.toUpperCase() : null;
        },
        homeLocation: function (t) {
          return v(t, 3) ? t.toUpperCase() : null;
        },
        textDirection: function (t) {
          return ['LTR', 'RTL'].includes(t) ? t : null;
        },
        originLocations: function (t) {
          return Array.isArray(t)
            ? t.map(function (t) {
                return 'string' == typeof t && t.toUpperCase();
              })
            : null;
        },
        destinationLocations: function (t) {
          return Array.isArray(t)
            ? t.map(function (t) {
                return 'string' == typeof t && t.toUpperCase();
              })
            : null;
        },
        budgetMaximumAmount: function (t) {
          return g(parseInt(t), 1, Math.pow(10, 9)) ? parseInt(t) : null;
        },
        budgetRedemptionUnit: function (t) {
          return p[t];
        },
        experience: function (t) {
          var e = t.type,
            n = t.name,
            r = y(e),
            o = y(n);
          return j(j({}, r ? { type: e } : {}), o ? { name: n } : {});
        },
        event: function (t) {
          var e,
            n = t.location,
            r = t.date,
            o = t.session,
            i = t.time,
            a = y(n),
            u =
              ((e = r),
              Array.isArray(e) &&
                e.every(function (t) {
                  return (function (t) {
                    return Number.isInteger(t) && t > 0;
                  })(t);
                })),
            c = y(o),
            l = (function (t) {
              return (
                Array.isArray(t) &&
                t.every(function (t) {
                  return O(t);
                })
              );
            })(i);
          return j(
            j(
              j(j({}, a ? { location: n } : {}), u ? { date: r } : {}),
              c ? { session: o } : {}
            ),
            l ? { time: i } : {}
          );
        },
        trackingUserContent: function (t) {
          return 'boolean' == typeof t ? t : void 0;
        },
      };
      const A = function (t) {
          if (null == t) return {};
          var e = Array.isArray(t) && t.length > 0 ? t[0] : t;
          return Object.keys(e).reduce(function (t, n) {
            var r = _[n];
            if ('function' == typeof r) {
              var o = r(e[n]),
                i = 'boolean' == typeof o || o;
              t = j(j({}, t), i ? s({}, n, o) : {});
            }
            return t;
          }, {});
        },
        E = d(
          {
            ECONOMY: ['economy', 'ec', 'e'],
            BUSINESS: [
              'business_class',
              'business-class',
              'businessclass',
              'bc',
              'business',
              'b',
            ],
            FIRST_CLASS: [
              'first_class',
              'first-class',
              'firstclass',
              'fc',
              'first',
              'f',
            ],
          },
          { caseSensitive: !1 }
        ),
        P = d(
          {
            ROUND_TRIP: ['round_trip', 'round-trip', 'roundtrip', 'rt'],
            ONE_WAY: ['one_way', 'one-way', 'oneway', 'ow'],
            MULTI_CITY: ['multi_city', 'multi-city', 'multicity', 'mc'],
          },
          { caseSensitive: !1 }
        ),
        S = d(
          { true: ['true', 't', '1'], false: ['false', 'f', '0'] },
          { caseSensitive: !1 }
        );
      function L(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var I = {
        em_o: function (t) {
          return v(t, 3) ? t.toUpperCase() : null;
        },
        em_d: function (t) {
          return v(t, 3) ? t.toUpperCase() : null;
        },
        em_pc: function (t) {
          return g(parseInt(t), 0, 9) ? parseInt(t) : null;
        },
        em_re: function (t) {
          return JSON.parse(S[t]);
        },
        em_b: function (t) {
          return g(parseInt(t), 1, Math.pow(10, 9)) ? parseInt(t) : null;
        },
        em_bre: function (t) {
          return p[t];
        },
        em_jt: function (t) {
          return P[t];
        },
        em_fd: function (t) {
          return JSON.parse(S[t]);
        },
        em_dc: function (t) {
          return m(t, 0, 50) ? t : null;
        },
        em_dd: function (t) {
          return b(t) ? t : null;
        },
        em_rd: function (t) {
          return b(t) ? t : null;
        },
        em_fc: function (t) {
          return E[t];
        },
        defaultMonth: function (t) {
          return g(parseInt(t), 0, 12) ? parseInt(t) : null;
        },
        em_en: function (t) {
          return 'string' == typeof t && t.split(',').length > 0
            ? t.split(',').map(function (t) {
                return t.trim();
              })
            : null;
        },
        em_etp: function (t) {
          return 'string' == typeof t && t.split(',').length > 0
            ? t.split(',').map(function (t) {
                return t.trim();
              })
            : null;
        },
        em_el: function (t) {
          return 'string' == typeof t && t.split(',').length > 0
            ? t.split(',').map(function (t) {
                return t.trim();
              })
            : null;
        },
        em_ed: function (t) {
          if ('string' != typeof t) return null;
          var e = t.split(',').reduce(function (t, e) {
            var n = Number(e.trim());
            return g(n, 1, 14) && t.push(n), t;
          }, []);
          return e.length > 0 ? e : null;
        },
        em_es: function (t) {
          return 'string' == typeof t && t.split(',').length > 0
            ? t.split(',').map(function (t) {
                return t.trim();
              })
            : null;
        },
        em_etm: function (t) {
          if ('string' != typeof t) return null;
          var e = t.split(',').reduce(function (t, e) {
            var n = e.split(' ').join('');
            return O(n) && t.push(n), t;
          }, []);
          return e.length > 0 ? e : null;
        },
      };
      const C = function (t) {
          var e = c(t);
          return 'object' === l(e) && null !== e && Object.keys(e).length
            ? Object.keys(e).reduce(function (t, n) {
                var r = I[n];
                if ('function' == typeof r) {
                  var o = r(e[n]),
                    i = 'boolean' == typeof o || o;
                  t = k(k({}, t), i ? s({}, n, o) : {});
                }
                return t;
              }, {})
            : {};
        },
        T = function (t, e) {
          var n = t.id,
            r = t.parentNode,
            o = t.url,
            i = t.targetURL,
            a = t.contextParams,
            u = t.campaignId;
          if (n && o && r) {
            e.info("INIT Adnetify create Iframe for '".concat(n, "'")),
              e.log('url = ', o),
              e.log('parent = ', i);
            var c = new URL(o);
            c.searchParams.has('context') || c.searchParams.set('context', a),
              c.searchParams.set('campaign', u),
              c.searchParams.set('id', n);
            var l = document.createElement('iframe');
            return (
              l.setAttribute('id', 'mm'.concat(n)),
              l.setAttribute('src', c.toString()),
              l.setAttribute('frameborder', '0'),
              l.setAttribute('allowfullscreen', ''),
              l.setAttribute('width', '100%'),
              l.setAttribute('height', '0'),
              l.setAttribute('overflow', 'hidden'),
              l.setAttribute('autoStyle', !0),
              l.setAttribute(
                'sandbox',
                'allow-scripts allow-top-navigation allow-forms allow-same-origin allow-popups'
              ),
              l.setAttribute('style', 'display: block;border:none;'),
              l.style.setProperty(
                'will-change',
                'position, transform, scroll-position, contents, height'
              ),
              (r.innerHTML = ''),
              r.appendChild(l)
            );
          }
        },
        M = function (t) {
          if (t) {
            var e = document.querySelector("iframe[id='mm".concat(t, "']"));
            if (e && 'function' == typeof e.remove) return e.remove();
          }
        };
      var U = function (t, e) {
        var n = t.data;
        if (
          !n.sentinel ||
          'em-ad-content' !== n.sentinel ||
          !n.type ||
          !n.handshakeId
        )
          return null;
        var r = document.querySelector('iframe#mm'.concat(n.handshakeId));
        if (r) {
          var o = parseInt(r.getAttribute('data-em-screen-stack'), 10) || 0;
          switch (n.type) {
            case 'enter-full-screen':
              if (o >= 1)
                return void r.setAttribute('data-em-screen-stack', o + 1);
              r.setAttribute('data-em-screen-stack', 1),
                r.setAttribute('data-em-prev-scroll-y', window.scrollY),
                r.setAttribute('data-em-prev-height', r.style.height);
              var i = document.createElement('div');
              i.setAttribute('id', 'em-padding-div'),
                (i.style.paddingTop = ''.concat(window.innerHeight, 'px')),
                document.body.prepend(i),
                (r.style.opacity = 0),
                requestAnimationFrame(function () {
                  (r.style.position = 'fixed'),
                    (r.style.width = '100vw'),
                    (r.style.zIndex = '9999'),
                    (r.style.height = window.innerHeight);
                }),
                requestAnimationFrame(function () {
                  var t = r.getBoundingClientRect(),
                    e = -t.top,
                    n = -t.left;
                  r.style.transform = 'translateY('
                    .concat(e, 'px) translateX(')
                    .concat(n, 'px)');
                }),
                setTimeout(function () {
                  (r.style.transition =
                    'opacity .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) .15s'),
                    (r.style.opacity = 1);
                }, 100),
                r.setAttribute('data-em-is-fullscreen', !0),
                (function () {
                  if ('undefined' == typeof window) return null;
                  document.body.style.overflow = 'hidden';
                })();
              var a = function () {
                r.hasAttribute('data-em-is-fullscreen') &&
                  requestAnimationFrame(function () {
                    r.style.height !== ''.concat(window.innerHeight, 'px') &&
                      (r.style.height = ''.concat(window.innerHeight, 'px')),
                      a();
                  });
              };
              return (
                requestAnimationFrame(function () {
                  return a();
                }),
                void e.info(
                  'EVENT (Iframe -> Adnetify) '.concat(n.type, ': '),
                  n
                )
              );
            case 'exit-full-screen':
              if (!r.hasAttribute('data-em-is-fullscreen')) return;
              if (o > 1)
                return void r.setAttribute('data-em-screen-stack', o - 1);
              var u = r.getAttribute('data-em-prev-height') || 'auto',
                c = r.getAttribute('data-em-prev-scroll-y');
              return (
                r.removeAttribute('data-em-screen-stack'),
                r.removeAttribute('data-em-is-fullscreen'),
                r.removeAttribute('data-em-prev-height'),
                r.removeAttribute('data-em-prev-scroll-y'),
                document.querySelector('div#em-padding-div').remove(),
                (r.style.position = ''),
                (r.style.transition = ''),
                (r.style.transform = ''),
                (r.style.height = u),
                (r.style.width = ''),
                (r.style.zIndex = ''),
                (document.body.style.position = ''),
                (function () {
                  if ('undefined' == typeof window) return null;
                  document.body.style.overflow = 'auto';
                })(),
                c && window.scrollTo({ top: Number(c) }),
                void e.info(
                  'EVENT (Iframe -> Adnetify) '.concat(n.type, ': '),
                  n
                )
              );
            case 'resize':
              var l = n.height;
              return (
                n.width,
                requestAnimationFrame(function () {
                  r &&
                    (0 !== l || r.style.height) &&
                    ''.concat(l, 'px') !== r.style.height &&
                    ((r.style.height = ''.concat(l, 'px')),
                    e.info(
                      'EVENT (Iframe -> Adnetify) '.concat(n.type, ': '),
                      n
                    ),
                    e.log('height = ', l));
                })
              );
          }
        }
      };
      const D = function (t, e) {
        var n = t.id,
          r = t.emContext,
          o = t.payload,
          i = void 0 === o ? {} : o,
          a = function (t) {
            var o = t.data;
            if (
              o.sentinel &&
              'em-ad-content' === o.sentinel &&
              o.type &&
              'handshake-request' === o.type &&
              o.handshakeId &&
              o.handshakeId === n
            ) {
              e.info('EVENT (Iframe -> Adnetify) '.concat(o.type, ': '), o),
                e.log('handshakeId = ', o.handshakeId);
              var u = {
                sentinel: 'em-adnetify',
                type: 'handshake-response',
                context: r,
                payload: i,
                parentURL: window.location.href,
              };
              t.source.postMessage(u, t.origin),
                e.info('EVENT (Adnetify -> Iframe) handshake-response: ', u),
                window.removeEventListener('message', a, !1),
                (function (t) {
                  window.addEventListener(
                    'message',
                    function (e) {
                      return U(e, t);
                    },
                    !1
                  );
                })(e);
            }
          };
        window.addEventListener('message', a, !1);
      };
      var N = ['CM', 'VN', 'KC', 'WY', 'JU', 'AV1', 'AC', 'VY', 'F3'];
      const R = function (t, e) {
        var n = i(
          new Set(
            e
              .map(function (e) {
                var n,
                  r,
                  o = e.id;
                return (
                  !(null == t || !t[o]) &&
                  !(
                    null == t ||
                    null === (n = t[o]) ||
                    void 0 === n ||
                    null === (n = n.emContext) ||
                    void 0 === n ||
                    null === (n = n.airline) ||
                    void 0 === n ||
                    !n.code
                  ) &&
                  (null == t ||
                  null === (r = t[o]) ||
                  void 0 === r ||
                  null === (r = r.emContext) ||
                  void 0 === r ||
                  null === (r = r.airline) ||
                  void 0 === r
                    ? void 0
                    : r.code.toUpperCase())
                );
              })
              .filter(Boolean)
          )
        );
        return N.some(function (t) {
          return n.includes(t);
        });
      };
      function q(t, e, n, r, o, i, a) {
        try {
          var u = t[i](a),
            c = u.value;
        } catch (t) {
          return void n(t);
        }
        u.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function F(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              q(i, r, o, a, u, 'next', t);
            }
            function u(t) {
              q(i, r, o, a, u, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      var K = n(756),
        G = n.n(K);
      function W(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? W(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Y = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          if (!t) return {};
          for (var e = {}, n = 0; n < t.length; n++) e[t[n].name] = t[n].value;
          return e;
        },
        H = function (t, e) {
          var n = e.deviceCategory,
            r = e.config,
            o = t.iframeUrl,
            i = t.layout,
            a = t.advertiserCode,
            u = t.context,
            c = void 0 === u ? {} : u,
            l = (t.matchedRules, t.labels),
            s = void 0 === l ? [] : l,
            f = t.apiKeys,
            d = void 0 === f ? {} : f,
            p = t.siteEdition,
            y = void 0 === p ? {} : p,
            v = t.campaignId,
            g = void 0 === v ? '' : v,
            m = r.securityKey,
            h = {
              airline: { code: a },
              datasource: {
                step: (null == c ? void 0 : c.step) || 'airModule',
              },
              geo: {
                language: {
                  lang: (y && y.language) || (c && c.language) || 'en',
                  siteEditionLanguage: (y && y.siteEditionLanguage) || '',
                  site_edition_country_geo_id: (y && y.countryGeoId) || '',
                  siteEditionMarket: (y && y.siteEditionMarket) || '',
                  site_edition: (y && y.name) || 'en-us',
                  textDirection: y && 'RTL' === y.textDirection ? 'RTL' : 'LTR',
                },
              },
              audience: { device_category: n },
            };
          return {
            iframeUrl: o,
            layout: i,
            emContext: h,
            campaignId: g,
            payload: {
              context: h,
              i18n: { labels: Y(s) },
              tokens: B(B(B({}, { 'em:apiKey': m }), { apiKey: m }), d),
            },
          };
        },
        V = function (t, e) {
          var n = e.deviceCategory,
            r = e.config;
          if (null != t && t.error) return t;
          for (var o = {}, i = 0, a = Object.entries(t); i < a.length; i++) {
            var c = u(a[i], 2),
              l = c[0],
              s = c[1];
            o[l] = H(s, { deviceCategory: n, config: r });
          }
          return o;
        };
      const J = (function () {
        var t = F(function (t) {
          var e = t.config,
            n = void 0 === e ? {} : e,
            r = t.extraData,
            o = void 0 === r ? {} : r,
            i = t.request,
            a = void 0 === i ? {} : i,
            u =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window.console;
          return G().mark(function t() {
            var e, r, i, c, l, s, f, d, p, y;
            return G().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = n.endpoint),
                        (r = n.securityKey),
                        (i = o.deviceCategory),
                        (c = a.url),
                        (l = a.adUnits),
                        (s = a.language),
                        (f = a.market),
                        (d = {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'em-api-key': r,
                          },
                          body: JSON.stringify(
                            B(
                              B(
                                B(
                                  B({}, c ? { url: c } : {}),
                                  l ? { adUnits: l } : {}
                                ),
                                s ? { language: s } : {}
                              ),
                              f ? { market: f } : {}
                            )
                          ),
                        }),
                        u.info(
                          'NETWORK (Adnetify -> Module Manager) request for adUnits:'
                        ),
                        u.log('endpoint = ', e),
                        u.log('adUnits = ', l),
                        u.log('data = ', d),
                        (t.prev = 8),
                        (t.next = 11),
                        fetch(e, d)
                      );
                    case 11:
                      return (p = t.sent), (t.next = 14), p.json();
                    case 14:
                      return (
                        (y = t.sent),
                        u.info(
                          'NETWORK (Module Manager -> Adnetify) response for adUnits:',
                          y
                        ),
                        t.abrupt(
                          'return',
                          V(y, { deviceCategory: i, config: n })
                        )
                      );
                    case 19:
                      (t.prev = 19),
                        (t.t0 = t.catch(8)),
                        u.error(
                          'NETWORK: There was an error while calling the MM MS, err: ',
                          t.t0
                        );
                    case 22:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[8, 19]]
            );
          })();
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      function z(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      const Z = (function () {
        var t = F(function (t) {
          var e = t.config,
            n = void 0 === e ? {} : e,
            r = t.request,
            o = void 0 === r ? {} : r,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window.console;
          return G().mark(function t() {
            var e, r, a, u, c, l, s, f, d;
            return G().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = n.endpoint),
                        (r = o.latitude),
                        (a = o.longitude),
                        (u = o.language),
                        (c = o.template),
                        (l = {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(
                            X(
                              X(
                                X(
                                  {},
                                  r && a
                                    ? { geo: { latitude: r, longitude: a } }
                                    : {}
                                ),
                                u ? { language: u } : {}
                              ),
                              c ? { template: c } : {}
                            )
                          ),
                        }),
                        i.info(
                          'NETWORK (Adnetify -> Geolocation Worker) request for ['
                            .concat(r, ', ')
                            .concat(a, ']:')
                        ),
                        i.log('endpoint = ', e),
                        i.log('data = ', l),
                        (t.prev = 6),
                        (t.next = 9),
                        fetch(e, l)
                      );
                    case 9:
                      return (f = t.sent), (t.next = 12), f.json();
                    case 12:
                      return (
                        (d = t.sent),
                        i.info(
                          'NETWORK (Module Manager -> Adnetify) response for ['
                            .concat(r, ', ')
                            .concat(a, ']:'),
                          d
                        ),
                        t.abrupt(
                          'return',
                          null == d || null === (s = d.nearest) || void 0 === s
                            ? void 0
                            : s.iataCode
                        )
                      );
                    case 17:
                      (t.prev = 17),
                        (t.t0 = t.catch(6)),
                        i.error(
                          'NETWORK: There was an error while calling the Geolocation Worker, err: ',
                          t.t0
                        );
                    case 20:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[6, 17]]
            );
          })();
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      function $(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var tt = (function () {
        var n = F(function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = n.targetURL,
            o =
              void 0 === r
                ? (function () {
                    if (window && window.location && window.location.href)
                      return window.location.href;
                  })()
                : r,
            u = n.mmEndpoint,
            l =
              void 0 === u
                ? 'https://openair-dev.airtrfx.com/module-manager-service/v1/multi-ad-context'
                : u,
            s = n.mmApiKey,
            f =
              void 0 === s
                ? 'BI6YTjWfcj8/IDOtpCjpLrJmLSKtCx2+AAQEpdggtgvNnrZhlDztX3/EwDfS16j4'
                : s,
            d = n.logger,
            p = void 0 === d ? window.console : d,
            y = n.apiService,
            v = void 0 === y ? J : y,
            g = n.isGeoEnabled,
            m = void 0 === g || g;
          return G().mark(function n() {
            var r,
              u,
              s,
              d,
              y,
              g,
              h,
              b,
              w,
              O,
              x,
              j,
              _,
              E,
              P,
              S,
              L,
              k,
              I,
              U,
              N,
              q,
              K,
              W,
              B,
              Y,
              H,
              V,
              J,
              z,
              X,
              $,
              et,
              nt,
              rt,
              ot,
              it,
              at,
              ut,
              ct,
              lt,
              st,
              ft,
              dt,
              pt;
            return G().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (
                      ((r = o),
                      (u = t()),
                      (mt = void 0),
                      (mt = document.querySelectorAll('['.concat(a, ']'))),
                      (s = mt.length
                        ? i(mt).map(function (t) {
                            return { id: t.getAttribute(a), node: t };
                          })
                        : []) && s.length)
                    ) {
                      n.next = 5;
                      break;
                    }
                    return n.abrupt('return');
                  case 5:
                    return (
                      (d = window),
                      (y = d.MMdataLayer),
                      (h = A((g = void 0 === y ? {} : y))),
                      (b = h.languageIsoCode),
                      (w = h.countryIsoCode),
                      (O = h.textDirection),
                      (x = h.homeLocation),
                      (j = h.originLocations),
                      (_ = h.destinationLocations),
                      (E = h.budgetMaximumAmount),
                      (P = h.budgetRedemptionUnit),
                      (S = h.experience),
                      (L = h.event),
                      (k = h.trackingUserConsent),
                      (I = k),
                      (U = C(decodeURI(window.location.href))),
                      (N = U.em_o),
                      (q = U.em_d),
                      (K = U.em_b),
                      (W = U.em_pc),
                      (B = U.em_re),
                      (Y = U.em_bre),
                      (H = U.em_jt),
                      (V = U.em_fd),
                      (J = U.em_dc),
                      (z = U.em_dd),
                      (X = U.em_rd),
                      ($ = U.em_fc),
                      (et = U.defaultMonth),
                      (nt = U.em_en),
                      (rt = U.em_etp),
                      (ot = U.em_el),
                      (it = U.em_ed),
                      (at = U.em_es),
                      (ut = U.em_etm),
                      (n.next = 13),
                      v(
                        {
                          config: { endpoint: l, securityKey: f },
                          request: {
                            url: r,
                            adUnits: s.map(function (t) {
                              return t.id;
                            }),
                            language: b,
                            market: w,
                          },
                          extraData: { deviceCategory: u },
                        },
                        p
                      )
                    );
                  case 13:
                    (ct = n.sent),
                      (lt = function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          n = t.geoHomeLocation,
                          r = t.geoTrackingConsent,
                          i = t.geoTrackingContextUpdated;
                        s.forEach(
                          (function () {
                            var t = F(function (t) {
                              var a = t.id,
                                u = t.node;
                              return G().mark(function t(
                                c,
                                l,
                                s,
                                f,
                                d,
                                y,
                                v,
                                g
                              ) {
                                var m, h, b, w, A, k;
                                return G().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (null != ct && ct[a]) {
                                          t.next = 2;
                                          break;
                                        }
                                        return t.abrupt('return');
                                      case 2:
                                        (m = ct[a]),
                                          (h = m.iframeUrl),
                                          (b = m.emContext),
                                          (w = m.payload),
                                          (A = m.campaignId),
                                          (k = Q(
                                            Q({}, b),
                                            {},
                                            {
                                              geo: Q(
                                                Q(
                                                  {},
                                                  (null == b
                                                    ? void 0
                                                    : b.geo) || {}
                                                ),
                                                {},
                                                {
                                                  language: Q(
                                                    Q(
                                                      {},
                                                      (null == b ||
                                                      null === (c = b.geo) ||
                                                      void 0 === c
                                                        ? void 0
                                                        : c.language) || {}
                                                    ),
                                                    {},
                                                    {
                                                      lang:
                                                        null == b ||
                                                        null === (l = b.geo) ||
                                                        void 0 === l ||
                                                        null ===
                                                          (l = l.language) ||
                                                        void 0 === l
                                                          ? void 0
                                                          : l.lang,
                                                      siteEditionLanguage:
                                                        null == b ||
                                                        null === (s = b.geo) ||
                                                        void 0 === s ||
                                                        null ===
                                                          (s = s.language) ||
                                                        void 0 === s
                                                          ? void 0
                                                          : s.siteEditionLanguage,
                                                      siteEditionMarket:
                                                        null == b ||
                                                        null === (f = b.geo) ||
                                                        void 0 === f ||
                                                        null ===
                                                          (f = f.language) ||
                                                        void 0 === f
                                                          ? void 0
                                                          : f.siteEditionMarket,
                                                      site_edition:
                                                        null == b ||
                                                        null === (d = b.geo) ||
                                                        void 0 === d ||
                                                        null ===
                                                          (d = d.language) ||
                                                        void 0 === d
                                                          ? void 0
                                                          : d.site_edition,
                                                      textDirection:
                                                        O ||
                                                        (null == b ||
                                                        null === (y = b.geo) ||
                                                        void 0 === y ||
                                                        null ===
                                                          (y = y.language) ||
                                                        void 0 === y
                                                          ? void 0
                                                          : y.textDirection),
                                                    }
                                                  ),
                                                  location: Q(
                                                    Q(
                                                      Q(
                                                        Q(
                                                          Q(
                                                            {},
                                                            (null == b ||
                                                            null ===
                                                              (v = b.geo) ||
                                                            void 0 === v
                                                              ? void 0
                                                              : v.location) ||
                                                              {}
                                                          ),
                                                          x
                                                            ? {
                                                                user_input_origin_airport_code:
                                                                  x,
                                                              }
                                                            : {}
                                                        ),
                                                        N
                                                          ? {
                                                              user_input_origin_airport_code:
                                                                N,
                                                            }
                                                          : {}
                                                      ),
                                                      q
                                                        ? {
                                                            user_input_destination_airport_code:
                                                              q,
                                                          }
                                                        : {}
                                                    ),
                                                    n
                                                      ? {
                                                          user_input_origin_airport_code:
                                                            n,
                                                        }
                                                      : {}
                                                  ),
                                                }
                                              ),
                                              extra_info: Q(
                                                Q(
                                                  {},
                                                  null != b && b.extra_info
                                                    ? b.extra_info
                                                    : {}
                                                ),
                                                {},
                                                {
                                                  airports: Q(
                                                    Q(
                                                      Q(
                                                        {},
                                                        null != b &&
                                                          null !==
                                                            (g =
                                                              b.extra_info) &&
                                                          void 0 !== g &&
                                                          g.airports
                                                          ? b.extra_info
                                                              .airports
                                                          : {}
                                                      ),
                                                      Array.isArray(j)
                                                        ? { origin: j }
                                                        : {}
                                                    ),
                                                    Array.isArray(_)
                                                      ? { destination: _ }
                                                      : {}
                                                  ),
                                                }
                                              ),
                                              dynamicContext: Q(
                                                Q(
                                                  Q(
                                                    Q(
                                                      Q(
                                                        Q(
                                                          Q(
                                                            Q(
                                                              Q(
                                                                Q(
                                                                  Q(
                                                                    Q(
                                                                      Q(
                                                                        Q(
                                                                          Q(
                                                                            Q(
                                                                              Q(
                                                                                Q(
                                                                                  Q(
                                                                                    Q(
                                                                                      Q(
                                                                                        {},
                                                                                        void 0 !==
                                                                                          E
                                                                                          ? {
                                                                                              budgetMaximumAmount:
                                                                                                E,
                                                                                            }
                                                                                          : {}
                                                                                      ),
                                                                                      void 0 !==
                                                                                        K
                                                                                        ? {
                                                                                            budgetMaximumAmount:
                                                                                              K,
                                                                                          }
                                                                                        : {}
                                                                                    ),
                                                                                    void 0 !==
                                                                                      P
                                                                                      ? {
                                                                                          redemptionUnit:
                                                                                            P,
                                                                                        }
                                                                                      : {}
                                                                                  ),
                                                                                  void 0 !==
                                                                                    Y
                                                                                    ? {
                                                                                        budgetRedemptionUnit:
                                                                                          Y,
                                                                                      }
                                                                                    : {}
                                                                                ),
                                                                                void 0 !==
                                                                                  B
                                                                                  ? {
                                                                                      isRedemption:
                                                                                        B,
                                                                                    }
                                                                                  : {}
                                                                              ),
                                                                              void 0 !==
                                                                                W
                                                                                ? {
                                                                                    passengerCount:
                                                                                      W,
                                                                                  }
                                                                                : {}
                                                                            ),
                                                                            void 0 !==
                                                                              H
                                                                              ? {
                                                                                  productCategory:
                                                                                    H,
                                                                                }
                                                                              : {}
                                                                          ),
                                                                          void 0 !==
                                                                            $
                                                                            ? {
                                                                                productType:
                                                                                  $,
                                                                              }
                                                                            : {}
                                                                        ),
                                                                        void 0 !==
                                                                          V
                                                                          ? {
                                                                              isFlexibleDates:
                                                                                V,
                                                                            }
                                                                          : {}
                                                                      ),
                                                                      void 0 !==
                                                                        J
                                                                        ? {
                                                                            discountCode:
                                                                              J,
                                                                          }
                                                                        : {}
                                                                    ),
                                                                    void 0 !== z
                                                                      ? {
                                                                          departureDate:
                                                                            z,
                                                                        }
                                                                      : {}
                                                                  ),
                                                                  void 0 !== X
                                                                    ? {
                                                                        returnDate:
                                                                          X,
                                                                      }
                                                                    : {}
                                                                ),
                                                                void 0 !== x
                                                                  ? {
                                                                      originLocation:
                                                                        x,
                                                                    }
                                                                  : {}
                                                              ),
                                                              void 0 !== N
                                                                ? {
                                                                    originLocation:
                                                                      N,
                                                                  }
                                                                : {}
                                                            ),
                                                            void 0 !== n
                                                              ? {
                                                                  originLocation:
                                                                    n,
                                                                }
                                                              : {}
                                                          ),
                                                          void 0 !== q
                                                            ? {
                                                                destinationLocation:
                                                                  q,
                                                              }
                                                            : {}
                                                        ),
                                                        void 0 !== j
                                                          ? {
                                                              originLocations:
                                                                j,
                                                            }
                                                          : {}
                                                      ),
                                                      void 0 !== _
                                                        ? {
                                                            destinationLocations:
                                                              _,
                                                          }
                                                        : {}
                                                    ),
                                                    void 0 !== et
                                                      ? { defaultMonth: et }
                                                      : {}
                                                  ),
                                                  {},
                                                  {
                                                    experience: Q(
                                                      Q(
                                                        Q(
                                                          {},
                                                          null != S ? S : {}
                                                        ),
                                                        null != nt
                                                          ? { name: nt }
                                                          : {}
                                                      ),
                                                      null != rt
                                                        ? { type: rt }
                                                        : {}
                                                    ),
                                                    event: Q(
                                                      Q(
                                                        Q(
                                                          Q(
                                                            Q(
                                                              {},
                                                              null != L ? L : {}
                                                            ),
                                                            null != ot
                                                              ? { location: ot }
                                                              : {}
                                                          ),
                                                          null != it
                                                            ? { date: it }
                                                            : {}
                                                        ),
                                                        null != at
                                                          ? { session: at }
                                                          : {}
                                                      ),
                                                      null != ut
                                                        ? { time: ut }
                                                        : {}
                                                    ),
                                                    __debug: Q({}, U),
                                                  },
                                                  void 0 !== r
                                                    ? { geolocation_consent: r }
                                                    : {}
                                                ),
                                                void 0 !== i
                                                  ? {
                                                      geolocation_context_updated:
                                                        i,
                                                    }
                                                  : {}
                                              ),
                                            }
                                          )),
                                          e({
                                            targetSelector:
                                              "[data-container-id='".concat(
                                                a,
                                                "']"
                                              ),
                                            onInterception: function () {
                                              var t,
                                                e,
                                                n,
                                                r,
                                                i,
                                                c,
                                                l,
                                                s =
                                                  ((l = {
                                                    tenant:
                                                      null == (t = k) ||
                                                      null ===
                                                        (e = t.airline) ||
                                                      void 0 === e
                                                        ? void 0
                                                        : e.code,
                                                    market:
                                                      null == t ||
                                                      null === (n = t.geo) ||
                                                      void 0 === n ||
                                                      null ===
                                                        (n = n.language) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.siteEditionMarket,
                                                    lang:
                                                      null == t ||
                                                      null === (r = t.geo) ||
                                                      void 0 === r ||
                                                      null ===
                                                        (r = r.language) ||
                                                      void 0 === r
                                                        ? void 0
                                                        : r.lang,
                                                    step:
                                                      null == t ||
                                                      null ===
                                                        (i = t.datasource) ||
                                                      void 0 === i
                                                        ? void 0
                                                        : i.step,
                                                    device:
                                                      null == t ||
                                                      null ===
                                                        (c = t.audience) ||
                                                      void 0 === c
                                                        ? void 0
                                                        : c.device_category,
                                                  }),
                                                  Object.keys(l)
                                                    .map(function (t) {
                                                      return (
                                                        !!l[t] &&
                                                        ''
                                                          .concat(t, ':')
                                                          .concat(l[t])
                                                      );
                                                    })
                                                    .filter(function (t) {
                                                      return !1 !== t;
                                                    })
                                                    .join(';')),
                                                f = Q(
                                                  Q({}, k),
                                                  {},
                                                  {
                                                    dynamicContext: Q(
                                                      Q({}, k.dynamicContext),
                                                      {},
                                                      {
                                                        trackingUserConsent:
                                                          void 0 === I || I,
                                                      }
                                                    ),
                                                  }
                                                );
                                              D(
                                                {
                                                  id: a,
                                                  emContext: f,
                                                  payload: Q(
                                                    Q({}, w),
                                                    {},
                                                    { context: f }
                                                  ),
                                                },
                                                p
                                              ),
                                                T(
                                                  {
                                                    id: a,
                                                    parentNode: u,
                                                    url: h,
                                                    targetURL: o,
                                                    contextParams: s,
                                                    campaignId: A,
                                                  },
                                                  p
                                                );
                                            },
                                          });
                                      case 6:
                                      case 'end':
                                        return t.stop();
                                    }
                                }, t);
                              })();
                            });
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        );
                      }),
                      lt(),
                      (st = function () {
                        s.forEach(function (t) {
                          var e = t.id;
                          return M(e);
                        }),
                          tt({ targetURL: o, mmEndpoint: l, mmApiKey: f });
                      }),
                      (ft = function (t) {
                        (I = t),
                          s.forEach(function (e) {
                            var n = e.id,
                              r = document.getElementById('mm' + n),
                              o = new URL(r.src);
                            r.contentWindow.postMessage(
                              {
                                sentinel: 'em-adnetify',
                                type: 'tracking-user-consent',
                                value: t,
                              },
                              o.origin
                            );
                          });
                      }),
                      (window.MMdataLayer = new Proxy(Q({}, g), {
                        set: function (t, e, n) {
                          return 'trackingUserConsent' === e
                            ? ((t[e] = n), ft(n), !0)
                            : (t[e] !== n && ((t[e] = n), st()), t[e] === n);
                        },
                      })),
                      (dt = (function () {
                        var t = F(
                          G().mark(function t(e) {
                            var n, r, o, i, a, u, c, l, f, d;
                            return G().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      (console.log(
                                        '---- handleGetLocationByBrowser'
                                      ),
                                      console.log(e),
                                      (c =
                                        null == ct ||
                                        null ===
                                          (n =
                                            ct[
                                              null === (r = s[0]) ||
                                              void 0 === r
                                                ? void 0
                                                : r.id
                                            ]) ||
                                        void 0 === n ||
                                        null === (n = n.emContext) ||
                                        void 0 === n ||
                                        null === (n = n.airline) ||
                                        void 0 === n
                                          ? void 0
                                          : n.code),
                                      (l =
                                        null == ct ||
                                        null ===
                                          (o =
                                            ct[
                                              null === (i = s[0]) ||
                                              void 0 === i
                                                ? void 0
                                                : i.id
                                            ]) ||
                                        void 0 === o ||
                                        null === (o = o.emContext) ||
                                        void 0 === o ||
                                        null === (o = o.geo) ||
                                        void 0 === o ||
                                        null === (o = o.language) ||
                                        void 0 === o
                                          ? void 0
                                          : o.lang),
                                      (f =
                                        null == ct ||
                                        null ===
                                          (a =
                                            ct[
                                              null === (u = s[0]) ||
                                              void 0 === u
                                                ? void 0
                                                : u.id
                                            ]) ||
                                        void 0 === a ||
                                        null === (a = a.emContext) ||
                                        void 0 === a ||
                                        null === (a = a.datasource) ||
                                        void 0 === a
                                          ? void 0
                                          : a.step),
                                      c && l && f)
                                    ) {
                                      t.next = 7;
                                      break;
                                    }
                                    return t.abrupt('return');
                                  case 7:
                                    return (
                                      (t.next = 9),
                                      Z(
                                        {
                                          config: {
                                            endpoint: ''
                                              .concat(
                                                'https://geolocation.everymundo.net',
                                                '/'
                                              )
                                              .concat(
                                                c,
                                                '/airports/nearest-origin'
                                              ),
                                          },
                                          request: {
                                            latitude: e.coords.latitude,
                                            longitude: e.coords.longitude,
                                            language: l,
                                            template: f,
                                          },
                                        },
                                        p
                                      )
                                    );
                                  case 9:
                                    if ((d = t.sent)) {
                                      t.next = 12;
                                      break;
                                    }
                                    return t.abrupt('return');
                                  case 12:
                                    s.forEach(function (t) {
                                      var e = t.id;
                                      return M(e);
                                    }),
                                      lt({
                                        geoHomeLocation: d,
                                        geoTrackingConsent: !0,
                                        geoTrackingContextUpdated: !0,
                                      });
                                  case 14:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (pt = function (t) {
                        console.log(
                          '---- handleGetLocationByBrowserError -> Unable to retrieve your location'
                        ),
                          console.log(t);
                      }),
                      m &&
                        ((gt = U), '{}' === JSON.stringify(gt)) &&
                        navigator.geolocation &&
                        ((yt = 'geo'),
                        (vt = void 0),
                        (null != (vt = c(r)) && vt.em_features
                          ? vt.em_features.split(',')
                          : []
                        ).includes(yt) || R(ct, s)) &&
                        navigator.geolocation.getCurrentPosition(dt, pt, {
                          enableHighAccuracy: !0,
                          timeout: 4e3,
                          maximumAge: 0,
                        });
                  case 23:
                  case 'end':
                    return n.stop();
                }
              var yt, vt, gt, mt;
            }, n);
          })();
        });
        return function () {
          return n.apply(this, arguments);
        };
      })();
      const et = tt;
      var nt = function () {
        return et();
      };
      window._babelPolyfill ||
      [
        'Promise',
        'fetch',
        'IntersectionObserver',
        'Symbol',
        'requestAnimationFrame',
      ].every(function (t) {
        return (function (t) {
          switch (t) {
            case 'Promise':
              return 'function' == typeof window.Promise;
            case 'fetch':
              return 'function' == typeof window.fetch;
            case 'IntersectionObserver':
              return 'function' == typeof window.IntersectionObserver;
            case 'Symbol':
              return 'function' == typeof window.Symbol;
            case 'requestAnimationFrame':
              return 'function' == typeof window.requestAnimationFrame;
            default:
              return !1;
          }
        })(t);
      })
        ? nt()
        : (function (t) {
            var e = t.src,
              n = t.onSuccess,
              r = t.onError;
            if (!e) return r('failed to load script, invalid src: '.concat(e));
            var o = document.createElement('script');
            (o.src = e),
              (o.onload = function () {
                return n();
              }),
              (o.onerror = function () {
                return r(
                  new Error('failed to load script with src: '.concat(e))
                );
              }),
              document.head.appendChild(o);
          })({
            src: 'https://em-frontend-assets.airtrfx.com/assets/em-cmp-client-utils/1.0.2/em-cmp-polyfills/polyfills.bundle.js',
            onSuccess: function () {
              return nt();
            },
            onError: function (t) {
              return console.error(t);
            },
          });
    })();
})();
