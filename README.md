# Problem #1

## A message display

A backend api returns an array of messages in json to the frontend as follows. Each message has an id, message text and an indicator if its unread or not.

The system:

1. should display all messages (from the json array) in a list or series of divs

2. should display all the message-text if the message is unread (unread === true) or is the 1st message. This is the "expanded" format.

3. should display only the 1st line of message-text, with ellipses (i.e. ...) at end if the message is read (unread === false) and is not the 1st message. This is the "collapsed" format.
note: only display the ellipses if there is more content than 1 line i.e. would not display ellipses for message id 3 but would for message id 2

4. should expand a collapsed message when the user clicks a collapsed message 

5. should collapse an expanded message when user clicks on an expanded message

## Explanation

1. Should display all messages (from the json array) in a list or series of divs
    * I had first set routing to point `/messages` to the `MessageListCtrl` controller (`scripts/controllers/message-list.js`) and `views/message-list.html` template on `scripts/app.js`. On the controller I used `$resource` to load the data from the JSON file as if it was a RESTful service and outputted the data on the view using the `ngRepeat` directive over the [List Group Bootstrap component](http://getbootstrap.com/components/#list-group).
2. Should display all the message-text if the message is unread (unread === true) or is the 1st message. This is the "expanded" format.
    * This is also explained above.
3. Should display only the 1st line of message-text, with ellipses (i.e. ...) at end if the message is read (unread === false) and is not the 1st message. This is the "collapsed" format.
note: only display the ellipses if there is more content than 1 line i.e. would not display ellipses for message id 3 but would for message id 2
    * I created a `collapse` filter (`scripts/filters/collapse.js`) for this which trims the text and accepts a parameter to bypass it. This parameter is used passing the `message.collapsed` property inverted to it, which is initialized next to the `ngRepeat` directive with a default value of `false` if message is unread or is the first in the list. Also, the `collapse` filter checks if content has more than one line, and if it doesn't, returns the original value.
4. Should expand a collapsed message when the user clicks a collapsed message
    * Clicking the list item inverts the boolean value of the `message.collapsed` property and, as the `collapse` filter takes that property inverted as the `bypass` parameter, updates accordingly.
5. Should collapse an expanded message when user clicks on an expanded message
    * This is also explained above.

## Running it

To run the project enter the following command in your console: `npm install && bower install && grunt server`. After installing all the development dependencies, it will create a local web server and open the project in the browser (thanks to [Yeoman](http://yeoman.io)).