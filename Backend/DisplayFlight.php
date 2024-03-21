<?php
include 'connection.php';
$readSql = "SELECT * FROM flights JOIN planes ON planes.plane_id = flights.plane_id";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $item = array(
        'id' => $row['flight_id'],
        'des' => $row['flight_destination'],
        'airport' => $row['airport_id'],
        'plane' => $row['plane_name'],
        'depart' => $row['departure_date'],
        'return' => $row['return_date'],
        'price' => $row['price'],
        'capacity' => $row['nb_passengers'],
        'image' => $row['img']
    );
    $list[] = $item;    
}
echo json_encode($list);


