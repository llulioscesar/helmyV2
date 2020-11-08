<?php
include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['names']) && isset($_POST['surnames']) && isset($_POST['documentNumber']) && isset($_POST['email']) && isset($_POST['plate']) && isset($_POST['brand']) && isset($_POST['city']) && isset($_POST['distributor']) && isset($_POST['date']) && isset($_POST['time']) && isset($_POST['userId'])){
            $id             = rand(1,1000000000000);
            $names          = $_POST['names'];
            $surnames       = $_POST['surnames'];
            $documentNumber = $_POST['documentNumber'];
            $email          = $_POST['email'];
            $plate          = $_POST['plate'];
            $brand          = $_POST['brand'];
            $city           = $_POST['city'];
            $distributor    = $_POST['distributor'];
            $date           = $_POST['date'];
            $time           = $_POST['time'];
            $userId         = $_POST['userId'];
            $dbQueries->Query("SELECT * FROM quotes WHERE plate = '$plate' and userId = '$userId'");
            if($dbQueries->rowCount() > 0){
                exit(json_encode(array("status" => '0')));
            }else{
                if($dbQueries->Query("INSERT INTO quotes (id, names, surnames, documentNumber, plate, brand, city, distributor, date, time, userId) VALUES ('$id', '$names', '$surnames', '$documentNumber','$plate', '$brand', '$city', '$distributor', '$date', '$time', '$userId')")){
                    exit(json_encode(array("status" => '1')));
                }else {
                    exit(json_encode(array("status" => '0')));
                }
            }
    }elseif(isset($_POST['userId'])){
        $userId         = $_POST['userId'];
        $dbQueries->Query("SELECT * FROM person_one WHERE userId = '$userId'");
        if($dbQueries->rowCount() > 0){
            $row  = $dbQueries->fetch();
            $documentNumber   = $row->documentNumber;
            $dbQueries->Query("SELECT * FROM users WHERE userId = '$userId'");
            $rowuser  = $dbQueries->fetch();
            $email    = $rowuser->email;
            exit(json_encode(array("documentNumber" => $documentNumber, "email" => $email)));
        }else{
            exit(json_encode(array("status" => '0')));
        }    
    }elseif(isset($_POST['distributor'])) {
        $distributor  = $_POST['distributor'];
        $dbQueries->Query("SELECT * FROM quotes WHERE distributor = '$distributor'");
        if($dbQueries->rowCount() > 0){
            $arrayD = array();
            $i = 0;
            while ($row = $dbQueries->fetchAssoc()) {
               $arrayD += array("date".$i => $row['date'], "time".$i => $row['time']);
               $i++;
            }
            exit(json_encode($arrayD));
            
        }else{
            exit(json_encode(array("status" => '0')));
        }
    }
}
?>