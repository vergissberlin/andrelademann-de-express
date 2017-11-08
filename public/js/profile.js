(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

$(function () {
	var $elements = $('[data-ajax]');
	$.each($elements, function (index, value) {
		$(this).load($(this).data().ajax);
	});

	$('.js-modal-delete, .js-modal-cancel, .js-modal-close').on('click', function () {
		$('.modal').removeClass('is-active');
	});

	$(document).keyup(function (e) {
		// escape key
		if (e.keyCode == 27) {
			$('.modal').removeClass('is-active');
		}
		// console.log(e.keyCode);
	});
	$(document).keydown(function(event) {
			// If Control or Command key is pressed and the S key is pressed
			// run save function. 83 is the key code for S.
			if((event.ctrlKey || event.metaKey) && event.which == 83) {
				// Save Function
				event.preventDefault();
				if (confirm('Save and exit?')) {
					$('#submit').click();
				}
				return false;
			};
		}
	);


});

},{}]},{},[1]);
