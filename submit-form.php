<?php
$servername = "localhost"; // Update to your Hostinger database server name
$username = "u308266873_buditeam"; // Update to your Hostinger database username
$password = ""; // Update to your Hostinger database password
$dbname = "u308266873_budi"; // Update to your Hostinger database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$data = json_decode(file_get_contents('php://input'), true);

// Insert data into table
$sql = "INSERT INTO user (first_name, last_name, email) VALUES ('" . $data['first_name'] . "', '" . $data['last_name'] . "', '" . $data['email'] . "')";

if (mysqli_query($conn, $sql)) {
    echo "Form submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
