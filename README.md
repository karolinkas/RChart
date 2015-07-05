# rgraph

## Get the repo-files:

```
$ git clone https://github.com/karolinkas/RChart.git
```

## Dependencies

You should have `node.js` installed in the system. Once you have it, you need to install `grunt` and `bower` via `npm`:

```
$ npm install -g grunt-cli
$ npm install -g bower
```

You will need to install the ruby gem `compass` as well

```
$ gem install compass
```


## Build & development

Run `grunt` for building and `grunt serve` for preview.


## Testing

Running `grunt test` will run the unit tests with karma.

## Info
I wrote a reusable directive with isolate scope to allow you to use it in different views.
It appends a canvas-element with a unique ID, otherwise the charting-library would attach the graph to the same canvas element and only work once. If you want to use the directive you need attribute a data object with a time and a value array.     
A factory is giving you the possibility to do http-requests if you pass in an URL. 

Some basic tests are checking for the creation of elements.

On mouseover a tooltip shows you each dates cost.
