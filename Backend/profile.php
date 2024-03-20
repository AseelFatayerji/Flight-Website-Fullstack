<?php
header("Access-Control-Allow-Origin: *");

include 'connection.php';

$id = $_GET["id"];
$querye = $mysqli->prepare("SELECT user_id  FROM wallets WHERE user_id = ?");
$querye->bind_param('i', $id);
$querye->execute();
$querye->store_result();
$querye->bind_result($id);
$querye->fetch();

$num_rows= $querye -> num_rows();
if($num_rows==0){
    


    $read_sql2= "insert into wallets (user_id,balance) value ($id,0)";
    $result2= mysqli_query($mysqli,$read_sql2);
    
    $query = $mysqli->prepare("SELECT * FROM users WHERE user_id = ?");
    $query->bind_param('i', $id);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $user_name, $user_email, $user_password,$is_admin);
    $query->fetch();
    $response['status'] = "success";
    $response['user'] = array(
        'user_id' => $id,
        'user_name' => $user_name,
        'user_email' => $user_email,
        'user_password' => $user_password);
    }else{
        $query = $mysqli->prepare("SELECT * FROM users WHERE user_id = ?");
        $query->bind_param('i', $id);
        $query->execute();
        $query->store_result();
        $query->bind_result($id, $user_name, $user_email, $user_password,$is_admin);
        $query->fetch();
        $response['status'] = "success";
        $response['user'] = array(
            'user_id' => $id,
            'user_name' => $user_name,
            'user_email' => $user_email,
            'user_password' => $user_password);

    }






echo json_encode($response);
