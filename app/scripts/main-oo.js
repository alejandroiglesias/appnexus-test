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
                        console.log('The product');
                    }
                },
                {
                    title: 'Meet the team',
                    type: 'function',
                    destination: function () {
                        console.log('Meet the team');
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
                        console.log('Small product');
                    }
                },
                {
                    title: 'Big product',
                    type: 'function',
                    destination: function () {
                        console.log('Big product');
                    }
                },
                {
                    title: 'Enourmous product',
                    type: 'function',
                    destination: function () {
                        console.log('Enourmous product');
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

    var triggerEls = document.querySelectorAll('.js-toggle-dropdown');
    Array.prototype.forEach.call(triggerEls, function (el) {
        new Dropdown({
            element: el,
            options: dropdownOpts
        });
    });

}());
