var loaderContainerX=document.createElement("div");
var loaderContainerY=document.createElement("div");
var loader=document.createElement("div");

loaderContainerX.setAttribute("id", "loader-container-x");
loaderContainerY.setAttribute("id", "loader-container-y");
loader.setAttribute("id", "loader");

loaderContainerX.appendChild(loaderContainerY);
loaderContainerY.appendChild(loader);
window.onload=function(){
	//document.body.appendChild(loaderContainerX);
	document.body.
	insertBefore(loaderContainerX, document.body.firstChild);
}

var lightLoader={
	show:function(){
		//$("#l-x").css('display','flex');
		var x=document.getElementById("loader-container-x");
		x.style.display="flex";
		document.body.style.overflow="hidden";
	},
	hide:function(){
		//$("#l-x").css('display','none');
		var x=document.getElementById("loader-container-x");
		x.style.display="none";
	}
}