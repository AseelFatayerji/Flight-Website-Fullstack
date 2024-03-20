<?php

include 'connection.php';

$coin = $_POST['id'];
$name = $_POST['textname'];

$query = $mysqli->prepare('DELETE FROM coins WHERE coins_id = ?;');
$query->bind_param('i', $coin);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminWallet.html?admin$name", true, 301);