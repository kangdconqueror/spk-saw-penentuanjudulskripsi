<?php
include "includes/config.php";
session_start();
if(!isset($_SESSION['nama_lengkap'])){
	echo "<script>location.href='index.php'</script>";
}
$config = new Config();
$db = $config->getConnection();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Sistem Pendukung Keputusan Metode SAW</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dataTables.bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  
	<nav class="navbar navbar-inverse navbar-static-top">
	  <div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		  </button>
		  <a class="navbar-brand" style="color:rgba(255,255,255,1.00)">SPK - SAW</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		  <ul class="nav navbar-nav">
			<li><a href="index.php">Home</a></li>
			<li><a href="nilai.php">Nilai</a></li>
			<li><a href="kriteria.php">Kriteria</a></li>
			<li><a href="alternatif.php">Alternatif</a></li>
			<li><a href="rangking.php">Rangking</a></li>
			<li><a href="laporan.php">Laporan</a></li>
		  </ul>
		  <ul class="nav navbar-nav navbar-right">
			<li><a href="profil.php"><?php echo $_SESSION['nama_lengkap'] ?></a></li>
			<li class="dropdown">
			  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-cog"></span> <span class="caret"></span></a>
			  <ul class="dropdown-menu">
				<li><a href="profil.php">Profil</a></li>
				<li><a href="user.php">Manejer Pengguna</a></li>
				<li role="separator" class="divider"></li>
				<li><a href="logout.php">Logout</a></li>
			  </ul>
			</li>
		  </ul>
		</div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
  
<div id="container" class="container">
<?php
include_once 'includes/alternatif.inc.php';
$pro1 = new Alternatif($db);
$stmt1 = $pro1->readAll();
$stmt1x = $pro1->readAll();
$stmt1y = $pro1->readAll();
include_once 'includes/kriteria.inc.php';
$pro2 = new Kriteria($db);
$stmt2 = $pro2->readAll();
$stmt2x = $pro2->readAll();
$stmt2y = $pro2->readAll();
$stmt2yx = $pro2->readAll();
include_once 'includes/rangking.inc.php';
$pro = new Rangking($db);
$stmt = $pro->readKhusus();
$stmtx = $pro->readKhusus();
$stmty = $pro->readKhusus();
?>
	<br/>
	<div>
	
	  <!-- Nav tabs -->
	  <ul class="nav nav-tabs" role="tablist">
	    <li role="presentation" class="active"><a href="#rangking" aria-controls="rangking" role="tab" data-toggle="tab">Laporan Perangkingan</a></li>
	    <!--<li role="presentation" style="cursor: pointer;"><a id="cetak" role="tab">Cetak Laporan 1 (PrintMe)</a></li>-->
	    <li role="presentation"><a href="javascript:printDiv('print-area-1');">Cetak Laporan</a></li>
	    <!--<li role="presentation" style="cursor: pointer;"><a onClick ="$('#container').tableExport({type:'png',escape:'false'});" role="tab">Cetak Laporan 3 (tableExport)</a></li>-->
	  </ul>

	  <!-- Tab panes -->
	  <div class="tab-content" id="print-area-1">
	    <div role="tabpanel" class="tab-pane active" id="rangking">
		<p  align="center"><img src="images/kop.jpg" width="350px"></p>
		<!-- <br><h3>Laporan Mahasiswa Semester <?php //echo $_SESSION['semester'];?></h3>-->
	    	<h4>Nilai Alternatif Kriteria</h4>
			<table width="100%" class="table table-striped table-bordered" border="1px">
		        <thead border="1px">
		            <tr border="1px">
		                <th rowspan="2" style="vertical-align: middle" class="text-center"><p align="center">Alternatif</p></th>
		                <th colspan="<?php echo $stmt2x->rowCount(); ?>" class="text-center"><p align="center">Kriteria</p></th>
		            </tr>
		            <tr>
		            <?php
					while ($row2x = $stmt2x->fetch(PDO::FETCH_ASSOC)){
					?>
		                <th><p align="center"><?php echo $row2x['nama_kriteria'] ?><br/>(<?php echo $row2x['tipe_kriteria'] ?>)</p></th>
		            <?php
					}
					?>
		            </tr>
		        </thead>
		
		        <tbody border="1px">
		<?php
		while ($row1x = $stmt1x->fetch(PDO::FETCH_ASSOC)){
		?>
		            <tr border="1px">
		                <th><?php echo $row1x['nama_alternatif'] ?></th>
		                <?php
		                $ax= $row1x['id_alternatif'];
						$stmtrx = $pro->readR($ax);
						while ($rowrx = $stmtrx->fetch(PDO::FETCH_ASSOC)){
						?>
		                <td>
		                	<?php 
		                	echo $rowrx['nilai_rangking'];
		                	?>
		                </td>
		                <?php
		                }
						?>
		            </tr>
		<?php
		}
		?>
		        </tbody>
		
		    </table>
	    	<h4>Normalisasi R</h4>
			<table width="100%" class="table table-striped table-bordered" border="1px">
		        <thead>
		            <tr border="1px" >
		                <th rowspan="2" style="vertical-align: middle" class="text-center"><p align="center">Alternatif</p></th>
		                <th colspan="<?php echo $stmt2y->rowCount(); ?>" class="text-center"><p align="center">Kriteria</p></th>
		            </tr>
		            <tr border="1px">
		            <?php
					while ($row2y = $stmt2y->fetch(PDO::FETCH_ASSOC)){
					?>
		                <th><p align="center"><?php echo $row2y['nama_kriteria'] ?></p></th>
		            <?php
					}
					?>
		            </tr>
		        </thead>
		
		        <tbody>
		<?php
		while ($row1y = $stmt1y->fetch(PDO::FETCH_ASSOC)){
		?>
		            <tr border="1px"> 
		                <th><?php echo $row1y['nama_alternatif'] ?></th>
		                <?php
		                $ay= $row1y['id_alternatif'];
						$stmtry = $pro->readR($ay);
						while ($rowry = $stmtry->fetch(PDO::FETCH_ASSOC)){
						?>
		                <td>
		                	<?php 
		                	echo $rowry['nilai_normalisasi'];
		                	?>
		                </td>
		                <?php
		                }
						?>
		            </tr>
		<?php
		}
		?><tr border="1px">
			<td><b>Bobot</b></td>
		            <?php
					while ($row2yx = $stmt2yx->fetch(PDO::FETCH_ASSOC)){
					?>
		                <td><b><?php echo $row2yx['bobot_kriteria'] ?></b></td>
		            <?php
					}
					?>
		            </tr>
		        </tbody>
		
		    </table>
		    <h4>Hasil Akhir</h4>
			<table width="100%" id="table-akhir" class="table table-striped table-bordered" border="1px">
		        <thead>
		            <tr border="1px">
		                <th rowspan="2" style="vertical-align: middle" class="text-center"><p align="center">Alternatif</p></th>
		                <th colspan="<?php echo $stmt2->rowCount(); ?>" class="text-center"><p align="center">Kriteria</p></th>
		                <th rowspan="2" style="vertical-align: middle" class="text-center"><p align="center">Hasil</p></th>
		            </tr>
		            <tr border="1px">
		            <?php
					while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)){
					?>
		                <th><p align="center"><?php echo $row2['nama_kriteria'] ?></p></th>
		            <?php
					}
					?>
		            </tr>
		        </thead>
		
		        <tbody>
		<?php
		while ($row1 = $stmt1->fetch(PDO::FETCH_ASSOC)){
		?>
		            <tr border="1px">
		                <th><?php echo $row1['nama_alternatif'] ?></th>
		                <?php
		                $a= $row1['id_alternatif'];
						$stmtr = $pro->readR($a);
						while ($rowr = $stmtr->fetch(PDO::FETCH_ASSOC)){
						?>
		                <td>
		                	<?php 
		                	echo $rowr['bobot_normalisasi'];
		                	?>
		                </td>
		                <?php
		                }
						?>
						<td>
							<?php 
							echo $row1['hasil_alternatif'];
							?>
						</td>
		            </tr>
		<?php
		}
		?>
		        </tbody>
		
		    </table>
		    <br>
			<p align="center">Mengetahui Kaprodi,</p>
			<br>
			<p align="center">Ahmad Zamsuri, M.Kom</p>
	    </div>
	  </div>
	  <textarea id="printing-css" style="display:none;">applet,object,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:11px;vertical-align:baseline;border:1px solid black;}
	  th{text-align: left;}
	  td{text-align: center;}
	  h1,h2,h3,h4,h5,h6,p,{font-size:11px;}
	  
	  </textarea>
<iframe id="printing-frame" name="print_frame" src="about:blank" style="display:none;"></iframe>
	
	</div>
<footer class="text-center">&copy; <?php echo date ('Y') ?> Sistem Pendukung Keputusan Untuk Menentukan Judul Skripsi Menggunakan Metode Simple Additive Weighting Berbasis Web</footer>
	</div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery-1.11.3.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-printme.js"></script>
    <script>
    	$('#cetak').click(function() {

    		$("#rangking").printMe({ "path": "css/bootstrap.min.css", "title": "LAPORAN HASIL AKHIR" }); 

		});
    </script>
    <script type="text/javascript" src="js/tableExport.js"></script>
	<script type="text/javascript" src="js/jquery.base64.js"></script>
	<script type="text/javascript" src="js/html2canvas.js"></script>
	<script type="text/javascript" src="js/jspdf/libs/sprintf.js"></script>
	<script type="text/javascript" src="js/jspdf/jspdf.js"></script>
	<script type="text/javascript" src="js/jspdf/libs/base64.js"></script>
<script>
	function printDiv(elementId) {
    var a = document.getElementById('printing-css').value;
    var b = document.getElementById(elementId).innerHTML;
    window.frames["print_frame"].document.title = document.title;
    window.frames["print_frame"].document.body.innerHTML = '<style>' + a + '</style>' + b;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
}
</script>
  </body>
</html>