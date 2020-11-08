<?php 
include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;

if($_SERVER['REQUEST_METHOD'] == 'GET'){
if(isset($_GET['confirmation'])){ 
    $confirmationCode = $_GET['confirmation'];
    $dbQueries->query("SELECT * FROM email_confirmation WHERE confirmationCode = '$confirmationCode'");
        if($dbQueries->rowCount() > 0){
            $row = $dbQueries->fetch();
            $userEmail = $row->email;
            $type = 'email';
            if($dbQueries->query("SELECT * FROM users WHERE email = '$userEmail' and type = '$type'")){
                $userRow = $dbQueries->fetch();
                $userId = $userRow->userId;
                $status = 1;
                if($dbQueries->query("UPDATE users SET status = '$status' WHERE userId = '$userId'")){
                    if($dbQueries->query("DELETE FROM email_confirmation WHERE confirmationCode = '$confirmationCode'")){
                        $_SESSION['userId'] = $userId;
                        $_SESSION['verify'] = "Su cuenta ha sido verificada exitosamente ahora inicie sesion
                        en la aplicacion de helmy";
                        header("location: ../message");
                    }
                }

            }

        }else {
            $_SESSION['invalidURL'] = "Vuelva hacer la solicitud de confirmacion de correo";
            header("location: ../message");
        }
    }
 }

?>