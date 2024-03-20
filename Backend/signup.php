<?php
header("Access-Control-Allow-Origin: *");
include('./connection.php');


$user_name = $_POST['user_name'];
$user_email = $_POST['user_email'];
$user_password = $_POST['user_password'];

$check_email = $mysqli->prepare('select user_email from users where user_email=?');
$check_email->bind_param('s', $user_email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();


if ($email_exists == 0) {
    $hashed_password = password_hash($user_password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(user_name,user_email,user_password) values(?,?,?);');
    $query->bind_param('sss', $user_name,$user_email,$hashed_password);
    
    $query->execute();
    
    $response['status'] = "success";
    $response['message'] = "user was created successfully";
   
} else {
    $response["status"] = "user already exists";
    $response["message"] = "user $user_name already exist";
}


echo json_encode($response);
