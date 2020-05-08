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
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
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
      //Ereaser
        if(selected){
          scene.remove(selected);
          selected = null;
          document.getElementById("span-selected").innerHTML = "";
        }
        if(selectedGroup){
          scene.remove(selectedGroup);
          var wasPoped = false;
          for (i = 0; i < groups.length - 1; i++){
            if (groups[i] === selectedGroup){
              groups.splice(i, 1);
              i--;
              wasPoped = true;
            }
            if (wasPoped){
              var target = i + 2;
              var byValue = document.querySelectorAll('input[value="' + target +'"]') 
              byValue[0].value = i + 1;           
            }
          }
          document.getElementById(selectedGroup.name).nextSibling.remove();
          document.getElementById(selectedGroup.name).nextSibling.remove();
          document.getElementById(selectedGroup.name).remove();
          selectedGroup = null;
        }
        break;
      case "3":
      //Segment or Plane
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        var result_style = document.getElementById('plane-menu').style;
        if(plane) scene.remove(plane);
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
        groups = [];
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
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
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
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        var result_style = document.getElementById('rectangle-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
        break;
      case "8":
      //Fill or wireframe
        break;
      case "9":
      //Circle or sphere
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
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
      //Polygon
        break;
      case "11":
      //Polygon
        break;
      case "12":
      //Add Group
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        var result_style = document.getElementById('addGroup-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
        break;
      default:

    }
}
function addPoint(){
  geometry = new THREE.BufferGeometry();
  var x = document.getElementById("x_point").value;
  var y = document.getElementById("y_point").value;
  var z = document.getElementById("z_point").value;

  var vertices = new Float32Array( [ x, y, z] );

  geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
  material = new THREE.PointsMaterial( { size: .05, color: colorInput.value } );

  mesh = new THREE.Points( geometry, material );
  mesh.name = "Point " + numPoint
  numPoint++;

  if(selectedGroup != undefined){
    selectedGroup.add(mesh);
  }else{
    scene.add(mesh);
  }
}

function addPlane(){
  var width = document.getElementById("w_plane").value;
  var height = document.getElementById("h_plane").value;
  var y = document.getElementById("y_plane").value;
  geometry = new THREE.PlaneBufferGeometry(Math.floor(width/10), Math.floor(height/10), Math.floor(width/20), Math.floor(height/20));
  //MATERIAL
  material = new THREE.MeshBasicMaterial({wireframe: true});
  //MESH (GEOMETRY + MATERIAL)
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0., y, 0.)
  mesh.rotation.x = mesh.rotation.x - 1.5
  if(plane == undefined){
    plane = mesh;
    scene.add(mesh);
  } else{
    scene.remove(plane);
    plane = mesh;
    scene.add(mesh);
  }
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
  material = new THREE.MeshBasicMaterial({color: colorInput.value});
  //MESH (GEOMETRY + MATERIAL)
  mesh = new THREE.Mesh(geometry, material);

  if(selectedGroup != undefined){
    selectedGroup.add(mesh)
  }else {
    scene.add(mesh);
  }
}

function addCircle(){
  r = document.getElementById("r_circle").value;
  theta = document.getElementById("theta_circle").value;
  geometry = new THREE.CircleGeometry(r, 20, theta);
  material = new THREE.MeshBasicMaterial({color: colorInput.value});
  mesh = new THREE.Mesh(geometry, material);
  mesh.name = "Circle " + numCircle
  numCircle++;
  var option = document.createElement("option");
  option.text = mesh.name;

  if(selectedGroup != undefined){
    selectedGroup.add(mesh)
  }
  scene.add(mesh);
  //sceneReady = true;
}

function addRectangle(){
  var width = document.getElementById("w_cube").value;
  var height = document.getElementById("h_cube").value;
  var depth = document.getElementById("d_cube").value;

  geometry = new THREE.BoxGeometry(width, height, depth);
  //MATERIAL
  material = new THREE.MeshBasicMaterial({color: colorInput.value});
  //MESH (GEOMETRY + MATERIAL)
  mesh = new THREE.Mesh(geometry, material);
  mesh.name = "Square " + numSquare;
  numSquare++;
  if(selectedGroup != undefined){
    selectedGroup.add(mesh);
  }else {
  scene.add(mesh);
  }
}

function onCanvasMouseMove(event){
        event.preventDefault();

				mouse.x = ( event.clientX / canvas.width ) * 2 - 1.55;
				mouse.y = - ( event.clientY / canvas.height ) * 2 + 1.35;
}

function onCanvasMouseClick(event){
        event.preventDefault();
        if ( intersects.length > 0 ) {
    			if ( selected != intersects[ 0 ].object ) {
            selected = intersects[ 0 ].object;
            document.getElementById("span-selected").innerHTML = selected.name;
            //selected.material.color.set( 0xff0000 );
    			}else {
            //selected.material.color.set( 0xffffff );
            selected = null;
            document.getElementById("span-selected").innerHTML = "";
          }
    		}

}

function watchColorPicker(event) {
  if(selected) selected.material.color.set(event.target.value);
}

function initEventHandler(evt){
  document.getElementById("canvas").addEventListener('mousemove', onCanvasMouseMove, false );
  document.getElementById("canvas").addEventListener('click', onCanvasMouseClick, false );
  document.querySelector("#color-palette").addEventListener('change', watchColorPicker, false);
}
