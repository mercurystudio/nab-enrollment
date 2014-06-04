<?php
	if($_GET['p']=="mobile"){
		$showProductType="mobile";
		$hideProductType1="storefront";
		$hideProductType2="noReader";
	}else if($_GET['p']=="storefront"){
		$showProductType="storefront";
		$hideProductType1="mobile";
		$hideProductType2="noReader";
	}else if($_GET['p']=="noReader"){
		$showProductType="noReader";
		$hideProductType1="mobile";
		$hideProductType2="storefront";
	}
	
	$items=array(
		"pS"=>$showProductType,
		"pH1"=>$hideProductType1,
		"pH2"=>$hideProductType2
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>