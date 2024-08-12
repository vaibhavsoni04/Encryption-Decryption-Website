<?php
  $conn = mysqli_connect("localhost","root","","iu287");
  $username = $_POST["uname"];
  $pwd = $_POST["password"];
  $sql = "SELECT * from `user-data` where username='$username'";
  $result = mysqli_query($conn, $sql);

  $num = mysqli_num_rows($result);

  if ($num == 1){
      while($row=mysqli_fetch_assoc($result)){
          if ($pwd == $row['password']){
              header("Location: index.html");
          }
          else{
              echo '<script>';
        			echo 'alert("Invalid Credentials..!!");';
        			echo 'window.location.href = "log-in.html";';
        			echo '</script>';
          }
      }

  }
  else{
    echo '<script>';
    echo 'alert("Please Enter information..!!");';
    echo 'window.location.href = "log-in.html";';
    echo '</script>';
  }
?>
