<?php

include "db.php"; 

class dbQueries extends db{
    

    public $result;
    /* ===============
    CRUD Query Method
    ===============*/
    public function Query($query, $params = []){

        if(empty($params)){
            $this->result = $this->con->prepare($query);
            return $this->result->execute();
        }else {
            $this->result = $this->con->prepare($query);
            return $this->result->execute($params);
        }
    }

    /* ===============
    Row Count Method
    ===============*/

    public function rowCount(){
        return $this->result->rowCount();
    }

     /* ===============
    public Single Row
    ===============*/

    public function fetch(){
        return $this->result->fetch(PDO::FETCH_OBJ);
    }
    
    /* ===============
    Fecth All Rows
    ===============*/

    public function fetchAll(){
        return $this->result->fetchAll(PDO::FETCH_OBJ);
    }

    public function fetchAssoc(){
        return $this->result->fetch(PDO::FETCH_ASSOC);
    }
}

   

?>