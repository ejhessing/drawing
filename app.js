// Create a drawing app

var color = $('.selected').css("background-color");



//When clicking on control list items
$(".controls li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//select clicked elements
	$(this).addClass("selected");
	//cashe current color
	color = $(this).css("background-color");

});

//When "New Color Button" is clicked 
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



// When add color is clicked
	//append the color to the control ul
	//select the new color

//on mouse events on the vancus 
	//draw lines		
