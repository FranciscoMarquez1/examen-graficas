"use strict"
var canvas;
var renderer;
var scene;
var camera;
var light;
var mesh;
var sceneReady = false;
var axes;
var numCircle, numSquare, numPoint;
var selectErase, selectPaint, selectAddGroup, selectedGroupTriangle;
var selectedGroupPoint;
var colorInput;


function main()
{
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");

    //AXES
    axes = new Axes();

    //GEOMETRY and MATERIAL
    numCircle = numSquare = numPoint = 1;

    // INPUTS FROM HTML
    selectErase = document.getElementById("erase-figures");
    selectPaint = document.getElementById("painter-figures");
    selectedGroupTriangle = document.getElementById("group_select_triangle");
    selectedGroupPoint = document.getElementById("group_select_points");


    selectAddGroup = document.getElementById("addGroup-select");

    addOption(selectAddGroup, "--Select--");
    addOption(selectedGroupPoint, "--Select--");
    addOption(selectedGroupTriangle, "--Select--");

    colorInput = document.getElementById('color-palette');


    // LIGHTS
    light = new THREE.AmbientLight();

    // CAMERAS
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
    renderer.render(scene, camera);
    if(sceneReady)
    {

         mesh.rotation.x = mesh.rotation.x + 0.01;
         mesh.rotation.y = mesh.rotation.y + 0.01;
    }
    requestAnimationFrame(renderLoop);
}

function addGroupFig(){
  var name_newGroup = document.getElementById("name_group").value;
  var group = new THREE.Group();

  group.name = name_newGroup;

  addOption(selectErase, group.name);
  addOption(selectPaint, group.name);
  addOption(selectAddGroup, group.name);
  addOption(selectedGroupTriangle, group.name);
  addOption(selectedGroupPoint, group.name);

  scene.add(group);
}

function addToGroup(figure, selector){
  var selectedGroup = scene.getObjectByName(selector.value);
  group.add(figure);

}
function addOption(selector, text){
  var option = document.createElement("option");
  option.text = text;

  selector.add(option);
}
