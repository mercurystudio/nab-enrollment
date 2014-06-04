<?php
	if(rawurldecode($_GET['e'])=="test@test.com"){
		$email=true;
	}else{
		$email=false;
	}
	$items=array(
		"e"=>$email
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>