$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#navbar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#000000');
       }else {
         $('.navbar').css('background-color', 'transparent');
      }
   });
    }
});

var boton = document.getElementById("boton-send");

boton.onclick = function(){

	
		function name(){
			var name = document.getElementById("name").value;
			if(name === ""){
				alert("Please enter your name");
			}
		}
		name();

		function email(){
			var email = document.getElementById("email").value;
			if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
			  alert("Please enter a valid email");
			}

		}
		email();
		function phone(){
			var phone = document.getElementById("phone").value;
			
			if( !(/^\d{9}$/.test(phone)) ) { //Validación para ingresar 9 numeros
	 			alert("Please enter a valid phone number");
			}
		}
		phone();
		function textarea(){
			var textarea = document.getElementById("textarea").value;
			if(textarea === ""){
				alert("Please enter your text");
			}
		}
		textarea();
}