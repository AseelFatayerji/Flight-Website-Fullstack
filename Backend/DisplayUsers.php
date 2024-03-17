<?php
include 'connection.php';
$readSql = "SELECT * FROM users";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $item = array(
        'id' => $row['id'],
        'name' => $row['user_name'],
        'email' => $row['user_email'],
        'pass' => $row['user_password']
    );
    $list[] = $item;    
}
echo json_encode($list);


