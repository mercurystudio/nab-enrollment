<?php
	if($_GET['p']=="Mobile"){
		$black=rand(-1,5);
		$white=rand(-1,5);
	}else if($_GET['p']=="Storefront"){
		$black=rand(-1,5);
		$white=rand(-1,5);
	}
	$items=array(
		"b"=>$black,
		"w"=>$white
	);

	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>