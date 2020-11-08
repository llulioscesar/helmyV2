<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['licenseNumber']) && isset($_POST['names']) && isset($_POST['surnames'])
             && isset($_POST['age']) && isset($_POST['rh']) && isset($_POST['userId'])){
                $licenseNumber = $_POST['licenseNumber'];
                $names         = $_POST['names'];
                $surnames      = $_POST['surnames'];
                $age           = $_POST['age'];
                $rh            = $_POST['rh'];
                $userId        = $_POST['userId'];
                $dbQueries->Query("SELECT * FROM person_two WHERE userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                    if($dbQueries->Query("UPDATE person_two SET licenseNumber = '$licenseNumber', names = '$names',
                    surnames = '$surnames', age = '$age', rh = '$rh' WHERE userId = '$userId'")){
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
                          }
                      };
                    };
                };
                  exit(json_encode(array("status" => '2')));
                }else{
                    $id  = rand(1,1000000000000);
                    if($dbQueries->Query("INSERT INTO person_two(id, licenseNumber, names, surnames, age, rh, userId)
                      VALUES ('$id', '$licenseNumber', '$names', '$surnames', '$age', '$rh', '$userId')")){
                           exit(json_encode(array("status" => '1')));
                    }else{
                    exit(json_encode(array("status" => '0')));
                    }           
                }
        }elseif (isset($_POST['userId'])) {
          $userId  = $_POST['userId'];
          $dbQueries->Query("SELECT * FROM person_two WHERE userId = '$userId'");
          if($dbQueries->rowCount() > 0){

              $row = $dbQueries->fetch();
              $licenseNumber = $row->licenseNumber;
              $names         = $row->names;
              $surnames      = $row->surnames;
              $age           = $row->age;
              $rh            = $row->rh;

              exit(json_encode(array("licenseNumber" => $licenseNumber, "names" => $names, "surnames" => $surnames, "age" => $age, "rh" => $rh)));
          }else{
            exit(json_encode(array("status" => '0')));
          }
      } 
    }
?>