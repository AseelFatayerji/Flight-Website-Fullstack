<?php

include 'connection.php' ;


$query = $mysqli->prepare("SELECT * FROM flights SORT BY departure_date asc LIMIT 5");
$query->execute();
$query->store_result();
$query->bind_result($id, $destination, $airport, $plane, $departure, $return,$price,$nbOfPassengers);
$upcomingFlights = array();
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
    array_push($upcomingFlights, $flight);
    $response['status'] = "success";
    $response['upcomingFlights'] = $upcomingFlights;
}
