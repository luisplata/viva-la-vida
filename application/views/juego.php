<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <script type="text/javascript">
            //Asi se obtiene el nombre del jugador
            var nombre = "<?= $_POST['nombre'] ?>";
            //console.log(nombre);
            var nombre2 = "Luis Plata";
        </script>
        <meta charset="utf-8" />
        <title>Proyecto de Grado</title>
        <script src="lib/kiwi.js"></script>
		<script>
		
			var state = new Kiwi.State('Play');
			
			var game;
			var mi_imagen;
			var mitad;
			var cuarto;

			state.preload = function () {
				//cargamos el fondo
				this.addImage('tablero', './images/Tablero.jpg');
			};

			state.create = function () {

			//variables
				//this.contador = 0;
				//objetos
				this.tablero = new Kiwi.GameObjects.Sprite(this, this.textures.tablero, 0, 0);

				this.addChild(this.tablero);
				this.tablero.scaleY=0.5;
				this.tablero.scaleX=0.5;
				this.tablero.x = -(cuarto);
				this.tablero.y = -(cuarto);
				
			};

			state.update = function () {
				this.tablero.visible=true;
			};



		</script>
		
		<script>		
			/*
			Aqui se realiza las peticiones hacia el servidor donde debe responder que hay una solucion al laberinto
			*/
			var gameOptions = {
				renderer: Kiwi.RENDERER_WEBGL,
				width: 500,
				height: 500
			};
			document.addEventListener("DOMContentLoaded", function(){
			  
				console.log("Comenzo a preguntar");
				//en 10 sec
				//gameOptions.width=600;
				//gameOptions.height=600;
				setTimeout(comenzar,200);
			});
			//Las opciones del simulador
			
			
			function comenzar(ancho, alto){
				mi_imagen = new Image();
				mi_imagen.src = mi_imagen.src = "./images/Tablero.jpg";
				console.log(mi_imagen.height);
				//obtenemos el tamaño de la imagen a partir de su 50%;
				mitad = mi_imagen.height/2;
				cuarto = mitad/2;
				gameOptions.width=mitad;
				gameOptions.height=mitad;
				
				console.log("Comenzo a ejecutar");
				console.log("ancho:"+ancho+"alto:"+alto);
				game = new Kiwi.Game('', 'Proyecto de grado', state, gameOptions);
			}
		</script>
	
    </head>
    <body style="margin:0px;padding:0px">
        <div id="content"></div>        


    </body>
</html>