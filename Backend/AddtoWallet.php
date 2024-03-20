<?php

include 'connection.php';

$name = $_POST['textname'];
$wallet = $_POST['wallet'];
$amount = $_POST['amount'];;
$coin = $_POST['id'];

$query = $mysqli->prepare('UPDATE wallets SET balance = ? WHERE wallet_id = ?;');
$query->bind_param('ii',$amount, $wallet);
$query->execute();
$response['status'] = "success";

$query = $mysqli->prepare('DELETE FROM coins WHERE coins_id = ?;');
$query->bind_param('i', $coin);
$query->execute();
$response['status'] = "success";

header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminWallet.html?admin=$name", true, 301);
