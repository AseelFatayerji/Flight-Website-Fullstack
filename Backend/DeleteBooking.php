<?php

include 'connection.php';

$booking = $_POST['booking'];
$name = $_POST['name'];

$query = $mysqli->prepare('DELETE FROM bookings WHERE booking_id = ?;');
$query->bind_param('i', $booking);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminDash.html?admin$name", true, 301);