<?php

if($_POST)
{

include 'config.php';

$email = $_POST['email'];
$name = $_POST['name'];
$phone =$_POST['phone'];
$message = $_POST['message'];

$subject1='Thank you for showing interest in us.';
$subject2='IKBL user contact detail';
if(isset($_POST['check']) && $_POST['check']=='#$%&^)(@#$'){
 $date=date("F j, Y, g:i a");

	$m_id=date("F");
	if($m_id=="January"){
	$m_id=1;
	}elseif($m_id=="Febuary"){
	$m_id=2;
	}elseif($m_id=="March"){
	$m_id=3;
	}elseif($m_id=="April"){
	$m_id=4;
	}elseif($m_id=="May"){
	$m_id=5;
	}elseif($m_id=="June"){
	$m_id=6;
	}elseif($m_id=="July"){
	$m_id=7;
	}elseif($m_id=="August"){
	$m_id=8;
	}elseif($m_id=="September"){
	$m_id=9;
	}elseif($m_id=="October"){
	$m_id=10;
	}elseif($m_id=="November"){
	$m_id=11;
	}elseif($m_id=="December"){
	$m_id=12;
	}
	if(isset($_POST['email'])){
  $sql="insert into ikbl_contact_us set name='".mysql_real_escape_string($name)."',email='".mysql_real_escape_string($email)."',phone='".$phone."',message='".mysql_real_escape_string($message)."',date='".mysql_real_escape_string($date)."'";

	 $query=mysql_query($sql,$conn);
         

}
  
    
    
   
$body_user ='<html><body>';
$body_user.= '<body style="background:#f4f4f4; color:000000;font-size:12px;font-family:Arial;">
<table border="0" cellpadding="0px" cellspacing="0px" style="background:#f4f4f4; width:530px; margin:auto; padding:30px 10px;">

<tr><td colspan="2">
<table border="0" cellpadding="0px" cellspacing="0px" style="background:#fff;padding: 42px 30px 32px 30px;">
    <tr>
      <td align="center" height="160" valign="middle"><img src="http://workshop.eyebridge.co.uk/v2/ikbl/images/logo.png"/></td>
    </tr>
<tr>
<td colspan="2" style="color:#419deb;font-size:18px;">Hi '.$name.',<br/><br/></td>
</tr>
<tr>
<td colspan="2" style="color:#419deb;font-size:18px;">Greetings from IKBL.</td>
</tr>
<tr>
<td colspan="2">
<p style="font-size:14px; "></br>Thank you for showing interest in us. 


<br/><br/>


<p>

<br/>


<br/>
<br/> Regards,<br/>
 IKBL,<br>

E: feedback.ikbl@iffco.in<br>
T: 011-26510001/42592626<br>
F: 011-42592833/42592650<br>
</p><p style="font-size:14px;">
</p>
</td>
</tr>
</table>
</td></tr>
<tr><td>&nbsp;</td></tr>
<tr><td>&nbsp;</td></tr>
</table>';

$body_user.= '</body></html>';


$body='<html>

<body style="background:#f4f4f4; color:000000;font-size:12px;font-family:Arial;">
<table border="0" cellpadding="0px" cellspacing="0px" style="background:#f4f4f4; width:530px; margin:auto; padding:30px 10px;">

   <tr>
      <td align="center" height="160" valign="middle"><img src="http://workshop.eyebridge.co.uk/v2/ikbl/images/logo.png"/></td>
    </tr>
  <tr>
    <td style="padding:0px 50px; background:#FFF;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td style="padding:40px 0px 40px 0px; font-family: Arial, Helvetica, sans-serif; font-size:18px; color:#3f99e5;"> The following detail was submitted on IKBL form.</td>
      </tr>
      <tr>
    <td style="padding-left:60px; padding-bottom:25px; font-family: Arial, Helvetica, sans-serif; font-size:14px; line-height:21px;">
       <table width="70%" border="0" cellspacing="0" cellpadding="0">
  
 
  <tr>
    <td style="height:21px;">Email:</td>
    <td style="height:21px;">'.$email.'</td>
  </tr>
   <tr>
    <td style="height:21px;"> Name:</td>
    <td style="height:21px;">'.$name.'</td>
  </tr>
    <tr>
    <td style="height:21px;">Phone:</td>
    <td style="height:21px;">'.$phone.'</td>
  </tr>
     <tr>
    <td style="height:21px;">Message:</td>
    <td style="height:21px;">'.$message.'</td>
  </tr> 
  
   
 </table>
 


    
        </td>
      </tr>
      <tr>
        <td style="font-size:12px; color:#666; font-family: Arial, Helvetica, sans-serif;">The above was submitted on <strong>'.$date.'</strong></td>
      </tr>
      <tr>
    
      </tr>
    </table></td>
  </tr>
</table>

</body>
</html>';

$Sogon="IKBL";
$Email_Sogon="feedback.ikbl@iffco.in";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";		
$headers .= "From: ".$Sogon." <$email>" . "\r\n";

$headers_user  = 'MIME-Version: 1.0' . "\r\n";
$headers_user .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";		
$headers_user .= "From: ".$Sogon." <$Email_Sogon>" . "\r\n";
	
$mail1 = mail($email, $subject1,$body_user,$headers_user);
$email_to = "'feedback.ikbl@iffco.in', 'shweta@eyebridge.in'";
$mail2=mail($email_to, $subject2, $body,$headers);
	

if($mail1 and $mail2 ){
echo 'OK';
} else{
  echo 'error';
}

}



}
?>
