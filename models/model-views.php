<?php
include "../init.php";
include "../funciones/dbQueries.php";
$dbQueries = new dbQueries;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['userId'])){
        $userId  = $_POST['userId'];
        $dbQueries->Query("SELECT * FROM quotes WHERE userId = '$userId'");
        if($dbQueries->rowCount() > 0){
            $arrayD = array();
            $i = 0;
            while ($row = $dbQueries->fetchAssoc()) {
               $arrayD += array("names".$i => $row['names'], "surnames".$i => $row['surnames'], "plate".$i => $row['plate'], "brand".$i => $row['brand'], "city".$i => $row['city'], "distributor".$i => $row['distributor'], "date".$i => $row['date'], "time".$i => $row['time']);
               $i++;
            }
            $arrayD += array("numQuotes" => $i);

            exit(json_encode($arrayD));
            
        }else{
            exit(json_encode(array("status" => '0')));
        }
    }
}
?>