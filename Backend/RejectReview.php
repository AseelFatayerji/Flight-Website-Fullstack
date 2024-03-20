<?php

include 'connection.php';

$name = $_POST['textname'];
$review = $_POST['id'];

$query = $mysqli->prepare('DELETE FROM reviews WHERE review_id = ?;');
$query->bind_param('i', $review);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminReview.html?admin$name", true, 301);