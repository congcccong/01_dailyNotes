var wubi86 = [],
    wubi861 = [],
    pinyin = [],
    dazi_pk = [];
(function () {
    function ka(a) { return !1 }

    function la() { return !0 }

    function v(a, d) { var c = d ? d : 0; if (a >= l.length) X(2);
        else { for (var e = 0; e < l.length; e += 2) { var b = l.item(e).getElementsByTagName("input").item(1);
                a == e && "stop" != c ? (b.readOnly = !1, b.onfocus = "", Y(b), b.onkeydown = R, b.onkeyup = R, b.oninput = R, b.onclick = "", b.parentNode.className = "typing typing_on") : "stop" != c ? (b.onfocus = function () { var b = l.item(a).getElementsByTagName("input").item(1);
                    Y(b) }, b.parentNode.className = "typing") : (b.readOnly = !0, b.parentNode.className = "typing", a == e && (b.onclick = function () { confirm("\u6b63\u5904\u4e8e\u6682\u505c\u72b6\u6001\uff0c\u6062\u590d\u6253\u5b57\uff1f") && dazi_pause(G("pause_a")) })) } p = 0 } }

    function R(a) { var d = a || window.event; if (0 < x) return !1; var c = this.parentNode.getElementsByTagName("div").item(0).getElementsByTagName("span").item(0),
            e = this.parentNode.getElementsByTagName("input").item(0);
        a = this.value.length; var b = e.value.length,
            h = M[f],
            na = ma(e.value, this.value),
            d = d.which ? d.which : d.keyCode;
        c.innerHTML = na;
        65 <= d && 90 >= d && 0 == q && S(); if (0 == Z) 8 == d && 2 <= f && aa != f - 2 && 1 != p && 0 == a && (p = 1, f -= 2, v(f), this.oninput = this.onkeyup = this.onkeydown = "", 400 > t(this) - B() && (u = t(this) - 400, G("content").scrollTop = u));
        else { 0 < a && 0 == q && S(); if (1 != p && f < l.length) { 1 == C[f] - a && 0 == M[f] && 0 == h && T++; if (a < b || " " != e.value.substring(b - 1, b)) C[f] = 0 < a ? a > b ? b : a : 0;
                c = U(C) - U(M);
                c - g > V && (V = c - g);
                g = c;
                D = U(ba) } b == a && e.value.substring(b - 1, b) == this.value.substring(a - 1, a) && C.length != f / 2 && 1 != p ? (p = 1, aa = f, f += 2, setTimeout(function () { f < l.length && (l.item(f).getElementsByTagName("input").item(1).value = "");
                v(f) }, 10), this.oninput = this.onkeyup = this.onkeydown = "", 300 < t(this) - B() && (u = t(this) - 300, G("content").scrollTop = u)) : b < a && e.value.substring(b - 1, b) == this.value.substring(b - 1, b) && C.length != f / 2 && 1 != p ? (p = 1, e = this.value, l.item(f).getElementsByTagName("input").item(1).value = e.substr(0, b), f += 2, l.item(f).getElementsByTagName("input").item(1).value = e.substr(b, a - b), v(f), this.oninput = this.onkeyup = this.onkeydown = "", 300 < t(this) - B() && (u = t(this) - 300, G("content").scrollTop = u)) : b <= a && 13 == d && 1 != p && (p = 1, f += 2, v(f), this.oninput = this.onkeyup = this.onkeydown = "", 300 < t(this) - B() && (u = t(this) - 300, G("content").scrollTop = u)) } Z = a }

    function S() { 0 == E && (E = y());
        // W 100ms 计时器
        clearTimeout(W);
        W = setTimeout(S, 1000); var a = G("typing_info_li");
        G("name"); var d = G("time"),
            c = 0 < x ? y() - x : 0;
        q = y() - E - c - ca;
        N = 0 < q ? Math.round((g - D) / q * 6E4 * Math.pow(10, 0)) / Math.pow(10, 0) : 0;
        O = 0 < g ? Math.round((g - D) / g * 100 * Math.pow(10, 0)) / Math.pow(10, 0) : 0;
        q > 5E3 * r.length && (1 <= r.length ? r[r.length] = g - da : r[0] = g, da = g); if ("undefined" != typeof dazi_pk[0]) { for (var c = .001 * q / 5, e = 0, b = 0; b < c + 1; b++) "undefined" != typeof dazi_pk[b] && (e = b == parseInt(c + 1) ? e + dazi_pk[b] * (c - parseInt(c)) : e + parseInt(dazi_pk[b]));
            F = e.toFixed(2); if (0 < F)
                for (var h = b = 0; h < l.length; h += 2) { var f = l.item(h).getElementsByTagName("input").item(0),
                        c = l.item(h).getElementsByTagName("span").item(0),
                        e = l.item(h).getElementsByTagName("span").item(1),
                        f = f.value.length; if (b + f > F) { b = F - b;
                        b = b.toFixed(2);
                        e = e.offsetWidth;
                        c.style.display = "block";
                        c.style.left = parseInt(b / f * e) + "px";
                        c.className = F > g ? "dazi_pk" : "dazi_pk2"; break } else b += parseInt(f), c.style.display = "none" } } 6E4 * d.value > q ? (e = new Date(6E4 * d.value - q), c = 10 > e.getMinutes() ? "0" + e.getMinutes() : e.getMinutes(), e = 10 > e.getSeconds() ? "0" + e.getSeconds() : e.getSeconds(), c = c + ":" + e) : c = "00:00";
        e = parseInt(g / ea * 100);
        a.innerHTML = '\x3cul\x3e\x3cli class\x3d"daojishi"\x3e\x3cdiv\x3e\x3c/div\x3e\u5012\u8ba1\u65f6\x3c/li\x3e\x3cli class\x3d"daojishi_time"\x3e' + c + '\x3c/li\x3e\x3cli class\x3d"sheding"\x3e\u8bbe\u5b9a\u65f6\u95f4\uff1a' + d.value + '\u5206\u949f\x3c/li\x3e\x3cli class\x3d"sudu"\x3e\u901f\u3000\u5ea6\uff1a' + N + " " + ("cn" == G("type").value ? "WPM" : "KPM") + '\x3c/li\x3e\x3cli class\x3d"zhengquelv"\x3e\u6b63\u786e\u7387\uff1a' + O + ' %\x3c/li\x3e\x3cli class\x3d"cuowu"\x3e\u9519\u3000\u8bef\uff1a' + D + ' \u5b57\x3c/li\x3e\x3cli class\x3d"tuige"\x3e\u9000\u3000\u683c\uff1a' + T + ' \u6b21\x3c/li\x3e\x3cli class\x3d"zongzishu"\x3e\u603b\u5b57\u6570\uff1a' + g + ' \u5b57\x3c/li\x3e\x3cli class\x3d"jindu"\x3e\x3cdiv style\x3d"width:' + e + '%"\x3e\x3c/div\x3e\x3c/li\x3e' + ("cn" == G("type").value ? '\x3cli class\x3d"pinyin"\x3e\u62fc\u97f3\uff1a' + H + ("" != z ? "(" + z + ")" : "") + '\x3c/li\x3e\x3cli class\x3d"wubi86"\x3e\u4e94\u7b14\uff1a' + I + ("" != A ? "(" + A + ")" : "") + '\x3c/li\x3e\x3cli class\x3d"wubi86"\x3e\u8bcd\u7ec4\uff1a' + P + ("" != J ? "(" + J + ")" : "") + "\x3c/li\x3e" : "") + "\x3c/ul\x3e";
        fa("typing_info", "r");
        q >= 6E4 * d.value && (clearTimeout(W), X(1)) }

    function X(a) { for (var d = qx1, c = 0, e = 0; e < r.length; e++) c += r[e];
        0 != g - c && (r[r.length] = g - c);
        document.getElementById(d).value = r.join(","); var b = tp1.split(","); if (7 == b.length) { var d = b[0],
                c = b[1],
                e = b[2],
                f = b[3],
                k = b[4],
                l = b[5],
                b = b[6];
            0 == ga && (ga = 1, dazi_pause(G("pause_a")), G("info_form").action += "?" + d + "\x3d" + V + "\x26" + c + "\x3d" + q + "\x26" + e + "\x3d" + N + "\x26" + f + "\x3d" + O + "\x26" + k + "\x3d" + T + "\x26" + l + "\x3d" + g + "\x26" + b + "\x3d" + D, d = document.body.clientHeight || document.body.offsetHeight, G("window_box").style.display = "block", G("window_box").style.height = G("container").offsetHeight + 10 + "px", a = '\x3cdiv class\x3d"info_div" style\x3d"margin-top:' + (d / 2 - 100 + "px") + '"\x3e\x3cdiv class\x3d"typing_end_div2"\x3e' + (1 == a ? "\u8bbe\u5b9a\u65f6\u95f4\u5df2\u5230\uff01" : "\u606d\u559c\u5b8c\u6210\u6253\u5b57\uff01") + "\x3c/div\x3e\x3ch4\x3e\u6d4b\u8bd5\u7ed3\u679c\uff08" + ("cn" == G("type").value ? "\u4e2d\u6587" : "\u82f1\u6587") + '\u6253\u5b57\uff09\x3c/h4\x3e\x3cdiv class\x3d"typing_end_div"\x3e\u65f6\u95f4\uff1a\x3cstrong\x3e' + G("time").value + "\x3c/strong\x3e\u5206\u949f\uff0c\u901f\u5ea6\uff1a\x3cstrong\x3e" + N + "\x3c/strong\x3e" + ("cn" == G("type").value ? "WPM" : "KPM") + "\uff0c\u6b63\u786e\u7387\uff1a\x3cstrong\x3e" + O + '\x3c/strong\x3e%\x3c/div\x3e\x3cdiv class\x3d"button_div"\x3e\x3ca id\x3d"box_button_a" onclick\x3d"G(\'info_form\').submit();" href\x3d"javascript:;" class\x3d"double"\x3e\u7acb\u5373\u67e5\u770b\x3c/a\x3e\x3cspan id\x3d"box_button_span_ts"\x3e\x3c/span\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e', G("window_box").innerHTML = a, ha(10)) } }

    function ha(a) { o = G("box_button_span_ts");
        clearTimeout(__daojishi2);
        0 >= a ? (o.innerHTML = "", G("info_form").submit()) : (o.innerHTML = "\x3cstrong\x3e" + a + "\x3c/strong\x3e\u79d2\u540e\u81ea\u52a8\u8df3\u8f6c", __daojishi2 = setTimeout(function () { ha(a - 1) }, 1E3)) }

    function Y(a) { if ("undefined" != typeof a.createTextRange) { var d = a.createTextRange();
            d.moveStart("character", a.value.length);
            d.collapse(!0);
            d.select() } else a.setSelectionRange(a.value.length, a.value.length), a.focus() }

    function ma(a, d) { str1 = ia(a);
        str2 = ia(d); var c = "",
            e = 0,
            b = null,
            h = 0,
            g = G("type").value,
            m = str1.length,
            n = str2.length; for (k = 0; k < (m > n ? m : n); k++)
            if (k < m) { var q = k < n ? d.substr(k) : null,
                    p = /^[a-z\' ]{1,20}$/;
                str1[k] == str2[k] ? c += '\x3cspan class\x3d"green"\x3e' + str1[k] + "\x3c/span\x3e" : null == str2[k] ? (c += str1[k], 0 == h && 0 < n && (h = k)) : "cn" == g && p.test(q) ? (c += '\x3cspan class\x3d"yellow"\x3e' + str1[k] + "\x3c/span\x3e", 0 == h && 0 < n && (h = k), null == b && (b = n < m ? n - k : m - k)) : (e++, c += '\x3cspan class\x3d"red"\x3e' + str1[k] + "\x3c/span\x3e") }
        if (0 == n || 0 != h) { g = l.item(f).id;
            g = g.substr(2); if ("array" == typeof wubi86[g] || "object" == typeof wubi86[g]) { if (n = wubi86[g], "array" == typeof n[h] || "object" == typeof n[h]) { q = ""; for (p = h; p < h + n[h][0] && p < m; p++) q += str1[p];
                    J = q;
                    P = n[h][1] } } else J = "", P = "-"; "array" == typeof wubi861[g] || "object" == typeof wubi861[g] ? (n = wubi861[g], "undefined" != typeof n[h] ? (A = str1[h], I = n[h]) : (A = "", I = "-")) : (A = "", I = "-"); "array" == typeof pinyin[g] || "object" == typeof pinyin[g] ? (n = pinyin[g], "undefined" != typeof n[h] ? (z = str1[h], H = n[h]) : (z = "", H = "-")) : (z = "", H = "-") } else J = "", P = "-", z = "", H = "-", A = "", I = "-";
        ba[f] = e;
        M[f] = null == b ? 0 : b; return c }

    function U(a) { for (var d = 0, c = 0; c < 2 * a.length && c <= f; c += 2) 0 < a[c] && (d += a[c]); return d }

    function ia(a) { for (var d = [], c = 0; c < a.length; c++) d[c] = a.substr(c, 1), "\x3c" == d[c] && (d[c] = "\x26lt;"), "\x3e" == d[c] && (d[c] = "\x26gt;"); return d }

    function y() { return (new Date).getTime() }

    function fa(a, d) { var c = G(a); if (c) { t(c);
            B(); var e;
            e = window.innerHeight && window.scrollMaxY ? document.body.scrollWidth : document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollWidth : document.body.offsetWidth; var b = l.item(0).offsetWidth;
            c.style.marginRight = "0px";
            c.style.right = 240 < (e - b) / 2 ? "r" == d ? Math.round((e - b) / 2 - 240) + "px" : Math.round(e - (e - b) / 2 + 10) + "px" : "r" == d ? "10px" : e - 154 + "px" } }

    function B() { return G("content").scrollTop }

    function t(a) { var d = a.offsetTop; for (a = a.offsetParent; null !== a;) d += a.offsetTop, a = a.offsetParent; return d }

    function oa() { for (var a = 0, d = 0, c = 0, e = 1; e < l.length; e += 2) { var b = l.item(e).getElementsByTagName("span"); if (1 == b.length) { var f = b.item(0).offsetWidth,
                    b = b.item(0).innerHTML.replace(/(\s{1})$/g, "");
                0 < b.length && (c += b.length);
                f > a && (a = f, d = e) } } ea = c; return [d, a] }

    function ja(a) { a = a || window.event; var d = a.target || a.srcElement,
            c = d.type || d.getAttribute("type"),
            e = d.getAttribute("readonly"),
            d = d.getAttribute("enabled"); if (8 == a.keyCode && "password" != c && "text" != c && "textarea" != c || !(8 != a.keyCode || "password" != c && "text" != c && "textarea" != c || 1 != (null == e ? !1 : e) && 1 == (null == d ? !0 : d))) return !1 } var l = G("content").getElementsByTagName("div"),
        f = 0,
        E = 0,
        x = 0,
        ca = 0,
        C = [],
        ba = [],
        M = [],
        u = 0,
        aa = -1,
        p = 0,
        r = [],
        da = 0,
        P = "",
        J = "",
        I = "",
        A = "",
        H = "",
        z = "",
        F = 0,
        Z = 0,
        N = 0,
        O = 0,
        q = 0,
        T = 0,
        V = 0,
        g = 0,
        D = 0,
        K = null,
        ga = 0,
        ea = 0;
    window.onscroll = function () { G("content").scrollTop = u };
    document.body.onpaste = function () { return !1 };
    document.body.oncopy = function () { return !1 };
    document.body.oncut = function () { return !1 };
    document.onselectstart = new Function("return false");
    window.sidebar && (document.onmousedown = ka, document.onclick = la); var W = null;
    dazi_pause = function (a) { "pause" == a.className ? (a.innerHTML = "\u7ee7\u7eed", a.className = "pause2", 0 < E && (x = y()), v(f, "stop")) : (a.innerHTML = "\u6682\u505c", a.className = "pause", 0 < E && (ca += y() - x, x = 0), v(f)) };
    close_light = function (a) { "light" == a.className ? (a.innerHTML = "\u5f00\u706f", a.className = "light2", document.body.className = "dazi_style_black") : (a.innerHTML = "\u5173\u706f", a.className = "light", document.body.className = "") };
    __daojishi2 = null; var m = { o: null, init: function (a) { a.onmousedown = this.start }, start: function (a) { a = m.fixEvent(a);
            a.preventDefault && a.preventDefault();
            m.o = this;
            this.x = a.clientX - m.o.offsetLeft;
            this.y = a.clientY - m.o.offsetTop;
            document.onmousemove = m.move;
            document.onmouseup = m.end }, move: function (a) { a = m.fixEvent(a); var d;
            d = a.clientX - m.o.x;
            a = a.clientY - m.o.y;
            m.o.style.left = d + "px";
            m.o.style.top = a + "px" }, end: function (a) { m.fixEvent(a);
            m.o = document.onmousemove = document.onmouseup = null }, fixEvent: function (a) { a || (a = window.event, a.target = a.srcElement, a.layerX = a.offsetX, a.layerY = a.offsetY); return a } };
    typing_continue = function () { clearTimeout(K);
        K = setTimeout("typing_continue()", 31E5); var a = y(),
            d = new AjaxClass;
        d.Method = "GET";
        d.Url = "jingsai_do.php?do\x3dtyping_continue\x26start_page\x3d" + G("start_page").value + "\x26ssid\x3d" + G("ssid").value + "\x26t\x3d" + a;
        d.Async = !0;
        d.Loading = function () {};
        d.CallBack = function (a) { clearTimeout(K);
            K = setTimeout("typing_continue()", 3E6) };
        d.Send() }; var K = setTimeout("typing_continue()", 3E6),
        w = document.body.clientHeight || document.body.offsetHeight;
    0 < w && (G("content").style.height = w - 180 + "px"); if (1 < l.length) { var w = document.documentElement.clientWidth,
            Q = G("content").offsetWidth;
        w > Q && (w -= (w - Q) / 2); for (var L = oa(), k = 1; 10 >= k; k++) { var pa = l.item(L[0]).getElementsByTagName("span").item(0);
            L[1] = pa.offsetWidth; if (0 < Q && 0 < L[1] && (L[1] > Q - 60 || L[1] > w - 240)) G("content").className = "typing_content font" + k;
            else break } } v(f);
    G("loading").style.display = "none";
    G("typing_info").style.display = "block";
    m.init(document.getElementById("typing_info"));
    fa("typing_info", "r");
    document.onkeypress = ja;
    document.onkeydown = ja })();