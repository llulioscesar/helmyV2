<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['firstEmergencyContactNames']) && isset($_POST['surnamesFirstEmergencyContact'])
                && isset($_POST['firstEmergencyContactNumber']) && isset($_POST['userId'])){
                    $firstEmergencyContactNames       = $_POST['firstEmergencyContactNames'];
                    $surnamesFirstEmergencyContact    = $_POST['surnamesFirstEmergencyContact'];
                    $firstEmergencyContactNumber      = $_POST['firstEmergencyContactNumber'];
                    $userId                           = $_POST['userId'];
                    $dbQueries->Query("SELECT * FROM person_four WHERE userId = '$userId'");
                    if($dbQueries->rowCount() > 0){
                        if($dbQueries->Query("UPDATE person_four SET firstEmergencyContactNames = '$firstEmergencyContactNames', surnamesFirstEmergencyContact = '$surnamesFirstEmergencyContact',
                            firstEmergencyContactNumber = '$firstEmergencyContactNumber' WHERE userId = '$userId'")){
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
                        $id = rand(1,1000000000000);
                        if($dbQueries->Query("INSERT INTO person_four (id, firstEmergencyContactNames, surnamesFirstEmergencyContact, firstEmergencyContactNumber, userId)
                            VALUES ('$id', '$firstEmergencyContactNames', '$surnamesFirstEmergencyContact', '$firstEmergencyContactNumber', '$userId')")){
                                exit(json_encode(array("status" => '1')));
                        }else{
                          exit(json_encode(array("status" => '0')));
                        }
                    }
        }elseif (isset($_POST['userId'])) {
            $userId       = $_POST['userId'];
            $dbQueries->Query("SELECT * FROM person_four WHERE userId = '$userId'");
            if($dbQueries->rowCount() > 0){
                $row                           = $dbQueries->fetch();
                $firstEmergencyContactNames    = $row->firstEmergencyContactNames;
                $surnamesFirstEmergencyContact = $row->surnamesFirstEmergencyContact;
                $firstEmergencyContactNumber   = $row->firstEmergencyContactNumber;
  
                exit(json_encode(array("firstEmergencyContactNames" => $firstEmergencyContactNames, "surnamesFirstEmergencyContact" => $surnamesFirstEmergencyContact, "firstEmergencyContactNumber" => $firstEmergencyContactNumber)));
            }else{
              exit(json_encode(array("status" => '0')));
            }
        } 
    }
?>