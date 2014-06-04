<?php
	$addr1="1234 Smith Lane";
	$addr2="";
	$city="Royal Oak";
	$state="MI";
	$zip="48067";
	$items=array(
		"a1"=>$addr1,
		"a2"=>$addr2,
		"c"=>$city,
		"s"=>$state,
		"z"=>$zip,
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>