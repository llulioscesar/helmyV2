<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['updatePassword']) && isset($_POST['updateData']) && isset($_POST['userId'])){
            $updatePassword = $_POST['updatePassword'];
            $updateData     = $_POST['updateData'];
            $userId         = $_POST['userId'];
            $dbQueries->Query("SELECT * FROM user_update WHERE userId = '$userId'");
               if($dbQueries->Query("UPDATE user_update SET updateData = '$updateData', updatePassword = '$updatePassword' WHERE userId = '$userId'")){
                   exit(json_encode(array("status" => '2')));
               }else{
                   exit(json_encode(array("status" => '0')));
               };
        }elseif (isset($_POST['userId'])) {
            $userId = $_POST['userId'];
            $dbQueries->Query("SELECT * FROM user_update WHERE userId = '$userId'");
            if($dbQueries->rowCount() > 0){
                $row = $dbQueries->fetch();
                $updatePassword = $row->updatePassword;
                $updateData = $row->updateData;
                exit(json_encode(array("updatePassword" => $updatePassword, "updateData" => $updateData)));
            }else{
                exit(json_encode(array("status" => '0')));
            }
        }
    } 
?>