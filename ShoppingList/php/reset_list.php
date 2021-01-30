<?php
//First load the DB connection
require_once("db_connect.php");

//This will show errors in the browser if there are some
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($dbi) {

    $q = "DELETE FROM ShoppingList_Items";

    //prepare statement, execute, store_result
    if ($Stmt = $dbi->prepare($q)) {
        $Stmt->execute();
    } else {
        echo "Error";
    }

    //echo($insertedRows);
    $Stmt->close();
    $dbi->close();
}
// Return to main page
echo "OK: table reset";

?>