<?php
include 'connection.php';

$name = $_POST['textName'];
$des = $_POST['des'];
$airport = $_POST['airport'];
$plane = $_POST['plane'];
$depart = $_POST['depart'];
$ret = $_POST['return'];
$price = $_POST['price'];

$planeSQL = "SELECT plane_id ,max_capacity FROM planes WHERE plane_name = '$plane'";
$getPlane = mysqli_query($mysqli, $planeSQL);

$plane_id;
$capacity;
while ($row = mysqli_fetch_assoc($getPlane)) {
    $plane_id = $row['plane_id'];
    $capacity = $row["max_capacity"];
}

$airportSQL = "SELECT airport_id FROM airports WHERE airport_name = '$airport'";
$getAirport = mysqli_query($mysqli, $airportSQL);

$airport_id;
while ($row = mysqli_fetch_assoc($getAirport)) {
    $airport_id = $row['airport_id'];
}

$query = $mysqli->prepare('INSERT INTO flights (flight_destination	,airport_id	,plane_id	,departure_date	,return_date	,price	,nb_passengers) VALUES(?,?,?,?,?,?,?);');
$query->bind_param('siissii', $des, $airport_id, $plane_id, $depart, $ret, $price, $capacity);
$query->execute();
$response['status'] = "success";
header("Location:http://localhost/fullstack/Flight%20Website/Frontend/pages/AdminFlight.html?admin=$name", true, 301);
