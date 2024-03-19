<?php

include("connection.php");

$userName = $_POST['user_name'];
$userEmail = $_POST['user_email'];
$userId = $_POST['user_id'];


$sql = "UPDATE users SET user_name = ?, user_email = ? WHERE user_id = ?"; 
$data = $mysqli->prepare($sql);
$data->bind_param("ssi", $userName, $userEmail, $userId);
$result = $data->execute();

if ($result) {

    echo json_encode(array('success' => true));
} else {
    
    echo json_encode(array('success' => false));
}
   
