<?php
include("connection.php");


$user_id = 1;

$sql = "SELECT *
        FROM flights 
        INNER JOIN bookings ON bookings.flight_id = flights.flight_id 
        WHERE bookings.user_id = ?";

$data = $mysqli->prepare($sql);
$data->bind_param("i", $user_id);
$data->execute();
$result = $data->get_result();


$booking_history = array();

while ($row = $result->fetch_assoc()) {
    $booking_history[] = $row;
}

header('Content-Type: application/json');
echo json_encode($booking_history);
?>