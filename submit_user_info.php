<?php
include 'DBConfig.php';
$con=new mysqli($HostName,$hostUser,$HostPass,$DatabaseName);
$json=file_get_contents('php://input);
$obj=json_decode(&json,true);
$name=$obj['name'];
$pass=$obj['pass'];
$Sql_Query="insert into info (username,password) values ('$name','$pass')";

