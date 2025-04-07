<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "sql106.infinityfree.com";
$user = "if0_37915959";
$password = "O4k6G7VJOo";
$dbname = "if0_37915959_image_uploads";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("<script>alert('فشل الاتصال بقاعدة البيانات'); window.location.href='dashboard.html';</script>");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $branch = $_POST['branch'];

    $img1 = 'uploads/' . basename($_FILES['img1']['name']);
    $img2 = 'uploads/' . basename($_FILES['img2']['name']);
    $img3 = 'uploads/' . basename($_FILES['img3']['name']);

    if (
        move_uploaded_file($_FILES['img1']['tmp_name'], $img1) &&
        move_uploaded_file($_FILES['img2']['tmp_name'], $img2) &&
        move_uploaded_file($_FILES['img3']['tmp_name'], $img3)
    ) {
        $sql = "INSERT INTO products (name, description, price, Type, img1, img2, img3) 
                VALUES ('$name', '$description', '$price', '$branch', '$img1', '$img2', '$img3')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('تمت إضافة المنتج بنجاح!'); window.location.href='dashboard489023645868583406589.html';</script>";
        } else {
            echo "<script>alert('حدث خطأ أثناء إضافة المنتج.'); window.location.href='dashboard489023645868583406589.html';</script>";
        }
    } else {
        echo "<script>alert('فشل في رفع الصور.'); window.location.href='dashboard489023645868583406589.html';</script>";
    }
}

$conn->close();
?>