<?php

include("connection.php");
$id=$_GET['id'];

$query = $mysqli->prepare("SELECT * FROM wallets WHERE user_id = ?");
$query->bind_param('i', $id);
$query->execute();
$query->store_result();
$query->bind_result($walletid,$id, $balance);
$query->fetch();
$response['status'] = "success";
$response['user'] = array(
    'user_id' => $id,
    'wallet_id' => $walletid,
    'balance' => $balance
    

);

echo json_encode($response);
