<?php

include 'connection.php';

$flight = $_POST['flight'];
$name = $_POST['name'];

$query = $mysqli->prepare('DELETE FROM flights WHERE flight_id = ?;');
$query->bind_param('i', $flight);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminDash.html?admin$name", true, 301);