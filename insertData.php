<?php include ('php/crud.php'); ?>
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

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <!--Our Style-->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
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
    <div class="container">
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
                                                <th colspan="10" class="text-center">Live Feed</th>
                                            </tr>
                                            <tr>
                                                <th>ID</th>
                                                <th>Ime grada</th>
                                                <th>Paragraf</th>
                                                <th>Broj</th>
                                                <th>Vrijeme</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <form action="php/crud.php" method="POST">
                                                <input type="hidden" name="id" value="<?php echo $id; ?>">
                                                <td></td>
                                                <td><input name="lfImeGrada" type="text" class="form-control" value="<?php  
                                                    echo $lfImeGrada;?>" placeholder="Ime Grada" required>
                                                </td>
                                                <td><input name="lfParagraf" type="text" class="form-control" value="<?php  
                                                    echo $lfParagraf;?>" placeholder="Text" required>
                                                </td>
                                                <td><input name="lfBroj" type="text" class="form-control" value="<?php  
                                                    echo $lfBroj;?>" placeholder="Broj Zarazenih" required>
                                                </td>
                                                <td><input name="vrijeme" type="text" class="form-control" value="<?php  
                                                    echo $lfVrijeme;?>" placeholder="vrijeme" required>
                                                </td>
                                                <td>        
                                                    <?php
                                                        if($update==true): ?>
                                                    <input type="submit" class="btn btn-info" name="update" value="Izmjena">
                                                    <?php else: ?>
                                                    <input type="submit" class="btn btn-success" name="saveLf" value="Dodaj">
                                                    <?php endif; ?>
                                                </td>
                                            </form>
                                            </tr>
                                            <?php
                                            $sql = "SELECT * FROM live_feed ORDER BY id DESC";
                                            $result = $mysqli->query($sql);

                                            if ($result->num_rows > 0) {
                                                while($row = $result->fetch_assoc()) { ?>

                                            <tr>
                                                <td><?php echo $row['id']?></td>
                                                <td><?php echo $row['lfImeGrada']?></td>
                                                <td><?php echo $row['lfBroj']?></td>
                                                <td><?php echo $row['lfParagraf']?></td>
                                                <td><?php echo $row['vrijeme']?></td>
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
            <div class="col-12">
            <!--Gradovi Tab-->
                <section class="tab-panel">
                    <div class="container d-flex justify-content-center">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th colspan="10" class="text-center">Gradovi</th>
                                            </tr>
                                            <tr>
                                                <th>ID</th>
                                                <th>Ime grada</th>
                                                <th>Broj zarazenih</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <form action="php/crud.php" method="POST">
                                                <input type="hidden" name="id" value="<?php echo $id; ?>">
                                                <td></td>
                                                <td><input name="ime_grada" type="text" class="form-control" value="<?php  
                                                    echo $ime_grada;?>" placeholder="Ime Grada" required>
                                                </td>
                                                <td><input name="broj_zaraznih" type="text" class="form-control" value="<?php  
                                                    echo $broj_zaraznih;?>" placeholder="Broj Zarazenih" required>
                                                </td>
                                                <td>        
                                                    <?php
                                                        if($update==true): ?>
                                                    <input type="submit" class="btn btn-info" name="updateG" value="Izmjena">
                                                    <?php else: ?>
                                                    <input type="submit" class="btn btn-success" name="saveG" value="Dodaj">
                                                    <?php endif; ?>
                                                </td>
                                            </form>
                                            </tr>
                                            <?php
                                            $sql = "SELECT * FROM gradovi ORDER BY broj_zaraznih DESC";
                                            $result = $mysqli->query($sql);

                                            if ($result->num_rows > 0) {
                                                while($row = $result->fetch_assoc()) { ?>

                                            <tr>
                                                <td><?php echo $row['id']?></td>
                                                <td><?php echo $row['ime_grada']?></td>
                                                <td><?php echo $row['broj_zaraznih']?></td>
                                                <td>
                                                    <a href="insertData.php?editG=<?php echo $row['id']; ?>"
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