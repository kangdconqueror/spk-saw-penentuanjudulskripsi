<?php
class Config{
	
	private $host = "localhost";
	private $db_name = "mule7148_penentuanjudulskripsi";
	private $username = "mule7148_penentuanjudulskripsi";
	private $password = "penentuanjudulskripsi";
	public $conn;
	
	public function getConnection(){
	
		$this->conn = null;
		
		try{
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
		}catch(PDOException $exception){
			echo "Connection error: " . $exception->getMessage();
		}
		
		return $this->conn;
	}
}
?>
