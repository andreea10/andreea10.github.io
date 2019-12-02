document.getElementById("id_logic_version").innerHTML = "Logic Version = 2019.10.25.3";

window.addEventListener("deviceorientation", on_orientation_uab);
window.addEventListener("devicemotion", on_motion_uab);

function desenare(unghi_x, unghi_y)
{
	var circle = document.getElementById("id_circle");
	var svg=document.getElementById("id_svg");
	
	
	
	var r=circle.getAttribute("r")
	var x =unghi_x/90* (svg.width.animVal.value / 2 -r )+  svg.width.animVal.value / 2 ;
	var y = unghi_y/90* (svg.height.animVal.value / 2 -r )+  svg.height.animVal.value / 2 ;
	
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
}

function on_orientation_uab(e)
{
	
	
	desenare(e.beta, e.gamma);
}

function on_motion_uab(e)
{
	var acc = e.accelerationIncludingGravity;
	
	
	var rot_x = -Math.atan(acc.y / acc.z) / Math.PI * 180;
	var rot_y = Math.atan(acc.x / acc.z) / Math.PI * 180;
	
}