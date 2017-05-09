function setPixel(imageData, x, y, h, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = h;
    imageData.data[index+1] = h;
    imageData.data[index+2] = h;
    imageData.data[index+3] = a;
}
function identify()
{
	var weights = [];
}
function combine()
{
	var weights = [];
	weights[0] = document.getElementById("f1").value;
	weights[1] = document.getElementById("f2").value;
	weights[2] = document.getElementById("f3").value;
	weights[3] = document.getElementById("f4").value;
	weights[4] = document.getElementById("f5").value;
// 	weights[5] = document.getElementById("f6").value;
// 	weights[6] = document.getElementById("f7").value;
// 	weights[7] = document.getElementById("f8").value;
	makeFace(weights);
}
function randomWeights()
{
	var weights = [];
	var x;
	for(x = 0; x<5; x++)
	{
		weights[x] =  (Math.sqrt(Math.random()) - .5)*0.6;
		console.log(""+weights[x]);
	}
	makeFace(weights);	
}
function makeFace(weights)
{
	// var weights = [];
	var size = 128;
	// weights[0] = parseInt(document.getElementById("f1").value, 10);
	// weights[1] = parseInt(document.getElementById("f2").value, 10);
	// weights[2] = parseInt(document.getElementById("f3").value, 10);
	// weights[3] = parseInt(document.getElementById("f4").value, 10);
	// weights[4] = parseInt(document.getElementById("f5").value, 10);
	// weights[5] = parseInt(document.getElementById("f6").value, 10);
	var vout = 0;
	var hues = [];
	for(x = 0; x<size; x++)
	{
		hues[x] = [0];
		for(y = 0; y<size; y++)
		{
			hues[x][y] = 0;
		}
	}
	
	var c = document.createElement("canvas");
	var cx = c.getContext("2d");
	cx.drawImage(document.getElementById("face1"), 0, 0, size, size);
	var d = cx.getImageData(0,0,size,size);
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weights[0])*d.data[index];
		}
	}
	var c = document.createElement("canvas");
	var cx = c.getContext("2d");
	cx.drawImage(document.getElementById("face2"), 0, 0, size, size);
	var d = cx.getImageData(0,0,size,size);;
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weights[1])*d.data[index];
		}
	}
		var c = document.createElement("canvas");
	var cx = c.getContext("2d");
	cx.drawImage(document.getElementById("face3"), 0, 0, size, size);
	var d = cx.getImageData(0,0,size,size);
	var weight = document.getElementById("f3").value;
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weights[2])*d.data[index];
		}
	}
	var c = document.createElement("canvas");
	var cx = c.getContext("2d");
	cx.drawImage(document.getElementById("face4"), 0, 0, size, size);
	var d = cx.getImageData(0,0,size,size);
	var weight = document.getElementById("f4").value;
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weights[3])*d.data[index];
		}
	}
	var c = document.createElement("canvas");
	var cx = c.getContext("2d");
	cx.drawImage(document.getElementById("face5"), 0, 0, size, size);
	var d = cx.getImageData(0,0,size,size);
	var weight = document.getElementById("f5").value;
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weights[4])*d.data[index];
		}
	}
// 	var c = document.createElement("canvas");
// 	var cx = c.getContext("2d");
// 	cx.drawImage(document.getElementById("face6"), 0, 0, size, size);
// 	var d = cx.getImageData(0,0,size,size);
// 	var weight = document.getElementById("f6").value;
// 	for (x = 0; x<size; x++) 
// 	{
// 		for(y = 0; y<size; y++)
// 		{
// 			index = ((x*(d.width*4)) + (y*4)) + 2;
// 			hues[x][y]+=parseFloat(weights[5])*d.data[index];
// 		}
// 	}
// 	var c = document.createElement("canvas");
// 	var cx = c.getContext("2d");
// 	cx.drawImage(document.getElementById("face7"), 0, 0, size, size);
// 	var d = cx.getImageData(0,0,size,size);
// 	var weight = document.getElementById("f7").value;
// 	for (x = 0; x<size; x++) 
// 	{
// 		for(y = 0; y<size; y++)
// 		{
// 			index = ((x*(d.width*4)) + (y*4)) + 2;
// 			hues[x][y]+=parseFloat(weights[6])*d.data[index];
// 		}
// 	}
// 	var c = document.createElement("canvas");
// 	var cx = c.getContext("2d");
// 	cx.drawImage(document.getElementById("face8"), 0, 0, size, size);
// 	var d = cx.getImageData(0,0,size,size);
// 	var weight = document.getElementById("f8").value;
// 	for (x = 0; x<size; x++) 
// 	{
// 		for(y = 0; y<size; y++)
// 		{
// 			index = ((x*(d.width*4)) + (y*4)) + 2;
// 			hues[x][y]+=parseFloat(weights[7])*d.data[index];
// 		}
// 	}
	canv = document.createElement("canvas");
	cx = canv.getContext("2d");
	imageData = cx.createImageData(size, size);
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			setPixel(imageData, x, y, parseInt(hues[y][x], 10), 255)
		}
	}
	cx.putImageData(imageData, 0, 0);
	document.body.appendChild(canv);
}

