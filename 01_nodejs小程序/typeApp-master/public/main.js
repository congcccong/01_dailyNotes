function F(a) { return document.getElementById(a).value }

function G(a) { return document.getElementById(a) }
var art_sys = [],
    art_my = [],
    art_tag = [];
(function () {
    function a() { return G("radio_en").checked ? "en" : G("radio_cn").checked ? "cn" : G("radio_group") ? G("radio_group").checked ? "group" : "group2" : "" }

    function c(b, c) { var h = a(); if ("en" == h || "cn" == h) { var h = document.getElementById("art_tag_" + h).getElementsByTagName("a"),
                d = h[0].offsetLeft,
                e = h[0].offsetTop;
            (new Date).getTime(); for (var f = 1; f < h.length; f++) { var g = h[f].className,
                    g = g.replace(/\sstag/i, "");
                h[f].className = b > d - 140 && c > e + 35 * f - 17 && b < d + 140 && c < e + 35 * f + 17 ? g + " stag" : g } } }

    function d(b) { var c = a(); if ("en" == c || "cn" == c) { for (var d = document.getElementById("art_tag_" + c).getElementsByTagName("a"), e = 0, m = 0, f = 1; f < d.length; f++) { var g = d[f].className;
                g.match(/\sstag/i) && (e = d[f].id);
                g.match(/^on/i) && (m = d[f].id) } if (e)
                if (e.match(/new/i)) show_tag(c, "n", b);
                else if (0 != e && 0 != m && e != m) { var d = new Date,
                    l = parseInt(b.substr(4, b.length)),
                    k = e.substr(4, 2),
                    n = parseInt(e.substr(7, e.length)),
                    p = parseInt(m.substr(7, m.length));
                G("tag_" + c + "_" + n).className = "loading";
                b = new AjaxClass;
                b.Method = "GET";
                b.Url = "jingsai_do.php?do\x3dart_to_tag\x26art\x3d" + l + "\x26tag\x3d" + n + "\x26tag2\x3d" + p + "\x26t\x3d" + d.getTime();
                b.Async = !0;
                b.Loading = function () {};
                b.CallBack = function (b) { if (b)
                        if ("ok" == b) { for (var a in art_my[k])
                                for (b = 0; b < art_my[k][a].length; b++) art_my[k][a][b][0] == l && (art_my[k][n].push([art_my[k][a][b][0], art_my[k][a][b][1], art_my[k][a][b][2], art_my[k][a][b][3]]), art_my[k][a].splice(b, 1));
                            show_tag(k, p) } else alert(b) };
                b.Send() } } } var e = [],
        k = [],
        l = [];
    e.en = "s";
    e.cn = "s";
    k.en = "21";
    k.cn = "1";
    loading_select_text = function (b, a) { if ("en" == b || "cn" == b) { var c = 0; "" == a && (a = k[b]); if (40 >= a)
                for (var h = 0; h < art_sys[b].length; h++) { if (art_sys[b][h][0] == a) { e[b] = "s";
                        k[b] = a;
                        select_text(G("radio_" + b), a, art_sys[b][h][1]);
                        c = 1; break } } else
                    for (var d in art_my[b])
                        for (h = 0; h < art_my[b][d].length; h++)
                            if (art_my[b][d][h][0] == a) { e[b] = d;
                                k[b] = a;
                                select_text(G("radio_" + b), a, art_my[b][d][h][1]);
                                c = 1; break }
            0 == c && select_text(G("radio_" + b), art_sys[b][0][0], art_sys[b][0][1]) } else "group" == b ? G("jingsai_a_" + a) ? (select_art_show(), G("jingsai_a_" + a).click()) : (c = document.getElementById("select_v_group").getElementsByTagName("a"), 0 < c.length && (select_art_show(), c.item(0).click())) : "group2" != b && select_text(G("radio_en"), 21, "a girl selling matches") };
    select_suiji = function () { var b = a(),
            c = [],
            d = 0; if ("en" == b || "cn" == b) { for (var e = 0; e < art_sys[b].length; e++) c[d] = [art_sys[b][e][0], art_sys[b][e][1]], d++; for (var g in art_my[b])
                for (e = 0; e < art_my[b][g].length; e++) c[d] = [art_my[b][g][e][0], art_my[b][g][e][1]], d++;
            d = Math.ceil(Math.random() * c.length) - 1;
            select_text(G("radio_" + b), c[d][0], c[d][1]) } else "group" == b && (b = document.getElementById("select_v_group").getElementsByTagName("a"), d = Math.ceil(Math.random() * (b.length - 1)) - 1, select_art_show(), b.item(d).click()) };
    select_text = function (b, a, c, d) { b = b.value;
        G("select_i").innerHTML = "";
        G("select_art_v").value = "";
        a = a ? a : 0;
        c = c ? c : "";
        d = d ? d : "";
        0 < a && "" != c && (G("select_i").innerHTML = c, G("select_art_v").value = a, "" != d ? (G("time").value = d, G("time").disabled = "disabled", G("dazi_continue").disabled = "disabled", G("dazi_pk_my").disabled = "disabled") : G("time") && (G("time").disabled = "", G("dazi_continue").disabled = "", G("dazi_pk_my").disabled = "")); "group2" == b ? (G("select_title").innerHTML = "\u9080\u8bf7\u7801\uff1a", G("group_num").style.display = "inline-block", G("group_num_ts").style.display = "inline-block", G("select_i").style.display = "none", G("select_b").style.display = "none", G("time").disabled = "disabled", G("dazi_continue").disabled = "disabled", G("dazi_pk_my").disabled = "disabled", G("suiji_a").style.display = "none") : (G("select_title") && (G("select_title").innerHTML = "\u9009\u62e9\u6587\u7ae0\uff1a"), G("select_i").style.display = "block", G("select_b").style.display = "block", G("group_num") && (G("group_num").style.display = "none", G("group_num_ts").style.display = "none"), G("suiji_a").style.display = "");
        b = G("select_b"); "select_b" != b.className && select_art_show() };
    select_art_show = function () { var b = G("select_b"),
            c = b.className,
            d = a();
        G("select_v_en").style.display = "none";
        G("select_v_cn").style.display = "none";
        G("select_v_group") && (G("select_v_group").style.display = "none"); var g = G("select_v_" + d); "select_b" == c ? (g.style.display = "block", b.className = "select_b_on") : (g.style.display = "none", b.className = "select_b"); "en" != d && "cn" != d || show_tag(d, e[d]) };
    show_tag = function (b, a, c) { var d = 1,
            h = '\x3ca href\x3d"javascript:;" onclick\x3d"show_tag(\'' + b + "','s')\" " + ("s" == a ? ' class\x3d"on"' : "") + ' id\x3d"tag_' + b + '_s"\x3e\u7cfb\u7edf\u6587\u7ae0\x3c/a\x3e'; if (art_my.hasOwnProperty(b)) { var f = art_my[b].hasOwnProperty(0) ? art_my[b][0].length : 0,
                h = h + ('\x3ca href\x3d"javascript:;" onclick\x3d"show_tag(\'' + b + "',0)\" " + (0 == a ? ' class\x3d"on"' : "") + ' id\x3d"tag_' + b + '_0"\x3e\u6211\u7684\u6587\u7ae0\x3cspan\x3e(' + f + ")\x3c/span\x3e\x3c/a\x3e");
            d++ } for (f = 0; f < art_tag.length; f++)
            if ("array" == typeof art_my[b][art_tag[f][0]] || "object" == typeof art_my[b][art_tag[f][0]]) h += '\x3ca href\x3d"javascript:;" onclick\x3d"show_tag(\'' + b + "'," + art_tag[f][0] + ')" ' + (a == art_tag[f][0] ? ' class\x3d"on"' : "") + ' id\x3d"tag_' + b + "_" + art_tag[f][0] + '"\x3e' + art_tag[f][1] + "\x3cspan\x3e(" + art_my[b][art_tag[f][0]].length + ")\x3c/span\x3e\x3c/a\x3e", d++;
        art_my.hasOwnProperty(b) && (h += '\x3ca id\x3d"tag_' + b + '_new" href\x3d"javascript:;" onclick\x3d"show_tag(\'' + b + "','n')\" " + ("n" == a ? ' class\x3d"on"' : "") + ' class\x3d"new"\x3e\u65b0\u5206\u7c7b\x3c/a\x3e', d++);
        G("art_tag_" + b).innerHTML = h;
        9 < d && (h = 420 < 35 * d ? 420 : 35 * d, G("select_v_" + b).style.height = h + "px");
        l = [];
        h = '\x3cdiv class\x3d"ul"\x3e'; if ("s" == a) { if ("array" == typeof art_sys[b] || "object" == typeof art_sys[b])
                for (f = 0; f < art_sys[b].length; f++) h += '\x3ca class\x3d"sys' + (art_sys[b][f][0] == k[b] ? " on" : "") + '" href\x3d"javascript:;" onclick\x3d"select_art(this,' + art_sys[b][f][0] + ')"\x3e' + art_sys[b][f][1] + "\x3c/a\x3e" } else if ("n" == a)
            if (c = c ? c : "", "" == c) { h += '\x3cdiv class\x3d"tpis"\x3e\x3cspan\x3e\u6b65\u9aa4(1/2)\uff1a\u76f4\u63a5\u9009\u62e9\u5e38\u7528\u5206\u7c7b\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5206\u7c7b\u540d\u79f0\uff01\x3c/span\x3e\x3c/div\x3e'; if ("array" == typeof tag_all[b] || "object" == typeof tag_all[b])
                    for (f = 0; f < tag_all[b].length; f++) h += '\x3ca class\x3d"tag" href\x3d"javascript:;" onclick\x3d"new_tag(\'' + b + "','" + tag_all[b][f][1] + "'," + tag_all[b][f][0] + ')"\x3e' + tag_all[b][f][1] + "\x3c/a\x3e";
                h += '\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3cdiv class\x3d"tag_form"\x3e\u81ea\u5b9a\u4e49\u5206\u7c7b\uff1a\x3cinput type\x3d"text" id\x3d"tag_form_text_' + b + '"\x3e\x3c/input\x3e\x3cinput onclick\x3d"new_tag(\'' + b + "',G('tag_form_text_" + b + '\').value,0)" type\x3d"button" value\x3d" \u4e0b\u4e00\u6b65 "\x3e\x3c/input\x3e\x3c/div\x3e' } else { h += '\x3cdiv class\x3d"tpis"\x3e\x3cspan\x3e\u6587\u7ae0\u5c06\u79fb\u52a8\u5230\u65b0\u5206\u7c7b\uff1a\u76f4\u63a5\u9009\u62e9\u5e38\u7528\u5206\u7c7b\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5206\u7c7b\u540d\u79f0\uff01\x3c/span\x3e\x3c/div\x3e'; if ("array" == typeof tag_all[b] || "object" == typeof tag_all[b])
                    for (f = 0; f < tag_all[b].length; f++) h += '\x3ca class\x3d"tag" href\x3d"javascript:;" onclick\x3d"new_tag_art(\'' + b + "','" + tag_all[b][f][1] + "'," + tag_all[b][f][0] + "," + c.substr(4) + ')"\x3e' + tag_all[b][f][1] + "\x3c/a\x3e";
                h += '\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3cdiv class\x3d"tag_form"\x3e\u81ea\u5b9a\u4e49\u5206\u7c7b\uff1a\x3cinput type\x3d"text" id\x3d"tag_form_text" value\x3d""\x3e\x3c/input\x3e\x3cinput onclick\x3d"new_tag_art(\'' + b + "',G('tag_form_text').value,0," + c.substr(4) + ')" type\x3d"button" value\x3d" \u786e\u5b9a\u6dfb\u52a0 "\x3e\x3c/input\x3e\x3c/div\x3e' } else if ("array" == typeof art_my[b][a] || "object" == typeof art_my[b][a])
            for (h = 0 == art_my[b][a].length ? h + '\x3cdiv class\x3d"tpis"\x3e\x3cspan\x3e\u63d0\u793a\uff1a\u8d76\u5feb\u70b9\u51fb\u4e0b\u9762\u7684\u94fe\u63a5\u53bb\u6dfb\u52a0\u6216\u6536\u85cf\u66f4\u591a\u6587\u7ae0\u5427\uff01\x3c/span\x3e\x3c/div\x3e' : h + '\x3cdiv class\x3d"tpis"\x3e\x3cspan\x3e\u63d0\u793a\uff1a\u53ef\u62d6\u62fd\u6587\u7ae0\u81f3\u5de6\u4fa7\u5206\u7c7b\uff01\x3c/span\x3e\x3c/div\x3e', f = 0; f < art_my[b][a].length; f++) h += '\x3ca id\x3d"art_' + art_my[b][a][f][0] + '" class\x3d"' + (1 == art_my[b][a][f][2] ? "ren" : "") + (art_my[b][a][f][0] == k[b] ? " on" : "") + '" href\x3d"javascript:;" onclick\x3d"select_art(this,' + art_my[b][a][f][0] + ')"\x3e' + art_my[b][a][f][1] + "\x3c/a\x3e", l[l.length] = art_my[b][a][f][0];
        h += '\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3c/div\x3e'; "n" != a && art_my.hasOwnProperty(b) && (h += '\x3cdiv class\x3d"fabu"\x3e\x3ca href\x3d"my_typing.php?do\x3dartnew" class\x3d"add"\x3e\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6587\u7ae0\x3c/a\x3e\x3ca href\x3d"art_0_0_' + ("en" == b ? "1" : "2") + '.html" class\x3d"fav"\x3e\u66f4\u591a' + ("en" == b ? "\u82f1\u6587" : "\u4e2d\u6587") + '\u6587\u7ae0\x3c/a\x3e\x3ca href\x3d"my_typing.php?do\x3dart" class\x3d"edit"\x3e\u4fee\u6539/\u5220\u9664\u6587\u7ae0\x3c/a\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3c/div\x3e');
        G("art_ul_" + b).innerHTML = h;
        e[b] = a; for (b = 0; b < l.length; b++) a = document.getElementById("art_" + l[b]), g.init(a) };
    select_art = function (b, a, c) { c = c ? c : "";
        G("select_i").innerHTML = b.innerHTML;
        G("select_art_v").value = a; "" != c && (G("time").value = c);
        select_art_show() }; var g = { o: null, init: function (b) { b.onmousedown = this.start }, start: function (b) { b = g.fixEvent(b);
            b.preventDefault && b.preventDefault();
            g.o = this;
            this.x = b.clientX - g.o.offsetLeft;
            this.y = b.clientY - g.o.offsetTop;
            document.onmousemove = g.move;
            document.onmouseup = g.end }, move: function (b) { b = g.fixEvent(b); var a;
            a = b.clientX - g.o.x;
            b = b.clientY - g.o.y;
            g.o.style.position = "absolute";
            g.o.style.left = a + "px";
            g.o.style.top = b + "px";
            g.o.onclick = function () {};
            c(a, b) }, end: function (b) { b = g.fixEvent(b);
            g.o.style.position = "";
            setTimeout(function () { g.o.onclick = function () { select_art(this, this.id.substr(4, this.length)) } }, 100);
            d(g.o.id);
            document.onmousemove = document.onmouseup = null }, fixEvent: function (b) { b || (b = window.event, b.target = b.srcElement, b.layerX = b.offsetX, b.layerY = b.offsetY); return b } };
    new_tag = function (b, a, c) { if ("" == a) alert("\u5206\u7c7b\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01");
        else if (2 > a.length || 6 < a.length) alert("\u5206\u7c7b\u540d\u79f0\u957f\u5ea6\u5e94\u4e3a2-6\u4e2a\u5b57\u7b26\uff01");
        else if ("array" == typeof art_my[b][0] || "object" == typeof art_my[b][0]) { var d;
            d = '\x3cdiv class\x3d"ul"\x3e' + ('\x3cdiv class\x3d"tpis"\x3e\u6b65\u9aa4(2/2)\uff1a\u8bf7\u9009\u62e9\u8981\u6dfb\u52a0\u5230\u5206\u7c7b\u3010' + a + "\u3011\u7684\u6587\u7ae0\uff08\u53ef\u591a\u9009\uff09\uff01\x3c/div\x3e"); for (var e = 0; e < art_my[b][0].length; e++) d += '\x3ca href\x3d"javascript:;" id\x3d"art_' + art_my[b][0][e][0] + '" onclick\x3d"select_art_to_tag(this)"\x3e' + art_my[b][0][e][1] + "\x3c/a\x3e";
            d = d + ('\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3cdiv class\x3d"tag_form"\x3e\u9009\u62e9\u5b8c\u6210\uff0c\u5c06\u9009\u62e9\u6587\u7ae0\u79fb\u52a8\u5230\u65b0\u7684\u5206\u7c7b\uff01\x3cinput onclick\x3d"new_tag_art(\'' + b + "','" + a + "','" + c + '\')" type\x3d"button" value\x3d" \u63d0\u4ea4 "\x3e\x3c/input\x3e\x3c/div\x3e') + '\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3c/div\x3e';
            G("art_ul_" + b).innerHTML = d } else alert("\u60a8\u6ca1\u6709\u672a\u5206\u7c7b\u7684\u6587\u7ae0\uff0c\u5148\u53bb\u6536\u85cf\u6216\u6dfb\u52a0\u6587\u7ae0\u518d\u5206\u7c7b\u5427\uff01") };
    select_art_to_tag = function (b) { b.className = "check" == b.className ? "" : "check" };
    new_tag_art = function (b, a, c, d) { var e = d ? [d] : ""; if ("" == e) { d = document.getElementById("art_ul_" + b).getElementsByTagName("a"); for (var e = [], f = 0; f < d.length; f++) "check" == d[f].className && e.push(d[f].id.substr(4)) } if (0 == e.length) return alert("\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u6587\u7ae0\uff01"), !1;
        d = new Date;
        f = new AjaxClass;
        f.Method = "GET";
        f.Url = "jingsai_do.php?do\x3dnew_tag_art\x26art\x3d" + e.join(",") + "\x26type\x3d" + b + "\x26tag_name\x3d" + encodeURI(a) + "\x26tag_id\x3d" + c + "\x26t\x3d" + d.getTime();
        f.Async = !0;
        f.Loading = function () {};
        f.CallBack = function (a) { a && ("ok" == a ? (alert("\u6210\u529f\u6dfb\u52a0\uff01"), window.location = "?do\x3dgroupnew\x26fav_type\x3d" + b + "\x26fav_id\x3d" + e[0] + "\x26load_tag\x3d" + c) : alert(a)) };
        f.Send() };
    set_star = function (b) { for (var a = 1; 5 >= a; a++) a <= b ? (G("art_star_" + a).className = "tj_star on", a == b ? G("star_text_" + a).style.display = "block" : G("star_text_" + a).style.display = "none") : (G("art_star_" + a).className = "tj_star", G("star_text_" + a).style.display = "none") } })();

function resetname() { var a = document.body.clientHeight || document.body.offsetHeight;
    G("window_box").style.display = "block";
    G("window_box").style.height = G("container").offsetHeight + 10 + "px";
    a = '\x3cdiv class\x3d"info_div" style\x3d"margin-top:' + (a / 2 - 75 + getScrollTop() + "px") + '"\x3e\x3ch4\x3e\u66f4\u6362\u7528\u6237\u540d\x3c/h4\x3e\x3cdiv class\x3d"newname_div"\x3e\x3cspan\x3e\u65b0\u7528\u6237\u540d\uff1a\x3c/span\x3e\x3cinput id\x3d"new_username" value\x3d"" maxlength\x3d"20"\x3e\x3c/div\x3e\x3cdiv class\x3d"button_div"\x3e\x3ca href\x3d"javascript:;" onclick\x3d"document.location \x3d \'?name\x3d\'+encodeURI(G(\'new_username\').value)"\x3e\u4fee\u6539\x3c/a\x3e\x3ca href\x3d"javascript:;" onclick\x3d"close_window_box()" class\x3d"quxiao"\x3e\u53d6\u6d88\x3c/a\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
    G("window_box").innerHTML = a;
    G("new_username").focus() }

function jiebang_email(a) { var c = document.body.clientHeight || document.body.offsetHeight; if ("email" == a) var d = "\u89e3\u9664\u7ed1\u5b9a\u90ae\u7bb1",
        e = '\x3cdiv class\x3d"newname_div" style\x3d"text-align:right;"\x3e\x3ca href\x3d"javascript:;" onclick\x3d"qr_code_img(\'qr_out_email\',\'reload\');"\x3e\u5fae\u4fe1\u626b\u7801\u89e3\u7ed1\u90ae\u7bb1\x3c/a\x3e\x3c/div\x3e';
    else d = "\u9a8c\u8bc1\u90ae\u7bb1\u89e3\u7ed1\u5fae\u4fe1", e = "";
    G("window_box").style.display = "block";
    G("window_box").style.height = G("container").offsetHeight + 10 + "px";
    a = '\x3cdiv class\x3d"info_div" style\x3d"margin-top:' + (c / 2 - 75 + getScrollTop() + "px") + '"\x3e\x3ch4\x3e' + d + '\x3c/h4\x3e\x3cdiv class\x3d"newname_div"\x3e\x3cspan\x3e\u9a8c\u8bc1\u7801\uff1a\x3c/span\x3e\x3cinput id\x3d"email_code2" value\x3d"" maxlength\x3d"6"\x3e \x3cinput type\x3d"button" onclick\x3d"send_email(this,3)" class\x3d"send_mail_link" value\x3d"\u53d1\u9001\u9a8c\u8bc1\u7801\u5230\u90ae\u7bb1" /\x3e' + e + '\x3c/div\x3e\x3cdiv class\x3d"button_div"\x3e\x3ca href\x3d"javascript:;" onclick\x3d"document.location \x3d \'my_do.php?do\x3djiebang_email\x26type\x3d' + a + '\x26email_code\x3d\'+encodeURI(G(\'email_code2\').value)"\x3e\u89e3\u9664\u7ed1\u5b9a\x3c/a\x3e\x3ca href\x3d"javascript:;" onclick\x3d"close_window_box()" class\x3d"quxiao"\x3e\u53d6\u6d88\x3c/a\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
    G("window_box").innerHTML = a;
    G("email_code2").focus() } __daojishi2 = null;

function qr_code_img(a) { var c, d, e, k = 220,
        l = 1 < arguments.length ? arguments[1] : ""; switch (a) {
        case "qr":
            c = "\u626b\u7801\u7ed1\u5b9a\u5fae\u4fe1";
            d = "\u4f7f\u7528\u5fae\u4fe1\u626b\u7801\uff0c\u81ea\u52a8\u5b8c\u6210\u7ed1\u5b9a\uff01";
            e = "reload" == l ? "location.reload();" : "close_window_box()"; break;
        case "login":
            c = "\u5fae\u4fe1\u626b\u7801\u767b\u5f55";
            d = "\u4f7f\u7528\u5fae\u4fe1\u626b\u7801\uff0c\u7136\u540e\u70b9\u5b8c\u6210\u5373\u53ef\u767b\u5f55\uff01";
            e = "location\x3d'login.php?do\x3dwxlogin'"; break;
        case "qr_out":
            c = "\u626b\u7801\u89e3\u7ed1\u5fae\u4fe1";
            d = '\u4f7f\u7528\u5fae\u4fe1\u626b\u7801\uff0c\u89e3\u9664\u7ed1\u5b9a\uff01 \x3ca href\x3d"javascript:;" onclick\x3d"jiebang_email(\'weixin\');"\x3e\u9a8c\u8bc1\u90ae\u7bb1\u89e3\u7ed1\u5fae\u4fe1\x3c/a\x3e';
            e = "reload" == l ? "location.reload();" : "close_window_box()"; break;
        case "qr_out_email":
            c = "\u626b\u7801\u89e3\u7ed1\u90ae\u7bb1";
            d = "\u4f7f\u7528\u5fae\u4fe1\u626b\u7801\uff0c\u89e3\u9664\u7ed1\u5b9a\x3cstrong\x3e\u90ae\u7bb1\x3c/strong\x3e\uff01";
            e = "reload" == l ? "location.reload();" : "close_window_box()"; break;
        case "qr_fav":
            c = "\u8bf7\u5148\u7ed1\u5b9a\u5fae\u4fe1";
            d = "\u60a8\u7684\u8d26\u53f7\u5b58\u5728\u5b89\u5168\u9690\u60a3\uff0c\u8bf7\u4f7f\u7528\u5fae\u4fe1\u626b\u7801\uff0c\u7ed1\u5b9a\u5fae\u4fe1\uff01\x3cbr /\x3e\u7ed1\u5b9a\u540e\u76f4\u63a5\u6536\u85cf\u6587\u7ae0\uff0c\u4e0d\u518d\u5f39\u51fa\u6b64\u6846\uff01";
            e = "return false;"; break;
        case "wxzf":
            c = "\u626b\u7801\u652f\u4ed8\x3cstrong\x3e" + ("11" == l ? "49.9" : "21" == l ? "29.9" : "31" == l ? "19.9" : "41" == l ? "4.9" : "") + "\x3c/strong\x3e\u5143\uff0c\u81ea\u52a8\u5f00\u901aVIP";
            d = '\x3cimg src\x3d"style/images_new/zf_weixin.png" style\x3d"width:260px; height:86px; margin-top\x3d-10px;" /\x3e';
            e = "location.reload();";
            k = 280; break;
        default:
            return !1 } var g = document.body.clientHeight || document.body.offsetHeight;
    G("window_box").style.display = "block";
    G("window_box").style.height = G("container").offsetHeight + 10 + "px";
    c = '\x3cdiv class\x3d"info_div" style\x3d"margin-top:' + (g / 2 - k + getScrollTop() + "px") + '"\x3e\x3ch4\x3e' + c + '\x3ca href\x3d"javascript:;" onclick\x3d"close_window_box()" class\x3d"close_window"\x3e\u00d7\x3c/a\x3e\x3c/h4\x3e\x3cdiv class\x3d"newname_div qr_div"\x3e\x3cimg onclick\x3d"qr_code_img(\'' + a + "'" + ("" != l ? ",'" + l + "'" : "") + ')" class\x3d"qr_img" src\x3d"wx_code_img.php?do\x3d' + a + "\x26r\x3d" + l + "\x26t\x3d" + (new Date).getTime() + '" /\x3e\x3cdiv class\x3d"qr_tishi"\x3e' + d + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"button_div"\x3e\x3ca id\x3d"qr_button1" href\x3d"javascript:;" onclick\x3d"' + e + '" class\x3d"double"\x3e\u5b8c\u6210\x3c/a\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
    G("window_box").innerHTML = c; "qr_fav" == a && daojishi2(7, l) }

function daojishi2(a, c) { o = G("qr_button1");
    clearTimeout(__daojishi2);
    0 >= a ? (o.onclick = function () { location = c }, o.style.background = "#25a6ef", o.innerHTML = "\u5b8c\u6210") : (o.onclick = function () { return !1 }, o.style.background = "#999", o.innerHTML = "\u7b49\u5f85 " + a + " \u79d2", __daojishi2 = setTimeout(function () { daojishi2(a - 1, c) }, 1E3)) }

function close_window_box() { G("window_box").innerHTML = "";
    G("window_box").style.display = "none" }

function getScrollTop() { var a = 0;
    document.documentElement && document.documentElement.scrollTop ? a = document.documentElement.scrollTop : document.body && (a = document.body.scrollTop); return a }

function select_style(a) { var c = G("select_style");
    G("style_black").setAttribute("class", "style_black");
    c.value == a ? (c.value = "0", G("style_" + a).setAttribute("class", "style_" + a)) : (c.value = a, G("style_" + a).setAttribute("class", "style_" + a + " style_on")) }

function check_set() { var a = G("name"),
        c = G("pass_old"),
        d = G("pass1"),
        e = G("pass2"),
        k = G("email"),
        l = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        g = !0; "" == a.value ? (set_info(a, "\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01", "login_info"), g = !1) : set_info(a, "", "info");
    0 < k.value.length && (l.test(k.value) ? set_info(k, "", "info") : (set_info(k, "E-mail\u683c\u5f0f\u4e0d\u6b63\u786e\uff01", "login_info"), g = !1));
    c && 0 < c.value.length && (6 > c.value.length ? (set_info(c, "\u5bc6\u7801\u4e0d\u80fd\u5c0f\u4e8e6\u4f4d\uff01", "login_info"), g = !1) : set_info(c, "", "info"));
    0 < d.value.length && (6 > d.value.length ? (set_info(d, "\u5bc6\u7801\u4e0d\u80fd\u5c0f\u4e8e6\u4f4d\uff01", "login_info"), g = !1) : c ? c.value == d.value && (set_info(d, "\u65b0\u5bc6\u7801\u4e0d\u80fd\u548c\u65e7\u5bc6\u7801\u76f8\u540c\uff01", "login_info"), g = !1) : set_info(d, "", "info"), d.value != e.value ? (set_info(e, "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4\uff01", "login_info"), g = !1) : set_info(e, "", "info")); return g ? !0 : !1 }

function set_info(a, c, d) { a = a.parentNode.parentNode.getElementsByTagName("span").item(2);
    a.innerHTML = c;
    a.className = d }

function form_focus() { var a = G("name"),
        c = G("pass");
    a && ("" == a.value ? a.focus() : c && c.focus()) }
var __daojishi = null;

function send_email(a, c) { if (2 == c) var d = "\x26type\x3d2\x26code_img\x3d" + G("code_img").value,
        e = "\x26email\x3d" + G("email").value;
    else 3 == c ? (d = "\x26type\x3d3", e = "") : 4 == c ? (d = "\x26type\x3d4", e = "") : (d = "\x26type\x3d1", e = "\x26email\x3d" + G("email").value);
    daojishi(a, 0, c); var k = new Date,
        l = new AjaxClass;
    l.Method = "GET";
    l.Url = "jingsai_do.php?do\x3demail_yz" + e + d + "\x26t\x3d" + k.getTime();
    l.Async = !0;
    l.Loading = function () {};
    l.CallBack = function (d) { "ok" == d ? alert("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\u81f3\u60a8\u7684\u90ae\u7bb1\uff0c\u8bf7\u767b\u5f55\u90ae\u7bb1\u67e5\u6536\u90ae\u4ef6\uff01\n\u5982\u679c\u3010\u6536\u4ef6\u7bb1\u3011\u4e2d\u6ca1\u6709\u90ae\u4ef6\uff0c\u8bf7\u68c0\u67e5\u3010\u5783\u573e\u4fe1\u7bb1\u3011\uff0c\u5e76\u5c06\u90ae\u4ef6\u79fb\u56de\u3010\u6536\u4ef6\u7bb1\u3011\uff0c\u8c22\u8c22\uff01") : (clearTimeout(__daojishi), daojishi(a, 60, c), alert(d)) };
    l.Send() }

function check_email_change(a, c) { a.value != c ? G("email_yz_li").style.display = "block" : G("email_yz_li").style.display = "none" }

function daojishi(a, c, d) { clearTimeout(__daojishi);
    60 <= c ? (a.onclick = function () { send_email(a, d) }, a.style.background = "", a.value = "\u53d1\u9001\u9a8c\u8bc1\u7801\u5230\u90ae\u7bb1") : (a.onclick = function () { return !1 }, a.style.background = "#999", a.value = "\u7b49\u5f85 " + (60 - c) + " \u79d2\u540e\u91cd\u65b0\u53d1\u9001", __daojishi = setTimeout(function () { daojishi(a, c + 1, d) }, 1E3)) }

function show_sys_art(a) { document.location = a.checked ? "my_typing.php?do\x3dart\x26myart\x3d1" : "my_typing.php?do\x3dart" }

function show_order_art(a) { document.location = "art_0_" + a + ".html" }

function quxian_show(a, c) { var d = document.getElementsByTagName("tr"),
        e = c.parentNode.parentNode.parentNode,
        k = e.getElementsByTagName("tr").item(1); if ("tr_flash_on" != k.className) { for (var l = 0; l < d.length; l++) "tr_flash_on" == d.item(l).className && (d.item(l).className = "tr_flash", d.item(l).parentNode.className = "");
        e.className = "on";
        k.className = "tr_flash_on" } else k.className = "tr_flash", e.className = "" }

function change_head_img(a) { a ? (G("head_img_img").src = "style/images_new/head_img/" + a + ".bmp", G("head_img_div").style.display = "none", G("head_img_input").value = a) : G("head_img_div").style.display = "block" }
var nIntervId_my = [];

function show_my_more(a, c, d, e) { clearTimeout(nIntervId_my[e]);
    a.className = c;
    a.onmouseout = function () { nIntervId_my[e] = setTimeout(function () { a.className = d }, 100) } }

function show_top_userinfo() { setTimeout(function () { G("top_userinfo").className = "userinfo" }, 2500); for (var a = 0; 6 > a; a++) setTimeout(function () { "" == G("jy_bg").className ? G("jy_bg").className = "jy_bg" : G("jy_bg").className = "" }, 200 * a) }

function jibai_user(a, c) { var d = .1 * parseInt(18 * (100 - c));
    setTimeout(function () { set_zhizhen(a, d, 180, 1) }, 500) }

function set_zhizhen(a, c, d, e) { 1 == e && 0 > d && (e = 2); if (1 == e || d <= c && 2 == e) G(a).style.transform = "rotate(-" + d + "deg)", d = 1 == e ? d - 4.5 : d + (2.3 < c / 40 ? .1 * parseInt(.25 * c) : 2.3), setTimeout(function () { set_zhizhen(a, c, d, e) }, 15) }

function show_vip_line(a, c) { setTimeout(function () { var d = G("vip_width_div").getElementsByTagName("div").item(0).offsetWidth;
        c <= a && (G("vip_width_div").style.backgroundPosition = Math.round(-380 + c * d) + "px 8px", show_vip_line(a, c + .08)) }, 15) }

function show_u_more(a, c, d, e) { var k = setTimeout(function () { var l = a.parentNode,
            g = l.getElementsByTagName("div"),
            b; if (0 == g.length) { g = document.createElement("div");
            g.setAttribute("class", "u_more"); var h = 999 == d ? '\x3cspan class\x3d"uinfo_vip"\x3e\x3cimg title\x3d"\u5728\u6211\u7684\u6253\u5b57-\u4fee\u6539\u8d44\u6599\u4e2d\uff0c\u70b9\u4f7f\u7528\u5fae\u4fe1\u5934\u50cf\u8fdb\u884c\u8bbe\u7f6e\u54e6\uff01" src\x3d"http://img2.kukuw.com/dazi/head_wx/' + c + '-2.jpg"/\x3e\x3cbr /\x3e\x3cspan class\x3d"uinfo2"\x3e\x3cstrong\x3e' + e + "\x3c/strong\x3e\x3c/span\x3e\x3c/span\x3e" : '\x3cspan class\x3d"uinfo"\x3e\x3cimg src\x3d"style/images_new/head_img/' + d + '.bmp"/\x3e\x3cspan class\x3d"uinfo2"\x3e\x3cstrong\x3e' + e + "\x3c/strong\x3e\x3cbr /\x3e\x3cspan\x3eID\uff1a" + c + "\x3c/span\x3e\x3c/span\x3e\x3c/span\x3e"; if ("undefined" != typeof friend_list) var k = a.getElementsByTagName("span"),
                k = 1 == k.length ? k.item(0).innerHTML : "",
                h = h + ('\x3cspan class\x3d"ubeizhu"\x3e\x3cinput class\x3d"beizhu_i" name\x3d"beizhu" maxlength\x3d"10" type\x3d"input" value\x3d"' + k + '"\x3e\x3cinput class\x3d"beizhu_b" onclick\x3d"xiugai_beizhu(this,' + c + ')" type\x3d"button" value\x3d"\u8bbe\u5907\u6ce8"\x3e\x3c/span\x3e'),
                h = "undefined" != typeof friend_list[c] ? 1 == friend_list[c] ? h + ('\x3cspan class\x3d"span_a"\x3e\u5df2\u662f\u597d\u53cb\x3c/span\x3e\x3ca href\x3d"my_typing.php?do\x3dmessage_show\x26friend_id\x3d' + c + '"\x3e\u53d1\u6d88\u606f\x3c/a\x3e') : 2 == friend_list[c] ? h + '\x3cspan class\x3d"span_a" onclick\x3d"alert(\'\u5bf9\u65b9\u5df2\u62d2\u7edd\u60a8\u7684\u597d\u53cb\u7533\u8bf7\uff01\')"\x3e\u5bf9\u65b9\u62d2\u7edd\x3c/span\x3e\x3cspan class\x3d"span_a" onclick\x3d"alert(\'\u8bf7\u5148\u6dfb\u52a0\u597d\u53cb\uff0c\u7136\u540e\u624d\u80fd\u53d1\u9001\u6d88\u606f\u54e6\uff01\')"\x3e\u53d1\u6d88\u606f\x3c/span\x3e' : h + '\x3cspan class\x3d"span_a" onclick\x3d"alert(\'\u60a8\u5df2\u7533\u8bf7\u6dfb\u52a0\u5bf9\u65b9\u4e3a\u597d\u53cb\uff0c\u8bf7\u7b49\u5f85\u5bf9\u65b9\u786e\u8ba4\uff01\')"\x3e\u5f85\u786e\u8ba4\x3c/span\x3e\x3cspan class\x3d"span_a" onclick\x3d"alert(\'\u8bf7\u5148\u6dfb\u52a0\u597d\u53cb\uff0c\u7136\u540e\u624d\u80fd\u53d1\u9001\u6d88\u606f\u54e6\uff01\')"\x3e\u53d1\u6d88\u606f\x3c/span\x3e' : h + ('\x3ca href\x3d"my_do.php?do\x3dfriendnew\x26friend_id\x3d' + c + '"\x3e\u52a0\u597d\u53cb\x3c/a\x3e\x3cspan class\x3d"span_a" onclick\x3d"alert(\'\u8bf7\u5148\u6dfb\u52a0\u597d\u53cb\uff0c\u7136\u540e\u624d\u80fd\u53d1\u9001\u6d88\u606f\u54e6\uff01\')"\x3e\u53d1\u6d88\u606f\x3c/span\x3e');
            g.innerHTML = h;
            g.onmouseout = function () { b = setTimeout(function () { l.getElementsByTagName("div").item(0).style.display = "none" }, 100) };
            g.onmouseover = function () { clearTimeout(b) };
            l.appendChild(g) } else g.item(0).style.display = "block" }, 400);
    a.onmouseout = function () { clearTimeout(k) } }

function xiugai_beizhu(a, c) { var d = a.parentNode.getElementsByTagName("input").item(0);
    window.location = "my_do.php?do\x3dfriend_beizhu\x26id\x3d" + c + "\x26name\x3d" + encodeURI(d.value) }

function show_shurufa_all() { for (var a = document.getElementById("info_shurufa").getElementsByTagName("a"), c = 0; c < a.length; c++) "srf_hidden" == a.item(c).className && (a.item(c).className = ""), "more" == a.item(c).className && (a.item(c).className = "srf_hidden") }

function set_head_img_wx(a, c) { o_link_text = a.innerHTML;
    a.onclick = function () {};
    a.innerHTML = "\u6b63\u5728\u540c\u6b65\u4e2d\uff0c\u8bf7\u4e0d\u8981\u5237\u65b0\u9875\u9762..."; var d = new Date,
        e = new AjaxClass;
    e.Method = "GET";
    e.Url = "jingsai_do.php?do\x3dset_head_img_wx\x26t\x3d" + d.getTime();
    e.Async = !0;
    e.Loading = function () {};
    e.CallBack = function (d) { a.innerHTML = o_link_text;
        a.onclick = function () { set_head_img_wx(a, c) }; "OK" == d ? (G("head_img_img").src = "http://img2.kukuw.com/dazi/head_wx/" + c + ".jpg", G("head_img_input").value = 999, alert("\u5df2\u8bbe\u7f6e\u4e3a\u5fae\u4fe1\u5934\u50cf\uff01")) : alert(d) };
    e.Send() }

function AjaxClass() {
    function a() { var a = document.createElement("iframe");
        a.attachEvent("onload", function () { d.CallBack(a.contentWindow.document.body.innerHTML);
            a.removeNode() });
        a.attachEvent("onreadystatechange", function () {});
        a.src = d.Url;
        a.style.display = "none";
        document.body.appendChild(a) } var c = !1; try { c = new XMLHttpRequest } catch (e) { try { c = new ActiveXObject("MSXML2.XMLHTTP") } catch (k) { try { c = new ActiveXObject("Microsoft.XMLHTTP") } catch (l) { alert("\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301XMLHTTP\u5bf9\u8c61\uff0c\u8bf7\u5347\u7ea7\u5230IE6\u4ee5\u4e0a\u7248\u672c\uff01"), c = !1 } } } var d = this;
    this.Method = "POST";
    this.Url = "";
    this.Async = !0;
    this.Arg = "";
    this.CallBack = function () {};
    this.Loading = function () {};
    this.Send = function () { if ("" == this.Url) return !1; if (!c) return a();
        c.open(this.Method, this.Url, this.Async); "POST" == this.Method && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        c.onreadystatechange = function () { if (4 == c.readyState) { var a = !1;
                200 == c.status && (a = c.responseText);
                c = null;
                d.CallBack(a) } else d.Loading() }; "POST" == this.Method ? c.send(this.Arg) : c.send(null) } }

function load_user_beizhu() { if ("undefined" != typeof friend_beizhu)
        for (var a = document.getElementsByTagName("span"), c = 0; c < a.length; c++) { var d = a[c].className; "uid_" == d.substring(0, 4) && (d = d.replace("uid_", ""), "undefined" != typeof friend_beizhu[d] && (a[c].innerHTML = friend_beizhu[d], a[c].style.color = "#930")) } };