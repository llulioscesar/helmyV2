<?php
class db {
    protected $con;

    public function __construct(){

        try {
            $this->con = new PDO("mysql:host=" . 'localhost' . ";dbname=" . 'helmy' , 'root' , '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        }catch(PDOException $e) {
            echo "Connection Error: " . $e->getMessage();
        }
    }
}
?>
