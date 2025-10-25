(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [466], {
        2970: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 5047))
        },
        5047: (e, s, a) => {
            "use strict";
            a.r(s), a.d(s, {
                default: () => m
            });
            var t = a(5155),
                c = a(9137),
                r = a.n(c),
                d = a(2115),
                l = a(6874),
                n = a.n(l);
            let o = [{
                id: 1,
                title: "Best Part",
                artist: "Daniel Caesar ft. H.E.R",
                duration: "3:29",
                file: "/music/lagu1.mp3",
                cover: "/img/music/fotocover1.jpg"
            }, {
                id: 2,
                title: "I Like Me Better",
                artist: "Lauv",
                duration: "3:17",
                file: "/music/lagu2.mp3",
                cover: "/img/music/fotocover2.jpg"
            }, {
                id: 3,
                title: "Perfect",
                artist: "Ed Sheeran",
                duration: "4:23",
                file: "/music/lagu3.mp3",
                cover: "/img/music/fotocover3.jpg"
            }, {
                id: 4,
                title: "Cometrhu",
                artist: "Jeremy Zucker",
                duration: "3:01",
                file: "/music/lagu4.mp3",
                cover: "/img/music/fotocover4.jpg"
            }, {
                id: 5,
                title: "Levitating",
                artist: "Dua Lipa",
                duration: "3:23",
                file: "/music/lagu5.mp3",
                cover: "/img/music/fotocover5.jpg"
            }];

            function m() {
                let [e, s] = (0, d.useState)(0), [a, c] = (0, d.useState)(!1), [l, m] = (0, d.useState)(0), [x, u] = (0, d.useState)(0), [h, j] = (0, d.useState)(0), [b, g] = (0, d.useState)(.7), [f, p] = (0, d.useState)(!1), v = (0, d.useRef)(null), N = (0, d.useRef)(null), y = o[e];
                (0, d.useEffect)(() => {
                    m(0), j(0), a && v.current.play()
                }, [e, a]), (0, d.useEffect)(() => {
                    let e = v.current;
                    if (!e) return;
                    let s = () => {
                            e.duration && (m(e.currentTime / e.duration * 100), j(e.currentTime))
                        },
                        a = () => {
                            u(e.duration)
                        };
                    return e.addEventListener("timeupdate", s), e.addEventListener("loadedmetadata", a), e.volume = b, () => {
                        e.removeEventListener("timeupdate", s), e.removeEventListener("loadedmetadata", a)
                    }
                }, [b]);
                let w = () => {
                        s(e => e === o.length - 1 ? 0 : e + 1)
                    },
                    k = e => {
                        if (isNaN(e)) return "0:00";
                        let s = Math.floor(e / 60),
                            a = Math.floor(e % 60);
                        return "".concat(s, ":").concat(a.toString().padStart(2, "0"))
                    };
                return (0, t.jsxs)("div", {
                    className: "jsx-7d2c24c17962cada min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-2 sm:p-4 flex items-center justify-center",
                    children: [(0, t.jsxs)("div", {
                        className: "jsx-7d2c24c17962cada w-full max-w-[320px] sm:max-w-md mx-auto bg-gray-900 border-4 border-yellow-300 rounded-xl overflow-hidden shadow-2xl p-3 sm:p-6",
                        children: [(0, t.jsxs)("div", {
                            className: "jsx-7d2c24c17962cada retro-screen bg-black rounded-lg p-2 sm:p-4 mb-3 sm:mb-6",
                            children: [(0, t.jsx)("h1", {
                                className: "jsx-7d2c24c17962cada text-xl sm:text-2xl font-bold text-center text-green-400 mb-2 sm:mb-4 retro-text",
                                children: "Music Player"
                            }), (0, t.jsxs)("div", {
                                className: "jsx-7d2c24c17962cada bg-gray-800 rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border-2 border-gray-700",
                                children: [(0, t.jsxs)("div", {
                                    className: "jsx-7d2c24c17962cada relative w-full h-32 sm:h-40 mb-2 sm:mb-4 border-2 border-gray-600 overflow-hidden",
                                    children: [(0, t.jsx)("div", {
                                        className: "jsx-7d2c24c17962cada absolute inset-0 bg-gray-900 flex items-center justify-center",
                                        children: (0, t.jsx)("p", {
                                            className: "jsx-7d2c24c17962cada text-gray-500 text-center text-xs sm:text-sm",
                                            children: "Cover Art"
                                        })
                                    }), (0, t.jsx)("img", {
                                        src: y.cover,
                                        alt: "".concat(y.title, " cover"),
                                        className: "jsx-7d2c24c17962cada absolute inset-0 w-full h-full object-cover"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "jsx-7d2c24c17962cada mb-2 sm:mb-4",
                                    children: [(0, t.jsx)("p", {
                                        className: "jsx-7d2c24c17962cada text-center text-green-400 font-bold retro-text truncate text-sm sm:text-base",
                                        children: y.title
                                    }), (0, t.jsx)("p", {
                                        className: "jsx-7d2c24c17962cada text-center text-yellow-300 text-xs sm:text-sm retro-text truncate",
                                        children: y.artist
                                    })]
                                }), (0, t.jsx)("div", {
                                    ref: N,
                                    onClick: e => {
                                        let s = N.current,
                                            a = (e.clientX - s.getBoundingClientRect().left) / s.offsetWidth,
                                            t = a * v.current.duration;
                                        v.current.currentTime = t, m(100 * a)
                                    },
                                    className: "jsx-7d2c24c17962cada h-1.5 sm:h-2 bg-gray-700 rounded-full cursor-pointer mb-1 sm:mb-2 relative",
                                    children: (0, t.jsx)("div", {
                                        style: {
                                            width: "".concat(l, "%")
                                        },
                                        className: "jsx-7d2c24c17962cada h-full bg-green-500 rounded-full relative",
                                        children: (0, t.jsx)("div", {
                                            className: "jsx-7d2c24c17962cada absolute right-0 top-1/2 -translate-y-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-300 rounded-full"
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "jsx-7d2c24c17962cada flex justify-between text-[10px] sm:text-xs text-gray-400",
                                    children: [(0, t.jsx)("span", {
                                        className: "jsx-7d2c24c17962cada",
                                        children: k(h)
                                    }), (0, t.jsx)("span", {
                                        className: "jsx-7d2c24c17962cada",
                                        children: k(x)
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "jsx-7d2c24c17962cada relative w-full h-16 sm:h-20 bg-gray-800 rounded-lg p-2 mb-2 sm:mb-4 border-2 border-gray-700 overflow-hidden",
                                children: (0, t.jsxs)("div", {
                                    className: "jsx-7d2c24c17962cada absolute inset-0 flex items-center justify-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "jsx-7d2c24c17962cada w-12 sm:w-16 h-12 sm:h-16 border-4 border-gray-600 rounded-full relative",
                                        children: (0, t.jsxs)("div", {
                                            style: {
                                                animationDuration: "4s"
                                            },
                                            className: "jsx-7d2c24c17962cada " + "w-full h-full flex items-center justify-center ".concat(a ? "animate-spin" : ""),
                                            children: [(0, t.jsx)("div", {
                                                className: "jsx-7d2c24c17962cada w-4 sm:w-6 h-4 sm:h-6 bg-gray-500 rounded-full"
                                            }), (0, t.jsx)("div", {
                                                className: "jsx-7d2c24c17962cada absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-600"
                                            })]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "jsx-7d2c24c17962cada absolute left-4 sm:left-6 w-8 sm:w-12 h-8 sm:h-12 border-4 border-gray-600 rounded-full",
                                        children: (0, t.jsx)("div", {
                                            style: {
                                                animationDuration: "4s"
                                            },
                                            className: "jsx-7d2c24c17962cada " + "w-full h-full ".concat(a ? "animate-spin" : ""),
                                            children: (0, t.jsx)("div", {
                                                className: "jsx-7d2c24c17962cada w-full h-0.5 bg-gray-600 absolute top-1/2"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "jsx-7d2c24c17962cada absolute right-4 sm:right-6 w-8 sm:w-12 h-8 sm:h-12 border-4 border-gray-600 rounded-full",
                                        children: (0, t.jsx)("div", {
                                            style: {
                                                animationDuration: "4s"
                                            },
                                            className: "jsx-7d2c24c17962cada " + "w-full h-full ".concat(a ? "animate-spin" : ""),
                                            children: (0, t.jsx)("div", {
                                                className: "jsx-7d2c24c17962cada w-full h-0.5 bg-gray-600 absolute top-1/2"
                                            })
                                        })
                                    })]
                                })
                            }), (0, t.jsxs)("div", {
                                className: "jsx-7d2c24c17962cada grid grid-cols-5 gap-1 sm:gap-2 mb-2 sm:mb-4",
                                children: [(0, t.jsx)("button", {
                                    onClick: () => {
                                        s(e => 0 === e ? o.length - 1 : e - 1)
                                    },
                                    className: "jsx-7d2c24c17962cada bg-blue-500 h-8 sm:h-10 rounded-lg text-white flex items-center justify-center",
                                    children: (0, t.jsx)("span", {
                                        className: "jsx-7d2c24c17962cada text-base sm:text-lg",
                                        children: "⏮"
                                    })
                                }), (0, t.jsx)("button", {
                                    onClick: () => {
                                        a ? v.current.pause() : v.current.play(), c(!a)
                                    },
                                    className: "jsx-7d2c24c17962cada bg-blue-500 h-8 sm:h-10 rounded-lg text-white col-span-3 flex items-center justify-center",
                                    children: (0, t.jsx)("span", {
                                        className: "jsx-7d2c24c17962cada text-base sm:text-lg",
                                        children: a ? "⏸" : "▶️"
                                    })
                                }), (0, t.jsx)("button", {
                                    onClick: w,
                                    className: "jsx-7d2c24c17962cada bg-blue-500 h-8 sm:h-10 rounded-lg text-white flex items-center justify-center",
                                    children: (0, t.jsx)("span", {
                                        className: "jsx-7d2c24c17962cada text-base sm:text-lg",
                                        children: "⏭"
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "jsx-7d2c24c17962cada flex items-center mb-2",
                                children: [(0, t.jsx)("button", {
                                    onClick: () => {
                                        p(!f)
                                    },
                                    className: "jsx-7d2c24c17962cada bg-gray-700 text-white p-1 sm:p-2 rounded-lg mr-2",
                                    children: (0, t.jsx)("span", {
                                        className: "jsx-7d2c24c17962cada text-xs sm:text-sm",
                                        children: "\uD83D\uDD0A"
                                    })
                                }), f && (0, t.jsx)("div", {
                                    className: "jsx-7d2c24c17962cada flex-1 bg-gray-700 rounded-lg h-6 flex items-center px-2",
                                    children: (0, t.jsx)("input", {
                                        type: "range",
                                        min: "0",
                                        max: "100",
                                        value: 100 * b,
                                        onChange: e => {
                                            let s = e.target.value / 100;
                                            g(s), v.current.volume = s
                                        },
                                        className: "jsx-7d2c24c17962cada w-full h-1 bg-gray-600 rounded-lg appearance-none focus:outline-none volume-slider"
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "jsx-7d2c24c17962cada h-40 bg-gray-800 p-2 border-2 border-gray-700 rounded-lg overflow-y-auto mb-4",
                                children: [(0, t.jsx)("h2", {
                                    className: "jsx-7d2c24c17962cada text-yellow-300 font-bold mb-2 retro-text",
                                    children: "PLAYLIST:"
                                }), o.map((a, r) => (0, t.jsxs)("div", {
                                    onClick: () => {
                                        s(r), c(!0)
                                    },
                                    className: "jsx-7d2c24c17962cada " + "flex justify-between items-center p-1 text-xs rounded ".concat(e === r ? "bg-gray-700" : ""),
                                    children: [(0, t.jsxs)("div", {
                                        className: "jsx-7d2c24c17962cada flex",
                                        children: [(0, t.jsxs)("span", {
                                            className: "jsx-7d2c24c17962cada text-gray-400 mr-2",
                                            children: [r + 1, "."]
                                        }), (0, t.jsx)("span", {
                                            className: "jsx-7d2c24c17962cada " + "".concat(e === r ? "text-green-400" : "text-gray-300"),
                                            children: a.title
                                        })]
                                    }), (0, t.jsx)("span", {
                                        className: "jsx-7d2c24c17962cada text-gray-500",
                                        children: a.duration
                                    })]
                                }, a.id))]
                            })]
                        }), (0, t.jsx)(n(), {
                            href: "/tetris",
                            className: "block w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-green-600 transition-colors retro-button mb-4",
                            children: "SELANJUTNYA"
                        }), (0, t.jsx)(n(), {
                            href: "/",
                            className: "block w-full bg-red-500 text-white font-bold py-2 sm:py-3 px-4 rounded-lg text-center hover:bg-red-600 transition-colors retro-button text-xs sm:text-base",
                            children: "KEMBALI"
                        })]
                    }), (0, t.jsx)("audio", {
                        ref: v,
                        src: y.file,
                        onEnded: w,
                        className: "jsx-7d2c24c17962cada hidden"
                    }), (0, t.jsx)(r(), {
                        id: "7d2c24c17962cada",
                        children: ".volume-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;width:12px;height:12px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#10B981;cursor:pointer}.volume-slider::-moz-range-thumb{width:12px;height:12px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#10B981;cursor:pointer;border:none}"
                    })]
                })
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [874, 741, 441, 684, 358], () => s(2970)), _N_E = e.O()
    }
]);