function init() {
	if (!createjs.Sound.initializeDefaultPlugins()) {return;} //if !browser supp, no play

	createjs.Sound.alternateExtensions = ["mp3"]; //for mp3
	var audioPath = "sounds/"; 
	var sounds = [ //create array of all sounds
		{id:"0", src:"piano_middle_C.mp3"},
		{id:"1", src:"piano_C_sharp.mp3"},
		{id:"2", src:"piano_D.mp3"},
		{id:"3", src:"piano_D_sharp.mp3"},
		{id:"4", src:"piano_E.mp3"},
		{id:"5", src:"piano_F.mp3"},
		{id:"6", src:"piano_F_sharp.mp3"},
		{id:"7", src:"piano_G.mp3"},
		{id:"8", src:"piano_G_sharp.mp3"},
		{id:"9", src:"piano_A.mp3"},
		{id:"10", src:"piano_A_sharp.mp3"},
		{id:"11", src:"piano_B.mp3"}
	];

	createjs.Sound.addEventListener("fileload", handleLoad); //listens for when each sound has loaded
	createjs.Sound.registerSounds(sounds, audioPath) //register/init sounds
}

function handleLoad(event) {
	createjs.Sound.play(event.src); //play each note onload
}

var arraySounds = { //idk if this is how2 use dictionary
	"a": ["0"], //c
	"w": ["1"], //sharp
	"s": ["2"], //d
	"e": ["3"], //sharp
	"d": ["4"], //e
	"f": ["5"], //f
	"t": ["6"], //sharp
	"g": ["7"], //g
	"y": ["8"], //sharp
	"h": ["9"], //a
	"u": ["10"], //sharp
	"j": ["11"] //b
};

$("body").on("keypress", function(event) { //on keydown, play corresponding note
	input = String.fromCharCode(event.which);
	createjs.Sound.play(arraySounds[input]);
})