var fs = require("fs");
var files = ["file1.txt","file2.txt","file3.txt","file4.txt","file5.txt"]

var index = 0;
fileRead(0);
function fileRead(index) {
	if(index == 5) {
		console.log("Done")
	} else {
		fs.readFile(files[index], function(error,data) {
			if(error) {
				console.log(error);
			} else {
					console.log(data.toString());
					console.log(data.toString());
					console.log("================");
					fileRead(index+1);
				} 
		})
	}
}

