
 <?php
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "e_comm";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT prod_id from product_info";
$result = $conn->query($sql);
echo "Size:".$result->num_rows;

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
	$pid=$row["prod_id"];
    for($i=0;$i<4;$i++){
		$r="coin".rand(1,7).".jpg";
		$sql="INSERT into prod_images values($pid,$i,\"$r\")";
		if ($conn->query($sql) === TRUE) {
	  echo "Record updated successfully\n";
	} else {
	  echo "Error updating record: " . $conn->error."\n";
	}
	 
  }
  }
} else {
  echo "0 results";
}
$conn->close();
?> 


