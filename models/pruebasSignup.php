<?php 

include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['password'])){
            $caracteres_permitidos = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $longitud = 12;
            $arroba   = '@gmail.com';
            $ramdom   = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
            $email    = $ramdom;
            $dbQueries->Query("SELECT * FROM users WHERE email = '$email'");
            if($dbQueries->rowCount() > 0){
                exit(json_encode(array("status" => '0')));
            }else{
                include    "../funciones/email.php";
                $emailObj  = new email;
                $password  = $_POST['password'];
                $status    = 1;
                $userId    = rand(1,1000000000000);
                $code      = password_hash (time(), PASSWORD_DEFAULT);
                $url       = "http://". $_SERVER['SERVER_NAME'] . "/project/verify.php?confirmation=" . $code;
                if($dbQueries->Query("INSERT INTO users (userId, email, password, status) VALUES ('$userId', '$email', '$password', '$status')")){
                    if($dbQueries->Query("INSERT INTO email_confirmation(userId, email, confirmationCode) VALUES ('$userId', '$email', '$code')")){
                        if($emailObj->sendEmail($email, $url, "CONFIRM", "Por favor confirma tu correo")){
                                exit(json_encode(array('status' => '1'))); 
                        }    
                    }
                }
            }
    } 
}


$max = 5000;

// for ($x=0;$x<$max;$x++) {
//         $caracteres_permitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         $longitud = 2;
//         $arroba   = ':';
//         $ramdom   = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//         $ramdomone   = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//         $ramdomtwo   = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//         $ramdomthree  = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//         $ramdomfour   = substr(str_shuffle($caracteres_permitidos), 0, $longitud);
//         $email    = $ramdom.$ramdomone.$ramdomtwo.$ramdomthree.$ramdomfour;
    
//         echo $email."<br>";
//       }


// for ($x=0;$x<$max;$x++) {
//     $caracteres_permitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     $longitud = 2;
//     $arroba   = ':';
//     $ramdom   = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//     $ramdomone   = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//     $ramdomtwo   = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//     $ramdomthree  = substr(str_shuffle($caracteres_permitidos), 0, $longitud).$arroba;
//     $ramdomfour   = substr(str_shuffle($caracteres_permitidos), 0, $longitud);
//     $email    = $ramdom.$ramdomone.$ramdomtwo.$ramdomthree.$ramdomfour;

//     echo $email."<br>";
//   }

// for ($x=0;$x<$max;$x++) {
//     $caracteres_permitidos = '123456789987654321';
//     $longitud = 7;
//     $arroba   = '300';
//     $ramdom   = $arroba.substr(str_shuffle($caracteres_permitidos), 0, $longitud);
//     $email    = $ramdom;

//     echo $email."<br>";
//   }

//   for ($x=0;$x<$max;$x++) {
//     $caracteres_permitidos = '123456789987654321';
//     $longitud = 12;
//     $ramdom   = substr(str_shuffle($caracteres_permitidos), 0, $longitud);
//     $email    = $ramdom;

//     echo $email."<br>";
//   } 

//   for ($x=0;$x<$max;$x++) {
//     $email    = '564KYD';

//     echo $email."<br>";
//   } 
?>