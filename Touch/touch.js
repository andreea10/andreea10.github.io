document.getElementById("id_logic").innerHTML = "Logic: 2019.12.02.0";

window.addEventListener("touchstart", touch_start_uab);

 var canvas = document.getElementById("id_canvas");
 var context = canvas.getElementById("2d");

function touch_start_uab(p)
{
	var t=p.changedTouches;
	for(var i=0;i<t.length;i++) {
		context.beginPath();
		context.arc(t[i].pageX,t[i].pageY,10,0,2*Math.PI);
		context.stroke();	
	}
} 