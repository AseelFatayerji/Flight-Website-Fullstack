<?php
include 'connection.php';
$readSql = "SELECT * FROM reviews";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $item = array(
        'id' => $row['review_id'],
        'user' => $row['user_id'],
        'flight' => $row['flight_id'],
        'rating' => $row['rating'],
        'review' => $row['review_text'],
    );
    $list[] = $item;    
}
echo json_encode($list);


