<?php
session_start();
if($_SESSION['nama_admin'] == '' ){
	echo "<script>window.alert('Untuk mengakses, Anda harus Login terlebih dahulu !');
        window.location=('index.php')</script>";
}
?>