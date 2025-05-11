<?php
session_start();
include('connnect.php');    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="message">
        <p>Welcome to the homepage!</p>
        <p>
            Hello <?php
            if (isset($_SESSION['email'])) {
                $email=$_SESSION['email'];
                $query = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
                while($row=mysqli_fetch_array($query)){
                    echo $row['first_name']." ".$row['last_name'];
                }
            }
                
            ?>
        </p>
    </div>
</body>
</html>