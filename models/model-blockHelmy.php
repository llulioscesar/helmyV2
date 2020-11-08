<?php 
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $jsonReceived;
    foreach ($_POST as $key => $value) {
        $jsonReceived = json_decode($key, true);
    }
    // exit(json_encode($jsonReceived));
   if($jsonReceived['userId'] && $jsonReceived['bikeId'] && $jsonReceived['names'] && $jsonReceived['surnames'] && $jsonReceived['brand'] && $jsonReceived['plate'] && $jsonReceived['chassis'] && $jsonReceived['bondId']){
        $userId = $jsonReceived['userId'];
        $dbQueries->Query("SELECT * FROM users WHERE userId = '$userId'");        
        if($dbQueries->rowCount() > 0){
            // email is found
            include    "../funciones/emailB.php";
            $emailObj = new email;
            $row      = $dbQueries->fetch();
            $id       = rand(1,1000000000000); 
            $bikeId   = $jsonReceived['bikeId'];
            $email    = $row->email;
            $names    = $jsonReceived['names'];
            $surnames = $jsonReceived['surnames'];
            $brand    = $jsonReceived['brand'];
            $plate    = $jsonReceived['plate'];
            $chassis  = $jsonReceived['chassis'];
            $bondId   = $jsonReceived['bondId'];
            $url      = "https://" . $_SERVER['SERVER_NAME'] . "/helmy2.php";
            if($dbQueries->Query("INSERT INTO blockchain (id, bikeId, email, names, surnames, brand, plate, chassis, userId, bondId) VALUES ('$id', '$bikeId', '$email', '$names', '$surnames', '$brand', '$plate', '$chassis', '$userId', '$bondId')")){
                if($emailObj->sendEmail($email, $bondId, $url, "DATOS", "TU MOTO SE REGISTRO EN BLOCKCHAIN")){
                    exit(json_encode(array('status' => '1'))); 
                }    
            }
        }else{
            //email not found
            exit(json_encode(array("status" => '0')));
        }
    }elseif(isset($jsonReceived['bondId'])){
        $bondId = $jsonReceived['bondId'];
        $dbQueries->Query("SELECT * FROM blockchain WHERE bondId = '$bondId'");
        if($dbQueries->rowCount() > 0){
            include    "../funciones/emailB.php";
            $emailObj = new email;
            $row    = $dbQueries->fetch();
            $email  = $row->email;
            $url    = "http://" . $_SERVER['SERVER_NAME'] . "/helmy2.php";
            if($emailObj->sendEmail($email, $bondId, $url, "DELET", "TU MOTO SE ELIMINO DE BLOCKCHAIN")){
                if($dbQueries->Query("DELETE FROM blockchain WHERE bondId = '$bondId'")){
                    exit(json_encode(array('status' => '3'))); 
                }else{
                    exit(json_encode(array("status" => '0')));
                }
            } else{
                exit(json_encode(array("status" => '0')));
            }
        }else {
            exit(json_encode(array("status" => '0')));
        }
    }
}

?>