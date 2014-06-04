function getCityState(zip){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getCityState.php',
		data:'z='+zip,
		success:function(data){
			$('#bizCity').val(data['c']);
			$('#bizState').val(data['s']);
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
			$('#bizAddr1').val(data['a1']);
			$('#bizAddr2').val(data['a2']);
			$('#bizCity').val(data['c']);
			$('#bizState').val(data['s']);
			$('#bizZip').val(data['z']);
			$('#bizAddr1').prop('disabled',true);
			$('#bizAddr2').prop('disabled',true);
			$('#bizCity').prop('disabled',true);
			$('#bizState').prop('disabled',true);
			$('#bizZip').prop('disabled',true);
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
function step2(eventClick){
	var monthlySales=$('#monthlySales').val();
	var legalBizName=$('#legalBizName').val();
	var avgTicket=$('#avgTicket').val();
	var fedTaxIdEin=$('#fedTaxIdEin').val();
	var sameAsHome=($('#sameAsHome').is(':checked'))?1:0;
	var bizAddr1=$('#bizAddr1').val();
	var bizAddr2=$('#bizAddr2').val();
	var bizCity=$('#bizCity').val();
	var bizState=$('#bizState').val();
	var bizZip=$('#bizZip').val();
	var skipStep2=($('#skipStep2').is(':checked'))?1:0;
	var achRouting=$('#achRouting').val();
	var acctNum=$('#acctNum').val();
	if(sameAsHome==1){
		getHomeAddress();
	}else{
		$('#bizAddr1').prop('disabled',false);
		$('#bizAddr2').prop('disabled',false);
		$('#bizCity').prop('disabled',false);
		$('#bizState').prop('disabled',false);
		$('#bizZip').prop('disabled',false);
		if(bizZip.length>=5&&bizCity==""){
			getCityState(bizZip);
		}
	}
	if(skipStep2==1){
		$('#achRouting').val("");
		$('#acctNum').val("");
		$('#achRouting').prop('disabled',true);
		$('#acctNum').prop('disabled',true);
	}else{
		$('#achRouting').prop('disabled',false);
		$('#acctNum').prop('disabled',false);
	}
	var bizInfo=false;
	if(legalBizName!=""&&fedTaxIdEin!=""){
		if(sameAsHome==1){
			bizInfo=true;
		}else{
			if(bizAddr1!=""&&bizAddr2!=""&&bizCity!=""&&bizState!=""&&bizZip!=""){
				bizInfo=true;
			}
		}
	}else{
		bizInfo=true;
	}
	var skipInfo=false;
	if(skipStep2==1){
		skipInfo=true;
	}else{
		if(achRouting!=""&&acctNum!=""){
			skipInfo=true;
		}
	}
	if(eventClick==true){
		if(bizInfo==true&&monthlySales!=""&&avgTicket!=""&&skipInfo==true){
			document.location.href="//payanywhere.com/";
		}
	}
}
$('.step2').bind('input',function(){
	step2(false);
}).blur(function(){
	step2(false);
}).change(function(){
	step2(false);
}).click(function(){
	step2(false);
}).focus(function(){
	step2(false);
});
$('#applyStep2 input[type=checkbox]').click(function(){
	step2(false);
});
$(document).ready(function(){
	$('#applyStep2').bootstrapValidator({
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
			step2(false);
		}
	});
});