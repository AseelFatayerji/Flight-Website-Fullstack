<?php

include 'connection.php';

$flight_id = $_POST['flight_id'];
$user_id = $_POST['user_id'];

$query = $mysqli->prepare("INSERT INTO bookings (flight_id,user_id) VALUES (?,?)");
$query->bind_param("ii", $flight_id,$user_id);
        if($query->execute()){
            $response["status"] = "Success";
        }else{
            $response["status"] = "Failed";
        }
