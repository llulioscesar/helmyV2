<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_SESSION['userId'])){
            $userId             = $_SESSION['userId'];
            $dbQueries->Query("SELECT * FROM person_two WHERE userId = '$userId'");
            if($dbQueries->rowCount() > 0){
  
                $row = $dbQueries->fetch();
                $names         = $row->names;
                $surnames      = $row->surnames;
  
                exit(json_encode(array("names" => $names, "surnames" => $surnames)));
            }else{
              exit(json_encode(array("status" => '0')));
            }  
        }
    }    
?>