var numberOfSquares = 6;
var colors = [];

var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();
function init()
{
	for(var i=0;i<modeButtons.length;i++)
 {
 	//mode buttons event listeners
 	modeButtons[i].addEventListener("click",function(){
 		modeButtons[0].classList.remove("selected");
 		modeButtons[1].classList.remove("selected");
 		this.classList.add("selected");
 		if(this.textContent==="Easy")
 		{
 			numberOfSquares = 3;
 		}	
 		else
 		{
 			numberOfSquares = 6;
 		}
 		resetting();
 	});
 }
 for(var i=0;i<squares.length;i++)
 {
 	//squares[i].style.backgroundColor = colors[i];

 	squares[i].addEventListener("click",function(){
 		clickedColor=this.style.backgroundColor;
 		if(clickedColor===pickedColor)
 		{
 			messageDisplay.textContent = "Correct!!";
 			chaneColors(clickedColor);
 			reset.textContent = "Play Again?";
 			h1.style.backgroundColor = clickedColor;
 		}
 		else
 		{
 			this.style.backgroundColor = "#232323";
 			messageDisplay.textContent = "try again!!";
 		}
 	});
 }
 resetting();
}
 

 function resetting()
 {
 	colors = generateRandomColors(numberOfSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	reset.textContent = "New Colors";
 	messageDisplay.textContent="";
 	for(var i = 0;i<squares.length;i++)
 	{
 		if(colors[i])
 		{
 			squares[i].style.display="block";
 		squares[i].style.backgroundColor = colors[i];
 		}
 		else
 		{
 			squares[i].style.display="none";
 		}
 	}
 	h1.style.backgroundColor = "steelblue";
 }
 // easyBtn.addEventListener("click",function(){
 // 	easyBtn.classList.add("selected");
 // 	hardBtn.classList.remove("selected");
 // 	numberOfSquares = 3;
 // 	colors = generateRandomColors(numberOfSquares);
 // 	pickedColor = pickColor();
 // 	colorDisplay.textContent = pickedColor;
 // 	for(var i=0;i<squares.length;i++)
 // 	{
 // 		if(colors[i])
 // 		{
 // 			squares[i].style.backgroundColor = colors[i];
 // 		}
 // 		else
 // 		{
 // 			squares[i].style.display = "none";
 // 		}
 // 	}
 // });
 // hardBtn.addEventListener("click",function(){
 // 	hardBtn.classList.add("selected");
 // 	easyBtn.classList.remove("selected");
 // 	numberOfSquares = 6;
 // 	colors = generateRandomColors(numberOfSquares);
 // 	pickedColor = pickColor();
 // 	colorDisplay.textContent = pickedColor;
 // 	for(var i=0;i<squares.length;i++)
 // 	{
		
 // 			squares[i].style.backgroundColor = colors[i];
 // 			squares[i].style.display = "block";
		
 // 	}
 // });

reset.addEventListener("click",function(){
	resetting();
});

for(var i=0;i<squares.length;i++)
 {
 	//squares[i].style.backgroundColor = colors[i];

 	squares[i].addEventListener("click",function(){
 		clickedColor=this.style.backgroundColor;
 		if(clickedColor===pickedColor)
 		{
 			messageDisplay.textContent = "Correct!!";
 			chaneColors(clickedColor);
 			reset.textContent = "Play Again?";
 			h1.style.backgroundColor = clickedColor;
 		}
 		else
 		{
 			this.style.backgroundColor = "#232323";
 			messageDisplay.textContent = "try again!!";
 		}
 	});
 }

 function chaneColors(color)
 {
 	for(var i=0;i<squares.length;i++)
 	{
 		squares[i].style.backgroundColor = color;
 	}
 }
 function pickColor()
 {
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }
 function generateRandomColors(num)
 {
 	var arr = [];
 	for(var i=0;i<num;i++)
 	{
 		arr.push(randomColor())
 	}


 	return arr;
 }
 function randomColor()
 {
 	var r = Math.floor(Math.random()*256);
 	var g = Math.floor(Math.random()*256);
 	var b = Math.floor(Math.random()*256);


 	 return "rgb(" + r + ", " + g + ", " + b + ")";
 }