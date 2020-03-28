<?php

session_start();
$mysqli = new mysqli('localhost', 'root', '', 'bih_korona') or die(mysqli_error($mysqli));
mysqli_set_charset($mysqli, "UTF8");


$id = 0;
$update = false;
$naslov = '';
$paragraf = '';
$link = '';
$izvor = '';
$slika = '';
//LIVE FEED

//ADD
if(isset($_POST['saveLf'])){
    $naslov = $_POST['naslov'];
    $paragraf = $_POST['paragraf'];
    $link = $_POST['link'];
    $izvor = $_POST['izvor'];
    $slika = $_POST['slika'];
    

    $mysqli->query("INSERT INTO vijesti (naslov,paragraf,link, izvor, slika) VALUES ('$naslov', '$paragraf' , '$link' , '$izvor', '$slika')") or die($mysqli->error);

    $_SESSION['message'] = "Sačuvano";
    $_SESSION['msg_type'] = "success";

    header('Location: ../insertData.php');
}
//DELETE
if(isset($_GET['delete'])){
    $id = $_GET['delete'];
    $mysqli->query("DELETE from vijesti WHERE id=$id") or die($mysqli->error());

    $_SESSION['message'] = "Izbrisano";
    $_SESSION['msg_type'] = "danger";

    header('Location: ../insertData.php');
}
//EDDIT
if(isset($_GET['edit'])){
    $id = $_GET['edit'];
    $update = true;
    $result =  $mysqli->query("SELECT * from vijesti WHERE id=$id") or die($mysqli->error());
    if(count(array($result))==1){
        $row = $result->fetch_array();
        $naslov = $row['naslov'];
        $paragraf = $row['paragraf'];
        $link = $row['link'];
        $izvor = $row['izvor'];
        $slika = $row['slika'];
    }
}
if(isset($_POST['update'])){
    $id= $_POST['id'];
    $naslov = $_POST['naslov'];
    $paragraf = $_POST['paragraf'];
    $link = $_POST['link'];
    $izvor = $_POST['izvor'];
    $slika = $_POST['slika'];

    $mysqli->query("UPDATE vijesti SET naslov='$naslov' , paragraf = '$paragraf', link = '$link', izvor = '$izvor', slika = '$slika' WHERE id=$id") or die($mysqli->error());

    $_SESSION['message'] = "Update";
    $_SESSION['msg_type'] = "warning";

    header('Location: ../insertData.php');

}
