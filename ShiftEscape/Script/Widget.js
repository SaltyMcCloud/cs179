var Widget = function(_textureName)
{
	this.textureName = _textureName || 'null';
	console.log(this.textureName);
	this.size = {x: 100.0, y: 100.0, z: 0};
	this.position = {x: 0, y: 0, z: 0};
	this.children = [];
	this.parent;
	
	this.scale = {x:1, y:1, z:1};
	
	this.texture = new THREE.ImageUtils.loadTexture( 'Images/' + this.textureName + '.png' );
	
	this.material = new THREE.MeshBasicMaterial( {map: this.texture, side: THREE.DoubleSided, transparent: true, opacity: 1.0} );
	this.geom = new THREE.PlaneGeometry(this.size.x, this.size.y, 1, 1);
	this.mesh = new THREE.Mesh(this.geom, this.material);
	this.mesh.position.set(this.position.x, this.position.y, this.position.z + this.size.y / 2);
	this.mesh.rotation.x = 90;
}

Widget.prototype.init = function()
{

}

Widget.prototype.addToScene = function(scene)
{
	var that = this;
	scene.add(that.mesh);
}

Widget.prototype.update = function()
{
	this.position.x = this.mesh.position.x;
	this.position.y = this.mesh.position.y;
	this.position.z = this.mesh.position.z;
	
	//console.log(this.position);
}

Widget.prototype.setScale = function(x, y, z)
{
	this.scale.x = x;
	this.scale.y = y;
	this.scale.z = z;
	
	this.mesh.scale.x = this.scale.x;
	this.mesh.scale.y = this.scale.y;
	this.mesh.scale.z = this.scale.z;
}

Widget.prototype.setPositionZ = function(z)
{
	this.position.z = z;
	this.mesh.position.z = z;
}

Widget.prototype.setPositionX = function(x)
{
	this.position.x = x;
	this.mesh.position.x = x;
}

Widget.prototype.setPositionY = function(y)
{
	this.position.y = y;
	this.mesh.position.y = y;
}