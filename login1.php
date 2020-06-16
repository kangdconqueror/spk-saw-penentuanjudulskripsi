<?php
include_once 'includes/config.php';

$config = new Config();
$db = $config->getConnection();
	
if($_POST){
	
	include_once 'includes/login.inc.php';
	$login = new Login($db);

	$login->userid = $_POST['username'];
	$login->passid = md5($_POST['password']);
	
	if($login->login()){
		echo "<script>location.href='index.php'</script>";
	}
	
	else{
		echo "<script>alert('Username/Password Salah!')</script>";
	}
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Sistem Pendukung Keputusan Penerima Raskin di Kelurahan Rumbai Bukit</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style type="text/css">
    body,td,th {
	font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
a:hover {
	color: #0A6EBD;
}
    </style>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body style="background: #f4f4f4 url(images/back4.png) left bottom fixed;">
  
	<nav class="navbar navbar-inverse navbar-static-top" style="height: 50px">
	  <div class="container">
      <div class="row">
		<!-- Brand and toggle get grouped for better mobile display -->
		
		  
		  <marquee><h4 style="color:rgba(255,255,255,1.00)">Sistem Pendukung Keputusan Penerima Raskin di Kelurahan Rumbai Bukit</h4></marquee>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		  <ul class="nav navbar-nav navbar-right">
			<li><a></a></li>
		  </ul>
		</div><!-- /.navbar-collapse -->
	  </div>
      </div><!-- /.container-fluid -->
	</nav>
  
    <div class="container">
		<div class="row">
		  <div class="col-xs-12 col-sm-8 col-md-8"><?php include ('slide.html');?></div>
		  <div class="col-xs-12 col-sm-4 col-md-4">
		  	<br>
            <br>
		  	<div style="margin-top: 120px;" class="panel panel-default"><div class="panel-body">
		  		<div class="text-center"><h4>Login Petugas Seleksi</h4></div>
		  		<form method="post">
				  <div class="form-group">
				    <!--<label for="InputUsername1">Username</label>-->
				    <input type="text" class="form-control" name="username"  id="InputUsername1" placeholder="Username">
				  </div>
				  <div class="form-group">
				    <!--<label for="InputPassword1">Password</label>-->
				    <input type="password" class="form-control" name="password" id="InputPassword1" placeholder="Password">
				  </div>
				  <button type="submit" class="btn btn-primary" >Login</button>
				</form>
		  	</div></div>
		  	
		  </div>
          
		</div>
	</div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery-1.11.3.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>