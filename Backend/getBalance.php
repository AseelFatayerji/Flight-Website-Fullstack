<?php

include("connection.php");
$sql = "SELECT user_id, balance FROM wallets";
$result = $mysqli->query($sql);
if ($result) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $mysqli->close();

    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    
    echo "Error: " . $mysqli->error;
}
?>
