//! function(n) {
//	var e = n.document;
//	t = e.documentElement;
//	i = 375;
//	d = i / 100;
//	o = "orientationchange" in n ? "orientationchange" : "resize";
//	a = function() {
//		var n = t.clientWidth || 320;
//		n > 1024 && (n = 1024);
//		n < 360 && (n=360);//*/
//		t.style.fontSize = n / d + "px";
//	};
//	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1));
//}(window);


function initUI(n,fun){
	var e = n.document;
	t = e.documentElement;
	i = 375;
	d = i / 100;
	o = "orientationchange" in n ? "orientationchange" : "resize";
	a = function() {
		var n = t.clientWidth || 320;
		n > 1024 && (n = 1024);
		n < 360 && (n=360);//*/
		t.style.fontSize = n / d + "px";
	};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1));
	fun();
};