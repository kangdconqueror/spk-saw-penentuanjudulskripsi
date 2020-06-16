<?php
include_once 'header.php';
$id = isset($_GET['id']) ? $_GET['id'] : die('ERROR: missing ID.');

include_once 'includes/user.inc.php';
$eks = new User($db);

$eks->id = $id;

$eks->readOne();

if($_POST){

    $eks->nim = $_POST['nim'];
    $eks->level = $_POST['level'];
    $eks->nl = $_POST['nl'];
    $eks->un = $_POST['un'];
    $eks->semester = $_POST['semester'];
    //$eks->pw = md5($_POST['pw']);
    
    if($eks->update()){
        echo "<script>location.href='user.php'</script>";
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
              <h5>Ubah Pengguna</h5>
            </div>
            
                <form method="post">
					<div class="form-group">
                    <label for="nim">NIM</label>
                    <input type="text" class="form-control" id="nim" name="nim" value="<?php echo $eks->nim; ?>">
                  </div>
                  <div class="form-group">
                    <label for="nl">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nl" name="nl" value="<?php echo $eks->nl; ?>">
                  </div>
                  <div class="form-group">
                    <label for="un">Username</label>
                    <input type="text" class="form-control" id="un" name="un" value="<?php echo $eks->un; ?>">
                  </div>
				   <div class="form-group">
                    <label for="un">Level</label>
					<select class="form-control" id="level" name="level" required>
						
						<option value="<?php echo $eks->level; ?>"><?php echo $eks->level; ?></option>
						<?php if($eks->level=='mahasiswa'){?>
						<option value="admin">admin</option>
						<?php }else{?>
						<option value="mahasiswa">mahasiswa</option>
						<?php }?>
					</select>
                    
                  </div>
				   <div class="form-group">
                    <label for="semester">Semester</label>
					<select class="form-control" id="semester" name="semester" required>		
						<option value="<?php echo $eks->semester; ?>"><?php echo $eks->semester; ?></option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
                    
                  </div>
                  <div class="form-group">
                    <label for="pw"></label>
                    <input type="hidden" class="form-control" id="pw" name="pw" value="<?php echo $eks->pw; ?>">
                  </div>
                  <button type="submit" class="btn btn-primary">Ubah</button>
                  <button type="button" onclick="location.href='user.php'" class="btn btn-success">Kembali</button>
                </form>
              
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <?php include_once 'sidebar.php'; ?>
          </div>
        </div>
        <?php
include_once 'footer.php';
?>