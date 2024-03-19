<?php
header("Access-Control-Allow-Origin: *");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    include("connection.php");

    
    $userId = $_POST['user_Id'];
    $username = $_POST['user_name'];
    $email = $_POST['user_email'];

    $sql = "UPDATE users SET user_name = ?, user_email = ? WHERE user_id = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ssi", $username, $email, $userId);
    $result = $stmt->execute();

    if ($result) {
        
        $response = array("success" => true);
    } else {
       
        $response = array("success" => false);
    }

   
    header('Content-Type: application/json');
    echo json_encode($response);
}