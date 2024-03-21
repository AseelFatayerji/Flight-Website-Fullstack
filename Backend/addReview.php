<?php

include 'connection.php';

$rating = $_POST['rating'];
$comment = $_POST['review'];
$user = $_POST['user_id'];
$flight = $_POST['flight_id'];

$query = $mysqli->prepare("INSERT INTO reviews (user_id, flight_id, rating, review_text) VALUES (?, ?, ?, ?)");
$query->bind_param('iiis', $user, $flight, $rating, $comment);
if($query->execute()){
    $response['status'] = "success";
    $response['message'] = "Review added successfully";
}
else{
    $response['status'] = "failed";
    $response['message'] = "failed to add the review";
}

echo json_encode($response);