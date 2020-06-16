<?php
class Alternatif{
	
	private $conn;
	private $table_name = "alternatif";
	
	public $id;
	public $kt;
	public $nilai;
	public $nim;
	
	public function __construct($db){
		$this->conn = $db;
	}
	
	function insert(){
		
		$jabbar = "SELECT COUNT(*) FROM ".$this->table_name." WHERE nim='$_SESSION[nim]'";
		$res = $this->conn->query($jabbar);
		
		if($res->fetchColumn() < 4){
			$query = "insert into ".$this->table_name." values('',?,?,?)";
			$stmt = $this->conn->prepare($query);
			$stmt->bindParam(1, $this->kt);
			$stmt->bindParam(2, $this->nilai);
			$stmt->bindParam(3, $this->nim);
			
			if($stmt->execute()){
				return true;
			}else{
				return false;
			}
		}else{
				return false;
		}
	}
	
	function readAll(){
		if($_SESSION['level']=='admin'){
		$query = "SELECT * FROM ".$this->table_name." ORDER BY id_alternatif ASC";
		}else{
		$query = "SELECT * FROM ".$this->table_name." where nim='$_SESSION[nim]' ORDER BY id_alternatif ASC";
		}
		$stmt = $this->conn->prepare($query);
		$stmt->execute();
		
		return $stmt;
	}
	
	// used when filling up the update product form
	function readOne(){
		
		$query = "SELECT * FROM " . $this->table_name . " WHERE id_alternatif=? LIMIT 0,1";

		$stmt = $this->conn->prepare( $query );
		$stmt->bindParam(1, $this->id);
		$stmt->execute();

		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		
		$this->id = $row['id_alternatif'];
		$this->kt = $row['nama_alternatif'];
		$this->nim = $row['nim'];
	}
	
	// update the product
	function update(){

		$query = "UPDATE 
					" . $this->table_name . " 
				SET 
					nama_alternatif = :kt
				WHERE
					id_alternatif = :id";

		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(':kt', $this->kt);
		$stmt->bindParam(':id', $this->id);
		
		// execute the query
		if($stmt->execute()){
			return true;
		}else{
			return false;
		}
	}
	
	// delete the product
	function delete(){
	
		$query = "DELETE FROM " . $this->table_name . " WHERE id_alternatif = ?";
		
		$stmt = $this->conn->prepare($query);
		$stmt->bindParam(1, $this->id);

		if($result = $stmt->execute()){
			return true;
		}else{
			return false;
		}
	}
}
?>