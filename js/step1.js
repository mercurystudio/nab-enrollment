function step1(eventClick){
	var direct=$('#agent').val();
	if(direct=="true"){
		var email=$('#email').val();
		if($('#emailDup').val()==0){
			validateEmailAddress(email);
		}
		var password=$('#password').val();
		var passwordConfirm=$('#passwordConfirm').val();
		var agree=($('#agreement').is(':checked'))?1:0;
	}
	var useIndustry=$('#useIndustry').val();
	var useBusiness=$('#useBusiness').val();
	var product=$('input:radio[name=products]:checked').val();
	var fName=$('#fName').val();
	var lName=$('#lName').val();
	var addr1=$('#addr1').val();
	var addr2=$('#addr2').val();
	var city=$('#city').val();
	var state=$('#state').val();
	var zipcode=$('#zipcode').val();
	var phone=$('#phone').val();
	var ssn=$('#last4SSN').val();
	var bday=$('#bday').val();
	var option1=$('#option1').val();
	var option2=$('#option2').val();
	var option3=$('#option3').val();
	if(useIndustry!=""){
		//$('.useBusiness').fadeIn();
	}
	$('.products input:radio').click(function(){
		toggleSelected($(this).val());
	});
	if(zipcode.length>=5&&city==""){
		getCityState(zipcode);
	}
	if(ssn.length==4){
		validateSSN(ssn);
	}
	if(fName&&lName&&addr1&&city&&state!=""&&zipcode&&phone&&ssn&&bday){
		getConfirmIdentity();
	}
	var agentValid=false;
	if(direct==true){
		if(email!=""&&password!=""&&password==passwordConfirm&&agree!=""){
			agentValid=true;
		}
	}else{
		agentValid=true;
	}
	if(eventClick==true){
		if(agentValid==true&&useIndustry!=""&&useBusiness!=""&&product!=""&&fName!=""&&lName!=""&&addr1!=""&&addr2!=""&&city!=""&&state!=""&&zipcode!=""&&phone!=""&&ssn!=""&&bday!=""&&option1!=""&&option2!=""&&option3!=""){
			document.location.href="step2.html";
		}
	}
}
function toggleSelected(id){
	var selected=id.split(" - ");
	if(selected[0]=="Mobile"){
		$('.product'+selected[0]).css("background-image","url('images/productMobile-selected.png')");
		$('.productStorefront').css("background-image","url('images/productStorefront.png')");
		$('.alreadyHave').prop('checked', false);
	}
	if(selected[0]=="Storefront"){
		$('.product'+selected[0]).css("background-image","url('images/productStorefront-selected.png')");
		$('.productMobile').css("background-image","url('images/productMobile.png')");
		$('.alreadyHave').prop('checked', false);
	}
		
}
function dropdownFocus(){
	if(useIndustry!=""){
		$('.useBusiness').fadeIn();
	}
	};
$('.alreadyHave').click(function() {
    var checked = $(this).prop('checked');
	 
    if (checked) {
        $('.productStorefront').css("background-image","url('images/productStorefront.png')");
		$('.productMobile').css("background-image","url('images/productMobile.png')");
		$('.radioBlack').prop('checked', false);
		$('.radioWhite').prop('checked', false);
				$('.outOfStock').fadeOut();
				$('.productStorefront .radioboxes').css("opacity",.33); 
				$('.productMobile .radioboxes').css("opacity",.33); 
    }
    else {
        $(this).attr('checked', false);
    }
});
$('#useIndustry').change('input',function(){
	dropdownFocus();
});
/*$('.pPhone').bind('input',function(){
	phoneVal($('.pPhone').val());
});*/
$('.step1').bind('input',function(){
	step1(false);
});
$('.productMobile').click(function(){
	getProductAvailability("Mobile");
});
$('.productStorefront').click(function(){
	getProductAvailability("Storefront");
});
function preload(arrayOfImages){
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src=this;
	});
}
function phoneVal(id){
	if((id.split(/-/g).length-1)>2){
		$('.pPhone').val("");
	}else{
		id.replace("-","");
		if(id.length==10){
			var output=id.substr(0,3)+"-"+id.substr(3);
			output=output.substr(0,7)+"-"+output.substr(7);
			$('.pPhone').val(output);
			$('#telePhone').addClass('has-success').removeClass('has-error');
		}else{
			$('#telePhone').addClass('has-error').removeClass('has-succes');
		}
	}
}
$(document).ready(function(){
	getAgent(getURLParameter("agent"));
	preload([
		'images/productMobile.png',
		'images/productMobile-selected.png',
		'images/productMobile-selected-w.png',
		'images/productStorefront.png',
		'images/productStorefront-selected.png',
		'images/productStorefront-selected-w.png'
	]);
	
	//http://igorescobar.github.io/jQuery-Mask-Plugin/  for more information on adding masks - this works with validator //
	$(".pPhone").mask("000-000-0000");
	$(".fullSSN").mask("000-00-0000");
	$(".bDate").mask("00-00-0000"), {placeholder: "mm/dd/yyyy"};
	
	// http://bootstrapvalidator.com/  for details on working with this validation.  //
	$('#applyStep1').bootstrapValidator({
		fields:{
			fName:{
				validators:{
					notEmpty:{
						message:'first name is required'
					}
				}
			},
			lName:{
				validators:{
					notEmpty:{
						message:'last name is required'
					}
				}
			},
			email:{
				validators:{
					notEmpty:{
						message:'email address is required'
					},
					emailAddress:{
						message: 'not a valid email address'
					}
				}
			},
			password: {
                validators: {
					regexp: {
                        regexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                        message: 'password must be a minimum of 8 characters, with at least 1 uppercase letter and 1 number'
                    }
                    
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'passwords do not match'
                    }
                }
            },
		  pPhone:{
			  validators:{
				  phone:{
					  message:'not a valid phone number'
				  }
			  }
		  }
		},
		submitHandler:function(validator,form,submitButton){
			step1(false);
		}
	});
});