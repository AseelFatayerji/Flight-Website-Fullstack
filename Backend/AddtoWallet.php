<?php

include 'connection.php';

$name = $_POST['textname'];
$wallet = $_POST['id'];
$amount = $_POST['amount'];;
$coin = $_POST['coin'];

$query = $mysqli->prepare('UPDATE wallets SET amount = ? WHERE wallet_id = ?;');
$query->bind_param('ii',$amount, $wallet);
$query->execute();
$response['status'] = "success";

$query = $mysqli->prepare('DELETE FROM coins WHERE coin_id = ?;');
$query->bind_param('i', $coin);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminReview.html?admin=$name", true, 301);
