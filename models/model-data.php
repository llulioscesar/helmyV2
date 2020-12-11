<?php
include "../functions/dbQueries.php";
$dbQueries = new dbQueries;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['names']) && isset($_POST['phone']) && isset($_POST['email']) ){
        $id    = rand(1,1000000000000);
        $names = $_POST['names'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $dbQueries->Query("SELECT * FROM clients WHERE email = '$email'");
        if($dbQueries->rowCount() > 0){
            exit(json_encode(array("status" => '0')));
        }else{
            if($dbQueries->Query("INSERT INTO clients (id, names, phone, email) VALUES ('$id', '$names', '$phone', '$email')")){
                exit(json_encode(array("status" => '1')));
            }
        }
    }
}
?>