var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var vCENTER = new THREE.Vector3(0, 0, 0);
var GRIDWH = 100;
	
/*****************************/
//CAMERA//
/*****************************/
var VIEW_ANGLE = 70,
	ASPECT = WIDTH / HEIGHT,
	NEAR = 0.1,
	FAR = 50001;

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var Color =
{
	White: 0xffffff,
	Black: 0x000000,
	Grey: 0x999999,
	LightGrey: 0x111111,
	Red: 0xff0000,
	Blue: 0x00ff00,
	Green: 0x00ff00,
	COLOR1: 0x77bbff,
	COLOR2: 0x8ec5e5,
	COLOR3: 0x97a8ba,
	Sun: 0xCCC100,
};

var Game = function()
{
	//game object
}

Game.prototype.init = function()
{
	this.renderer = new THREE.WebGLRenderer({antialias: true});
	this.renderer.setSize(800, 600);
	this.renderer.setClearColor(0x000000, 1.0);

	this.LevelList = [];
	this.LevelList.push(new Level());
	this.LevelList.push(new Level());
	
	document.body.appendChild(this.renderer.domElement);
	
	// Setup keyboard events
	// this.keys = {};
	// document.onkeydown = 
		// function(e)
		// {
			// console.log('keydown ' + e.which);
			// if (e.which)
			// {
				// if (that.keys[e.which] !== 'triggered')
				// {
					// that.keys[e.which] = true;
				// }
			// }
			// console.log(that.keys);
		// };
	
	// document.onkeyup =
		// function(e)
		// {
			// console.log('keyup ' + e.which);
			// if (e.which)
			// {
				// that.keys[e.which] = false;
			// }
			// console.log(that.keys);
		// };
	
	this.CurrentLevel = 0;
	
	this.currentScreen = new Screen('Menu');
	//this.currentScreen = this.LevelList[this.CurrentLevel];
	this.currentScreen.init();
}

Game.prototype.start = function()
{
	var count = 0;
	var that = this;
	var time0 = new Date().getTime(); // milliseconds since 1970
	
	var loop = function()
	{
		var time = new Date().getTime();
		
		that.update();
		
		// Respond to user input
		that.currentScreen.handleInput();
		//update the robot
		that.currentScreen.update();
		// Render visual frame
		that.currentScreen.render(that.renderer, time - time0);
		
		// count += 1;
		
		// console.log(count);
		
		// if(count > 500)
		// {
			// count = 0;
			// //that.currentScreen = new Level();
			// that.currentScreen.init();
		// }
		
		// Loop
		requestAnimationFrame(loop, that.renderer.domElement);
	};
	
	loop();
}

Game.prototype.handleInput = function()
{
	// //Enter
	// if (this.keys[13] === true)
	// {
		// this.keys[13] = 'triggered';
		// console.log('starting up a new level');
		// this.currentScreen = new Level();
		// this.currentScreen.init();
	// }
	// // Left
	// if (this.keys[65] === true)
	// {
		// this.keys[65] = 'triggered';
	// }
	// // Right
	// if (this.keys[68] === true)
	// {
		// this.keys[68] = 'triggered';
	// }
	// // Up
	// if (this.keys[87] === true)
	// {
		// this.keys[87] = 'triggered';
	// }
	// // Down
	// if (this.keys[83] === true)
	// {
		// this.keys[83] = 'triggered';
	// }
	// //Left arrow
	// if (this.keys[37] === true)
	// {
		// this.keys[37] = 'triggered';
	// }
	// //Up arrow
	// if (this.keys[38] === true)
	// {
		// this.keys[38] = 'triggered';
	// }
	// //Right arrow
	// if (this.keys[39] === true)
	// {
		// this.keys[39] = 'triggered';
	// }
	// //Down arrow
	// if (this.keys[40] === true)
	// {
		// this.keys[40] = 'triggered';
	// }
	
	// //S key
	// if (this.keys[83] === true)
	// {
		// this.keys[83] = 'triggered';
	// }
};

Game.prototype.update = function()
{
	this.handleInput();
	if(this.currentScreen.letsPlay)
	{
		this.currentScreen = new Level();
		this.currentScreen.init();
	}
	if(this.currentScreen.goToMainMenu)
	{
		this.currentScreen = new Screen();
		this.currentScreen.init();
	}
}