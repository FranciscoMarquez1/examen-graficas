var geometry, material;

function toolsEvent(evt)
{
	// MODEL
    // GEOMETRY
    switch (evt) {
      case "0":
      //Material
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        var result_style = document.getElementById('material-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
          document.getElementById("x_point").value = '0';
          document.getElementById("y_point").value = '0';
          document.getElementById("z_point").value = '0';
        }
        break;
      case "1":
      //Point
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
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
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
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
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
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
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
        var result_style = document.getElementById('line-width-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
        break;
      case "7":
      //Rectangle or cube
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
        var result_style = document.getElementById('rectangle-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
        break;
      case "8":
      //Fill or wireframe
        if(selected) {
          selected.material.wireframe = !selected.material.wireframe
        }
        else if (selectedGroup){
          for(var i = 0; i < selectedGroup.children.length; i++){
            selectedGroup.children[i].material.wireframe = !selectedGroup.children[i].material.wireframe;
          }
        }
        break;
      case "9":
      //Circle or sphere
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
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
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
        var result_style = document.getElementById('translate-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
        break;
      case "13":
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
        var result_style = document.getElementById('scale-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
        break;
      case "14":
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        document.getElementById('addGroup-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
        var result_style = document.getElementById('rotate-menu').style;
        if(result_style.display == "none"){
          result_style.display = 'flex';
        }else{
          result_style.display = 'none';
        }
        break;
      case "15":
      //Add Group
        document.getElementById('plane-menu').style.display = 'none';
        document.getElementById('triangle-menu').style.display = 'none';
        document.getElementById('circle-menu').style.display = 'none';
        document.getElementById('point-menu').style.display = 'none';
        document.getElementById('rectangle-menu').style.display = 'none';
        document.getElementById('translate-menu').style.display = 'none';
        document.getElementById('scale-menu').style.display = 'none';
        document.getElementById('rotate-menu').style.display = 'none';
        document.getElementById('line-width-menu').style.display = 'none';
        document.getElementById('material-menu').style.display = 'none';
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
    			}else {
            selected = null;
            document.getElementById("span-selected").innerHTML = "";
          }
    		}

}

function watchColorPicker(event) {
  if(selected) {
    selected.material.color.set(event.target.value);
  }
  else if (selectedGroup){
    for(var i = 0; i < selectedGroup.children.length; i++){
      selectedGroup.children[i].material.color.set(event.target.value);
    }
  }
}

function clickSubmitEventListener(event)
{
	var fileNameNew;
	try
	{
		fileNameNew = "\\models\\" + document.getElementById("file").files[0].name;
	}
	catch(err)
	{
		document.getElementById("lab-msg").innerHTML = "Error when loading a file!";
	}
	if(fileNameNew)
	{
		if(fileNameNew != fileName)
		{
			fileName = fileNameNew;
			load(fileName);
		}
	}
}

function initEventHandler(evt){
  document.getElementById("submit").addEventListener('click', clickSubmitEventListener, false);
  document.getElementById("canvas").addEventListener('mousemove', onCanvasMouseMove, false );
  document.getElementById("canvas").addEventListener('click', onCanvasMouseClick, false );
  document.querySelector("#color-palette").addEventListener('change', watchColorPicker, false);
  var rotation = document.rotation_axis.axis_rotate;
  for (var i = 0; i < rotation.length; i++) {
      rotation[i].addEventListener('change', function() {
          rotate_axis = this.value;
      });
  }
  var circle = document.circular_fig.figCir;
  for (var i = 0; i < circle.length; i++) {
      circle[i].addEventListener('change', function() {
          figCircle = this.value;
      });
  }
  var square = document.square_fig.figSqr;
  for (var i = 0; i < square.length; i++) {
      square[i].addEventListener('change', function() {
          figSquare = this.value;
      });
  }
  var materials = document.material_form.material;
  for (var i = 0; i < materials.length; i++) {
      materials[i].addEventListener('change', function() {
          figMaterial = this.value;
      });
  }
}
