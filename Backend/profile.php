<?php
header("Access-Control-Allow-Origin: *");

include 'connection.php';

$id = $_GET["id"];

$query = $mysqli->prepare("SELECT * FROM users WHERE user_id = ?");
$query->bind_param('i', $id);
$query->execute();
$query->store_result();
$query->bind_result($id, $user_name, $user_email, $user_password,$is_admin);
$query->fetch();


$response['status'] = "success";
$response['user'] = array(
    'user_id' => $id,
    'user_name' => $user_name,
    'user_email' => $user_email,
    'user_password' => $user_password

);

echo json_encode($response);
