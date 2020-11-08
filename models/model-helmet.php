<?php

include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;
 
   if($_SERVER['REQUEST_METHOD'] == 'POST') {
       if (isset($_POST['brand']) && isset($_POST['size']) && isset($_POST['alias'])
               && isset($_POST['customColor']) && isset($_POST['intercom_mac']) && isset($_POST['mac']) && isset($_POST['userId'])){
                   $id                 = rand(1,1000000000000);
                   $brand              = $_POST['brand'];
                   $size               = $_POST['size'];
                   $alias              = $_POST['alias'];
                   $customColor        = $_POST['customColor'];
                   $intercom_mac       = $_POST['intercom_mac'];
                   $mac                = $_POST['mac'];
                   $userId             = $_POST['userId'];
                   $dbQueries->Query("SELECT * FROM helmet WHERE mac = '$mac' and userId = '$userId'");
                   if($dbQueries->rowCount() > 0){
                       if($dbQueries->Query("UPDATE helmet SET brand = '$brand', size = '$size', alias = '$alias', customColor = '$customColor', intercom_mac = '$intercom_mac' WHERE mac = '$mac' and userId = '$userId'")){
                            if(isset($_POST['updateData'])){
                           $updateData = $_POST['updateData'];
                           if($dbQueries->Query("SELECT * FROM user_update WHERE userId = '$userId'")){
                               if($dbQueries->rowCount() > 0){
                                   if($dbQueries->Query("UPDATE user_update SET updateData = '$updateData' WHERE userId = '$userId'")){
                                       exit(json_encode(array("status" => '2')));
                                   }else{
                                       exit(json_encode(array("status" => '0')));
                                   };
                               }else{
                                   $idUpdate = rand(1,1000000000000);
                                   if($dbQueries->Query("INSERT INTO user_update (id, updateData, userId) VALUES ('$idUpdate', '$updateData', '$userId')")){
                                       exit(json_encode(array("status" => '1')));
                                   }else{
                                       exit(json_encode(array("status" => '0')));
                                   };
                               };
                           };
                       };
                   };
                   exit(json_encode(array("status" => '2')));
                   }else{
                       if($dbQueries->Query("INSERT INTO helmet (id, brand, size, alias, customColor, intercom_mac, mac, userId)
                           VALUES ('$id', '$brand', '$size', '$alias', '$customColor', '$intercom_mac', '$mac', '$userId')")){
                               exit(json_encode(array("status" => '1')));
                       }else{
                          exit(json_encode(array("status" => '0')));
                        }
                   }
       }elseif(isset($_POST['mac']) && isset($_POST['userId'])){
               $mac                = $_POST['mac'];
               $userId             = $_POST['userId'];
               if($dbQueries->Query("DELETE FROM helmet WHERE mac = '$mac' and userId = '$userId'")){
                   exit(json_encode(array("status" => '3')));
               }else{
                   exit(json_encode(array("status" => '0')));
               }
       }else{
           if(isset($_POST['userId'])){
               $userId  = $_POST['userId'];
               $dbQueries->Query("SELECT * FROM helmet WHERE userId = '$userId'");
               if($dbQueries->rowCount() > 0){
                   $i = 0;
                   $arrayH = array();
                   while ($row = $dbQueries->fetchAssoc()) {
                    
                      $arrayH += array("alias".$i => $row['alias'], "brand".$i => $row['brand'], "size".$i => $row['size'],
                                       "customColor".$i => $row['customColor'], "mac".$i => $row['mac'],  "intercom_mac".$i => $row['intercom_mac'], "userId".$i => $row['userId']);
                      $i++;
                       
                   }
                   $arrayH += array("numHelmets" => $i);
                   
                   exit(json_encode($arrayH));
                   
               }else{
                   exit(json_encode(array("status" => '0')));
               }
           }
       }
}
?>