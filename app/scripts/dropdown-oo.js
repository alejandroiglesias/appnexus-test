'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    }
    else {
        // Browser globals
        root.Dropdown = factory();
    }
}(this, function () {

    var Dropdown = function (options) {
        this.el = options.element;
        this.menuOpts = options.menuOptions;
        this.timeoutId = null;

        // TODO: build menu
    };

    Dropdown.prototype.toggle = function (event) {
        console.log('toggle', this, event.target);
        var el = this.el;
        // If clicked on document, close all opened dropdowns.
        if (el === document) {
            console.log('clicked on document. clear dropdowns.');
            clearMenus(this.timeoutId);
            return;
        }
        // Get dropdown status.
        var isActive = /open/.test(el.parentElement.className);
        console.log('isactive', el.parentElement.className, isActive);
        // TODO: FIX: parent de un submenu no tiene clase 'open'.

        // Close dropdown.
        clearMenus(this.timeoutId);
        // If was currently active, do nothing.
        if (isActive) {
            return;
        }
        // Clear closing timeout.
        clearTimeout(this.timeoutId);
        // Add the 'open' class to parent to show dropdown.
        el.parentElement.className += ' open';
    };

    function bind (el, eventType, eventHandler) {
        if (el.addEventListener) {
            el.addEventListener(eventType, eventHandler, false);
        }
        else if (el.attachEvent) {
            el.attachEvent(eventType, eventHandler);
        }
    }

    function clearMenus (timeoutId) {
        timeoutId = setTimeout(function () {
            this.el.parentNode.className = this.el.parentNode.className.replace(/open/g, '');
        }, 2000);
    }

    bind(document, 'click', clearMenus);

    return Dropdown;
}));
