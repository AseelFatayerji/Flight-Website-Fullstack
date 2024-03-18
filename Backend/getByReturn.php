<?php

include 'connection.php';

$return = $_GET['return'];

$query = $mysqli->prepare("SELECT * FROM flights WHERE return_date < ?");
$query->bind_param('s', $return);
$query->execute();
$result = $query->store_result();

$flightsByReturn = array();
$query->bind_result($id, $destination, $airport, $plane, $departure, $return,$price,$nbOfPassengers);
while($query->fetch()){
    $flight = array(
        'id' => $id,
        'destination' => $destination,
        'airport' => $airport,
        'plane' => $plane,
        'departure' => $departure,
        'return' => $return,
        'price' => $price,
        'nbOfPassengers' => $nbOfPassengers
    );
    array_push($flightsByReturn, $flight);
    $response['status'] = "success";
    $response['flightsByReturn'] = $flightsByReturn;
}