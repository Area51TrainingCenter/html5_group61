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


}

);


/*
El signo $sirve como selector de elementos de la página web.

Ejemplos:

• $(“a”) selecciona todos los elementos “a” que contenga la página.

• $(“a.enlace”) selecciona todos los elementos “a” que tengan la clase 

“enlace”.

• $(“.base”) selecciona todos los elementos que tengan la clase “enlace”.

• $(“div p”) selecciona todos los elementos “p” que se encuentren dentro 

de un elemento “div”.

• $(“#boton”) selecciona todos los elementos que tengan el id “boton“.
*/