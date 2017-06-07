<?php

$name = (isset($_POST['nameKey'])) ? $_POST['nameKey'] : 'No Name';
$data = (isset($_POST['myData'])) ? $_POST['myData'] : 'No Data';
$array = ['data' => $data, 'name' => $name, 'response' => 'Success'];

echo json_encode($array);

?>
