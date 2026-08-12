<?php

$mysql_host="localhost";

$mysql_user="wwwikllt_user";

$mysql_password="TusDqO6CC&ul";

$mysql_database="wwwikllt_db";

$conn=mysql_connect($mysql_host,$mysql_user,$mysql_password) or die("Not able to connect");

mysql_select_db($mysql_database,$conn) or die("Database not selected ");

?>

