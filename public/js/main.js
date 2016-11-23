(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a)return a(o, !0);
				if (i)return i(o, !0);
				var f = new Error("Cannot find module '" + o + "'");
				throw f.code = "MODULE_NOT_FOUND", f
			}
			var l = n[o] = {exports: {}};
			t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, l, l.exports, e, t, n, r)
		}
		return n[o].exports
	}

	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++)s(r[o]);
	return s
})({
	1: [function (require, module, exports) {
		/**
		 * Grunt task configuration
		 *
		 * JavaScript ECMAScript 5.1
		 *
		 * @category  JavaScript
		 * @package   AndreLademann\AndreLademannDe\Development
		 * @project   AndreLademannDe
		 * @author    André Lademann <info@andrelademann.de>
		 * @copyright MIT
		 * @license   https://opensource.org/licenses/MIT
		 * @link      https://www.gnu.org/licenses/gpl.html
		 */
		'use strict';

window.addEventListener('deviceorientation', function (e) {
	document
		.getElementById('avatar')
		.setAttribute('style', 'transform: rotate(' + Math.round(e.alpha) + 'deg)');
}, false);

	}, {}]
}, {}, [1]);
