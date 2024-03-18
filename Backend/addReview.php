<?php

include 'connection.php';

$rating = $_POST['rating'];
$comment = $_POST['comment'];
$user = $_POST['user'];
$flight = $_POST['flight'];

$query = $mysqli->prepare("INSERT INTO reviews (user, flight, rating, comment) VALUES (?, ?, ?, ?)");
$query->bind_param('iiis', $user, $flight, $rating, $comment);
if($query->execute()){
    $response['status'] = "success";
    $response['message'] = "Review added successfully";
}
else{
    $response['status'] = "failed";
    $response['message'] = "failed to add the review";
}