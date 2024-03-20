<?php

include 'connection.php';

header("Access-Control-Allow-Origin: *");


$query = $mysqli->prepare("SELECT * FROM flights");
$query->execute();
$result = $query->store_result();
$numrows = $query->num_rows;

if($numrows==0)
    $response = array('status' => 404, 'message' => 'No flights found');
else{
    $flights = array();
    $query->bind_result($id, $destination, $airport, $plane, $departure, $return,$price,$nbOfPassengers,$image);
    while($query->fetch()){
        $flight = array(
            'id' => $id,
            'destination' => $destination,
            'airport' => $airport,
            'plane' => $plane,
            'departure' => $departure,
            'return' => $return,
            'price' => $price,
            'nbOfPassengers' => $nbOfPassengers,
            'image'=>$image
        );
        array_push($flights, $flight);
        $response['status'] = "success";
        $response['flights'] = $flights;
    }}

    echo json_encode($flights);