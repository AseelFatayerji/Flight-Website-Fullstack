<?php

include 'connection.php';

$name = $_POST['textname'];
$review = $_POST['id'];
$approved = 1;

$query = $mysqli->prepare('UPDATE reviews SET aproved = ? WHERE review_id = ?;');
$query->bind_param('ii',$approved, $review);
$query->execute();
$response['status'] = "success";
header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminReview.html?admin=$name", true, 301);
