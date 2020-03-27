<?php

// configuration
include 'php/connection.php';

$row = $_POST['row'];
$rowperpage = 28;

// selecting posts
$query = 'SELECT * FROM gradovi limit ' . $row . ',' . $rowperpage;
$result = mysqli_query($conn, $query);

$html = '';

while ($row = mysqli_fetch_array($result)) {
    $id = $row['id'];
    $ime_grada = $row['ime_grada'];
    $broj_zaraznih = $row['broj_zaraznih'];


    $html .= '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 pt-3 post" id="post_' . $id . '">';
    $html .= '<div class="box-part text-center bg-light">';
    $html .= '<div class="title">';
    $html .= '<h4>' . $ime_grada . '<i class="fa fa-map-marker" aria-hidden="true"></i></h4></div>';
    $html .= '<hr style="margin-top: 0; border-top: 1px solid darkgray">';
    $html .= '<div class="text">';
    $html .= '<p>Broj zaraženih: <span class="text-danger">' . $broj_zaraznih . '</span></p>
    </div>';
    $html .= '</div>';
    $html .= '</div>';
}

echo $html;
