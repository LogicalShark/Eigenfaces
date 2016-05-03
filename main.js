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
	weights[0] = parseInt(document.getElementById("f1").value, 10);
	weights[1] = parseInt(document.getElementById("f2").value, 10);
	weights[2] = parseInt(document.getElementById("f3").value, 10);
	weights[3] = parseInt(document.getElementById("f4").value, 10);
	weights[4] = parseInt(document.getElementById("f5").value, 10);
	weights[5] = parseInt(document.getElementById("f6").value, 10);
	var vout = 0;
	console.log("asdf");
	var hues = [0][0];
	// https://github.com/oliver-moran/jimp
	for(var n = 0; n<6; n++)
	{
		var m = n+1;
		//Resize and quality all
		Jimp.read("images/Layer "+m+".png").then(function (face) {
			face.resize(256, 256)            // resize
			.quality(60)                 // set JPEG quality
			.write("images/Layer "+m+".png"); // save
			}).catch(function (err) {
		console.error(err);
		});
		//Scan and record hue values
		Jimp.read("images/Layer "+m+".png").then(function (face) {
			face.scan(0, 0, face.bitmap.width, face.bitmap.height, function (x, y, idx) {
				// x, y is the position of this pixel on the image
				// idx is the position start position of this rgba tuple in the bitmap Buffer
				// this is the image
				hues[x][y] += this.bitmap.data[idx]*weights[n];
			})
			}).catch(function (err) {
		console.error(err);
		});
	}
	
	// c1 = document.createElement("canvas");
	// cx1 = c1.getContext("2d");
	// cx1.drawImage("images/Layer 1");
	// d = cx1.getImageData(0, 0, cx1.width, cx1.height).data;

	canvas = document.getElementById("canvas");
	cx = canvas.getContext("2d");
	w = cx.width;
	h = cx.height;
	imageData = cx.createImageData(w,h);
	for (x = 0; x< w; x++) 
	{
		for(y = 0; y<h; y++)
		{
			setPixel(x, y, hue[x][y], 255)
		}
	}
	cx.putImageData(imageData, 0, 0);
}

