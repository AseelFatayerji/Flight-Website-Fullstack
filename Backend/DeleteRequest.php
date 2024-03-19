<?php

include 'connection.php';

$coin = $_POST['coin'];
$name = $_POST['name'];

$query = $mysqli->prepare('DELETE FROM coins WHERE coin_id = ?;');
$query->bind_param('i', $coin);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminDash.html?admin$name", true, 301);