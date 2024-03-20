<?php

include("connection.php");

$amount = $_POST['req-amount'];
$userId = $_POST['user_id'];
$querye = $mysqli->prepare("SELECT wallet_id FROM wallets WHERE user_id = ?");
$querye->bind_param('i', $userId);
$querye->execute();
$querye->store_result();
$querye->bind_result($wallet);
$querye -> fetch();

$query = $mysqli->prepare('INSERT INTO coins (wallet_id,amount) VALUES(?,?);');
    $query->bind_param('ii',$wallet,$amount);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "request sent successfully";

echo json_encode($response);
?>