<?php

include 'connection.php';

$booking = $_POST['booking'];
$name = $_POST['name'];
$des = $_POST['des'];
$dep = $_POST['dep'];
$ret = $_POST['ret'];

$readSql = "SELECT flight_id FROM bookings WHERE booking_id = $booking";
$result = mysqli_query($mysqli, $readSql);

$flight;
while ($row = mysqli_fetch_assoc($result)) {
    $flight = $row['flight_id'];    
}

$query = $mysqli->prepare('UPDATE flights SET departure_date = ?,return_date=?,flight_destination=?  WHERE flight_id = ?;');
$query->bind_param('sssi',$dep ,$ret ,$des, $flight);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminBooking.html?admin=$name", true, 301);