jQuery(
	function($) {

	/*	$(".op1").on("click",function(){alert("hola")});*/
		$(".op1").click(function(){
			$(".menu li").removeClass("active");
			$(".op1").addClass("active");
		})

		$(".op2").click(function(){
			$(".menu li").removeClass("active");
			$(".op2").addClass("active");
		})

		$(".op3").click(function(){
			$(".menu li").removeClass("active");
			$(".op3").addClass("active");
		})

		$(".op4").click(function(){
			$(".menu li").removeClass("active");
			$(".op4").addClass("active");
		})




	//clic en un enlace de la lista
	$('ul a').on('click',function(e){
		//prevenir en comportamiento predeterminado del enlace
		e.preventDefault();
		//obtenemos el id del elemento en el que debemos posicionarnos
		var strAncla=$(this).attr('href');
		
		//utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
		$('body,html').stop(true,true).animate({
			//realizamos la animacion hacia el ancla
			scrollTop: $(strAncla).offset().top-80
		},1000);
	});


















}

);
