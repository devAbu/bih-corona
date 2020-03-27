<?php

session_start();
$mysqli = new mysqli('localhost', 'root', '', 'bih-korona') or die(mysqli_error($mysqli));

$id = 0;
$update = false;
$lfImeGrada = '';
$lfBroj = '';
$lfVrijeme = '';
$lfParagraf = '';
//LIVE FEED

//ADD
if(isset($_POST['saveLf'])){
    $lfImeGrada = $_POST['lfImeGrada'];
    $lfBroj = $_POST['lfBroj'];
    $lfParagraf = $_POST['lfParagraf'];
    $lfVrijeme = $_POST['lfVrijeme'];

    $mysqli->query("INSERT INTO live_feed (lfImeGrada,lfBroj,lfParagraf,lfVrijeme) VALUES ('$lfImeGrada', '$lfBroj' , '$lfParagraf' , '$lfVrijeme')") or die($mysqli->error);

    $_SESSION['message'] = "Sačuvano";
    $_SESSION['msg_type'] = "success";

    header('Location: ../insertData.php');
}
//DELETE
if(isset($_GET['delete'])){
    $id = $_GET['delete'];
    $mysqli->query("DELETE from live_feed WHERE id=$id") or die($mysqli->error());

    $_SESSION['message'] = "Izbrisano";
    $_SESSION['msg_type'] = "danger";

    header('Location: ../insertData.php');
}
//EDDIT
if(isset($_GET['edit'])){
    $id = $_GET['edit'];
    $update = true;
    $result =  $mysqli->query("SELECT * from live_feed WHERE id=$id") or die($mysqli->error());
    if(count(array($result))==1){
        $row = $result->fetch_array();
        $lfImeGrada = $row['lfImeGrada'];
        $lfBroj = $row['lfBroj'];
        $lfParagraf = $row['lfParagraf'];
        $vrijeme = $row['vrijeme'];
    }
}
if(isset($_POST['update'])){
    $id= $_POST['id'];
    $lfImeGrada = $_POST['lfImeGrada'];
    $lfBroj = $_POST['lfBroj'];
    $lfParagraf = $_POST['lfParagraf'];
    $lfVrijeme = $_POST['vrijeme'];

    $mysqli->query("UPDATE live_feed SET lfImeGrada='$lfImeGrada' , lfBroj = '$lfBroj', lfParagraf = '$lfParagraf', vrijeme = '$vrijeme' WHERE id=$id") or die($mysqli->error());

    $_SESSION['message'] = "Update";
    $_SESSION['msg_type'] = "warning";

    header('Location: ../insertData.php');

}
