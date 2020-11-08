<?php
  include "init.php";
  include "classes/dbQueries.php"; 
  $dbQueries   = new dbQueries;
  $target="velocidad/".basename($_FILES['txt']['name']);
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_FILES['txt']['name']) && isset($_POST['mac']) && isset($_POST['userId'])){
            $id          = rand(1,1000000000000);
            $txt         = $_FILES['txt']['name'];
            $mac         = $_POST['mac'];
            $userId      = $_POST['userId'];
            $dbQueries->Query("SELECT * FROM archivos_txt WHERE txt = '$txt' and mac = '$mac' and userId = '$userId'");
            if($dbQueries->rowCount() > 0){
                exit(json_encode(array("status" => '0')));
              }else{
                  if($dbQueries->Query("INSERT INTO archivos_txt (id, txt, mac, userId) VALUES ('$id', '$txt', '$mac', '$userId')")){
                    if(move_uploaded_file($_FILES['txt']['tmp_name'], $target)){
                        exit(json_encode(array("status" => '1')));
                    }
                }
              }    
            }
         }
?>
