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
        <title>TemplateGame</title>
        <script src="<?=  base_url()?>lib/kiwi.js"></script>  
        <script src="<?=  base_url()?>lib/primitives-1.0.2.js"></script>    
        <script src="<?=  base_url()?>lib/inicio2.js"></script>    
        <script src="<?=  base_url()?>lib/inicio.js"></script>    
        <script src="<?=  base_url()?>lib/main.js"></script>   


    </head>
    <body style="margin:0px;padding:0px">
        <div id="content"></div>        


    </body>
</html>