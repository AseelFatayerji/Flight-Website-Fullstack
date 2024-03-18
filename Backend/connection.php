<?php
    header("Access-Control-Allow-Origin: *");
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "flightdb";
   

    $mysqli = new mysqli($host, $user, $pass, $db_name);
    if ($mysqli->connect_error) {
        die("". $mysqli->connect_error);
    }



