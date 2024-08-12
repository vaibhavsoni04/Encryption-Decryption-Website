<?php
	$fName = $_POST["fname"];
	$lName = $_POST["lname"];
  $username = $_POST["uname"];
	$pwd = $_POST["password"];
	$cpwd = $_POST["c-password"];
	$Email = $_POST["email"];
	$Phoneno = $_POST["Mobile_No"];
	$DOB = $_POST["dob"];
  $Gender = $_POST["gender"];
	$conn = mysqli_connect("localhost","root","","iu287");

	$existSql = "SELECT * FROM `user-data` WHERE username = '$username'";
	$result = mysqli_query($conn, $existSql);
	$numExistRows = mysqli_num_rows($result);
	   if($numExistRows > 0){
					echo '<script>';
    			echo 'alert("Username Already Exists..!!");';
    			echo 'window.location.href = "sign-up.html";';
    			echo '</script>';
	   }
	   else{
	    if($pwd == $cpwd){

					$s = "INSERT INTO `user-data`(`First_name`, `Last_name`, `username`, `password`, `c-password`, `Phone`, `E-mail`,
					`DOB`, `Gender`) VALUES ('$fName', '$lName', '$username', '$pwd', '$cpwd', '$Phoneno', '$Email', '$DOB', '$Gender')";

	        $result = mysqli_query($conn, $s);
	        if ($result){
	              header("location: index.html");
	        }
	    }
	    else{
					echo '<script>';
    			echo 'alert("Passwords do not match..!!");';
    			echo 'window.location.href = "sign-up.html";';
    			echo '</script>';
	    }
	}
?>
