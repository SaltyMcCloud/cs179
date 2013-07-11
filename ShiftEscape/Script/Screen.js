var Screen = function(_title)
{
	this.title = _title;
}

Screen.prototype.init = function()
{
	var that = this;
	this.widgets = [];
	this.timelines = [];
	
	this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	this.camera.position.z = 0;
	this.camera.position.x = 0;
	this.camera.position.y = -200;

	this.scene = new THREE.Scene();
	
	this.scene.add(this.camera);
	
	this.widgets.push(new Widget('bg2'));
	this.widgets[0].setPositionX(0);
	this.widgets[0].setPositionY(170);
	this.widgets[0].setScale(10,10,0);
	
	this.widgets.push(new Widget('box1'));
	this.widgets[1].setPositionX(-40);
	this.widgets[1].setPositionY(-30);
	this.widgets[1].setPositionZ(-40);
	
	this.widgets.push(new Widget('box2'));
	this.widgets[2].setPositionX(70);
	this.widgets[2].setPositionY(-10);
	this.widgets[2].setPositionZ(-40);
	this.widgets[2].setScale(1.1,1.1,0);
	
	this.widgets.push(new Widget('box3'));
	this.widgets[3].setPositionX(0);
	this.widgets[3].setPositionY(30);
	this.widgets[3].setPositionZ(80);
	this.widgets[3].setScale(3,3,0);
	
	this.widgets.push(new Widget('robot'));
	this.widgets[4].setPositionZ(-10);
	this.widgets[4].setPositionX(30);
	
	this.widgets.push(new Widget('title'));
	this.widgets[5].setPositionZ(-60);
	this.widgets[5].setPositionY(-40);
	
	this.widgets.push(new Widget('ground'));
	this.widgets[6].setPositionX(0);
	this.widgets[6].setPositionY(200);
	this.widgets[6].setPositionZ(10);
	this.widgets[6].setScale(10,5,0);
	this.widgets[6].mesh.rotation.x = 45;
	
	for(var i = 0; i < this.widgets.length; ++i)
		this.widgets[i].addToScene(that.scene);
	
	// Setup keyboard events
	this.keys = {};
	document.onkeydown = 
		function(e)
		{
			//console.log('keydown ' + e.which);
			if (e.which)
			{
				if (that.keys[e.which] !== 'triggered')
				{
					that.keys[e.which] = true;
				}
			}
			//console.log(that.keys);
		};
	
	document.onkeyup =
		function(e)
		{
			//console.log('keyup ' + e.which);
			if (e.which)
			{
				that.keys[e.which] = false;
			}
			//console.log(that.keys);
		};
}

Screen.prototype.handleInput = function()
{
	//Enter
	if (this.keys[13] === true)
	{
		this.keys[13] = 'triggered';
	}
	//Space
	if (this.keys[32] === true)
	{
		this.keys[32] = 'triggered';
		this.letsPlay = true;
	}
	// Left
	if (this.keys[65] === true)
	{
		this.keys[65] = 'triggered';
	}
	// Right
	if (this.keys[68] === true)
	{
		this.keys[68] = 'triggered';
	}
	// Up
	if (this.keys[87] === true)
	{
		this.keys[87] = 'triggered';
	}
	// Down
	if (this.keys[83] === true)
	{
		this.keys[83] = 'triggered';
	}
	//Left arrow
	if (this.keys[37] === true)
	{
		this.keys[37] = 'triggered';
	}
	//Up arrow
	if (this.keys[38] === true)
	{
		this.keys[38] = 'triggered';
	}
	//Right arrow
	if (this.keys[39] === true)
	{
		this.keys[39] = 'triggered';
	}
	//Down arrow
	if (this.keys[40] === true)
	{
		this.keys[40] = 'triggered';
	}
};

Screen.prototype.update = function()
{	
	var that = this;
	
	//update the widgets
	_.each(	that.widgets,
				function(element, index)
				{
					element.update();
				}
			);
	
	//have the camera look at the position of the scene
	this.camera.lookAt(this.scene.position);
}

Screen.prototype.render = function(renderer, t)
{
	this.camera.position.x = 20 * Math.sin(t / 500);
	this.camera.position.y = -200 + 10 * Math.sin(t / 1000);
	this.camera.position.z = -60 + 10 * Math.sin(t / 1000);
	this.camera.up.set(0,0,1);
	this.camera.lookAt(this.scene.position);
	renderer.render(this.scene, this.camera);
}