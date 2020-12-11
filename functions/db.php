<?php
class db {
    protected $con;

    public function __construct(){

        try {
            $this->con = new PDO("mysql:host=" . 'klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com' . ";dbname=" . 'znngwbkiqcar8e2z' , 'lgt795lv3xdgv7o0' , 'nb9jtgm9nr4yrbep', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        }catch(PDOException $e) {
            echo "Connection Error: " . $e->getMessage();
        }
    }
}
?>
