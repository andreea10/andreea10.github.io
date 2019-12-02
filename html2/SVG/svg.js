document.getElementById("id_logic_version").innerHTML = "Logic Version = 2019.10.25.3";

window.addEventListener("deviceorientation", on_orientation_uab);
window.addEventListener("devicemotion", on_motion_uab);

function desenare(beta, gamma)
{
	var circle = document.getElementById("id_circle");
	var svg=document.getElementById("id_svg");
	
	
	
	
	var x = svg.width / 2 + beta / 90 * svg.width / 2 ;
	var y = svg.height / 2 + gamma / 90 * svg.height / 2 ;
	
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
	
	
	var beta = -Math.atan(acc.y / acc.z) / Math.PI * 180;
	var gamma = Math.atan(acc.x / acc.z) / Math.PI * 180;
	
}