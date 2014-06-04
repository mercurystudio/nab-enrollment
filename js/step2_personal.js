function isInt(evt){
	var charCode=(evt.which) ? evt.which : event.keyCode;
	return (charCode>=48&&charCode<=57);
}
function step2(eventClick){
	var monthlySales=$('#monthlySales').val();
	var avgTicket=$('#avgTicket').val();
	var skipStep2=($('#skipStep2').is(':checked'))?1:0;
	var achRouting=$('#achRouting').val();
	var acctNum=$('#acctNum').val();
	if(skipStep2==1){
		$('#achRouting').val("");
		$('#acctNum').val("");
		$('#achRouting').prop('disabled',true);
		$('#acctNum').prop('disabled',true);
	}else{
		$('#achRouting').prop('disabled',false);
		$('#acctNum').prop('disabled',false);
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
		if(monthlySales!=""&&avgTicket!=""&&skipInfo==true){
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