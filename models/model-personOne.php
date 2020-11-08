<?php
  include "../init.php";
  include "../funciones/dbQueries.php";
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['nationality']) && isset($_POST['documentType']) && isset($_POST['documentNumber'])
            && isset($_POST['colombianLicense']) && isset($_POST['colombianLicense']) && isset($_POST['colombianLicense']) && isset($_POST['userId'])){
                $nationality        = $_POST['nationality'];
                $documentType       = $_POST['documentType'];
                $documentNumber     = $_POST['documentNumber'];
                $colombianLicense   = $_POST['colombianLicense'];
                $userId             = $_POST['userId'];
                $dbQueries->Query("SELECT * FROM person_one WHERE userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                  if($dbQueries->Query("UPDATE person_one SET nationality = '$nationality', documentType = '$documentType',
                      documentNumber = '$documentNumber', colombianLicense = '$colombianLicense' WHERE userId = '$userId'")){
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
                      if($dbQueries->Query("INSERT INTO person_one(id, nationality, documentType, documentNumber, colombianLicense, userId)
                        VALUES ('$id', '$nationality', '$documentType', '$documentNumber', '$colombianLicense', '$userId')")){
                            exit(json_encode(array("status" => '1')));
                      }else{
                        exit(json_encode(array("status" => '0')));
                      }        
                 }
        }elseif (isset($_POST['userId'])) {
            $userId  = $_POST['userId'];
            $dbQueries->Query("SELECT * FROM person_one WHERE userId = '$userId'");
            if($dbQueries->rowCount() > 0){

                $row = $dbQueries->fetch();
                $nationality = $row->nationality;
                $documentType = $row->documentType;
                $documentNumber = $row->documentNumber;
                $colombianLicense = $row->colombianLicense;

                exit(json_encode(array("nationality" => $nationality, "documentType" => $documentType, "documentNumber" => $documentNumber, "colombianLicense" => $colombianLicense)));
            }else{
                exit(json_encode(array("status" => '0')));
              }
        }
    }   
?>