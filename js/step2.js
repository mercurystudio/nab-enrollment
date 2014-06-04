function step2(eventClick){
	var corpVSper=$('#corpVSper').val();
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
	if(corpVSper==true){
		if(legalBizName!=""&&fedTaxIdEin!=""){
			if(sameAsHome==1){
				bizInfo=true;
			}else{
				if(bizAddr1!=""&&bizAddr2!=""&&bizCity!=""&&bizState!=""&&bizZip!=""){
					bizInfo=true;
				}
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
			document.location.href="step3.html";
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
	getCorpPersonal(getURLParameter("biz"));
});
$(".fedTaxIdEin").mask("00-0000000");
$(document).ready(function(){
	getAgent(getURLParameter("agent"));
	$('#applyStep2').bootstrapValidator({
		fields:{
			legalBizName:{
				validators:{
					notEmpty:{
						message:'required'
					}
				}
			},
			bizAddr1:{
				validators:{
					notEmpty:{
						message:'required'
					}
				}
			},
			bizAddr2:{
				validators:{
					notEmpty:{
						message:'required'
					}
				}
			},
			bizZip:{
				validators:{
					zipCode: {
						message:'please enter a valid zip'
					}
				}
			},
			bizAddr2:{
				validators:{
					notEmpty:{
						message:'required'
					}
				}
			},
			
		},
		submitHandler:function(validator,form,submitButton){
			step2(false);
		}
	});
});
