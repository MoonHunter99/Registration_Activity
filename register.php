<?php

include 'connnect.php';

if(isset($_POST['signUp'])){
    $username = $_POST['username'];
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $middleName = $_POST['mname'];
    $suffix = $_POST['suffix'];
    $phone = $_POST['phone'];
    $region = $_POST['region'];
    $province = $_POST['province'];
    $municipality = $_POST['municipality'];
    $barangay = $_POST['barangay'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password=md5($password);


     $checkEmail = "SELECT * FROM users WHERE email='$email'";
     $result=$conn->query($checkEmail);
     if($result->num_rows>0){
        echo "Email Address already exists !";        
     }
     else{
        $insertQuery = "INSERT INTO users (username, first_name, last_name, middle_name, suffix, phone_number, region, province, municipality, barangay, email, password) 
        VALUES ('$username', '$firstName', '$lastName', '$middleName', '$suffix', '$phone', '$region', '$province', '$municipality', '$barangay', '$email', '$password')";

        if($conn->query($insertQuery) === TRUE){
            header("location: index.php");
        }else{
            echo "Error: ".$conn->error;
        }      
     }
}

if(isset($_POST['signIn'])){
   $email=$_POST['email'];
   $password=$_POST['password'];
   $password=md5($password) ;
   
   $sql="SELECT * FROM users WHERE email='$email' and password='$password'";
   $result=$conn->query($sql);
   if($result->num_rows>0){
    session_start();
    $row=$result->fetch_assoc();
    $_SESSION['email']=$row['email'];
    header("Location: homepage.php");
    exit();
   }
   else{
    echo "Not Found, Incorrect Email or Password";
   }

}
?>