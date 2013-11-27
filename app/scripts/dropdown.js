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

    /**
     * Dropdown constructor.
     * @param options {Object} An object with initialization options.
     * @return {Object} A Dropdown instance.
     **/
    var Dropdown = function (options) {
        this.el = options.element;
        this.menuOptions = options.menuOptions;

        // If menu options object is passed, build menu DOM elements.
        if (this.menuOptions) {
            buildMenu(this.el, this.menuOptions);
        }

        // Add click event listener on the element.
        var instance = this;
        addEventListener(this.el, 'click', function (event) { instance.toggle.call(instance, event); });

        return this;
    };

    /**
     * Toggles the dropdown menu.
     * @param event {Event} Event object if called from event
     *                      listener on standards compliant browsers.
     **/
    Dropdown.prototype.toggle = function (event) {
        // Get event object with fallback for IE8.
        event = event || window.event;
        // Should stop propagation as it goes up to the document
        // element and the clearMenu() event handler gets called.
        // Adding the timeout on closing the menu makes it complicated
        // to make it in another way, so best tradeoff is to
        // stop propagation.
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        // Also, should support IE8.
        else if (event) {
            event.cancelBubble = true;
        }
        // Get dropdown status.
        var isActive = /open/.test(this.el.parentElement.className);
        // Close all open dropdowns.
        clearMenus();
        // If was currently active, do nothing as clearMenus closed it.
        if (isActive) {
            return;
        }
        // Add the 'open' class to parent to show dropdown.
        this.el.parentElement.className += ' open';
    };

    /**
     * Adds an event listener to an element with fallback support
     * for IE8.
     * @param element {Element} Element to add the event listener to
     * @param eventType {String} Event type
     * @param eventHandler {Function} Event handler function
     **/
    function addEventListener (el, eventType, eventHandler) {
        if (el.addEventListener) {
            el.addEventListener(eventType, eventHandler, false);
        }
        else if (el.attachEvent) {
            el.attachEvent('on' + eventType, eventHandler);
        }
    }

    /**
     * Bulds the dropdown menu DOM elements and add them next to the
     * trigger element.
     **/
    function buildMenu (el, menuOptions) {
        // Create fragment to be added to DOM.
        var dropdownMenuFragment = document.createDocumentFragment();
        // Create dropdown menu items using recursive
        // createMenuItems() function.
        var dropdownMenu = createMenuItems(menuOptions);
        dropdownMenu.className = 'dropdown-menu';
        dropdownMenuFragment.appendChild(dropdownMenu);
        // Insert dropdown menu fragment after trigger element.
        if (el.nextSibling) {
            el.parentNode
                .insertBefore(dropdownMenuFragment, el.nextSibling);
        }
        else {
            el.parentNode.appendChild(dropdownMenuFragment);
        }
    }

    /**
     * Closes all opened menus with a timeout of two seconds.
     **/
    function clearMenus () {
        var pageDropdowns = document.querySelectorAll('.dropdown.open');
        for (var i = 0; i < pageDropdowns.length; i++) {
            setTimeout(makeCloseFn(pageDropdowns[i]), 2000);
        }
    }

    /**
     * Recursive function to create menu items.
     * @param items {Object} The items to create the menu from.
     * @return {Element} The menu list element created.
     **/
    function createMenuItems (items) {
        var menu, submenu, item, a, href, caret;
        menu = document.createElement('ul');
        for (var i = 0; i < items.length; i++) {
            submenu = null;
            href = '#';
            item = document.createElement('li');
            a = document.createElement('a');
            a.innerHTML = items[i].title;
            switch (items[i].type) {
            case 'link':
                href = items[i].destination;
                break;
            case 'function':
                addEventListener(a, 'click', items[i].destination);
                break;
            case 'parent':
                caret = document.createElement('b');
                caret.className = 'caret';
                a.appendChild(caret);
                break;
            }
            a.setAttribute('href', href);
            item.appendChild(a);
            if (items[i].type === 'parent') {
                item.appendChild(createMenuItems(items[i].children));
            }
            menu.appendChild(item);
        }
        return menu;
    }

    /**
     * Makes a function that removes the 'open' class to a dropdown
     * to be used inside loops.
     **/
    function makeCloseFn (dropdown) {
        return function () {
            dropdown.className = dropdown.className.replace(/open/g, '');
        };
    }

    // Clicking the document closes the dropdowns.
    addEventListener(document, 'click', clearMenus);

    return Dropdown;
}));
