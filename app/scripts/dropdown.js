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

        // Build menu DOM elements.
        this._buildMenu();

        // Add click event listener on the element.
        addEventListener(this.el, 'click', this.toggle.bind(this));

        return this;
    };

    /**
     * Bulds the dropdown menu.
     **/
    Dropdown.prototype._buildMenu = function () {
        // Create fragment to be added to DOM.
        var dropdownMenuFragment = document.createDocumentFragment();
        // Create dropdown menu items using recursive
        // createMenuItems() function.
        var dropdownMenu = createMenuItems(this.menuOptions);
        dropdownMenu.className = 'dropdown-menu generated';
        dropdownMenuFragment.appendChild(dropdownMenu);
        // Insert dropdown menu fragment after trigger element.
        if (this.el.nextSibling) {
            this.el.parentNode.insertBefore(dropdownMenuFragment, this.el.nextSibling);
        }
        else {
            this.el.parentNode.appendChild(dropdownMenuFragment);
        }
    };

    /**
     * Toggles the dropdown menu.
     * @param event {Event} The event
     **/
    Dropdown.prototype.toggle = function (event) {
        // Should stop propagation as it goes up to the document
        // element and calls the clearMenu() event handler. Adding
        // the timeout on closing the menu makes it complicated, so
        // best tradeoff is to stop propagation.
        if (typeof event.stopPropagation !== 'undefined') {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
        // Get dropdown status.
        var isActive = /open/.test(this.el.parentElement.className);
        // Close all dropdowns.
        clearMenus();
        // If was currently active, do nothing as clearMenus closed it.
        if (isActive) {
            return;
        }
        // Add the 'open' class to parent to show dropdown.
        this.el.parentElement.className += ' open';
    };

    /**
     * Bind Adds an event listener.
     * @param element {Element} The element to be temporarily removed
     * @return {Function} A function that inserts the element into its original position
     **/
    function addEventListener (el, eventType, eventHandler) {
        if (el.addEventListener) {
            el.addEventListener(eventType, eventHandler, false);
            return;
        }
        el.attachEvent(eventType, eventHandler);
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
