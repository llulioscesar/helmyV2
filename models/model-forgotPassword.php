<?php 
include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;

if(isset($_GET['forgot'])){

    $forgotCode = $_GET['forgot'];
    $dbQueries->Query("SELECT * FROM forgot_password WHERE code = '$forgotCode'");
        if($dbQueries->rowCount() > 0){
            // Code is found
            $row = $dbQueries->fetch();
            $userId = $row->userId;
            $_SESSION['requestUserId'] = $userId;
            if($dbQueries->Query("DELETE FROM forgot_password WHERE code = '$forgotCode'")){
                header("location: ../newPassword");   
            }
        } else {
            // code not found
            $_SESSION['invalidURL'] = "vuelva hacer la solicitud de restauracion de contraseña";
            header("location: ../message");
        }
    }

?>