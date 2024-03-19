<?php

include 'connection.php';

$name = $_POST['textname'];
$flight_id = $_POST['id'];
$ret = $_POST['type'];

$query = $mysqli->prepare('UPDATE flights SET return_date = ? WHERE flight_id = ?;');
$query->bind_param('si',$ret, $flight_id);
$query->execute();
$response['status'] = "success";
header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminFlight.html?admin=$name", true, 301);
