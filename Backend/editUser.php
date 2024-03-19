<?php
header("Access-Control-Allow-Origin: *");
include 'connection.php';
$user_id=$_POST['user_id'];
$user_name = $_POST['user_name'];
$user_email = $_POST['user_email'];
$user_password = $_POST['user_password'];


$query = $mysqli->prepare('UPDATE users SET user_name = ? , user_email = ?, user_passowrd = ?,WHERE user_id = ?;');
$query->bind_param('sssi',$user_name, $user_email, $user_password,$user_id);
$query->execute();
$response['status'] = "success";