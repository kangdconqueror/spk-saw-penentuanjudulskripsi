<?php
class User{
	
	private $conn;
	private $table_name = "pengguna";
	
	public $id;
	public $nl;
	public $nim;
	public $level;
	public $un;
	public $pw;
	public $semester;
	
	public function __construct($db){
		$this->conn = $db;
	}
	
	function insert(){
		
		$query = "insert into ".$this->table_name." values('',?,?,?,?,?,?)";
		$stmt = $this->conn->prepare($query);
		$stmt->bindParam(1, $this->nl);
		$stmt->bindParam(2, $this->un);
		$stmt->bindParam(3, $this->pw);
		$stmt->bindParam(4, $this->level);
		$stmt->bindParam(5, $this->nim);
		$stmt->bindParam(6, $this->semester);
		
		if($stmt->execute()){
			return true;
		}else{
			return false;
		}
		
	}
	
	function readAll(){

		$query = "SELECT * FROM ".$this->table_name." ORDER BY id_pengguna ASC";
		$stmt = $this->conn->prepare( $query );
		$stmt->execute();
		
		return $stmt;
	}
	
	// used when filling up the update product form
	function readOne(){
		
		$query = "SELECT * FROM " . $this->table_name . " WHERE id_pengguna=? LIMIT 0,1";

		$stmt = $this->conn->prepare( $query );
		$stmt->bindParam(1, $this->id);
		$stmt->execute();

		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		
		$this->id = $row['id_pengguna'];
		$this->nl = $row['nama_lengkap'];
		$this->un = $row['username'];
		$this->pw = $row['password'];
		$this->level = $row['level'];
		$this->nim = $row['nim'];
		$this->semester = $row['semester'];
	}
	
	// update the product
	function update(){

		$query = "UPDATE 
					" . $this->table_name . " 
				SET 
					nama_lengkap = :nl, 
					username = :un, 
					level = :level, 
					nim = :nim,
					semester = :semester
				WHERE
					id_pengguna = :id";

		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(':nl', $this->nl);
		$stmt->bindParam(':un', $this->un);
		$stmt->bindParam(':id', $this->id);
		$stmt->bindParam(':level', $this->level);
		$stmt->bindParam(':nim', $this->nim);
		$stmt->bindParam(':semester', $this->semester);
		
		// execute the query
		if($stmt->execute()){
			return true;
		}else{
			return false;
		}
	}
	
	// delete the product
	function delete(){
	
		$query = "DELETE FROM " . $this->table_name . " WHERE id_pengguna = ?";
		
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
