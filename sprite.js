var config = require("./config")
var sprite = require("./sprite.json")

function add(a, b){
	return (parseFloat(a.split("%")[0])*( 1 + 0.01*parseFloat(b.split("%")[0]))).toString()+"%"
}

function sub(a, b, c){
	return (parseFloat(a.split("%")[0])- part*parseFloat(b.split("%")[0])).toString()+"%"
}

exports.box = {
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
}

exports.head = {
	top: "50%",
	left: "50%",
  width: sprite.head.width,
  height: sprite.head.height,
  tags: true,
  style: {
    fg: sprite.head.color, 
    bg: sprite.head.color
  }
}

exports.hair = {
	top: add(exports.head.top, sprite.hair.top),
	left: add(exports.head.left, sprite.hair.left),
  width: add(sprite.head.width,sprite.hair.width),
  height: add(sprite.head.height, sprite.hair.height),
  tags: true,
  style: {
    fg: sprite.hair.color,
    bg: sprite.hair.color
  }
}
