<?php
include 'connection.php';
$readSql = "SELECT * FROM reviews JOIN users ON reviews.user_id = users.user_id";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $item = array(
        'id' => $row['review_id'],
        'user' => $row['user_name'],
        'rating' => $row['rating'],
        'review' => $row['review_text'],
        'aproved' =>$row['aproved']
    );
    $list[] = $item;    
}
echo json_encode($list);


