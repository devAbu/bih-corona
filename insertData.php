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

    <style>
        body {
            color: #566787;
            background: #f5f5f5;
            font-family: 'Varela Round', sans-serif;
            font-size: 13px;
        }

        .table-wrapper {
            background: #fff;
            padding: 20px 25px;
            margin: 30px 0;
            border-radius: 3px;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        }

        .table-title {
            padding-bottom: 15px;
            background: #435d7d;
            color: #fff;
            padding: 16px 30px;
            margin: -20px -25px 10px;
            border-radius: 3px 3px 0 0;
        }

        .table-title h2 {
            margin: 5px 0 0;
            font-size: 24px;
        }

        .table-title .btn-group {
            float: right;
        }

        .table-title .btn {
            color: #fff;
            float: right;
            font-size: 13px;
            border: none;
            min-width: 50px;
            border-radius: 2px;
            border: none;
            outline: none !important;
            margin-left: 10px;
        }

        .table-title .btn i {
            float: left;
            font-size: 21px;
            margin-right: 5px;
        }

        .table-title .btn span {
            float: left;
            margin-top: 2px;
        }

        table.table tr th,
        table.table tr td {
            border-color: #e9e9e9;
            padding: 12px 15px;
            vertical-align: middle;
        }

        table.table tr th:first-child {
            width: 60px;
        }

        table.table tr th:last-child {
            width: 100px;
        }

        table.table-striped tbody tr:nth-of-type(odd) {
            background-color: #fcfcfc;
        }

        table.table-striped.table-hover tbody tr:hover {
            background: #f5f5f5;
        }

        table.table th i {
            font-size: 13px;
            margin: 0 5px;
            cursor: pointer;
        }

        table.table td:last-child i {
            opacity: 0.9;
            font-size: 22px;
            margin: 0 5px;
        }

        table.table td a {
            font-weight: bold;
            color: #566787;
            display: inline-block;
            text-decoration: none;
            outline: none !important;
        }

        table.table td a:hover {
            color: #2196F3;
        }

        table.table td a.edit {
            color: #FFC107;
        }

        table.table td a.delete {
            color: #F44336;
        }

        table.table td i {
            font-size: 19px;
        }

        table.table .avatar {
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
        }

        .pagination {
            float: right;
            margin: 0 0 5px;
        }

        .pagination li a {
            border: none;
            font-size: 13px;
            min-width: 30px;
            min-height: 30px;
            color: #999;
            margin: 0 2px;
            line-height: 30px;
            border-radius: 2px !important;
            text-align: center;
            padding: 0 6px;
        }

        .pagination li a:hover {
            color: #666;
        }

        .pagination li.active a,
        .pagination li.active a.page-link {
            background: #03A9F4;
        }

        .pagination li.active a:hover {
            background: #0397d6;
        }

        .pagination li.disabled i {
            color: #ccc;
        }

        .pagination li i {
            font-size: 16px;
            padding-top: 6px
        }

        .hint-text {
            float: left;
            margin-top: 10px;
            font-size: 13px;
        }

        /* Custom checkbox */
        .custom-checkbox {
            position: relative;
        }

        .custom-checkbox input[type="checkbox"] {
            opacity: 0;
            position: absolute;
            margin: 5px 0 0 3px;
            z-index: 9;
        }

        .custom-checkbox label:before {
            width: 18px;
            height: 18px;
        }

        .custom-checkbox label:before {
            content: '';
            margin-right: 10px;
            display: inline-block;
            vertical-align: text-top;
            background: white;
            border: 1px solid #bbb;
            border-radius: 2px;
            box-sizing: border-box;
            z-index: 2;
        }

        .custom-checkbox input[type="checkbox"]:checked+label:after {
            content: '';
            position: absolute;
            left: 6px;
            top: 3px;
            width: 6px;
            height: 11px;
            border: solid #000;
            border-width: 0 3px 3px 0;
            transform: inherit;
            z-index: 3;
            transform: rotateZ(45deg);
        }

        .custom-checkbox input[type="checkbox"]:checked+label:before {
            border-color: #03A9F4;
            background: #03A9F4;
        }

        .custom-checkbox input[type="checkbox"]:checked+label:after {
            border-color: #fff;
        }

        .custom-checkbox input[type="checkbox"]:disabled+label:before {
            color: #b8b8b8;
            cursor: auto;
            box-shadow: none;
            background: #ddd;
        }

        /* Modal styles */
        .modal .modal-dialog {
            max-width: 400px;
        }

        .modal .modal-header,
        .modal .modal-body,
        .modal .modal-footer {
            padding: 20px 30px;
        }

        .modal .modal-content {
            border-radius: 3px;
        }

        .modal .modal-footer {
            background: #ecf0f1;
            border-radius: 0 0 3px 3px;
        }

        .modal .modal-title {
            display: inline-block;
        }

        .modal .form-control {
            border-radius: 2px;
            box-shadow: none;
            border-color: #dddddd;
        }

        .modal textarea.form-control {
            resize: vertical;
        }

        .modal .btn {
            border-radius: 2px;
            min-width: 100px;
        }

        .modal form label {
            font-weight: normal;
        }
    </style>
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
    <section id="safety">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabset">
                        <!--Tabs-->
                        <input type="radio" name="tabset" id="tab1" aria-controls="live-feed" checked>
                        <label for="tab1">Live-Feed</label>
                        <input type="radio" name="tabset" id="tab2" aria-controls="gradovi">
                        <label for="tab2">Gradovi</label>
                        <input type="radio" name="tabset" id="tab3" aria-controls="ukupanBroj">
                        <label for="tab3">Ukupan Broj</label>
                        <input type="radio" name="tabset" id="tab4" aria-controls="vijesti  ">
                        <label for="tab4">Vijesti</label>
                        <!--/Tabs-->

                        <div class="tab-panels">
                            <!--Video Tab-->
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
                                                                echo $vriheme;?>" required>
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
                        </div>

    <section id="gradovi" class="tab-panel">
        <div class="row">

        </div>
    </section>

    <section id="ukupanBroj" class="tab-panel">
        <div class="row">

        </div>
    </section>

    <section id="vijesti" class="tab-panel">
        <div class="row">

        </div>
    </section>
    <!--/Dodatne Inf Tab-->
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
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