<?php
include('connection.php');
$email = $_POST['user_email'];
$password = $_POST['user_password'];



$query = $mysqli->prepare('select user_id,user_email,user_password,user_name,is_admin
from users 
where user_email=?');
$query->bind_param('s', $email);
$query->execute();
$query->store_result();
$query->bind_result($id, $email, $hashed_password, $name,$isadmin);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        

       
        $response['status'] = "logged in";
        $response['user_id'] = $id;
        $response['name'] = $name;
        $response['email'] = $email;
        $response['is_admin']=$isadmin;
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);
