<?php
  include "init.php";
  include "classes/dbQueries.php"; 
  $dbQueries = new dbQueries;
  
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['impacto']) && isset($_POST['ang_inferior']) && isset($_POST['ang_superior'])){
                $impacto         = $_POST['impacto'];
                $ang_inferior    = $_POST['ang_inferior'];
                $ang_superior    = $_POST['ang_superior'];
                 if($dbQueries->Query("UPDATE impact SET impacto = '$impacto', ang_inferior = '$ang_inferior', ang_superior = '$ang_superior'")){
                    exit(json_encode(array("status" => 'DATOS ACTUALIZADOS')));
                }else{
                    exit(json_encode(array("status" => '0')));
                }      
        }elseif(isset($_POST['download'])){
            $download = $_POST['download'];
            $dbQueries->Query("SELECT * FROM impact");
            if($dbQueries->rowCount() > 0){
                if($download === 'download'){
                $row          = $dbQueries->fetch();
                $impacto      = $row->impacto;
                $ang_inferior = $row->ang_inferior;
                $ang_superior = $row->ang_superior;
                
                exit(json_encode(array("impacto" => $impacto, "ang_inferior" => $ang_inferior, "ang_superior" => $ang_superior)));
            }else {
                exit(json_encode(array("status" => 0)));
            }
                
            }
        }
    } 
?>