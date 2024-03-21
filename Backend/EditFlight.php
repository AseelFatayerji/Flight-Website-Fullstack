<?php

include 'connection.php';

$name = $_POST['name'];
$flight_id = $_POST['flight'];
$dep = $_POST['dep'];
$ret = $_POST['ret'];
$des = $_POST['des'];
$pl = $_POST['pl'];
$img = $_POST['img'];
$planeSQL = "SELECT plane_id ,max_capacity FROM planes WHERE plane_name = '$pl'";
$getPlane = mysqli_query($mysqli, $planeSQL);
$plane_id;
while ($row = mysqli_fetch_assoc($getPlane)) {
    $plane_id = $row['plane_id'];
}


$query = $mysqli->prepare('UPDATE flights SET departure_date = ?, return_date =?,flight_destination=?,plane_id=?,img=? WHERE flight_id = ?;');
$query->bind_param('sssisi',$dep,$ret,$des,$plane_id,$img,$flight_id);
$query->execute();
$response['status'] = "success";
header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminFlight.html?admin=$name", true, 301);
