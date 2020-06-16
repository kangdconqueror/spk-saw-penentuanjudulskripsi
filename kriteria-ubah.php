<?php
include_once 'header.php';
include_once 'includes/nilai.inc.php';
$pgn = new Nilai($db);

$id = isset($_GET['id']) ? $_GET['id'] : die('ERROR: missing ID.');

include_once 'includes/kriteria.inc.php';
$eks = new Kriteria($db);

$eks->id = $id;

$eks->readOne();

if($_POST){

	$eks->kt = $_POST['kt'];
	$eks->tp = $_POST['tp'];
	$eks->jm = $_POST['jm'];
	
	if($eks->update()){
		echo "<script>location.href='kriteria.php'</script>";
	} else{
?>
<div class="alert alert-danger alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Gagal Ubah Data!</strong> Terjadi kesalahan, coba sekali lagi.
</div>
<?php
	}
}
?>
		<div class="row">
		  <div class="col-xs-12 col-sm-12 col-md-8">
		  	<div class="page-header">
			  <h5>Ubah Kriteria</h5>
			</div>
			
			    <form method="post">
				  <div class="form-group">
				    <label for="kt">Nama Kriteria</label>
				    <input type="text" class="form-control" id="kt" name="kt" value="<?php echo $eks->kt; ?>">
				  </div>
				  <div class="form-group">
				    <label for="tp">Tipe Kriteria</label>
				    <select class="form-control" id="tp" name="tp">
				    	<option><?php echo $eks->tp; ?></option>
				    	<option value='benefit'>Benefit</option>
				    	<option value='cost'>Cost</option>
				    </select>
				  </div>
				  <div class="form-group">
				    <label for="jm">Bobot Kriteria</label>
				    <input type="text" class="form-control" id="jm" name="jm" value="<?php echo $eks->jm; ?>">
				  </div>
				  <button type="submit" class="btn btn-primary">Ubah</button>
				  <button type="button" onclick="location.href='kriteria.php'" class="btn btn-success">Kembali</button>
				</form>
			  
		  </div>
		  <div class="col-xs-12 col-sm-12 col-md-4">
		  	<?php include_once 'sidebar.php'; ?>
		  </div>
		</div>
		<?php
include_once 'footer.php';
?>