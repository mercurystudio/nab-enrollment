// change this destination to the homepage you require.
function done(type){
	/*if(type=="modal"){*/
		document.location.href="//payanywhere.com";
	/*}else if(type="form"){
		$('#step3Confirm').modal('show');
	}*/
}
function editShipping(){
	$('#mobile .editShipping').fadeIn();
	$('.validZip').fadeIn();
}
function step3(eventClick){
	var prodType=$('.prodType').val();
	if(prodType=="mobile"){
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
	}else if(prodType=="storefront"){
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
}
$('#sameBizAdd').click(function(){
	$("#sameHomeAdd").attr("checked",false);
	if($('#sameBizAdd').is(':checked')){
		getBusinessAddress();
	}else{
		$('#storefront #addr1').prop('disabled',false);
		$('#storefront #addr2').prop('disabled',false);
		$('#storefront #city').prop('disabled',false);
		$('#storefront #state').prop('disabled',false);
		$('#storefront #zipcode').prop('disabled',false);
	}
});
$('#sameHomeAdd').click(function(){
	$("#sameBizAdd").attr("checked",false);
	if($('#sameHomeAdd').is(':checked')){
		getHomeAddress();
	}else{
		$('#storefront #addr1').prop('disabled',false);
		$('#storefront #addr2').prop('disabled',false);
		$('#storefront #city').prop('disabled',false);
		$('#storefront #state').prop('disabled',false);
		$('#storefront #zipcode').prop('disabled',false);
	}
});
/*$('#equipmentPrinterRent').click(function(){
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
});*/
$('.step3').bind('input',function(){
	step3(false);
}).blur(function(){
	step3(false);
}).change(function(){
	step3(false);
}).click(function(){
	step3(false);
}).focus(function(){
	step3(false);
});
$(document).ready(function(){
	getProductType(getURLParameter("prod"));
	getShippingAddress();
	$('.drawerOptions').slideUp("slow");
	$('.printerOptions').slideUp("slow");
	$('.equip-printer').click(function() {
		if($('.equip-printer').css("opacity")==1){
			$('.equip-printer .optionCheck').css("background-image","url('../images/optionCircle.png')");
			$('.printerOptions').slideToggle("slow");
			$('.equip-printer').css("opacity",.33);
			$('#equipmentPrinterRent').prop('disabled', true);
			$('#equipmentPrinterRent').attr('checked', false);
			$('#equipmentDrawerRent').prop('checked', false);
		}else if($('.equip-printer').css("opacity")!=1){
			$('.equip-printer .optionCheck').css("background-image","url('../images/optionCircle-active.png')");
			$('.equip-drawer .optionCheck').css("background-image","url('../images/optionCircle.png')");
			$('.printerOptions').slideToggle("slow");
			$('.drawerOptions').slideUp("slow");
			$('.equip-printer').css("opacity",1);
			$('.equip-drawer').css("opacity",.33);
			$('#equipmentPrinterRent').prop('checked', true);
			$('#equipmentDrawerRent').prop('checked', false);
		}
	});
	$('.equip-drawer').click(function() {
		if($('.equip-drawer').css("opacity")==1){
			$('.equip-drawer .optionCheck').css("background-image","url('../images/optionCircle.png')");
			$('.drawerOptions').slideToggle("slow");
			$('.equip-drawer').css("opacity",.33);
			$('#equipmentDrawerRent').prop('disabled', true);
			$('#equipmentDrawerRent').attr('checked', false);
			$('#equipmentDrawerRent').prop('checked',false);
		}else if($('.equip-drawer').css("opacity")!=1){
			$('.equip-drawer .optionCheck').css("background-image","url('../images/optionCircle-active.png')");
			$('.equip-printer .optionCheck').css("background-image","url('../images/optionCircle.png')");
			$('.drawerOptions').slideToggle("slow");
			$('.printerOptions').slideUp("slow");
			$('.equip-drawer').css("opacity",1);
			$('.equip-printer').css("opacity",.33);
			$('#equipmentPrinterRent').prop('checked', false);
			$('#equipmentDrawerRent').prop('checked', true);
		}
	});
});
$(document).ready(function() {
    $('#paymentForm').bootstrapValidator({
          fields: {
            ccNum: {
                validators: {
                    creditCard: {
                        message: 'The credit card number is not valid'
                    }
                }
            },
            cvvr: {
                validators: {
                    cvv: {
                        creditCardField: 'ccNumber',
                        message: 'The CVV number is not valid'
                    }
                }
            }
        }
    });
});