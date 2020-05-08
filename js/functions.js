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
  material = getMaterial();
  //MESH (GEOMETRY + MATERIAL)
  mesh = new THREE.Mesh(geometry, material);
  mesh.name = "Triangle " + numTriangle;
  numTriangle++;
  if(selectedGroup != undefined){
    selectedGroup.add(mesh)
  }else {
    scene.add(mesh);
  }
}

function addCircle(){
  r = document.getElementById("r_circle").value;
  material = getMaterial();
  material.side = THREE.DoubleSide
  switch (figCircle) {
    case "Circle":
      geometry = new THREE.CircleGeometry(r, 20);
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "Circle" + numCircle
      numCircle++;
      var face1 = new THREE.Face3(1, 0, 2);
      var face2 = new THREE.Face3(20, 1, 1);
      var face3 = new THREE.Face3(1, 1, 20);

      geometry.faces.push(face1);


      if(selectedGroup != undefined){
        selectedGroup.add(mesh)
      }else {
        scene.add(mesh);
      }
      break;
    case "Sphere":
      geometry = new THREE.SphereGeometry(r, 20, 20);
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "Sphere" + numCircle
      numSphere++;
      if(selectedGroup != undefined){
        selectedGroup.add(mesh)
      }else {
        scene.add(mesh);
      }
      break;
    default:

  }

  //sceneReady = true;
}

function addRectangle(){
  var width = document.getElementById("w_cube").value;
  var height = document.getElementById("h_cube").value;
  var depth = document.getElementById("d_cube").value;

  material = getMaterial();
  material.side = THREE.DoubleSide;
  switch (figSquare) {
    case "Square":
      geometry = new THREE.PlaneGeometry(width, height, depth);
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "Square " + numSquare;
      numSquare++;
      if(selectedGroup != undefined){
        selectedGroup.add(mesh)
      }else {
        scene.add(mesh);
      }
      break;
    case "Cube":
      geometry = new THREE.BoxGeometry(width, height, depth);
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = "Square " + numSquare;
      numSquare++;
      if(selectedGroup != undefined){
        selectedGroup.add(mesh);
      }else {
      scene.add(mesh);
      }
      break;
    default:

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

function setMaterial(){
  if(selected) selected.material = getMaterial();
  if(selectedGroup){
    for(var i = 0; i < selectedGroup.children.length; i++){
        selectedGroup.children[i].material = getMaterial();
      }
  }
}
function getMaterial(){
  var material = null;
  switch (figMaterial) {
    case "basic":
      material = new THREE.MeshBasicMaterial({color: colorInput.value});
      break;
    case "normal":
      material = new THREE.MeshNormalMaterial();
      break;
    case "depth":
      material = new THREE.MeshDepthMaterial();
      break;
    case "lambert":
      material = new THREE.MeshLambertMaterial({color: colorInput.value});
      break;
    case "phong":
      material = new THREE.MeshPhongMaterial({color: colorInput.value});
      break;
    case "physical":
      material = new THREE.MeshPhysicalMaterial({color: colorInput.value});
      break;
    case "standart":
      material = new THREE.MeshStandardMaterial({color: colorInput.value});
      break;
    case "img":
      material = getImageMaterial();
      break;
    default:
  }
  return material;
}

function setLineWidth(){
  var width = document.getElementById("line_range").value;

  if(selected) selected.material.wireframeLinewidth = width;
  if(selectedGroup){
    for(var i = 0; i < selectedGroup.children.length; i++){
        selectedGroup.children[i].material.wireframeLinewidth = width;
      }
  }

}

function getImageMaterial(){
  var archiv = "/material-images/" + document.getElementById("img-material").files[0].name;
  console.log(archiv);
  var material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(archiv)});
  return material;
}

function setSelectedNull(){
  selectedGroup = undefined;
}

function toggleOrbit(){
  orbit = !orbit;
  if(orbit == true){
    camera.position.set(0., 0., 5.);
    camera.lookAt(new THREE.Vector3(0., 0., 0.));
  }
}

function playAnimation(){
  animation = !animation;
}
