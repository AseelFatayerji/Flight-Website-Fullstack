<?php

include 'connection.php';

$flight_id = $_POST['flight_id'];
$des = $_POST['flight_destination'];
$depart = $_POST['departure_date'];
$return = $_POST['return_date'];
$price = $_POST['price'];

$query = $mysqli->prepare('UPDATE flights SET flight_destination = ? , departure_date = ?, return_date = ?, price = ?WHERE flight_id = ?;');
$query->bind_param('sssii',$des, $depart, $return, $price,$flight_id);
$query->execute();
$response['status'] = "success";