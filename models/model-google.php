<?php include "../init.php";

if(empty($_SESSION['userLogin'])) {

    /** 
    *OAUTH GOOGLE 
    */
    $google = new \League\OAuth2\Client\Provider\Google( options: GOOGLE );
    $error  = filter_input( type: INPUT_GET, variable_name: "error", filter: FILTER_SANITIZE_STRING);
    $code  = filter_input( type: INPUT_GET, variable_name: "code", filter: FILTER_SANITIZE_STRING);

    if(!$error){
        echo "<h1>autorizar para continuar</h1>";
    }

}else {
    var_dump($_SESSION['userLogin']);
}



?>

