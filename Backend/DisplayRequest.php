<?php
include 'connection.php';
$readSql = "SELECT * FROM coins JOIN wallets ON coins.wallet_id = wallets.wallet_id JOIN users ON wallets.user_id = users.user_id";
$result = mysqli_query($mysqli, $readSql);

$list = [];
while ($row = mysqli_fetch_assoc($result)) {
    $item = array(
        'id' => $row['coins_id'],
        'user'=>$row['user_name'],
        'wallet'=> $row['wallet_id'],
        'amount' => $row['amount']
    );
    $list[] = $item;    
}
echo json_encode($list);


