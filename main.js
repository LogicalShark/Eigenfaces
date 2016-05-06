function setPixel(imageData, x, y, h, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = h;
    imageData.data[index+1] = h;
    imageData.data[index+2] = h;
    imageData.data[index+3] = a;
}
function combine()
{
	var weights = [];
	var size = 128;
	weights[0] = parseInt(document.getElementById("f1").value, 10);
	weights[1] = parseInt(document.getElementById("f2").value, 10);
	weights[2] = parseInt(document.getElementById("f3").value, 10);
	weights[3] = parseInt(document.getElementById("f4").value, 10);
	weights[4] = parseInt(document.getElementById("f5").value, 10);
	weights[5] = parseInt(document.getElementById("f6").value, 10);
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
	var weight = document.getElementById("f1").value;
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weight)*d.data[index];
		}
	}
	var c = document.createElement("canvas");
	var cx = c.getContext("2d");
	cx.drawImage(document.getElementById("face2"), 0, 0, size, size);
	var d = cx.getImageData(0,0,size,size);
	var weight = document.getElementById("f2").value;
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weight)*d.data[index];
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
			hues[x][y]+=parseFloat(weight)*d.data[index];
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
			hues[x][y]+=parseFloat(weight)*d.data[index];
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
			hues[x][y]+=parseFloat(weight)*d.data[index];
		}
	}
	var c = document.createElement("canvas");
	var cx = c.getContext("2d");
	cx.drawImage(document.getElementById("face6"), 0, 0, size, size);
	var d = cx.getImageData(0,0,size,size);
	var weight = document.getElementById("f6").value;
	for (x = 0; x<size; x++) 
	{
		for(y = 0; y<size; y++)
		{
			index = ((x*(d.width*4)) + (y*4)) + 2;
			hues[x][y]+=parseFloat(weight)*d.data[index];
		}
	}
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
	console.log("asdf");
	cx.putImageData(imageData, 0, 0);
	document.body.appendChild(canv);
}

