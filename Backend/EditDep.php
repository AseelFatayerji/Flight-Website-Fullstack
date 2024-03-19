<?php

include 'connection.php';

$name = $_POST['textname'];
$flight_id = $_POST['id'];
$dep = $_POST['type'];

$query = $mysqli->prepare('UPDATE flights SET departure_date = ? WHERE flight_id = ?;');
$query->bind_param('si',$dep, $flight_id);
$query->execute();
$response['status'] = "success";
header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminFlight.html?admin=$name", true, 301);
