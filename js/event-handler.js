var geometry, material;

function toolsEvent(evt)
{
	// MODEL
    // GEOMETRY
    switch (evt) {
      case "1":
        geometry = new THREE.BoxGeometry();
        //MATERIAL
        material = new THREE.MeshNormalMaterial();
        //MESH (GEOMETRY + MATERIAL)
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        sceneReady = true;
        break;
      case "2":
        break;
      case "5":

        var v0 = new THREE.Vector3(0, 0.5 ,0);
        var v1 = new THREE.Vector3(-0.5, -0.5, 0);
        var v2 = new THREE.Vector3(0.5, -0.5, 0);

        geometry = new THREE.Geometry();
        geometry.vertices.push(v0);
        geometry.vertices.push(v1);
        geometry.vertices.push(v2);

        var faces = new THREE.Face3(0, 1, 2);
        geometry.faces.push(faces);
        geometry.computeFaceNormals();
        
        //MATERIAL
        material = new THREE.MeshNormalMaterial();
        //MESH (GEOMETRY + MATERIAL)
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        sceneReady = true;
        break;
      case "9":
        geometry = new THREE.CircleGeometry();

        material = new THREE.MeshNormalMaterial();

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        sceneReady = true;
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

function selectSphere(evt){
  // MODEL
    // GEOMETRY
    geometry = new THREE.SphereGeometry();
    // MATERIAL
    material = new THREE.MeshNormalMaterial();
    // MESH (GEOMETRY + MATERIAL)
  	mesh = new THREE.Mesh(geometry, material);
  	scene.add(mesh);
  	sceneReady = true;
}


function initEventHandler(evt)
{

}
