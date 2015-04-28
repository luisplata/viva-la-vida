<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Viva la Vida</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">               
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

        <style>
            html,body {
                height:100%;
            }

            h1 {
                font-family: Arial,sans-serif;
                font-size:80px;

            }

            /* Custom container */
            .container-full {
                margin: 0 auto;
                width: 100%;
                min-height:100%;
                background-image: url("<?= base_url() ?>images/fondo_anime.jpg");
                background-repeat: no-repeat;
                background-size: 100%;
                color:#eee;
                overflow:hidden;
            }

            .container-full a {
                color:#efefef;
                text-decoration:none;
            }

            .v-center {
                margin-top:7%;
            }

            .fondo{
                opacity: 0.75;
                background-color: #DCDCDC;
                color: #000000;
            }
        </style>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Aqui haremos el formulario de inicio -->

        <div class="container-full">

            <div class="row">

                <div class="col-xs-4 col-xs-offset-4 text-center v-center">
                    <div class="fondo">
                        <h1>Viva La Vida</h1>
                        <p class="lead">Ingresa tu nombre para comenzar!</p>
                    </div>
                    <br><br><br>

                    <form  action="juegos" method="post" class="col-lg-12">
                        <div class="input-group" style="width:340px;text-align:center;margin:0 auto;">
                            <input class="form-control input-lg" required name="nombre" autofocus="" title="Ingresa tu nombre para comenzar" placeholder="Nombre" type="text">
                            <span class="input-group-btn">
                                <input type="submit" value="OK" class="btn btn-lg btn-primary" />
                            </span>
                        </div>
                    </form>
                </div>            
            </div> <!-- /row -->      
            <div class="row">

                <div class="col-lg-12 text-center v-center" style="font-size:39pt;">
                    <a href="#"><i class="icon-google-plus"></i></a> <a href="#"><i class="icon-facebook"></i></a>  <a href="#"><i class="icon-twitter"></i></a> <a href="#"><i class="icon-github"></i></a> <a href="#"><i class="icon-pinterest"></i></a>
                </div>

            </div>

            <br><br><br><br><br>

        </div> <!-- /container full -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>       

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function (b, o, i, l, e, r) {
                b.GoogleAnalyticsObject = l;
                b[l] || (b[l] =
                        function () {
                            (b[l].q = b[l].q || []).push(arguments)
                        });
                b[l].l = +new Date;
                e = o.createElement(i);
                r = o.getElementsByTagName(i)[0];
                e.src = '//www.google-analytics.com/analytics.js';
                r.parentNode.insertBefore(e, r)
            }(window, document, 'script', 'ga'));
            ga('create', 'UA-XXXXX-X', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>
