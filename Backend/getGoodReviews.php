<?php

include 'connection.php';

$query = $mysqli->prepare("SELECT r.*, u.user_name FROM reviews as r join users as u on r.user_id = u.user_id  WHERE rating > 3");
$query->execute();
$result = $query->store_result();

$goodReviews = array();
$query->bind_result($id,$user,$flight, $rating, $comment,$approved,$name);
while($query->fetch()){
    $review = array(
        'id' => $id,
        'user' => $user,
        'flight' => $flight,
        'rating' => $rating,
        'comment' => $comment,
        'approved' =>$approved,
        'name' =>$name,
    );
    array_push($goodReviews, $review);
    $response['status'] = "success";
    $response['goodReviews'] = $goodReviews;
}


echo json_encode($goodReviews);