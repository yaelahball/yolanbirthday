(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [326], {
        1215: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 9445))
        },
        9445: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => x
            });
            var l = s(5155),
                r = s(2115),
                a = s(6874),
                o = s.n(a);
            let n = {
                    I: {
                        shape: [
                            [0, 0, 0, 0],
                            [1, 1, 1, 1],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0]
                        ],
                        color: "bg-cyan-500"
                    },
                    J: {
                        shape: [
                            [1, 0, 0],
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        color: "bg-blue-500"
                    },
                    L: {
                        shape: [
                            [0, 0, 1],
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        color: "bg-orange-500"
                    },
                    O: {
                        shape: [
                            [1, 1],
                            [1, 1]
                        ],
                        color: "bg-yellow-500"
                    },
                    S: {
                        shape: [
                            [0, 1, 1],
                            [1, 1, 0],
                            [0, 0, 0]
                        ],
                        color: "bg-green-500"
                    },
                    T: {
                        shape: [
                            [0, 1, 0],
                            [1, 1, 1],
                            [0, 0, 0]
                        ],
                        color: "bg-purple-500"
                    },
                    Z: {
                        shape: [
                            [1, 1, 0],
                            [0, 1, 1],
                            [0, 0, 0]
                        ],
                        color: "bg-red-500"
                    }
                },
                c = () => Array.from(Array(15), () => Array(10).fill(0)),
                m = () => {
                    let e = Object.keys(n),
                        t = e[Math.floor(Math.random() * e.length)];
                    return {
                        shape: n[t].shape,
                        color: n[t].color,
                        pos: {
                            x: Math.floor(5) - 1,
                            y: 0
                        }
                    }
                };

            function x() {
                let [e, t] = (0, r.useState)(c()), [s, a] = (0, r.useState)(m()), [n, x] = (0, r.useState)(!1), [d, i] = (0, r.useState)(0), [h, p] = (0, r.useState)(!1), [u, b] = (0, r.useState)(1), [f, g] = (0, r.useState)(0), [y, j] = (0, r.useState)(120), [w, v] = (0, r.useState)(c()), [k, N] = (0, r.useState)(!1), [C, E] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = document.createElement("meta");
                    e.name = "viewport", e.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", document.getElementsByTagName("head")[0].appendChild(e);
                    let t = document.createElement("style");
                    return t.innerHTML = "\n      * {\n        touch-action: manipulation;\n      }\n    ", document.head.appendChild(t), () => {
                        document.getElementsByTagName("head")[0].removeChild(e), document.head.removeChild(t)
                    }
                }, []);
                let A = (0, r.useCallback)(() => {
                        let e = [...w.map(e => [...e])];
                        s.shape.forEach((t, l) => {
                            t.forEach((t, r) => {
                                if (0 !== t) {
                                    let t = s.pos.x + r,
                                        a = s.pos.y + l;
                                    a >= 0 && a < 15 && t >= 0 && t < 10 && (e[a][t] = s.color)
                                }
                            })
                        }), t(e)
                    }, [s, w]),
                    M = (0, r.useCallback)(() => {
                        let e = 0,
                            t = w.reduce((t, s) => (s.every(e => 0 !== e) ? (e++, t.unshift(Array(10).fill(0))) : t.push(s), t), []);
                        if (e > 0) {
                            let s = [0, 40, 100, 300, 1200][e] * u;
                            i(e => e + s), g(t => {
                                let s = t + e;
                                if (Math.floor(s / 3) > Math.floor(t / 3)) {
                                    let e = Math.floor(s / 3) + 1;
                                    b(e), j(Math.max(50, 120 - (e - 1) * 10))
                                }
                                return s
                            }), v(t)
                        }
                    }, [w, u]),
                    S = (0, r.useCallback)((e, t) => {
                        for (let s = 0; s < t.length; s++)
                            for (let l = 0; l < t[s].length; l++)
                                if (0 !== t[s][l]) {
                                    let t = e.x + l,
                                        r = e.y + s;
                                    if (r < 0 || r >= 15 || t < 0 || t >= 10 || r >= 0 && 0 !== w[r][t]) return !0
                                } return !1
                    }, [w]),
                    O = (0, r.useCallback)(e => {
                        let t = {
                            ...s.pos,
                            x: s.pos.x + e
                        };
                        S(t, s.shape) || a(e => ({
                            ...e,
                            pos: t
                        }))
                    }, [s, S]),
                    T = (0, r.useCallback)(() => {
                        let e = s.shape[0].map((e, t) => s.shape.map(e => e[t]).reverse()),
                            t = s.pos.x,
                            l = 0;
                        return S(s.pos, e) ? (l = -1, S({
                            ...s.pos,
                            x: t + l
                        }, e)) ? (l = 1, S({
                            ...s.pos,
                            x: t + l
                        }, e)) ? void 0 : void a(s => ({
                            ...s,
                            shape: e,
                            pos: {
                                ...s.pos,
                                x: t + l
                            }
                        })) : void a(s => ({
                            ...s,
                            shape: e,
                            pos: {
                                ...s.pos,
                                x: t + l
                            }
                        })) : void a(t => ({
                            ...t,
                            shape: e
                        }))
                    }, [s, S]),
                    L = (0, r.useCallback)(() => {
                        let e = {
                            ...s.pos,
                            y: s.pos.y + 1
                        };
                        if (S(e, s.shape)) {
                            let e = [...w.map(e => [...e])];
                            s.shape.forEach((t, l) => {
                                t.forEach((t, r) => {
                                    if (0 !== t) {
                                        let t = s.pos.x + r,
                                            a = s.pos.y + l;
                                        a >= 0 && a < 15 && t >= 0 && t < 10 && (e[a][t] = s.color)
                                    }
                                })
                            }), v(e);
                            let t = m();
                            a(t), (e[0].some(e => 0 !== e) || e[1].some(e => 0 !== e)) && S({
                                x: Math.floor(5) - 1,
                                y: 0
                            }, t.shape) && (x(!0), p(!1), N(!0)), M()
                        } else a(t => ({
                            ...t,
                            pos: e
                        }))
                    }, [s, S, w, M]),
                    I = (0, r.useCallback)(() => {
                        let e = s.pos.y;
                        for (; !S({
                                ...s.pos,
                                y: e + 1
                            }, s.shape);) e += 1;
                        a(t => ({
                            ...t,
                            pos: {
                                ...t.pos,
                                y: e
                            }
                        })), L()
                    }, [s, S, L]),
                    _ = (0, r.useCallback)(e => {
                        h && !n && (37 === e.keyCode ? O(-1) : 39 === e.keyCode ? O(1) : 40 === e.keyCode ? L() : 38 === e.keyCode ? T() : 32 === e.keyCode && I())
                    }, [h, n, O, L, T, I]);
                return (0, r.useEffect)(() => {
                    let e = null;
                    return h && !n && (A(), e = setInterval(() => {
                        L()
                    }, y)), () => {
                        e && clearInterval(e)
                    }
                }, [h, n, A, L, y]), (0, r.useCallback)(e => {
                    !n && h && ("left" === e ? O(-1) : "right" === e ? O(1) : "rotate" === e ? T() : "drop" === e && L())
                }, [n, h, O, T, L]), (0, r.useEffect)(() => (document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _)), [_]), (0, l.jsxs)("div", {
                    className: "min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-4 flex items-center justify-center",
                    children: [(0, l.jsxs)("div", {
                        className: "w-full max-w-[320px] sm:max-w-md mx-auto bg-gray-900 border-4 border-yellow-300 rounded-xl overflow-hidden shadow-2xl p-3 sm:p-6",
                        children: [(0, l.jsxs)("div", {
                            className: "retro-screen bg-black rounded-lg p-2 sm:p-4 mb-3 sm:mb-6",
                            children: [(0, l.jsx)("h1", {
                                className: "text-xl sm:text-2xl font-bold text-center text-green-400 mb-1 sm:mb-2 retro-text",
                                children: "Tetris"
                            }), (0, l.jsxs)("div", {
                                className: "flex justify-between mb-1 sm:mb-2",
                                children: [(0, l.jsxs)("div", {
                                    className: "text-yellow-300 retro-text text-xs sm:text-sm",
                                    children: ["Score: ", d]
                                }), (0, l.jsxs)("div", {
                                    className: "text-yellow-300 retro-text text-xs sm:text-sm",
                                    children: ["Level: ", u]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex justify-between mb-2 sm:mb-4",
                                children: [(0, l.jsxs)("div", {
                                    className: "text-yellow-300 retro-text text-xs sm:text-sm",
                                    children: ["Lines: ", f]
                                }), n && !k && !C && (0, l.jsx)("div", {
                                    className: "text-red-500 retro-text text-xs sm:text-sm",
                                    children: "GAME OVER"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "grid grid-cols-10 gap-0.5 bg-gray-800 p-1 border-2 border-gray-700 mb-3 sm:mb-4 mx-auto",
                                style: {
                                    maxWidth: "280px"
                                },
                                children: e.map((e, t) => e.map((e, s) => (0, l.jsx)("div", {
                                    className: "w-[25px] h-[25px] sm:w-5 sm:h-5 ".concat(e || "bg-gray-900")
                                }, "".concat(t, "-").concat(s))))
                            }), (0, l.jsxs)("div", {
                                className: "grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4",
                                children: [(0, l.jsx)("button", {
                                    onClick: () => !n && h && O(-1),
                                    className: "bg-blue-500 h-8 sm:h-10 rounded-lg text-white retro-text text-xs flex items-center justify-center",
                                    children: "<"
                                }), (0, l.jsx)("button", {
                                    onClick: () => !n && h && T(),
                                    className: "bg-blue-500 h-8 sm:h-10 rounded-lg text-white retro-text text-xs flex items-center justify-center",
                                    children: "ROTATE"
                                }), (0, l.jsx)("button", {
                                    onClick: () => !n && h && O(1),
                                    className: "bg-blue-500 h-8 sm:h-10 rounded-lg text-white retro-text text-xs flex items-center justify-center",
                                    children: ">"
                                })]
                            }), !h && !k && !C && (0, l.jsx)("button", {
                                onClick: () => {
                                    v(c()), t(c()), a(m()), x(!1), N(!1), E(!1), i(0), b(1), g(0), j(120), p(!0)
                                },
                                className: "w-full bg-green-500 py-2 rounded-lg text-white retro-text text-xs sm:text-sm",
                                children: n ? "PLAY AGAIN" : "START GAME"
                            })]
                        }), (0, l.jsx)(o(), {
                            href: "/",
                            className: "block w-full bg-red-500 text-white font-bold py-2 sm:py-3 px-4 rounded-lg text-center hover:bg-red-600 transition-colors retro-button text-xs sm:text-base",
                            children: "KEMBALI"
                        })]
                    }), k && (0, l.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80",
                        children: (0, l.jsxs)("div", {
                            className: "retro-screen bg-black rounded-lg p-4 sm:p-6 max-w-[320px] sm:max-w-md w-full border-4 border-yellow-300 shadow-2xl",
                            children: [(0, l.jsx)("h2", {
                                className: "text-3xl sm:text-5xl font-bold text-center text-red-500 mb-6 sm:mb-10 retro-text animate-pulse tracking-widest",
                                children: "GAME OVER"
                            }), (0, l.jsx)("div", {
                                className: "flex justify-center mt-6 sm:mt-10",
                                children: (0, l.jsx)("button", {
                                    onClick: () => {
                                        N(!1), E(!0)
                                    },
                                    className: "bg-blue-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-white retro-text text-sm hover:bg-blue-600 transition-colors",
                                    children: "CONFIRM"
                                })
                            })]
                        })
                    }), C && (0, l.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80",
                        children: (0, l.jsxs)("div", {
                            className: "retro-screen bg-black rounded-lg p-4 sm:p-6 max-w-[320px] sm:max-w-md w-full border-4 border-yellow-300 shadow-2xl",
                            children: [(0, l.jsx)("h2", {
                                className: "text-xl sm:text-2xl font-bold text-center text-yellow-300 mb-4 sm:mb-6 retro-text",
                                children: "HAHA KALAH"
                            }), (0, l.jsxs)("div", {
                                className: "text-green-400 text-center retro-text mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-sm sm:text-base",
                                children: [(0, l.jsx)("p", {
                                    children: "katanya jago main blockblast"
                                }), (0, l.jsx)("p", {
                                    children: "coba high score disini berapa"
                                }), (0, l.jsx)("p", {
                                    children: "tapii walaupun kalah...."
                                }), (0, l.jsx)("p", {
                                    className: "text-pink-400 text-xl sm:text-2xl mt-6 sm:mt-8",
                                    children: "PROUD OF U!!!"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "flex justify-center mt-4 sm:mt-6",
                                children: (0, l.jsx)("button", {
                                    onClick: () => {
                                        E(!1)
                                    },
                                    className: "bg-blue-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-white retro-text text-sm hover:bg-blue-600 transition-colors",
                                    children: "OK"
                                })
                            })]
                        })
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [874, 441, 684, 358], () => t(1215)), _N_E = e.O()
    }
]);