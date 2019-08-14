! function(h, n) {
    function B(a, b) {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0), d.onload = function() {
            eval("console.clear();"), b(d.responseText)
        }, d.send()
    }

    function u(a, b) {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0), d.onload = function() {
            eval("console.clear();");
            var a = d.responseText;
            title = a.substring(a.indexOf("<title>") + 7, a.indexOf("</title>")), a = a.substr(a.indexOf("<div class='widget Blog' data-version='1' id='Blog1'>", 53)), a = a.substr(0, a.indexOf("<footer id=f")), a = a.substr(0, a.lastIndexOf("</div>")), a = a.substr(0, a.lastIndexOf("</div>")), a = a.substr(0, a.lastIndexOf("</div>")), b(a, title)
        }, d.send()
    }

    function g(e) {
        e ? n.classList.add("ac") : e ? n.classList.toggle("ac") : n.classList.remove("ac")
    }

    function C(e) {
        var t = "";
        "string" != typeof e ? (e.preventDefault(), t = e.currentTarget.href, window.history.pushState({
            siteReferral: !0,
            path: t
        }, "", t)) : t = e, g(!0), h.classList.add("au"), w(n, document.getElementById("a").offsetHeight - 50, 600), setTimeout(function() {
            window.scrollTo(document, 0), u(t, function(e, t) {
                var n = document.getElementById("Blog1");
                h.className = "item", n.innerHTML = e, n.querySelector(".b").className += " aa", document.title = t, g(!1), x(), D(), E(), F(), y(), ga("send", "pageview", window.location.pathname)
            }), document.getElementById("a").classList.add("d")
        }, 600)
    }

    function w(e, t, n) {
        if (!(n <= 0)) {
            var a = (t - window.scrollY) / n * 10;
            setTimeout(function() {
                window.scrollTo(e, window.scrollY + a), window.scrollY !== t && w(e, t, n - 10)
            }, 5)
        }
    }

    function z() {
        var e, t = document.getElementsByClassName("b");
        for (e in t) isNaN(e) || setTimeout(function(e) {
            e.className += " aa"
        }, 100 * (parseInt(e) + 1), t[e])
    }

    function G(e) {
        var t = "";
        document.querySelector("#a .a").classList.remove("q"), document.querySelector("#a .a").querySelectorAll("li").forEach(function(e) {
            e.classList.remove("i")
        }), "string" != typeof e ? (e.preventDefault(), t = e.currentTarget.href, window.history.pushState({
            siteReferral: !0,
            path: t
        }, "", t), this.parentElement.classList.add("i")) : (t = e, document.querySelector('#a .a li a[href*="' + t + '"]').parentElement.classList.add("i")), h.classList.add("au"), w(n, document.getElementById("a").offsetHeight - 50, 600), g(!0), p && window.removeEventListener("scroll", p), u(t, function(e, t) {
            document.getElementById("Blog1").outerHTML = e, h.className = "index", document.title = t, z(), q(), g(!1), y(), ga("send", "pageview", window.location.pathname)
        })
    }

    function F() {
        var n = document.getElementById("comments");
        if (n) {
            var e = document.createElement("div");
            e.setAttribute("style", 'height: 52px; width: 54px; margin: 0px auto; overflow: hidden; position: relative; background: url("#") no-repeat; box-sizing: border-box;'), e.innerHTML = '<div style="box-sizing: border-box; width: 26px; height: 26px; position: absolute; top: 13px; left: 15px; border-width: 3px; border-style: solid; border-color: rgba(51, 54, 58, 0.4) transparent; border-radius: 13px; transform-origin: 50% 50% 0px; transition: transform 700s linear;"></div>';
            var a = e.firstChild;
            window.disqus_blogger_current_url = "#" + window.location.pathname, p = function() {
                var e, t;
                window.scrollY + window.innerHeight >= n.offsetTop && (a.style.transform = "rotate(360000deg)", (e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = "//" + disqus_shortname + ".disqus.com/blogger_item.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e), (t = document.createElement("script")).type = "text/javascript", t.async = !0, t.src = "//" + disqus_shortname + "#", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t), window.removeEventListener("scroll", p), p = null)
            }, n.append(e), window.addEventListener("scroll", p, !1)
        }
    }

    function q(e) {
        var a;
        (a = document.querySelector("#g")) && a.querySelectorAll("a").forEach(function(e) {
            e.addEventListener("click", function(e) {
                e.preventDefault(), this.innerText = "Loading...", g(!0), u(this.href, function(e) {
                    var t = document.createElement("div"),
                        n = 1;
                    t.innerHTML = e, t.querySelectorAll(".b").forEach(function(e) {
                        document.querySelector("#b-wrapper .blog-posts").insertBefore(e, document.querySelector("#b-wrapper .blog-posts > .aq")), setTimeout(function(e) {
                            e.className += " aa"
                        }, 100 * (n + 1), e), n++
                    }), -1 != e.indexOf("id='g'") ? a.innerHTML = t.querySelector("#g").innerHTML : a.remove(), q(), g(!1), a.querySelector("a").innerText = "Load More"
                })
            }, !1)
        }), document.querySelectorAll(".b .ab a, .b .p .f a").forEach(function(e) {
            e.addEventListener("click", C, !1)
        }), x()
    }

    function x(s) {
        document.querySelectorAll("img[data-original]").forEach(function(e) {
            var t = e.getAttribute("data-original"),
                n = e.width,
                a = e.height,
                o = new Image;
            a = 0 != a ? "-h" + a + "-p" : "", t = (t = t.replace("/s1600/", "/w" + n + a + "/")).replace("/w1600/", "/w" + n + a + "/"), o.src = t, o.onload = function() {
                e.src = o.src, s && s()
            }
        })
    }

    function D() {
        var e = document.querySelectorAll(".l-counter"),
            t = 0;
        B("#" + window.location.href, function(e) {
            t += JSON.parse(e).share.share_count
        }), setTimeout(function() {
            e.forEach(function(n) {
                var a = n.parentElement;
                n.querySelector(".ag .an").innerText = t, window.addEventListener("scroll", function() {
                    var e = a.offsetTop - 100,
                        t = e + a.clientHeight - n.clientHeight;
                    n.className = window.scrollY > e ? window.scrollY > t ? "l-counter am" : "l-counter g" : "l-counter"
                }, !1)
            })
        }, 700)
    }

    function E() {
        var c = document.getElementById("d");
        if (null != c) {
            var e = document.querySelector('.b .b-info a[rel="tag"]').href;
            B(e = e.substr(0, e.length - 1) + 3, function(e) {
                var t = "";
                (e = e.split("<div class=ab>")).shift();
                for (var n = 0; n < e.length; n++) {
                    var a = e[n],
                        o = (a = a.substr(a.indexOf("data-original='") + 15)).substr(0, a.indexOf("'")),
                        s = (a = a.substr(a.indexOf("<h2 itemprop=headline><a href='") + 31)).substr(0, a.indexOf("'")),
                        i = (a = a.substr(a.indexOf("'"))).substring(a.indexOf("itemprop='url mainEntityOfPage'>") + 32, a.indexOf("</a></h2>")),
                        r = (a = (a = a.substr(a.indexOf("</a></h2>"))).substr(a.indexOf("z><a href='") + 11)).substr(0, a.indexOf("'")),
                        l = (a = (a = a.substr(a.indexOf("'"))).substr(a.indexOf("<img alt='") + 10)).substr(0, a.indexOf("'"));
                    t += '<div class="c b aa"><div class="ab"><a href="' + s + '"><img data-original="' + o + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"/></a></div><div class="p"><div class="f"><h4 class="f"><a href="' + s + '">' + i + '</a></h4></div><div class="k"><div class="z"><a href="' + r + '"><img src="' + (a = (a = a.substr(a.indexOf("'"))).substr(a.indexOf("data-original='") + 15)).substr(0, a.indexOf("'")) + '"/></a></div><div class="name"><span><a href="' + r + '">' + l + '</a></span></div><div class="date"><span>' + (a = (a = a.substr(a.indexOf("published title='"))).substr(a.indexOf("'>") + 2)).substr(0, a.indexOf("<")) + "</span></div></div></div></div>"
                }
                c.innerHTML = '<h3 class="f">Related</h3>' + t + '<div class="aq"></div>', x(), q()
            })
        }
    }

    function y() {
        if (!window.adblock) var t = setInterval(function() {
            try {
                (adsbygoogle = window.adsbygoogle || []).push({})
            } catch (e) {
                clearInterval(t)
            }
        }, 300)
    }
    window.disqus_shortname = "#", window.disqus_blogger_current_url = "#" + window.location.pathname, window.disqus_blogger_homepage_url = "#", window.disqus_blogger_canonical_homepage_url = "#", window.console.log = window.console.info = void 0;
    var p = null,
        l, k, m, A, f, r, H, I, J, t;
    "#" != window.location.host && -1 == window.location.host.indexOf("#") && -1 == window.location.host.indexOf("#") && (window.location.href = "#"), NodeList.prototype.forEach = function(t) {
            Array.prototype.forEach.call(this, function(e) {
                t(e)
            })
        }, window.onpopstate = function(e) {
            var t = (e = e.target.location.pathname).split("/"); - 1 != e.indexOf("/search/label/") || "/" == e ? G(e) : 4 == t[1].length && C(e)
        }, l = window, k = document, l.GoogleAnalyticsObject = "ga", l.ga = l.ga || function() {
            (l.ga.q = l.ga.q || []).push(arguments)
        }, l.ga.l = 1 * new Date, m = k.createElement("script"), A = k.getElementsByTagName("script")[0], m.async = 1, m.src = "#", A.parentNode.insertBefore(m, A), ga("create", "UA-105587514-1", "auto"), ga("send", "pageview"), f = document.querySelector("#a .a"), r = f.querySelector("#c input"), H = f.getElementsByClassName("e-button")[0], I = f.getElementsByClassName("a-button")[0], J = f.offsetTop, window.addEventListener("scroll", function() {
            window.scrollY > J || "d" == document.getElementById("a").getAttribute("class") ? f.classList.add("g") : f.classList.remove("g")
        }, !1), r.addEventListener("focus", function() {
            this.parentElement.className = "i", f.classList.add("e")
        }, !1), r.addEventListener("blur", function() {
            this.parentElement.className = "", f.classList.remove("e")
        }, !1), H.addEventListener("click", function() {
            r.parentElement.className = "i", f.classList.add("e"), r.focus()
        }, !1), I.addEventListener("click", function() {
            f.classList.add("q"), f.getElementsByClassName("t")[0].addEventListener("click", function() {
                f.classList.remove("q")
            }, !1)
        }, !1), f.querySelectorAll("li a").forEach(function(e) {
            e.addEventListener("click", G, !1)
        }), t = document.querySelectorAll("form#c"), t && t.forEach(function(s) {
            s.addEventListener("submit", function(e) {
                e.preventDefault();
                var a = "/search?q=" + (e = s.querySelector("input").value) + "&max-results=6";
                window.history.pushState({
                    siteReferral: !0,
                    path: a
                }, "", a), h.classList.add("au"), w(n, document.getElementById("a").offsetHeight - 50, 600), g(!0);
                var o = e;
                t.forEach(function(e) {
                    e.querySelector("input").value = o
                }), t[1].querySelector("input").focus(), setTimeout(function() {
                    u(a, function(e, t) {
                        var n = document.getElementById("Blog1");
                        document.title = t, n.innerHTML = e, h.className = "index", z(), q(), g(!1), y(), ga("send", "pageview", window.location.pathname)
                    })
                }, 600)
            }, !1)
        }), document.querySelectorAll(".aj").forEach(function(e) {
            e.addEventListener("click", function(e) {
                var t = this.getBoundingClientRect(),
                    n = window.getComputedStyle(this),
                    a = document.createElement("div");
                a.classList.add("al-ripple"), a.style.height = n.height, a.style.width = n.height, a.style.top = e.clientY - t.top - parseInt(a.style.height) / 2 + "px", a.style.left = e.clientX - t.left - parseInt(a.style.width) / 2 + "px", a.style.background = "#fff", this.appendChild(a), window.setTimeout(function() {
                    a.remove()
                }, 1900)
            })
        }), q(), z(), h.classList.contains("item") && (F(), D(), E()), document.getElementsByClassName("adsbygoogle").length && (k = document.createElement("script"), k.type = "text/javascript", k.async = !0, k.src = "#", m = document.getElementsByTagName("script")[0], m.parentNode.insertBefore(k, m)),
        function() {
            var e = document.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "#", e.onload = function() {
                var e = window.OneSignal || [];
                e.push(function() {
                    e.init({
                        appId: "#"
                    })
                })
            };
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }()
}(document.getElementById("b-wrapper"), document.body);
