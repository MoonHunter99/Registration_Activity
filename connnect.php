<?php

$host="localhost";
$user="root";
$pass="";
$db="loginregis";
$conn= new mysquli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect to database: ".$conn->connect_error;
}
?>