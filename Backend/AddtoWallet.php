<?php
include 'connection.php';
$user = $_POST['user'];
$amount = $_POST['amount'];

$query = $mysqli->prepare('INSERT INTO wallets (user_id,balance) VALUES(?,?);');
$query->bind_param('is', $user, $amount);
$query->execute();
$response['status'] = "success";
$response['message'] = "list $user was created successfully for $amount";

echo json_encode($list);


