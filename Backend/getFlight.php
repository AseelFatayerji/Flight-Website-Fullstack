<?php

include 'connection.php';

$id = $_GET['id'];

$query = $mysqli->prepare("SELECT * FROM flights WHERE id = ?");
$query->bind_param('i', $id);
$query->execute();
$query->store_result();
$query->bind_result($id, $destination, $airport, $plane, $departure, $return,$price,$nbOfPassengers);
$query->fetch();


$response['status'] = "success";
$response['flight'] = array(
    'id' => $id,
    'destination' => $destination,
    'airport' => $airport,
    'plane' => $plane,
    'departure' => $departure,
    'return' => $return,
    'price' => $price,
    'nbOfPassengers' => $nbOfPassengers
);
