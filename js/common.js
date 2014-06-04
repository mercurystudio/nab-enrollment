function addAccount(modal){console.log('something');
	$('#emailDup').val(1);
	$('#emailInUse').modal('hide');
		console.log('modal:'+modal+':::');
	if(modal){
		$('#'+modal).modal('show');
	}
}
function cancel(modal){console.log('something');
	$('#email').val("");
	$('input[name$="email"]').attr('placeholder','Different Email Address');
	setTimeout(function(){$('#emailInUse').modal('hide')},1000);
		console.log('modal:'+modal+':::');
	if(modal){
		console.log('start ONLY');
		$('#'+modal).modal('show');
	}
}
function getAgent(id){
	var returnVal=false;
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getAgent.php',
		data:'a='+id,
		success:function(data){
			if(data['a']==true){
				$('.agent-direct').show();
			}
			returnVal=data['a'];
			$('#agent').val(returnVal);
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
	$('#agent').val(returnVal);
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
			$('#storefront #addr1').val(data['a1']);
			$('#storefront #addr2').val(data['a2']);
			$('#storefront #city').val(data['c']);
			$('#storefront #state').val(data['s']);
			$('#storefront #zipcode').val(data['z']);
			$('#storefront #addr1').prop('disabled',true);
			$('#storefront #addr2').prop('disabled',true);
			$('#storefront #city').prop('disabled',true);
			$('#storefront #state').prop('disabled',true);
			$('#storefront #zipcode').prop('disabled',true);
			$('.validZip').fadeIn();
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}
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
function getConfirmIdentity(){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getConfirmIdentity.php',
		data:'',
		success:function(data){
			$('.option1').html(data['q1']);
			var optionArray1=data['q1_options'].split("|");
			for(var i=0;i<optionArray1.length;i++){
				$('#option1').append('<option value="'+optionArray1[i]+'">'+optionArray1[i]+'</option>');
			}
			$('.option2').html(data['q2']);
			var optionArray2=data['q2_options'].split("|");
			for(var i=0;i<optionArray2.length;i++){
				$('#option2').append('<option value="'+optionArray2[i]+'">'+optionArray2[i]+'</option>');
			}
			$('.option3').html(data['q3']);
			var optionArray3=data['q3_options'].split("|");
			for(var i=0;i<optionArray3.length;i++){
				$('#option3').append('<option value="'+optionArray3[i]+'">'+optionArray3[i]+'</option>');
			}
			$('.validAddress').fadeIn();
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}
function getCorpPersonal(id){
	var returnVal=false;
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getCorpPers.php',
		data:'a='+id,
		success:function(data){
			console.log('Corporate: '+data['a']);
			if(data['a']==true){
				$('.corpVSpersonal').show();
			}
			returnVal=data['a'];
			$('#corpVSper').val(returnVal);
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
	$('#corpVSper').val(returnVal);
}
function getHomeAddress(){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getHomeAddress.php',
		data:'',
		success:function(data){
			$('#storefront #addr1').val(data['a1']);
			$('#storefront #addr2').val(data['a2']);
			$('#storefront #city').val(data['c']);
			$('#storefront #state').val(data['s']);
			$('#storefront #zipcode').val(data['z']);
			$('#storefront #addr1').prop('disabled',true);
			$('#storefront #addr2').prop('disabled',true);
			$('#storefront #city').prop('disabled',true);
			$('#storefront #state').prop('disabled',true);
			$('#storefront #zipcode').prop('disabled',true);
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
function getProductAvailability(type){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getProductAvailability.php',
		data:'p='+type,
		success:function(data){
			if(data['b']<=0||data['w']<=0){
				$('.product'+type+' .outOfStock').fadeIn();
			}else{
				$('.product'+type+' .outOfStock').fadeOut();
			}

			if(type=="Mobile"){
				if($('.productMobile .radioBlack').prop('checked')==false&&$('.productMobile .radioWhite').prop('checked')==false){
					$('.productMobile .radioBlack').prop('checked', true);
				}
				$('.product'+type).css("background-image","url('images/productMobile-selected.png')");
				if($("input:radio[name=products]:checked").val()=='Mobile - black'){ // EDITED THIS LINE
					$('.product'+type).css("background-image","url('images/productMobile-selected.png')");   
				}
			    if($("input:radio[name=products]:checked").val()=='Mobile - white'){ // EDITED THIS LINE
					$('.product'+type).css("background-image","url('images/productMobile-selected-w.png')");   
				}
				$('.productStorefront').css("background-image","url('images/productStorefront.png')");
				$('.alreadyHave').prop('checked', false);
				$('.productStorefront .radioBlack').prop('checked', false);
				$('.productStorefront .radioWhite').prop('checked', false);
				$('.productMobile .radioboxes').css("opacity",1);
				$('.productStorefront .radioboxes').css("opacity",.33); 
			}
			if(type=="Storefront"){
				if($('.productStorefront .radioBlack').prop('checked')==false&&$('.productStorefront .radioWhite').prop('checked')==false){
					$('.productStorefront .radioBlack').prop('checked', true);
				}
				$('.product'+type).css("background-image","url('images/productStorefront-selected.png')"); 
				if($("input:radio[name=products]:checked").val()=='Storefront - black'){ // EDITED THIS LINE
					$('.product'+type).css("background-image","url('images/productStorefront-selected.png')");   
				}
			    if($("input:radio[name=products]:checked").val()=='Storefront - white'){ // EDITED THIS LINE
					$('.product'+type).css("background-image","url('images/productStorefront-selected-w.png')");   
				}
				$('.productMobile').css("background-image","url('images/productMobile.png')");
				$('.alreadyHave').prop('checked', false);
				$('.productMobile .radioBlack').prop('checked', false);
				$('.productMobile .radioWhite').prop('checked', false);
				$('.productMobile .radioboxes').css("opacity",.33); 
				$('.productStorefront .radioboxes').css("opacity",1);
			}
			$('.product'+type+' .radioboxes').fadeIn();

		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}
function getProductType(id){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/getProductType.php',
		data:'p='+id,
		success:function(data){
			$('#'+data['pS']).show();
			$('#'+data['pH1']).hide();
			$('#'+data['pH2']).hide();
			returnVal=data['pS'];
			$('.prodType').val(returnVal);
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}
function getShippingAddress(){
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
function getURLParameter(name){
	name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);
	return results==null?"":decodeURIComponent(results[1].replace(/\+/g," "));
}
function isEmail(e){
	if(e.length==0){
		return false;
	}
	if(e.indexOf(" ")!=-1){
		return false;
	}else if(e.indexOf("@")==-1){
		return false;
	}else if(e.indexOf("@")==0){
		return false;
	}else if(e.indexOf("@")==(e.length-1)){
		return false;
	}
	var ee=e.split("@");
	if(ee[1].indexOf(".")==-1){
		return false;
	}else if(ee[1].indexOf(".")==0){
		return false;
	}else if(ee[1].charAt(ee[1].length-1)=="."){
		return false;
	}
	return true;
}
function isInt(evt){
	var charCode=(evt.which) ? evt.which : event.keyCode;
	return (charCode>=48&&charCode<=57);
}
function validateEmailAddress(id){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/validateEmailAddress.php',
		data:'e='+(id),
		success:function(data){
			if(data['e']==true){
				$('#modalStart').modal('hide');
				$('#emailInUse').modal('show');
			}
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}

function validateSSN(id){
	$.ajax({
		type:"GET",
		secureuri:false,
		dataType:'json',
		url:'ajax/validateSSN.php',
		data:'s='+id,
		success:function(data){
			if(data['s']!=true){
				$('#last4SSN').val("");
				$('#verifyIdentity').fadeIn('show');
			}
			return data['a'];
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
}