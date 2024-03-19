<?php

include 'connection.php';

$name = $_POST['textName'];
$flight_id = $_POST['id'];
$plane = $_POST['type'];

$planeSQL = "SELECT plane_id ,max_capacity FROM planes WHERE plane_name = '$plane'";
$getPlane = mysqli_query($mysqli, $planeSQL);
$plane_id;
while ($row = mysqli_fetch_assoc($getPlane)) {
    $plane_id = $row['plane_id'];
}

$query = $mysqli->prepare('UPDATE flights SET plane_id = ? WHERE flight_id = ?;');
$query->bind_param('ii',$plane_id, $flight_id);
$query->execute();
$response['status'] = "success";
header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminFlight.html?admin=$name", true, 301);
