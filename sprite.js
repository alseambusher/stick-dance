var config = require("./config")

exports.pixel = {
  width: config.sizes.sprite_pixel_width,
  height: config.sizes.sprite_pixel_height,
  tags: true,
  style: {
    fg: config.color.sprite_fg, 
    bg: config.color.sprite_bg
  }
}
