	document.getElementById("footer").innerHTML =
		"<div class='text' id='select'></div>"
	+	"<div class='bottom'><a class='link' href='/store/link/apps'>Home</a> | <a class='link' href='/store/link/donate'>Donate</a> | <a class='link' href='https://amzn.to/46eth0K'>Shop</a> | <a class='link' href='https://forms.gle/3K4SPBr6ZJJgpheJA'>Contact</a></div>"
	+ 	"<h3 class='made_by'>Made with <i class='fa-regular fa-heart'></i> Ads Free &copy; 2024</h3>"	
	;

$(function(){
  $("#header").load("/store/header.html");
  $("#all").load("/store/data/all.html");
  $("#live-head").load("/store/data/live/live-head.html");
  $("#select").load("/store/data/live_select.html"); 	
});
