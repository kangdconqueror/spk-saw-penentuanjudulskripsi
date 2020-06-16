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

	
	  <!-- Tab panes -->
	  <div class="tab-content">
	    <div role="tabpanel" class="tab-pane active" id="rangking">
	    	<br/>
	    	<h4>Nilai Alternatif Kriteria</h4>
			<table width="100%" class="table table-striped table-bordered">
		        <thead>
		            <tr>
		                <th rowspan="2" style="vertical-align: middle" class="text-center">Alternatif</th>
		                <th colspan="<?php echo $stmt2x->rowCount(); ?>" class="text-center">Kriteria</th>
		            </tr>
		            <tr>
		            <?php
					while ($row2x = $stmt2x->fetch(PDO::FETCH_ASSOC)){
					?>
		                <th><?php echo $row2x['nama_kriteria'] ?><br/>(<?php echo $row2x['tipe_kriteria'] ?>)</th>
		            <?php
					}
					?>
		            </tr>
		        </thead>
		
		        <tbody>
		<?php
		while ($row1x = $stmt1x->fetch(PDO::FETCH_ASSOC)){
		?>
		            <tr>
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
			<table width="100%" class="table table-striped table-bordered">
		        <thead>
		            <tr>
		                <th rowspan="2" style="vertical-align: middle" class="text-center">Alternatif</th>
		                <th colspan="<?php echo $stmt2y->rowCount(); ?>" class="text-center">Kriteria</th>
		            </tr>
		            <tr>
		            <?php
					while ($row2y = $stmt2y->fetch(PDO::FETCH_ASSOC)){
					?>
		                <th><?php echo $row2y['nama_kriteria'] ?></th>
		            <?php
					}
					?>
		            </tr>
		        </thead>
		
		        <tbody>
		<?php
		while ($row1y = $stmt1y->fetch(PDO::FETCH_ASSOC)){
		?>
		            <tr>
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
		?><tr>
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
			<table width="100%" id="table-akhir" class="table table-striped table-bordered">
		        <thead>
		            <tr>
		                <th rowspan="2" style="vertical-align: middle" class="text-center">Alternatif</th>
		                <th colspan="<?php echo $stmt2->rowCount(); ?>" class="text-center">Kriteria</th>
		                <th rowspan="2" style="vertical-align: middle" class="text-center">Hasil</th>
		            </tr>
		            <tr>
		            <?php
					while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)){
					?>
		                <th><?php echo $row2['nama_kriteria'] ?></th>
		            <?php
					}
					?>
		            </tr>
		        </thead>
		
		        <tbody>
		<?php
		while ($row1 = $stmt1->fetch(PDO::FETCH_ASSOC)){
		?>
		            <tr>
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
		    	
	    </div>
	  </div>
	
	</div>

  </body>
</html>