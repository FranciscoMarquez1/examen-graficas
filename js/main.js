"use strict"
var canvas;
var renderer;
var scene;
var camera;
var light;
var mesh;
var sceneReady = false;
var figs;
var axes;
var numCircle, numSquare, numPoint;
var selectErase, selectPaint;
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
    figs = []
    numCircle = numSquare = numPoint = 1;

    // INPUTS FROM HTML
    selectErase = document.getElementById("erase-figures");
    selectPaint = document.getElementById("painter-figures");
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
