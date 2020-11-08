<?php
include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['impact']) && isset($_POST['alertSMS']) && isset($_POST['alertPolice'])
            && isset($_POST['alertAmbulance']) && isset($_POST['userId'])){
                $impact          = $_POST['impact'];
                $alertSMS        = $_POST['alertSMS'];
                $alertPolice     = $_POST['alertPolice'];
                $alertAmbulance  = $_POST['alertAmbulance'];
                $userId          = $_SESSION['userId'];
                $dbQueries->Query("SELECT * FROM detection WHERE userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                  if($dbQueries->Query("UPDATE detection SET impact = '$impact', alertSMS = '$alertSMS',
                      alertPolice = '$alertPolice', alertAmbulance = '$alertAmbulance' WHERE userId = '$userId'")){
                       exit(json_encode(array("status" => '2')));
                        }else{
                           exit(json_encode(array("status" => '0')));
                        }
                  }else{
                      $id = rand(1,1000000000000);
                      if($dbQueries->Query("INSERT INTO detection(id, impact, alertSMS, alertPolice, alertAmbulance, userId)
                        VALUES ('$id', '$impact', '$alertSMS', '$alertPolice', '$alertAmbulance', '$userId')")){
                            exit(json_encode(array("status" => '1')));
                      }else{
                    exit(json_encode(array("status" => '0')));
                }        
                  }
        }
    } 
?>