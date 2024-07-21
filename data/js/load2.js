	document.getElementById("footer").innerHTML =
		"<div class='bottom'><a class='link' href='/store'>Home</a> | <a class='link' href='#'>Donate</a> | <a class='link' href='https://forms.gle/3K4SPBr6ZJJgpheJA'>Contact</a></div>"
	+ 	"<h3 class='made_by'>Made with <i class='fa-regular fa-heart'></i> Ads Free &copy; 2024</h3>"	
	;

$(function(){
  $("#header").load("/store/header.html");
  $("#all").load("all.html");
  $("#mahakal").load("/store/data/location/mahakal.html");   
});
