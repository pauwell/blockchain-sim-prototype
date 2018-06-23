<?php
    var_dump($_GET);

    /*
        @ TODO
    */


    if(empty($_GET)){
       // Error. 
    }else if($_GET['cmd'] === 'register'){  
        // Add a new address to res/address_register.txt.      
        $handle = fopen("../res/address_register.txt", 'a');
        fwrite($handle, $_GET['address'] . PHP_EOL);
        fclose($handle);

        // Debug.
        echo "<p>Trying to register with ".$_GET['address']."!</p>";
        $handle = fopen("../res/address_register.txt", 'r');
        $file = fread($handle, filesize("../res/address_register.txt"));
        fclose($handle);
        print_r($file);

    } else if($_GET['cmd'] === 'login'){    
        // Login to the wallet t.
        echo "<p>Trying to login with ".$_GET['phrase']."!</p>";
    }

    ente();
?>