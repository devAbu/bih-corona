<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bih-korona";

$conn = new mysqli($servername, $username, $password, $dbname);

mysqli_set_charset($conn, "UTF8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}