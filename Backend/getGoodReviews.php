<?php

include 'connection.php';

$query = $mysqli->prepare("SELECT * FROM reviews WHERE rating > 3");
$query->execute();
$result = $query->store_result();

$goodReviews = array();
$query->bind_result($id,$user,$flight, $rating, $comment);
while($query->fetch()){
    $review = array(
        'id' => $id,
        'user' => $user,
        'flight' => $flight,
        'rating' => $rating,
        'comment' => $comment
    );
    array_push($goodReviews, $review);
    $response['status'] = "success";
    $response['goodReviews'] = $goodReviews;
}
