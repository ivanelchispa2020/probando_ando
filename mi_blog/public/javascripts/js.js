$(function(){

			// SCRROLL

			$(window).scroll(function(){
			   if ($(this).scrollTop() > 600) {
			        $('.arriba').fadeIn();
			   } else {
			        $('.arriba').fadeOut();
			   }
			});

			  $('.arriba').click(function(){
			  	  $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
			        });

			// PAGINACION
			$("#btn_primera").click(function(event) {
				from_principal($(this).attr('value'),$(this).attr('value2'),$(this).attr('value3'),'resultado','/articulos');
			});

			$("#btn_anterior").click(function(event) {
				from_principal($(this).attr('value'),$(this).attr('value2'),$(this).attr('value3'),'resultado','/articulos');
			});
			$("#btn_pagina").click(function(event) {
				from_principal($(this).attr('value'),$(this).attr('value2'),$(this).attr('value3'),'resultado','/articulos');
			});

			for (var i = 0; i < 25; i++) {

			$("#btn_i_" + i).each(function(index, el) {
				$(this).css({"cursor":"pointer"});
			});


			$("#btn_i_" + i).click(function(event) {
			from_principal($(this).attr('value'),$(this).attr('value2'),$(this).attr('value3'),'resultado','/articulos');
			});
			};

			$("#btn_siguiente").click(function(event) {
				from_principal($(this).attr('value'),$(this).attr('value2'),$(this).attr('value3'),'resultado','/articulos');
			});

			$("#btn_ultima").click(function(event) {
				from_principal($(this).attr('value'),$(this).attr('value2'),$(this).attr('value3'),'resultado','/articulos');
			});



				// CATEGORIAS
			$("#btn_cat_1").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".comentarios_respuestas").hide();
				$(".encuesta").hide();
			});
				// CATEGORIA ASIDE
			$("#btn_cat__1").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".comentarios_respuestas").hide();
				$(".encuesta").hide();
			});



			$("#btn_cat_2").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".comentarios_respuestas").hide();
				$(".encuesta").hide();
			});
				// CATEGORIA ASIDE
			$("#btn_cat__2").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".comentarios_respuestas").hide();
				$(".encuesta").hide();
			});


			$("#btn_cat_3").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});
				// CATEGORIA ASIDE
			$("#btn_cat__3").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});

			$("#btn_cat_4").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});
				// CATEGORIA ASIDE
			$("#btn_cat__4").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});

			$("#btn_cat_5").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});
				// CATEGORIA ASIDE
			$("#btn_cat__5").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});

			$("#btn_cat_6").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});
				// CATEGORIA ASIDE
			$("#btn_cat__6").click(function(event) {
				from_principal(null,$(this).attr("value"),null,"resultado","/articulos");
				$("#caja_comentarios").hide();
				$(".encuesta").hide();
				$(".comentarios_respuestas").hide();
			});



			// BUSCADOR
			$("#buscador").keypress(function(e) {
				if(e.which==13){
				from_principal(null,null,$(this).val(),"resultado","/articulos");
				$("#caja_comentarios").hide();
				}
			});
			$("#btn_buscador").click(function(e) {
				from_principal(null,null,$("#buscador").val(),"resultado","/articulos");
			});


			// CAPTCHA
		var num=Math.random().toString(36).substring(7);
		$("#mi_captcha").html("<label>"+ num + "</label>");


		/// VALIDACION FORMULARIO
			$("#envia_form").click(function(event) {

			var txt_nombre=document.getElementById("txt_nombre");
			txt_nombre.addEventListener("input",validar,true);

			var txt_correo=document.getElementById("txt_correo");
			txt_correo.addEventListener("input",validar,false);

			var txt_captcha=document.getElementById("txt_captcha");
			txt_captcha.addEventListener("input",validar,false);

			var txt_comentario=document.getElementById("txt_comentario");
			txt_comentario.addEventListener("input",validar,false);

						validar();
								if(validar()==0){
								//document.formulario_comentario.submit();
								$("#formulario_comentario").submit();
								}

						}
			);

			$(".error_nombre").hide();
			$(".error_correo").hide();
			$(".error_correo2").hide();
			$(".error_captcha").hide();
			$(".error_comentario").hide();
			$("#seleccionar_imagen").hide();

			$("#ch_imagen").change(function(event) {
						if($(this).prop('checked')){
						$("#seleccionar_imagen").fadeIn(2000);
						}else{
						$("#seleccionar_imagen").hide(2000);
						}

			});



			function validar(){
				var enviar=0;

				if(txt_nombre.value==""){
					txt_nombre.setCustomValidity("El Nombre es requerido");
					txt_nombre.style.backgroundColor="#FFB6C1";
					$(".error_nombre").fadeIn(3000);
					enviar++;
					}else{
					txt_nombre.setCustomValidity("");
					txt_nombre.style.backgroundColor="#cdf";
					$(".error_nombre").hide();
				}
				if(txt_correo.value==""){
					txt_correo.setCustomValidity("El Correo es requerido");
					txt_correo.style.backgroundColor="#FFB6C1";
					$(".error_correo").fadeIn(3000);
					enviar++;
				}else if(validarEmail(txt_correo.value)){
					txt_correo.setCustomValidity("");
					txt_correo.style.backgroundColor="#cdf";
					$(".error_correo").hide();
					$(".error_correo2").hide();
				}else{
					txt_correo.setCustomValidity("El Correo no es valido.Revisalo");
					txt_correo.style.backgroundColor="#FFB6C1";
					$(".error_correo2").fadeIn(3000);
					enviar++;
				}

				if(txt_captcha.value!=num){
					txt_captcha.setCustomValidity("El Texto ingresado no es correcto...Revisalo.");
					txt_captcha.style.backgroundColor="#FFB6C1";
					$(".error_captcha").fadeIn(3000);
					enviar++;
					}else{
					txt_captcha.setCustomValidity("");
					txt_captcha.style.backgroundColor="#cdf";
					$(".error_captcha").hide();
				}
				if(txt_comentario.value==""){
					txt_comentario.setCustomValidity("El Comentario  es requerido");
					txt_comentario.style.backgroundColor="#FFB6C1";
					$(".error_comentario").fadeIn(3000);
					enviar++;
					}else{
					txt_comentario.setCustomValidity("");
					txt_comentario.style.backgroundColor="#cdf";
					$(".error_comentario").hide();
				}

					return enviar;



			}

		function validarEmail( email ) {
		    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		    if ( !expr.test(email)){
		      	return false;
		       }else{
			return true;
		      }
		}


				// BTN RESPONDER
				var total=$("#total_respuestas").attr('value');
				for (var i = 1; i < total+1; i++) {
				$("#mi_captcha"+i).html("<label>"+ num + "</label>");
				$("#mi_captcha"+i).css({
						backgroundColor: 'black',
						color: 'orange',
						width:140,
						textAlign:'center',
						fontSize:25
					});
				$(".error_nombre"+i).hide();
				$(".error_correo"+i).hide();
				$(".error_correo2"+i).hide();
				$(".error_captcha"+i).hide();
				$(".error_comentario"+i).hide();
				$("#seleccionar_imagen"+i).hide();

				$("#ch_imagen"+i).change(function(event) {
				  var id_ch=$(this).attr('value');
					if($(this).prop('checked')){
						$("#seleccionar_imagen"+id_ch).fadeIn(2000);
					}else{
						$("#seleccionar_imagen"+id_ch).hide(2000);
							}
					});


					$("#envia_form_"+i).click(function(event) {
							var id=$(this).attr('value');
							 var nombre=$("#txt_nombre"+id).val();
							 var correo=$("#txt_correo"+id).val();
							 var captcha=$("#txt_captcha"+id).val();
							 var comentario=$("#txt_comentario"+id).val();

							var formu=$("#formulario_comentario" +id).attr('name');
						     if(validar_respuesta(id,nombre,correo,captcha,num,comentario)==3){
								     				$("#formulario_comentario" +id).submit();
								     }
								});

								function validar_respuesta(id,nombre,correo,captcha,num,comentario){

											var enviar=0;

												if(nombre==""){
														$(".error_nombre").fadeIn(2500);
														$("#txt_nombre"+id).css({
															backgroundColor: '#FCCECE'
														});
														enviar++;
												}else{
													$(".error_nombre").hide();
													$("#txt_nombre"+id).css({
															backgroundColor: 'white'
														});
												}

												if(correo==""){
														$(".error_correo"+id).fadeIn(2500);
														$(".error_correo2"+id).hide();
														$("#txt_correo"+id).css({
															backgroundColor: '#FCCECE'
														});

												}else if(validarEmail(correo)){
														$(".error_correo"+id).hide();
														$(".error_correo2"+id).hide();
														$("#txt_correo"+id).css({
															backgroundColor: 'white'
														});
														enviar++;
												}else{
													$(".error_correo"+id).hide();
													$(".error_correo2"+id).fadeIn(2500);
													$("#txt_correo"+id).css({
															backgroundColor: '#FCCECE'
														});
												}
												if(captcha==num){
														$("#txt_captcha"+id).css({
															backgroundColor: 'white'
														});
														$(".error_captcha"+id).hide();
														enviar++;
												}else{
													$("#txt_captcha"+id).css({
															backgroundColor: '#FCCECE'
														});
														$(".error_captcha"+id).fadeIn(2500);
												}
												if(comentario!=""){
														$("#txt_comentario"+id).css({
															backgroundColor: 'white'
														});
														$(".error_comentario"+id).hide();
														enviar++;
												}else{
													$(".error_comentario"+id).fadeIn(2500);
													$("#txt_comentario"+id).css({
															backgroundColor: '#FCCECE'
														});
												}


												return enviar;
										}


					};


					/// ENCUESTAS

					$("#envia_encuesta").click(function(event) {
					 		var valor=$('input:radio[name=radio]:checked').val();
					 		$("#valor_encuesta").val(valor);
					 		$("#formulario_encuesta").submit();


					});
					$("#encuesta_grafico").hide();
					$(".participa_encuesta").click(function(event) {
							$("#encuesta_grafico").fadeIn(1500);
					});


})



