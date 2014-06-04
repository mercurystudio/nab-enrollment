function getCityState(zip){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getCityState.php',
		data:'z='+zip,
		success:function(data){
			$('#city').val(data['c']);
			$('#state').val(data['s']);
			$('.validZip').fadeIn();
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}
function getBusinessAddress(){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getBusinessAddress.php',
		data:'',
		success:function(data){
			$('#addr1').val(data['a1']);
			$('#addr2').val(data['a2']);
			$('#city').val(data['c']);
			$('#state').val(data['s']);
			$('#zipcode').val(data['z']);
			$('.validZip').fadeIn();
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}
function getHomeAddress(){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getHomeAddress.php',
		data:'',
		success:function(data){
			$('#addr1').val(data['a1']);
			$('#addr2').val(data['a2']);
			$('#city').val(data['c']);
			$('#state').val(data['s']);
			$('#zipcode').val(data['z']);
			$('.validZip').fadeIn();
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}
function isInt(evt){
	var charCode=(evt.which) ? evt.which : event.keyCode;
	return (charCode>=48&&charCode<=57);
}
function step3(eventClick){
	var name=$('#name').val();
	var ccNum=$('#ccNum').val();
	var expMonth=$('#expMonth').val();
	var expYear=$('#expYear').val();
	var cvv=$('#cvv').val();
	var addr1=$('#addr1').val();
	var addr2=$('#addr2').val();
	var city=$('#city').val();
	var state=$('#state').val();
	var zipcode=$('#zipcode').val();
	if(zipcode.length>=5&&city==""){
		getCityState(zipcode);
	}
	if(eventClick==true){
		if(name!=""&&ccNum!=""&&expMonth!=""&&expYear!=""&&cvv!=""&&addr1!=""&&addr2!=""&&city!=""&&state!=""&&zipcode!=""){
			done("form");
		}
	}
}
$('.step3').bind('input',function(e){
	step3(false);
}).blur(function(e){
	step3(false);
}).change(function(e){
	step3(false);
}).click(function(e){
	step3(false);
}).focus(function(e){
	step3(false);
});
$('#sameBizAdd').click(function(){
	getBusinessAddress();
});
$('#sameHomeAdd').click(function(){
	getHomeAddress();
});
$('#equipmentPrinterRent').click(function(){
	if($('.paymentInfo').css("display")!="none"){
		$('.paymentInfo').fadeOut();
	}
});
$('#equipmentDrawerRent').click(function(){
	if($('.paymentInfo').css("display")!="none"){
		$('.paymentInfo').fadeOut();
	}
});
$('#equipmentPrinterPurchase').click(function(){
	$('.paymentInfo').fadeIn();	
});
$('#equipmentDrawerPurchase').click(function(){
	$('.paymentInfo').fadeIn();
});
$(document).ready(function(){
	$('.equip-printer').click(function() {
		if($('.equip-printer').css("opacity")!=1){
			$('.equip-printer .optionCheck').css("background-image","url('../images/optionCircle-active.png')");
			$('.equip-drawer .optionCheck').css("background-image","url('../images/optionCircle.png')");
			$('.printerOptions').slideToggle("slow");
			$('.drawerOptions').slideUp("slow");
			$('.equip-printer').css("opacity",1);
			$('.equip-drawer').css("opacity",.33);
		}
	});
	$('.equip-drawer').click(function() {
		if($('.equip-drawer').css("opacity")!=1){
			$('.equip-drawer .optionCheck').css("background-image","url('../images/optionCircle-active.png')");
			$('.equip-printer .optionCheck').css("background-image","url('../images/optionCircle.png')");
			$('.drawerOptions').slideToggle("slow");
			$('.printerOptions').slideUp("slow");
			$('.equip-drawer').css("opacity",1);
			$('.equip-printer').css("opacity",.33);
		}
	});
/*	$('#applyStep1').bootstrapValidator({
		fields:{
			fName:{
				validators:{
					notEmpty:{
						message:'First Name is Required'
					}
				}
			},
			lName:{
				validators:{
					notEmpty:{
						message:'Last Name is Required'
					}
				}
			},
			email:{
				validators:{
					notEmpty:{
						message:'Email Address is Required'
					},
					emailAddress:{
						message: 'Not a valid Email Address'
					}
				}
			},
		},
		submitHandler:function(validator,form,submitButton){
			step1();
		}
	});*/
});