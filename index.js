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
