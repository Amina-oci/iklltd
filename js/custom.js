     

function  contact_us(){
     

var str = $("#contact_us_form").serialize();
 $('#preloader').show();
  $.ajax({
  type: "POST",
  url: "contact_us_mail.php",
  data: str,
  success: function(msg){
                 
               
   if(msg='OK')
{
                 
result = '<div id="thank_you"><h2 style="color: #0086c0; font-size: 20px; padding-top: 51px; text-align: center;margin-bottom: 46px">Thank You.<br>We will contact you shortly.<br></h2></div>';
$('#contact_us_form').hide();
$('#preloader').hide();
$(".contact").html(result);
   }
   
 }

 });

}



$(function () {
		
		
		 $('#contact_submit').formValidator({
			onSuccess	: function() { console.log('Success!');
                           
                          contact_us();
			},
			scope		: '#contact_us_form',
			errorDiv	: '#errorDiv2'
		});
		
               });
	// EXECUTE PLUGIN ON DOM READY - END