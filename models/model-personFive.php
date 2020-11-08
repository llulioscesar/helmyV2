<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['namesSecondEmergencyContact']) && isset($_POST['surnamesSecondEmergencyContact'])
           && isset($_POST['numberSecondEmergencyContact']) && isset($_POST['userId'])){

                    $namesSecondEmergencyContact     = $_POST['namesSecondEmergencyContact'];
                    $surnamesSecondEmergencyContact  = $_POST['surnamesSecondEmergencyContact'];
                    $numberSecondEmergencyContact    = $_POST['numberSecondEmergencyContact'];
                    $userId                          = $_POST['userId'];
                    $dbQueries->Query("SELECT * FROM person_five WHERE userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                    if($dbQueries->Query("UPDATE person_five SET namesSecondEmergencyContact = '$namesSecondEmergencyContact', surnamesSecondEmergencyContact = '$surnamesSecondEmergencyContact',
                        numberSecondEmergencyContact = '$numberSecondEmergencyContact' WHERE userId = '$userId'")){
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
                    if($dbQueries->Query("INSERT INTO person_five (id, namesSecondEmergencyContact, surnamesSecondEmergencyContact, numberSecondEmergencyContact, userId)
                        VALUES ('$id', '$namesSecondEmergencyContact', '$surnamesSecondEmergencyContact', '$numberSecondEmergencyContact', '$userId')")){
                            exit(json_encode(array("status" => '1')));
                    }else{
                    exit(json_encode(array("status" => '0')));
                    }
                }
            }elseif(isset($_POST['namesSecondEmergencyContact']) && isset($_POST['userId'])){
                $namesSecondEmergencyContact     = $_POST['namesSecondEmergencyContact'];
                $userId                          = $_POST['userId'];
                $dbQueries->Query("SELECT * FROM person_five WHERE namesSecondEmergencyContact = '$namesSecondEmergencyContact' and userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                    if($dbQueries->Query("DELETE FROM person_five WHERE namesSecondEmergencyContact = '$namesSecondEmergencyContact' and userId = '$userId'")){
                        exit(json_encode(array("status" => '3')));
                    }
                }else{
                      exit(json_encode(array("status" => '0')));
                }
            }else{
                if(isset($_POST['userId'])){
                    $userId    = $_POST['userId'];
                    $dbQueries->Query("SELECT * FROM person_five WHERE userId = '$userId'");
                    if($dbQueries->rowCount() > 0){
        
                        $row                            = $dbQueries->fetch();
                        $namesSecondEmergencyContact    = $row->namesSecondEmergencyContact;
                        $surnamesSecondEmergencyContact = $row->surnamesSecondEmergencyContact;
                        $numberSecondEmergencyContact   = $row->numberSecondEmergencyContact;
        
                        exit(json_encode(array("namesSecondEmergencyContact" => $namesSecondEmergencyContact, "surnamesSecondEmergencyContact" => $surnamesSecondEmergencyContact, "numberSecondEmergencyContact" => $numberSecondEmergencyContact)));
                    }else{
                        exit(json_encode(array("status" => '0')));
                    }
                }
            }    
    } 
?>