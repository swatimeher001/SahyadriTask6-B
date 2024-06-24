<?php
$servername = "127.0.0.1:3309";
$username = "root";  // replace with your MySQL username
$password = "india@123";      // replace with your MySQL password
$dbname = "auth_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $response = [
                'success' => true,
                'message' => 'Sign in successful!'
            ];
        } else {
            $response = [
                'success' => false,
                'message' => 'Invalid password.'
            ];
        }
    } else {
        $response = [
            'success' => false,
            'message' => 'No account found with that email address.'
        ];
    }

    // Output the response as JSON
    header('Content-Type: application/json');
    echo json_encode($response);
}

$conn->close();
?>
