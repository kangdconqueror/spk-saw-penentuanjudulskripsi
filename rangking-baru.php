<?php
include_once 'header.php';
include_once 'includes/alternatif.inc.php';
$pgn1 = new Alternatif($db);
include_once 'includes/kriteria.inc.php';
$pgn2 = new Kriteria($db);
include_once 'includes/nilai.inc.php';
$pgn3 = new Nilai($db);
if($_POST){
	
	include_once 'includes/rangking.inc.php';
	$eks = new rangking($db);

	$eks->ia = $_POST['ia'];
	$eks->ik = $_POST['ik'];
	$eks->nn = $_POST['nn'];
	
	if($eks->insert()){
?>
<div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Berhasil Tambah Data!</strong> Tambah lagi atau <a href="rangking.php">lihat semua data</a>.
</div>
<?php
	}
	
	else{
?>
<div class="alert alert-danger alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Gagal Tambah Data!</strong> Terjadi kesalahan, coba sekali lagi.
</div>
<?php
	}
}
?>
		<div class="row">
		  <div class="col-xs-12 col-sm-12 col-md-6">
		  	<div class="page-header">
			  <h5>Tambah Rangking</h5>
			</div>
			
			    <form method="post">
				  <div class="form-group">
				    <label for="ia">Alternatif</label>
				    <select class="form-control" id="ia" name="ia">
				    	<?php
						$stmt3 = $pgn1->readAll();
						while ($row3 = $stmt3->fetch(PDO::FETCH_ASSOC)){
							extract($row3);
							echo "<option value='{$id_alternatif}'>{$nama_alternatif}</option>";
						}
					    ?>
				    </select>
				  </div>
				  <div class="form-group">
				    <label for="ik">Kriteria</label>
				    <select class="form-control" id="ik" name="ik">
				    	<?php
						$stmt2 = $pgn2->readAll();
						while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)){
							extract($row2);
							echo "<option value='{$id_kriteria}'>{$nama_kriteria}</option>";
						}
					    ?>
				    </select>
				  </div>
				  <div class="form-group">
				    <label for="nn">Nilai</label>
				    <select class="form-control" id="nn" name="nn">
				    	<?php
						$stmt4 = $pgn3->readAll();
						while ($row4 = $stmt4->fetch(PDO::FETCH_ASSOC)){
							extract($row4);
							echo "<option value='{$jum_nilai}'>{$ket_nilai}</option>";
						}
					    ?>
				    </select>
				  </div>
				  <button type="submit" class="btn btn-primary">Simpan</button>
				  <button type="button" onclick="location.href='rangking.php'" class="btn btn-success">Kembali</button>
				</form>
			  
		  </div>
		  <div class="col-xs-12 col-sm-12 col-md-6">
		  	<div class="panel panel-default">
				<div class="panel-body" style="text-align:justify">
					<h5>Penjelasan Singkat</h5>
					<hr/>
					Penambahan Rangking dapat dilakukan dengan cara :
					<ol>
						<li> Pilih Alternatif Judul Skripsi </li>
						<li> Pilih Kriteria Penilaian Judul</li>
						<li> Pilih Penilaian untuk kriteria secara Subjektif</li>
					</ol>
					
					Sebagai contoh : <br>
					<table style="border: 0">
						<tr> <td style="vertical-align:top; width:130px;">Alternatif</td><td style="vertical-align:top">:</td> <td style="vertical-align:top">RANCANG BANGUN SISTEM INFORMASI PENGELOLAAN PANTI ASUHAN BERBASIS GEOGRAFIS</td></tr>
						<tr> <td>Tingkat Kesulitan</td><td>:</td> <td>Sulit</td></tr>
						<tr> <td>Jenis Skripsi</td><td>:</td><td>Sedang</td></tr>
						<tr> <td>Referensi</td><td>: </td><td>Sulit</td></tr>
						<tr> <td>Penggunaan Judul</td><td>: </td><td>Sedang</td></tr>
						<tr> <td>Bidang Kemampuan</td><td>: </td><td>Sangat Sulit</td></tr>
					</table><br>
					Informasi Nilai : <br>
					<table style="border: 0">
						<tr> <td>Sangat Sulit</td><td>:</td> <td>10</td></tr>
						<tr> <td>Sulit</td><td>:</td><td>9</td></tr>
						<tr> <td>Sedang</td><td>: </td><td>8</td></tr>
						<tr> <td>Mudah</td><td>: </td><td>7</td></tr>
						<tr> <td>Biasa</td><td>: </td><td>6</td></tr>
					</table><br>
					NB : Semakin Sulit tingkat kriteria dari judul maka akan semakin tinggi nilai hasil akhirnya.
					<br>
					Setelah disimpan, silahkan ulangi hal yang sama untuk alternatif judul lainnya.					<hr/>
				</div>
			</div>
		  </div>
		</div>
		<?php
include_once 'footer.php';
?>