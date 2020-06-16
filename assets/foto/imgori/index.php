<?php
	session_start();
		if (empty($_SESSION['username']) AND
			empty($_SESSION['password'])){
		 	header('location:login.php');
			}
			else{
				if ($_SESSION['level']=='admin'){
					include 'view/head.php';
					include 'view/container.php';
					include 'view/footer.php';
				}else{
				if ($_SESSION['level']=='user'){
					include 'view/head.php';
				    include 'view/container_user.php';
				    include 'view/footer.php';
				}else { echo "Anda bukan Administraor"; }
			}
		}
?>