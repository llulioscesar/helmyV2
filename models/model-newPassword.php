<?php 

include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(isset($_POST['password'])){
        $password = $_POST['password'];
        $userId = $_SESSION['requestUserId'];
        if($dbQueries->Query("UPDATE users SET password = '$password' WHERE userId = '$userId'")){
            if(isset($_POST['updatePassword'])){
                $updatePassword = $_POST['updatePassword'];
                if($dbQueries->Query("SELECT * FROM user_update WHERE userId = '$userId'")){
                    if($dbQueries->rowCount() > 0){
                        if($dbQueries->Query("UPDATE user_update SET updatePassword = '$updatePassword' WHERE userId = '$userId'")){
                            exit(json_encode(array("status" => '2')));
                        }else{
                            exit(json_encode(array("status" => '0')));
                        };
                    }else{
                        $idUpdate = rand(1,1000000000000);
                        if($dbQueries->Query("INSERT INTO user_update (id, updatePassword, userId) VALUES ('$idUpdate', '$updatePassword', '$userId')")){
                            exit(json_encode(array("status" => '2')));
                        }else{
                            exit(json_encode(array("status" => '0')));
                        };
                    }
                };
            };
        exit(json_encode(array("status" => '2'))); 
        }else {
            exit(json_encode(array("status" => '0')));
        }
      }
    }
?>
