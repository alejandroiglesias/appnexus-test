# Problem #3

## Create a simple context menu that floats over a page. Don't use any samples or libraries.

- There is a button on the page and the menu pops up next to it when clicked
- The menu should have at least 2 levels (submenus)
- The content should be driven by a JSON object at the top of the script
- Some menu items should go to URLs; some should be assigned Javascript functions
- The menu should not go away until 2 seconds after you have rolled out of it or after you have selected an option
- Style is not as important as function.

## Brief explanation

I've created a reusable Dropdown object (`scripts/dropdown.js`) in plain JavaScript using features with modern browsers and IE8+ support in mind. It's initialized for each trigger button in the `scripts/main.js` file using a JSON object for the menu structure. The dropdown styling (`styles/_dropdown.scss`) is written in [Sass](http://sass-lang.com) without using any styling library like Bootstrap. [Bitters](http://bitters.bourbon.io) is included just to quickly give some good default styles to the page.