
<?php include "../init.php"; ?>
<?php if(isset($_SESSION['userId'])): ?>
<?php endif; ?>

<?php  
if($_SERVER['REQUEST_METHOD'] === 'POST') { 
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;
        if (isset($_POST['dat'])) {
            $dbQueries->Query("SELECT email, password FROM users ORDER BY RAND() LIMIT 1");
            $row = $dbQueries->fetchAll();
            for($i=0;$i<count($row);$i++){ 
                $correo    = $row[$i]->email;
                $pass      = $row[$i]->password;
            }
            $dat = $_POST['dat'];
            $email    = $correo;
            $password = $pass;
            $dbQueries->Query("SELECT * FROM users WHERE email = '$email'");
            if($dbQueries->rowCount() > 0){
                $row = $dbQueries->fetch();
                $userId = $row->userId;
                $dbPassword = $row->password;
                $status = $row->status;
                if($status == 0){
                    // email is not verify.php
                    exit(json_encode(array("status" => '0')));

                }else{
                    if(password_verify($password, $dbPassword)){
                        // login correctly
                        $_SESSION['userId'] = $userId;
                        $_SESSION['login'] = true;
                        exit(json_encode(array("status" => $userId, "status" => '1')));

                    }else {
                        //email or password incorrectly
                        exit(json_encode(array("status" => $email, $password)));
                    }
                }
            }
        }
           
} 

?>