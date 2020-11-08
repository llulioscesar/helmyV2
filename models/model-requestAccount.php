<?php
include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;
  
 if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['email'])){
            $email = $_POST['email'];
            $type  = 'email';
            $dbQueries->Query("SELECT * FROM users WHERE email = '$email' and type = '$type'");
            if($dbQueries->rowCount() > 0){
                $row = $dbQueries->fetch();
                $userId = $row->userId;
                $status = $row->status;
                if($status == 1){
                    exit(json_encode(array("status" => '2')));
                }else{
                    include    "../funciones/email.php";
                    $emailObj  = new email;
                    $code      = password_hash (time(), PASSWORD_DEFAULT);
                    $url       = "http://". $_SERVER['SERVER_NAME'] . "/project/models/model-verify.php?confirmation=" . $code;
                        if($dbQueries->Query("UPDATE email_confirmation SET confirmationCode = '$code' WHERE email = '$email'")){
                        if($emailObj->sendEmail($email, $url, "CONFIRM", "Por favor confirma tu correo")){
                            exit(json_encode(array("status" => '1')));
                        }    
                    }
                }
            }else {
                exit(json_encode(array("status" => '0')));
            }
        }
}

?>