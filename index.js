var blessed = require('blessed')
contrib = require('blessed-contrib')

var ctx = require('axel');
y=1
setInterval(function(){
// Clear the terminal
ctx.clear();

// Sets the pixel BG color to green
ctx.bg(0,255,0);

// Draws a line into the console
ctx.line(1,y,10,10);
ctx.line(2,y,11,10);
y = (y+1)%20
ctx.bg(255,255,255);
}, 5);
ctx.cursor.restore();

/*var screen = blessed.screen();

var config = require("./config")
var sprite = require("./sprite")

// Append our box to the screen.
screen.append(blessed.box(sprite.box));
screen.append(blessed.box(sprite.hair));
screen.append(blessed.box(sprite.head));

/*
// If our box is clicked, change the content.
box.on('click', function(data) {
  box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
  screen.render();
});

// If box is focused, handle `enter` and give us some more content.
box.key('enter', function() {
  box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
  box.setLine(1, 'bar');
  box.insertLine(1, 'foo');
  screen.render();
});
*/

// Quit on Escape, q, or Control-C.
//screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  //return process.exit(0);
//});

// Focus our element.
//box.focus();

// Render the screen.
//screen.render();
