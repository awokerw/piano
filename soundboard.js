createjs.Sound.addEventListener("fileload", handleFileLoad);
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.registerSounds([
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
	], "sound/");

