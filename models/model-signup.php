<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['userK']) ){
            $email = $_POST['email'];
            $type  = 'email';
            $dbQueries->Query("SELECT * FROM users WHERE email = '$email' and type = '$type'");
            if($dbQueries->rowCount() > 0){
                exit(json_encode(array("status" => '0')));
            }else{
                include    "../funciones/email.php";
                $emailObj  = new email;
                $password  = $_POST['password'];
                $userK     = $_POST['userK'];
                $userId    = rand(1,1000000000000);
                $code      = password_hash (time(), PASSWORD_DEFAULT);
                $url       = "http://". $_SERVER['SERVER_NAME'] . "/project/models/model-verify.php?confirmation=" . $code;
                if($dbQueries->Query("INSERT INTO users (userId, email, password, userK, type) VALUES ('$userId', '$email', '$password', '$userK', '$type')")){
                    if($dbQueries->Query("INSERT INTO email_confirmation(userId, email, confirmationCode) VALUES ('$userId', '$email', 
                        '$code')")){
                        if($emailObj->sendEmail($email, $url, "CONFIRM", "Por favor confirma tu correo")){
                                exit(json_encode(array('status' => '1'))); 
                        }    
                    }
                }
            }
    }else if(isset($_POST['userId']) && isset($_POST['tyc'])) {
        $userId = $_POST['userId'];
        $tyc    = $_POST['tyc'];
        if($dbQueries->Query("UPDATE users SET tyc = '$tyc' WHERE userId = '$userId'")){
            exit(json_encode(array('status' => '2'))); 
        }else {
            exit(json_encode(array('status' => '0')));
        }
    }
}
?>