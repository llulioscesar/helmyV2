<?php 

include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $type  = 'email';
        $dbQueries->Query("SELECT * FROM users WHERE email = '$email' and type = '$type'");
        if($dbQueries->rowCount() > 0){
                // email is found
                include "../funciones/email.php";
                $emailObj = new email;
                $row    = $dbQueries->fetch();
                $userId = $row->userId; 
                $code   = password_hash(rand(), PASSWORD_DEFAULT);
                $url    = "http://" . $_SERVER['SERVER_NAME'] . "/project/models/model-forgotPassword.php?forgot=".$code;
                $dbQueries->Query("SELECT * FROM forgot_password WHERE userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                    if($dbQueries->Query("UPDATE forgot_password SET code = '$code' WHERE userId = '$userId'")){
                        if($emailObj->sendEmail($email, $url, "FORGOT", "Restaurar contraseña")){
                            exit(json_encode(array("status" => '2')));
                        }else {
                            exit(json_encode(array("status" => '0')));
                        }
                    }
                }else {
                    $id     = rand(1,1000000000000);
                    if($dbQueries->Query("INSERT INTO forgot_password (id, userId, code) VALUES ('$id', '$userId', '$code')")){
                        if($emailObj->sendEmail($email, $url, "FORGOT", "Restaurar contraseña")){
                            exit(json_encode(array("status" => '1')));
                        }
                    }
                }
        }else{
            //email not found
            exit(json_encode(array("status" => '0')));
        }
    }
}
?>