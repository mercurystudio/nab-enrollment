<?php
	if($_GET['s']=="1234"){
		$ssn=true;
	}else{
		$ssn=false;
	}
	$items=array(
		"s"=>$ssn
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>