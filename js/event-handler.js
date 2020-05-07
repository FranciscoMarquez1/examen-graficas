var geometry, material;

function toolsEvent(evt)
{
	// MODEL
    // GEOMETRY
    switch (evt) {
      case "0":
      //Selector
        break;
      case "1":
      //Point
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('eraser-menu').style.display = 'none';
        var result_style = document.getElementById('point-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
          document.getElementById("x_point").value = '0';
          document.getElementById("y_point").value = '0';
          document.getElementById("z_point").value = '0';
        }

        break;
      case "2":
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        var result_style = document.getElementById('eraser-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
      //Ereaser
        break;
      case "3":
      //Segment or Plane
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('eraser-menu').style.display = 'none';
        var result_style = document.getElementById('plane-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
          document.getElementById("x_point").value = '0';
          document.getElementById("y_point").value = '0';
          document.getElementById("z_point").value = '0';
        }
        break;
      case "4":
      //Clear all
        figs = [];
        scene = new THREE.Scene();
        scene.add(axes);
        scene.add(camera);
        scene.add(light);
        break;
      case "5":
      //Triangle
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('eraser-menu').style.display = 'none';
        var result_style = document.getElementById('triangle-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
          document.getElementById("triangle_p1_x").value = '0';
          document.getElementById("triangle_p1_y").value = '0';
          document.getElementById("triangle_p1_z").value = '0';

          document.getElementById("triangle_p2_x").value = '0';
          document.getElementById("triangle_p2_y").value = '0';
          document.getElementById("triangle_p2_z").value = '0';

          document.getElementById("triangle_p3_x").value = '0';
          document.getElementById("triangle_p3_y").value = '0';
          document.getElementById("triangle_p3_z").value = '0';
        }
        break;
      case "6":
      //Line-width
        break;
      case "7":
      //Rectangle or cube
        geometry = new THREE.BoxGeometry();
        //MATERIAL
        material = new THREE.MeshNormalMaterial();
        //MESH (GEOMETRY + MATERIAL)
        mesh = new THREE.Mesh(geometry, material);
        mesh.name = "Square " + numSquare;
        numSquare++;
        var option = document.createElement("option");
        option.text = mesh.name;
        selectErase.add(option);
        selectPaint.add(option);
        scene.add(mesh);
        //sceneReady = true;
        break;
      case "8":
      //Fill or wireframe
        break;
      case "9":
      //Circle or sphere
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        var result_style = document.getElementById('circle-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
          document.getElementById("r_circle").value = '0';
          document.getElementById("theta_circle").value = '0';
          document.getElementById("z_point").value = '0';
        }
        break;
      case "10":
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('eraser-menu').style.display = 'none';
        var result_style = document.getElementById('painter-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }        
        break;
      case "11":
      //Polygon
        break;
      default:

    }
      //geometry = new THREE.BoxGeometry();
      // MATERIAL
      //material = new THREE.MeshNormalMaterial();
      // MESH (GEOMETRY + MATERIAL)
    	//mesh = new THREE.Mesh(geometry, material);
    	// scene.add(mesh);
    	// sceneReady = true;
}
function addPoint(){
  geometry = new THREE.BufferGeometry();
  var x = document.getElementById("x_point").value;
  var y = document.getElementById("y_point").value;
  var z = document.getElementById("z_point").value;
  var vertices = new Float32Array( [
    x, y, z
  ] );
  geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
  material = new THREE.PointsMaterial( { size: .05, color: 0xffffff } );
  mesh = new THREE.Points( geometry, material );
  mesh.name = "Point " + numPoint
  numPoint++;
  var option = document.createElement("option");
  option.text = mesh.name;
  selectErase.add(option);
  selectPaint.add(option);
  scene.add(mesh);
}

function addPlane(){
  var width = document.getElementById("w_plane").value;
  var height = document.getElementById("h_plane").value;
  var y = document.getElementById("y_plane").value;
  geometry = new THREE.PlaneBufferGeometry(Math.floor(width/10), Math.floor(height/10), Math.floor(width/20), Math.floor(height/20));
  //MATERIAL
  material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
  //MESH (GEOMETRY + MATERIAL)
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0., y, 0.)
  mesh.rotation.x = mesh.rotation.x - 1.5
  scene.add(mesh);
  //sceneReady = true;
}

function addTriangle(){
  var v0_x = document.getElementById("triangle_p1_x").value;
  var v0_y = document.getElementById("triangle_p1_y").value;
  var v0_z = document.getElementById("triangle_p1_z").value;

  var v1_x = document.getElementById("triangle_p2_x").value;
  var v1_y = document.getElementById("triangle_p2_y").value;
  var v1_z = document.getElementById("triangle_p2_z").value;

  var v2_x = document.getElementById("triangle_p3_x").value;
  var v2_y = document.getElementById("triangle_p3_y").value;
  var v2_z = document.getElementById("triangle_p3_z").value;

  var v0 = new THREE.Vector3(v0_x, v0_y, v0_z);
  var v1 = new THREE.Vector3(v1_x, v1_y, v1_z);
  var v2 = new THREE.Vector3(v2_x, v2_y, v2_z);

  geometry = new THREE.Geometry();
  geometry.vertices.push(v0);
  geometry.vertices.push(v1);
  geometry.vertices.push(v2);

  var face1 = new THREE.Face3(0, 1, 2);
  var face2 = new THREE.Face3(1, 0, 2);

  geometry.faces.push(face1);
  geometry.faces.push(face2);
  geometry.computeFaceNormals();

  //MATERIAL
  material = new THREE.MeshBasicMaterial({color: 0xffffff});
  //MESH (GEOMETRY + MATERIAL)
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  //sceneReady = true;
}

function addCircle(){
  r = document.getElementById("r_circle").value;
  theta = document.getElementById("theta_circle").value;
  geometry = new THREE.CircleGeometry(r, 20, theta);
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, material);
  mesh.name = "Circle " + numCircle
  numCircle++;
  var option = document.createElement("option");
  option.text = mesh.name;
  selectErase.add(option);
  selectPaint.add(option);
  scene.add(mesh);
  //sceneReady = true;
}

function eraseFigure(){
  var selectedObject = scene.getObjectByName(selectErase.value);
  scene.remove(selectedObject);
  for (var i=0; i<selectErase.length; i++) {
    if (selectErase.options[i].value == selectErase.value)
      selectErase.remove(i);
      selectPaint.remove(i);
  }
}

function paintFigure(){
  var selectedObject = scene.getObjectByName(selectPaint.value);
  selectedObject.material.color.set(colorInput.value);
}

function initEventHandler(evt)
{

}
