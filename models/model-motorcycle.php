<?php

 include "../init.php";
 include "../funciones/dbQueries.php";
 $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['alias']) && isset($_POST['policySoat']) && isset($_POST['noPolicyTwo'])
            && isset($_POST['policyTelephoneTwo']) && isset($_POST['brand']) && isset($_POST['plate'])
            && isset($_POST['chassis']) && isset($_POST['threeDigitsWheelReference']) && isset($_POST['threeDigitsBackupPowerKey']) && isset($_POST['mac']) && isset($_POST['codeM']) && isset($_POST['userId'])){
                    $alias                      = $_POST['alias'];
                    $policySoat                 = $_POST['policySoat'];
                    $noPolicyTwo                = $_POST['noPolicyTwo'];
                    $policyTelephoneTwo         = $_POST['policyTelephoneTwo'];
                    $brand                      = $_POST['brand'];
                    $plate                      = $_POST['plate'];
                    $chassis                    = $_POST['chassis'];
                    $threeDigitsWheelReference  = $_POST['threeDigitsWheelReference'];
                    $threeDigitsBackupPowerKey  = $_POST['threeDigitsBackupPowerKey'];
                    $mac                        = $_POST['mac'];
                    $codeM                      = $_POST['codeM'];
                    $userId                     = $_POST['userId'];
                    $dbQueries->Query("SELECT * FROM motorcycle WHERE mac = '$mac' and userId = '$userId'");
                    if($dbQueries->rowCount() > 0){
                        if($dbQueries->Query("UPDATE motorcycle SET alias = '$alias', policySoat = '$policySoat',
                            noPolicyTwo = '$noPolicyTwo', policyTelephoneTwo = '$policyTelephoneTwo',
                            brand = '$brand', plate = '$plate', chassis = '$chassis', threeDigitsWheelReference = '$threeDigitsWheelReference', threeDigitsBackupPowerKey = '$threeDigitsBackupPowerKey' WHERE mac = '$mac' and userId = '$userId'")){
                            if(isset($_POST['updateData'])){
                                $updateData = $_POST['updateData'];
                                if($dbQueries->Query("SELECT * FROM user_update WHERE userId = '$userId'")){
                                    if($dbQueries->rowCount() > 0){
                                        if($dbQueries->Query("UPDATE user_update SET updateData = '$updateData'")){
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
                        if($dbQueries->Query("INSERT INTO motorcycle (id, alias, policySoat, noPolicyTwo, policyTelephoneTwo, brand, plate, chassis, threeDigitsWheelReference, threeDigitsBackupPowerKey, mac, codeM, userId)
                            VALUES ('$id', '$alias', '$policySoat', '$noPolicyTwo', '$policyTelephoneTwo', '$brand', '$plate', '$chassis', '$threeDigitsWheelReference', '$threeDigitsBackupPowerKey', '$mac', '$codeM', '$userId')")){
                            exit(json_encode(array("status" => '1')));
                        }else{
                            exit(json_encode(array("status" => '0')));
                        }
                    }
        }elseif(isset($_POST['mac']) && isset($_POST['userId'])){
              $mac                    = $_POST['mac'];
              $userId                 = $_POST['userId'];
              $dbQueries->Query("SELECT * FROM motorcycle WHERE mac = '$mac' and userId = '$userId'");
              if($dbQueries->rowCount() > 0){
                  if($dbQueries->Query("DELETE FROM motorcycle WHERE mac = '$mac' and userId = '$userId'")){
                      exit(json_encode(array("status" => '3')));
                  }
              }else{
                    exit(json_encode(array("status" => '0')));
              }
        }elseif(isset($_POST['code'])){
            $code = $_POST['code'];
            $caracteres_permitidos = '01234567890987654321012345678901';
            $longitud = 32;
            $ramdom   = substr(str_shuffle($caracteres_permitidos), 0, $longitud);
            // $codeM    = $ramdom;  
            $codeM    = 'AAAAAAAAAAAAAAAAAAAAAAAAAA==';  
            $dbQueries->Query("SELECT * FROM motorcycle WHERE codeM = '$codeM'");
            if($dbQueries->rowCount() > 0){
                exit(json_encode(array("status" => '1')));
            }else{
                exit(json_encode(array("status" => $codeM)));
            } 
        }else{
            if(isset($_POST['userId'])){
                $userId         = $_POST['userId'];
                $dbQueries->Query("SELECT * FROM motorcycle WHERE userId = '$userId'");
                if($dbQueries->rowCount() > 0){
                    $i = 0;
                    $arrayM = array();
                    while ($row = $dbQueries->fetchAssoc()) {
                     
                       $arrayM += array("alias".$i => $row['alias'], "policySoat".$i => $row['policySoat'], "noPolicyTwo".$i => $row['noPolicyTwo'],
                                        "policyTelephoneTwo".$i => $row['policyTelephoneTwo'], "brand".$i => $row['brand'],"plate".$i => $row['plate'], "chassis".$i => $row['chassis'],
                                        "threeDigitsWheelReference".$i => $row['threeDigitsWheelReference'], "threeDigitsBackupPowerKey".$i => $row['threeDigitsBackupPowerKey'],
                                        "mac".$i => $row['mac'], "codeM".$i => $row['codeM'], "userId".$i => $row['userId']);
                       $i++;
                        
                    }
                    $arrayM += array("numMotorcycle" => $i);
                    
                    exit(json_encode($arrayM));
                    
                }else{
                    exit(json_encode(array("status" => '0')));
                }
            }
        }
    }
?>           