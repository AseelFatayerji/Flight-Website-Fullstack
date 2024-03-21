<?php

include 'connection.php';

$id = $_GET['id'];

$query = $mysqli->prepare("SELECT * FROM flights WHERE flight_id = ?");
$query->bind_param('i', $id);
$query->execute();
$query->store_result();
$query->bind_result($flight_id, $destination, $airport, $plane, $departure, $return,$price,$nbOfPassengers,$image);
$query->fetch();


$response['status'] = "success";
$response['flight'] = array(
    'id' => $flight_id,
    'destination' => $destination,
    'airport' => $airport,
    'plane' => $plane,
    'departure' => $departure,
    'return' => $return,
    'price' => $price,
    'nbOfPassengers' => $nbOfPassengers,
    'image'=> $image

);
echo json_encode($response);