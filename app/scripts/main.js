'use strict';

(function () {

    // These are the options for the dropdown menu.
    var dropdownOpts = [
        {
            title: 'Home',
            type: 'link',
            destination: '#home'
        },
        {
            title: 'About',
            type: 'parent',
            children: [
                {
                    title: 'The product',
                    type: 'function',
                    destination: function () {
                        console.log('Clicked "The product"');
                    }
                },
                {
                    title: 'Meet the team',
                    type: 'function',
                    destination: function () {
                        console.log('Clicked "Meet the team"');
                    }
                }
            ]
        },
        {
            title: 'Services',
            type: 'parent',
            children: [
                {
                    title: 'Service one',
                    type: 'link',
                    destination: '#service-one'
                },
                {
                    title: 'Service two',
                    type: 'link',
                    destination: '#service-two'
                }
            ]
        },
        {
            title: 'Products',
            type: 'parent',
            children: [
                {
                    title: 'Small product',
                    type: 'function',
                    destination: function () {
                        console.log('Clicked "Small product"');
                    }
                },
                {
                    title: 'Big product',
                    type: 'function',
                    destination: function () {
                        console.log('Clicked "Big product"');
                    }
                },
                {
                    title: 'Enourmous product',
                    type: 'function',
                    destination: function () {
                        console.log('Clicked "Enourmous product"');
                    }
                }
            ]
        },
        {
            title: 'Contact',
            type: 'link',
            destination: '#contact'
        }
    ];

    // Look for all trigger buttons on the page.
    var triggerEls = document.querySelectorAll('.js-toggle-dropdown');
    // For each, initialize the Dropdown.
    for (var i = 0; i < triggerEls.length; i++) {
        new Dropdown({
            element: triggerEls[i],
            menuOptions: dropdownOpts
        });
    }

}());
