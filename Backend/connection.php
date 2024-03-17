<?php

header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');

    $mysqli = new mysqli('localhost', 'root', "", "flightdb");

    if($mysqli->connect_error){
        die("Connection Error (" . $mysqli->connect_errno . ')' . $mysqli->connect_error);
    }