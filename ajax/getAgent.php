<?php
	if($_GET['a']=="1234"){
		$agent=true;
	}else{
		$agent=false;
	}
	$items=array(
		"a"=>$agent
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>