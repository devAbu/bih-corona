<?php

session_start();
$mysqli = new mysqli('localhost', 'root', '', 'bih-korona') or die(mysqli_error($mysqli));
mysqli_set_charset($mysqli, "UTF8");


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
    $lfVrijeme = $_POST['vrijeme'];

    $mysqli->query("INSERT INTO live_feed (lfImeGrada,lfBroj,lfParagraf,vrijeme) VALUES ('$lfImeGrada', '$lfBroj' , '$lfParagraf' , '$lfVrijeme')") or die($mysqli->error);

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

//Gradovi
$ime_grada = '';
$broj_zaraznih = '';

//ADD
if(isset($_POST['saveG'])){
    $ime_grada = $_POST['ime_grada'];
    $broj_zaraznih = $_POST['broj_zaraznih'];

    $mysqli->query("INSERT INTO gradovi (ime_grada,broj_zaraznih) VALUES ('$ime_grada', '$broj_zaraznih')") or die($mysqli->error);

    $_SESSION['message'] = "Sačuvano";
    $_SESSION['msg_type'] = "success";

    header('Location: ../insertData.php');
}
//DELETE
if(isset($_GET['delete'])){
    $id = $_GET['delete'];
    $mysqli->query("DELETE from gradovi WHERE id=$id") or die($mysqli->error());

    $_SESSION['message'] = "Izbrisano";
    $_SESSION['msg_type'] = "danger";

    header('Location: ../insertData.php');
}
//EDDIT
if(isset($_GET['editG'])){
    $id = $_GET['editG'];
    $update = true;
    $result =  $mysqli->query("SELECT * from gradovi WHERE id=$id") or die($mysqli->error());
    if(count(array($result))==1){
        $row = $result->fetch_array();
        $ime_grada = $row['ime_grada'];
        $broj_zaraznih = $row['broj_zaraznih'];
    }
}
if(isset($_POST['updateG'])){
    $id= $_POST['id'];
    $ime_grada = $_POST['ime_grada'];
    $broj_zaraznih = $_POST['broj_zaraznih'];

    $mysqli->query("UPDATE gradovi SET ime_grada='$ime_grada' , broj_zaraznih = '$broj_zaraznih' WHERE id=$id") or die($mysqli->error());

    $_SESSION['message'] = "Update";
    $_SESSION['msg_type'] = "warning";

    header('Location: ../insertData.php');

}
