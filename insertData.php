<?php require('php/crud.php') ?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <title>BiH-Baza</title>

</head>

<body>
    <?php 
        if(isset($_SESSION['message'])): ?>

    <div class="alert alert-<?=$_SESSION['msg_type']?>">

        <?php 
            echo $_SESSION['message'];
            unset($_SESSION['message']);
        ?>
    </div>
    <?php endif ?>
    <div class="container-fluid" style="width:100vw;">
        <div class="row">
            <!--Live Feed Tab-->
            <div class="col-12"></div>
            <section id="live-feed" class="tab-panel">
                <div class="container d-flex justify-content-center">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th colspan="10" class="text-center">Vijesti</th>
                                        </tr>
                                        <tr>
                                            <th>ID</th>
                                            <th>Naslov</th>
                                            <th>Paragraf</th>
                                            <th>Link</th>
                                            <th>Izvor</th>
                                            <th>Slika</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <form action="php/crud.php" method="POST" enctype="multipart/form-data">
                                                <input type="hidden" name="id" value="<?php echo $id; ?>">
                                                <td></td>
                                                <td><input name="naslov" type="text" class="form-control" value="<?php  
                                                    echo $naslov;?>" placeholder="Naslov">
                                                </td>
                                                <td><input name="paragraf" type="text" class="form-control" value="<?php  
                                                    echo $paragraf;?>" placeholder="Paragraf">
                                                </td>
                                                <td><input name="link" type="text" class="form-control" value="<?php  
                                                    echo $link;?>" placeholder="Link">
                                                </td>
                                                <td><input name="izvor" type="text" class="form-control" value="<?php  
                                                    echo $izvor;?>" placeholder="Izvor">
                                                </td>
                                                <td><input name="slika" type="text" value="<?php  
                                                    echo $slika;?>" placeholder="Slika">
                                                </td>
                                                <td>
                                                    <?php
                                                        if($update==true): ?>
                                                    <input type="submit" class="btn btn-info" name="update"
                                                        value="Izmjena">
                                                    <?php else: ?>
                                                    <input type="submit" class="btn btn-success" name="saveLf"
                                                        value="Dodaj">
                                                    <?php endif; ?>
                                                </td>
                                            </form>
                                        </tr>
                                        <?php
                                            $sql = "SELECT * FROM vijesti ORDER BY id DESC";
                                            $result = $mysqli->query($sql);

                                            if ($result->num_rows > 0) {
                                                while($row = $result->fetch_assoc()) { ?>

                                        <tr>
                                            <td><?php echo $row['id']?></td>
                                            <td><?php echo $row['naslov']?></td>
                                            <td><?php echo $row['paragraf']?></td>
                                            <td><?php echo $row['link']?></td>
                                            <td><?php echo $row['izvor']?></td>
                                            <td><?php echo $row['slika'] ?></td>
                                            <td>
                                                <a href="insertData.php?edit=<?php echo $row['id']; ?>"
                                                    class="btn btn-info">Izmjena</a>
                                                <a href="php/crud.php?delete=<?php echo $row['id']; ?>"
                                                    class="btn btn danger">Izbrisi</a>
                                            </td>
                                        </tr>
                                        <?php }} ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>