<?php

$name = (isset($_POST['nameKey'])) ?_POST['nameKey'] : 'No Name';
$data = (isset($_POST['myData'])) ?_POST['myData'] : 'No Data';
$array = ['name' => $name, 'data'  => $data, 'response' => 'Success'];

echo json_encode($array);

?>
