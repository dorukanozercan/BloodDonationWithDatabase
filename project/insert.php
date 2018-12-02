<?php

$host='localhost';
$user='root';
$pass='';
$db='mydb';

$con=mysqli_connect($host,$user,$pass,$db);

if($con){
	echo 'connected succesfully to database';
}

	$name =  $_POST['name'];
	$surname = $_POST['surname'];
	$age = $_POST['age'];
	$gender = $_POST['gender'];
	$bloodtype = $_POST['bloodtype'];
	$disease = $_POST['disease'];

	$sql="INSERT INTO mytable1 (name, surname, age, gender, bloodtype, disease) VALUES ('$_POST[name]','$_POST[surname]','$_POST[age]','$_POST[gender]','$_POST[bloodtype]','$_POST[disease]')";
	$query = mysqli_query($con, $sql);

	if($query){
	echo 'data inserted succesfully';
	}



?>