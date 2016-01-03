var blessed = require('blessed')
var screen = blessed.screen();

var config = require("./config")
var sprite = require("./sprite")

// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
  top: 'center',
  left: 'center',
  width: '90%',
  height: '90%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: config.color.main_fg,
    bg: config.color.main_bg,
    border: {
      fg: '#ffffff'
    },
    hover: {
      bg: 'green'
    }
  }
});



// Append our box to the screen.
screen.append(box);


var pixel = sprite.pixel; // TODO deep copy required?
pixel.top = "center"
pixel.left = 10
console.log(pixel)

screen.append(blessed.box(pixel));



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

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();
