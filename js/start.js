function modalStart(eventClick){
	var email=$('#email').val();
	if($('#emailDup').val()==0){
		validateEmailAddress(email);
	}
	var pw1=$('#password').val();
	var pw2=$('#passwordConfirm').val();
	var agree=($('#agreement').is(':checked'))?1:0;
	if(pw1!=""){
		$('.passwordConfirm').fadeIn();
	}
	if(eventClick==true){
		if(email!=""&&pw1!=""&&pw2!=""&&agree!=""){
			$('#modalStart').modal('hide');
			document.location.href="step1.html";
		}
	}
}
$('.modalStart').bind('input',function(){
	modalStart(false);
});
$(document).ready(function(){
	$('#modalStart').modal('show');
});
function modalClose(eventClick){
$('#modalStart').modal('hide');
}


$(document).ready(function() {
    $('#emailForm').bootstrapValidator({
		live: 'enabled',
        fields: {
            email: {
                validators: {
                    emailAddress: {
                        message: 'the value is not a valid email address'
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
            }
        }
    });
});
