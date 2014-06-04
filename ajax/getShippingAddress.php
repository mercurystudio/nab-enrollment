<?php
	$fName="Zachary";
	$lName="Ball";
	$addr1="112 S. Main St.";
	$addr2="Suite 200";
	$city="Royal Oak";
	$state="MI";
	$zip="48067";
	$items=array(
		"f"=>$fName,
		"l"=>$lName,
		"a1"=>$addr1,
		"a2"=>$addr2,
		"c"=>$city,
		"s"=>$state,
		"z"=>$zip,
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>