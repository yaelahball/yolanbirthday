(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [235], {
        2852: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 4168))
        },
        4168: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => c
            });
            var l = s(5155),
                r = s(9137),
                a = s.n(r),
                i = s(2115),
                o = s(6874),
                n = s.n(o);

            function c() {
                let [e, t] = (0, i.useState)(-1), [s, r] = (0, i.useState)(0), [o, d] = (0, i.useState)(!1), [c, b] = (0, i.useState)(!1), f = (0, i.useRef)(null), m = (0, i.useRef)(null), g = [{
                    type: "image",
                    src: "/img/gallery/foto4.jpg",
                    alt: "#1",
                    caption: "ini best foto si"
                }, {
                    type: "image",
                    src: "/img/gallery/foto3.jpg",
                    alt: "#2",
                    caption: "si pelukis 📸"
                }, {
                    type: "image",
                    src: "/img/gallery/foto2.jpg",
                    alt: "#3",
                    caption: "ini lucu jugaa😁"
                }, {
                    type: "image",
                    src: "/img/gallery/foto1.jpg", 
                    alt: "#4",
                    caption: "lucu tp kehalang kusen jendela😭"
                }], u = () => {
                    t(-1), r(0), d(!0), setTimeout(() => {
                        h(0)
                    }, 1e3)
                }, h = e => {
                    if (e >= g.length) return void d(!1);
                    t(e), r(0);
                    let s = null,
                        l = t => {
                            s || (s = t);
                            let a = t - s;
                            if (a < 2500) r(Math.min(100, a / 2500 * 100)), f.current && (f.current.scrollTop = f.current.scrollHeight), m.current = requestAnimationFrame(l);
                            else {
                                if (r(100), e === g.length - 1) return void setTimeout(() => {
                                    d(!1)
                                }, 1e3);
                                setTimeout(() => {
                                    h(e + 1)
                                }, 1e3)
                            }
                        };
                    m.current = requestAnimationFrame(l)
                };
                return (0, i.useEffect)(() => () => {
                    m.current && cancelAnimationFrame(m.current)
                }, []), (0, l.jsxs)("div", {
                    className: "jsx-11f3f05e8ee346b4 min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-4 relative",
                    children: [(0, l.jsxs)("div", {
                        className: "jsx-11f3f05e8ee346b4 max-w-md mx-auto bg-gray-800 border-4 border-yellow-300 rounded-xl overflow-hidden shadow-2xl p-6 relative",
                        children: [(0, l.jsxs)("div", {
                            className: "jsx-11f3f05e8ee346b4 retro-screen bg-black rounded-lg p-4 mb-6",
                            children: [(0, l.jsx)("h1", {
                                className: "jsx-11f3f05e8ee346b4 text-2xl font-bold text-center text-green-400 mb-2 retro-text",
                                children: "Gallery"
                            }), (0, l.jsxs)("div", {
                                className: "jsx-11f3f05e8ee346b4 relative w-full h-12 bg-gray-700 rounded-t-lg flex items-center justify-between px-4 mb-2",
                                children: [(0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 " + "w-3 h-3 rounded-full ".concat(o ? "bg-red-500 animate-pulse" : "bg-red-800")
                                }), (0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 font-bold text-yellow-300 text-xs tracking-widest",
                                    children: "HEYTML PHOTOBOX"
                                }), (0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 " + "w-3 h-3 rounded-full ".concat(!o && e >= 0 ? "bg-green-500" : "bg-green-800")
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "jsx-11f3f05e8ee346b4 relative w-full h-10 bg-gray-600 mb-2 overflow-hidden flex justify-center items-center",
                                children: [(0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 w-4/5 h-2 bg-black"
                                }), o && (0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 absolute top-full left-1/2 transform -translate-x-1/2 w-4/5 h-3 bg-white animate-pulse"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "jsx-11f3f05e8ee346b4 bg-gray-800 rounded-lg p-2 border-2 border-gray-700 min-h-[400px] flex flex-col items-center justify-start relative",
                                children: [-1 === e && !o && (0, l.jsxs)("div", {
                                    className: "jsx-11f3f05e8ee346b4 absolute inset-0 bg-gray-900 rounded flex flex-col items-center justify-center",
                                    children: [(0, l.jsx)("p", {
                                        className: "jsx-11f3f05e8ee346b4 text-gray-500 text-sm mb-6",
                                        children: "Photobox siap digunakan"
                                    }), (0, l.jsx)("button", {
                                        onClick: u,
                                        className: "jsx-11f3f05e8ee346b4 bg-red-500 hover:bg-red-600 text-white text-xs py-2 px-4 rounded-lg retro-text transition-colors animate-pulse",
                                        children: "MULAI CETAK"
                                    })]
                                }), -1 === e && o && (0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 absolute inset-0 bg-gray-900 rounded flex items-center justify-center",
                                    children: (0, l.jsx)("p", {
                                        className: "jsx-11f3f05e8ee346b4 text-gray-500 text-sm animate-pulse",
                                        children: "Mempersiapkan photobox..."
                                    })
                                }), (0, l.jsx)("div", {
                                    ref: f,
                                    style: {
                                        display: e >= 0 ? "block" : "none"
                                    },
                                    className: "jsx-11f3f05e8ee346b4 w-full h-full overflow-y-auto hide-scrollbar",
                                    children: (0, l.jsxs)("div", {
                                        className: "jsx-11f3f05e8ee346b4 flex flex-col items-center py-4 space-y-4",
                                        children: [Array.from({
                                            length: e
                                        }).map((e, t) => (0, l.jsx)("div", {
                                            className: "jsx-11f3f05e8ee346b4 w-4/5",
                                            children: (0, l.jsx)(x, {
                                                photo: g[t],
                                                index: t
                                            })
                                        }, t)), e >= 0 && e < g.length && (0, l.jsxs)("div", {
                                            className: "jsx-11f3f05e8ee346b4 w-4/5 relative overflow-hidden",
                                            children: [(0, l.jsx)("div", {
                                                style: {
                                                    clipPath: "inset(0 0 ".concat(100 - s, "% 0)")
                                                },
                                                className: "jsx-11f3f05e8ee346b4 relative",
                                                children: (0, l.jsx)(x, {
                                                    photo: g[e],
                                                    index: e,
                                                    isActive: !0,
                                                    onClick: () => {}
                                                })
                                            }), s < 100 && (0, l.jsx)("div", {
                                                style: {
                                                    top: "".concat(s, "%"),
                                                    transform: "translateY(-50%)",
                                                    boxShadow: "0 0 10px rgba(255,0,0,0.7)"
                                                },
                                                className: "jsx-11f3f05e8ee346b4 absolute w-full h-3 bg-red-500 opacity-50"
                                            })]
                                        }), o && e >= 0 && (0, l.jsx)("div", {
                                            className: "jsx-11f3f05e8ee346b4 w-4/5 text-center mt-2",
                                            children: (0, l.jsxs)("p", {
                                                className: "jsx-11f3f05e8ee346b4 text-yellow-300 text-xs animate-pulse",
                                                children: ["Mencetak foto ", e + 1, " dari ", g.length, "... (", Math.round(s), "%)"]
                                            })
                                        }), e === g.length - 1 && 100 === s && !o && (0, l.jsx)("div", {
                                            className: "jsx-11f3f05e8ee346b4 w-4/5",
                                            children: (0, l.jsx)("button", {
                                                onClick: () => {
                                                    b(!1), t(-1), r(0), d(!1), m.current && cancelAnimationFrame(m.current), setTimeout(u, 800)
                                                },
                                                className: "jsx-11f3f05e8ee346b4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 w-full rounded-lg retro-text transition-colors",
                                                children: "CETAK ULANG"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "jsx-11f3f05e8ee346b4 relative w-full h-12 bg-gray-700 rounded-b-lg flex items-center justify-center gap-4 mt-2",
                                children: [(0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 w-12 h-5 rounded-full bg-gray-800"
                                }), (0, l.jsx)("div", {
                                    className: "jsx-11f3f05e8ee346b4 w-12 h-5 rounded-full bg-gray-800"
                                })]
                            })]
                        }), (0, l.jsx)(n(), {
                            href: "/music",
                            className: "block w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-green-600 transition-colors retro-button mb-4",
                            children: "SELANJUTNYA"
                        }), (0, l.jsx)(n(), {
                            href: "/",
                            className: "block w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-red-600 transition-colors retro-button",
                            children: "KEMBALI"
                        })]
                    }), (0, l.jsx)(a(), {
                        id: "11f3f05e8ee346b4",
                        children: ".hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbar::-webkit-scrollbar{display:none}.border-l-12{border-left-width:12px}@-webkit-keyframes print-glow{0%,100%{opacity:.5;-webkit-box-shadow:0 0 5px rgba(255,0,0,.5);box-shadow:0 0 5px rgba(255,0,0,.5)}50%{opacity:.8;-webkit-box-shadow:0 0 15px rgba(255,0,0,.8);box-shadow:0 0 15px rgba(255,0,0,.8)}}@-moz-keyframes print-glow{0%,100%{opacity:.5;-moz-box-shadow:0 0 5px rgba(255,0,0,.5);box-shadow:0 0 5px rgba(255,0,0,.5)}50%{opacity:.8;-moz-box-shadow:0 0 15px rgba(255,0,0,.8);box-shadow:0 0 15px rgba(255,0,0,.8)}}@-o-keyframes print-glow{0%,100%{opacity:.5;box-shadow:0 0 5px rgba(255,0,0,.5)}50%{opacity:.8;box-shadow:0 0 15px rgba(255,0,0,.8)}}@keyframes print-glow{0%,100%{opacity:.5;-webkit-box-shadow:0 0 5px rgba(255,0,0,.5);-moz-box-shadow:0 0 5px rgba(255,0,0,.5);box-shadow:0 0 5px rgba(255,0,0,.5)}50%{opacity:.8;-webkit-box-shadow:0 0 15px rgba(255,0,0,.8);-moz-box-shadow:0 0 15px rgba(255,0,0,.8);box-shadow:0 0 15px rgba(255,0,0,.8)}}.print-indicator{-webkit-animation:print-glow.8s ease-in-out infinite;-moz-animation:print-glow.8s ease-in-out infinite;-o-animation:print-glow.8s ease-in-out infinite;animation:print-glow.8s ease-in-out infinite}"
                    })]
                })
            }

            function x(e) {
                let {
                    photo: t,
                    index: s,
                    isActive: r = !1,
                    onClick: a
                } = e;
                return t ? (0, l.jsxs)("div", {
                    className: "bg-white p-3 rounded-md shadow-lg relative ".concat(r ? "ring-2 ring-green-400" : ""),
                    children: [(0, l.jsxs)("div", {
                        className: "relative bg-black w-full h-52 mb-2 overflow-hidden",
                        onClick: a,
                        style: {
                            cursor: "default"
                        },
                        children: ["image" === t.type ? (0, l.jsx)("div", {
                            className: "relative w-full h-full flex items-center justify-center",
                            children: (0, l.jsx)("img", {
                                src: t.src,
                                alt: t.alt,
                                style: {
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: "auto",
                                    height: "auto",
                                    objectFit: "contain"
                                }
                            })
                        }) : null, (0, l.jsx)("div", {
                            className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-1 px-2",
                            children: (0, l.jsx)("p", {
                                className: "text-yellow-300 text-xs text-center retro-text",
                                children: t.alt
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [(0, l.jsx)("div", {
                            className: "w-2 h-2 rounded-full bg-black"
                        }), (0, l.jsx)("div", {
                            className: "px-3 py-0.5 bg-yellow-400 text-xs text-black font-bold rounded",
                            children: t.caption || ""
                        }), (0, l.jsx)("div", {
                            className: "w-2 h-2 rounded-full bg-black"
                        })]
                    })]
                }) : null
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [874, 741, 441, 684, 358], () => t(2852)), _N_E = e.O()
    }
]);