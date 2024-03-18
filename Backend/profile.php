<?php
header("Access-Control-Allow-Origin: *");
include('./connection.php');



$userID = $_GET['id'];
$query = "SELECT * FROM users WHERE user_id = ?";
$profile = $mysqli->prepare($query);

if ($profile) {
    $profile->bind_param("i", $userID);
    $profile->execute();
    $result = $profile->get_result();
    
    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        echo json_encode(["status" => "success", "user" => $user]);
    } else {
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Error preparing statement"]);
}
?>
