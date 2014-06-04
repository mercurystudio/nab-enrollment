function done(type){
	console.log("done");
	console.log(1);
	if(type=="modal"){console.log(2);
		document.location.href="//payanywhere.com";console.log(3);
	}else if(type="form"){console.log(4);
		$('#step3Confirm').modal('show');console.log(5)
	//alert("stop");
	}console.log(6);
}
function editShipping(){
	console.log("editShipping");
	$('.editShipping').fadeIn();
}
function getCityState(zip){
	console.log("getCityState");
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
function getShippingAddress(){
	console.log("getShippingAddress");
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getShippingAddress.php',
		data:'',
		success:function(data){
			$('.firstLastName').html(data['f']+" "+data['l']);
			$('.address').html(data['a1']+" "+data['a2']);
			$('.cityStateZip').html(data['c']+", "+data['s']+" "+data['z']);
			$('#fName').val(data['f']);
			$('#lName').val(data['l']);
			$('#addr1').val(data['a1']);
			$('#addr2').val(data['a2']);
			$('#city').val(data['c']);
			$('#state').val(data['s']);
			$('#zipcode').val(data['z']);
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
	console.log("step3");
	var fName=$('#fName').val();
	var lName=$('#lName').val();
	var addr1=$('#addr1').val();
	var addr2=$('#addr2').val();
	var city=$('#city').val();
	var state=$('#state').val();
	var zipcode=$('#zipcode').val();
	if(zipcode.length>=5&&city==""){
		getCityState(zipcode);
	}
	if(eventClick==true){
		if($('.editShipping').css("display")=="none"){
			done("form");
		}else{
			if(fName!=""&&lName!=""&&addr1!=""&&addr2!=""&&city!=""&&state!=""&&zipcode!=""){
				done("form");
			}
		}
	}
}
/*$('.step3').bind('input',function(){
	step3(false);
}).blur(function(){
	step3(false);
}).change(function(){
	step3(false);
}).click(function(){
	step3(false);
}).focus(function(){
	step3(false);
});*/
$(document).ready(function(){
	getShippingAddress();
/*	$('#applyStep3').bootstrapValidator({
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
			step3(false);
		}
	});*/
});