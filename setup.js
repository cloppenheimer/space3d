//Set up and load scene
 
var scene, renderer, camera, controls;

window.onload = function () { 
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('space').appendChild(renderer.domElement);

	// Create the scene
	scene = new THREE.Scene();

	// Put a camera into the scene
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set(0, 5, 20);
	scene.add(camera);

	// Create a camera contol
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render );

	// Add space stuff to the scene, kept in a separate function
	goToSpace()

	render()
}


// Render the scene
function render() {
	renderer.render( scene, camera );
}

// In case window is resized
window.onresize = function () {
	renderer.setSize( window.innerWidth, window.innerHeight );

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	render();
}