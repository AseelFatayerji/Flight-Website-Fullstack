<?php

include("connection.php");

$amount = $_POST['req-amount'];
$wallet = $_POST['wallet_id'];

$query = $mysqli->prepare('INSERT INTO coins (amount,wallet_id) VALUES(?,?);');
    $query->bind_param('ss', $amount, $wallet);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "request sent successfully";

echo json_encode($response);
?>
