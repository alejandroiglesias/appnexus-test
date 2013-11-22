'use strict';

(function () {

    var timeoutId;

    function bind (el, eventType, eventHandler) {
        if (el.addEventListener) {
            el.addEventListener(eventType, eventHandler, false);
        }
        else if (el.attachEvent) {
            el.attachEvent(eventType, eventHandler);
        }
    }

    function clearDropdowns () {
        var pageDropdowns = document.querySelectorAll('.dropdown.open');
        timeoutId = setTimeout(function () {
            Array.prototype.forEach.call(pageDropdowns, function (el) {
                el.className = el.className.replace(/open/g, '');
            });
        }, 2000);
    }

    function toggle (event) {
        console.log('toggle');
        var el = event.target;
        // If clicked on document, close all opened dropdowns.
        if (el.parentElement === null) {
            console.log('clear1');
            clearDropdowns();
            return;
        }
        // Get dropdown status.
        var isActive = /open/.test(el.parentElement.className);
        console.log('isactive', el.parentElement.className, isActive);
        // TODO: FIX: parent de un submenu no tiene clase 'open'.

        // Clear all opened dropdowns.
        console.log('clear');
        clearDropdowns();
        // If currently active, do nothing.
        if (isActive) {
            return;
        }
        console.log('cleartimeout');
        clearTimeout(timeoutId);
        // Add the 'open' class to parent to show dropdown.
        el.parentElement.className += ' open';
    }

    bind(document, 'click', toggle);

}());
