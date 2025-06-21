(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8126], {
    18289: (e, t, r) => {
        "use strict";
        r.d(t, {
            k: () => o
        });
        var n = r(34900)
          , s = r(42462)
          , i = r(53245);
        function o(e) {
            let {className: t, ...r} = e;
            return (0,
            n.jsx)(i.N_, {
                className: (0,
                s.cn)("text-sm md:text-base", t),
                scramble: !0,
                underline: !1,
                ...r
            })
        }
    }
    ,
    28126: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 35639)),
        Promise.resolve().then(r.bind(r, 36383)),
        Promise.resolve().then(r.bind(r, 28895)),
        Promise.resolve().then(r.bind(r, 94739)),
        Promise.resolve().then(r.bind(r, 45436)),
        Promise.resolve().then(r.bind(r, 76652)),
        Promise.resolve().then(r.t.bind(r, 46677, 23)),
        Promise.resolve().then(r.bind(r, 38815)),
        Promise.resolve().then(r.bind(r, 23424)),
        Promise.resolve().then(r.bind(r, 59109)),
        Promise.resolve().then(r.bind(r, 79961)),
        Promise.resolve().then(r.bind(r, 22604)),
        Promise.resolve().then(r.bind(r, 69285)),
        Promise.resolve().then(r.bind(r, 17900)),
        Promise.resolve().then(r.bind(r, 1642)),
        Promise.resolve().then(r.bind(r, 75198)),
        Promise.resolve().then(r.bind(r, 12592)),
        Promise.resolve().then(r.bind(r, 42494)),
        Promise.resolve().then(r.bind(r, 34957)),
        Promise.resolve().then(r.bind(r, 11305)),
        Promise.resolve().then(r.bind(r, 25556)),
        Promise.resolve().then(r.bind(r, 89e3)),
        Promise.resolve().then(r.bind(r, 39661)),
        Promise.resolve().then(r.bind(r, 26882)),
        Promise.resolve().then(r.bind(r, 28336)),
        Promise.resolve().then(r.bind(r, 37915)),
        Promise.resolve().then(r.bind(r, 22860)),
        Promise.resolve().then(r.bind(r, 1836)),
        Promise.resolve().then(r.bind(r, 74705)),
        Promise.resolve().then(r.bind(r, 54330)),
        Promise.resolve().then(r.bind(r, 38551)),
        Promise.resolve().then(r.bind(r, 12820)),
        Promise.resolve().then(r.bind(r, 8528)),
        Promise.resolve().then(r.bind(r, 26093)),
        Promise.resolve().then(r.bind(r, 99218)),
        Promise.resolve().then(r.bind(r, 11636)),
        Promise.resolve().then(r.bind(r, 96413)),
        Promise.resolve().then(r.bind(r, 91058)),
        Promise.resolve().then(r.bind(r, 31600))
    }
    ,
    28895: (e, t, r) => {
        "use strict";
        r.d(t, {
            LogOutLink: () => u
        });
        var n = r(34900)
          , s = r(17240)
          , i = r(42462)
          , o = r(12621)
          , l = r(50473)
          , d = r(33439);
        let c = (0,
        d.createServerReference)("001532b410d3f318640046ac66984e2f15b95f0aa9", d.callServer, void 0, d.findSourceMapURL, "logout");
        var a = r(18289);
        function u(e) {
            let {className: t} = e
              , [r,d] = (0,
            s.useTransition)()
              , u = (0,
            o.useRouter)()
              , h = (0,
            o.usePathname)();
            return (0,
            n.jsxs)("div", {
                className: "relative flex items-center",
                children: [(0,
                n.jsx)(a.k, {
                    className: (0,
                    i.cn)(t, {
                        "cursor-pointer": !r,
                        "cursor-not-allowed pointer-events-none opacity-70": r
                    }),
                    onMouseDown: () => {
                        d(async () => {
                            await c(),
                            h.startsWith("/ship/ticket") ? u.push("/ship") : u.refresh()
                        }
                        )
                    }
                    ,
                    children: "Logout"
                }), r ? (0,
                n.jsx)(l.y, {
                    size: 16,
                    wrapperClassName: "absolute -right-2 translate-x-full"
                }) : null]
            })
        }
    }
    ,
    33439: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            callServer: function() {
                return n.callServer
            },
            createServerReference: function() {
                return i
            },
            findSourceMapURL: function() {
                return s.findSourceMapURL
            }
        });
        let n = r(98900)
          , s = r(46760)
          , i = r(50256).createServerReference
    }
    ,
    35639: (e, t, r) => {
        "use strict";
        r.d(t, {
            MobileNav: () => l
        });
        var n = r(34900)
          , s = r(42462)
          , i = r(53245);
        let o = (0,
        r(96756).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="currentColor"/>');
        function l(e) {
            let {blended: t, children: r} = e;
            return (0,
            n.jsxs)(i.Kg, {
                direction: "right",
                children: [(0,
                n.jsx)(i.Uz, {
                    asChild: !0,
                    children: (0,
                    n.jsx)(i.$n, {
                        className: (0,
                        s.cn)("-ml-2.5 p-2.5 h-auto bg-transparent", t ? "hover:bg-gray-1000/90 mix-blend-difference" : "hover:bg-gray-200 text-gray-1000"),
                        size: "sm",
                        children: (0,
                        n.jsx)(o, {})
                    })
                }), (0,
                n.jsx)(i.zj, {
                    className: (0,
                    s.cn)("data-[vaul-drawer-direction=bottom]:top-auto", "[&>div]:gap-8 [&>div]:p-10 [&>div]:justify-end"),
                    children: r
                })]
            })
        }
    }
    ,
    36383: (e, t, r) => {
        "use strict";
        r.d(t, {
            HeaderCta: () => a
        });
        var n = r(34900)
          , s = r(17240)
          , i = r(59571)
          , o = r(28013)
          , l = r(98260)
          , d = r(45773)
          , c = r(18289);
        function a(e) {
            let {children: t, showCta: r, ...s} = e
              , i = (0,
            l.Q)("(max-width: 600px)")
              , o = (0,
            l.Q)("(prefers-reduced-motion: reduce)");
            return !r || i || o ? (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(h, {}), t]
            }) : (0,
            n.jsx)(u, {
                ...s,
                children: t
            })
        }
        function u(e) {
            let {children: t, href: r, text: o} = e
              , [l,c] = (0,
            s.useState)(!0);
            (0,
            s.useEffect)( () => {
                let e = document.querySelector("section");
                if (!e)
                    return;
                let t = new IntersectionObserver(e => {
                    let[t] = e;
                    c(t.isIntersecting)
                }
                ,{
                    threshold: 0,
                    rootMargin: "-110px 0px 0px 0px"
                });
                return t.observe(e),
                () => t.disconnect()
            }
            , []);
            let a = (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(h, {}), t]
            });
            return (0,
            n.jsx)(i.N, {
                initial: !1,
                mode: "wait",
                children: l ? (0,
                n.jsx)(f, {
                    children: a
                }, "without-cta") : (0,
                n.jsxs)(f, {
                    children: [a, (0,
                    n.jsx)(d.i, {
                        className: "mix-blend-difference bg-gray-100 text-gray-1000 hover:bg-gray-100/90",
                        size: "sm",
                        href: r,
                        text: o
                    })]
                }, "with-cta")
            })
        }
        function h() {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useRef)(null);
            return (0,
            s.useEffect)( () => {
                let n = n => {
                    e && r.current && !r.current.contains(n.target) && t(!1)
                }
                ;
                return document.addEventListener("mousedown", n),
                () => document.removeEventListener("mousedown", n)
            }
            , [e]),
            (0,
            s.useEffect)( () => {
                let e = () => {
                    window.scrollY > 10 && t(!1)
                }
                ;
                return window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
            }
            , []),
            (0,
            n.jsx)(i.N, {
                initial: !1,
                mode: "wait",
                children: e ? (0,
                n.jsxs)(f, {
                    ref: r,
                    children: [(0,
                    n.jsx)(c.k, {
                        external: !0,
                        href: "/go/vercel-ship-25-watch-party-emea-dusseldorf",
                        onClick: () => t(!1),
                        children: "D\xfcsseldorf"
                    }), (0,
                    n.jsx)(c.k, {
                        external: !0,
                        href: "/go/vercel-ship-london-watch-party",
                        onClick: () => t(!1),
                        children: "London"
                    })]
                }, "watch-party-revealed") : (0,
                n.jsx)(f, {
                    children: (0,
                    n.jsx)(c.k, {
                        onClick: () => t(!0),
                        children: "Watch party"
                    })
                }, "watch-party-hidden")
            })
        }
        function f(e) {
            return (0,
            n.jsx)(o.P.div, {
                animate: {
                    y: 0
                },
                className: "flex items-center gap-6 light-theme",
                exit: {
                    y: 15
                },
                initial: {
                    y: 15
                },
                transition: {
                    easing: [.455, .03, .515, .955],
                    duration: .1
                },
                ...e
            }, "with-cta")
        }
    }
    ,
    45773: (e, t, r) => {
        "use strict";
        r.d(t, {
            i: () => d
        });
        var n = r(34900)
          , s = r(53245)
          , i = r(84152)
          , o = r(31600)
          , l = r(42462);
        function d(e) {
            let {href: t, text: r, className: d, external: c, ...a} = e;
            return t && r ? (0,
            n.jsx)(s.$n, {
                asChild: !0,
                className: (0,
                l.cn)("hover:bg-gray-1000/90", d),
                ...a,
                children: (0,
                n.jsxs)(o.Link, {
                    href: t,
                    external: c,
                    children: [r, c ? null : (0,
                    n.jsx)(i.Q, {
                        size: 16
                    })]
                })
            }) : null
        }
    }
    ,
    59571: (e, t, r) => {
        "use strict";
        r.d(t, {
            N: () => b
        });
        var n = r(34900)
          , s = r(17240)
          , i = r(93073)
          , o = r(78017)
          , l = r(42746)
          , d = r(34361)
          , c = r(29117)
          , a = r(69928);
        class u extends s.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                    let e = t.offsetParent
                      , r = (0,
                    c.s)(e) && e.offsetWidth || 0
                      , n = this.props.sizeRef.current;
                    n.height = t.offsetHeight || 0,
                    n.width = t.offsetWidth || 0,
                    n.top = t.offsetTop,
                    n.left = t.offsetLeft,
                    n.right = r - n.width - n.left
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function h(e) {
            let {children: t, isPresent: r, anchorX: i} = e
              , o = (0,
            s.useId)()
              , l = (0,
            s.useRef)(null)
              , d = (0,
            s.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            })
              , {nonce: c} = (0,
            s.useContext)(a.Q);
            return (0,
            s.useInsertionEffect)( () => {
                let {width: e, height: t, top: n, left: s, right: a} = d.current;
                if (r || !l.current || !e || !t)
                    return;
                l.current.dataset.motionPopId = o;
                let u = document.createElement("style");
                return c && (u.nonce = c),
                document.head.appendChild(u),
                u.sheet && u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            ").concat("left" === i ? "left: ".concat(s) : "right: ".concat(a), "px !important;\n            top: ").concat(n, "px !important;\n          }\n        ")),
                () => {
                    document.head.contains(u) && document.head.removeChild(u)
                }
            }
            , [r]),
            (0,
            n.jsx)(u, {
                isPresent: r,
                childRef: l,
                sizeRef: d,
                children: s.cloneElement(t, {
                    ref: l
                })
            })
        }
        let f = e => {
            let {children: t, initial: r, isPresent: i, onExitComplete: l, custom: c, presenceAffectsLayout: a, mode: u, anchorX: f} = e
              , v = (0,
            o.M)(m)
              , p = (0,
            s.useId)()
              , x = !0
              , b = (0,
            s.useMemo)( () => (x = !1,
            {
                id: p,
                initial: r,
                isPresent: i,
                custom: c,
                onExitComplete: e => {
                    for (let t of (v.set(e, !0),
                    v.values()))
                        if (!t)
                            return;
                    l && l()
                }
                ,
                register: e => (v.set(e, !1),
                () => v.delete(e))
            }), [i, v, l]);
            return a && x && (b = {
                ...b
            }),
            (0,
            s.useMemo)( () => {
                v.forEach( (e, t) => v.set(t, !1))
            }
            , [i]),
            s.useEffect( () => {
                i || v.size || !l || l()
            }
            , [i]),
            "popLayout" === u && (t = (0,
            n.jsx)(h, {
                isPresent: i,
                anchorX: f,
                children: t
            })),
            (0,
            n.jsx)(d.t.Provider, {
                value: b,
                children: t
            })
        }
        ;
        function m() {
            return new Map
        }
        var v = r(52678);
        let p = e => e.key || "";
        function x(e) {
            let t = [];
            return s.Children.forEach(e, e => {
                (0,
                s.isValidElement)(e) && t.push(e)
            }
            ),
            t
        }
        let b = e => {
            let {children: t, custom: r, initial: d=!0, onExitComplete: c, presenceAffectsLayout: a=!0, mode: u="sync", propagate: h=!1, anchorX: m="left"} = e
              , [b,P] = (0,
            v.xQ)(h)
              , g = (0,
            s.useMemo)( () => x(t), [t])
              , j = h && !b ? [] : g.map(p)
              , w = (0,
            s.useRef)(!0)
              , y = (0,
            s.useRef)(g)
              , L = (0,
            o.M)( () => new Map)
              , [H,C] = (0,
            s.useState)(g)
              , [E,M] = (0,
            s.useState)(g);
            (0,
            l.E)( () => {
                w.current = !1,
                y.current = g;
                for (let e = 0; e < E.length; e++) {
                    let t = p(E[e]);
                    j.includes(t) ? L.delete(t) : !0 !== L.get(t) && L.set(t, !1)
                }
            }
            , [E, j.length, j.join("-")]);
            let R = [];
            if (g !== H) {
                let e = [...g];
                for (let t = 0; t < E.length; t++) {
                    let r = E[t]
                      , n = p(r);
                    j.includes(n) || (e.splice(t, 0, r),
                    R.push(r))
                }
                return "wait" === u && R.length && (e = R),
                M(x(e)),
                C(g),
                null
            }
            let {forceRender: k} = (0,
            s.useContext)(i.L);
            return (0,
            n.jsx)(n.Fragment, {
                children: E.map(e => {
                    let t = p(e)
                      , s = (!h || !!b) && (g === E || j.includes(t));
                    return (0,
                    n.jsx)(f, {
                        isPresent: s,
                        initial: (!w.current || !!d) && void 0,
                        custom: r,
                        presenceAffectsLayout: a,
                        mode: u,
                        onExitComplete: s ? void 0 : () => {
                            if (!L.has(t))
                                return;
                            L.set(t, !0);
                            let e = !0;
                            L.forEach(t => {
                                t || (e = !1)
                            }
                            ),
                            e && (null == k || k(),
                            M(y.current),
                            h && (null == P || P()),
                            c && c())
                        }
                        ,
                        anchorX: m,
                        children: e
                    }, t)
                }
                )
            })
        }
    }
    ,
    84152: (e, t, r) => {
        "use strict";
        r.d(t, {
            Q: () => n
        });
        let n = (0,
        r(96756).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="currentColor"/>')
    }
}]);
