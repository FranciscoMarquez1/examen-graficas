"use strict"
var canvas;
var renderer;
var scene;
var camera;
var light;
var mesh;
var plane;
var axes;
var numCircle, numSquare, numPoint, numSphere, numTriangle;
var selectErase, selectPaint, selectAddGroup, selectedGroupTriangle;
var colorInput;
var groups;
var selected, selectedGroup;
var rotate_axis;
var raycaster, intersects;
var mouse;
var figCircle, figSquare, figMaterial;
var orbit;
var angle, radius;

function main()
{
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");

    //RAYCASTER
    raycaster = new THREE.Raycaster();
    intersects = null;
    mouse = new THREE.Vector2(), THREE.INTERSECTED;

    //AXES
    axes = new Axes();
    rotate_axis = "x";

    //GEOMETRY and MATERIAL
    figCircle = "Circle";
    figSquare = "Square";
    figMaterial = "basic";
    groups = [];
    numCircle = numSquare = numPoint = numSphere = numTriangle = 1;


    // INPUTS FROM HTML
    selectErase = document.getElementById("erase-figures");
    selectPaint = document.getElementById("painter-figures");
    selectedGroupTriangle = document.getElementById("group_select_triangle");

    colorInput = document.getElementById('color-palette');


    // LIGHTS
    light = new THREE.AmbientLight();

    // CAMERAS
    orbit = false;
    angle = 0;
    radius = 3.;
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(0., 0., 5.);
    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // SCENE
    scene = new THREE.Scene();
    scene.add(axes);
    scene.add(camera);
    scene.add(light);

    // EVENTS
    initEventHandler();

    // ACTION
    requestAnimationFrame(renderLoop);              // RENDER LOOP
}

function renderLoop() {

    requestAnimationFrame(renderLoop);
    // find intersections
    raycaster.setFromCamera( mouse, camera );

		intersects = raycaster.intersectObjects( scene.children );
    if (orbit){
      camera.position.x = radius * Math.cos(angle);
      camera.position.z = radius * Math.sin( angle );
      angle += 0.01;
      camera.lookAt(new THREE.Vector3(0., 0., 0.));
    }
    renderer.render(scene, camera);

}

function addGroup(){
  var name_newGroup = document.getElementById("name_group").value;
  var new_group = new THREE.Group();

  new_group.name = name_newGroup;
  addRadioGroups(new_group.name, groups.length);
  groups.push(new_group);
  scene.add(new_group);
}

function addRadioGroups(name, index){
  var radioFragment = createRadioElement(name, index)
  var radioDiv = document.getElementById("radio-selected-figure")

  radioDiv.appendChild(radioFragment)
  radioDiv.appendChild(document.createTextNode(name));
  radioDiv.appendChild(document.createElement('br'));
}

function createRadioElement(name, value) {
  var radioHtml = '<input type="radio" onclick="getIndex(this.value);" name="group-radiob" value="' + value + '"';
  radioHtml += '/>' + name;
  var label = document.createElement('label')
  label.innerHTML = '<label for="' + name + '">' + name + '</label>'

  var radioFragment = document.createElement('div');
  radioFragment.innerHTML = radioHtml;
  radioFragment.firstChild.setAttribute("id", name);
  return radioFragment.firstChild;
}

function getIndex(index){
  selectedGroup = groups[index];
}

function addToSelected(fig_name){
  var select = getSelected();
  addRadioGroups(fig_name, true, select)
}
