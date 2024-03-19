<?php

include 'connection.php';

$departure = $_GET['departure'];

$query = $mysqli->prepare("SELECT * FROM flights WHERE departure_date > ?");
$query->bind_param('s', $departure);
$query->execute();
$result = $query->store_result();

$flightsByDeparture = array();
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
    array_push($flightsByDeparture, $flight);
    $response['status'] = "success";
    $response['flightsByDeparture'] = $flightsByDeparture;
}