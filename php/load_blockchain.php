<?php

    // @ Remove this file eventually.

    /*
        Reading the blockchain data from file to pass it to the application.
    */
    function readBlockchainFromFile(){
        $jsondata = file_get_contents("res/blockchain.json");
        //var_dump($jsondata);
        return $jsondata;
        /*$array = json_decode($jsondata,true);
        
        foreach($array as $k=>$val):
            echo '<b>Name: '.$k.'</b></br>';
            $keys = array_keys($val);
            foreach($keys as $key):
                echo '&nbsp;'.ucfirst($key).' = '.$val[$key].'</br>';
            endforeach;
        endforeach;*/
    }
    
?>