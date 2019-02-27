<<<<<<< HEAD
$(function()
{
    $("#regst").validate(
      {
        rules: 
        {
          fname: 
          {
            required: true,
            maxlength: 10
          },
          fathername: 
          {
            required: true,
            maxlength: 10
          },
          email: 
          {
            required: true,
            email: true,
            minlength:10
          },
          mobile:
          {
            required: true,
            minlength: 10,
            maxlength: 10,
            matches:"[0-9]+"
          },
          address:
          {
            required: true,
            rangelength:[10,250]
          },
          message: 
          {
            rangelength:[50,1050]
          }
        }
      });	
});
=======
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
>>>>>>> ee3642e... Reading content of file using callback

