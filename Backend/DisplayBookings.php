<?php
include 'connection.php';
$readSql = "SELECT * FROM bookings JOIN flights ON flights.flight_id = bookings.flight_id JOIN users ON bookings.user_id = users.user_id";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $item = array(
        'flight' => $row['flight_id'],
        'des'=>$row['flight_destination'],
        'dep'=>$row['departure_date'],
        'ret'=>$row['return_date'],
        'user' => $row['user_name'],    
        'email'=>$row['user_email'],
        'payment'=>$row['payment']
    );
    $list[] = $item;    
}
echo json_encode($list);


