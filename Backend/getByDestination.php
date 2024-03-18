<?php 

include 'connection.php';

$destination = $_GET['destination'];

$query = $mysqli->prepare("SELECT * FROM flights WHERE flight_destination = ?");
$query->bind_param('s', $destination);
$query->execute();
$result = $query->store_result();

$flightsByDestination = array();
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
    array_push($flightsByDestination, $flight);
    $response['status'] = "success";
    $response['flightsByDestination'] = $flightsByDestination;
}