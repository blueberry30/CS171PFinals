let scene, camera; // scene and camera
let skyTexture, skyMaterial; //Sky
let groundGeometry, groundTexture, groundMaterial, ground; //ground

//--Scene--//
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 130;
camera.position.y = -20;


//-------------------------------Shapes-------------------------------//


//------------------- Sky ---------------------//
skyTexture = new THREE.TextureLoader().load( 'assets/textures/night.jpg' );
skyMaterial = new THREE.MeshBasicMaterial( { map: skyTexture } );
scene.background = (skyTexture);

//--------------------- Ground ---------------------------//
groundGeometry = new THREE.BoxBufferGeometry(500,1,300);
groundTexture = new THREE.TextureLoader().load( 'assets/textures/ground.jpg' );
groundMaterial = new THREE.MeshStandardMaterial( { map: groundTexture } );
ground = new THREE.Mesh( groundGeometry, groundMaterial);
ground.position.y = -50;
scene.add( ground );

//--------------------------------- Light ------------------------------//

let spotLight1 = new THREE. SpotLight( 0xFFFFFF, 10);
spotLight1.position.x = 100;
spotLight1.position.y = 50;
spotLight1.position.z = 20;
spotLight1.lookAt(spotLight1.position);
spotLight1.receiveShadow = true;
spotLight1.castShadow = true;
scene.add(spotLight1);
//Set up shadow properties for the spotLight
spotLight1.shadow.mapSize.width = 30; 
spotLight1.shadow.mapSize.height = 30; 
spotLight1.shadow.camera.near = 10; 
spotLight1.shadow.camera.far = 30;

let spotLight2 = new THREE.SpotLight( 0xFFFFFF, 10);
spotLight2.position.x = 50;
spotLight2.position.y = 50;
spotLight2.position.z = -20;
spotLight2.lookAt(spotLight2.position);
spotLight2.castShadow = true;
scene.add( spotLight2 );
//Set up shadow properties for the spotLight
spotLight2.shadow.mapSize.width = 30; 
spotLight2.shadow.mapSize.height = 30; 
spotLight2.shadow.camera.near = 10; 
spotLight2.shadow.camera.far = 10;

let spotLight3 = new THREE.SpotLight( 0xFFFFFF, 10);
spotLight3.position.x = -50;
spotLight3.position.y = 50;
spotLight3.position.z = -60;
spotLight3.lookAt(spotLight3.position);
spotLight3.castShadow = true;
scene.add( spotLight3 );
//Set up shadow properties for the spotLight3
spotLight3.shadow.mapSize.width = -10; 
spotLight3.shadow.mapSize.height = 30; 
spotLight3.shadow.camera.near = 10; 
spotLight3.shadow.camera.far = 30;

let spotLight4 = new THREE.SpotLight( 0xFFFFFF, 10);
spotLight4.position.x = -80;
spotLight4.position.y = 50;
spotLight4.position.z = -110;
spotLight4.lookAt(spotLight4.position);
spotLight4.castShadow = true;
scene.add( spotLight4 );
//Set up shadow properties for the spotLight4
spotLight4.shadow.mapSize.width = -10; 
spotLight4.shadow.mapSize.height = 30; 
spotLight4.shadow.camera.near = 10; 
spotLight4.shadow.camera.far = 30;

let spotLight5 = new THREE.SpotLight( 0xFFFFFF, 10);
spotLight5.position.x = -110;
spotLight5.position.y = 50;
spotLight5.position.z = -150;
spotLight5.lookAt(spotLight5.position);
spotLight5.castShadow = true;
scene.add( spotLight5 );
//Set up shadow properties for the spotLight5
spotLight5.shadow.mapSize.width = 30; 
spotLight5.shadow.mapSize.height = 30; 
spotLight5.shadow.camera.near = 10; 
spotLight5.shadow.camera.far = 30;




//------------------------ Lamp and Bulb's Arm --------------------------//

//---Lamp's Geometry ---//
let radiusTop = 2;
let radiusBottom = 2;
let height = 100;
let radialSegments = 12;
let geometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, radialSegments);

//---Lamp's Arm Geometry ---//
let radiusTop2 = 2;
let radiusBottom2 = 2;
let height2 = 30;
let radialSegments2 = 12;
let armGeometry = new THREE.CylinderBufferGeometry(radiusTop2, radiusBottom2, height2, radialSegments2);

//--- Bulb's Arm Geometry ---//
class CustomSinCurve extends THREE.Curve {
  constructor(scale) {
    super();
    this.scale = scale;
  }
  getPoint(t) {
    let tx = t * 5 - 1;
    let ty = Math.sin(2.8 * Math.PI * t);
    let tz = 0;
    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
}
let path11 = new CustomSinCurve(4);
let tubularSegments11 = 20;
let radius11 = 1;
let radialSegments11 = 8;
let closed11 = false;
let barGeometry = new THREE.TubeBufferGeometry(path11, tubularSegments11, radius11, radialSegments11, closed11);

//----------------------- Light Bulb -------------------------//
let points = [];
for (let i = 0; i < 10; ++i) {
  points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * .8));
}
let bulbgeometry = new THREE.LatheBufferGeometry(points);

//--------------------- light in the bulb --------------------//
const radius5 = 6;
const segments5 = 24;
const lightGeometry = new THREE.CircleBufferGeometry(radius5, segments5);


//------------------------------------------------------------------------//


//--Lamp. Lamp's Arm and Bulb's Arm 1--//
let lampTexture = new THREE.TextureLoader().load('assets/textures/lamp.jpg');
let lampMaterial = new THREE.MeshBasicMaterial( { map :lampTexture} );
let lamp = new THREE.Mesh( geometry, lampMaterial);
lamp.position.x = 60;
lamp.position.z = 35;
scene.add( lamp );
let armTexture = new THREE.TextureLoader().load('assets/textures/lamp.jpg');
let armMaterial = new THREE.MeshBasicMaterial( { map :armTexture} );
let arm = new THREE.Mesh( armGeometry, armMaterial);
arm.position.x = 60;
arm.position.z = 35;
arm.rotation.x = 30;
arm.rotation.z = 23.5;
scene.add( arm );
let bulbTexture = new THREE.TextureLoader().load('assets/textures/lamp.jpg');
let bulbMaterial = new THREE.MeshBasicMaterial( { map :bulbTexture} );
let bulb = new THREE.Mesh( bulbgeometry, lampMaterial);
bulb.position.x = 49;
bulb.position.y = 40;
bulb.position.z = 40;
bulb.rotation.x = 3.2;
scene.add( bulb );
let lightTexture = new THREE.TextureLoader().load('assets/textures/light.jpg');
let lightMaterial = new THREE.MeshBasicMaterial( { map :lightTexture} );
let light = new THREE.Mesh( lightGeometry, lightMaterial);
light.position.x = 49;
light.position.y = 37;
light.position.z = 40;
light.rotation.x = 1.6;
scene.add( light );
let barTexture = new THREE.TextureLoader().load('assets/textures/lamp.jpg');
let barMaterial = new THREE.MeshBasicMaterial( { map :barTexture} );
let Bar = new THREE.Mesh( barGeometry, barMaterial);
Bar.position.x = 57;
Bar.position.y = 50;
Bar.position.z = 37;
Bar.rotation.y = 0.5;
Bar.rotation.z = 3.7;
scene.add( Bar );



//--Lamp and Bulb's Arm 2--//
let lamp2 = new THREE.Mesh(geometry, lampMaterial );
lamp2.position.x = 30;
lamp2.position.z =-10;
scene.add( lamp2 );
let arm2 = new THREE.Mesh( armGeometry, armMaterial);
arm2.position.x = 30;
arm2.position.z = -10;
arm2.rotation.x = 30;
arm2.rotation.z = 23.5;
scene.add( arm2 );
let bulb2 = new THREE.Mesh( bulbgeometry, lampMaterial);
bulb2.position.x = 18.5;
bulb2.position.y = 40;
bulb2.position.z = -4;
bulb2.rotation.x = 3.2;
scene.add( bulb2 );
let light2 = new THREE.Mesh( lightGeometry, lightMaterial);
light2.position.x = 18.5;
light2.position.y = 37;
light2.position.z = -4;
light2.rotation.x = 1.6;
scene.add( light2 );
let bar2 = new THREE.Mesh( barGeometry, barMaterial);
bar2.position.x = 27;
bar2.position.y = 50;
bar2.position.z = -8;
bar2.rotation.y = 0.5;
bar2.rotation.z = 3.7;
scene.add( bar2 );



//--Lamp and Bulb's Arm 3--//
let lamp3 = new THREE.Mesh(geometry, lampMaterial );
lamp3.position.x = 10;
lamp3.position.z = -40;
scene.add( lamp3 );
let arm3 = new THREE.Mesh( armGeometry, armMaterial);
arm3.position.x = 10;
arm3.position.z = -40;
arm3.rotation.x = 30;
arm3.rotation.z = 23.5;
scene.add( arm3 );
let bulb3 = new THREE.Mesh( bulbgeometry, lampMaterial);
bulb3.position.x = 0;
bulb3.position.y = 40;
bulb3.position.z = -35;
bulb3.rotation.x = 3.2;
scene.add( bulb3 );
let light3 = new THREE.Mesh( lightGeometry, lightMaterial);
light3.position.x = 0;
light3.position.y = 37;
light3.position.z = -35;
light3.rotation.x = 1.6;
scene.add( light3 );
let bar3 = new THREE.Mesh( barGeometry, barMaterial);
bar3.position.x = 7;
bar3.position.y = 50;
bar3.position.z = -38;
bar3.rotation.y = 0.5;
bar3.rotation.z = 3.7;
scene.add( bar3 );



//--Lamp and Bulb's Arm 4--//
let lamp4 = new THREE.Mesh(geometry, lampMaterial );
lamp4.position.x = -10;
lamp4.position.z = -70;
scene.add( lamp4 );
let arm4 = new THREE.Mesh( armGeometry, armMaterial);
arm4.position.x = -10;
arm4.position.z = -70;
arm4.rotation.x = 30;
arm4.rotation.z = 23.5;
scene.add( arm4 );
let bulb4 = new THREE.Mesh( bulbgeometry, lampMaterial);
bulb4.position.x = -21;
bulb4.position.y = 40;
bulb4.position.z = -63.5;
bulb4.rotation.x = 3.2;
scene.add( bulb4 );
let light4 = new THREE.Mesh( lightGeometry, lightMaterial);
light4.position.x = -21;
light4.position.y = 37;
light4.position.z = -63.5;
light4.rotation.x = 1.6;
scene.add( light4 );
let bar4 = new THREE.Mesh( barGeometry, barMaterial);
bar4.position.x = -13;
bar4.position.y = 50;
bar4.position.z = -68;
bar4.rotation.y = 0.5;
bar4.rotation.z = 3.7;
scene.add( bar4 );


//--Lamp and Bulb's Arm 5--//
let lamp5 = new THREE.Mesh(geometry, lampMaterial );
lamp5.position.x = -30;
lamp5.position.z = -100;
scene.add( lamp5 );
let arm5 = new THREE.Mesh( armGeometry, armMaterial);
arm5.position.x = -30;
arm5.position.z = -100;
arm5.rotation.x = 30;
arm5.rotation.z = 23.5;
scene.add( arm5 );
let bulb5 = new THREE.Mesh( bulbgeometry, lampMaterial);
bulb5.position.x = -40;
bulb5.position.y = 40;
bulb5.position.z = -95;
bulb5.rotation.x = 3.2;
scene.add( bulb5 );
let light5 = new THREE.Mesh( lightGeometry, lightMaterial);
light5.position.x = -40;
light5.position.y = 37;
light5.position.z = -95;
light5.rotation.x = 1.6;
scene.add( light5 );
let Bar5 = new THREE.Mesh( barGeometry, barMaterial);
Bar5.position.x = -33;
Bar5.position.y = 50;
Bar5.position.z = -98;
Bar5.rotation.y = 0.5;
Bar5.rotation.z = 3.7;
scene.add( Bar5 );




//---------------------------- TrashCan ----------------------------//   
const radiusTop1 = 4;
const radiusBottom1 = 4;
const height1 = 10;
const radialSegments1 = 12;
const trashGeometry = new THREE.CylinderBufferGeometry(radiusTop1, radiusBottom1, height1, radialSegments1);

let trashTexture = new THREE.TextureLoader().load('assets/textures/trashcan.jpg');
let trashMaterial = new THREE.MeshBasicMaterial( { map : trashTexture} );
let trashcan = new THREE.Mesh( trashGeometry, trashMaterial );
trashcan.position.x = 55;
trashcan.position.y = -42;
trashcan.position.z = 27;
scene.add( trashcan );


//---------------------------- Bench ----------------------------//   
const width = 1;
const height3 = 25;
const depth = 15;
const benchGeometry = new THREE.BoxBufferGeometry(width, height3, depth);

let benchTexture = new THREE.TextureLoader().load('assets/textures/trashcan.jpg');
let benchMaterial = new THREE.MeshBasicMaterial( { map : benchTexture} );
let bench = new THREE.Mesh( benchGeometry, benchMaterial );
bench.position.x = 68;
bench.position.y = -42;
bench.position.z = 55;
bench.rotation.x = 11;
bench.rotation.z = 3.5;
scene.add( bench );


const width2 = 1;
const height4 = 25;
const depth2 = 6;
const bodyGeometry = new THREE.BoxBufferGeometry(width2, height4, depth2);
let body = new THREE.Mesh( bodyGeometry, benchMaterial );
body.position.x = 65;
body.position.y = -45;
body.position.z = 60;
body.rotation.x = 11;
body.rotation.z = 3.5;
scene.add( body );

const width3 = 1;
const height5 = 25;
const depth3 = 6;
const baseGeometry = new THREE.BoxBufferGeometry(width3, height5, depth3);
let base = new THREE.Mesh( baseGeometry, benchMaterial );
base.position.x = 65;
base.position.y = -42;
base.position.z = 58;
base.rotation.y = 11.4;
base.rotation.z = 11;
scene.add( base );




//------------------------------------------ Tree ---------------------------------//
let treeLoader = new THREE.GLTFLoader();
treeLoader.load( "assets/models/tree.gltf", function ( gltf ) {
  gltfModel = gltf.scene;
  gltfModel.position.x = -50;
  gltfModel.position.y = 20;
  gltfModel.position.z = -50;
  gltfModel.receiveShadow = true;
  gltfModel.castShadow = true;
  gltfModel.scale.set(8,8,8);
  scene.add(gltfModel);
}, undefined, function ( error ) {console.error( error );} );

let treeLoader2 = new THREE.GLTFLoader();
treeLoader2.load( "assets/models/tree.gltf", function ( gltf ) {
  gltfModel = gltf.scene;
  gltfModel.position.x = -220;
  gltfModel.position.y = -20;
  gltfModel.position.z = -20;
  gltfModel.receiveShadow = true;
  gltfModel.castShadow = true;
  gltfModel.scale.set(8,8,8);
  scene.add(gltfModel);
}, undefined, function ( error ) {console.error( error );} );



//--snow on the ground--//
     starGeo = new THREE.Geometry();
     for(let i=0;i<100000;i++) {
       star = new THREE.Vector3(
         Math.random() * 500 - 240,
         Math.random() * 10- 10,
         Math.random() * 300 - 150
       );
       star.velocity = 0;
       star.acceleration = 1;
       starGeo.vertices.push(star);
     }
 
     let starMaterial = new THREE.PointsMaterial({
       color: 0xffffff,
       size: 0.6
     });
     stars = new THREE.Points(starGeo,starMaterial);
     stars.position.set(0,-40,0);
     scene.add(stars);


//--Renderer--//
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//--Functions--//
controls = new THREE.OrbitControls (camera, renderer.domElement);
function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
}



animate();