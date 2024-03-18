<?php

include 'connection.php';

$user = $_GET['user'];
$flight = $_GET['flight'];

$query = $mysqli->prepare("SELECT * FROM reviews WHERE user_id = ? AND flight_id = ?");
$query->bind_param('ii', $user, $flight);
$query->execute();
$query->store_result();
$query->bind_result($id,$user,$flight, $rating, $comment);

$response['status'] = "success";
$response['review'] = [
    'id' => $id,
    'user' => $user,
    'flight' => $flight,
    'rating' => $rating,
    'comment' => $comment
];