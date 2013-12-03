(function (Dropdown) {
    'use strict';

    var dropdownOpts;

    // These are the options for the dropdown menu.
    dropdownOpts = [
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

    // Example 1: Initialize dropdown with dynamic menu from JS object.
    new Dropdown({
        element: document.querySelector('#trigger-generated-dropdown'),
        menuOptions: dropdownOpts
    });

    // Example 2: Initialize dropdown with fixed menu inserted in markup.
    // var fixedDropdown = new Dropdown({
    //     element: document.querySelector('#trigger-fixed-dropdown')
    // });

    // You can manually toggle the dropdown.
    // fixedDropdown.toggle();

}(this.Dropdown));
