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
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->

<!-- Mirrored from seantheme.com/color-admin-v1.9/admin/html/login_v3.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 06 Nov 2015 11:56:35 GMT -->
<head>
	<meta charset="utf-8" />
	<title>SPK Penent</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link rel="shortcut icon" href="assets/img/favicon.ico">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link href="assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/animate.min.css" rel="stylesheet" />
    <link href="assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="assets/css/style_nyunyu.min.css" rel="stylesheet" />
    <link href="assets/css/style-responsive_nyunyu.min.css" rel="stylesheet" />
    <link href="assets/css/theme/default_nyunyu.css" rel="stylesheet" id="theme" />
    <link href="assets/plugins/ionicons/css/ionicons.min.css" rel="stylesheet" />
    <script src="assets/plugins/pace/pace.min.js"></script>
    <script src="assets/plugins/jquery/jquery-1.9.1.min.js"></script>
    <script src="assets/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
    <script src="assets/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script type="text/javascript" src="assets/js/notifIt.js"></script>
    <script type="text/javascript" src="assets/js/jquery.blockUI.js"></script>
    <script src="assets/js/apps.min.js"></script>
    <script>
        $(document).ready(function() {
            App.init();
        });
    </script>
	<!-- ================== END BASE JS ================== -->
</head>
<body class="pace-top bg-white">
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	
	<!-- begin #page-container -->
	<div id="page-container" class="fade">
	    <!-- begin login -->
        <div class="login login-with-news-feed">

            <!-- end news-feed -->
            <!-- begin right-content -->
            <div class="">
                <!-- end login-header -->
                <!-- begin login-content -->
                <div class="login-content"  style="width:40%">
				<h1> Login </h1>
                    <form method="POST" class="margin-bottom-0">
                        <div class="form-group m-b-15">
                            <input type="text" class="form-control input-lg" name="username" id="InputUsername1" placeholder="Username" />
                        </div>
                        <div class="form-group m-b-15">
                            <input type="password" class="form-control input-lg" name="password" id="InputPassword1" placeholder="Password" />
                        </div>
                        <div class="login-buttons">
                            <button type="submit" name="simpan" class="btn btn-success btn-block btn-lg">Sign</button>
                        </div>
                        <hr />
                        <p class="text-center text-inverse">
                            &copy; <?php echo date ('Y') ?> Sistem Pendukung Keputusan Untuk Menentukan Judul Skripsi Menggunakan Metode Simple Additive Weighting Berbasis Web
                        </p>
                    </form>
                </div>
                <!-- end login-content -->
            </div>
            <!-- end right-container -->
        </div>
        <!-- end login -->
        
        <!-- begin theme-panel -->
        
        <!-- end theme-panel -->
	</div>
	<!-- end page container -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="assets/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="assets/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="assets/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="assets/crossbrowserjs/html5shiv.js"></script>
		<script src="assets/crossbrowserjs/respond.min.js"></script>
		<script src="assets/crossbrowserjs/excanvas.min.js"></script>
	<![endif]-->
	<script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="assets/plugins/jquery-cookie/jquery.cookie.js"></script>
	<!-- ================== END BASE JS ================== -->
	
	<!-- ================== BEGIN PAGE LEVEL JS ================== -->
	<script src="assets/js/apps.min.js"></script>
	<!-- ================== END PAGE LEVEL JS ================== -->

	<script>
		$(document).ready(function() {
			App.init();
		});
	</script>
	<script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-53034621-1', 'auto');
      ga('send', 'pageview');
    </script>
</body>

<!-- Mirrored from seantheme.com/color-admin-v1.9/admin/html/login_v3.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 06 Nov 2015 11:56:36 GMT -->
</html>

