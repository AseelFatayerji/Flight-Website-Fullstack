<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "flightdb";
    header("Access-Control-Allow-Origin: *");
    

    $mysqli = new mysqli($host, $user, $pass, $db_name);
    if ($mysqli->connect_error) {
        die("". $mysqli->connect_error);
    }



