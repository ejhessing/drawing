// Create a drawing app

var color = $('.selected').css("background-color");
var $canvas = $("canvas");	
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li" ,function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//select clicked elements
	$(this).addClass("selected");
	//cashe current color
	color = $(this).css("background-color");

});

//When "New Color" Button is clicked 
$("#revealColorSelect").click(function(){
	//Show or hide colorSelect 
	changeColor();
	$("#colorSelect").toggle();

});

	//update the new color span
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();

	$('#newColor').css("background-color","rgb(" + r + "," + g + "," + b + ")" );
}

//When color sliders change 
$("input[type=range").change(changeColor);



// When "Add Color" button is clicked
$("#addNewColor").click(function(){
	//append the color to the control ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $('#newColor').css("background-color"));
	$(".controls ul").append($newColor);
	//select the new color
	$newColor.click();
});



//on mouse events on the canvas 
$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	//draw lines
	if(mouseDown){
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});		





