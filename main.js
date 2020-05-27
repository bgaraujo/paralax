

function handleOrientation(event) {
  document.getElementById('back').style.marginLeft = (event.gamma*2).toFixed(1)+"px";
  document.getElementById('back').style.marginTop = (event.beta*2).toFixed(1)+"px";

  document.getElementById('star').style.marginLeft = ((event.gamma*-1)*2).toFixed(1)+"px";
  document.getElementById('star').style.marginTop = ((event.beta*-1)*2).toFixed(1)+"px";

  
  updateFieldIfNotNull('Orientation_a', event.alpha);
  updateFieldIfNotNull('Orientation_b', event.beta);
  updateFieldIfNotNull('Orientation_g', event.gamma);
}


function updateFieldIfNotNull(fieldName, value, precision=10){
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
}

window.addEventListener("deviceorientation", handleOrientation);
document.getElementById("start_demo").innerHTML = "Stop demo";

/*
Light and proximity are not supported anymore by mainstream browsers.
window.addEventListener('devicelight', function(e) {
   document.getElementById("DeviceLight").innerHTML="AmbientLight current Value: "+e.value+" Max: "+e.max+" Min: "+e.min;
});

window.addEventListener('lightlevel', function(e) {
   document.getElementById("Lightlevel").innerHTML="Light level: "+e.value;
});

window.addEventListener('deviceproximity', function(e) {
   document.getElementById("DeviceProximity").innerHTML="DeviceProximity current Value: "+e.value+" Max: "+e.max+" Min: "+e.min;
});

window.addEventListener('userproximity', function(event) {
   document.getElementById("UserProximity").innerHTML="UserProximity: "+event.near;
});
*/

