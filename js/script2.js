function bindEvent(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, d, !1) : a.attachEvent && a.attachEvent("on" + c, d)
}

function selectedState() {
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass("active")
}

function placeHolder() {
    Modernizr.input.placeholder || $("input, select, textarea").each(function() {
        "" === $(this).val() && "" !== $(this).attr("placeholder") && ($(this).val($(this).attr("placeholder")), $(this).focus(function() {
            $(this).val() === $(this).attr("placeholder") && $(this).val("")
        }), $(this).blur(function() {
            "" === $(this).val() && $(this).val($(this).attr("placeholder"))
        }))
    })
}

function contactForm() {
    function a(a, b) {
        $form = $(a);
        var c = "/contact?city=" + $form.attr("id").replace("contact-", "");
        return $.post(c, $form.serialize(), function(a) {
            console.log("email sent"), $form.find('input[type="text"],textarea,input[type="email"]').val(""), window.location = "/thanks/"
        }), b.preventDefault(), !1
    }
    $("#contact-auckland").validate({
        "submitHandler": a
    })
}

function validateMailChimp() {
    $("#mc-embedded-subscribe-form").validate({})
}

function moreNews() {
    var a = $(".news-grid .blog-item").size(),
        b = 6;
    $(".news-grid .blog-item:lt(" + b + ")").addClass("show"), $(".load-more").click(function() {
        b = a >= b + 6 ? b + 6 : a, $(".news-grid .blog-item:lt(" + b + ")").addClass("show"), isMobile === !0 ? ($(".people-grid .person h3").matchHeight({
            "byRow": !1,
            "property": "height",
            "target": null,
            "remove": !1
        }), $(".people-grid .person p").matchHeight({
            "byRow": !1,
            "property": "height",
            "target": null,
            "remove": !1
        })) : ($(".row .blog-item h3").matchHeight({
            "byRow": !0,
            "property": "height",
            "target": null,
            "remove": !1
        }), $(".row .blog-item .excerpt").matchHeight({
            "byRow": !0,
            "property": "height",
            "target": null,
            "remove": !1
        }), $(".people-grid .person h3").matchHeight({
            "byRow": !1,
            "property": "height",
            "target": null,
            "remove": !1
        }), $(".people-grid .person p").matchHeight({
            "byRow": !1,
            "property": "height",
            "target": null,
            "remove": !1
        }))
    })
}

function moreSearch() {
    var a = $(".search-results .post").size(),
        b = 8;
    $(".search-results .post:lt(" + b + ")").addClass("show"), $(".show-more").click(function() {
        b = a >= b + 8 ? b + 8 : a, $(".search-results .post:lt(" + b + ")").addClass("show")
    })
}

function header() {
    var a = $(window),
        b = $(".nav-trigger"),
        c = b.offset().top - 100;
    a.scroll(function() {
        c < a.scrollTop() ? $(".main-header").addClass("shrink") : $(".main-header").removeClass("shrink")
    })
}

function elementFade() {
    $(window).scroll(function() {
        $(".element-fade").each(function(a) {
            var b = $(this).position().top + $(this).outerHeight() - 200,
                c = $(window).scrollTop() + $(window).height();
            c > b && $(this).addClass("visible")
        })
    })
}

function openMenu() {
    $(".drop-down").velocity({
        "height": $(window).outerHeight(!0)
    }, {
        "duration": 450,
        "easing": bezSwing,
        "complete": function() {
            $(".header-wrap").addClass("show")
        }
    }), $(".drop-down").addClass("open"), $(".mobile-logo").addClass("hide"), $(".menu").addClass("down"), $(".main-header").addClass("height")
}

function closeMenu() {
    $(".header-wrap").removeClass("show"), $(".drop-down").velocity({
        "height": "0px",
        "delay": 900
    }, {
        "duration": 450,
        "easing": bezSwing,
        "complete": function() {
            $(".main-header").removeClass("height"), $(".drop-down").removeAttr("style"), $(".drop-down").removeClass("open"), $(".mobile-logo").removeClass("hide")
        }
    }), $(".menu").removeClass("down")
}

function mainMenu() {
    $(document.body).on("click touch", ".menu", function(a) {
        a.preventDefault();
        var b = $(".menu").data("menuState");
        "open" === b ? (closeMenu(), $(".menu").data("menuState", "closed")) : "closed" === b && (openMenu(), $(".menu").data("menuState", "open"))
    })
}

function mobileOnly() {
    isMobile === !0 && $(".main-header .header-wrap h1 a").html("Home")
}

function notMobile() {
    isMobile === !0 ? ($(".people-grid .person h3").matchHeight({
        "byRow": !1,
        "property": "height",
        "target": null,
        "remove": !1
    }), $(".people-grid .person p").matchHeight({
        "byRow": !1,
        "property": "height",
        "target": null,
        "remove": !1
    })) : ($(".row .blog-item h3").matchHeight({
        "byRow": !0,
        "property": "height",
        "target": null,
        "remove": !1
    }), $(".row .blog-item .excerpt").matchHeight({
        "byRow": !0,
        "property": "height",
        "target": null,
        "remove": !1
    }), $(".people-grid .person h3").matchHeight({
        "byRow": !1,
        "property": "height",
        "target": null,
        "remove": !1
    }), $(".people-grid .person p").matchHeight({
        "byRow": !1,
        "property": "height",
        "target": null,
        "remove": !1
    }))
}

function authorStick() {
    $(".stickem-container").stickem({})
}

function homeSlider() {
    var a = $("#carousel").glide({
            "type": "slider",
            "autoplay": !1,
            "navigation": !1,
            "circular": !1,
            "animationDuration": 600,
            "animationTimingFunc": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
            "arrowRightText": "&#xe602;",
            "arrowLeftText": "&#xe601;",
            "afterInit": function() {
                $("#carousel .slides").velocity({
                    "opacity": 1
                }, {
                    "duration": 250,
                    "easing": bezEasing
                }), $(".slider-copy .first").addClass("active")
            },
            "beforeTransition": function() {
                var b = a.current();
                $(".slider-copy .service[data-slide=" + b + "]").removeClass("active")
            },
            "afterTransition": function() {
                var b = a.current();
                $(".slider-copy .service[data-slide=" + b + "]").addClass("active")
            }
        }).data("api_glide"),
        b = $(".slider-copy"),
        c = $("#carousel").outerHeight(!0),
        d = ($(".more"), $(".people-grid .person figure img:first").outerWidth(!0), $(".slider-copy .service.first p").outerHeight(!0)),
        e = $(".slider-copy .service.first h2").outerHeight(!0),
        f = $(".slider-copy .service.first a.link").outerHeight(!0),
        g = d + f + e;
    isMobile === !0 ? ($(".slider-copy").removeAttr("style"), $(window).resize(function() {
        $(".slider-copy").removeAttr("style")
    })) : (b.height(c + "px"), b.css("min-height", g + 12 + "px"), $(window).resize(function() {
        var a = $(".slider-copy .service.first p").outerHeight(!0),
            b = $(".slider-copy .service.first h2").outerHeight(!0),
            c = $(".slider-copy .service.first a.link").outerHeight(!0),
            d = a + c + b,
            e = $("#carousel").outerHeight(!0);
        $(".slider-copy").height(e + "px"), $(".slider-copy").css("min-height", d + "px")
    }))
}

function authorStickInit() {
    $(".single-content").length > 0 ? isMobile === !0 || authorStick() : $(".capital-page").length > 0 && (isMobile === !0 || authorStick())
}

function init() {
    console.log("Website by http://grafik.co.nz @_grafik"), contactForm(), header(), validateMailChimp(), elementFade(), mobileOnly(), moreNews(), authorStickInit(), notMobile(), moreSearch(), placeHolder(), selectedState(), isMobile === !0 || homeSlider()
}

function bindReadyEvents() {
    init()
}

function setupManifest() {
    if ($(".home-intro").length > 0) {
        var a = $("#carousel .slides .slide img")[0].src;
        manifest = [], manifest.push({
            "src": a
        })
    } else if ($(".blog-content").length > 0) {
        var b = $(".blog-content article .wrap .featured figure img")[0].src;
        manifest = [], manifest.push({
            "src": b
        })
    } else if ($(".single-content").length > 0) {
        if ($(".single-content article figure img").length > 0) {
            var c = $(".single-content article figure img")[0].src;
            manifest = [], manifest.push({
                "src": c
            })
        }
    } else if ($(".contact-content").length > 0) {
        var d = $(".contact-content header figure img")[0].src;
        manifest = [], manifest.push({
            "src": d
        })
    } else if ($(".about-landing").length > 0) {
        var e = $(".about-content header figure img")[0].src,
            f = $(".about-content .teaser.capital figure img")[0].src,
            g = $(".about-content .teaser.advisory figure img")[0].src,
            h = $(".about-content .teaser.ventures figure img")[0].src;
        manifest = [], manifest.push({
            "src": e
        }), manifest.push({
            "src": f
        }), manifest.push({
            "src": g
        }), manifest.push({
            "src": h
        })
    } else if ($(".people-content").length > 0) {
        var i = $(".people-content header figure img")[0].src;
        manifest = [], manifest.push({
            "src": i
        })
    } else if ($(".single-content-people").length > 0) {
        var j = $(".people-content header figure img")[0].src;
        manifest = [], manifest.push({
            "src": j
        })
    } else manifest = [], manifest.push({
        "src": "/wp-content/themes/endeavour/r/img/pattern.svg"
    })
}

function loadError(a) {
    console.log("Error!", a.text)
}

function handleFileProgress(a) {
    $(".preloader span").css("width", 100 * preload.progress.toFixed(2) + "%"), $("html").velocity("scroll", {
        "duration": 0
    })
}

function loadComplete(a) {
    var b = $(".blue-bar").outerHeight(!0);
    $(".loader span").velocity({
        "height": b
    }, {
        "duration": 0
    }), $(".preloader span").velocity({
        "opacity": 1
    }, {
        "duration": 300,
        "easing": bezEasing,
        "complete": function() {
            $(".preloader span").velocity({
                "height": b
            }, {
                "duration": 250,
                "easing": bezEasing,
                "complete": function() {
                    $(".preloader").velocity({
                        "opacity": 0
                    }, {
                        "duration": 600,
                        "delay": 650,
                        "easing": bezEasing,
                        "complete": function() {
                            $(".preloader").addClass("gone")
                        }
                    })
                }
            })
        }
    })
}

function startPreload() {
    preload = new createjs.LoadQueue(!0), preload.on("progress", handleFileProgress), preload.on("complete", loadComplete), preload.on("error", loadError), preload.loadManifest(manifest), preload.load()
}! function(a) {
    function b(a) {
        var b = a.length,
            d = c.type(a);
        return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function(a) {
            return null != a && a == a.window
        }, c.type = function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
        }, c.isArray = Array.isArray || function(a) {
            return "array" === c.type(a)
        }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = b(a);
            if (d) {
                if (h)
                    for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = c.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = c.call(a[f], f, a[f]), e === !1) break; return a
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando],
                    g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b]
            } else if (void 0 !== b) {
                var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[f] = d[f] || {}, d[f][b] = e, e
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando],
                f = e && d[e];
            f && c.each(b, function(a, b) {
                delete f[b]
            })
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                if (null != (f = arguments[i]))
                    for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
            return h
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return null != a && (b(Object(a)) ? ! function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];) a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b),
                    f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            "init": function(a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.")
            },
            "offset": function() {
                var b = this[0].getBoundingClientRect();
                return {
                    "top": b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    "left": b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            "position": function() {
                function a() {
                    for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                    return a || document
                }
                var b = this[0],
                    a = a.apply(b),
                    d = this.offset(),
                    e = /^(?:body|html)$/i.test(a.nodeName) ? {
                        "top": 0,
                        "left": 0
                    } : c(a).offset();
                return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                    "top": d.top - e.top,
                    "left": d.left - e.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            "Utilities": c
        }
    }
}(window),
function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) {
            return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
        }

        function g(a) {
            var b = m.data(a, "velocity");
            return null === b ? d : b
        }

        function h(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function i(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }

            function g(a, b) {
                return 3 * b - 6 * a
            }

            function h(a) {
                return 3 * a
            }

            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }

            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }

            function k(b, c) {
                for (var e = 0; p > e; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }

            function l() {
                for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
            }

            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]),
                    h = c + g * u,
                    i = j(h, a, d);
                return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
            }

            function o() {
                y = !0, (a != c || d != e) && l()
            }
            var p = 4,
                q = .001,
                r = 1e-7,
                s = 10,
                t = 11,
                u = 1 / (t - 1),
                v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; 4 > w; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t),
                y = !1,
                z = function(b) {
                    return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                };
            z.getControlPoints = function() {
                return [{
                    "x": a,
                    "y": c
                }, {
                    "x": d,
                    "y": e
                }]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() {
                return A
            }, z
        }

        function j(a, b) {
            var c = a;
            return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
        }

        function k(a) {
            if (a)
                for (var b = (new Date).getTime(), c = 0, e = t.State.calls.length; e > c; c++)
                    if (t.State.calls[c]) {
                        var f = t.State.calls[c],
                            h = f[0],
                            i = f[2],
                            j = f[3];
                        j || (j = t.State.calls[c][3] = b - 16);
                        for (var n = Math.min((b - j) / i.duration, 1), o = 0, q = h.length; q > o; o++) {
                            var r = h[o],
                                s = r.element;
                            if (g(s)) {
                                var u = !1;
                                if (i.display !== d && null !== i.display && "none" !== i.display) {
                                    if ("flex" === i.display) {
                                        var w = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        m.each(w, function(a, b) {
                                            v.setPropertyValue(s, "display", b)
                                        })
                                    }
                                    v.setPropertyValue(s, "display", i.display)
                                }
                                i.visibility && "hidden" !== i.visibility && v.setPropertyValue(s, "visibility", i.visibility);
                                for (var y in r)
                                    if ("element" !== y) {
                                        var z, A = r[y],
                                            B = p.isString(A.easing) ? t.Easings[A.easing] : A.easing;
                                        if (z = 1 === n ? A.endValue : A.startValue + (A.endValue - A.startValue) * B(n), A.currentValue = z, v.Hooks.registered[y]) {
                                            var C = v.Hooks.getRoot(y),
                                                D = g(s).rootPropertyValueCache[C];
                                            D && (A.rootPropertyValue = D)
                                        }
                                        var E = v.setPropertyValue(s, y, A.currentValue + (0 === parseFloat(z) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                        v.Hooks.registered[y] && (g(s).rootPropertyValueCache[C] = v.Normalizations.registered[C] ? v.Normalizations.registered[C]("extract", null, E[1]) : E[1]), "transform" === E[0] && (u = !0)
                                    }
                                i.mobileHA && g(s).transformCache.translate3d === d && (g(s).transformCache.translate3d = "(0px, 0px, 0px)", u = !0), u && v.flushTransformCache(s)
                            }
                        }
                        i.display !== d && "none" !== i.display && (t.State.calls[c][2].display = !1), i.visibility && "hidden" !== i.visibility && (t.State.calls[c][2].visibility = !1), i.progress && i.progress.call(f[1], f[1], n, Math.max(0, j + i.duration - b), j), 1 === n && l(c)
                    }
            t.State.isTicking && x(k)
        }

        function l(a, b) {
            if (!t.State.calls[a]) return !1;
            for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                var l = c[j].element;
                if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                    g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                    var n = !1;
                    m.each(v.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0,
                            e = g(l).transformCache[b];
                        g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                    }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e)
                } catch (o) {
                    setTimeout(function() {
                        throw o
                    }, 1)
                }
                h && f.loop !== !0 && h(e), f.loop !== !0 || b || (m.each(g(l).tweensContainer, function(a, b) {
                    /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360)
                }), t(l, "reverse", {
                    "loop": !0,
                    "delay": f.delay
                })), f.queue !== !1 && m.dequeue(l, f.queue)
            }
            t.State.calls[a] = !1;
            for (var p = 0, q = t.State.calls.length; q > p; p++)
                if (t.State.calls[p] !== !1) {
                    i = !0;
                    break
                }
            i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
        }
        var m, n = function() {
                if (c.documentMode) return c.documentMode;
                for (var a = 7; a > 4; a--) {
                    var b = c.createElement("div");
                    if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                }
                return d
            }(),
            o = function() {
                var a = 0;
                return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                    var c, d = (new Date).getTime();
                    return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                        b(d + c)
                    }, c)
                }
            }(),
            p = {
                "isString": function(a) {
                    return "string" == typeof a
                },
                "isArray": Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                "isFunction": function(a) {
                    return "[object Function]" === Object.prototype.toString.call(a)
                },
                "isNode": function(a) {
                    return a && a.nodeType
                },
                "isNodeList": function(a) {
                    return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                },
                "isWrapped": function(a) {
                    return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
                },
                "isSVG": function(a) {
                    return b.SVGElement && a instanceof SVGElement
                },
                "isEmptyObject": function(a) {
                    var b;
                    for (b in a) return !1;
                    return !0
                }
            },
            q = !1;
        if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400,
            s = "swing",
            t = {
                "State": {
                    "isMobile": /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    "isAndroid": /Android/i.test(navigator.userAgent),
                    "isGingerbread": /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    "isChrome": b.chrome,
                    "isFirefox": /Firefox/i.test(navigator.userAgent),
                    "prefixElement": c.createElement("div"),
                    "prefixMatches": {},
                    "scrollAnchor": null,
                    "scrollPropertyLeft": null,
                    "scrollPropertyTop": null,
                    "isTicking": !1,
                    "calls": []
                },
                "CSS": {},
                "Utilities": m,
                "Sequences": {},
                "Easings": {},
                "Promise": b.Promise,
                "defaults": {
                    "queue": "",
                    "duration": r,
                    "easing": s,
                    "begin": null,
                    "complete": null,
                    "progress": null,
                    "display": d,
                    "loop": !1,
                    "delay": !1,
                    "mobileHA": !0,
                    "_cacheValues": !0
                },
                "init": function(a) {
                    m.data(a, "velocity", {
                        "isSVG": p.isSVG(a),
                        "isAnimating": !1,
                        "computedStyle": null,
                        "tweensContainer": null,
                        "rootPropertyValueCache": {},
                        "transformCache": {}
                    })
                },
                "animate": null,
                "hook": null,
                "mock": !1,
                "version": {
                    "major": 1,
                    "minor": 0,
                    "patch": 0
                },
                "debug": !1
            };
        b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
        var u = function() {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function b(b, c, d) {
                var e = {
                    "x": b.x + d.dx * c,
                    "v": b.v + d.dv * c,
                    "tension": b.tension,
                    "friction": b.friction
                };
                return {
                    "dx": e.v,
                    "dv": a(e)
                }
            }

            function c(c, d) {
                var e = {
                        "dx": c.v,
                        "dv": a(c)
                    },
                    f = b(c, .5 * d, e),
                    g = b(c, .5 * d, f),
                    h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                    j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function d(a, b, e) {
                var f, g, h, i = {
                        "x": -1,
                        "v": 0,
                        "tension": null,
                        "friction": null
                    },
                    j = [0],
                    k = 0,
                    l = 1e-4,
                    m = .016;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        t.Easings = {
            "linear": function(a) {
                return a
            },
            "swing": function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            "spring": function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, m.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(a, b) {
            t.Easings[b[0]] = i.apply(null, b[1])
        });
        var v = t.CSS = {
            "RegEx": {
                "isHex": /^#([A-f\d]{3}){1,2}$/i,
                "valueUnwrap": /^[A-z]+\((.*)\)$/i,
                "wrappedValueAlreadyExtracted": /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                "valueSplit": /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            "Lists": {
                "colors": ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                "transformsBase": ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                "transforms3D": ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            "Hooks": {
                "templates": {
                    "textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
                    "boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    "clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    "backgroundPosition": ["X Y", "0% 0%"],
                    "transformOrigin": ["X Y Z", "50% 50% 0px"],
                    "perspectiveOrigin": ["X Y", "50% 50%"]
                },
                "registered": {},
                "register": function() {
                    for (var a = 0; a < v.Lists.colors.length; a++) v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", "255 255 255 1"];
                    var b, c, d;
                    if (n)
                        for (b in v.Hooks.templates) {
                            c = v.Hooks.templates[b], d = c[0].split(" ");
                            var e = c[1].match(v.RegEx.valueSplit);
                            "Color" === d[0] && (d.push(d.shift()), e.push(e.shift()), v.Hooks.templates[b] = [d.join(" "), e.join(" ")])
                        }
                    for (b in v.Hooks.templates) {
                        c = v.Hooks.templates[b], d = c[0].split(" ");
                        for (var a in d) {
                            var f = b + d[a],
                                g = a;
                            v.Hooks.registered[f] = [b, g]
                        }
                    }
                },
                "getRoot": function(a) {
                    var b = v.Hooks.registered[a];
                    return b ? b[0] : a
                },
                "cleanRootPropertyValue": function(a, b) {
                    return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.Hooks.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                },
                "extractValue": function(a, b) {
                    var c = v.Hooks.registered[a];
                    if (c) {
                        var d = c[0],
                            e = c[1];
                        return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                    }
                    return b
                },
                "injectValue": function(a, b, c) {
                    var d = v.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0],
                            h = d[1];
                        return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            "Normalizations": {
                "registered": {
                    "clip": function(a, b, c) {
                        switch (a) {
                            case "name":
                                return "clip";
                            case "extract":
                                var d;
                                return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case "inject":
                                return "rect(" + c + ")"
                        }
                    },
                    "opacity": function(a, b, c) {
                        if (8 >= n) switch (a) {
                            case "name":
                                return "filter";
                            case "extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case "inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return c;
                            case "inject":
                                return c
                        }
                    }
                },
                "register": function() {
                    9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                    for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
                        var b = v.Lists.transformsBase[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                case "inject":
                                    var f = !1;
                                    switch (b.substr(0, b.length - 1)) {
                                        case "translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case "scal":
                                        case "scale":
                                            t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case "skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case "rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                            }
                        }
                    }();
                    for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
                        var b = v.Lists.colors[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                                case "name":
                                    return b;
                                case "extract":
                                    var f;
                                    if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                    else {
                                        var g, h = {
                                            "black": "rgb(0, 0, 0)",
                                            "blue": "rgb(0, 0, 255)",
                                            "gray": "rgb(128, 128, 128)",
                                            "green": "rgb(0, 128, 0)",
                                            "red": "rgb(255, 0, 0)",
                                            "white": "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                case "inject":
                                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            "Names": {
                "camelCase": function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    })
                },
                "SVGAttribute": function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                },
                "prefixCheck": function(a) {
                    if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                return a.toUpperCase()
                            }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            "Values": {
                "hexToRgb": function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                "isCSSNullValue": function(a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                "getUnitType": function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                "getDisplayType": function(a) {
                    var b = a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : "block"
                },
                "addClass": function(a, b) {
                    a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                },
                "removeClass": function(a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            "getPropertyValue": function(a, c, e, f) {
                function h(a, c) {
                    function e() {
                        j && v.setPropertyValue(a, "display", "none")
                    }
                    var i = 0;
                    if (8 >= n) i = m.css(a, c);
                    else {
                        var j = !1;
                        if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                            if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                return e(), k
                            }
                            if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                return e(), l
                            }
                        }
                        var o;
                        o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), (n || t.State.isFirefox) && "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                    }
                    if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                        var p = h(a, "position");
                        ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                    }
                    return i
                }
                var i;
                if (v.Hooks.registered[c]) {
                    var j = c,
                        k = v.Hooks.getRoot(j);
                    e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                } else if (v.Normalizations.registered[c]) {
                    var l, o;
                    l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                }
                return /^[\d-]/.test(i) || (i = g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? /^(height|width)$/i.test(c) ? a.getBBox()[c] : a.getAttribute(c) : h(a, v.Names.prefixCheck(c)[0])), v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            "setPropertyValue": function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                else {
                    if (v.Hooks.registered[c]) {
                        var i = c,
                            j = v.Hooks.getRoot(c);
                        e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                    }
                    if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                        a.style[h] = d
                    } catch (k) {
                        t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                    t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            "flushTransformCache": function(a) {
                function b(b) {
                    return parseFloat(v.getPropertyValue(a, b))
                }
                var c = "";
                if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                    var d = {
                        "translate": [b("translateX"), b("translateY")],
                        "skewX": [b("skewX")],
                        "skewY": [b("skewY")],
                        "scale": 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                        "rotate": [b("rotateZ"), 0, 0]
                    };
                    m.each(g(a).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                    })
                } else {
                    var e, f;
                    m.each(g(a).transformCache, function(b) {
                        return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                    }), f && (c = "perspective" + f + " " + c)
                }
                v.setPropertyValue(a, "transform", c)
            }
        };
        v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
            var e = d;
            return a = f(a), m.each(a, function(a, f) {
                if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
                else {
                    var h = t.CSS.setPropertyValue(f, b, c);
                    "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var w = function() {
            function a() {
                return i ? C.promise || null : n
            }

            function h() {
                function a(a) {
                    function n(a, b) {
                        var c = d,
                            e = d,
                            f = d;
                        return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? f = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], i.duration), a[2] !== d && (f = a[2]))) : c = a, b || (e = e || i.easing), p.isFunction(c) && (c = c.call(h, z, y)), p.isFunction(f) && (f = f.call(h, z, y)), [c || 0, e, f]
                    }

                    function o(a, b) {
                        var c, d;
                        return d = (b || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                            return c = a, ""
                        }), c || (c = v.Values.getUnitType(a)), [d, c]
                    }

                    function r() {
                        var a = {
                                "myParent": h.parentNode || c.body,
                                "position": v.getPropertyValue(h, "position"),
                                "fontSize": v.getPropertyValue(h, "fontSize")
                            },
                            d = a.position === J.lastPosition && a.myParent === J.lastParent,
                            e = a.fontSize === J.lastFontSize;
                        J.lastParent = a.myParent, J.lastPosition = a.position,
                            J.lastFontSize = a.fontSize;
                        var f = 100,
                            i = {};
                        if (e && d) i.emToPx = J.lastEmToPx, i.percentToPxWidth = J.lastPercentToPxWidth, i.percentToPxHeight = J.lastPercentToPxHeight;
                        else {
                            var j = g(h).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                            t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, "hidden")
                            }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                t.CSS.setPropertyValue(j, b, f + "%")
                            }), t.CSS.setPropertyValue(j, "paddingLeft", f + "em"), i.percentToPxWidth = J.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / f, i.percentToPxHeight = J.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / f, i.emToPx = J.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / f, a.myParent.removeChild(j)
                        }
                        return null === J.remToPx && (J.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === J.vwToPx && (J.vwToPx = parseFloat(b.innerWidth) / 100, J.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = J.remToPx, i.vwToPx = J.vwToPx, i.vhToPx = J.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), h), i
                    }
                    if (i.begin && 0 === z) try {
                        i.begin.call(q, q)
                    } catch (w) {
                        setTimeout(function() {
                            throw w
                        }, 1)
                    }
                    if ("scroll" === D) {
                        var x, A, B, E = /^x$/i.test(i.axis) ? "Left" : "Top",
                            F = parseFloat(i.offset) || 0;
                        i.container ? p.isWrapped(i.container) || p.isNode(i.container) ? (i.container = i.container[0] || i.container, x = i.container["scroll" + E], B = x + m(h).position()[E.toLowerCase()] + F) : i.container = null : (x = t.State.scrollAnchor[t.State["scrollProperty" + E]], A = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], B = m(h).offset()[E.toLowerCase()] + F), l = {
                            "scroll": {
                                "rootPropertyValue": !1,
                                "startValue": x,
                                "currentValue": x,
                                "endValue": B,
                                "unitType": "",
                                "easing": i.easing,
                                "scrollData": {
                                    "container": i.container,
                                    "direction": E,
                                    "alternateValue": A
                                }
                            },
                            "element": h
                        }, t.debug && console.log("tweensContainer (scroll): ", l.scroll, h)
                    } else if ("reverse" === D) {
                        if (!g(h).tweensContainer) return void m.dequeue(h, i.queue);
                        "none" === g(h).opts.display && (g(h).opts.display = "auto"), "hidden" === g(h).opts.visibility && (g(h).opts.visibility = "visible"), g(h).opts.loop = !1, g(h).opts.begin = null, g(h).opts.complete = null, u.easing || delete i.easing, u.duration || delete i.duration, i = m.extend({}, g(h).opts, i);
                        var G = m.extend(!0, {}, g(h).tweensContainer);
                        for (var H in G)
                            if ("element" !== H) {
                                var I = G[H].startValue;
                                G[H].startValue = G[H].currentValue = G[H].endValue, G[H].endValue = I, p.isEmptyObject(u) || (G[H].easing = i.easing), t.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(G[H]), h)
                            }
                        l = G
                    } else if ("start" === D) {
                        var G;
                        g(h).tweensContainer && g(h).isAnimating === !0 && (G = g(h).tweensContainer), m.each(s, function(a, b) {
                            if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(a)) {
                                var c = n(b, !0),
                                    e = c[0],
                                    f = c[1],
                                    g = c[2];
                                if (v.RegEx.isHex.test(e)) {
                                    for (var h = ["Red", "Green", "Blue"], i = v.Values.hexToRgb(e), j = g ? v.Values.hexToRgb(g) : d, k = 0; k < h.length; k++) s[a + h[k]] = [i[k], f, j ? j[k] : j];
                                    delete s[a]
                                }
                            }
                        });
                        for (var L in s) {
                            var M = n(s[L]),
                                N = M[0],
                                O = M[1],
                                P = M[2];
                            L = v.Names.camelCase(L);
                            var Q = v.Hooks.getRoot(L),
                                R = !1;
                            if (g(h).isSVG || v.Names.prefixCheck(Q)[1] !== !1 || v.Normalizations.registered[Q] !== d) {
                                (i.display !== d && null !== i.display && "none" !== i.display || i.visibility && "hidden" !== i.visibility) && /opacity|filter/.test(L) && !P && 0 !== N && (P = 0), i._cacheValues && G && G[L] ? (P === d && (P = G[L].endValue + G[L].unitType), R = g(h).rootPropertyValueCache[Q]) : v.Hooks.registered[L] ? P === d ? (R = v.getPropertyValue(h, Q), P = v.getPropertyValue(h, L, R)) : R = v.Hooks.templates[Q][1] : P === d && (P = v.getPropertyValue(h, L));
                                var S, T, U, V = !1;
                                if (S = o(L, P), P = S[0], U = S[1], S = o(L, N), N = S[0].replace(/^([+-\/*])=/, function(a, b) {
                                        return V = b, ""
                                    }), T = S[1], P = parseFloat(P) || 0, N = parseFloat(N) || 0, "%" === T && (/^(fontSize|lineHeight)$/.test(L) ? (N /= 100, T = "em") : /^scale/.test(L) ? (N /= 100, T = "") : /(Red|Green|Blue)$/i.test(L) && (N = N / 100 * 255, T = "")), /[\/*]/.test(V)) T = U;
                                else if (U !== T && 0 !== P)
                                    if (0 === N) T = U;
                                    else {
                                        f = f || r();
                                        var W = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
                                        switch (U) {
                                            case "%":
                                                P *= "x" === W ? f.percentToPxWidth : f.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                P *= f[U + "ToPx"]
                                        }
                                        switch (T) {
                                            case "%":
                                                P *= 1 / ("x" === W ? f.percentToPxWidth : f.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                P *= 1 / f[T + "ToPx"]
                                        }
                                    }
                                switch (V) {
                                    case "+":
                                        N = P + N;
                                        break;
                                    case "-":
                                        N = P - N;
                                        break;
                                    case "*":
                                        N = P * N;
                                        break;
                                    case "/":
                                        N = P / N
                                }
                                l[L] = {
                                    "rootPropertyValue": R,
                                    "startValue": P,
                                    "currentValue": P,
                                    "endValue": N,
                                    "unitType": T,
                                    "easing": O
                                }, t.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(l[L]), h)
                            } else t.debug && console.log("Skipping [" + Q + "] due to a lack of browser support.")
                        }
                        l.element = h
                    }
                    l.element && (v.Values.addClass(h, "velocity-animating"), K.push(l), "" === i.queue && (g(h).tweensContainer = l, g(h).opts = i), g(h).isAnimating = !0, z === y - 1 ? (t.State.calls.length > 1e4 && (t.State.calls = e(t.State.calls)), t.State.calls.push([K, q, i, null, C.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : z++)
                }
                var f, h = this,
                    i = m.extend({}, t.defaults, u),
                    l = {};
                if (g(h) === d && t.init(h), parseFloat(i.delay) && i.queue !== !1 && m.queue(h, i.queue, function(a) {
                        t.velocityQueueEntryFlag = !0, g(h).delayTimer = {
                            "setTimeout": setTimeout(a, parseFloat(i.delay)),
                            "next": a
                        }
                    }), t.mock === !0) i.duration = 1;
                else switch (i.duration.toString().toLowerCase()) {
                    case "fast":
                        i.duration = 200;
                        break;
                    case "normal":
                        i.duration = r;
                        break;
                    case "slow":
                        i.duration = 600;
                        break;
                    default:
                        i.duration = parseFloat(i.duration) || 1
                }
                i.easing = j(i.easing, i.duration), i.begin && !p.isFunction(i.begin) && (i.begin = null), i.progress && !p.isFunction(i.progress) && (i.progress = null), i.complete && !p.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = t.CSS.Values.getDisplayType(h))), i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && t.State.isMobile && !t.State.isGingerbread, i.queue === !1 ? i.delay ? setTimeout(a, i.delay) : a() : m.queue(h, i.queue, function(b, c) {
                    return c === !0 ? (C.promise && C.resolver(q), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
                }), "" !== i.queue && "fx" !== i.queue || "inprogress" === m.queue(h)[0] || m.dequeue(h)
            }
            var i, n, o, q, s, u, x = arguments[0] && (m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
            if (p.isWrapped(this) ? (i = !1, o = 0, q = this, n = this) : (i = !0, o = 1, q = x ? arguments[0].elements : arguments[0]), q = f(q)) {
                x ? (s = arguments[0].properties, u = arguments[0].options) : (s = arguments[o], u = arguments[o + 1]);
                var y = q.length,
                    z = 0;
                if ("stop" !== s && !m.isPlainObject(u)) {
                    var A = o + 1;
                    u = {};
                    for (var B = A; B < arguments.length; B++) p.isArray(arguments[B]) || !/fast|normal|slow/i.test(arguments[B].toString()) && !/^\d/.test(arguments[B]) ? p.isString(arguments[B]) || p.isArray(arguments[B]) ? u.easing = arguments[B] : p.isFunction(arguments[B]) && (u.complete = arguments[B]) : u.duration = arguments[B]
                }
                var C = {
                    "promise": null,
                    "resolver": null,
                    "rejecter": null
                };
                i && t.Promise && (C.promise = new t.Promise(function(a, b) {
                    C.resolver = a, C.rejecter = b
                }));
                var D;
                switch (s) {
                    case "scroll":
                        D = "scroll";
                        break;
                    case "reverse":
                        D = "reverse";
                        break;
                    case "stop":
                        m.each(q, function(a, b) {
                            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer)
                        });
                        var E = [];
                        return m.each(t.State.calls, function(a, b) {
                            b && m.each(b[1], function(c, e) {
                                var f = p.isString(u) ? u : "";
                                return u !== d && b[2].queue !== f ? !0 : void m.each(q, function(b, c) {
                                    c === e && (u !== d && (m.each(m.queue(c, f), function(a, b) {
                                        p.isFunction(b) && b(null, !0)
                                    }), m.queue(c, f, [])), g(c) && "" === f && m.each(g(c).tweensContainer, function(a, b) {
                                        b.endValue = b.currentValue
                                    }), E.push(a))
                                })
                            })
                        }), m.each(E, function(a, b) {
                            l(b, !0)
                        }), C.promise && C.resolver(q), a();
                    default:
                        if (!m.isPlainObject(s) || p.isEmptyObject(s)) {
                            if (p.isString(s) && t.Sequences[s]) {
                                var F = m.extend({}, u),
                                    G = F.duration,
                                    H = F.delay || 0;
                                return F.backwards === !0 && (q = q.reverse()), m.each(q, function(a, b) {
                                    parseFloat(F.stagger) ? F.delay = H + parseFloat(F.stagger) * a : p.isFunction(F.stagger) && (F.delay = H + F.stagger.call(b, a, y)), F.drag && (F.duration = parseFloat(G) || (/^(callout|transition)/.test(s) ? 1e3 : r), F.duration = Math.max(F.duration * (F.backwards ? 1 - a / y : (a + 1) / y), .75 * F.duration, 200)), t.Sequences[s].call(b, b, F || {}, a, y, q, C.promise ? C : d)
                                }), a()
                            }
                            var I = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered sequence. Aborting.";
                            return C.promise ? C.rejecter(new Error(I)) : console.log(I), a()
                        }
                        D = "start"
                }
                var J = {
                        "lastParent": null,
                        "lastPosition": null,
                        "lastFontSize": null,
                        "lastPercentToPxWidth": null,
                        "lastPercentToPxHeight": null,
                        "lastEmToPx": null,
                        "remToPx": null,
                        "vwToPx": null,
                        "vhToPx": null
                    },
                    K = [];
                m.each(q, function(a, b) {
                    p.isNode(b) && h.call(b)
                });
                var L, F = m.extend({}, t.defaults, u);
                if (F.loop = parseInt(F.loop), L = 2 * F.loop - 1, F.loop)
                    for (var M = 0; L > M; M++) {
                        var N = {
                            "delay": F.delay
                        };
                        M === L - 1 && (N.display = F.display, N.visibility = F.visibility, N.complete = F.complete), w(q, "reverse", N)
                    }
                return a()
            }
        };
        t = m.extend(w, t), t.animate = w;
        var x = b.requestAnimationFrame || o;
        return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
            c.hidden ? (x = function(a) {
                return setTimeout(function() {
                    a(!0)
                }, 16)
            }, k()) : x = b.requestAnimationFrame || o
        }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
            t.Sequences["slide" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = i.begin,
                    k = i.complete,
                    l = {
                        "height": "",
                        "marginTop": "",
                        "marginBottom": "",
                        "paddingTop": "",
                        "paddingBottom": ""
                    },
                    n = {};
                i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                    j && j.call(g, g), n.overflow = a.style.overflow, a.style.overflow = "hidden";
                    for (var c in l) {
                        n[c] = a.style[c];
                        var d = t.CSS.getPropertyValue(a, c);
                        l[c] = "Down" === b ? [d, 0] : [0, d]
                    }
                }, i.complete = function() {
                    for (var b in n) a.style[b] = n[b];
                    k && k.call(g, g), h && h.resolver(g)
                }, t(a, l, i)
            }
        }), m.each(["In", "Out"], function(a, b) {
            t.Sequences["fade" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c),
                    j = {
                        "opacity": "In" === b ? 1 : 0
                    },
                    k = i.complete;
                i.complete = e !== f - 1 ? i.begin = null : function() {
                    k && k.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
            }
        }), t
    }(window.jQuery || window.Zepto || window, window, document)
}), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = createjs.PreloadJS = createjs.PreloadJS || {};
        a.version = "0.4.1", a.buildDate = "Thu, 12 Dec 2013 23:33:38 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.initialize(a, b, c)
            },
            b = a.prototype;
        b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function(a, b, c) {
            this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = (new Date).getTime()
        }, b.preventDefault = function() {
            this.defaultPrevented = !0
        }, b.stopPropagation = function() {
            this.propagationStopped = !0
        }, b.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, b.remove = function() {
            this.removed = !0
        }, b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable)
        }, b.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {},
            b = a.prototype;
        a.initialize = function(a) {
            a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
        }, b._listeners = null, b._captureListeners = null, b.initialize = function() {}, b.addEventListener = function(a, b, c) {
            var d;
            d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var e = d[a];
            return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
        }, b.on = function(a, b, c, d, e, f) {
            return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
                b.call(c, a, e), d && a.remove()
            }, f)
        }, b.removeEventListener = function(a, b, c) {
            var d = c ? this._captureListeners : this._listeners;
            if (d) {
                var e = d[a];
                if (e)
                    for (var f = 0, g = e.length; g > f; f++)
                        if (e[f] == b) {
                            1 == g ? delete d[a] : e.splice(f, 1);
                            break
                        }
            }
        }, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
            a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
        }, b.dispatchEvent = function(a, b) {
            if ("string" == typeof a) {
                var c = this._listeners;
                if (!c || !c[a]) return !1;
                a = new createjs.Event(a)
            }
            if (a.target = b || this, a.bubbles && this.parent) {
                for (var d = this, e = [d]; d.parent;) e.push(d = d.parent);
                var f, g = e.length;
                for (f = g - 1; f >= 0 && !a.propagationStopped; f--) e[f]._dispatchEvent(a, 1 + (0 == f));
                for (f = 1; g > f && !a.propagationStopped; f++) e[f]._dispatchEvent(a, 3)
            } else this._dispatchEvent(a, 2);
            return a.defaultPrevented
        }, b.hasEventListener = function(a) {
            var b = this._listeners,
                c = this._captureListeners;
            return !!(b && b[a] || c && c[a])
        }, b.willTrigger = function(a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) return !0;
                b = b.parent
            }
            return !1
        }, b.toString = function() {
            return "[EventDispatcher]"
        }, b._dispatchEvent = function(a, b) {
            var c, d = 1 == b ? this._captureListeners : this._listeners;
            if (a && d) {
                var e = d[a.type];
                if (!e || !(c = e.length)) return;
                a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();
                for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
                    var g = e[f];
                    g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1)
                }
            }
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.indexOf = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (b === a[c]) return c;
            return -1
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
            this.init()
        };
        a.prototype = new createjs.EventDispatcher;
        var b = a.prototype,
            c = a;
        c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/, b.loaded = !1, b.canceled = !1, b.progress = 0, b._item = null, b.getItem = function() {
            return this._item
        }, b.init = function() {}, b.load = function() {}, b.close = function() {}, b._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, b._sendProgress = function(a) {
            if (!this._isCanceled()) {
                var b = null;
                "number" == typeof a ? (this.progress = a, b = new createjs.Event("progress"), b.loaded = this.progress, b.total = 1) : (b = a, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), b.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(b)
            }
        }, b._sendComplete = function() {
            this._isCanceled() || this.dispatchEvent("complete")
        }, b._sendError = function(a) {
            !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.Event("error")), this.dispatchEvent(a))
        }, b._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, b._parseURI = function(a) {
            return a ? a.match(c.FILE_PATTERN) : null
        }, b._parsePath = function(a) {
            return a ? a.match(c.PATH_PATTERN) : null
        }, b._formatQueryString = function(a, b) {
            if (null == a) throw new Error("You must specify data.");
            var c = [];
            for (var d in a) c.push(d + "=" + escape(a[d]));
            return b && (c = c.concat(b)), c.join("&")
        }, b.buildPath = function(a, b) {
            if (null == b) return a;
            var c = [],
                d = a.indexOf("?");
            if (-1 != d) {
                var e = a.slice(d + 1);
                c = c.concat(e.split("&"))
            }
            return -1 != d ? a.slice(0, d) + "?" + this._formatQueryString(b, c) : a + "?" + this._formatQueryString(b, c)
        }, b._isCrossDomain = function(a) {
            var b = document.createElement("a");
            b.href = a.src;
            var c = document.createElement("a");
            c.href = location.href;
            var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
            return d
        }, b._isLocal = function(a) {
            var b = document.createElement("a");
            return b.href = a.src, "" == b.hostname && "file:" == b.protocol
        }, b.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b, c) {
                this.init(a, b, c)
            },
            b = a.prototype = new createjs.AbstractLoader,
            c = a;
        c.loadTimeout = 8e3, c.LOAD_TIMEOUT = 0, c.BINARY = "binary", c.CSS = "css", c.IMAGE = "image", c.JAVASCRIPT = "javascript", c.JSON = "json", c.JSONP = "jsonp", c.MANIFEST = "manifest", c.SOUND = "sound", c.SVG = "svg", c.TEXT = "text", c.XML = "xml", c.POST = "POST", c.GET = "GET", b._basePath = null, b._crossOrigin = "", b.useXHR = !0, b.stopOnError = !1, b.maintainScriptOrder = !0, b.next = null, b._typeCallbacks = null, b._extensionCallbacks = null, b._loadStartWasDispatched = !1, b._maxConnections = 1, b._currentlyLoadingScript = null, b._currentLoads = null, b._loadQueue = null, b._loadQueueBackup = null, b._loadItemsById = null, b._loadItemsBySrc = null, b._loadedResults = null, b._loadedRawResults = null, b._numItems = 0, b._numItemsLoaded = 0, b._scriptOrder = null, b._loadedScripts = null, b.init = function(a, b, c) {
            this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = b, this.setUseXHR(a), this._crossOrigin = c === !0 ? "Anonymous" : c === !1 || null == c ? "" : c
        }, b.setUseXHR = function(a) {
            return this.useXHR = 0 != a && null != window.XMLHttpRequest, this.useXHR
        }, b.removeAll = function() {
            this.remove()
        }, b.remove = function(a) {
            var b = null;
            if (!a || a instanceof Array) {
                if (a) b = a;
                else if (arguments.length > 0) return
            } else b = [a];
            var c = !1;
            if (b) {
                for (; b.length;) {
                    var d = b.pop(),
                        e = this.getResult(d);
                    for (f = this._loadQueue.length - 1; f >= 0; f--)
                        if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueue.splice(f, 1)[0].cancel();
                            break
                        }
                    for (f = this._loadQueueBackup.length - 1; f >= 0; f--)
                        if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueueBackup.splice(f, 1)[0].cancel();
                            break
                        }
                    if (e) delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src], this._disposeItem(e);
                    else
                        for (var f = this._currentLoads.length - 1; f >= 0; f--) {
                            var g = this._currentLoads[f].getItem();
                            if (g.id == d || g.src == d) {
                                this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
                                break
                            }
                        }
                }
                c && this._loadNext()
            } else {
                this.close();
                for (var h in this._loadItemsById) this._disposeItem(this._loadItemsById[h]);
                this.init(this.useXHR)
            }
        }, b.reset = function() {
            this.close();
            for (var a in this._loadItemsById) this._disposeItem(this._loadItemsById[a]);
            for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) b.push(this._loadQueueBackup[c].getItem());
            this.loadManifest(b, !1)
        }, c.isBinary = function(a) {
            switch (a) {
                case createjs.LoadQueue.IMAGE:
                case createjs.LoadQueue.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, c.isText = function(a) {
            switch (a) {
                case createjs.LoadQueue.TEXT:
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.HTML:
                case createjs.LoadQueue.CSS:
                case createjs.LoadQueue.SVG:
                case createjs.LoadQueue.JAVASCRIPT:
                    return !0;
                default:
                    return !1
            }
        }, b.installPlugin = function(a) {
            if (null != a && null != a.getPreloadHandlers) {
                var b = a.getPreloadHandlers();
                if (b.scope = a, null != b.types)
                    for (var c = 0, d = b.types.length; d > c; c++) this._typeCallbacks[b.types[c]] = b;
                if (null != b.extensions)
                    for (c = 0, d = b.extensions.length; d > c; c++) this._extensionCallbacks[b.extensions[c]] = b
            }
        }, b.setMaxConnections = function(a) {
            this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, b.loadFile = function(a, b, c) {
            if (null == a) {
                var d = new createjs.Event("error");
                return d.text = "PRELOAD_NO_FILE", void this._sendError(d)
            }
            this._addItem(a, null, c), this.setPaused(b !== !1 ? !1 : !0)
        }, b.loadManifest = function(a, b, d) {
            var e = null,
                f = null;
            if (a instanceof Array) {
                if (0 == a.length) {
                    var g = new createjs.Event("error");
                    return g.text = "PRELOAD_MANIFEST_EMPTY", void this._sendError(g)
                }
                e = a
            } else if ("string" == typeof a) e = [{
                "src": a,
                "type": c.MANIFEST
            }];
            else {
                if ("object" != typeof a) {
                    var g = new createjs.Event("error");
                    return g.text = "PRELOAD_MANIFEST_NULL", void this._sendError(g)
                }
                if (void 0 !== a.src) {
                    if (null == a.type) a.type = c.MANIFEST;
                    else if (a.type != c.MANIFEST) {
                        var g = new createjs.Event("error");
                        g.text = "PRELOAD_MANIFEST_ERROR", this._sendError(g)
                    }
                    e = [a]
                } else void 0 !== a.manifest && (e = a.manifest, f = a.path)
            }
            for (var h = 0, i = e.length; i > h; h++) this._addItem(e[h], f, d);
            this.setPaused(b !== !1 ? !1 : !0)
        }, b.load = function() {
            this.setPaused(!1)
        }, b.getItem = function(a) {
            return this._loadItemsById[a] || this._loadItemsBySrc[a]
        }, b.getResult = function(a, b) {
            var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
            if (null == c) return null;
            var d = c.id;
            return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d]
        }, b.setPaused = function(a) {
            this._paused = a, this._paused || this._loadNext()
        }, b.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1
        }, b._addItem = function(a, b, c) {
            var d = this._createLoadItem(a, b, c);
            if (null != d) {
                var e = this._createLoader(d);
                null != e && (this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), this.maintainScriptOrder && d.type == createjs.LoadQueue.JAVASCRIPT && e instanceof createjs.XHRLoader && (this._scriptOrder.push(d), this._loadedScripts.push(null)))
            }
        }, b._createLoadItem = function(a, b, c) {
            var d = null;
            switch (typeof a) {
                case "string":
                    d = {
                        "src": a
                    };
                    break;
                case "object":
                    d = window.HTMLAudioElement && a instanceof window.HTMLAudioElement ? {
                        "tag": a,
                        "src": d.tag.src,
                        "type": createjs.LoadQueue.SOUND
                    } : a;
                    break;
                default:
                    return null
            }
            var e = this._parseURI(d.src);
            null != e && (d.ext = e[6]), null == d.type && (d.type = this._getTypeByExtension(d.ext));
            var f = "",
                g = c || this._basePath,
                h = d.src;
            if (e && null == e[1] && null == e[3])
                if (b) {
                    f = b;
                    var i = this._parsePath(b);
                    h = b + h, null != g && i && null == i[1] && null == i[2] && (f = g + f)
                } else null != g && (f = g);
            if (d.src = f + d.src, d.path = f, (d.type == createjs.LoadQueue.JSON || d.type == createjs.LoadQueue.MANIFEST) && (d._loadAsJSONP = null != d.callback), d.type == createjs.LoadQueue.JSONP && null == d.callback) throw new Error("callback is required for loading JSONP requests.");
            (void 0 === d.tag || null === d.tag) && (d.tag = this._createTag(d)), (void 0 === d.id || null === d.id || "" === d.id) && (d.id = h);
            var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
            if (j) {
                var k = j.callback.call(j.scope, d.src, d.type, d.id, d.data, f, this);
                if (k === !1) return null;
                k === !0 || (null != k.src && (d.src = k.src), null != k.id && (d.id = k.id), null != k.tag && (d.tag = k.tag), null != k.completeHandler && (d.completeHandler = k.completeHandler), k.type && (d.type = k.type), e = this._parseURI(d.src), null != e && null != e[6] && (d.ext = e[6].toLowerCase()))
            }
            return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, d
        }, b._createLoader = function(a) {
            var b = this.useXHR;
            switch (a.type) {
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                    b = !a._loadAsJSONP;
                    break;
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.TEXT:
                    b = !0;
                    break;
                case createjs.LoadQueue.SOUND:
                case createjs.LoadQueue.JSONP:
                    b = !1;
                    break;
                case null:
                    return null
            }
            return b ? new createjs.XHRLoader(a, this._crossOrigin) : new createjs.TagLoader(a)
        }, b._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
                    var b = this._loadQueue[a];
                    if (this.maintainScriptOrder && b instanceof createjs.TagLoader && b.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
                        if (this._currentlyLoadingScript) continue;
                        this._currentlyLoadingScript = !0
                    }
                    this._loadQueue.splice(a, 1), a--, this._loadItem(b)
                }
            }
        }, b._loadItem = function(a) {
            a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load()
        }, b._handleFileError = function(a) {
            var b = a.target;
            this._numItemsLoaded++, this._updateProgress();
            var c = new createjs.Event("error");
            c.text = "FILE_LOAD_ERROR", c.item = b.getItem(), this._sendError(c), this.stopOnError || (this._removeLoadItem(b), this._loadNext())
        }, b._handleFileComplete = function(a) {
            var b = a.target,
                c = b.getItem();
            if (this._loadedResults[c.id] = b.getResult(), b instanceof createjs.XHRLoader && (this._loadedRawResults[c.id] = b.getResult(!0)), this._removeLoadItem(b), this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT) {
                if (!(b instanceof createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, c)] = c, void this._checkScriptLoadOrder(b);
                this._currentlyLoadingScript = !1
            }
            if (delete c._loadAsJSONP, c.type == createjs.LoadQueue.MANIFEST) {
                var d = b.getResult();
                null != d && void 0 !== d.manifest && this.loadManifest(d, !0)
            }
            this._processFinishedLoad(c, b)
        }, b._processFinishedLoad = function(a, b) {
            this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(a, b), this._loadNext()
        }, b._checkScriptLoadOrder = function() {
            for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
                var c = this._loadedScripts[b];
                if (null === c) break;
                if (c !== !0) {
                    var d = this._loadedResults[c.id];
                    (document.body || document.getElementsByTagName("body")[0]).appendChild(d), this._processFinishedLoad(c), this._loadedScripts[b] = !0
                }
            }
        }, b._removeLoadItem = function(a) {
            for (var b = this._currentLoads.length, c = 0; b > c; c++)
                if (this._currentLoads[c] == a) {
                    this._currentLoads.splice(c, 1);
                    break
                }
        }, b._handleProgress = function(a) {
            var b = a.target;
            this._sendFileProgress(b.getItem(), b.progress), this._updateProgress()
        }, b._updateProgress = function() {
            var a = this._numItemsLoaded / this._numItems,
                b = this._numItems - this._numItemsLoaded;
            if (b > 0) {
                for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) c += this._currentLoads[d].progress;
                a += c / b * (b / this._numItems)
            }
            this._sendProgress(a)
        }, b._disposeItem = function(a) {
            delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src]
        }, b._createTag = function(a) {
            var b = null;
            switch (a.type) {
                case createjs.LoadQueue.IMAGE:
                    return b = document.createElement("img"), "" == this._crossOrigin || this._isLocal(a) || (b.crossOrigin = this._crossOrigin), b;
                case createjs.LoadQueue.SOUND:
                    return b = document.createElement("audio"), b.autoplay = !1, b;
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.JSONP:
                case createjs.LoadQueue.JAVASCRIPT:
                case createjs.LoadQueue.MANIFEST:
                    return b = document.createElement("script"), b.type = "text/javascript", b;
                case createjs.LoadQueue.CSS:
                    return b = document.createElement(this.useXHR ? "style" : "link"), b.rel = "stylesheet", b.type = "text/css", b;
                case createjs.LoadQueue.SVG:
                    return this.useXHR ? b = document.createElement("svg") : (b = document.createElement("object"), b.type = "image/svg+xml"), b
            }
            return null
        }, b._getTypeByExtension = function(a) {
            if (null == a) return createjs.LoadQueue.TEXT;
            switch (a.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.LoadQueue.IMAGE;
                case "ogg":
                case "mp3":
                case "wav":
                    return createjs.LoadQueue.SOUND;
                case "json":
                    return createjs.LoadQueue.JSON;
                case "xml":
                    return createjs.LoadQueue.XML;
                case "css":
                    return createjs.LoadQueue.CSS;
                case "js":
                    return createjs.LoadQueue.JAVASCRIPT;
                case "svg":
                    return createjs.LoadQueue.SVG;
                default:
                    return createjs.LoadQueue.TEXT
            }
        }, b._sendFileProgress = function(a, b) {
            if (this._isCanceled()) return void this._cleanUp();
            if (this.hasEventListener("fileprogress")) {
                var c = new createjs.Event("fileprogress");
                c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c)
            }
        }, b._sendFileComplete = function(a, b) {
            if (!this._isCanceled()) {
                var c = new createjs.Event("fileload");
                c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c)
            }
        }, b._sendFileStart = function(a) {
            var b = new createjs.Event("filestart");
            b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b)
        }, b.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = a;
        var d = function() {};
        d.init = function() {
            var a = navigator.userAgent;
            d.isFirefox = a.indexOf("Firefox") > -1, d.isOpera = null != window.opera, d.isChrome = a.indexOf("Chrome") > -1, d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1
        }, d.init(), createjs.LoadQueue.BrowserDetect = d
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a) {
                this.init(a)
            },
            b = a.prototype = new createjs.AbstractLoader;
        b._loadTimeout = null, b._tagCompleteProxy = null, b._isAudio = !1, b._tag = null, b._jsonResult = null, b.init = function(a) {
            this._item = a, this._tag = a.tag, this._isAudio = window.HTMLAudioElement && a.tag instanceof window.HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
        }, b.getResult = function() {
            return this._item.type == createjs.LoadQueue.JSONP || this._item.type == createjs.LoadQueue.MANIFEST ? this._jsonResult : this._tag
        }, b.cancel = function() {
            this.canceled = !0, this._clean()
        }, b.load = function() {
            var a = this._item,
                b = this._tag;
            clearTimeout(this._loadTimeout);
            var c = createjs.LoadQueue.LOAD_TIMEOUT;
            0 == c && (c = createjs.LoadQueue.loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), c), this._isAudio && (b.src = null, b.preload = "auto"), b.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (b.onstalled = createjs.proxy(this._handleStalled, this), b.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (b.onload = createjs.proxy(this._handleLoad, this), b.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
            var d = this.buildPath(a.src, a.values);
            switch (a.type) {
                case createjs.LoadQueue.CSS:
                    b.href = d;
                    break;
                case createjs.LoadQueue.SVG:
                    b.data = d;
                    break;
                default:
                    b.src = d
            }
            if (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST) {
                if (null == a.callback) throw new Error("callback is required for loading JSONP requests.");
                if (null != window[a.callback]) throw new Error('JSONP callback "' + a.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
                window[a.callback] = createjs.proxy(this._handleJSONPLoad, this)
            }(a.type == createjs.LoadQueue.SVG || a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST || a.type == createjs.LoadQueue.JAVASCRIPT || a.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = b.style.visibility, b.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(b)), null != b.load && b.load()
        }, b._handleJSONPLoad = function(a) {
            this._jsonResult = a
        }, b._handleTimeout = function() {
            this._clean();
            var a = new createjs.Event("error");
            a.text = "PRELOAD_TIMEOUT", this._sendError(a)
        }, b._handleStalled = function() {}, b._handleError = function() {
            this._clean();
            var a = new createjs.Event("error");
            this._sendError(a)
        }, b._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var a = this.getItem().tag;
            ("loaded" == a.readyState || "complete" == a.readyState) && this._handleLoad()
        }, b._handleLoad = function() {
            if (!this._isCanceled()) {
                var a = this.getItem(),
                    b = a.tag;
                if (!(this.loaded || this._isAudio && 4 !== b.readyState)) {
                    switch (this.loaded = !0, a.type) {
                        case createjs.LoadQueue.SVG:
                        case createjs.LoadQueue.JSON:
                        case createjs.LoadQueue.JSONP:
                        case createjs.LoadQueue.MANIFEST:
                        case createjs.LoadQueue.CSS:
                            b.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(b)
                    }
                    this._clean(), this._sendComplete()
                }
            }
        }, b._clean = function() {
            clearTimeout(this._loadTimeout);
            var a = this.getItem(),
                b = a.tag;
            null != b && (b.onload = null, b.removeEventListener && b.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), b.onstalled = null, b.onprogress = null, b.onerror = null, null != b.parentNode && a.type == createjs.LoadQueue.SVG && a.type == createjs.LoadQueue.JSON && a.type == createjs.LoadQueue.MANIFEST && a.type == createjs.LoadQueue.CSS && a.type == createjs.LoadQueue.JSONP && b.parentNode.removeChild(b));
            var a = this.getItem();
            (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.MANIFEST) && (window[a.callback] = null)
        }, b.toString = function() {
            return "[PreloadJS TagLoader]"
        }, createjs.TagLoader = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(a, b) {
                this.init(a, b)
            },
            b = a.prototype = new createjs.AbstractLoader;
        b._request = null, b._loadTimeout = null, b._xhrLevel = 1, b._response = null, b._rawResponse = null, b._crossOrigin = "", b.init = function(a, b) {
            this._item = a,
                this._crossOrigin = b, !this._createXHR(a)
        }, b.getResult = function(a) {
            return a && this._rawResponse ? this._rawResponse : this._response
        }, b.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, b.load = function() {
            if (null == this._request) return void this._handleError();
            if (this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel) {
                var a = createjs.LoadQueue.LOAD_TIMEOUT;
                if (0 == a) a = createjs.LoadQueue.loadTimeout;
                else try {
                    console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout")
                } catch (b) {}
                this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), a)
            }
            this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
            try {
                this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
            } catch (c) {
                var d = new createjs.Event("error");
                d.error = c, this._sendError(d)
            }
        }, b.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, b.getResponseHeader = function(a) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
        }, b._handleProgress = function(a) {
            if (a && !(a.loaded > 0 && 0 == a.total)) {
                var b = new createjs.Event("progress");
                b.loaded = a.loaded, b.total = a.total, this._sendProgress(b)
            }
        }, b._handleLoadStart = function() {
            clearTimeout(this._loadTimeout), this._sendLoadStart()
        }, b._handleAbort = function() {
            this._clean();
            var a = new createjs.Event("error");
            a.text = "XHR_ABORTED", this._sendError(a)
        }, b._handleError = function() {
            this._clean();
            var a = new createjs.Event("error");
            this._sendError(a)
        }, b._handleReadyStateChange = function() {
            4 == this._request.readyState && this._handleLoad()
        }, b._handleLoad = function() {
            if (!this.loaded) {
                if (this.loaded = !0, !this._checkError()) return void this._handleError();
                this._response = this._getResponse(), this._clean();
                var a = this._generateTag();
                a && this._sendComplete()
            }
        }, b._handleTimeout = function(a) {
            this._clean();
            var b = new createjs.Event("error");
            b.text = "PRELOAD_TIMEOUT", this._sendError(a)
        }, b._checkError = function() {
            var a = parseInt(this._request.status);
            switch (a) {
                case 404:
                case 0:
                    return !1
            }
            return !0
        }, b._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (a) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (a) {}
            return null
        }, b._createXHR = function(a) {
            var b = this._isCrossDomain(a),
                c = null;
            if (b && window.XDomainRequest) c = new XDomainRequest;
            else if (window.XMLHttpRequest) c = new XMLHttpRequest;
            else try {
                c = new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (d) {
                try {
                    c = new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (d) {
                    try {
                        c = new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (d) {
                        return !1
                    }
                }
            }
            createjs.LoadQueue.isText(a.type) && c.overrideMimeType && c.overrideMimeType("text/plain; charset=utf-8"), this._xhrLevel = "string" == typeof c.responseType ? 2 : 1;
            var e = null;
            return e = a.method == createjs.LoadQueue.GET ? this.buildPath(a.src, a.values) : a.src, c.open(a.method || createjs.LoadQueue.GET, e, !0), b && c instanceof XMLHttpRequest && 1 == this._xhrLevel && c.setRequestHeader("Origin", location.origin), a.values && a.method == createjs.LoadQueue.POST && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(a.type) && (c.responseType = "arraybuffer"), this._request = c, !0
        }, b._clean = function() {
            clearTimeout(this._loadTimeout);
            var a = this._request;
            a.onloadstart = null, a.onprogress = null, a.onabort = null, a.onerror = null, a.onload = null, a.ontimeout = null, a.onloadend = null, a.onreadystatechange = null
        }, b._generateTag = function() {
            var a = this._item.type,
                b = this._item.tag;
            switch (a) {
                case createjs.LoadQueue.IMAGE:
                    return b.onload = createjs.proxy(this._handleTagReady, this), "" != this._crossOrigin && (b.crossOrigin = "Anonymous"), b.src = this.buildPath(this._item.src, this._item.values), this._rawResponse = this._response, this._response = b, !1;
                case createjs.LoadQueue.JAVASCRIPT:
                    return b = document.createElement("script"), b.text = this._response, this._rawResponse = this._response, this._response = b, !0;
                case createjs.LoadQueue.CSS:
                    var c = document.getElementsByTagName("head")[0];
                    if (c.appendChild(b), b.styleSheet) b.styleSheet.cssText = this._response;
                    else {
                        var d = document.createTextNode(this._response);
                        b.appendChild(d)
                    }
                    return this._rawResponse = this._response, this._response = b, !0;
                case createjs.LoadQueue.XML:
                    var e = this._parseXML(this._response, "text/xml");
                    return this._rawResponse = this._response, this._response = e, !0;
                case createjs.LoadQueue.SVG:
                    var e = this._parseXML(this._response, "image/svg+xml");
                    return this._rawResponse = this._response, null != e.documentElement ? (b.appendChild(e.documentElement), this._response = b) : this._response = e, !0;
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                    var f = {};
                    try {
                        f = JSON.parse(this._response)
                    } catch (g) {
                        f = g
                    }
                    return this._rawResponse = this._response, this._response = f, !0
            }
            return !0
        }, b._parseXML = function(a, b) {
            var c = null;
            try {
                if (window.DOMParser) {
                    var d = new DOMParser;
                    c = d.parseFromString(a, b)
                } else c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a)
            } catch (e) {}
            return c
        }, b._handleTagReady = function() {
            this._sendComplete()
        }, b.toString = function() {
            return "[PreloadJS XHRLoader]"
        }, createjs.XHRLoader = a
    }(), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
            return str("", {
                "": a
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), ! function(a) {
        a.extend(a.fn, {
            "validate": function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                    c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
                }), this.submit(function(b) {
                    function d() {
                        var d;
                        return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            "valid": function() {
                var b, c;
                return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() {
                    b = c.element(this) && b
                })), b
            },
            "removeAttrs": function(b) {
                var c = {},
                    d = this;
                return a.each(b.split(/\s/), function(a, b) {
                    c[b] = d.attr(b), d.removeAttr(b)
                }), c
            },
            "rules": function(b, c) {
                var d, e, f, g, h, i, j = this[0];
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    "required": h
                }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    "remote": h
                })), g
            }
        }), a.extend(a.expr[":"], {
            "blank": function(b) {
                return !a.trim("" + a(b).val())
            },
            "filled": function(b) {
                return !!a.trim("" + a(b).val())
            },
            "unchecked": function(b) {
                return !a(b).prop("checked")
            }
        }), a.validator = function(b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
        }, a.validator.format = function(b, c) {
            return 1 === arguments.length ? function() {
                var c = a.makeArray(arguments);
                return c.unshift(b), a.validator.format.apply(this, c)
            } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
                b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                    return c
                })
            }), b)
        }, a.extend(a.validator, {
            "defaults": {
                "messages": {},
                "groups": {},
                "rules": {},
                "errorClass": "error",
                "validClass": "valid",
                "errorElement": "label",
                "focusInvalid": !0,
                "errorContainer": a([]),
                "errorLabelContainer": a([]),
                "onsubmit": !0,
                "ignore": ":hidden",
                "ignoreTitle": !1,
                "onfocusin": function(a) {
                    this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
                },
                "onfocusout": function(a) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                },
                "onkeyup": function(a, b) {
                    (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
                },
                "onclick": function(a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                },
                "highlight": function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                },
                "unhighlight": function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                }
            },
            "setDefaults": function(b) {
                a.extend(a.validator.defaults, b)
            },
            "messages": {
                "required": "This field is required.",
                "remote": "Please fix this field.",
                "email": "Please enter a valid email address.",
                "url": "Please enter a valid URL.",
                "date": "Please enter a valid date.",
                "dateISO": "Please enter a valid date (ISO).",
                "number": "Please enter a valid number.",
                "digits": "Please enter only digits.",
                "creditcard": "Please enter a valid credit card number.",
                "equalTo": "Please enter the same value again.",
                "maxlength": a.validator.format("Please enter no more than {0} characters."),
                "minlength": a.validator.format("Please enter at least {0} characters."),
                "rangelength": a.validator.format("Please enter a value between {0} and {1} characters long."),
                "range": a.validator.format("Please enter a value between {0} and {1}."),
                "max": a.validator.format("Please enter a value less than or equal to {0}."),
                "min": a.validator.format("Please enter a value greater than or equal to {0}.")
            },
            "autoCreateRanges": !1,
            "prototype": {
                "init": function() {
                    function b(b) {
                        var c = a.data(this[0].form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c, d = this.groups = {};
                    a.each(this.settings.groups, function(b, c) {
                        "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                            d[c] = b
                        })
                    }), c = this.settings.rules, a.each(c, function(b, d) {
                        c[b] = a.validator.normalizeRule(d)
                    }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                "form": function() {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                "checkForm": function() {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                    return this.valid()
                },
                "element": function(b) {
                    var c = this.clean(b),
                        d = this.validationTargetFor(c),
                        e = !0;
                    return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
                },
                "showErrors": function(b) {
                    if (b) {
                        a.extend(this.errorMap, b), this.errorList = [];
                        for (var c in b) this.errorList.push({
                            "message": b[c],
                            "element": this.findByName(c)[0]
                        });
                        this.successList = a.grep(this.successList, function(a) {
                            return !(a.name in b)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                "resetForm": function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                "numberOfInvalids": function() {
                    return this.objectLength(this.invalid)
                },
                "objectLength": function(a) {
                    var b, c = 0;
                    for (b in a) c++;
                    return c
                },
                "hideErrors": function() {
                    this.addWrapper(this.toHide).hide()
                },
                "valid": function() {
                    return 0 === this.size()
                },
                "size": function() {
                    return this.errorList.length
                },
                "focusInvalid": function() {
                    if (this.settings.focusInvalid) try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                },
                "findLastActive": function() {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, function(a) {
                        return a.element.name === b.name
                    }).length && b
                },
                "elements": function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                    })
                },
                "clean": function(b) {
                    return a(b)[0]
                },
                "errors": function() {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext)
                },
                "reset": function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
                },
                "prepareForm": function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                "prepareElement": function(a) {
                    this.reset(), this.toHide = this.errorsFor(a)
                },
                "elementValue": function(b) {
                    var c, d = a(b),
                        e = d.attr("type");
                    return "radio" === e || "checkbox" === e ? a("input[name='" + d.attr("name") + "']:checked").val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
                },
                "check": function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f = a(b).rules(),
                        g = a.map(f, function(a, b) {
                            return b
                        }).length,
                        h = !1,
                        i = this.elementValue(b);
                    for (d in f) {
                        e = {
                            "method": d,
                            "parameters": f[d]
                        };
                        try {
                            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                                h = !0;
                                continue
                            }
                            if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, e), !1
                        } catch (j) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
                        }
                    }
                    return h ? void 0 : (this.objectLength(f) && this.successList.push(b), !0)
                },
                "customDataMessage": function(b, c) {
                    return a(b).data("msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
                },
                "customMessage": function(a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b])
                },
                "findDefined": function() {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a];
                    return void 0
                },
                "defaultMessage": function(b, c) {
                    return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
                },
                "formatAndAdd": function(b, c) {
                    var d = this.defaultMessage(b, c.method),
                        e = /\$?\{(\d+)\}/g;
                    "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                        "message": d,
                        "element": b,
                        "method": c.method
                    }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                },
                "addWrapper": function(a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                },
                "defaultShowErrors": function() {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                "validElements": function() {
                    return this.currentElements.not(this.invalidElements())
                },
                "invalidElements": function() {
                    return a(this.errorList).map(function() {
                        return this.element
                    })
                },
                "showLabel": function(b, c) {
                    var d = this.errorsFor(b);
                    d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
                },
                "errorsFor": function(b) {
                    var c = this.idOrName(b);
                    return this.errors().filter(function() {
                        return a(this).attr("for") === c
                    })
                },
                "idOrName": function(a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                },
                "validationTargetFor": function(a) {
                    return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
                },
                "checkable": function(a) {
                    return /radio|checkbox/i.test(a.type)
                },
                "findByName": function(b) {
                    return a(this.currentForm).find("[name='" + b + "']")
                },
                "getLength": function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                "depend": function(a, b) {
                    return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
                },
                "dependTypes": {
                    "boolean": function(a) {
                        return a
                    },
                    "string": function(b, c) {
                        return !!a(b, c.form).length
                    },
                    "function": function(a, b) {
                        return a(b)
                    }
                },
                "optional": function(b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
                },
                "startRequest": function(a) {
                    this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
                },
                "stopRequest": function(b, c) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                "previousValue": function(b) {
                    return a.data(b, "previousValue") || a.data(b, "previousValue", {
                        "old": null,
                        "valid": !0,
                        "message": this.defaultMessage(b, "remote")
                    })
                }
            },
            "classRuleSettings": {
                "required": {
                    "required": !0
                },
                "email": {
                    "email": !0
                },
                "url": {
                    "url": !0
                },
                "date": {
                    "date": !0
                },
                "dateISO": {
                    "dateISO": !0
                },
                "number": {
                    "number": !0
                },
                "digits": {
                    "digits": !0
                },
                "creditcard": {
                    "creditcard": !0
                }
            },
            "addClassRules": function(b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
            },
            "classRules": function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                }), c
            },
            "attributeRules": function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
            },
            "dataRules": function(b) {
                var c, d, e = {},
                    f = a(b);
                for (c in a.validator.methods) d = f.data("rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
                return e
            },
            "staticRules": function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            "normalizeRules": function(b, c) {
                return a.each(b, function(d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                    }
                }), a.each(b, function(d, e) {
                    b[d] = a.isFunction(e) ? e(c) : e
                }), a.each(["minlength", "maxlength"], function() {
                    b[this] && (b[this] = Number(b[this]))
                }), a.each(["rangelength", "range"], function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
            },
            "normalizeRule": function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() {
                        c[this] = !0
                    }), b = c
                }
                return b
            },
            "addMethod": function(b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
            },
            "methods": {
                "required": function(b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
                },
                "email": function(a, b) {
                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
                },
                "url": function(a, b) {
                    return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
                },
                "date": function(a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
                },
                "dateISO": function(a, b) {
                    return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
                },
                "number": function(a, b) {
                    return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                },
                "digits": function(a, b) {
                    return this.optional(b) || /^\d+$/.test(a)
                },
                "creditcard": function(a, b) {
                    if (this.optional(b)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(a)) return !1;
                    var c, d, e = 0,
                        f = 0,
                        g = !1;
                    if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                    for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                    return e % 10 === 0
                },
                "minlength": function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d
                },
                "maxlength": function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || d >= e
                },
                "rangelength": function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d[0] && e <= d[1]
                },
                "min": function(a, b, c) {
                    return this.optional(b) || a >= c
                },
                "max": function(a, b, c) {
                    return this.optional(b) || c >= a
                },
                "range": function(a, b, c) {
                    return this.optional(b) || a >= c[0] && a <= c[1]
                },
                "equalTo": function(b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        a(c).valid()
                    }), b === e.val()
                },
                "remote": function(b, c, d) {
                    if (this.optional(c)) return "dependency-mismatch";
                    var e, f, g = this.previousValue(c);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                        "url": d
                    } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                        "url": d,
                        "mode": "abort",
                        "port": "validate" + c.name,
                        "dataType": "json",
                        "data": f,
                        "context": e.currentForm,
                        "success": function(d) {
                            var f, h, i, j = d === !0 || "true" === d;
                            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                        }
                    }, d)), "pending")
                }
            }
        }), a.format = function() {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        }
    }(jQuery),
    function(a) {
        var b, c = {};
        a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
            var e = a.port;
            "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
        }) : (b = a.ajax, a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
        })
    }(jQuery),
    function(a) {
        a.extend(a.fn, {
            "validateDelegate": function(b, c, d) {
                return this.bind(c, function(c) {
                    var e = a(c.target);
                    return e.is(b) ? d.apply(e, arguments) : void 0
                })
            }
        })
    }(jQuery),
    function(a, b, c, d) {
        function e(b, c) {
            var d = this;
            return this.options = a.extend({}, g, c), this.currentSlide = 0, this.cssSupport = this.css.isSupported("transition") && this.css.isSupported("transform") ? !0 : !1, this.offset = this.options.circular ? 2 : 0, this.options.beforeInit.call(this), this.parent = b, this.init(), this.play(), this.options.afterInit.call(this), {
                "current": function() {
                    return -d.currentSlide + 1
                },
                "reinit": function() {
                    d.init()
                },
                "destroy": function() {
                    d.destroy()
                },
                "play": function() {
                    d.play()
                },
                "pause": function() {
                    d.pause()
                },
                "next": function(a) {
                    d.slide(1, !1, a)
                },
                "prev": function(a) {
                    d.slide(-1, !1, a)
                },
                "jump": function(a, b) {
                    d.slide(a - 1, !0, b)
                },
                "nav": function(a) {
                    d.navigation.wrapper && d.navigation.wrapper.remove(), d.options.navigation = a ? a : d.options.navigation, d.navigation()
                },
                "arrows": function(a) {
                    d.arrows.wrapper && d.arrows.wrapper.remove(), d.options.arrows = a ? a : d.options.arrows, d.arrows()
                }
            }
        }
        var f = "glide",
            g = {
                "autoplay": 4e3,
                "hoverpause": !0,
                "circular": !0,
                "animationDuration": 500,
                "animationTimingFunc": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
                "arrows": !0,
                "arrowsWrapperClass": "slider__arrows",
                "arrowMainClass": "slider__arrows-item",
                "arrowRightClass": "slider__arrows-item--right",
                "arrowRightText": "next",
                "arrowLeftClass": "slider__arrows-item--left",
                "arrowLeftText": "prev",
                "navigation": !0,
                "navigationCenter": !0,
                "navigationClass": "slider__nav",
                "navigationItemClass": "slider__nav-item",
                "navigationCurrentItemClass": "slider__nav-item--current",
                "keyboard": !0,
                "touchDistance": 60,
                "beforeInit": function() {},
                "afterInit": function() {},
                "beforeTransition": function() {},
                "afterTransition": function() {}
            };
        e.prototype.build = function() {
            this.bindings(), this.slides.length > 1 && (this.options.circular && this.circular(), this.options.arrows && this.arrows(), this.options.navigation && this.navigation()), this.events()
        }, e.prototype.circular = function() {
            this.firstClone = this.slides.filter(":first-child").clone().width(this.slides.spread), this.lastClone = this.slides.filter(":last-child").clone().width(this.slides.spread), this.wrapper.append(this.firstClone).prepend(this.lastClone).width(this.parent.width() * (this.slides.length + 2)).trigger("clearTransition").trigger("setTranslate", [-this.slides.spread])
        }, e.prototype.navigation = function() {
            this.navigation.items = {}, this.navigation.wrapper = a("<div />", {
                "class": this.options.navigationClass
            }).appendTo(this.options.navigation === !0 ? this.parent : this.options.navigation);
            for (var b = 0; b < this.slides.length; b++) this.navigation.items[b] = a("<a />", {
                "href": "#",
                "class": this.options.navigationItemClass,
                "data-distance": b
            }).appendTo(this.navigation.wrapper);
            this.navigation.items[0].addClass(this.options.navigationCurrentItemClass), this.options.navigationCenter && this.navigation.wrapper.css({
                "left": "50%",
                "width": this.navigation.wrapper.children().outerWidth(!0) * this.navigation.wrapper.children().length,
                "margin-left": -(this.navigation.wrapper.outerWidth(!0) / 2)
            })
        }, e.prototype.arrows = function() {
            this.arrows.wrapper = a("<div />", {
                "class": this.options.arrowsWrapperClass
            }).appendTo(this.options.arrows === !0 ? this.parent : this.options.arrows), this.arrows.right = a("<div />", {
                "class": this.options.arrowMainClass + " " + this.options.arrowRightClass,
                "data-distance": "1",
                "html": this.options.arrowRightText
            }).appendTo(this.arrows.wrapper), this.arrows.left = a("<div />", {
                "class": this.options.arrowMainClass + " " + this.options.arrowLeftClass,
                "data-distance": "-1",
                "html": this.options.arrowLeftText
            }).appendTo(this.arrows.wrapper)
        }, e.prototype.bindings = function() {
            var b = this,
                c = this.options,
                d = this.css.getPrefix();
            this.wrapper.bind({
                "setTransition": function() {
                    a(this).css(d + "transition", d + "transform " + c.animationDuration + "ms " + c.animationTimingFunc)
                },
                "clearTransition": function() {
                    a(this).css(d + "transition", "none")
                },
                "setTranslate": function(c, e) {
                    b.cssSupport ? a(this).css(d + "transform", "translate3d(" + e + "px, 0px, 0px)") : a(this).css("margin-left", e)
                }
            })
        }, e.prototype.events = function() {
            this.options.touchDistance && this.parent.on({
                "touchstart MSPointerDown": a.proxy(this.events.touchstart, this),
                "touchmove MSPointerMove": a.proxy(this.events.touchmove, this),
                "touchend MSPointerUp": a.proxy(this.events.touchend, this)
            }), this.arrows.wrapper && a(this.arrows.wrapper).children().on("click touchstart", a.proxy(this.events.arrows, this)), this.navigation.wrapper && a(this.navigation.wrapper).children().on("click touchstart", a.proxy(this.events.navigation, this)), this.options.keyboard && a(c).on("keyup.glideKeyup", a.proxy(this.events.keyboard, this)), this.options.hoverpause && this.parent.on("mouseover mouseout", a.proxy(this.events.hover, this)), a(b).on("resize", a.proxy(this.events.resize, this))
        }, e.prototype.events.navigation = function(b) {
            this.wrapper.attr("disabled") || (b.preventDefault(), this.slide(a(b.currentTarget).data("distance"), !0))
        }, e.prototype.events.arrows = function(b) {
            this.wrapper.attr("disabled") || (b.preventDefault(), this.slide(a(b.currentTarget).data("distance"), !1))
        }, e.prototype.events.keyboard = function(a) {
            this.wrapper.attr("disabled") || (39 === a.keyCode && this.slide(1), 37 === a.keyCode && this.slide(-1))
        }, e.prototype.events.hover = function(a) {
            this.pause(), "mouseout" === a.type && this.play()
        }, e.prototype.events.resize = function(a) {
            this.dimensions(), this.slide(0)
        }, e.prototype.disableEvents = function() {
            this.wrapper.attr("disabled", !0)
        }, e.prototype.enableEvents = function() {
            this.wrapper.attr("disabled", !1)
        }, e.prototype.events.touchstart = function(a) {
            if (!this.wrapper.attr("disabled")) {
                var b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                this.events.touchStartX = b.pageX, this.events.touchStartY = b.pageY, this.events.touchSin = null
            }
        }, e.prototype.events.touchmove = function(a) {
            if (!this.wrapper.attr("disabled")) {
                var b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0],
                    c = b.pageX - this.events.touchStartX,
                    d = b.pageY - this.events.touchStartY,
                    e = Math.abs(c << 2),
                    f = Math.abs(d << 2),
                    g = Math.sqrt(e + f),
                    h = Math.sqrt(f);
                this.events.touchSin = Math.asin(h / g), this.events.touchSin * (180 / Math.PI) < 45 && a.preventDefault()
            }
        }, e.prototype.events.touchend = function(a) {
            if (!this.wrapper.attr("disabled")) {
                var b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0],
                    c = b.pageX - this.events.touchStartX;
                c > this.options.touchDistance && this.events.touchSin * (180 / Math.PI) < 45 ? this.slide(-1) : c < -this.options.touchDistance && this.events.touchSin * (180 / Math.PI) < 45 && this.slide(1)
            }
        }, e.prototype.slide = function(b, c, d) {
            if (this.slides.length <= 1) return !1;
            this.pause(), this.options.beforeTransition.call(this);
            var e = this,
                f = c ? 0 : this.currentSlide,
                g = -(this.slides.length - 1),
                h = !1,
                i = !1;
            0 === f && -1 === b ? (h = !0, f = g) : f === g && 1 === b ? (i = !0, f = 0) : f += -b;
            var j = this.slides.spread * f;
            this.options.circular && (j -= this.slides.spread, (i || h) && this.disableEvents(), i && (j = this.slides.spread * (g - 2)), h && (j = 0)), this.cssSupport ? this.wrapper.trigger("setTransition").trigger("setTranslate", [j]) : this.wrapper.stop().animate({
                "margin-left": j
            }, this.options.animationDuration), this.options.circular && ((h || i) && this.afterAnimation(function() {
                e.wrapper.trigger("clearTransition"), e.enableEvents()
            }), i && this.afterAnimation(function() {
                i = !1, e.wrapper.trigger("setTranslate", [-e.slides.spread])
            }), h && this.afterAnimation(function() {
                h = !1, e.wrapper.trigger("setTranslate", [e.slides.spread * (g - 1)])
            })), this.options.navigation && this.navigation.wrapper && a("." + this.options.navigationClass, this.options.navigation === !0 ? this.parent : this.options.navigation).children().eq(-f).addClass(this.options.navigationCurrentItemClass).siblings().removeClass(this.options.navigationCurrentItemClass), this.currentSlide = f, this.afterAnimation(function() {
                e.options.afterTransition.call(e), "undefined" !== d && "function" == typeof d && d()
            }), this.play()
        }, e.prototype.play = function() {
            var a = this;
            this.options.autoplay && (this.auto = setInterval(function() {
                a.slide(1, !1)
            }, this.options.autoplay))
        }, e.prototype.pause = function() {
            this.options.autoplay && (this.auto = clearInterval(this.auto))
        }, e.prototype.afterAnimation = function(a) {
            setTimeout(function() {
                a()
            }, this.options.animationDuration + 10)
        }, e.prototype.dimensions = function() {
            this.slides.spread = this.parent.width(), this.wrapper.width(this.slides.spread * (this.slides.length + this.offset)), this.slides.add(this.firstClone).add(this.lastClone).width(this.slides.spread)
        }, e.prototype.destroy = function() {
            this.parent.unbind(), this.wrapper.unbind(), this.wrapper.removeAttr("style"), a(this.navigation.wrapper).children().unbind(), a(this.arrows.wrapper).children().unbind(), this.slide(0, !0), this.pause(), this.options.circular && (this.firstClone.remove(), this.lastClone.remove())
        }, e.prototype.init = function() {
            this.wrapper = this.parent.children(), this.slides = this.wrapper.children(), this.dimensions(), this.build()
        }, e.prototype.css = {
            "isSupported": function(a) {
                var e = !1,
                    f = "Khtml ms O Moz Webkit".split(" "),
                    g = c.createElement("div"),
                    h = null;
                if (a = a.toLowerCase(), g.style[a] !== d && (e = !0), e === !1) {
                    h = a.charAt(0).toUpperCase() + a.substr(1);
                    for (var i = 0; i < f.length; i++)
                        if (g.style[f[i] + h] !== d) {
                            e = !0;
                            break
                        }
                }
                return b.opera && b.opera.version() < 13 && (e = !1), ("undefined" === e || e === d) && (e = !1), e
            },
            "getPrefix": function() {
                if (!b.getComputedStyle) return "";
                var a = b.getComputedStyle(c.documentElement, "");
                return "-" + (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1] + "-"
            }
        }, a.fn[f] = function(b) {
            return this.each(function() {
                a.data(this, "api_" + f) || a.data(this, "api_" + f, new e(a(this), b))
            })
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        var e = function(c, d) {
            this.elem = c, this.$elem = a(c), this.options = d, this.metadata = this.$elem.data("stickem-options"), this.$win = a(b)
        };
        e.prototype = {
            "defaults": {
                "item": ".stickem",
                "container": ".stickem-container",
                "stickClass": "stickit",
                "endStickClass": "stickit-end",
                "offset": 0,
                "start": 0,
                "onStick": null,
                "onUnstick": null
            },
            "init": function() {
                var b = this;
                return b.config = a.extend({}, b.defaults, b.options, b.metadata), b.setWindowHeight(), b.getItems(), b.bindEvents(), b
            },
            "bindEvents": function() {
                var b = this;
                b.$win.on("scroll.stickem", a.proxy(b.handleScroll, b)), b.$win.on("resize.stickem", a.proxy(b.handleResize, b))
            },
            "destroy": function() {
                var a = this;
                a.$win.off("scroll.stickem"), a.$win.off("resize.stickem")
            },
            "getItem": function(b, c) {
                var d = this,
                    e = a(c),
                    f = {
                        "$elem": e,
                        "elemHeight": e.outerHeight(!0),
                        "$container": e.parents(d.config.container),
                        "isStuck": !1
                    };
                d.windowHeight > f.elemHeight ? (f.containerHeight = f.$container.outerHeight(), f.containerInner = {
                    "border": {
                        "bottom": parseInt(f.$container.css("border-bottom"), 10) || 0,
                        "top": parseInt(f.$container.css("border-top"), 10) || 0
                    },
                    "padding": {
                        "bottom": parseInt(f.$container.css("padding-bottom"), 10) || 0,
                        "top": parseInt(f.$container.css("padding-top"), 10) || 0
                    }
                }, f.containerInnerHeight = f.$container.height(), f.containerStart = f.$container.offset().top - d.config.offset + d.config.start + f.containerInner.padding.top + f.containerInner.border.top, f.scrollFinish = f.containerStart - d.config.start + (f.containerInnerHeight - f.elemHeight), f.containerInnerHeight > f.elemHeight && d.items.push(f)) : f.$elem.removeClass(d.config.stickClass + " " + d.config.endStickClass)
            },
            "getItems": function() {
                var b = this;
                b.items = [], b.$elem.find(b.config.item).each(a.proxy(b.getItem, b))
            },
            "handleResize": function() {
                var a = this;
                a.getItems(), a.setWindowHeight()
            },
            "handleScroll": function() {
                var a = this;
                if (a.items.length > 0)
                    for (var b = a.$win.scrollTop(), c = 0, d = a.items.length; d > c; c++) {
                        var e = a.items[c];
                        e.isStuck && (b < e.containerStart || b > e.scrollFinish) || b > e.scrollFinish ? (e.$elem.removeClass(a.config.stickClass), b > e.scrollFinish && e.$elem.addClass(a.config.endStickClass), e.isStuck = !1, a.config.onUnstick && a.config.onUnstick(e)) : e.isStuck === !1 && b > e.containerStart && b < e.scrollFinish && (e.$elem.removeClass(a.config.endStickClass).addClass(a.config.stickClass), e.isStuck = !0, a.config.onStick && a.config.onStick(e))
                    }
            },
            "setWindowHeight": function() {
                var a = this;
                a.windowHeight = a.$win.height() - a.config.offset
            }
        }, e.defaults = e.prototype.defaults, a.fn.stickem = function(a) {
            return this.destroy = function() {
                this.each(function() {
                    new e(this, a).destroy()
                })
            }, this.each(function() {
                new e(this, a).init()
            })
        }
    }(jQuery, window, document),
    function(a) {
        var b = -1,
            c = -1,
            d = function(a) {
                return parseFloat(a) || 0
            },
            e = function(b) {
                var c = null,
                    e = [];
                return a(b).each(function() {
                    var b = a(this),
                        f = b.offset().top - d(b.css("margin-top")),
                        g = 0 < e.length ? e[e.length - 1] : null;
                    null === g ? e.push(b) : 1 >= Math.floor(Math.abs(c - f)) ? e[e.length - 1] = g.add(b) : e.push(b), c = f
                }), e
            },
            f = function(b) {
                var c = {
                    "byRow": !0,
                    "property": "height",
                    "target": null,
                    "remove": !1
                };
                return "object" == typeof b ? a.extend(c, b) : ("boolean" == typeof b ? c.byRow = b : "remove" === b && (c.remove = !0), c)
            },
            g = a.fn.matchHeight = function(b) {
                if (b = f(b), b.remove) {
                    var c = this;
                    return this.css(b.property, ""), a.each(g._groups, function(a, b) {
                        b.elements = b.elements.not(c)
                    }), this
                }
                return 1 >= this.length && !b.target ? this : (g._groups.push({
                    "elements": this,
                    "options": b
                }), g._apply(this, b), this)
            };
        g._groups = [], g._throttle = 80, g._maintainScroll = !1, g._beforeUpdate = null, g._afterUpdate = null, g._apply = function(b, c) {
            var h = f(c),
                i = a(b),
                j = [i],
                k = a(window).scrollTop(),
                l = a("html").outerHeight(!0),
                m = i.parents().filter(":hidden");
            return m.each(function() {
                var b = a(this);
                b.data("style-cache", b.attr("style"))
            }), m.css("display", "block"), h.byRow && !h.target && (i.each(function() {
                var b = a(this),
                    c = b.css("display");
                "inline-block" !== c && "inline-flex" !== c && (c = "block"), b.data("style-cache", b.attr("style")), b.css({
                    "display": c,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    "height": "100px"
                })
            }), j = e(i), i.each(function() {
                var b = a(this);
                b.attr("style", b.data("style-cache") || "")
            })), a.each(j, function(b, c) {
                var e = a(c),
                    f = 0;
                if (h.target) f = h.target.outerHeight(!1);
                else {
                    if (h.byRow && 1 >= e.length) return void e.css(h.property, "");
                    e.each(function() {
                        var b = a(this),
                            c = b.css("display");
                        "inline-block" !== c && "inline-flex" !== c && (c = "block"), c = {
                            "display": c
                        }, c[h.property] = "", b.css(c), b.outerHeight(!1) > f && (f = b.outerHeight(!1)), b.css("display", "")
                    })
                }
                e.each(function() {
                    var b = a(this),
                        c = 0;
                    h.target && b.is(h.target) || ("border-box" !== b.css("box-sizing") && (c += d(b.css("border-top-width")) + d(b.css("border-bottom-width")), c += d(b.css("padding-top")) + d(b.css("padding-bottom"))), b.css(h.property, f - c + "px"))
                })
            }), m.each(function() {
                var b = a(this);
                b.attr("style", b.data("style-cache") || null)
            }), g._maintainScroll && a(window).scrollTop(k / l * a("html").outerHeight(!0)), this
        }, g._applyDataApi = function() {
            var b = {};
            a("[data-match-height], [data-mh]").each(function() {
                var c = a(this),
                    d = c.attr("data-mh") || c.attr("data-match-height");
                b[d] = d in b ? b[d].add(c) : c
            }), a.each(b, function() {
                this.matchHeight(!0)
            })
        };
        var h = function(b) {
            g._beforeUpdate && g._beforeUpdate(b, g._groups), a.each(g._groups, function() {
                g._apply(this.elements, this.options)
            }), g._afterUpdate && g._afterUpdate(b, g._groups)
        };
        g._update = function(d, e) {
            if (e && "resize" === e.type) {
                var f = a(window).width();
                if (f === b) return;
                b = f
            }
            d ? -1 === c && (c = setTimeout(function() {
                h(e), c = -1
            }, g._throttle)) : h(e)
        }, a(g._applyDataApi), a(window).bind("load", function(a) {
            g._update(!1, a)
        }), a(window).bind("resize orientationchange", function(a) {
            g._update(!0, a)
        })
    }(jQuery), window.JSON || (window.JSON = {}),
    function() {
        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) d = rep[c], "string" == typeof d && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var JSON = window.JSON,
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(a, b) {
        "use strict";
        var c = a.History = a.History || {},
            d = a.jQuery;
        if ("undefined" != typeof c.Adapter) throw new Error("History.js Adapter has already been loaded...");
        c.Adapter = {
            "bind": function(a, b, c) {
                d(a).bind(b, c)
            },
            "trigger": function(a, b, c) {
                d(a).trigger(b, c)
            },
            "extractEventData": function(a, c, d) {
                var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
                return e
            },
            "onDomLoad": function(a) {
                d(a)
            }
        }, "undefined" != typeof c.init && c.init()
    }(window),
    function(a, b) {
        "use strict";
        var c = a.document,
            d = a.setTimeout || d,
            e = a.clearTimeout || e,
            f = a.setInterval || f,
            g = a.History = a.History || {};
        if ("undefined" != typeof g.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        g.initHtml4 = function() {
            return "undefined" != typeof g.initHtml4.initialized ? !1 : (g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function(a) {
                var b, c = g.getHashByIndex();
                return b = a === c
            }, g.saveHash = function(a) {
                return g.isLastHash(a) ? !1 : (g.savedHashes.push(a), !0)
            }, g.getHashByIndex = function(a) {
                var b = null;
                return b = "undefined" == typeof a ? g.savedHashes[g.savedHashes.length - 1] : 0 > a ? g.savedHashes[g.savedHashes.length + a] : g.savedHashes[a]
            }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function(a, b, c) {
                var d, e = g.getHashByState(a);
                return d = {
                    "discardedState": a,
                    "backState": c,
                    "forwardState": b
                }, g.discardedStates[e] = d, !0
            }, g.discardHash = function(a, b, c) {
                var d = {
                    "discardedHash": a,
                    "backState": c,
                    "forwardState": b
                };
                return g.discardedHashes[a] = d, !0
            }, g.discardedState = function(a) {
                var b, c = g.getHashByState(a);
                return b = g.discardedStates[c] || !1
            }, g.discardedHash = function(a) {
                var b = g.discardedHashes[a] || !1;
                return b
            }, g.recycleState = function(a) {
                var b = g.getHashByState(a);
                return g.discardedState(a) && delete g.discardedStates[b], !0
            }, g.emulated.hashChange && (g.hashChangeInit = function() {
                g.checkerFunction = null;
                var b, d, e, h, i = "";
                return g.isInternetExplorer() ? (b = "historyjs-iframe", d = c.createElement("iframe"), d.setAttribute("id", b), d.style.display = "none", c.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), e = "", h = !1, g.checkerFunction = function() {
                    if (h) return !1;
                    h = !0;
                    var b = g.getHash() || "",
                        c = g.unescapeHash(d.contentWindow.document.location.hash) || "";
                    return b !== i ? (i = b, c !== b && (e = c = b, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = g.escapeHash(b)), g.Adapter.trigger(a, "hashchange")) : c !== e && (e = c, g.setHash(c, !1)), h = !1, !0
                }) : g.checkerFunction = function() {
                    var b = g.getHash();
                    return b !== i && (i = b, g.Adapter.trigger(a, "hashchange")), !0
                }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
            }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function(b) {
                var d, e = b && b.newURL || c.location.href,
                    f = g.getHashByUrl(e),
                    h = null,
                    i = null;
                return g.isLastHash(f) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(f), f && g.isTraditionalAnchor(f) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (h = g.extractState(g.getFullUrl(f || c.location.href, !1), !0), g.isLastSavedState(h) ? (g.busy(!1), !1) : (i = g.getHashByState(h), d = g.discardedState(h), d ? (g.getHashByIndex(-2) === g.getHashByState(d.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(h.data, h.title, h.url, !1), !0))))
            }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function(b, d, e, f) {
                if (g.getHashByUrl(e)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (f !== !1 && g.busy()) return g.pushQueue({
                    "scope": g,
                    "callback": g.pushState,
                    "args": arguments,
                    "queue": f
                }), !1;
                g.busy(!0);
                var h = g.createStateObject(b, d, e),
                    i = g.getHashByState(h),
                    j = g.getState(!1),
                    k = g.getHashByState(j),
                    l = g.getHash();
                return g.storeState(h), g.expectedStateId = h.id, g.recycleState(h), g.setTitle(h), i === k ? (g.busy(!1), !1) : i !== l && i !== g.getShortUrl(c.location.href) ? (g.setHash(i, !1), !1) : (g.saveState(h), g.Adapter.trigger(a, "statechange"), g.busy(!1), !0)
            }, g.replaceState = function(a, b, c, d) {
                if (g.getHashByUrl(c)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (d !== !1 && g.busy()) return g.pushQueue({
                    "scope": g,
                    "callback": g.replaceState,
                    "args": arguments,
                    "queue": d
                }), !1;
                g.busy(!0);
                var e = g.createStateObject(a, b, c),
                    f = g.getState(!1),
                    h = g.getStateByIndex(-2);
                return g.discardState(f, e, h), g.pushState(e.data, e.title, e.url, !1), !0
            }), g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function() {
                g.Adapter.trigger(a, "hashchange")
            }), void 0)
        }, "undefined" != typeof g.init && g.init()
    }(window),
    function() {
        for (var a, b = function() {}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b)
    }();
var bezEasing = [.19, 1, .22, 1],
    bezSwing = [1, 0, 0, 1],
    filterOpen = !1,
    winHeight = $(window).height(),
    isMobile = !1;
if (state = $(".menu").data("menuState"), $(".menu").data("menuState", "closed"), "block" === $(".mobile-test").css("display")) var isMobile = !0;
$(window).resize(function() {
    var a = !1;
    "block" === $(".mobile-test").css("display") && (a = !0), a === !0 ? ($(".main-header .header-wrap h1 a").html("Home"), $(".slider-copy").removeAttr("style")) : ($(".drop-down").removeAttr("style"), $(".drop-down").removeClass("open"), $(".hamburger").removeClass("down"), $(".menu").data("menuState", "closed"), $(".header-wrap").removeClass("hide").removeClass("show"), $(".main-header .header-wrap h1 a").html("Endeavour Capital"), homeSlider(), $(window).resize(function() {
        var a = $(".slider-copy .service.first p").outerHeight(!0),
            b = $(".slider-copy .service.first h2").outerHeight(!0),
            c = $(".slider-copy .service.first a.link").outerHeight(!0),
            d = a + c + b,
            e = $("#carousel").outerHeight(!0);
        $(".slider-copy").height(e + "px"), $(".slider-copy").css("min-height", d + "px")
    }))
}), $.fn.setAllToMaxHeight = function() {
    return this.height(Math.max.apply(this, $.map(this, function(a) {
        return $(a).height()
    })))
}, $(window).load(function() {}), bindEvent(document, "DOMContentLoaded", "readystatechange", function() {
    bindReadyEvents(), mainMenu()
});
var manifest, preload;
setupManifest(), startPreload(), $(window).bind("load", function() {
    setupManifest(), startPreload()
}), Modernizr.history && ! function(a, b) {
    var c = a.History,
        d = a.jQuery,
        e = a.document;
    return c.enabled ? void d(function() {
        var b = ".content-wrap",
            f = d(b).filter(":first"),
            g = f.get(0),
            h = d(".nav-inner").filter(":first"),
            i = "current_page_item",
            j = ".current_page_item",
            k = "li",
            l = "statechangecomplete",
            m = d(a),
            n = d(e.body),
            o = c.getRootUrl();
        0 === f.length && (f = n), d.expr[":"].internal = function(a, b, c, e) {
            var f, g = d(a),
                h = g.attr("href") || "";
            return f = h.substring(0, o.length) === o || -1 === h.indexOf(":")
        };
        var p = function(a) {
            var b = String(a).replace(/<\!DOCTYPE[^>]*>/i, "").replace(/<(html|head|body|title|meta|script)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi, "</div>");
            return d.trim(b)
        };
        d.fn.ajaxify = function() {
            var a = d(this);
            return a.find("a:internal:not(.no-ajax, .menu, .no-ajaxy, .home-slider .slider__arrows a, .quote-slider .slider__arrows a, .projects-sort a)").click(function(a) {
                var b = d(this),
                    f = b.attr("href"),
                    g = b.attr("title") || null;
                return 2 === a.which || a.metaKey ? !0 : f !== e.location.href ? (c.pushState(null, g, f), a.preventDefault(), !1) : (closeMenu(), d(".menu").data("menuState", "closed"), !1)
            }), a
        }, n.ajaxify(), m.bind("statechange", function() {
            var n = c.getState(),
                q = n.url,
                r = q.replace(o, "");
            d(".loader").velocity({
                "opacity": 1
            }, {
                "display": "block"
            }, {
                "duration": 200,
                "easing": bezEasing
            }), d(".content-wrap").velocity({
                "opacity": 0
            }, {
                "duration": 600
            }), d(".loading-spinner").addClass("show"), d.ajax({
                "url": q,
                "success": function(c, n, o) {
                    var s, t, u, v = d(p(c)),
                        w = v.find(".document-body:first"),
                        x = w.find(b).filter(":first");
                    if (u = x.find(".document-script"), u.length && u.detach(), t = x.html() || v.html(), !t) return e.location.href = q, !1;
                    var y = (q.split("/"), "home");
                    d("body").removeClass().addClass(y), s = h.find(k), s.filter(j).removeClass(i), s = s.has('a[href^="' + r + '"],a[href^="/' + r + '"],a[href^="' + q + '"]'), 1 === s.length && s.addClass(i);
                    var z = d("html"),
                        A = z.offset().top;
                    d("html").velocity("scroll", {
                        "offset": A,
                        "duration": 0,
                        "mobileHA": !1
                    }), d(".content-wrap").velocity({
                        "opacity": 0
                    }, {
                        "duration": 0,
                        "delay": 0,
                        "complete": function() {
                            d(".content-wrap").velocity({
                                "opacity": 0
                            }, {
                                "duration": 800,
                                "begin": function() {
                                    closeMenu(), d(".menu").data("menuState", "closed"), f.stop(!0, !0), f.html(t).ajaxify(), bindReadyEvents();
                                    var b = e.location.href,
                                        c = b.split("/");
                                    d("body").removeClass().addClass(c[c.length - 2]);
                                    var g = "home";
                                    if (c.length > 4 && c.length <= 5 ? g = c[c.length - 2] : c.length > 5 && (g = d("section").attr("id")), d(".main-header .header-wrap ul li").removeClass("current-page-ancestor"), d("body").removeClass().addClass(g), a.location.href.indexOf("?") > -1) {
                                        var h = d("html"),
                                            i = h.offset().top;
                                        d("html").velocity("scroll", {
                                            "offset": i,
                                            "duration": 0,
                                            "mobileHA": !1
                                        }), d("body").removeClass().addClass("search")
                                    }
                                },
                                "complete": function() {
                                    var a = d(".blue-bar").outerHeight(!0);
                                    d(".loader").velocity({
                                        "opacity": 1
                                    }, {
                                        "duration": 0,
                                        "easing": bezEasing,
                                        "complete": function() {
                                            d(".loader span").velocity({
                                                "height": a
                                            }, {
                                                "duration": 250,
                                                "easing": bezEasing,
                                                "begin": function() {
                                                    d(".loading-spinner").removeClass("show")
                                                },
                                                "complete": function() {
                                                    d(".loader").velocity({
                                                        "opacity": 0
                                                    }, {
                                                        "duration": 400,
                                                        "delay": 850,
                                                        "easing": bezEasing,
                                                        "complete": function() {
                                                            d(".loader").velocity({
                                                                "opacity": 0
                                                            }, {
                                                                "display": "none"
                                                            })
                                                        }
                                                    }), d(".content-wrap").velocity({
                                                        "opacity": 1
                                                    }, {
                                                        "duration": 650,
                                                        "delay": 850,
                                                        "easing": bezEasing,
                                                        "complete": function() {
                                                            isMobile === !0 || d(".stickem-container").stickem()
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }), e.title = v.find(".document-title:first").text();
                    try {
                        e.getElementsByTagName("title")[0].innerHTML = e.title.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (B) {}
                    u.each(function() {
                        var a = d(this),
                            b = a.text(),
                            c = e.createElement("script");
                        a.attr("src") && (a[0].async || (c.async = !1), c.src = a.attr("src")), c.appendChild(e.createTextNode(b)), g.appendChild(c)
                    }), m.trigger(l), ga("send", "pageview", r)
                },
                "error": function(a, b, c) {
                    return e.location.href = q, !1
                }
            })
        })
    }) : !1
}(window);
//# sourceMappingURL=script.min.map