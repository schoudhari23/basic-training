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