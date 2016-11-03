# mingles' Grafton Studio Test

## The Task

Code out the design (design.png) in HTML/CSS and using JavaScript to load in a few items from an API endpoint.

The font will be “Open Sans”, available for free on Google Fonts
Please do not use any CSS frameworks/libraries.

This is a very simple design and should be easy to style from scratch with CSS. Feel free to use Sass or LESS if you prefer those to straight up CSS, though
The titles, hyperlink URLs and background images for the three boxes will be pulled in via an AJAX call.

Everything should look good in the latest Chrome, Firefox and Safari.

Once complete:  
Zip up all files when complete (at some stage on Friday evening) and email them.

Resources:  
JSON feed: http://lukepeters.me/api/adventure-options

## Redux with React
I've used a Redux architecture, this gives a unidirectional data flow and a centralized datastore so that the application in more maintainable and extendable.

## Code Structure

````
src/
    static/             -- static files such as images
    js/                 -- project code
        actions/        -- actions for retreiving from API
        containers/     -- Components such as controllers
        reducers/       -- reducer  
```

## installation

```
npm install
```
npm run dev
```
