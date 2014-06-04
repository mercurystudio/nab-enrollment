<?php
	if($_GET['a']=="corp"){
		$corp=true;
	}else{
		$corp=false;
	}
	$items=array(
		"a"=>$corp
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>