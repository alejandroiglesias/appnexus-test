# Problem #3

## Create a simple context menu that floats over a page. Don't use any samples or libraries.

- There is a button on the page and the menu pops up next to it when clicked
- The menu should have at least 2 levels (submenus)
- The content should be driven by a JSON object at the top of the script
- Some menu items should go to URLs; some should be assigned Javascript functions
- The menu should not go away until 2 seconds after you have rolled out of it or after you have selected an option
- Style is not as important as function.

## Brief explanation

I've created a reusable Dropdown object (`scripts/dropdown.js`) in plain JavaScript with modern browsers and IE8+ support in mind (also tested on iOS 6 and Android 4). It's initialized for a trigger button in the `scripts/main.js` file using a JSON object for the menu structure. Also in the same file there's a commented code which shows how to initialize a dropdown with a fixed menu placed in the markup (see `index.html` for said markup). The dropdown styling (`styles/_dropdown.scss`) is written in [Sass](http://sass-lang.com) without using any component library like Bootstrap. [Bitters](http://bitters.bourbon.io) is included just to quickly give some good default styles to the page.

## Running it

To run the project enter the following command in your console: `npm install && bower install && grunt server`. After installing all the development dependencies, it will create a local web server and open the project in the browser (thanks to [Yeoman](http://yeoman.io)).
