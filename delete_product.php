<?php

$host = "sql106.infinityfree.com";
$user = "if0_37915959";
$password = "O4k6G7VJOo";
$dbname = "if0_37915959_image_uploads";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);
$productId = $data['id'] ?? null;

$response = ['success' => false];

if ($productId) {
    $stmt = $conn->prepare("DELETE FROM products WHERE id = ?");
    $stmt->bind_param("i", $productId);

    if ($stmt->execute()) {
        $response['success'] = true;
    }

    $stmt->close();
}

header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>