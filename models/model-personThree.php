<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['sex']) && isset($_POST['eps']) && isset($_POST['arl'])
            && isset($_POST['phone']) && isset($_POST['userId'])){
                $sex       = $_POST['sex'];
                $eps       = $_POST['eps'];
                $arl       = $_POST['arl'];
                $phone     = $_POST['phone'];
                $userId    = $_POST['userId'];
                $dbQueries->Query("SELECT * FROM person_three WHERE userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                    if($dbQueries->Query("UPDATE person_three SET sex = '$sex', eps = '$eps',
                        arl = '$arl', phone = '$phone' WHERE userId = '$userId'")){
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
                    $id        = rand(1,1000000000000);
                    if($dbQueries->Query("INSERT INTO person_three (id, sex, eps, arl, phone, userId)
                        VALUES ('$id','$sex', '$eps', '$arl', '$phone', '$userId')")){
                            exit(json_encode(array("status" => '1')));
                    }else{
                    exit(json_encode(array("status" => '0')));
                    }
                }  
        }elseif (isset($_POST['userId'])) {
            $userId  = $_POST['userId'];
            $dbQueries->Query("SELECT * FROM person_three WHERE userId = '$userId'");
            if($dbQueries->rowCount() > 0){
  
                $row    = $dbQueries->fetch();
                $sex    = $row->sex;
                $eps    = $row->eps;
                $arl    = $row->arl;
                $phone  = $row->phone;
  
                exit(json_encode(array("sex" => $sex, "eps" => $eps, "arl" => $arl, "phone" => $phone)));
            }else{
              exit(json_encode(array("status" => '0')));
            }
        } 
    }
?>