<?php
	$q1="Which street have you lived on?";
	$q1_options="Street 1|Street 2|Street 3|Street 4|Street 5";
	$q2="Which of the following people do you know?";
	$q2_options="People 1|People 2|People 3|People 4|People 5";
	$q3="What model year is your Buick?";
	$q3_options="Car 1|Car 2|Car 3|Car 4|Car 5";
	$items=array(
		"q1"=>$q1,
		"q1_options"=>$q1_options,
		"q2"=>$q2,
		"q2_options"=>$q2_options,
		"q3"=>$q3,
		"q3_options"=>$q3_options,
	);
	$ajaxVars=json_encode($items);
	echo $ajaxVars;
?>