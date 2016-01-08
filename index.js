var ctx = require('axel');
var config = require("./config");
var fs = require('fs');
var wav = require('wav');
var Speaker = require('speaker');
var myutil =  require("./myutil");

var file = fs.createReadStream(process.argv[2]);
var player_file = fs.createReadStream(process.argv[2]);
var reader = new wav.Reader();
var player_reader = new wav.Reader();

var format;

reader.on('format', function (f) {
	format = f;
});

raw = []
reader.on('readable', function () {
	raw = raw.concat(reader.read())
});

reader.on('end', function(){
	raw = Buffer.concat(raw)
	data = []
	max = -1
	min = 10000000000
	for (var i=0; i < raw.length; i += format.blockAlign){
		str = ""
		for(var j=0; j<format.blockAlign/format.channels; j++)
			if(format.endianness == "LE")
				str = raw[i+j].toString(16) + str
			else
				str += raw[i+j].toString(16)
			decoded = Math.abs(myutil.hexToInt(str))
			data.push(decoded)
			if (decoded > max) max = decoded;
			if (decoded < min) min = decoded;
	}


  player_reader.pipe(new Speaker(format));
	var frame = 0;
	var t_total = data.length/format.sampleRate 
	var dance = setInterval(function(){
		bucket = 0
		for(var i=0; i < config.defaults.display_rate; i++){
			if (i+frame < data.length)
				bucket += data[i+frame]
		}
		bucket = parseInt(bucket/config.defaults.display_rate)
		console.log(bucket)
		frame += config.defaults.display_rate
		if (frame >= data.length) 
			clearInterval(dance);
		/* 
		sleep to match with the audio
		NOTE: correction has to be multiplied to sleep time
		This is because of several factors like time taken to wake from sleep, type of terminal used..etc
		CHANGE THE VALUE OF correction in config TO FIT YOUR NEED
		*/
	}, (config.defaults.display_rate / format.sampleRate) * 1000 * config.defaults.correction);
});

file.pipe(reader);
player_file.pipe(player_reader);

/* 
setInterval(function(){
	// Clear the terminal
	ctx.clear();

	ctx.bg(57,105,145);
	ctx.box(2, 2, ctx.cols-2, ctx.rows-2)
	// Sets the pixel BG color to green
	ctx.bg(0,255,0);

	// Draws a line into the console
	ctx.line(ctx.cols/2-10,ctx.rows/2,ctx.cols/2,10);
	ctx.line(ctx.cols/2-11,ctx.rows/2,ctx.cols/2+1,10);
	ctx.bg(255,255,255);
}, 100);
ctx.cursor.restore();
*/
