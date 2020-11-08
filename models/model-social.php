<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
 if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['userK'])){
            $email     = $_POST['email'];
            $password  = $_POST['password'];
            $userK     = $_POST['userK'];
            $status    = 1;
            $type      = 'social';  
            $dbQueries->Query("SELECT * FROM users WHERE email = '$email' and password = '$password' and type = '$type'");
            if($dbQueries->rowCount() > 0){
                $row        = $dbQueries->fetch();
                $userId     = $row->userId;
                $userK      = $row->userK;
                $tyc        = $row->tyc;
                $dbPassword = $row->password;
                if($password === $dbPassword){
                    // login correctly
                    $_SESSION['userId'] = $userId;
                    $_SESSION['login'] = true;
                         exit(json_encode(array("status" => '2', "userId" => $userId, "userK" => $userK, "tyc" => $tyc)));
                }else {
                    exit(json_encode(array("status" => '0')));
                }
            }else{  
                $userId    = rand(1,1000000000000);
                if($dbQueries->Query("INSERT INTO users (userId, email, password, userK, status, type) VALUES ('$userId', '$email', '$password', '$userK', '$status', '$type')")){
                        exit(json_encode(array("status" => '1', "userId" => $userId, "userK" => $userK)));
                }else {
                     exit(json_encode(array("status" => '0')));
                }
            }
        }else if(isset($_POST['userId']) && isset($_POST['tyc'])) {
            $userId = $_POST['userId'];
            $tyc    = $_POST['tyc'];
            if($dbQueries->Query("UPDATE users SET tyc = '$tyc' WHERE userId = '$userId'")){
                exit(json_encode(array('status' => '4'))); 
            }else {
                exit(json_encode(array('status' => '0')));
            }
        }
}   
?>