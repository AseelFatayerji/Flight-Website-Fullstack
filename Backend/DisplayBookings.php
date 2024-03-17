<?php
include 'connection.php';
$readSql = "SELECT * FROM bookings";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $item = array(
        'id' => $row['booking_id'],
        'user' => $row['user_id'],
        'flight' => $row['flight_id']
    );
    $list[] = $item;    
}
echo json_encode($list);


