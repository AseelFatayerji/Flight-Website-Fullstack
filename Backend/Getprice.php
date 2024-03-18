<?php
include 'connection.php';
$readSql = "SELECT price FROM flights as f , bookings as b WHERE f.flight_id = b.flight_id";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $list[] = $row;    
}
echo json_encode($list);


