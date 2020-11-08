<?php include "../init.php"; ?>
<?php if(isset($_SESSION['userId'])): ?>
<?php endif; ?>
 
<?php   
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['email']) && isset($_POST['password'])) {
            $email    = $_POST['email'];
            $password = $_POST['password'];
            $type     = 'email';
            $dbQueries->Query("SELECT * FROM users WHERE email = '$email' and type = '$type'");
            if($dbQueries->rowCount() > 0){
                $row        = $dbQueries->fetch();
                $userId     = $row->userId;
                $userK      = $row->userK;
                $dbPassword = $row->password;
                $status     = $row->status;
                $tyc        = $row->tyc;
                if($status == 0){
                    // email is not verify.php
                    exit(json_encode(array("status" => '0')));

                }else{
            if($password === $dbPassword){
                        // login correctly
                        $_SESSION['userId'] = $userId;
                        $_SESSION['login'] = true;
                        exit(json_encode(array("status" => '1', "userId" => $userId, "userK" => $userK, "tyc" => $tyc)));
                    }else {
                        //password incorrectly
                        exit(json_encode(array("status" => '2')));
                    }
                }
            }else {
                exit(json_encode(array("status" => '3')));
            }
        }       
} 
?>