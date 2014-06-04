<?php
	if($_GET['z']=="48067"){
		$city="Royal Oak";
		$state="MI";
	}else{
		$city="Detroit";
		$state="MI";
	}
	$items=array(
		"c"=>$city,
		"s"=>$state
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>