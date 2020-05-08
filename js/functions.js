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

function moveTo(){

  var x = document.getElementById("translate_x").value;
  var y = document.getElementById("translate_y").value;
  var z = document.getElementById("translate_z").value;

  if(selected) selected.position.set(x, y, z);
  if(selectedGroup) selectedGroup.position.set(x, y, z);
}

function scale(){
  var x = document.getElementById("scale_x").value;
  var y = document.getElementById("scale_y").value;
  var z = document.getElementById("scale_z").value;

  if(selected) selected.scale.set(x, y, z);
  if(selectedGroup) selectedGroup.scale.set(x, y, z);
}

function rotate(){
  var theta = document.getElementById("rotate_theta").value;

  switch (rotate_axis) {
    case "x":
      if(selected) selected.rotation.x = selected.rotation.x + (theta * Math.PI)/180 ;
      if(selectedGroup) selectedGroup.rotation.x = selectedGroup.rotation.x + (theta * Math.PI)/180 ;
      break;
    case "y":
      if(selected) selected.rotation.y = selected.rotation.y + (theta * Math.PI)/180 ;
      if(selectedGroup) selectedGroup.rotation.y = selectedGroup.rotation.y + (theta * Math.PI)/180 ;
      break;
    case "z":
      if(selected) selected.rotation.z = selected.rotation.z + (theta * Math.PI)/180 ;
      if(selectedGroup) selectedGroup.rotation.z = selectedGroup.rotation.z + (theta * Math.PI)/180 ;
      break;
    default:

  }


}